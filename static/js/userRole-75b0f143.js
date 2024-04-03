import{e,m as a,_ as l}from"./index-a1b3d2b0.js";import{_ as t,u as d,a as s}from"./index-b3fbacf8.js";import{_ as n,a as o}from"./queryItem.vue_vue_type_style_index_0_scope_true_lang-9227fd3c.js";import{u as i,a as u,s as r,b as c,d as m}from"./role-8546a947.js";import{u as v}from"./useDict-24a04082.js";import{h as p,M as b,x as h,bb as k,i as f,o as y,q as w,k as g,w as _,l as U,Q as D,F as x,C as R,S as j,bd as S,b4 as V,aU as F,ba as C,Y as K,aV as q,az as z,bi as A,W as E,ax as Q}from"./.pnpm-50f13181.js";import"./dict-2be0c59b.js";const H=p({name:"UserRole"}),B=p({...H,setup(p){const H={add:["admin","role:add"],del:["admin","role:del"],edit:["admin","role:edit"],download:["admin","role:download"]},{dict:B}=v(["status"]),I=b([{type:"selection",disabled:e=>1===e.id},{title:"ID",key:"id"},{title:"角色名称",key:"name"},{title:"角色排序",key:"sort"},{title:"角色状态",key:"status",render:e=>h(k,{rubberBand:!1,value:Number(e.status),loading:!!e.loading,checkedValue:1,uncheckedValue:0,disabled:1===e.id,onUpdateValue:()=>L(e)})},{title:"备注",key:"remark"},{title:"操作",key:"actions",align:"center",fixed:"right",render:e=>[h(t,{permission:H,disabled:1===e.id,onHandleDelete:()=>se(e.id),onHandleEdit:()=>ne(e),onHandleView:()=>ie(e)})]}]),L=async e=>{try{e.loading=!0;const a={...e,status:0===e.status?1:0};await i(a),await be(),e.loading=!1}catch(a){e.loading=!1}},M=b(),N=e=>({style:"cursor: pointer;",onClick:async()=>{var a;e.id&&1!==e.id&&e.id!==(null==(a=M.value)?void 0:a.id)&&(G.value=await T(e.id)||[],M.value=e)}}),T=async e=>(await u(e)).data,W=f((()=>e=>{var a;return e.id===(null==(a=M.value)?void 0:a.id)?"selected-row":""})),Y=b(),G=b([]),J=f((()=>{var e;return void 0===(null==(e=M.value)?void 0:e.id)}));e().then((e=>{Y.value=e.data}));const O=e=>{G.value=e},P=b(!1),X=()=>{var e;M.value&&G.value?(P.value=!0,r(null==(e=M.value)?void 0:e.id,G.value).then((e=>{P.value=!1,a.success(e.message)})).catch((()=>{P.value=!1}))):a.warning("请选择数据")},Z={name:[{required:!0,message:"请输入角色名称",trigger:"blur"}]},{modalVisible:$,modalAction:ee,modalShowFooter:ae,modalTitle:le,modalLoading:te,handleAdd:de,handleDelete:se,handleEdit:ne,handleDownload:oe,handleView:ie,handleSave:ue,handlereset:re,defualtQuery:ce,modalForm:me,modalFormRef:ve,changeCheckRow:pe,listQuery:be,listData:he,pagination:ke,loading:fe,rowKey:ye,btnDisabled:we,checkedRowKeys:ge}=d({name:"角色",url:"/role",key:"id",initForm:{name:"",status:1,sort:null,remark:""},initQuery:{name:"",status:null},doCreate:c,doDelete:m,doUpdate:i,beforeSave:e=>e,beforeRefresh:()=>(M.value=void 0,G.value=[],!0)});return(e,a)=>{const t=j,d=n,i=S,u=V,r=o,c=F,m=C,v=K,p=q,b=s,h=z,f=l,L=A,M=E,T=Q;return y(),w("div",null,[g(T,{cols:"3","item-responsive":"","y-gap":8,"x-gap":10,responsive:"screen"},{default:_((()=>[g(h,{span:"3 m:2 l:2 xl:2"},{default:_((()=>[g(r,{columns:U(I),"onUpdate:columns":a[2]||(a[2]=e=>D(I)?I.value=e:null),btnDisabled:U(we),permission:H,onSearch:U(be),onReset:U(re),onAdd:U(de),onDelete:U(se),onEdit:U(ne),onDownload:U(oe)},{queryBar:_((()=>[g(d,{label:"角色名称"},{default:_((()=>[g(t,{value:U(ce).name,"onUpdate:value":a[0]||(a[0]=e=>U(ce).name=e),size:"small",placeholder:"输入角色名称"},null,8,["value"])])),_:1}),g(d,{label:"角色状态"},{default:_((()=>{var e;return[g(i,{value:U(ce).status,"onUpdate:value":a[1]||(a[1]=e=>U(ce).status=e),placeholder:"选择角色状态",clearable:"",options:null==(e=U(B))?void 0:e.status},null,8,["value","options"])]})),_:1})])),default:_((()=>[g(u,{columns:U(I),data:U(he),pagination:U(ke),loading:U(fe),"row-key":U(ye),"row-props":N,"row-class-name":U(W),striped:"",remote:!0,"checked-row-keys":U(ge),"onUpdate:checkedRowKeys":U(pe)},null,8,["columns","data","pagination","loading","row-key","row-class-name","checked-row-keys","onUpdate:checkedRowKeys"])])),_:1},8,["columns","btnDisabled","onSearch","onReset","onAdd","onDelete","onEdit","onDownload"]),g(b,{visible:U($),"onUpdate:visible":a[7]||(a[7]=e=>D($)?$.value=e:null),title:U(le),loading:U(te),"show-footer":U(ae),width:"550px",onSave:U(ue)},{default:_((()=>[g(p,{ref_key:"modalFormRef",ref:ve,"label-placement":"left","label-align":"right","label-width":80,model:U(me),rules:Z,disabled:"view"===U(ee)},{default:_((()=>[g(c,{label:"角色名称",path:"name"},{default:_((()=>[g(t,{value:U(me).name,"onUpdate:value":a[3]||(a[3]=e=>U(me).name=e)},null,8,["value"])])),_:1}),g(v,{justify:"space-between"},{default:_((()=>[g(c,{label:"角色排序",path:"sort"},{default:_((()=>[g(m,{value:U(me).sort,"onUpdate:value":a[4]||(a[4]=e=>U(me).sort=e),clearable:""},null,8,["value"])])),_:1}),g(c,{label:"角色状态",path:"status"},{default:_((()=>[g(U(k),{"checked-value":1,"unchecked-value":0,value:U(me).status,"onUpdate:value":a[5]||(a[5]=e=>U(me).status=e)},null,8,["value"])])),_:1})])),_:1}),g(c,{label:"备注",path:"remark"},{default:_((()=>[g(t,{value:U(me).remark,"onUpdate:value":a[6]||(a[6]=e=>U(me).remark=e)},null,8,["value"])])),_:1})])),_:1},8,["model","disabled"])])),_:1},8,["visible","title","loading","show-footer","onSave"])])),_:1}),g(h,{span:"3 m:1 l:1 xl:1"},{default:_((()=>[g(M,{title:"菜单分配",size:"small",segmented:!0},{"header-extra":_((()=>[g(U(x),{type:"primary",size:"small",loading:U(P),disabled:U(J),onClick:X},{icon:_((()=>[g(f,{icon:"mingcute:save-2-line"})])),default:_((()=>[R(" 保存 ")])),_:1},8,["loading","disabled"])])),default:_((()=>[g(L,{data:U(Y),"checked-keys":U(G),disabled:U(J),"key-field":"id","label-field":"title",selectable:!1,"show-line":!0,"block-line":"",multiple:"",checkable:"","expand-on-click":"","onUpdate:checkedKeys":O},null,8,["data","checked-keys","disabled"])])),_:1})])),_:1})])),_:1})])}}});export{B as default};
