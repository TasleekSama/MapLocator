"use strict";(self.webpackChunkmomraGisCore=self.webpackChunkmomraGisCore||[]).push([[7251],{45584:(e,t,o)=>{o.d(t,{D:()=>E,b:()=>R});var r=o(95650),a=o(57218),i=o(5885),n=o(4731),s=o(99163),l=o(90511),d=o(91636),c=o(40433),u=o(82082),m=o(6502),v=o(11478),p=o(77700),f=o(77546),h=o(6665),g=o(3417),x=o(30786),b=o(54207),y=o(73393),C=o(2833),T=o(89585),M=o(3864),w=o(20105),S=o(12664),_=o(41272),A=o(78115),O=o(27452),P=o(23410),H=o(3961);function R(e){const t=new H.kG,o=t.vertex.code,R=t.fragment.code;return t.include(A.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(d.f),t.varyings.add("vpos","vec3"),t.include(S.kl,e),t.include(s.f,e),t.include(p.LC,e),0!==e.output&&7!==e.output||(t.include(l.O,e),t.include(n.w,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(a.w),t.include(g.Q,e),t.include(v.B,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(u.D,e),t.include(r.q,e),t.include(c.R,e),t.include(m.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),o.add(P.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${P.H.float(_.bf)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?P.H`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(i.p2,e),t.include(_.sj,e),e.multipassTerrainEnabled&&(t.fragment.include(h.S),t.include(y.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(O.y),R.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?P.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?P.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(i.p2,e),t.include(b.X,e),t.include(x.K,e),t.include(_.sj,e),e.receiveShadows&&t.include(w.hX,e),e.multipassTerrainEnabled&&(t.fragment.include(h.S),t.include(y.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(M.jV,e),t.include(T.T,e),t.fragment.include(O.y),t.include(C.k,e),R.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?P.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?P.H`
        vec3 normal = screenDerivativeNormal(localvpos);`:P.H`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?P.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?P.H`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?P.H`vec3 normalGround = normalize(vpos + localOrigin);`:P.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:P.H``}
        ${1===e.pbrMode||2===e.pbrMode?P.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(f.s,e),t}const E=Object.freeze({__proto__:null,build:R})},60926:(e,t,o)=>{o.d(t,{R:()=>O,b:()=>A});var r=o(95650),a=o(57218),i=o(5885),n=o(4731),s=o(99163),l=o(90511),d=o(91636),c=o(40433),u=o(82082),m=o(6502),v=o(77700),p=o(77546),f=o(6665),h=o(30786),g=o(54207),x=o(73393),b=o(89585),y=o(3864),C=o(20105),T=o(12664),M=o(41272),w=o(27452),S=o(23410),_=o(3961);function A(e){const t=new _.kG,o=t.vertex.code,A=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(d.f),t.varyings.add("vpos","vec3"),t.include(T.kl,e),t.include(s.f,e),t.include(v.LC,e),0!==e.output&&7!==e.output||(t.include(l.O,e),t.include(n.w,{linearDepth:!1}),e.offsetBackfaces&&t.include(a.w),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(u.D,e),t.include(r.q,e),t.include(c.R,e),t.include(m.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),o.add(S.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${S.H.float(M.bf)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?S.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(i.p2,e),t.include(M.sj,e),e.multipassTerrainEnabled&&(t.fragment.include(f.S),t.include(x.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(w.y),A.add(S.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?S.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?S.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:S.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?S.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:S.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(i.p2,e),t.include(g.X,e),t.include(h.K,e),t.include(M.sj,e),e.receiveShadows&&t.include(C.hX,e),e.multipassTerrainEnabled&&(t.fragment.include(f.S),t.include(x.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(y.jV,e),t.include(b.T,e),t.fragment.include(w.y),A.add(S.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?S.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?S.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:S.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?S.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:S.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${S.H`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?S.H`vec3 normalGround = normalize(vpos + localOrigin);`:S.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:S.H``}
        ${1===e.pbrMode||2===e.pbrMode?S.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(p.s,e),t}const O=Object.freeze({__proto__:null,build:A})},86717:(e,t,o)=>{o.d(t,{a:()=>i,b:()=>l,n:()=>s,s:()=>n,t:()=>a});var r=o(45150);function a(e,t,o){if(e.count!==t.count)return void r.k.error("source and destination buffers need to have the same number of elements");const a=e.count,i=o[0],n=o[1],s=o[2],l=o[4],d=o[5],c=o[6],u=o[8],m=o[9],v=o[10],p=o[12],f=o[13],h=o[14],g=e.typedBuffer,x=e.typedBufferStride,b=t.typedBuffer,y=t.typedBufferStride;for(let e=0;e<a;e++){const t=e*x,o=e*y,r=b[o],a=b[o+1],C=b[o+2];g[t]=i*r+l*a+u*C+p,g[t+1]=n*r+d*a+m*C+f,g[t+2]=s*r+c*a+v*C+h}}function i(e,t,o){if(e.count!==t.count)return void r.k.error("source and destination buffers need to have the same number of elements");const a=e.count,i=o[0],n=o[1],s=o[2],l=o[3],d=o[4],c=o[5],u=o[6],m=o[7],v=o[8],p=e.typedBuffer,f=e.typedBufferStride,h=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<a;e++){const t=e*f,o=e*g,r=h[o],a=h[o+1],x=h[o+2];p[t]=i*r+l*a+u*x,p[t+1]=n*r+d*a+m*x,p[t+2]=s*r+c*a+v*x}}function n(e,t,o){const r=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*i,r=e*s;a[t]=o*n[r],a[t+1]=o*n[r+1],a[t+2]=o*n[r+2]}}function s(e,t){const o=Math.min(e.count,t.count),r=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*a,o=e*n,s=i[o],l=i[o+1],d=i[o+2],c=Math.sqrt(s*s+l*l+d*d);if(c>0){const e=1/c;r[t]=e*s,r[t+1]=e*l,r[t+2]=e*d}}}function l(e,t,o){const r=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*i,r=e*s;a[t]=n[r]>>o,a[t+1]=n[r+1]>>o,a[t+2]=n[r+2]>>o}}Object.freeze({__proto__:null,transformMat4:a,transformMat3:i,scale:n,normalize:s,shiftRight:l})},14789:(e,t,o)=>{function r(e,t,o){const r=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let l=(o&&o.dstIndex?o.dstIndex:0)*a,d=(o&&o.srcIndex?o.srcIndex:0)*n;for(let e=0;e<s;++e)r[l]=i[d],r[l+1]=i[d+1],r[l+2]=i[d+2],l+=a,d+=n}function a(e,t,o,r,a){var i,n;const s=e.typedBuffer,l=e.typedBufferStride,d=null!=(i=null==a?void 0:a.count)?i:e.count;let c=(null!=(n=null==a?void 0:a.dstIndex)?n:0)*l;for(let e=0;e<d;++e)s[c]=t,s[c+1]=o,s[c+2]=r,c+=l}o.d(t,{c:()=>r,f:()=>a}),Object.freeze({__proto__:null,copy:r,fill:a})},45150:(e,t,o)=>{o.d(t,{k:()=>r});const r=o(13802).Z.getLogger("esri.views.3d.support.buffer.math")},97251:(e,t,o)=>{o.r(t),o.d(t,{fetch:()=>G,gltfToEngineResources:()=>k,parseUrl:()=>$});var r=o(57989),a=o(61681),i=o(1662),n=o(34344),s=o(24455),l=o(39100),d=o(6766),c=o(8909),u=o(37116),m=o(81936),v=o(86717),p=o(56999),f=o(79),h=o(91420),g=o(20016),x=o(1731),b=o(66341),y=o(67979),C=o(70375),T=o(13802),M=o(78668),w=o(26139),S=o(44883),_=o(96553),A=o(58496),O=o(26920);const P=T.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function H(e){throw new C.Z("",`Request for object resource failed: ${e}`)}function R(e){const t=e.params,o=t.topology;let r=!0;switch(t.vertexAttributes||(P.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(P.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),r=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(P.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),r=!1)):(P.warn(`Indexed geometry does not specify face indices for '${o}' attribute`),r=!1)}}else P.warn("Indexed geometries must specify faces"),r=!1;break}default:P.warn(`Unsupported topology '${o}'`),r=!1}e.params.material||(P.warn("Geometry requires material"),r=!1);const a=e.params.vertexAttributes;for(const e in a)a[e].values||(P.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function E(e){const t=(0,u.cS)();return e.forEach((e=>{const o=e.boundingInfo;(0,a.pC)(o)&&((0,u.pp)(t,o.getBBMin()),(0,u.pp)(t,o.getBBMax()))})),t}async function L(e,t){const o=[];for(const r in e){const i=e[r],n=i.images[0].data;if(!n){P.warn("Externally referenced texture data is not yet supported");continue}const s=i.encoding+";base64,"+n,l="/textureDefinitions/"+r,d="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==F(d)},u=(0,a.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,S.t)(s,t);o.push(u.then((e=>({refId:l,image:e,params:c,alphaChannelUsage:d}))))}const r=await Promise.all(o),i={};for(const e of r)i[e.refId]=e;return i}function F(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function D(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const B=new w.G(1,2,"wosr");var z=o(14634),I=o(385),N=o(32101),V=o(14789);async function G(e,t){const o=$((0,r.pJ)(e));if("wosr"===o.fileType){const e=await(t.cache?t.cache.loadWOSR(o.url,t):async function(e,t){const o=await async function(e,t){const o=(0,a.pC)(t)&&t.streamDataRequester;if(o)return async function(e,t,o){const r=await(0,y.q6)(t.request(e,"json",o));if(!0===r.ok)return r.value;(0,M.r9)(r.error),H(r.error.details.url)}(e,o,t);const r=await(0,y.q6)((0,b.default)(e,(0,a.Wg)(t)));if(!0===r.ok)return r.value.data;(0,M.r9)(r.error),H(r.error)}(e,t);return{resource:o,textures:await L(o.textureDefinitions,t)}}(o.url,t)),r=function(e,t){const o=[],r=[],i=[],n=[],s=e.resource,l=w.G.parse(s.version||"1.0","wosr");B.validate(l);const d=s.model.name,u=s.model.geometries,m=s.materialDefinitions,v=e.textures;let p=0;const f=new Map;for(let e=0;e<u.length;e++){const s=u[e];if(!R(s))continue;const l=D(s),d=s.params.vertexAttributes,h=[];for(const e in d){const t=d[e],o=t.values;h.push([e,{data:o,size:t.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==s.params.topology){const e=s.params.faces;for(const t in e)g.push([t,new Uint32Array(e[t].values)])}const x=v&&v[l.texture];if(x&&!f.has(l.texture)){const{image:e,params:t}=x,o=new A.x(e,t);n.push(o),f.set(l.texture,o)}const b=f.get(l.texture),y=b?b.id:void 0;let C=i[l.material]?i[l.material][l.texture]:null;if(!C){const e=m[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const o=x&&x.alphaChannelUsage,r=e.transparency>0||"transparency"===o||"maskAndTransparency"===o,n=x?F(x.alphaChannelUsage):void 0,s={ambient:(0,c.d)(e.diffuse),diffuse:(0,c.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:r,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:y,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!x&&!!x.params.preMultiplyAlpha};(0,a.pC)(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),C=new O.G(s),i[l.material]||(i[l.material]={}),i[l.material][l.texture]=C}r.push(C);const T=new _.Z(h,g);p+=g.position?g.position.length:0,o.push(T)}return{name:d,stageResources:{textures:n,materials:r,geometries:o},pivotOffset:s.model.pivotOffset,boundingBox:E(o),numberOfVertices:p,lodThreshold:null}}(e,t);return{lods:[r],referenceBoundingBox:r.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const i=await(t.cache?t.cache.loadGLTF(o.url,t,t.usePBR):(0,g.z)(new h.C(t.streamDataRequester),o.url,t,t.usePBR)),n=(0,a.U2)(i.model.meta,"ESRI_proxyEllipsoid");i.meta.isEsriSymbolResource&&(0,a.pC)(n)&&-1!==i.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let o=0;o<e.model.lods.length;++o){const r=e.model.lods[o];e.customMeta.esriTreeRendering=!0;for(const i of r.parts){const r=i.attributes.normal;if((0,a.Wi)(r))return;const n=i.attributes.position,u=n.count,v=(0,c.c)(),p=(0,c.c)(),h=(0,c.c)(),g=(0,f.gS)(m.mc,u),x=(0,f.gS)(m.ct,u),b=(0,s.b)((0,l.c)(),i.transform);for(let a=0;a<u;a++){n.getVec(a,p),r.getVec(a,v),(0,d.m)(p,p,i.transform),(0,d.f)(h,p,t.center),(0,d.E)(h,h,t.radius);const s=h[2],l=(0,d.l)(h),c=Math.min(.45+.55*l*l,1);(0,d.E)(h,h,t.radius),(0,d.m)(h,h,b),(0,d.n)(h,h),o+1!==e.model.lods.length&&e.model.lods.length>1&&(0,d.e)(h,h,v,s>-1?.2:Math.min(-4*s-3.8,1)),x.setVec(a,h),g.set(a,0,255*c),g.set(a,1,255*c),g.set(a,2,255*c),g.set(a,3,255)}i.attributes.normal=x,i.attributes.color=g}}}(i,n);const u=i.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:i.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},v={...t.materialParamsMixin,treeRendering:i.customMeta.esriTreeRendering};if(null!=o.specifiedLodIndex){const e=k(i,u,v,o.specifiedLodIndex);let t=e[0].boundingBox;return 0!==o.specifiedLodIndex&&(t=k(i,u,v,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}const p=k(i,u,v);return{lods:p,referenceBoundingBox:p[0].boundingBox,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}function $(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function k(e,t,o,r){const s=e.model,l=(0,n.c)(),d=new Array,c=new Map,h=new Map;return s.lods.forEach(((e,n)=>{if(void 0!==r&&n!==r)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,a.pC)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,u.cS)()};d.push(g),e.parts.forEach((e=>{const r=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=s.materials.get(e.material),d=(0,a.pC)(e.attributes.texCoord0),b=(0,a.pC)(e.attributes.normal),y=function(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}(n.alphaMode);if(!c.has(r)){if(d){if((0,a.pC)(n.textureColor)&&!h.has(n.textureColor)){const e=s.textures.get(n.textureColor),t={...e.parameters,preMultiplyAlpha:1!==y};h.set(n.textureColor,new A.x(e.data,t))}if((0,a.pC)(n.textureNormal)&&!h.has(n.textureNormal)){const e=s.textures.get(n.textureNormal);h.set(n.textureNormal,new A.x(e.data,e.parameters))}if((0,a.pC)(n.textureOcclusion)&&!h.has(n.textureOcclusion)){const e=s.textures.get(n.textureOcclusion);h.set(n.textureOcclusion,new A.x(e.data,e.parameters))}if((0,a.pC)(n.textureEmissive)&&!h.has(n.textureEmissive)){const e=s.textures.get(n.textureEmissive);h.set(n.textureEmissive,new A.x(e.data,e.parameters))}if((0,a.pC)(n.textureMetallicRoughness)&&!h.has(n.textureMetallicRoughness)){const e=s.textures.get(n.textureMetallicRoughness);h.set(n.textureMetallicRoughness,new A.x(e.data,e.parameters))}}const i=n.color[0]**(1/z.K),l=n.color[1]**(1/z.K),u=n.color[2]**(1/z.K),m=n.emissiveFactor[0]**(1/z.K),v=n.emissiveFactor[1]**(1/z.K),p=n.emissiveFactor[2]**(1/z.K),f=(0,a.pC)(n.textureColor)&&d?h.get(n.textureColor):null;c.set(r,new O.G({...t,transparent:0===y,textureAlphaMode:y,textureAlphaCutoff:n.alphaCutoff,diffuse:[i,l,u],ambient:[i,l,u],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:b?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,a.pC)(f)?f.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:(0,a.pC)(n.textureNormal)&&d?h.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:(0,a.pC)(f)&&!!f.params.preMultiplyAlpha,occlusionTextureId:(0,a.pC)(n.textureOcclusion)&&d?h.get(n.textureOcclusion).id:void 0,emissiveTextureId:(0,a.pC)(n.textureEmissive)&&d?h.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,a.pC)(n.textureMetallicRoughness)&&d?h.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[m,v,p],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...o}))}const C=function(e,t){switch(t){case 4:return(0,x.nh)(e);case 5:return(0,x.DA)(e);case 6:return(0,x.jX)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),T=e.attributes.position.count,M=(0,f.gS)(m.ct,T);(0,v.t)(M,e.attributes.position,e.transform);const w=[["position",{data:M.typedBuffer,size:M.elementCount,exclusive:!0}]],S=[["position",C]];if((0,a.pC)(e.attributes.normal)){const t=(0,f.gS)(m.ct,T);(0,i.a)(l,e.transform),(0,v.a)(t,e.attributes.normal,l),w.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["normal",C])}if((0,a.pC)(e.attributes.tangent)){const t=(0,f.gS)(m.ek,T);(0,i.a)(l,e.transform),(0,p.t)(t,e.attributes.tangent,l),w.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["tangent",C])}if((0,a.pC)(e.attributes.texCoord0)){const t=(0,f.gS)(m.Eu,T);(0,I.n)(t,e.attributes.texCoord0),w.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["uv0",C])}if((0,a.pC)(e.attributes.color)){const t=(0,f.gS)(m.mc,T);if(4===e.attributes.color.elementCount)e.attributes.color instanceof m.ek?(0,p.s)(t,e.attributes.color,255):e.attributes.color instanceof m.mc?(0,N.c)(t,e.attributes.color):e.attributes.color instanceof m.v6&&(0,p.s)(t,e.attributes.color,1/256);else{(0,N.f)(t,255,255,255,255);const o=new m.ne(t.buffer,0,4);e.attributes.color instanceof m.ct?(0,v.s)(o,e.attributes.color,255):e.attributes.color instanceof m.ne?(0,V.c)(o,e.attributes.color):e.attributes.color instanceof m.mw&&(0,v.s)(o,e.attributes.color,1/256)}w.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["color",C])}const P=new _.Z(w,S);g.stageResources.geometries.push(P),g.stageResources.materials.push(c.get(r)),d&&((0,a.pC)(n.textureColor)&&g.stageResources.textures.push(h.get(n.textureColor)),(0,a.pC)(n.textureNormal)&&g.stageResources.textures.push(h.get(n.textureNormal)),(0,a.pC)(n.textureOcclusion)&&g.stageResources.textures.push(h.get(n.textureOcclusion)),(0,a.pC)(n.textureEmissive)&&g.stageResources.textures.push(h.get(n.textureEmissive)),(0,a.pC)(n.textureMetallicRoughness)&&g.stageResources.textures.push(h.get(n.textureMetallicRoughness))),g.numberOfVertices+=T;const H=P.boundingInfo;(0,a.pC)(H)&&((0,u.pp)(g.boundingBox,H.getBBMin()),(0,u.pp)(g.boundingBox,H.getBBMax()))}))})),d}},57218:(e,t,o)=>{o.d(t,{w:()=>a});var r=o(23410);function a(e){e.vertex.code.add(r.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},99163:(e,t,o)=>{o.d(t,{f:()=>l});var r,a=o(8909),i=o(5331),n=o(23410),s=o(30560);function l(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(i.$,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const o=[n.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,n.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?n.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,n.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,n.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?n.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:n.H``];e.vertex.code.add(o[0]),e.vertex.code.add(o[1]),e.vertex.code.add(o[2]),2===t.output&&e.vertex.code.add(o[3]),e.vertex.code.add(o[4])}(r=l||(l={})).Uniforms=class{},r.bindCustomOrigin=function(e,t){(0,s.po)(t,d,c,3),e.setUniform3fv("viewOriginHi",d),e.setUniform3fv("viewOriginLo",c)};const d=(0,a.c)(),c=(0,a.c)()},90511:(e,t,o)=>{o.d(t,{O:()=>i});var r=o(23410);function a(e){const t=r.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function i(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(r.H`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(a),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(r.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}},91636:(e,t,o)=>{o.d(t,{f:()=>a});var r=o(23410);function a(e){e.attributes.add("position","vec3"),e.vertex.code.add(r.H`vec3 positionModel() { return position; }`)}},40433:(e,t,o)=>{o.d(t,{R:()=>i});var r=o(23410);function a(e){e.vertex.code.add(r.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.H.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.H.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.H.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.H.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function i(e,t){t.symbolColor?(e.include(a),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(r.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(r.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},82082:(e,t,o)=>{o.d(t,{D:()=>a});var r=o(23410);function a(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(r.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(r.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(r.H`void forwardTextureCoordinates() {}`)}},11478:(e,t,o)=>{o.d(t,{B:()=>m});var r,a=o(90511),i=o(34344),n=o(39100),s=o(8909),l=o(91636),d=o(5331),c=o(23410);function u(e,t){e.include(l.f),e.vertex.include(d.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(c.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(c.H`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}function m(e,t){0===t.normalType||1===t.normalType?(e.include(a.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(c.H`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===t.normalType?(e.include(u,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(c.H`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?c.H`normalize(vPositionWorldCameraRelative);`:c.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(c.H`void forwardNormal() {}`)}(r=u||(u={})).ModelTransform=class{constructor(){this.worldFromModel_RS=(0,i.c)(),this.worldFromModel_TH=(0,s.c)(),this.worldFromModel_TL=(0,s.c)()}},r.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=(0,s.c)(),this.worldFromView_TL=(0,s.c)(),this.viewFromCameraRelative_RS=(0,i.c)(),this.projFromView=(0,n.c)()}},r.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},r.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)},(m||(m={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}},72129:(e,t,o)=>{o.d(t,{i:()=>n});var r=o(82082),a=o(23410);function i(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(a.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function n(e,t){e.include(r.D,t),e.fragment.code.add(a.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(a.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===t.attributeTextureCoordinates&&(e.include(i),e.fragment.code.add(a.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},77546:(e,t,o)=>{o.d(t,{s:()=>v});var r=o(5885),a=o(4731),i=o(90511),n=o(82082),s=o(11478),l=o(59004),d=o(55994),c=o(12664),u=o(41272),m=o(23410);function v(e,t){const o=e.vertex.code,v=e.fragment.code;1!==t.output&&3!==t.output||(e.include(a.w,{linearDepth:!0}),e.include(n.D,t),e.include(c.kl,t),e.include(l.F,t),e.include(r.p2,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(m.H`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(u.sj,t),v.add(m.H`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?m.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(a.w,{linearDepth:!1}),e.include(i.O,t),e.include(s.B,t),e.include(n.D,t),e.include(c.kl,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),o.add(m.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?m.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(r.p2,t),e.include(u.sj,t),v.add(m.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?m.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?m.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:m.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(a.w,{linearDepth:!1}),e.include(n.D,t),e.include(c.kl,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(m.H`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(r.p2,t),e.include(u.sj,t),e.include(d.bA),v.add(m.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?m.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},3417:(e,t,o)=>{o.d(t,{Q:()=>i});var r=o(72129),a=o(23410);function i(e,t){const o=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?o.code.add(a.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(a.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),o.code.add(a.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==t.attributeTextureCoordinates&&(e.include(r.i,t),o.uniforms.add("normalTexture","sampler2D"),o.uniforms.add("normalTextureSize","vec2"),o.code.add(a.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},30786:(e,t,o)=>{o.d(t,{K:()=>a});var r=o(23410);function a(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add("ssaoTex","sampler2D"),o.uniforms.add("viewportPixelSz","vec4"),o.code.add(r.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):o.code.add(r.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},54207:(e,t,o)=>{o.d(t,{X:()=>c});var r=o(23410);function a(e,t){const o=e.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(o.uniforms.add("lightingAmbientSH0","vec3"),o.code.add(r.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(o.uniforms.add("lightingAmbientSH_R","vec4"),o.uniforms.add("lightingAmbientSH_G","vec4"),o.uniforms.add("lightingAmbientSH_B","vec4"),o.code.add(r.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===a&&(o.uniforms.add("lightingAmbientSH0","vec3"),o.uniforms.add("lightingAmbientSH_R1","vec4"),o.uniforms.add("lightingAmbientSH_G1","vec4"),o.uniforms.add("lightingAmbientSH_B1","vec4"),o.uniforms.add("lightingAmbientSH_R2","vec4"),o.uniforms.add("lightingAmbientSH_G2","vec4"),o.uniforms.add("lightingAmbientSH_B2","vec4"),o.code.add(r.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||o.code.add(r.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var i=o(30786);function n(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(r.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var s=o(89585),l=o(95509),d=o(20105);function c(e,t){const o=e.fragment;e.include(n),e.include(i.K,t),0!==t.pbrMode&&e.include(s.T,t),e.include(a,t),t.receiveShadows&&e.include(d.hX,t),o.uniforms.add("lightingGlobalFactor","float"),o.uniforms.add("ambientBoostFactor","float"),e.include(l.e),o.code.add(r.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),o.code.add(r.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===t.viewingMode?r.H`normalize(vPosWorld)`:r.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),o.code.add(r.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===t.pbrMode||4===t.pbrMode?o.code.add(r.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==t.pbrMode&&2!==t.pbrMode||(o.code.add(r.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(r.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),o.code.add(r.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.code.add(r.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(r.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?r.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:r.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},2833:(e,t,o)=>{o.d(t,{k:()=>a});var r=o(23410);function a(e,t){const o=e.fragment;o.code.add(r.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===t.doubleSidedMode?o.code.add(r.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===t.doubleSidedMode?o.code.add(r.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):o.code.add(r.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}},3864:(e,t,o)=>{o.d(t,{jV:()=>n,nW:()=>s});var r=o(79912),a=o(72129),i=o(23410);function n(e,t){const o=e.fragment,r=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&r&&e.include(a.i,t),2!==t.pbrMode?(0===t.pbrMode&&o.code.add(i.H`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(o.uniforms.add("emissionFactor","vec3"),o.uniforms.add("mrrFactors","vec3"),o.code.add(i.H`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(o.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texMetallicRoughnessSize","vec2"),o.code.add(i.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(o.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texEmissionSize","vec2"),o.code.add(i.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(o.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texOcclusionSize","vec2"),o.code.add(i.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):o.code.add(i.H`float getBakedOcclusion() { return 1.0; }`),o.code.add(i.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${r?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):o.code.add(i.H`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function s(e,t,o=!1){o||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}(0,r.f)(0,.6,.2)},5331:(e,t,o)=>{o.d(t,{$:()=>i,I:()=>n});var r=o(39994),a=o(23410);function i({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(a.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(a.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function n(e){return!!(0,r.Z)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},78115:(e,t,o)=>{o.d(t,{a:()=>i});var r=o(23410),a=o(6174);function i(e,t){const o=r.H`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;(0,a.CG)()&&(e.fragment.code.add(o),e.vertex.code.add(o))}},27452:(e,t,o)=>{o.d(t,{y:()=>i});var r=o(32394),a=o(23410);function i(e){e.include(r.Y),e.code.add(a.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${a.H.int(1)}) {
        return allMixed;
      }
      else if (mode == ${a.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${a.H.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${a.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${a.H.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},26920:(e,t,o)=>{o.d(t,{G:()=>I,R:()=>$});var r=o(34344),a=o(6766),i=o(8909),n=o(44685),s=o(41272),l=o(11327),d=o(7358),c=o(12045),u=o(5073),m=o(21123),v=o(25584),p=o(36663),f=o(5885),h=o(99163),g=o(77700),x=o(55994),b=o(73393),y=o(3864),C=o(20105),T=o(12664),M=o(5331),w=o(84614),S=o(9969),_=o(52756),A=o(67197),O=o(5474),P=o(95194),H=o(79040),R=o(45584),E=o(17346);class L extends _.A{initializeProgram(e){const t=L.shader.get(),o=this.configuration,r=t.build({OITEnabled:0===o.transparencyPassType,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,pbrMode:o.usePBR?o.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:o.hasMetalnessAndRoughnessTexture,hasEmissionTexture:o.hasEmissionTexture,hasOcclusionTexture:o.hasOcclusionTexture,hasNormalTexture:o.hasNormalTexture,hasColorTexture:o.hasColorTexture,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:o.normalsTypeDerivate?3:0,doubleSidedMode:o.doubleSidedMode,vertexTangents:o.vertexTangents,attributeTextureCoordinates:o.hasMetalnessAndRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture||o.hasNormalTexture||o.hasColorTexture?1:0,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,M.I)(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:o.multipassTerrainEnabled,cullAboveGround:o.cullAboveGround});return new P.$(e.rctx,r,O.i)}bindPass(e,t){var o,r;(0,w.II)(this.program,t.camera.projectionMatrix);const a=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===a)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),(0,b.p)(this.program,t)),7===a&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",v.FZ[e.colorMixMode])),0===a?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",v.FZ[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&(0,y.nW)(this.program,e,this.configuration.isSchematic)):4===a&&(0,x.wW)(this.program,t),(0,T.uj)(this.program,e),(0,g.Mo)(this.program,e,t),(0,v.bj)(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(o=t.shadowMap)||o.bind(this.program),null==(r=t.ssaoHelper)||r.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?(0,i.f)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;(0,w.q0)(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&(0,w.fb)(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&h.f.bindCustomOrigin(this.program,t),(0,f.Vv)(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&(0,C.vL)(this.program,e,t)}setPipeline(e,t){const o=this.configuration,r=3===e,a=2===e;return(0,E.sm)({blending:0!==o.output&&7!==o.output||!o.transparent?null:r?c.wu:(0,c.$L)(e),culling:F(o)&&(0,E.zp)(o.cullFace),depthTest:{func:(0,c.$x)(e)},depthWrite:r||a?o.writeDepth&&E.LZ:null,colorWrite:E.BK,stencilWrite:o.sceneHasOcludees?H.s3:null,stencilTest:o.sceneHasOcludees?t?H.eD:H.RY:null,polygonOffset:r||a?null:(0,c.je)(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function F(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}L.shader=new S.J(R.D,(()=>o.e(1180).then(o.bind(o,1180))));class D extends A.m{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}(0,p._)([(0,A.o)({count:8})],D.prototype,"output",void 0),(0,p._)([(0,A.o)({count:4})],D.prototype,"alphaDiscardMode",void 0),(0,p._)([(0,A.o)({count:3})],D.prototype,"doubleSidedMode",void 0),(0,p._)([(0,A.o)()],D.prototype,"isSchematic",void 0),(0,p._)([(0,A.o)()],D.prototype,"vertexColors",void 0),(0,p._)([(0,A.o)()],D.prototype,"offsetBackfaces",void 0),(0,p._)([(0,A.o)()],D.prototype,"symbolColors",void 0),(0,p._)([(0,A.o)()],D.prototype,"vvSize",void 0),(0,p._)([(0,A.o)()],D.prototype,"vvColor",void 0),(0,p._)([(0,A.o)()],D.prototype,"verticalOffset",void 0),(0,p._)([(0,A.o)()],D.prototype,"receiveShadows",void 0),(0,p._)([(0,A.o)()],D.prototype,"slicePlaneEnabled",void 0),(0,p._)([(0,A.o)()],D.prototype,"sliceHighlightDisabled",void 0),(0,p._)([(0,A.o)()],D.prototype,"receiveAmbientOcclusion",void 0),(0,p._)([(0,A.o)()],D.prototype,"screenSizePerspective",void 0),(0,p._)([(0,A.o)()],D.prototype,"textureAlphaPremultiplied",void 0),(0,p._)([(0,A.o)()],D.prototype,"hasColorTexture",void 0),(0,p._)([(0,A.o)()],D.prototype,"usePBR",void 0),(0,p._)([(0,A.o)()],D.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,p._)([(0,A.o)()],D.prototype,"hasEmissionTexture",void 0),(0,p._)([(0,A.o)()],D.prototype,"hasOcclusionTexture",void 0),(0,p._)([(0,A.o)()],D.prototype,"hasNormalTexture",void 0),(0,p._)([(0,A.o)()],D.prototype,"instanced",void 0),(0,p._)([(0,A.o)()],D.prototype,"instancedColor",void 0),(0,p._)([(0,A.o)()],D.prototype,"instancedDoublePrecision",void 0),(0,p._)([(0,A.o)()],D.prototype,"vertexTangents",void 0),(0,p._)([(0,A.o)()],D.prototype,"normalsTypeDerivate",void 0),(0,p._)([(0,A.o)()],D.prototype,"writeDepth",void 0),(0,p._)([(0,A.o)()],D.prototype,"sceneHasOcludees",void 0),(0,p._)([(0,A.o)()],D.prototype,"transparent",void 0),(0,p._)([(0,A.o)()],D.prototype,"enableOffset",void 0),(0,p._)([(0,A.o)({count:3})],D.prototype,"cullFace",void 0),(0,p._)([(0,A.o)({count:4})],D.prototype,"transparencyPassType",void 0),(0,p._)([(0,A.o)()],D.prototype,"multipassTerrainEnabled",void 0),(0,p._)([(0,A.o)()],D.prototype,"cullAboveGround",void 0);var B=o(60926);class z extends L{initializeProgram(e){const t=z.shader.get(),o=this.configuration,r=t.build({OITEnabled:0===o.transparencyPassType,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,pbrMode:o.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:o.hasColorTexture,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:o.hasColorTexture?1:0,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,M.I)(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:o.multipassTerrainEnabled,cullAboveGround:o.cullAboveGround});return new P.$(e.rctx,r,O.i)}}z.shader=new S.J(B.R,(()=>o.e(7578).then(o.bind(o,67578))));class I extends d.F{constructor(e){super(e,V),this.supportsEdges=!0,this.techniqueConfig=new D,this.vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,o=(0,n.U$)().vec3f("position").vec3f("normal");return e.vertexTangents&&o.vec4f("tangent"),t&&o.vec2f("uv0"),e.vertexColors&&o.vec4u8("color"),e.symbolColors&&o.vec4u8("symbolColor"),o}(this.parameters),this.instanceBufferLayout=e.instanced?$(this.parameters):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,o=e.vertexColors,r=e.symbolColors,a=!!t&&t.indexOf("color")>-1,i=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return o&&(a||i||r)?!!n||s:o?n?l:s:a||i||r?!!n||s:n?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?1:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<c.ve),this.techniqueConfig}intersect(e,t,o,r,i,n,s){if(null!==this.parameters.verticalOffset){const e=r.camera;(0,a.s)(K,o[12],o[13],o[14]);let t=null;switch(r.viewingMode){case 1:t=(0,a.n)(q,K);break;case 2:t=(0,a.g)(q,U)}let s=0;if(null!==this.parameters.verticalOffset){const o=(0,a.f)(X,K,e.eye),r=(0,a.l)(o),i=(0,a.a)(o,o,1/r);let n=null;this.parameters.screenSizePerspective&&(n=(0,a.d)(t,i)),s+=(0,v.Hx)(e,r,this.parameters.verticalOffset,n,this.parameters.screenSizePerspective)}(0,a.a)(t,t,s),(0,a.t)(j,t,r.transform.inverseRotation),i=(0,a.f)(k,i,j),n=(0,a.f)(W,n,j)}(0,v.Bw)(e,t,r,i,n,(0,u.W9)(r.verticalOffset),s)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||20===e}createGLMaterial(e){return 0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output?new N(e):null}createBufferWriter(){return new G(this.vertexBufferLayout,this.instanceBufferLayout)}}class N extends l.Z{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?z:L,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return 0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const V={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,r.c)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:s.F,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...d.z};class G{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,o,r){(0,m.NK)(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,o,r)}}function $(e){let t=(0,n.U$)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}const k=(0,i.c)(),W=(0,i.c)(),U=(0,i.f)(0,0,1),q=(0,i.c)(),j=(0,i.c)(),K=(0,i.c)(),X=(0,i.c)()}}]);
//# sourceMappingURL=7251.js.map