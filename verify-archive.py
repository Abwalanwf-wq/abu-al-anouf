"""Run python verify-archive.py from a site checkout before publishing."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

root = Path(__file__).resolve().parent
errors = []
images = set()

class PageLinks(HTMLParser):
    def __init__(self, page):
        super().__init__()
        self.page = page

    def handle_starttag(self, tag, attributes):
        for key, value in attributes:
            if not value or key not in {"src", "href", "poster", "data"}:
                continue
            if key == "data" and tag != "object":
                continue
            url = urlsplit(value)
            path = unquote(url.path)
            if tag == "img" and key == "src":
                if url.scheme or url.netloc or "/" in path.removeprefix("./"):
                    errors.append(f"{self.page.name}: image must be in site root: {value[:100]}")
                    continue
                images.add(path.removeprefix("./"))
            if url.scheme or url.netloc or not path:
                continue
            target = root / path
            if target.is_dir():
                target = target / "index.html"
            if not target.is_file():
                errors.append(f"{self.page.name}: missing {key}: {value}")

pages = sorted(root.glob("*.html"))
for page in pages:
    PageLinks(page).feed(page.read_text(encoding="utf-8"))
print(f"{len(pages)} HTML pages, {len(images)} root images, {len(errors)} errors")
for error in errors:
    print(error)
raise SystemExit(bool(errors))
