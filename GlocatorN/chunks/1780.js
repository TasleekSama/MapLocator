"use strict";(self.webpackChunkmomraGisCore=self.webpackChunkmomraGisCore||[]).push([[1780],{86717:(e,t,r)=>{r.d(t,{a:()=>f,b:()=>o,n:()=>u,s:()=>i,t:()=>n});var s=r(45150);function n(e,t,r){if(e.count!==t.count)return void s.k.error("source and destination buffers need to have the same number of elements");const n=e.count,f=r[0],i=r[1],u=r[2],o=r[4],y=r[5],c=r[6],a=r[8],l=r[9],p=r[10],d=r[12],h=r[13],B=r[14],T=e.typedBuffer,m=e.typedBufferStride,b=t.typedBuffer,E=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*m,r=e*E,s=b[r],n=b[r+1],g=b[r+2];T[t]=f*s+o*n+a*g+d,T[t+1]=i*s+y*n+l*g+h,T[t+2]=u*s+c*n+p*g+B}}function f(e,t,r){if(e.count!==t.count)return void s.k.error("source and destination buffers need to have the same number of elements");const n=e.count,f=r[0],i=r[1],u=r[2],o=r[3],y=r[4],c=r[5],a=r[6],l=r[7],p=r[8],d=e.typedBuffer,h=e.typedBufferStride,B=t.typedBuffer,T=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*h,r=e*T,s=B[r],n=B[r+1],m=B[r+2];d[t]=f*s+o*n+a*m,d[t+1]=i*s+y*n+l*m,d[t+2]=u*s+c*n+p*m}}function i(e,t,r){const s=Math.min(e.count,t.count),n=e.typedBuffer,f=e.typedBufferStride,i=t.typedBuffer,u=t.typedBufferStride;for(let e=0;e<s;e++){const t=e*f,s=e*u;n[t]=r*i[s],n[t+1]=r*i[s+1],n[t+2]=r*i[s+2]}}function u(e,t){const r=Math.min(e.count,t.count),s=e.typedBuffer,n=e.typedBufferStride,f=t.typedBuffer,i=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*n,r=e*i,u=f[r],o=f[r+1],y=f[r+2],c=Math.sqrt(u*u+o*o+y*y);if(c>0){const e=1/c;s[t]=e*u,s[t+1]=e*o,s[t+2]=e*y}}}function o(e,t,r){const s=Math.min(e.count,t.count),n=e.typedBuffer,f=e.typedBufferStride,i=t.typedBuffer,u=t.typedBufferStride;for(let e=0;e<s;e++){const t=e*f,s=e*u;n[t]=i[s]>>r,n[t+1]=i[s+1]>>r,n[t+2]=i[s+2]>>r}}Object.freeze({__proto__:null,transformMat4:n,transformMat3:f,scale:i,normalize:u,shiftRight:o})},14789:(e,t,r)=>{function s(e,t,r){const s=e.typedBuffer,n=e.typedBufferStride,f=t.typedBuffer,i=t.typedBufferStride,u=r?r.count:t.count;let o=(r&&r.dstIndex?r.dstIndex:0)*n,y=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<u;++e)s[o]=f[y],s[o+1]=f[y+1],s[o+2]=f[y+2],o+=n,y+=i}function n(e,t,r,s,n){var f,i;const u=e.typedBuffer,o=e.typedBufferStride,y=null!=(f=null==n?void 0:n.count)?f:e.count;let c=(null!=(i=null==n?void 0:n.dstIndex)?i:0)*o;for(let e=0;e<y;++e)u[c]=t,u[c+1]=r,u[c+2]=s,c+=o}r.d(t,{c:()=>s,f:()=>n}),Object.freeze({__proto__:null,copy:s,fill:n})},68403:(e,t,r)=>{r.d(t,{Z:()=>g});var s,n=r(36663),f=r(49004),i=r(61681),u=r(81977),o=(r(7753),r(39994),r(7283),r(40266)),y=r(24455),c=r(39100),a=r(6766),l=r(8909),p=r(53446),d=r(89696),h=r(25726),B=r(34218),T=r(81936),m=r(86717),b=r(14789);let E=s=class extends f.wq{constructor(e){super(e),this.origin=(0,l.c)(),this.translation=(0,l.c)(),this.rotation=(0,B.Ue)(),this.scale=(0,l.f)(1,1,1),this.geographic=!0}get localMatrix(){const e=(0,c.c)();return(0,y.f)(e,e,this.scale),(0,y.e)(e,e,(0,B.WH)(this.rotation),(0,B.ZZ)(this.rotation)),(0,y.a)(e,e,this.translation),e}get localMatrixInverse(){return(0,y.b)((0,c.c)(),this.localMatrix)}applyLocal(e,t){return(0,a.m)(t,e,this.localMatrix)}applyLocalInverse(e,t){return(0,a.m)(t,e,this.localMatrixInverse)}project(e,t){const r=new Float64Array(e.length),s=T.fP.fromTypedArray(r),n=T.fP.fromTypedArray(e);if(this.geographic){const e=(0,h.N_)((0,h.Iu)(t)),f=(0,c.c)();return(0,d.Bm)(t,this.origin,f,e),(0,y.m)(f,f,this.localMatrix),(0,m.t)(s,n,f),(0,d.CM)(r,e,0,r,t,0,r.length/3),r}const{localMatrix:f,origin:i}=this;(0,y.n)(f,c.I)?(0,b.c)(s,n):(0,m.t)(s,n,f);for(let e=0;e<r.length;e+=3)r[e+0]+=i[0],r[e+1]+=i[1],r[e+2]+=i[2];return r}getOriginPoint(e){const[t,r,s]=this.origin;return new p.Z({x:t,y:r,z:s,spatialReference:e})}equals(e){return(0,i.pC)(e)&&this.geographic===e.geographic&&(0,a.k)(this.origin,e.origin)&&(0,y.p)(this.localMatrix,e.localMatrix)}clone(){const e={origin:(0,l.a)(this.origin),translation:(0,l.a)(this.translation),rotation:(0,B.Ue)(this.rotation),scale:(0,l.a)(this.scale),geographic:this.geographic};return new s(e)}};(0,n._)([(0,u.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],E.prototype,"origin",void 0),(0,n._)([(0,u.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],E.prototype,"translation",void 0),(0,n._)([(0,u.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],E.prototype,"rotation",void 0),(0,n._)([(0,u.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],E.prototype,"scale",void 0),(0,n._)([(0,u.Cb)({type:Boolean,nonNullable:!0,json:{write:!0}})],E.prototype,"geographic",void 0),(0,n._)([(0,u.Cb)()],E.prototype,"localMatrix",null),(0,n._)([(0,u.Cb)()],E.prototype,"localMatrixInverse",null),E=s=(0,n._)([(0,o.j)("esri.geometry.support.MeshTransform")],E);const g=E},34218:(e,t,r)=>{r.d(t,{EU:()=>a,WH:()=>l,ZZ:()=>c,qC:()=>y,Ue:()=>u,uT:()=>o});var s=r(19431),n=r(10663),f=r(61044),i=r(6766);function u(e=p){return[e[0],e[1],e[2],e[3]]}function o(e,t,r=u()){return(0,i.g)(r,e),r[3]=t,r}function y(e,t,r=u()){return(0,n.s)(d,e,l(e)),(0,n.s)(h,t,l(t)),(0,n.m)(d,h,d),function(e,t){return e[3]=t,e}(r,(0,s.BV)((0,n.g)(r,d)))}function c(e){return e}function a(e){return e[3]}function l(e){return(0,s.Vl)(e[3])}const p=[0,0,1,0],d=(0,f.a)(),h=(0,f.a)();u()},81936:(e,t,r)=>{r.d(t,{ly:()=>l,oS:()=>E,o7:()=>U,Jj:()=>k,Hz:()=>Y,gK:()=>B,ey:()=>T,bj:()=>m,O1:()=>b,av:()=>M,Nu:()=>v,D_:()=>w,Eu:()=>p,q6:()=>g,or:()=>W,wA:()=>q,Vs:()=>I,TS:()=>P,qt:()=>R,xA:()=>O,ct:()=>d,fP:()=>A,n1:()=>Z,PP:()=>G,P_:()=>V,mw:()=>x,G5:()=>F,ne:()=>_,ek:()=>h,Cd:()=>S,zO:()=>j,TN:()=>H,ir:()=>z,v6:()=>C,hu:()=>N,mc:()=>L});class s{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=9;const f=this.TypedArrayConstructor;void 0===s&&(s=9*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let e=0;e<9;++e)s[f++]=n[i++]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=9;class n{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=16;const f=this.TypedArrayConstructor;void 0===s&&(s=16*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let e=0;e<16;++e)s[f++]=n[i++]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=16;class f{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===s&&(s=f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}f.ElementCount=1;var i=r(55709);class u{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=2;const f=this.TypedArrayConstructor;void 0===s&&(s=2*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,i.s)(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;s[f++]=n[i++],s[f]=n[i]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=2;var o=r(6766);class y{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=3;const f=this.TypedArrayConstructor;void 0===s&&(s=3*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,o.s)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=s}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;s[f++]=n[i++],s[f++]=n[i++],s[f]=n[i]}get buffer(){return this.typedBuffer.buffer}}y.ElementCount=3;var c=r(88589);class a{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=4;const f=this.TypedArrayConstructor;void 0===s&&(s=4*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,c.s)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,s,n){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=s,this.typedBuffer[e]=n}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;s[f++]=n[i++],s[f++]=n[i++],s[f++]=n[i++],s[f]=n[i]}get buffer(){return this.typedBuffer.buffer}}a.ElementCount=4;class l extends f{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class p extends u{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class d extends y{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(d,e,t)}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="f32";class h extends a{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f32";class B extends s{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f32";class T extends s{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f64";class m extends n{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f32";class b extends n{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class E extends f{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class g extends u{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f64";class A extends y{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class S extends a{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="f64";class w extends f{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u8";class O extends u{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class _ extends y{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u8";class L extends a{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class M extends f{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u16";class P extends u{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u16";class x extends y{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u16";class C extends a{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u16";class v extends f{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="u32";class R extends u{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u32";class F extends y{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u32";class N extends a{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u32";class Y extends f{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="i8";class I extends u{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="i8";class V extends y{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class z extends a{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i8";class U extends f{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i16";class W extends u{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(W,e,t)}static fromTypedArray(e,t){return new W(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}W.ElementType="i16";class Z extends y{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(Z,e,t)}static fromTypedArray(e,t){return new Z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Z.ElementType="i16";class j extends a{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i16";class k extends f{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i32";class q extends u{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i32";class G extends y{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32";class H extends a{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32"},45150:(e,t,r)=>{r.d(t,{k:()=>s});const s=r(13802).Z.getLogger("esri.views.3d.support.buffer.math")},67341:(e,t,r)=>{function s(e,t){var r;return e.isGeographic||e.isWebMercator&&(null==(r=null==t?void 0:t.geographic)||r)}r.d(t,{h:()=>s})},91780:(e,t,r)=>{r.d(t,{iv:()=>B,I5:()=>T,w1:()=>m,FF:()=>b,Yq:()=>E});var s=r(61681),n=r(17321),f=r(34344),i=r(24455),u=r(39100),o=r(1662),y=r(89696),c=r(25726),a=r(68403),l=r(81936),p=r(86717),d=r(67341),h=r(49921);function B(e,t,r){return(0,d.h)(t.spatialReference,r)?function(e,t,r){const s=t.spatialReference,n=O(t,r,P),f=new Float64Array(e.position.length),i=function(e,t,r,s){(0,p.t)(l.fP.fromTypedArray(s),l.fP.fromTypedArray(e),t);const n=new Float64Array(e.length);return(0,h.To)(s,n,r)}(e.position,n,s,f),u=(0,o.a)(C,n);return{position:i,normal:g(i,f,e.normal,u,s),tangent:A(i,f,e.tangent,u,s)}}(e,t,r):function(e,t,r){const s=new Float64Array(e.position.length),n=e.position,f=t.x,i=t.y,u=t.z||0,{horizontal:o,vertical:y}=M(r?r.unit:null,t.spatialReference);for(let e=0;e<n.length;e+=3)s[e+0]=n[e+0]*o+f,s[e+1]=n[e+1]*o+i,s[e+2]=n[e+2]*y+u;return{position:s,normal:e.normal,tangent:e.tangent}}(e,t,r)}function T(e,t,r){const{position:n,normal:f,tangent:i}=e;if((0,s.Wi)(t))return{position:n,normal:f,tangent:i};const u=t.localMatrix;return B({position:(0,h.zZ)(n,new Float64Array(n.length),u),normal:(0,s.pC)(f)?(0,h.w9)(f,new Float32Array(f.length),u):null,tangent:(0,s.pC)(i)?(0,h.VS)(i,new Float32Array(i.length),u):null},t.getOriginPoint(r),{geographic:t.geographic})}function m(e,t,r){if(null!=r&&r.useTransform){var s;const{position:n,normal:f,tangent:i}=e;return{vertexAttributes:{position:n,normal:f,tangent:i},transform:new a.Z({origin:[t.x,t.y,null!=(s=t.z)?s:0],geographic:(0,d.h)(t.spatialReference,r)})}}return{vertexAttributes:B(e,t,r),transform:null}}function b(e,t,r){return(0,d.h)(t.spatialReference,r)?w(e,t,r):S(e,t,r)}function E(e,t,r,n){if((0,s.Wi)(t))return b(e,r,n);const f=T(e,t,r.spatialReference);return r.equals(t.getOriginPoint(r.spatialReference))?S(f,r,n):(0,d.h)(r.spatialReference,n)?w(f,r,n):S(f,r,n)}function g(e,t,r,n,f){if((0,s.Wi)(r))return null;const i=new Float32Array(r.length);return(0,p.a)(l.ct.fromTypedArray(i),l.ct.fromTypedArray(r),n),(0,h.Yk)(i,e,t,f,i),i}function A(e,t,r,n,f){if((0,s.Wi)(r))return null;const i=new Float32Array(r.length);(0,p.a)(l.ct.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT),l.ct.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),n);for(let e=3;e<i.length;e+=4)i[e]=r[e];return(0,h.M2)(i,e,t,f,i),i}function S(e,t,r){const s=new Float64Array(e.position.length),n=e.position,f=t.x,i=t.y,u=t.z||0,{horizontal:o,vertical:y}=M(r?r.unit:null,t.spatialReference);for(let e=0;e<n.length;e+=3)s[e+0]=(n[e+0]-f)/o,s[e+1]=(n[e+1]-i)/o,s[e+2]=(n[e+2]-u)/y;return{position:s,normal:e.normal,tangent:e.tangent}}function w(e,t,r){const s=t.spatialReference;O(t,r,P);const n=(0,i.b)(x,P),f=new Float64Array(e.position.length),u=function(e,t,r,s){const n=(0,h.XO)(e,t,s),f=l.fP.fromTypedArray(n),i=new Float64Array(n.length),u=l.fP.fromTypedArray(i);return(0,p.t)(u,f,r),i}(e.position,s,n,f),y=(0,o.a)(C,n);return{position:u,normal:_(e.normal,e.position,f,s,y),tangent:L(e.tangent,e.position,f,s,y)}}function O(e,t,r){(0,y.Bm)(e.spatialReference,[e.x,e.y,e.z||0],r,(0,c.rS)(e.spatialReference));const{horizontal:s,vertical:n}=M(t?t.unit:null,e.spatialReference);return(0,i.f)(r,r,[s,s,n]),r}function _(e,t,r,n,f){if((0,s.Wi)(e))return null;const i=(0,h.Iz)(e,t,r,n,new Float32Array(e.length)),u=l.ct.fromTypedArray(i);return(0,p.a)(u,u,f),i}function L(e,t,r,n,f){if((0,s.Wi)(e))return null;const i=(0,h.wi)(e,t,r,n,new Float32Array(e.length)),u=l.ct.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT);return(0,p.a)(u,u,f),i}function M(e,t){if((0,s.Wi)(e))return v;const r=t.isGeographic?1:(0,n.Z7)(t),f=t.isGeographic?1:(0,n._R)(t),i=(0,n.En)(1,e,"meters");return{horizontal:i*r,vertical:i*f}}const P=(0,u.c)(),x=(0,u.c)(),C=(0,f.c)(),v={horizontal:1,vertical:1}},49921:(e,t,r)=>{r.d(t,{To:()=>E,Yk:()=>m,Iz:()=>T,M2:()=>O,wi:()=>w,XO:()=>b,w9:()=>A,zZ:()=>g,VS:()=>S});var s=r(13802),n=r(61681),f=r(1662),i=r(34344),u=r(39100),o=r(6766),y=r(8909),c=r(89696),a=r(25726),l=r(35925),p=r(39536),d=r(81936),h=r(86717);const B=s.Z.getLogger("esri.geometry.support.meshUtils.normalProjection");function T(e,t,r,s,n){return L(s)?(_(0,d.ct.fromTypedArray(e),d.fP.fromTypedArray(t),d.fP.fromTypedArray(r),s,d.ct.fromTypedArray(n)),n):(B.error("Cannot convert spatial reference to PCPF"),n)}function m(e,t,r,s,n){return L(s)?(_(1,d.ct.fromTypedArray(e),d.fP.fromTypedArray(t),d.fP.fromTypedArray(r),s,d.ct.fromTypedArray(n)),n):(B.error("Cannot convert to spatial reference from PCPF"),n)}function b(e,t,r){return(0,c.CM)(e,t,0,r,(0,a.rS)(t),0,e.length/3),r}function E(e,t,r){return(0,c.CM)(e,(0,a.rS)(r),0,t,r,0,e.length/3),t}function g(e,t,r){if((0,n.Wi)(e))return t;const s=d.fP.fromTypedArray(e),f=d.fP.fromTypedArray(t);return(0,h.t)(f,s,r),t}function A(e,t,r){if((0,n.Wi)(e))return t;(0,f.a)(v,r);const s=d.ct.fromTypedArray(e),i=d.ct.fromTypedArray(t);return(0,h.a)(i,s,v),(0,f.i)(v)||(0,h.n)(i,i),t}function S(e,t,r){if((0,n.Wi)(e))return t;(0,f.a)(v,r);const s=d.ct.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),i=d.ct.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT);if((0,h.a)(i,s,v),(0,f.i)(v)||(0,h.n)(i,i),e!==t)for(let r=3;r<e.length;r+=4)t[r]=e[r];return t}function w(e,t,r,s,n){if(!L(s))return B.error("Cannot convert spatial reference to PCPF"),n;_(0,d.ct.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),d.fP.fromTypedArray(t),d.fP.fromTypedArray(r),s,d.ct.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let t=3;t<e.length;t+=4)n[t]=e[t];return n}function O(e,t,r,s,n){if(!L(s))return B.error("Cannot convert to spatial reference from PCPF"),n;_(1,d.ct.fromTypedArray(e,16),d.fP.fromTypedArray(t),d.fP.fromTypedArray(r),s,d.ct.fromTypedArray(n,16));for(let t=3;t<e.length;t+=4)n[t]=e[t];return n}function _(e,t,r,s,n,i){if(!t)return;const u=r.count,y=(0,a.rS)(n);if(M(n))for(let r=0;r<u;r++)s.getVec(r,P),t.getVec(r,x),(0,c.Bm)(y,P,C,y),(0,f.f)(v,C),1===e&&(0,f.t)(v,v),(0,o.t)(x,x,v),i.setVec(r,x);else for(let n=0;n<u;n++){s.getVec(n,P),t.getVec(n,x),(0,c.Bm)(y,P,C,y),(0,f.f)(v,C);const u=(0,p.mZ)(r.get(n,1));let a=Math.cos(u);0===e&&(a=1/a),v[0]*=a,v[1]*=a,v[2]*=a,v[3]*=a,v[4]*=a,v[5]*=a,1===e&&(0,f.t)(v,v),(0,o.t)(x,x,v),(0,o.n)(x,x),i.setVec(n,x)}return i}function L(e){return M(e)||function(e){return e.isWebMercator}(e)}function M(e){return e.isWGS84||(0,l.yW)(e)||(0,l.BZ)(e)||(0,l.V2)(e)}const P=(0,y.c)(),x=(0,y.c)(),C=(0,u.c)(),v=(0,i.c)()}}]);
//# sourceMappingURL=1780.js.map