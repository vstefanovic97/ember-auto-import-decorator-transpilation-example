"use strict"
define("my-app/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("my-app/app",["exports","@ember/application","ember-resolver","ember-load-initializers","my-app/config/environment"],(function(e,t,r,n,a){function i(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class o extends t.default{constructor(...e){super(...e),i(this,"modulePrefix",a.default.modulePrefix),i(this,"podModulePrefix",a.default.podModulePrefix),i(this,"Resolver",r.default)}}e.default=o,(0,n.default)(o,a.default.modulePrefix)})),define("my-app/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("my-app/components/Bar",["exports","@ember/component","@ember/component/template-only","@ember/template-factory"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const a=(0,n.createTemplateFactory)({id:"lIVvglJW",block:'[[[8,[39,0],null,null,null]],[],false,["foo"]]',moduleName:"my-app/components/Bar.hbs",isStrictMode:!1})
e.default=(0,t.setComponentTemplate)(a,(0,r.default)())})),define("my-app/components/Foo",["exports","my-addon/components/Foo"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("my-app/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("my-app/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("my-app/helpers/app-version",["exports","@ember/component/helper","my-app/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r,n){function a(e,t={}){const a=r.default.APP.version
let i=t.versionOnly||t.hideSha,o=t.shaOnly||t.hideVersion,l=null
return i&&(t.showExtended&&(l=a.match(n.versionExtendedRegExp)),l||(l=a.match(n.versionRegExp))),o&&(l=a.match(n.shaRegExp)),l?l[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=a,e.default=void 0
e.default=(0,t.helper)(a)})),define("my-app/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("my-app/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=t.default})),define("my-app/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=t.default})),define("my-app/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","my-app/config/environment"],(function(e,t,r){let n,a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,a=r.default.APP.version)
e.default={name:"App Version",initialize:(0,t.default)(n,a)}})),define("my-app/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-data",initialize:r.default}})),define("my-app/instance-initializers/ember-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-data",initialize(){}}})),define("my-app/router",["exports","@ember/routing/router","my-app/config/environment"],(function(e,t,r){function n(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class a extends t.default{constructor(...e){super(...e),n(this,"location",r.default.locationType),n(this,"rootURL",r.default.rootURL)}}e.default=a,a.map((function(){}))})),define("my-app/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("my-app/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("my-app/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("my-app/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("my-app/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("my-app/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.createTemplateFactory)({id:"ikDbR0My",block:'[[[1,[28,[35,0],["MyApp"],null]],[1,"\\n\\n"],[8,[39,1],null,null,null],[1,"\\n"],[1,"\\n"],[46,[28,[37,3],null,null],null,null,null]],[],false,["page-title","welcome-page","component","-outlet"]]',moduleName:"my-app/templates/application.hbs",isStrictMode:!1})})),define("my-app/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("my-app/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("my-app/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("my-app/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("my-app/config/environment",[],(function(){try{var e="my-app/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("my-app/app").default.create({name:"my-app",version:"0.0.0"})
