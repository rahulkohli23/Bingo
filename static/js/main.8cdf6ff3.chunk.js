(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),c=n.n(r),i=(n(42),n(43),n(32)),s=n(14),l=n(68),d=n(70),u=n(77),b=n(71),h=n(5),j=Object(l.a)({root:{},card:{border:0,borderRadius:0,position:"absolute",bottom:0,left:0,right:0,top:0,"&:hover .MuiButton-text":{backgroundColor:"#9999ff"},"&.active .MuiButton-text":{backgroundColor:"#3333ff",color:"#fff"}},cardBtn:{color:"#111",borderRadius:0,position:"absolute",bottom:0,left:0,top:0,width:"100%"}});function f(e){var t=j(),n=e.cardText,o=e.cardIndex,r=Object(a.useState)(!1),c=Object(s.a)(r,2),i=c[0],l=c[1];return Object(h.jsx)(d.a,{variant:"outlined",className:t.card+(i||13===o?" active":""),children:Object(h.jsx)(u.a,{className:t.cardBtn,onClick:function(){l(!i),e.handleCardClick(o)},disabled:13===o,children:Object(h.jsx)(b.a,{variant:"body2",component:"p",children:n})})})}n(49);var m=n(72),p=n(52),g=n(73),v=n(74),O=n(75),x=n(76),y=(n(25),n(31),"Online Conferencing"),C=["(Child noises in the background)","Hello, hello ?","I need to jump in another call","Can everyone go on mute","Could you please get closer to the mic","(Load painful echo/feedback)","Next slide please","Can we take this ofline","is __ on this call ?","Could you share these slides afterwards ?","can somebody grant presenter rights ?","can you email that to everyone ?","Sorry, I had problem logging in","(animal noises in the background)","Sorry, I didn't found the conference Id","I was having connection Issues","I'll have to get back to you","who just joined ?","Sorry, something __ with my calander","do you see my screen","Lets wait for ___","You will send the minutes","Sorry, I was on mute","Can you repeat please","is anyone there ?"],k=Object(l.a)({root:{maxWidth:680,margin:"auto",padding:"15px 0","& .MuiTableCell-root":{border:"solid 2px #ccc",padding:0}},title:{marginBottom:15}}),I=function(){var e=k(),t=Object(a.useState)(!1),n=Object(s.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)([13]),l=Object(s.a)(c,2),d=l[0],u=l[1],j=Object(a.useState)([]),I=Object(s.a)(j,2),w=I[0],N=I[1];Object(a.useEffect)((function(){var e=function(e){var t,n,a;for(a=e.length-1;a>0;a--)t=Math.floor(Math.random()*(a+1)),n=e[a],e[a]=e[t],e[t]=n;return e}(C);e[12]=y,console.log(e),N(e)}),[]);var S=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[5,10,15,20,25],[1,7,13,19,25],[5,9,13,17,21]],B=function(e){var t=d.indexOf(e),n=d;t>=0?n.splice(t,1):n.push(e),u(Object(i.a)(n)),_(n,e)},_=function(e,t){var n=[];for(var a in S){var o=S[a];o.includes(t)&&n.push(o)}for(var c in n){r(!1);var i=n[c];if(M(i,e)){r(!0);break}}},M=function(e,t){var n=!0;for(var a in e){var o=e[a];if(!t.includes(o)){n=!1;break}}return n};return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(b.a,{variant:"h2",component:"h1",className:e.title+(o?" is-bingo":""),children:o?"You got a BINGO":"Play Bingo"}),Object(h.jsx)(m.a,{component:p.a,children:Object(h.jsx)(g.a,{children:Object(h.jsx)(v.a,{children:[1,2,3,4,5].map((function(e){return Object(h.jsx)(O.a,{children:[1,2,3,4,5].map((function(t){var n=5*(e-1)+t,a=w[n-1];return Object(h.jsx)(x.a,{className:"table-cell",children:Object(h.jsx)(f,{className:"Card",cardIndex:n,cardText:a,handleCardClick:B})},"card_"+n)}))},"row_"+e)}))})})})]})};var w=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("div",{className:"app-container",children:Object(h.jsx)(I,{})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};c.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),N()}},[[51,1,2]]]);
//# sourceMappingURL=main.8cdf6ff3.chunk.js.map