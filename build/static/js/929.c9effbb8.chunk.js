"use strict";(self.webpackChunkmetrics=self.webpackChunkmetrics||[]).push([[929],{929:function(o,l,i){i.r(l);var t=i(47313),a=i(7794),e=i(48420),n=i(33497),d=i(70816),s=i.n(d),r=i(17714),v=i(47605),u=i(42988),c=i(70941),_=i(49709),p=i(69173),m=i(71003),x=i(97741),h=i(52994),g=i(57204),y=i(47992),f=i(68721),b=i(15743),j=i(25660),Z=i(40242),S=i(17592),k=i(17551),M=i(19860),z=i(67426),F=i(6165),D=i(43638),Y=i(72445),C=i(473),R=i(16031),w=i(57009),A=i(15016),P=i(29428),B=i(46417);const N=(0,S.ZP)((o=>(0,B.jsx)(r.Z,{elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},...o})))((o=>{let{theme:l}=o;return{"& .MuiPaper-root":{borderRadius:6,marginTop:l.spacing(1),minWidth:180,color:"light"===l.palette.mode?"rgb(55, 65, 81)":l.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:l.palette.text.secondary,marginRight:l.spacing(1.5)},"&:active":{backgroundColor:(0,k.Fq)(l.palette.primary.main,l.palette.action.selectedOpacity)}}}}})),W=[{name:"product_category",label:"Category"},{name:"shelf_name",label:"Category Path"},{name:"product_type",label:"Product Type"}];l.default=()=>{const o=(0,M.Z)(),[l,i]=(0,t.useState)([]),[d,r]=(0,t.useState)(),[S,k]=(0,t.useState)(!1),[I,$]=(0,t.useState)(!1),[O,L]=(0,t.useState)(W||[]),[T,H]=(0,t.useState)(""),[U,E]=(0,t.useState)(W.length>0?W[0].name:""),[V,J]=(0,t.useState)({child_count:!0,product_category:!0,average_price:!0,avg_size:!0,ad_sales:!1,product_price:!0,total_amount_sale:!0,units_sold:!0,ad_spend:!1,total_commission_amount:!1,total_dispute_amount:!1,total_return_amount:!1,total_wfs_amount:!1,cogs_total:!1,cap_total:!1,ad_units:!1,total_sales_order:!0,adv_orders:!1,organic_sales:!1,organic_sales_percentage:!1,roas:!1,tacos:!0,troas:!0,acos:!1,impressions:!1,total_clicks:!1,ctr:!1,cvr_oder:!1,cvr_unit:!1,return_unit:!0,shipping_total:!1,profit_margin:!1,total_pnl:!0}),G=(0,e.TL)(),K=(0,e.CG)((o=>o.dashboardSlice.ppcCategoryData)),q=(0,e.CG)((o=>o.dataLoading)),Q=(0,e.CG)((o=>o.dashboardSlice.date)),X=(0,e.CG)((o=>o.dashboardSlice.storeId)),oo=["ad_spend"],lo=["average_price","ad_units","adv_orders","organic_sales","roas","troas","acos","tacos","impressions","total_clicks","ctr","cvr_oder","organic_sales_percentage","cvr_unit","units_sold","return_unit"],io=["acos","tacos","total_wfs_amount","shipping_total","total_commission_amount","total_return_amount"],to=["average_price","ad_spend","impressions","return_unit"],ao=["avg_size","adv_orders","ad_units","impressions","total_clicks","units_sold","return_unit"];(0,t.useEffect)((()=>{L(W||[])}),[W]),(0,t.useEffect)((()=>{if(Q){if(Array.isArray(X)&&0===X.length)return;k(!0)}}),[X]);const eo=o=>{$(o.target.checked)};(0,t.useEffect)((()=>{if(S){var o,l,i;const t=JSON.parse(localStorage.getItem("user_data")),a=JSON.parse(localStorage.getItem("sortActions_ppc"));let e={startDate:null!==Q&&void 0!==Q&&Q.startDate?s()(null===Q||void 0===Q?void 0:Q.startDate).format("YYYY-MM-DD"):s()().subtract(6,"days").format("YYYY-MM-DD"),endDate:null!==Q&&void 0!==Q&&Q.endDate?s()(null===Q||void 0===Q?void 0:Q.endDate).format("YYYY-MM-DD"):s()().startOf("day").format("YYYY-MM-DD"),comparison_startDate:null!==Q&&void 0!==Q&&Q.comparison_startDate?s()(null===Q||void 0===Q?void 0:Q.comparison_startDate).format("YYYY-MM-DD"):s()().subtract(13,"days").format("YYYY-MM-DD"),comparison_endDate:null!==Q&&void 0!==Q&&Q.comparison_endDate?s()(null===Q||void 0===Q?void 0:Q.comparison_endDate).format("YYYY-MM-DD"):s()().startOf(7,"day").format("YYYY-MM-DD"),store_id:X||(null===t||void 0===t||null===(o=t.data)||void 0===o?void 0:o.store_id),group_by:U,filter:{action:(null===a||void 0===a?void 0:a.action)||"sort",name:(null===a||void 0===a||null===(l=a.sortOrder)||void 0===l?void 0:l.name)||"ad_spend",direction:(null===a||void 0===a||null===(i=a.sortOrder)||void 0===i?void 0:i.direction)||"desc"},search:T,limit:(null===d||void 0===d?void 0:d.limit)||10,page:(null===d||void 0===d?void 0:d.page)||0};G((0,Z.B1)(e))}}),[Q,X,S,d,U]),(0,t.useEffect)((()=>{var o,l;K&&null!==K&&void 0!==K&&K.data&&(null===K||void 0===K||null===(o=K.data)||void 0===o?void 0:o.length)>0?i(null===K||void 0===K||null===(l=K.data)||void 0===l?void 0:l.map((o=>[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o]))):i([])}),[K]);const no=(l,i,t)=>{const a=null!==ao&&void 0!==ao&&ao.includes(t)?l:l.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),e=null!==ao&&void 0!==ao&&ao.includes(t)?i:i.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),n="string"===typeof a&&a.includes("-")?a.replace("-",""):a,d="string"===typeof e&&e.includes("-")?e.replace("-",""):e,s=null===K||void 0===K?void 0:K.formation[t];let r="$"==s?s+n:"%"==s?n+s:n,u="$"==s?s+d:"%"==s?d+s:d,c=null!==oo&&void 0!==oo&&oo.includes(t)&&0!=l||l<0?"-"+r:r,_=null!==oo&&void 0!==oo&&oo.includes(t)&&0!=i||i<0?"-"+u:u,p=null!==oo&&void 0!==oo&&oo.includes(t)?-Math.abs(l):l,m=(l-i)/i*100,x="";return x=isFinite(m)?to.includes(t)?"grey":io.includes(t)?m>0?o.palette.error.dark:m<0?o.palette.success.dark:"grey":m>0?o.palette.success.dark:m<0?o.palette.error.dark:"grey":"grey",(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(b.Z,{sx:{display:"flex"},children:[(0,B.jsx)(v.Z,{style:{fontSize:"0.75rem",textAlign:"center",color:0==l||lo.includes(t)?"black":p>0?o.palette.success.dark:o.palette.orange.dark},children:isFinite(l)?c:"N/A"}),(0,B.jsxs)(v.Z,{sx:{display:"flex",marginLeft:"10px"},children:[isFinite(m)?Math.round(m)>0?(0,B.jsx)(v.Z,{sx:{color:to.includes(t)?"grey":io.includes(t)?o.palette.error.dark:o.palette.success.dark,fontSize:"0.70rem"},children:(0,B.jsx)(Y.Z,{fontSize:"small",sx:{width:"0.8rem",height:"0.8rem"}})}):Math.round(m)<0&&(0,B.jsx)(v.Z,{sx:{color:to.includes(t)?"grey":io.includes(t)?o.palette.success.dark:o.palette.error.dark,fontSize:"0.70rem"},children:(0,B.jsx)(D.Z,{fontSize:"small",sx:{width:"0.8rem",height:"0.8rem"}})}):"",(0,B.jsx)(v.Z,{style:{color:x,fontSize:"0.70rem",textAlign:"center"},children:m?isFinite(m)?`${Math.round(m)}%`:"N/A":"0%"})]})]}),I&&(0,B.jsx)(v.Z,{style:{textAlign:"left",fontSize:"0.6rem",color:"black"},children:isFinite(i)?_:"N/A"})]})},so=[{name:"child_count",label:"No. of Items",options:{setCellProps:()=>({style:{background:"#fff",fontSize:"0.75rem",position:"sticky",left:0,zIndex:1}}),filter:!0,sort:!0,display:V.child_count,customHeadRender:o=>(0,B.jsx)("th",{style:{position:"sticky",top:0,background:"#fff",zIndex:999,left:0,borderBottom:"1px solid rgba(224, 224, 224, 1)",fontWeight:500,fontSize:"13px"},children:o.label},o.index),customBodyRender:o=>(0,B.jsx)(v.Z,{children:null===o||void 0===o?void 0:o.child_count})}},{name:"product_category",label:"Product Category",options:{setCellProps:()=>({style:{background:"#fff",minWidth:"200px",maxWidth:"200px",fontSize:"0.75rem",position:"sticky",left:0,zIndex:1}}),filter:!0,sort:!0,display:V.product_category,customHeadRender:o=>(0,B.jsx)("th",{style:{position:"sticky",top:0,background:"#fff",zIndex:999,left:0,borderBottom:"1px solid rgba(224, 224, 224, 1)",fontWeight:500,fontSize:"13px"},children:o.label},o.index),customBodyRender:o=>{const l=(null===o||void 0===o?void 0:o.product_category)||(null===o||void 0===o?void 0:o.shelf_name)||(null===o||void 0===o?void 0:o.product_type);return(0,B.jsx)(b.Z,{sx:{display:"flex"},children:(0,B.jsx)(v.Z,{style:{fontSize:"0.75rem",display:"flex"},variant:"body2",children:l})})}}},{name:"average_price",label:"Average Price",options:{setCellProps:()=>({style:{minWidth:"105px",maxWidth:"200px"}}),filter:!0,sort:!0,display:V.average_price,customBodyRender:o=>no(null===o||void 0===o?void 0:o.average_price,null===o||void 0===o?void 0:o.comparison_average_price,"average_price")}},{name:"avg_size",label:"Avg Order Size",options:{filter:!0,sort:!0,setCellProps:()=>({style:{minWidth:"107px",maxWidth:"200px"}}),display:V.avg_size,customBodyRender:o=>no(null===o||void 0===o?void 0:o.avg_size.toFixed(2),null===o||void 0===o?void 0:o.comparison_avg_size.toFixed(2),"avg_size")}},{name:"ad_sales",label:"Ad Sales",options:{display:V.ad_sales,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.ad_sales,null===o||void 0===o?void 0:o.comparison_ad_sales,"ad_sales")}},{name:"product_price",label:"Current Price",options:{display:V.product_price,setCellProps:()=>({style:{minWidth:"105px",maxWidth:"200px"}}),filter:!0,sort:!0,customBodyRender:o=>(0,B.jsx)(b.Z,{sx:{display:"flex"},children:(0,B.jsx)(v.Z,{style:{fontSize:"0.75rem",textAlign:"center"},children:0!==(null===o||void 0===o?void 0:o.product_price)?`$${null===o||void 0===o?void 0:o.product_price.toFixed(2)}`:"$0.00"})})}},{name:"total_amount_sale",label:"Sales",options:{filter:!0,sort:!0,display:V.total_amount_sale,customBodyRender:o=>no(null===o||void 0===o?void 0:o.total_amount_sale,null===o||void 0===o?void 0:o.comparison_total_amount_sale,"total_amount_sale")}},{name:"units_sold",label:"Units Sold",options:{display:V.units_sold,setCellProps:()=>({style:{minWidth:"90px",maxWidth:"200px"}}),filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.units_sold,null===o||void 0===o?void 0:o.comparison_units_sold,"units_sold")}},{name:"ad_spend",label:"Ad Spend",options:{filter:!0,sort:!0,display:V.ad_spend,customBodyRender:o=>no(null===o||void 0===o?void 0:o.ad_spend,null===o||void 0===o?void 0:o.comparison_ad_spend,"ad_spend")}},{name:"total_commission_amount",label:"Commission",options:{display:V.total_commission_amount,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.total_commission_amount,null===o||void 0===o?void 0:o.comparison_total_commission_amount,"total_commission_amount")}},{name:"total_dispute_amount",label:"Dispute",options:{display:V.total_dispute_amount,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.total_dispute_amount,null===o||void 0===o?void 0:o.comparison_total_dispute_amount,"total_dispute_amount")}},{name:"total_return_amount",label:"Returns",options:{display:V.total_return_amount,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.total_return_amount,null===o||void 0===o?void 0:o.comparison_total_return_amount,"total_return_amount")}},{name:"total_wfs_amount",label:"WFS Fees",options:{setCellProps:()=>({style:{minWidth:"85px",maxWidth:"200px"}}),display:V.total_wfs_amount,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.total_wfs_amount,null===o||void 0===o?void 0:o.comparison_total_wfs_amount,"total_wfs_amount")}},{name:"cogs_total",label:"CoGS",options:{display:V.cogs_total,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.cogs_total,null===o||void 0===o?void 0:o.comparison_cogs_total,"cogs_total")}},{name:"cap_total",label:"CAP",options:{filter:!0,sort:!0,display:V.cap_total,customBodyRender:o=>no(null===o||void 0===o?void 0:o.cap_total,null===o||void 0===o?void 0:o.comparison_cap_total,"cap_total")}},{name:"ad_units",label:"Ad Units",options:{display:V.ad_units,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.ad_units,null===o||void 0===o?void 0:o.comparison_ad_units,"ad_units")}},{name:"total_sales_order",label:"Orders",options:{display:V.total_sales_order,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.total_sales_order,null===o||void 0===o?void 0:o.comparison_total_sales_order,"total_sales_order")}},{name:"adv_orders",label:"Ad Orders",options:{setCellProps:()=>({style:{minWidth:"90px",maxWidth:"200px"}}),display:V.adv_orders,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.adv_orders,null===o||void 0===o?void 0:o.comparison_adv_orders,"adv_orders")}},{name:"organic_sales",label:"Organic Sales",options:{display:V.organic_sales,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.organic_sales,null===o||void 0===o?void 0:o.comparison_organic_sales,"organic_sales")}},{name:"organic_sales_percentage",label:"Organic Sales %",options:{setCellProps:()=>({style:{minWidth:"115px",maxWidth:"200px"}}),display:V.organic_sales_percentage,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.organic_sales_percentage,null===o||void 0===o?void 0:o.comparison_organic_sales_percentage,"organic_sales_percentage")}},{name:"roas",label:"RoAS",options:{display:V.roas,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.roas,null===o||void 0===o?void 0:o.comparison_roas,"roas")}},{name:"tacos",label:"TACoS",options:{display:V.tacos,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.tacos,null===o||void 0===o?void 0:o.comparison_tacos,"tacos")}},{name:"troas",label:"TRoAS",options:{display:V.troas,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.troas,null===o||void 0===o?void 0:o.comparison_troas,"troas")}},{name:"acos",label:"ACoS",options:{display:V.acos,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.acos,null===o||void 0===o?void 0:o.comparison_acos,"acos")}},{name:"impressions",label:"Impressions",options:{display:V.impressions,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.impressions,null===o||void 0===o?void 0:o.comparison_impressions,"impressions")}},{name:"total_clicks",label:"Clicks",options:{display:V.total_clicks,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.total_clicks,null===o||void 0===o?void 0:o.comparison_total_clicks,"total_clicks")}},{name:"ctr",label:"CTR",options:{display:V.ctr,filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.ctr,null===o||void 0===o?void 0:o.comparison_ctr,"ctr")}},{name:"cvr_oder",label:"CVR (Orders)",options:{display:V.cvr_oder,setCellProps:()=>({style:{minWidth:"100px",maxWidth:"200px"}}),filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.cvr_oder,null===o||void 0===o?void 0:o.comparison_cvr_oder,"cvr_oder")}},{name:"cvr_unit",label:"CVR (Units)",options:{display:V.cvr_unit,setCellProps:()=>({style:{minWidth:"100px",maxWidth:"200px"}}),filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.cvr_unit,null===o||void 0===o?void 0:o.comparison_cvr_unit,"cvr_unit")}},{name:"return_unit",label:"Returned Units",options:{display:V.return_unit,setCellProps:()=>({style:{minWidth:"108px",maxWidth:"200px"}}),filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.return_unit,null===o||void 0===o?void 0:o.comparison_return_unit,"return_unit")}},{name:"shipping_total",label:"Shipping Fees",options:{display:V.shipping_total,setCellProps:()=>({style:{minWidth:"108px",maxWidth:"200px"}}),filter:!0,sort:!0,customBodyRender:o=>no(null===o||void 0===o?void 0:o.shipping_total,null===o||void 0===o?void 0:o.comparison_shipping_total,"shipping_total")}},{name:"profit_margin",label:"Profit Margin %",options:{display:V.profit_margin,setCellProps:()=>({style:{minWidth:"110px",maxWidth:"200px"}}),filter:!0,sort:!1,customBodyRender:l=>{const i=(null===l||void 0===l?void 0:l.total_pnl)/(null===l||void 0===l?void 0:l.total_amount_sale)*100,t=(null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(b.Z,{sx:{display:"flex"},children:[(0,B.jsx)(v.Z,{style:{fontSize:"0.75rem",textAlign:"center",color:l&&isFinite(i)?i>0?o.palette.success.dark:i<0?o.palette.error.dark:"grey":"grey"},children:null!==l&&void 0!==l&&l.total_pnl?isFinite(i)?`${parseFloat(i).toFixed(2)}%`:"N/A":"0.00%"}),(0,B.jsxs)(v.Z,{sx:{display:"flex",marginLeft:"10px"},children:[l&&isFinite((i-t)/Math.abs(t)*100)?Math.round((i-t)/Math.abs(t)*100)>0?(0,B.jsx)(v.Z,{sx:{color:o.palette.success.dark,fontSize:"0.70rem"},children:(0,B.jsx)(Y.Z,{fontSize:"small",sx:{width:"0.8rem",height:"0.8rem"}})}):(i-t)/Math.abs(t)*100<0&&(0,B.jsx)(v.Z,{sx:{color:o.palette.error.dark,fontSize:"0.70rem"},children:(0,B.jsx)(D.Z,{fontSize:"small",sx:{width:"0.8rem",height:"0.8rem"}})}):"",(0,B.jsx)(v.Z,{style:{color:l&&isFinite((i-t)/Math.abs(t)*100)?(i-t)/Math.abs(t)*100>0?o.palette.success.dark:(i-t)/Math.abs(t)*100<0?o.palette.error.dark:"grey":"grey",fontSize:"0.70rem",textAlign:"center"},children:i||t?isFinite(((i-t)/Math.abs(t)*100).toFixed(2))?`${Math.round((i-t)/Math.abs(t)*100)}%`:"N/A":"0%"})]})]}),I&&(0,B.jsx)(v.Z,{style:{fontSize:"0.6rem",textAlign:"left",color:l&&isFinite(t)?t>0?o.palette.success.dark:t<0?o.palette.error.dark:"grey":"grey"},children:(null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)?isFinite(t)?`${parseFloat(t).toFixed(2)}%`:"N/A":"0.00%"})]})}}},{name:"total_pnl",label:"Total Pnl",options:{display:V.total_pnl,filter:!0,sort:!1,customBodyRender:l=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(b.Z,{sx:{display:"flex"},children:[(0,B.jsx)(v.Z,{style:{fontSize:"0.75rem",fontWeight:700,textAlign:"center",color:0==(null===l||void 0===l?void 0:l.total_pnl)?"grey":(null===l||void 0===l?void 0:l.total_pnl)>0?o.palette.success.dark:o.palette.orange.dark},children:null!==l&&void 0!==l&&l.total_pnl?isFinite(null===l||void 0===l?void 0:l.total_pnl)?`${parseFloat(null===l||void 0===l?void 0:l.total_pnl)<0?"-$":"$"}${Math.abs(parseFloat(null===l||void 0===l?void 0:l.total_pnl)).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"N/A":"$0.00"}),(0,B.jsxs)(v.Z,{sx:{display:"flex",marginLeft:"10px"},children:[l&&isFinite(((null===l||void 0===l?void 0:l.total_pnl)-(null===l||void 0===l?void 0:l.comparison_total_pnl))/Math.abs(null===l||void 0===l?void 0:l.comparison_total_pnl)*100)?Math.round(((null===l||void 0===l?void 0:l.total_pnl)-(null===l||void 0===l?void 0:l.comparison_total_pnl))/Math.abs(null===l||void 0===l?void 0:l.comparison_total_pnl)*100)>0?(0,B.jsx)(v.Z,{sx:{color:o.palette.success.dark,fontSize:"0.70rem"},children:(0,B.jsx)(Y.Z,{fontSize:"small",sx:{width:"0.8rem",height:"0.8rem"}})}):((null===l||void 0===l?void 0:l.total_pnl)-(null===l||void 0===l?void 0:l.comparison_total_pnl))/Math.abs(null===l||void 0===l?void 0:l.comparison_total_pnl)*100<0&&(0,B.jsx)(v.Z,{sx:{color:o.palette.error.dark,fontSize:"0.70rem"},children:(0,B.jsx)(D.Z,{fontSize:"small",sx:{width:"0.8rem",height:"0.8rem"}})}):"",(0,B.jsx)(v.Z,{style:{color:l&&isFinite(((null===l||void 0===l?void 0:l.total_pnl)-(null===l||void 0===l?void 0:l.comparison_total_pnl))/Math.abs(null===l||void 0===l?void 0:l.comparison_total_pnl)*100)?((null===l||void 0===l?void 0:l.total_pnl)-(null===l||void 0===l?void 0:l.comparison_total_pnl))/Math.abs(null===l||void 0===l?void 0:l.comparison_total_pnl)*100>0?o.palette.success.dark:((null===l||void 0===l?void 0:l.total_pnl)-(null===l||void 0===l?void 0:l.comparison_total_pnl))/Math.abs(null===l||void 0===l?void 0:l.comparison_total_pnl)*100<0?o.palette.error.dark:"grey":"grey",fontSize:"0.70rem",textAlign:"center"},children:null!==l&&void 0!==l&&l.total_pnl||null!==l&&void 0!==l&&l.comparison_total_pnl?isFinite((((null===l||void 0===l?void 0:l.total_pnl)-(null===l||void 0===l?void 0:l.comparison_total_pnl))/Math.abs(null===l||void 0===l?void 0:l.comparison_total_pnl)*100).toFixed(2))?`${Math.round(((null===l||void 0===l?void 0:l.total_pnl)-(null===l||void 0===l?void 0:l.comparison_total_pnl))/Math.abs(null===l||void 0===l?void 0:l.comparison_total_pnl)*100)}%`:"N/A":"0%"})]})]}),I&&(0,B.jsx)(v.Z,{style:{fontSize:"0.6rem",fontWeight:700,textAlign:"left",color:0==(null===l||void 0===l?void 0:l.comparison_total_pnl)?"grey":(null===l||void 0===l?void 0:l.comparison_total_pnl)>0?o.palette.success.dark:o.palette.orange.dark},children:null!==l&&void 0!==l&&l.comparison_total_pnl?isFinite(null===l||void 0===l?void 0:l.comparison_total_pnl)?`${parseFloat(null===l||void 0===l?void 0:l.comparison_total_pnl)<0?"-$":"$"}${Math.abs(parseFloat(null===l||void 0===l?void 0:l.comparison_total_pnl)).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"N/A":"$0.00"})]})}}],ro=(o,l)=>{const i=null===K||void 0===K?void 0:K.formation[o];return"$"===i?void 0!==l&&null!==l?l<0?`-$${Math.abs(l).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")}`:`$${l.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")}`:"":"%"===i?void 0!==l&&null!==l?`${l.toFixed(2)}%`:"":"int"===i?void 0!==l&&null!==l?`${Math.round(l)}`:"":l},[vo,uo]=t.useState(null),co=Boolean(vo),_o=o=>{uo(o.currentTarget)},po=()=>{uo(null)},mo={tableBodyHeight:"calc(100vh - 310px)",selectableRows:"none",download:!1,stickyHeader:!0,count:null===K||void 0===K?void 0:K.count,print:!1,filter:!1,rowsPerPageOptions:[10,20,30],serverSide:!0,expandableRows:!0,renderExpandableRow:(l,i)=>{var t,a,e;return null===K||void 0===K||null===(t=K.data)||void 0===t||null===(a=t[null===i||void 0===i?void 0:i.rowIndex])||void 0===a||null===(e=a.child)||void 0===e?void 0:e.map((l=>{var i,t;return(0,B.jsxs)(u.Z,{sx:{background:"#F3F3F3"},children:[(0,B.jsx)(c.Z,{children:""}),(0,B.jsx)(c.Z,{children:""}),(null===V||void 0===V?void 0:V.product_category)&&(0,B.jsx)(c.Z,{style:{background:"#F3F3F3",position:"sticky",left:0,zIndex:1},children:(0,B.jsxs)(b.Z,{sx:{display:"flex"},children:[(0,B.jsx)(b.Z,{sx:{mr:"5px"},children:(0,B.jsx)("button",{style:{padding:"0"},className:"custom-cell",onClick:()=>openNewTabAddCredi(null===l||void 0===l?void 0:l.product_url),onKeyDown:o=>{"Enter"!==o.key&&"Space"!==o.key||openNewTabAddCredi(null===l||void 0===l?void 0:l.product_url)},tabIndex:0,children:(0,B.jsx)("img",{src:(null===l||void 0===l?void 0:l.primary_image_url)||(null===l||void 0===l?void 0:l.image),alt:"Product",style:{border:"1px solid rgba(224, 224, 224, 1)",maxWidth:"35px",maxHeight:"40px",width:"35px",height:"38px"}})})}),(0,B.jsx)(b.Z,{children:(0,B.jsxs)("div",{className:"custom-cell",children:[(0,B.jsx)(_.Z,{title:null===l||void 0===l?void 0:l.product_name,enterDelay:500,children:(0,B.jsxs)("a",{href:null===l||void 0===l?void 0:l.product_url,onClick:o=>handleLinkClick(o,null===l||void 0===l?void 0:l.product_url),style:{display:"flex",alignItems:"center"},children:[(0,B.jsx)(v.Z,{style:{fontSize:"0.75rem"},children:(0,A.HR)(null===l||void 0===l?void 0:l.product_name)}),(0,B.jsx)(w.Z,{fontSize:"small"})]})}),(0,B.jsxs)(b.Z,{sx:{display:"flex"},children:[(0,B.jsxs)(v.Z,{style:{fontSize:"0.75rem"},variant:"body2",children:["ITEM ID: ",null===l||void 0===l?void 0:l.item_id," ||\xa0"]}),(0,B.jsxs)(v.Z,{style:{fontSize:"0.75rem"},variant:"body2",children:["SKU: ",null===l||void 0===l?void 0:l.sku]})]})]})})]})}),(null===V||void 0===V?void 0:V.average_price)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.average_price,null===l||void 0===l?void 0:l.comparison_average_price,"average_price")}),(null===V||void 0===V?void 0:V.avg_size)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l||null===(i=l.avg_size)||void 0===i?void 0:i.toFixed(2),null===l||void 0===l||null===(t=l.comparison_avg_size)||void 0===t?void 0:t.toFixed(2),"avg_size")}),(null===V||void 0===V?void 0:V.ad_sales)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.ad_sales,null===l||void 0===l?void 0:l.comparison_ad_sales,"ad_sales")}),(null===V||void 0===V?void 0:V.product_price)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.product_price,null===l||void 0===l?void 0:l.comparison_ad_sales,"product_price")}),(null===V||void 0===V?void 0:V.total_amount_sale)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.total_amount_sale,l.comparison_total_amount_sale,"total_amount_sale")}),(null===V||void 0===V?void 0:V.units_sold)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.units_sold,null===l||void 0===l?void 0:l.comparison_units_sold,"units_sold")}),(null===V||void 0===V?void 0:V.ad_spend)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.ad_spend,null===l||void 0===l?void 0:l.comparison_ad_spend,"ad_spend")}),(null===V||void 0===V?void 0:V.total_commission_amount)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.total_commission_amount,null===l||void 0===l?void 0:l.total_commission_amount,"total_commission_amount")}),(null===V||void 0===V?void 0:V.total_dispute_amount)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.total_dispute_amount,l.comparison_total_dispute_amount,"total_dispute_amount")}),(null===V||void 0===V?void 0:V.total_return_amount)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.total_return_amount,null===l||void 0===l?void 0:l.comparison_total_return_amount,"total_return_amount")}),(null===V||void 0===V?void 0:V.total_wfs_amount)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.total_wfs_amount,null===l||void 0===l?void 0:l.comparison_total_wfs_amount,"total_return_amount")}),(null===V||void 0===V?void 0:V.cogs_total)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.cogs_total,null===l||void 0===l?void 0:l.comparison_cogs_total,"cogs_total")}),(null===V||void 0===V?void 0:V.cap_total)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.cap_total,null===l||void 0===l?void 0:l.comparison_cap_total,"cap_total")}),(null===V||void 0===V?void 0:V.ad_units)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.ad_units,null===l||void 0===l?void 0:l.ad_units,"ad_units")}),(null===V||void 0===V?void 0:V.total_sales_order)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.total_sales_order,null===l||void 0===l?void 0:l.comparison_total_sales_order,"total_sales_order")}),(null===V||void 0===V?void 0:V.adv_orders)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.adv_orders,null===l||void 0===l?void 0:l.comparison_adv_orders,"adv_orders")}),(null===V||void 0===V?void 0:V.organic_sales)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.organic_sales,null===l||void 0===l?void 0:l.comparison_organic_sales,"organic_sales")}),(null===V||void 0===V?void 0:V.organic_sales_percentage)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.organic_sales_percentage,null===l||void 0===l?void 0:l.comparison_organic_sales_percentage,"organic_sales_percentage")}),(null===V||void 0===V?void 0:V.roas)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.roas,null===l||void 0===l?void 0:l.comparison_roas,"roas")}),(null===V||void 0===V?void 0:V.tacos)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.tacos,null===l||void 0===l?void 0:l.comparison_tacos,"tacos")}),(null===V||void 0===V?void 0:V.troas)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.troas,null===l||void 0===l?void 0:l.comparison_troas,"troas")}),(null===V||void 0===V?void 0:V.acos)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.acos,null===l||void 0===l?void 0:l.comparison_acos,"acos")}),(null===V||void 0===V?void 0:V.impressions)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.impressions,null===l||void 0===l?void 0:l.comparison_impressions,"impressions")}),(null===V||void 0===V?void 0:V.total_clicks)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.total_clicks,null===l||void 0===l?void 0:l.comparison_total_clicks,"total_clicks")}),(null===V||void 0===V?void 0:V.ctr)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.ctr,null===l||void 0===l?void 0:l.comparison_ctr,"ctr")}),(null===V||void 0===V?void 0:V.cvr_oder)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.cvr_oder,null===l||void 0===l?void 0:l.cvr_oder,"cvr_order")}),(null===V||void 0===V?void 0:V.cvr_unit)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.cvr_unit,null===l||void 0===l?void 0:l.comparison_cvr_unit," cvr_unit")}),(null===V||void 0===V?void 0:V.return_unit)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.return_unit,null===l||void 0===l?void 0:l.comparison_return_unit,"return_unit")}),(null===V||void 0===V?void 0:V.shipping_total)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.shipping_total,null===l||void 0===l?void 0:l.comparison_shipping_total,"shipping_total")}),(null===V||void 0===V?void 0:V.profit_margin)&&(0,B.jsx)(c.Z,{children:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(b.Z,{sx:{display:"flex"},children:[(0,B.jsx)(v.Z,{style:{fontSize:"0.75rem",textAlign:"center",color:l&&isFinite((null===l||void 0===l?void 0:l.total_pnl)/(null===l||void 0===l?void 0:l.total_amount_sale))?(null===l||void 0===l?void 0:l.total_pnl)/(null===l||void 0===l?void 0:l.total_amount_sale)>0?o.palette.success.dark:(null===l||void 0===l?void 0:l.total_pnl)/(null===l||void 0===l?void 0:l.total_amount_sale)<0?o.palette.error.dark:"black":"black"},children:null!==l&&void 0!==l&&l.total_pnl?isFinite((null===l||void 0===l?void 0:l.total_pnl)/(null===l||void 0===l?void 0:l.total_amount_sale))?`${parseFloat((null===l||void 0===l?void 0:l.total_pnl)/(null===l||void 0===l?void 0:l.total_amount_sale)).toFixed(2)}%`:"N/A":"0.00%"}),(0,B.jsxs)(v.Z,{sx:{display:"flex",marginLeft:"10px"},children:[l&&isFinite(((null===l||void 0===l?void 0:l.total_pnl)/(null===l||void 0===l?void 0:l.total_amount_sale)-(null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)/Math.abs((null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)*100)?Math.round(((null===l||void 0===l?void 0:l.total_pnl)/(null===l||void 0===l?void 0:l.total_amount_sale)-(null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)/Math.abs((null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)*100)>0?(0,B.jsx)(v.Z,{sx:{color:o.palette.success.dark,fontSize:"0.70rem"},children:(0,B.jsx)(Y.Z,{fontSize:"small",sx:{width:"0.8rem",height:"0.8rem"}})}):((null===l||void 0===l?void 0:l.total_pnl)/(null===l||void 0===l?void 0:l.total_amount_sale)-(null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)/Math.abs((null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)*100<0&&(0,B.jsx)(v.Z,{sx:{color:o.palette.error.dark,fontSize:"0.70rem"},children:(0,B.jsx)(D.Z,{fontSize:"small",sx:{width:"0.8rem",height:"0.8rem"}})}):"",(0,B.jsx)(v.Z,{style:{color:l&&isFinite(((null===l||void 0===l?void 0:l.total_pnl)/(null===l||void 0===l?void 0:l.total_amount_sale)-(null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)/Math.abs((null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)*100)?((null===l||void 0===l?void 0:l.total_pnl)/(null===l||void 0===l?void 0:l.total_amount_sale)-(null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)/Math.abs((null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)*100>0?o.palette.success.dark:((null===l||void 0===l?void 0:l.total_pnl)/(null===l||void 0===l?void 0:l.total_amount_sale)-(null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)/Math.abs((null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)*100<0?o.palette.error.dark:"black":"black",fontSize:"0.70rem",textAlign:"center"},children:(null===l||void 0===l?void 0:l.total_pnl)/(null===l||void 0===l?void 0:l.total_amount_sale)||(null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100?isFinite((((null===l||void 0===l?void 0:l.total_pnl)/(null===l||void 0===l?void 0:l.total_amount_sale)-(null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)/Math.abs((null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)*100).toFixed(2))?`${Math.round(((null===l||void 0===l?void 0:l.total_pnl)/(null===l||void 0===l?void 0:l.total_amount_sale)-(null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)/Math.abs((null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)*100)}%`:"N/A":"0%"})]})]}),I&&(0,B.jsx)(v.Z,{style:{fontSize:"0.6rem",textAlign:"left",color:l&&isFinite((null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)?(null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100>0?o.palette.success.dark:(null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100<0?o.palette.error.dark:"black":"black"},children:(null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)?isFinite((null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100)?`${parseFloat((null===l||void 0===l?void 0:l.comparison_total_pnl)/(null===l||void 0===l?void 0:l.comparison_total_amount_sale)*100).toFixed(2)}%`:"N/A":"0.00%"})]})}),(null===V||void 0===V?void 0:V.total_pnl)&&(0,B.jsx)(c.Z,{children:no(null===l||void 0===l?void 0:l.total_pnl,null===l||void 0===l?void 0:l.comparison_total_pnl,"total_pnl")})]},null===l||void 0===l?void 0:l.sku)}))},onTableChange:(0,R.debounce)(((o,l)=>{var i;const t=null===l||void 0===l||null===(i=l.columns)||void 0===i?void 0:i.filter((o=>"true"===(null===o||void 0===o?void 0:o.display))).map((o=>null===o||void 0===o?void 0:o.label));if(null!==l&&void 0!==l&&l.rowsPerPage&&localStorage.setItem("visibleColumns",JSON.stringify(t)),"search"===o||"sort"==o||"changeRowsPerPage"==o||"changePage"==o){const i={action:o,page:null===l||void 0===l?void 0:l.page,limit:null===l||void 0===l?void 0:l.rowsPerPage,search:null===l||void 0===l?void 0:l.searchText,sortOrder:null===l||void 0===l?void 0:l.sortOrder};r(i),localStorage.setItem("sortActions_ppc",JSON.stringify(i)),H(null===l||void 0===l?void 0:l.searchText)}if("viewColumnsChange"==o){let o={};null===l||void 0===l||l.columns.map((l=>{o={...o,[null===l||void 0===l?void 0:l.name]:"true"==(null===l||void 0===l?void 0:l.display)}})),J(o)}}),1e3),customToolbar:()=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(p.Z,{control:(0,B.jsx)(z.Z,{checked:I,onChange:eo,name:"mySwitch",color:"primary"}),label:"Comparison Data",labelPlacement:"start"}),(0,B.jsxs)(m.Z,{id:"demo-customized-button","aria-controls":co?"demo-customized-menu":void 0,"aria-haspopup":"true","aria-expanded":co?"true":void 0,variant:"outlined",disableElevation:!0,onClick:_o,endIcon:(0,B.jsx)(P.Z,{}),sx:{ml:1},size:"small",children:[(0,B.jsx)(j.Z,{fontSize:"small"}),"Export"]}),(0,B.jsxs)(N,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:vo,open:co,onClose:po,children:[(0,B.jsx)(x.Z,{onClick:()=>(()=>{var o;const l=JSON.parse(localStorage.getItem("user_data")),i=localStorage.getItem("visibleColumns"),t=i?JSON.parse(i):[];(0,A.sL)(t,"No. of Items"),"product_category"!==U&&"shelf_name"!==U&&"product_type"!==U||((0,A.sL)(t,"Product Category"),(0,A.sL)(t,"Category Path"),(0,A.sL)(t,"Product Type")),t.splice(0,0,"Product Category","SKU","Product Name","Item Id","Product URL");let a={keyName:"Sales-by-Category(with child data).xlsx",type:"child",startDate:null!==Q&&void 0!==Q&&Q.startDate?s()(null===Q||void 0===Q?void 0:Q.startDate).format("YYYY-MM-DD"):s()().subtract(6,"days").format("YYYY-MM-DD"),endDate:null!==Q&&void 0!==Q&&Q.endDate?s()(null===Q||void 0===Q?void 0:Q.endDate).format("YYYY-MM-DD"):s()().startOf("day").format("YYYY-MM-DD"),selectedMetrix:t,store_id:X||(null===l||void 0===l||null===(o=l.data)||void 0===o?void 0:o.store_id),group_by:U};G((0,F.Sp)(a))})(),disableRipple:!0,children:"With Child Data"}),(0,B.jsx)(x.Z,{onClick:()=>(()=>{var o;const l=JSON.parse(localStorage.getItem("user_data")),i=localStorage.getItem("visibleColumns"),t=i?JSON.parse(i):[];(0,A.Rp)(t,0,1);let a={keyName:"Sales-by-Category(by parent).xlsx",type:"parent",startDate:null!==Q&&void 0!==Q&&Q.startDate?s()(null===Q||void 0===Q?void 0:Q.startDate).format("YYYY-MM-DD"):s()().subtract(6,"days").format("YYYY-MM-DD"),endDate:null!==Q&&void 0!==Q&&Q.endDate?s()(null===Q||void 0===Q?void 0:Q.endDate).format("YYYY-MM-DD"):s()().startOf("day").format("YYYY-MM-DD"),selectedMetrix:t,store_id:X||(null===l||void 0===l||null===(o=l.data)||void 0===o?void 0:o.store_id),group_by:U};G((0,F.Sp)(a))})(),disableRipple:!0,children:"By Parent"})]})]}),customTableBodyFooterRender:()=>{var o;const l=Object.keys(V),i=null===l||void 0===l||null===(o=l.filter((o=>!0===V[o])))||void 0===o?void 0:o.map((o=>{if(null!==K&&void 0!==K&&K.total&&1==V[o])return{name:[o],value:"product_category"==o?"Total":ro(o,null===K||void 0===K?void 0:K.total[o]),comparison_value:"product_category"==o?"Total":ro(o,null===K||void 0===K?void 0:K.total["comparison_"+o])}}));return(null===K||void 0===K?void 0:K.total)&&(0,B.jsx)(h.Z,{style:{position:"sticky",background:"white",bottom:-1,zIndex:1e3},children:(0,B.jsx)(u.Z,{className:"ppc-item-table-footer",children:null===i||void 0===i?void 0:i.map(((o,l)=>(0,B.jsx)(B.Fragment,{children:"product_category"==(null===o||void 0===o?void 0:o.name)?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(c.Z,{className:"ppc-item-table-footer td",children:"\xa0"}),(0,B.jsx)(c.Z,{className:"ppc-item-table-footer td",children:"Total"})]}):(0,B.jsxs)(c.Z,{className:"ppc-item-table-footer",sx:{fontSize:"0.78rem",color:"black"},children:[(0,B.jsx)(b.Z,{children:null!==o&&void 0!==o&&o.value?null===o||void 0===o?void 0:o.value:"-"}),I&&(0,B.jsx)(b.Z,{sx:{fontSize:"0.68rem",color:"black"},children:null!==o&&void 0!==o&&o.comparison_value?null===o||void 0===o?void 0:o.comparison_value:"-"})]},l)})))})})}};return(0,B.jsxs)(B.Fragment,{children:[(null===q||void 0===q?void 0:q.loading)&&(0,B.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:9999},children:(0,B.jsx)(C.Z,{})}),(0,B.jsx)(n.Z,{title:(0,B.jsxs)(g.Z,{size:"small",children:[(0,B.jsx)(y.Z,{id:"category-label",children:"Group by"}),(0,B.jsx)(f.Z,{labelId:"category-label",id:"category",value:U,label:"Group by",onChange:o=>{E(o.target.value)},style:{minWidth:"120px",minHeight:"40px"},children:O.map((o=>(0,B.jsx)(x.Z,{value:o.name,children:o.label},o.name)))})]}),className:"create-table-wrapper",children:(0,B.jsx)(a.ZP,{options:mo,data:l,columns:so,className:"pnl-by-item create-table"})})]})}},43638:function(o,l,i){var t=i(64836);l.Z=void 0;var a=t(i(45045)),e=i(46417),n=(0,a.default)((0,e.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");l.Z=n},72445:function(o,l,i){var t=i(64836);l.Z=void 0;var a=t(i(45045)),e=i(46417),n=(0,a.default)((0,e.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");l.Z=n},25660:function(o,l,i){var t=i(64836);l.Z=void 0;var a=t(i(45045)),e=i(46417),n=(0,a.default)((0,e.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"FileDownload");l.Z=n},29428:function(o,l,i){var t=i(64836);l.Z=void 0;var a=t(i(45045)),e=i(46417),n=(0,a.default)((0,e.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");l.Z=n},57009:function(o,l,i){var t=i(64836);l.Z=void 0;var a=t(i(45045)),e=i(46417),n=(0,a.default)((0,e.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");l.Z=n}}]);