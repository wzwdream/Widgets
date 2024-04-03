import{_ as e,u as a,a as l}from"./index-b3fbacf8.js";import{_ as t,a as n}from"./queryItem.vue_vue_type_style_index_0_scope_true_lang-9227fd3c.js";import{_ as i,i as d,r as u,d as o,e as s,f as r,j as p,k as m}from"./index-a1b3d2b0.js";import{h as v,M as b,x as y,o as c,q as k,k as f,w as h,l as _,Q as g,j as w,K as x,S as U,b4 as T,bg as L,bf as A,aU as D,az as R,bd as S,ba as q,bh as j,ax as F,aV as K}from"./.pnpm-50f13181.js";const V=v({name:"UserMenu"}),E=v({...V,setup(v){const V={add:["admin","menu:add"],del:["admin","menu:del"],edit:["admin","menu:edit"]},E=b([{type:"selection"},{title:"ID",key:"id"},{title:"菜单标题",key:"title"},{title:"图标",key:"icon",render:e=>y(i,{icon:e.icon||""})},{title:"排序",key:"sort"},{title:"组件路径",key:"component"},{title:"外链",key:"externalLink",render:e=>y("span",e.externalLink?"否":"是")},{title:"缓存",key:"keepAlive",render:e=>y("span",e.keepAlive?"否":"是")},{title:"可见",key:"visibily",render:e=>y("span",e.visibily?"否":"是")},{title:"创建日期",key:"createTime"},{title:"操作",key:"actions",align:"center",fixed:"right",render:a=>[y(e,{permission:V,onHandleDelete:()=>N(a.id),onHandleEdit:()=>O(a),onHandleView:()=>W(a)})]}]),Q=e=>o({pid:e.id}).then((a=>{e.children=a.data.data})),H=b(),z={title:[{required:!0,message:"请输入菜单标题",trigger:"blur"}],path:[{required:!0,message:"请输入路由地址",trigger:"blur"}],name:[{required:!0,message:"请输入组件名称",trigger:"blur"}],component:[{required:!0,message:"请输入组件地址",trigger:"blur"}],link:[{required:!0,message:"请输入外链菜单地址",trigger:"blur"}]},C={add:!0,del:!0,edit:!0,view:!0,download:!1},{modalVisible:I,modalAction:M,modalShowFooter:B,modalTitle:P,modalLoading:G,handleAdd:J,handleDelete:N,handleEdit:O,handleView:W,handleSave:X,handlereset:Y,defualtQuery:Z,modalForm:$,modalFormRef:ee,changeCheckRow:ae,listQuery:le,listData:te,loading:ne,rowKey:ie,btnDisabled:de,checkedRowKeys:ue}=a({name:"菜单",url:"/menu",key:"id",isPagination:!1,initForm:{pid:0,path:"",title:"",visibily:!0,menuType:1,icon:"",name:"",component:"",keepAlive:!1,externalLink:!1,link:"",sort:1,competence:""},initQuery:{pid:0,title:""},beforeRefresh:e=>(e&&e.title&&(e.pid=void 0),e),beforeAsyncValidate:async()=>{const e=await s();H.value=[{id:0,title:"顶级菜单",isLeaf:!1,children:e.data}]},beforeSave:e=>(2===e.menuType&&(e.visibily=!0),e),doDelete:r,doCreate:p,doUpdate:m}),oe=e=>{$.menuType=e,$.externalLink=!1};return(e,a)=>{const i=U,o=t,s=T,r=n,p=L,m=A,v=D,b=R,y=S,W=q,se=j,re=F,pe=K,me=l;return c(),k("div",null,[f(r,{columns:_(E),"onUpdate:columns":a[1]||(a[1]=e=>g(E)?E.value=e:null),btnDisabled:_(de),permission:V,optShow:C,onSearch:_(le),onReset:_(Y),onAdd:_(J),onDelete:_(N),onEdit:_(O)},{queryBar:h((()=>[f(o,{label:"菜单名称"},{default:h((()=>[f(i,{value:_(Z).title,"onUpdate:value":a[0]||(a[0]=e=>_(Z).title=e),size:"small",clearable:"",placeholder:"输入菜单名称，模糊搜索"},null,8,["value"])])),_:1})])),default:h((()=>[f(s,{columns:_(E),data:_(te),loading:_(ne),"row-key":_(ie),striped:"",remote:!0,cascade:!1,"allow-checking-not-loaded":"","checked-row-keys":_(ue),onLoad:Q,"onUpdate:checkedRowKeys":_(ae)},null,8,["columns","data","loading","row-key","checked-row-keys","onUpdate:checkedRowKeys"])])),_:1},8,["columns","btnDisabled","onSearch","onReset","onAdd","onDelete","onEdit"]),f(me,{visible:_(I),"onUpdate:visible":a[15]||(a[15]=e=>g(I)?I.value=e:null),title:_(P),loading:_(G),"show-footer":_(B),width:"600px",onSave:_(X)},{default:h((()=>[f(pe,{ref_key:"modalFormRef",ref:ee,"label-placement":"left","label-align":"right","label-width":80,model:_($),rules:z,disabled:"view"===_(M)},{default:h((()=>[f(re,{"x-gap":"12",cols:6},{default:h((()=>[f(b,{span:"3"},{default:h((()=>[f(v,{label:"菜单类型",path:"menuType"},{default:h((()=>[f(m,{value:_($).menuType,"onUpdate:value":a[2]||(a[2]=e=>_($).menuType=e),name:"menuType","on-update:value":oe},{default:h((()=>[(c(),w(p,{key:1,value:1,label:"目录"})),(c(),w(p,{key:0,value:0,label:"菜单"})),(c(),w(p,{key:2,value:2,label:"按钮"}))])),_:1},8,["value"])])),_:1})])),_:1}),2!==_($).menuType?(c(),w(b,{key:0,span:"3"},{default:h((()=>[f(v,{label:"菜单图标",path:"icon"},{default:h((()=>[f(y,{value:_($).icon,"onUpdate:value":a[3]||(a[3]=e=>_($).icon=e),options:_(d),renderLabel:_(u),filterable:"",clearable:""},null,8,["value","options","renderLabel"])])),_:1})])),_:1})):x("",!0),2!==_($).menuType?(c(),w(b,{key:1,span:"2"},{default:h((()=>[f(v,{label:"菜单可见",path:"visibily"},{default:h((()=>[f(m,{value:_($).visibily,"onUpdate:value":a[4]||(a[4]=e=>_($).visibily=e),name:"visibily"},{default:h((()=>[(c(),w(p,{key:1,value:!0,label:"是"})),(c(),w(p,{key:0,value:!1,label:"否"}))])),_:1},8,["value"])])),_:1})])),_:1})):x("",!0),_($).menuType?x("",!0):(c(),w(b,{key:2,span:"2"},{default:h((()=>[f(v,{label:"菜单缓存",path:"keepAlive"},{default:h((()=>[f(m,{value:_($).keepAlive,"onUpdate:value":a[5]||(a[5]=e=>_($).keepAlive=e),name:"keepAlive"},{default:h((()=>[(c(),w(p,{key:1,value:!0,label:"是"})),(c(),w(p,{key:0,value:!1,label:"否"}))])),_:1},8,["value"])])),_:1})])),_:1})),_($).menuType?x("",!0):(c(),w(b,{key:3,span:"2"},{default:h((()=>[f(v,{label:"外链菜单",path:"externalLink"},{default:h((()=>[f(m,{value:_($).externalLink,"onUpdate:value":a[6]||(a[6]=e=>_($).externalLink=e),name:"externalLink"},{default:h((()=>[(c(),w(p,{key:1,value:!0,label:"是"})),(c(),w(p,{key:0,value:!1,label:"否"}))])),_:1},8,["value"])])),_:1})])),_:1})),_($).externalLink&&!_($).menuType?(c(),w(b,{key:4,span:"6"},{default:h((()=>[f(v,{label:"外链链接",path:"link"},{default:h((()=>[f(i,{value:_($).link,"onUpdate:value":a[7]||(a[7]=e=>_($).link=e),clearable:""},null,8,["value"])])),_:1})])),_:1})):x("",!0),f(b,{span:2===_($).menuType?3:6},{default:h((()=>[f(v,{label:2===_($).menuType?"按钮名称":"菜单标题",path:"title"},{default:h((()=>[f(i,{value:_($).title,"onUpdate:value":a[8]||(a[8]=e=>_($).title=e),clearable:""},null,8,["value"])])),_:1},8,["label"])])),_:1},8,["span"]),1===_($).menuType||_($).externalLink?x("",!0):(c(),w(b,{key:5,span:"3"},{default:h((()=>[f(v,{label:"权限标识",path:"competence"},{default:h((()=>[f(i,{value:_($).competence,"onUpdate:value":a[9]||(a[9]=e=>_($).competence=e),clearable:""},null,8,["value"])])),_:1})])),_:1})),f(b,{span:"3"},{default:h((()=>[f(v,{label:"菜单排序",path:"sort"},{default:h((()=>[f(W,{value:_($).sort,"onUpdate:value":a[10]||(a[10]=e=>_($).sort=e),clearable:""},null,8,["value"])])),_:1})])),_:1}),2!==_($).menuType?(c(),w(b,{key:6,span:"3"},{default:h((()=>[f(v,{label:"路由地址",path:"path"},{default:h((()=>[f(i,{value:_($).path,"onUpdate:value":a[11]||(a[11]=e=>_($).path=e),clearable:""},null,8,["value"])])),_:1})])),_:1})):x("",!0),_($).menuType||_($).externalLink?x("",!0):(c(),w(b,{key:7,span:"3"},{default:h((()=>[f(v,{label:"组件名称",path:"name"},{default:h((()=>[f(i,{value:_($).name,"onUpdate:value":a[12]||(a[12]=e=>_($).name=e),clearable:""},null,8,["value"])])),_:1})])),_:1})),_($).menuType||_($).externalLink?x("",!0):(c(),w(b,{key:8,span:"3"},{default:h((()=>[f(v,{label:"组件路径",path:"component"},{default:h((()=>[f(i,{value:_($).component,"onUpdate:value":a[13]||(a[13]=e=>_($).component=e),clearable:""},null,8,["value"])])),_:1})])),_:1})),f(b,{span:"6"},{default:h((()=>[f(v,{label:"上级菜单",path:"pid"},{default:h((()=>[f(se,{options:_(H),filterable:"","default-value":_($).pid,"label-field":"title","key-field":"id","onUpdate:value":a[14]||(a[14]=e=>_($).pid=e)},null,8,["options","default-value"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","disabled"])])),_:1},8,["visible","title","loading","show-footer","onSave"])])}}});export{E as default};
