import{q as f,v,D as le,G as S,a as s,ad as h,I as m,K as x,i as j,a6 as C,R as se,J as ie,ae as de,L as ce,aI as re,af as ue,ag as oe,N as fe,O as ve,y as V,z as ge,A as ye,B as me,S as be,U as ke,W as Ce,ai as Se,X as he,aJ as Ve,aj as Ae,ak as Ie,Y as Pe,a0 as Le,a1 as b,a2 as Ne,a3 as je,V as _e,aM as $e,a4 as xe,bn as k,bo as A,bp as B}from"./index-222bc614.js";const Be=f()({name:"VCardActions",props:v(),setup(e,l){let{slots:a}=l;return le({VBtn:{variant:"text"}}),S(()=>{var t;return s("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),Te=h("v-card-subtitle"),Ee=h("v-card-title"),we=f()({name:"VCardItem",props:{appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:String,title:String,...v(),...x()},setup(e,l){let{slots:a}=l;return S(()=>{var u;const t=!!(e.prependAvatar||e.prependIcon),n=!!(t||a.prepend),i=!!(e.appendAvatar||e.appendIcon),c=!!(i||a.append),d=!!(e.title||a.title),r=!!(e.subtitle||a.subtitle);return s("div",{class:["v-card-item",e.class],style:e.style},[n&&s("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?s(C,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},a.prepend):t&&s(j,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),s("div",{class:"v-card-item__content"},[d&&s(Ee,{key:"title"},{default:()=>{var o;return[((o=a.title)==null?void 0:o.call(a))??e.title]}}),r&&s(Te,{key:"subtitle"},{default:()=>{var o;return[((o=a.subtitle)==null?void 0:o.call(a))??e.subtitle]}}),(u=a.default)==null?void 0:u.call(a)]),c&&s("div",{key:"append",class:"v-card-item__append"},[a.append?s(C,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},a.append):i&&s(j,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),De=h("v-card-text"),Je=f()({name:"VCard",directives:{Ripple:se},props:{appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...ie(),...v(),...x(),...de(),...ce(),...re(),...ue(),...oe(),...fe(),...ve(),...V(),...ge(),...ye({variant:"elevated"})},setup(e,l){let{attrs:a,slots:t}=l;const{themeClasses:n}=me(e),{borderClasses:i}=be(e),{colorClasses:c,colorStyles:d,variantClasses:r}=ke(e),{densityClasses:u}=Ce(e),{dimensionStyles:o}=Se(e),{elevationClasses:K}=he(e),{loaderClasses:F}=Ve(e),{locationStyles:J}=Ae(e),{positionClasses:z}=Ie(e),{roundedClasses:W}=Pe(e),g=Le(e,a),Y=b(()=>e.link!==!1&&g.isLink.value),y=b(()=>!e.disabled&&e.link!==!1&&(e.link||g.isClickable.value));return S(()=>{const q=Y.value?"a":e.tag,H=!!(t.title||e.title),X=!!(t.subtitle||e.subtitle),Q=H||X,Z=!!(t.append||e.appendAvatar||e.appendIcon),ee=!!(t.prepend||e.prependAvatar||e.prependIcon),ae=!!(t.image||e.image),te=Q||ee||Z,ne=!!(t.text||e.text);return Ne(s(q,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":y.value},n.value,i.value,c.value,u.value,K.value,F.value,z.value,W.value,r.value,e.class],style:[d.value,o.value,J.value,e.style],href:g.href.value,onClick:y.value&&g.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var L;return[ae&&s("div",{key:"image",class:"v-card__image"},[t.image?s(C,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(_e,{key:"image-img",cover:!0,src:e.image},null)]),s($e,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),te&&s(we,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),ne&&s(De,{key:"text"},{default:()=>{var N;return[((N=t.text)==null?void 0:N.call(t))??e.text]}}),(L=t.default)==null?void 0:L.call(t),t.actions&&s(Be,null,{default:t.actions}),xe(y.value,"v-card")]}}),[[je("ripple"),y.value&&e.ripple]])}),{}}});const T=(()=>k.reduce((e,l)=>(e[l]={type:[Boolean,String,Number],default:!1},e),{}))(),E=(()=>k.reduce((e,l)=>{const a="offset"+A(l);return e[a]={type:[String,Number],default:null},e},{}))(),w=(()=>k.reduce((e,l)=>{const a="order"+A(l);return e[a]={type:[String,Number],default:null},e},{}))(),_={col:Object.keys(T),offset:Object.keys(E),order:Object.keys(w)};function Oe(e,l,a){let t=e;if(!(a==null||a===!1)){if(l){const n=l.replace(e,"");t+=`-${n}`}return e==="col"&&(t="v-"+t),e==="col"&&(a===""||a===!0)||(t+=`-${a}`),t.toLowerCase()}}const Re=["auto","start","end","center","baseline","stretch"],ze=f()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...T,offset:{type:[String,Number],default:null},...E,order:{type:[String,Number],default:null},...w,alignSelf:{type:String,default:null,validator:e=>Re.includes(e)},...v(),...V()},setup(e,l){let{slots:a}=l;const t=b(()=>{const n=[];let i;for(i in _)_[i].forEach(d=>{const r=e[d],u=Oe(i,d,r);u&&n.push(u)});const c=n.some(d=>d.startsWith("v-col-"));return n.push({"v-col":!c||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return B(e.tag,{class:[t.value,e.class],style:e.style},(n=a.default)==null?void 0:n.call(a))}}}),I=["start","end","center"],D=["space-between","space-around","space-evenly"];function P(e,l){return k.reduce((a,t)=>{const n=e+A(t);return a[n]=l(),a},{})}const pe=[...I,"baseline","stretch"],O=e=>pe.includes(e),R=P("align",()=>({type:String,default:null,validator:O})),Ge=[...I,...D],p=e=>Ge.includes(e),G=P("justify",()=>({type:String,default:null,validator:p})),Me=[...I,...D,"stretch"],M=e=>Me.includes(e),U=P("alignContent",()=>({type:String,default:null,validator:M})),$={align:Object.keys(R),justify:Object.keys(G),alignContent:Object.keys(U)},Ue={align:"align",justify:"justify",alignContent:"align-content"};function Ke(e,l,a){let t=Ue[e];if(a!=null){if(l){const n=l.replace(e,"");t+=`-${n}`}return t+=`-${a}`,t.toLowerCase()}}const We=f()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O},...R,justify:{type:String,default:null,validator:p},...G,alignContent:{type:String,default:null,validator:M},...U,...v(),...V()},setup(e,l){let{slots:a}=l;const t=b(()=>{const n=[];let i;for(i in $)$[i].forEach(c=>{const d=e[c],r=Ke(i,c,d);r&&n.push(r)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return B(e.tag,{class:["v-row",t.value,e.class],style:e.style},(n=a.default)==null?void 0:n.call(a))}}});export{We as V,ze as a,Je as b,Ee as c,De as d,we as e,Be as f};
