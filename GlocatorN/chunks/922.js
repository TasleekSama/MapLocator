"use strict";(self.webpackChunkmomraGisCore=self.webpackChunkmomraGisCore||[]).push([[922],{4279:(n,e,t)=>{t.d(e,{A:()=>C,B:()=>b,C:()=>I,D:()=>V,E:()=>k,F:()=>D,G:()=>H,H:()=>S,I:()=>j,J:()=>L,K:()=>_,a:()=>u,b:()=>c,c:()=>s,d:()=>a,e:()=>o,f:()=>f,g:()=>q,h:()=>l,i:()=>h,j:()=>m,k:()=>g,l:()=>v,m:()=>M,n:()=>w,o:()=>d,p:()=>y,q:()=>z,r:()=>x,s:()=>N,t:()=>p,u:()=>Z,v:()=>E,w:()=>G,x:()=>P,y:()=>R,z:()=>A});var r=t(89067),i=t(61107);function o(n){return r.G.extendedSpatialReferenceInfo(n)}function s(n,e,t){return r.G.clip(i.N,n,e,t)}function u(n,e,t){return r.G.cut(i.N,n,e,t)}function c(n,e,t){return r.G.contains(i.N,n,e,t)}function a(n,e,t){return r.G.crosses(i.N,n,e,t)}function f(n,e,t,o){return r.G.distance(i.N,n,e,t,o)}function l(n,e,t){return r.G.equals(i.N,n,e,t)}function h(n,e,t){return r.G.intersects(i.N,n,e,t)}function p(n,e,t){return r.G.touches(i.N,n,e,t)}function G(n,e,t){return r.G.within(i.N,n,e,t)}function m(n,e,t){return r.G.disjoint(i.N,n,e,t)}function d(n,e,t){return r.G.overlaps(i.N,n,e,t)}function x(n,e,t,o){return r.G.relate(i.N,n,e,t,o)}function g(n,e){return r.G.isSimple(i.N,n,e)}function N(n,e){return r.G.simplify(i.N,n,e)}function v(n,e,t=!1){return r.G.convexHull(i.N,n,e,t)}function M(n,e,t){return r.G.difference(i.N,n,e,t)}function w(n,e,t){return r.G.symmetricDifference(i.N,n,e,t)}function y(n,e,t){return r.G.intersect(i.N,n,e,t)}function Z(n,e,t=null){return r.G.union(i.N,n,e,t)}function z(n,e,t,o,s,u,c){return r.G.offset(i.N,n,e,t,o,s,u,c)}function E(n,e,t,o,s=!1){return r.G.buffer(i.N,n,e,t,o,s)}function P(n,e,t,o,s,u,c){return r.G.geodesicBuffer(i.N,n,e,t,o,s,u,c)}function R(n,e,t,o=!0){return r.G.nearestCoordinate(i.N,n,e,t,o)}function A(n,e,t){return r.G.nearestVertex(i.N,n,e,t)}function C(n,e,t,o,s){return r.G.nearestVertices(i.N,n,e,t,o,s)}function b(n,e,t,i){if(null==e||null==i)throw new Error("Illegal Argument Exception");const o=r.G.rotate(e,t,i);return o.spatialReference=n,o}function I(n,e,t){if(null==e||null==t)throw new Error("Illegal Argument Exception");const i=r.G.flipHorizontal(e,t);return i.spatialReference=n,i}function V(n,e,t){if(null==e||null==t)throw new Error("Illegal Argument Exception");const i=r.G.flipVertical(e,t);return i.spatialReference=n,i}function k(n,e,t,o,s){return r.G.generalize(i.N,n,e,t,o,s)}function D(n,e,t,o){return r.G.densify(i.N,n,e,t,o)}function H(n,e,t,o,s=0){return r.G.geodesicDensify(i.N,n,e,t,o,s)}function S(n,e,t){return r.G.planarArea(i.N,n,e,t)}function j(n,e,t){return r.G.planarLength(i.N,n,e,t)}function L(n,e,t,o){return r.G.geodesicArea(i.N,n,e,t,o)}function _(n,e,t,o){return r.G.geodesicLength(i.N,n,e,t,o)}const q=Object.freeze({__proto__:null,extendedSpatialReferenceInfo:o,clip:s,cut:u,contains:c,crosses:a,distance:f,equals:l,intersects:h,touches:p,within:G,disjoint:m,overlaps:d,relate:x,isSimple:g,simplify:N,convexHull:v,difference:M,symmetricDifference:w,intersect:y,union:Z,offset:z,buffer:E,geodesicBuffer:P,nearestCoordinate:R,nearestVertex:A,nearestVertices:C,rotate:b,flipHorizontal:I,flipVertical:V,generalize:k,densify:D,geodesicDensify:H,planarArea:S,planarLength:j,geodesicArea:L,geodesicLength:_})},61107:(n,e,t)=>{t.d(e,{N:()=>r});const r={convertToGEGeometry:function(n,e){return null==e?null:n.convertJSONToGeometry(e)},exportPoint:function(n,e,t){const r=new i(n.getPointX(e),n.getPointY(e),t),o=n.hasZ(e),s=n.hasM(e);return o&&(r.z=n.getPointZ(e)),s&&(r.m=n.getPointM(e)),r},exportPolygon:function(n,e,t){return new o(n.exportPaths(e),t,n.hasZ(e),n.hasM(e))},exportPolyline:function(n,e,t){return new s(n.exportPaths(e),t,n.hasZ(e),n.hasM(e))},exportMultipoint:function(n,e,t){return new u(n.exportPoints(e),t,n.hasZ(e),n.hasM(e))},exportExtent:function(n,e,t){const r=n.hasZ(e),i=n.hasM(e),o=new c(n.getXMin(e),n.getYMin(e),n.getXMax(e),n.getYMax(e),t);if(r){const t=n.getZExtent(e);o.zmin=t.vmin,o.zmax=t.vmax}if(i){const t=n.getMExtent(e);o.mmin=t.vmin,o.mmax=t.vmax}return o}};class i{constructor(n,e,t){this.x=n,this.y=e,this.spatialReference=t,this.z=void 0,this.m=void 0}}class o{constructor(n,e,t,r){this.rings=n,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),r&&(this.hasM=r)}}class s{constructor(n,e,t,r){this.paths=n,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),r&&(this.hasM=r)}}class u{constructor(n,e,t,r){this.points=n,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),r&&(this.hasM=r)}}class c{constructor(n,e,t,r,i){this.xmin=n,this.ymin=e,this.xmax=t,this.ymax=r,this.spatialReference=i,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},50922:(n,e,t)=>{t.r(e),t.d(e,{executeGEOperation:()=>i});var r=t(4279);function i(n){return(0,r.g[n.operation])(...n.parameters)}}}]);
//# sourceMappingURL=922.js.map