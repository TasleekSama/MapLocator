"use strict";(self.webpackChunkmomraGisCore=self.webpackChunkmomraGisCore||[]).push([[890],{86602:(e,t,i)=>{i.d(t,{eY:()=>u});var s=i(61681),r=i(1662),a=i(19710),n=i(55542),o=i(51118),h=i(7349),l=i(43487);function d(e,t,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(s.width=t,s.height=i),new l.Z(e,s)}class u extends o.s{constructor(e=null,t,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:(0,a.c)()}}setTransform(e){const t=(0,r.b)(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.resolution/this.pixelRatio/e.resolution,o=a*this.width,h=a*this.height,l=Math.PI*this.rotation/180;(0,r.c)(t,t,(0,n.f)(i,s)),(0,r.c)(t,t,(0,n.f)(o/2,h/2)),(0,r.r)(t,t,-l),(0,r.c)(t,t,(0,n.f)(-o/2,-h/2)),(0,r.j)(t,t,(0,n.f)(o,h)),(0,r.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}updateTexture(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=d(e,this.sourceWidth,this.sourceHeight):this._texture=d(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),(r=i)&&"render"in r)if(i instanceof h.Z){const e=i.getRenderedRasterPixels();this._texture.setData((0,s.pC)(e)?e.renderedRasterPixels:null)}else this._texture.setData(function(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(i));else(function(e){return e&&!("render"in e)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null);var r}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},12688:(e,t,i)=>{i.d(t,{c:()=>n});var s=i(14351),r=i(38716),a=i(10994);class n extends a.Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[s.U.bitmap],target:()=>this.children,drawPhase:r.jx.MAP});return[...super.prepareRenderPasses(e),t]}}},7349:(e,t,i)=>{i.d(t,{Z:()=>r});var s=i(61681);class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if((0,s.Wi)(t))return;const i=this.filter({pixelBlock:t});if((0,s.Wi)(i.pixelBlock))return;const r=i.pixelBlock.getAsRGBA(),a=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);a.data.set(r),e.putImageData(a,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return(0,s.Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},31361:(e,t,i)=>{i.d(t,{Z:()=>T});var s=i(36663),r=i(53443),a=i(81977),n=(i(7753),i(39994),i(7283),i(40266)),o=i(88243),h=i(87808),l=i(38716),d=i(10994);class u extends d.Z{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(e){super.doRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"flow",brushes:[h.Z],target:()=>this.children,drawPhase:l.jx.MAP});return[...super.prepareRenderPasses(e),t]}}i(91957);var p=i(13802),c=i(19431),g=i(61681),m=i(78668),y=i(53446);const x=p.Z.getLogger("esri.views.2d.engine.flow.FlowDisplayData");class _{constructor(e,t,i,s){this.state={name:"created"},this.flowStyle=e,this.extent=t,this.size=i,this.pixelRatio=s}async load(){const e=new AbortController;this.state={name:"loading",abortController:e};const t=await this.flowStyle.loadResources({extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},e.signal);this.state={name:"loaded",resources:t}}prepareForRendering(e,t,i){if("loaded"!==this.state.name)return void x.error("Only loaded resources can be attached.");const s=this.state.resources;s.prepareForRendering(e,t,i),this.state={name:"attached",resources:s}}destroy(){if("loading"===this.state.name)return this.state.abortController.abort(),void(this.state={name:"detached"});"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"})}update(e){return!!this.flowStyle.areResourcesCompatible(e.flowStyle)&&!(!this.extent.equals(e.extent)||this.size[0]!==e.size[0]||this.size[1]!==e.size[1]||this.pixelRatio!==e.pixelRatio||(this.flowStyle=e.flowStyle,0))}}var w=i(1662),f=i(19710),v=i(51118);class b extends v.s{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(e){this._displayData=e,this.requestRender()}clear(){(0,g.pC)(this._displayData)&&(this._displayData.destroy(),this._displayData=null,this.requestRender())}setTransform(e){const{displayData:t}=this;if((0,g.Wi)(t))return;const i=t.extent.xmin,s=t.extent.ymax,r=[0,0];e.toScreen(r,[i,s]);const a=(t.extent.xmax-t.extent.xmin)/t.size[0]/e.resolution,n=(0,c.Vl)(e.rotation),{dvs:o}=this.transforms;(0,w.b)(o),(0,w.c)(o,o,[-1,1,0]),(0,w.d)(o,o,[2/(e.size[0]*e.pixelRatio),-2/(e.size[1]*e.pixelRatio),1]),(0,w.c)(o,o,[r[0],r[1],0]),(0,w.r)(o,o,n),(0,w.d)(o,o,[a*e.pixelRatio,a*e.pixelRatio,1])}_createTransforms(){return{dvs:(0,f.c)()}}}var R=i(91772);const C=p.Z.getLogger("esri.views.2d.engine.flow.FlowStrategy");let S=class extends r.Z{constructor(e){super(e),this._flowDisplayObject=new b,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return null!=this._loading}update(e){const{flowStyle:t}=this.flowContainer;if((0,g.Wi)(t))return void this._clear();const{extent:i,rotation:s,resolution:r,pixelRatio:a}=e.state,n=function(e,t){const i=new y.Z({x:(e.xmax+e.xmin)/2,y:(e.ymax+e.ymin)/2,spatialReference:e.spatialReference}),s=e.xmax-e.xmin,r=e.ymax-e.ymin,a=Math.abs(Math.cos((0,c.Vl)(t))),n=Math.abs(Math.sin((0,c.Vl)(t))),o=a*s+n*r,h=n*s+a*r,l=new R.Z({xmin:i.x-o/2,ymin:i.y-h/2,xmax:i.x+o/2,ymax:i.y+h/2,spatialReference:e.spatialReference});return l.centerAt(i),l}(i,s);n.expand(1.15);const o=[Math.round((n.xmax-n.xmin)/r),Math.round((n.ymax-n.ymin)/r)],h=new _(t,n,o,a);if((0,g.pC)(this._loading)){if(this._loading.update(h))return;this._loading.destroy(),this._loading=null}!(0,g.Wi)(this._flowDisplayObject.displayData)&&this._flowDisplayObject.displayData.update(h)||(h.load().then((()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null}),(e=>{(0,m.D_)(e)||(C.error("A resource failed to load.",e),this._loading=null)})),this._loading=h)}_clear(){this._flowDisplayObject.clear(),(0,g.pC)(this._loading)&&(this._loading.destroy(),this._loading=null)}};(0,s._)([(0,a.Cb)()],S.prototype,"_loading",void 0),(0,s._)([(0,a.Cb)()],S.prototype,"flowContainer",void 0),(0,s._)([(0,a.Cb)()],S.prototype,"updating",null),S=(0,s._)([(0,n.j)("esri.views.2d.engine.flow.FlowStrategy")],S);const D=S;var P=i(95550),M=i(78951),V=(i(18567),i(6174),i(91907),i(88338),i(43487),i(29620));class E{constructor(e,t){this._vertexData=e,this._indexData=t}prepareForRendering(e,t,i){const s=M.Z.createVertex(e,35044,this._vertexData),r=M.Z.createIndex(e,35044,this._indexData),a=new V.Z(e,t,i,{geometry:s},r);this.vertexBuffer=s,this.indexBuffer=r,this.vertexArray=a,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose(),this.vertexBuffer.dispose(),this.indexBuffer.dispose()}}class I{constructor(e,t,i){this._loadImagery=e,this._createStreamlinesMesh=t,this._rendererSettings=function(e){const t=(0,P.F2)(e.lineWidth),i=2*t,s=Math.round((0,P.F2)(e.lineLength)/i)+1,r=t,a=e.lineColor.toRgba(),n=[a[0]/255,a[1]/255,a[2]/255,a[3]],{lineSpeed:o,fadeDuration:h,density:l}=e;return{lineRenderWidth:t,segmentLength:i,verticesPerLine:s,lineCollisionWidth:r,lineSpacing:10,lineColor:n,lineSpeed:o,fadeDuration:h,density:l,smoothing:(0,P.F2)(e.smoothing),velocityScale:1,minWeightThreshold:.001,minSpeedThreshold:.001,maxTurnAngle:1,mergeLines:!0,interpolate:!0,profile:!1}}(i)}get animated(){return this._rendererSettings.lineSpeed>0}get renderSettings(){return this._rendererSettings}areResourcesCompatible(e){let t=!0;return t=t&&e._loadImagery===this._loadImagery,t=t&&e._createStreamlinesMesh===this._createStreamlinesMesh,t=t&&e._rendererSettings.verticesPerLine===this._rendererSettings.verticesPerLine,t=t&&e._rendererSettings.segmentLength===this._rendererSettings.segmentLength,t=t&&e._rendererSettings.lineSpacing===this._rendererSettings.lineSpacing,t=t&&e._rendererSettings.density===this._rendererSettings.density,t=t&&e._rendererSettings.smoothing===this._rendererSettings.smoothing,t=t&&e._rendererSettings.velocityScale===this._rendererSettings.velocityScale,t=t&&e._rendererSettings.minWeightThreshold===this._rendererSettings.minWeightThreshold,t=t&&e._rendererSettings.minSpeedThreshold===this._rendererSettings.minSpeedThreshold,t=t&&e._rendererSettings.mergeLines===this._rendererSettings.mergeLines,t=t&&e._rendererSettings.interpolate===this._rendererSettings.interpolate,t&&this._rendererSettings.mergeLines&&(t=e._rendererSettings.lineCollisionWidth===this._rendererSettings.lineCollisionWidth),!!t}async loadResources(e,t){const{extent:i,size:s}=e;(0,m.k_)(t);const r=await this._loadImagery(i,s[0],s[1],t),{vertexData:a,indexData:n}=await this._createStreamlinesMesh(this._rendererSettings,r,t);return new E(a,n)}}let q=class extends r.Z{constructor(){super(...arguments),this._loadImagery=(e,t,i,s)=>(0,o.KK)(this.layer,e,t,i,s),this._createStreamlinesMesh=(e,t,i)=>this.layer.createStreamlinesMesh({flowData:t,rendererSettings:e},{signal:i}),this.container=null,this.layer=null,this.type="rasterAnimatedFlow",this.redrawOrRefetch=async()=>{this._rendererChanged()}}get updating(){return!this._strategy||this._strategy.updating}update(e){e.stationary?this._strategy.update(e):this.layerView.requestUpdate()}install(e){this.container=new u,e.addChild(this.container),this._strategy=new D({flowContainer:this.container}),this._rendererChanged()}uninstall(){this._strategy.destroy(),this.container.removeAllChildren(),this.container.remove()}moveEnd(){}async doRefresh(){}attach(){}_rendererChanged(){if("animated-flow"!==this.layer.renderer.type)return;const e=new I(this._loadImagery,this._createStreamlinesMesh,this.layer.renderer);this.container.flowStyle=e,this.layerView.requestUpdate()}};(0,s._)([(0,a.Cb)()],q.prototype,"_strategy",void 0),(0,s._)([(0,a.Cb)()],q.prototype,"container",void 0),(0,s._)([(0,a.Cb)()],q.prototype,"layer",void 0),(0,s._)([(0,a.Cb)()],q.prototype,"layerView",void 0),(0,s._)([(0,a.Cb)()],q.prototype,"type",void 0),(0,s._)([(0,a.Cb)()],q.prototype,"updating",null),q=(0,s._)([(0,n.j)("esri.views.2d.engine.flow.AnimatedFlowView2D")],q);const T=q},90890:(e,t,i)=>{i.r(t),i.d(t,{default:()=>U});var s=i(36663),r=i(15071),a=i(81977),n=(i(7753),i(39994),i(7283),i(40266)),o=i(31361),h=i(80347),l=i(80085),d=i(66341),u=i(53443),p=i(13802),c=i(61681),g=i(78668),m=i(79438),y=i(91772),x=i(18486),_=i(7928),w=i(94449),f=i(10530),v=i(68114),b=i(4862);const R=p.Z.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let C=class extends u.Z{constructor(){super(...arguments),this.attached=!1,this.container=new f.W,this.updateRequested=!1,this._graphicsView=null,this._projectFullExtentPromise=null,this._dataParameters={exportParametersVersion:0,extents:[],tileResolution:0,time:"",isOceanStyle:!1,isOceanographic:!1},this.type="Graphics",this._graphics=new w.J,this._updateGraphics=(0,g.Ds)((async(e,t)=>{if(!e.stationary)return;const i=e.state,s=new y.Z({xmin:i.extent.xmin,ymin:i.extent.ymin,xmax:i.extent.xmax,ymax:i.extent.ymax,spatialReference:i.spatialReference}),[r,a]=e.state.size,n={};n.timeExtent=this.timeExtent,n.requestAsImageElement=!1,n.signal=t,null==this._projectFullExtentPromise&&(this._projectFullExtentPromise=this._getProjectedFullExtent(s.spatialReference));const o="vector-field"===this.layer.renderer.type?this.layer.renderer.symbolTileSize:50,h=await this._projectFullExtentPromise,{extent:l,resolution:d,width:u,height:p}=(0,_.BH)(s,r,a,o,h),g=await this.layer.fetchImage(l,u,p,n),m=this.layer.renderer;if("vector-field"===m.type){const t=g.pixelData.pixelBlock,i=m.sizeVariables[0];!(0,c.pC)(t)||i.minDataValue&&i.maxDataValue||(i.minDataValue=t.statistics[0].minValue,i.maxDataValue=t.statistics[0].maxValue),this._pixelData={extent:l,pixelBlock:t};const s=l.clone().normalize(),r={exportParametersVersion:this.layer.exportImageServiceParameters.version,extents:s,tileResolution:d,time:JSON.stringify(this.timeExtent||""),isOceanStyle:"flow-to"===m.flowRepresentation,isOceanographic:"ocean-current-kn"===m.style||"ocean-current-m"===m.style},a=this._canReuseVectorFieldData(r)?this._dataParameters.extents:[],n=await m.getGraphicsFromPixelData(g.pixelData,"vector-uv"===this.layer.rasterInfo.dataType,a);if(a.length){const e=this._graphics.items.filter((e=>(0,c.pC)(e.geometry)&&a.some((t=>t.intersects(e.geometry)))&&!s.some((t=>t.intersects(e.geometry)))));this._graphics.removeMany(e),this._graphics.addMany(n)}else this._graphics.set("items",n);this._graphicsView.update(e),this._dataParameters=r}}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this._updateGraphics(e).catch((e=>{(0,g.D_)(e)||R.error(e)}))}hitTest(e){return new l.Z({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this._graphicsView=new b.Z({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v.Z(this.view.featuresTilingScheme)}),this.attached=!0}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container)}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}async _getProjectedFullExtent(e){try{return await(0,x.tB)(this.layer.fullExtent,e)}catch(t){try{const t=(await(0,d.default)(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?y.Z.fromJSON(t):null}catch{return null}}}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,s=Math.abs(this._dataParameters.tileResolution-e.tileResolution)/e.tileResolution<.01,r=this._dataParameters.extents.some((t=>e.extents.some((e=>t.intersects(e))))),a=this._dataParameters.isOceanStyle===e.isOceanStyle,n=this._dataParameters.isOceanographic===e.isOceanographic;return t&&i&&s&&r&&a&&n}};(0,s._)([(0,a.Cb)()],C.prototype,"attached",void 0),(0,s._)([(0,a.Cb)()],C.prototype,"container",void 0),(0,s._)([(0,a.Cb)()],C.prototype,"layer",void 0),(0,s._)([(0,a.Cb)()],C.prototype,"timeExtent",void 0),(0,s._)([(0,a.Cb)()],C.prototype,"view",void 0),(0,s._)([(0,a.Cb)()],C.prototype,"updateRequested",void 0),(0,s._)([(0,a.Cb)()],C.prototype,"updating",null),(0,s._)([(0,m.J)({graphics:"Graphics"})],C.prototype,"type",void 0),C=(0,s._)([(0,n.j)("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],C);const S=C;var D=i(31329),P=i(12688),M=i(7349),V=i(23134);const E=p.Z.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let I=class extends u.Z{constructor(){super(...arguments),this.attached=!1,this.container=new f.W,this.updateRequested=!1,this.type="Imagery",this._bitmapView=null}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{(0,g.D_)(e)||E.error(e)}))}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren()}hitTest(e){return new l.Z({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new P.c,this.strategy=new V.Z({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container)}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const i=e.source;i.pixelBlock=t.pixelBlock,i.filter=e=>this.layer.applyFilter(e),this.container.requestRender()}))}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),s=(0,D.Kh)(i,t);return(0,c.pC)(s)?{extent:s.extent,pixelBlock:s.pixelBlock}:null}return null}_fetchImage(e,t,i,s){return(s=s||{}).timeExtent=this.timeExtent,s.requestAsImageElement=!0,this.layer.fetchImage(e,t,i,s).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:s.signal}).then((t=>{const i=new M.Z(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return i.filter=e=>this.layer.applyFilter(e),i}))))}};(0,s._)([(0,a.Cb)()],I.prototype,"attached",void 0),(0,s._)([(0,a.Cb)()],I.prototype,"container",void 0),(0,s._)([(0,a.Cb)()],I.prototype,"layer",void 0),(0,s._)([(0,a.Cb)()],I.prototype,"strategy",void 0),(0,s._)([(0,a.Cb)()],I.prototype,"timeExtent",void 0),(0,s._)([(0,a.Cb)()],I.prototype,"view",void 0),(0,s._)([(0,a.Cb)()],I.prototype,"updateRequested",void 0),(0,s._)([(0,a.Cb)()],I.prototype,"updating",null),(0,s._)([(0,m.J)({imagery:"Imagery"})],I.prototype,"type",void 0),I=(0,s._)([(0,n.j)("esri.views.2d.layers.imagery.ImageryView2D")],I);const q=I;var T=i(70375),Z=i(53446),B=i(51599),k=i(14136),F=i(59439);const O=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)throw new T.Z("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:s}=i,r=(0,F.V)(i,t);if(!s||!(0,c.pC)(r))throw new T.Z("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:s,popupTemplate:r});const a=await r.getRequiredFields(),n=new k.Z;n.timeExtent=this.timeExtent,n.geometry=e,n.outFields=a,n.outSpatialReference=e.spatialReference;const o=this.view.resolution,h="2d"===this.view.type?new Z.Z(o,o,this.view.spatialReference):new Z.Z(.5*o,.5*o,this.view.spatialReference),{returnTopmostRaster:l,showNoDataRecords:d}=r.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},u={returnDomainValues:!0,returnTopmostRaster:l,pixelSize:h,showNoDataRecords:d,signal:(0,c.pC)(t)?t.signal:null};return i.queryVisibleRasters(n,u).then((e=>e))}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}};return(0,s._)([(0,a.Cb)()],t.prototype,"layer",void 0),(0,s._)([(0,a.Cb)()],t.prototype,"suspended",void 0),(0,s._)([(0,a.Cb)(B.qG)],t.prototype,"timeExtent",void 0),(0,s._)([(0,a.Cb)()],t.prototype,"view",void 0),t=(0,s._)([(0,n.j)("esri.views.layers.ImageryLayerView")],t),t};var W=i(26216),z=i(55068);let j=class extends(O((0,z.y)((0,h.y)(W.Z)))){constructor(){super(...arguments),this._exportImageVersion=-1}initialize(){this.handles.add([(0,r.S1)(this,["layer.blendMode","layer.effects"],(e=>{this.subview&&(this.subview.container.blendMode=e)}),!0),(0,r.S1)(this,"layer.effect",(e=>{this.subview&&(this.subview.container.effect=e)}),!0)])}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}get updating(){return!!(!this.subview||"updating"in this.subview&&this.subview.updating)}async hitTest(e,t){return this.subview?"hitTest"in this.subview?[this.subview.hitTest(e)]:[]:null}update(e){var t;null==(t=this.subview)||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([(0,r.S1)(this,"layer.exportImageServiceParameters.version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())})),this.watch("timeExtent",(()=>{"timeExtent"in this.subview&&(this.subview.timeExtent=this.timeExtent),this.requestUpdate()})),this.layer.on("redraw",(()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch()})),(0,r.YP)(this.layer,"renderer",(()=>this._setSubView()))],"imagerylayerview-update")}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||!this.suspended&&this.subview.updating}_setSubView(){var e,t;let i="Imagery";var s,r;"vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(i="Graphics"),"animated-flow"===(null==(t=this.layer.renderer)?void 0:t.type)&&(i="Flow"),this.subview&&this.subview.type===i||(null==(s=this.subview)||s.uninstall(this.container),null==(r=this.subview)||r.destroy(),this.subview="Imagery"===i?new q({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"Graphics"===i?new S({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new o.Z({layer:this.layer,layerView:this}),this.subview.attach(),this.subview.install(this.container),this.subview.container.blendMode=this.layer.blendMode,this.subview.container.effect=this.layer.effect),this.requestUpdate()}};(0,s._)([(0,a.Cb)()],j.prototype,"pixelData",null),(0,s._)([(0,a.Cb)({readOnly:!0})],j.prototype,"updating",null),(0,s._)([(0,a.Cb)()],j.prototype,"subview",void 0),j=(0,s._)([(0,n.j)("esri.views.2d.layers.ImageryLayerView2D")],j);const U=j},68114:(e,t,i)=>{i.d(t,{Z:()=>a});var s=i(38716),r=i(26204);class a extends r.Z{renderChildren(e){this.attributeView.bindTextures(e.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.drawPhase===s.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===s.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}},23134:(e,t,i)=>{i.d(t,{Z:()=>b});var s=i(36663),r=i(53443),a=i(78668),n=i(81977),o=(i(7753),i(39994),i(7283),i(40266)),h=i(91772),l=i(24568),d=i(35925),u=i(81590);const p=Math.PI/180;function c(e){return e*p}function g(e,t){const i=c(t.rotation),s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[a,n]=t.size;return e[0]=Math.round(n*r+a*s),e[1]=Math.round(n*s+a*r),e}var m=i(86602),y=i(64970),x=i(87241);const _=(0,l.Ue)(),w=[0,0],f=new x.Z(0,0,0,0);let v=class extends r.Z{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=false,this.imageMaxWidth=2048,this.imageMaxHeight=2048,this.imageRotationSupported=false,this.imageNormalizationSupported=false,this.update=(0,a.Ds)((async(e,t)=>{if(!e.stationary||this.destroyed)return null;const i=e.state,s=(0,d.C5)(i.spatialReference),r=this.hidpi?e.pixelRatio:1,a=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0];a?(w[0]=i.worldScreenWidth,w[1]=i.size[1]):this.imageRotationSupported?(w[0]=i.size[0],w[1]=i.size[1]):g(w,i);const n=Math.floor(w[0]*r)>this.imageMaxWidth||Math.floor(w[1]*r)>this.imageMaxHeight,o=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),h=!this.imageNormalizationSupported&&o,l=!n&&!h,u=this.imageRotationSupported?i.rotation:0;if(l){const e=a?i.paddedViewState.center:i.center;this._imagePromise=this._singleExport(i,w,e,i.resolution,u,r,t)}else{let e=Math.min(this.imageMaxWidth,this.imageMaxHeight);h&&(e=Math.min(i.worldScreenWidth,e)),this._imagePromise=this._tiledExport(i,e,u,r,t)}return this._imagePromise.then((async e=>{if(this._imagePromise=null,!this.destroyed){this.bitmaps=null!=e?e:[];for(const t of this.container.children)e.includes(t)||t.fadeOut().then((()=>{t.remove()}));for(const t of e)this.container.addChild(t),t.fadeIn()}})).catch((e=>{throw this._imagePromise=null,e}))}),5e3)}destroy(){this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}updateExports(e){for(const t of this.container.children){if(!t.visible||!t.stage)return;e(t),t.invalidateTexture(),t.requestRender()}}async _export(e,t,i,s,r,a){const n=await this.fetchSource(e,Math.floor(t*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:a}),o=new m.eY(n,"additive");return o.x=e.xmin,o.y=e.ymax,o.resolution=e.width/t,o.rotation=s,o.pixelRatio=r,o}async _singleExport(e,t,i,s,r,a,n){!function(e,t,i,s){const[r,a]=t,[n,o]=s,h=.5*i;e[0]=r-h*n,e[1]=a-h*o,e[2]=r+h*n,e[3]=a+h*o}(_,i,s,t);const o=new h.Z(_[0],_[1],_[2],_[3],e.spatialReference);return[await this._export(o,t[0],t[1],r,a,n)]}_tiledExport(e,t,i,s,r){const a=u.Z.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),n=new y.Z(a),o=n.getTileCoverage(e);if(!o)return null;const l=[];return o.forEach(((a,o,d,u)=>{f.set(a,o,d,u),n.getTileBounds(_,f);const p=new h.Z(_[0],_[1],_[2],_[3],e.spatialReference);l.push(this._export(p,t,t,i,s,r))})),Promise.all(l)}};(0,s._)([(0,n.Cb)()],v.prototype,"_imagePromise",void 0),(0,s._)([(0,n.Cb)()],v.prototype,"bitmaps",void 0),(0,s._)([(0,n.Cb)()],v.prototype,"container",void 0),(0,s._)([(0,n.Cb)()],v.prototype,"fetchSource",void 0),(0,s._)([(0,n.Cb)()],v.prototype,"hidpi",void 0),(0,s._)([(0,n.Cb)()],v.prototype,"imageMaxWidth",void 0),(0,s._)([(0,n.Cb)()],v.prototype,"imageMaxHeight",void 0),(0,s._)([(0,n.Cb)()],v.prototype,"imageRotationSupported",void 0),(0,s._)([(0,n.Cb)()],v.prototype,"imageNormalizationSupported",void 0),(0,s._)([(0,n.Cb)()],v.prototype,"requestUpdate",void 0),(0,s._)([(0,n.Cb)()],v.prototype,"updating",null),v=(0,s._)([(0,o.j)("esri.views.2d.layers.support.ExportStrategy")],v);const b=v},55068:(e,t,i)=>{i.d(t,{y:()=>l});var s=i(36663),r=i(13802),a=i(78668),n=i(15071),o=i(81977),h=(i(7753),i(39994),i(7283),i(40266));const l=e=>{let t=class extends e{initialize(){this.handles.add((0,n.on)(this,"layer","refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,a.D_)(e)||r.Z.getLogger(this.declaredClass).error(e)}))})),"RefreshableLayerView")}};return(0,s._)([(0,o.Cb)()],t.prototype,"layer",void 0),t=(0,s._)([(0,h.j)("esri.layers.mixins.RefreshableLayerView")],t),t}},59439:(e,t,i)=>{i.d(t,{V:()=>n,e:()=>a});var s=i(61681),r=i(17095);async function a(e,t=e.popupTemplate){if(!(0,s.pC)(t))return[];const i=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:a}=t,{objectIdField:n,typeIdField:o,globalIdField:h,relationships:l}=e;if(i.includes("*"))return["*"];const d=a?await(0,r.CH)(e):[],u=(0,r.Q0)(e.fieldsIndex,[...i,...d]);return o&&u.push(o),u&&n&&e.fieldsIndex.has(n)&&-1===u.indexOf(n)&&u.push(n),u&&h&&e.fieldsIndex.has(h)&&-1===u.indexOf(h)&&u.push(h),l&&l.forEach((t=>{const{keyField:i}=t;u&&i&&e.fieldsIndex.has(i)&&-1===u.indexOf(i)&&u.push(i)})),u}function n(e,t){return e.popupTemplate?e.popupTemplate:(0,s.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,s.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}}]);
//# sourceMappingURL=890.js.map