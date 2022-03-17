"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[774],{2036:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(992),o=t(6030),a=t(3044),i=t(6151),s=t(4708),l=t(7913),c=t(1889),u=t(4554),d=t(890),m=t(6445),f=t(3329);function h(){var e=(0,o.v9)(n.HI.K2),r=(0,o.I0)();return(0,f.jsxs)(m.Z,{component:"main",maxWidth:"xs",children:[(0,f.jsx)(s.ZP,{}),(0,f.jsxs)(u.Z,{sx:{marginTop:4,marginBottom:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,f.jsx)(a.Z,{sx:{m:1,bgcolor:"#1976d2"}}),(0,f.jsx)(d.Z,{component:"h1",variant:"h5",children:"Add New Contact"}),(0,f.jsxs)(u.Z,{component:"form",noValidate:!0,onSubmit:function(t){t.preventDefault();var o=new FormData(t.currentTarget),a={name:"".concat(o.get("firstName")," ").concat(o.get("secondName")),number:o.get("phone")};if(e.find((function(e){return e.name===a.name})))return t.currentTarget.reset(),alert("".concat(a.name," is already in your contacts"));r(n.Gq.addContact(a)),t.currentTarget.reset()},sx:{mt:3},children:[(0,f.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,f.jsx)(c.ZP,{item:!0,xs:6,children:(0,f.jsx)(l.Z,{autoComplete:"name",name:"firstName",required:!0,id:"name",label:"First Name",autoFocus:!0})}),(0,f.jsx)(c.ZP,{item:!0,xs:6,children:(0,f.jsx)(l.Z,{autoComplete:"name",name:"secondName",required:!0,id:"name",label:"Second Name"})}),(0,f.jsx)(c.ZP,{item:!0,xs:12,children:(0,f.jsx)(l.Z,{required:!0,fullWidth:!0,name:"phone",label:"Phone Number",type:"tel",id:"phone"})})]}),(0,f.jsx)(i.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"ADD"})]})]})]})}},3044:function(e,r,t){t.d(r,{Z:function(){return b}});var n=t(885),o=t(1048),a=t(2793),i=t(2791),s=t(8182),l=t(767),c=t(7630),u=t(1046),d=t(9201),m=t(3329),f=(0,d.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),h=t(5159);function v(e){return(0,h.Z)("MuiAvatar",e)}(0,t(208).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],p=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,t=e.ownerState;return(0,a.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:r.shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&{color:r.palette.background.default,backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]})})),Z=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),x=(0,c.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var b=i.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiAvatar"}),c=t.alt,d=t.children,f=t.className,h=t.component,b=void 0===h?"div":h,y=t.imgProps,j=t.sizes,k=t.src,S=t.srcSet,N=t.variant,w=void 0===N?"circular":N,C=(0,o.Z)(t,g),P=null,D=function(e){var r=e.crossOrigin,t=e.referrerPolicy,o=e.src,a=e.srcSet,s=i.useState(!1),l=(0,n.Z)(s,2),c=l[0],u=l[1];return i.useEffect((function(){if(o||a){u(!1);var e=!0,n=new Image;return n.onload=function(){e&&u("loaded")},n.onerror=function(){e&&u("error")},n.crossOrigin=r,n.referrerPolicy=t,n.src=o,a&&(n.srcset=a),function(){e=!1}}}),[r,t,o,a]),c}((0,a.Z)({},y,{src:k,srcSet:S})),M=k||S,F=M&&"error"!==D,R=(0,a.Z)({},t,{colorDefault:!F,component:b,variant:w}),z=function(e){var r=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.Z)(t,v,r)}(R);return P=F?(0,m.jsx)(Z,(0,a.Z)({alt:c,src:k,srcSet:S,sizes:j,ownerState:R,className:z.img},y)):null!=d?d:M&&c?c[0]:(0,m.jsx)(x,{className:z.fallback}),(0,m.jsx)(p,(0,a.Z)({as:b,ownerState:R,className:(0,s.Z)(z.root,f),ref:r},C,{children:P}))}))},4554:function(e,r,t){t.d(r,{Z:function(){return v}});var n=t(4695),o=t(916),a=t(2791),i=t(8182),s=t(568),l=t(104),c=t(8519),u=t(3459),d=t(3329),m=["className","component"];var f=t(7829),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.defaultTheme,t=e.defaultClassName,f=void 0===t?"MuiBox-root":t,h=e.generateClassName,v=e.styleFunctionSx,g=void 0===v?l.Z:v,p=(0,s.ZP)("div")(g),Z=a.forwardRef((function(e,t){var a=(0,u.Z)(r),s=(0,c.Z)(e),l=s.className,v=s.component,g=void 0===v?"div":v,Z=(0,o.Z)(s,m);return(0,d.jsx)(p,(0,n.Z)({as:g,ref:t,className:(0,i.Z)(l,h?h(f):f),theme:a},Z))}));return Z}({defaultTheme:(0,t(7107).Z)(),defaultClassName:"MuiBox-root",generateClassName:f.Z.generate}),v=h},4708:function(e,r,t){var n=t(2793),o=t(2791),a=t(1046),i=t(5502),s=t(3329),l=function(e,r){return(0,n.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},r&&{colorScheme:e.palette.mode})},c=function(e){return(0,n.Z)({color:e.palette.text.primary},e.typography.body1,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};r.ZP=function(e){var r=(0,a.Z)({props:e,name:"MuiCssBaseline"}),t=r.children,u=r.enableColorScheme,d=void 0!==u&&u;return(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(i.Z,{styles:function(e){return function(e){var r,t,o={html:l(e,arguments.length>1&&void 0!==arguments[1]&&arguments[1]),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,n.Z)({margin:0},c(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})},a=null==(r=e.components)||null==(t=r.MuiCssBaseline)?void 0:t.styleOverrides;return a&&(o=[o,a]),o}(e,d)}}),t]})}}}]);
//# sourceMappingURL=add-contact-page.13609dbf.chunk.js.map