"use strict";(self.webpackChunkmomraGisCore=self.webpackChunkmomraGisCore||[]).push([[9431],{79431:(e,s,i)=>{i.r(s),i.d(s,{default:()=>c});var t=i(36663),r=i(44584),h=i(61681),a=(i(13802),i(7283),i(7753),i(39994),i(33156),i(40266)),n=i(80347),l=i(68114),p=i(4862),o=i(26216);let d=class extends((0,n.y)(o.Z)){constructor(){super(...arguments),this._handles=new r.Z,this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,s){return this.graphicsViews.length?(await Promise.all(this.graphicsViews.map((s=>s.hitTest(e))))).flat().filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e))):null}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e)}attach(){(0,h.Wi)(this.layer.featureCollections)||this.layer.featureCollections.forEach((e=>{const s=new p.Z({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate(),container:new l.Z(this.view.featuresTilingScheme)});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container)}))}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}};d=(0,t._)([(0,a.j)("esri.views.2d.layers.RouteLayerView2D")],d);const c=d},68114:(e,s,i)=>{i.d(s,{Z:()=>h});var t=i(38716),r=i(26204);class h extends r.Z{renderChildren(e){this.attributeView.bindTextures(e.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.drawPhase===t.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===t.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:s}=e,i=s.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}}}]);
//# sourceMappingURL=9431.js.map