"use strict";(self.webpackChunkmomraGisCore=self.webpackChunkmomraGisCore||[]).push([[1500],{71500:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var o=r(36663),l=r(66591),a=r(61681),i=r(15842),n=r(81977),s=(r(7753),r(39994),r(7283),r(34248)),u=r(40266),c=r(77567),p=r(76136),d=r(43330),m=r(18241);let C=class extends((0,d.q)((0,m.I)((0,i.R)(p.Z)))){constructor(...e){super(...e),this.type="route"}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((e=>{const t=new c.default;return t.read(e,r),t}))}readFeatureCollectionsFromWebMap(e,t,r){return t.featureCollection.layers.map((e=>{const t=new c.default;return t.read(e,r),t}))}get fullExtent(){return(0,a.Wi)(this.featureCollections)?null:this.featureCollections.reduce(((e,t)=>(0,a.Wi)(t.fullExtent)?e:(0,a.Wi)(e)?t.fullExtent.clone():e.union(t.fullExtent)),null)}get maxScale(){return(0,a.Wi)(this.featureCollections)?0:this.featureCollections.reduce(((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale)),null)}set maxScale(e){(0,a.pC)(this.featureCollections)&&this.featureCollections.forEach((t=>{t.maxScale=e})),this._set("maxScale",e)}get minScale(){return(0,a.Wi)(this.featureCollections)?0:this.featureCollections.reduce(((e,t)=>null==e?t.minScale:Math.min(e,t.minScale)),null)}set minScale(e){(0,a.pC)(this.featureCollections)&&this.featureCollections.forEach((t=>{t.minScale=e})),this._set("minScale",e)}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}_getNamedFeatureLayer(e){if(!(0,a.Wi)(this.featureCollections))return this.featureCollections.find((t=>t.title===e))}};(0,o._)([(0,n.Cb)()],C.prototype,"barrierLines",null),(0,o._)([(0,n.Cb)()],C.prototype,"barrierPoints",null),(0,o._)([(0,n.Cb)()],C.prototype,"barrierPolygons",null),(0,o._)([(0,n.Cb)()],C.prototype,"directionLines",null),(0,o._)([(0,n.Cb)()],C.prototype,"directionPoints",null),(0,o._)([(0,n.Cb)({type:l.Z.ofType(c.default)})],C.prototype,"featureCollections",void 0),(0,o._)([(0,s.r)("portal-item","featureCollections",["layers"])],C.prototype,"readFeatureCollectionsFromItem",null),(0,o._)([(0,s.r)("web-map","featureCollections",["featureCollection.layers"])],C.prototype,"readFeatureCollectionsFromWebMap",null),(0,o._)([(0,n.Cb)({readOnly:!0})],C.prototype,"fullExtent",null),(0,o._)([(0,n.Cb)({type:["show","hide"]})],C.prototype,"listMode",void 0),(0,o._)([(0,n.Cb)()],C.prototype,"minScale",null),(0,o._)([(0,n.Cb)()],C.prototype,"routeInfo",null),(0,o._)([(0,n.Cb)()],C.prototype,"stops",null),(0,o._)([(0,n.Cb)({readOnly:!0,json:{read:!1}})],C.prototype,"type",void 0),C=(0,o._)([(0,u.j)("esri.layers.RouteLayer")],C);const y=C}}]);
//# sourceMappingURL=1500.js.map