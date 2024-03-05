import{_ as e,u as l,a}from"./index-184429e3.js";import{_ as t,a as n}from"./queryItem.vue_vue_type_style_index_0_scope_true_lang-f85172dc.js";import{_ as i,c as d,i as u,r as o,d as s,e as r,f as p,j as v}from"./index-a15d8d1d.js";import{h as m,M as b,x as y,o as c,q as k,k as f,w as _,l as h,Q as g,j as x,K as U,S as T,b4 as w,be as L,bd as D,aU as A,az as q,bb as R,b9 as S,bf as j,ax as F,aV as E}from"./.pnpm-222492af.js";const K=m({name:"UserMenu"}),Q=m({...K,setup(m){const K=b([{type:"selection"},{title:"ID",key:"id"},{title:"菜单标题",key:"title"},{title:"图标",key:"icon",render:e=>y(i,{icon:e.icon||""})},{title:"排序",key:"sort"},{title:"组件路径",key:"component"},{title:"外链",key:"externalLink",render:e=>y("span",e.externalLink?"否":"是")},{title:"缓存",key:"keepAlive",render:e=>y("span",e.keepAlive?"否":"是")},{title:"可见",key:"visibily",render:e=>y("span",e.visibily?"否":"是")},{title:"创建日期",key:"createTime"},{title:"操作",key:"actions",align:"center",fixed:"right",render:l=>[y(e,{onHandleDelete:()=>J([l.id]),onHandleEdit:()=>N(l),onHandleView:()=>W(l)})]}]),Q=e=>s({pid:e.id}).then((l=>{e.children=l.data})),V=[{id:0,title:"顶级菜单",isLeaf:!1,children:d().treeMenu}],H=b(V),M={title:[{required:!0,message:"请输入菜单标题",trigger:"blur"}],path:[{required:!0,message:"请输入路由地址",trigger:"blur"}],name:[{required:!0,message:"请输入组件名称",trigger:"blur"}],component:[{required:!0,message:"请输入组件地址",trigger:"blur"}],link:[{required:!0,message:"请输入外链菜单地址",trigger:"blur"}]},{modalVisible:z,modalAction:C,modalShowFooter:I,modalTitle:B,modalLoading:P,handleAdd:G,handleDelete:J,handleEdit:N,handleDownload:O,handleView:W,handleSave:X,handlereset:Y,defualtQuery:Z,modalForm:$,modalFormRef:ee,changeCheckRow:le,listQuery:ae,listData:te,loading:ne,rowKey:ie,btnDisabled:de}=l({name:"菜单",url:"/menu",key:"id",isPagination:!1,initForm:{pid:0,path:"",title:"",visibily:!0,menuType:1,icon:"",name:"",component:"",keepAlive:!1,externalLink:!1,link:"",sort:1,competence:""},initQuery:{pid:0,title:""},beforeRefresh:e=>(e&&e.title&&(e.pid=void 0),e),beforeSave:e=>(2===e.menuType&&(e.visibily=!0),e),doDelete:r,doCreate:p,doUpdate:v}),ue=e=>{$.menuType=e,$.externalLink=!1};return(e,l)=>{const i=T,d=t,s=w,r=n,p=L,v=D,m=A,b=q,y=R,V=S,W=j,oe=F,se=E,re=a;return c(),k("div",null,[f(r,{columns:h(K),"onUpdate:columns":l[1]||(l[1]=e=>g(K)?K.value=e:null),btnDisabled:h(de),onSearch:h(ae),onReset:h(Y),onAdd:h(G),onDelete:h(J),onEdit:h(N),onDownload:h(O)},{queryBar:_((()=>[f(d,{label:"菜单名称"},{default:_((()=>[f(i,{value:h(Z).title,"onUpdate:value":l[0]||(l[0]=e=>h(Z).title=e),size:"small",clearable:"",placeholder:"输入菜单名称，模糊搜索"},null,8,["value"])])),_:1})])),default:_((()=>[f(s,{columns:h(K),data:h(te),loading:h(ne),"row-key":h(ie),striped:"",remote:!0,cascade:!1,"allow-checking-not-loaded":"",onLoad:Q,"onUpdate:checkedRowKeys":h(le)},null,8,["columns","data","loading","row-key","onUpdate:checkedRowKeys"])])),_:1},8,["columns","btnDisabled","onSearch","onReset","onAdd","onDelete","onEdit","onDownload"]),f(re,{visible:h(z),"onUpdate:visible":l[15]||(l[15]=e=>g(z)?z.value=e:null),title:h(B),loading:h(P),"show-footer":h(I),width:"600px",onSave:h(X)},{default:_((()=>[f(se,{ref_key:"modalFormRef",ref:ee,"label-placement":"left","label-align":"right","label-width":80,model:h($),rules:M,disabled:"view"===h(C)},{default:_((()=>[f(oe,{"x-gap":"12",cols:6},{default:_((()=>[f(b,{span:"3"},{default:_((()=>[f(m,{label:"菜单类型",path:"menuType"},{default:_((()=>[f(v,{value:h($).menuType,"onUpdate:value":l[2]||(l[2]=e=>h($).menuType=e),name:"menuType","on-update:value":ue},{default:_((()=>[(c(),x(p,{key:1,value:1,label:"目录"})),(c(),x(p,{key:0,value:0,label:"菜单"})),(c(),x(p,{key:2,value:2,label:"按钮"}))])),_:1},8,["value"])])),_:1})])),_:1}),2!==h($).menuType?(c(),x(b,{key:0,span:"3"},{default:_((()=>[f(m,{label:"菜单图标",path:"icon"},{default:_((()=>[f(y,{value:h($).icon,"onUpdate:value":l[3]||(l[3]=e=>h($).icon=e),options:h(u),renderLabel:h(o),filterable:"",clearable:""},null,8,["value","options","renderLabel"])])),_:1})])),_:1})):U("",!0),2!==h($).menuType?(c(),x(b,{key:1,span:"2"},{default:_((()=>[f(m,{label:"菜单可见",path:"visibily"},{default:_((()=>[f(v,{value:h($).visibily,"onUpdate:value":l[4]||(l[4]=e=>h($).visibily=e),name:"visibily"},{default:_((()=>[(c(),x(p,{key:1,value:!0,label:"是"})),(c(),x(p,{key:0,value:!1,label:"否"}))])),_:1},8,["value"])])),_:1})])),_:1})):U("",!0),h($).menuType?U("",!0):(c(),x(b,{key:2,span:"2"},{default:_((()=>[f(m,{label:"菜单缓存",path:"keepAlive"},{default:_((()=>[f(v,{value:h($).keepAlive,"onUpdate:value":l[5]||(l[5]=e=>h($).keepAlive=e),name:"keepAlive"},{default:_((()=>[(c(),x(p,{key:1,value:!0,label:"是"})),(c(),x(p,{key:0,value:!1,label:"否"}))])),_:1},8,["value"])])),_:1})])),_:1})),h($).menuType?U("",!0):(c(),x(b,{key:3,span:"2"},{default:_((()=>[f(m,{label:"外链菜单",path:"externalLink"},{default:_((()=>[f(v,{value:h($).externalLink,"onUpdate:value":l[6]||(l[6]=e=>h($).externalLink=e),name:"externalLink"},{default:_((()=>[(c(),x(p,{key:1,value:!0,label:"是"})),(c(),x(p,{key:0,value:!1,label:"否"}))])),_:1},8,["value"])])),_:1})])),_:1})),h($).externalLink&&!h($).menuType?(c(),x(b,{key:4,span:"6"},{default:_((()=>[f(m,{label:"外链链接",path:"link"},{default:_((()=>[f(i,{value:h($).link,"onUpdate:value":l[7]||(l[7]=e=>h($).link=e),clearable:""},null,8,["value"])])),_:1})])),_:1})):U("",!0),f(b,{span:2===h($).menuType?3:6},{default:_((()=>[f(m,{label:2===h($).menuType?"按钮名称":"菜单标题",path:"title"},{default:_((()=>[f(i,{value:h($).title,"onUpdate:value":l[8]||(l[8]=e=>h($).title=e),clearable:""},null,8,["value"])])),_:1},8,["label"])])),_:1},8,["span"]),1===h($).menuType||h($).externalLink?U("",!0):(c(),x(b,{key:5,span:"3"},{default:_((()=>[f(m,{label:"权限标识",path:"competence"},{default:_((()=>[f(i,{value:h($).competence,"onUpdate:value":l[9]||(l[9]=e=>h($).competence=e),clearable:""},null,8,["value"])])),_:1})])),_:1})),f(b,{span:"3"},{default:_((()=>[f(m,{label:"菜单排序",path:"sort"},{default:_((()=>[f(V,{value:h($).sort,"onUpdate:value":l[10]||(l[10]=e=>h($).sort=e),clearable:""},null,8,["value"])])),_:1})])),_:1}),2!==h($).menuType?(c(),x(b,{key:6,span:"3"},{default:_((()=>[f(m,{label:"路由地址",path:"path"},{default:_((()=>[f(i,{value:h($).path,"onUpdate:value":l[11]||(l[11]=e=>h($).path=e),clearable:""},null,8,["value"])])),_:1})])),_:1})):U("",!0),h($).menuType||h($).externalLink?U("",!0):(c(),x(b,{key:7,span:"3"},{default:_((()=>[f(m,{label:"组件名称",path:"name"},{default:_((()=>[f(i,{value:h($).name,"onUpdate:value":l[12]||(l[12]=e=>h($).name=e),clearable:""},null,8,["value"])])),_:1})])),_:1})),h($).menuType||h($).externalLink?U("",!0):(c(),x(b,{key:8,span:"3"},{default:_((()=>[f(m,{label:"组件路径",path:"component"},{default:_((()=>[f(i,{value:h($).component,"onUpdate:value":l[13]||(l[13]=e=>h($).component=e),clearable:""},null,8,["value"])])),_:1})])),_:1})),f(b,{span:"6"},{default:_((()=>[f(m,{label:"上级菜单",path:"pid"},{default:_((()=>[f(W,{options:h(H),filterable:"","default-value":h($).pid,"label-field":"title","key-field":"id","onUpdate:value":l[14]||(l[14]=e=>h($).pid=e)},null,8,["options","default-value"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","disabled"])])),_:1},8,["visible","title","loading","show-footer","onSave"])])}}});export{Q as default};
