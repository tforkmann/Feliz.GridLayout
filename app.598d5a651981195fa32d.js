(self.webpackChunk=self.webpackChunk||[]).push([[143],{758:()=>{},29:(e,t,n)=>{"use strict";function r(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function o(e){(function(e){return null!=e&&"function"==typeof e.Dispose})(e)&&e.Dispose()}function i(e,t){var n,r;return(null===(n=Object.getPrototypeOf(e))||void 0===n?void 0:n.constructor)===(null===(r=Object.getPrototypeOf(t))||void 0===r?void 0:r.constructor)}class l{constructor(e){this.iter=e}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const e=this.iter.next();return this.current=e.value,!e.done}"System.Collections.IEnumerator.Reset"(){throw new Error("JS iterators cannot be reset")}Dispose(){}}function s(e){return"function"==typeof e.GetEnumerator?e.GetEnumerator():new l(e[Symbol.iterator]())}function u(e){return{[Symbol.iterator](){return this},next(){const t=e["System.Collections.IEnumerator.MoveNext"]();return{done:!t,value:t?e["System.Collections.IEnumerator.get_Current"]():void 0}}}}function c(e,t){let n=e.toString(10);for(;n.length<t;)n="0"+n;return n}function a(e){const t=e;return"number"==typeof t.offset?t.offset:1===e.kind?0:-6e4*e.getTimezoneOffset()}function f(e,t){return(e=e<0&&null!=t&&10!==t?4294967295+e+1:e).toString(t)}class d{static id(e){return d.idMap.has(e)||d.idMap.set(e,++d.count),d.idMap.get(e)}}function h(e){return 2654435761*e|0}function m(e){return 0===e.length?0:e.reduce(((e,t)=>(e<<5)+e^t))}function y(e){var t;if(null==e)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return h(e);case"string":return function(e){let t=0,n=5381;const r=e.length;for(;t<r;)n=33*n^e.charCodeAt(t++);return n}(e);default:return function(e){return"function"==typeof e.GetHashCode}(e)?e.GetHashCode():r(e)?function(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=y(e[r]);return m(n)}(e):e instanceof Date?function(e){return e.getTime()}(e):(null===(t=Object.getPrototypeOf(e))||void 0===t?void 0:t.constructor)===Object?m(Object.values(e).map((e=>y(e)))):h(d.id(e))}}function g(e,t){return function(e,t,n){if(null==e)return null==t;if(null==t)return!1;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}(e,t,p)}function p(e,t){var n;return e===t||(null==e?null==t:null!=t&&"object"==typeof e&&(function(e){return"function"==typeof e.Equals}(e)?e.Equals(t):r(e)?r(t)&&g(e,t):e instanceof Date?t instanceof Date&&0===v(e,t):(null===(n=Object.getPrototypeOf(e))||void 0===n?void 0:n.constructor)===Object&&function(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;n.sort(),r.sort();for(let o=0;o<n.length;o++)if(n[o]!==r[o]||!p(e[n[o]],t[r[o]]))return!1;return!0}(e,t)))}function v(e,t){let n,r;return"offset"in e&&"offset"in t?(n=e.getTime(),r=t.getTime()):(n=e.getTime()+a(e),r=t.getTime()+a(t)),n===r?0:n<r?-1:1}function E(e,t){return e===t?0:e<t?-1:1}function w(e,t){return function(e,t,n){if(null==e)return null==t?0:1;if(null==t)return-1;if(e.length!==t.length)return e.length<t.length?-1:1;for(let r=0,o=0;r<e.length;r++)if(o=n(e[r],t[r]),0!==o)return o;return 0}(e,t,C)}function C(e,t){var n;return e===t?0:null==e?null==t?0:-1:null==t?1:"object"!=typeof e?e<t?-1:1:function(e){return"function"==typeof e.CompareTo}(e)?e.CompareTo(t):r(e)?r(t)?w(e,t):-1:e instanceof Date?t instanceof Date?v(e,t):-1:(null===(n=Object.getPrototypeOf(e))||void 0===n?void 0:n.constructor)===Object?function(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return n.length<r.length?-1:1;n.sort(),r.sort();for(let o=0,i=0;o<n.length;o++){const l=n[o];if(l!==r[o])return l<r[o]?-1:1;if(i=C(e[l],t[l]),0!==i)return i}return 0}(e,t):-1}function b(e,t,n){return e(t,n)>0?t:n}function x(e){const t={};for(const n of e)t[n[0]]=n[1];return t}d.idMap=new WeakMap,d.count=0;const A=Symbol("curried");function S(e,t){if(null==t||t.length>1)return t;const n=(...n)=>{let r=t;for(let t=0;t<e;t++)r=r(n[t]);return r};return n[A]=t,n}function N(e,t,n){return r=>1===t?n(...e.concat([r])):N(e.concat([r]),t-1,n)}function I(e,t){return null==t||1===t.length?t:A in t?t[A]:N([],e,t)}function G(e,t,n){if(null!=t){if(A in t){t=t[A];for(let e=0;e<n.length;e++)t=t(n[e]);return t}return N(n,e,t)}}function k(e,t=0){var n,r;if(null!=e&&"object"==typeof e){if("function"==typeof e.toString)return e.toString();if(Symbol.iterator in e)return function(e){let t=0,n="[";for(const r of e){if(0===t)n+=k(r);else{if(100===t){n+="; ...";break}n+="; "+k(r)}t++}return n+"]"}(e);{const o=null===(n=Object.getPrototypeOf(e))||void 0===n?void 0:n.constructor;return o===Object&&t<10?"{ "+Object.entries(e).map((([e,n])=>e+" = "+k(n,t+1))).join("\n  ")+" }":null!==(r=null==o?void 0:o.name)&&void 0!==r?r:""}}return String(e)}class O{get name(){return this.cases()[this.tag]}toJSON(){return 0===this.fields.length?this.name:[this.name].concat(this.fields)}toString(){return function(e,t){if(0===t.length)return e;{let n="",r=!0;return 1===t.length?(n=k(t[0]),r=n.indexOf(" ")>=0):n=t.map((e=>k(e))).join(", "),e+(r?" (":" ")+n+(r?")":"")}}(this.name,this.fields)}GetHashCode(){const e=this.fields.map((e=>y(e)));return e.splice(0,0,h(this.tag)),m(e)}Equals(e){return this===e||!!i(this,e)&&this.tag===e.tag&&g(this.fields,e.fields)}CompareTo(e){return this===e?0:i(this,e)?this.tag===e.tag?w(this.fields,e.fields):this.tag<e.tag?-1:1:-1}}class T{toJSON(){return function(e){const t={},n=Object.keys(e);for(let r=0;r<n.length;r++)t[n[r]]=e[n[r]];return t}(this)}toString(){return function(e){return"{ "+Object.entries(e).map((([e,t])=>e+" = "+k(t))).join("\n  ")+" }"}(this)}GetHashCode(){return function(e){return m(Object.values(e).map((e=>y(e))))}(this)}Equals(e){return function(e,t){if(e===t)return!0;if(i(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++)if(!p(e[n[r]],t[n[r]]))return!1;return!0}return!1}(this,e)}CompareTo(e){return function(e,t){if(e===t)return 0;if(i(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++){const o=C(e[n[r]],t[n[r]]);if(0!==o)return o}return 0}return-1}(this,e)}}function L(e){const t=e<0,n=(e=Math.abs(e))%36e5/6e4;return(t?"-":"+")+c(~~(e/36e5),2)+":"+c(n,2)}function M(e,t){const n=e.toISOString();return"first"===t?n.substring(0,n.indexOf("T")):n.substring(n.indexOf("T")+1,n.length-1)}function j(e,t,n){return t.replace(/(\w)\1*/g,(t=>{let r=Number.NaN;switch(t.substring(0,1)){case"y":const o=n?e.getUTCFullYear():e.getFullYear();r=t.length<4?o%100:o;break;case"M":r=(n?e.getUTCMonth():e.getMonth())+1;break;case"d":r=n?e.getUTCDate():e.getDate();break;case"H":r=n?e.getUTCHours():e.getHours();break;case"h":const i=n?e.getUTCHours():e.getHours();r=i>12?i%12:i;break;case"m":r=n?e.getUTCMinutes():e.getMinutes();break;case"s":r=n?e.getUTCSeconds():e.getSeconds();break;case"f":r=n?e.getUTCMilliseconds():e.getMilliseconds()}return Number.isNaN(r)?t:r<10&&t.length>1?"0"+r:""+r}))}const D=Symbol("numeric");function U(e,t){return"number"==typeof e?e.toPrecision(t):e[D]().toPrecision(t)}function _(e,t){return"number"==typeof e?e.toExponential(t):e[D]().toExponential(t)}function F(e){return"number"==typeof e?(Number(e)>>>0).toString(16):e[D]().toHex()}function z(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}const H=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g;function P(e){return{input:e,cont:(t=e,e=>{H.lastIndex=0;const n=[],r=[];let o=0,i=H.exec(t);for(;i;){const e=i.index+(i[1]||"").length;n.push(t.substring(o,e).replace(/%%/g,"%")),r.push(i),o=H.lastIndex,H.lastIndex-=1,i=H.exec(t)}return 0===n.length?e(t.replace(/%%/g,"%")):(n.push(t.substring(o).replace(/%%/g,"%")),W(e,n,r))})};var t}function R(e){return function(e,t){return"string"==typeof t?e(t):t.cont(e)}((e=>e),e)}function q(e,t,n,r,o){let i="";if(t=t||"",o=o||"","number"==typeof(l=e)||(null==l?void 0:l[D]))switch("x"!==o.toLowerCase()&&(function(e,t){return function(e,t){return"number"==typeof e?e<t?-1:e>t?1:0:e.CompareTo(t)}(e,t)<0}(e,0)?(e=function(e,t){return"number"==typeof e?-1*e:e[D]().multiply(-1)}(e),i="-"):t.indexOf(" ")>=0?i=" ":t.indexOf("+")>=0&&(i="+")),r=null==r?null:parseInt(r,10),o){case"f":case"F":e=function(e,t){return"number"==typeof e?e.toFixed(t):e[D]().toFixed(t)}(e,r=null!=r?r:6);break;case"g":case"G":e=null!=r?U(e,r):U(e);break;case"e":case"E":e=null!=r?_(e,r):_(e);break;case"x":e=F(e);break;case"X":e=F(e).toUpperCase();break;default:e=String(e)}else e=e instanceof Date?function(e,t,n){return null!=e.offset?function(e,t){var n,r,o;const i=new Date(e.getTime()+(null!==(n=e.offset)&&void 0!==n?n:0));if("string"!=typeof t)return i.toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+L(null!==(r=e.offset)&&void 0!==r?r:0);if(1!==t.length)return j(i,t,!0);switch(t){case"D":case"d":return M(i,"first");case"T":case"t":return M(i,"second");case"O":case"o":return function(e,t){const n=e.toISOString();return n.substring(0,n.length-1)+L(t)}(i,null!==(o=e.offset)&&void 0!==o?o:0);default:throw new Error("Unrecognized Date print format")}}(e,t):function(e,t){const n=1===e.kind;if("string"!=typeof t)return n?e.toUTCString():e.toLocaleString();if(1!==t.length)return j(e,t,n);switch(t){case"D":case"d":return n?M(e,"first"):e.toLocaleDateString();case"T":case"t":return n?M(e,"second"):e.toLocaleTimeString();case"O":case"o":return function(e,t){if(t)return e.toISOString();{const t=null==e.kind||2===e.kind;return c(e.getFullYear(),4)+"-"+c(e.getMonth()+1,2)+"-"+c(e.getDate(),2)+"T"+c(e.getHours(),2)+":"+c(e.getMinutes(),2)+":"+c(e.getSeconds(),2)+"."+c(e.getMilliseconds(),3)+(t?L(-6e4*e.getTimezoneOffset()):"")}}(e,n);default:throw new Error("Unrecognized Date print format")}}(e,t)}(e):k(e);var l;if(n="number"==typeof n?n:parseInt(n,10),isNaN(n))e=i+e;else{const r=t.indexOf("0")>=0,o=t.indexOf("-")>=0,l=o||!r?" ":"0";e="0"===l?i+(e=V(e,n-i.length,l,o)):V(i+e,n,l,o)}return e}function W(e,t,n,r="",o=-1){return(...i)=>{let l=r;const s=t.slice(),u=n.slice();for(const e of i){const[,,t,n,r,i]=u[0];let c=n;if(o>=0)c=o,o=-1;else if("*"===c){if(e<0)throw new Error("Non-negative number required");o=e;continue}l+=s[0],l+=q(e,t,c,r,i),s.splice(0,1),u.splice(0,1)}return 0===u.length?(l+=s[0],e(l)):W(e,s,u,l,o)}}function $(e,t){return Array.isArray(t)?t.join(e):Array.from(t).join(e)}function V(e,t,n,r){n=n||" ",t-=e.length;for(let o=0;o<t;o++)e=r?e+n:n+e;return e}function J(e,t,n,r){if(r="number"==typeof r?r:0,(n="number"==typeof n?n:void 0)&&n<0)throw new Error("Count cannot be less than zero");if(0===n)return[];const o=1==(1&r),i=2==(2&r);t=(t=(t=t||[]).filter((e=>e)).map(z)).length>0?t:["\\s"];const l=[],s=new RegExp(t.join("|"),"g");let u=!0,c=0;do{const t=s.exec(e);if(null===t){const t=i?e.substring(c).trim():e.substring(c);(!o||t.length>0)&&l.push(t),u=!1}else{const r=i?e.substring(c,t.index).trim():e.substring(c,t.index);(!o||r.length>0)&&(null!=n&&l.length+1===n?(l.push(i?e.substring(c).trim():e.substring(c)),u=!1):l.push(r)),c=s.lastIndex}}while(u);return l}function B(e,t,n){if(t+(n||0)>e.length)throw new Error("Invalid startIndex and/or length");return null!=n?e.substr(t,n):e.substr(t)}class Y{constructor(e){this.value=e}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return y(this.value)}Equals(e){return null!=e&&p(this.value,e instanceof Y?e.value:e)}CompareTo(e){return null==e?1:C(this.value,e instanceof Y?e.value:e)}}function Z(e){return null==e||e instanceof Y?new Y(e):e}function X(e){if(null==e)throw new Error("Option has no value");return e instanceof Y?e.value:e}function K(e,t){return null!=e?X(e):t}function Q(e,t){return null!=e?X(e):t()}function ee(e,t){return null!=t?Z(e(X(t))):void 0}class te extends T{constructor(e,t){super(),this.head=e,this.tail=t}toString(){return"["+$("; ",this)+"]"}Equals(e){return this===e||((e,t)=>{e:for(;;){const n=e,r=t,o=[n.tail,r.tail];if(null!=o[0]){if(null!=o[1]){const i=o[0],l=o[1];if(p(n.head,r.head)){e=i,t=l;continue e}return!1}return!1}return null==o[1]}})(this,e)}GetHashCode(){return 0|((e,t,n)=>{for(;;){const r=e,o=t,i=n,l=i.tail;if(null==l)return 0|o;{const s=l;if(r>18)return 0|o;e=r+1,t=(o<<1)+y(i.head)+631*r,n=s}}})(0,0,this)}toJSON(e){return Array.from(this)}CompareTo(e){return 0|((e,t)=>{e:for(;;){const n=e,r=t,o=[n.tail,r.tail];if(null!=o[0]){if(null!=o[1]){const i=o[0],l=o[1],s=0|C(n.head,r.head);if(0===s){e=i,t=l;continue e}return 0|s}return 1}return null!=o[1]?-1:0}})(this,e)}GetEnumerator(){return new ne(this)}[Symbol.iterator](){return u(this.GetEnumerator())}"System.Collections.IEnumerable.GetEnumerator"(){return s(this)}}class ne{constructor(e){this.xs=e,this.it=this.xs,this.current=null}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const e=this,t=e.it.tail;if(null!=t){const n=t;return e.current=e.it.head,e.it=n,!0}return!1}"System.Collections.IEnumerator.Reset"(){const e=this;e.it=e.xs,e.current=null}Dispose(){}}function re(){return new te(null,void 0)}function oe(e,t){return new te(e,t)}function ie(e){return null==e.tail}function le(e){if(null!=e.tail)return e.head;throw new Error("Collection was empty.\\nParameter name: list")}function se(e){const t=e.tail;if(null!=t)return t;throw new Error("Collection was empty.\\nParameter name: list")}function ue(){return re()}function ce(e,t){return oe(e,t)}function ae(e){return oe(e,re())}function fe(e){return ie(e)}function de(e){return le(e)}function he(e){return se(e)}function me(e,t,n){let r=t,o=n;for(;!ie(o);)r=e(r,le(o)),o=se(o);return r}function ye(e){return me(((e,t)=>oe(t,e)),re(),e)}function ge(e,t){me(((t,n)=>{e(n)}),void 0,t)}function pe(e){return function(e,t){let n=t;for(let t=e.length-1;t>=0;t--)n=oe(e[t],n);return n}(e,re())}function ve(e,t){return me(((e,t)=>oe(t,e)),t,ye(e))}function Ee(e,t){const n=re(),r=me(((t,n)=>{const r=new te(e(n),void 0);return t.tail=r,r}),n,t),o=re();return r.tail=o,se(n)}function we(e,t){const n=re(),r=me(((t,n)=>{const r=e(n);if(null==r)return t;{const e=new te(X(r),void 0);return t.tail=e,e}}),n,t),o=re();return r.tail=o,se(n)}function Ce(e,t,n){ge((n=>{try{n(t)}catch(t){e(t)}}),n)}function be(){return ue()}function xe(e,t,n){if(null==t)return null==n;if(null==n)return!1;{let r=0,o=!0;const i=0|t.length,l=0|n.length;if(i>l)return!1;if(i<l)return!1;for(;r<i&&o;)o=e(t[r],n[r]),r=r+1|0;return o}}const Ae="The input sequence has an insufficient number of elements.";function Se(){throw new Error("Enumeration has not started. Call MoveNext.")}function Ne(){throw new Error("Enumeration already finished.")}class Ie{constructor(e){this.f=e}toString(){let e=0,t="seq [";const n=s(this);try{for(;e<4&&n["System.Collections.IEnumerator.MoveNext"]();)e>0&&(t+="; "),t+=k(n["System.Collections.Generic.IEnumerator`1.get_Current"]()),e=e+1|0;return 4===e&&(t+="; ..."),t+"]"}finally{o(n)}}GetEnumerator(){return this.f()}[Symbol.iterator](){return u(this.GetEnumerator())}"System.Collections.IEnumerable.GetEnumerator"(){return this.f()}}class Ge{constructor(e,t,n){this.current=e,this.next=t,this.dispose=n}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current()}"System.Collections.IEnumerator.get_Current"(){return this.current()}"System.Collections.IEnumerator.MoveNext"(){return this.next()}"System.Collections.IEnumerator.Reset"(){!function(){throw new Error("Reset is not supported on this enumerator.")}()}Dispose(){this.dispose()}}function ke(e,t,n){return new Ge(e,t,n)}function Oe(e,t,n){let r,o=!1,i=Z(e());const l=()=>{if(null!=i){const e=X(i);try{n(e)}finally{i=void 0}}},s=()=>{try{l()}finally{r=void 0}};return ke((()=>(o||Se(),null!=r?X(r):Ne())),(()=>{if(o||(o=!0),null!=i){const e=X(i);let n;try{n=t(e)}catch(e){throw s(),e}return null!=n?(r=n,!0):(s(),!1)}return!1}),l)}function Te(e){return function(e){return new Ie(e)}(e)}function Le(e){return t="source",null==e&&function(e){throw new Error(e)}(t),s(e);var t}function Me(e){return Te((()=>s(e())))}function je(e){return Te((()=>function(e){let t,n,r,i=!1,l=!1;const u=()=>{if(l=!0,null!=n){const e=n;try{o(e)}finally{n=void 0}}if(null!=t){const e=t;try{o(e)}finally{t=void 0}}};return ke((()=>(i?l&&Ne():Se(),null!=r?X(r):Ne())),(()=>{let c;if(i||(i=!0),l)return!1;{let i;for(;null==i;){const l=[t,n];if(null!=l[0])if(null!=l[1]){const e=l[1];if(e["System.Collections.IEnumerator.MoveNext"]())r=Z(e["System.Collections.Generic.IEnumerator`1.get_Current"]()),i=!0;else try{o(e)}finally{n=void 0}}else{const e=l[0];e["System.Collections.IEnumerator.MoveNext"]()?(c=e["System.Collections.Generic.IEnumerator`1.get_Current"](),n=s(c)):(u(),i=!1)}else t=s(e)}return X(i)}}),(()=>{l||u()}))}(e)))}function De(){return Me((()=>new Array(0)))}function Ue(e){return Me((()=>function(e,t){const n=function(e,t){return"function"==typeof e?new e(t):new Array(t)}(void 0,1);return n[0]=e,n}(e)))}function _e(e){return r(e)?pe(e):e instanceof te?e:function(e){let t,n;if(r(e))return pe(e);if(e instanceof te)return e;{const r=re();let i=r;const l=s(e);try{for(;l["System.Collections.IEnumerator.MoveNext"]();){const e=l["System.Collections.Generic.IEnumerator`1.get_Current"]();t=i,n=new te(e,void 0),t.tail=n,i=n}}finally{o(l)}const u=i,c=re();return u.tail=c,se(r)}}(e)}function Fe(e,t,n){return Te((()=>{let r=-1;return Oe(e,(e=>(r=r+1|0,t(r,e))),n)}))}function ze(e,t){return je([e,t])}function He(e,t){return n=()=>Le(t),r=t=>t["System.Collections.IEnumerator.MoveNext"]()?Z(e(t["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,i=e=>{o(e)},Te((()=>Oe(n,r,i)));var n,r,i}class Pe{constructor(e,t){this.cleanup=e,this.res=t}Dispose(){this.cleanup()}GetEnumerator(){return getEnumerator(this.res)}[Symbol.iterator](){return toIterator(this.GetEnumerator())}"System.Collections.IEnumerable.GetEnumerator"(){return getEnumerator(this.res)}}function Re(e,t){return Te((()=>{const n=Le(t);try{for(let t=1;t<=e;t++)if(!n["System.Collections.IEnumerator.MoveNext"]())throw new Error(Ae+"\\nParameter name: source");return function(e,t){return ke((()=>t["System.Collections.Generic.IEnumerator`1.get_Current"]()),(()=>t["System.Collections.IEnumerator.MoveNext"]()),(()=>{try{o(t)}finally{e()}}))}((()=>{}),n)}catch(e){throw o(n),e}}))}function qe(e,t,n,r,o){const i=function(e,t,n,r){const o=0|C(e,n);if(0===o)throw new Error("The step of a range cannot be zero");const i=o>0;return n=>{const o=0|C(n,t);return i&&o<=0||!i&&o>=0?[n,r(n,e)]:void 0}}(t,n,r,o);return Me((()=>{return t=i,n=e,Te((()=>function(e,t){let n,r=t;return ke((()=>{if(null!=n){const e=n[0];return n[1],e}return Se()}),(()=>{if(n=e(r),null!=n){n[0];const e=n[1];return r=e,!0}return!1}),(()=>{}))}(t,n)));var t,n}))}class We extends O{constructor(e,...t){super(),this.tag=0|e,this.fields=t}cases(){return["Writable","ReadWritable"]}}class $e{constructor(e){var t,n;this.state=new We(0,(t=new Array(b(E,e,10)),n=b(E,e,10),t.fill(null,0,0+n)),0)}}function Ve(e){const t=e.state;if(1===t.tag){const n=0|t.fields[1],r=0|t.fields[2],o=t.fields[0],i=(r+1)%o.length|0;return e.state=i===n?new We(0,o,n):new We(1,o,n,i),Z(o[r])}}class Je extends T{constructor(e,t,n,r,o,i,l){super(),this.init=e,this.update=t,this.subscribe=n,this.view=r,this.setState=o,this.onError=i,this.syncDispatch=l}}function Be(e,t){const n=t.init(e),i=n[0],l=new $e(10);let u=!1,c=i;const a=G(1,t.syncDispatch,[e=>{if(u)!function(e,t){const n=e.state;if(1===n.tag){const l=0|n.fields[1],s=0|n.fields[2],u=n.fields[0];u[l]=t;const c=(l+1)%u.length|0;e.state=c===s?new We(1,(r=s,i=u,Array.from(Me((()=>ze(Re(r,i),Me((()=>{return ze((e=r,t=i,Fe((()=>Le(t)),((t,n)=>{if(t<e){if(n["System.Collections.IEnumerator.MoveNext"]())return Z(n["System.Collections.Generic.IEnumerator`1.get_Current"]());throw new Error(Ae+"\\nParameter name: source")}}),(e=>{o(e)}))),Me((()=>{return e=e=>Ue(null),n=i.length,t=qe(0,1,n,0,((e,t)=>e+t)),Me((()=>je(He(e,t))));var e,t,n})));var e,t}))))))),u.length,0):new We(1,u,c,s)}else{const r=0|n.fields[1],o=n.fields[0];o[r]=t;const i=(r+1)%o.length|0;e.state=new We(1,o,i,r)}var r,i}(l,e);else{u=!0;let n=Z(e);for(;null!=n;){const e=X(n);try{const n=t.update(e,c),r=n[0];t.setState(r,a),Ce((n=>{t.onError([R(P("Error in command while handling: %A"))(e),n])}),a,n[1]),c=r}catch(n){t.onError([R(P("Unable to process the message: %A"))(e),n])}n=Ve(l)}u=!1}}]);t.setState(i,a),Ce((e=>{t.onError(["Error intitializing:",e])}),a,function(e){const t=re();let n=t;const i=e=>{n=me(((e,t)=>{const n=new te(t,void 0);return e.tail=n,n}),n,e)};if(r(e))e.forEach(i);else if(e instanceof te)ge(i,e);else{const t=s(e);try{for(;t["System.Collections.IEnumerator.MoveNext"]();)i(t["System.Collections.Generic.IEnumerator`1.get_Current"]())}finally{o(t)}}const l=n,u=re();return l.tail=u,se(t)}(pe([(()=>{try{return t.subscribe(i)}catch(e){return t.onError(["Unable to subscribe:",e]),be()}})(),n[1]])))}var Ye=n(961),Ze=n(526);class Xe extends T{constructor(e,t,n){super(),this.model=e,this.render=t,this.equal=n}}class Ke extends Ze.Component{constructor(e){super(e)}shouldComponentUpdate(e,t){return!this.props.equal(this.props.model,e.model)}render(){return this.props.render()}}const Qe=Ze;function et(e){return{Dispose(){e()}}}function tt(e){var t;t=e,(0,Ze.useEffect)((()=>{const e=t();return()=>{e.Dispose()}}))}function nt(e,t){const n=K(t,[]);return Qe.useMemo(e,n)}function rt(e){const t=(r=e,Qe.useRef(r)),n=function(e,n){const r=K([],[]);return Qe.useCallback((e=>t.current(e)),r)}();var r,o,i;return o=()=>{t.current=e},i=e=>(o(),et((()=>{}))),(0,Ze.useLayoutEffect)((()=>{const e=i();return()=>{e.Dispose()}})),n}const ot=(()=>{try{if("undefined"!=typeof window&&"function"==typeof window.addEventListener){const e={passive:!0};window.addEventListener("testPassiveEventSupport",(e=>{}),e),window.removeEventListener("testPassiveEventSupport",(e=>{}))}}catch(e){}return!1})();function it(e){return ee((e=>e.passive&&!ot?{capture:e.capture,once:e.once,passive:!1}:e),e)}function lt(e){return null!=(t=e)?(e=>e.capture?{capture:!0}:void 0)(X(t)):void 0;var t}function st(e,t){return 0===t.indexOf(e)?t:void 0}function ut(e,t){return function(e,t){const n=e.lastIndexOf(t);return n>=0&&n===e.length-t.length}(t,e)?t:void 0}function ct(e){const t=$("&",Ee((e=>$("=",[encodeURIComponent(e[0]),encodeURIComponent(e[1])])),e));return""===t?"":"?"+t}function at(e,t){return function(e){return 1===e?e=>{let t,n,r,o,i,l;return t=st("/",e),null!=t?(n=t,"#"+n):(r=st("#/",e),null!=r?(o=r,o):(i=st("#",e),null!=i?(l=i,"#/"+B(l,1,l.length-1)):"#/"+e))}:e=>{let t,n;return t=st("/",e),null!=t?(n=t,n):"/"+e}}(t)($("/",Ee((e=>e.indexOf("?")>=0||0===e.indexOf("#")||0===e.indexOf("/")?e:encodeURIComponent(e)),e)))}function ft(e){const t=ye(e);return fe(t)?void 0:fe(he(t))?[ue(),de(t)]:[ye(he(t)),de(t)]}function dt(e,t,n){1===t?history.pushState(void 0,"",at(e,n)):history.replaceState(void 0,"",at(e,n));const r=document.createEvent("CustomEvent");r.initEvent("CUSTOM_NAVIGATION_EVENT",!0,!0),window.dispatchEvent(r)}function ht(e,t){return function(e,t){let n,r;const o=re();let i=o,l=t;for(;!ie(l);){let t=e(le(l));for(;!ie(t);)n=i,r=new te(le(t),void 0),n.tail=r,i=r,t=se(t);l=se(l)}const s=i,u=re();return s.tail=u,se(o)}((e=>{if("string"!=typeof(t=e)||/^\s*$/.test(t))return ue();{const t=function(e,...t){return 0===t.length?e.trimEnd():e.replace(new RegExp("["+z(t.join(""))+"]+$"),"")}(e,"#");if("?"===t)return ue();if(null!=st("?",t))return ae(t);{const e=t.split("?");if(xe(((e,t)=>e===t),e,null)||1!==e.length){if(xe(((e,t)=>e===t),e,null)||2!==e.length)return ue();if(""===e[1]){const t=e[0];return ae(decodeURIComponent(t))}{const t=e[0],n=e[1];return pe([decodeURIComponent(t),"?"+n])}}{const t=e[0];return ae(decodeURIComponent(t))}}}var t}),pe(J(null!=st("#",e)?B(e,1,e.length-1):1!==t||null==ut("#",e)&&null==ut("#/",e)?e:"",["/"],null,0)))}const mt=function(e,t,n,r){const i=Qe.memo(e,S(2,K(I(2,n),null)));var l,s;return l=t=>{e.displayName=t},function(e,t,n){const r=Le(n);try{let n=t;for(;r["System.Collections.IEnumerator.MoveNext"]();)n=e(n,r["System.Collections.Generic.IEnumerator`1.get_Current"]())}finally{o(r)}}(((e,t)=>{l(t)}),void 0,null==(s=t)?[]:[X(s)]),e=>{const t=function(e,t){if(null==e)return t;{const n=e;return t.key=n(t),t}}(r,e);return Qe.createElement(i,t)}}((e=>{const t=rt((t=>{const n=K(e.onUrlChanged,(e=>{}));!function(e,t,n){t(ht(2===e?window.location.pathname+window.location.search:window.location.hash,e))}(K(e.hashMode,1),n)}));if(window.navigator.userAgent.indexOf("Trident")>=0||window.navigator.userAgent.indexOf("MSIE")>=0){const e="hashchange",n=e=>{t(e)},r=void 0,o=nt((()=>it(r)),[r]),i=nt((()=>lt(r)),[r]),l=nt((()=>e=>{n(e)}),[n]);tt(rt((()=>{if(null==o)window.addEventListener(e,l);else{const t=o;window.addEventListener(e,l,t)}return et((()=>{if(null==i)window.removeEventListener(e,l);else{const t=i;window.removeEventListener(e,l,t)}}))})))}else{const e="popstate",n=t,r=void 0,o=nt((()=>it(r)),[r]),i=nt((()=>lt(r)),[r]),l=nt((()=>e=>{n(e)}),[n]);tt(rt((()=>{if(null==o)window.addEventListener(e,l);else{const t=o;window.addEventListener(e,l,t)}return et((()=>{if(null==i)window.removeEventListener(e,l);else{const t=i;window.removeEventListener(e,l,t)}}))})))}const n="CUSTOM_NAVIGATION_EVENT",r=t,o=void 0,i=nt((()=>it(o)),[o]),l=nt((()=>lt(o)),[o]),s=nt((()=>e=>{r(e)}),[r]);tt(rt((()=>{if(null==i)window.addEventListener(n,s);else{const e=i;window.addEventListener(n,s,e)}return et((()=>{if(null==l)window.removeEventListener(n,s);else{const e=l;window.removeEventListener(n,s,e)}}))})));const u=e.application;return null==u?null:u}),void 0,undefined,undefined);class yt extends O{constructor(e,...t){super(),this.tag=0|e,this.fields=t}cases(){return["Install","Use","GridLayout"]}}const gt=new yt(0);function pt(e){let t;switch(t=fe(e)?2:"use"===de(e)?fe(he(e))?0:3:"gridlayout"===de(e)&&fe(he(e))?1:3,t){case 0:return new yt(1);case 1:return new yt(2);case 2:return new yt(0);case 3:return gt}}function vt(e){return[e,ue()]}function Et(e){switch(e.tag){case 1:return vt(ae("use"));case 2:return vt(ae("gridlayout"));default:return vt(ue())}}function wt(e){const t=Et(e);return n=e=>{const n=t[1];Q(ee((e=>{dt(ve(e[0],ae(e[1]+ct(n))),1,1)}),ft(t[0])),(()=>{dt(ae(ct(n)),1,1)}))},ae(n);var n}function Ct(e,t){const n=function(e){return me(S(2,(e=>{const t=e[0],n=e[1];return e=>{const r=e;return"className"===r[0]?[ce(k(r[1]),t),n]:[t,ce(e,n)]}})),[ue(),ue()],ye(e))}(t);return ce(["className",$(" ",ce(e,n[0]))],n[1])}function bt(e){const t=(n=(e,t)=>(0,Ze.createElement)("pre",x(_e(Me((()=>ze(Ue(["data-prefix",f(e+1)]),Me((()=>ze(t.indexOf("// ")>=0?Ue(["className","text-warning"]):De(),Me((()=>{let e;return Ue((e=[(0,Ze.createElement)("code",{children:[t]})],["children",Qe.Children.toArray(Array.from(e))]))}))))))))))),r=J(e,["\n"],null,0),Fe((()=>Le(r)),((e,t)=>t["System.Collections.IEnumerator.MoveNext"]()?Z(n(e,t["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0),(e=>{o(e)})));var n,r;return(0,Ze.createElement)("div",{className:"mockup-code",children:Qe.Children.toArray(Array.from(t))})}function xt(e,t,n){let r,o;const i=pe([(0,Ze.createElement)("div",{className:"description",children:Qe.Children.toArray([e])}),(r=pe([(o=ae(bt(t)),(0,Ze.createElement)("div",{className:"grid flex-1 h-full",children:Qe.Children.toArray(Array.from(o))})),(0,Ze.createElement)("div",x(Ct("divider",pe([["className","divider-horizontal"],["children","👉"],["className","text-neutral"],["className","after:bg-opacity-30 before:bg-opacity-30"]])))),(0,Ze.createElement)("div",{className:"grid flex-1",children:Qe.Children.toArray([n])})]),(0,Ze.createElement)("div",{className:"flex flex-row w-full",children:Qe.Children.toArray(Array.from(r))}))]);return(0,Ze.createElement)("div",{className:"mb-10",children:Qe.Children.toArray(Array.from(i))})}function At(e,t){const n=ae((0,Ze.createElement)("a",{href:R(P("https://github.com/tforkmann/Feliz.GridLayout/blob/main/src/Docs/views/Feliz.GridLayout/%s.fs"))(e),children:"Fix docs file "+e+" here"}));return(0,Ze.createElement)("div",{children:Qe.Children.toArray(Array.from(n))})}function St(){let e,t;const n=[(0,Ze.createElement)("div",{className:"description",children:Qe.Children.toArray(["After installation just open proper namespace:"])}),(e=ae(bt("open Feliz.GridLayout")),(0,Ze.createElement)("div",{className:"max-w-xl",children:Qe.Children.toArray(Array.from(e))})),(t=pe(["Now you can start using library. Everything important starts with ",(0,Ze.createElement)("code",{className:"code",children:"GridLayout.*"})," module."]),(0,Ze.createElement)("div",{className:"description",children:Qe.Children.toArray(Array.from(t))}))];return Ze.createElement(Ze.Fragment,{},...n)}function Nt(e){return".$"+e}var It=n(123);const Gt=n.n(It)();function kt(e,t){return e.replace(/[a-z]?[A-Z]/g,(e=>1===e.length?e.toLowerCase():e.charAt(0)+t+e.charAt(1).toLowerCase()))}const Ot=[{i:Nt("a"),x:0,y:0,w:1,h:2,static:!0},{i:Nt("b"),x:1,y:0,w:3,h:2,minW:2,maW:4}];function Tt(){let e;const t=[["layout",Ot],["className","layout"],["cols",24],["autoSize",!1],["isDraggable",!0],["compactType","vertical"],["rowHeight",30],["onLayoutChange",e=>{console.log(Z(e));for(let t=0;t<=e.length-1;t++){const n=e[t];console.log(Z(n.x)),console.log(Z(n.y)),console.log(Z(n.i)),console.log(Z(n.w)),console.log(Z(n.h))}}],["width",1200],(e=pe([(0,Ze.createElement)("div",{key:"a",children:"Texta"}),(0,Ze.createElement)("div",{key:"b",children:"Textb"}),(0,Ze.createElement)("div",{key:"c",children:"Textc"}),(0,Ze.createElement)("div",{key:"d",children:"Textd"}),(0,Ze.createElement)("div",{key:"e",children:"TextE"})]),["children",Qe.Children.toArray(Array.from(e))])];return Qe.createElement(Gt,x(t))}const Lt=(()=>{const e=[(0,Ze.createElement)(Tt,null)];return Ze.createElement("div",function(e,t=0){const n={},r=t;function o(e){throw new Error("Cannot infer key and value of "+String(e))}function i(e,t,r){e=function(e,t){switch(t){case 1:return e.charAt(0).toLowerCase()+e.slice(1);case 2:return kt(e,"_");case 3:return kt(e,"_").toUpperCase();case 4:return kt(e,"-");default:return e}}(e,t),n[e]=r}for(let t of e){let e=0;if(null==t&&o(t),t instanceof O){const n=t.cases()[t.tag];t=0===t.fields.length?n:[n].concat(t.fields),e=r}if(Array.isArray(t))switch(t.length){case 0:o(t);break;case 1:i(t[0],e,!0);break;case 2:const n=t[1];i(t[0],e,n);break;default:i(t[0],e,t.slice(1))}else"string"==typeof t?i(t,e,!0):o(t)}return n}([["style",{height:800}]],1),...e)})();function Mt(){let e;const t=pe([(e=ae(xt("GridLayout",'\n    let layouts =\n        [|  GridLayout.layout [\n                    layout.i "a"\n                    layout.x 0\n                    layout.y 0\n                    layout.w 1\n                    layout.h 2\n                    layout.``static`` true\n                ]\n            GridLayout.layout [\n                layout.i "b"\n                layout.x 1\n                layout.y 0\n                layout.w 3\n                layout.h 2\n                layout.minW 2\n                layout.maxW 4\n            ] |]\n    [<ReactComponent>]\n    let GridLayoutChart () =\n        GridLayout.gridChart [\n                GridLayout.layoutElements layouts\n                GridLayout.className "layout"\n                GridLayout.cols 24\n                GridLayout.autoSize false\n                GridLayout.isDraggable true\n                GridLayout.compactType Vertical\n                GridLayout.rowHeight 30\n                GridLayout.onLayoutChange (fun layout ->\n                    console.log layout\n                    for e in layout do\n                        console.log e.x\n                        console.log e.y\n                        console.log e.i\n                        console.log e.w\n                        console.log e.h)\n                GridLayout.width 1200\n                GridLayout.children [\n                    Html.div [\n                        prop.key "a"\n                        prop.text "Texta"\n                    ]\n                    Html.div [\n                        prop.key "b"\n                        prop.text "Textb"\n                    ]\n                    Html.div [\n                        prop.key "c"\n                        prop.text "Textc"\n                    ]\n                    Html.div [\n                        prop.key "d"\n                        prop.text "Textd"\n                    ]\n                    Html.div [\n                        prop.key "e"\n                        prop.text "TextE"\n                    ]\n\n                ]\n            ]\n    ',Lt)),(0,Ze.createElement)("div",{className:"content",children:Qe.Children.toArray(Array.from(e))})),At("GridLayout")]);return(0,Ze.createElement)("div",{children:Qe.Children.toArray(Array.from(t))})}function jt(){let e,t,n,r,o,i,l;const s=[(e=pe(["Install",(0,Ze.createElement)("a",{className:"link",href:"https://www.nuget.org/packages/Feliz.GridLayout",children:"Feliz.GridLayout NuGet"}),"."]),(0,Ze.createElement)("div",{className:"description",children:Qe.Children.toArray(Array.from(e))})),(0,Ze.createElement)("div",{className:"description",children:Qe.Children.toArray(["Using NuGet package command"])}),(t=ae((n=ae((0,Ze.createElement)("pre",x(pe([["data-prefix","$"],(r=[(0,Ze.createElement)("code",{children:["Install-Package Feliz.GridLayout"]})],["children",Qe.Children.toArray(Array.from(r))])])))),(0,Ze.createElement)("div",{className:"mockup-code",children:Qe.Children.toArray(Array.from(n))}))),(0,Ze.createElement)("div",{className:"max-w-xl",children:Qe.Children.toArray(Array.from(t))})),(0,Ze.createElement)("div",{className:"description",children:Qe.Children.toArray(["or Paket"])}),(o=ae((i=ae((0,Ze.createElement)("pre",x(pe([["data-prefix","$"],(l=[(0,Ze.createElement)("code",{children:["paket add Feliz.GridLayout"]})],["children",Qe.Children.toArray(Array.from(l))])])))),(0,Ze.createElement)("div",{className:"mockup-code",children:Qe.Children.toArray(Array.from(i))}))),(0,Ze.createElement)("div",{className:"max-w-xl",children:Qe.Children.toArray(Array.from(o))}))];return Ze.createElement(Ze.Fragment,{},...s)}class Dt extends O{constructor(e,...t){super(),this.tag=0|e,this.fields=t}cases(){return["UrlChanged","SetTheme"]}}class Ut extends T{constructor(e,t){super(),this.Page=e,this.Theme=t}}function _t(e,t,n,r,o){let i,l,s,u,c,a;const f=pe([(i=ae((l=ae((s=ae((0,Ze.createElement)("label",x(Ct("btn",pe([["className","btn-square"],["className","btn-ghost"],["htmlFor","main-menu"],(u=[(0,Ze.createElement)("svg",x(pe([["viewBox","0 0 24 24"],["className","inline-block w-6 h-6 stroke-current"],(c=ae((0,Ze.createElement)("path",{d:"M4 6h16M4 12h16M4 18h16",strokeWidth:2})),["children",Qe.Children.toArray(Array.from(c))])])))],["children",Qe.Children.toArray(Array.from(u))])]))))),(0,Ze.createElement)("div",{className:"lg:hidden",children:Qe.Children.toArray(Array.from(s))}))),(0,Ze.createElement)("div",{className:"navbar-start",children:Qe.Children.toArray(Array.from(l))}))),(0,Ze.createElement)("div",{className:"navbar",children:Qe.Children.toArray(Array.from(i))})),(a=pe([(0,Ze.createElement)("h2",x(pe([(d=["className","text-primary"],h=["className","my-6 text-5xl font-bold"],["className",$(" ",we((e=>{const t=e;return"className"===t[0]?k(t[1]):void 0}),pe([d,h])))]),["children",n]]))),o]),(0,Ze.createElement)("div",{className:"px-5 py-5",children:Qe.Children.toArray(Array.from(a))}))]);var d,h;return(0,Ze.createElement)("div",{className:"drawer-content",children:Qe.Children.toArray(Array.from(f))})}function Ft(e){let t,n,r,o,i;const l=(t,n)=>{const r=ae((0,Ze.createElement)("a",x(_e(Me((()=>ze(p(e,n)?Ue(["className","active"]):De(),Me((()=>ze(Ue(["children",t]),Me((()=>{let e,t;return ze(Ue(["href",(e=Et(n),t=e[1],Q(ee((e=>at(ve(e[0],ae(e[1]+ct(t))),1)),ft(e[0])),(()=>at(ae(ct(t)),1))))]),Me((()=>Ue(["onClick",e=>{var t;(t=e).preventDefault(),dt(ae(t.currentTarget.attributes.href.value),1,1)}]))))}))))))))))));return(0,Ze.createElement)("li",{children:Qe.Children.toArray(Array.from(r))})},s=pe([(0,Ze.createElement)("label",x(Ct("drawer-overlay",ae(["htmlFor","main-menu"])))),(0,Ze.createElement)("aside",x(pe([["className","flex flex-col border-r w-80 bg-base-100 text-base-content"],(t=[(n=pe([(0,Ze.createElement)("span",{className:"text-primary",children:"Feliz.GridLayout"}),(0,Ze.createElement)("a",x(pe([["href","https://www.nuget.org/packages/Feliz.GridLayout"],(r=[(0,Ze.createElement)("img",{src:"https://img.shields.io/nuget/v/Feliz.GridLayout.svg?style=flat-square"})],["children",Qe.Children.toArray(Array.from(r))])])))]),(0,Ze.createElement)("div",{className:"inline-block text-3xl font-title px-5 py-5 font-bold",children:Qe.Children.toArray(Array.from(n))})),(0,Ze.createElement)("ul",x(Ct("menu",pe([["className","menu-compact"],["className","flex flex-col p-4 pt-0"],(o=[(i=ae((0,Ze.createElement)("span",{children:["Docs"]})),(0,Ze.createElement)("li",{className:"menu-title",children:Qe.Children.toArray(Array.from(i))})),l("Install",new yt(0)),l("Use",new yt(1)),l("GridLayout",new yt(2))],["children",Qe.Children.toArray(Array.from(o))])]))))],["children",Qe.Children.toArray(Array.from(t))])])))]);return(0,Ze.createElement)("div",{className:"drawer-side",children:Qe.Children.toArray(Array.from(s))})}function zt(e,t,n,r,o,i){let l,s;return(0,Ze.createElement)("div",x(pe([["className","bg-base-100 text-base-content h-screen"],["data-theme",e.Theme],(l=[(0,Ze.createElement)("div",x(Ct("drawer",pe([["className","drawer-mobile"],(s=[(0,Ze.createElement)("input",x(Ct("drawer-toggle",pe([["type","checkbox"],["id","main-menu"]])))),_t(0,0,n,0,i),Ft(o)],["children",Qe.Children.toArray(Array.from(s))])]))))],["children",Qe.Children.toArray(Array.from(l))])])))}function Ht(e){let t;const n=e.dispatch,r=e.state;let o;switch(r.Page.tag){case 1:o=["How to use","/docs/use",(0,Ze.createElement)(St,null)];break;case 2:o=["GridLayout","/docs/use",(0,Ze.createElement)(Mt,null)];break;default:o=["Installation","/docs/install",(0,Ze.createElement)(jt,null)]}return mt(x(pe([["hashMode",1],["onUrlChanged",e=>{n(new Dt(0,pt(e)))}],(t=ae(zt(r,0,o[0],o[1],r.Page,o[2])),["application",Ze.createElement(Ze.Fragment,{},...t)])])))}var Pt,Rt;!function(e){Be(void 0,e)}(("safer-app",Rt=(e,t)=>(0,Ze.createElement)(Ht,{state:e,dispatch:t}),Pt=new Je((function(){const e=pt(ht(window.location.hash,1));return[new Ut(e,"corporate"),wt(e)]}),(function(e,t){return 1===e.tag?[new Ut(t.Page,e.fields[0]),be()]:[new Ut(e.fields[0],t.Theme),be()]}),(e=>be()),Rt,S(2,(e=>{const t=G(1,Rt,[e]);return e=>{t(e)}})),(e=>{var t,n;t=e[0],n=e[1],console.error(Z(t),n)}),S(2,(e=>e))),function(e,t,n){return function(e,t){return new Je(t.init,t.update,t.subscribe,t.view,e,t.onError,t.syncDispatch)}(((r,o)=>{Ye.render(e((e=>t=>e===t),function(e){return I(2,e.view)}(n),r,o),document.getElementById(t))}),n)}(((e,t,n,r)=>function(e,t,n,r){const o=new Xe(n,(()=>t(n,r)),e);return Ze.createElement(Ke,o)}(S(2,e),S(2,t),n,r)),"safer-app",Pt)))}},e=>{var t=t=>e(e.s=t);e.O(0,[216],(()=>(t(29),t(758)))),e.O()}]);
//# sourceMappingURL=app.598d5a651981195fa32d.js.map