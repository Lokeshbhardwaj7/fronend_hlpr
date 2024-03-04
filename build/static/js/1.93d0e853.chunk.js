"use strict";(self.webpackChunkmetrics=self.webpackChunkmetrics||[]).push([[1],{48491:function(e,o,i){var l=i(75627),t=i(8047),d=i(46417);o.Z=e=>{const{control:o,rules:i,disabled:n,name:a,errors:s,label:r,fullWidth:c,type:u,helperText:v}=e;return(0,d.jsx)(l.Qr,{name:a,control:o,rules:{...i,pattern:{value:/^(\S+$)/,message:"invalid email address"}},render:e=>{let{field:o}=e;return(0,d.jsx)(t.Z,{type:u,...o,fullWidth:c,label:r,disabled:n,error:s[a],helperText:s&&s[a]&&"required"===s[a].type?`Please add valid ${r}`:v})}})}},39001:function(e,o,i){i.r(o),i.d(o,{default:function(){return M}});var l=i(47313),t=i(7794),d=i(33497),n=i(49709),a=i(47605),s=i(80836),r=i(17714),c=i(97741),u=i(69173),v=i(67426),m=i(71003),p=i(48420),h=i(50301),x=i(94469),g=i(33604),f=i(69625),_=i(19641),j=i(6961),b=i(98668),y=i(75627),C=i(48491),Z=i(46417);const S=l.forwardRef((function(e,o){return(0,Z.jsx)(h.Z,{direction:"up",ref:o,...e})}));var I=e=>{const{open:o,handleClose:i,updateSeller:t,sellerData:d}=e,n=(0,p.CG)((e=>e.dataLoading)),{handleSubmit:a,control:s,formState:{errors:r},setValue:c}=(0,y.cI)({defaultValues:d.id?d:{}});(0,l.useEffect)((()=>{if(d.cogs_start_date){const e=new Date(d.cogs_start_date);c("cogs_start_date",e)}if(d.cogs_end_date){const e=new Date(d.cogs_end_date);c("cogs_end_date",e)}}),[c,d]);return(0,Z.jsxs)(x.Z,{open:o,TransitionComponent:S,keepMounted:!0,onClose:i,"aria-describedby":"alert-dialog-slide-description",children:[(0,Z.jsxs)(g.Z,{children:[d.cogs_id?"Edit":"Add"," Cogs Details"]}),(0,Z.jsxs)("form",{onSubmit:a((e=>{t(e)})),children:[(0,Z.jsx)(f.Z,{children:(0,Z.jsx)(_.ZP,{container:!0,spacing:2,children:(0,Z.jsx)(_.ZP,{item:!0,sm:12,children:(0,Z.jsx)(C.Z,{type:"number",label:"Amount",control:s,rules:{required:!0},disabled:!1,name:"cogs_amount",errors:r,fullWidth:!0})})})}),(0,Z.jsxs)(j.Z,{children:[(0,Z.jsx)(m.Z,{onClick:i,children:"Cancel"}),(0,Z.jsxs)(m.Z,{type:"submit",color:"secondary",variant:"contained",disabled:n.loading,children:[n.loading&&(0,Z.jsx)(b.Z,{sx:{color:"#0000001f",mr:"10px"},size:"15px"}),d.cogs_id?"Update":"Add"]})]})]})]})},k=i(6165),z=i(65954),w=i(43997),T=i(15743),A=i(57009),V=i(25660),E=i(68781),P=i(473),N=i(16031),D=i(15016);var M=()=>{var e;const[o,i]=(0,l.useState)(null),[h,x]=(0,l.useState)([]),[g,f]=(0,l.useState)(!1),[_,j]=(0,l.useState)({}),[b,y]=(0,l.useState)(),[C,S]=(0,l.useState)(!1),[M,F]=(0,l.useState)(!0),[L,G]=(0,l.useState)(""),H=(0,p.CG)((e=>e.sellerItemSlice.list)),O=(0,p.TL)(),R=(0,p.CG)((e=>e.authorization)),B=null===R||void 0===R||null===(e=R.userData)||void 0===e?void 0:e.data,$=(0,p.CG)((e=>e.dataLoading)),W=(0,p.CG)((e=>e.dashboardSlice.storeId)),J=JSON.parse(localStorage.getItem("sortActions_cogs"));(0,l.useEffect)((()=>{Array.isArray(W)&&0===W.length||S(!0)}),[W]),(0,l.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("user_data"));if(C){var o;let i={store_id:W||(null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.store_id),filter:{action:(null===J||void 0===J?void 0:J.action)||"sort",name:"cogs"==(null===b||void 0===b?void 0:b.name)?"cogs_amount":(null===b||void 0===b?void 0:b.name)||"id",direction:(null===b||void 0===b?void 0:b.direction.toLowerCase())||"desc"},lifecycle_status:M?"ACTIVE":"INACTIVE",limit:(null===b||void 0===b?void 0:b.limit)||10,page:(null===b||void 0===b?void 0:b.page)||0,search:L||""};O((0,k.sg)(i))}}),[W,b,C,M]),(0,l.useEffect)((()=>{H&&null!==H&&void 0!==H&&H.data&&H.data.length>0?x(H.data.map(((e,o)=>[e,e.gtin,e.item_id,e.price,e.cogs_amount,e,o]))):x([])}),[H]);const U=e=>{F(e.target.checked)},q=()=>{i(null),j({})},K=()=>{f(!g)},Q=e=>{const o=e.target.files[0];if(o)if(o&&o.name.endsWith(".xlsx")){var i,l;const e=new FormData;e.append("file",o),e.append("store_id",W);let t={store_id:W||(null===(i=storedValue)||void 0===i||null===(l=i.data)||void 0===l?void 0:l.store_id),filter:{action:(null===J||void 0===J?void 0:J.action)||"sort",name:"cogs"==(null===b||void 0===b?void 0:b.name)?"cogs_amount":(null===b||void 0===b?void 0:b.name)||"id",direction:(null===b||void 0===b?void 0:b.direction.toLowerCase())||"desc"},lifecycle_status:M?"ACTIVE":"INACTIVE",limit:(null===b||void 0===b?void 0:b.limit)||10,page:(null===b||void 0===b?void 0:b.page)||0,search:(null===b||void 0===b?void 0:b.search)||""};O((0,k.at)({formData:e,store:t}))}else alert("Please select a valid CSV file."),e.target.value=""},X=[{name:"product_name",label:"Product",options:{sort:!0,setCellProps:()=>({style:{background:"#fff",fontSize:"0.75rem",position:"sticky",left:0,zIndex:1}}),filter:!0,customHeadRender:e=>(0,Z.jsx)("th",{style:{position:"sticky",top:0,background:"#fff",zIndex:999,left:0,borderBottom:"1px solid rgba(224, 224, 224, 1)",fontWeight:500,fontSize:"13px"},children:e.label},e.index),customBodyRender:e=>{const o=e&&(null===e||void 0===e?void 0:e.item_page_url);return(0,Z.jsxs)(T.Z,{sx:{display:"flex"},children:[(0,Z.jsx)(T.Z,{sx:{mr:"5px"},children:(0,Z.jsx)("button",{style:{padding:"0"},className:"custom-cell",onClick:()=>openNewTabAddCredi(null===e||void 0===e?void 0:e.product_url),onKeyDown:o=>{"Enter"!==o.key&&"Space"!==o.key||openNewTabAddCredi(null===e||void 0===e?void 0:e.product_url)},tabIndex:0,children:(0,Z.jsx)("img",{src:null===e||void 0===e?void 0:e.primary_image_url,alt:"Product",style:{border:"1px solid rgba(224, 224, 224, 1)",maxWidth:"35px",maxHeight:"40px",width:"35px",height:"38px"}})})}),(0,Z.jsx)(T.Z,{children:(0,Z.jsxs)("div",{className:"custom-cell",children:[(0,Z.jsx)(n.Z,{title:null===e||void 0===e?void 0:e.product_name,enterDelay:500,children:(0,Z.jsxs)("a",{href:o,onClick:e=>{e.preventDefault(),window.open(o,"_blank","noopener noreferrer")},style:{display:"flex",alignItems:"center"},children:[(0,Z.jsx)(a.Z,{style:{fontSize:"0.75rem"},children:(0,D.HR)(null===e||void 0===e?void 0:e.product_name)}),(0,Z.jsx)(A.Z,{fontSize:"small"})]})}),(0,Z.jsxs)(T.Z,{sx:{display:"flex"},children:[(0,Z.jsxs)(a.Z,{style:{fontSize:"0.75rem"},variant:"body2",children:["ITEM ID: ",null===e||void 0===e?void 0:e.item_id," ||\xa0"]}),(0,Z.jsxs)(a.Z,{style:{fontSize:"0.75rem"},variant:"body2",children:["SKU: ",null===e||void 0===e?void 0:e.sku]})]})]})})]})}}},{name:"gtin",label:"GTIN",options:{filter:!0,sort:!0}},{name:"item_id",label:"Item Id",options:{filter:!0,sort:!0}},{name:"price",label:"Price",options:{filter:!0,sort:!0,customBodyRender:e=>(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(a.Z,{children:e?`$${e}`:"$0.00"})})}},{name:"cogs",label:"CoGS",options:{filter:!0,sort:!0,customBodyRender:e=>(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(a.Z,{children:e?`$${e}`:"$0.00"})})}},{name:"actions",label:"Action",options:{filter:!0,sort:!1,customBodyRender:e=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(s.Z,{onClick:o=>((e,o)=>{i(e.currentTarget),j(o)})(o,e),children:(0,Z.jsx)(w.Z,{})}),(0,Z.jsx)(r.Z,{id:"lock-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:q,children:(0,Z.jsxs)(c.Z,{onClick:()=>(f(!g),void i(!o)),children:[(0,Z.jsx)(z.Z,{color:"primary"}),null!==_&&void 0!==_&&_.cogs_id?"Edit Cogs":"Add Cogs"]})})]})}}],Y={tableBodyHeight:"calc(100vh - 324px)",selectableRows:"none",print:!1,download:!1,filter:!1,count:null===H||void 0===H?void 0:H.count,serverSide:!0,rowsPerPageOptions:[10,20,30],onTableChange:(0,N.debounce)(((e,o)=>{if("search"===e||"sort"===e||"changeRowsPerPage"==e||"changePage"==e){var i,l,t;let d={action:e,page:null===o||void 0===o?void 0:o.page,search:null!==(i=null===o||void 0===o?void 0:o.searchText)&&void 0!==i?i:"",limit:null===o||void 0===o?void 0:o.rowsPerPage,name:void 0!==(null===o||void 0===o||null===(l=o.sortOrder)||void 0===l?void 0:l.name)?o.sortOrder.name:"",direction:void 0!==(null===o||void 0===o||null===(t=o.sortOrder)||void 0===t?void 0:t.direction)?null===o||void 0===o?void 0:o.sortOrder.direction.toUpperCase():""};y(d),localStorage.setItem("sortActions_cogs",JSON.stringify(d)),G(null===o||void 0===o?void 0:o.searchText)}}),1e3),customToolbar:()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(u.Z,{sx:{mr:1},control:(0,Z.jsx)(v.Z,{checked:M,onChange:U,name:"mySwitch",color:"primary"}),label:"Active",labelPlacement:"start"}),2==(null===B||void 0===B?void 0:B.user_type)&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(m.Z,{size:"small",disabled:(null===H||void 0===H?void 0:H.count)<=0,variant:"outlined",component:"span",onClick:()=>(()=>{var e,o;let i={store_id:W||(null===(e=storedValue)||void 0===e||null===(o=e.data)||void 0===o?void 0:o.store_id),lifecycle_status:M?"ACTIVE":"INACTIVE"};O((0,k.TB)(i))})(),children:[(0,Z.jsx)(V.Z,{fontSize:"small"}),"Export CoGS"]}),(0,Z.jsx)("input",{type:"file",accept:".xlsx",style:{display:"none"},onChange:Q,id:"fileInput"}),(0,Z.jsx)("label",{htmlFor:"fileInput",children:(0,Z.jsxs)(m.Z,{size:"small",sx:{ml:"5px"},variant:"contained",component:"span",children:[(0,Z.jsx)(E.Z,{fontSize:"small"}),"Import CoGS"]})})]})]})};return(0,Z.jsxs)(Z.Fragment,{children:[(null===$||void 0===$?void 0:$.loading)&&(0,Z.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:9999},children:(0,Z.jsx)(P.Z,{})}),(0,Z.jsxs)(d.Z,{title:"CoGS",children:[(0,Z.jsx)(t.ZP,{className:"pnl-by-item",actions:[{icon:"save"}],data:h,columns:X,options:Y}),g&&(0,Z.jsx)(I,{open:g,handleClose:K,updateSeller:e=>{var o,i;const l=JSON.parse(localStorage.getItem("user_data"));null!==e&&void 0!==e&&e.cogs_id?O((0,k.jP)({data:{product_id:null===e||void 0===e?void 0:e.id,amount:null===e||void 0===e?void 0:e.cogs_amount,store_id:null===e||void 0===e?void 0:e.store_id,id:null===e||void 0===e?void 0:e.cogs_id},callbackFunc:K,store:{store_id:W||(null===l||void 0===l||null===(o=l.data)||void 0===o?void 0:o.store_id),filter:{action:(null===J||void 0===J?void 0:J.action)||"sort",name:"cogs"==(null===b||void 0===b?void 0:b.name)?"cogs_amount":(null===b||void 0===b?void 0:b.name)||"id",direction:(null===b||void 0===b?void 0:b.direction.toLowerCase())||"desc"},lifecycle_status:M?"ACTIVE":"INACTIVE",limit:(null===b||void 0===b?void 0:b.limit)||10,page:(null===b||void 0===b?void 0:b.page)||0,search:(null===b||void 0===b?void 0:b.search)||""}})):O((0,k.jP)({data:{product_id:null===e||void 0===e?void 0:e.id,amount:null===e||void 0===e?void 0:e.cogs_amount,store_id:null===e||void 0===e?void 0:e.store_id},callbackFunc:K,store:{store_id:W||(null===l||void 0===l||null===(i=l.data)||void 0===i?void 0:i.store_id),filter:{action:(null===J||void 0===J?void 0:J.action)||"sort",name:"cogs"==(null===b||void 0===b?void 0:b.name)?"cogs_amount":(null===b||void 0===b?void 0:b.name)||"id",direction:(null===b||void 0===b?void 0:b.direction.toLowerCase())||"desc"},lifecycle_status:M?"ACTIVE":"INACTIVE",limit:(null===b||void 0===b?void 0:b.limit)||10,page:(null===b||void 0===b?void 0:b.page)||0,search:(null===b||void 0===b?void 0:b.search)||""}}))},sellerData:_})]})]})}},65954:function(e,o,i){var l=i(64836);o.Z=void 0;var t=l(i(45045)),d=i(46417),n=(0,t.default)((0,d.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");o.Z=n},25660:function(e,o,i){var l=i(64836);o.Z=void 0;var t=l(i(45045)),d=i(46417),n=(0,t.default)((0,d.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"FileDownload");o.Z=n},57009:function(e,o,i){var l=i(64836);o.Z=void 0;var t=l(i(45045)),d=i(46417),n=(0,t.default)((0,d.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");o.Z=n},43997:function(e,o,i){var l=i(64836);o.Z=void 0;var t=l(i(45045)),d=i(46417),n=(0,t.default)((0,d.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");o.Z=n},68781:function(e,o,i){var l=i(64836);o.Z=void 0;var t=l(i(45045)),d=i(46417),n=(0,t.default)((0,d.jsx)("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"}),"Upload");o.Z=n}}]);