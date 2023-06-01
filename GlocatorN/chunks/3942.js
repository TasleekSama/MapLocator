"use strict";(self.webpackChunkmomraGisCore=self.webpackChunkmomraGisCore||[]).push([[3942],{2059:(e,t,a)=>{a.r(t),a.d(t,{CIMSymbolRasterizer:()=>z,GeometryStyle:()=>r});var r,i,n=a(30936),s=a(66341),o=a(78668),c=a(95550),l=a(21130),m=a(53736),h=a(75312),f=a(19849),u=a(556),y=a(89417),g=a(60789),p=a(97500),d=a(37939);(i=r||(r={})).Legend="legend",i.Preview="preview";const C=(e,t,a)=>{if(e&&e.targetSize){let r;if(a){const t=Math.max(a.frame.xmax-a.frame.xmin,a.frame.ymax-a.frame.ymin);r=e.targetSize/(0,c.F2)(t)}else r=e.targetSize/t.referenceSize;return r}return e&&e.scaleFactor?e.scaleFactor:1},M={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}};class z{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._pictureMarkerCache=new Map,this._textRasterizer=new y.d,this._cimResourceManager=new f.Z,this._rasterizer=new u.Z(this._cimResourceManager)}async rasterizeCIMSymbolAsync(e,t,a,r,i,n,s,o){r=r||(t?null!=t.centroid?"esriGeometryPolygon":(0,m.Ji)(t.geometry):null)||function(e){if(!(e&&e.data&&e.data.symbol))return null;switch(e.data.symbol.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}(e);const c=await this.analyzeCIMSymbol(e,t?function(e){return(e?Object.keys(e):[]).map((t=>({name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"})))}(t.attributes):null,a,r,o);return this.rasterizeCIMSymbol(c,t,r,i,n,s)}async analyzeCIMSymbol(e,t,a,r,i){const n=[],s=t?{geometryType:r,spatialReference:this._spatialReference,fields:t}:null;let c;await(0,h.c)(e.data,s,this._cimResourceManager,n,this._avoidSDF),(0,o.k_)(i);for(const e of n)"CIMPictureMarker"!==e.cim.type&&"CIMPictureFill"!==e.cim.type&&"CIMPictureStroke"!==e.cim.type||(c||(c=[]),c.push(this.fetchPictureMarkerResource(e,i))),a&&"text"===e.type&&"string"==typeof e.text&&e.text.indexOf("[")>-1&&(e.text=(0,g.Qs)(a,e.text,e.cim.textCase));return c&&await Promise.all(c),n}async fetchPictureMarkerResource(e,t){const a=e.materialHash;if(!this._pictureMarkerCache.get(a)){const r=(await(0,s.default)(e.cim.url,{responseType:"image",signal:t&&t.signal})).data;this._pictureMarkerCache.set(a,r)}}rasterizeCIMSymbol(e,t,a,r,i,n){const s=[];for(const o of e){r&&"function"==typeof r.scaleFactor&&(r.scaleFactor=r.scaleFactor(t,i,n));const e=this._getRasterizedResource(o,t,a,r,i,n);if(!e)continue;let c=0,l=e.anchorX||0,m=e.anchorY||0,h=!1,f=0,u=0;if("esriGeometryPoint"===a){const e=C(r,o,null);if(f=(0,g.hf)(o.offsetX,t,i,n)*e||0,u=(0,g.hf)(o.offsetY,t,i,n)*e||0,"marker"===o.type)c=(0,g.hf)(o.rotation,t,i,n)||0,h=!!o.rotateClockwise&&o.rotateClockwise;else if("text"===o.type){if(c=(0,g.hf)(o.angle,t,i,n)||0,void 0!==o.horizontalAlignment)switch(o.horizontalAlignment){case"left":l=-.5;break;case"right":l=.5;break;default:l=0}if(void 0!==o.verticalAlignment)switch(o.verticalAlignment){case"top":m=.5;break;case"bottom":m=-.5;break;case"baseline":m=-.25;break;default:m=0}}}null!=e&&s.push({angle:c,rotateClockWise:h,anchorX:l,anchorY:m,offsetX:f,offsetY:u,rasterizedResource:e})}return this.getSymbolImage(s)}getSymbolImage(e){const t=document.createElement("canvas"),a=t.getContext("2d");let r=0,i=0,n=0,s=0;const o=[];for(let t=0;t<e.length;t++){const l=e[t],m=l.rasterizedResource;if(!m)continue;const h=m.size,f=l.offsetX,u=l.offsetY,y=l.anchorX,g=l.anchorY,p=l.rotateClockWise||!1;let d=l.angle,C=(0,c.F2)(f)-h[0]*(.5+y),M=(0,c.F2)(u)-h[1]*(.5+g),z=C+h[0],I=M+h[1];if(d){p&&(d=-d);const e=Math.sin(d*Math.PI/180),t=Math.cos(d*Math.PI/180),a=C*t-M*e,r=C*e+M*t,i=C*t-I*e,n=C*e+I*t,s=z*t-I*e,o=z*e+I*t,c=z*t-M*e,l=z*e+M*t;C=Math.min(a,i,s,c),M=Math.min(r,n,o,l),z=Math.max(a,i,s,c),I=Math.max(r,n,o,l)}r=C<r?C:r,i=M<i?M:i,n=z>n?z:n,s=I>s?I:s;const w=a.createImageData(m.size[0],m.size[1]);w.data.set(new Uint8ClampedArray(m.image.buffer));const x={offsetX:f,offsetY:u,rotateClockwise:p,angle:d,rasterizedImage:w,anchorX:y,anchorY:g};o.push(x)}t.width=n-r,t.height=s-i;const l=-r,m=s;for(let e=0;e<o.length;e++){const t=o[e],r=this._imageDataToCanvas(t.rasterizedImage),i=t.rasterizedImage.width,n=t.rasterizedImage.height,s=l-i*(.5+t.anchorX),h=m-n*(.5-t.anchorY);if(t.angle){const e=(360-t.angle)*Math.PI/180;a.save(),a.translate((0,c.F2)(t.offsetX),-(0,c.F2)(t.offsetY)),a.translate(l,m),a.rotate(e),a.translate(-l,-m),a.drawImage(r,s,h),a.restore()}else a.drawImage(r,s+(0,c.F2)(t.offsetX),h-(0,c.F2)(t.offsetY))}const h=new d.Z({x:l/t.width-.5,y:m/t.height-.5});return{imageData:0!==t.width&&0!==t.height?a.getImageData(0,0,t.width,t.height):a.createImageData(1,1),anchorPosition:h}}_imageDataToCanvas(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const t=this._imageDataCanvas,a=t.getContext("2d");return t.width=e.width,t.height=e.height,a.putImageData(e,0,0),t}_imageTo32Array(e,t,a,r){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const i=this._imageDataCanvas,s=i.getContext("2d");if(i.width=t,i.height=a,s.drawImage(e,0,0,t,a),r){s.save();const i=new n.Z(r);s.fillStyle=i.toHex(),s.globalCompositeOperation="multiply",s.fillRect(0,0,t,a),s.globalCompositeOperation="destination-atop",s.drawImage(e,0,0,t,a),s.restore()}return new Uint32Array(s.getImageData(0,0,t,a).data.buffer)}_getRasterizedResource(e,t,a,i,n,s){let o,c,m,h,f=null,u=null;if("esriGeometryPolyline"===a||"esriGeometryPolygon"===a){const h=i&&i.style?i.style:r.Legend,y="esriGeometryPolyline"===a?M.stroke[h]:M.fill[h];if("line"===e.type){if("CIMSolidStroke"!==e.cim.type){if("CIMPictureStroke"===e.cim.type){const a=(0,g.hf)(e.width,t,n,s),r=(0,g.hf)(e.color,t,n,s),{image:i,width:o,height:c}=this._getPictureResource(e,a,r);return this._rasterizePictureResource(e,i,o,c,y,a)}return null}({analyzedCIM:o,hash:m}=I(e,t,n,s)),c=this._embedCIMLayerInVectorMarker(o,y)}else if("marker"===e.type){if("CIMPictureMarker"===e.cim.type)return null;if("CIMVectorMarker"!==e.cim.type)return null;e.cim.offsetX=(0,g.hf)(e.offsetX,t,n,s),e.cim.offsetY=(0,g.hf)(e.offsetY,t,n,s),e.cim.rotation=(0,g.hf)(e.rotation,t,n,s),e.cim.markerPlacement=e.markerPlacement,({analyzedCIM:o}=I(e,t,n,s)),m=(0,l.hP)(JSON.stringify(o)).toString(),c=this._embedCIMLayerInVectorMarker(o,y),f=(0,g.hf)(e.size,t,n,s),u=e.path}else{if("text"===e.type)return null;if("fill"===e.type){if("CIMHatchFill"===e.cim.type||"CIMVectorMarker"===e.cim.type||"CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){const a=e.cim.size||e.cim.height;let r,i,c;if("CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type)({image:r,width:i,height:c}=this._getPictureResource(e,a,(0,g.hf)(e.color,t,n,s)));else{({analyzedCIM:o,hash:m}=I(e,t,n,s));const l=this._rasterizer.rasterizeJSONResource({cim:o,type:e.type,url:e.url,mosaicHash:m,size:a,path:u},1,this._avoidSDF);r=l.image,i=l.size[0],c=l.size[1]}return this._rasterizePictureResource(e,r,i,c,y,null)}if("CIMSolidFill"!==e.cim.type)return null;({analyzedCIM:o,hash:m}=I(e,t,n,s)),c=this._embedCIMLayerInVectorMarker(o,y)}}}else{if("text"===e.type)return h=this._rasterizeTextResource(e,t,i,n,s),h;({analyzedCIM:o,hash:m}=I(e,t,n,s));const a=C(i,e,null);if("CIMPictureMarker"===e.cim.type){const r=(0,g.hf)(e.size,t,n,s)*a,{image:i,width:o,height:c}=this._getPictureResource(e,r,(0,g.hf)(e.color,t,n,s));return h={image:i,size:[o,c],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},h}(0,p.FW)(o,a,{preserveOutlineWidth:!1}),c=o}m+=a,i&&(m+=JSON.stringify(i));const y=this._resourceCache;return y.has(m)?y.get(m):(h=this._rasterizer.rasterizeJSONResource({cim:c,type:e.type,url:e.url,mosaicHash:m,size:f,path:u},window.devicePixelRatio||1,this._avoidSDF),y.set(m,h),h)}_rasterizeTextResource(e,t,a,r,i){const n=C(a,e,null),s=(0,g.hf)(e.text,t,r,i);if(!s||0===s.length)return null;const o=(0,g.hf)(e.fontName,t,r,i),c=(0,g.hf)(e.style,t,r,i),l=(0,g.hf)(e.weight,t,r,i),m=(0,g.hf)(e.decoration,t,r,i),h=(0,g.hf)(e.size,t,r,i)*n,f=(0,g.hf)(e.horizontalAlignment,t,r,i),u=(0,g.hf)(e.verticalAlignment,t,r,i),y=(0,g.nn)((0,g.hf)(e.color,t,r,i)),p=(0,g.nn)((0,g.hf)(e.outlineColor,t,r,i)),d={color:y,size:h,horizontalAlignment:f,verticalAlignment:u,font:{family:o,style:c,weight:l,decoration:m},halo:{size:(0,g.hf)(e.outlineSize,t,r,i)||0,color:p,style:c},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(s,d)}_rasterizePictureResource(e,t,a,r,i,n){const s=document.createElement("canvas"),o=s.getContext("2d");s.height=(0,c.F2)(Math.max(i.frame.ymax-i.frame.ymin,n)),s.width=(0,c.F2)(i.frame.xmax-i.frame.xmin);const l=o.createImageData(a,r);l.data.set(new Uint8ClampedArray(t.buffer));const h=this._imageDataToCanvas(l),f=o.createPattern(h,"repeat"),u=Math.cos((-e.cim.rotation||0)*Math.PI/180),y=Math.sin((-e.cim.rotation||0)*Math.PI/180);f.setTransform({m11:u,m12:y,m21:-y,m22:u,m41:(0,c.F2)(e.cim.offsetX)||0,m42:(0,c.F2)(e.cim.offsetY)||0});const g=i.canvasPaths;let p,d,C;(0,m.oU)(g)?(p=g.rings,o.fillStyle=f,d=o.fill,C=["evenodd"]):(0,m.l9)(g)&&(p=g.paths,o.strokeStyle=f,o.lineWidth=n,d=o.stroke,p[0][0][1]=s.height/2,p[0][1][1]=s.height/2),o.beginPath();for(const e of p){const t=e?e.length:0;if(t>1){let a=e[0];o.moveTo((0,c.F2)(a[0]),(0,c.F2)(a[1]));for(let r=1;r<t;++r)a=e[r],o.lineTo((0,c.F2)(a[0]),(0,c.F2)(a[1]));o.closePath()}}d.apply(o,C);const M=o.getImageData(0,0,s.width,s.height),z=new Uint8Array(M.data);return{size:[s.width,s.height],image:new Uint32Array(z.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}_getPictureResource(e,t,a){const r=this._pictureMarkerCache.get(e.materialHash);if(!r)return null;const i=r.height/r.width,n=t?i>1?(0,c.F2)(t):(0,c.F2)(t)/i:r.width,s=t?i>1?(0,c.F2)(t)*i:(0,c.F2)(t):r.height;return{image:this._imageTo32Array(r,n,s,a),width:n,height:s}}_embedCIMLayerInVectorMarker(e,t){const a=(0,m.oU)(t.geometry)?"CIMPolygonSymbol":"CIMLineSymbol",r=t.frame;return{type:"CIMVectorMarker",frame:r,size:r.ymax-r.ymin,markerGraphics:[{type:"CIMMarkerGraphic",geometry:t.geometry,symbol:{type:a,symbolLayers:[e]}}]}}}function I(e,t,a,r){let i,n;return"function"==typeof e.materialHash?(i=(0,e.materialHash)(t,a,r),n=(0,h.S)(e.cim,e.materialOverrides)):(i=e.materialHash,n=e.cim),{analyzedCIM:n,hash:i}}},556:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(95215),i=a(10927),n=a(89626),s=a(60789);class o{constructor(e){this._resourceManager=e}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(e,t,a){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){const[a,i,n]=r.fN.rasterizeSimpleFill(this._rasterizationCanvas,e.style,t);return{size:[i,n],image:new Uint32Array(a.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type||"line"===e.type&&e.dashTemplate){let t,a;if("simple-line"===e.type||"esriSLS"===e.type)switch(t=(0,r.U1)(e.style,e.cap),e.cap){case"butt":a="Butt";break;case"square":a="Square";break;default:a="Round"}else t=e.dashTemplate,a=e.cim.capStyle;const[i,n,s]=r.fN.rasterizeSimpleLine(t,a);return{size:[n,s],image:new Uint32Array(i.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let s,o,c;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(s=r.B$.fromSimpleMarker(e),c=(0,n.Fp)(s)):e.cim&&"CIMHatchFill"===e.cim.type?(s=r.B$.fromCIMHatchFill(e.cim),o=new i.Z(s.frame.xmin,-s.frame.ymax,s.frame.xmax-s.frame.xmin,s.frame.ymax-s.frame.ymin)):e.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.cim.markerPlacement.type?(s=r.B$.fromCIMInsidePolygon(e.cim),o=new i.Z(s.frame.xmin,-s.frame.ymax,s.frame.xmax-s.frame.xmin,s.frame.ymax-s.frame.ymin)):(s=e.cim,c=(0,n.Fp)(s)),c&&!a){const[e,t,a]=(0,n.RL)(c);return e?{size:[t,a],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[l,m,h,f,u]=r.B$.rasterize(this._rasterizationCanvas,s,o,this._resourceManager,!a);return l?{size:[m,h],image:new Uint32Array(l.buffer),sdf:!1,simplePattern:!1,anchorX:f,anchorY:u}:null}rasterizeImageResource(e,t,a,r){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;const i=this._rasterizationCanvas.getContext("2d");a instanceof ImageData?i.putImageData(a,0,0):(a.setAttribute("width",`${e}px`),a.setAttribute("height",`${t}px`),i.drawImage(a,0,0,e,t));const n=i.getImageData(0,0,e,t),o=new Uint8Array(n.data);if(r)for(const e of r)if(e&&e.oldColor&&4===e.oldColor.length&&e.newColor&&4===e.newColor.length){const[t,a,r,i]=e.oldColor,[n,s,c,l]=e.newColor;if(t===n&&a===s&&r===c&&i===l)continue;for(let e=0;e<o.length;e+=4)t===o[e]&&a===o[e+1]&&r===o[e+2]&&i===o[e+3]&&(o[e]=n,o[e+1]=s,o[e+2]=c,o[e+3]=l)}let c;for(let e=0;e<o.length;e+=4)c=o[e+3]/255,o[e]=o[e]*c,o[e+1]=o[e+1]*c,o[e+2]=o[e+2]*c;let l=o,m=e,h=t;const f=512;if(m>=f||h>=f){const a=m/h;a>1?(m=f,h=Math.round(f/a)):(h=f,m=Math.round(f*a)),l=new Uint8Array(4*m*h);const r=new Uint8ClampedArray(l.buffer);(0,s.TT)(o,e,t,r,m,h,!1)}return{size:[m,h],image:new Uint32Array(l.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}},8530:(e,t,a)=>{a.d(t,{UJ:()=>n,Jz:()=>s,Au:()=>i});const r=new Float32Array(1);function i(e){return[255&e,(65280&e)>>>8,(16711680&e)>>>16,(4278190080&e)>>>24]}function n(e,t){return 65535&e|t<<16}function s(e,t,a,r){return 255&e|(255&t)<<8|(255&a)<<16|r<<24}new Uint32Array(r.buffer)}}]);
//# sourceMappingURL=3942.js.map