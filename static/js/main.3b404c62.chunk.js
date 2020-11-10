(this.webpackJsonpkevinciz=this.webpackJsonpkevinciz||[]).push([[0],{45:function(n,t,e){},65:function(n,t,e){"use strict";e.r(t);var i=e(2),r=e(0),a=e.n(r),o=e(17),c=e.n(o),s=(e(45),e(18)),d=e(5),u=e(20),l=e(19),f=e(14),p=e(38),x=e.n(p),b=e(3),g=e(4);function j(){var n=Object(b.a)(["\n  padding: 1rem 1.5rem;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  color: white;\n  font-weight: bold;\n  font-size: 0.9rem;\n  transition: all 0.3s ease-in;\n\n  &.active {\n    color: #7b7fda;\n    border-bottom: 3px solid #01bf71;\n  }\n\n  &:hover {\n    color: #7b7fda;\n  }\n"]);return j=function(){return n},n}function h(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n\n  @media screen and (max-width: 768px) {\n    overflow: hidden;\n    flex-direction: column;\n    width: 100%;\n    max-height: ",";\n    transition: max-height 0.5s ease-in-out;\n  }\n"]);return h=function(){return n},n}function m(){var n=Object(b.a)(["\n  display: none;\n\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 60%);\n    font-size: 1.8rem;\n    cursor: pointer;\n    color: white;\n  }\n"]);return m=function(){return n},n}function O(){var n=Object(b.a)(['\n  padding: 1rem 0;\n  color: #7b7fda;\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 1.7rem;\n  /* font-family: "Big Shoulders Stencil"; */\n  span {\n    font-weight: 400;\n    font-size: 1.3rem;\n    color: gainsboro;\n  }\n']);return O=function(){return n},n}function v(){var n=Object(b.a)(["\n  padding: 0 2rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1100px;\n  flex-wrap: wrap;\n"]);return v=function(){return n},n}function w(){var n=Object(b.a)(["\n  opacity: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: black;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  transition: opacity 1s ease-in-out;\n\n  @media screen and (max-width: 960px) {\n    transition: 0.8s all ease;\n  }\n"]);return w=function(){return n},n}var k=g.a.nav(w(),(function(n){return n.scrollNav?"70%":"100%"})),y=g.a.div(v()),T=Object(g.a)(s.b)(O()),L=g.a.div(m()),S=g.a.div(h(),(function(n){return n.isOpen?"300px":0})),z=Object(g.a)(f.Link)(j()),B=function(n){var t=n.toggle,e=n.isOpen,a=Object(r.useState)(!1),o=Object(l.a)(a,2),c=o[0],s=o[1],d=function(){window.scrollY>80?s(!0):s(!1)};Object(r.useEffect)((function(){window.addEventListener("scroll",d)}),[]);return Object(i.jsx)(k,{scrollNav:c,children:Object(i.jsxs)(y,{children:[Object(i.jsxs)(T,{to:"/",onClick:function(){f.animateScroll.scrollToTop()},children:["Kev",Object(i.jsx)("span",{children:"Portfolio"})]}),Object(i.jsx)(L,{children:Object(i.jsx)(x.a,{onClick:t})}),Object(i.jsxs)(S,{isOpen:e,children:[Object(i.jsx)(z,{to:"about",smooth:!0,duration:500,spy:!0,exact:"true",children:"About"}),Object(i.jsx)(z,{to:"skills",smooth:!0,duration:500,spy:!0,exact:"true",children:"Skills"}),Object(i.jsx)(z,{to:"work",smooth:!0,duration:500,spy:!0,exact:"true",children:"Work"}),Object(i.jsx)(z,{to:"contact",smooth:!0,duration:500,spy:!0,exact:"true",children:"Contact"})]})]})})};function D(){var n=Object(b.a)(["\n  border-radius: 50px;\n  background: ",";\n  white-space: nowrap;\n  padding: ",";\n  color: ",";\n  font-size: ",";\n  outline: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  font-weight: 700;\n\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: ",";\n  }\n"]);return D=function(){return n},n}var C=Object(g.a)(f.Link)(D(),(function(n){return n.primary?"#01BF71":"#010606"}),(function(n){return n.big?"14px 48px":"12px 30px"}),(function(n){return n.dark?"#010606":"#fff"}),(function(n){return n.fontBig?"20px":"16px"}),(function(n){return n.primary?"#fff":"#01BF71"}));function E(){var n=Object(b.a)(["\n  width: 100%;\n  margin: 0 0 10px 0;\n  padding-right: 0;\n"]);return E=function(){return n},n}function A(){var n=Object(b.a)(["\n  max-width: 555px;\n  height: 100%;\n"]);return A=function(){return n},n}function F(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: flex-start;\n"]);return F=function(){return n},n}function I(){var n=Object(b.a)(["\n  max-width: 440px;\n  margin-bottom: 35px;\n  font-size: 18px;\n  line-height: 24px;\n  color: ",";\n"]);return I=function(){return n},n}function M(){var n=Object(b.a)(["\n  margin-bottom: 24px;\n  font-size: 48px;\n  line-height: 1.1;\n  font-weight: 600;\n  color: ",";\n\n  @media screen and (max-width: 480px) {\n    font-size: 32px;\n  }\n"]);return M=function(){return n},n}function N(){var n=Object(b.a)(["\n  color: #01bf71;\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: 700;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n"]);return N=function(){return n},n}function W(){var n=Object(b.a)(["\n  max-width: 540px;\n  padding-top: 0;\n  padding-bottom: 60px;\n"]);return W=function(){return n},n}function G(){var n=Object(b.a)(["\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col2;\n"]);return G=function(){return n},n}function H(){var n=Object(b.a)(["\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col1;\n"]);return H=function(){return n},n}function J(){var n=Object(b.a)(["\n  display: grid;\n  grid-auto-columns: minmax(auto, 1fr);\n  align-items: center;\n  grid-template-areas: ",";\n\n  @media screen and (max-width: 768px) {\n    grid-template-areas: ",";\n  }\n"]);return J=function(){return n},n}function K(){var n=Object(b.a)(["\n  display: grid;\n  z-index: 1;\n  height: 800px;\n  width: 100%;\n  max-width: 1100px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 0 24px;\n  justify-content: center;\n"]);return K=function(){return n},n}function P(){var n=Object(b.a)(["\n  color: #fff;\n  background: ",";\n\n  @media screen and (max-width: 768px) {\n    padding: 100px 0;\n  }\n"]);return P=function(){return n},n}var U=g.a.div(P(),(function(n){return n.lightBg?"#f9f9f9":"#010606"})),V=g.a.div(K()),Y=g.a.div(J(),(function(n){return n.imgStart?"'col2 col1'":"'col1 col2'"}),(function(n){return n.imgStart?"'col1' 'col2'":"'col1 col1' 'col2 col2'"})),q=g.a.div(H()),Q=g.a.div(G()),R=g.a.div(W()),X=g.a.p(N()),Z=g.a.h1(M(),(function(n){return n.lightText?"#f7f8fa":"#010606"})),$=g.a.p(I(),(function(n){return n.darkText?"#010606":"#fff"})),_=g.a.div(F()),nn=g.a.div(A()),tn=g.a.img(E()),en=function(n){var t=n.id,e=n.lightBg,r=n.lightText,a=(n.lightTextDesc,n.topLine),o=n.headLine,c=n.description,s=n.buttonLabel,d=n.imgStart,u=n.img,l=n.alt,f=n.dark,p=n.primary,x=n.darkText,b=n.dark2;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(U,{lightBg:e,id:t,children:Object(i.jsx)(V,{children:Object(i.jsxs)(Y,{imgStart:d,children:[Object(i.jsx)(q,{children:Object(i.jsxs)(R,{children:[Object(i.jsx)(X,{children:a}),Object(i.jsx)(Z,{lightText:r,children:o}),Object(i.jsx)($,{darkText:x,children:c}),Object(i.jsx)(_,{children:Object(i.jsx)(C,{to:"home",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,dark:f?1:0,primary:p?1:0,dark2:b?1:0,children:s})})]})}),Object(i.jsx)(Q,{children:Object(i.jsx)(nn,{children:Object(i.jsx)(tn,{src:u,alt:l})})})]})})})})},rn=e.p+"static/media/about.9ae913e6.svg",an=e.p+"static/media/programming.abfc80b6.svg",on={id:"home",lightBg:!1,lightText:!0,lightTextDesc:!1,topLine:"Hello World.",headLine:"I AM KEVIN",description:"Web Developer",buttonLabel:"Contact",imgStart:!1,img:e.p+"static/media/man.40f1181a.svg",alt:"Man",dark:!0,primary:!0,darkText:!1},cn={id:"about",lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Premium Bank",headLine:"Unlimited Transaction with zero fees",description:"Long Description",buttonLabel:"Get Started",imgStart:!0,img:rn,alt:"About",dark:!0,primary:!0,darkText:!1},sn={id:"skills",lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Service",headLine:"Header 2",description:"Long Description",buttonLabel:"Get Started",imgStart:!1,img:an,alt:"programming",dark:!0,primary:!0,darkText:!0},dn=function(){var n=Object(r.useState)(!1),t=Object(l.a)(n,2),e=t[0],a=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(B,{toggle:function(){a(!e)},isOpen:e}),Object(i.jsx)(en,Object(u.a)({},on)),Object(i.jsx)(en,Object(u.a)({},cn)),Object(i.jsx)(en,Object(u.a)({},sn))]})};var un=function(){return Object(i.jsx)(s.a,{children:Object(i.jsx)(d.c,{children:Object(i.jsx)(d.a,{path:"/",component:dn})})})};c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(un,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.3b404c62.chunk.js.map