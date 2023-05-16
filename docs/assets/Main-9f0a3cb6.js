import{l as fe,a as i,n as U,T as Ve,y as Tt,z as Ot,A as Fe,B as At,C as st,D as $e,E as ct,G as Ne,H as Vt,I as It,J as re,u as He,R as Bt,K as _e,L as Ye,M as Rt,N as Lt,O as Mt,P as Ft,Q as $t,S as Nt,U as Ht,W as zt,X as Wt,Y as jt,Z as qt,_ as Gt,$ as Yt,a0 as Ut,a1 as ze,a2 as Kt,a3 as Xt,a4 as T,a5 as ye,a6 as Ie,a7 as Zt,a8 as Jt,j as $,a9 as ie,aa as ut,F as ee,i as Ue,d as ve,o as H,c as ae,w as h,b as Q,t as F,f as de,g as Be,ab as we,ac as Qt,k as N,ad as oe,ae as Z,q as O,af as dt,ag as R,ah as We,ai as me,aj as ea,ak as je,al as ft,am as ta,an as G,ao as qe,ap as aa,aq as Ke,ar as Ce,as as Ee,at as Xe,au as na,av as Ze,aw as q,ax as Je,ay as oa,az as la,r as vt,aA as ra,aB as ia,aC as sa,aD as ca,aE as ua,aF as da,aG as fa,aH as va,aI as ma,aJ as De,aK as ha,aL as ga,aM as ya,aN as pa,aO as ba,p as mt,e as ht,h as se,aP as ka,aQ as wa,x as xa,aR as Sa,aS as _a,v as Ca}from"./index-a344b812.js";import{V as gt,a as Ea}from"./VAlert-15b51250.js";import{c as Da,V as pe,d as ue,b as X,e as Pa,a as K,f as Ta}from"./VRow-4e415c23.js";class ne{constructor(t){let{x:a,y:n,width:o,height:l}=t;this.x=a,this.y=n,this.width=o,this.height=l}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Qe(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function yt(e){const t=e.getBoundingClientRect(),a=getComputedStyle(e),n=a.transform;if(n){let o,l,r,s,c;if(n.startsWith("matrix3d("))o=n.slice(9,-1).split(/, /),l=+o[0],r=+o[5],s=+o[12],c=+o[13];else if(n.startsWith("matrix("))o=n.slice(7,-1).split(/, /),l=+o[0],r=+o[3],s=+o[4],c=+o[5];else return new ne(t);const f=a.transformOrigin,d=t.x-s-(1-l)*parseFloat(f),m=t.y-c-(1-r)*parseFloat(f.slice(f.indexOf(" ")+1)),g=l?t.width/l:e.offsetWidth+1,b=r?t.height/r:e.offsetHeight+1;return new ne({x:d,y:m,width:g,height:b})}else return new ne(t)}function ce(e,t,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let n;try{n=e.animate(t,a)}catch{return{finished:Promise.resolve()}}return typeof n.finished>"u"&&(n.finished=new Promise(o=>{n.onfinish=()=>{o(n)}})),n}function pt(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const Re="cubic-bezier(0.4, 0, 0.2, 1)",Oa="cubic-bezier(0.0, 0, 0.2, 1)",Aa="cubic-bezier(0.4, 0, 1, 1)";function Va(e){for(;e;){if(Ge(e))return e;e=e.parentElement}return document.scrollingElement}function xe(e,t){const a=[];if(t&&e&&!t.contains(e))return a;for(;e&&(Ge(e)&&a.push(e),e!==t);)e=e.parentElement;return a}function Ge(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Ia(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Ba=fe()({name:"VDialogTransition",props:{target:Object},setup(e,t){let{slots:a}=t;const n={onBeforeEnter(o){o.style.pointerEvents="none",o.style.visibility="hidden"},async onEnter(o,l){var g;await new Promise(b=>requestAnimationFrame(b)),await new Promise(b=>requestAnimationFrame(b)),o.style.visibility="";const{x:r,y:s,sx:c,sy:f,speed:d}=tt(e.target,o),m=ce(o,[{transform:`translate(${r}px, ${s}px) scale(${c}, ${f})`,opacity:0},{}],{duration:225*d,easing:Oa});(g=et(o))==null||g.forEach(b=>{ce(b,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*d,easing:Re})}),m.finished.then(()=>l())},onAfterEnter(o){o.style.removeProperty("pointer-events")},onBeforeLeave(o){o.style.pointerEvents="none"},async onLeave(o,l){var g;await new Promise(b=>requestAnimationFrame(b));const{x:r,y:s,sx:c,sy:f,speed:d}=tt(e.target,o);ce(o,[{},{transform:`translate(${r}px, ${s}px) scale(${c}, ${f})`,opacity:0}],{duration:125*d,easing:Aa}).finished.then(()=>l()),(g=et(o))==null||g.forEach(b=>{ce(b,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*d,easing:Re})})},onAfterLeave(o){o.style.removeProperty("pointer-events")}};return()=>e.target?i(Ve,U({name:"dialog-transition"},n,{css:!1}),a):i(Ve,{name:"dialog-transition"},a)}});function et(e){var a;const t=(a=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:a.children;return t&&[...t]}function tt(e,t){const a=e.getBoundingClientRect(),n=yt(t),[o,l]=getComputedStyle(t).transformOrigin.split(" ").map(v=>parseFloat(v)),[r,s]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");let c=a.left+a.width/2;r==="left"||s==="left"?c-=a.width/2:(r==="right"||s==="right")&&(c+=a.width/2);let f=a.top+a.height/2;r==="top"||s==="top"?f-=a.height/2:(r==="bottom"||s==="bottom")&&(f+=a.height/2);const d=a.width/n.width,m=a.height/n.height,g=Math.max(1,d,m),b=d/g||0,k=m/g||0,p=n.width*n.height/(window.innerWidth*window.innerHeight),y=p>.12?Math.min(1.5,(p-.12)*10+1):1;return{x:c-(o+n.left),y:f-(l+n.top),sx:b,sy:k,speed:y}}const Ra=Tt("flex-grow-1","div","VSpacer");function La(){return Math.random()<.5}function bt(){return Math.floor(Math.random()*5)+2}function kt(){const e=new Date,t=e.getFullYear(),a=e.getMonth(),n=new Date(t,a+1,0).getDate(),o=Math.floor(Math.random()*n)+1;return new Date(t,a,o)}function Ma(e){const t=kt(),a=new Date(t.getTime()+(e-1)*24*60*60*1e3);return[t,a]}function Fa(e,t,a,n){if(a<e)return 0;if(a>=t)return 100;{const o=a.getTime()-e.getTime(),l=Math.ceil(o/(24*3600*1e3));return Math.round(l/n*100)}}function ge(e){const t=e.getFullYear(),a=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");return`${t} 年 ${a} 月 ${n} 日`}var V=(e=>(e.daily="daily",e.temporary="temporary",e.longTerm="longTerm",e.shortTerm="shortTerm",e.other="other",e))(V||{}),L=(e=>(e.todo="todo",e.doing="doing",e.done="done",e.block="block",e.cancel="cancel",e))(L||{});function $a(e){let t=1;La()?t=bt():t=1;let n=["学习 TypeScript","阅读一篇英文文章","锻炼 30 分钟","写日报","看一部电影"],o=["学习 TypeScript 并完成一道编程练习","阅读一篇英文文章并提炼出其中的核心内容","进行 30 分钟的晨间运动或晚间拉伸","总结今天工作的重点和难点，并记录感悟","从豆瓣 Top 250 中选择一部电影观看"],l=Object.values(V),r=Object.values(L),s=[];for(let c=0;c<e;c++){let f=Math.floor(Math.random()*n.length),d={taskDuration:t,taskId:String(c),taskDate:new Date,taskName:n[f],taskType:l[Math.floor(Math.random()*l.length)],taskStatus:r[Math.floor(Math.random()*r.length)],taskDescription:o[f]};t===1?d.taskDate=kt():d.taskDate=Ma(t),s.push(d)}return s}function Na(){let e=[],t=bt();return $a(t).forEach(n=>{let o=Ha(n);e.push(o)}),e}function Ha(e){let t,a;switch(e.taskType){case V.daily:a={color:"indigo"};break;case V.longTerm:a={color:"green"};break;case V.shortTerm:a={color:"purple"};break;case V.temporary:a={color:"blue"};break;case V.other:a={color:"teal"};break;default:a={color:"red",fillMode:"outline",contentClass:"italic"};break}return e.taskDuration===1?t=e.taskDate:t={start:e.taskDate[0],end:e.taskDate[1]},{highlight:a,dates:t,popover:!0,customData:{task:e}}}const wt=Symbol.for("vuetify:v-chip-group");fe()({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Ot},...Fe(),...At({selectedClass:"v-chip--selected"}),...st(),...$e(),...ct({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{themeClasses:n}=Ne(e),{isSelected:o,select:l,next:r,prev:s,selected:c}=Vt(e,wt);return It({VChip:{color:re(e,"color"),disabled:re(e,"disabled"),filter:re(e,"filter"),variant:re(e,"variant")}}),He(()=>i(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},n.value,e.class],style:e.style},{default:()=>{var f;return[(f=a.default)==null?void 0:f.call(a,{isSelected:o,select:l,next:r,prev:s,selected:c.value})]}})),{}}});const be=fe()({name:"VChip",directives:{Ripple:Bt},props:{activeClass:String,appendAvatar:String,appendIcon:_e,closable:Boolean,closeIcon:{type:_e,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:_e,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Ye(),onClickOnce:Ye(),...Rt(),...Fe(),...Lt(),...Mt(),...Ft(),...$t(),...Nt(),...Ht(),...st({tag:"span"}),...$e(),...ct({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,t){let{attrs:a,emit:n,slots:o}=t;const{t:l}=zt(),{borderClasses:r}=Wt(e),{colorClasses:s,colorStyles:c,variantClasses:f}=jt(e),{densityClasses:d}=qt(e),{elevationClasses:m}=Gt(e),{roundedClasses:g}=Yt(e),{sizeClasses:b}=Ut(e),{themeClasses:k}=Ne(e),p=ze(e,"modelValue"),y=Kt(e,wt,!1),v=Xt(e,a),w=T(()=>e.link!==!1&&v.isLink.value),u=T(()=>!e.disabled&&e.link!==!1&&(!!y||e.link||v.isClickable.value)),E=T(()=>({"aria-label":l(e.closeLabel),onClick(P){p.value=!1,n("click:close",P)}}));function B(P){var M;n("click",P),u.value&&((M=v.navigate)==null||M.call(v,P),y==null||y.toggle())}function z(P){(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),B(P))}return()=>{const P=v.isLink.value?"a":e.tag,M=!!(e.appendIcon||e.appendAvatar),J=!!(M||o.append),W=!!(o.close||e.closable),D=!!(o.filter||e.filter)&&y,C=!!(e.prependIcon||e.prependAvatar),x=!!(C||o.prepend),S=!y||y.isSelected.value;return p.value&&ye(i(P,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":u.value,"v-chip--filter":D,"v-chip--pill":e.pill},k.value,r.value,S?s.value:void 0,d.value,m.value,g.value,b.value,f.value,y==null?void 0:y.selectedClass.value,e.class],style:[S?c.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:v.href.value,tabindex:u.value?0:void 0,onClick:B,onKeydown:u.value&&!w.value&&z},{default:()=>{var I;return[Zt(u.value,"v-chip"),D&&i(Jt,{key:"filter"},{default:()=>[ye(i("div",{class:"v-chip__filter"},[o.filter?ye(i(ie,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[Ie("slot"),o.filter,"default"]]):i($,{key:"filter-icon",icon:e.filterIcon},null)]),[[ut,y.isSelected.value]])]}),x&&i("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?i(ie,{key:"prepend-defaults",disabled:!C,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):i(ee,null,[e.prependIcon&&i($,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(Ue,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),((I=o.default)==null?void 0:I.call(o,{isSelected:y==null?void 0:y.isSelected.value,selectedClass:y==null?void 0:y.selectedClass.value,select:y==null?void 0:y.select,toggle:y==null?void 0:y.toggle,value:y==null?void 0:y.value.value,disabled:e.disabled}))??e.text,J&&i("div",{key:"append",class:"v-chip__append"},[o.append?i(ie,{key:"append-defaults",disabled:!M,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):i(ee,null,[e.appendIcon&&i($,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(Ue,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),W&&i("div",U({key:"close",class:"v-chip__close"},E.value),[o.close?i(ie,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):i($,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ie("ripple"),u.value&&e.ripple,null]])}}}),za={class:"text-caption font-italic"},Wa=ve({__name:"CalendarView",props:{date:Date,attributes:Array},setup(e){const t=e;return(a,n)=>(H(),ae(we(Qt),{"title-position":"left",modelValue:t.date,"onUpdate:modelValue":n[0]||(n[0]=o=>t.date=o),expanded:"",attributes:t.attributes},{"header-title":h(({title:o})=>[i(be,{class:"font-weight-bold","prepend-icon":"mdi-calendar-today",label:"",color:"indigo-accent-4",variant:"flat"},{default:h(()=>[Q(F(o),1)]),_:2},1024)]),"day-popover":h(({attributes:o})=>[(H(!0),de(ee,null,Be(o,({key:l,customData:r})=>(H(),de("div",{key:l},[i(gt,{class:"pa-2",border:"start",prominent:"",icon:"mdi-hexagon-multiple-outline",variant:"text",color:"indigo-accent-4"},{default:h(()=>[i(Ea,{class:"text-body-1"},{default:h(()=>[N("span",null,F(r.task.taskName),1),i(Ra),N("span",null,F(r.task.taskDuration)+" days",1)]),_:2},1024),N("span",za,F(r.task.taskDescription),1)]),_:2},1024)]))),128))]),_:1},8,["modelValue","attributes"]))}});function ja(e){let t=[];return e&&(t=e.map(n=>{if(n.customData)return n.customData.task}).filter(n=>n!==void 0)),t}function qa(e){return e.reduce((t,a)=>{const n=a.taskType;return t[n]||(t[n]={name:n,items:[]}),t[n].items.push(a),t},{})}function Ga(e){const t={};return Object.values(e).forEach(a=>{const{name:n,items:o}=a;let l={...a,typecolor:""};l.typecolor=xt(n),t[n]=l}),t}function Ya(e){let t="";switch(e){case L.todo:t="mdi-bus-marker";break;case L.doing:t="mdi-run-fast";break;case L.done:t="mdi-cookie-check-outline";break;case L.block:t="mdi-bus-stop-uncovered";break;case L.cancel:t="mdi-pause-circle-outline";break}return t}function Ua(e){let t="";switch(e){case L.todo:t="purple-accent-4";break;case L.doing:t="blue-accent-4";break;case L.done:t="green-accent-4";break;case L.block:t="red-accent-3";break;case L.cancel:t="amber-accent-4";break}return t}function Ka(e){let t="";switch(e){case V.daily:t="日常任务";break;case V.temporary:t="临时任务";break;case V.longTerm:t="长期任务";break;case V.shortTerm:t="短期任务";break;case V.other:t="其他任务";break}return t}function xt(e){let t="";switch(e){case V.daily:t="blue-accent-4";break;case V.temporary:t="pink-lighten-1";break;case V.longTerm:t="green-accent-4";break;case V.shortTerm:t="orange-darken-4";break;case V.other:t="deep-purple-accent-4";break}return t}const Xa=oe({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Za(e,t){const a={},n=o=>()=>{if(!Z)return Promise.resolve(!0);const l=o==="openDelay";return a.closeDelay&&window.clearTimeout(a.closeDelay),delete a.closeDelay,a.openDelay&&window.clearTimeout(a.openDelay),delete a.openDelay,new Promise(r=>{const s=parseInt(e[o]??0,10);a[o]=window.setTimeout(()=>{t==null||t(l),r(l)},s)})};return{runCloseDelay:n("closeDelay"),runOpenDelay:n("openDelay")}}const Ja=Symbol.for("vuetify:v-menu"),Qa=oe({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Xa()},"v-overlay-activator");function en(e,t){let{isActive:a,isTop:n}=t;const o=O();let l=!1,r=!1,s=!0;const c=T(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=T(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:d,runCloseDelay:m}=Za(e,u=>{u===(e.openOnHover&&l||c.value&&r)&&!(e.openOnHover&&a.value&&!n.value)&&(a.value!==u&&(s=!0),a.value=u)}),g={click:u=>{u.stopPropagation(),o.value=u.currentTarget||u.target,a.value=!a.value},mouseenter:u=>{var E;(E=u.sourceCapabilities)!=null&&E.firesTouchEvents||(l=!0,o.value=u.currentTarget||u.target,d())},mouseleave:u=>{l=!1,m()},focus:u=>{ta&&!u.target.matches(":focus-visible")||(r=!0,u.stopPropagation(),o.value=u.currentTarget||u.target,d())},blur:u=>{r=!1,u.stopPropagation(),m()}},b=T(()=>{const u={};return f.value&&(u.click=g.click),e.openOnHover&&(u.mouseenter=g.mouseenter,u.mouseleave=g.mouseleave),c.value&&(u.focus=g.focus,u.blur=g.blur),u}),k=T(()=>{const u={};if(e.openOnHover&&(u.mouseenter=()=>{l=!0,d()},u.mouseleave=()=>{l=!1,m()}),e.closeOnContentClick){const E=dt(Ja,null);u.click=()=>{a.value=!1,E==null||E.closeParents()}}return u}),p=T(()=>{const u={};return e.openOnHover&&(u.mouseenter=()=>{s&&(l=!0,s=!1,d())},u.mouseleave=()=>{l=!1,m()}),u});R(n,u=>{u&&(e.openOnHover&&!l&&(!c.value||!r)||c.value&&!r&&(!e.openOnHover||!l))&&(a.value=!1)});const y=O();We(()=>{y.value&&me(()=>{const u=y.value;o.value=ea(u)?u.$el:u})});const v=je("useActivator");let w;return R(()=>!!e.activator,u=>{u&&Z?(w=ft(),w.run(()=>{tn(e,v,{activatorEl:o,activatorEvents:b})})):w&&w.stop()},{flush:"post",immediate:!0}),G(()=>{w==null||w.stop()}),{activatorEl:o,activatorRef:y,activatorEvents:b,contentEvents:k,scrimEvents:p}}function tn(e,t,a){let{activatorEl:n,activatorEvents:o}=a;R(()=>e.activator,(c,f)=>{if(f&&c!==f){const d=s(f);d&&r(d)}c&&me(()=>l())},{immediate:!0}),R(()=>e.activatorProps,()=>{l()}),G(()=>{r()});function l(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&(Object.entries(o.value).forEach(d=>{let[m,g]=d;c.addEventListener(m,g)}),Object.keys(f).forEach(d=>{f[d]==null?c.removeAttribute(d):c.setAttribute(d,f[d])}))}function r(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&(Object.entries(o.value).forEach(d=>{let[m,g]=d;c.removeEventListener(m,g)}),Object.keys(f).forEach(d=>{c.removeAttribute(d)}))}function s(){var d,m;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,f;if(c)if(c==="parent"){let g=(m=(d=t==null?void 0:t.proxy)==null?void 0:d.$el)==null?void 0:m.parentNode;for(;g.hasAttribute("data-no-activator");)g=g.parentNode;f=g}else typeof c=="string"?f=document.querySelector(c):"$el"in c?f=c.$el:f=c;return n.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:null,n.value}}const an=oe({eager:Boolean},"lazy");function nn(e,t){const a=O(!1),n=T(()=>a.value||e.eager||t.value);R(t,()=>a.value=!0);function o(){e.eager||(a.value=!1)}return{isBooted:a,hasContent:n,onAfterLeave:o}}function Pe(e,t){return{x:e.x+t.x,y:e.y+t.y}}function on(e,t){return{x:e.x-t.x,y:e.y-t.y}}function at(e,t){if(e.side==="top"||e.side==="bottom"){const{side:a,align:n}=e,o=n==="left"?0:n==="center"?t.width/2:n==="right"?t.width:n,l=a==="top"?0:a==="bottom"?t.height:a;return Pe({x:o,y:l},t)}else if(e.side==="left"||e.side==="right"){const{side:a,align:n}=e,o=a==="left"?0:a==="right"?t.width:a,l=n==="top"?0:n==="center"?t.height/2:n==="bottom"?t.height:n;return Pe({x:o,y:l},t)}return Pe({x:t.width/2,y:t.height/2},t)}const St={static:sn,connected:un},ln=oe({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in St},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function rn(e,t){const a=O({}),n=O();Z&&(qe(()=>!!(t.isActive.value&&e.locationStrategy),l=>{var r,s;R(()=>e.locationStrategy,l),G(()=>{n.value=void 0}),typeof e.locationStrategy=="function"?n.value=(r=e.locationStrategy(t,e,a))==null?void 0:r.updateLocation:n.value=(s=St[e.locationStrategy](t,e,a))==null?void 0:s.updateLocation}),window.addEventListener("resize",o,{passive:!0}),G(()=>{window.removeEventListener("resize",o),n.value=void 0}));function o(l){var r;(r=n.value)==null||r.call(n,l)}return{contentStyles:a,updateLocation:n}}function sn(){}function cn(e,t){const a=yt(e);return t?a.x+=parseFloat(e.style.right||0):a.x-=parseFloat(e.style.left||0),a.y-=parseFloat(e.style.top||0),a}function un(e,t,a){Ia(e.activatorEl.value)&&Object.assign(a.value,{position:"fixed"});const{preferredAnchor:o,preferredOrigin:l}=aa(()=>{const k=Ke(t.location,e.isRtl.value),p=t.origin==="overlap"?k:t.origin==="auto"?Ce(k):Ke(t.origin,e.isRtl.value);return k.side===p.side&&k.align===Ee(p).align?{preferredAnchor:Xe(k),preferredOrigin:Xe(p)}:{preferredAnchor:k,preferredOrigin:p}}),[r,s,c,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(k=>T(()=>{const p=parseFloat(t[k]);return isNaN(p)?1/0:p})),d=T(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const k=t.offset.split(" ").map(parseFloat);return k.length<2&&k.push(0),k}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let m=!1;const g=new ResizeObserver(()=>{m&&b()});R([e.activatorEl,e.contentEl],(k,p)=>{let[y,v]=k,[w,u]=p;w&&g.unobserve(w),y&&g.observe(y),u&&g.unobserve(u),v&&g.observe(v)},{immediate:!0}),G(()=>{g.disconnect()});function b(){if(m=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>m=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const k=e.activatorEl.value.getBoundingClientRect(),p=cn(e.contentEl.value,e.isRtl.value),y=xe(e.contentEl.value),v=12;y.length||(y.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(p.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),p.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const w=y.reduce((D,C)=>{const x=C.getBoundingClientRect(),S=new ne({x:C===document.documentElement?0:x.x,y:C===document.documentElement?0:x.y,width:C.clientWidth,height:C.clientHeight});return D?new ne({x:Math.max(D.left,S.left),y:Math.max(D.top,S.top),width:Math.min(D.right,S.right)-Math.max(D.left,S.left),height:Math.min(D.bottom,S.bottom)-Math.max(D.top,S.top)}):S},void 0);w.x+=v,w.y+=v,w.width-=v*2,w.height-=v*2;let u={anchor:o.value,origin:l.value};function E(D){const C=new ne(p),x=at(D.anchor,k),S=at(D.origin,C);let{x:I,y:j}=on(x,S);switch(D.anchor.side){case"top":j-=d.value[0];break;case"bottom":j+=d.value[0];break;case"left":I-=d.value[0];break;case"right":I+=d.value[0];break}switch(D.anchor.align){case"top":j-=d.value[1];break;case"bottom":j+=d.value[1];break;case"left":I-=d.value[1];break;case"right":I+=d.value[1];break}return C.x+=I,C.y+=j,C.width=Math.min(C.width,c.value),C.height=Math.min(C.height,f.value),{overflows:Qe(C,w),x:I,y:j}}let B=0,z=0;const P={x:0,y:0},M={x:!1,y:!1};let J=-1;for(;;){if(J++>10){na("Infinite loop detected in connectedLocationStrategy");break}const{x:D,y:C,overflows:x}=E(u);B+=D,z+=C,p.x+=D,p.y+=C;{const S=Ze(u.anchor),I=x.x.before||x.x.after,j=x.y.before||x.y.after;let te=!1;if(["x","y"].forEach(A=>{if(A==="x"&&I&&!M.x||A==="y"&&j&&!M.y){const _={anchor:{...u.anchor},origin:{...u.origin}},Y=A==="x"?S==="y"?Ee:Ce:S==="y"?Ce:Ee;_.anchor=Y(_.anchor),_.origin=Y(_.origin);const{overflows:he}=E(_);(he[A].before<=x[A].before&&he[A].after<=x[A].after||he[A].before+he[A].after<(x[A].before+x[A].after)/2)&&(u=_,te=M[A]=!0)}}),te)continue}x.x.before&&(B+=x.x.before,p.x+=x.x.before),x.x.after&&(B-=x.x.after,p.x-=x.x.after),x.y.before&&(z+=x.y.before,p.y+=x.y.before),x.y.after&&(z-=x.y.after,p.y-=x.y.after);{const S=Qe(p,w);P.x=w.width-S.x.before-S.x.after,P.y=w.height-S.y.before-S.y.after,B+=S.x.before,p.x+=S.x.before,z+=S.y.before,p.y+=S.y.before}break}const W=Ze(u.anchor);return Object.assign(a.value,{"--v-overlay-anchor-origin":`${u.anchor.side} ${u.anchor.align}`,transformOrigin:`${u.origin.side} ${u.origin.align}`,top:q(Te(z)),left:e.isRtl.value?void 0:q(Te(B)),right:e.isRtl.value?q(Te(-B)):void 0,minWidth:q(W==="y"?Math.min(r.value,k.width):r.value),maxWidth:q(nt(Je(P.x,r.value===1/0?0:r.value,c.value))),maxHeight:q(nt(Je(P.y,s.value===1/0?0:s.value,f.value)))}),{available:P,contentBox:p}}return R(()=>[o.value,l.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>b()),me(()=>{const k=b();if(!k)return;const{available:p,contentBox:y}=k;y.height>p.y&&requestAnimationFrame(()=>{b(),requestAnimationFrame(()=>{b()})})}),{updateLocation:b}}function Te(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function nt(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let Le=!0;const Se=[];function dn(e){!Le||Se.length?(Se.push(e),Me()):(Le=!1,e(),Me())}let ot=-1;function Me(){cancelAnimationFrame(ot),ot=requestAnimationFrame(()=>{const e=Se.shift();e&&e(),Se.length?Me():Le=!0})}const ke={none:null,close:mn,block:hn,reposition:gn},fn=oe({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ke}},"v-overlay-scroll-strategies");function vn(e,t){if(!Z)return;let a;We(async()=>{a==null||a.stop(),t.isActive.value&&e.scrollStrategy&&(a=ft(),await me(),a.active&&a.run(()=>{var n;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,a):(n=ke[e.scrollStrategy])==null||n.call(ke,t,e,a)}))}),G(()=>{a==null||a.stop()})}function mn(e){function t(a){e.isActive.value=!1}_t(e.activatorEl.value??e.contentEl.value,t)}function hn(e,t){var r;const a=(r=e.root.value)==null?void 0:r.offsetParent,n=[...new Set([...xe(e.activatorEl.value,t.contained?a:void 0),...xe(e.contentEl.value,t.contained?a:void 0)])].filter(s=>!s.classList.contains("v-overlay-scroll-blocked")),o=window.innerWidth-document.documentElement.offsetWidth,l=(s=>Ge(s)&&s)(a||document.documentElement);l&&e.root.value.classList.add("v-overlay--scroll-blocked"),n.forEach((s,c)=>{s.style.setProperty("--v-body-scroll-x",q(-s.scrollLeft)),s.style.setProperty("--v-body-scroll-y",q(-s.scrollTop)),s.style.setProperty("--v-scrollbar-offset",q(o)),s.classList.add("v-overlay-scroll-blocked")}),G(()=>{n.forEach((s,c)=>{const f=parseFloat(s.style.getPropertyValue("--v-body-scroll-x")),d=parseFloat(s.style.getPropertyValue("--v-body-scroll-y"));s.style.removeProperty("--v-body-scroll-x"),s.style.removeProperty("--v-body-scroll-y"),s.style.removeProperty("--v-scrollbar-offset"),s.classList.remove("v-overlay-scroll-blocked"),s.scrollLeft=-f,s.scrollTop=-d}),l&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function gn(e,t,a){let n=!1,o=-1,l=-1;function r(s){dn(()=>{var d,m;const c=performance.now();(m=(d=e.updateLocation).value)==null||m.call(d,s),n=(performance.now()-c)/(1e3/60)>2})}l=(typeof requestIdleCallback>"u"?s=>s():requestIdleCallback)(()=>{a.run(()=>{_t(e.activatorEl.value??e.contentEl.value,s=>{n?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{r(s)})})):r(s)})})}),G(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(l),cancelAnimationFrame(o)})}function _t(e,t){const a=[document,...xe(e)];a.forEach(n=>{n.addEventListener("scroll",t,{passive:!0})}),G(()=>{a.forEach(n=>{n.removeEventListener("scroll",t)})})}function yn(){if(!Z)return O(!1);const{ssr:e}=oa();if(e){const t=O(!1);return la(()=>{t.value=!0}),t}else return O(!0)}function Ct(){const t=je("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const lt=Symbol.for("vuetify:stack"),le=vt([]);function pn(e,t,a){const n=je("useStack"),o=!a,l=dt(lt,void 0),r=vt({activeChildren:new Set});ra(lt,r);const s=O(+t.value);qe(e,()=>{var m;const d=(m=le.at(-1))==null?void 0:m[1];s.value=d?d+10:+t.value,o&&le.push([n.uid,s.value]),l==null||l.activeChildren.add(n.uid),G(()=>{if(o){const g=sa(le).findIndex(b=>b[0]===n.uid);le.splice(g,1)}l==null||l.activeChildren.delete(n.uid)})});const c=O(!0);o&&We(()=>{var m;const d=((m=le.at(-1))==null?void 0:m[0])===n.uid;setTimeout(()=>c.value=d)});const f=T(()=>!r.activeChildren.size);return{globalTop:ia(c),localTop:f,stackStyles:T(()=>({zIndex:s.value}))}}function bn(e){return{teleportTarget:T(()=>{const a=e.value;if(a===!0||!Z)return;const n=a===!1?document.body:typeof a=="string"?document.querySelector(a):a;if(n==null)return;let o=n.querySelector(":scope > .v-overlay-container");return o||(o=document.createElement("div"),o.className="v-overlay-container",n.appendChild(o)),o})}}function kn(){return!0}function Et(e,t,a){if(!e||Dt(e,a)===!1)return!1;const n=pt(t);if(typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&n.host===e.target)return!1;const o=(typeof a.value=="object"&&a.value.include||(()=>[]))();return o.push(t),!o.some(l=>l==null?void 0:l.contains(e.target))}function Dt(e,t){return(typeof t.value=="object"&&t.value.closeConditional||kn)(e)}function wn(e,t,a){const n=typeof a.value=="function"?a.value:a.value.handler;t._clickOutside.lastMousedownWasOutside&&Et(e,t,a)&&setTimeout(()=>{Dt(e,a)&&n&&n(e)},0)}function rt(e,t){const a=pt(e);t(document),typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&t(a)}const xn={mounted(e,t){const a=o=>wn(o,e,t),n=o=>{e._clickOutside.lastMousedownWasOutside=Et(o,e,t)};rt(e,o=>{o.addEventListener("click",a,!0),o.addEventListener("mousedown",n,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:a,onMousedown:n}},unmounted(e,t){e._clickOutside&&(rt(e,a=>{var l;if(!a||!((l=e._clickOutside)!=null&&l[t.instance.$.uid]))return;const{onClick:n,onMousedown:o}=e._clickOutside[t.instance.$.uid];a.removeEventListener("click",n,!0),a.removeEventListener("mousedown",o,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Sn(e){const{modelValue:t,color:a,...n}=e;return i(Ve,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&i("div",U({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},n),null)]})}const Pt=oe({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...Qa(),...Fe(),...ca(),...an(),...ln(),...fn(),...$e(),...ua()},"v-overlay"),it=fe()({name:"VOverlay",directives:{ClickOutside:xn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Pt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:a,attrs:n,emit:o}=t;const l=ze(e,"modelValue"),r=T({get:()=>l.value,set:_=>{_&&e.disabled||(l.value=_)}}),{teleportTarget:s}=bn(T(()=>e.attach||e.contained)),{themeClasses:c}=Ne(e),{rtlClasses:f,isRtl:d}=da(),{hasContent:m,onAfterLeave:g}=nn(e,r),b=fa(T(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:k,localTop:p,stackStyles:y}=pn(r,re(e,"zIndex"),e._disableGlobalStack),{activatorEl:v,activatorRef:w,activatorEvents:u,contentEvents:E,scrimEvents:B}=en(e,{isActive:r,isTop:p}),{dimensionStyles:z}=va(e),P=yn(),{scopeId:M}=Ct();R(()=>e.disabled,_=>{_&&(r.value=!1)});const J=O(),W=O(),{contentStyles:D,updateLocation:C}=rn(e,{isRtl:d,contentEl:W,activatorEl:v,isActive:r});vn(e,{root:J,contentEl:W,activatorEl:v,isActive:r,updateLocation:C});function x(_){o("click:outside",_),e.persistent?A():r.value=!1}function S(){return r.value&&k.value}Z&&R(r,_=>{_?window.addEventListener("keydown",I):window.removeEventListener("keydown",I)},{immediate:!0});function I(_){_.key==="Escape"&&k.value&&(e.persistent?A():r.value=!1)}const j=ma();qe(()=>e.closeOnBack,()=>{ya(j,_=>{k.value&&r.value?(_(!1),e.persistent?A():r.value=!1):_()})});const te=O();R(()=>r.value&&(e.absolute||e.contained)&&s.value==null,_=>{if(_){const Y=Va(J.value);Y&&Y!==document.scrollingElement&&(te.value=Y.scrollTop)}});function A(){e.noClickAnimation||W.value&&ce(W.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Re})}return He(()=>{var _;return i(ee,null,[(_=a.activator)==null?void 0:_.call(a,{isActive:r.value,props:U({ref:w},De(u.value),e.activatorProps)}),P.value&&i(ha,{disabled:!s.value,to:s.value},{default:()=>[m.value&&i("div",U({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":r.value,"v-overlay--contained":e.contained},c.value,f.value,e.class],style:[y.value,{top:q(te.value)},e.style],ref:J},M,n),[i(Sn,U({color:b,modelValue:r.value&&!!e.scrim},De(B.value)),null),i(ga,{appear:!0,persisted:!0,transition:e.transition,target:v.value,onAfterLeave:()=>{g(),o("afterLeave")}},{default:()=>{var Y;return[ye(i("div",U({ref:W,class:["v-overlay__content",e.contentClass],style:[z.value,D.value]},De(E.value),e.contentProps),[(Y=a.default)==null?void 0:Y.call(a,{isActive:r})]),[[ut,r.value],[Ie("click-outside"),{handler:x,closeConditional:S,include:()=>[v.value]}]])]}})])]})])}),{activatorEl:v,animateClick:A,contentEl:W,globalTop:k,localTop:p,updateLocation:C}}}),Oe=Symbol("Forwarded refs");function Ae(e,t){let a=e;for(;a;){const n=Reflect.getOwnPropertyDescriptor(a,t);if(n)return n;a=Object.getPrototypeOf(a)}}function _n(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return e[Oe]=a,new Proxy(e,{get(o,l){if(Reflect.has(o,l))return Reflect.get(o,l);if(!(typeof l=="symbol"||l.startsWith("__"))){for(const r of a)if(r.value&&Reflect.has(r.value,l)){const s=Reflect.get(r.value,l);return typeof s=="function"?s.bind(r.value):s}}},has(o,l){if(Reflect.has(o,l))return!0;if(typeof l=="symbol"||l.startsWith("__"))return!1;for(const r of a)if(r.value&&Reflect.has(r.value,l))return!0;return!1},getOwnPropertyDescriptor(o,l){var s;const r=Reflect.getOwnPropertyDescriptor(o,l);if(r)return r;if(!(typeof l=="symbol"||l.startsWith("__"))){for(const c of a){if(!c.value)continue;const f=Ae(c.value,l)??("_"in c.value?Ae((s=c.value._)==null?void 0:s.setupState,l):void 0);if(f)return f}for(const c of a){const f=c.value&&c.value[Oe];if(!f)continue;const d=f.slice();for(;d.length;){const m=d.shift(),g=Ae(m.value,l);if(g)return g;const b=m.value&&m.value[Oe];b&&d.push(...b)}}}}})}const Cn=fe()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Pt({origin:"center center",scrollStrategy:"block",transition:{component:Ba},zIndex:2400})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=ze(e,"modelValue"),{scopeId:o}=Ct(),l=O();function r(c){var m,g;const f=c.relatedTarget,d=c.target;if(f!==d&&((m=l.value)!=null&&m.contentEl)&&((g=l.value)!=null&&g.globalTop)&&![document,l.value.contentEl].includes(d)&&!l.value.contentEl.contains(d)){const b=pa(l.value.contentEl);if(!b.length)return;const k=b[0],p=b[b.length-1];f===k?p.focus():k.focus()}}Z&&R(()=>n.value&&e.retainFocus,c=>{c?document.addEventListener("focusin",r):document.removeEventListener("focusin",r)},{immediate:!0}),R(n,async c=>{var f,d;await me(),c?(f=l.value.contentEl)==null||f.focus({preventScroll:!0}):(d=l.value.activatorEl)==null||d.focus({preventScroll:!0})});const s=T(()=>U({"aria-haspopup":"dialog","aria-expanded":String(n.value)},e.activatorProps));return He(()=>{const[c]=it.filterProps(e);return i(it,U({ref:l,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},c,{modelValue:n.value,"onUpdate:modelValue":f=>n.value=f,"aria-modal":"true",activatorProps:s.value,role:"dialog"},o),{activator:a.activator,default:function(){for(var f=arguments.length,d=new Array(f),m=0;m<f;m++)d[m]=arguments[m];return i(ie,{root:!0},{default:()=>{var g;return[(g=a.default)==null?void 0:g.call(a,...d)]}})}})}),_n({},l)}}),En={class:"font-weight-bold"},Dn={class:"text-white"},Pn=N("span",{class:"text-right"},"总耗时:",-1),Tn={class:"text-h4 text-right"},On=ve({__name:"CalendarList",props:{date:Date,attributes:Array},setup(e){const t=e,a=O(!1),n=O({});let o=t.attributes,l=ja(o),r=qa(l),s=Ga(r);function c(v){return Ya(v)}function f(v){return Ua(v)}function d(v){return xt(v)}function m(v){return Ka(v)}function g(v){n.value=v,a.value=!0}function b(){a.value=!1}function k(v){let w,u,E=new Date;return v.taskDuration===1?(w=v.taskDate,u=v.taskDate):(w=v.taskDate[0],u=v.taskDate[1]),Fa(w,u,E,v.taskDuration)}function p(v){return v.taskDuration===1?`开始时间: ${ge(v.taskDate)}`:`开始时间: ${ge(v.taskDate[0])}`}function y(v){return v.taskDuration===1?`结束时间: ${ge(v.taskDate)}`:`结束时间: ${ge(v.taskDate[1])}`}return(v,w)=>(H(),ae(X,{flat:""},{default:h(()=>[i(Da,{class:"d-flex justify-end"},{default:h(()=>[i(be,{label:"",color:"purple-lighten-1 font-weight-bold",size:"large"},{default:h(()=>[Q(" 详情列表 ")]),_:1})]),_:1}),i(ue,null,{default:h(()=>[i(pe,null,{default:h(()=>[(H(!0),de(ee,null,Be(we(s),u=>(H(),ae(K,null,{default:h(()=>[i(be,{label:"",color:u.typecolor,"text-color":"white"},{default:h(()=>[i($,{start:"",icon:"mdi-tag-arrow-right-outline","x-large":""}),N("span",En,F(m(u.name)),1)]),_:2},1032,["color"]),i(X,{variant:"outlined",class:"mt-2"},{default:h(()=>[i(ht,null,{default:h(()=>[(H(!0),de(ee,null,Be(u.items,(E,B)=>(H(),ae(se,{key:B,value:E,onClick:z=>g(E)},{prepend:h(()=>[i($,{class:"mr-1",color:f(E.taskStatus),icon:c(E.taskStatus)},null,8,["color","icon"])]),default:h(()=>[i(ka,{class:"text-button text-decoration-underline"},{default:h(()=>[N("span",null,F(E.taskName),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}),i(Cn,{transition:"dialog-top-transition",width:"600",modelValue:a.value,"onUpdate:modelValue":w[0]||(w[0]=u=>a.value=u)},{default:h(({openDialog:u})=>[i(X,null,{default:h(()=>[i(ue,null,{default:h(()=>[i(X,{flat:""},{default:h(()=>[i(Pa,{title:n.value.taskName},{subtitle:h(()=>[i($,{icon:c(n.value.taskStatus),size:"18",color:"error",class:"me-1 pb-1"},null,8,["icon"]),Q(" "+F(n.value.taskDescription),1)]),_:1},8,["title"]),i(ue,{class:"py-0"},{default:h(()=>[i(pe,{align:"center","no-gutters":""},{default:h(()=>[i(K,{cols:"3",class:"text-left"},{default:h(()=>[i($,{color:d(n.value.taskType),icon:"mdi-ev-station",size:"88"},null,8,["color"])]),_:1}),i(K,{cols:"5",class:"d-flex flex-column"},{default:h(()=>[i(be,{class:"pl-0",size:"x-large",label:"",color:"success",variant:"text"},{default:h(()=>[i($,{start:"",icon:"mdi-server-plus"}),Q(" 当前进度% ")]),_:1}),i(ba,{class:"rounded-e-xl",color:"purple-accent-2",striped:"","model-value":k(n.value),height:24},{default:h(()=>[N("strong",Dn,F(k(n.value))+"%",1)]),_:1},8,["model-value"])]),_:1}),i(K,{class:"d-flex flex-column"},{default:h(()=>[Pn,N("span",Tn,F(n.value.taskDuration)+" Days",1)]),_:1})]),_:1})]),_:1}),i(gt,{variant:"tonal",class:"ml-4",color:"blue-accent-4",density:"compact"},{default:h(()=>[i(pe,null,{default:h(()=>[i(K,{cols:"2"},{default:h(()=>[i($,{class:"ma-2",size:"48",color:"indigo-accent-4",icon:"mdi-calendar-refresh-outline"})]),_:1}),i(K,{class:"d-flex flex-column text-black"},{default:h(()=>[N("span",null,F(p(n.value)),1),N("span",null,F(y(n.value)),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i(Ta,{class:"justify-end"},{default:h(()=>[i(mt,{variant:"text",onClick:b},{default:h(()=>[Q("关闭")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}}),An=ve({__name:"CalendarCore",setup(e){const t=new Date;let a=Na(),n={highlight:{color:"gray",fillMode:"outline"},dates:t,popover:!1};a.push(n);const o=O(a);return(l,r)=>(H(),de(ee,null,[i(Wa,{date:we(t),attributes:o.value},null,8,["date","attributes"]),i(On,{date:we(t),attributes:o.value,class:"mt-4"},null,8,["date","attributes"])],64))}}),Vn=ve({__name:"CalendarMain",setup(e){return(t,a)=>(H(),ae(X,{color:"grey-lighten-4",flat:"",class:"rounded-lg"},{default:h(()=>[i(ue,null,{default:h(()=>[i(An)]),_:1})]),_:1}))}}),In=N("span",{class:"text-grey-darken-2 text-decoration-underline ml-4"}," Home ",-1),Mn=ve({__name:"Main",setup(e){const t=O(!0);return(a,n)=>(H(),ae(X,{flat:""},{default:h(()=>[i(Sa,{rail:t.value,onClick:n[1]||(n[1]=o=>t.value=!1)},{default:h(()=>[i(ht,null,{default:h(()=>[i(se,{title:"主页","prepend-icon":"mdi-home-roof"},{append:h(()=>[i(mt,{variant:"text",icon:"mdi-chevron-left",onClick:n[0]||(n[0]=wa(o=>t.value=!t.value,["stop"]))})]),_:1}),i(xa),i(se,{title:"看板","prepend-icon":"mdi-monitor-dashboard"}),i(se,{title:"报告","prepend-icon":"mdi-chart-donut-variant"}),i(se,{title:"测试脚手架","prepend-icon":"mdi-list-status"})]),_:1})]),_:1},8,["rail"]),i(Ca,{flat:""},{default:h(()=>[i(_a,{class:"font-weight-bold"},{default:h(()=>[i($,{color:"grey-darken-2",left:""},{default:h(()=>[Q("mdi-home")]),_:1}),In]),_:1})]),_:1}),i(X,{flat:""},{default:h(()=>[i(ue,null,{default:h(()=>[i(pe,null,{default:h(()=>[i(K,{cols:"8"},{default:h(()=>[i(Vn)]),_:1}),i(K,null,{default:h(()=>[i(X,{color:"info",flat:""},{default:h(()=>[Q("测试")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{Mn as default};