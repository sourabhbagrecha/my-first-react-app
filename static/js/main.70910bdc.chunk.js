(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/button.7ca38b6d.PNG"},39:function(e,t,a){e.exports=a.p+"static/media/coinflipper.8b3f9543.PNG"},40:function(e,t,a){e.exports=a.p+"static/media/lottery.1f49d764.PNG"},41:function(e,t,a){e.exports=a.p+"static/media/number-app.b5148483.PNG"},42:function(e,t,a){e.exports=a.p+"static/media/rolldice.9367433a.PNG"},44:function(e,t,a){e.exports=a(68)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),l=(a(49),a(16)),o=(a(50),a(4)),s=a(5),u=a(8),m=a(6),p=a(9),h=(a(51),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).flipState=function(e){return{clicked:!e.clicked}},a.state={clicked:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"buttonClicked",value:function(e){this.setState(this.flipState)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Button"},r.a.createElement("h1",null,this.state.clicked?"Clicked!!!":"Not Clicked!"),r.a.createElement("button",{onClick:function(){return e.buttonClicked()}},"Click Me!"))}}]),t}(r.a.Component)),b=(a(52),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={number:0},a.handleRandomClick=function(){a.setState({number:Math.floor(10*Math.random())})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"NumberApp"},r.a.createElement("h1",null,this.state.number),7===this.state.number?r.a.createElement("h1",null,"You Won"):r.a.createElement("button",{onClick:function(){return e.handleRandomClick()}},"Random Number"))}}]),t}(r.a.Component)),f=(a(53),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=function(e){var t;switch(e){case 1:t="one";break;case 2:t="two";break;case 3:t="three";break;case 4:t="four";break;case 5:t="five";break;case 6:t="six";break;default:t="none"}return t}(this.props.num);return r.a.createElement("div",{className:this.props.rolling?"shaking":null},r.a.createElement("i",{style:{fontSize:"9rem"},className:"fas fa-dice-".concat(e)}))}}]),t}(r.a.Component)),d=(a(54),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={die1:5,die2:2,rolling:!1},a.createRandomNum=function(){a.setState({rolling:!0});for(var e=Math.ceil(6*Math.random()),t=Math.ceil(6*Math.random());e===t;)t=Math.ceil(6*Math.random());a.setState({die1:e,die2:t}),setTimeout(function(){a.setState({rolling:!1})},1e3)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"DiceRoller container",style:{width:"400px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(f,{num:this.state.die1,rolling:this.state.rolling})),r.a.createElement("div",{className:"col-6"},r.a.createElement(f,{num:this.state.die2,rolling:this.state.rolling}))),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.createRandomNum()},disabled:this.state.rolling},this.state.rolling?"Rolling...":"Roll the dice!"))}}]),t}(r.a.Component)),v=(a(55),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("span",{className:"Ball"},this.props.num)}}]),t}(r.a.Component)),j=(a(56),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={BallsArray:Array.from({length:a.props.numBalls})},a.generateRandomNumber=function(e){return{BallsArray:e.BallsArray.map(function(e){return Math.ceil(Math.random()*a.props.maxNum)})}},a.generateLottery=function(){a.setState(function(e){return a.generateRandomNumber(e)})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Lottery"},r.a.createElement("h1",{className:"mb-5"},"Lottery"),this.state.BallsArray.map(function(e){return r.a.createElement(v,{num:e})}),r.a.createElement("div",{className:"mt-5"},r.a.createElement("button",{className:"btn btn-lg btn-primary",onClick:function(){return e.generateLottery()}},"Generate")))}}]),t}(r.a.Component));j.defaultProps={numBalls:6,maxNum:40};var E=j,O=(a(57),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;return e="Head"===this.props.side?"https://images-na.ssl-images-amazon.com/images/I/51xs7F%2BtP5L._SX425_.jpg":"http://cdn.shopify.com/s/files/1/0686/9287/products/coin_ring_barber_Half_Dollar_tails_6_grande.JPG?v=1510168938",r.a.createElement("div",{className:"Coin"},r.a.createElement("img",{className:"Coin-img",src:e,alt:"Coin"}))}}]),t}(r.a.Component)),g=(a(58),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={side:null,heads:0,tails:0},a.flipIt=function(){var e=Math.ceil(2*Math.random());1===e?a.setState({heads:a.state.heads+1}):a.setState({tails:a.state.tails+1}),a.setState({side:1===e?"Head":"Tail"})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CoinFlipper"},r.a.createElement(O,{side:this.state.side}),r.a.createElement("button",{className:"btn-primary",onClick:function(){return e.flipIt()}}," Flip It"),r.a.createElement("div",null,"You got Heads for ",this.state.heads," times out of ",this.state.tails+this.state.heads))}}]),t}(r.a.Component)),y=a(73),k=a(74),N=a(11),C=(a(59),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{expand:"lg",bg:"light"},r.a.createElement(y.a.Brand,null,r.a.createElement(N.b,{className:"navbar-brand-link",to:"/"},"My First React App")),r.a.createElement(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(y.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(k.a,{className:"mr-auto"},r.a.createElement(N.c,{exact:!0,className:"nav-link",activeClassName:"active-nav-link",to:"/button"},"Button"),r.a.createElement(N.c,{exact:!0,className:"nav-link",activeClassName:"active-nav-link",to:"/number-app"},"Number App"),r.a.createElement(N.c,{exact:!0,className:"nav-link",activeClassName:"active-nav-link",to:"/rolldice"},"Dice Roller"),r.a.createElement(N.c,{exact:!0,className:"nav-link",activeClassName:"active-nav-link",to:"/lottery"},"Lottery App"),r.a.createElement(N.c,{exact:!0,className:"nav-link",activeClassName:"active-nav-link",to:"/coinflipper"},"Coin Flipper")))),this.props.children)}}]),t}(n.Component)),w=a(38),x=a.n(w),A=a(39),M=a.n(A),R=a(40),S=a.n(R),B=a(41),P=a.n(B),_=a(42),G=a.n(_),F=a(70),L=a(71),I=a(72),D=(a(67),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.img,a=e.path;return console.log(t),r.a.createElement(N.b,{to:a},r.a.createElement("div",{className:"RouteDisplay"},r.a.createElement("img",{src:t,alt:"mjnhbvf",style:{height:"100%",width:"100%"}})))}}]),t}(n.PureComponent)),H=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props.routes.map(function(e){return r.a.createElement(F.a,{md:4,sm:12},r.a.createElement(D,e,e.path))});return r.a.createElement(L.a,null,r.a.createElement("h1",{style:{textAlign:"center",color:"#00272c",fontSize:"4rem",fontFamily:"Roboto",fontWeight:"700"}},"Getting started with react!"),r.a.createElement(I.a,null,e))}}]),t}(n.Component);var W=function(){var e=[{path:"/button",img:x.a,component:h},{path:"/number-app",img:P.a,component:b},{path:"/rolldice",img:G.a,component:d},{path:"/lottery",img:S.a,component:E},{path:"/coinflipper",img:M.a,component:g}],t=e.map(function(e){return r.a.createElement(l.a,{exact:!0,path:e.path,component:e.component})});return r.a.createElement("div",{className:"App"},r.a.createElement(C,null,r.a.createElement(l.c,null,t,r.a.createElement(l.a,{render:function(){return r.a.createElement(H,{routes:e})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N.a,{basename:"/my-first-react-app"},r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.70910bdc.chunk.js.map