(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{230:function(t,e,n){var content=n(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("5d594f7f",content,!1,{sourceMap:!1})},231:function(t,e,n){"use strict";var r=n(230);n.n(r).a},232:function(t,e,n){(e=n(10)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},233:function(t,e,n){"use strict";var r=n(1).default.extend({props:{icon:{type:String}}}),o=(n(231),n(4)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports},237:function(t,e,n){var content=n(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("56eebe64",content,!1,{sourceMap:!1})},238:function(t,e,n){var content=n(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("6c430a53",content,!1,{sourceMap:!1})},267:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/03/26","url":"https://www.seisakukikaku.metro.tokyo.lg.jp/information/message.html","text":"１都４県知事共同メッセージ"},{"date":"2020/03/26","url":"https://www.seisakukikaku.metro.tokyo.lg.jp/information/20200326youbou.html","text":"新型コロナウイルス感染症への対応に関する緊急要望（令和2年３月２６日）"}]}')},273:function(t,e,n){"use strict";var r=n(237);n.n(r).a},274:function(t,e,n){(e=n(10)(!1)).push([t.i,"\n.LegendBlock[data-v-395f10db] {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  opacity: 0.5;\n}\nli[data-v-395f10db] {\n  list-style: none;\n  float: left;\n  font-size: 14px;\n  padding-right: 4px;\n}\nli[data-v-395f10db]:last-child {\n  padding-right: 0;\n}\nul[data-v-395f10db] {\n  margin: 0;\n  padding: 0;\n}\n.clearfix[data-v-395f10db]::after {\n  content: '';\n  display: block;\n  clear: both;\n}\n",""]),t.exports=e},275:function(t,e,n){"use strict";var r=n(238);n.n(r).a},276:function(t,e,n){(e=n(10)(!1)).push([t.i,".v-slider__tick-label[data-v-0f09f84c]{transform:rorate(90deg)}.MapCard-BodyContainer[data-v-0f09f84c]{position:relative}.MapCard-BodyContainer-LoadingScreen[data-v-0f09f84c]{position:absolute;height:100%;width:100%;background-color:rgba(255,255,255,.75);top:0;left:0}",""]),t.exports=e},278:function(t,e,n){var content=n(367);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("f0fcac38",content,!1,{sourceMap:!1})},279:function(t,e,n){var content=n(369);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("6239357a",content,!1,{sourceMap:!1})},293:function(t,e,n){var content=n(401);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("07a7416c",content,!1,{sourceMap:!1})},294:function(t,e,n){"use strict";n(241);var r=n(236),o=(n(38),n(24),n(18),n(14),n(29),n(20));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={components:{Mapbox:n(297).a},props:{mapId:{type:String,default:""},initialBounds:{type:Array,default:function(){return[]}},mapOptions:{type:Object,required:!1,default:function(){return{}}},legend:{type:Array,default:function(){return[]}}},data:function(){return{dateSequence:[],mapObject:null,colors:["rgba(80, 91, 0, 0.25)","rgba(27, 117, 188, 0.5)","rgba(0, 100, 0, 0.6)","rgba(0, 68, 27, 0.7)"],borderColors:["#505B00","#1B75BC","#006400","#00441B"],dataDrivenLegend:null}},computed:{actualLegend:function(){return 0===this.legend.length?this.dataDrivenLegend:this.legend},actualMapOptions:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({style:"https://tokyo-metropolitan-gov.github.io/tokyo-vector-tile/style.json",zoom:14,center:[139.69167,35.689444],antialias:!1,interactive:!1},this.mapOptions,{container:this.mapId})}},methods:{dataDrivenInitialization:function(map){if(0===this.dateSequence.length){var t=map.queryRenderedFeatures({layers:["heatmap"]});if(0!==t.length){this.dateSequence=Object.keys(t[0].properties).sort(),this.$emit("dateTicksUpdated",this.dateSequence);var e=this.dateSequence[this.dateSequence.length-1],n=0;t.forEach((function(t){n<t.properties[e]&&(n=t.properties[e])}));var r=.25*(1e4+1e4*Math.floor(1e-4*n));this.dataDrivenLegend=[r,2*r,3*r],map.setPaintProperty("heatmap","fill-color",["step",["get",e],this.colors[0],this.actualLegend[0],this.colors[1],this.actualLegend[1],this.colors[2],this.actualLegend[2],this.colors[3]]),this.$emit("legendUpdated",[{borderColor:this.borderColors[0],color:this.colors[0],valueFrom:0,valueTo:this.actualLegend[0]},{borderColor:this.borderColors[1],color:this.colors[1],valueFrom:this.actualLegend[0],valueTo:this.actualLegend[1]},{borderColor:this.borderColors[2],color:this.colors[2],valueFrom:this.actualLegend[1],valueTo:this.actualLegend[2]},{borderColor:this.borderColors[3],color:this.colors[3],valueFrom:this.actualLegend[2],valueTo:null}]),this.$emit("loadCompleted")}else setTimeout(this.dataDrivenInitialization,1e3,map)}},loaded:function(map){this.initialBounds.length>1&&this.initialBounds[0].length>1&&this.initialBounds[1].length>1&&map.fitBounds(this.initialBounds,{linear:!0}),map.addLayer({id:"heatmap",type:"fill",source:{type:"vector",tiles:["https://tokyo-metropolitan-gov.github.io/data/tiles/{z}/{x}/{y}.pbf"],minzoom:11,maxzoom:11},"source-layer":"dfi-place-heatmap-population",paint:{"fill-color":"#fff","fill-opacity":.5,"fill-outline-color":"rgba(0, 0, 0, 0)"}}),this.dataDrivenInitialization(map)},mapInitialized:function(map){this.mapObject=map},updatePaintProperty:function(t){if(null!==this.mapObject&&null!==this.legend){var p=["step",["get",t],this.colors[0],this.actualLegend[0],this.colors[1],this.actualLegend[1],this.colors[2],this.actualLegend[2],this.colors[3]];this.mapObject.setPaintProperty("heatmap","fill-color",p)}}}},c=n(4),f=Object(c.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("mapbox",{attrs:{"access-token":"","map-options":this.actualMapOptions,"nav-control":{show:!1},"attribution-control":{show:!0,position:"top-right"}},on:{"map-load":this.loaded,"map-init":this.mapInitialized}})}),[],!1,null,null,null).exports,h=n(295),m={props:{legendData:{type:Array,default:function(){return[]}}}},v=(n(273),Object(c.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"clearfix"},t._l(t.legendData,(function(e){return n("li",{key:e.valueFrom},[n("span",{staticClass:"LegendBlock",style:"background-color: "+e.color+"; border: 1px solid "+e.borderColor}),t._v("\n      "+t._s(e.valueFrom+"〜"+(null!==e.valueTo?e.valueTo:""))+"\n    ")])})),0)])}),[],!1,null,"395f10db",null).exports),x={components:{DataView:r.a,SourceLink:h.a,Heatmap:f,HeatmapLegend:v},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},detailPageUrl:{type:String,default:""},detailPageString:{type:String,default:""},url:{type:String,default:""},mapHeight:{type:Number,default:240},linkString:{type:String,default:""},sourceLinkHeader:{type:String,default:""},heatmapLegend:{type:Array,default:function(){return[]}},mapOptions:{type:Object,default:function(){return{}},required:!1},initialBounds:{type:Array,default:function(){return[]}},unit:{type:String,default:""},mapId:{type:String,default:"map"}},data:function(){return{dateTicks:["20200201"],legendData:[],loading:!0,dateSliderValue:0}},computed:{dataDate:function(){return this.dateTicks[this.dateSliderValue]},dateTickValue:function(){var t=this;return this.dateTicks.map((function(e,i){return(t.dateTicks.length-i)%6==1?"".concat(e.substring(4,6),"/").concat(e.substring(6)):""}))}},methods:{updateLegend:function(t){this.legendData=t},loadCompleted:function(){this.loading=!1},handleFocusChanged:function(t){this.$refs.heatmapComponentRef.updatePaintProperty(this.dataDate)},dateTicksUpdated:function(t){this.dateTicks=t,this.dateSliderValue=this.dateTicks.length-1}}},y=(n(275),Object(c.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{staticClass:"MapCard",attrs:{title:t.title,"title-id":t.titleId,date:t.date,url:t.url,loading:t.loading},scopedSlots:t._u([{key:"description",fn:function(){return[n("ol",[n("li",[t._v("\n        "+t._s(t.$t("※ ヤフーに蓄積された位置情報データなどを元に算出した参考値"))+"\n      ")]),t._v(" "),n("li",[t._v(t._s(t.$t("※ 土・日・祝日を除く7:30~8:30の平均値")))])])]},proxy:!0},{key:"footer",fn:function(){return[n("source-link",{attrs:{url:t.url,"link-string":t.linkString,header:t.sourceLinkHeader}})]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"MapCard-BodyContainer"},[n("heatmap-legend",{attrs:{"legend-data":t.legendData}}),t._v(" "),n("heatmap",{ref:"heatmapComponentRef",staticClass:"MapCard-Heatmap",style:{height:t.mapHeight+"px"},attrs:{"map-id":t.mapId,"initial-bounds":t.initialBounds,"map-options":t.mapOptions,legend:t.heatmapLegend},on:{legendUpdated:t.updateLegend,loadCompleted:t.loadCompleted,dateTicksUpdated:t.dateTicksUpdated}}),t._v(" "),n("v-slider",{attrs:{"tick-labels":t.dateTickValue,max:t.dateTicks.length-1,step:"1","tick-size":"4"},on:{input:t.handleFocusChanged},model:{value:t.dateSliderValue,callback:function(e){t.dateSliderValue=e},expression:"dateSliderValue"}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:""!==t.detailPageUrl,expression:"detailPageUrl !== ''"}],staticClass:"DetailPageLink"},[n("nuxt-link",{attrs:{to:t.detailPageUrl}},[t._v("\n        "+t._s(t.detailPageString)+"\n      ")])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"MapCard-BodyContainer-LoadingScreen"})],1)])}),[],!1,null,"0f09f84c",null));e.a=y.exports},366:function(t,e,n){"use strict";var r=n(278);n.n(r).a},367:function(t,e,n){(e=n(10)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.WhatsNew-heading-icon{margin:3px}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},368:function(t,e,n){"use strict";var r=n(279);n.n(r).a},369:function(t,e,n){(e=n(10)(!1)).push([t.i,".StaticInfo{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;background-color:#fff;border:1px solid #d9d9d9;box-shadow:0 0 2px rgba(0,0,0,.15);border-radius:4px;padding:.5em 1em;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.StaticInfo:hover{text-decoration:underline}.StaticInfo-Button{flex:1 0 auto;text-align:right}.StaticInfo-Button>span{padding:4px 8px;font-size:14px;font-size:0.875rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.StaticInfo-Button>span:hover{background-color:#008830;color:#fff}.StaticInfo-Button>span:hover>i{color:#fff !important}@media screen and (max-width: 600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=e},400:function(t,e,n){"use strict";var r=n(293);n.n(r).a},401:function(t,e,n){(e=n(10)(!1)).push([t.i,".MainPage .Header[data-v-cf215fcc]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width: 600px){.MainPage .Header[data-v-cf215fcc]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-cf215fcc]{font-size:14px;font-size:0.875rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-cf215fcc]{font-size:12px;font-size:0.75rem;color:#707070}@media screen and (min-width: 601px){.MainPage .Annotation[data-v-cf215fcc]{margin:0 0 0 auto}}.MainPage .DataBlock[data-v-cf215fcc]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-cf215fcc]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-cf215fcc]{padding:4px 8px}}",""]),t.exports=e},404:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(233),l=n(270),d=r.default.extend({props:{items:{type:Array,required:!0}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(l.a)(t)}}}),c=(n(366),n(4)),f=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("h3",{staticClass:"WhatsNew-heading"},[n("v-icon",{staticClass:"WhatsNew-heading-icon",attrs:{size:"24"}},[t._v("\n      mdi-information\n    ")]),t._v("\n    "+t._s(t.$t("最新のお知らせ"))+"\n  ")],1),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(e.date)+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n          "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n            mdi-open-in-new\n          ")])],1)])])})),0)])}),[],!1,null,null,null).exports,h=r.default.extend({props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}},computed:{linkTag:function(){return this.isInternalLink?"nuxt-link":"a"},linkAttrs:function(){return this.isInternalLink?{to:this.url,class:"StaticInfo"}:{href:this.url,class:"StaticInfo"}},isInternalLink:function(){return!/^https?:\/\//.test(this.url)}}}),m=(n(368),Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.linkTag,t._b({tag:"component"},"component",t.linkAttrs,!1),[n("span",[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("span",[t._v("\n      "+t._s(t.btnText)+"\n    ")])]):t._e()])}),[],!1,null,null,null).exports),v=n(234),x=n(267),y=n(294),k=n(303),w=n(302),_=n(313),C=n(304),S=n(305),j=n(309),O=n(315),N=n(314),D=n(307),I=n(306),L=n(312),P=n(310),$=r.default.extend({components:{PageHeader:o.a,WhatsNew:f,StaticInfo:m,MapCard:y.a,ConfirmedCasesDetailsCard:k.a,TestedCasesDetailsCard:w.a,ConfirmedCasesNumberCard:_.a,ConfirmedCasesAttributesCard:C.a,TestedNumberCard:S.a,InspectionPersonsNumberCard:j.a,TelephoneAdvisoryReportsNumberCard:O.a,ConsultationDeskReportsNumberCard:N.a,MetroCard:D.a,AgencyCard:I.a,ShinjukuVisitorsCard:L.a,ChiyodaVisitorsCard:P.a},data:function(){var data={Data:v,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("都内の最新感染動向")},newsItems:x.newsItems};return data},computed:{updatedAt:function(){return Object(l.b)(this.$data.Data.lastUpdate)}},head:function(){return{title:this.$t("都内の最新感染動向")}}}),z=(n(400),Object(c.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{icon:t.headerItem.icon}},[t._v("\n      "+t._s(t.headerItem.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.Data.lastUpdate))])]),t._v(" "),["ja","ja-basic"].includes(t.$i18n.locale)?t._e():n("div",{staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])],1),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),n("static-info",{staticClass:"mb-4",attrs:{url:t.localePath("/flow"),text:t.$t("自分や家族の症状に不安や心配があればまずは電話相談をどうぞ"),"btn-text":t.$t("相談の手順を見る")}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-details-card"),t._v(" "),n("tested-cases-details-card"),t._v(" "),n("confirmed-cases-attributes-card"),t._v(" "),n("confirmed-cases-number-card"),t._v(" "),n("inspection-persons-number-card"),t._v(" "),n("tested-number-card"),t._v(" "),n("telephone-advisory-reports-number-card"),t._v(" "),n("consultation-desk-reports-number-card"),t._v(" "),n("metro-card"),t._v(" "),n("agency-card"),t._v(" "),n("shinjuku-visitors-card"),t._v(" "),n("chiyoda-visitors-card")],1),t._v(" "),n("v-divider"),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("map-card",{attrs:{title:t.$t("新宿駅周辺の人口推移（参考値）"),caption:t.$t("※7:30〜8:30の平均値"),"title-id":"shinjuku-station-title","chart-id":"shinjuku-station-chart","map-id":"shinjuku-station-map","initial-bounds":[[139.695239,35.685448],[139.706397,35.694493]],unit:"人",url:"https://ds.yahoo.co.jp/datapolicy/","source-link-header":t.$t("※本データは2020年3月31日までの掲載となります"),"detail-page-url":"/largemap","detail-page-string":t.$t("東京23区の人口推移（参考値）"),"link-string":t.$t("ヤフー・データソリューション"),date:""}})],1),t._v(" "),n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("map-card",{attrs:{title:t.$t("東京駅周辺の人口推移（参考値）"),caption:t.$t("※7:30〜8:30の平均値"),"title-id":"tokyo-station-title","chart-id":"tokyo-station-chart","map-id":"tokyo-station-map","initial-bounds":[[139.761908,35.676437],[139.773774,35.686703]],unit:"人",url:"https://ds.yahoo.co.jp/datapolicy/","source-link-header":t.$t("※本データは2020年3月31日までの掲載となります"),"detail-page-url":"/largemap","detail-page-string":t.$t("東京23区の人口推移（参考値）"),"link-string":t.$t("ヤフー・データソリューション"),date:""}})],1)],1)],1)}),[],!1,null,"cf215fcc",null));e.default=z.exports}}]);