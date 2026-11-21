#!/usr/bin/env python3
"""Gather recent source-attributed headlines using Google News RSS search.
This is discovery, not independent fact-checking or a direct publisher API.
"""
import datetime as dt, email.utils, json, pathlib, re, urllib.parse, urllib.request, xml.etree.ElementTree as ET
ROOT=pathlib.Path(__file__).resolve().parents[1]
SOURCES={
 'العاصمة أونلاين':'al-aseema.com',
 'سهيل':'suhail.net',
 'الجزيرة':'aljazeera.net',
 'العربية':'alarabiya.net',
 'قناة اليمن':'yementv.tv',
 'قناة عدن':'aden-tv.com',
 'يمن مونيتور':'yemenmonitor.com',
 'مأرب برس':'marebpress.net',
}
# Search results are indexed/aggregated by Google News and may not cover all publishers.
now=dt.datetime.now(dt.timezone.utc); stories=[]; seen=set()
for name,domain in SOURCES.items():
 q=urllib.parse.quote(f'site:{domain} اليمن when:2d')
 url=f'https://news.google.com/rss/search?q={q}&hl=ar&gl=YE&ceid=YE:ar'
 try:
  req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0 (compatible; NewsFeedBot/1.0)'})
  with urllib.request.urlopen(req,timeout=18) as r: raw=r.read(1_500_000)
  root=ET.fromstring(raw)
  for entry in root.findall('.//channel/item')[:15]:
   title=' '.join((entry.findtext('title') or '').split())
   link=(entry.findtext('link') or '').strip()
   stamp=entry.findtext('pubDate') or ''
   if not title or not link or not stamp: continue
   published=email.utils.parsedate_to_datetime(stamp).astimezone(dt.timezone.utc)
   if published>now+dt.timedelta(minutes=5) or now-published>dt.timedelta(hours=48):continue
   key=re.sub(r'\W+','',title.casefold())[:110]
   if key in seen:continue
   seen.add(key)
   stories.append({'title':title,'url':link,'source':name+' (عبر أخبار Google)', 'published_at':published.isoformat().replace('+00:00','Z'),'status':'published','verification':'attributed','category':'مستجدات'})
 except Exception as e: print(f'Feed unavailable: {name}: {e}')
stories.sort(key=lambda x:x['published_at'],reverse=True)
folder=ROOT/'news';folder.mkdir(exist_ok=True)
published=folder/'published.json'
# Preserve last successful items if all feeds fail, but never label stale items as current.
if stories:
 published.write_text(json.dumps({'updated_at':now.isoformat().replace('+00:00','Z'),'items':stories[:50]},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
else:print('No fresh items fetched; keeping prior published.json unchanged')
# Breaking news is deliberately NOT inferred from ordinary RSS titles.
# breaking.json is maintained separately and requires editorial approval.
print(f'Fresh source-attributed items: {len(stories)}')
