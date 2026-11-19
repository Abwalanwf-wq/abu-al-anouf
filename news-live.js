(()=>{'use strict';
// إصلاح العدد 48: الأخبار المعتمدة تُعرض منذ فتح الصفحة، والتحديث لا يختلق أخبارًا.
const current=document.currentScript;
const root=new URL('.',current&&current.src?current.src:document.baseURI);
const data=new URL('news/published.json',root);
const target=document.querySelector('#live-newsroom');
let signature='';
const isSafe=u=>{try{let v=new URL(u,location.href);return /^(https?:)$/.test(v.protocol)?v.href:null;}catch(_){return null}};
const node=(tag,value,klass)=>{let e=document.createElement(tag);if(value!=null)e.textContent=value;if(klass)e.className=klass;return e};
const date=s=>{try{return new Intl.DateTimeFormat('ar-YE',{dateStyle:'medium',timeStyle:'short',timeZone:'Asia/Aden'}).format(new Date(s))}catch(_){return s||''}};
const isValid=e=>e&&e.status==='published'&&e.title&&e.source&&isSafe(e.url)&&['official','attributed','verified'].includes(e.verification);
const all=x=>(Array.isArray(x.items)?x.items:[]).filter(isValid).sort((a,b)=>Date.parse(b.published_at)-Date.parse(a.published_at));
const uniq=titles=>[...new Set(titles.map(x=>String(x||'').trim()).filter(Boolean))];
function prepareTicker(track,titles){
 const arr=uniq(titles).slice(0,20);if(!arr.length)return;
 let old=track.dataset.headlines||'';let fingerprint=JSON.stringify(arr);
 if(fingerprint===old)return;track.dataset.headlines=fingerprint;
 const cycle=node('div',null,'ticker-cycle');
 arr.forEach((title,i)=>{cycle.append(node('span',title));cycle.append(node('span','◆','tick-sep'));});
 const copy=cycle.cloneNode(true);copy.setAttribute('aria-hidden','true');
 const paused=track.style.animationPlayState==='paused';
 track.classList.remove('ticker-active');track.replaceChildren(cycle,copy);
 // جعل الأخبار مرئية في أول لحظة، ثم تحريك سلس بلا فراغات بين الدورات.
 const width=cycle.getBoundingClientRect().width;
 track.style.setProperty('--ticker-cycle-duration',Math.max(55,Math.ceil(width/65))+'s');
 track.classList.add('ticker-active');track.style.animationPlayState=paused?'paused':'running';
}
// العناوين المضمنة في العدد تبقى ظاهرة حتى عند انقطاع الاتصال أو فشل ملف JSON.
document.querySelectorAll('.ticker-shell .ticker-track').forEach(track=>{
 const titles=[...track.children].filter(x=>!x.classList.contains('tick-sep')).map(x=>x.textContent);
 if(titles.length)prepareTicker(track,titles);
});
function render(items,updated){if(!target)return;target.replaceChildren();
 const hdr=node('div',null,'live-header');hdr.append(node('h2','أحدث الأخبار المنشورة في الموقع'));
 hdr.append(node('span','آخر تحديث للمحتوى المنشور: '+date(updated),'live-updated'));target.append(hdr);
 const grid=node('div',null,'live-grid');for(const item of items.slice(0,target.dataset.all==='true'?50:7)){
  const card=node('article',null,'live-story');if(item.image){let pic=isSafe(item.image);if(pic){let im=node('img');im.src=pic;im.alt='صورة توضيحية: '+item.title;im.className='live-photo';im.loading='lazy';card.append(im);if(item.image_credit)card.append(node('small',item.image_credit,'live-photo-credit'));}}
  card.append(node('div',(item.category||'أخبار')+' • '+date(item.published_at),'live-source'));
  card.append(node('h3',item.title));if(item.summary)card.append(node('p',item.summary));
  card.append(node('div','المصدر: '+item.source,'live-source'));
  let a=node('a','التفاصيل في المصدر الأصلي');a.href=isSafe(item.url);a.target='_blank';a.rel='noopener noreferrer';a.className='live-news-link';card.append(a);grid.append(card);
 }target.append(grid);
 if(target.dataset.all!=='true'){let a=node('a','فتح الواجهة الإخبارية كاملة');a.href=new URL('news.html',root).href;a.className='live-news-link';target.append(a);}}
async function refresh(){try{
 const res=await fetch(data.href+'?v='+Date.now(),{cache:'no-store'});if(!res.ok)throw Error('HTTP '+res.status);
 const doc=await res.json();const sig=JSON.stringify(doc);if(sig===signature)return;
 const items=all(doc);signature=sig;
 if(items.length){
  // العناوين فقط، بلا تكرار اسم المصدر وبلا إعادة تهيئة إذا لم يتغير المحتوى.
  document.querySelectorAll('.ticker-shell .ticker-track').forEach(track=>prepareTicker(track,items.map(x=>x.title)));
 }render(items,doc.updated_at);
 }catch(_){if(target&&!target.children.length)target.append(node('p','تعذر جلب الأخبار المنشورة؛ ما زالت عناوين العدد ظاهرة في الشريط.','live-error'));}}
document.querySelectorAll('.ticker-shell .ticker-pause').forEach(btn=>{
 const track=btn.closest('.ticker-shell')?.querySelector('.ticker-track');if(!track)return;
 btn.addEventListener('click',()=>{const paused=track.style.animationPlayState==='paused';
 track.style.animationPlayState=paused?'running':'paused';btn.textContent=paused?'إيقاف ⏸':'تشغيل ▶';
 btn.setAttribute('aria-pressed',String(!paused));btn.setAttribute('aria-label',paused?'إيقاف شريط الأخبار':'تشغيل شريط الأخبار');});
});
refresh();window.setInterval(refresh,90000);
})();
