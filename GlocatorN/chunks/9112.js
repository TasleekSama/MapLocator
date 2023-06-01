"use strict";(self.webpackChunkmomraGisCore=self.webpackChunkmomraGisCore||[]).push([[9112],{92557:(e,a,t)=>{t.d(a,{T:()=>n});const n={BingMapsLayer:async()=>(await t.e(1968).then(t.bind(t,31968))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(5149),t.e(9871)]).then(t.bind(t,59871))).default,CSVLayer:async()=>(await t.e(9849).then(t.bind(t,89849))).default,ElevationLayer:async()=>(await t.e(6871).then(t.bind(t,36871))).default,FeatureLayer:async()=>(await Promise.resolve().then(t.bind(t,77567))).default,GroupLayer:async()=>(await Promise.resolve().then(t.bind(t,56753))).default,GeoRSSLayer:async()=>(await t.e(4417).then(t.bind(t,84417))).default,GeoJSONLayer:async()=>(await t.e(1655).then(t.bind(t,81655))).default,ImageryLayer:async()=>(await Promise.all([t.e(1329),t.e(7594),t.e(6985),t.e(4698)]).then(t.bind(t,34698))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(1329),t.e(8299),t.e(7594),t.e(6985),t.e(4283)]).then(t.bind(t,54283))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(5149),t.e(6479)]).then(t.bind(t,96479))).default,KMLLayer:async()=>(await t.e(693).then(t.bind(t,80693))).default,MapImageLayer:async()=>(await Promise.resolve().then(t.bind(t,69420))).default,MapNotesLayer:async()=>(await t.e(8414).then(t.bind(t,78414))).default,OGCFeatureLayer:async()=>(await t.e(3963).then(t.bind(t,53963))).default,OpenStreetMapLayer:async()=>(await t.e(3206).then(t.bind(t,81388))).default,PointCloudLayer:async()=>(await t.e(3108).then(t.bind(t,73108))).default,RouteLayer:async()=>(await t.e(1500).then(t.bind(t,71500))).default,SceneLayer:async()=>(await Promise.all([t.e(5149),t.e(4366)]).then(t.bind(t,74566))).default,StreamLayer:async()=>(await t.e(5609).then(t.bind(t,75609))).default,TileLayer:async()=>(await t.e(5369).then(t.bind(t,75369))).default,UnknownLayer:async()=>(await t.e(81).then(t.bind(t,40081))).default,UnsupportedLayer:async()=>(await t.e(4864).then(t.bind(t,74864))).default,VectorTileLayer:async()=>(await Promise.resolve().then(t.bind(t,16749))).default,VoxelLayer:async()=>(await t.e(1605).then(t.bind(t,1605))).default,WebTileLayer:async()=>(await t.e(9859).then(t.bind(t,89859))).default,WFSLayer:async()=>(await t.e(4420).then(t.bind(t,84420))).default,WMSLayer:async()=>(await t.e(1936).then(t.bind(t,61936))).default,WMTSLayer:async()=>(await t.e(9306).then(t.bind(t,9306))).default}},49112:(e,a,t)=>{t.r(a),t.d(a,{getFirstLayerOrTableId:()=>f,getNumLayersAndTables:()=>h,load:()=>u,preprocessFSItemData:()=>p});var n=t(70375),r=t(92557),l=t(26869),i=t(84513),s=t(16603),o=t(40371);async function u(e,a){const t=e.instance.portalItem;return t&&t.id?(await t.load(a),function(e){const a=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(a.type))throw new n.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,a){const t=e.instance,l=t.portalItem,{url:u,title:y}=l,f=(0,i.m)(l);if("group"===t.type)return t.read({title:y},f),function(e,a){let t;const l=e.portalItem.type;switch(l){case"Feature Service":case"Feature Collection":t=r.T.FeatureLayer;break;case"Stream Service":t=r.T.StreamLayer;break;case"Scene Service":t=r.T.SceneLayer;break;default:throw new n.Z("portal:unsupported-item-type-as-group",`The item type '${l}' is not supported as a 'IGroupLayer'`)}let i;return t().then((e=>(i=e,c(a)))).then((async a=>"Feature Service"===l?(a=await p(a,e.portalItem.url),d(e,i,a)):h(a)>0?d(e,i,a):function(e,a){return e.portalItem.url?(0,o.b)(e.portalItem.url).then((t=>{var n,r;function l(e){return{id:e.id,name:e.name}}t&&d(e,a,{layers:null==(n=t.layers)?void 0:n.map(l),tables:null==(r=t.tables)?void 0:r.map(l)})})):Promise.resolve()}(e,i)))}(t,e);u&&t.read({url:u},f);const b=await c(e,a);return b&&t.read(b,f),t.resourceReferences={portalItem:l,paths:f.readResourcePaths},t.read({title:y},f),(0,s.y)(t,f)}(e,a)):Promise.resolve()}function d(e,a,t){let n=t.layers||[];const r=t.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((e=>{var a;"Table"===(null==e||null==(a=e.layerDefinition)?void 0:a.type)&&r.push(e)})),n=n.filter((e=>{var a;return"Table"!==(null==e||null==(a=e.layerDefinition)?void 0:a.type)}))),n.reverse().forEach((n=>{const r=y(e,a,t,n);e.add(r)})),r.reverse().forEach((n=>{const r=y(e,a,t,n);e.tables.add(r)}))}function y(e,a,t,n){const r=new a({portalItem:e.portalItem.clone(),layerId:n.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const a={origin:"portal-item",portal:e.portalItem.portal||l.Z.getDefault()};r.read(n,a);const i=t.showLegend;null!=i&&r.read({showLegend:i},a)}return r}function c(e,a){if(!1===e.supportsData)return Promise.resolve(void 0);const t=e.instance;return t.portalItem.fetchData("json",a).catch((()=>null)).then((async e=>{if(function(e){return"stream"!==e.type&&"layerId"in e}(t)){let a,n=!0;return e&&h(e)>0&&(null==t.layerId&&(t.layerId=f(e)),a=function(e,a){const t=e.layers;if(t)for(let e=0;e<t.length;e++)if(t[e].id===a)return t[e];const n=e.tables;if(n)for(let e=0;e<n.length;e++)if(n[e].id===a)return n[e];return null}(e,t.layerId),a&&(1===h(e)&&(n=!1),null!=e.showLegend&&(a.showLegend=e.showLegend))),n&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),a}return e}))}async function p(e,a){var t,n;if(null==(null==(t=e)?void 0:t.layers)||null==(null==(n=e)?void 0:n.tables)){const t=await(0,o.b)(a);(e=e||{}).layers=e.layers||(null==t?void 0:t.layers),e.tables=e.tables||(null==t?void 0:t.tables)}return e}function f(e){const a=e.layers;if(a&&a.length)return a[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function h(e){var a,t,n,r;return(null!=(a=null==e||null==(t=e.layers)?void 0:t.length)?a:0)+(null!=(n=null==e||null==(r=e.tables)?void 0:r.length)?n:0)}},40371:(e,a,t)=>{t.d(a,{b:()=>r});var n=t(66341);async function r(e){const{data:a}=await(0,n.default)(e,{responseType:"json",query:{f:"json"}});return a}}}]);
//# sourceMappingURL=9112.js.map