"use strict";(self.webpackChunkmomraGisCore=self.webpackChunkmomraGisCore||[]).push([[6857],{96857:(e,i,s)=>{s.r(i),s.d(i,{default:()=>y});var t=s(36663),r=s(80085),a=s(66591),h=s(61681),n=s(15071),o=(s(13802),s(7283),s(7753),s(39994),s(33156),s(40266)),c=s(80347),l=s(68114),p=s(4862),d=s(26216);const u="sublayers",g="layerView",w=Object.freeze({remove(){},pause(){},resume(){}});let f=class extends((0,c.y)(d.Z)){async fetchPopupFeatures(e){return Array.from(this.graphicsViews(),(i=>i.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}*graphicsViews(){(0,h.pC)(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():(0,h.pC)(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(e,i){const s=Array.from(this.graphicsViews(),(async i=>{const s=await i.hitTest(e);if((0,h.pC)(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(i);for(const i of s)!i.popupTemplate&&e.popupTemplate&&(i.popupTemplate=e.popupTemplate)}return s}));return(await Promise.all(s)).flat()}highlight(e){let i;if("number"==typeof e?i=[e]:e instanceof r.Z?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):a.Z.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),!i.length)return w;for(const e of this.graphicsViews())e.addHighlight(i);return{remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(i)}}}update(e){for(const i of this.graphicsViews())i.processUpdate(e)}attach(){const e=this.view,i=()=>this.requestUpdate(),s=this.layer.featureCollections;if((0,h.pC)(s)&&s.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t of s){const s=new l.Z(this.view.featuresTilingScheme);s.fadeTransitionEnabled=!0;const r=new p.Z({view:e,graphics:t.source,renderer:t.renderer,requestUpdateCallback:i,container:s});this._graphicsViewsFeatureCollectionMap.set(r,t),this.container.addChild(r.container),this.handles.add([(0,n.S1)(t,"visible",(e=>r.container.visible=e)),(0,n.S1)(r,"updating",(()=>this.notifyChange("updating")))],g)}}else(0,h.pC)(this.layer.sublayers)&&this.handles.add((0,n.on)(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),u)}detach(){this._destroyGraphicsViews(),this.handles.remove(u)}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(g);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),(0,h.Wi)(this.layer.sublayers))return;const e=[],i=this.view,s=()=>this.requestUpdate();for(const t of this.layer.sublayers){const r=new l.Z(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const a=new p.Z({view:i,graphics:t.graphics,requestUpdateCallback:s,container:r});this.handles.add([t.on("graphic-update",a.graphicUpdateHandler),(0,n.S1)(t,"visible",(e=>a.container.visible=e)),(0,n.S1)(a,"updating",(()=>this.notifyChange("updating")))],g),this.container.addChild(a.container),e.push(a)}this._graphicsViews=e}};f=(0,t._)([(0,o.j)("esri.views.2d.layers.MapNotesLayerView2D")],f);const y=f},68114:(e,i,s)=>{s.d(i,{Z:()=>a});var t=s(38716),r=s(26204);class a extends r.Z{renderChildren(e){this.attributeView.bindTextures(e.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.drawPhase===t.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===t.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:i}=e,s=i.effects.highlight;s.bind(e),this._renderChildren(e,s.defines),s.draw(e),s.unbind()}}}}]);
//# sourceMappingURL=6857.js.map