import{_ as e,u as a,a as l}from"./index-b3fbacf8.js";import{c as d,_ as i,a as t}from"./index-a1b3d2b0.js";import{b as o,c as s,f as n}from"./dict-2be0c59b.js";import{h as r,M as u,x as m,b5 as p,b6 as b,o as v,j as c,b7 as f,l as y,w as g,k as h,C as k,Q as w,F as _,b8 as D,b9 as S,b4 as x,S as F,aU as U,ba as j,aV as C,W as Q}from"./.pnpm-50f13181.js";const V=r({name:"Details"}),H=t(r({...V,props:{pid:{},name:{}},setup(t){const{hasPermission:r}=d(),V={add:["admin","dictDetails:add"],del:["admin","dictDetails:del"],edit:["admin","dictDetails:edit"],download:["admin","dictDetails:download"]},H=t,I=u([{title:"ID",key:"id"},{title:"所属字典",key:"name",render:()=>m("span",{},H.name)},{title:"字典标签",key:"label"},{title:"字典值",key:"value"},{title:"排序",key:"dictSort"},{title:"操作",key:"actions",align:"center",fixed:"right",render:a=>[m(e,{permission:V,onHandleDelete:()=>M(a.id),onHandleEdit:()=>P(a),onHandleView:()=>T(a)})]}]),q={value:[{required:!0,message:"请输入字典值",trigger:"blur"}],label:[{required:!0,message:"请输入字典标签",trigger:"blur"}]},{modalVisible:z,modalAction:A,modalShowFooter:E,modalTitle:R,modalLoading:K,handleAdd:L,handleDelete:M,handleEdit:P,handleView:T,handleSave:W,defualtQuery:B,modalForm:G,modalFormRef:J,listQuery:N,listData:O,pagination:X,loading:Y,rowKey:Z}=a({name:"字典详情",url:"/dictDetails",key:"id",isInitQuery:!1,initForm:{id:void 0,pid:void 0,label:"",value:"",dictSort:1},initQuery:{pid:void 0},doCreate:o,doDelete:s,doUpdate:n,beforeSave:e=>(e.pid=H.pid,e)});return p((()=>{b((()=>{H.pid?(B.pid=H.pid,N()):(O.value=[],X.itemCount=0,X.page=1)}))})),(e,a)=>{const d=i,t=_,o=D,s=S,n=x,u=F,m=U,p=j,b=C,M=l,P=Q;return v(),c(P,{title:"字典详情",size:"small",segmented:!0},f({default:g((()=>[void 0===H.pid?(v(),c(s,{key:0,prefix:"bar"},{default:g((()=>[h(o,{type:"primary"},{default:g((()=>[k(" 点击字典查看详情")])),_:1})])),_:1})):(v(),c(n,{key:1,columns:y(I),data:y(O),pagination:y(X),loading:y(Y),"row-key":y(Z),striped:"",remote:!0},null,8,["columns","data","pagination","loading","row-key"])),h(M,{visible:y(z),"onUpdate:visible":a[3]||(a[3]=e=>w(z)?z.value=e:null),title:y(R),loading:y(K),"show-footer":y(E),width:"450px",onSave:y(W)},{default:g((()=>[h(b,{ref_key:"modalFormRef",ref:J,"label-placement":"left","label-align":"right","label-width":80,model:y(G),rules:q,disabled:"view"===y(A)},{default:g((()=>[h(m,{label:"字典标签",path:"label"},{default:g((()=>[h(u,{value:y(G).label,"onUpdate:value":a[0]||(a[0]=e=>y(G).label=e)},null,8,["value"])])),_:1}),h(m,{label:"字典值",path:"value"},{default:g((()=>[h(u,{value:y(G).value,"onUpdate:value":a[1]||(a[1]=e=>y(G).value=e)},null,8,["value"])])),_:1}),h(m,{label:"字典排序",path:"dictSort"},{default:g((()=>[h(p,{value:y(G).dictSort,"onUpdate:value":a[2]||(a[2]=e=>y(G).dictSort=e)},null,8,["value"])])),_:1})])),_:1},8,["model","disabled"])])),_:1},8,["visible","title","loading","show-footer","onSave"])])),_:2},[y(r)(V.add)?{name:"header-extra",fn:g((()=>[h(t,{type:"primary",disabled:void 0===H.pid,size:"small",onClick:y(L)},{icon:g((()=>[h(d,{icon:"material-symbols:add-rounded"})])),default:g((()=>[k(" 新增 ")])),_:1},8,["disabled","onClick"])])),key:"0"}:void 0]),1024)}}}),[["__scopeId","data-v-61e5d6ab"]]);export{H as default};
