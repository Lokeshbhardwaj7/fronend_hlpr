"use strict";(self.webpackChunkmetrics=self.webpackChunkmetrics||[]).push([[299],{22889:function(e,n,i){var t=i(47313);n.Z=()=>{const e=(0,t.useRef)(!0);return(0,t.useEffect)((()=>()=>{e.current=!1}),[]),e}},55602:function(e,n,i){var t=i(9506),o=i(33497),r=i(46417);n.Z=e=>{let{children:n,...i}=e;return(0,r.jsx)(o.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...i,children:(0,r.jsx)(t.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:n})})}},70547:function(e,n,i){const t=(0,i(17592).ZP)("div")((e=>{let{theme:n}=e;return{backgroundColor:n.palette.primary.light,minHeight:"100vh"}}));n.Z=t},38299:function(e,n,i){i.r(n),i.d(n,{default:function(){return $}});var t=i(97890),o=i(29466),r=i(19641),l=i(9506),s=i(19536),c=i(71003),a=i(47605),d=i(19860),u=i(85554),x=i(70547),m=i(55602),h=i(47313),p=i(24813),g=i(94469),v=i(33604),f=i(69625),j=i(72461),Z=i(35898),w=i(57204),y=i(47992),b=i(49914),C=i(20715),S=i(1082),P=i(80836),z=i(98668),E=i(3463),I=i(79429),L=i(22889),k=i(59677),R=i(10237),M=i(22611),_=i(42807),A=i(48420),B=i(31904),D=i(46417);var G=e=>{let{...n}=e;const i=(0,d.Z)(),s=(0,L.Z)(),u=(0,p.Z)(i.breakpoints.down("md")),x=(0,A.TL)(),m=(0,t.s0)(),G=(0,A.CG)((e=>e.dataLoading)),q=(0,A.CG)((e=>e.authorization.verifyEmailMessage)),[F,O]=(0,h.useState)(!1),U=()=>{O(!F)},[V,W]=(0,h.useState)(!1),H=e=>{e.preventDefault()};(0,h.useEffect)((()=>{q&&W(!0)}),[q]);const T=()=>{x((0,B.Uj)(null)),W(!1)};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(g.Z,{open:V,keepMounted:!0,onClose:T,"aria-describedby":"alert-dialog-slide-description",sx:{"& .MuiDialogTitle-root":{backgroundColor:i.palette.primary.main,color:"#fff"}},children:[(0,D.jsx)(v.Z,{sx:{fontSize:"20px"},children:"Verification Required"}),(0,D.jsx)(f.Z,{children:(0,D.jsx)(j.Z,{id:"alert-dialog-slide-description",children:(0,D.jsxs)(Z.Z,{alignItems:"center",spacing:2,children:[(0,D.jsx)(a.Z,{variant:"h4",color:"primary"}),(0,D.jsx)(a.Z,{variant:"body1",color:"textSecondary",children:q}),(0,D.jsx)(c.Z,{color:"secondary",variant:"contained",size:"large",onClick:T,children:"Close"})]})})})]}),(0,D.jsx)(r.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:(0,D.jsx)(r.ZP,{container:!0,direction:u?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,D.jsx)(r.ZP,{item:!0,children:(0,D.jsxs)(Z.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,D.jsx)(a.Z,{color:i.palette.secondary.main,gutterBottom:!0,variant:u?"h3":"h2",children:"Sign In"}),(0,D.jsx)(a.Z,{variant:"caption",textAlign:"center",sx:{margin:"0px 15px 5px 15px !important"}})]})})})}),(0,D.jsx)(I.J9,{initialValues:{email:"",password:"",submit:null},validationSchema:E.Ry().shape({email:E.Z_().email("Must be a valid email").max(255).required("Email is required"),password:E.Z_().max(255).required("Password is required")}),onSubmit:async(e,n)=>{let{setErrors:i,setStatus:t,setSubmitting:o}=n;try{if(s.current){t({success:!0}),o(!1);const{email:n,password:i}=e,r={email:n,password:i,navigate:m};x((0,_.pH)(r))}}catch(r){console.error(r),s.current&&(t({success:!1}),i({submit:r.message}),o(!1))}},children:e=>{let{errors:t,handleBlur:r,handleChange:s,handleSubmit:d,touched:u,values:x}=e;return(0,D.jsxs)("form",{noValidate:!0,onSubmit:d,...n,children:[(0,D.jsxs)(w.Z,{fullWidth:!0,error:Boolean(u.email&&t.email),sx:{...i.typography.customInput},children:[(0,D.jsx)(y.Z,{htmlFor:"outlined-adornment-email-login",children:"Email Address"}),(0,D.jsx)(b.Z,{id:"outlined-adornment-email-login",type:"email",value:x.email,name:"email",onBlur:r,onChange:s,label:"Email Address",inputProps:{}}),u.email&&t.email&&(0,D.jsx)(C.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:t.email})]}),(0,D.jsxs)(w.Z,{fullWidth:!0,error:Boolean(u.password&&t.password),sx:{...i.typography.customInput},children:[(0,D.jsx)(y.Z,{htmlFor:"outlined-adornment-password-login",children:"Password"}),(0,D.jsx)(b.Z,{id:"outlined-adornment-password-login",type:F?"text":"password",value:x.password,name:"password",onBlur:r,onChange:s,endAdornment:(0,D.jsx)(S.Z,{position:"end",children:(0,D.jsx)(P.Z,{"aria-label":"toggle password visibility",onClick:U,onMouseDown:H,edge:"end",size:"large",children:F?(0,D.jsx)(R.Z,{}):(0,D.jsx)(M.Z,{})})}),label:"Password",inputProps:{}}),u.password&&t.password&&(0,D.jsx)(C.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:t.password})]}),(0,D.jsx)(Z.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,sx:{justifyContent:"right"},children:(0,D.jsx)(a.Z,{variant:"subtitle1",component:o.rU,to:"/forgot-password",color:"secondary",sx:{textDecoration:"none",cursor:"pointer","&:hover":{textDecoration:"underline"}},children:"Forgot Password?"})}),t.submit&&(0,D.jsx)(l.Z,{sx:{mt:3},children:(0,D.jsx)(C.Z,{error:!0,children:t.submit})}),(0,D.jsx)(l.Z,{sx:{mt:2},children:(0,D.jsx)(k.Z,{children:(0,D.jsxs)(c.Z,{disableElevation:!0,disabled:G.loading,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:[G.loading&&(0,D.jsx)(z.Z,{sx:{color:"#0000001f",mr:"10px"},size:"20px"}),"Sign in"]})})})]})}})]})},q=i(84962);const F=(0,h.createContext)(null);function O(e){let{clientId:n,nonce:i,onScriptLoadSuccess:t,onScriptLoadError:o,children:r}=e;const l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{nonce:n,onScriptLoadSuccess:i,onScriptLoadError:t}=e,[o,r]=(0,h.useState)(!1),l=(0,h.useRef)(i);l.current=i;const s=(0,h.useRef)(t);return s.current=t,(0,h.useEffect)((()=>{const e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.nonce=n,e.onload=()=>{var e;r(!0),null===(e=l.current)||void 0===e||e.call(l)},e.onerror=()=>{var e;r(!1),null===(e=s.current)||void 0===e||e.call(s)},document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[n]),o}({nonce:i,onScriptLoadSuccess:t,onScriptLoadError:o}),s=(0,h.useMemo)((()=>({clientId:n,scriptLoadedSuccessfully:l})),[n,l]);return h.createElement(F.Provider,{value:s},r)}function U(){const e=(0,h.useContext)(F);if(!e)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return e}function V(e){var n;return null!==(n=null===e||void 0===e?void 0:e.clientId)&&void 0!==n?n:null===e||void 0===e?void 0:e.client_id}const W={large:40,medium:32,small:20};function H(e){let{onSuccess:n,onError:i,useOneTap:t,promptMomentNotification:o,type:r="standard",theme:l="outline",size:s="large",text:c,shape:a,logo_alignment:d,width:u,locale:x,click_listener:m,containerProps:p,...g}=e;const v=(0,h.useRef)(null),{clientId:f,scriptLoadedSuccessfully:j}=U(),Z=(0,h.useRef)(n);Z.current=n;const w=(0,h.useRef)(i);w.current=i;const y=(0,h.useRef)(o);return y.current=o,(0,h.useEffect)((()=>{var e,n,i,o,h,p,b,C,S;if(j)return null===(i=null===(n=null===(e=null===window||void 0===window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===n?void 0:n.id)||void 0===i||i.initialize({client_id:f,callback:e=>{var n;if(!(null===e||void 0===e?void 0:e.credential))return null===(n=w.current)||void 0===n?void 0:n.call(w);const{credential:i,select_by:t}=e;Z.current({credential:i,clientId:V(e),select_by:t})},...g}),null===(p=null===(h=null===(o=null===window||void 0===window?void 0:window.google)||void 0===o?void 0:o.accounts)||void 0===h?void 0:h.id)||void 0===p||p.renderButton(v.current,{type:r,theme:l,size:s,text:c,shape:a,logo_alignment:d,width:u,locale:x,click_listener:m}),t&&(null===(S=null===(C=null===(b=null===window||void 0===window?void 0:window.google)||void 0===b?void 0:b.accounts)||void 0===C?void 0:C.id)||void 0===S||S.prompt(y.current)),()=>{var e,n,i;t&&(null===(i=null===(n=null===(e=null===window||void 0===window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===n?void 0:n.id)||void 0===i||i.cancel())}}),[f,j,t,r,l,s,c,a,d,u,x]),h.createElement("div",{...p,ref:v,style:{height:W[s],...null===p||void 0===p?void 0:p.style}})}var T=i(70453);var $=()=>{const e=(0,t.s0)(),n=(0,d.Z)(),i=(0,A.TL)(),h=(0,u.v9)((e=>e.customization));return(0,D.jsx)(x.Z,{children:(0,D.jsxs)(r.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,D.jsx)(r.ZP,{item:!0,xs:12,children:(0,D.jsx)(r.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,D.jsx)(r.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,D.jsx)(m.Z,{children:(0,D.jsxs)(r.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,D.jsx)(r.ZP,{item:!0,sx:{mb:2},children:(0,D.jsx)(o.rU,{to:"#",children:(0,D.jsx)("img",{src:q,alt:"Company Logo",style:{width:"250px"}})})}),(0,D.jsx)(r.ZP,{item:!0,xs:12,children:(0,D.jsx)(G,{})}),(0,D.jsx)(r.ZP,{item:!0,xs:12,children:(0,D.jsxs)(l.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,D.jsx)(s.Z,{sx:{flexGrow:1},orientation:"horizontal"}),(0,D.jsx)(c.Z,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:`${n.palette.grey[100]} !important`,color:`${n.palette.grey[900]}!important`,fontWeight:500,borderRadius:`${h.borderRadius}px`},disableRipple:!0,disabled:!0,children:"OR"}),(0,D.jsx)(s.Z,{sx:{flexGrow:1},orientation:"horizontal"})]})}),(0,D.jsx)(r.ZP,{item:!0,children:(0,D.jsx)(O,{clientId:T.Z.googleClientId,children:(0,D.jsx)(H,{onSuccess:n=>{let t={google_access_token:n.credential,navigate:e};i((0,_.Cb)(t))},onError:()=>{console.log("Login Failed")},children:"Login with Google"})})}),(0,D.jsxs)(r.ZP,{item:!0,sx:{display:"flex",textAlign:"center"},alignItems:"center",children:[(0,D.jsx)(a.Z,{variant:"subtitle1",sx:{textAlign:"center"},children:"Don't have an account?"}),(0,D.jsx)(a.Z,{component:o.rU,to:"/register",variant:"subtitle1",sx:{color:"blue",textDecoration:"none",ml:"5px","&:hover":{textDecoration:"underline"}},children:"Sign Up"})]})]})})})})}),(0,D.jsx)(r.ZP,{item:!0,xs:12,sx:{m:3,mt:1}})]})})}},10237:function(e,n,i){var t=i(64836);n.Z=void 0;var o=t(i(45045)),r=i(46417),l=(0,o.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");n.Z=l},22611:function(e,n,i){var t=i(64836);n.Z=void 0;var o=t(i(45045)),r=i(46417),l=(0,o.default)((0,r.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");n.Z=l},84962:function(e,n,i){e.exports=i.p+"static/media/Login.fd3b7294e2b495cd7c3f.png"}}]);