import{_ as e,u as a,a as l}from"./index-rQKpO1eD.js";import{_ as t,a as s}from"./queryItem.vue_vue_type_style_index_0_scope_true_lang-NY9PludQ.js";import{h as o,_ as i}from"./index-BYCMBCbo.js";import{g as n}from"./role-CExap95w.js";import{u as d}from"./useDict-DS0KAcRW.js";import{c as r,a as u,b as m}from"./calibrationRules-c4AIErF1.js";import{X as p,K as c,j as v,Y as b,T as f,L as h,G as g,Z as j,$ as y,H as _,M as k}from"./naive-ui-DtZk0WJ8.js";import{d as w,a as x,h as U,l as D,m as R,q as S,by as q,u as V,f as F,F as K,aY as z,ad as A}from"./@vue-7s647Hg9.js";import"./vue-i18n-Af_yDAzr.js";import"./@intlify-DTqJVEQS.js";import"./lodash-es-BqiBNFWB.js";import"./pinia-DxolVr3A.js";import"./vue-demi-Dq6ymT-8.js";import"./@vueuse-5kwDSbK9.js";import"./vue-echarts-DpynRI6o.js";import"./resize-detector-BnI0Kdmb.js";import"./echarts-BRR8dxA2.js";import"./zrender-BiYmND81.js";import"./tslib-ZseNXxlj.js";import"./vue-router-BiYFwnTs.js";import"./@iconify-BsjoIFlE.js";import"./axios-CURSphCx.js";import"./@codemirror-BDMijoIR.js";import"./@lezer-B1NhjyO5.js";import"./crelt-DSg10-ms.js";import"./style-mod-BCKp0_dq.js";import"./w3c-keyname-f-y9tSbI.js";import"./pinia-plugin-persistedstate-Cs-f0Iqr.js";import"./date-fns-YzY8oSGz.js";import"./@babel-DJq229zv.js";import"./vueuc-Bk9f_vlN.js";import"./evtd-hWw0KU7y.js";import"./seemly-B0CCZz1h.js";import"./@css-render-sXtP9vHb.js";import"./vooks-Dg4BxRLw.js";import"./vdirs-aWQMhJPa.js";import"./@juggle-BnTvdTVm.js";import"./css-render-7x70jhNC.js";import"./@emotion-DFFAhID7.js";import"./treemate-CC-CeH3d.js";import"./async-validator-Cuo4gI4y.js";import"./dict-xpcayHuz.js";const E=e=>o.put("/user",e),H=e=>o.delete("/user/"+e),L=e=>o.post("/user",e),N=w({name:"User"}),Q=i(w({...N,setup(o){const i={add:["admin","user:add"],del:["admin","user:del"],edit:["admin","user:edit"],download:["admin","user:download"]},w=x([]);n().then((e=>{w.value=e.data.data}));const{dict:N,getDictLabel:Q}=d(["status","sex"]),I=x([{type:"selection",disabled:e=>"admin"===e.account},{title:"ID",key:"id"},{title:"登录账号",key:"account"},{title:"用户名称",key:"name"},{title:"性别",key:"sex",render:e=>U("span",Q("sex",String(e.sex)))},{title:"电话",key:"phone"},{title:"状态",key:"status",render:e=>U(p,{rubberBand:!1,value:Number(e.status),loading:!!e.loading,checkedValue:1,uncheckedValue:0,disabled:"admin"===e.account,onUpdateValue:()=>T(e)})},{title:"创建日期",key:"createTime"},{title:"操作",key:"actions",align:"center",fixed:"right",render:a=>[U(e,{disabled:"admin"===a.account,permission:i,onHandleDelete:()=>W(a.id),onHandleEdit:()=>X(a),onHandleView:()=>ee(a)})]}]),T=async e=>{e.loading=!0;const a={...e,status:0===e.status?1:0};await E(a),await ne(),e.loading=!1},B={account:[{required:!0,message:"请输入用户名",trigger:"blur"}],pwd:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:r,message:"密码格式不正确",trigger:"input"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:u,message:"请输入正确的邮箱",trigger:"input"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:m,message:"请输入正确的手机号",trigger:"input"}]},C=c(),{pagination:M,modalVisible:Y,modalAction:$,modalShowFooter:G,modalTitle:J,modalLoading:O,handleAdd:P,handleDelete:W,handleEdit:X,handleDownload:Z,handleView:ee,handleSave:ae,handlereset:le,defualtQuery:te,modalForm:se,modalFormRef:oe,changeCheckRow:ie,listQuery:ne,listData:de,loading:re,rowKey:ue,btnDisabled:me,checkedRowKeys:pe}=a({name:"用户",url:"/user",key:"id",initForm:{account:"",name:"",phone:"",email:"",sex:0,status:1,roles:[]},initQuery:{account:void 0,phone:void 0,status:void 0},beforeRefresh:e=>(e&&e.title&&(e.pid=void 0),e),afterSave:(e,a)=>{"add"===e&&C.info(`初始密码': content: ${a.data.pwd} || '123456`,{closable:!0,duration:0})},doDelete:H,doCreate:L,doUpdate:E});return(e,a)=>{const o=v,n=t,d=b,r=f,u=s,m=h,p=g,c=j,x=y,U=_,E=k,H=l;return D(),R("div",null,[S(u,{columns:V(I),"onUpdate:columns":a[3]||(a[3]=e=>F(I)?I.value=e:null),btnDisabled:V(me),permission:i,onSearch:V(ne),onReset:V(le),onAdd:V(P),onDelete:V(W),onEdit:V(X),onDownload:V(Z)},{queryBar:q((()=>[S(n,{label:"登录账号"},{default:q((()=>[S(o,{value:V(te).account,"onUpdate:value":a[0]||(a[0]=e=>V(te).account=e),size:"small",clearable:"",placeholder:"输入登录账号，模糊搜索"},null,8,["value"])])),_:1}),S(n,{label:"手机号"},{default:q((()=>[S(o,{value:V(te).phone,"onUpdate:value":a[1]||(a[1]=e=>V(te).phone=e),size:"small",clearable:"",placeholder:"输入手机号，模糊搜索"},null,8,["value"])])),_:1}),S(n,{label:"用户状态"},{default:q((()=>{var e;return[S(d,{value:V(te).status,"onUpdate:value":a[2]||(a[2]=e=>V(te).status=e),placeholder:"选择用户状态",options:null==(e=V(N))?void 0:e.status,clearable:""},null,8,["value","options"])]})),_:1})])),default:q((()=>[S(r,{columns:V(I),data:V(de),loading:V(re),"row-key":V(ue),pagination:V(M),striped:"",remote:!0,"checked-row-keys":V(pe),"onUpdate:checkedRowKeys":V(ie)},null,8,["columns","data","loading","row-key","pagination","checked-row-keys","onUpdate:checkedRowKeys"])])),_:1},8,["columns","btnDisabled","onSearch","onReset","onAdd","onDelete","onEdit","onDownload"]),S(H,{visible:V(Y),"onUpdate:visible":a[11]||(a[11]=e=>F(Y)?Y.value=e:null),title:V(J),loading:V(O),"show-footer":V(G),width:"600px",onSave:V(ae)},{default:q((()=>[S(E,{ref_key:"modalFormRef",ref:oe,"label-placement":"left","label-align":"right","label-width":80,model:V(se),rules:B,disabled:"view"===V($)},{default:q((()=>[S(U,{"x-gap":"12",cols:2},{default:q((()=>[S(p,null,{default:q((()=>[S(m,{label:"登录账号",path:"account"},{default:q((()=>[S(o,{value:V(se).account,"onUpdate:value":a[4]||(a[4]=e=>V(se).account=e),clearable:""},null,8,["value"])])),_:1})])),_:1}),S(p,null,{default:q((()=>[S(m,{label:"电话",path:"phone"},{default:q((()=>[S(o,{value:V(se).phone,"onUpdate:value":a[5]||(a[5]=e=>V(se).phone=e),clearable:""},null,8,["value"])])),_:1})])),_:1}),S(p,null,{default:q((()=>[S(m,{label:"用户名称",path:"name"},{default:q((()=>[S(o,{value:V(se).name,"onUpdate:value":a[6]||(a[6]=e=>V(se).name=e),clearable:""},null,8,["value"])])),_:1})])),_:1}),S(p,null,{default:q((()=>[S(m,{label:"邮箱",path:"email"},{default:q((()=>[S(o,{value:V(se).email,"onUpdate:value":a[7]||(a[7]=e=>V(se).email=e),clearable:""},null,8,["value"])])),_:1})])),_:1}),S(p,null,{default:q((()=>[S(m,{label:"性别",path:"sex"},{default:q((()=>[S(x,{value:V(se).sex,"onUpdate:value":a[8]||(a[8]=e=>V(se).sex=e),name:"sex"},{default:q((()=>{var e;return[(D(!0),R(K,null,z(null==(e=V(N))?void 0:e.sex,(e=>(D(),A(c,{key:e.id,value:Number(e.value),label:e.label},null,8,["value","label"])))),128))]})),_:1},8,["value"])])),_:1})])),_:1}),S(p,null,{default:q((()=>[S(m,{label:"状态",path:"status"},{default:q((()=>[S(x,{value:V(se).status,"onUpdate:value":a[9]||(a[9]=e=>V(se).status=e),name:"status"},{default:q((()=>{var e;return[(D(!0),R(K,null,z(null==(e=V(N))?void 0:e.status,(e=>(D(),A(c,{key:e.id,value:Number(e.value),label:e.label},null,8,["value","label"])))),128))]})),_:1},8,["value"])])),_:1})])),_:1}),S(p,{span:"2"},{default:q((()=>[S(m,{label:"用户角色",path:"roles"},{default:q((()=>[S(d,{value:V(se).roles,"onUpdate:value":a[10]||(a[10]=e=>V(se).roles=e),multiple:"","label-field":"name","value-field":"id",filterable:"",clearable:"",options:V(w)},null,8,["value","options"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","disabled"])])),_:1},8,["visible","title","loading","show-footer","onSave"])])}}}),[["__scopeId","data-v-bf437a82"]]);export{Q as default};
