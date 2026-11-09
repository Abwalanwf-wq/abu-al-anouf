(()=>{"use strict";
const stories=[
{title:"تطورات ميدانية متزامنة في الجوف ومأرب وتعز ولحج",url:"./edition-2026-11-09-41.html#story1"},
{title:"القوات المسلحة تعلن حصيلة عملياتها ضمن عملية فجر اليمن، والأرقام منسوبة إلى بيانها",url:"./edition-2026-11-09-41.html#story1"},
{title:"تقدم ميداني معلن في جبال حويشيان والدحيضة بمحافظة الجوف",url:"./edition-2026-11-09-41.html#story2"},
{title:"تطورات في جبهتي كهبوب والمقاطرة بمحافظة لحج",url:"./edition-2026-11-09-41.html#story3"},
{title:"إصابة تسعة مدنيين في مناطق متفرقة بمحافظة تعز وفق وكالة سبأ",url:"./edition-2026-11-09-41.html#story4"},
{title:"حملة تطعيم تستهدف نحو مليون طفل ضد الحصبة والحصبة الألمانية",url:"./edition-2026-11-09-41.html#story5"},
{title:"تحرك أممي وعُماني لبحث خفض التصعيد واستئناف المسار السياسي",url:"./edition-2026-11-09-41.html#story6"},
{title:"نقابة الصحفيين تطالب بالتحقيق في مقتل المصور عبدالرحمن الحوري",url:"./edition-2026-11-09-41.html#story7"}
];
const css=`.aan-ticker{direction:rtl;display:flex;align-items:center;gap:12px;overflow:hidden;background:#071a29;color:#fff;border-bottom:3px solid #d7b56d;padding:8px 12px;font:bold 13px/1.8 Tahoma,Arial,sans-serif;position:relative;z-index:5}.aan-ticker-label{white-space:nowrap;color:#f4d68f;flex:0 0 auto}.aan-ticker-window{overflow:hidden;flex:1;min-width:0}.aan-ticker-track{display:flex;width:max-content;gap:34px;white-space:nowrap;animation:aanTickerRTL 105s linear infinite}.aan-ticker-item{direction:rtl;white-space:nowrap;color:#fff;text-decoration:none}.aan-ticker-item:hover{color:#f4d68f;text-decoration:underline}.aan-ticker-item b{color:#f4d68f;margin-inline:5px}.aan-ticker:hover .aan-ticker-track{animation-play-state:paused}@keyframes aanTickerRTL{from{transform:translateX(0)}to{transform:translateX(50%)}}@media(max-width:520px){.aan-ticker{font-size:11px;gap:8px;padding:7px}.aan-ticker-label{font-size:11px}.aan-ticker-track{animation-duration:90s}}@media(prefers-reduced-motion:reduce){.aan-ticker-track{animation:none;flex-wrap:wrap;white-space:normal}.aan-ticker-window{overflow:visible}}`;
const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);if(document.querySelector('.aan-ticker'))return;
const bar=document.createElement('div');bar.className='aan-ticker';const label=document.createElement('b');label.className='aan-ticker-label';label.textContent='آخر الأخبار | الاثنين 9 نوفمبر 2026';const win=document.createElement('div');win.className='aan-ticker-window';const track=document.createElement('div');track.className='aan-ticker-track';
[...stories,...stories].forEach(s=>{const a=document.createElement('a');a.className='aan-ticker-item';a.href=s.url;a.innerHTML='<b>•</b> '+s.title;track.appendChild(a)});win.appendChild(track);bar.append(label,win);const header=document.querySelector('header');if(header)header.insertAdjacentElement('afterend',bar);else document.body.insertBefore(bar,document.body.firstChild);})();
