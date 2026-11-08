(()=>{"use strict";
const stories=[
 {date:"8 نوفمبر 2026",time:"اليوم",title:"القوات الحكومية تعلن إحباط هجمات في الكمب شرقي تعز ومواجهات في محوري تعز وطور الباحة",source:"المصدر أونلاين",url:"https://almasdaronline.com/articles/353447"},
 {date:"8 نوفمبر 2026",time:"اليوم",title:"استمرار المواجهات في الجوف لليوم الثالث وتمشيط مواقع في سلسلة جبال الدحيظة وفق المركز الإعلامي للقوات المسلحة",source:"المصدر أونلاين",url:"https://almasdaronline.com/articles/353447"},
 {date:"8 نوفمبر 2026",time:"اليوم",title:"الجيش يعلن 875 عملية استهداف خلال الساعات الماضية؛ الأرقام حصيلة معلنة ومنسوبة للمتحدث العسكري",source:"المصدر أونلاين",url:"https://almasdaronline.com/articles/353447"},
 {date:"8 نوفمبر 2026",time:"اليوم",title:"إسقاط طائرة مسيّرة في جبهة ماس غرب رغوان بمحافظة مأرب وفق ما أوردته عكاظ",source:"عكاظ",url:"https://www.okaz.com.sa/article/1015156"},
 {date:"8 نوفمبر 2026",time:"اليوم",title:"تحذيرات من تفاقم أزمة الوقود والإمدادات الطبية في مستشفيات تعز وتهديد أقسام حيوية",source:"عكاظ",url:"https://www.okaz.com.sa/article/1015156"},
 {date:"8 نوفمبر 2026",time:"اليوم",title:"تدشين المرحلة الثانية من مشروع الوصول إلى التعليم في الريف لتأهيل 70 معلمة في لحج",source:"عدن الغد",url:"https://www.khlaasa.net/1526583"},
 {date:"8 نوفمبر 2026",time:"اليوم",title:"تطورات ميدانية متزامنة في مأرب والجوف وتعز ولحج ضمن عملية فجر اليمن وفق تقارير صحفية",source:"الشرق الأوسط",url:"https://english.aawsat.com/arab-world/5338802-fighting-yemen%E2%80%99s-al-jawf-and-marib-intensifies"},
 {date:"8 نوفمبر 2026",time:"اليوم",title:"المتحدث العسكري الحوثي يعلن تنفيذ عمليات؛ تبقى هذه مزاعم منسوبة إليه ولا تُعرض كوقائع مستقلة",source:"المصدر أونلاين",url:"https://almasdaronline.com/articles/353447"},
 {date:"تحديث مستمر",time:"شبكة أبو الأنوف",title:"الخبر من مصدره… والتحقق قبل النشر | تابعوا النشرة اليمنية اليومية والعدد الجامع 39–40",source:"شبكة أبو الأنوف الإعلامية",url:"./issue-2026-11-07-08-39-40.html"}
];
const css=`.aan-ticker{direction:rtl;display:flex;align-items:center;gap:12px;overflow:hidden;background:#071a29;color:#fff;border-bottom:3px solid #d7b56d;padding:8px 12px;font:bold 13px/1.8 Tahoma,Arial,sans-serif;position:relative;z-index:5}.aan-ticker-label{white-space:nowrap;color:#f4d68f;flex:0 0 auto}.aan-ticker-window{overflow:hidden;flex:1;min-width:0}.aan-ticker-track{display:flex;width:max-content;gap:34px;white-space:nowrap;animation:aanTickerRTL 105s linear infinite}.aan-ticker-item{direction:rtl;white-space:nowrap;color:#fff;text-decoration:none}.aan-ticker-item:hover{color:#f4d68f;text-decoration:underline}.aan-ticker-item b{color:#f4d68f;margin-inline:5px}.aan-ticker:hover .aan-ticker-track{animation-play-state:paused}@keyframes aanTickerRTL{from{transform:translateX(0)}to{transform:translateX(50%)}}@media(max-width:520px){.aan-ticker{font-size:11px;gap:8px;padding:7px}.aan-ticker-label{font-size:11px}.aan-ticker-track{animation-duration:90s}}@media(prefers-reduced-motion:reduce){.aan-ticker-track{animation:none;flex-wrap:wrap;white-space:normal}.aan-ticker-window{overflow:visible}}`;
const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);
if(document.querySelector('.aan-ticker'))return;
const bar=document.createElement('div');bar.className='aan-ticker';
const label=document.createElement('b');label.className='aan-ticker-label';label.textContent='آخر الأخبار | 8 نوفمبر 2026';
const win=document.createElement('div');win.className='aan-ticker-window';
const track=document.createElement('div');track.className='aan-ticker-track';
[...stories,...stories].forEach(s=>{const a=document.createElement('a');a.className='aan-ticker-item';a.href=s.url;a.target=s.url.startsWith('http')?'_blank':'_self';if(s.url.startsWith('http'))a.rel='noopener noreferrer';a.innerHTML=`<b>${s.date} — ${s.source}</b> ${s.title}`;track.appendChild(a)});
win.appendChild(track);bar.append(label,win);
const header=document.querySelector('header');if(header)header.insertAdjacentElement('afterend',bar);else document.body.insertBefore(bar,document.body.firstChild);
})();
