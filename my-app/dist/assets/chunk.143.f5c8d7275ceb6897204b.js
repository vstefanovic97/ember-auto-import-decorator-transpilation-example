var __ember_auto_import__;(()=>{var e={610:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>p})
const i=require("@glimmer/component")
var n=r.n(i),o=r(574)
const l=require("@ember/component")
var s,a=(0,require("@ember/template-factory").createTemplateFactory)({id:"ulfT0Ni8",block:'[[[11,"button"],[24,4,"button"],[4,[38,0],["click",[30,0,["bar"]]],null],[12],[1,"\\n hello world\\n"],[13]],[],false,["on"]]',moduleName:"/Users/vstefanovic/code/eai-repro/my-addon/my-addon/dist/components/Foo.js",isStrictMode:!1}),u=new WeakMap
class p extends(n()){constructor(...e){var t,r
super(...e),t=u,r={writable:!0,value:void dt7948.i(this,"router")},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t),t.set(this,r)}bar(){this.router.transitionTo("something")}}s=p,dt7948.f(s,"router",[o.inject]),dt7948.m(s,"bar",[action]),(0,l.setComponentTemplate)(a,p)},407:(e,t,r)=>{"use strict"
function i(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var i=r.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t,r,i){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}function o(e,t,r,i,n){var o={}
return Object.keys(i).forEach((function(e){o[e]=i[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,i){return i(e,t,r)||r}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}r.d(t,{_:()=>o,a:()=>n,b:()=>i})},814:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>d})
var i=r(407),n=r(574)
const o=require("@ember/component/helper")
var l=r.n(o)
const s=require("@ember/object/internals")
var a,u,p
let d=(a=(0,n.inject)("page-title"),u=class extends(l()){get tokenId(){return(0,s.guidFor)(this)}constructor(){super(...arguments),(0,i.a)(this,"tokens",p,this),this.tokens.push({id:this.tokenId})}compute(e,t){let r={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(r),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},p=(0,i._)(u.prototype,"tokens",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u)},986:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>v})
var i=r(407)
const n=require("@ember/application"),o=require("@ember/runloop")
var l=r(574),s=r.n(l)
const a=require("@ember/utils"),u=require("@ember/debug")
var p,d,c,h,f
let m="undefined"!=typeof FastBoot
const b="routeDidChange"
let v=(p=(0,l.inject)("router"),d=(0,l.inject)("-document"),c=class extends(s()){constructor(){super(...arguments),(0,i.a)(this,"router",h,this),(0,i.a)(this,"document",f,this),(0,i.b)(this,"tokens",[]),(0,i.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,i.b)(this,"scheduleTitleUpdate",(()=>{(0,o.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement()
let e=(0,n.getOwner)(this).resolveRegistration("config:environment")
e.pageTitle&&["separator","prepend","replace"].forEach((t=>{(0,a.isEmpty)(e.pageTitle[t])||(this._defaultConfig[t]=e.pageTitle[t])})),this.router.on(b,this.scheduleTitleUpdate)}applyTokenDefaults(e){let t=this._defaultConfig.separator,r=this._defaultConfig.prepend,i=this._defaultConfig.replace
null==e.separator&&(e.separator=t),null==e.prepend&&null!=r&&(e.prepend=r),null==e.replace&&null!=i&&(e.replace=i)}inheritFromPrevious(e){let t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){let t=this._findTokenById(e.id)
if(t){let r=this.tokens.indexOf(t),i=[...this.tokens],n=t.previous
return e.previous=n,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),i.splice(r,1,e),void(this.tokens=i)}let r=this.tokens.slice(-1)[0]
r&&(e.previous=r,r.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){let t=this._findTokenById(e),{next:r,previous:i}=t
r&&(r.previous=i),i&&(i.next=r),t.previous=t.next=null
let n=[...this.tokens]
n.splice(n.indexOf(t),1),this.tokens=n}get visibleTokens(){let e=this.tokens,t=e?e.length:0,r=[]
for(;t--;){let i=e[t]
if(i.replace){r.unshift(i)
break}r.unshift(i)}return r}get sortedTokens(){let e=this.visibleTokens,t=!0,r=[],i=[r],n=[]
return e.forEach((e=>{if(e.front)n.unshift(e)
else if(e.prepend){t&&(t=!1,r=[],i.push(r))
let n=r[0]
n&&((e={...e}).separator=n.separator),r.unshift(e)}else t||(t=!0,r=[],i.push(r)),r.push(e)})),n.concat(i.reduce(((e,t)=>e.concat(t)),[]))}toString(){let e=this.sortedTokens,t=[]
for(let r=0,i=e.length;r<i;r++){let n=e[r]
n.title&&(t.push(n.title),r+1<i&&t.push(n.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(b,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
m?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){m||(0,u.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find((t=>t.id===e))}updateFastbootTitle(e){if(!m)return
const t=this.document.head,r=t.childNodes
for(let o=0;o<r.length;o++){let e=r[o]
"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}let i=this.document.createElement("title"),n=this.document.createTextNode(e)
i.appendChild(n),t.appendChild(i)}titleDidUpdate(){}},h=(0,i._)(c.prototype,"router",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=(0,i._)(c.prototype,"document",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c)},574:e=>{"use strict"
e.exports=require("@ember/service")},191:(e,t,r)=>{var i,n
e.exports=(i=_eai_d,n=_eai_r,window.emberAutoImportDynamic=function(e){return 1===arguments.length?n("_eai_dyn_"+e):n("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return n("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},i("ember-page-title/helpers/page-title",["@ember/service"],(function(){return r(814)})),i("ember-page-title/services/page-title",["@ember/service"],(function(){return r(986)})),void i("my-addon/components/Foo",["@ember/service"],(function(){return r(610)})))},62:function(e,t){window._eai_r=require,window._eai_d=define}},t={}
function r(i){var n=t[i]
if(void 0!==n)return n.exports
var o=t[i]={exports:{}}
return e[i].call(o.exports,o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e
return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(62)
var i=r(191)
__ember_auto_import__=i})()
