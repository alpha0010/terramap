importScripts('../../../resources/js/settings.js');
var Module = {};
var k;k||=typeof Module != 'undefined' ? Module : {};k.X=new Promise(b=>{k.onRuntimeInitialized=b});k.terramap=async()=>{await k.X;return new k.Loader};var aa="./this.program",ba;ba=self.location.href;var ca="",da,ea;try{ca=(new URL(".",ba)).href}catch{}ea=b=>{var a=new XMLHttpRequest;a.open("GET",b,!1);a.responseType="arraybuffer";a.send(null);return new Uint8Array(a.response)};
da=async b=>{b=await fetch(b,{credentials:"same-origin"});if(b.ok)return b.arrayBuffer();throw Error(b.status+" : "+b.url);};var m=console.error.bind(console),q,fa=!1,r,ha,w,z,B,C,D,ia,ja,ka,la;function ma(){var b=r.buffer;ha=new Int8Array(b);z=new Int16Array(b);w=new Uint8Array(b);B=new Uint16Array(b);C=new Int32Array(b);D=new Uint32Array(b);ia=new Float32Array(b);ja=new Float64Array(b);ka=new BigInt64Array(b);la=new BigUint64Array(b)}var E=0,F=null;
function na(b){k.onAbort?.(b);b="Aborted("+b+")";m(b);fa=!0;throw new WebAssembly.RuntimeError(b+". Build with -sASSERTIONS for more info.");}var oa;async function pa(b){if(!q)try{var a=await da(b);return new Uint8Array(a)}catch{}if(b==oa&&q)b=new Uint8Array(q);else if(ea)b=ea(b);else throw"both async and sync fetching of the wasm failed";return b}
async function qa(b,a){try{var c=await pa(b);return await WebAssembly.instantiate(c,a)}catch(d){m(`failed to asynchronously prepare wasm: ${d}`),na(d)}}async function ra(b){var a=oa;if(!q)try{var c=fetch(a,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(c,b)}catch(d){m(`wasm streaming compile failed: ${d}`),m("falling back to ArrayBuffer instantiation")}return qa(a,b)}var sa=b=>{for(;0<b.length;)b.shift()(k)},ta=[],ua=[],xa=()=>{var b=k.preRun.shift();ua.push(b)};
class ya{constructor(b){this.i=b-24}}var za=0,Aa=0,G=b=>{for(var a="";;){var c=w[b++];if(!c)return a;a+=String.fromCharCode(c)}},H={},I={},J={},K=class extends Error{constructor(b){super(b);this.name="BindingError"}},Ba=b=>{throw new K(b);};
function Ca(b,a,c={}){var d=a.name;if(!b)throw new K(`type "${d}" must have a positive integer typeid pointer`);if(I.hasOwnProperty(b)){if(c.W)return;throw new K(`Cannot register type '${d}' twice`);}I[b]=a;delete J[b];H.hasOwnProperty(b)&&(a=H[b],delete H[b],a.forEach(e=>e()))}function L(b,a,c={}){return Ca(b,a,c)}
var Da=(b,a,c)=>{switch(a){case 1:return c?d=>ha[d]:d=>w[d];case 2:return c?d=>z[d>>1]:d=>B[d>>1];case 4:return c?d=>C[d>>2]:d=>D[d>>2];case 8:return c?d=>ka[d>>3]:d=>la[d>>3];default:throw new TypeError(`invalid integer width (${a}): ${b}`);}},Ea=b=>{throw new K(b.g.j.h.name+" instance already deleted");},Fa=!1,Ga=()=>{},M=b=>{if("undefined"===typeof FinalizationRegistry)return M=a=>a,b;Fa=new FinalizationRegistry(a=>{a=a.g;--a.count.value;0===a.count.value&&(a.l?a.s.C(a.l):a.j.h.C(a.i))});M=a=>
{var c=a.g;c.l&&Fa.register(a,{g:c},a);return a};Ga=a=>{Fa.unregister(a)};return M(b)},Ha=[];function N(){}
var Ia=(b,a)=>Object.defineProperty(a,"name",{value:b}),Ja={},Ka=(b,a,c)=>{if(void 0===b[a].A){var d=b[a];b[a]=function(...e){if(!b[a].A.hasOwnProperty(e.length))throw new K(`Function '${c}' called with an invalid number of arguments (${e.length}) - expects one of (${b[a].A})!`);return b[a].A[e.length].apply(this,e)};b[a].A=[];b[a].A[d.G]=d}},La=(b,a)=>{if(k.hasOwnProperty(b))throw new K(`Cannot register public name '${b}' twice`);k[b]=a;k[b].G=void 0},Ma=b=>{b=b.replace(/[^a-zA-Z0-9_]/g,"$");var a=
b.charCodeAt(0);return 48<=a&&57>=a?`_${b}`:b};function Na(b,a,c,d,e,g,f,h){this.name=b;this.constructor=a;this.F=c;this.C=d;this.o=e;this.U=g;this.J=f;this.T=h;this.Z=[]}var Oa=(b,a,c)=>{for(;a!==c;){if(!a.J)throw new K(`Expected null or instance of ${c.name}, got an instance of ${a.name}`);b=a.J(b);a=a.o}return b},Pa=b=>{if(null===b)return"null";var a=typeof b;return"object"===a||"array"===a||"function"===a?b.toString():""+b};
function Qa(b,a){if(null===a){if(this.M)throw new K(`null is not a valid ${this.name}`);return 0}if(!a.g)throw new K(`Cannot pass "${Pa(a)}" as a ${this.name}`);if(!a.g.i)throw new K(`Cannot pass deleted object as a pointer of type ${this.name}`);return Oa(a.g.i,a.g.j.h,this.h)}
function Ra(b,a){if(null===a){if(this.M)throw new K(`null is not a valid ${this.name}`);if(this.L){var c=this.$();null!==b&&b.push(this.C,c);return c}return 0}if(!a||!a.g)throw new K(`Cannot pass "${Pa(a)}" as a ${this.name}`);if(!a.g.i)throw new K(`Cannot pass deleted object as a pointer of type ${this.name}`);if(!this.K&&a.g.j.K)throw new K(`Cannot convert argument of type ${a.g.s?a.g.s.name:a.g.j.name} to parameter type ${this.name}`);c=Oa(a.g.i,a.g.j.h,this.h);if(this.L){if(void 0===a.g.l)throw new K("Passing raw pointer to smart pointer is illegal");
switch(this.ba){case 0:if(a.g.s===this)c=a.g.l;else throw new K(`Cannot convert argument of type ${a.g.s?a.g.s.name:a.g.j.name} to parameter type ${this.name}`);break;case 1:c=a.g.l;break;case 2:if(a.g.s===this)c=a.g.l;else{var d=a.clone();c=this.aa(c,O(()=>d["delete"]()));null!==b&&b.push(this.C,c)}break;default:throw new K("Unsupporting sharing policy");}}return c}
function Sa(b,a){if(null===a){if(this.M)throw new K(`null is not a valid ${this.name}`);return 0}if(!a.g)throw new K(`Cannot pass "${Pa(a)}" as a ${this.name}`);if(!a.g.i)throw new K(`Cannot pass deleted object as a pointer of type ${this.name}`);if(a.g.j.K)throw new K(`Cannot convert argument of type ${a.g.j.name} to parameter type ${this.name}`);return Oa(a.g.i,a.g.j.h,this.h)}function P(b){return this.m(D[b>>2])}
var Ta=(b,a,c)=>{if(a===c)return b;if(void 0===c.o)return null;b=Ta(b,a,c.o);return null===b?null:c.T(b)},Ua={},Va=(b,a)=>{if(void 0===a)throw new K("ptr should not be undefined");for(;b.o;)a=b.J(a),b=b.o;return Ua[a]},Q=class extends Error{constructor(b){super(b);this.name="InternalError"}},Wa=(b,a)=>{if(!a.j||!a.i)throw new Q("makeClassHandle requires ptr and ptrType");if(!!a.s!==!!a.l)throw new Q("Both smartPtrType and smartPtr must be specified");a.count={value:1};return M(Object.create(b,{g:{value:a,
writable:!0}}))};function Xa(b,a,c,d,e,g,f,h,n,p,l){this.name=b;this.h=a;this.M=c;this.K=d;this.L=e;this.Y=g;this.ba=f;this.R=h;this.$=n;this.aa=p;this.C=l;e||void 0!==a.o?this.u=Ra:(this.u=d?Qa:Sa,this.v=null)}var Ya=(b,a)=>{if(!k.hasOwnProperty(b))throw new Q("Replacing nonexistent public symbol");k[b]=a;k[b].G=void 0},Za=[],$a,R=(b,a)=>{b=G(b);var c;(c=Za[a])||(Za[a]=c=$a.get(a));if("function"!=typeof c)throw new K(`unknown function pointer with signature ${b}: ${a}`);return c};
class ab extends Error{}
var cb=b=>{b=bb(b);var a=G(b);S(b);return a},eb=(b,a)=>{function c(g){e[g]||I[g]||(J[g]?J[g].forEach(c):(d.push(g),e[g]=!0))}var d=[],e={};a.forEach(c);throw new ab(`${b}: `+d.map(cb).join([", "]));},V=(b,a,c)=>{function d(h){h=c(h);if(h.length!==b.length)throw new Q("Mismatched type converter count");for(var n=0;n<b.length;++n)L(b[n],h[n])}b.forEach(h=>J[h]=a);var e=Array(a.length),g=[],f=0;a.forEach((h,n)=>{I.hasOwnProperty(h)?e[n]=I[h]:(g.push(h),H.hasOwnProperty(h)||(H[h]=[]),H[h].push(()=>{e[n]=
I[h];++f;f===g.length&&d(e)}))});0===g.length&&d(e)},fb=(b,a)=>{for(var c=[],d=0;d<b;d++)c.push(D[a+4*d>>2]);return c},gb=b=>{for(;b.length;){var a=b.pop();b.pop()(a)}};function hb(b){for(var a=1;a<b.length;++a)if(null!==b[a]&&void 0===b[a].v)return!0;return!1}
function ib(b,a,c,d,e,g){var f=a.length;if(2>f)throw new K("argTypes array size mismatch! Must at least get return value and 'this' types!");var h=null!==a[1]&&null!==c,n=hb(a);c=!a[0].P;var p=a[0],l=a[1];d=[b,Ba,d,e,gb,p.m.bind(p),l?.u.bind(l)];for(e=2;e<f;++e)p=a[e],d.push(p.u.bind(p));if(!n)for(e=h?1:2;e<a.length;++e)null!==a[e].v&&d.push(a[e].v);n=hb(a);e=a.length-2;l=[];p=["fn"];h&&p.push("thisWired");for(f=0;f<e;++f)l.push(`arg${f}`),p.push(`arg${f}Wired`);l=l.join(",");p=p.join(",");l=`return function (${l}) {\n`;
n&&(l+="var destructors = [];\n");var A=n?"destructors":"null",v="humanName throwBindingError invoker fn runDestructors fromRetWire toClassParamWire".split(" ");h&&(l+=`var thisWired = toClassParamWire(${A}, this);\n`);for(f=0;f<e;++f){var t=`toArg${f}Wire`;l+=`var arg${f}Wired = ${t}(${A}, arg${f});\n`;v.push(t)}l+=(c||g?"var rv = ":"")+`invoker(${p});\n`;if(n)l+="runDestructors(destructors);\n";else for(f=h?1:2;f<a.length;++f)g=1===f?"thisWired":"arg"+(f-2)+"Wired",null!==a[f].v&&(l+=`${g}_dtor(${g});\n`,
v.push(`${g}_dtor`));c&&(l+="var ret = fromRetWire(rv);\nreturn ret;\n");a=(new Function(v,l+"}\n"))(...d);return Ia(b,a)}
var jb=b=>{b=b.trim();const a=b.indexOf("(");return-1===a?b:b.slice(0,a)},kb=[],W=[0,1,,1,null,1,!0,1,!1,1],lb=b=>{9<b&&0===--W[b+1]&&(W[b]=void 0,kb.push(b))},X=b=>{if(!b)throw new K(`Cannot use deleted val. handle = ${b}`);return W[b]},O=b=>{switch(b){case void 0:return 2;case null:return 4;case !0:return 6;case !1:return 8;default:const a=kb.pop()||W.length;W[a]=b;W[a+1]=1;return a}},mb={name:"emscripten::val",m:b=>{var a=X(b);lb(b);return a},u:(b,a)=>O(a),B:P,v:null},nb=(b,a)=>{switch(a){case 4:return function(c){return this.m(ia[c>>
2])};case 8:return function(c){return this.m(ja[c>>3])};default:throw new TypeError(`invalid float width (${a}): ${b}`);}},Y=(b,a,c)=>{var d=w;if(!(0<c))return 0;var e=a;c=a+c-1;for(var g=0;g<b.length;++g){var f=b.codePointAt(g);if(127>=f){if(a>=c)break;d[a++]=f}else if(2047>=f){if(a+1>=c)break;d[a++]=192|f>>6;d[a++]=128|f&63}else if(65535>=f){if(a+2>=c)break;d[a++]=224|f>>12;d[a++]=128|f>>6&63;d[a++]=128|f&63}else{if(a+3>=c)break;d[a++]=240|f>>18;d[a++]=128|f>>12&63;d[a++]=128|f>>6&63;d[a++]=128|
f&63;g++}}d[a]=0;return a-e},ob=b=>{for(var a=0,c=0;c<b.length;++c){var d=b.charCodeAt(c);127>=d?a++:2047>=d?a+=2:55296<=d&&57343>=d?(a+=4,++c):a+=3}return a},pb="undefined"!=typeof TextDecoder?new TextDecoder:void 0,qb=(b,a,c,d)=>{c=a+c;if(d)return c;for(;b[a]&&!(a>=c);)++a;return a},rb=(b=0,a,c)=>{var d=w;a=qb(d,b,a,c);if(16<a-b&&d.buffer&&pb)return pb.decode(d.subarray(b,a));for(c="";b<a;){var e=d[b++];if(e&128){var g=d[b++]&63;if(192==(e&224))c+=String.fromCharCode((e&31)<<6|g);else{var f=d[b++]&
63;e=224==(e&240)?(e&15)<<12|g<<6|f:(e&7)<<18|g<<12|f<<6|d[b++]&63;65536>e?c+=String.fromCharCode(e):(e-=65536,c+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else c+=String.fromCharCode(e)}return c},sb="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,tb=(b,a,c)=>{b>>=1;a=qb(B,b,a/2,c);if(16<a-b&&sb)return sb.decode(B.subarray(b,a));for(c="";b<a;++b)c+=String.fromCharCode(B[b]);return c},ub=(b,a,c)=>{c??=2147483647;if(2>c)return 0;c-=2;var d=a;c=c<2*b.length?c/2:b.length;for(var e=
0;e<c;++e)z[a>>1]=b.charCodeAt(e),a+=2;z[a>>1]=0;return a-d},vb=b=>2*b.length,wb=(b,a,c)=>{var d="";b>>=2;for(var e=0;!(e>=a/4);e++){var g=D[b+e];if(!g&&!c)break;d+=String.fromCodePoint(g)}return d},xb=(b,a,c)=>{c??=2147483647;if(4>c)return 0;var d=a;c=d+c-4;for(var e=0;e<b.length;++e){var g=b.codePointAt(e);65535<g&&e++;C[a>>2]=g;a+=4;if(a+4>c)break}C[a>>2]=0;return a-d},yb=b=>{for(var a=0,c=0;c<b.length;++c)65535<b.codePointAt(c)&&c++,a+=4;return a},zb=[],Ab=b=>{var a=zb.length;zb.push(b);return a},
Bb=(b,a)=>{for(var c=Array(b),d=0;d<b;++d){var e=d,g=D[a+4*d>>2],f=I[g];if(void 0===f)throw b=`${`parameter ${d}`} has unknown type ${cb(g)}`,new K(b);c[e]=f}return c},Cb=(b,a,c)=>{var d=[];b=b(d,c);d.length&&(D[a>>2]=O(d));return b},Db={},Eb=b=>{var a=Db[b];return void 0===a?G(b):a},Fb=[],Gb={},Ib=()=>{if(!Hb){var b={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.language||"C").replace("-","_")+".UTF-8",_:aa||"./this.program"},
a;for(a in Gb)void 0===Gb[a]?delete b[a]:b[a]=Gb[a];var c=[];for(a in b)c.push(`${a}=${b[a]}`);Hb=c}return Hb},Hb;
(()=>{let b=N.prototype;Object.assign(b,{isAliasOf:function(c){if(!(this instanceof N&&c instanceof N))return!1;var d=this.g.j.h,e=this.g.i;c.g=c.g;var g=c.g.j.h;for(c=c.g.i;d.o;)e=d.J(e),d=d.o;for(;g.o;)c=g.J(c),g=g.o;return d===g&&e===c},clone:function(){this.g.i||Ea(this);if(this.g.I)return this.g.count.value+=1,this;var c=M,d=Object,e=d.create,g=Object.getPrototypeOf(this),f=this.g;c=c(e.call(d,g,{g:{value:{count:f.count,H:f.H,I:f.I,i:f.i,j:f.j,l:f.l,s:f.s}}}));c.g.count.value+=1;c.g.H=!1;return c},
["delete"](){this.g.i||Ea(this);if(this.g.H&&!this.g.I)throw new K("Object already scheduled for deletion");Ga(this);var c=this.g;--c.count.value;0===c.count.value&&(c.l?c.s.C(c.l):c.j.h.C(c.i));this.g.I||(this.g.l=void 0,this.g.i=void 0)},isDeleted:function(){return!this.g.i},deleteLater:function(){this.g.i||Ea(this);if(this.g.H&&!this.g.I)throw new K("Object already scheduled for deletion");Ha.push(this);this.g.H=!0;return this}});const a=Symbol.dispose;a&&(b[a]=b["delete"])})();
Object.assign(Xa.prototype,{V(b){this.R&&(b=this.R(b));return b},O(b){this.C?.(b)},B:P,m:function(b){function a(){return this.L?Wa(this.h.F,{j:this.Y,i:c,s:this,l:b}):Wa(this.h.F,{j:this,i:b})}var c=this.V(b);if(!c)return this.O(b),null;var d=Va(this.h,c);if(void 0!==d){if(0===d.g.count.value)return d.g.i=c,d.g.l=b,d.clone();d=d.clone();this.O(b);return d}d=this.h.U(c);d=Ja[d];if(!d)return a.call(this);d=this.K?d.S:d.pointerType;var e=Ta(c,this.h,d.h);return null===e?a.call(this):this.L?Wa(d.h.F,
{j:d,i:e,s:this,l:b}):Wa(d.h.F,{j:d,i:e})}});k.printErr&&(m=k.printErr);k.wasmBinary&&(q=k.wasmBinary);k.thisProgram&&(aa=k.thisProgram);
var Jb={156696:(b,a,c,d)=>{b=new Uint8ClampedArray(r.buffer,b,a*c*4);a=new ImageData(b,a);self[d?rb(d):""].putImageData(a,0,0)}},Kb,bb,S,Lb={__cxa_throw:(b,a,c)=>{var d=new ya(b);D[d.i+16>>2]=0;D[d.i+4>>2]=a;D[d.i+8>>2]=c;za=b;Aa++;throw za;},_abort_js:()=>na(""),_embind_register_bigint:(b,a,c,d,e)=>{a=G(a);d=0n===d;let g=f=>f;if(d){const f=8*c;g=h=>BigInt.asUintN(f,h);e=g(e)}L(b,{name:a,m:g,u:(f,h)=>{"number"==typeof h&&(h=BigInt(h));return h},B:Da(a,c,!d),v:null})},_embind_register_bool:(b,a,c,
d)=>{a=G(a);L(b,{name:a,m:function(e){return!!e},u:function(e,g){return g?c:d},B:function(e){return this.m(w[e])},v:null})},_embind_register_class:(b,a,c,d,e,g,f,h,n,p,l,A,v)=>{l=G(l);g=R(e,g);h&&=R(f,h);p&&=R(n,p);v=R(A,v);var t=Ma(l);La(t,function(){eb(`Cannot construct ${l} due to unbound types`,[d])});V([b,a,c],d?[d]:[],u=>{u=u[0];if(d){var x=u.h;var T=x.F}else T=N.prototype;u=Ia(l,function(...va){if(Object.getPrototypeOf(this)!==wa)throw new K(`Use 'new' to construct ${l}`);if(void 0===y.D)throw new K(`${l} has no accessible constructor`);
var db=y.D[va.length];if(void 0===db)throw new K(`Tried to invoke ctor of ${l} with invalid number of parameters (${va.length}) - expected (${Object.keys(y.D).toString()}) parameters instead!`);return db.apply(this,va)});var wa=Object.create(T,{constructor:{value:u}});u.prototype=wa;var y=new Na(l,u,wa,v,x,g,h,p);if(y.o){var U;(U=y.o).N??(U.N=[]);y.o.N.push(y)}x=new Xa(l,y,!0,!1,!1);U=new Xa(l+"*",y,!1,!1,!1);T=new Xa(l+" const*",y,!1,!0,!1);Ja[b]={pointerType:U,S:T};Ya(t,u);return[x,U,T]})},_embind_register_class_constructor:(b,
a,c,d,e,g)=>{var f=fb(a,c);e=R(d,e);V([],[b],h=>{h=h[0];var n=`constructor ${h.name}`;void 0===h.h.D&&(h.h.D=[]);if(void 0!==h.h.D[a-1])throw new K(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${h.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);h.h.D[a-1]=()=>{eb(`Cannot construct ${h.name} due to unbound types`,f)};V([],f,p=>{p.splice(1,0,null);h.h.D[a-1]=ib(n,p,null,e,g);return[]});return[]})},
_embind_register_class_function:(b,a,c,d,e,g,f,h,n)=>{var p=fb(c,d);a=G(a);a=jb(a);g=R(e,g);V([],[b],l=>{function A(){eb(`Cannot call ${v} due to unbound types`,p)}l=l[0];var v=`${l.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]);h&&l.h.Z.push(a);var t=l.h.F,u=t[a];void 0===u||void 0===u.A&&u.className!==l.name&&u.G===c-2?(A.G=c-2,A.className=l.name,t[a]=A):(Ka(t,a,v),t[a].A[c-2]=A);V([],p,x=>{x=ib(v,x,l,g,f,n);void 0===t[a].A?(x.G=c-2,t[a]=x):t[a].A[c-2]=x;return[]});return[]})},_embind_register_emval:b=>
L(b,mb),_embind_register_float:(b,a,c)=>{a=G(a);L(b,{name:a,m:d=>d,u:(d,e)=>e,B:nb(a,c),v:null})},_embind_register_integer:(b,a,c,d,e)=>{a=G(a);let g=h=>h;if(0===d){var f=32-8*c;g=h=>h<<f>>>f;e=g(e)}L(b,{name:a,m:g,u:(h,n)=>n,B:Da(a,c,0!==d),v:null})},_embind_register_memory_view:(b,a,c)=>{function d(g){return new e(ha.buffer,D[g+4>>2],D[g>>2])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][a];c=G(c);L(b,{name:c,m:d,
B:d},{W:!0})},_embind_register_std_string:(b,a)=>{a=G(a);L(b,{name:a,m(c){var d=(d=c+4)?rb(d,D[c>>2],!0):"";S(c);return d},u(c,d){d instanceof ArrayBuffer&&(d=new Uint8Array(d));var e="string"==typeof d;if(!(e||ArrayBuffer.isView(d)&&1==d.BYTES_PER_ELEMENT))throw new K("Cannot pass non-string to std::string");var g=e?ob(d):d.length;var f=Kb(4+g+1),h=f+4;D[f>>2]=g;e?Y(d,h,g+1):w.set(d,h);null!==c&&c.push(S,f);return f},B:P,v(c){S(c)}})},_embind_register_std_wstring:(b,a,c)=>{c=G(c);if(2===a){var d=
tb;var e=ub;var g=vb}else d=wb,e=xb,g=yb;L(b,{name:c,m:f=>{var h=d(f+4,D[f>>2]*a,!0);S(f);return h},u:(f,h)=>{if("string"!=typeof h)throw new K(`Cannot pass non-string to C++ string type ${c}`);var n=g(h),p=Kb(4+n+a);D[p>>2]=n/a;e(h,p+4,n+a);null!==f&&f.push(S,p);return p},B:P,v(f){S(f)}})},_embind_register_void:(b,a)=>{a=G(a);L(b,{P:!0,name:a,m:()=>{},u:()=>{}})},_emval_create_invoker:(b,a,c)=>{var [d,...e]=Bb(b,a);a=d.u.bind(d);var g=e.map(n=>n.B.bind(n));b--;var f={toValue:X};b=g.map((n,p)=>{var l=
`argFromPtr${p}`;f[l]=n;return`${l}(args${p?"+"+8*p:""})`});switch(c){case 0:var h="toValue(handle)";break;case 2:h="new (toValue(handle))";break;case 3:h="";break;case 1:f.getStringOrSymbol=Eb,h="toValue(handle)[getStringOrSymbol(methodName)]"}h+=`(${b})`;d.P||(f.toReturnWire=a,f.emval_returnValue=Cb,h=`return emval_returnValue(toReturnWire, destructorsRef, ${h})`);h=`return function (handle, methodName, destructorsRef, args) {\n  ${h}\n  }`;c=(new Function(Object.keys(f),h))(...Object.values(f));
h=`methodCaller<(${e.map(n=>n.name)}) => ${d.name}>`;return Ab(Ia(h,c))},_emval_decref:lb,_emval_get_property:(b,a)=>{b=X(b);a=X(a);return O(b[a])},_emval_incref:b=>{9<b&&(W[b+1]+=1)},_emval_invoke:(b,a,c,d,e)=>zb[b](a,c,d,e),_emval_new_array:()=>O([]),_emval_new_array_from_memory_view:b=>{b=X(b);for(var a=Array(b.length),c=0;c<b.length;c++)a[c]=b[c];return O(a)},_emval_new_cstring:b=>O(Eb(b)),_emval_new_object:()=>O({}),_emval_run_destructors:b=>{var a=X(b);gb(a);lb(b)},_emval_set_property:(b,a,
c)=>{b=X(b);a=X(a);c=X(c);b[a]=c},_tzset_js:(b,a,c,d)=>{var e=(new Date).getFullYear(),g=(new Date(e,0,1)).getTimezoneOffset();e=(new Date(e,6,1)).getTimezoneOffset();D[b>>2]=60*Math.max(g,e);C[a>>2]=Number(g!=e);a=f=>{var h=Math.abs(f);return`UTC${0<=f?"-":"+"}${String(Math.floor(h/60)).padStart(2,"0")}${String(h%60).padStart(2,"0")}`};b=a(g);a=a(e);e<g?(Y(b,c,17),Y(a,d,17)):(Y(b,d,17),Y(a,c,17))},emscripten_asm_const_int:(b,a,c)=>{Fb.length=0;for(var d;d=w[a++];){var e=105!=d;e&=112!=d;c+=e&&c%
8?4:0;Fb.push(112==d?D[c>>2]:106==d?ka[c>>3]:105==d?C[c>>2]:ja[c>>3]);c+=e?8:4}return Jb[b](...Fb)},emscripten_resize_heap:b=>{var a=w.length;b>>>=0;if(2147483648<b)return!1;for(var c=1;4>=c;c*=2){var d=a*(1+.2/c);d=Math.min(d,b+100663296);a:{d=(Math.min(2147483648,65536*Math.ceil(Math.max(b,d)/65536))-r.buffer.byteLength+65535)/65536|0;try{r.grow(d);ma();var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},environ_get:(b,a)=>{var c=0,d=0,e;for(e of Ib()){var g=a+c;D[b+d>>2]=g;c+=Y(e,g,Infinity)+
1;d+=4}return 0},environ_sizes_get:(b,a)=>{var c=Ib();D[b>>2]=c.length;b=0;for(var d of c)b+=ob(d)+1;D[a>>2]=b;return 0}},Z;
(async function(){function b(c){Z=c.exports;r=Z.memory;ma();$a=Z.__indirect_function_table;c=Z;Kb=c.malloc;bb=c.__getTypeName;S=c.free;E--;k.monitorRunDependencies?.(E);0==E&&F&&(c=F,F=null,c());return Z}E++;k.monitorRunDependencies?.(E);var a={env:Lb,wasi_snapshot_preview1:Lb};if(k.instantiateWasm)return new Promise(c=>{k.instantiateWasm(a,(d,e)=>{c(b(d,e))})});oa??=k.locateFile?k.locateFile("terramap.wasm",ca):ca+"terramap.wasm";return b((await ra(a)).instance)})();
function Mb(){function b(){k.calledRun=!0;if(!fa){Z.__wasm_call_ctors();k.onRuntimeInitialized?.();if(k.postRun)for("function"==typeof k.postRun&&(k.postRun=[k.postRun]);k.postRun.length;){var a=k.postRun.shift();ta.push(a)}sa(ta)}}if(0<E)F=Mb;else{if(k.preRun)for("function"==typeof k.preRun&&(k.preRun=[k.preRun]);k.preRun.length;)xa();sa(ua);0<E?F=Mb:k.setStatus?(k.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>k.setStatus(""),1);b()},1)):b()}}
if(k.preInit)for("function"==typeof k.preInit&&(k.preInit=[k.preInit]);0<k.preInit.length;)k.preInit.shift()();Mb();
self.addEventListener('message', (e) => {
  if (e.data.canvas) {
    self.canvas = e.data.canvas;
    self.ctx = self.canvas.getContext('2d');
    self.ctx.msImageSmoothingEnabled = false;
    self.ctx.mozImageSmoothingEnabled = false;
    self.ctx.imageSmoothingEnabled = false;
  }
  if (e.data.overlayCanvas) {
    self.overlayCanvas = e.data.overlayCanvas;
    self.overlayCtx = self.overlayCanvas.getContext('2d');
    self.overlayCtx.msImageSmoothingEnabled = false;
    self.overlayCtx.mozImageSmoothingEnabled = false;
    self.overlayCtx.imageSmoothingEnabled = false;
  }
  if (e.data.file) {
    self.start(e.data.file);
  }
  if (e.data.hoverTile) {
    onHoverTile(e.data.hoverTile);
  }
  if (e.data.selectTile) {
    onSelectTile(e.data.selectTile);
  }
  if (e.data.search) {
    onSearch(e.data.search);
  }
  if (e.data.clearHighlight) {
    const { width, height } = self.overlayCanvas;
    self.overlayCtx.clearRect(0, 0, width, height);
  }
  if (e.data.findNext) {
    onFindNext(e.data.findNext);
  }
});

async function start(file) {
  const fileReader = new FileReaderSync();

  self.postMessage({ status: 'Reading world file...' });
  const buffer = fileReader.readAsArrayBuffer(file);

  self.postMessage({ status: 'Loading world file...' });
  if (typeof self.terramap === 'undefined') {
    self.terramap = await Module.terramap();
  }
  const world = self.terramap.loadWorldFile(buffer);
  console.log(world);
  if (
    world.width <= 0 ||
    world.height <= 0 ||
    world.width > 33600 ||
    world.height > 9600
  ) {
    return;
  }
  self.canvas.width = world.width;
  self.canvas.height = world.height;
  self.overlayCanvas.width = world.width;
  self.overlayCanvas.height = world.height;

  self.postMessage({ status: 'Rendering tiles...', world });
  self.terramap.renderToCanvas();
  self.postMessage({ status: 'Done.', done: true });
}

function getTileInfo(tile) {
  const tileInfo = settings.Tiles[tile.blockId];
  if (tileInfo && tileInfo.Frames) {
    for (const frame of tileInfo.Frames.slice().reverse()) {
      if (
        ((!frame.U && !tile.frameX) || frame.U <= tile.frameX) &&
        ((!frame.V && !tile.frameY) || frame.V <= tile.frameY)
      ) {
        frame.parent = tileInfo;
        return frame;
      }
    }
  }
  return tileInfo;
}

function getTileText(tile) {
  let text = 'Nothing';
  const tileInfo = getTileInfo(tile);
  if (tileInfo) {
    if (tileInfo.parent && tileInfo.parent.Name) {
      text = tileInfo.parent.Name;
      if (tileInfo.Name) {
        text += ` - ${tileInfo.Name}`;
      }
      if (tileInfo.Variety) {
        text += ` - ${tileInfo.Variety}`;
      }
    } else {
      text = tileInfo.Name;
    }

    if (tile.frameX === 0 && tile.frameY === 0) {
      text += ` (${tile.blockId})`;
    } else {
      text += ` (${tile.blockId}, ${tile.frameX}, ${tile.frameY})`;
    }
    if (tile.tileEntity) {
      const entity = tile.tileEntity;
      if (entity.type === 2) {
        const sensorType = tileInfo.CheckTypes[entity.sensorType];
        const on = entity.sensorActive ? 'On' : 'Off';
        text += ` - ${sensorType}, ${on}`;
      } else if (entity.items.length === 1) {
        const itemId = entity.items[0].id;
        for (const itemSettings of settings.Items) {
          if (Number(itemSettings.Id) === itemId) {
            text += ` - ${itemSettings.Name}`;
            break;
          }
        }
      }
    }
  } else if (tile.wallId >= settings.Walls.length) {
    text = `Unknown Wall (${tile.wallId})`;
  } else if (tile.wallId > 0) {
    text = `${settings.Walls[tile.wallId].Name} (${tile.wallId})`;
  }

  if (tile.liquid) {
    text = text === 'Nothing' ? tile.liquid : `${text} ${tile.liquid}`;
  }
  const flagFields = [
    ['wireRed', 'Red Wire'],
    ['wireBlue', 'Blue Wire'],
    ['wireGreen', 'Green Wire'],
    ['wireYellow', 'Yellow Wire'],
    ['actuator', 'Actuator'],
  ];
  const flags = [];
  for (const [key, label] of flagFields) {
    if (tile[key]) {
      flags.push(label);
    }
  }
  if (flags.length > 0) {
    text += ` (${flags.join(', ')})`;
  }

  return text;
}

function onHoverTile({ x, y }) {
  const tile = self.terramap.getTile(x, y);
  if (tile) {
    self.postMessage({ status: `${getTileText(tile)} (${x}, ${y})` });
  }
}

function onSelectTile({ x, y }) {
  const tile = self.terramap.getTile(x, y);
  if (tile) {
    tile.text = getTileText(tile);
    self.postMessage({ tile });
  }
}

function onSearch(search) {
  const queries = [];
  for (const info of search) {
    if (info.isTile) {
      if (info.parent) {
        let sizeX = 1;
        let sizeY = 1;
        if (info.parent.Size) {
          sizeX = info.parent.Size[0] - '0';
          sizeY = info.parent.Size[2] - '0';
        }
        queries.push({
          type: 1,
          id: Number(info.parent.Id),
          minU: info.U,
          maxU: info.U + 18 * sizeX,
          minV: info.V,
          maxV: info.V + 18 * sizeY,
        });
      } else {
        queries.push({ type: 0, id: Number(info.Id) });
      }
    } else if (info.isWall) {
      queries.push({ type: 2, id: Number(info.Id) });
    } else if (info.isItem) {
      queries.push({ type: 3, id: Number(info.Id) });
    }
  }
  self.terramap.search(queries);
}

function onFindNext({ x, y, direction }) {
  const pos = self.terramap.findNext(x, y, direction);
  if (pos) {
    self.postMessage({ select: { x: pos[0], y: pos[1] } });
  }
}
