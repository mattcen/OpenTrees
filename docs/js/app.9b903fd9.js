(function(e){function t(t){for(var o,i,n=t[0],c=t[1],l=t[2],u=0,p=[];u<n.length;u++)i=n[u],r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],o=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var o={},r={app:0},s=[];function i(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=o,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(a,o,function(t){return e[t]}.bind(null,o));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=t,n=n.slice();for(var l=0;l<n.length;l++)t(n[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var o=a("64a9"),r=a.n(o);r.a},"0627":function(e,t,a){"use strict";var o=a("b62f"),r=a.n(o);r.a},"091f":function(e,t,a){"use strict";var o=a("f6bf"),r=a.n(o);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var o=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-column vh-100 avenir",attrs:{id:"app"}},[e._m(0),a("div",{staticClass:"flex flex-auto",attrs:{id:"middle"}},[a("div",{staticClass:"br b--gray overflow-auto",attrs:{id:"sidebar"}},[a("FeatureInfo")],1),a("div",{staticClass:"relative flex-auto",attrs:{id:"map-container"}},[a("Map"),a("div",{staticClass:"absolute ba b--gray shadow-3 ml2-ns mt2-ns mw5 mw-none-ns overflow-scroll",attrs:{id:"overlay"}},[a("Mode"),a("Legend")],1)],1)]),e._m(1)])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bb b--gray bg-green",attrs:{id:"top"}},[a("img",{staticClass:"w2-ns w1 dib fl ma2",attrs:{src:"cubetree-logo.png"}}),a("h1",{staticClass:"f1-ns f5 ma2-ns lancelot dark-green dib fl"},[e._v("OpenTrees.org")]),a("h2",{staticClass:"f2-ns f6 lancelot ml4-ns ml2 mb0 mt3-ns fl dark-gray"},[e._v("929,055 open data trees from 28 sources.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bt b--light-gray flex-none pa1 shadow-3",attrs:{id:"bottom"}},[e._v("Created by "),a("a",{attrs:{href:"https://twitter.com/stevage1/"}},[e._v("Steve Bennett")]),e._v(". \nSource code on "),a("a",{attrs:{href:"https://github.com/stevage/OpenTrees"}},[e._v("Github")]),e._v(".\n"),a("a",{attrs:{href:"https://stevebennett.me/2015/04/07/opentrees-org-how-to-aggregate-373000-trees-from-9-open-data-sources/"}},[e._v("Blog post #1")]),e._v(" (2015). \n"),a("a",{attrs:{href:"https://stevebennett.me/2018/05/15/you-might-not-need-postgis-streamlined-vector-tile-processing-for-big-map-visualisations/"}},[e._v("Blog post #2")]),e._v(" (2018).")])}],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"absolute absolute--fill",attrs:{id:"map"}})},n=[],c=a("5d73"),l=a.n(c),d=a("a4bb"),u=a.n(d),p=(a("55dd"),a("96cf"),a("3b8d")),f=a("75fc"),m=a("768b"),g=a("e192"),h=a.n(g),b=a("ef12"),v=a.n(b),_=new o["a"],y=a("62f0"),w=(a("ac6d"),function(e){return e.reduce(function(e,t){var a=Object(m["a"])(t,2),o=a[0],r=a[1];return[].concat(Object(f["a"])(e),[o,r])},[])}),C=[0,30,60,90,150,180,210,250,280,320],j=[].concat(Object(f["a"])(C.map(function(e){return y["a"](e,100,60).formatHex()})),Object(f["a"])(C.map(function(e){return y["a"](e,40,40).formatHex()}))),k={data:function(){return{mode:void 0}},mounted:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:h.a.accessToken="pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjazZzd3V2dXEwNGZlM2xtZzFnOXdkOTFtIn0.pKVxwqE61gNc7PKK5u1j6g",t=new h.a.Map({container:"map",center:[144.96,-37.81],zoom:14,style:"mapbox://styles/stevage/ck6sws4g704uu1iqtvn25gj6v",hash:!0,bearingSnap:360,minPitch:0,maxPitch:0}),t.touchZoomRotate.disableRotation(),t.addControl(new h.a.NavigationControl),v.a.init(t,h.a),window.map=t,window.app.Map=this,this.map=t,t.U.onLoad(function(){t.U.addVector("trees","localhost"===window.location.hostname?"http://localhost:4011/index.json":"mapbox://stevage.9slh6b3l"),t.U.addGeoJSON("selected-tree"),t.U.addCircle("trees-selected","selected-tree",{circleColor:"transparent",circleStrokeColor:"hsla(100,60%,40%,0.8)",circleStrokeWidth:3,circleRadius:{stops:[[10,8],[12,16]]}}),t.U.addCircle("trees-similar","trees",{sourceLayer:"trees",circleColor:"hsla(100,90%,60%,0.4)",circleRadius:{stops:[[12,6],[17,10]]},filter:!1}),t.U.addCircle("trees-vis-none","trees",{sourceLayer:"trees",circleColor:"hsla(80,50%,60%,0.6)",circleRadius:{stops:[[10,4],[12,6]]},circleOpacity:.5}),t.U.addCircle("trees-vis-species","trees",{sourceLayer:"trees",circleColor:["case"].concat(Object(f["a"])(w(x.species.map(function(e){var t=Object(m["a"])(e,3),a=(t[0],t[1]),o=t[2];return[o,a]}))),["hsla(0,0%,0%,0.3)"]),circleRadius:{stops:[[12,2],[17,6]]},circleOpacity:["interpolate",["linear"],["zoom"],13,.5,17,1]}),t.U.addCircle("trees-vis-family","trees",{sourceLayer:"trees",circleColor:["case"].concat(Object(f["a"])(w(x.family.map(function(e){var t=Object(m["a"])(e,3),a=(t[0],t[1]),o=t[2];return[o,a]}))),["hsla(0,0%,0%,0.3)"]),circleRadius:{stops:[[12,2],[17,6]]},circleOpacity:["interpolate",["linear"],["zoom"],13,.5,17,1]}),t.U.addCircle("trees-vis-rarity","trees",{sourceLayer:"trees",circleRadius:{stops:[[12,2],[17,6]]},circleColor:["case"].concat(Object(f["a"])(w(x.rarity.map(function(e){var t=Object(m["a"])(e,3),a=(t[0],t[1]),o=t[2];return[o,a]}))),["#ddd"]),circleOpacity:["interpolate",["linear"],["zoom"],13,.5,17,1]}),t.U.addCircle("trees-vis-harm","trees",{sourceLayer:"trees",circleRadius:{stops:[[12,2],[17,6]]},circleColor:["case"].concat(Object(f["a"])(w(x.harm.map(function(e){var t=Object(m["a"])(e,3),a=(t[0],t[1]),o=t[2];return[o,a]}))),["transparent"])}),t.U.addCircle("trees-vis-local","trees",{sourceLayer:"trees",circleColor:"hsla(80,50%,70%,0.9)",circleRadius:{stops:[[10,4],[12,6]]},circleOpacity:.9}),t.U.addCircle("trees-vis-trunk","trees",{sourceLayer:"trees",circleColor:"hsla(40,90%,20%,0.8)",circleRadius:["interpolate",["exponential",1],["to-number",["get","dbh"],0],0,0,1,1,50,10,250,20],circleOpacity:.5}),t.U.addCircle("trees-inner","trees",{sourceLayer:"trees",circleColor:"hsla(80,50%,20%,0.9)",circleRadius:{stops:[[10,.5],[12,1],[14,2]]}}),t.U.addSymbol("trees-vis-label","trees",{sourceLayer:"trees",textField:["coalesce",["get","common"],["get","scientific"],""],minzoom:16,textMaxWidth:3,textSize:["interpolate",["exponential",1.5],["zoom"],15,8,19,10],textJustify:"auto",textRadialOffset:.25,textColor:"hsl(110,50%,15%)",textVariableAnchor:["left","right","bottom-left","top-left","top-right","bottom-right","bottom","top"]}),a.switchMode("none")}),t.U.hoverPointer(["trees-inner"].concat(Object(f["a"])(O))),t.U.clickOneLayer(["trees-inner"].concat(Object(f["a"])(O)),function(e){console.log(e),window.app.FeatureInfo.feature=e.features[0],t.U.setData("selected-tree",e.features[0]),t.U.setFilter("trees-similar",["==",["get","scientific"],e.features[0].properties.scientific])},function(){t.U.setData("selected-tree",{type:"FeatureCollection",features:[]}),t.U.setFilter("trees-similar",!1)}),_.$on("vis-mode",function(e){return a.$nextTick(function(){return a.mode=e})}),_.$on("resize",function(){return a.$nextTick(function(){return a.map.resize()})}),t.on("moveend",function(){"local"===a.mode&&a.updateLocal()});case 14:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),watch:{mode:function(){this.switchMode(this.mode)}},methods:{switchMode:function(e){this.map.U.hide(O),this.map.U.show("trees-vis-".concat(e)),console.log(e),["none","label"].indexOf(e)>=0?this.map.U.setCircleOpacity("trees-inner",1):this.map.U.setCircleOpacity("trees-inner",{stops:[[14,0],[15,1]]}),"local"!==e?_.$emit("update-legend",x[e]):this.updateLocal()},updateLocal:function(){var e=this.map.queryRenderedFeatures({layers:["trees-inner"]}),t={},a=function(e){return Math.round(100*e)/1+"%"},o=!0,r=!1,s=void 0;try{for(var i,n=l()(e);!(o=(i=n.next()).done);o=!0){var c=i.value;if(c.properties.scientific){var d=t[c.properties.scientific]||[0,""],p=Object(m["a"])(d,2),g=p[0],h=p[1];t[c.properties.scientific]=[g+1,h||c.properties.common]}}}catch(v){r=!0,s=v}finally{try{o||null==n.return||n.return()}finally{if(r)throw s}}console.log(t);var b=u()(t).sort(function(e,a){return t[a][0]-t[e][0]}).slice(0,j.length);x.local=b.map(function(o,r){return["".concat(a(t[o][0]/e.length),": ").concat(o).concat(t[o][1]?'<br/> <span class="f7">'.concat(t[o][1],"</>"):""),j[r],["==",["get","scientific"],o]]}),console.log(x.local),this.map.U.setCircleColor("trees-vis-local",["case"].concat(Object(f["a"])(w(x.local.map(function(e){var t=Object(m["a"])(e,3),a=(t[0],t[1]),o=t[2];return[o,a]}))),["transparent"])),_.$emit("update-legend",[].concat(Object(f["a"])(x.local),[["Other","transparent"]]))}}},x={none:[],species:[["Eucalyptus","hsl(90,90%,30%)",["in",["get","genus"],["literal",["Eucalyptus"]]]],["Corymbia,  Angophora","hsl(90,30%,60%)",["in",["get","genus"],["literal",["Corymbia","Angophora"]]]],["Lophostemon","hsl(90,90%,60%)",["in",["get","genus"],["literal",["Lophostemon"]]]],["Grevilleas, proteas, banksias","hsl(120,60%,50%)",["in",["get","genus"],["literal",["Grevillea","Grevillia","Banksia","Stenocarpus"]]]],["Melaleucas and callistemons","hsl(200, 60%,50%)",["in",["get","genus"],["literal",["Melaleuca","Callistemon"]]]],["(Allo)Casuarinas","hsl(180, 90%,60%)",["in",["get","genus"],["literal",["Casuarina","Allocasuarina"]]]],["Other natives","hsl(160, 90%, 30%)",["any",["in",["get","genus"],["literal",["Hakea","Agonis","Tristaniopsis","Lagunaria","Acacia","Hymenosporum","Brachychiton","Leptospermum","Waterhousea","Bursaria","Geijera","Paraserianthes","Myoporum","Exocarpos","Exocarpus","Jacksonia"]]],["all",["in",["get","genus"],["literal",["Acmena","Syzygium"]]],["in",["get","species"],["literal",["smithii"]]]],["in",["get","scientific"],["literal",["Pittosporum undulatum","Cupaniopsis anacardioides","Acmena smithii","Acmena smithii (Syzygium smithii)","Syzygium australe"]]]]],["Planes","hsl(0,86%,60%)",["in",["get","genus"],["literal",["Platanus","Plantanus"]]]],["Elms","hsl(30,60%,60%)",["in",["get","genus"],["literal",["Ulmus","Celtis"]]]],["Oaks & maples","hsl(330, 60%,60%)",["in",["get","genus"],["literal",["Quercus","Acer"]]]],["Palms","hsl(40, 100%,70%)",["in",["get","genus"],["literal",["Phoenix","Washingtonia","Jubaea","Chamaerops","Syagrus","Livistona","Trachycarpus"]]]],["Conifers","hsl(60,90%,45%)",["in",["get","genus"],["literal",["Pinus","Araucaria","Cupressus","Cupressocyparis","Podocarpus","Platycladus","Thuja","Hesperocyparis","Callitris","Cedrus","Picea","Abies","Cunninghamia","Chamaecyparis","Sequoiadendron","Sequoia","Thujopsis"]]]],["Pears, plums and other fruits","hsl(250,60%,60%)",["in",["get","genus"],["literal",["Pyrus","Prunus","Malus","Citrus"]]]],["Figs","hsl(0,0%,40%)",["in",["get","genus"],["literal",["Ficus"]]]],["Ashes","hsl(0,0%,20%)",["in",["get","genus"],["literal",["Fraxinus"]]]],["Other exotics","hsl(310, 90%,60%)",["any",["in",["get","genus"],["literal",["Betula","Liquidambar","Gleditsia","Robinia","Pseudotsuga","Alnus","Laburnum","Eriobotrya","Olea","Schinus","Photinia","Laurus","Populus","Ligustrum","Cotoneaster","Nerium","Pyracantha","Zelkova","Jacaranda","Metrosideros","Pistacia","Pistachia","Arbutus","Crataegus","Koelreuteria","Morus","Cinnamomum","Virgilia","Salix","Ceratonia","Cercis","Tilia","Ginkgo","Magnolia","Melia","Afrocarpus","Michelia","Sophora","Carpinus","Fagus","Sorbus","Liriodendron","Ilex","Aesculus","Viburnum","Genista"]]],["in",["get","species"],["literal",["indica","eugenioides","japonicus","japonica"]]],["in",["get","scientific"],["literal",["Agathis robusta","Pittosporum tenuifolium","Agathis australis","Cordyline australis","Hibiscus syriacus"]]]]]],family:[["Unknown","hsla(0, 0%, 0%, 0.3)",["==",["coalesce",["get","family"],""],""]],["Myrtaceae",j[0],["==",["get","family"],"Myrtaceae"]],["Fabaceae",j[1],["==",["get","family"],"Fabaceae"]],["Rosaceae",j[2],["==",["get","family"],"Rosaceae"]],["Casuarinaceae",j[3],["==",["get","family"],"Casuarinaceae"]],["Ulmaceae",j[4],["==",["get","family"],"Ulmaceae"]],["Proteaceae",j[5],["==",["get","family"],"Proteaceae"]],["Oleaceae",j[6],["==",["get","family"],"Oleaceae"]],["Fagaceae",j[7],["==",["get","family"],"Fagaceae"]],["Meliaceae",j[8],["==",["get","family"],"Meliaceae"]],["Pittosporaceae",j[9],["==",["get","family"],"Pittosporaceae"]],["Bignoniaceae",j[10],["==",["get","family"],"Bignoniaceae"]],["Pinaceae",j[11],["==",["get","family"],"Pinaceae"]],["Malvaceae",j[12],["==",["get","family"],"Malvaceae"]],["Anacardiaceae",j[13],["==",["get","family"],"Anacardiaceae"]],["Arecaceae",j[14],["==",["get","family"],"Arecaceae"]],["Lythraceae",j[15],["==",["get","family"],"Lythraceae"]],["Sapindaceae",j[16],["==",["get","family"],"Sapindaceae"]],["Betulaceae",j[17],["==",["get","family"],"Betulaceae"]],["Cupressaceae",j[18],["==",["get","family"],"Cupressaceae"]],["Araucariaceae",j[19],["==",["get","family"],"Araucariaceae"]]],rarity:[["Unknown","hsla(0, 0%, 0%, 0.3)",["==",["to-number",["get","species_count"],0],0]],["Super common","hsl(210, 90%,60%)",[">=",["get","species_count"],1e4]],["Very common","hsl(160, 90%,60%)",["all",[">=",["get","species_count"],1e3],["<",["get","species_count"],1e4]]],["Common","hsl(120, 80%,60%)",["all",[">=",["get","species_count"],100],["<",["get","species_count"],1e3]]],["Average","hsl(60, 80%,50%)",["all",[">=",["get","species_count"],20],["<",["get","species_count"],100]]],["Rare","hsl(30, 80%, 50%)",["all",[">=",["get","species_count"],5],["<",["get","species_count"],20]]],["Very rare","hsl(0, 100%, 40%)",["<",["get","species_count"],5]]],harm:[["Odour","hsl(240, 90%,60%)",["in",["get","scientific"],["literal",["Pyrus calleryana"]]]],["Allergy","hsl(10, 90%,60%)",["in",["get","scientific"],["literal",["Platanus x acerifolia","Platanus acerifolia"]]]],["Skin irritation","hsl(60, 90%,40%)",["in",["get","genus"],["literal",["Lagunaria"]]]],["Poisonous","hsl(300, 90%,50%)",["any",["in",["get","genus"],["literal",["Nerium"]]],["in",["get","scientific"],["literal",["Melia azedarach"]]]]],["Poisonous for dogs","hsl(300, 30%,40%)",["any",["in",["get","scientific"],["literal",["Prunus serrulata","Cotoneaster glaucophylla"]]],["in",["get","species"],["literal","pseudoacacia"]]],["in",["get","genus"],["literal",["Quercus"]]]]],trunk:[],label:[],local:[]},O=u()(x).map(function(e){return"trees-vis-".concat(e)}),P=k,M=a("2877"),S=Object(M["a"])(P,i,n,!1,null,"041fc584",null);S.options.__file="Map.vue";var L=S.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.feature?a("div",{staticStyle:{width:"300px",position:"relative"}},[a("div",{staticClass:"bg-green"},[a("h2",{staticClass:"i lancelot f3 pa2 mv0 bg-green"},[e._v(e._s(e.p.common||e.p.scientific))]),a("div",{staticClass:"close-btn pa3 pointer fw6",staticStyle:{position:"absolute",right:"0",top:"0",cursor:"pointer"},on:{click:function(t){e.feature=null}}},[e._v("X")])]),e.p.class?a("div",{staticClass:"cl f7 pa2 i"},[e._v(e._s(e.p.class)+" "),a("span",{staticClass:"light-green"},[e._v("> ")]),e._v(e._s(e.p.subclass)+" "),a("span",{staticClass:"light-green"},[e._v("> ")]),e._v(e._s(e.p.family))]):e._e(),e.feature?a("table",{staticClass:"bg-white helvetica ma1",attrs:{id:"FeatureInfo"}},[e.p.scientific?a("tr",[a("th",[e._v("Scientific name")]),a("td",[e._v(e._s(e.p.scientific))])]):e._e(),e.p.common?a("tr",[a("th",[e._v("Common name")]),a("td",[e._v(e._s(e.p.common))])]):e._e(),e.p.variety?a("tr",[a("th",[e._v("Variety")]),a("td",[e._v(e._s(e.p.variety))])]):e._e(),e.p.dbh?a("tr",[a("th",[e._v("Diameter")]),a("td",[e._v(e._s(e.p.dbh)+" "),a("span",{staticClass:"detail"},[e._v("cm.")])])]):e._e(),e.p.height?a("tr",[a("th",[e._v("Height")]),a("td",[e._v(e._s(e.p.height)+" "),a("span",{staticClass:"detail"},[e._v("m.")])])]):e._e(),e.p.planted?a("tr",[a("th",[e._v("Planted")]),a("td",[e._v(e._s(e.p.planted))])]):e._e(),e.p.maturity?a("tr",[a("th",[e._v("Maturity")]),a("td",[e._v(e._s(e.p.maturity))])]):e._e(),e.p.species_count?a("tr",[a("th",[e._v("Count")]),a("td",[e._v(e._s(e.p.species_count.toLocaleString())+" "),a("span",{staticClass:"detail"},[e._v("similar trees")])])]):e._e(),e.p.ref?a("tr",[a("th",[e._v("ID")]),a("td",[e._v(e._s("#"+e.p.ref))])]):e._e()]):e._e(),a("p",{staticClass:"f7 gray mh2 i"},[e._v("Source: "),a("a",{attrs:{href:e.sourceUrl(e.p.source),target:"_blank"}},[e._v(e._s(e.sourceName(e.p.source)))])]),a("Wikipedia",{attrs:{searchTerm:e.p.scientific}})],1):a("div",{staticClass:"not-mobile"},[e._v("Click on a tree for information!")])])},F=[],T=(a("7514"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.searchTerm,expression:"searchTerm"}],staticClass:"pa2",attrs:{id:"Wikipedia"}},[e.text?a("div",[a("img",{attrs:{src:e.imageUrl}}),a("p",{domProps:{innerHTML:e._s(e.text)}}),a("p",[a("small",[e._v("Read more on "),a("a",{attrs:{href:"http://en.wikipedia.org/wiki/"+encodeURIComponent(e.title)}},[e._v("Wikipedia")])])])]):e.loading?a("div",[a("p",{staticClass:"i"},[e._v("Looking up Wikipedia...")])]):a("div",[a("p",[e._v("Nothing found on Wikipedia.")])])])}),U=[],G=(a("a481"),a("bc3a")),z=a.n(G),R={name:"Wikipedia",data:function(){return{imageUrl:void 0,text:void 0,title:void 0,loading:!1}},props:["searchTerm"],created:function(){window.Wikipedia=this},watch:{searchTerm:function(){var e=this;this.text=void 0,this.title=void 0,this.imageUrl=void 0,this.loading=!0;var t="https://cors-anywhere.herokuapp.com/",a=t+"http://en.wikipedia.org/w/api.php?action=query&format=json",o=a+"&prop=extracts&redirects&titles=",r=a+"&prop=pageimages&redirects&titles=";console.log("Searching Wikipedia for: "+this.searchTerm),z.a.get(r+encodeURIComponent(this.searchTerm)).then(function(t){var a=t.data.query.pages,o=a[u()(a)[0]];if(o&&o.thumbnail&&o.thumbnail.source){var r=o.thumbnail.source.replace(/\/\d\dpx-/,window.devicePixelRatio>1?"/600px-":"/300px-");e.imageUrl=r}}),z.a.get(o+encodeURIComponent(this.searchTerm)).then(function(t){e.loading=!1;var a=t.data.query.pages,o=a[u()(a)[0]];o&&o.extract?(e.title=o.title,e.text=o.extract):(e.imageUrl=void 0,e.text=void 0)})}}},B=R,N=(a("091f"),Object(M["a"])(B,T,U,!1,null,null,null));N.options.__file="Wikipedia.vue";var W=N.exports,q=a("80b0"),E=a.n(q),I={name:"FeatureInfo",data:function(){return{feature:void 0,ignoreProps:["id","Longitude","Latitude","image_url"]}},components:{Wikipedia:W},computed:{p:function(){return this.feature&&this.feature.properties||{}},imageUrl:function(){return this.p&&this.p.image_url}},created:function(){window.app.FeatureInfo=this},watch:{feature:function(e,t){_.$emit("resize")}},methods:{sourceUrl:function(e){return console.log(E.a),E.a.find(function(t){return t.id===e}).download},sourceName:function(e){return E.a.find(function(t){return t.id===e}).long}}},$=I,H=(a("90ae"),a("0627"),Object(M["a"])($,A,F,!1,null,"1fadc3fa",null));H.options.__file="FeatureInfo.vue";var J=H.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-white pa1",attrs:{id:"Mode"}},[a("div",{staticClass:"only-mobile pa1 pr3 ba b--light-gray",attrs:{id:"dropdown"},on:{click:function(t){e.open=!e.open}}},[e._v(e._s(e.selectedModeCaption)),a("i",{staticClass:"absolute right-0 mr1 fas fa-caret-down"})]),a("div",{class:{"not-mobile":!e.open},attrs:{id:"options"}},e._l(e.modes,function(t){var o=t[0],r=t[1];return a("div",{on:{click:function(t){e.open=!1}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMode,expression:"selectedMode"}],staticClass:"ma1 dib",attrs:{id:"none",id:o,type:"radio"},domProps:{value:o,checked:e._q(e.selectedMode,o)},on:{change:function(t){e.selectedMode=o}}}),a("label",{staticClass:"pa1-ns dib",attrs:{for:o}},[e._v(e._s(r))])])}),0)])},V=[],Z={name:"Mode",data:function(){return{selectedMode:"none",open:!1,modes:[["none","No vis."],["species","Species"],["family","Family"],["rarity","Rarity"],["harm","Harm"],["local","Local variety"],["trunk","Trunk size"],["label","Label"]]}},created:function(){window.Mode=this},mounted:function(){},computed:{selectedModeCaption:function(){var e=this;return this.modes.find(function(t){var a=Object(m["a"])(t,2),o=a[0];a[1];return o===e.selectedMode})[1]}},watch:{selectedMode:function(){_.$emit("vis-mode",this.selectedMode)}}},K=Z,X=Object(M["a"])(K,D,V,!1,null,"79ef56a1",null);X.options.__file="Mode.vue";var Q=X.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.vals.length?a("div",{staticClass:"bg-white pa2",attrs:{id:"Legend"}},["local"===e.mode?a("div",[a("div",{staticClass:"f7 i mt0 mb2-ns"},[e._v("The 12 most common species in the current map view")])]):e._e(),e._l(e.vals,function(t){var o=t[0],r=t[1];return a("div",{staticClass:"mb2-ns"},[a("div",{staticClass:"pill br4 b--gray dib ba w1 h1 mr0 v-top",style:{background:r}}),a("span",{staticClass:"f6 pl3 dib",domProps:{innerHTML:e._s(o)}})])})],2):e._e()},ee=[],te={name:"Legend",data:function(){return{vals:[]}},computed:{mode:function(){return app.Map.mode}},created:function(){var e=this;window.Legend=this,_.$on("update-legend",function(t){e.vals=t})}},ae=te,oe=Object(M["a"])(ae,Y,ee,!1,null,"389ce71f",null);oe.options.__file="Legend.vue";var re=oe.exports;window.app={};var se={name:"app",components:{Map:L,FeatureInfo:J,Mode:Q,Legend:re},created:function(){window.app.App=this}};a("948e");var ie=se,ne=(a("034f"),Object(M["a"])(ie,r,s,!1,null,null,null));ne.options.__file="App.vue";var ce=ne.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(ce)}}).$mount("#app")},"64a9":function(e,t,a){},"80b0":function(e,t){e.exports=[{id:"corangamite",download:"https://data.gov.au/geoserver/corangamite-shire-trees/wfs?request=GetFeature&typeName=ckan_d9677ebb_f3db_45f3_88eb_04089debb9e0&outputFormat=json",format:"geojson",gdal_options:"-s_srs EPSG:4326",short:"Corangamite",long:"Corangamite Shire"},{id:"colac_otways",download:"http://data.gov.au/geoserver/colac-otway-shire-trees/wfs?request=GetFeature&typeName=ckan_3ce1805b_cb81_4683_8f46_e7bd2d2a3b7c&outputFormat=json",format:"geojson",short:"Colac-Otways",long:"Colac-Otways Shire"},{id:"ballarat",download:"http://data.gov.au/dataset/eabaee3f-a563-449b-a04a-1ec847566ea1/resource/2f5eb80f-55fa-418c-915c-0b6de7653719/download/BallaratTrees.csv",format:"csv",filename:"ballarat.vrt",gdal_options:"-skipfailures",short:"Ballarat",long:"City of Ballarat"},{id:"manningham",download:"https://data.gov.au/geoserver/manningham-streettrees/wfs?request=GetFeature&typeName=ckan_1aef5123_24ff_4084_a0f1_a52ca71e9e99&outputFormat=json",format:"geojson",short:"Manningham",long:"City of Manningham"},{id:"geelong",download:"https://data.gov.au/geoserver/geelong-trees/wfs?request=GetFeature&typeName=ckan_13b1196c_7fb7_436a_86bc_ab24c16526de&outputFormat=json",format:"geojson",short:"Geelong",long:"City of Greater Geelong"},{id:"melbourne",download:"https://data.melbourne.vic.gov.au/api/views/fp38-wiyy/rows.csv?accessType=DOWNLOAD",format:"csv",filename:"melbourne.vrt",short:"Melbourne",long:"City of Melbourne"},{id:"adelaide",download:"http://opendata.adelaidecitycouncil.com/street_trees/street_trees.csv",format:"csv",filename:"adelaide.vrt",gdal_options:"-skipfailures",short:"Adelaide",long:"City of Adelaide"},{id:"waite",download:"http://data.sa.gov.au/storage/f/2014-06-23T06%3A12%3A22.180Z/waitetreeid-2014-app-joined-19062014.zip",format:"zip",filename:"WaiteTreeID_2014_App_Joined_19062014.shp",short:"Waite Arboretum",long:"Waite Arboretum (Adelaide)"},{id:"burnside",download:"https://data.sa.gov.au/data/dataset/b7e1c8f6-169c-41bd-b5d7-140395a41c38/resource/6d1912aa-4775-4f5e-b00d-18456ad872a5/download/burnsidetrees.geojson",format:"geojson",short:"Burnside",long:"City of Burnside"},{id:"launceston",download:"http://lcc.launceston.opendata.arcgis.com/datasets/63b09a3688804a17b0edc4b3b072a0d7_1.zip",format:"zip",filename:"Trees.shp",short:"Launceston",long:"City of Launceston"},{id:"hobsons_bay",download:"https://data.gov.au/dataset/80051ffe-04d5-4602-b15b-60e0d0e3d153/resource/ea1ec6fc-02bd-4e36-8e43-c990b6a9268d/download/hbcc_street_and_park_trees.json",format:"geojson",short:"Hobson's Bay",long:"City of Hobson's Bay"},{id:"glenelg",download:"http://data.gov.au/dataset/3721ad67-7b5b-4815-96b1-9d8b1a89dbd7/resource/b9ff3d44-17b4-4f87-8a28-2d540fa37d8f/download/Glenelg-Street-and-Park-Trees.csv",format:"csv",filename:"glenelg.vrt",short:"Glenelg",long:"Glenelg Shire"},{id:"ryde",download:["http://data.nsw.gov.au/data/dataset/f7cd2071-642e-4cac-9d28-d7ddf5635c39/resource/47843888-f9b6-4ae3-ba80-9318ff60a120/download/Public-Trees-2013.dbf","http://data.nsw.gov.au/data/dataset/f7cd2071-642e-4cac-9d28-d7ddf5635c39/resource/1372b28f-4201-46ab-9099-be0458a317bb/download/Public-Trees-2013.prj","http://data.nsw.gov.au/data/dataset/f7cd2071-642e-4cac-9d28-d7ddf5635c39/resource/00e339ad-e411-48b2-8cfa-ed3dfa8209ca/download/Public-Trees-2013.shp","http://data.nsw.gov.au/data/dataset/f7cd2071-642e-4cac-9d28-d7ddf5635c39/resource/3f4f3346-52d5-4084-94fc-877bf70c0a76/download/Public-Trees-2013.shx"],format:"shp",keepExtension:!0,short:"Ryde",long:"City of Ryde"},{id:"southern_grampians",download:"http://data.gov.au/geoserver/southern-grampians-street-and-park-trees/wfs?request=GetFeature&typeName=ckan_4a2843f5_8c01_438b_95f3_01ef0a518441&outputFormat=json",format:"geojson",short:"Southern Grampians",long:"City of Southern Grampians"},{id:"prospect1",download:"https://data.sa.gov.au/data/dataset/5d86d41e-b6c6-47d5-9b88-4d95916c5e76/resource/d1e30913-6e91-4a1f-b576-64120cc4b242/download/city-of-prospect-tree-species-in-reserves-2016.csv",format:"csv",short:"Prospect",long:"City of Prospect"},{id:"prospect2",download:"https://data.sa.gov.au/data/dataset/7bf2e4a4-40cc-40fd-83a9-fabb6d854039/resource/3f6be219-d66f-4b40-bfc7-16214fbc0989/download/city-of-prospect-street-trees-2016.csv",format:"csv",short:"Prospect",long:"City of Prospect"},{id:"perth",download:"http://catalogue.beta.data.wa.gov.au/dataset/80ad058b-9089-4915-bea5-f7ce8eab7a3f/resource/a5867408-d9d0-4cb3-a640-24b458a5b3df/download/trees.zip",format:"zip",filename:"TreesCOP_009.shp",comment:"Automatic download doesn't work: needs Google sign in. https://search.data.gov.au/dataset/ds-wa-154bd398-f536-4a78-b747-c5275461e181/details?q=trees%20perth",short:"Perth",long:"City of Perth"},{id:"brimbank",download:"https://data.gov.au/geoserver/brimbank-open-space-trees/wfs?request=GetFeature&typeName=ckan_7a57b5a1_2ca3_4171_be91_0d371cefd250&outputFormat=json",format:"geojson",short:"Brimbank",long:"City of Brimbank"},{id:"bendigo",download:"https://data.gov.au/geoserver/city-of-greater-bendigo-environment-trees/wfs?request=GetFeature&typeName=ckan_d17c9e50_fab1_40e6_b91d_6e665faf2656&outputFormat=json",format:"geojson",short:"Bendigo",long:"City of Greater Bendigo"},{id:"shepparton",download:"https://data.gov.au/dataset/e794491f-2eb7-4035-8b0c-f7248c28feda/resource/a1148573-68b9-4bd8-bda4-f08030d38c9d/download/greatersheppartoncitycouncilstreetandparktrees.zip",format:"zip",filename:"Greater_Shepparton_City_Council_Street_and_Park_Trees.shp",short:"Shepparton",long:"City of Shepparton"},{id:"wyndham",download:"https://data.gov.au/dataset/0254dee0-5b26-484f-a5ae-5ca3cab46601/resource/fb06e7c8-d037-489b-a963-b747271f2e54/download/trees.json",download_old2:"https://data.gov.au/dataset/0254dee0-5b26-484f-a5ae-5ca3cab46601/resource/4ab38849-d1de-4444-aeca-08719138d24f/download/trees.zip",gdal_options:"-s_srs unzip/OpenData_TI_Trees_LatestInspection.prj",format:"zip",filename:"OpenData_TI_Trees_LatestInspection.shp",short:"Wyndham",long:"City of Wyndham"},{id:"port_phillip",download:"https://data.gov.au/dataset/6b72d22b-d824-4281-bd08-ab62e3c38415/resource/9b0d7d55-5267-464b-85d7-3d141d779bab/download/city-of-port-phillip-trees.geojson",format:"geojson",short:"Port Phillip",long:"City of Port Phillip"},{id:"boroondara",download:"https://data.gov.au/geoserver/significant-tree/wfs?request=GetFeature&typeName=ckan_14e2b87e_c733_4071_b604_c0cb33d14a42&outputFormat=json",format:"geojson",short:"Boroondara",long:"City of Boroondara"},{id:"yarra",download:"https://data.gov.au/data/dataset/f3c88ce7-504b-4ef7-907f-686037f7420c/resource/6e4186b0-3e00-48f9-a09c-cb60d1d0d49f/download/yarra-street-and-park-trees.geojson",format:"geojson",short:"Yarra",long:"City of Yarra"},{id:"glen_eira",download:"https://data.gov.au/geoserver/street-and-park-trees/wfs?request=GetFeature&typeName=ckan_0553b144_9145_4458_922f_5c6175d2e100&outputFormat=json",format:"geojson",short:"Glen Eira",long:"City of Glen Eira"},{id:"wodonga",download:"https://data.gov.au/data/dataset/e7d6ebd3-04a8-4d73-b8ba-a9b82aa79b16/resource/180ba7ad-7bd7-490b-81f8-79c74ec0a915/download/tree.csv",format:"csv",filename:"wodonga.vrt",short:"Wodonga",long:"City of Wodonga"},{id:"hobart",download:"http://data-1-hobartcc.opendata.arcgis.com/datasets/d50fa3c9875d43fbb7e462248160e1ee_0.geojson",format:"geojson",short:"Hobart",long:"City of Hobart"},{id:"sherwood_arboretum",download:"http://www.spatial-data.brisbane.qld.gov.au/datasets/613169f42b43494499c83640392c43e5_0.geojson",format:"geojson",short:"Sherwood Arboretum",long:"Sherwood Arboretum (Brisbane)"}]},"90ae":function(e,t,a){"use strict";var o=a("f62b"),r=a.n(o);r.a},b62f:function(e,t,a){},f62b:function(e,t,a){},f6bf:function(e,t,a){}});
//# sourceMappingURL=app.9b903fd9.js.map