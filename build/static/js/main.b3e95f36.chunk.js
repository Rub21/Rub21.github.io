(window["webpackJsonprub21.github.io"]=window["webpackJsonprub21.github.io"]||[]).push([[0],{110:function(e,t,a){e.exports=a(195)},119:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),s=a.n(i),r=a(40),c=a(52),l=(a(119),a(11)),m=a(8),p=a(15),u=a(16),d=a(17),h=a(30),g=a(7),b=a(231),f=a(197),v=a(100),w=a(240),y=a(237),j=a(236),k=a(230),E=a(53),O=a(94),x=a.n(O),S=a(93),_=a.n(S),M=a(88),T=a(224),C=a(225),I=a(47),R=a.n(I),P=Object(M.a)(function(e){return{card:{display:"flex",background:"#FFFFFF",boxShadow:"none",padding:"2rem",textAlign:"center"}}});function N(){var e=P();return o.a.createElement(T.a,{className:e.card,style:{borderRadius:"0px"}},o.a.createElement(C.a,{alt:"me",src:R.a,style:{width:"150px",height:"150px"}}))}var D=a(226),A=a(227),H=a(228),J=a(90),L=a.n(J),B=Object(v.a)(),F={appBar:Object(g.a)({backgroundColor:"#1f2932",color:"#38598C"},B.breakpoints.up("md"),{width:"calc(100% - ".concat(240,"px)")}),title:{lineHeight:"1",textTransform:"uppercase",fontSize:"1rem",fontWeight:"bolder"},menuButton:Object(g.a)({position:"absolute",right:"12px"},B.breakpoints.up("md"),{display:"none"})},z=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(D.a,{position:"fixed",className:e.appBar},o.a.createElement(A.a,null,o.a.createElement(C.a,{alt:"me",src:R.a,style:{width:"40",height:"40"}}),o.a.createElement(H.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:this.props.handleDrawerToggle,className:e.menuButton},o.a.createElement(L.a,null))))}}]),t}(n.Component),G=Object(f.a)(F)(z),W=a(2),q=a.n(W),U=a(238),Q=a(239),V=a(229),K="FETCH_DATA_BEGIN",Z="FETCH_DATA_SUCCESS",Y="FETCH_DATA_FAILURE";var X=a(91),$=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).itemMenuElement=function(e,t,a){return o.a.createElement(U.a,{className:e,selected:t,style:t?{background:"#0160A2"}:{},component:r.b,to:a.path},a.title)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.location;return o.a.createElement("div",{className:a.sideBar},o.a.createElement("div",{className:a.toolbar}),o.a.createElement(Q.a,{className:a.menuList},X.menu.map(function(t,i){var s=t.path===n.pathname||t.path==="".concat(n.pathname).concat(n.hash);return o.a.createElement("div",{key:i},t.subMenu?o.a.createElement("div",null,e.itemMenuElement(a.menuItem,s,t),o.a.createElement(V.a,null),o.a.createElement(Q.a,{style:{background:"#38598C"}},t.subMenu.map(function(t,i){var s=t.path===n.pathname||t.path==="".concat(n.pathname).concat(n.hash);return o.a.createElement("div",{key:"".concat(i,"-submenu")},e.itemMenuElement(a.menuItemNested,s,t))}))):e.itemMenuElement(a.menuItem,s,t),o.a.createElement(V.a,null))}),o.a.createElement(V.a,null)))}}]),t}(n.Component),ee=Object(E.a)(Object(c.b)(function(e){return{workSheetId:e.cbitData.workSheetId,match:q.a.object.isRequired,location:q.a.object.isRequired,history:q.a.object.isRequired}}),h.f,Object(f.a)({menuItem:{minHeight:"48px",lineHeight:"1",textTransform:"uppercase",color:"white",fontSize:"0.9rem",letterSpacing:"0.5px",fontWeight:"bolder"},menuItemNested:{minHeight:"48px",lineHeight:"1",textTransform:"uppercase",fontSize:"0.8rem",letterSpacing:"0.5px",color:"white",fontWeight:"bolder",paddingLeft:"30px"},menuList:{flex:1},sideBar:{display:"flex",flexFlow:"column nowrap",flex:1}}))($),te=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement(k.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",style:{marginLeft:"2rem",marginRight:"2rem"}},"rub21@2020",o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginLeft:"2rem",marginRight:"2rem"}})))}}]),t}(n.Component),ae=Object(f.a)({root:{display:"flex",flexGrow:1,backgroundColor:"#EBEEF3",marginTop:"4rem",borderTop:"4px solid #1F2932",lineHeight:"50px",height:"50px"}})(te),ne=Object(v.a)({spacing:8,palette:{primary:_.a,secondary:x.a},typography:{fontFamily:['"Open Sans"','"Helvetica"','"Arial"','"Helvetica Neue"',"Arial","sans-serif"].join(","),fontSize:16}}),oe={root:{display:"flex",backgroundColor:"#F3F6F8",lineHeight:1.6},drawer:Object(g.a)({},ne.breakpoints.up("md"),{width:240,flexShrink:0}),appBar:Object(g.a)({marginLeft:240},ne.breakpoints.up("md"),{width:"calc(100% - ".concat(240,"px)")}),drawerPaper:{width:240,backgroundColor:"#1f2932",color:"white",flex:"1",boxShadow:"10px 0 20px rgba(40,40,100,.12)"},content:{width:"calc(100% - ".concat(240,"px)"),flexGrow:1,backgroundColor:"inherit"}},ie=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={mobileOpen:!1},a.handleDrawerToggle=function(){a.setState({mobileOpen:!a.state.mobileOpen})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(w.a,{theme:ne},o.a.createElement("div",{className:e.root},o.a.createElement(b.a,null),o.a.createElement("nav",{className:e.drawer},o.a.createElement(y.a,{mdUp:!0,implementation:"css"},o.a.createElement(G,{handleDrawerToggle:this.handleDrawerToggle}),o.a.createElement(j.a,{variant:"temporary",anchor:"right",open:this.state.mobileOpen,onClose:this.handleDrawerToggle,classes:{paper:e.drawerPaper},ModalProps:{keepMounted:!0}},o.a.createElement(ee,null))),o.a.createElement(y.a,{smDown:!0,implementation:"css"},o.a.createElement(j.a,{classes:{paper:e.drawerPaper},variant:"permanent",open:!0},o.a.createElement(N,null),o.a.createElement(ee,null)))),o.a.createElement("main",{className:e.content},o.a.createElement(k.a,{container:!0},o.a.createElement(k.a,{item:!0,xs:!0},o.a.createElement("div",{className:e.chartsContent},this.props.children))),o.a.createElement(k.a,{container:!0},o.a.createElement(k.a,{item:!0,xs:!0},o.a.createElement(ae,null))))))}}]),t}(n.Component),se=Object(E.a)(Object(f.a)(oe))(ie),re=a(41),ce=a.n(re),le=a(42),me=a.n(le),pe=a(63),ue=a(232),de=a(233),he=a(54),ge=new me.a,be=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{minHeight:"calc(100vh - 200px)",paddingLeft:"20px",paddingRight:"20px",marginTop:"100px"}},o.a.createElement("h1",null,"Hi, I'm a programmer"),o.a.createElement("div",null,ce()(ge.render("\nHi, my name is Ruben, I learned that the responsibility and punctuality and the hard working are the keys to success.\nI'm a System engineering graduate from San Cristobal de Huamanga University whit the highest score in my class. I got into programming because I love making atomize things, it is magic to see how programming can make easy the life, I can work anytime, anywhere with all the latest tools readily available at my fingertips.\n\nI am looking for my next adventure, so feel free to browse the projects section to check out what I've built, shoot me an email or connect on linkedIn.\n      "))),pe.skills.map(function(e){return o.a.createElement(T.a,{style:{margin:"5px"}},o.a.createElement(ue.a,{subheader:e.name}),o.a.createElement(de.a,null,o.a.createElement(k.a,{container:!0,style:{flexGrow:1}},e.types.map(function(e){return o.a.createElement(k.a,{item:!0,lg:3,style:{padding:"10px"}},o.a.createElement(k.a,{container:!0,spacing:1},o.a.createElement(k.a,{item:!0},o.a.createElement(C.a,{style:{backgroundColor:"#999"}},e.class?o.a.createElement("i",{class:e.class,style:{fontSize:"2rem"},colored:!0}):o.a.createElement("div",{style:{fontWeight:"bold"}},e.skill_name.charAt(0)))),o.a.createElement(k.a,{item:!0,xs:!0,zeroMinWidth:!0,style:{marginTop:"10px"}},o.a.createElement(he.a,{variant:"body2",component:"p",color:"textSecondary"},e.skill_name))))}))))}))}}]),t}(n.Component),fe=new me.a,ve=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement("h1",null,"Contact me at:"),o.a.createElement("div",{className:e.content},ce()(fe.render("\n- Email: rub2106@gmail.com\n- [Github](https://github.com/Rub21)\n- [Twitter](https://twitter.com/Rub21)\n- [Linkedin](https://www.linkedin.com/in/ruben-lopez-mendoza-640378b2)\n\n*My dogs*\n\n![img2](https://user-images.githubusercontent.com/1152236/72189622-51aea880-33cb-11ea-9a30-554e9eaece44.jpeg)\n\n![img1](https://user-images.githubusercontent.com/1152236/72189575-2d52cc00-33cb-11ea-8b5e-45704c6c7c84.jpeg)\n"))))}}]),t}(n.Component),we=Object(f.a)({root:{minHeight:"calc(100vh - 200px)",paddingLeft:"20px",paddingRight:"20px",marginTop:"100px"}})(ve),ye=a(234),je=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement(ye.a,{component:"main",maxWidth:"sm"},o.a.createElement(he.a,{variant:"h2",component:"h1",gutterBottom:!0},"404"),o.a.createElement(he.a,{variant:"h5",component:"h2",gutterBottom:!0},"Page no found")))}}]),t}(n.Component),ke=Object(f.a)({root:{marginTop:"120px",display:"flex",flexDirection:"column",alignItems:"center"}})(je),Ee=a(95),Oe=a(235),xe=(a(189),a(96)),Se=new me.a,_e=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){this.props.classes;return o.a.createElement("div",{style:{minHeight:"calc(100vh - 200px)",paddingLeft:"20px",paddingRight:"20px",marginTop:"100px"}},o.a.createElement("h1",null,"Projects"),Ee.map(function(e){return o.a.createElement(T.a,{style:{margin:"5px"}},o.a.createElement(ue.a,{subheader:e.title}),o.a.createElement(de.a,null,o.a.createElement(k.a,{container:!0,spacing:3},o.a.createElement(k.a,{item:!0,lg:8},e.images?o.a.createElement(xe.Carousel,{showThumbs:!1},e.images.map(function(e){return o.a.createElement("div",null,o.a.createElement("img",{src:e}))})):o.a.createElement("video",{width:"100%    !important;",height:"auto   !important;",controls:!0,autoplay:!0,loop:!0,muted:!0},o.a.createElement("source",{src:e.videos[0],type:"video/mp4"}),"Your browser does not support HTML5 video.")),o.a.createElement(k.a,{item:!0,lg:4},o.a.createElement(Oe.a,{pr:2,style:{padding:"5px"}},o.a.createElement(he.a,{display:"block",variant:"caption",color:"textSecondary"},e.live_url?o.a.createElement("a",{href:e.live_url},"Alive Page"," "," | "):"",o.a.createElement("a",{href:e.github_url},"Repository - Doc:")),o.a.createElement(he.a,{display:"block",variant:"caption",color:"textSecondary"}),o.a.createElement(he.a,{variant:"caption",color:"textSecondary"},e.technologies),o.a.createElement(he.a,{variant:"caption",color:"textSecondary"},o.a.createElement("div",{style:{textAlign:"justify"}},ce()(Se.render(e.body)))))))))}))}}]),t}(n.Component),Me=Object(f.a)({})(_e),Te=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement("h1",null,"Resume"),o.a.createElement("div",null,o.a.createElement("object",{width:"100%",height:"1000px",data:"http://rub21.com/assets/rub21_resume.pdf",type:"application/pdf"},"   ")))}}]),t}(n.Component),Ce=Object(f.a)({root:{minHeight:"calc(100vh - 100px)",paddingTop:"100px",paddingLeft:"20px",paddingRight:"20px"}})(Te),Ie=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(se,null,o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/",component:be}),o.a.createElement(h.a,{exact:!0,path:"/projects",component:Me}),o.a.createElement(h.a,{exact:!0,path:"/resume",component:Ce}),o.a.createElement(h.a,{exact:!0,path:"/about",component:we}),o.a.createElement(h.a,{exact:!0,path:"*",component:ke})))}}]),t}(n.Component),Re=a(37),Pe=a(99);function Ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function De(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ne(a,!0).forEach(function(t){Object(g.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ne(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Ae={data:[],loading:!0,error:null,workSheetId:"livestock_d1"};var He=Object(Re.c)({cbitData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return De({},e,{loading:!0,error:null});case Z:return De({},e,{loading:!1,data:t.payload.fData,workSheetId:t.payload.workSheetId});case Y:return De({},e,{loading:!1,error:t.payload.error,data:[],workSheetId:t.payload.workSheetId});default:return e}}}),Je=Object(Re.d)(He,Object(Re.a)(Pe.a));s.a.render(o.a.createElement(function(){return o.a.createElement(c.a,{store:Je},o.a.createElement(r.a,{basename:"/"},o.a.createElement(Ie,null)))},null),document.getElementById("root"))},47:function(e,t,a){e.exports=a.p+"static/media/me.2c00c0e3.jpg"},63:function(e){e.exports=JSON.parse('{"skills":[{"name":"Frontend frameworks","types":[{"class":"devicon-react-original","skill_name":"React"},{"class":"devicon-html5-plain","skill_name":"HTML5"},{"class":"devicon-css3-plain","skill_name":"CSS3"},{"class":"devicon-bootstrap-plain","skill_name":"Bootstrap"},{"class":"devicon-jquery-plain","skill_name":"jQuery"},{"skill_name":"Material-ui"},{"skill_name":"MapboxGL"},{"skill_name":"Leaflet"},{"skill_name":"Redux"}]},{"name":"Programing languages","types":[{"class":"devicon-javascript-plain","skill_name":"JavaScript"},{"class":"devicon-java-plain","skill_name":"Java"},{"class":"devicon-python-plain","skill_name":"Python"}]},{"name":"Databases","types":[{"class":"devicon-postgresql-plain","skill_name":"Postgresql"},{"class":"devicon-mongodb-plain","skill_name":"MongoDB"}]},{"name":"Backend frameworks","types":[{"class":"devicon-nodejs-plain","skill_name":"NodeJS"},{"skill_name":"Hapi.js"},{"class":"devicon-express-original","skill_name":"Express"}]},{"name":"Devops","types":[{"class":"devicon-git-plain","skill_name":"Git"},{"class":"devicon-github-plain","skill_name":"GitHub"},{"class":"devicon-gitlab-plain","skill_name":"GitLab"},{"class":"devicon-docker-plain","skill_name":"Docker"},{"class":"devicon-kubernetes-plain","skill_name":"Kubernetes"}]},{"name":"Cloud","types":[{"class":"devicon-amazonwebservices-original","skill_name":"Amazon Web Services"},{"class":"devicon-google-plain","skill_name":"Google Cloud Platform"}]},{"name":"Data processing","types":[{"skill_name":"QGIS"},{"skill_name":"ArcGIS"},{"skill_name":"Phyton Scripts"}]},{"name":"Mapping","types":[{"skill_name":"OpenStreetMap"}]},{"name":"Testing","types":[{"skill_name":"Mocha"},{"skill_name":"Jasmine"},{"skill_name":"RSpec"}]}]}')},91:function(e){e.exports=JSON.parse('{"menu":[{"id":"home","title":"Home","path":"/"},{"id":"projects","title":"Projects","path":"/projects"},{"id":"resume","title":"resume","path":"/resume"},{"id":"about","title":"About","path":"/about"}]}')},95:function(e){e.exports=JSON.parse('[{"layout":"post","title":"Special Economic Zones Viewer","github_url":"https://en.wikipedia.org/wiki/Special_economic_zone","technologies":"React, DigitalGlobe, Mapbox, Material-ui,etc.","cover":"/assets/vid/sez-u.mp4","videos":["/assets/vid/sez-u.mp4"],"owner":"[DevSeed](http://devseed.com/)","body":"A special economic zone (SEZ) is an area in which the business and trade laws are different from the rest of the country. SEZs are located within a country\'s national borders, and their aims include increased trade balance, employment, increased investment, job creation and effective administration.\\n","id":"2019-09-01-sez-viewer"},{"layout":"post","title":"OSM-SEED","live_url":"https://developmentseed.org/projects/osm-seed/","github_url":"https://github.com/developmentseed/osm-seed","technologies":"Docker, Docker-Compose, Kubernetes, Bash,etc.","cover":"/assets/images/project_images/monaco.gif","images":["/assets/images/project_images/monaco.gif","https://user-images.githubusercontent.com/1152236/51428589-69e25200-1bd3-11e9-8e0b-aa6e7f52438c.png","https://user-images.githubusercontent.com/1152236/51428599-88e0e400-1bd3-11e9-8875-476ea73f30af.jpg"],"owner":"[DevSeed](http://devseed.com/)","body":"A collection of Dockerfiles to run a containerized version of OpenStreetMap\\n","id":"2018-08-01-osm-seed"},{"layout":"post","title":"Hacking INEI data","github_url":"https://github.com/Rub21/get-inei-data","technologies":"Node.js, Turf, Cheerio, Bash, etc.","cover":"https://user-images.githubusercontent.com/1152236/41137837-00c8324e-6aa3-11e8-8be3-84f609ed00a6.png","images":["https://user-images.githubusercontent.com/1152236/41137837-00c8324e-6aa3-11e8-8be3-84f609ed00a6.png"],"owner":"[Rub21](https://www.rub21.com)","body":"Bunch of scripts to obtain geo data from [atlas.inei.gob.pe/inei](http://atlas.inei.gob.pe/inei),  [Outputs](https://github.com/Rub21/get-inei-data/tree/master/data\\">get-inei-data/tree/master/data)","id":"2018-06-07-hacking-inei-data"},{"layout":"post","title":"Adaptat\xf3n - Trujillo","live_url":"http://rait.surge.sh","github_url":"https://github.com/ayacteam/rait-backend","technologies":"Node.js, OpenStreetMap, OSMRM","cover":"/assets/images/project_images/adaptaton.jpg","images":["https://user-images.githubusercontent.com/1152236/39410955-0ef70652-4bc6-11e8-9534-3da26b9b7bda.gif","/assets/images/project_images/adaptaton2.jpg","https://user-images.githubusercontent.com/1152236/39407608-47f7bcc2-4b8e-11e8-8d2f-8970d077fbda.png","https://user-images.githubusercontent.com/1152236/39407664-fd28e292-4b8e-11e8-81d1-59f1af5f9ef6.png","https://user-images.githubusercontent.com/11504548/39408088-aae427e6-4b96-11e8-8869-49e64375583b.gif"],"owner":"[Rub21](https://www.rub21.com)","body":"A web application that allows the neighbors to report flooded streets, which are verified and validated by municipal managers, once the data was validated the application provides alternate routes for circulation, avoiding the flooded streets.","id":"2018-04-30-Adaptaton-trujillo"},{"layout":"post","title":"Changeset Viewer plugin","github_url":"https://github.com/osmlab/osmlint","technologies":"Java, Java OpenStreetMap Editor.","cover":"https://user-images.githubusercontent.com/1152236/35937653-deae6742-0c14-11e8-84a0-d65039afac45.gif","images":["https://user-images.githubusercontent.com/1152236/35937653-deae6742-0c14-11e8-84a0-d65039afac45.gif"],"owner":"[Rub21](https://www.rub21.com)","body":"Changeset Viewer plugin allows you to visualize one or many changesets in JOSM!\\n","id":"2018-02-01-changeset-viewer"},{"layout":"post","title":"Tasking import for Peru schools","live_url":"https://osm-pe.github.io/schools-import/#5/-8.744/-75.927","github_url":"https://github.com/osm-pe/schools-import","technologies":"JavaScript, HTML, CSS, Webpack, etc.","cover":"https://user-images.githubusercontent.com/1152236/40888544-5ae823b6-671e-11e8-99dc-89b81f948909.gif","images":["https://user-images.githubusercontent.com/1152236/40888544-5ae823b6-671e-11e8-99dc-89b81f948909.gif","https://wiki.openstreetmap.org/w/images/c/cb/4vdsfds.gif","https://wiki.openstreetmap.org/w/images/b/b0/5dsvdssdf.gif"],"owner":"[Rub21](https://www.rub21.com)","body":"Website to handle the school import process by the Peru-osm community.\\n","id":"2017-12-01-school-import-task-manager"},{"layout":"post","title":"CLI Tool to process Peru school data","live_url":"https://wiki.openstreetmap.org/wiki/Import/Catalogue/Peru/schools#Procesamiento_de_datos","github_url":"https://github.com/Rub21/process-peru-schools","technologies":"Tile-reduce, Turf, Rbush, Underscore, ect.","cover":"/assets/images/project_images/school-import/schools.png","images":["/assets/images/project_images/school-import/schools.png","/assets/images/project_images/school-import/data-page.png","/assets/images/project_images/school-import/split-blocks.png"],"owner":"[Rub21](https://www.rub21.com)","body":"CLI tool to split 100 thousand points into blocks according to the school density. The data come from [SIGMED](http://sigmed.minedu.gob.pe/mapaeducativo)","id":"2017-12-01-Processing-peru-school-data"},{"layout":"post","title":"osmlint-osmium","github_url":"https://github.com/osmlab/osmlint","technologies":"Tile-reduce, Turf, Rbush, Underscore, ect.","cover":"/assets/images/project_images/osmlint/osmlint-osmium.png","images":["/assets/images/project_images/osmlint/osmlint-osmium.png"],"owner":"[Mapbox](https://www.mapbox.com)","body":"Osmlint-osmium is a set scrpits to Validate OpenStreetMap data with PBF files. osmlint-osmium is using node-osmium to read the OSM data, dont forget install the dependencies.","id":"2017-08-27-osmlint-osmium"},{"layout":"post","title":"Mapa de inundaciones del Per\xfa","live_url":"https://osm-pe.github.io/mapa-inundaciones/#4.76/-12.098/-75.560","github_url":"https://github.com/osm-pe/mapa-inundaciones","technologies":"JavaScript, HTML, CSS, etc.","cover":"https://user-images.githubusercontent.com/1152236/40889081-0070c822-6726-11e8-9f87-f29b22a3a4fd.gif","images":["https://user-images.githubusercontent.com/1152236/40889081-0070c822-6726-11e8-9f87-f29b22a3a4fd.gif"],"owner":"[Rub21](https://www.rub21.com)","body":"A web application that allows reporting of flooded streets in Peru. Application adapted to face the Ni\xf1o costero [Phenomenon crisis in 2017 in Peru.](https://es.wikipedia.org/wiki/Ni%C3%B1o_costero_(2016-2017))","id":"2017-04-07-mapa-de-inundaciones"},{"layout":"post","idnext":1,"title":"Tofix Backend","github_url":"https://github.com/osmlab/to-fix-backend","technologies":"Node.js, Hapi.js, etc.","cover":"https://user-images.githubusercontent.com/11095038/28570267-09741cb0-715b-11e7-805c-361a28607e26.png","images":["https://user-images.githubusercontent.com/11095038/28570267-09741cb0-715b-11e7-805c-361a28607e26.png"],"owner":"[Mapbox](https://www.mapbox.com)","body":"Backed infrastructure to support [to-fix](https://github.com/osmlab/to-fix) micro tasking tool.","id":"2017-04-04-tofix-backend"},{"layout":"post","title":"Turn Lanes plugin for JOSM","live_url":"https://blog.mapbox.com/turnlanes-tagging-plugin-for-josm-a93220e9aa0","github_url":"https://github.com/JOSM/turnlanes-tagging","technologies":"Java, Java OpenStreetMap Editor.","cover":"https://cloud.githubusercontent.com/assets/1152236/16133679/c56fe05e-33de-11e6-8f18-cb5efa721cde.gif","images":["https://cloud.githubusercontent.com/assets/1152236/16133679/c56fe05e-33de-11e6-8f18-cb5efa721cde.gif","https://cloud.githubusercontent.com/assets/1152236/16133863/aa636bfe-33df-11e6-9161-6ccd6b10559c.gif"],"owner":"[Mapbox](https://www.mapbox.com)","body":"TurnLanes-tagging Editor plugin provides an alternative way to add [turn:lanes](https://wiki.openstreetmap.org/wiki/Key:turn) tags on highways in OpenStreetMap","id":"2016-09-27-turnlanes-plugin"},{"layout":"post","title":"OSM Object Info Plugin","github_url":"https://github.com/JOSM/osm-obj-info","technologies":"Java, Java OpenStreetMap Editor.","cover":"https://cloud.githubusercontent.com/assets/1152236/16200910/e874ebfa-36d4-11e6-8d80-11a2cafc93bf.gif","images":["https://cloud.githubusercontent.com/assets/1152236/16200910/e874ebfa-36d4-11e6-8d80-11a2cafc93bf.gif"],"owner":"[JOSM](https://github.com/JOSM)","body":"Plugin for JOSM to display the OpenstreetMap object information in easy way and get all information according the user and id changeset also It provides links to open on the web the user, id of object and id of changeset.","id":"2016-07-06-osm-object-info"},{"layout":"post","title":"geojson2osm","live_url":"https://www.npmjs.com/package/geojson2osm","github_url":"https://github.com/Rub21/geojson2osm","technologies":"Node.js","cover":"https://user-images.githubusercontent.com/1152236/41137566-600e5e9c-6aa1-11e8-945e-fd25663e5dba.png","images":["https://user-images.githubusercontent.com/1152236/41137566-600e5e9c-6aa1-11e8-945e-fd25663e5dba.png"],"owner":"[Mapbox](https://www.mapbox.com)","body":"Node CLI tool to convert geojson files into osm files, Helpful to import data into OpenStreetMap.","id":"2016-07-06-geojson2osm"},{"layout":"post","title":"osmlint","github_url":"https://github.com/osmlab/osmlint","technologies":"Tile-reduce, Turf, Rbush, Underscore, ect.","cover":"/assets/images/project_images/osmlint/workshop.jpg","images":["/assets/images/project_images/osmlint/workshop.jpg","/assets/images/project_images/osmlint/infraestructure.png","/assets/images/project_images/osmlint/clients.png"],"owner":"[Mapbox](https://www.mapbox.com)","body":"OSMLint is a selection of validators built with [TileReduce](https://github.com/mapbox/tile-reduce)  for validating OSM QA Tiles.\\nA tool to detect issues on the map and validate OpenStreetMap data with [OSM QA Tiles](http://osmlab.github.io/osm-qa-tiles/)","id":"2016-05-01-osmlint"},{"layout":"post","idnext":1,"title":"Tofix plugin for JOSM","github_url":"https://github.com/JOSM/tofix","technologies":"java, Java OpenStreetMap Editor.","cover":"https://cloud.githubusercontent.com/assets/1152236/10491901/9b17bf5c-726e-11e5-9575-3c62d0412140.gif","images":["https://cloud.githubusercontent.com/assets/1152236/10491901/9b17bf5c-726e-11e5-9575-3c62d0412140.gif","https://user-images.githubusercontent.com/1152236/38280298-3a8676e2-376a-11e8-8d1f-4cd17c7690c4.gif"],"owner":"[Mapbox](https://www.mapbox.com)","body":"To-Fix OpenStreetMap microtasking challenges available directly from within the JOSM editor.\\nInstead of picking new tasks and confirming accomplished tasks through the web interface of To-Fix on [https://github.com/osmlab/to-fix](https://github.com/osmlab/to-fix) this plugin allows you to work with To-Fix tasks without ever having to switch out of.\\n","id":"2016-01-01-to-fix"}]')}},[[110,1,2]]]);
//# sourceMappingURL=main.b3e95f36.chunk.js.map