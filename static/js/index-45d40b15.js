import{h as e,i as a,o as t,j as l,b7 as i,w as o,t as n,bm as d,k as s,C as u,l as r,Q as c,af as v,F as p,R as h,bl as w,E as f,K as g,a5 as m,Y as y,$ as b,aR as k,M as C,bo as S}from"./.pnpm-f144384e.js";import{h as R,q as x,t as z,v as $,w as D}from"./index-0d8b3202.js";const _={flex:"","justify-end":""},F=e({name:"BaseModel"}),P=e({...F,props:{width:{default:"600px"},title:{default:""},showFooter:{type:Boolean,default:!0},visible:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["update:visible","save"],setup(e,{emit:w}){const f=e,g=w,m=a({get:()=>f.visible,set(e){g("update:visible",e)}});return(e,a)=>{const w=p,f=h;return t(),l(f,{show:r(m),"onUpdate:show":a[2]||(a[2]=e=>c(m)?m.value=e:null),style:v({width:e.width}),preset:"card",title:e.title,size:"huge",bordered:!1},i({default:o((()=>[d(e.$slots,"default")])),_:2},[e.showFooter?{name:"footer",fn:o((()=>[n("footer",_,[d(e.$slots,"footer",{},(()=>[s(w,{onClick:a[0]||(a[0]=e=>m.value=!1)},{default:o((()=>[u("取消")])),_:1}),s(w,{loading:e.loading,"ml-20":"",type:"primary",onClick:a[1]||(a[1]=e=>g("save"))},{default:o((()=>[u("保存")])),_:1},8,["loading"])]))])])),key:"0"}:void 0]),1032,["show","style","title"])}}}),T=e({name:"TableAction"}),Q=e({...T,props:{optShow:{default:()=>({view:!0,edit:!0,del:!0})},disabled:{type:Boolean,default:!1},permission:{default:()=>({edit:[],del:[]})}},emits:["handleView","handleEdit","handleDelete"],setup(e,{emit:a}){const i=e,n=a;return(e,a)=>{const d=p,s=y,r=w("permission");return t(),l(s,{justify:"center"},{default:o((()=>[i.optShow.view?(t(),l(d,{key:0,type:"info",text:"",size:"small",onClick:a[0]||(a[0]=e=>n("handleView"))},{default:o((()=>[u(f(e.$t("view")),1)])),_:1})):g("",!0),i.optShow.edit?m((t(),l(d,{key:1,disabled:e.disabled,type:"warning",text:"",size:"small",onClick:a[1]||(a[1]=e=>n("handleEdit"))},{default:o((()=>[u(f(e.$t("edit")),1)])),_:1},8,["disabled"])),[[r,e.permission.edit]]):g("",!0),i.optShow.del?m((t(),l(d,{key:2,disabled:e.disabled,type:"error",text:"",size:"small",onClick:a[2]||(a[2]=e=>n("handleDelete"))},{default:o((()=>[u(f(e.$t("delete")),1)])),_:1},8,["disabled"])),[[r,e.permission.del]]):g("",!0)])),_:1})}}}),V=({name:e,url:t,key:l="id",isPagination:i=!0,isInitQuery:o=!0,initForm:n={},initQuery:d={},doCreate:s,doDelete:u,doUpdate:r,beforeRefresh:c,afterRefresh:v,beforeValidate:p,beforeAsyncValidate:h,beforeSave:w,afterSave:f})=>{const{t:g}=b(),m=a((()=>({view:g("view"),edit:g("edit"),add:g("add")}))),y=C(!1),_=C("add"),F=C(!1),P=C(null),T=k({...n,[l]:void 0}),Q=k({...d}),V=a((()=>m.value[_.value]+" "+(e||""))),j=a((()=>"view"!==_.value)),{changeCheckRow:B,checkedRowKeys:K,checkedRow:A}=(()=>{const e=C([]),a=C([]);return{checkedRowKeys:e,changeCheckRow:(t,l)=>{e.value=t,a.value=S(l)},checkedRow:a}})(),E=a((()=>{var e;return null==(e=A.value)?void 0:e.map((e=>e[l]))})),U=C(!1),M=C(),N=async()=>{U.value=!0;try{let e={...Q};i&&(e={page:(null==q?void 0:q.page)||0,pageSize:(null==q?void 0:q.pageSize)||10,...Q});const a=c&&c(e);if("boolean"==typeof a&&!a)return;a&&"boolean"!=typeof a&&(e=a);const l=await((e,a)=>R.get(e,a))(t,e),{data:o,total:n}=l.data,d=v&&v([...o]);M.value=d?d||[]:o||[],i&&(q.itemCount=n||0),A.value=[],K.value=[],U.value=!1}catch(e){U.value=!1}},{pagination:q}=(e=>{const{t:t}=b(),l=a((()=>({total:t("total"),tiao:t("tiao")}))),i=k({page:1,pageSize:10,itemCount:0,showSizePicker:!0,showQuickJumper:!0,pageSizes:[10,20,30,40,50,100],prefix:({itemCount:e})=>`${l.value.total} ${e} ${l.value.tiao}`,onUpdatePage:a=>{i.page=a,e()},onUpdatePageSize:a=>{i.page=1,i.pageSize=a,e()}});return{pagination:i}})(N);o&&N();const I=a((()=>({edit:!(1===K.value.length),del:!(K.value.length>0),download:i&&q.itemCount<=0})));return{modalVisible:y,modalAction:_,modalTitle:V,modalLoading:F,modalShowFooter:j,handlereset:()=>{x(Q,d)},handleAdd:async()=>{p&&p(T),h&&await h(),_.value="add",y.value=!0,x(T,n)},handleDelete:e=>{if(void 0===e&&E.value&&0===E.value.length)return;const a=$.warning({title:g("warn"),content:g("dureDelete"),positiveText:g("determine"),negativeText:g("cancellation"),onPositiveClick:async()=>{a.loading=!0;try{if(E.value,void 0!==e)u&&await u(e);else{const e=E.value.map((async e=>{if(u)return await u(e)}));await Promise.all(e)}a.loading=!1,u&&z.success({title:"",content:g("delete")+" "+g("sucess"),duration:1600}),N()}catch(t){a.loading=!1}},onNegativeClick:()=>{}})},handleEdit:async e=>{p&&p(T),h&&await h();let a=S(e);!e&&A.value&&(a=A.value[0]),_.value="edit",y.value=!0,x(T,a)},handleView:e=>{_.value="view",y.value=!0,x(T,S(e))},handleDownload:async()=>{const a=$.warning({title:"导出数据",content:"是否导出数据？",positiveText:g("determine"),negativeText:g("cancellation"),onPositiveClick:async()=>{a.loading=!0;try{const l={...Q},i=await((e,a)=>R.post(e,a,{responseType:"blob"}))(t+"/download",l);D(i,e),a.loading=!1,z.success({title:"",content:"导出成功",duration:1600})}catch(l){a.loading=!1}},onNegativeClick:()=>{}})},handleSave:()=>{var e;["edit","add"].includes(_.value)?null==(e=P.value)||e.validate((async e=>{if(e)return;const a="add"===_.value?s:r,t="add"===_.value?g("add"):g("edit");try{F.value=!0;const e=w&&w(T)||T;if(a){const l=await a(e);z.success({title:"",content:t+" "+g("sucess"),duration:1600}),f&&f(_.value,l),F.value=y.value=!1,N()}}catch(l){F.value=!1}})):y.value=!1},modalForm:T,modalFormRef:P,defualtQuery:Q,changeCheckRow:B,loading:U,listData:M,pagination:q,listQuery:N,rowKey:e=>e[l],btnDisabled:I,checkedRowKeys:K}};export{Q as _,P as a,V as u};