/*! For license information please see 703.90421e3d.js.LICENSE.txt */
"use strict";(self.webpackChunkselfweb3=self.webpackChunkselfweb3||[]).push([[703],{81703:function(e,t,r){r.r(t),r.d(t,{default:function(){return L}});r(82526),r(41817),r(41539),r(32165),r(66992),r(78783),r(33948),r(72443),r(39341),r(73706),r(10408),r(30489),r(54747),r(68309),r(68304),r(88674),r(47042),r(19601);var n=r(67294),o=r(32823),i=r(29415),a=r(43675),c=r(9810),l=r(76703),u=r(71577),s=r(77572),f="src-page-component-resetModal-index__registerModal--a3539",h="src-page-component-resetModal-index__emailInput--cb751",d="src-page-component-resetModal-index__selectBox--fe2b7",p="src-page-component-resetModal-index__inputBox--ce706",v=r(4584),y=r(97054),m=r(85893);function g(){g=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var i=t&&t.prototype instanceof h?t:h,a=Object.create(i.prototype),c=new E(o||[]);return n(a,"_invoke",{value:L(e,r,c)}),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f={};function h(){}function d(){}function p(){}var v={};l(v,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(P([])));m&&m!==t&&r.call(m,i)&&(v=m);var w=p.prototype=h.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function o(n,i,a,c){var l=s(e[n],e,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,a,c)}),(function(e){o("throw",e,a,c)})):t.resolve(f).then((function(e){u.value=e,a(u)}),(function(e){return o("throw",e,a,c)}))}c(l.arg)}var i;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return i=i?i.then(n,n):n()}})}function L(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function _(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function P(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=p,n(w,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(x.prototype),l(x.prototype,a,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(w),l(w,c,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function w(e,t,r,n,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function b(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){w(i,n,o,a,c,"next",e)}function c(e){w(i,n,o,a,c,"throw",e)}a(void 0)}))}}var x={labelCol:{span:5},wrapperCol:{span:19}},L=function(e){var t=e.open,r=e.title,w=e.onClose,L=e.onOk,_=e.walletAddress,j=e.loading,k=(0,v.Z)()[0],E=(0,n.useState)(0),P=E[0],O=E[1],C=(0,s.Z)(document.body),Z=null!=C&&C.width?C.width<=768:window.innerWidth<=768,N=(0,n.useCallback)((function(e){void 0===e&&(e=60);var t=60,r=setInterval((function(){O(t-=1),0===t&&clearInterval(r)}),1e3)}),[]),S=(0,n.useCallback)((function(){o.ZP.success("Sent successfully, please check it carefully!"),O(60),N()}),[N]),T=(0,n.useCallback)((function(){o.ZP.success("Sending failed, please try again!"),O(3),N(3)}),[]),G=(0,n.useCallback)(b(g().mark((function e(){var t;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.validateFields(["email"]);case 3:t=k.getFieldValue("email"),(0,y._V)(_,t,S,T),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[k,N]),I=(0,n.useCallback)((function(){var e=k.getFieldsValue();L(e)}),[k,L]);return(0,m.jsx)(i.Z,{title:r,open:t,onCancel:w,onOk:I,confirmLoading:j,centered:Z,className:f,children:(0,m.jsxs)(a.Z,Object.assign({form:k,initialValues:{resetKind:"TOTP"}},x,{children:[(0,m.jsx)(a.Z.Item,{label:"resetKind",name:"resetKind",rules:[{required:!0,message:"Please select your resetKind!"}],children:(0,m.jsx)(c.Z,{className:d,options:[{label:"TOTP",value:"TOTP"},{label:"SelfPass",value:"SelfPass",disabled:!0},{label:"WebAuthn",value:"WebAuthn",disabled:!0}]})}),(0,m.jsx)(a.Z.Item,{label:"email",name:"email",rules:[{required:!0,type:"email",message:"Please input your email!"}],children:(0,m.jsx)(l.Z,{className:""+h,addonAfter:(0,m.jsx)(u.ZP,{type:"primary",disabled:P>0,onClick:G,children:P>0?P+"s":"Get Code"})})}),(0,m.jsx)(a.Z.Item,{label:"code",name:"code",rules:[{required:!0,message:"Please input your Verification Code!"}],children:(0,m.jsx)(l.Z,{className:p,placeholder:"Please input your Verification Code!"})})]}))})}}}]);