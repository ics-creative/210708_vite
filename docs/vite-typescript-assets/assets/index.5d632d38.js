(()=>{const e=document.querySelector(".sample1 .addIconButton"),n=document.querySelector(".sample1 .icons");null==e||e.addEventListener("click",(()=>{const e=Math.random()>.5?"./assets/icon_cat.f2ae138d.png":"./assets/icon_dog.bf1d1ff5.png",t=new Image;t.src=e,t.width=128,t.height=128,null==n||n.appendChild(t)}))})(),(()=>{const e=document.querySelector(".sample2 .rankSelect"),n=document.querySelector(".sample2 .preview");null==e||e.addEventListener("change",(()=>{if(!n)return;const t=e.value;t&&(n.style.backgroundImage=`url(${t}.png)`)}))})();
