"use strict";(self.webpackChunkslim_mom=self.webpackChunkslim_mom||[]).push([[787],{6433:function(n,e,t){t.r(e),t.d(e,{default:function(){return Gn}});var i,r,o=t(1413),a=t(5861),l=t(885),d=t(7757),s=t.n(d),c=t(168),u=t(6444),p=u.ZP.button(i||(i=(0,c.Z)(["\n  padding: 10px;\n  height: 48px;\n  background: transparent;\n\n  border: none;\n\n  transition: fill linear 200ms;\n  fill: ",";\n  &:hover,\n  &:focus {\n\n\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.colorTextPrimary})),h=u.ZP.svg(r||(r=(0,c.Z)(["\n  stroke: ",";\n  transition: stroke linear 200ms;\n  &:hover,\n  &:focus {\n    stroke: #fc842d;\n\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.colorTextPrimary})),m=t(3329);function x(n){var e=n.onClick,t=n.showCalendar;return(0,m.jsx)(p,{onClick:e,type:"button",children:t?(0,m.jsxs)(h,{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,m.jsxs)("g",{clipPath:"url(#clip0_6_1348)",children:[(0,m.jsx)("path",{d:"M6 6L18 18",strokeWidth:"2"}),(0,m.jsx)("path",{d:"M6 18L18 6",strokeWidth:"2"})]}),(0,m.jsx)("defs",{children:(0,m.jsx)("clipPath",{id:"clip0_6_1348",children:(0,m.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}):(0,m.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,m.jsx)("path",{d:"M15 9H13V11H15V9Z"}),(0,m.jsx)("path",{d:"M11 9H9V11H11V9Z"}),(0,m.jsx)("path",{d:"M7.00008 9H5.00006V11H7.00008V9Z"}),(0,m.jsx)("path",{d:"M17 2.00001H16V0H14V2.00001H6.00001V0H4V2.00001H3.00001C1.89001 2.00001 1.01003 2.90001 1.01003 4.00003L1 18C1 19.1 1.89001 20 3.00001 20H17C18.1 20 19 19.1 19 18V3.99998C19 2.90001 18.1 2.00001 17 2.00001ZM17 18H3.00001V6.99998H17V18Z"})]})})}var g,f,b,v,w,Z,k,y,j,P=t(8603),A=t(9181),S=(0,u.F4)(g||(g=(0,c.Z)(["\n  50% {\n    color: rgb(252, 132, 45);\n  }\n"]))),T=u.ZP.div(f||(f=(0,c.Z)(["\n  position: fixed;\n  min-width: 320px;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(33, 33, 33, 0.12);\n  z-index: 1200;\n\n  @media "," {\n    top: 120px;\n  }\n"])),A.A.maxMobile),D=u.ZP.div(b||(b=(0,c.Z)(["\n  position: relative;\n  display: flex;\n  gap: 10px;\n\n  margin-top: 40px;\n  @media "," {\n    margin-top: 90px;\n  }\n  @media "," {\n    margin-top: 220px;\n  }\n"])),A.A.minTablet,A.A.desktop),C=u.ZP.p(v||(v=(0,c.Z)(["\n  font-family: 'Jost';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 26px;\n  display: flex;\n  align-items: center;\n\n  @media "," {\n    font-size: 34px;\n    line-height: 49px;\n  }\n\n  color: ",";\n\n  animation-name: ",";\n  animation-duration: 1000ms;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n"])),A.A.minTablet,(function(n){return n.theme.colorTextPrimary}),(function(n){return"pending"===n.state?S:"none"})),H=(0,u.ZP)(P.ZP)(w||(w=(0,c.Z)(["\n  position: absolute;\n  top: 100px;\n\n  &.react-calendar {\n    background: ",";\n    border-radius: 4px;\n    overflow: hidden;\n  }\n\n  & button:disabled,\n  & button:disabled.react-calendar__navigation__arrow {\n    background: ",";\n  }\n\n  @media "," {\n    left: centr;\n    top: 230px;\n    transform: translateX(-35%);\n    \n  }\n\n  @media "," {\n  top: 290px;\n  transform: translateX(-120%);\n\n  }\n"])),(function(n){return n.theme.modalColor}),(function(n){return n.theme.calendarColor}),A.A.minTablet,A.A.desktop),V=(t(830),t(2791)),L=t(1087),z=t(7689);function M(n){var e=n.date,t=n.setDate,i=(0,V.useState)(!1),r=(0,l.Z)(i,2),o=r[0],d=r[1],c=(0,L.lr)(),u=(0,l.Z)(c,2),p=u[0],h=u[1],g=new Date(p.get("date")||e),f=(0,z.bx)().state,b=g.toLocaleDateString("en-GB").replaceAll("/","."),v=function(n){"Escape"===n.key&&d(!1)};(0,V.useEffect)((function(){return window.addEventListener("keydown",v),function(){window.removeEventListener("keydown",v)}}),[]);var w=function(){var n=(0,a.Z)(s().mark((function n(e){var i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=new Date(e),t(i),d(!1),h({date:i.toLocaleDateString("en-CA")});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,m.jsxs)(D,{children:[(0,m.jsx)(C,{state:f,children:b}),(0,m.jsx)(x,{showCalendar:o,onClick:function(){d(!o)}}),o&&(0,m.jsx)(T,{onClick:function(n){n.currentTarget===n.target&&d(!1)},children:(0,m.jsx)(H,{onClickDay:w,value:e})})]})}var E=(0,u.F4)(Z||(Z=(0,c.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),_=(0,u.iv)(k||(k=(0,c.Z)(["\n  ",";\n"])),E),R=u.ZP.button(y||(y=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 48px;\n  height: 48px;\n\n  margin: 0 auto 60px;\n\n  background: #fc842d;\n\n  color: white;\n\n  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color linear 250ms, stroke linear 250ms,\n    border linear 250ms, box-shadow linear 250ms;\n  :hover,\n  :focus {\n    background-color: ",";\n    stroke: ",";\n     border: 1px solid ",";\n    box-shadow: none;\n  }\n\n  :disabled {\n    background-color: rgba(255, 99, 71, 0.8);\n    opacity: 0.5;\n    border: none;\n    box-shadow: none;\n  }\n  @media "," {\n    margin: 0 0 0 90px;\n  }\n"])),(function(n){return n.theme.color}),(function(n){return n.theme.gradient?"#fc842d":"white"}),(function(n){return n.theme.gradient?"#fc842d":"white"}),A.A.minTablet),B=u.ZP.svg(j||(j=(0,c.Z)(["\n  animation-name: ",";\n  animation-duration: 2s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n"])),(function(n){return"pending"===n.state?_:"none"}));function J(n){var e=n.onClick,t=n.type,i=void 0===t?"submit":t,r=n.errorState,o=n.state;return(0,m.jsx)(R,{type:i,disabled:r,onClick:e,children:(0,m.jsx)(B,{state:o,width:"14",height:"14",viewBox:"0 0 14 14",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsx)("path",{d:"M13.72 7.96003H7.95997V13.72H6.03997V7.96003H0.279968V6.04003H6.03997V0.280029H7.95997V6.04003H13.72V7.96003Z",fill:"white"})})})}var W,q,F,I,X,G,K,N,O,Q=t(4584),U=t(2982),Y=t(5095),$=t.n(Y),nn=t(5985),en=t(5890),tn=u.ZP.form(W||(W=(0,c.Z)(["\n  @media "," {\n    display: flex;\n    gap: 22px;\n    margin: 60px 0;\n  }\n"])),A.A.minTablet),rn=u.ZP.input(q||(q=(0,c.Z)(["\n  display: block;\n  width: 100%;\n  padding-bottom: 5px;\n  margin-top: 80px;\n\n  font-family: 'Jost';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.04em;\n\n  color: ",";\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #e0e0e0;\n  outline: ","; \n  border-radius: 4px;\n\n  @media "," {\n    margin: 0;\n    width: 240px;\n  }\n  ::placeholder {\n    color: #9b9faa;\n  }\n"])),(function(n){return n.theme.modalTextColor}),(function(n){return n.errorState?" 3px ridge rgba(255, 99, 71, 0.8)":"none"}),A.A.minTablet),on=u.ZP.input(F||(F=(0,c.Z)(["\n  display: block;\n  width: 100%;\n  padding-bottom: 5px;\n  margin-top: 32px;\n\n  font-family: 'Jost';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.04em;\n\n  color: ",";\n  background-color: transparent;\n\n  border: none;\n  border-bottom: 1px solid #e0e0e0;\n  outline: none;\n\n  @media "," {\n    margin: 0;\n    max-width: 105px;\n  }\n\n  ::placeholder {\n    color: #9b9faa;\n    @media "," {\n      text-align: end;\n    }\n  }\n"])),(function(n){return n.theme.modalTextColor}),A.A.minTablet,A.A.minTablet),an=u.ZP.div(I||(I=(0,c.Z)(["\n  display: none;\n  @media "," {\n    display: block;\n  }\n"])),A.A.minTablet),ln=u.ZP.div(X||(X=(0,c.Z)(["\n  display: block;\n  @media "," {\n    display: none;\n  }\n"])),A.A.minTablet),dn=u.ZP.button(G||(G=(0,c.Z)(["\n  display: block;\n  width: 176px;\n  height: 44px;\n  padding: 13px 46px;\n  margin: 60px auto 0;\n\n  font-family: 'Jost';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.04em;\n\n  color: #ffffff;\n\n  background: #fc842d;\n  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);\n  border-radius: 30px;\n  border: none;\n\n  :disabled {\n    background-color: rgba(255, 99, 71, 0.8);\n    opacity: 0.5;\n    border: none;\n    box-shadow: none;\n  }\n"])));function sn(n){var e=n.handleClose,t=n.register,i=n.handleSubmit,r=n.reset,d=n.normalizedDate,c=n.setEatenProducts,u=(0,z.bx)().setDailyRate,p=(0,V.useState)(""),h=(0,l.Z)(p,2),x=h[0],g=h[1],f=(0,V.useState)([]),b=(0,l.Z)(f,2),v=b[0],w=b[1],Z=(0,V.useState)(null),k=(0,l.Z)(Z,2),y=k[0],j=k[1],P=(0,V.useState)("idle"),A=(0,l.Z)(P,2),S=A[0],T=A[1];nn.Am.warn(y);var D=function(){var n=(0,a.Z)(s().mark((function n(e){var t,i,r,o,a,l,d;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.target.value,i=null===v||void 0===v?void 0:v.find((function(n){return n.title.ua===t})),g(t),j(null),!(t&&t.length<30)||i){n.next=21;break}return n.prev=5,T("pending"),n.next=9,en.Z.searchingProductRequest(t);case 9:r=n.sent,o=r.data,w(o),nn.Am.dismiss(),T("idle"),n.next=21;break;case 16:n.prev=16,n.t0=n.catch(5),T("idle"),d=null===n.t0||void 0===n.t0||null===(a=n.t0.response)||void 0===a||null===(l=a.data)||void 0===l?void 0:l.message,j(d);case 21:case"end":return n.stop()}}),n,null,[[5,16]])})));return function(e){return n.apply(this,arguments)}}(),C=function(){var n=(0,a.Z)(s().mark((function n(t){var i,a,l,p,h,m,x,f,b;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=t.title,a=t.weight,l=v.find((function(n){return n.title.ua===i})),T("pending"),j(null),!l){n.next=29;break}return e&&e(),r(),p={weight:a,productId:l._id,date:d},nn.Am.dismiss(),n.prev=9,n.next=12,en.Z.addEatenProductRequest(p);case 12:return h=n.sent,m=h.data,n.next=16,T("idle");case 16:c((function(n){return n?[].concat((0,U.Z)(n),[null===m||void 0===m?void 0:m.eatenProduct]):[null===m||void 0===m?void 0:m.eatenProduct]})),u((function(n){var e,t,i,r;return(0,o.Z)((0,o.Z)({},n),{},{daySummary:(null===m||void 0===m?void 0:m.daySummary)||(null===m||void 0===m?void 0:m.newSummary),kcalLeft:(null===m||void 0===m||null===(e=m.daySummary)||void 0===e?void 0:e.kcalLeft)||(null===m||void 0===m||null===(t=m.newSummary)||void 0===t?void 0:t.kcalLeft),id:(null===m||void 0===m||null===(i=m.day)||void 0===i?void 0:i.id)||(null===m||void 0===m||null===(r=m.newDay)||void 0===r?void 0:r.id)})})),w([]),g(""),n.next=27;break;case 22:n.prev=22,n.t0=n.catch(9),b=null===n.t0||void 0===n.t0||null===(x=n.t0.response)||void 0===x||null===(f=x.data)||void 0===f?void 0:f.message,T("idle"),j(b);case 27:n.next=31;break;case 29:nn.Am.info("Please use dropdown list only!"),T("idle");case 31:case"end":return n.stop()}}),n,null,[[9,22]])})));return function(e){return n.apply(this,arguments)}}(),H=x;return(0,m.jsxs)(tn,{onSubmit:i(C),children:[(0,m.jsx)(rn,(0,o.Z)((0,o.Z)({errorState:y,type:"text"},t("title")),{},{onInput:$()(D,200),placeholder:"Enter product name",list:"products"})),(0,m.jsx)("datalist",{id:"products",children:v.map((function(n){return(0,m.jsxs)("option",{value:n.title.ua,"product-id":n._id,children:["Caloricity: ",n.calories," kKal / 100g"]},n._id)}))}),(0,m.jsx)(on,(0,o.Z)((0,o.Z)({disabled:!H,type:"number",min:"1"},t("weight")),{},{placeholder:"Grams"})),(0,m.jsx)(ln,{children:(0,m.jsx)(dn,{disabled:y,type:"submit",children:"Add"})}),(0,m.jsx)(an,{children:(0,m.jsx)(J,{errorState:y,state:S})})]})}var cn,un,pn,hn,mn,xn,gn=u.ZP.div(K||(K=(0,c.Z)(["\n  position: absolute;\n  top: 120px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: ",";\n"])),(function(n){return n.theme.color})),fn=u.ZP.div(N||(N=(0,c.Z)(["\n  position: absolute;\n  top: -38px;\n  background: #eff1f3;\n"]))),bn=u.ZP.div(O||(O=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 34px;\n  padding: 0;\n  background-color: transparent;\n  /* transform: scale(1.1); */\n\n  border: none;\n  cursor: pointer;\n"])));function vn(n){var e=n.handleClose,t=n.register,i=n.handleSubmit,r=n.reset,o=n.normalizedDate,a=n.setEatenProducts,l=n.watch,d=n.handleDeleteProduct;return(0,m.jsx)(gn,{children:(0,m.jsxs)(Q.W,{children:[(0,m.jsx)(fn,{children:(0,m.jsx)(bn,{onClick:e,children:(0,m.jsx)("svg",{width:"16",height:"10",viewBox:"0 0 15 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsx)("path",{d:"M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8",stroke:"black",strokeWidth:"2"})})})}),(0,m.jsx)(sn,{handleClose:e,register:t,handleSubmit:i,reset:r,normalizedDate:o,watch:l,setEatenProducts:a,handleDeleteProduct:d})]})})}var wn,Zn,kn=(0,u.F4)(cn||(cn=(0,c.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),yn=u.ZP.li(un||(un=(0,c.Z)(["\n  display: flex;\n  gap: 8px;\n  align-items: flex-end;\n  justify-content: space-between;\n"]))),jn=u.ZP.p(pn||(pn=(0,c.Z)(["\n  width: 180px;\n  min-height: 24px;\n  border-bottom: 1px solid #e0e0e0;\n  padding-bottom: 5px;\n\n  margin-right: -5px;\n\n  font-family: 'Jost';\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n\n  /* color: #212121; */\n  color: ",";\n\n  @media "," {\n    min-width: 240px;\n    min-height: 36px;\n    margin-right: 22px;\n\n    line-height: 20px;\n\n    /* color: #212121; */\n    color: ",";\n  }\n  @media "," {\n    min-height: 40px;\n    margin-right: 22px;\n  }\n"])),(function(n){return n.theme.colorTextPrimary}),A.A.minTablet,(function(n){return n.theme.colorTextPrimary}),A.A.desktop),Pn=u.ZP.span(hn||(hn=(0,c.Z)(["\n  min-width: 50px;\n  height: 24px;\n\n  padding: 0 1px;\n  border-bottom: 1px solid #e0e0e0;\n\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  text-align: center;\n  letter-spacing: 0.04em;\n\n  /* color: #212121; */\n  color: ",";\n\n  @media "," {\n    width: 106px;\n    height: 36px;\n    margin-right: 46px;\n  }\n  @media "," {\n    width: 107px;\n    height: 40px;\n    margin-right: 32px;\n  }\n"])),(function(n){return n.theme.colorTextPrimary}),A.A.minTablet,A.A.desktop),An=u.ZP.span(mn||(mn=(0,c.Z)(["\n  width: 64px;\n  height: 24px;\n\n  padding: 0 1px;\n\n  border-bottom: 1px solid #e0e0e0;\n\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  text-align: center;\n  letter-spacing: 0.04em;\n\n  /* color: #212121; */\n  color: ",";\n\n  @media "," {\n    width: 106px;\n    height: 36px;\n    margin-right: 28px;\n    text-align: right;\n  }\n  @media "," {\n    height: 40px;\n  }\n"])),(function(n){return n.theme.colorTextPrimary}),A.A.minTablet,A.A.desktop),Sn=u.ZP.button(xn||(xn=(0,c.Z)(["\n  margin: 0 12px 0 7px;\n  background: transparent;\n  border: 0;\n\n  @media "," {\n    display: flex;\n    margin-bottom: 6px;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus {\n      /* transform: rotate(135deg); */\n      cursor: pointer;\n    }\n  }\n  & svg {\n    stroke: #9b9faa;\n  }\n\n  &:disabled svg {\n    stroke: tomato;\n    animation-name: ",";\n    animation-duration: 400ms;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n  }\n"])),A.A.minTablet,kn);function Tn(n){var e=n.name,t=n.weight,i=n.kcal,r=n.id,o=n.handleDeleteProduct,a=n.isDeliting;return(0,m.jsxs)(yn,{children:[(0,m.jsx)(jn,{children:e}),(0,m.jsxs)(Pn,{children:[t," g"]}),(0,m.jsxs)(An,{children:[Math.round(i),"kcal"]}),(0,m.jsx)(Sn,{type:"button",disabled:a,onClick:function(){o(r)},children:(0,m.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/CrossButton",children:[(0,m.jsx)("path",{d:"M1 1L13 13",strokeWidth:"2"}),(0,m.jsx)("path",{d:"M1 13L13 0.999999",strokeWidth:"2"})]})})]})}var Dn=u.ZP.ul(wn||(wn=(0,c.Z)(["\n  margin: 22px 0 65px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  height: 240px;\n\n  overflow-y: auto;\n\n  &::-webkit-scrollbar {\n    width: 6px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: #f0f1f3;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: ",";\n  }\n\n  @media "," {\n    gap: 22px;\n    max-width: 610px;\n    height: 286px;\n    margin: 0 0 85px;\n    padding-right: 30px;\n  }\n  @media "," {\n    height: 280px;\n    margin: 60px auto 32px 0;\n  }\n"])),(function(n){return n.theme.gradient?"#264061":"#9b9faa"}),A.A.minTablet,A.A.desktop),Cn=u.ZP.p(Zn||(Zn=(0,c.Z)(["\n  height: 242px;\n  font-family: 'Jost';\n  font-weight: 400;\n  font-size: 28px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n\n  margin: 40px 0 50px;\n\n  /* color: #212121; */\n  color: ",";\n\n  @media "," {\n    width: 286px;\n    max-height: 610px;\n    margin-right: 22px;\n    margin-bottom: 130px;\n\n    line-height: 20px;\n\n    /* color: #212121; */\n    color: ",";\n  }\n  @media "," {\n    height: 280px;\n    margin-bottom: 0;\n  }\n"])),(function(n){return n.theme.colorTextPrimary}),A.A.minTablet,(function(n){return n.theme.colorTextPrimary}),A.A.desktop);function Hn(n){var e=n.products,t=n.handleDeleteProduct,i=n.isDeliting;return(0,m.jsx)(m.Fragment,{children:(null===e||void 0===e?void 0:e.length)>0&&e?(0,m.jsx)(Dn,{children:e.map((function(n){return(0,m.jsx)(Tn,{handleDeleteProduct:t,id:n.id,name:n.title,weight:n.weight,kcal:n.kcal,isDeliting:i===n.id},n.id)}))}):(0,m.jsx)(Cn,{children:"Please, add product!"})})}var Vn,Ln,zn,Mn,En,_n=t(1134),Rn=u.ZP.div(Vn||(Vn=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  @media "," {\n    padding: 0 60px;\n  }\n\n  @media "," {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"])),A.A.minTablet,A.A.desktop),Bn=u.ZP.div(Ln||(Ln=(0,c.Z)(["\n  position: relative;\n"]))),Jn=u.ZP.div(zn||(zn=(0,c.Z)(["\n  display: none;\n\n  @media "," {\n    display: block;\n    /* display: none; */\n    position: absolute;\n\n    left: 0;\n    bottom: 35px;\n\n    width: 500px;\n    height: 50px;\n    display: block;\n    background: ",";\n  }\n\n  @media "," {\n    bottom: 120px;\n    width: 520px;\n    height: 50px;\n  }\n"])),A.A.minTablet,(function(n){return n.theme.gradient?"linear-gradient(\n        180deg,\n        rgba(255, 255, 255, 0.5) 0%,\n        #fff 50%\n      )":"transparent"}),A.A.desktop),Wn=u.ZP.div(Mn||(Mn=(0,c.Z)(["\n  display: none;\n  @media "," {\n    display: block;\n  }\n"])),A.A.minTablet),qn=u.ZP.div(En||(En=(0,c.Z)(["\n  display: block;\n  @media "," {\n    display: none;\n  }\n"])),A.A.minTablet),Fn=t(4695),In=t(2797),Xn=In.Ry({weight:In.Rx().min(1).required()}).required();function Gn(){var n,e=(0,_n.cI)({resolver:(0,Fn.X)(Xn)}),t=e.register,i=e.handleSubmit,r=e.reset,d=e.watch,c=e.formState.errors;(0,V.useEffect)((function(){var n;nn.Am.dismiss(),nn.Am.info(null===(n=c.weight)||void 0===n?void 0:n.message)}),[null===(n=c.weight)||void 0===n?void 0:n.message]);var u=(0,L.lr)(),p=(0,l.Z)(u,1)[0].get("date")||new Date,h=(0,z.bx)(),x=h.dailyRate,g=h.setDailyRate,f=null===x||void 0===x?void 0:x.eatenProducts,b=(0,V.useState)(!1),v=(0,l.Z)(b,2),w=v[0],Z=v[1],k=(0,V.useState)(new Date(p)),y=(0,l.Z)(k,2),j=y[0],P=y[1],A=(0,V.useState)([]),S=(0,l.Z)(A,2),T=S[0],D=S[1],C=(0,V.useState)(null),H=(0,l.Z)(C,2),E=H[0],_=H[1],R=j.toLocaleDateString("en-CA").replaceAll("/","-");(0,V.useEffect)((function(){D(f)}),[f]);var B=function(){var n=(0,a.Z)(s().mark((function n(e){var t,i,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=x.id,_(e),n.prev=2,n.next=5,en.Z.deleteEatenProductRequest(t,e);case 5:i=n.sent,r=i.data,g((function(n){var e;return(0,o.Z)((0,o.Z)({},n),{},{daySummary:null===r||void 0===r?void 0:r.newDaySummary,kcalLeft:null===r||void 0===r||null===(e=r.newDaySummary)||void 0===e?void 0:e.kcalLeft})})),D((function(n){return n.filter((function(n){return n.id!==e}))})),_(null),n.next=14;break;case 12:n.prev=12,n.t0=n.catch(2);case 14:case"end":return n.stop()}}),n,null,[[2,12]])})));return function(e){return n.apply(this,arguments)}}();return(0,m.jsxs)(m.Fragment,{children:[!w&&(0,m.jsx)(Rn,{children:(0,m.jsxs)(Bn,{children:[(0,m.jsx)(M,{date:j,setDate:P}),(0,m.jsx)(Wn,{children:(0,m.jsx)(sn,{register:t,handleSubmit:i,reset:r,normalizedDate:R,watch:d,setEatenProducts:D})}),(0,m.jsx)(Hn,{products:T,handleDeleteProduct:B,isDeliting:E}),(null===T||void 0===T?void 0:T.length)>0&&(0,m.jsx)(Jn,{}),(0,m.jsx)(qn,{children:(0,m.jsx)(J,{type:"button",onClick:function(){Z(!0)}})})]})}),w&&(0,m.jsx)(vn,{handleClose:function(){Z(!1)},handleDeleteProduct:B,register:t,handleSubmit:i,reset:r,normalizedDate:R,watch:d,setEatenProducts:D})]})}}}]);
//# sourceMappingURL=787.0426c810.chunk.js.map