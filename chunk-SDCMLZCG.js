import{q as u,r as b}from"./chunk-WTBOK45U.js";import{b as s}from"./chunk-MCRJI3T3.js";import"./chunk-QVHMM4ZF.js";var F=o=>{if(s===void 0)return;let i=-E*10,a=0,e,p,c,I=o.getBoolean("animated",!0)&&o.getBoolean("rippleEffect",!0),f=new WeakMap,_=t=>{i=u(t),T(t)},m=t=>{i=u(t),h(t)},M=t=>{if(t.button===2)return;let n=u(t)-E;i<n&&T(t)},k=t=>{let n=u(t)-E;i<n&&h(t)},v=()=>{c&&clearTimeout(c),c=void 0,e&&(D(!1),e=void 0)},T=t=>{e||L(y(t),t)},h=t=>{L(void 0,t)},L=(t,n)=>{if(t&&t===e)return;c&&clearTimeout(c),c=void 0;let{x:d,y:r}=b(n);if(e){if(f.has(e))throw new Error("internal error");e.classList.contains(l)||A(e,d,r),D(!0)}if(t){let R=f.get(t);R&&(clearTimeout(R),f.delete(t)),t.classList.remove(l);let S=()=>{A(t,d,r),c=void 0};g(t)?S():c=setTimeout(S,q)}e=t},A=(t,n,d)=>{if(a=Date.now(),t.classList.add(l),!I)return;let r=U(t);r!==null&&(w(),p=r.addRipple(n,d))},w=()=>{p!==void 0&&(p.then(t=>t()),p=void 0)},D=t=>{w();let n=e;if(!n)return;let d=C-Date.now()+a;if(t&&d>0&&!g(n)){let r=setTimeout(()=>{n.classList.remove(l),f.delete(n)},C);f.set(n,r)}else n.classList.remove(l)};s.addEventListener("ionGestureCaptured",v),s.addEventListener("touchstart",_,!0),s.addEventListener("touchcancel",m,!0),s.addEventListener("touchend",m,!0),s.addEventListener("pointercancel",v,!0),s.addEventListener("mousedown",M,!0),s.addEventListener("mouseup",k,!0)},y=o=>{if(o.composedPath!==void 0){let i=o.composedPath();for(let a=0;a<i.length-2;a++){let e=i[a];if(!(e instanceof ShadowRoot)&&e.classList.contains("ion-activatable"))return e}}else return o.target.closest(".ion-activatable")},g=o=>o.classList.contains("ion-activatable-instant"),U=o=>{if(o.shadowRoot){let i=o.shadowRoot.querySelector("ion-ripple-effect");if(i)return i}return o.querySelector("ion-ripple-effect")},l="ion-activated",q=100,C=150,E=2500;export{F as startTapClick};
