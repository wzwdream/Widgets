import{H as D}from"./vue-echarts-C0IzmTCj.js";import{h,_ as T}from"./index-B38VnuD9.js";import{u as U,a as q,b as E,c as F,d as M,e as G,f as J,g as P,h as W}from"./echarts-BhkYWNed.js";import{m as X,G as Y,B as K,n as Q,D as R,H as Z,S as tt,I as et,J as ot}from"./naive-ui-ItunR-2b.js";import{d as j,a as c,l as p,m as k,q as e,by as t,af as i,bb as S,u as r,B as d,F as V,aY as A,ad as g,ae as $,aU as nt,aS as at}from"./@vue-CRj7PaMA.js";import"./resize-detector-G6vbKCU7.js";import"./@vueuse-Bot-wEr0.js";import"./pinia-B-btkknc.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-i18n-BZ7cv-U7.js";import"./@intlify-Y34EtYYP.js";import"./vue-router-DYGa2EEA.js";import"./@iconify-D4xAYz74.js";import"./axios-B4uVmeYG.js";import"./@codemirror-uT1p_ncg.js";import"./@lezer-COsil1JX.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./lodash-es-q_UuXcXk.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";import"./vite-plugin-mock-CVu1TUMM.js";import"./mockjs-SqilSaKE.js";import"./@babel-dN-1QE0A.js";import"./path-to-regexp-D27XTR3m.js";import"./date-fns-BAYWyKT4.js";import"./vueuc-DHpchg3q.js";import"./evtd-CI_DDEu_.js";import"./seemly-pQYQdLy2.js";import"./@css-render-CcHFHqZ8.js";import"./vooks-Vv8Q4iio.js";import"./vdirs-Bxp-63WN.js";import"./@juggle-C8OzoCMD.js";import"./css-render-BDrvWz3H.js";import"./@emotion-WldOFDRm.js";import"./treemate-DKekKYbv.js";import"./async-validator-DKvM95Vc.js";import"./zrender-DGIA2jg-.js";import"./tslib-BDyQ-Jie.js";const st=()=>h.get("/github"),rt=()=>h.get("/github/languages"),it=(m=1,_=20)=>h.get(`/github/commits?page=${m}&per_page=${_}`),lt=()=>h.get("/github/traffic/views"),x=m=>(nt("data-v-2b21996e"),m=m(),at(),m),ut={"flex-1":""},pt=x(()=>i("div",{flex:"","items-center":""},[i("img",{"rounded-full":"",width:"60",src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"}),i("div",{"ml-20":""},[i("p",{"text-16":""},"Hello, 管理员"),i("p",{"mt-5":"","text-12":"","op-60":""},"选择了方向与路途，就不要抱怨，一个人只有承担起旅途风雨，才能最终守得住彩虹满天。")])],-1)),mt=x(()=>i("span",null,"喜欢的帮忙点个 ⭐Star。",-1)),ct=x(()=>i("p",{"op-60":""},[d("一个基于vue3+grid布局的网格拖拽布局，支持网格吸附、碰撞检测等。"),i("a",{class:"link",href:"https://github.com/wzwdream/vue3-draggable-grid"},"链接地址")],-1)),dt=x(()=>i("p",{"op-60":""},"一个基于 Vue3.0、Vite、Naive UI 的轻量级后台管理模板",-1)),_t=j({name:"Workbenches"}),ft=j({..._t,setup(m){U([q,E,F,M,G,J,P,W]);const _=c();rt().then(o=>{const s=o.data,n=Object.keys(s).map(l=>({value:s[l],name:l}))||[],a={title:{text:"技术栈",left:"0"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{right:"0"},series:[{name:"技术栈",type:"pie",radius:"55%",center:["50%","60%"],data:n,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};_.value=a});const z=c(0),I=c(0),B=c("");st().then(o=>{const{data:s}=o;z.value=s.stargazers_count,I.value=s.forks_count,B.value=s.description});const y=c();it().then(o=>{y.value=o.data});const b=c();lt().then(o=>{const s=[],n=[],a=[];o.data.views.forEach(l=>{s.push(l.count),n.push(l.uniques),a.push(new Date(l.timestamp).toLocaleDateString())}),b.value={title:{text:"访客情况",left:"left"},legend:{show:!0,right:"0"},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},xAxis:{type:"category",data:a},yAxis:[{type:"value",name:"访问次数",min:0,max:200},{type:"value",name:"访客数量",min:0,max:200}],series:[{name:"访问次数",type:"line",yAxisIndex:0,data:s},{name:"访客数量",type:"bar",yAxisIndex:1,data:n}]}});const N=o=>{window.open(o,"_blank")},O=o=>o.includes("feat")?"info":o.includes("fix")?"warning":o.includes("refactor")?"error":o.includes("perf")?"success":"default";return(o,s)=>{const n=X,a=Y,l=K,v=Q,w=R,f=Z,C=tt,H=et,L=ot;return p(),k("div",ut,[e(f,{cols:"1 s:1 m:2 l:2 xl:2","x-gap":12,"y-gap":8,responsive:"screen"},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{"rounded-10":"","min-h-150":""},{default:t(()=>[pt]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(n,{"rounded-10":"","min-h-150":""},{default:t(()=>[e(v,{vertical:""},{default:t(()=>[i("span",null,"欢迎使用MineAdmin后台权限管理系统。"+S(r(B)),1),e(v,{justify:"space-between"},{default:t(()=>[mt,i("div",null,[e(l,{"mr-10":""},{default:t(()=>[d("开发文档")]),_:1}),e(l,{type:"primary",onClick:s[0]||(s[0]=u=>N("https://github.com/wzwdream/widgets-for-windows"))},{default:t(()=>[d("代码仓库")]),_:1})])]),_:1}),e(v,null,{default:t(()=>[e(w,{round:"",type:"primary"},{default:t(()=>[d("fork: "+S(r(I)),1)]),_:1}),e(w,{round:"",type:"error"},{default:t(()=>[d("star: "+S(r(z)),1)]),_:1}),e(w,{round:"",type:"warning"},{default:t(()=>[d("MIT协议")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{cols:"1 s:2 m:2 l:2 xl:2","x-gap":12,"y-gap":8,"mt-15":"",responsive:"screen"},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"项目",size:"small",segmented:!0,"rounded-10":""},{default:t(()=>[e(C,{"h-500":""},{default:t(()=>[e(f,{cols:"1 s:1 m:2 l:2 xl:2","x-gap":12,"y-gap":8,responsive:"screen"},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{class:"cursor-pointer",hoverable:"",title:"vue3-draggable-grid",size:"small"},{default:t(()=>[ct]),_:1})]),_:1}),(p(),k(V,null,A(5,u=>e(a,{key:u},{default:t(()=>[e(n,{class:"cursor-pointer",hoverable:"",title:"Unusual Admin",size:"small"},{default:t(()=>[dt]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(n,{title:"更新日志",size:"small",segmented:!0,"rounded-10":""},{default:t(()=>[e(C,{"h-500":""},{default:t(()=>[r(y)?(p(),g(L,{key:0,horizontal:!1},{default:t(()=>[(p(!0),k(V,null,A(r(y),u=>(p(),g(H,{key:u.sha,type:O(u.commit.message),title:u.commit.message,content:u.commit.author.name,time:u.commit.author.date},null,8,["type","title","content","time"]))),128))]),_:1})):$("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{cols:"1 s:1 m:2 l:2 xl:2","x-gap":12,"y-gap":8,"mt-15":"",responsive:"screen"},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{"rounded-10":""},{default:t(()=>[r(_)?(p(),g(r(D),{key:0,"w-full":"","h-400":"",option:r(_),autoresize:!0},null,8,["option"])):$("",!0)]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(n,{"rounded-10":""},{default:t(()=>[r(b)?(p(),g(r(D),{key:0,"w-full":"","h-400":"",option:r(b),autoresize:!0},null,8,["option"])):$("",!0)]),_:1})]),_:1})]),_:1})])}}}),ee=T(ft,[["__scopeId","data-v-2b21996e"]]);export{ee as default};