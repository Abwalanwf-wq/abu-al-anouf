(()=>{
 const headlines=[
  'تعز — تضارب الروايات بشأن استهداف سوق الحضارة في الوازعية، والمسؤولية لا تزال بحاجة إلى تحقيق مستقل',
  'تعز — مستجدات صبر والمسراخ وتداعيات المواجهات على السكان',
  'تقرير حقوقي: 66 جريمة وانتهاكاً خلال 73 ساعة وفق الحصيلة المتداولة في المواد الصحفية',
  'الجوف — إعلان تقدم للقوات الحكومية في جبهة الدحيضة ضمن عملية فجر اليمن، وفق المصدر المعلن',
  'لحج — مواجهات في الزريقة والمضاربة والمحاولة وكهبوب',
  'مأرب — هجوم في جبهة حلحلان ورغوان وفق التقارير الواردة',
  'تحركات أوروبية بشأن التطورات اليمنية والملف الإنساني',
  'توقعات بأمطار رعدية محتملة على سقطرى والسواحل الشرقية'
 ];
 const style=document.createElement('style');
 style.textContent=`.aan-ticker{direction:ltr;display:flex;align-items:center;gap:12px;overflow:hidden;background:#071a29;color:#fff;border-bottom:3px solid #d7b56d;padding:10px 14px;font: bold 14px/1.8 Tahoma,Arial,sans-serif}.aan-ticker-label{direction:rtl;white-space:nowrap;color:#f4d68f}.aan-ticker-window{overflow:hidden;flex:1;min-width:0}.aan-ticker-track{display:flex;width:max-content;gap:34px;white-space:nowrap;will-change:transform;animation:aanTickerLTR 65s linear infinite}.aan-ticker-track span{direction:rtl;white-space:nowrap}.aan-ticker:hover .aan-ticker-track{animation-play-state:paused}@keyframes aanTickerLTR{from{transform:translateX(-50%)}to{transform:translateX(0)}}@media(prefers-reduced-motion:reduce){.aan-ticker-track{animation:none;flex-wrap:wrap;white-space:normal}}`;
 document.head.appendChild(style);
 const ticker=document.createElement('div');ticker.className='aan-ticker';ticker.setAttribute('aria-label','الشريط الإخباري الموحد');
 const label=document.createElement('b');label.className='aan-ticker-label';label.textContent='آخر الأخبار';
 const windowEl=document.createElement('div');windowEl.className='aan-ticker-window';
 const track=document.createElement('div');track.className='aan-ticker-track';
 [...headlines,...headlines].forEach((item)=>{const s=document.createElement('span');s.textContent=item;track.appendChild(s)});
 windowEl.appendChild(track);ticker.append(label,windowEl);
 const header=document.querySelector('header'); if(header) header.insertAdjacentElement('afterend',ticker); else document.body.insertBefore(ticker,document.body.firstChild);
})();
