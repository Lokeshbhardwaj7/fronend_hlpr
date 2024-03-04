"use strict";(self.webpackChunkmetrics=self.webpackChunkmetrics||[]).push([[838],{4838:function(o,t,l){l.r(t);var i=l(47313),e=l(7794),a=l(48420),n=l(33497),s=l(70816),d=l.n(s),r=l(47605),c=l(49709),u=l(69173),p=l(71003),v=l(52994),m=l(42988),_=l(70941),x=l(15743),h=l(57009),g=l(25660),f=l(40242),y=l(19860),b=l(67426),S=l(6165),j=l(43638),k=l(72445),M=l(473),Z=l(16031),D=l(15016),F=l(46417);t.default=()=>{const o=(0,y.Z)(),[t,l]=(0,i.useState)([]),[s,z]=(0,i.useState)(),[C,Y]=(0,i.useState)(!1),[R,A]=(0,i.useState)(!1),[w,B]=(0,i.useState)(!0),[P,W]=(0,i.useState)(""),[I,$]=(0,i.useState)({product:!0,average_price:!1,gtin:!1,avg_size:!1,ad_spend:!0,ad_sales:!0,adv_orders:!0,ad_units:!0,impressions:!0,total_clicks:!0,ctr:!0,cvr_oder:!0,cvr_unit:!0,roas:!0,acos:!0,total_amount_sale:!0,total_commission_amount:!1,total_dispute_amount:!1,total_return_amount:!1,total_wfs_amount:!1,cogs_total:!1,cap_total:!1,organic_sales:!1,organic_sales_percentage:!0,tacos:!0,troas:!0,units_sold:!1,product_price:!1,return_unit:!1,shipping_total:!1,profit_margin:!1,total_pnl:!1}),N=(0,a.TL)(),O=(0,a.CG)((o=>o.dashboardSlice.pnlByItemData)),T=(0,a.CG)((o=>o.dataLoading)),L=(0,a.CG)((o=>o.dashboardSlice.date)),V=(0,a.CG)((o=>o.dashboardSlice.storeId)),U=o=>{window.open(o,"_blank")},E=["average_price","gtin","ad_units","adv_orders","organic_sales","roas","troas","acos","tacos","impressions","total_clicks","ctr","cvr_oder","organic_sales_percentage","cvr_unit","units_sold","product_price","return_unit"],H=["acos","tacos","total_wfs_amount","shipping_total","total_commission_amount","total_return_amount","cogs_total"],G=["average_price","ad_spend","impressions","return_unit"],J=["avg_size","gtin","adv_orders","ad_units","impressions","total_clicks","units_sold","return_unit"];(0,i.useEffect)((()=>{if(L){if(Array.isArray(V)&&0===V.length)return;Y(!0)}}),[V]);const K=o=>{A(o.target.checked)},q=o=>{B(o.target.checked)};(0,i.useEffect)((()=>{if(C){var o,t,l;const i=JSON.parse(localStorage.getItem("user_data")),e=JSON.parse(localStorage.getItem("sortActions_ppc"));let a={startDate:null!==L&&void 0!==L&&L.startDate?d()(null===L||void 0===L?void 0:L.startDate).format("YYYY-MM-DD"):d()().subtract(6,"days").format("YYYY-MM-DD"),endDate:null!==L&&void 0!==L&&L.endDate?d()(null===L||void 0===L?void 0:L.endDate).format("YYYY-MM-DD"):d()().startOf("day").format("YYYY-MM-DD"),comparison_startDate:null!==L&&void 0!==L&&L.comparison_startDate?d()(null===L||void 0===L?void 0:L.comparison_startDate).format("YYYY-MM-DD"):d()().subtract(13,"days").format("YYYY-MM-DD"),comparison_endDate:null!==L&&void 0!==L&&L.comparison_endDate?d()(null===L||void 0===L?void 0:L.comparison_endDate).format("YYYY-MM-DD"):d()().startOf(7,"day").format("YYYY-MM-DD"),store_id:V||(null===i||void 0===i||null===(o=i.data)||void 0===o?void 0:o.store_id),filter:{action:(null===e||void 0===e?void 0:e.action)||"sort",name:(null===e||void 0===e||null===(t=e.sortOrder)||void 0===t?void 0:t.name)||"ad_spend",direction:(null===e||void 0===e||null===(l=e.sortOrder)||void 0===l?void 0:l.direction)||"desc"},lifecycle_status:w?"ACTIVE":"INACTIVE",search:P,limit:(null===s||void 0===s?void 0:s.limit)||10,page:(null===s||void 0===s?void 0:s.page)||0};N((0,f.Mi)(a))}}),[L,V,C,s,w]),(0,i.useEffect)((()=>{var o;O&&null!==O&&void 0!==O&&O.data&&(null===O||void 0===O?void 0:O.data.length)>0?l(null===O||void 0===O||null===(o=O.data)||void 0===o?void 0:o.map((o=>[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o]))):l([])}),[O]);const Q=(t,l,i)=>{const e=["ad_spend"],a=null!==J&&void 0!==J&&J.includes(i)?t:t.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),n=null!==J&&void 0!==J&&J.includes(i)?l:null===l||void 0===l?void 0:l.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),s="string"===typeof a&&a.includes("-")?a.replace("-",""):a,d="string"===typeof n&&n.includes("-")?n.replace("-",""):n,c=null===O||void 0===O?void 0:O.formation[i];let u="$"==c?c+s:"%"==c?s+c:s,p="$"==c?c+d:"%"==c?d+c:d,v=null!==e&&void 0!==e&&e.includes(i)&&0!=t||t<0?"-"+u:u,m=null!==e&&void 0!==e&&e.includes(i)&&0!=l||l<0?"-"+p:p,_=null!==e&&void 0!==e&&e.includes(i)?-Math.abs(t):t,h=((null!==e&&void 0!==e&&e.includes(i)?-Math.abs(t):t)-(null!==e&&void 0!==e&&e.includes(i)?-Math.abs(l):l))/Math.abs(null!==e&&void 0!==e&&e.includes(i)?-Math.abs(l):l)*100,g="";return g=isFinite(h)?G.includes(i)?"grey":H.includes(i)?h>0?o.palette.error.dark:h<0?o.palette.success.dark:"grey":h>0?o.palette.success.dark:h<0?o.palette.error.dark:"grey":"grey",(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(x.Z,{sx:{display:"flex"},children:[(0,F.jsx)(r.Z,{style:{fontSize:"0.75rem",textAlign:"center",color:0==t||E.includes(i)?"black":_>0?o.palette.success.dark:o.palette.orange.dark},children:isFinite(t)?v:"N/A"}),(0,F.jsxs)(r.Z,{sx:{display:"flex",marginLeft:"10px"},children:[isFinite(h)?Math.round(h)>0?(0,F.jsx)(r.Z,{sx:{color:G.includes(i)?"grey":H.includes(i)?o.palette.error.dark:o.palette.success.dark,fontSize:"0.70rem"},children:(0,F.jsx)(k.Z,{fontSize:"small",sx:{width:"0.8rem",height:"0.8rem"}})}):Math.round(h)<0&&(0,F.jsx)(r.Z,{sx:{color:G.includes(i)?"grey":H.includes(i)?o.palette.success.dark:o.palette.error.dark,fontSize:"0.70rem"},children:(0,F.jsx)(j.Z,{fontSize:"small",sx:{width:"0.8rem",height:"0.8rem"}})}):"",(0,F.jsx)(r.Z,{style:{color:g,fontSize:"0.70rem",textAlign:"center"},children:h?isFinite(h)?`${Math.round(h)}%`:"N/A":"0%"})]})]}),R&&(0,F.jsx)(r.Z,{style:{textAlign:"left",fontSize:"0.6rem",color:"black"},children:isFinite(l)?m:"N/A"})]})},X=[{name:"product",label:"Product",options:{setCellProps:()=>({style:{background:"#fff",minWidth:"350px",fontSize:"0.75rem",position:"sticky",left:0,zIndex:1}}),filter:!0,sort:!0,display:I.product,customHeadRender:o=>(0,F.jsx)("th",{style:{position:"sticky",top:0,background:"#fff",zIndex:999,left:0,borderBottom:"1px solid rgba(224, 224, 224, 1)",fontWeight:500,fontSize:"13px"},children:o.label},o.index),customBodyRender:o=>{const t=o&&(null===o||void 0===o?void 0:o.product_url);return(0,F.jsxs)(x.Z,{sx:{display:"flex"},children:[(0,F.jsx)(x.Z,{sx:{mr:"5px"},children:(0,F.jsx)("button",{style:{padding:"0"},className:"custom-cell",onClick:()=>U(null===o||void 0===o?void 0:o.product_url),onKeyDown:t=>{"Enter"!==t.key&&"Space"!==t.key||U(null===o||void 0===o?void 0:o.product_url)},tabIndex:0,children:(0,F.jsx)("img",{src:null===o||void 0===o?void 0:o.image,alt:"Product",style:{border:"1px solid rgba(224, 224, 224, 1)",maxWidth:"35px",maxHeight:"40px",width:"35px",height:"38px"}})})}),(0,F.jsx)(x.Z,{children:(0,F.jsxs)("div",{className:"custom-cell",children:[(0,F.jsx)(c.Z,{title:null===o||void 0===o?void 0:o.product_name,enterDelay:500,children:(0,F.jsxs)("a",{href:t,onClick:o=>{o.preventDefault(),window.open(t,"_blank","noopener noreferrer")},style:{display:"flex",alignItems:"center"},children:[(0,F.jsx)(r.Z,{style:{fontSize:"0.75rem"},children:(0,D.HR)(null===o||void 0===o?void 0:o.product_name)}),(0,F.jsx)(h.Z,{fontSize:"small"})]})}),(0,F.jsxs)(r.Z,{style:{fontSize:"0.75rem",display:"flex"},variant:"body2",children:["ITEM ID: ",null===o||void 0===o?void 0:o.item_id," || SKU: ",null===o||void 0===o?void 0:o.sku]})]})})]})}}},{name:"average_price",label:"Average Price",options:{filter:!0,sort:!0,setCellProps:()=>({style:{minWidth:"105px",maxWidth:"200px"}}),display:I.average_price,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.average_price,null===o||void 0===o?void 0:o.comparison_average_price,"average_price")}},{name:"gtin",label:"GTIN",options:{display:I.gtin,setCellProps:()=>({style:{fontSize:"0.75rem"}}),filter:!1,sort:!0,customBodyRender:o=>(0,F.jsx)(r.Z,{style:{fontSize:"0.75rem",textAlign:"center"},children:null===o||void 0===o?void 0:o.gtin})}},{name:"avg_size",label:"Avg Order Size",options:{filter:!0,sort:!0,setCellProps:()=>({style:{minWidth:"107px",maxWidth:"200px"}}),display:I.avg_size,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.avg_size.toFixed(2),null===o||void 0===o?void 0:o.comparison_avg_size.toFixed(2),"avg_size")}},{name:"ad_spend",label:"Ad Spend",options:{filter:!0,sort:!0,display:I.ad_spend,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.ad_spend,null===o||void 0===o?void 0:o.comparison_ad_spend,"ad_spend")}},{name:"ad_sales",label:"Ad Sales",options:{display:I.ad_sales,filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.ad_sales,null===o||void 0===o?void 0:o.comparison_ad_sales,"ad_sales")}},{name:"adv_orders",label:"Ad Orders",options:{display:I.adv_orders,setCellProps:()=>({style:{minWidth:"100px",maxWidth:"200px"}}),filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.adv_orders,null===o||void 0===o?void 0:o.comparison_adv_orders,"adv_orders")}},{name:"ad_units",label:"Ad Units",options:{display:I.ad_units,filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.ad_units,null===o||void 0===o?void 0:o.comparison_ad_units,"ad_units")}},{name:"impressions",label:"Impressions",options:{display:I.impressions,filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.impressions,null===o||void 0===o?void 0:o.comparison_impressions,"impressions")}},{name:"total_clicks",label:"Clicks",options:{display:I.total_clicks,filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.total_clicks,null===o||void 0===o?void 0:o.comparison_total_clicks,"total_clicks")}},{name:"ctr",label:"CTR",options:{display:I.ctr,filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.ctr,null===o||void 0===o?void 0:o.comparison_ctr,"ctr")}},{name:"cvr_oder",label:"CVR (Orders)",options:{display:I.cvr_oder,setCellProps:()=>({style:{minWidth:"105px",maxWidth:"200px"}}),filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.cvr_oder,null===o||void 0===o?void 0:o.comparison_cvr_oder,"cvr_oder")}},{name:"cvr_unit",label:"CVR (Units)",options:{display:I.cvr_unit,filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.cvr_unit,null===o||void 0===o?void 0:o.comparison_cvr_unit,"cvr_unit")}},{name:"roas",label:"RoAS",options:{display:I.roas,filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.roas,null===o||void 0===o?void 0:o.comparison_roas,"roas")}},{name:"acos",label:"ACoS",options:{display:I.acos,filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.acos,null===o||void 0===o?void 0:o.comparison_acos,"acos")}},{name:"total_amount_sale",label:"Sales",options:{filter:!0,sort:!0,display:I.total_amount_sale,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.total_amount_sale,null===o||void 0===o?void 0:o.comparison_total_amount_sale,"total_amount_sale")}},{name:"total_commission_amount",label:"Commission",options:{display:I.total_commission_amount,filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.total_commission_amount,null===o||void 0===o?void 0:o.comparison_total_commission_amount,"total_commission_amount")}},{name:"total_dispute_amount",label:"Dispute",options:{display:I.total_dispute_amount,filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.total_dispute_amount,null===o||void 0===o?void 0:o.comparison_total_dispute_amount,"total_dispute_amount")}},{name:"total_return_amount",label:"Returns",options:{display:I.total_return_amount,filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.total_return_amount,null===o||void 0===o?void 0:o.comparison_total_return_amount,"total_return_amount")}},{name:"total_wfs_amount",label:"WFS Fees",options:{setCellProps:()=>({style:{minWidth:"85px",maxWidth:"200px"}}),display:I.total_wfs_amount,filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.total_wfs_amount,null===o||void 0===o?void 0:o.comparison_total_wfs_amount,"total_wfs_amount")}},{name:"cogs_total",label:"CoGS",options:{display:I.cogs_total,filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.cogs_total,null===o||void 0===o?void 0:o.comparison_cogs_total,"cogs_total")}},{name:"cap_total",label:"CAP",options:{filter:!0,sort:!0,display:I.cap_total,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.cap_total,null===o||void 0===o?void 0:o.comparison_cap_total,"cap_total")}},{name:"organic_sales",label:"Organic Sales",options:{display:I.organic_sales,filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.organic_sales,null===o||void 0===o?void 0:o.comparison_organic_sales,"organic_sales")}},{name:"organic_sales_percentage",label:"Organic Sales %",options:{setCellProps:()=>({style:{minWidth:"115px",maxWidth:"200px"}}),display:I.organic_sales_percentage,filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.organic_sales_percentage,null===o||void 0===o?void 0:o.comparison_organic_sales_percentage,"organic_sales_percentage")}},{name:"tacos",label:"TACoS",options:{display:I.tacos,filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.tacos,null===o||void 0===o?void 0:o.comparison_tacos,"tacos")}},{name:"troas",label:"TRoAS",options:{display:I.troas,filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.troas,null===o||void 0===o?void 0:o.comparison_troas,"troas")}},{name:"units_sold",label:"Units Sold",options:{display:I.units_sold,setCellProps:()=>({style:{minWidth:"90px",maxWidth:"200px"}}),filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.units_sold,null===o||void 0===o?void 0:o.comparison_units_sold,"units_sold")}},{name:"product_price",label:"Current Price",options:{display:I.product_price,setCellProps:()=>({style:{minWidth:"100px",maxWidth:"200px"}}),filter:!0,sort:!0,customBodyRender:o=>(0,F.jsx)(x.Z,{sx:{display:"flex"},children:(0,F.jsx)(r.Z,{style:{fontSize:"0.75rem",textAlign:"center"},children:0!==(null===o||void 0===o?void 0:o.product_price)?`$${null===o||void 0===o?void 0:o.product_price.toFixed(2)}`:"$0.00"})})}},{name:"return_unit",label:"Returned Units",options:{display:I.return_unit,setCellProps:()=>({style:{minWidth:"110px",maxWidth:"200px"}}),filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.return_unit,null===o||void 0===o?void 0:o.comparison_return_unit,"return_unit")}},{name:"shipping_total",label:"Shipping Fees",options:{display:I.shipping_total,setCellProps:()=>({style:{minWidth:"105px",maxWidth:"200px"}}),filter:!0,sort:!0,customBodyRender:o=>Q(null===o||void 0===o?void 0:o.shipping_total,null===o||void 0===o?void 0:o.comparison_shipping_total,"shipping_total")}},{name:"profit_margin",label:"Profit Margin %",options:{display:I.profit_margin,setCellProps:()=>({style:{minWidth:"110px",maxWidth:"200px"}}),filter:!0,sort:!1,customBodyRender:t=>{const l=(null===t||void 0===t?void 0:t.total_pnl)/(null===t||void 0===t?void 0:t.total_amount_sale)*100,i=(null===t||void 0===t?void 0:t.comparison_total_pnl)/(null===t||void 0===t?void 0:t.comparison_total_amount_sale)*100;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(x.Z,{sx:{display:"flex"},children:[(0,F.jsx)(r.Z,{style:{fontSize:"0.75rem",textAlign:"center",color:t&&isFinite(l)?l>0?o.palette.success.dark:l<0?o.palette.error.dark:"black":"black"},children:null!==t&&void 0!==t&&t.total_pnl?isFinite(l)?`${parseFloat(l).toFixed(2)}%`:"N/A":"0.00%"}),(0,F.jsxs)(r.Z,{sx:{display:"flex",marginLeft:"10px"},children:[t&&isFinite((l-i)/Math.abs(i)*100)?Math.round((l-i)/Math.abs(i)*100)>0?(0,F.jsx)(r.Z,{sx:{color:o.palette.success.dark,fontSize:"0.70rem"},children:(0,F.jsx)(k.Z,{fontSize:"small",sx:{width:"0.8rem",height:"0.8rem"}})}):(l-i)/Math.abs(i)*100<0&&(0,F.jsx)(r.Z,{sx:{color:o.palette.error.dark,fontSize:"0.70rem"},children:(0,F.jsx)(j.Z,{fontSize:"small",sx:{width:"0.8rem",height:"0.8rem"}})}):"",(0,F.jsx)(r.Z,{style:{color:t&&isFinite((l-i)/Math.abs(i)*100)?(l-i)/Math.abs(i)*100>0?o.palette.success.dark:(l-i)/Math.abs(i)*100<0?o.palette.error.dark:"grey":"grey",fontSize:"0.70rem",textAlign:"center"},children:l||i?isFinite(((l-i)/Math.abs(i)*100).toFixed(2))?`${Math.round((l-i)/Math.abs(i)*100)}%`:"N/A":"0%"})]})]}),R&&(0,F.jsx)(r.Z,{style:{fontSize:"0.6rem",textAlign:"left",color:t&&isFinite(i)?i>0?o.palette.success.dark:i<0?o.palette.error.dark:"black":"black"},children:(null===t||void 0===t?void 0:t.comparison_total_pnl)/(null===t||void 0===t?void 0:t.comparison_total_amount_sale)?isFinite(i)?`${parseFloat(i).toFixed(2)}%`:"N/A":"0.00%"})]})}}},{name:"total_pnl",label:"Total Pnl",options:{display:I.total_pnl,filter:!0,sort:!1,customBodyRender:t=>(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(x.Z,{sx:{display:"flex"},children:[(0,F.jsx)(r.Z,{style:{fontSize:"0.75rem",fontWeight:700,textAlign:"center",color:0==(null===t||void 0===t?void 0:t.total_pnl)?"grey":(null===t||void 0===t?void 0:t.total_pnl)>0?o.palette.success.dark:o.palette.orange.dark},children:null!==t&&void 0!==t&&t.total_pnl?isFinite(null===t||void 0===t?void 0:t.total_pnl)?`${parseFloat(null===t||void 0===t?void 0:t.total_pnl)<0?"-$":"$"}${Math.abs(parseFloat(null===t||void 0===t?void 0:t.total_pnl)).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"N/A":"$0.00"}),(0,F.jsxs)(r.Z,{sx:{display:"flex",marginLeft:"10px"},children:[t&&isFinite(((null===t||void 0===t?void 0:t.total_pnl)-(null===t||void 0===t?void 0:t.comparison_total_pnl))/Math.abs(null===t||void 0===t?void 0:t.comparison_total_pnl)*100)?Math.round(((null===t||void 0===t?void 0:t.total_pnl)-(null===t||void 0===t?void 0:t.comparison_total_pnl))/Math.abs(null===t||void 0===t?void 0:t.comparison_total_pnl)*100)>0?(0,F.jsx)(r.Z,{sx:{color:o.palette.success.dark,fontSize:"0.70rem"},children:(0,F.jsx)(k.Z,{fontSize:"small",sx:{width:"0.8rem",height:"0.8rem"}})}):((null===t||void 0===t?void 0:t.total_pnl)-(null===t||void 0===t?void 0:t.comparison_total_pnl))/Math.abs(null===t||void 0===t?void 0:t.comparison_total_pnl)*100<0&&(0,F.jsx)(r.Z,{sx:{color:o.palette.error.dark,fontSize:"0.70rem"},children:(0,F.jsx)(j.Z,{fontSize:"small",sx:{width:"0.8rem",height:"0.8rem"}})}):"",(0,F.jsx)(r.Z,{style:{color:t&&isFinite(((null===t||void 0===t?void 0:t.total_pnl)-(null===t||void 0===t?void 0:t.comparison_total_pnl))/Math.abs(null===t||void 0===t?void 0:t.comparison_total_pnl)*100)?((null===t||void 0===t?void 0:t.total_pnl)-(null===t||void 0===t?void 0:t.comparison_total_pnl))/Math.abs(null===t||void 0===t?void 0:t.comparison_total_pnl)*100>0?o.palette.success.dark:((null===t||void 0===t?void 0:t.total_pnl)-(null===t||void 0===t?void 0:t.comparison_total_pnl))/Math.abs(null===t||void 0===t?void 0:t.comparison_total_pnl)*100<0?o.palette.error.dark:"grey":"grey",fontSize:"0.70rem",textAlign:"center"},children:null!==t&&void 0!==t&&t.total_pnl||null!==t&&void 0!==t&&t.comparison_total_pnl?isFinite((((null===t||void 0===t?void 0:t.total_pnl)-(null===t||void 0===t?void 0:t.comparison_total_pnl))/Math.abs(null===t||void 0===t?void 0:t.comparison_total_pnl)*100).toFixed(2))?`${Math.round(((null===t||void 0===t?void 0:t.total_pnl)-(null===t||void 0===t?void 0:t.comparison_total_pnl))/Math.abs(null===t||void 0===t?void 0:t.comparison_total_pnl)*100)}%`:"N/A":"0%"})]})]}),R&&(0,F.jsx)(r.Z,{style:{fontSize:"0.6rem",fontWeight:700,textAlign:"left",color:0==(null===t||void 0===t?void 0:t.comparison_total_pnl)?"grey":(null===t||void 0===t?void 0:t.comparison_total_pnl)>0?o.palette.success.dark:o.palette.orange.dark},children:null!==t&&void 0!==t&&t.comparison_total_pnl?isFinite(null===t||void 0===t?void 0:t.comparison_total_pnl)?`${parseFloat(null===t||void 0===t?void 0:t.comparison_total_pnl)<0?"-$":"$"}${Math.abs(parseFloat(null===t||void 0===t?void 0:t.comparison_total_pnl)).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"N/A":"$0.00"})]})}}],oo=(o,t)=>{const l=null===O||void 0===O?void 0:O.formation[o];return"$"===l?void 0!==t&&null!==t?t<0?`-$${Math.abs(t).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")}`:`$${t.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")}`:"":"%"===l?void 0!==t&&null!==t?`${t.toFixed(2)}%`:"":"int"===l?void 0!==t&&null!==t?`${Math.round(t)}`:"":t},to={tableBodyHeight:"calc(100vh - 295px)",selectableRows:"none",download:!1,count:null===O||void 0===O?void 0:O.count,stickyHeader:!0,print:!1,filter:!1,rowsPerPageOptions:[10,20,30],serverSide:!0,onTableChange:(0,Z.debounce)(((o,t)=>{var l;const i=null===t||void 0===t||null===(l=t.columns)||void 0===l?void 0:l.filter((o=>"true"===(null===o||void 0===o?void 0:o.display))).map((o=>null===o||void 0===o?void 0:o.label));if(null!==t&&void 0!==t&&t.rowsPerPage&&localStorage.setItem("visibleColumns",JSON.stringify(i)),"search"===o||"sort"==o||"changeRowsPerPage"==o||"changePage"==o){const l={action:o,page:null===t||void 0===t?void 0:t.page,limit:null===t||void 0===t?void 0:t.rowsPerPage,search:null===t||void 0===t?void 0:t.searchText,sortOrder:null===t||void 0===t?void 0:t.sortOrder};z(l),localStorage.setItem("sortActions_ppc",JSON.stringify(l)),W(null===t||void 0===t?void 0:t.searchText)}if("viewColumnsChange"==o){let o={};null===t||void 0===t||t.columns.map((t=>{o={...o,[null===t||void 0===t?void 0:t.name]:"true"==(null===t||void 0===t?void 0:t.display)}})),$(o)}}),1e3),customToolbar:()=>(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(u.Z,{control:(0,F.jsx)(b.Z,{checked:w,onChange:q,name:"mySwitch",color:"primary"}),label:"Active",labelPlacement:"start"}),(0,F.jsx)(u.Z,{control:(0,F.jsx)(b.Z,{checked:R,onChange:K,name:"mySwitch",color:"primary"}),label:"Comparison Data",labelPlacement:"start"}),(0,F.jsxs)(p.Z,{sx:{ml:1},size:"small",variant:"outlined",component:"span",onClick:()=>(()=>{var o;const t=JSON.parse(localStorage.getItem("user_data")),l=localStorage.getItem("visibleColumns"),i=l?JSON.parse(l):[];let e={keyName:"PPC-by-Item.xlsx",startDate:null!==L&&void 0!==L&&L.startDate?d()(null===L||void 0===L?void 0:L.startDate).format("YYYY-MM-DD"):d()().subtract(6,"days").format("YYYY-MM-DD"),endDate:null!==L&&void 0!==L&&L.endDate?d()(null===L||void 0===L?void 0:L.endDate).format("YYYY-MM-DD"):d()().startOf("day").format("YYYY-MM-DD"),selectedMetrix:i,store_id:V||(null===t||void 0===t||null===(o=t.data)||void 0===o?void 0:o.store_id),lifecycle_status:w?"ACTIVE":"INACTIVE"};N((0,S.RU)(e))})(),disabled:(null===O||void 0===O?void 0:O.count)<=0,children:[(0,F.jsx)(g.Z,{fontSize:"small"}),"Export"]})]}),customTableBodyFooterRender:()=>{var o;const t=Object.keys(I),l=null===t||void 0===t||null===(o=t.filter((o=>!0===I[o])))||void 0===o?void 0:o.map((o=>{if(null!==O&&void 0!==O&&O.total&&1==I[o])return{name:[o],value:"product"==o?"Total":oo(o,null===O||void 0===O?void 0:O.total[o]),comparison_value:"product"==o?"Total":oo(o,null===O||void 0===O?void 0:O.total["comparison_"+o])}}));return(null===O||void 0===O?void 0:O.count)>0&&(null===O||void 0===O?void 0:O.total)&&(0,F.jsx)(v.Z,{style:{position:"sticky",background:"white",bottom:-1,zIndex:1e3},children:(0,F.jsx)(m.Z,{className:"ppc-item-table-footer",children:null===l||void 0===l?void 0:l.map(((o,t)=>(0,F.jsx)(F.Fragment,{children:"product"==(null===o||void 0===o?void 0:o.name)?(0,F.jsx)(_.Z,{className:"ppc-item-table-footer td",children:"Total"}):(0,F.jsxs)(_.Z,{className:"ppc-item-table-footer",sx:{fontSize:"0.78rem",color:"black"},children:[(0,F.jsx)(x.Z,{children:null!==o&&void 0!==o&&o.value?null===o||void 0===o?void 0:o.value:"-"}),R&&(0,F.jsx)(x.Z,{sx:{fontSize:"0.68rem",color:"black"},children:null!==o&&void 0!==o&&o.comparison_value?null===o||void 0===o?void 0:o.comparison_value:"-"})]},t)})))})})}};return(0,F.jsxs)(F.Fragment,{children:[(null===T||void 0===T?void 0:T.loading)&&(0,F.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:9999},children:(0,F.jsx)(M.Z,{})}),(0,F.jsx)(n.Z,{title:"PPC by Item",children:(0,F.jsx)(e.ZP,{options:to,data:t,columns:X,className:"pnl-by-item"})})]})}},43638:function(o,t,l){var i=l(64836);t.Z=void 0;var e=i(l(45045)),a=l(46417),n=(0,e.default)((0,a.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");t.Z=n},72445:function(o,t,l){var i=l(64836);t.Z=void 0;var e=i(l(45045)),a=l(46417),n=(0,e.default)((0,a.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");t.Z=n},25660:function(o,t,l){var i=l(64836);t.Z=void 0;var e=i(l(45045)),a=l(46417),n=(0,e.default)((0,a.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"FileDownload");t.Z=n},57009:function(o,t,l){var i=l(64836);t.Z=void 0;var e=i(l(45045)),a=l(46417),n=(0,e.default)((0,a.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");t.Z=n}}]);