import{_ as e,u as a,a as l}from"./index-4f684521.js";import{_ as t,a as n}from"./queryItem.vue_vue_type_style_index_0_scope_true_lang-a6ae8fae.js";import{h as o,_ as d}from"./index-e5414acf.js";import{g as s}from"./role-f3238ed7.js";import{u}from"./useDict-29f9af46.js";import{c as i,a as r,b as c}from"./calibrationRules-6d34d65c.js";import{h as m,M as p,x as v,bh as b,aQ as h,o as f,q as g,k as _,w as y,l as w,Q as k,J as x,H as U,j as D,S as j,bi as R,ba as S,aT as q,aA as V,bj as A,bk as F,aB as Q,aU as E}from"./.pnpm-90504e03.js";import"./dict-a927f61b.js";const H=e=>o.put("/user",e),K=e=>o.delete("/user/"+e),B=e=>o.post("/user",e),I=m({name:"User"}),N=d(m({...I,setup(o){const d={add:["admin","user:add"],del:["admin","user:del"],edit:["admin","user:edit"],download:["admin","user:download"]},m=p([]);s().then((e=>{m.value=e.data.data}));const{dict:I,getDictLabel:N}=u(["status","sex"]),T=p([{type:"selection",disabled:e=>"admin"===e.account},{title:"ID",key:"id"},{title:"登录账号",key:"account"},{title:"用户名称",key:"name"},{title:"性别",key:"sex",render:e=>v("span",N("sex",String(e.sex)))},{title:"电话",key:"phone"},{title:"状态",key:"status",render:e=>v(b,{rubberBand:!1,value:Number(e.status),loading:!!e.loading,checkedValue:1,uncheckedValue:0,disabled:"admin"===e.account,onUpdateValue:()=>z(e)})},{title:"创建日期",key:"createTime"},{title:"操作",key:"actions",align:"center",fixed:"right",render:a=>[v(e,{disabled:"admin"===a.account,permission:d,onHandleDelete:()=>X(a.id),onHandleEdit:()=>Y(a),onHandleView:()=>ee(a)})]}]),z=async e=>{e.loading=!0;const a={...e,status:0===e.status?1:0};await H(a),await se(),e.loading=!1},C={account:[{required:!0,message:"请输入用户名",trigger:"blur"}],pwd:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:i,message:"密码格式不正确",trigger:"input"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:r,message:"请输入正确的邮箱",trigger:"input"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:c,message:"请输入正确的手机号",trigger:"input"}]},L=h(),{pagination:J,modalVisible:M,modalAction:$,modalShowFooter:G,modalTitle:O,modalLoading:P,handleAdd:W,handleDelete:X,handleEdit:Y,handleDownload:Z,handleView:ee,handleSave:ae,handlereset:le,defualtQuery:te,modalForm:ne,modalFormRef:oe,changeCheckRow:de,listQuery:se,listData:ue,loading:ie,rowKey:re,btnDisabled:ce,checkedRowKeys:me}=a({name:"用户",url:"/user",key:"id",initForm:{account:"",name:"",phone:"",email:"",sex:0,status:1,roles:[]},initQuery:{account:void 0,phone:void 0,status:void 0},beforeRefresh:e=>(e&&e.title&&(e.pid=void 0),e),afterSave:(e,a)=>{"add"===e&&L.info(`初始密码': content: ${a.data.pwd} || '123456`,{closable:!0,duration:0})},doDelete:K,doCreate:B,doUpdate:H});return(e,a)=>{const o=j,s=t,u=R,i=S,r=n,c=q,p=V,v=A,b=F,h=Q,H=E,K=l;return f(),g("div",null,[_(r,{columns:w(T),"onUpdate:columns":a[3]||(a[3]=e=>k(T)?T.value=e:null),btnDisabled:w(ce),permission:d,onSearch:w(se),onReset:w(le),onAdd:w(W),onDelete:w(X),onEdit:w(Y),onDownload:w(Z)},{queryBar:y((()=>[_(s,{label:"登录账号"},{default:y((()=>[_(o,{value:w(te).account,"onUpdate:value":a[0]||(a[0]=e=>w(te).account=e),size:"small",clearable:"",placeholder:"输入登录账号，模糊搜索"},null,8,["value"])])),_:1}),_(s,{label:"手机号"},{default:y((()=>[_(o,{value:w(te).phone,"onUpdate:value":a[1]||(a[1]=e=>w(te).phone=e),size:"small",clearable:"",placeholder:"输入手机号，模糊搜索"},null,8,["value"])])),_:1}),_(s,{label:"用户状态"},{default:y((()=>{var e;return[_(u,{value:w(te).status,"onUpdate:value":a[2]||(a[2]=e=>w(te).status=e),placeholder:"选择用户状态",options:null==(e=w(I))?void 0:e.status,clearable:""},null,8,["value","options"])]})),_:1})])),default:y((()=>[_(i,{columns:w(T),data:w(ue),loading:w(ie),"row-key":w(re),pagination:w(J),striped:"",remote:!0,"checked-row-keys":w(me),"onUpdate:checkedRowKeys":w(de)},null,8,["columns","data","loading","row-key","pagination","checked-row-keys","onUpdate:checkedRowKeys"])])),_:1},8,["columns","btnDisabled","onSearch","onReset","onAdd","onDelete","onEdit","onDownload"]),_(K,{visible:w(M),"onUpdate:visible":a[11]||(a[11]=e=>k(M)?M.value=e:null),title:w(O),loading:w(P),"show-footer":w(G),width:"600px",onSave:w(ae)},{default:y((()=>[_(H,{ref_key:"modalFormRef",ref:oe,"label-placement":"left","label-align":"right","label-width":80,model:w(ne),rules:C,disabled:"view"===w($)},{default:y((()=>[_(h,{"x-gap":"12",cols:2},{default:y((()=>[_(p,null,{default:y((()=>[_(c,{label:"登录账号",path:"account"},{default:y((()=>[_(o,{value:w(ne).account,"onUpdate:value":a[4]||(a[4]=e=>w(ne).account=e),clearable:""},null,8,["value"])])),_:1})])),_:1}),_(p,null,{default:y((()=>[_(c,{label:"电话",path:"phone"},{default:y((()=>[_(o,{value:w(ne).phone,"onUpdate:value":a[5]||(a[5]=e=>w(ne).phone=e),clearable:""},null,8,["value"])])),_:1})])),_:1}),_(p,null,{default:y((()=>[_(c,{label:"用户名称",path:"name"},{default:y((()=>[_(o,{value:w(ne).name,"onUpdate:value":a[6]||(a[6]=e=>w(ne).name=e),clearable:""},null,8,["value"])])),_:1})])),_:1}),_(p,null,{default:y((()=>[_(c,{label:"邮箱",path:"email"},{default:y((()=>[_(o,{value:w(ne).email,"onUpdate:value":a[7]||(a[7]=e=>w(ne).email=e),clearable:""},null,8,["value"])])),_:1})])),_:1}),_(p,null,{default:y((()=>[_(c,{label:"性别",path:"sex"},{default:y((()=>[_(b,{value:w(ne).sex,"onUpdate:value":a[8]||(a[8]=e=>w(ne).sex=e),name:"sex"},{default:y((()=>{var e;return[(f(!0),g(x,null,U(null==(e=w(I))?void 0:e.sex,(e=>(f(),D(v,{key:e.id,value:Number(e.value),label:e.label},null,8,["value","label"])))),128))]})),_:1},8,["value"])])),_:1})])),_:1}),_(p,null,{default:y((()=>[_(c,{label:"状态",path:"status"},{default:y((()=>[_(b,{value:w(ne).status,"onUpdate:value":a[9]||(a[9]=e=>w(ne).status=e),name:"status"},{default:y((()=>{var e;return[(f(!0),g(x,null,U(null==(e=w(I))?void 0:e.status,(e=>(f(),D(v,{key:e.id,value:Number(e.value),label:e.label},null,8,["value","label"])))),128))]})),_:1},8,["value"])])),_:1})])),_:1}),_(p,{span:"2"},{default:y((()=>[_(c,{label:"用户角色",path:"roles"},{default:y((()=>[_(u,{value:w(ne).roles,"onUpdate:value":a[10]||(a[10]=e=>w(ne).roles=e),multiple:"","label-field":"name","value-field":"id",filterable:"",clearable:"",options:w(m)},null,8,["value","options"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","disabled"])])),_:1},8,["visible","title","loading","show-footer","onSave"])])}}}),[["__scopeId","data-v-bf437a82"]]);export{N as default};