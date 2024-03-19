import{c as y,d as x,e as C}from"./chunk-FBNOFIK3.js";import"./chunk-WMEG6PAA.js";import{b as w}from"./chunk-NXUAZBTN.js";import{b as k,c as I}from"./chunk-DUXNBRQU.js";import{c as r,d as A,g as E,h as S,k as M}from"./chunk-422LGMYC.js";import{h,i as m}from"./chunk-WTBOK45U.js";import"./chunk-MCRJI3T3.js";import{f as p}from"./chunk-QVHMM4ZF.js";var L=":host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}:host::-webkit-scrollbar{display:none}:host .picker-item{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty,:host .picker-item[disabled]{cursor:default}:host .picker-item-empty,:host(:not([disabled])) .picker-item[disabled]{scroll-snap-align:none}:host([disabled]){overflow-y:hidden}:host .picker-item[disabled]{opacity:0.4}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}",_=L,T=":host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}:host::-webkit-scrollbar{display:none}:host .picker-item{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty,:host .picker-item[disabled]{cursor:default}:host .picker-item-empty,:host(:not([disabled])) .picker-item[disabled]{scroll-snap-align:none}:host([disabled]){overflow-y:hidden}:host .picker-item[disabled]{opacity:0.4}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}:host .picker-item-active{color:var(--ion-color-base)}",R=T,z=class{constructor(i){M(this,i),this.ionChange=S(this,"ionChange",7),this.isScrolling=!1,this.isColumnVisible=!1,this.canExitInputMode=!0,this.centerPickerItemInView=(e,t=!0,n=!0)=>{let{el:s,isColumnVisible:a}=this;if(a){let o=e.offsetTop-3*e.clientHeight+e.clientHeight/2;s.scrollTop!==o&&(this.canExitInputMode=n,s.scroll({top:o,left:0,behavior:t?"smooth":void 0}))}},this.setPickerItemActiveState=(e,t)=>{t?(e.classList.add(u),e.part.add(f)):(e.classList.remove(u),e.part.remove(f))},this.inputModeChange=e=>{if(!this.numericInput)return;let{useInputMode:t,inputModeColumn:n}=e.detail,s=n===void 0||n===this.el;if(!t||!s){this.setInputModeActive(!1);return}this.setInputModeActive(!0)},this.setInputModeActive=e=>{if(this.isScrolling){this.scrollEndCallback=()=>{this.isActive=e};return}this.isActive=e},this.initializeScrollListener=()=>{let e=k("ios"),{el:t}=this,n,s=this.activeItem,a=()=>{m(()=>{n&&(clearTimeout(n),n=void 0),this.isScrolling||(e&&y(),this.isScrolling=!0);let o=t.getBoundingClientRect(),c=o.x+o.width/2,d=o.y+o.height/2,l=t.shadowRoot.elementFromPoint(c,d);s!==null&&this.setPickerItemActiveState(s,!1),!(l===null||l.disabled)&&(l!==s&&(e&&x(),this.canExitInputMode&&this.exitInputMode()),s=l,this.setPickerItemActiveState(l,!0),n=setTimeout(()=>{this.isScrolling=!1,e&&C();let{scrollEndCallback:b}=this;b&&(b(),this.scrollEndCallback=void 0),this.canExitInputMode=!0;let v=l.getAttribute("data-index");if(v===null)return;let V=parseInt(v,10),g=this.items[V];g.value!==this.value&&this.setValue(g.value)},250))})};m(()=>{t.addEventListener("scroll",a),this.destroyScrollListener=()=>{t.removeEventListener("scroll",a)}})},this.exitInputMode=()=>{let{parentEl:e}=this;e!=null&&(e.exitInputMode(),this.el.classList.remove("picker-column-active"))},this.isActive=!1,this.disabled=!1,this.items=[],this.value=void 0,this.color="primary",this.numericInput=!1}valueChange(){this.isColumnVisible&&this.scrollActiveItemIntoView()}componentWillLoad(){let i=t=>{if(t[0].isIntersecting){let{activeItem:s,el:a}=this;this.isColumnVisible=!0;let o=h(a).querySelector(`.${u}`);o&&this.setPickerItemActiveState(o,!1),this.scrollActiveItemIntoView(),s&&this.setPickerItemActiveState(s,!0),this.initializeScrollListener()}else this.isColumnVisible=!1,this.destroyScrollListener&&(this.destroyScrollListener(),this.destroyScrollListener=void 0)};new IntersectionObserver(i,{threshold:.001}).observe(this.el);let e=this.parentEl=this.el.closest("ion-picker-internal");e!==null&&e.addEventListener("ionInputModeChange",t=>this.inputModeChange(t))}componentDidRender(){var i;let{activeItem:e,items:t,isColumnVisible:n,value:s}=this;n&&(e?this.scrollActiveItemIntoView():((i=t[0])===null||i===void 0?void 0:i.value)!==s&&this.setValue(t[0].value))}scrollActiveItemIntoView(){return p(this,null,function*(){let i=this.activeItem;i&&this.centerPickerItemInView(i,!1,!1)})}setValue(i){return p(this,null,function*(){let{items:e}=this;this.value=i;let t=e.find(n=>n.value===i&&n.disabled!==!0);t&&this.ionChange.emit(t)})}get activeItem(){let i=`.picker-item[data-value="${this.value}"]${this.disabled?"":":not([disabled])"}`;return h(this.el).querySelector(i)}render(){let{items:i,color:e,disabled:t,isActive:n,numericInput:s}=this,a=I(this);return r(A,{key:"d0e3818aa4ab06aefd988d1b42ae754244727b8f",exportparts:`${P}, ${f}`,disabled:t,tabindex:t?null:0,class:w(e,{[a]:!0,"picker-column-active":n,"picker-column-numeric-input":s})},r("div",{key:"ec3b16415db5f64e3fab37fda023560ebcdc9423",class:"picker-item picker-item-empty","aria-hidden":"true"},"\xA0"),r("div",{key:"40c78c9a1277807572d73e23048c2730cab88f5a",class:"picker-item picker-item-empty","aria-hidden":"true"},"\xA0"),r("div",{key:"c51fa817f6999356cf3568a46098e954936b45d5",class:"picker-item picker-item-empty","aria-hidden":"true"},"\xA0"),i.map((o,c)=>{let d=t||o.disabled||!1;return r("button",{tabindex:"-1",class:{"picker-item":!0},"data-value":o.value,"data-index":c,onClick:l=>{this.centerPickerItemInView(l.target,!0)},disabled:d,part:P},o.text)}),r("div",{key:"80a7461dfe571f46466219b05007b021711aed32",class:"picker-item picker-item-empty","aria-hidden":"true"},"\xA0"),r("div",{key:"fed82263295f58c51e2b753d0c06c7d71872b8a7",class:"picker-item picker-item-empty","aria-hidden":"true"},"\xA0"),r("div",{key:"e805dff4122cc4e5fb4d7dcb96054fee8ad3bd07",class:"picker-item picker-item-empty","aria-hidden":"true"},"\xA0"))}get el(){return E(this)}static get watchers(){return{value:["valueChange"]}}},u="picker-item-active",P="wheel-item",f="active";z.style={ios:_,md:R};export{z as ion_picker_column_internal};
