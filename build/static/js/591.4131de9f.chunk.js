"use strict";(self.webpackChunkmetrics=self.webpackChunkmetrics||[]).push([[591],{19591:function(e,l,i){i.r(l);var t=i(47313),o=i(47605),n=i(69173),a=i(67426),d=i(80836),s=i(19641),r=i(8047),c=i(71003),v=i(98668),u=i(15743),m=i(57009),h=i(14647),x=i(7794),g=i(33497),p=i(48420),f=i(6165),j=i(40789),b=i(473),y=i(97890),S=i(46417);l.default=()=>{const[e,l]=(0,t.useState)([]),[i,Z]=(0,t.useState)(),[C,w]=(0,t.useState)(!1),[k,_]=(0,t.useState)(!0),[I,O]=(0,t.useState)(""),[P,T]=(0,t.useState)([]),N=(0,p.CG)((e=>e.sellerItemSlice.list)),A=(0,p.TL)(),z=(0,p.CG)((e=>e.dataLoading)),E=(0,p.CG)((e=>e.dashboardSlice.storeId)),H=JSON.parse(localStorage.getItem("sortActions_cogs")),L=(0,y.s0)();(0,t.useEffect)((()=>{Array.isArray(E)&&0===E.length||w(!0)}),[E]),(0,t.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("user_data"));if(C){var l,t,o;let n={store_id:E||(null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.store_id),filter:{action:(null===H||void 0===H?void 0:H.action)||"sort",name:(null===H||void 0===H||null===(t=H.sortOrder)||void 0===t?void 0:t.name)||"id",direction:(null===H||void 0===H||null===(o=H.sortOrder)||void 0===o?void 0:o.direction)||"desc"},lifecycle_status:k?"ACTIVE":"INACTIVE",limit:(null===i||void 0===i?void 0:i.limit)||10,page:(null===i||void 0===i?void 0:i.page)||0,search:(null===i||void 0===i?void 0:i.search)||""};A((0,f.sg)(n))}}),[E,i,C,k]),(0,t.useEffect)((()=>{null!==N&&void 0!==N&&N.data&&N.data.length>0?l(N.data.map((e=>[e]))):l([])}),[N]);const V=e=>{_(e.target.checked)},J=[{name:"product_name",label:"Product",options:{sort:!0,filter:!0,customBodyRender:e=>(0,S.jsxs)(u.Z,{sx:{display:"flex"},children:[(0,S.jsx)(u.Z,{sx:{mr:"5px"},children:(0,S.jsx)("button",{style:{padding:"0"},className:"custom-cell",onClick:()=>openNewTabAddCredi(null===e||void 0===e?void 0:e.product_url),onKeyDown:l=>{"Enter"!==l.key&&"Space"!==l.key||openNewTabAddCredi(null===e||void 0===e?void 0:e.product_url)},tabIndex:0,children:(0,S.jsx)("img",{src:(null===e||void 0===e?void 0:e.primary_image_url)||(null===e||void 0===e?void 0:e.image),alt:"Product",style:{border:"1px solid rgba(224, 224, 224, 1)",maxWidth:"35px",maxHeight:"40px",width:"35px",height:"38px"}})})}),(0,S.jsx)(u.Z,{children:(0,S.jsxs)("div",{className:"custom-cell",children:[(0,S.jsxs)("a",{href:null===e||void 0===e?void 0:e.item_page_url,onClick:l=>handleLinkClick(l,null===e||void 0===e?void 0:e.item_page_url),style:{display:"flex",alignItems:"center"},children:[(0,S.jsx)(o.Z,{style:{fontSize:"0.75rem"},children:null===e||void 0===e?void 0:e.product_name}),(0,S.jsx)(m.Z,{fontSize:"small"})]}),(0,S.jsxs)(u.Z,{sx:{display:"flex"},children:[(0,S.jsxs)(o.Z,{style:{fontSize:"0.75rem"},variant:"body2",children:["ITEM ID: ",null===e||void 0===e?void 0:e.item_id," ||\xa0"]}),(0,S.jsxs)(o.Z,{style:{fontSize:"0.75rem"},variant:"body2",children:["SKU: ",null===e||void 0===e?void 0:e.sku]})]})]})})]})}}],R={filterType:"checkbox",selectableRows:!0,tableBodyHeight:"calc(100vh - 344px)",print:!1,download:!1,filter:!1,count:null===N||void 0===N?void 0:N.count,serverSide:!0,rowsPerPageOptions:[10,20,30],selectToolbarPlacement:"none",rowHover:!0,onTableChange:(e,l)=>{if("search"===e||"sort"===e||"changeRowsPerPage"==e||"changePage"==e){var i,t,o;let n={action:e,page:null===l||void 0===l?void 0:l.page,search:null!==(i=null===l||void 0===l?void 0:l.searchText)&&void 0!==i?i:"",limit:null===l||void 0===l?void 0:l.rowsPerPage,name:void 0!==(null===l||void 0===l||null===(t=l.sortOrder)||void 0===t?void 0:t.name)?l.sortOrder.name:"",direction:void 0!==(null===l||void 0===l||null===(o=l.sortOrder)||void 0===o?void 0:o.direction)?null===l||void 0===l?void 0:l.sortOrder.direction.toUpperCase():""};Z(n),localStorage.setItem("sortActions_cogs",JSON.stringify(n))}},customToolbarSelect:()=>null,customToolbar:()=>(0,S.jsx)(n.Z,{sx:{mr:1},control:(0,S.jsx)(a.Z,{checked:k,onChange:V,name:"mySwitch",color:"primary"}),label:"Active",labelPlacement:"start"}),onRowClick:(e,l)=>{var i;let t=JSON.parse(JSON.stringify(P)),o=null===N||void 0===N||null===(i=N.data[null===l||void 0===l?void 0:l.rowIndex])||void 0===i?void 0:i.id;const n=t.indexOf(o);-1===n?t.push(o):t.splice(n,1),T(t)},onRowSelectionChange:(e,l,i)=>{const t=i.map((e=>{var l,i;return null===N||void 0===N||null===(l=N.data)||void 0===l||null===(i=l[e])||void 0===i?void 0:i.id}));return T(t),null}};if(null!==P&&void 0!==P&&P.length){const e=[];P.map((l=>{var i;const t=null===N||void 0===N||null===(i=N.data)||void 0===i?void 0:i.findIndex((e=>e.id===l));e.push(t)})),null!==e&&void 0!==e&&e.length&&Object.assign(R,{rowsSelected:e})}else Object.assign(R,{rowsSelected:[]});return(0,S.jsxs)(S.Fragment,{children:[(null===z||void 0===z?void 0:z.loading)&&(0,S.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:9999},children:(0,S.jsx)(b.Z,{})}),(0,S.jsxs)(g.Z,{title:(0,S.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,S.jsx)(d.Z,{onClick:()=>{L("/pnl-tags")},children:(0,S.jsx)(h.Z,{})}),"Create Tags"]}),className:"create-table-wrapper",children:[(0,S.jsxs)(s.ZP,{container:!0,justifyContent:"center",alignItems:"center",children:[(0,S.jsx)(s.ZP,{item:!0,xs:6,children:(0,S.jsx)(r.Z,{label:"Tag name",name:"name",fullWidth:!0,value:I,onChange:e=>{(e=>{O(e.target.value)})(e)}})}),(0,S.jsx)(s.ZP,{item:!0,xs:6,children:(0,S.jsxs)(c.Z,{sx:{ml:2},variant:"contained",disabled:z.loading||!I,onClick:()=>(()=>{if(null===I||void 0===I||!I.trim())return void A((0,j.tK)("Blank tag name not allowed."));let e={name:null===I||void 0===I?void 0:I.trim(),product_id:P};A((0,f._c)({store:e,navigate:L}))})(),children:[z.loading&&(0,S.jsx)(v.Z,{sx:{color:"#0000001f",mr:"10px"},size:"15px"}),"Create Tag"]})})]}),(0,S.jsx)(x.ZP,{className:"pnl-by-item create-table",actions:[{icon:"save"}],data:e,columns:J,options:R})]})]})}},14647:function(e,l,i){var t=i(64836);l.Z=void 0;var o=t(i(45045)),n=i(46417),a=(0,o.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");l.Z=a},57009:function(e,l,i){var t=i(64836);l.Z=void 0;var o=t(i(45045)),n=i(46417),a=(0,o.default)((0,n.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");l.Z=a}}]);