(function(e){function t(t){for(var i,n,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)n=o[d],s[n]&&p.push(s[n][0]),s[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(i=!1)}i&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},s={app:0},r=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var i=a("64a9"),s=a.n(i);s.a},"0627":function(e,t,a){"use strict";var i=a("b62f"),s=a.n(i);s.a},"091f":function(e,t,a){"use strict";var i=a("f6bf"),s=a.n(i);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-column vh-100 avenir",attrs:{id:"app"}},[e._m(0),a("div",{staticClass:"flex flex-auto",attrs:{id:"middle"}},[a("div",{staticClass:"br b--gray overflow-auto",staticStyle:{width:"300px"},attrs:{id:"sidebar"}},[a("FeatureInfo")],1),a("div",{staticClass:"relative flex-auto",attrs:{id:"map-container"}},[a("Map"),a("div",{staticClass:"absolute ba b--gray shadow-3 ml2 mt2",attrs:{id:"overlay"}},[a("Mode"),a("Legend")],1)],1)]),e._m(1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bb b--gray bg-green",attrs:{id:"top"}},[a("img",{staticClass:"w2 dib fl ma2",attrs:{src:"cubetree-logo.png"}}),a("h1",{staticClass:"f1 ma2 lancelot dark-green dib fl"},[e._v("OpenTrees.org")]),a("h2",{staticClass:"f2 lancelot ml4 mb0 mt3 fl gray"},[e._v("929,055 open data trees.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bt b--light-gray flex-none pa1 shadow-3",attrs:{id:"bottom"}},[e._v("Created by "),a("a",{attrs:{href:"https://twitter.com/stevage1/"}},[e._v("Steve Bennett")]),e._v(". \nSource code on "),a("a",{attrs:{href:"https://github.com/stevage/OpenTrees"}},[e._v("Github")]),e._v(".\n"),a("a",{attrs:{href:"https://stevebennett.me/2015/04/07/opentrees-org-how-to-aggregate-373000-trees-from-9-open-data-sources/"}},[e._v("Blog post #1")]),e._v(" (2015). \n"),a("a",{attrs:{href:"https://stevebennett.me/2018/05/15/you-might-not-need-postgis-streamlined-vector-tile-processing-for-big-map-visualisations/"}},[e._v("Blog post #2")]),e._v(" (2018).")])}],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"absolute absolute--fill",attrs:{id:"map"}})},o=[],c=a("5d73"),l=a.n(c),u=a("a4bb"),d=a.n(u),p=(a("55dd"),a("96cf"),a("3b8d")),m=a("75fc"),f=a("768b"),h=a("e192"),v=a.n(h),g=a("ef12"),b=a.n(g),_=new i["a"],y=(a("ac6d"),function(e){return e.reduce(function(e,t){var a=Object(f["a"])(t,2),i=a[0],s=a[1];return[].concat(Object(m["a"])(e),[i,s])},[])}),C={data:function(){return{mode:void 0}},mounted:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:v.a.accessToken="pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjazZzd3V2dXEwNGZlM2xtZzFnOXdkOTFtIn0.pKVxwqE61gNc7PKK5u1j6g",t=new v.a.Map({container:"map",center:[144.96,-37.81],zoom:14,style:"mapbox://styles/stevage/ck6sws4g704uu1iqtvn25gj6v",hash:!0}),t.addControl(new v.a.NavigationControl),b.a.init(t,v.a),window.map=t,window.app.Map=this,this.map=t,t.U.onLoad(function(){t.U.addVector("trees","localhost"===window.location.hostname?"http://localhost:4011/index.json":"mapbox://stevage.9slh6b3l"),t.U.addGeoJSON("selected-tree"),t.U.addCircle("trees-selected","selected-tree",{circleColor:"transparent",circleStrokeColor:"hsla(100,60%,40%,0.8)",circleStrokeWidth:3,circleRadius:{stops:[[10,8],[12,16]]}}),t.U.addCircle("trees-similar","trees",{sourceLayer:"trees",circleColor:"hsla(100,90%,60%,0.4)",circleRadius:{stops:[[12,6],[17,10]]},filter:!1}),t.U.addCircle("trees-vis-none","trees",{sourceLayer:"trees",circleColor:"hsla(80,50%,60%,0.6)",circleRadius:{stops:[[10,4],[12,6]]},circleOpacity:.5}),t.U.addCircle("trees-vis-species","trees",{sourceLayer:"trees",circleColor:["case"].concat(Object(m["a"])(y(w.species.map(function(e){var t=Object(f["a"])(e,3),a=(t[0],t[1]),i=t[2];return[i,a]}))),["hsla(0,0%,0%,0.3)"]),circleRadius:{stops:[[12,2],[17,6]]},circleOpacity:["interpolate",["linear"],["zoom"],13,.5,17,1]}),t.U.addCircle("trees-vis-rarity","trees",{sourceLayer:"trees",circleRadius:{stops:[[12,2],[17,6]]},circleColor:["case"].concat(Object(m["a"])(y(w.rarity.map(function(e){var t=Object(f["a"])(e,3),a=(t[0],t[1]),i=t[2];return[i,a]}))),["#ddd"]),circleOpacity:["interpolate",["linear"],["zoom"],13,.5,17,1]}),t.U.addCircle("trees-vis-noxious","trees",{sourceLayer:"trees",circleRadius:{stops:[[12,2],[17,6]]},circleColor:["case"].concat(Object(m["a"])(y(w.noxious.map(function(e){var t=Object(f["a"])(e,3),a=(t[0],t[1]),i=t[2];return[i,a]}))),["transparent"])}),t.U.addCircle("trees-vis-local","trees",{sourceLayer:"trees",circleColor:"hsla(80,50%,70%,0.5)",circleRadius:{stops:[[10,4],[12,6]]},circleOpacity:.5}),t.U.addCircle("trees-vis-trunk","trees",{sourceLayer:"trees",circleColor:"hsla(40,90%,20%,0.8)",circleRadius:["interpolate",["exponential",1],["to-number",["get","dbh"],0],0,0,1,1,50,10,250,20],circleOpacity:.5}),t.U.addCircle("trees-inner","trees",{sourceLayer:"trees",circleColor:"hsla(80,50%,20%,0.9)",circleRadius:{stops:[[12,1],[14,2]]}}),a.switchMode("none")}),t.U.hoverPointer(["trees-inner"].concat(Object(m["a"])(x))),t.U.clickOneLayer(["trees-inner"].concat(Object(m["a"])(x)),function(e){console.log(e),window.app.FeatureInfo.feature=e.features[0],t.U.setData("selected-tree",e.features[0]),t.U.setFilter("trees-similar",["==",["get","scientific"],e.features[0].properties.scientific])},function(){t.U.setData("selected-tree",{type:"FeatureCollection",features:[]}),t.U.setFilter("trees-similar",!1)}),_.$on("vis-mode",function(e){return a.mode=e}),t.on("moveend",function(){"local"===a.mode&&a.updateLocal()});case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),watch:{mode:function(){this.switchMode(this.mode)}},methods:{switchMode:function(e){this.map.U.hide(x),this.map.U.show("trees-vis-".concat(e)),console.log(e),"local"!==e?_.$emit("update-legend",w[e]):this.updateLocal()},updateLocal:function(){var e=["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],t=this.map.queryRenderedFeatures({layers:["trees-inner"]}),a={},i=!0,s=!1,r=void 0;try{for(var n,o=l()(t);!(i=(n=o.next()).done);i=!0){var c=n.value,u=a[c.properties.scientific]||[0,""],p=Object(f["a"])(u,2),h=p[0],v=p[1];a[c.properties.scientific]=[h++,v||c.properties.common]}}catch(b){s=!0,r=b}finally{try{i||null==o.return||o.return()}finally{if(s)throw r}}console.log(a);var g=d()(a).sort(function(e,t){return a[t][0]-a[e][0]}).slice(0,12);w.local=g.map(function(t,i){return["".concat(t).concat(a[t][1]?"<br/> (".concat(a[t][1],")"):""),e[i],["==",["get","scientific"],t]]}),console.log(w.local),this.map.U.setCircleColor("trees-vis-local",["case"].concat(Object(m["a"])(y(w.local.map(function(e){var t=Object(f["a"])(e,3),a=(t[0],t[1]),i=t[2];return[i,a]}))),["gray"])),_.$emit("update-legend",[].concat(Object(m["a"])(w.local),[["Other","gray"]]))}}},w={none:[],species:[["Eucalyptus","hsl(90,90%,30%)",["in",["get","genus"],["literal",["Eucalyptus"]]]],["Corymbia,  Angophora","hsl(90,30%,60%)",["in",["get","genus"],["literal",["Corymbia","Angophora"]]]],["Lophostemon","hsl(90,90%,60%)",["in",["get","genus"],["literal",["Lophostemon"]]]],["Grevilleas, proteas, banksias","hsl(120,60%,50%)",["in",["get","genus"],["literal",["Grevillea","Grevillia","Banksia","Stenocarpus"]]]],["Melaleucas and callistemons","hsl(200, 60%,50%)",["in",["get","genus"],["literal",["Melaleuca","Callistemon"]]]],["(Allo)Casuarinas","hsl(180, 90%,60%)",["in",["get","genus"],["literal",["Casuarina","Allocasuarina"]]]],["Other natives","hsl(160, 90%, 30%)",["any",["in",["get","genus"],["literal",["Hakea","Agonis","Tristaniopsis","Lagunaria","Acacia","Hymenosporum","Brachychiton","Leptospermum","Waterhousea","Bursaria","Geijera","Paraserianthes","Myoporum","Exocarpos","Exocarpus","Jacksonia"]]],["all",["in",["get","genus"],["literal",["Acmena","Syzygium"]]],["in",["get","species"],["literal",["smithii"]]]],["in",["get","scientific"],["literal",["Pittosporum undulatum","Cupaniopsis anacardioides","Acmena smithii","Acmena smithii (Syzygium smithii)","Syzygium australe"]]]]],["Planes","hsl(0,86%,60%)",["in",["get","genus"],["literal",["Platanus","Plantanus"]]]],["Elms","hsl(30,60%,60%)",["in",["get","genus"],["literal",["Ulmus","Celtis"]]]],["Oaks & maples","hsl(330, 60%,60%)",["in",["get","genus"],["literal",["Quercus","Acer"]]]],["Palms","hsl(40, 100%,70%)",["in",["get","genus"],["literal",["Phoenix","Washingtonia","Jubaea","Chamaerops","Syagrus","Livistona","Trachycarpus"]]]],["Conifers","hsl(60,90%,45%)",["in",["get","genus"],["literal",["Pinus","Araucaria","Cupressus","Cupressocyparis","Podocarpus","Platycladus","Thuja","Hesperocyparis","Callitris","Cedrus","Picea","Abies","Cunninghamia","Chamaecyparis","Sequoiadendron","Sequoia","Thujopsis"]]]],["Pears, plums and other fruits","hsl(250,60%,60%)",["in",["get","genus"],["literal",["Pyrus","Prunus","Malus","Citrus"]]]],["Figs","hsl(0,0%,40%)",["in",["get","genus"],["literal",["Ficus"]]]],["Ashes","hsl(0,0%,20%)",["in",["get","genus"],["literal",["Fraxinus"]]]],["Other exotics","hsl(310, 90%,60%)",["any",["in",["get","genus"],["literal",["Betula","Liquidambar","Gleditsia","Robinia","Pseudotsuga","Alnus","Laburnum","Eriobotrya","Olea","Schinus","Photinia","Laurus","Populus","Ligustrum","Cotoneaster","Nerium","Pyracantha","Zelkova","Jacaranda","Metrosideros","Pistacia","Pistachia","Arbutus","Crataegus","Koelreuteria","Morus","Cinnamomum","Virgilia","Salix","Ceratonia","Cercis","Tilia","Ginkgo","Magnolia","Melia","Afrocarpus","Michelia","Sophora","Carpinus","Fagus","Sorbus","Liriodendron","Ilex","Aesculus","Viburnum","Genista"]]],["in",["get","species"],["literal",["indica","eugenioides","japonicus","japonica"]]],["in",["get","scientific"],["literal",["Agathis robusta","Pittosporum tenuifolium","Agathis australis","Cordyline australis","Hibiscus syriacus"]]]]]],rarity:[["Unknown","hsla(0, 0%, 0%, 0.3)",["==",["to-number",["get","species_count"],0],0]],["Super common","hsl(210, 90%,60%)",[">=",["get","species_count"],1e4]],["Very common","hsl(160, 90%,60%)",["all",[">=",["get","species_count"],1e3],["<",["get","species_count"],1e4]]],["Common","hsl(120, 80%,60%)",["all",[">=",["get","species_count"],100],["<",["get","species_count"],1e3]]],["Average","hsl(60, 80%,50%)",["all",[">=",["get","species_count"],20],["<",["get","species_count"],100]]],["Rare","hsl(30, 80%, 50%)",["all",[">=",["get","species_count"],5],["<",["get","species_count"],20]]],["Very rare","hsl(0, 100%, 40%)",["<",["get","species_count"],5]]],noxious:[["Odour","hsl(240, 90%,60%)",["in",["get","scientific"],["literal",["Pyrus calleryana"]]]],["Allergy","hsl(10, 90%,60%)",["in",["get","scientific"],["literal",["Platanus x acerifolia","Platanus acerifolia"]]]],["Skin irritation","hsl(60, 90%,40%)",["in",["get","genus"],["literal",["Lagunaria"]]]],["Poisonous","hsl(300, 90%,50%)",["any",["in",["get","genus"],["literal",["Nerium"]]],["in",["get","scientific"],["literal",["Melia azedarach"]]]]],["Poisonous for dogs","hsl(300, 30%,40%)",["any",["in",["get","scientific"],["literal",["Prunus serrulata","Cotoneaster glaucophylla"]]],["in",["get","species"],["literal","pseudoacacia"]]],["in",["get","genus"],["literal",["Quercus"]]]]],trunk:[],local:[]},x=d()(w).map(function(e){return"trees-vis-".concat(e)}),k=C,O=a("2877"),P=Object(O["a"])(k,n,o,!1,null,"0758d7e8",null);P.options.__file="Map.vue";var j=P.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.feature?a("div",[a("h2",{staticClass:"i lancelot f3 bg-green pa2 mv0"},[e._v(e._s(e.p.common||e.p.scientific))]),e.p.class?a("div",{staticClass:"f7 pa2 i"},[e._v(e._s(e.p.class)+" "),a("span",{staticClass:"light-green"},[e._v("> ")]),e._v(e._s(e.p.subclass)+" "),a("span",{staticClass:"light-green"},[e._v("> ")]),e._v(e._s(e.p.family))]):e._e(),e.feature?a("table",{staticClass:"bg-white helvetica ma1",attrs:{id:"FeatureInfo"}},[e.p.scientific?a("tr",[a("th",[e._v("Scientific name")]),a("td",[e._v(e._s(e.p.scientific))])]):e._e(),e.p.common?a("tr",[a("th",[e._v("Common name")]),a("td",[e._v(e._s(e.p.common))])]):e._e(),e.p.variety?a("tr",[a("th",[e._v("Variety")]),a("td",[e._v(e._s(e.p.variety))])]):e._e(),e.p.dbh?a("tr",[a("th",[e._v("Diameter")]),a("td",[e._v(e._s(e.p.dbh)+" "),a("span",{staticClass:"detail"},[e._v("cm.")])])]):e._e(),e.p.height?a("tr",[a("th",[e._v("Height")]),a("td",[e._v(e._s(e.p.height)+" "),a("span",{staticClass:"detail"},[e._v("m.")])])]):e._e(),e.p.planted?a("tr",[a("th",[e._v("Planted")]),a("td",[e._v(e._s(e.p.planted))])]):e._e(),e.p.maturity?a("tr",[a("th",[e._v("Maturity")]),a("td",[e._v(e._s(e.p.maturity))])]):e._e(),e.p.species_count?a("tr",[a("th",[e._v("Count")]),a("td",[e._v(e._s(e.p.species_count.toLocaleString())+" "),a("span",{staticClass:"detail"},[e._v("similar trees")])])]):e._e(),e.p.ref?a("tr",[a("th",[e._v("ID")]),a("td",[e._v(e._s("#"+e.p.ref))])]):e._e()]):e._e(),a("p",{staticClass:"f7 tr gray mh2 i"},[e._v("Source: "+e._s(e.p.source))]),a("Wikipedia",{attrs:{searchTerm:e.p.scientific}})],1):a("div",[e._v("Click on a tree for information!")])])},M=[],U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.searchTerm,expression:"searchTerm"}],staticClass:"pa2",attrs:{id:"Wikipedia"}},[e.text?a("div",[a("img",{attrs:{src:e.imageUrl}}),a("p",{domProps:{innerHTML:e._s(e.text)}}),a("p",[a("small",[e._v("Read more on "),a("a",{attrs:{href:"http://en.wikipedia.org/wiki/"+encodeURIComponent(e.title)}},[e._v("Wikipedia")])])])]):e.loading?a("div",[a("p",{staticClass:"i"},[e._v("Looking up Wikipedia...")])]):a("div",[a("p",[e._v("Nothing found on Wikipedia.")])])])},S=[],T=(a("a481"),a("bc3a")),A=a.n(T),R={name:"Wikipedia",data:function(){return{imageUrl:void 0,text:void 0,title:void 0,loading:!1}},props:["searchTerm"],created:function(){window.Wikipedia=this},watch:{searchTerm:function(){var e=this;this.text=void 0,this.title=void 0,this.imageUrl=void 0,this.loading=!0;var t="https://cors-anywhere.herokuapp.com/",a=t+"http://en.wikipedia.org/w/api.php?action=query&format=json",i=a+"&prop=extracts&redirects&titles=",s=a+"&prop=pageimages&redirects&titles=";console.log("Searching Wikipedia for: "+this.searchTerm),A.a.get(s+encodeURIComponent(this.searchTerm)).then(function(t){var a=t.data.query.pages,i=a[d()(a)[0]];if(i&&i.thumbnail&&i.thumbnail.source){var s=i.thumbnail.source.replace(/\/\d\dpx-/,window.devicePixelRatio>1?"/600px-":"/300px-");e.imageUrl=s}}),A.a.get(i+encodeURIComponent(this.searchTerm)).then(function(t){e.loading=!1;var a=t.data.query.pages,i=a[d()(a)[0]];i&&i.extract?(e.title=i.title,e.text=i.extract):(e.imageUrl=void 0,e.text=void 0)})}}},F=R,E=(a("091f"),Object(O["a"])(F,U,S,!1,null,null,null));E.options.__file="Wikipedia.vue";var I=E.exports,q={name:"FeatureInfo",data:function(){return{feature:void 0,ignoreProps:["id","Longitude","Latitude","image_url"]}},components:{Wikipedia:I},computed:{p:function(){return this.feature&&this.feature.properties||{}},imageUrl:function(){return this.p&&this.p.image_url}},created:function(){window.app.FeatureInfo=this}},N=q,$=(a("c8f5"),a("0627"),Object(O["a"])(N,L,M,!1,null,"090ca60a",null));$.options.__file="FeatureInfo.vue";var W=$.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-white pa1",attrs:{id:"Mode"}},[a("div",{staticClass:"pa0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],staticClass:"ma1 dib",attrs:{id:"none",type:"radio",value:"none"},domProps:{checked:e._q(e.mode,"none")},on:{change:function(t){e.mode="none"}}}),a("label",{staticClass:"pa1 dib",attrs:{for:"none"}},[e._v("No vis.")])]),a("div",{staticClass:"pa0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],staticClass:"ma1 dib",attrs:{id:"species",type:"radio",value:"species"},domProps:{checked:e._q(e.mode,"species")},on:{change:function(t){e.mode="species"}}}),a("label",{staticClass:"pa1 dib",attrs:{for:"species"}},[e._v("Species")])]),a("div",{staticClass:"pa0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],staticClass:"ma1 dib",attrs:{id:"rarity",type:"radio",value:"rarity"},domProps:{checked:e._q(e.mode,"rarity")},on:{change:function(t){e.mode="rarity"}}}),a("label",{staticClass:"pa1 dib",attrs:{for:"rarity"}},[e._v("Rarity")])]),a("div",{staticClass:"pa0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],staticClass:"ma1 dib",attrs:{id:"noxious",type:"radio",value:"noxious"},domProps:{checked:e._q(e.mode,"noxious")},on:{change:function(t){e.mode="noxious"}}}),a("label",{staticClass:"pa1 dib",attrs:{for:"noxious"}},[e._v("Harm")])]),a("div",{staticClass:"pa0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],staticClass:"ma1 dib",attrs:{id:"local",type:"radio",value:"local"},domProps:{checked:e._q(e.mode,"local")},on:{change:function(t){e.mode="local"}}}),a("label",{staticClass:"pa1 dib",attrs:{for:"local"}},[e._v("Local variety")])]),a("div",{staticClass:"pa0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],staticClass:"ma1 dib",attrs:{id:"trunk",type:"radio",value:"trunk"},domProps:{checked:e._q(e.mode,"trunk")},on:{change:function(t){e.mode="trunk"}}}),a("label",{staticClass:"pa1 dib",attrs:{for:"trunk"}},[e._v("Trunk size")])])])},G=[],H={name:"Mode",data:function(){return{mode:"none"}},created:function(){window.Mode=this},watch:{mode:function(){_.$emit("vis-mode",this.mode)}}},J=H,V=Object(O["a"])(J,z,G,!1,null,"2a573bca",null);V.options.__file="Mode.vue";var B=V.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.vals.length?a("div",{staticClass:"bg-white pa2",attrs:{id:"Legend"}},["local"===e.mode?a("div",[a("div",{staticClass:"f7 i mt0 mb2"},[e._v("The 12 most common species in the current map view")])]):e._e(),e._l(e.vals,function(t){var i=t[0],s=t[1];return a("div",{staticClass:"mb2"},[a("div",{staticClass:"pill br4 b--gray dib ba w1 h1 mr2 v-mid",style:{background:s}}),a("span",{staticClass:"f6 pl3 dib",domProps:{innerHTML:e._s(i)}})])})],2):e._e()},D=[],K={name:"Legend",data:function(){return{vals:[]}},computed:{mode:function(){return app.Map.mode}},created:function(){var e=this;window.Legend=this,_.$on("update-legend",function(t){e.vals=t})}},Q=K,X=Object(O["a"])(Q,Z,D,!1,null,"011bc670",null);X.options.__file="Legend.vue";var Y=X.exports;window.app={};var ee={name:"app",components:{Map:j,FeatureInfo:W,Mode:B,Legend:Y},created:function(){window.app.App=this}};a("948e");var te=ee,ae=(a("034f"),Object(O["a"])(te,s,r,!1,null,null,null));ae.options.__file="App.vue";var ie=ae.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(ie)}}).$mount("#app")},"64a9":function(e,t,a){},b62f:function(e,t,a){},c8f5:function(e,t,a){"use strict";var i=a("fff6"),s=a.n(i);s.a},f6bf:function(e,t,a){},fff6:function(e,t,a){}});
//# sourceMappingURL=app.ec8ba286.js.map