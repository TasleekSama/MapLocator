"use strict";(self.webpackChunkmomraGisCore=self.webpackChunkmomraGisCore||[]).push([[5875],{15875:(e,t,r)=>{r.d(t,{mR:()=>X,C$:()=>D,e2:()=>C,Jq:()=>se,wO:()=>G,Mk:()=>H,cM:()=>K,Z_:()=>$,ws:()=>b,xV:()=>F,Ub:()=>ae,UK:()=>Z,Yw:()=>z,$_:()=>w,Gr:()=>j,nU:()=>W,Ll:()=>te,$K:()=>P,DQ:()=>Q,HX:()=>J,hj:()=>v,iw:()=>ee,TB:()=>ie,sG:()=>q,Gg:()=>re,js:()=>ne,Y8:()=>R});var i=r(70375),n=r(13802),a=(r(19431),r(62173),r(38716)),s=r(34596);class o{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(e,t,r,i,n,a,s,o,c){this.color=e,this.haloColor=t,this.haloSize=r,this.size=i,this.angle=n,this.offsetX=a,this.offsetY=s,this.hAnchor=o,this.vAnchor=c}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}o.pool=new s.Z(o),r(43487);const c=n.Z.getLogger("esri.views.2d.engine.webgl.Utils"),l="geometry",u=[{name:l,strideInBytes:32,divisor:0}],h=[{name:l,strideInBytes:20,divisor:0}],d=[{name:l,strideInBytes:12,divisor:0}],p=[{name:l,strideInBytes:40,divisor:0}],_=[{name:l,strideInBytes:36,divisor:0}],m=[{name:l,strideInBytes:36,divisor:0}];function T(e){const t={};for(const r of e)t[r.name]=r.strideInBytes;return t}const f=T([{name:l,strideInBytes:36,divisor:0}]),E=T(u),g=T(h),L=T(d),M=T(p),A=T(_),I=T(m);function w(e,{fill:t}){switch(e){case a.LW.MARKER:return f;case a.LW.FILL:return"dot-density"===t?L:"simple"===t?g:E;case a.LW.LINE:return M;case a.LW.TEXT:return A;case a.LW.LABEL:return I}}const S=[l],x=[l],y=[l],N=[l],U=[l];function O(e){switch(e){case a.LW.MARKER:return S;case a.LW.FILL:return x;case a.LW.LINE:return y;case a.LW.TEXT:return N;case a.LW.LABEL:return U}}function R(e){switch(e%4){case 0:case 2:return 4;case 1:case 3:return 1}}function D(e,t){switch(t%4){case 0:case 2:return new Uint32Array(Math.floor(e*t/4));case 1:case 3:return new Uint8Array(e*t)}}function C(e,t){switch(t%4){case 0:case 2:return new Uint32Array(e);case 1:case 3:return new Uint8Array(e)}}function P(e){return null!=e}function v(e){return"number"==typeof e}function b(e){switch(e){case"butt":return 0;case"round":return 1;case"square":return 2;default:return c.error(new i.Z("mapview-invalid-type",`Cap type ${e} is not a valid option. Defaulting to round`)),1}}function F(e){switch(e){case"miter":return 2;case"bevel":return 0;case"round":return 1;default:return c.error(new i.Z("mapview-invalid-type",`Join type ${e} is not a valid option. Defaulting to round`)),1}}function W(e){switch(e){case"opacity":return a.pc.OPACITY;case"color":return a.pc.COLOR;case"rotation":return a.pc.ROTATION;case"size":return a.pc.SIZE;default:return c.error(`Cannot interpret unknown vv: ${e}`),null}}function G(e,t,r,i,n,a,s){for(const t in a){const i=a[t].stride,s=R(i),o=a[t].data,c=r[t].data,l=i*n.vertexCount/s,u=i*e/s,h=i*n.vertexFrom/s;for(let e=0;e<l;++e)c[e+u]=o[e+h]}const o=n.indexCount;for(let r=0;r<o;++r)i[r+t]=s[r+n.indexFrom]-n.vertexFrom+e}const X={[l]:35044};function H(e,t){const r=[];for(let i=0;i<5;++i){const n=O(i),a={};for(const e of n)a[e]={data:t(i,e)};r.push({data:e(i),buffers:a})}return r}function B(e){switch(e){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5126:case 5124:case 5125:return 4}}function z(e){switch(e){case 5121:return 1;case 32819:return 2;case 5126:return 4;default:return void c.error(new i.Z("webgl-utils",`Unable to handle type ${e}`))}}function Z(e){switch(e){case 5121:return Uint8Array;case 32819:return Uint16Array;case 5126:return Float32Array;default:return void c.error(new i.Z("webgl-utils",`Unable to handle type ${e}`))}}const V=e=>{const t=new Map;for(const r in e)for(const i of e[r])t.set(i.name,i.location);return t},Y=e=>{const t={};for(const r in e){const i=e[r];t[r]=i.length?i[0].stride:0}return t},k=new Map,K=(e,t)=>{if(!k.has(e)){const r=function(e){const t={};for(const r in e){const i=e[r];let n=0;t[r]=i.map((e=>{const t={...e,normalized:e.normalized||!1,divisor:e.divisor||0,offset:n,stride:0};return n+=e.count*B(e.type),t})),t[r].forEach((e=>e.stride=n))}return t}(t),i={strides:Y(r),bufferLayouts:r,attributes:V(t)};k.set(e,i)}return k.get(e)};function $(e){e(a.LW.FILL),e(a.LW.LINE),e(a.LW.MARKER),e(a.LW.TEXT),e(a.LW.LABEL)}const q=e=>"path"in e&&oe(e.path),J=e=>"url"in e&&e.url||"imageData"in e&&e.imageData,j=e=>"imageData"in e&&e.imageData&&"contentType"in e&&e.contentType?`data:${e.contentType};base64,${e.imageData}`:"url"in e?e.url:null,Q=e=>"url"in e&&e.url&&e.url.includes(".gif")||"contentType"in e&&"image/gif"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/gif"),ee=e=>"url"in e&&e.url&&e.url.includes(".png")||"contentType"in e&&"image/png"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/png"),te=e=>e.type&&-1!==e.type.toLowerCase().indexOf("3d");function re(e){switch(e.type){case"line":{const t=e;return"CIMSolidStroke"===t.cim.type&&!t.dashTemplate}case"fill":return"CIMSolidFill"===e.cim.type;case"esriSFS":return"esriSFSSolid"===e.style||"esriSFSNull"===e.style;case"esriSLS":return"esriSLSSolid"===e.style||"esriSLSNull"===e.style;default:return!1}}const ie=e=>e.includes("data:image/svg+xml");function ne(e){switch("cim"in e?e.cim.type:e.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":case"CIMVectorMarker":case"CIMPictureMarker":case"CIMCharacterMarker":return!1;default:return!0}}function ae(e){const t="maxVVSize"in e&&e.maxVVSize,r="width"in e&&e.width||"size"in e&&e.size||0;return t||r}function se(e){const t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return t}const oe=e=>!!e&&(e=e.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4))},62173:(e,t,r)=>{r.d(t,{pr:()=>n,t2:()=>a,aH:()=>s});var i=r(8530);function n(e,t=0,r=!1){const i=e[t+3];return e[t+0]*=i,e[t+1]*=i,e[t+2]*=i,r||(e[t+3]*=255),e}function a(e){if(!e)return 0;const{r:t,g:r,b:n,a}=e;return(0,i.Jz)(t*a,r*a,n*a,255*a)}function s(e){if(!e)return 0;const[t,r,n,a]=e;return(0,i.Jz)(t*(a/255),r*(a/255),n*(a/255),a)}},38716:(e,t,r)=>{var i,n,a,s,o,c,l;r.d(t,{Un:()=>l,pc:()=>s,jx:()=>a,LW:()=>i,X:()=>o,mf:()=>c}),function(e){e[e.FILL=0]="FILL",e[e.LINE=1]="LINE",e[e.MARKER=2]="MARKER",e[e.TEXT=3]="TEXT",e[e.LABEL=4]="LABEL"}(i||(i={})),function(e){e[e.SUCCEEDED=0]="SUCCEEDED",e[e.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(n||(n={})),function(e){e[e.NONE=0]="NONE",e[e.MAP=1]="MAP",e[e.LABEL=2]="LABEL",e[e.LABEL_ALPHA=4]="LABEL_ALPHA",e[e.HITTEST=8]="HITTEST",e[e.HIGHLIGHT=16]="HIGHLIGHT",e[e.CLIP=32]="CLIP",e[e.DEBUG=64]="DEBUG",e[e.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(a||(a={})),function(e){e[e.SIZE=0]="SIZE",e[e.COLOR=1]="COLOR",e[e.OPACITY=2]="OPACITY",e[e.ROTATION=3]="ROTATION"}(s||(s={})),function(e){e[e.NONE=0]="NONE",e[e.OPACITY=1]="OPACITY",e[e.COLOR=2]="COLOR",e[e.ROTATION=4]="ROTATION",e[e.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",e[e.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",e[e.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",e[e.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(o||(o={})),function(e){e[e.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",e[e.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",e[e.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",e[e.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(c||(c={})),function(e){e[e.SPRITE=0]="SPRITE",e[e.GLYPH=1]="GLYPH"}(l||(l={}))},8530:(e,t,r)=>{r.d(t,{UJ:()=>a,Jz:()=>s,Au:()=>n});const i=new Float32Array(1);function n(e){return[255&e,(65280&e)>>>8,(16711680&e)>>>16,(4278190080&e)>>>24]}function a(e,t){return 65535&e|t<<16}function s(e,t,r,i){return 255&e|(255&t)<<8|(255&r)<<16|i<<24}new Uint32Array(i.buffer)},43487:(e,t,r)=>{r.d(t,{Z:()=>c});var i=r(19431),n=r(61681),a=r(6174),s=r(91907),o=r(79193);class c{constructor(e,t,r=null){this._context=e,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,e.instanceCounter.increment(s._g.Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...t},34067===this._descriptor.target?this.setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(s._g.Texture,this))}release(){this.dispose()}resize(e,t){const r=this._descriptor;r.width===e&&r.height===t||(r.width=e,r.height=t,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(e=null){for(let t=34069;t<=34074;t++)this.setData(e,t)}setData(e,t=3553){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===e&&(e=null),null===e&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);const i=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES),s=this._descriptor;c._validateTexture(this._context,s),r.pixelStorei(r.UNPACK_ALIGNMENT,s.unpackAlignment),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,s.flipped?1:0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.preMultiplyAlpha?1:0);const o=s.pixelFormat;let l=s.internalFormat?s.internalFormat:this._deriveInternalFormat(o,s.dataType);if(e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement){let i=e.width,n=e.height;e instanceof HTMLVideoElement&&(i=e.videoWidth,n=e.videoHeight),s.width&&s.height,r.texImage2D(t,0,l,o,s.dataType,e),(0,a.zu)(r),s.hasMipmap&&this.generateMipmap(),void 0===s.width&&(s.width=i),void 0===s.height&&(s.height=n)}else{null!=s.width&&null!=s.height||console.error("Width and height must be specified!"),r.DEPTH24_STENCIL8&&l===r.DEPTH_STENCIL&&(l=r.DEPTH24_STENCIL8);let i=s.width,c=s.height;if(function(e){return(0,n.pC)(e)&&"type"in e&&"compressed"===e.type}(e)){const n=Math.round(Math.log(Math.max(i,c))/Math.LN2)+1;s.hasMipmap=s.hasMipmap&&n===e.levels.length;for(let n=0;;++n){const a=e.levels[Math.min(n,e.levels.length-1)];if(r.compressedTexImage2D(t,n,l,i,c,0,a),1===i&&1===c||!s.hasMipmap)break;i=Math.max(1,i>>1),c=Math.max(1,c>>1)}}else if((0,n.pC)(e))r.texImage2D(t,0,l,i,c,0,o,s.dataType,e),(0,a.zu)(r),s.hasMipmap&&this.generateMipmap();else for(let e=0;r.texImage2D(t,e,l,i,c,0,o,s.dataType,null),(0,a.zu)(r),(1!==i||1!==c)&&s.hasMipmap;++e)i=Math.max(1,i>>1),c=Math.max(1,c>>1)}c._applySamplingMode(r,this._descriptor),c._applyWrapMode(r,this._descriptor),c._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,a.zu)(r),this._context.bindTexture(i,c.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,r,i,n,a,s=3553){a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const o=this._context.gl,l=this._descriptor,u=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);(t<0||r<0||i>l.width||n>l.height||t+i>l.width||r+n>l.height)&&console.error("An attempt to update out of bounds of the texture!"),o.pixelStorei(o.UNPACK_ALIGNMENT,l.unpackAlignment),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,l.flipped?1:0),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.preMultiplyAlpha?1:0),a instanceof ImageData||a instanceof HTMLImageElement||a instanceof HTMLCanvasElement||a instanceof HTMLVideoElement?o.texSubImage2D(s,e,t,r,l.pixelFormat,l.dataType,a):o.texSubImage2D(s,e,t,r,i,n,l.pixelFormat,l.dataType,a),this._context.bindTexture(u,c.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;e.hasMipmap||(e.hasMipmap=!0,this._samplingModeDirty=!0,c._validateTexture(this._context,e)),9729===e.samplingMode?(this._samplingModeDirty=!0,e.samplingMode=9985):9728===e.samplingMode&&(this._samplingModeDirty=!0,e.samplingMode=9984);const t=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,c.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,c._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(c._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(c._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if("webgl"===this._context.webglVersion)return e;if(5126===t)switch(e){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return e}static _validateTexture(e,t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!");const r=(0,i.wt)(t.width)&&(0,i.wt)(t.height);(0,o.Z)(e.gl)||r||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let r=t.samplingMode,i=t.samplingMode;9985===r||9987===r?(r=9729,t.hasMipmap||(i=9729)):9984!==r&&9986!==r||(r=9728,t.hasMipmap||(i=9728)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){var r;const i=e.capabilities.textureFilterAnisotropic;i&&e.gl.texParameterf(t.target,i.TEXTURE_MAX_ANISOTROPY,null!=(r=t.maxAnisotropy)?r:1)}}c.TEXTURE_UNIT_FOR_UPDATES=0},79193:(e,t,r)=>{function i(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}r.d(t,{Z:()=>i})},6174:(e,t,r)=>{r.d(t,{zu:()=>l,hZ:()=>o,CG:()=>c});var i=r(70375),n=r(39994);const a=r(13802).Z.getLogger("esri/views/webgl"),s=!!(0,n.Z)("enable-feature:webgl-debug");function o(){return s}function c(){return s}function l(e){if(o()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),n=(new Error).stack;a.error(new i.Z("webgl-error","WebGL error occured",{message:r,stack:n}))}}}},91907:(e,t,r)=>{r.d(t,{Ld:()=>i,Lu:()=>a,_g:()=>n});const i=33984;var n;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.VertexShader=3]="VertexShader",e[e.FragmentShader=4]="FragmentShader",e[e.Program=5]="Program",e[e.Framebuffer=6]="Framebuffer",e[e.Renderbuffer=7]="Renderbuffer",e[e.COUNT=8]="COUNT"}(n||(n={}));const a=33306}}]);
//# sourceMappingURL=5875.js.map