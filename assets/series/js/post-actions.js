/*! For license information please see post-actions.js.LICENSE.txt */
(()=>{"use strict";wp.data.dispatch;var t=function(){return VSE.postId};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(){r=function(){return n};var t,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof E?e:E,i=Object.create(o.prototype),c=new F(n||[]);return a(i,"_invoke",{value:j(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function E(){}function w(){}function b(){}var x={};f(x,s,(function(){return this}));var L=Object.getPrototypeOf,S=L&&L(L(N([])));S&&S!==o&&i.call(S,s)&&(x=S);var R=b.prototype=E.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,r){function n(o,a,c,s){var u=p(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==e(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function j(e,r,n){var o=d;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=O(c,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?m:v,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(r){if(r||""===r){var n=r[s];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(e(r)+" is not iterable")}return w.prototype=b,a(R,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=f(b,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(R),t},n.awrap=function(t){return{__await:t}},_(k.prototype),f(k.prototype,u,(function(){return this})),n.AsyncIterator=k,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new k(h(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(R),f(R,l,"Generator"),f(R,s,(function(){return this})),f(R,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=N,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},n}function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}var o=wp,i=o.components,a=i.Button,c=i.Spinner,s=o.data,u=s.dispatch,l=s.useSelect,f=o.element,h=(f.useEffect,f.useState,o.i18n.__);const p=function(e){var o,i=e.enabled,s=void 0!==i&&i,f=e.text,p=void 0===f?h("Save","codeflavors-vimeo-video-post-lite"):f,d=e.isPrimary,v=void 0===d||d,y=e.isSecondary,m=void 0!==y&&y,g=e.onClick,E=void 0===g?function(){}:g,w=l((function(e){return e("core").hasEditsForEntityRecord("postType","series",t())})),b=function(){var e,o=(e=r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(),e.next=3,u("core").saveEditedEntityRecord("postType","series",t());case 3:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))});return function(){return o.apply(this,arguments)}}(),x=l((function(e){return{lastError:e("core").getLastEntitySaveError("postType","series",t()),isSaving:e("core").isSavingEntityRecord("postType","series",t())}})),L=(x.lastError,x.isSaving);return React.createElement(React.Fragment,null,React.createElement(a,{disabled:(o=!0,(s||w)&&(o=!1),o),isPrimary:v,isSecondary:m,onClick:b},w&&L?React.createElement(React.Fragment,null,React.createElement(c,null)," ",h("Saving...","codeflavors-vimeo-video-post-lite")):p))};var d=wp,v=d.components,y=v.Button,m=v.Flex,g=v.FlexItem,E=d.data,w=E.dispatch,b=E.useSelect,x=d.element,L=x.createRoot,S=(x.useEffect,x.useState,d.hooks.doAction,d.i18n.__),R=function(e){var r=b((function(e){return{post:e("core").getEntityRecord("postType","series",t()),isLoading:e("core/data").isResolving("core","getEntityRecord",["postType","series",t()])}})),n=r.post;return r.isLoading,React.createElement("div",{className:"vimeotheque-series-post-actions"},React.createElement(m,{justify:"flex-end"},n&&React.createElement(React.Fragment,null,React.createElement(g,{isBlock:!0},React.createElement(p,{enabled:"draft"!=n.status,text:"draft"==n.status?S("Save draft","codeflavors-vimeo-video-post-lite"):S("Switch to draft","codeflavors-vimeo-video-post-lite"),isPrimary:!1,isSecondary:!0,onClick:function(){w("core").editEntityRecord("postType","series",t(),{status:"draft"})}})),React.createElement(g,null,React.createElement(p,{enabled:"draft"==n.status,isPrimary:!0,isSecondary:!1,text:"draft"==n.status?S("Publish","codeflavors-vimeo-video-post-lite"):S("Update","codeflavors-vimeo-video-post-lite"),onClick:function(){w("core").editEntityRecord("postType","series",t(),{status:"publish"})}})))),n&&"auto-draft"!==n.status&&""!==n.preview_link&&React.createElement(m,{justify:"flex-end",className:"second-line"},React.createElement(g,null,React.createElement(y,{target:"_blank",href:n.preview_link,isLink:!0},S("View","codeflavors-vimeo-video-post-lite")))))};L(document.getElementById("vimeotheque-series-post-actions")).render(React.createElement(R,null))})();