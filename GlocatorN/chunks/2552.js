"use strict";(self.webpackChunkmomraGisCore=self.webpackChunkmomraGisCore||[]).push([[2552],{12552:(e,t,n)=>{n.r(t),n.d(t,{destroyContext:()=>m,dracoDecompressPointCloudData:()=>l,filterObbsForModifications:()=>b,filterObbsForModificationsSync:()=>g,initialize:()=>A,interpretObbModificationResults:()=>p,process:()=>u,setLegacySchema:()=>d,setModifications:()=>y,setModificationsSync:()=>h,test:()=>L});var r=n(61681),o=n(86098),s=n(36567);function i(e){return(0,s.V)(`esri/libs/i3s/${e}`)}let a,f,c;async function u(e){await A();const t=[e.geometryBuffer];return{result:E(e,t),transferList:t}}async function l(e){var t;await A();const n=[e.geometryBuffer],{geometryBuffer:r}=e,s=r.byteLength,i=c._malloc(s),a=new Uint8Array(c.HEAPU8.buffer,i,s);a.set(new Uint8Array(r));const f=c.dracoDecompressPointCloudData(i,a.byteLength);if(c._free(i),f.error.length>0)throw`i3s.wasm: ${f.error}`;const u=(null==(t=f.featureIds)?void 0:t.length)>0?(0,o.tP)(f.featureIds):null,l=(0,o.tP)(f.positions);return u&&n.push(u.buffer),n.push(l.buffer),{result:{positions:l,featureIds:u},transferList:n}}async function b(e){await A(),g(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function y(e){await A(),h(e)}async function d(e){await A(),c.setLegacySchema(e.context,e.jsonSchema)}function m(e){w(e)}function h(e){const t=e.modifications,n=c._malloc(8*t.length),r=new Float64Array(c.HEAPU8.buffer,n,t.length);for(let e=0;e<t.length;++e)r[e]=t[e];c.setModifications(e.context,n,t.length,e.isGeodetic),c._free(n)}function E(e,t){if(!c)return null;const{context:n,localOrigin:s,globalTrafo:i,mbs:a,obb:f,elevationOffset:u,geometryBuffer:l,geometryDescriptor:b,indexToVertexProjector:y,vertexToRenderProjector:d}=e,m=c._malloc(l.byteLength),h=c._malloc(33*Float64Array.BYTES_PER_ELEMENT),E=new Uint8Array(c.HEAPU8.buffer,m,l.byteLength);E.set(new Uint8Array(l));const p=new Float64Array(c.HEAPU8.buffer,h,33);P(p,s);let g=p.byteOffset+3*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g);P(w,i),g+=16*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g),P(w,a),g+=4*p.BYTES_PER_ELEMENT,(0,r.pC)(f)&&(w=new Float64Array(p.buffer,g),P(w,f.center),g+=3*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g),P(w,f.halfSize),g+=3*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g),P(w,f.quaternion));const A=b,L={isDraco:!1,isLegacy:!1,color:e.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:e.needNormals&&e.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:e.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:e.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:A.featureIndex},_=c.process(n,!!e.obb,m,E.byteLength,A,L,h,u,y,d,e.normalReferenceFrame);if(c._free(h),c._free(m),_.error.length>0)throw`i3s.wasm: ${_.error}`;if(_.discarded)return null;const T=_.componentOffsets.length>0?(0,o.tP)(_.componentOffsets):null,I=_.featureIds.length>0?(0,o.tP)(_.featureIds):null,F=(0,o.tP)(_.interleavedVertedData).buffer,M=1===_.indicesType?(0,o.tP)(new Uint16Array(_.indices.buffer,_.indices.byteOffset,_.indices.byteLength/2)):(0,o.tP)(new Uint32Array(_.indices.buffer,_.indices.byteOffset,_.indices.byteLength/4)),O=(0,o.tP)(_.positions),B=1===_.positionIndicesType?(0,o.tP)(new Uint16Array(_.positionIndices.buffer,_.positionIndices.byteOffset,_.positionIndices.byteLength/2)):(0,o.tP)(new Uint32Array(_.positionIndices.buffer,_.positionIndices.byteOffset,_.positionIndices.byteLength/4)),R={layout:e.layouts[0],interleavedVertexData:F,indices:M,hasColors:_.hasColors,hasModifications:_.hasModifications,positionData:{data:O,indices:B}};return I&&t.push(I.buffer),T&&t.push(T.buffer),t.push(F),t.push(M.buffer),t.push(O.buffer),t.push(B.buffer),{componentOffsets:T,featureIds:I,transformedGeometry:R,obb:_.obb}}function p(e){return 0===e?0:1===e?1:2===e?2:3}function g(e){const{context:t,buffer:n}=e,r=c._malloc(n.byteLength),o=n.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(c.HEAPU8.buffer,r,o),i=new Float64Array(n);s.set(i),c.filterOBBs(t,r,o),i.set(s),c._free(r)}function w(e){c&&c.destroy(e)}function P(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}function A(){return c?Promise.resolve():(f||(f=(a||(a=new Promise((e=>n.e(9597).then(n.bind(n,79597)).then((e=>e.i)).then((({default:t})=>{const n=t({locateFile:i,onRuntimeInitialized:()=>e(n)});delete n.then})))).catch((e=>Promise.reject(e)))),a).then((e=>{c=e,f=null}))),f)}const L={transform:E,destroy:w}}}]);
//# sourceMappingURL=2552.js.map