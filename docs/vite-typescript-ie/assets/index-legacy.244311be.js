!function(){var t=document.createElement("style");t.innerHTML="body{margin:0;margin:0;padding:30px 10%}*{box-sizing:border-box}#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}h1{font-size:24px;text-align:left}.info{font-size:13px;padding:10px 0 40px 0;text-align:left}#sample{border:2px solid #2c3e50;border-radius:4px;max-width:600px;margin:auto}#todoInput{display:flex;padding:8px;justify-content:space-around;background-color:#2c3e50}#todoInput input{width:calc(100% - 120px);height:28px;padding:4px;font-size:16px;border:none;border-radius:2px}#todoInput button{width:100px;height:29px;border:2px solid #fff;border-radius:3px;background-color:transparent;color:#fff;font-weight:700}#todoList{margin:0;display:flex;flex-direction:column;gap:4px;padding:2px}#todoList li{display:flex;align-items:center;padding:0 12px}#todoList li p{width:calc(100% - 100px);font-size:18px;text-align:left}#todoList li button{width:100px;height:28px;border:none;background-color:#e26172;color:#fff;font-weight:700;border-radius:4px}",document.head.appendChild(t),System.register(["./vendor-legacy.05de27ae.js"],(function(){"use strict";var t;return{setters:[function(n){t=n.$}],execute:function(){var n=0,i=function t(i){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.id="todo"+n,this.text=i,n++},o=[],e=function(n){var e=new i(n);o.push(e);var a=t("#todoList"),d=function(n){return t('\n    <li id="'.concat(n.id,'">\n      <p>').concat(n.text,"</p>\n      <button>削除</button>\n    </li>\n  "))}(e);return d.find("button").on("click",(function(){r(e.id)})),a.append(d),e.id},r=function(n){var i=o.findIndex((function(t){return t.id===n}));-1!==i&&o.splice(i,1),t("#"+n).remove()},a=t("#itemInput");t("#addButton").on("click",(function(){var t=a.val();t&&"string"==typeof t&&(e(t),a.val(""))})),e("買い物"),e("部屋の掃除"),e("Vite入門")}}}))}();