import{W as e,S as n,P as t,B as o,M as s,a,D as i}from"./vendor.7ea186ad.js";const r=document.querySelector("#app"),d=((r=800,d=600)=>{const c=new e;c.setSize(r,d);const p=new n,m=new t(45,r/d,1,1e4);m.position.set(0,0,1e3);const w=new o(250,250,250),l=new s({color:16711680}),u=new a(w,l);u.position.z=-5,p.add(u);const h=new i(16777215);h.position.set(1,1,1),p.add(h);const S=()=>{requestAnimationFrame(S),u.rotation.x+=.05,u.rotation.y+=.05,c.render(p,m)};return S(),c.domElement})(r.clientWidth,r.clientHeight);r.appendChild(d);
