(self.webpackChunkshell=self.webpackChunkshell||[]).push([[892],{892:(Re,G,d)=>{d.r(G);var l=d(25),s=d(230);class U extends l.\u0275DomAdapter{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class E extends U{static makeCurrent(){(0,l.\u0275setRootDomAdapter)(new E)}onAndCancel(t,e,r){return t.addEventListener(e,r,!1),()=>{t.removeEventListener(e,r,!1)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,e){return(e=e||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return"window"===e?window:"document"===e?t:"body"===e?t.body:null}getBaseHref(t){const e=function B(){return m=m||document.querySelector("base"),m?m.getAttribute("href"):null}();return null==e?null:function V(n){h=h||document.createElement("a"),h.setAttribute("href",n);const t=h.pathname;return"/"===t.charAt(0)?t:`/${t}`}(e)}resetBaseElement(){m=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return(0,l.\u0275parseCookieValue)(document.cookie,t)}}let h,m=null;const _=new s.InjectionToken("TRANSITION_ID"),$=[{provide:s.APP_INITIALIZER,useFactory:function K(n,t,e){return()=>{e.get(s.ApplicationInitStatus).donePromise.then(()=>{const r=(0,l.\u0275getDOM)(),o=t.querySelectorAll(`style[ng-transition="${n}"]`);for(let i=0;i<o.length;i++)r.remove(o[i])})}},deps:[_,l.DOCUMENT,s.Injector],multi:!0}];class S{static init(){(0,s.setTestabilityGetter)(new S)}addToWindow(t){s.\u0275global.getAngularTestability=(r,o=!0)=>{const i=t.findTestabilityInTree(r,o);if(null==i)throw new Error("Could not find testability for element.");return i},s.\u0275global.getAllAngularTestabilities=()=>t.getAllTestabilities(),s.\u0275global.getAllAngularRootElements=()=>t.getAllRootElements(),s.\u0275global.frameworkStabilizers||(s.\u0275global.frameworkStabilizers=[]),s.\u0275global.frameworkStabilizers.push(r=>{const o=s.\u0275global.getAllAngularTestabilities();let i=o.length,a=!1;const u=function(c){a=a||c,i--,0==i&&r(a)};o.forEach(function(c){c.whenStable(u)})})}findTestabilityInTree(t,e,r){return null==e?null:t.getTestability(e)??(r?(0,l.\u0275getDOM)().isShadowRoot(e)?this.findTestabilityInTree(t,e.host,!0):this.findTestabilityInTree(t,e.parentElement,!0):null)}}let Z=(()=>{class n{build(){return new XMLHttpRequest}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const g=new s.InjectionToken("EventManagerPlugins");let y=(()=>{class n{constructor(e,r){this._zone=r,this._eventNameToPlugin=new Map,e.forEach(o=>o.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,r,o){return this._findPluginFor(r).addEventListener(e,r,o)}addGlobalEventListener(e,r,o){return this._findPluginFor(r).addGlobalEventListener(e,r,o)}getZone(){return this._zone}_findPluginFor(e){const r=this._eventNameToPlugin.get(e);if(r)return r;const o=this._plugins;for(let i=0;i<o.length;i++){const a=o[i];if(a.supports(e))return this._eventNameToPlugin.set(e,a),a}throw new Error(`No event manager plugin found for event ${e}`)}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(g),s.\u0275\u0275inject(s.NgZone))},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class b{constructor(t){this._doc=t}addGlobalEventListener(t,e,r){const o=(0,l.\u0275getDOM)().getGlobalEventTarget(this._doc,t);if(!o)throw new Error(`Unsupported event target ${o} for event ${e}`);return this.addEventListener(o,e,r)}}let N=(()=>{class n{constructor(){this._stylesSet=new Set}addStyles(e){const r=new Set;e.forEach(o=>{this._stylesSet.has(o)||(this._stylesSet.add(o),r.add(o))}),this.onStylesAdded(r)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})(),p=(()=>{class n extends N{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,r,o){e.forEach(i=>{const a=this._doc.createElement("style");a.textContent=i,o.push(r.appendChild(a))})}addHost(e){const r=[];this._addStylesToHost(this._stylesSet,e,r),this._hostNodes.set(e,r)}removeHost(e){const r=this._hostNodes.get(e);r&&r.forEach(R),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((r,o)=>{this._addStylesToHost(e,o,r)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(R))}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function R(n){(0,l.\u0275getDOM)().remove(n)}const M={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},w=/%COMP%/g,O="%COMP%",W=`_nghost-${O}`,X=`_ngcontent-${O}`;function v(n,t,e){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?v(n,o,e):(o=o.replace(w,n),e.push(o))}return e}function H(n){return t=>{if("__ngUnwrap__"===t)return n;!1===n(t)&&(t.preventDefault(),t.returnValue=!1)}}let T=(()=>{class n{constructor(e,r,o){this.eventManager=e,this.sharedStylesHost=r,this.appId=o,this.rendererByCompId=new Map,this.defaultRenderer=new D(e)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;switch(r.encapsulation){case s.ViewEncapsulation.Emulated:{let o=this.rendererByCompId.get(r.id);return o||(o=new Q(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,o)),o.applyToHost(e),o}case 1:case s.ViewEncapsulation.ShadowDom:return new ee(this.eventManager,this.sharedStylesHost,e,r);default:if(!this.rendererByCompId.has(r.id)){const o=v(r.id,r.styles,[]);this.sharedStylesHost.addStyles(o),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(y),s.\u0275\u0275inject(p),s.\u0275\u0275inject(s.APP_ID))},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class D{constructor(t){this.eventManager=t,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(t,e){return e?document.createElementNS(M[e]||e,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,e){t.appendChild(e)}insertBefore(t,e,r){t&&t.insertBefore(e,r)}removeChild(t,e){t&&t.removeChild(e)}selectRootElement(t,e){let r="string"==typeof t?document.querySelector(t):t;if(!r)throw new Error(`The selector "${t}" did not match any elements`);return e||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,r,o){if(o){e=o+":"+e;const i=M[o];i?t.setAttributeNS(i,e,r):t.setAttribute(e,r)}else t.setAttribute(e,r)}removeAttribute(t,e,r){if(r){const o=M[r];o?t.removeAttributeNS(o,e):t.removeAttribute(`${r}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,r,o){o&(s.RendererStyleFlags2.DashCase|s.RendererStyleFlags2.Important)?t.style.setProperty(e,r,o&s.RendererStyleFlags2.Important?"important":""):t.style[e]=r}removeStyle(t,e,r){r&s.RendererStyleFlags2.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,r){t[e]=r}setValue(t,e){t.nodeValue=e}listen(t,e,r){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,e,H(r)):this.eventManager.addEventListener(t,e,H(r))}}class Q extends D{constructor(t,e,r,o){super(t),this.component=r;const i=v(o+"-"+r.id,r.styles,[]);e.addStyles(i),this.contentAttr=function J(n){return X.replace(w,n)}(o+"-"+r.id),this.hostAttr=function Y(n){return W.replace(w,n)}(o+"-"+r.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,e){const r=super.createElement(t,e);return super.setAttribute(r,this.contentAttr,""),r}}class ee extends D{constructor(t,e,r,o){super(t),this.sharedStylesHost=e,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const i=v(o.id,o.styles,[]);for(let a=0;a<i.length;a++){const u=document.createElement("style");u.textContent=i[a],this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,r){return super.insertBefore(this.nodeOrShadowRoot(t),e,r)}removeChild(t,e){return super.removeChild(this.nodeOrShadowRoot(t),e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}let te=(()=>{class n extends b{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,o){return e.addEventListener(r,o,!1),()=>this.removeEventListener(e,r,o)}removeEventListener(e,r,o){return e.removeEventListener(r,o)}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const P=["alt","control","meta","shift"],re={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},L={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},oe={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};let se=(()=>{class n extends b{constructor(e){super(e)}supports(e){return null!=n.parseEventName(e)}addEventListener(e,r,o){const i=n.parseEventName(r),a=n.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,l.\u0275getDOM)().onAndCancel(e,i.domEventName,a))}static parseEventName(e){const r=e.toLowerCase().split("."),o=r.shift();if(0===r.length||"keydown"!==o&&"keyup"!==o)return null;const i=n._normalizeKey(r.pop());let a="";if(P.forEach(c=>{const z=r.indexOf(c);z>-1&&(r.splice(z,1),a+=c+".")}),a+=i,0!=r.length||0===i.length)return null;const u={};return u.domEventName=o,u.fullKey=a,u}static getEventFullKey(e){let r="",o=function ie(n){let t=n.key;if(null==t){if(t=n.keyIdentifier,null==t)return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===n.location&&L.hasOwnProperty(t)&&(t=L[t]))}return re[t]||t}(e);return o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),P.forEach(i=>{i!=o&&oe[i](e)&&(r+=i+".")}),r+=o,r}static eventCallback(e,r,o){return i=>{n.getEventFullKey(i)===e&&o.runGuarded(()=>r(i))}}static _normalizeKey(e){return"esc"===e?"escape":e}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const de=(0,s.createPlatformFactory)(s.platformCore,"browser",[{provide:s.PLATFORM_ID,useValue:l.\u0275PLATFORM_BROWSER_ID},{provide:s.PLATFORM_INITIALIZER,useValue:function ae(){E.makeCurrent(),S.init()},multi:!0},{provide:l.DOCUMENT,useFactory:function ue(){return(0,s.\u0275setDocument)(document),document},deps:[]}]),fe=[{provide:s.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:s.ErrorHandler,useFactory:function le(){return new s.ErrorHandler},deps:[]},{provide:g,useClass:te,multi:!0,deps:[l.DOCUMENT,s.NgZone,s.PLATFORM_ID]},{provide:g,useClass:se,multi:!0,deps:[l.DOCUMENT]},{provide:T,useClass:T,deps:[y,p,s.APP_ID]},{provide:s.RendererFactory2,useExisting:T},{provide:N,useExisting:p},{provide:p,useClass:p,deps:[l.DOCUMENT]},{provide:s.Testability,useClass:s.Testability,deps:[s.NgZone]},{provide:y,useClass:y,deps:[g,s.NgZone]},{provide:l.XhrFactory,useClass:Z,deps:[]}];let me=(()=>{class n{constructor(e){if(e)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(e){return{ngModule:n,providers:[{provide:s.APP_ID,useValue:e.appId},{provide:_,useExisting:s.APP_ID},$]}}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(n,12))},n.\u0275mod=s.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=s.\u0275\u0275defineInjector({providers:fe,imports:[l.CommonModule,s.ApplicationModule]}),n})();typeof window<"u"&&window;var De=d(554),A=d(317),j=d(340);const Ae=[{path:"",pathMatch:"full",redirectTo:"mfe1"},{path:"mfe1",loadChildren:()=>function Ce(n){return(0,De.V)({type:"module",remoteEntry:`${n}/remoteEntry.js`,exposedModule:"./Module"}).then(t=>t.Mfe1Module).catch(()=>d.e(632).then(d.bind(d,632)).then(t=>t.ErrorPageModule))}(j.N.mfe1URL)}];let _e=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=s.\u0275\u0275defineInjector({imports:[[A.RouterModule.forRoot(Ae)],A.RouterModule]}),n})(),be=(()=>{class n{constructor(){this.title="shell"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=s.\u0275\u0275defineComponent({type:n,selectors:[["app-root"]],decls:3,vars:0,template:function(e,r){1&e&&(s.\u0275\u0275elementStart(0,"h1"),s.\u0275\u0275text(1,"Shell app is running!"),s.\u0275\u0275elementEnd(),s.\u0275\u0275element(2,"router-outlet"))},directives:[A.RouterOutlet],styles:[""]}),n})(),Ne=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.\u0275\u0275defineNgModule({type:n,bootstrap:[be]}),n.\u0275inj=s.\u0275\u0275defineInjector({providers:[],imports:[[me,_e]]}),n})();j.N.production&&(0,s.enableProdMode)(),de().bootstrapModule(Ne).catch(n=>console.error(n))}}]);