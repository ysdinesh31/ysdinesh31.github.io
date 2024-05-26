import{r as e,j as c,a as z}from"./index-f0c688d3.js";import{R as v,_ as p,A as M,u as x,an as f,r as C,V as U,C as F,P as I,ao as W}from"./index-43782085.esm-13d6770c.js";function _(a){return function(r){a.forEach(function(t){typeof t=="function"?t(r):t!=null&&(t.current=r)})}}const $=()=>parseInt(v.replace(/\D+/g,"")),R=$(),y=R>=154?"opaque_fragment":"output_fragment";class j extends M{constructor(r){super(r),this.onBeforeCompile=(t,s)=>{const{isWebGL2:o}=s.capabilities;t.fragmentShader=t.fragmentShader.replace(`#include <${y}>`,`
        ${o?`#include <${y}>`:`#extension GL_OES_standard_derivatives : enable
#include <${y}>`}
      vec2 cxy = 2.0 * gl_PointCoord - 1.0;
      float r = dot(cxy, cxy);
      float delta = fwidth(r);     
      float mask = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
      gl_FragColor = vec4(gl_FragColor.rgb, mask * gl_FragColor.a );
      #include <tonemapping_fragment>
      #include <${R>=154?"colorspace_fragment":"encodings_fragment"}>
      `)}}}const D=e.forwardRef((a,r)=>{const[t]=e.useState(()=>new j(null));return e.createElement("primitive",p({},a,{object:t,ref:r,attach:"material"}))});let u,d;const G=e.createContext(null),S=new C,A=new U,V=e.forwardRef(({children:a,range:r,limit:t=1e3,...s},o)=>{const n=e.useRef(null),[l,m]=e.useState([]),[[i,g,b]]=e.useState(()=>[new Float32Array(t*3),Float32Array.from({length:t*3},()=>1),Float32Array.from({length:t},()=>1)]);e.useEffect(()=>{n.current.geometry.attributes.position.needsUpdate=!0}),x(()=>{for(n.current.updateMatrix(),n.current.updateMatrixWorld(),S.copy(n.current.matrixWorld).invert(),n.current.geometry.drawRange.count=Math.min(t,r!==void 0?r:t,l.length),u=0;u<l.length;u++)d=l[u].current,d.getWorldPosition(A).applyMatrix4(S),A.toArray(i,u*3),n.current.geometry.attributes.position.needsUpdate=!0,d.matrixWorldNeedsUpdate=!0,d.color.toArray(g,u*3),n.current.geometry.attributes.color.needsUpdate=!0,b.set([d.size],u),n.current.geometry.attributes.size.needsUpdate=!0});const P=e.useMemo(()=>({getParent:()=>n,subscribe:E=>(m(h=>[...h,E]),()=>m(h=>h.filter(w=>w.current!==E.current)))}),[]);return e.createElement("points",p({userData:{instances:l},matrixAutoUpdate:!1,ref:_([o,n]),raycast:()=>null},s),e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",count:i.length/3,array:i,itemSize:3,usage:f}),e.createElement("bufferAttribute",{attach:"attributes-color",count:g.length/3,array:g,itemSize:3,usage:f}),e.createElement("bufferAttribute",{attach:"attributes-size",count:b.length,array:b,itemSize:1,usage:f})),e.createElement(G.Provider,{value:P},a))}),k=e.forwardRef(({children:a,positions:r,colors:t,sizes:s,stride:o=3,...n},l)=>{const m=e.useRef(null);return x(()=>{const i=m.current.geometry.attributes;i.position.needsUpdate=!0,t&&(i.color.needsUpdate=!0),s&&(i.size.needsUpdate=!0)}),e.createElement("points",p({ref:_([l,m])},n),e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",count:r.length/o,array:r,itemSize:o,usage:f}),t&&e.createElement("bufferAttribute",{attach:"attributes-color",count:t.length/o,array:t,itemSize:3,usage:f}),s&&e.createElement("bufferAttribute",{attach:"attributes-size",count:s.length/o,array:s,itemSize:1,usage:f})),a)}),N=e.forwardRef((a,r)=>a.positions instanceof Float32Array?e.createElement(k,p({},a,{ref:r})):e.createElement(V,p({},a,{ref:r}))),q=a=>{const r=e.useRef(),[t]=e.useState(()=>W(new Float32Array(5e3),{radius:1.2}));return x((s,o)=>{r.current.rotation.x-=o/10,r.current.rotation.y-=o/15}),c("group",{rotation:[0,0,Math.PI/4],children:c(N,{ref:r,positions:t,stride:3,frustumCulled:!0,...a,children:c(D,{transparent:!0,color:"#f272c8",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},O=()=>c("div",{className:"w-full h-auto absolute inset-0 z-[-1]",children:z(F,{camera:{position:[0,0,1]},children:[c(e.Suspense,{fallback:null,children:c(q,{})}),c(I,{all:!0})]})});export{O as default};