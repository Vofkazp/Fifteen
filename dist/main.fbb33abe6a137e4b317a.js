(()=>{"use strict";class t{constructor(t,e){this.value=t,this.position=e,this.element=this.createElement()}createElement(){const t=document.getElementById("app"),e=document.createElement("div");return e.classList.add("chip"),e.style.cssText=`--x: ${this.position.x}; --y: ${this.position.y}`,e.innerHTML=this.value,t.appendChild(e),e}changePosition(t){this.position=t,this.moveElement()}moveElement(){this.element.style.cssText=`--x: ${this.position.x}; --y: ${this.position.y}`}}const e=[];function o(){const t=Math.floor(Math.random()*e.length),o=e[t];return e.splice(t,1),o}const s=document.getElementById("app"),n=new class{constructor(){this.board=Array.from({length:4},(()=>Array.from({length:4},(()=>0))))}getBoard(){return this.board}moveElement(t,e){const o=[{dx:1,dy:0},{dx:0,dy:1},{dx:-1,dy:0},{dx:0,dy:-1}];for(const{dx:s,dy:n}of o){const o=t+s,i=e+n;if(this.isValidPosition(o,i)&&0===this.board[o][i])return this.board[o][i]=this.board[t][e],this.board[t][e]=0,{x:o,y:i}}return null}isValidPosition(t,e){return t>=0&&t<4&&e>=0&&e<4}},i=n.getBoard();!function(s){s.forEach(((t,o)=>{t.forEach(((t,s)=>{e.push({x:o,y:s})}))}));for(let e=1;e<=15;e++){const{x:n,y:i}=o();s[n][i]=new t(e,{x:n,y:i})}}(i),s.addEventListener("click",(t=>{const e=event.target;if(!e.classList.contains("chip"))return;const o=+getComputedStyle(e).getPropertyValue("--x"),s=+getComputedStyle(e).getPropertyValue("--y"),r=n.moveElement(o,s);r&&i[r.x][r.y].changePosition(r)}))})();