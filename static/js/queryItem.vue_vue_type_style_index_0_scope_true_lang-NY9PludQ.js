import{a as e,d as t,q as a}from"./index-BYCMBCbo.js";import{B as l,a3 as n,n as d,a4 as s,a5 as o,f as i,a6 as r,m as u}from"./naive-ui-DtZk0WJ8.js";import{d as c,a as m,l as f,ad as p,by as y,q as g,u as h,f as b,B as k,bb as v,m as _,F as w,aY as $,ae as C,a$ as x,L as S,aZ as j,D as q,af as z,P as B}from"./@vue-7s647Hg9.js";import{s as D}from"./pinia-DxolVr3A.js";const W=c({name:"ColumSetting"}),F=c({...W,props:{columns:{}},emits:["updateColumns"],setup(t,{emit:a}){const r=t,u=a,c=m(!0),x=m(!1),S=m([]),j=[...r.columns.map((e=>(S.value.push(e.key),{...e})))],q=e=>{x.value=!1,e?(j.map((e=>{S.value.push(e.key)})),u("updateColumns",j)):(S.value=[],u("updateColumns",[]))},z=e=>{var t;S.value=e,x.value=(null==(t=S.value)?void 0:t.length)!==j.length;const a=j.filter((e=>S.value.includes(e.key)));u("updateColumns",a)};return(t,a)=>{const r=e,u=l,m=n,B=d,D=s,W=o,F=i;return f(),p(F,{trigger:"hover"},{trigger:y((()=>[g(W,{trigger:"click",placement:"bottom"},{trigger:y((()=>[g(u,{ghost:""},{icon:y((()=>[g(r,{icon:"basil:settings-alt-outline"})])),_:1})])),header:y((()=>[g(B,{justify:"space-between"},{default:y((()=>[g(m,{checked:h(c),"onUpdate:checked":[a[0]||(a[0]=e=>b(c)?c.value=e:null),q],indeterminate:h(x)},{default:y((()=>[k(v(t.$t("colSetting")),1)])),_:1},8,["checked","indeterminate"])])),_:1})])),default:y((()=>[g(D,{value:h(S),"onUpdate:value":a[1]||(a[1]=e=>b(S)?S.value=e:null),"on-update:value":z},{default:y((()=>[g(B,{vertical:""},{default:y((()=>[(f(),_(w,null,$(j,(e=>(f(),_(w,null,["selection"!==e.type?(f(),p(m,{key:e.key,value:e.key,label:e.title},null,8,["value","label"])):C("",!0)],64)))),64))])),_:1})])),_:1},8,["value"])])),_:1})])),default:y((()=>[k(" "+v(t.$t("colShowcase")),1)])),_:1})}}}),L={flex:"","flex-items-center":""},U=c({name:"BasicLayout"}),P=c({...U,props:{columns:{},optShow:{default:()=>({add:!0,edit:!0,del:!0,download:!0})},toolbar:{type:Boolean,default:!0},querybar:{type:Boolean,default:!0},btnDisabled:{default:()=>({edit:!1,del:!1,download:!1})},permission:{default:()=>({add:[],edit:[],del:[],download:[]})}},emits:["add","delete","edit","download","reset","search","update:columns"],setup(n,{emit:s}){const o=n,c=m(!0),b=t(),{fullContent:_}=D(b),w=()=>{b.setFullContent(!_)},$=s;return(t,n)=>{const s=l,m=d,b=e,B=i,D=F,W=r,U=u,P=x("permission");return f(),p(U,{segmented:{content:!0},"content-style":"padding: 10px;","header-style":"padding: 10px;"},{header:y((()=>[S(g(m,{"mb-10":"",align:"center"},{default:y((()=>[j(t.$slots,"queryBar"),o.querybar?(f(),p(m,{key:0,"translate-y-3":""},{default:y((()=>[g(s,{type:"primary",size:"small",secondary:"","render-icon":h(a)("mdi:magnify",14),onClick:n[0]||(n[0]=e=>$("search"))},{default:y((()=>[k(v(t.$t("search")),1)])),_:1},8,["render-icon"]),g(s,{type:"warning",size:"small",secondary:"","render-icon":h(a)("mdi:restore",14),onClick:n[1]||(n[1]=e=>$("reset"))},{default:y((()=>[k(v(t.$t("reset")),1)])),_:1},8,["render-icon"])])),_:1})):C("",!0)])),_:3},512),[[q,h(c)]]),g(m,{justify:"space-between",align:"center"},{default:y((()=>[j(t.$slots,"toolbarLeft"),z("div",L,[o.optShow.add?S((f(),p(s,{key:0,"mr-10":"",type:"primary",size:"tiny","render-icon":h(a)("material-symbols:add-rounded",14),onClick:n[2]||(n[2]=e=>$("add"))},{default:y((()=>[k(v(t.$t("add")),1)])),_:1},8,["render-icon"])),[[P,t.permission.add]]):C("",!0),o.optShow.edit?S((f(),p(s,{key:1,"mr-10":"",disabled:o.btnDisabled.edit,type:"warning",size:"tiny","render-icon":h(a)("material-symbols:edit-outline",14),onClick:n[3]||(n[3]=e=>$("edit"))},{default:y((()=>[k(v(t.$t("edit")),1)])),_:1},8,["disabled","render-icon"])),[[P,t.permission.edit]]):C("",!0),o.optShow.del?S((f(),p(s,{key:2,"mr-10":"",disabled:o.btnDisabled.del,type:"error",size:"tiny","render-icon":h(a)("material-symbols:delete-outline",14),onClick:n[4]||(n[4]=e=>$("delete"))},{default:y((()=>[k(v(t.$t("delete")),1)])),_:1},8,["disabled","render-icon"])),[[P,t.permission.del]]):C("",!0),o.optShow.download?S((f(),p(s,{key:3,disabled:o.btnDisabled.download,type:"info",size:"tiny","render-icon":h(a)("material-symbols:download-rounded",14),onClick:n[5]||(n[5]=e=>$("download"))},{default:y((()=>[k(v(t.$t("export")),1)])),_:1},8,["disabled","render-icon"])),[[P,t.permission.download]]):C("",!0)]),o.toolbar?(f(),p(m,{key:0},{default:y((()=>[g(W,{size:"tiny"},{default:y((()=>[g(B,{trigger:"hover"},{trigger:y((()=>[g(s,{ghost:"",onClick:n[6]||(n[6]=e=>c.value=!h(c))},{default:y((()=>[h(c)?(f(),p(b,{key:0,icon:"ic:outline-search-off"})):(f(),p(b,{key:1,icon:"mdi:magnify"}))])),_:1})])),default:y((()=>[k(" "+v(h(c)?t.$t("retractSearch"):t.$t("expandSearch")),1)])),_:1}),g(B,{trigger:"hover"},{trigger:y((()=>[g(s,{ghost:"",onClick:w},{default:y((()=>[h(_)?(f(),p(b,{key:1,icon:"ant-design:fullscreen-exit-outlined"})):(f(),p(b,{key:0,icon:"ant-design:fullscreen-outlined"}))])),_:1})])),default:y((()=>[k(" "+v(h(_)?t.$t("exitFullscreen"):t.$t("fullscreen")),1)])),_:1}),g(B,{trigger:"hover"},{trigger:y((()=>[g(s,{ghost:"",onClick:n[7]||(n[7]=e=>$("search"))},{default:y((()=>[g(b,{icon:"ant-design:reload-outlined"})])),_:1})])),default:y((()=>[k(" "+v(t.$t("refresh")),1)])),_:1}),g(D,{columns:o.columns,onUpdateColumns:n[8]||(n[8]=e=>$("update:columns",e))},null,8,["columns"])])),_:1})])),_:1})):C("",!0),j(t.$slots,"toolbarRight")])),_:3})])),default:y((()=>[j(t.$slots,"default")])),_:3})}}}),I={key:0,class:"color-[#d03050] flex-shrink-0"},J=c({name:"QueryItem"}),Q=c({...J,props:{label:{default:""},labelWidth:{default:"auto"},contentWidth:{default:180},required:{type:Boolean,default:!1}},setup(e){const t=e;return(e,a)=>{const l=d;return f(),p(l,{align:"center"},{default:y((()=>[t.label?(f(),_("label",{key:0,class:"flex-shrink-0 flex justify-end pr-10 text-font",style:B({width:t.labelWidth})},[t.required?(f(),_("span",I,"* ")):C("",!0),k(" "+v(e.label),1)],4)):C("",!0),z("div",{style:B({width:t.contentWidth+"px"}),"flex-shrink-0":""},[j(e.$slots,"default")],4)])),_:3})}}});export{Q as _,P as a};
