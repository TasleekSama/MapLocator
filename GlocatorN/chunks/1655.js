"use strict";(self.webpackChunkmomraGisCore=self.webpackChunkmomraGisCore||[]).push([[1655],{81655:(e,t,r)=>{r.r(t),r.d(t,{default:()=>W});var s=r(36663),o=(r(91957),r(80020)),i=(r(86004),r(45510),r(66908),r(59284),r(22836),r(50172),r(25634),r(72506),r(54021)),n=r(61681),a=r(15842),u=r(3466),l=r(81977),p=(r(7753),r(39994)),d=(r(7283),r(40266)),c=r(59659),y=r(76136),h=r(70375),m=r(68309),f=r(13802),b=r(78668),g=r(47109),_=r(40400),v=r(51211),C=r(91772),S=r(89542);const O=f.Z.getLogger("esri.layers.graphics.sources.GeoJSONSource");let F=class extends m.Z{constructor(){super(...arguments),this.type="geojson",this.refresh=(0,b.Ds)((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(e){const t=(0,n.pC)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>v.default.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:C.Z.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new h.Z("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,r=[],s=[],o=[];if(e.addFeatures)for(const t of e.addFeatures)r.push(this._serializeFeature(t));if(e.deleteFeatures)for(const r of e.deleteFeatures)"objectId"in r&&null!=r.objectId?s.push(r.objectId):"attributes"in r&&null!=r.attributes[t]&&s.push(r.attributes[t]);if(e.updateFeatures)for(const t of e.updateFeatures)o.push(this._serializeFeature(t));return this._connection.invoke("applyEdits",{adds:r,updates:o,deletes:s}).then((({extent:e,timeExtent:t,featureEditResults:r})=>(this.sourceJSON.extent=e,t&&(this.sourceJSON.timeInfo.timeExtent=[t.start,t.end]),this._createEditsResult(r))))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new h.Z("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return(0,n.Wi)(t)?null:"mesh"===t.type||"extent"===t.type?S.Z.fromExtent(t.extent):t}async _startWorker(e){this._connection=await(0,g.bA)("GeoJSONSourceWorker",{strategy:(0,p.Z)("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:r,hasZ:s,geometryType:o,objectIdField:i,url:n,timeInfo:a,customParameters:u}=this.layer,l="defaults"===this.layer.originOf("spatialReference"),d={url:n,customParameters:u,fields:t&&t.map((e=>e.toJSON())),geometryType:c.Mk.toJSON(o),hasZ:s,objectIdField:i,timeInfo:a?a.toJSON():null,spatialReference:l?null:r&&r.toJSON()},y=await this._connection.invoke("load",d,{signal:e});for(const e of y.warnings)O.warn(e.message,{layer:this.layer,warning:e});y.featureErrors.length&&O.warn(`Encountered ${y.featureErrors.length} validation errors while loading features`,y.featureErrors),this.sourceJSON=y.layerDefinition,this.capabilities=(0,_.MS)(this.sourceJSON.hasZ,!0)}};(0,s._)([(0,l.Cb)()],F.prototype,"capabilities",void 0),(0,s._)([(0,l.Cb)()],F.prototype,"type",void 0),(0,s._)([(0,l.Cb)({constructOnly:!0})],F.prototype,"layer",void 0),(0,s._)([(0,l.Cb)()],F.prototype,"sourceJSON",void 0),F=(0,s._)([(0,d.j)("esri.layers.graphics.sources.GeoJSONSource")],F);const I=F;var E=r(27668),x=r(63989),R=r(22368),N=r(43330),w=r(50386),j=r(12478),J=r(95874),P=r(2030),Z=r(51599),q=r(94759),k=r(60822),D=r(18160),T=r(12512),G=r(89076),Q=r(17095),M=r(26732),A=r(49341),U=r(14136),z=r(10171),B=r(14685);const L=(0,G.v)();let V=class extends((0,w.c)((0,x.N)((0,R.b)((0,E.h)((0,P.n)((0,J.M)((0,j.Q)((0,N.q)((0,a.R)(y.Z)))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new I({layer:this}),this.spatialReference=B.Z.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.source.load(e).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),(0,Q.YN)(this.renderer,this.fieldsIndex),(0,Q.UF)(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?(0,u.mN)(this.url):null}set renderer(e){(0,Q.YN)(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=(0,u.mN)(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const s=await r.e(3261).then(r.bind(r,23261));await this.load();const o=await s.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),o}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,z.eZ)(this,e)}createQuery(){const e=new U.Z,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:s}=this;return e.timeExtent=null!=r&&null!=s?s.offset(-r.value,r.unit):s||null,e}getFieldDomain(e,t){let r,s=!1;const o=t&&t.feature,i=o&&o.attributes,n=this.typeIdField&&i&&i[this.typeIdField];return null!=n&&this.types&&(s=this.types.some((t=>t.id==n&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=this._getLayerDomain(e)),!0)))),s||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(U.Z.from(e)||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(U.Z.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(U.Z.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(U.Z.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return(0,n.pC)(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}};(0,s._)([(0,l.Cb)({readOnly:!0,json:{read:!1,write:!1}})],V.prototype,"capabilities",null),(0,s._)([(0,l.Cb)({type:String})],V.prototype,"copyright",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],V.prototype,"createQueryVersion",null),(0,s._)([(0,l.Cb)({readOnly:!0})],V.prototype,"defaultPopupTemplate",null),(0,s._)([(0,l.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],V.prototype,"definitionExpression",void 0),(0,s._)([(0,l.Cb)({type:String})],V.prototype,"displayField",void 0),(0,s._)([(0,l.Cb)({type:Boolean})],V.prototype,"editingEnabled",void 0),(0,s._)([(0,l.Cb)(Z.PV)],V.prototype,"elevationInfo",void 0),(0,s._)([(0,l.Cb)(q.d)],V.prototype,"featureReduction",void 0),(0,s._)([(0,l.Cb)({type:[T.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],V.prototype,"fields",void 0),(0,s._)([(0,l.Cb)(L.fieldsIndex)],V.prototype,"fieldsIndex",void 0),(0,s._)([(0,l.Cb)({type:C.Z,json:{name:"extent"}})],V.prototype,"fullExtent",void 0),(0,s._)([(0,l.Cb)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:c.Mk.read}}})],V.prototype,"geometryType",void 0),(0,s._)([(0,l.Cb)({type:Boolean})],V.prototype,"hasZ",void 0),(0,s._)([(0,l.Cb)(Z.id)],V.prototype,"id",void 0),(0,s._)([(0,l.Cb)({type:Boolean,readOnly:!0})],V.prototype,"isTable",null),(0,s._)([(0,l.Cb)(Z.iR)],V.prototype,"labelsVisible",void 0),(0,s._)([(0,l.Cb)({type:[M.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:A.r},write:!0}})],V.prototype,"labelingInfo",void 0),(0,s._)([(0,l.Cb)(Z.rn)],V.prototype,"legendEnabled",void 0),(0,s._)([(0,l.Cb)({type:["show","hide"]})],V.prototype,"listMode",void 0),(0,s._)([(0,l.Cb)({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],V.prototype,"objectIdField",void 0),(0,s._)([(0,l.Cb)(Z.Oh)],V.prototype,"opacity",void 0),(0,s._)([(0,l.Cb)({type:["GeoJSON"]})],V.prototype,"operationalLayerType",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],V.prototype,"parsedUrl",null),(0,s._)([(0,l.Cb)(Z.C_)],V.prototype,"popupEnabled",void 0),(0,s._)([(0,l.Cb)({type:o.Z,json:{name:"popupInfo",write:!0}})],V.prototype,"popupTemplate",void 0),(0,s._)([(0,l.Cb)({types:i.A,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:i.o}}}})],V.prototype,"renderer",null),(0,s._)([(0,l.Cb)(Z.YI)],V.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],V.prototype,"source",void 0),(0,s._)([(0,l.Cb)({type:B.Z})],V.prototype,"spatialReference",void 0),(0,s._)([(0,l.Cb)({type:[k.Z]})],V.prototype,"templates",void 0),(0,s._)([(0,l.Cb)()],V.prototype,"title",void 0),(0,s._)([(0,l.Cb)({json:{read:!1},readOnly:!0})],V.prototype,"type",void 0),(0,s._)([(0,l.Cb)({type:String,readOnly:!0})],V.prototype,"typeIdField",void 0),(0,s._)([(0,l.Cb)({type:[D.Z]})],V.prototype,"types",void 0),(0,s._)([(0,l.Cb)(Z.HQ)],V.prototype,"url",null),V=(0,s._)([(0,d.j)("esri.layers.GeoJSONLayer")],V);const W=V},10287:(e,t,r)=>{r.d(t,{g:()=>s});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},40400:(e,t,r)=>{r.d(t,{MS:()=>p,Dm:()=>u,Hq:()=>l,bU:()=>a});var s=r(39994),o=r(67134),i=r(10287),n=r(86094);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}function u(e,t){if((0,s.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${t.includes(".")?`["${t}"]`:`.${t}`} = ${JSON.stringify(e[t])};`;const s=new Function(r);return()=>new s}catch(r){return()=>({[t]:null,...e})}}function l(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,o.d9)(e)}}]}function p(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:i.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);
//# sourceMappingURL=1655.js.map