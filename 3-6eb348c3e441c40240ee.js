(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{176:function(e,t,r){"use strict";r.d(t,"b",function(){return l});var n=r(0),a=r.n(n),o=r(4),i=r.n(o),u=r(35),c=r.n(u);r.d(t,"a",function(){return c.a});r(179);var p=a.a.createContext({}),l=function(e){return a.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},178:function(e,t,r){"use strict";r.d(t,"a",function(){return d}),r.d(t,"c",function(){return N}),r.d(t,"e",function(){return L}),r.d(t,"b",function(){return I}),r.d(t,"d",function(){return x});r(26);var n=r(177),a=r.n(n),o=r(0),i=r.n(o),u=r(175),c=r(59),p=r(197);function l(){var e=a()(["font-family:Vollkorn-Regular;font-size:20.97px;color:rgba(0,0,0,0.87);letter-spacing:0.25px;"]);return l=function(){return e},e}function s(){var e=a()(["text-transform:uppercase;line-height:0.8;transition:color 2s ease;"]);return s=function(){return e},e}function M(){var e=a()(["text-transform:uppercase;line-height:0.8;transition:color 2s ease;text-align:left;"]);return M=function(){return e},e}function g(){var e=a()(["text-transform:uppercase;line-height:0.8;a{color:white;}a:hover{color:rgba(255,255,255,0.8);}"]);return g=function(){return e},e}var m=Object(c.default)(u.Heading).withConfig({componentId:"sc-1g6tb05-0"})(g()),f=Object(c.default)(u.Heading).withConfig({componentId:"sc-1g6tb05-1"})(M()),j=Object(c.default)(u.Heading).withConfig({componentId:"sc-1g6tb05-2"})(s()),y=Object(c.default)(u.Text).withConfig({componentId:"sc-1g6tb05-3"})(l()),d=Object(c.withTheme)(function(e){return i.a.createElement(m,Object.assign({},e,{fontSize:[100,100,201]}))}),N=function(e){return i.a.createElement(y,Object.assign({},e,{mb:5,mt:2,fontSize:[1],color:"body",fontFamily:"Vollkorn"}))},L=function(e){return i.a.createElement(m,Object.assign({},e,{fontSize:[100,100,131]}))},I=Object(c.withTheme)(function(e){return i.a.createElement(f,Object.assign({},e,{color:Object(p.a)(.8,e.theme.colors[e.color]||e.theme.mainColor),as:"h4",fontSize:[50,50,71]}))}),x=function(e){return i.a.createElement(j,Object.assign({},e,{as:"h3",fontSize:[35,35,51]}))}},179:function(e,t,r){var n;e.exports=(n=r(186))&&n.default||n},180:function(e,t,r){"use strict";var n=r(177),a=r.n(n),o=r(0),i=r.n(o),u=r(175),c=r(176),p=(r(178),r(59)),l=r(36),s=r(181),M=r.n(s),g=(r(195),function(e){return i.a.createElement(p.ThemeProvider,{theme:Object(l.b)()},i.a.createElement(i.a.Fragment,null,i.a.createElement(M.a,null,i.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cloud.typography.com/7635694/7339212/css/fonts.css"})),i.a.createElement("main",e)))}),m=r(182),f=r(187),j=r(184),y=(r(26),r(189)),d=r(4),N=r.n(d),L=[40,52,64].map(function(e){return e+"em"}),I=N.a.oneOfType([N.a.number,N.a.string,N.a.array,N.a.object]),x=function(e){return function(){return e.apply(void 0,arguments)}},h=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=r.reduce(function(t,r){return z(t)?t:("string"==typeof r?r.split("."):[r]).reduce(function(e,t){return e&&z(e[t])?e[t]:null},e)},null);return z(a)?a:r[r.length-1]},z=function(e){return null!=e},T=function(e){return"number"==typeof e&&!isNaN(e)},k=function(e){return T(e)&&0!==e?e+"px":e},D=function(e){return"@media screen and (min-width: "+k(e)+")"},b=function(e,t){return h(t,e)},w=function(e){var t,r=e.prop,n=e.cssProperty,a=e.alias,o=e.key,i=e.transformValue,u=void 0===i?b:i,c=e.scale,p=void 0===c?{}:c,l=n||r,s=function(e){var t=h(e,r,a,null);if(!z(t))return null;var n,i=h(e.theme,o,p),c=function(e){var t;return z(e)?((t={})[l]=u(e,i),t):null};if("object"!=typeof(n=t)||null===n)return c(t);var s=h(e.theme,"breakpoints",L),M=[];if(Array.isArray(t)){M.push(c(t[0]));for(var g=1;g<t.slice(0,s.length+1).length;g++){var m=c(t[g]);if(m){var f,j=D(s[g-1]);M.push(((f={})[j]=m,f))}}}else{for(var y in t){var d,N=s[y],I=D(N),x=c(t[y]);if(N)M.push(((d={})[I]=x,d));else M.unshift(x)}M.sort()}return M};return(s.propTypes=((t={})[r]=x(I),t))[r].meta={prop:r,themeKey:o},a&&(s.propTypes[a]=x(I),s.propTypes[a].meta={prop:a,themeKey:o}),s},E=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=function(e){return t.map(function(t){return t(e)}).filter(Boolean)};return n.propTypes={},t.forEach(function(e){n.propTypes=Object(y.a)({},n.propTypes,e.propTypes)}),n},O=function(e){return function(t){return function(r){return t(e(r))}}},S=function(e){var t,r=e.key,n=e.prop,a=void 0===n?"variant":n,o=function(e){return h(e.theme,[r,e[a]].join("."),null)};return o.propTypes=((t={})[a]=N.a.oneOfType([N.a.number,N.a.string]),t),o},v=[0,4,8,16,32,64,128,256,512],C=function(e,t){if(!T(e))return e;var r=e<0,n=Math.abs(e),a=h(t,n);return T(a)?k(a*(r?-1:1)):r?"-"+a:a},A=w({prop:"margin",alias:"m",key:"space",transformValue:C,scale:v}),Y=w({prop:"marginTop",alias:"mt",key:"space",transformValue:C,scale:v}),Q=w({prop:"marginBottom",alias:"mb",key:"space",transformValue:C,scale:v}),V=w({prop:"marginLeft",alias:"ml",key:"space",transformValue:C,scale:v}),U=w({prop:"marginRight",alias:"mr",key:"space",transformValue:C,scale:v}),W=w({prop:"padding",alias:"p",key:"space",transformValue:C,scale:v}),B=w({prop:"paddingTop",alias:"pt",key:"space",transformValue:C,scale:v}),R=w({prop:"paddingBottom",alias:"pb",key:"space",transformValue:C,scale:v}),P=w({prop:"paddingLeft",alias:"pl",key:"space",transformValue:C,scale:v}),G=w({prop:"paddingRight",alias:"pr",key:"space",transformValue:C,scale:v}),H=(O(function(e){return Object(y.a)({},e,{mt:z(e.my)?e.my:e.mt,mb:z(e.my)?e.my:e.mb,ml:z(e.mx)?e.mx:e.ml,mr:z(e.mx)?e.mx:e.mr,pt:z(e.py)?e.py:e.pt,pb:z(e.py)?e.py:e.pb,pl:z(e.px)?e.px:e.pl,pr:z(e.px)?e.px:e.pr})})(E(A,Y,Q,V,U,W,B,R,P,G)),E(w({prop:"color",key:"colors"}),w({prop:"backgroundColor",alias:"bg",key:"colors"})),function(e,t){return!T(e)||e>1?k(e):100*e+"%"}),F=w({prop:"width",key:"widths",transformValue:H}),J=function(e,t){return k(h(t,e))},X=(w({prop:"fontSize",key:"fontSizes",transformValue:J,scale:[12,14,16,20,24,32,48,64,72]}),w({prop:"fontFamily",key:"fonts"}),w({prop:"fontWeight",key:"fontWeights"}),w({prop:"lineHeight",key:"lineHeights"}),w({prop:"textAlign"}),w({prop:"fontStyle"}),w({prop:"letterSpacing",key:"letterSpacings",transformValue:J}),w({prop:"display"}),w({prop:"maxWidth",key:"maxWidths",transformValue:J}),w({prop:"minWidth",key:"minWidths",transformValue:J}),w({prop:"height",key:"heights",transformValue:J})),Z=(w({prop:"maxHeight",key:"maxHeights",transformValue:J}),w({prop:"minHeight",key:"minHeights",transformValue:J}),O(function(e){return Object(y.a)({},e,{width:e.size,height:e.size})})(E(F,X)),w({prop:"verticalAlign"}),w({prop:"alignItems"}),w({prop:"alignContent"}),w({prop:"justifyItems"}),w({prop:"justifyContent"}),w({prop:"flexWrap"}),w({prop:"flexBasis",transformValue:H}),w({prop:"flexDirection"}),w({prop:"flex"}),w({prop:"justifySelf"}),w({prop:"alignSelf"}),w({prop:"order"}),w({prop:"gridGap",key:"space",transformValue:J,scale:v}),w({prop:"gridColumnGap",key:"space",transformValue:J,scale:v}),w({prop:"gridRowGap",key:"space",transformValue:J,scale:v}),w({prop:"gridColumn"}),w({prop:"gridRow"}),w({prop:"gridAutoFlow"}),w({prop:"gridAutoColumns"}),w({prop:"gridAutoRows"}),w({prop:"gridTemplateColumns"}),w({prop:"gridTemplateRows"}),w({prop:"gridTemplateAreas"}),w({prop:"gridArea"}),w({prop:"border",key:"borders"})),q=w({prop:"borderWidth",key:"borderWidths",transformValue:J}),_=(E(Z,w({prop:"borderStyle",key:"borderStyles"}),q,w({prop:"borderColor",key:"colors"}),w({prop:"borderTop",key:"borders"}),w({prop:"borderRight",key:"borders"}),w({prop:"borderBottom",key:"borders"}),w({prop:"borderLeft",key:"borders"}),w({prop:"borderRadius",key:"radii",transformValue:J})),w({prop:"boxShadow",key:"shadows"}),w({prop:"opacity"}),w({prop:"overflow"}),w({prop:"background"}),w({prop:"backgroundImage"}));w({prop:"backgroundSize"}),w({prop:"backgroundPosition"}),w({prop:"backgroundRepeat"}),w({prop:"position"}),w({prop:"zIndex",key:"zIndices"}),w({prop:"top",transformValue:J}),w({prop:"right",transformValue:J}),w({prop:"bottom",transformValue:J}),w({prop:"left",transformValue:J}),S({key:"buttons"}),S({key:"textStyles",prop:"textStyle"}),S({key:"colorStyles",prop:"colors"});function K(){var e=a()([""," background-position:50% 50%;background-size:cover;"]);return K=function(){return e},e}var $=Object(p.default)(u.Flex).withConfig({componentId:"c69k09-0"})(K(),_),ee=function(e){return i.a.createElement($,Object.assign({},e,{backgroundImage:["url("+e.data.vertikal.childImageSharp.fluid.src+")","url("+e.data.vertikal.childImageSharp.fluid.src+")","url("+e.data.vertikal.childImageSharp.fluid.src+")","url("+e.data.horisontal.childImageSharp.fluid.src+")"]}))};function te(){var e=a()(["font-weight:bold;position:fixed;top:20px;right:20px;color:black;width:1em;height:1em;text-align:center;line-height:0.8em;background:rgba(255,255,255,1);padding-left:2px;cursor:pointer;font-size:1.25em;"]);return te=function(){return e},e}function re(){var e=a()(["color:black;position:relative;@media (min-width:1200px){position:relative;max-height:100vh;overflow:auto;}"]);return re=function(){return e},e}function ne(){var e=a()(["flex-grow:0;"]);return ne=function(){return e},e}function ae(){var e=a()(["flex-grow:1;"]);return ae=function(){return e},e}function oe(){var e=a()(["text-transform:uppercase;line-height:0.8;transition:color 2s ease;text-align:left;"]);return oe=function(){return e},e}function ie(){var e=a()(['display:grid;grid-template-areas:"artist" "content";grid-template-columns:1fr;grid-template-rows:100vh auto;@media (min-width:1200px){grid-template-columns:1fr minmax(auto,700px);grid-template-rows:minmax(100vh,auto);grid-template-areas:"artist content";}']);return ie=function(){return e},e}var ue=Object(p.default)(u.Box).withConfig({componentId:"sc-178azal-0"})(ie()),ce=(Object(p.default)(u.Text).withConfig({componentId:"sc-178azal-1"})(oe()),Object(p.default)(u.Box).withConfig({componentId:"sc-178azal-2"})(ae())),pe=Object(p.default)(u.Box).withConfig({componentId:"sc-178azal-3"})(ne()),le=Object(p.default)(u.Box).withConfig({componentId:"sc-178azal-4"})(re()),se=Object(p.default)(c.a).withConfig({componentId:"sc-178azal-5"})(te()),Me=function(e){var t=e.data,r=e.artist,n=e.content;return i.a.createElement(ue,null,i.a.createElement(ee,{img:"",px:[3,3,3,6],py:[4,4,4,6],flexDirection:"column",data:t},i.a.createElement(ce,{p:[3,3,3,4]},i.a.createElement(j.a,null)),i.a.createElement(pe,{p:[3,3,3,4],flexGrow:1},r)),i.a.createElement(le,{py:6,px:[3,3,3,6],bg:"white"},i.a.createElement(se,{replace:!0,to:"/",title:"Lukk"},"×"),n,i.a.createElement(u.Box,{my:6},i.a.createElement(m.a,null))))};t.a=function(e){return i.a.createElement(g,null,i.a.createElement(f.a,{title:e.title}),i.a.createElement(Me,e))}},182:function(e,t,r){"use strict";r(26);var n=r(177),a=r.n(n),o=r(0),i=r.n(o),u=r(183),c=r.n(u),p=r(175),l=r(59);function s(){var e=a()(["position:relative;"]);return s=function(){return e},e}function M(){var e=a()(["color:white;background:black;text-transform:uppercase;display:inline-block;"]);return M=function(){return e},e}var g=Object(l.default)(p.Heading).withConfig({componentId:"sc-1vwfx20-0"})(M()),m=l.default.a.withConfig({componentId:"sc-1vwfx20-1"})(s());t.a=function(e){return i.a.createElement(m,{target:"_blank",rel:"noopener",href:"https://skienlive.ticketco.events/no/nb/e/skien_live_2019"},i.a.createElement(g,Object.assign({m:0,fontWeight:"normal",fontSize:[2],py:1,px:3,target:"_parent"},e),"Kjøp billetter",i.a.createElement(p.Image,{alt:"->",ml:2,src:c.a})))}},183:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjQgMjAiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjMuNjA2IDkuMjc4LTguOC04Ljc3MWMtLjI4NjIxNjEtLjI4NTMyMjE5LS43MTYwMzY4LS4zNzAzMTg1MS0xLjA4OTMwOC0uMjE1NDA4NzktLjM3MzI3MTIuMTU0OTA5NzMtLjYxNjYwNjQuNTE5MjY5NzMtLjYxNjY5Mi45MjM0MDg3OXY1LjAyNWMwIC4xMzgwNzExOS0uMTExOTI4OC4yNS0uMjUuMjVoLTExLjc1Yy0uNTUyMjg0NzUgMC0xIC40NDc3MTUyNS0xIDF2NWMwIC41NTIyODQ3LjQ0NzcxNTI1IDEgMSAxaDExLjc1Yy4xMzgwNzEyIDAgLjI1LjExMTkyODguMjUuMjV2NS4wNDNjLjAwMDA4NjMuNDA0Mzk1OS4yNDM3Mjc1Ljc2ODkzNDEuNjE3MzQ1NC45MjM2NzguMzczNjE4LjE1NDc0MzkuODAzNjYwMy4wNjkyMjk5IDEuMDg5NjU0Ni0uMjE2Njc4bDguOC04LjhjLjE4ODA4MzQtLjE4NzYwODUuMjkzNzg3Ni0uNDQyMzQ1NS4yOTM3ODc2LS43MDggMC0uMjY1NjU0NTItLjEwNTcwNDItLjUyMDM5MTQ3LS4yOTM3ODc2LS43MDh6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="},184:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(185),i=r.n(o),u=r(175),c=r(176);t.a=function(){return a.a.createElement(c.a,{to:"/"},a.a.createElement(u.Image,{alt:"Skien Live 2019",width:[180,180,250],m:0,src:i.a}))}},185:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjkwIiB2aWV3Qm94PSIwIDAgMzE2IDkwIiB3aWR0aD0iMzE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Im0yNS40NyA0Mi44Yy05LjU3IDAtMTkuNzMtMi40NS0yNS40Ny01LjhsNS42Mi05LjYzYzYuMzYxOTI5IDIuNzE2MjExOSAxMy4xNzU3MTc1IDQuMjE4NzA0OCAyMC4wOSA0LjQzIDMuNDYgMCA1LjU2LS42NiA1LjU2LTEuNzQgMC0zLjgyLTI5LjYtMS0yOS42LTE2LjE0IDAtNy42NCA4LjMzLTEzLjkyIDI0LjctMTMuOTIgMTEuMjMgMCAyMC4zMiAyLjc1IDI0LjU3IDUuMDhsLTYgOS4xNWMtNi42NC0yLTEyLjg2LTMuMTctMTcuMS0zLjE3LTIuODcgMC00LjY2LjU0LTQuNjYgMS42NyAwIDQuMjUgMjguMzMuNjYgMjguMzMgMTUuMzEtLjA0IDguOTYtOC4xMSAxNC43Ni0yNi4wNCAxNC43NnoiLz48cGF0aCBkPSJtODcuODIgNDEuMzEtNi45NC0xMS40OC00LjQ4IDQuNjd2Ni44MWgtMjAuODF2LTM5LjgyaDIwLjgxdjE1LjI1bDExLjMtMTUuMjVoMjIuMDZsLTE0Ljg5IDE3IDE1IDIyLjc4eiIvPjxwYXRoIGQ9Im0xMTMuMjggNDEuMzF2LTM5LjgyaDIwLjh2MzkuODJ6Ii8+PHBhdGggZD0ibTE0MC4wNSA0MS4zMXYtMzkuODJoNDUuNjJ2MTIuNzRoLTI0LjgxdjMuNzdoMTUuNTR2Ni4wOWgtMTUuNTR2My40MWgyNC44MXYxMy44MXoiLz48cGF0aCBkPSJtMjI0LjU4IDQxLjMxLTEzLjkzLTEzLjgxLTEuNDktMS43M3YxNS41NGgtMTguNjV2LTM5LjgyaDE2Ljg2bDE0Ljk0IDEzLjkzIDEuMzggMS41di0xNS40M2gxOC43MXYzOS44MnoiLz48cGF0aCBkPSJtMy44MyA4OC4zMXYtMzkuODJoMjAuOHYyNmgyNS4xMXYxMy44MnoiLz48cGF0aCBkPSJtNTUuNTkgODguMzF2LTM5LjgyaDIwLjgxdjM5LjgyeiIvPjxwYXRoIGQ9Im0xMTguMDYgODguMzFoLTE5Ljg1bC0xOS41NS0zOS44MmgyMi42bDguNzQgMjEuMzUgOS4wOS0yMS4zNWgxOS4wN3oiLz48cGF0aCBkPSJtMTQwLjA2IDg4LjMxdi0zOS44Mmg0NS42MXYxMi43NGgtMjQuODF2My43N2gxNS41NHY2LjA5aC0xNS41NHYzLjQxaDI0LjgxdjEzLjgxeiIvPjxwYXRoIGQ9Im0yMzQuMjYgNjUuMDVoLTguMTNsMy4xNy0xNi41NmgxMy4yMXoiLz48cGF0aCBkPSJtMjQ1Ljg2IDg4LjMxdi0zM2M1IDAgNy41My0zLjI5IDcuNTMtNi44MmgxMC45NHYzOS44MnoiLz48cGF0aCBkPSJtMjg4IDg5LjhjLTYuNjgxOTMuMDcwMzQ4NS0xMy4zMDMyODUtMS4yNzIzMjQ2LTE5LjQzLTMuOTRsMy40Ny0xMGM0LjMzMTA3MyAxLjU4NzA0NzMgOC44OTc5MTEgMi40MzU1MTIyIDEzLjUxIDIuNTEgOC4wNyAwIDEyLjE0LTQuMjUgMTIuMTQtOC4zMXYtLjQ2Yy0zLjQ1NDk0MSAzLjA5OTAxNDYtNy45ODI2MjcgNC43Mjc4MzM1LTEyLjYyIDQuNTQtMTAuMjggMC0xNi40NC00LjktMTYuNDQtMTEuNzJ2LS4yOWMwLTcuODQgOC43My0xNS4xMyAyMi40Mi0xNS4xMyAxNC43MSAwIDI0LjU3IDcuNzEgMjQuNTcgMjAuMjF2MWMwIDEyLjkzLTEyLjE5IDIxLjU5LTI3LjYyIDIxLjU5em05LjY5LTI1LjY0YzAtMi44Ny0yLjc1LTUuMi02LjIyLTUuMi00LjEzIDAtNi40NiAyLjI3LTYuNDYgNC4xOHYuMThjMCAyIDEuOTIgMy43NyA1LjYyIDMuNzcgMi42MDk3OTctLjAyNTgxOTEgNS4xMjAzNTItMS4wMDM3MjY1IDcuMDYtMi43NXoiLz48L2c+PC9zdmc+"},186:function(e,t,r){"use strict";r.r(t);r(26);var n=r(0),a=r.n(n),o=r(4),i=r.n(o),u=r(60),c=r(2),p=function(e){var t=e.location,r=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(u.a,Object.assign({location:t,pageResources:r},r.json))};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=p},187:function(e,t,r){"use strict";var n=r(188),a=r(0),o=r.n(a),i=r(4),u=r.n(i),c=r(181),p=r.n(c);function l(e){var t=e.description,r=e.lang,a=e.meta,i=e.keywords,u=e.title,c=n.data.site,l=t||c.siteMetadata.description;return o.a.createElement(p.a,{htmlAttributes:{lang:r},title:u,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:u},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},t.a=l},188:function(e){e.exports={data:{site:{siteMetadata:{title:"Skien Live 2019",description:"Skien live er en helårs arrangør. ",author:"Skien Live"}}}}}}]);
//# sourceMappingURL=3-6eb348c3e441c40240ee.js.map