const navToggle=document.getElementById("navToggle");
const nav=document.getElementById("nav");
navToggle.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const progress=document.getElementById("scrollProgress");
window.addEventListener("scroll",()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(window.scrollY/Math.max(h,1))*100+"%";
});
document.getElementById("year").textContent=new Date().getFullYear();
const sections=[...document.querySelectorAll("main section[id]")];
const links=[...document.querySelectorAll(".nav a")];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+entry.target.id));
    }
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>observer.observe(s));
