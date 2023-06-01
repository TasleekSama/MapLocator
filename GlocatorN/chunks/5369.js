"use strict";(self.webpackChunkmomraGisCore=self.webpackChunkmomraGisCore||[]).push([[5369],{75369:(e,r,t)=>{t.r(r),t.d(r,{default:()=>B});var s=t(36663),i=(t(91957),t(66341)),a=t(70375),l=t(53280),o=t(61681),n=t(15842),p=t(78668),c=t(3466),h=t(81977),u=(t(7753),t(39994),t(69236)),d=t(34248),y=t(40266),_=t(39835),v=t(76136),f=t(91223),g=t(89993),m=t(81432),b=t(87232),S=t(27668),C=t(63989),T=t(43330),w=t(18241),O=t(12478),R=t(95874),W=t(80002),k=t(20692),U=t(51599),L=t(23875),N=t(14685);const P=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let j=class extends((0,S.h)((0,W.x)((0,R.M)((0,T.q)((0,w.I)((0,g.Z)((0,m.O)((0,b.Y)((0,n.R)((0,l.p)((0,O.Q)((0,f.V)((0,C.N)(v.Z)))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=(0,o.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(p.r9).then((()=>this._fetchService(r)))),Promise.resolve(this)}get attributionDataUrl(){var e;const r=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}readSpatialReference(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&N.Z.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),a=[],l={writeSublayerStructure:!1,...s};i.forEach((e=>{const r=e.write({},l);a.push(r)})),a.some((e=>Object.keys(e).length>1))&&(r.layers=a)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>(0,c.mN)(e).path)):null}fetchTile(e,r,t,s={}){const{signal:a}=s,l=this.getTileUrl(e,r,t),o={responseType:"image",signal:a,query:{...this.refreshParameters}};return(0,i.default)(l,o).then((e=>e.data))}getTileUrl(e,r,t){const s=!this.tilemapCache&&this.supportsBlankTile,i=(0,c.B7)({...this.parsedUrl.query,blankTile:!s&&null,...this.customParameters,token:this.apiKey}),a=this.tileServers;return`${a&&a.length?a[r%a.length]:this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}_fetchService(e){return new Promise(((r,t)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new a.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new a.Z("tile-layer:undefined-url","layer's url is not defined");const s=(0,k.Qc)(this.parsedUrl.path);if((0,o.pC)(s)&&"ImageServer"===s.serverType)throw new a.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,i.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)})).then((r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!(0,k.M8)(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e})})).catch((()=>{}))}))}_fetchServerVersion(e,r){if(!(0,k.B5)(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,i.default)(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new a.Z("tile-layer:version-not-available")}))}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let t=0,s=P.length;t<s;t++)if(r=P[t],r.toLowerCase().indexOf(e)>-1)return(0,c.hF)("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};(0,s._)([(0,h.Cb)({readOnly:!0})],j.prototype,"attributionDataUrl",null),(0,s._)([(0,h.Cb)({type:["show","hide","hide-children"]})],j.prototype,"listMode",void 0),(0,s._)([(0,h.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],j.prototype,"isReference",void 0),(0,s._)([(0,h.Cb)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],j.prototype,"operationalLayerType",void 0),(0,s._)([(0,h.Cb)({type:Boolean})],j.prototype,"resampling",void 0),(0,s._)([(0,h.Cb)()],j.prototype,"sourceJSON",void 0),(0,s._)([(0,h.Cb)({type:N.Z})],j.prototype,"spatialReference",void 0),(0,s._)([(0,d.r)("spatialReference",["spatialReference","tileInfo"])],j.prototype,"readSpatialReference",null),(0,s._)([(0,h.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],j.prototype,"path",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],j.prototype,"sublayers",void 0),(0,s._)([(0,_.c)("sublayers",{layers:{type:[L.Z]}})],j.prototype,"writeSublayers",null),(0,s._)([(0,h.Cb)({json:{read:!1,write:!1}})],j.prototype,"popupEnabled",void 0),(0,s._)([(0,h.Cb)()],j.prototype,"tileServers",null),(0,s._)([(0,u.p)("tileServers")],j.prototype,"castTileServers",null),(0,s._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],j.prototype,"type",void 0),(0,s._)([(0,h.Cb)(U.HQ)],j.prototype,"url",void 0),j=(0,s._)([(0,y.j)("esri.layers.TileLayer")],j),j.prototype.fetchTile.__isDefault__=!0;const B=j}}]);
//# sourceMappingURL=5369.js.map