const f=(()=>{const d=document,z='beforebegin',o='beforeend',m='afterbegin',n='afterend',r='isFemtoJS',a=function(c){if(typeof c==='string'){const t=/^<(\w+)>$/.exec(c);if(t!==null){return[d.createElement(t[1])]}else{return[...d.querySelectorAll(c)]}}else if(c instanceof HTMLElement){return[c]}else if(Array.isArray(c)){const e=[];c.forEach(i=>e.push(...a(i)));return e}else if(r in c){return c.sel()}throw TypeError('Expected string | HTMLElement | Array | femtoJS, got '+typeof c)},$=function(...c){let f=a(c);let x=f.forEach.bind(f);let y=(s)=>function(e){x((j,i)=>i===0?e instanceof HTMLElement?e.insertAdjacentElement(s,j):e.sel()[0].insertAdjacentElement(s,j):f[0].insertAdjacentElement(n,j));return this};let k=(s)=>function(u){if(typeof u!=='string'){if(u instanceof HTMLElement){f[0].insertAdjacentElement(s,u)}else if(r in u){const o=u.sel();f[0].insertAdjacentElement(s,o[0]);for(let i=1;i<o.length;i++){o[0].insertAdjacentElement(n,o[i])}}}else{f[0].insertAdjacentHTML(s,u)}return this};return{on:function(t,f){x(i=>i.addEventListener(t,f));return this},off:function(t,f){x(i=>i.removeEventListener(t,f));return this},css:function(s){x(i=>i.style.cssText+=s);return this},html:function(h){x(i=>i.innerHTML=h);return this},text:function(t){x(i=>i.innerText=t);return this},addClass:function(t){x(i=>i.classList.add(t));return this},toggleClass:function(t){x(i=i.classList.toggle(t));return this},removeClass:function(t){x(i=>i.classList.remove(t));return this},empty:function(){x(i=>i.innerHTML='');return this},attr:function(k,v){x(i=>i.setAttribute(k,v));return this},removeAttr:function(k){x(i=>i.removeAttribute(k));return this},parent:function(){x((e,i)=>{f[i]=e.parentNode});return this},remove:function(){x(i=>i.remove());return this},before:k(z),after:k(n),first:k(m),last:k(o),insertBefore:y(z),insertAfter:y(n),insertFirst:y(m),insertLast:y(o),prepend:k(m),append:k(o),getAttr:v=>f[0].getAttribute(v),offset:()=>f[0].getBoundingClientRect(),sel:()=>f,isFemtoJS:!0}};$.fragment=()=>$(d.createDocumentFragment());return $});if(typeof module==='object'&&module.exports){module.exports=f()}else if(typeof define==='function'&&define.amd){const i=func();define('femtoJS',[],()=>i)}else{window.$=f()}