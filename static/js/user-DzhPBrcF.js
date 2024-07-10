import{_ as ie,u as re,a as de}from"./index-59ks69yh.js";import{_ as me,a as pe}from"./queryItem.vue_vue_type_style_index_0_scope_true_lang-B3wX29Tv.js";import{h as k,_ as ce}from"./index-BSo8LMmg.js";import{g as _e}from"./role-ByNuGhSt.js";import{u as fe}from"./useDict-D72RC-Kt.js";import{c as be,a as ge,b as ve}from"./calibrationRules-DYAn4rX5.js";import{X as he,K as ke,j as ye,Y as Ue,T as we,L as xe,G as De,Z as Re,$ as Se,H as Be,M as Fe}from"./naive-ui-ItunR-2b.js";import{d as K,a as F,h as v,l as c,m as h,q as a,by as o,u as e,f as V,F as $,aY as E,ad as L}from"./@vue-CRj7PaMA.js";import"./vue-i18n-BZ7cv-U7.js";import"./@intlify-Y34EtYYP.js";import"./lodash-es-q_UuXcXk.js";import"./pinia-B-btkknc.js";import"./vue-demi-Dq6ymT-8.js";import"./@vueuse-Bot-wEr0.js";import"./vue-echarts-C0IzmTCj.js";import"./resize-detector-G6vbKCU7.js";import"./echarts-BhkYWNed.js";import"./zrender-DGIA2jg-.js";import"./tslib-BDyQ-Jie.js";import"./vue-router-DYGa2EEA.js";import"./@iconify-D4xAYz74.js";import"./axios-B4uVmeYG.js";import"./@codemirror-DRVzKoOo.js";import"./@lezer-COsil1JX.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";import"./date-fns-BAYWyKT4.js";import"./@babel-dN-1QE0A.js";import"./vueuc-DHpchg3q.js";import"./evtd-CI_DDEu_.js";import"./seemly-pQYQdLy2.js";import"./@css-render-CcHFHqZ8.js";import"./vooks-Vv8Q4iio.js";import"./vdirs-Bxp-63WN.js";import"./@juggle-C8OzoCMD.js";import"./css-render-BDrvWz3H.js";import"./@emotion-WldOFDRm.js";import"./treemate-DKekKYbv.js";import"./async-validator-DKvM95Vc.js";import"./dict-7PeJKn-P.js";const C=d=>k.put("/user",d),Ve=d=>k.delete("/user/"+d),$e=d=>k.post("/user",d),Ee=K({name:"User"}),Le=K({...Ee,setup(d){const y={add:["admin","user:add"],del:["admin","user:del"],edit:["admin","user:edit"],download:["admin","user:download"]},U=F([]);_e().then(l=>{U.value=l.data.data});const{dict:f,getDictLabel:N}=fe(["status","sex"]),_=F([{type:"selection",disabled:l=>l.account==="admin"},{title:"ID",key:"id"},{title:"登录账号",key:"account"},{title:"用户名称",key:"name"},{title:"性别",key:"sex",render(l){return v("span",N("sex",String(l.sex)))}},{title:"电话",key:"phone"},{title:"状态",key:"status",render(l){return v(he,{rubberBand:!1,value:Number(l.status),loading:!!l.loading,checkedValue:1,uncheckedValue:0,disabled:l.account==="admin",onUpdateValue:()=>q(l)})}},{title:"创建日期",key:"createTime"},{title:"操作",key:"actions",align:"center",fixed:"right",render(l){return[v(ie,{disabled:l.account==="admin",permission:y,onHandleDelete:()=>w(l.id),onHandleEdit:()=>x(l),onHandleView:()=>j(l)})]}}]),q=async l=>{l.loading=!0;const n={...l,status:l.status===0?1:0};await C(n),await D(),l.loading=!1},A={account:[{required:!0,message:"请输入用户名",trigger:"blur"}],pwd:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:be,message:"密码格式不正确",trigger:"input"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:ge,message:"请输入正确的邮箱",trigger:"input"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:ve,message:"请输入正确的手机号",trigger:"input"}]},H=ke(),{pagination:M,modalVisible:b,modalAction:Q,modalShowFooter:T,modalTitle:z,modalLoading:I,handleAdd:P,handleDelete:w,handleEdit:x,handleDownload:Y,handleView:j,handleSave:G,handlereset:X,defualtQuery:m,modalForm:s,modalFormRef:Z,changeCheckRow:J,listQuery:D,listData:O,loading:W,rowKey:ee,btnDisabled:ae,checkedRowKeys:te}=re({name:"用户",url:"/user",key:"id",initForm:{account:"",name:"",phone:"",email:"",sex:0,status:1,roles:[]},initQuery:{account:void 0,phone:void 0,status:void 0},beforeRefresh:l=>(l&&l.title&&(l.pid=void 0),l),afterSave:(l,n)=>{l==="add"&&H.info(`初始密码': content: ${n.data.pwd} || '123456`,{closable:!0,duration:0})},doDelete:Ve,doCreate:$e,doUpdate:C});return(l,n)=>{const p=ye,g=me,R=Ue,le=we,ne=pe,i=xe,r=De,S=Re,B=Se,oe=Be,se=Fe,ue=de;return c(),h("div",null,[a(ne,{columns:e(_),"onUpdate:columns":n[3]||(n[3]=t=>V(_)?_.value=t:null),btnDisabled:e(ae),permission:y,onSearch:e(D),onReset:e(X),onAdd:e(P),onDelete:e(w),onEdit:e(x),onDownload:e(Y)},{queryBar:o(()=>[a(g,{label:"登录账号"},{default:o(()=>[a(p,{value:e(m).account,"onUpdate:value":n[0]||(n[0]=t=>e(m).account=t),size:"small",clearable:"",placeholder:"输入登录账号，模糊搜索"},null,8,["value"])]),_:1}),a(g,{label:"手机号"},{default:o(()=>[a(p,{value:e(m).phone,"onUpdate:value":n[1]||(n[1]=t=>e(m).phone=t),size:"small",clearable:"",placeholder:"输入手机号，模糊搜索"},null,8,["value"])]),_:1}),a(g,{label:"用户状态"},{default:o(()=>{var t;return[a(R,{value:e(m).status,"onUpdate:value":n[2]||(n[2]=u=>e(m).status=u),placeholder:"选择用户状态",options:(t=e(f))==null?void 0:t.status,clearable:""},null,8,["value","options"])]}),_:1})]),default:o(()=>[a(le,{columns:e(_),data:e(O),loading:e(W),"row-key":e(ee),pagination:e(M),striped:"",remote:!0,"checked-row-keys":e(te),"onUpdate:checkedRowKeys":e(J)},null,8,["columns","data","loading","row-key","pagination","checked-row-keys","onUpdate:checkedRowKeys"])]),_:1},8,["columns","btnDisabled","onSearch","onReset","onAdd","onDelete","onEdit","onDownload"]),a(ue,{visible:e(b),"onUpdate:visible":n[11]||(n[11]=t=>V(b)?b.value=t:null),title:e(z),loading:e(I),"show-footer":e(T),width:"600px",onSave:e(G)},{default:o(()=>[a(se,{ref_key:"modalFormRef",ref:Z,"label-placement":"left","label-align":"right","label-width":80,model:e(s),rules:A,disabled:e(Q)==="view"},{default:o(()=>[a(oe,{"x-gap":"12",cols:2},{default:o(()=>[a(r,null,{default:o(()=>[a(i,{label:"登录账号",path:"account"},{default:o(()=>[a(p,{value:e(s).account,"onUpdate:value":n[4]||(n[4]=t=>e(s).account=t),clearable:""},null,8,["value"])]),_:1})]),_:1}),a(r,null,{default:o(()=>[a(i,{label:"电话",path:"phone"},{default:o(()=>[a(p,{value:e(s).phone,"onUpdate:value":n[5]||(n[5]=t=>e(s).phone=t),clearable:""},null,8,["value"])]),_:1})]),_:1}),a(r,null,{default:o(()=>[a(i,{label:"用户名称",path:"name"},{default:o(()=>[a(p,{value:e(s).name,"onUpdate:value":n[6]||(n[6]=t=>e(s).name=t),clearable:""},null,8,["value"])]),_:1})]),_:1}),a(r,null,{default:o(()=>[a(i,{label:"邮箱",path:"email"},{default:o(()=>[a(p,{value:e(s).email,"onUpdate:value":n[7]||(n[7]=t=>e(s).email=t),clearable:""},null,8,["value"])]),_:1})]),_:1}),a(r,null,{default:o(()=>[a(i,{label:"性别",path:"sex"},{default:o(()=>[a(B,{value:e(s).sex,"onUpdate:value":n[8]||(n[8]=t=>e(s).sex=t),name:"sex"},{default:o(()=>{var t;return[(c(!0),h($,null,E((t=e(f))==null?void 0:t.sex,u=>(c(),L(S,{key:u.id,value:Number(u.value),label:u.label},null,8,["value","label"]))),128))]}),_:1},8,["value"])]),_:1})]),_:1}),a(r,null,{default:o(()=>[a(i,{label:"状态",path:"status"},{default:o(()=>[a(B,{value:e(s).status,"onUpdate:value":n[9]||(n[9]=t=>e(s).status=t),name:"status"},{default:o(()=>{var t;return[(c(!0),h($,null,E((t=e(f))==null?void 0:t.status,u=>(c(),L(S,{key:u.id,value:Number(u.value),label:u.label},null,8,["value","label"]))),128))]}),_:1},8,["value"])]),_:1})]),_:1}),a(r,{span:"2"},{default:o(()=>[a(i,{label:"用户角色",path:"roles"},{default:o(()=>[a(R,{value:e(s).roles,"onUpdate:value":n[10]||(n[10]=t=>e(s).roles=t),multiple:"","label-field":"name","value-field":"id",filterable:"",clearable:"",options:e(U)},null,8,["value","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","disabled"])]),_:1},8,["visible","title","loading","show-footer","onSave"])])}}}),Ua=ce(Le,[["__scopeId","data-v-bf437a82"]]);export{Ua as default};
