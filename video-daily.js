const selections = [{"id": "2UQzsLSsa_I", "title": "الإعلام رسالة ومسؤولية.. ولسنا مجرد ناقلين للأخبار 🇾🇪 | شبكة أبو الأنوف الإعلامية", "published": "2026-11-12"}, {"id": "_Doqc068wCI", "title": "ا🚨🔥 توقّف هنا… فهذه ليست مجرد كلمات عن تعز! 🇾🇪👀 شاهد المقطع حتى النهاية… فالمشهد يستحق أن يُرى.", "published": "2026-09-15"}, {"id": "5yfY5SbFZI8", "title": "من قلب اليمن  ومن وسط المعاناة ومن اجل الوعي والحقيقية والمسؤولية ... تنطلق شبكة أبوالأنوف الاعلامية", "published": "2026-11-12"}];
function displaySelection() {
  const localDay = Math.floor((Date.now() + 3*3600000)/86400000);
  const epoch = Date.UTC(2026,10,24)/86400000;
  const item = selections[((localDay-epoch)%selections.length+selections.length)%selections.length];
  const player = document.querySelector('[data-daily-player]');
  if (player.dataset.current === item.id) return;
  player.dataset.current = item.id;
  player.src = 'https://www.youtube.com/embed/'+item.id;
  document.querySelector('[data-daily-title]').textContent = item.title;
  document.querySelector('[data-daily-date]').textContent = 'من أرشيف القناة · '+item.published;
  document.querySelector('[data-daily-link]').href = 'https://www.youtube.com/watch?v='+item.id;
}
displaySelection();
setInterval(displaySelection, 60000);
