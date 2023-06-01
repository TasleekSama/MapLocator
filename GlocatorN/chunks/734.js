"use strict";(self.webpackChunkmomraGisCore=self.webpackChunkmomraGisCore||[]).push([[734],{15642:(e,t,r)=>{function n(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}r.d(t,{m:()=>n}),Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<i;++e)n[u]=s[c],u+=o,c+=a},makeDense:n})},385:(e,t,r)=>{r.d(t,{f:()=>a,n:()=>s});var n=r(90331);function o(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<i;++e)n[u]=s[c],n[u+1]=s[c+1],u+=o,c+=a}function s(e,t,r){const s=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,u=t.typedBufferStride,c=r?r.count:t.count;let d=(r&&r.dstIndex?r.dstIndex:0)*a,f=(r&&r.srcIndex?r.srcIndex:0)*u;if((0,n.U)(t.elementType)){const e=(0,n.Op)(t.elementType);if((0,n.B3)(t.elementType))for(let t=0;t<c;++t)s[d]=Math.max(i[f]/e,-1),s[d+1]=Math.max(i[f+1]/e,-1),d+=a,f+=u;else for(let t=0;t<c;++t)s[d]=i[f]/e,s[d+1]=i[f+1]/e,d+=a,f+=u}else o(e,t,r);return e}function a(e,t,r,n){var o,s;const a=e.typedBuffer,i=e.typedBufferStride,u=null!=(o=null==n?void 0:n.count)?o:e.count;let c=(null!=(s=null==n?void 0:n.dstIndex)?s:0)*i;for(let e=0;e<u;++e)a[c]=t,a[c+1]=r,c+=i}Object.freeze({__proto__:null,copy:o,normalizeIntegerBuffer:s,fill:a})},56999:(e,t,r)=>{r.d(t,{a:()=>a,s:()=>s,t:()=>o});var n=r(45150);function o(e,t,r){if(e.count!==t.count)return void n.k.error("source and destination buffers need to have the same number of elements");const o=e.count,s=r[0],a=r[1],i=r[2],u=r[3],c=r[4],d=r[5],f=r[6],l=r[7],p=r[8],m=e.typedBuffer,h=e.typedBufferStride,y=t.typedBuffer,x=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*h,r=e*x,n=y[r],o=y[r+1],b=y[r+2],w=y[r+3];m[t]=s*n+u*o+f*b,m[t+1]=a*n+c*o+l*b,m[t+2]=i*n+d*o+p*b,m[t+3]=w}}function s(e,t,r){const n=Math.min(e.count,t.count),o=e.typedBuffer,s=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*s,n=e*i;o[t]=r*a[n],o[t+1]=r*a[n+1],o[t+2]=r*a[n+2],o[t+3]=r*a[n+3]}}function a(e,t,r){const n=Math.min(e.count,t.count),o=e.typedBuffer,s=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*s,n=e*i;o[t]=a[n]>>r,o[t+1]=a[n+1]>>r,o[t+2]=a[n+2]>>r,o[t+3]=a[n+3]>>r}}Object.freeze({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void n.k.error("source and destination buffers need to have the same number of elements");const o=e.count,s=r[0],a=r[1],i=r[2],u=r[3],c=r[4],d=r[5],f=r[6],l=r[7],p=r[8],m=r[9],h=r[10],y=r[11],x=r[12],b=r[13],w=r[14],T=r[15],g=e.typedBuffer,S=e.typedBufferStride,I=t.typedBuffer,O=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*S,r=e*O,n=I[r],o=I[r+1],C=I[r+2],v=I[r+3];g[t]=s*n+c*o+p*C+x*v,g[t+1]=a*n+d*o+m*C+b*v,g[t+2]=i*n+f*o+h*C+w*v,g[t+3]=u*n+l*o+y*C+T*v}},transformMat3:o,scale:s,shiftRight:a})},32101:(e,t,r)=>{function n(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<i;++e)n[u]=s[c],n[u+1]=s[c+1],n[u+2]=s[c+2],n[u+3]=s[c+3],u+=o,c+=a}function o(e,t,r,n,o,s){var a,i;const u=e.typedBuffer,c=e.typedBufferStride,d=null!=(a=null==s?void 0:s.count)?a:e.count;let f=(null!=(i=null==s?void 0:s.dstIndex)?i:0)*c;for(let e=0;e<d;++e)u[f]=t,u[f+1]=r,u[f+2]=n,u[f+3]=o,f+=c}r.d(t,{c:()=>n,f:()=>o}),Object.freeze({__proto__:null,copy:n,fill:o})},79:(e,t,r)=>{r.d(t,{gS:()=>o});var n=r(90331);function o(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,n.n1)(e.ElementType)))}Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<i;++e){for(let e=0;e<9;++e)n[u+e]=s[c+e];u+=o,c+=a}}}),Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<i;++e){for(let e=0;e<16;++e)n[u+e]=s[c+e];u+=o,c+=a}}}),r(15642),r(385),r(14789),r(32101)},91420:(e,t,r)=>{r.d(t,{C:()=>c});var n=r(66341),o=r(67979),s=r(70375),a=r(61681),i=r(78668),u=r(3466);class c{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return(0,u.HK)(e)?((0,i.k_)(t),(0,u.AH)(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if((0,a.Wi)(this.streamDataRequester))return(await(0,n.default)(t,{responseType:d[e]})).data;const u=await(0,o.q6)(this.streamDataRequester.request(t,e,r));if(!0===u.ok)return u.value;throw(0,i.r9)(u.error),new s.Z("",`Request for resource failed: ${u.error}`)}}const d={image:"image",binary:"array-buffer",json:"json"}},1731:(e,t,r)=>{r.d(t,{jX:()=>i,DA:()=>a,nh:()=>s});var n=r(86098),o=r(51701);function s(e,t=o.p){return"number"==typeof e?t(e):(0,n.Uc)(e)||(0,n.lq)(e)?new Uint32Array(e):e}function a(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let o=0;o<r;o+=1)if(o%2==0){const r=e[o],s=e[o+1],a=e[o+2];n[t++]=r,n[t++]=s,n[t++]=a}else{const r=e[o+1],s=e[o],a=e[o+2];n[t++]=r,n[t++]=s,n[t++]=a}}return n}function i(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}{const t=e[0];let o=e[1],s=0;for(let a=0;a<r;++a){const r=e[a+2];n[s++]=t,n[s++]=o,n[s++]=r,o=r}return n}}},20016:(e,t,r)=>{r.d(t,{z:()=>_});var n=r(61681),o=r(39100),s=r(70375);const a=r(13802).Z.getLogger("esri.views.3d.glTF");var i=r(27755),u=r(86114),c=r(3466),d=r(26139),f=r(24455),l=r(10663),p=r(61044),m=r(81936),h=r(15642);class y{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const x={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},b={pbrMetallicRoughness:x,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},w={ESRI_externalColorMixMode:"tint"},T=(e={})=>{const t={...x,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,i.Bg)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...w,...e.extras});return{...b,...e,pbrMetallicRoughness:t,extras:r}},g={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497},S=e=>({...g,...e}),I=1179937895;class O{constructor(e,t,r,n,o){this.context=e,this.errorContext=t,this.uri=r,this.json=n,this.glbBuffer=o,this.bufferLoaders=new Map,this.textureLoaders=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,n,o)=>(t=n||"",r=o||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,n){if((0,c.HK)(r)){const n=(0,c.sJ)(r);if("model/gltf-binary"!==n.mediaType)try{const o=JSON.parse(n.isBase64?atob(n.data):n.data);return new O(e,t,r,o)}catch{}const o=(0,c.AH)(r);if(O.isGLBData(o))return this.fromGLBData(e,t,r,o)}if(r.endsWith(".gltf")){const o=await e.loadJSON(r,n);return new O(e,t,r,o)}const o=await e.loadBinary(r,n);if(O.isGLBData(o))return this.fromGLBData(e,t,r,o);const s=await e.loadJSON(r,n);return new O(e,t,r,s)}static isGLBData(e){const t=new y(e);return t.remainingBytes()>=4&&t.readUint32()===I}static async fromGLBData(e,t,r,n){const o=await O.parseGLBData(t,n);return new O(e,t,r,o.json,o.binaryData)}static async parseGLBData(e,t){const r=new y(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),o=r.readUint32(),s=r.readUint32();e.assert(n===I,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=s,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==o,"An unsupported GLB container version was detected. Only version 2 is supported.");let a,i,u=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),n=r.readUint32();0===u?(e.assert(1313821514===n,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),a=await R(r.readUint8Array(t))):1===u?(e.errorUnsupportedIf(5130562!==n,"Second GLB chunk expected to be BIN."),i=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1}return a||e.error("No GLB JSON chunk detected."),{json:a,binaryData:i}}async getBuffer(e,t){const r=this.json.buffers[e],n=this.errorContext;if(null==r.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;const o=await this.getBufferLoader(e,t);return n.assert(o.byteLength===r.byteLength,"Buffer byte lengths should match."),o}async getBufferLoader(e,t){const r=this.bufferLoaders.get(e);if(r)return r;const n=this.json.buffers[e],o=this.context.loadBinary(this.resolveUri(n.uri),t).then((e=>new Uint8Array(e)));return this.bufferLoaders.set(e,o),o}async getAccessor(e,t){const r=this.errorContext;r.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");const n=this.json.accessors[e];r.errorUnsupportedIf(null==(null==n?void 0:n.bufferView),"Some accessor does not specify a bufferView."),r.errorUnsupportedIf(n.type in["MAT2","MAT3","MAT4"],`AttributeType ${n.type} is not supported`);const o=this.json.bufferViews[n.bufferView],s=await this.getBuffer(o.buffer,t),a=U[n.type],i=A[n.componentType],u=a*i,c=o.byteStride||u;return{raw:s.buffer,byteStride:c,byteOffset:s.byteOffset+(o.byteOffset||0)+(n.byteOffset||0),entryCount:n.count,isDenselyPacked:c===u,componentCount:a,componentByteSize:i,componentType:n.componentType,min:n.min,max:n.max,normalized:!!n.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return(0,h.m)(this.wrapAccessor(m.D_,r));case 5123:return(0,h.m)(this.wrapAccessor(m.av,r));case 5125:return(0,h.m)(this.wrapAccessor(m.Nu,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+N[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(m.ct,n)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+N[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(m.ct,n)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+N[n.componentType]),r.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new m.ek(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const n=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==n.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+n.componentCount.toFixed()),5126===n.componentType?this.wrapAccessor(m.Eu,n):(r.errorUnsupportedIf(!n.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new m.Vs(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new m.xA(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new m.or(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new m.TS(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new m.qt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new m.Eu(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void(0,i.Bg)(e.componentType)}}(n))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(m.ek,n);if(5121===n.componentType)return this.wrapAccessor(m.mc,n);if(5123===n.componentType)return this.wrapAccessor(m.v6,n)}else if(3===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(m.ct,n);if(5121===n.componentType)return this.wrapAccessor(m.ne,n);if(5123===n.componentType)return this.wrapAccessor(m.mw,n)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+N[n.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let n=this.materialCache.get(e.material);if(!n){const o=null!=e.material?T(this.json.materials[e.material]):T(),s=o.pbrMetallicRoughness,a=this.hasVertexColors(e),i=this.getTexture(s.baseColorTexture,t),u=this.getTexture(o.normalTexture,t),c=r?this.getTexture(o.occlusionTexture,t):null,d=r?this.getTexture(o.emissiveTexture,t):null,f=r?this.getTexture(s.metallicRoughnessTexture,t):null,l=null!=e.material?e.material:-1;n={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:s.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:await i,normalTexture:await u,name:o.name,id:l,occlusionTexture:await c,emissiveTexture:await d,emissiveFactor:o.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:await f,vertexColors:a,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode}}return n}async getTexture(e,t){if(!e)return null;this.errorContext.errorUnsupportedIf(0!==(e.texCoord||0),"Only TEXCOORD with index 0 is supported.");const r=e.index,n=this.errorContext,o=this.json.textures[r],s=S(null!=o.sampler?this.json.samplers[o.sampler]:{});n.errorUnsupportedIf(null==o.source,"Source is expected to be defined for a texture.");const a=this.json.images[o.source],i=await this.loadTextureImageData(r,o,t);return(0,u.s1)(this.textureCache,r,(()=>{const e=e=>33071===e||33648===e||10497===e,t=e=>(n.error(`Unexpected TextureSampler WrapMode: ${e}. Using default REPEAT(10497).`),10497);return{data:i,wrapS:e(s.wrapS)?s.wrapS:t(s.wrapS),wrapT:e(s.wrapT)?s.wrapT:t(s.wrapT),minFilter:s.minFilter,name:a.name,id:r}}))}getNodeTransform(e){if(void 0===e)return v;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=(0,f.m)((0,o.c)(),r,n.matrix):n.translation||n.rotation||n.scale?(t=(0,o.b)(r),n.translation&&(0,f.a)(t,t,n.translation),n.rotation&&(B[3]=(0,l.g)(B,n.rotation),(0,f.e)(t,t,B[3],B)),n.scale&&(0,f.f)(t,t,n.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return(0,c.hF)(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=d.G.parse(this.json.asset.version,"glTF");C.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}async loadTextureImageData(e,t,r){const n=this.textureLoaders.get(e);if(n)return n;const o=this.createTextureLoader(t,r);return this.textureLoaders.set(e,o),o}async createTextureLoader(e,t){const r=this.json.images[e.source];if(r.uri)return this.context.loadImage(this.resolveUri(r.uri),t);const n=this.errorContext;n.errorUnsupportedIf(null==r.bufferView,"Image bufferView must be defined."),n.errorUnsupportedIf(null==r.mimeType,"Image mimeType must be defined.");const o=this.json.bufferViews[r.bufferView],s=await this.getBuffer(o.buffer,t);return n.errorUnsupportedIf(null!=o.byteStride,"byteStride not supported for image buffer"),async function(e,t){return new Promise(((r,n)=>{const o=new Blob([e],{type:t}),s=URL.createObjectURL(o),a=new Image;a.addEventListener("load",(()=>{URL.revokeObjectURL(s),"decode"in a?a.decode().then((()=>r(a)),(()=>r(a))):r(a)})),a.addEventListener("error",(e=>{URL.revokeObjectURL(s),n(e)})),a.src=s}))}(new Uint8Array(s.buffer,s.byteOffset+(o.byteOffset||0),o.byteLength),r.mimeType)}}const C=new d.G(2,0,"glTF"),v=(0,f.u)((0,o.c)(),Math.PI/2),B=(0,p.a)(),U={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},A={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function R(e){return new Promise(((t,r)=>{const n=new Blob([e]),o=new FileReader;o.onload=()=>{const e=o.result;t(JSON.parse(e))},o.onerror=e=>{r(e)},o.readAsText(n)}))}const N={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let M=0;async function _(e,t,r={},s=!0){const a=await O.load(e,j,t,r),i="gltf_"+M++,u={lods:[],materials:new Map,textures:new Map,meta:L(a)},c=!(!a.json.asset.extras||"symbolResource"!==a.json.asset.extras.ESRI_type),d=new Map;await E(a,(async(e,t,c,f)=>{var l;const p=null!=(l=d.get(c))?l:0;d.set(c,p+1);const m=void 0!==e.mode?e.mode:4,h=4===m||5===m||6===m?m:null;if((0,n.Wi)(h))return void j.warnUnsupported("Unsupported primitive mode ("+G[m]+"). Skipping primitive.");if(!a.hasPositions(e))return void j.warn("Skipping primitive without POSITION vertex attribute.");const y=a.getPositionData(e,r),x=a.getMaterial(e,r,s),b=a.hasNormals(e)?a.getNormalData(e,r):null,w=a.hasTangents(e)?a.getTangentData(e,r):null,T=a.hasTextureCoordinates(e)?a.getTextureCoordinates(e,r):null,g=a.hasVertexColors(e)?a.getVertexColors(e,r):null,S=a.getIndexData(e,r),I={transform:(0,o.b)(t),attributes:{position:await y,normal:b?await b:null,texCoord0:T?await T:null,color:g?await g:null,tangent:w?await w:null},indices:await S,primitiveType:h,material:D(u,await x,i)};let O=null;(0,n.pC)(u.meta)&&(0,n.pC)(u.meta.ESRI_lod)&&"screenSpaceRadius"===u.meta.ESRI_lod.metric&&(O=u.meta.ESRI_lod.thresholds[c]),u.lods[c]=u.lods[c]||{parts:[],name:f,lodThreshold:O},u.lods[c].parts[p]=I}));for(const e of u.lods)e.parts=e.parts.filter((e=>!!e));return{model:u,meta:{isEsriSymbolResource:c,uri:a.uri},customMeta:{}}}function L(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;(0,n.pC)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}async function E(e,t){const r=e.json,n=r.scenes[r.scene||0].nodes,o=n.length>1,s=[];for(const e of n){const t=r.nodes[e];s.push(a(e,0)),F(t)&&!o&&t.extensions.MSFT_lod.ids.forEach(((e,t)=>a(e,t+1)))}async function a(n,o){const i=r.nodes[n],u=e.getNodeTransform(n);if(j.warnUnsupportedIf(null!=i.weights,"Morph targets are not supported."),null!=i.mesh){const e=r.meshes[i.mesh];for(const r of e.primitives)s.push(t(r,u,o,e.name))}for(const e of i.children||[])s.push(a(e,o))}await Promise.all(s)}function F(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function D(e,t,r){const n=t=>{const n=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(n)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:P.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(n,r)}return n},o=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(o)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?n(t.colorTexture):void 0,textureNormal:t.normalTexture?n(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?n(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?n(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?n(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(o,r)}return o}const j=new class{error(e){throw new s.Z("gltf-loader-error",e)}errorUnsupported(e){throw new s.Z("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){a.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},P=[9987,9985],G=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"]},14634:(e,t,r)=>{r.d(t,{K:()=>n});const n=2.1}}]);
//# sourceMappingURL=734.js.map