"use strict";(self.webpackChunkmomraGisCore=self.webpackChunkmomraGisCore||[]).push([[2052],{91103:(e,t,i)=>{i.d(t,{lm:()=>x,CS:()=>y,Yu:()=>_,Cw:()=>f,j5:()=>m});var s=i(51366),r=i(88256),n=i(80020),a=i(66341),o=i(67134),l=i(3466),h=i(14685),d=i(37116),u=i(79880),c=i(72506),p=i(51211);const g={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function f(e){const t=e.folders||[],i=t.slice(),s=new Map,r=new Map,n=new Map,a=new Map,l=new Map,h={esriGeometryPoint:r,esriGeometryPolyline:n,esriGeometryPolygon:a};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const t=(0,o.d9)(e);t.featureSet.features=[];const i=e.featureSet.geometryType;s.set(i,t);const l=e.layerDefinition.objectIdField;"esriGeometryPoint"===i?w(r,l,e.featureSet.features):"esriGeometryPolyline"===i?w(n,l,e.featureSet.features):"esriGeometryPolygon"===i&&w(a,l,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{l.set(e.id,e)})),t.forEach((t=>{t.networkLinkIds.forEach((s=>{const r=function(e,t,i){const s=function(e,t){let i;return t.some((t=>t.id===e&&(i=t,!0))),i}(e,i);return s&&(s.parentFolderId=t,s.networkLink=s),s}(s,t.id,e.networkLinks);r&&i.push(r)}))})),i.forEach((e=>{if(e.featureInfos){e.points=(0,o.d9)(s.get("esriGeometryPoint")),e.polylines=(0,o.d9)(s.get("esriGeometryPolyline")),e.polygons=(0,o.d9)(s.get("esriGeometryPolygon")),e.mapImages=[];for(const t of e.featureInfos)switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const i=h[t.type].get(t.id);i&&e[g[t.type]].featureSet.features.push(i);break}case"GroundOverlay":{const i=l.get(t.id);i&&e.mapImages.push(i);break}}e.fullExtent=x([e])}}));const d=x(i);return{folders:t,sublayers:i,extent:d}}function y(e,t,i,n){const o=r.id&&r.id.findCredential(e);e=(0,l.fl)(e,{token:o&&o.token});const h=s.Z.kmlServiceUrl;return(0,a.default)(h,{query:{url:e,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:n})}function m(e,t,i=null,s=[]){const r=[],n={},a=t.sublayers,o=t.folders.map((e=>e.id));return a.forEach((t=>{const a=new e;if(i?a.read(t,i):a.read(t),s.length&&o.indexOf(a.id)>-1&&(a.visible=-1!==s.indexOf(a.id)),n[t.id]=a,null!=t.parentFolderId&&-1!==t.parentFolderId){const e=n[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(a)}else r.unshift(a)})),r}function w(e,t,i){i.forEach((i=>{e.set(i.attributes[t],i)}))}async function _(e){const t=p.default.fromJSON(e.featureSet).features,i=e.layerDefinition,s=(0,c.i)(i.drawingInfo.renderer),r=n.Z.fromJSON(e.popupInfo),a=[];for(const e of t){const t=await s.getSymbolAsync(e);e.symbol=t,e.popupTemplate=r,e.visible=!0,a.push(e)}return a}function x(e){const t=(0,d.Ue)(d.Gv),i=(0,d.Ue)(d.Gv);for(const s of e){if(s.polygons&&s.polygons.featureSet&&s.polygons.featureSet.features)for(const e of s.polygons.featureSet.features)(0,u.Yg)(t,e.geometry),(0,d.TC)(i,t);if(s.polylines&&s.polylines.featureSet&&s.polylines.featureSet.features)for(const e of s.polylines.featureSet.features)(0,u.Yg)(t,e.geometry),(0,d.TC)(i,t);if(s.points&&s.points.featureSet&&s.points.featureSet.features)for(const e of s.points.featureSet.features)(0,u.Yg)(t,e.geometry),(0,d.TC)(i,t);if(s.mapImages)for(const e of s.mapImages)(0,u.Yg)(t,e.extent),(0,d.TC)(i,t)}return(0,d.fS)(i,d.Gv)?null:{xmin:i[0],ymin:i[1],zmin:i[2],xmax:i[3],ymax:i[4],zmax:i[5],spatialReference:h.Z.WGS84}}},86602:(e,t,i)=>{i.d(t,{eY:()=>u});var s=i(61681),r=i(1662),n=i(19710),a=i(55542),o=i(51118),l=i(7349),h=i(43487);function d(e,t,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(s.width=t,s.height=i),new h.Z(e,s)}class u extends o.s{constructor(e=null,t,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:(0,n.c)()}}setTransform(e){const t=(0,r.b)(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),n=this.resolution/this.pixelRatio/e.resolution,o=n*this.width,l=n*this.height,h=Math.PI*this.rotation/180;(0,r.c)(t,t,(0,a.f)(i,s)),(0,r.c)(t,t,(0,a.f)(o/2,l/2)),(0,r.r)(t,t,-h),(0,r.c)(t,t,(0,a.f)(-o/2,-l/2)),(0,r.j)(t,t,(0,a.f)(o,l)),(0,r.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}updateTexture(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=d(e,this.sourceWidth,this.sourceHeight):this._texture=d(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),(r=i)&&"render"in r)if(i instanceof l.Z){const e=i.getRenderedRasterPixels();this._texture.setData((0,s.pC)(e)?e.renderedRasterPixels:null)}else this._texture.setData(function(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(i));else(function(e){return e&&!("render"in e)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null);var r}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},12688:(e,t,i)=>{i.d(t,{c:()=>a});var s=i(14351),r=i(38716),n=i(10994);class a extends n.Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[s.U.bitmap],target:()=>this.children,drawPhase:r.jx.MAP});return[...super.prepareRenderPasses(e),t]}}},7349:(e,t,i)=>{i.d(t,{Z:()=>r});var s=i(61681);class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if((0,s.Wi)(t))return;const i=this.filter({pixelBlock:t});if((0,s.Wi)(i.pixelBlock))return;const r=i.pixelBlock.getAsRGBA(),n=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(r),e.putImageData(n,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return(0,s.Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},22052:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var s=i(36663),r=i(88256),n=i(66341),a=i(66591),o=i(44584),l=i(61681),h=i(3466),d=i(81977),u=(i(7753),i(39994),i(7283),i(40266)),c=i(91772),p=i(89696),g=i(14685),f=i(39536),y=i(91103),m=i(84238),w=i(94449),_=i(86602),x=i(12688),b=i(80347),v=i(68114),V=i(4862),S=i(26216);class I{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let P=class extends((0,b.y)(S.Z)){constructor(){super(...arguments),this._handles=new o.Z,this._bitmapIndex=new Map,this._mapImageContainer=new x.c,this._kmlVisualData=new I,this.allVisiblePoints=new w.J,this.allVisiblePolylines=new w.J,this.allVisiblePolygons=new w.J,this.allVisibleMapImages=new a.Z}async hitTest(e,t){var i,s,r;return(await Promise.all([null==(i=this._pointsView)?void 0:i.hitTest(e),null==(s=this._polylinesView)?void 0:s.hitTest(e),null==(r=this._polygonsView)?void 0:r.hitTest(e)])).flat().filter((e=>!!e&&(e.layer=this.layer,e.sourceLayer=this.layer,!0)))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}attach(){this._handles.add([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)))}))]),this.container.addChild(this._mapImageContainer),this._polygonsView=new V.Z({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new v.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new V.Z({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new v.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new V.Z({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new v.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.watch("layer.visibleSublayers",(e=>{for(const[e,t]of this._kmlVisualData.allSublayers)t.visibility=0;for(const t of e){const e=this._kmlVisualData.allSublayers.get(t.id);e&&(e.visibility=1)}this._refreshCollections()})),this._fetchingPromise=this._fetchService().then((()=>{this._fetchingPromise=null,this.notifyChange("updating")}))}detach(){this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&(0,n.default)(e.href,{responseType:"image"}).then((({data:t})=>{let i=c.Z.fromJSON(e.extent);(0,f.Q8)(i,this.view.spatialReference)&&(i=(0,f.iV)(i,this.view.spatialReference));const s=new _.eY(t,"standard");s.x=i.xmin,s.y=i.ymax,s.resolution=i.width/t.naturalWidth,s.rotation=e.rotation,this._mapImageContainer.addChild(s),this._bitmapIndex.set(e,s)}))}async _getViewDependentUrl(e,t){const{viewFormat:i,viewBoundScale:s,httpQuery:n}=e;if((0,l.pC)(i)){if((0,l.Wi)(t))throw new Error("Loading this network link requires a view state.");let a;if(await(0,p.zD)(),(0,l.pC)(s)&&1!==s){const e=new c.Z(t.extent);e.expand(s),a=e}else a=t.extent;a=(0,p.iV)(a,g.Z.WGS84);const o=(0,p.iV)(a,g.Z.WebMercator),d=a.xmin,u=a.xmax,f=a.ymin,y=a.ymax,w=t.size[0]*t.pixelRatio,_=t.size[1]*t.pixelRatio,x=Math.max(o.width,o.height),b={"[bboxWest]":d.toString(),"[bboxEast]":u.toString(),"[bboxSouth]":f.toString(),"[bboxNorth]":y.toString(),"[lookatLon]":a.center.x.toString(),"[lookatLat]":a.center.y.toString(),"[lookatRange]":x.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":a.center.x.toString(),"[lookatTerrainLat]":a.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":a.center.x.toString(),"[cameraLat]":a.center.y.toString(),"[cameraAlt]":x.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":w.toString(),"[vertPixels]":_.toString(),"[terrainEnabled]":"0","[clientVersion]":r.i8,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},v=e=>{for(const t in e)for(const i in b)e[t]=e[t].replace(i,b[i])},V=(0,h.u0)(i);v(V);let S={};(0,l.pC)(n)&&(S=(0,h.u0)(n),v(S));const I=(0,m.en)(e.href);return I.query={...I.query,...V,...S},`${I.path}?${(0,h.B7)(V)}`}return e.href}async _fetchService(){const e=new I;await this._loadVisualData(this.layer.url,e),this._kmlVisualData=e,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e)))}_isSublayerVisible(e){const t=this._kmlVisualData.allSublayers.get(e);return!!t.visibility&&(-1===t.parentFolderId||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(e,t){return this._fetchParsedKML(e).then((async e=>{for(const i of e.sublayers){t.allSublayers.set(i.id,i);const e=i.points?await(0,y.Yu)(i.points):[],s=i.polylines?await(0,y.Yu)(i.polylines):[],r=i.polygons?await(0,y.Yu)(i.polygons):[],n=i.mapImages||[];if(t.allPoints.push(...e.map((e=>({item:e,sublayerId:i.id})))),t.allPolylines.push(...s.map((e=>({item:e,sublayerId:i.id})))),t.allPolygons.push(...r.map((e=>({item:e,sublayerId:i.id})))),t.allMapImages.push(...n.map((e=>({item:e,sublayerId:i.id})))),i.networkLink){const e=await this._getViewDependentUrl(i.networkLink,this.view.state);await this._loadVisualData(e,t)}}}))}_fetchParsedKML(e){return(0,y.CS)(e,this.view.spatialReference,this.layer.refreshInterval).then((e=>(0,y.Cw)(e.data)))}_removeMapImage(e){const t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}};(0,s._)([(0,d.Cb)()],P.prototype,"_pointsView",void 0),(0,s._)([(0,d.Cb)()],P.prototype,"_polylinesView",void 0),(0,s._)([(0,d.Cb)()],P.prototype,"_polygonsView",void 0),(0,s._)([(0,d.Cb)()],P.prototype,"_fetchingPromise",void 0),(0,s._)([(0,d.Cb)()],P.prototype,"updating",void 0),P=(0,s._)([(0,u.j)("esri.views.2d.layers.KMLLayerView2D")],P);const k=P},68114:(e,t,i)=>{i.d(t,{Z:()=>n});var s=i(38716),r=i(26204);class n extends r.Z{renderChildren(e){this.attributeView.bindTextures(e.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.drawPhase===s.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===s.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}}}]);
//# sourceMappingURL=2052.js.map