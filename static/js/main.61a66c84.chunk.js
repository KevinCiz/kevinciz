(this.webpackJsonpkevinciz=this.webpackJsonpkevinciz||[]).push([[0],{46:function(n,t,e){},66:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e(1),c=e.n(i),a=e(18),o=e.n(a),s=(e(46),e(15)),u=e(5),d=e(21),l=e(19),x=e(12),j=e(39),f=e.n(j),b=e(3),h=e(4);function p(){var n=Object(b.a)(["\n  padding: 1rem 1.5rem;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  color: white;\n  font-weight: bold;\n  font-size: 0.9rem;\n  transition: all 0.3s ease-in;\n\n  &.active {\n    color: #7b7fda;\n    border-bottom: 3px solid #01bf71;\n  }\n\n  &:hover {\n    color: #7b7fda;\n  }\n"]);return p=function(){return n},n}function m(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n\n  @media screen and (max-width: 768px) {\n    overflow: hidden;\n    flex-direction: column;\n    width: 100%;\n    max-height: ",";\n    transition: max-height 0.5s ease-in-out;\n  }\n"]);return m=function(){return n},n}function g(){var n=Object(b.a)(["\n  display: none;\n\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 60%);\n    font-size: 1.8rem;\n    cursor: pointer;\n    color: white;\n  }\n"]);return g=function(){return n},n}function O(){var n=Object(b.a)(['\n  padding: 1rem 0;\n  color: #7b7fda;\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 1.7rem;\n  /* font-family: "Big Shoulders Stencil"; */\n  span {\n    font-weight: 400;\n    font-size: 1.3rem;\n    color: gainsboro;\n  }\n']);return O=function(){return n},n}function v(){var n=Object(b.a)(["\n  padding: 0 2rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1100px;\n  flex-wrap: wrap;\n"]);return v=function(){return n},n}function w(){var n=Object(b.a)(["\n  opacity: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: black;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  transition: opacity 1s ease-in-out;\n\n  @media screen and (max-width: 960px) {\n    transition: 0.8s all ease;\n  }\n"]);return w=function(){return n},n}var y=h.a.nav(w(),(function(n){return n.scrollNav?"70%":"100%"})),k=h.a.div(v()),z=Object(h.a)(s.b)(O()),L=h.a.div(g()),S=h.a.div(m(),(function(n){return n.isOpen?"300px":0})),T=Object(h.a)(x.Link)(p()),C=function(n){var t=n.toggle,e=n.isOpen,c=Object(i.useState)(!1),a=Object(l.a)(c,2),o=a[0],s=a[1],u=function(){window.scrollY>80?s(!0):s(!1)};Object(i.useEffect)((function(){window.addEventListener("scroll",u)}),[]);return Object(r.jsx)(y,{scrollNav:o,children:Object(r.jsxs)(k,{children:[Object(r.jsxs)(z,{to:"/",onClick:function(){x.animateScroll.scrollToTop()},children:["Kev",Object(r.jsx)("span",{children:"Portfolio"})]}),Object(r.jsx)(L,{children:Object(r.jsx)(f.a,{onClick:t})}),Object(r.jsxs)(S,{isOpen:e,children:[Object(r.jsx)(T,{to:"about",smooth:!0,duration:500,spy:!0,exact:"true",children:"About"}),Object(r.jsx)(T,{to:"experience",smooth:!0,duration:500,spy:!0,exact:"true",children:"Experience"}),Object(r.jsx)(T,{to:"skills",smooth:!0,duration:500,spy:!0,exact:"true",children:"Skills"}),Object(r.jsx)(T,{to:"contact",smooth:!0,duration:500,spy:!0,exact:"true",children:"Contact"})]})]})})};function B(){var n=Object(b.a)(["\n  border-radius: 50px;\n  background: ",";\n  white-space: nowrap;\n  padding: ",";\n  color: ",";\n  font-size: ",";\n  outline: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  font-weight: 700;\n  margin-right: 20px;\n  text-decoration: none;\n\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    color: ",";\n  }\n"]);return B=function(){return n},n}function E(){var n=Object(b.a)(["\n  border-radius: 50px;\n  background: ",";\n  white-space: nowrap;\n  padding: ",";\n  color: ",";\n  font-size: ",";\n  outline: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  font-weight: 700;\n  margin-right: 20px;\n\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    color: ",";\n    /* background: ","; */\n  }\n"]);return E=function(){return n},n}var D=Object(h.a)(x.Link)(E(),(function(n){return n.primary?"#01BF71":"#010606"}),(function(n){return n.big?"14px 48px":"12px 30px"}),(function(n){return n.dark?"#010606":"#fff"}),(function(n){return n.fontBig?"20px":"16px"}),(function(n){return n.primary?"white":"#7b7fda"}),(function(n){return n.primary?"#fff":null})),A=h.a.a(B(),(function(n){return n.primary?"#01BF71":"white"}),(function(n){return n.big?"14px 48px":"12px 30px"}),(function(n){return n.dark?"#010606":"#fff"}),(function(n){return n.fontBig?"20px":"16px"}),(function(n){return n.primary?"white":"#7b7fda"}));function K(){var n=Object(b.a)(["\n  width: 100%;\n  margin: 0 0 10px 0;\n  padding-right: 0;\n"]);return K=function(){return n},n}function F(){var n=Object(b.a)(["\n  max-width: 555px;\n  height: 100%;\n"]);return F=function(){return n},n}function M(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: flex-start;\n"]);return M=function(){return n},n}function V(){var n=Object(b.a)(["\n  max-width: 440px;\n  margin-bottom: 35px;\n  font-size: 18px;\n  line-height: 24px;\n  color: ",";\n"]);return V=function(){return n},n}function _(){var n=Object(b.a)(["\n  margin-bottom: 24px;\n  font-size: 48px;\n  line-height: 1.1;\n  font-weight: 600;\n  color: ",";\n\n  @media screen and (max-width: 480px) {\n    font-size: 32px;\n  }\n"]);return _=function(){return n},n}function P(){var n=Object(b.a)(["\n  color: #01bf71;\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: 700;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n"]);return P=function(){return n},n}function N(){var n=Object(b.a)(["\n  max-width: 540px;\n  padding-top: 0;\n  padding-bottom: 60px;\n"]);return N=function(){return n},n}function R(){var n=Object(b.a)(["\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col2;\n"]);return R=function(){return n},n}function W(){var n=Object(b.a)(["\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col1;\n"]);return W=function(){return n},n}function G(){var n=Object(b.a)(["\n  display: grid;\n  grid-auto-columns: minmax(auto, 1fr);\n  align-items: center;\n  grid-template-areas: ",";\n\n  @media screen and (max-width: 768px) {\n    grid-template-areas: ",";\n  }\n"]);return G=function(){return n},n}function I(){var n=Object(b.a)(["\n  display: grid;\n  z-index: 1;\n  height: 800px;\n  width: 100%;\n  max-width: 1100px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 0 24px;\n  justify-content: center;\n"]);return I=function(){return n},n}function Q(){var n=Object(b.a)(["\n  color: #fff;\n  background: ",";\n\n  @media screen and (max-width: 768px) {\n    padding: 100px 0;\n  }\n"]);return Q=function(){return n},n}var Y=h.a.div(Q(),(function(n){return n.lightBg?"#f9f9f9":"#010606"})),J=h.a.div(I()),H=h.a.div(G(),(function(n){return n.imgStart?"'col2 col1'":"'col1 col2'"}),(function(n){return n.imgStart?"'col1' 'col2'":"'col1 col1' 'col2 col2'"})),U=h.a.div(W()),q=h.a.div(R()),X=h.a.div(N()),Z=h.a.p(P()),$=h.a.h1(_(),(function(n){return n.lightText?"#f7f8fa":"#010606"})),nn=h.a.p(V(),(function(n){return n.darkText?"#010606":"#fff"})),tn=h.a.div(M()),en=h.a.div(F()),rn=h.a.img(K()),cn=function(n){var t=n.id,e=n.lightBg,i=n.lightText,c=(n.lightTextDesc,n.topLine),a=n.headLine,o=n.description,s=n.buttonLabel,u=n.button2,d=n.buttonLabel2,l=(n.buttonLabel2dark,n.imgStart),x=n.img,j=n.alt,f=n.dark,b=n.primary,h=n.darkText,p=n.dark2,m=n.primary2,g=n.button,O=n.buttonDirect;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Y,{lightBg:e,id:t,children:Object(r.jsx)(J,{children:Object(r.jsxs)(H,{imgStart:l,children:[Object(r.jsx)(U,{children:Object(r.jsxs)(X,{children:[Object(r.jsx)(Z,{children:c}),Object(r.jsx)($,{lightText:i,children:a}),Object(r.jsx)(nn,{darkText:h,children:o}),Object(r.jsxs)(tn,{children:[g?Object(r.jsx)(D,{to:O,smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,dark:f?1:0,primary:b?1:0,children:s}):null,u?Object(r.jsx)(A,{dark:p?1:0,primary:m?1:0,href:"https://drive.google.com/file/d/1e1HJiYVgLKdW5nE6AL8GTuyacW_zSuT_/view?usp=sharing",target:"_blank",children:d}):null]})]})}),Object(r.jsx)(q,{children:Object(r.jsx)(en,{children:Object(r.jsx)(rn,{src:x,alt:j})})})]})})})})};function an(){var n=Object(b.a)(["\n  font-size: 1rem;\n  text-align: center;\n  margin-bottom: 10px;\n"]);return an=function(){return n},n}function on(){var n=Object(b.a)(["\n  font-size: 1rem;\n  margin-bottom: 10px;\n"]);return on=function(){return n},n}function sn(){var n=Object(b.a)(["\n  font-size: 2.5rem;\n  color: #fff;\n  margin-bottom: 64px;\n\n  @media screen and (max-width: 480px) {\n    font-size: 2rem;\n  }\n"]);return sn=function(){return n},n}function un(){var n=Object(b.a)(["\n  height: 160px;\n  width: 160px;\n  margin-bottom: 10px;\n"]);return un=function(){return n},n}function dn(){var n=Object(b.a)(["\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 10px;\n  max-height: 340px;\n  padding: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease-in-out;\n  width: 300px;\n\n  &:hover {\n    transform: scale(1.02);\n    transition: all 0.2s ease-in-out;\n    cursor: context-menu;\n  }\n"]);return dn=function(){return n},n}function ln(){var n=Object(b.a)(["\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n  grid-gap: 16px;\n  padding: 0 50px;\n\n  @media screen and (max-width: 1000px) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media screen and (max-width: 768px) {\n    grid-template-columns: 1fr;\n    padding: 0 20px;\n  }\n"]);return ln=function(){return n},n}function xn(){var n=Object(b.a)(["\n  height: 800px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #010606;\n\n  @media screen and (max-width: 768px) {\n    height: 1500px;\n    width: 100%;\n  }\n\n  @media screen and (max-width: 480px) {\n    height: 1500px;\n  }\n"]);return xn=function(){return n},n}var jn=h.a.div(xn()),fn=h.a.div(ln()),bn=h.a.div(dn()),hn=h.a.img(un()),pn=h.a.h1(sn()),mn=h.a.h2(on()),gn=h.a.p(an()),On=e.p+"static/media/react.7b78f5c3.svg",vn=e.p+"static/media/code.92468753.svg",wn=e.p+"static/media/project.9a059047.svg",yn=function(){return Object(r.jsxs)(jn,{id:"experience",children:[Object(r.jsx)(pn,{children:"Experience"}),Object(r.jsxs)(fn,{children:[Object(r.jsxs)(bn,{children:[Object(r.jsx)(hn,{src:On}),Object(r.jsx)(mn,{children:"Reactjs, Nodejs"}),Object(r.jsx)(gn,{children:"Full understanding of React Hook Cycle"}),Object(r.jsx)(gn,{children:"Experience in both FrontEnd and Backend Architecture"})]}),Object(r.jsxs)(bn,{children:[Object(r.jsx)(hn,{src:vn}),Object(r.jsx)(mn,{children:"Coding Lanugages"}),Object(r.jsx)(gn,{children:"Python"}),Object(r.jsx)(gn,{children:"Javascript Frameworks (Reactjs, Nodejs)"}),Object(r.jsx)(gn,{children:"Golang"})]}),Object(r.jsxs)(bn,{children:[Object(r.jsx)(hn,{src:wn}),Object(r.jsx)(mn,{children:"Project Completed"}),Object(r.jsx)(gn,{children:"Dynamic Dashboard for different verticals."}),Object(r.jsx)(gn,{children:"Merchant Statement Platform for Invoices & Orders Breakdown"})]})]})]})},kn=e.p+"static/media/about.9ae913e6.svg",zn=(e.p,e.p+"static/media/man.40f1181a.svg"),Ln=e.p+"static/media/call.d582330a.svg",Sn={id:"home",lightBg:!1,lightText:!0,lightTextDesc:!1,topLine:"Hello World.",headLine:"I AM KEVIN",description:"Full Stack Web Developer / Python Automation Specialist.",buttonLabel:"Contact",button:!0,buttonDirect:"contact",button2:!0,buttonLabel2:"Download CV",buttonLabel2dark:!1,imgStart:!1,img:zn,alt:"Man",dark:!0,dark2:!0,primary:!0,primary2:!1,darkText:!1},Tn={id:"about",lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"About Me",headLine:"LET ME INTRODUCE MYSELF",description:"I'm a self taught coder whom started off as an SAP consultant whom turned into Python Engineer and Full Stack Web Developer",buttonLabel:"Get Started",button:!1,button2:!0,buttonLabel2:"Download CV",dark2:!0,primary2:!0,buttonLabel2dark:!1,imgStart:!0,img:kn,alt:"About",dark:!0,primary:!0,darkText:!0},Cn={id:"contact",lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Contact Me",headLine:"+65 96588462",description:"lauxianlun@gmail.com",button:!1,button2:!1,imgStart:!0,img:Ln,alt:"Call",dark:!0,primary:!0,darkText:!1},Bn=e.p+"static/media/code_review.b530eafe.svg";function En(){var n=Object(b.a)(["\n  color: #7b7fda;\n  font-size: 20px;\n  line-height: 16px;\n  font-weight: 800;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n"]);return En=function(){return n},n}function Dn(){var n=Object(b.a)(["\n  width: 100%;\n  margin: 0 0 10px 0;\n  padding-right: 0;\n"]);return Dn=function(){return n},n}function An(){var n=Object(b.a)(["\n  max-width: 555px;\n  height: 100%;\n"]);return An=function(){return n},n}function Kn(){var n=Object(b.a)(["\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  background-color: #7b7fda;\n  height: 0.25rem;\n  border-radius: 0.5rem;\n  z-index: 10;\n  width: ",";\n"]);return Kn=function(){return n},n}function Fn(){var n=Object(b.a)(["\n  color: #6c63ff;\n  text-align: right;\n"]);return Fn=function(){return n},n}function Mn(){var n=Object(b.a)([""]);return Mn=function(){return n},n}function Vn(){var n=Object(b.a)(["\n  font-size: 2rem;\n  margin-right: 0.5rem;\n"]);return Vn=function(){return n},n}function _n(){var n=Object(b.a)(["\n  display: flex;\n  align-items: center;\n"]);return _n=function(){return n},n}function Pn(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"]);return Pn=function(){return n},n}function Nn(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  font-weight: 600;\n  width: 100%;\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 4px 25px rgba(14, 36, 49, 0.15);\n\n  &:hover {\n    transform: scale(1.02);\n    transition: all 0.2s ease-in-out;\n    cursor: context-menu;\n  }\n"]);return Nn=function(){return n},n}function Rn(){var n=Object(b.a)(["\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col2;\n"]);return Rn=function(){return n},n}function Wn(){var n=Object(b.a)(["\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col1;\n"]);return Wn=function(){return n},n}function Gn(){var n=Object(b.a)(["\n  display: grid;\n  grid-auto-columns: minmax(auto, 1fr);\n  align-items: center;\n  grid-template-areas: ",";\n\n  @media screen and (max-width: 768px) {\n    grid-template-areas: ",";\n  }\n"]);return Gn=function(){return n},n}function In(){var n=Object(b.a)(["\n  display: grid;\n  z-index: 1;\n  width: 100%;\n  max-width: 1100px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 0 24px;\n  justify-content: center;\n"]);return In=function(){return n},n}function Qn(){var n=Object(b.a)(["\n  text-align: center;\n  font-size: 2.5rem;\n  color: black;\n  @media screen and (max-width: 480px) {\n    font-size: 2rem;\n  }\n"]);return Qn=function(){return n},n}function Yn(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  height: 800px;\n  background: ",";\n\n  @media screen and (max-width: 768px) {\n    padding: 100px 0;\n    height: 1000px;\n    width: 100%;\n  }\n"]);return Yn=function(){return n},n}var Jn=h.a.div(Yn(),(function(n){return n.lightBg?"#f9f9f9":"#010606"})),Hn=h.a.h1(Qn()),Un=h.a.div(In()),qn=h.a.div(Gn(),(function(n){return n.imgStart?"'col2 col1'":"'col1 col2'"}),(function(n){return n.imgStart?"'col1' 'col2'":"'col1 col1' 'col2 col2'"})),Xn=h.a.div(Wn()),Zn=h.a.div(Rn()),$n=h.a.div(Nn()),nt=h.a.div(Pn()),tt=h.a.div(_n()),et=h.a.div(Vn()),rt=h.a.div(Mn()),it=h.a.div(Fn()),ct=h.a.div(Kn(),(function(n){var t=n.skillValue;return t?"".concat(t,"%"):0})),at=h.a.div(An()),ot=h.a.img(Dn()),st=h.a.p(En()),ut=function(){return Object(r.jsx)(Jn,{id:"skills",lightBg:!0,children:Object(r.jsxs)(Un,{children:[Object(r.jsx)(Hn,{children:"Skills"}),Object(r.jsxs)(qn,{children:[Object(r.jsxs)(Xn,{children:[Object(r.jsx)(st,{children:"Ratings"}),Object(r.jsx)($n,{children:Object(r.jsxs)(nt,{children:[Object(r.jsxs)(tt,{children:[Object(r.jsx)(et,{children:Object(r.jsx)("img",{src:"https://img.icons8.com/color/48/000000/python.png",width:"24",height:"24",alt:"python"})}),Object(r.jsx)(rt,{children:"Python"})]}),Object(r.jsx)(it,{children:"85%"}),Object(r.jsx)(ct,{skillValue:85})]})}),Object(r.jsx)($n,{children:Object(r.jsxs)(nt,{children:[Object(r.jsxs)(tt,{children:[Object(r.jsx)(et,{children:Object(r.jsx)("img",{src:"https://img.icons8.com/color/48/000000/react-native.png",width:"24",height:"24",alt:"reactjs"})}),Object(r.jsx)(rt,{children:"React"})]}),Object(r.jsx)(it,{children:"80%"}),Object(r.jsx)(ct,{skillValue:80})]})}),Object(r.jsx)($n,{children:Object(r.jsxs)(nt,{children:[Object(r.jsxs)(tt,{children:[Object(r.jsx)(et,{children:Object(r.jsx)("img",{src:"https://img.icons8.com/color/48/000000/nodejs.png",width:"24",height:"24",alt:"nodejs"})}),Object(r.jsx)(rt,{children:"Nodejs"})]}),Object(r.jsx)(it,{children:"70%"}),Object(r.jsx)(ct,{skillValue:70})]})}),Object(r.jsx)($n,{children:Object(r.jsxs)(nt,{children:[Object(r.jsxs)(tt,{children:[Object(r.jsx)(et,{children:Object(r.jsx)("img",{src:"https://img.icons8.com/color/48/000000/golang.png",width:"24",height:"24",alt:"golang"})}),Object(r.jsx)(rt,{children:"Golang"})]}),Object(r.jsx)(it,{children:"60%"}),Object(r.jsx)(ct,{skillValue:60})]})})]}),Object(r.jsx)(Zn,{children:Object(r.jsx)(at,{children:Object(r.jsx)(ot,{src:Bn,alt:"Code Review"})})})]})]})})};function dt(){var n=Object(b.a)(["\n  color: #fff;\n  font-size: 24px;\n"]);return dt=function(){return n},n}function lt(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 240px;\n"]);return lt=function(){return n},n}function xt(){var n=Object(b.a)(["\n  color: #fff;\n  margin-bottom: 16px;\n"]);return xt=function(){return n},n}function jt(){var n=Object(b.a)(["\n  color: #fff;\n  justify-self: start;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  font-weight: bold;\n"]);return jt=function(){return n},n}function ft(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1100px;\n  margin: 40px auto 0 auto;\n\n  @media screen and (max-width: 820px) {\n    flex-direction: column;\n  }\n"]);return ft=function(){return n},n}function bt(){var n=Object(b.a)(["\n  max-width: 1000px;\n  width: 100%;\n"]);return bt=function(){return n},n}function ht(){var n=Object(b.a)(["\n  color: #fff;\n  text-decoration: none;\n  margin-bottom: 0.5rem;\n  font-size: 14px;\n\n  &:hover {\n    color: #01bf71;\n    transition: 0.3s ease-out;\n  }\n"]);return ht=function(){return n},n}function pt(){var n=Object(b.a)(["\n  color: #fff;\n  text-decoration: none;\n  margin-bottom: 0.5rem;\n  font-size: 14px;\n\n  &:hover {\n    color: #01bf71;\n    transition: 0.3s ease-out;\n  }\n"]);return pt=function(){return n},n}function mt(){var n=Object(b.a)(["\n  font-size: 14px;\n  margin-bottom: 16px;\n"]);return mt=function(){return n},n}function gt(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 16px;\n  text-align: left;\n  width: 160px;\n  box-sizing: border-box;\n  color: #ffffff;\n\n  @media screen and (max-width: 420px) {\n    margin: 0;\n    padding: 10px;\n    width: 100%;\n  }\n"]);return gt=function(){return n},n}function Ot(){var n=Object(b.a)(["\n  display: flex;\n\n  @media screen and (max-width: 820px) {\n    flex-direction: column;\n  }\n"]);return Ot=function(){return n},n}function vt(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (max-width: 820px) {\n    padding-top: 32px;\n    margin-left: 10%;\n  }\n"]);return vt=function(){return n},n}function wt(){var n=Object(b.a)(["\n  padding: 48px 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 1100px;\n  margin: 0 auto;\n"]);return wt=function(){return n},n}function yt(){var n=Object(b.a)(["\n  background-color: #101522;\n"]);return yt=function(){return n},n}var kt=h.a.div(yt()),zt=h.a.div(wt()),Lt=h.a.div(vt()),St=h.a.div(Ot()),Tt=h.a.div(gt()),Ct=h.a.h1(mt()),Bt=Object(h.a)(s.b)(pt()),Et=Object(h.a)(x.Link)(ht()),Dt=h.a.section(bt()),At=h.a.div(ft()),Kt=Object(h.a)(s.b)(jt()),Ft=h.a.small(xt()),Mt=h.a.div(lt()),Vt=h.a.a(dt()),_t=e(20),Pt=function(){return Object(r.jsx)(kt,{children:Object(r.jsxs)(zt,{children:[Object(r.jsxs)(Lt,{children:[Object(r.jsx)(St,{children:Object(r.jsxs)(Tt,{children:[Object(r.jsx)(Ct,{children:"Know Me"}),Object(r.jsx)(Et,{to:"about",smooth:!0,duration:500,spy:!0,exact:"true",children:"About"}),Object(r.jsx)(Et,{to:"experience",smooth:!0,duration:500,spy:!0,exact:"true",children:"Experience"}),Object(r.jsx)(Et,{to:"skills",smooth:!0,duration:500,spy:!0,exact:"true",children:"Skills"})]})}),Object(r.jsx)(St,{children:Object(r.jsxs)(Tt,{children:[Object(r.jsx)(Ct,{children:"Social Media"}),Object(r.jsx)(Bt,{to:"www.linkedin.com/in/klxl96",children:"Linkedin"}),Object(r.jsx)(Bt,{to:"https://github.com/KevinCiz",children:"Github"}),Object(r.jsx)(Bt,{to:"https://www.youtube.com/channel/UCKn6ygkfQKWaQ3xQxqAvviw?view_as=subscriber",children:"Youtube"})]})})]}),Object(r.jsx)(Dt,{children:Object(r.jsxs)(At,{children:[Object(r.jsx)(Kt,{to:"/",onClick:function(){x.animateScroll.scrollToTop()},children:"Kevin Lau Xian Lun"}),Object(r.jsxs)(Ft,{children:["Kevin \xa9 ",(new Date).getFullYear()," All rights reserverd."]}),Object(r.jsxs)(Mt,{children:[Object(r.jsx)(Vt,{href:"www.linkedin.com/in/klxl96",target:"_blank","aria-label":"Linkedin",children:Object(r.jsx)(_t.b,{})}),Object(r.jsx)(Vt,{href:"https://github.com/KevinCiz",target:"_blank","aria-label":"Github",children:Object(r.jsx)(_t.a,{})}),Object(r.jsx)(Vt,{href:"https://www.youtube.com/channel/UCKn6ygkfQKWaQ3xQxqAvviw?view_as=subscriber",target:"_blank","aria-label":"Youtube",children:Object(r.jsx)(_t.c,{})})]})]})})]})})},Nt=function(){var n=Object(i.useState)(!1),t=Object(l.a)(n,2),e=t[0],c=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(C,{toggle:function(){c(!e)},isOpen:e}),Object(r.jsx)(cn,Object(d.a)({},Sn)),Object(r.jsx)(cn,Object(d.a)({},Tn)),Object(r.jsx)(yn,{}),Object(r.jsx)(ut,{}),Object(r.jsx)(cn,Object(d.a)({},Cn)),Object(r.jsx)(Pt,{})]})};var Rt=function(){return Object(r.jsx)(s.a,{children:Object(r.jsx)(u.c,{children:Object(r.jsx)(u.a,{path:"/",component:Nt})})})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Rt,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.61a66c84.chunk.js.map