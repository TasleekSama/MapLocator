"use strict";(self.webpackChunkmomraGisCore=self.webpackChunkmomraGisCore||[]).push([[3667],{13667:(e,t,r)=>{r.r(t),r.d(t,{createLabelFunction:()=>f,formatField:()=>m});var a=r(70375),n=r(13802),u=r(72057),l=r(25741),s=r(17095),i=r(1110),o=r(30879);const c=n.Z.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},d={getAttribute:(e,t)=>e.field(t)};async function f(e,t,n){if(!e||!e.symbol)return p;const u=e.where,l=(0,i.hV)(e),s=u?await r.e(3362).then(r.bind(r,3362)):null;let f;if("arcade"===l.type){const e=await(0,o.WW)(l.expression,n,t);f={type:"arcade",evaluate(t){try{const r=e.evaluate({$feature:"attributes"in t?e.repurposeFeature(t):e.repurposeAdapter(t)});if(null!=r)return r.toString()}catch(e){c.error(new a.Z("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:t,expression:l}))}return null},needsHydrationToEvaluate:()=>null==(0,i.el)(l.expression)}}else f={type:"simple",evaluate:e=>l.expression.replace(/{[^}]*}/g,(r=>{const a=r.slice(1,-1),n=t.get(a);if(!n)return r;let u=null;return"attributes"in e?e&&e.attributes&&(u=e.attributes[n.name]):u=e.field(n.name),null==u?"":m(u,n)}))};if(u){let e;try{e=s.WhereClause.create(u,t)}catch(e){return p}const r=f.evaluate;f.evaluate=t=>{const a="attributes"in t?void 0:d;return e.testFeature(t,a)?r(t):null}}return f}function m(e,t){if(null==e)return"";const r=t.domain;if(r)if("codedValue"===r.type||"coded-value"===r.type){const t=e;for(const e of r.codedValues)if(e.code===t)return e.name}else if("range"===r.type){const t=+e,a="range"in r?r.range[0]:r.minValue,n="range"in r?r.range[1]:r.maxValue;if(a<=t&&t<=n)return r.name}let a=e;return"date"===t.type||"esriFieldTypeDate"===t.type?a=(0,u.p6)(a,(0,u.Ze)("short-date")):(0,s.H7)(t)&&(a=(0,l.uf)(+a)),a||""}}}]);
//# sourceMappingURL=3667.js.map