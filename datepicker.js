(function(){const e=document.createElement("template");e.innerHTML='\n<!-- Style Definition -->\n<style>\n#container {\ndisplay: inline-block;\nfont-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;\nborder: none;\nfont-size: 0;\n}\n</style>\n\n<!-- Layout Definition -->\n<div id="container">\n<picker-arrow id="al"></picker-arrow>\n<picker-date id="1"></picker-date>\n<picker-date id="2"></picker-date>\n<picker-date id="3"></picker-date>\n<picker-date id="4"></picker-date>\n<picker-date id="5"></picker-date>\n<picker-arrow id="ar"></picker-arrow>\n</div>',customElements.define("date-picker",class extends HTMLElement{constructor(){super(),this.loadDependancies()}loadDependancies(){const e=["datepicker-arrow","datepicker-date"],n=document.head.querySelector("script[src$='datepicker.js']").src,t=n.substring(0,n.indexOf("datepicker.js"));e.forEach((e,n,i)=>{i[n]=`${t}${e}.js`}),this.loadNextDependancy(e)}loadNextDependancy(e){if(!e.length)return void console.error("List of dependencies missing!");const n=e.shift(),t={src:`${n}`,onerror:()=>{console.warn(`script load error: ${n}`)}};t.onload=e.length?()=>this.loadNextDependancy(e):()=>this.buildComp(),document.head.append(Object.assign(document.createElement("script"),t))}buildComp(){this.attachShadow({mode:"open"}).append(e.content.cloneNode(!0));const n=new CustomEvent("changeWeek",{detail:{change:-1}}),t=new CustomEvent("changeWeek",{detail:{change:1}}),i=this.shadowRoot.querySelector("#container"),a=this.shadowRoot.querySelector("#al"),r=this.shadowRoot.querySelector("#ar");a.addEventListener("click",()=>{i.dispatchEvent(n)}),r.addEventListener("click",()=>{i.dispatchEvent(t)})}})})();