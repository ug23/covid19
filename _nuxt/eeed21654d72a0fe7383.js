(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{375:function(t,e,r){"use strict";var o={components:{MapCard:r(323).a}},c=r(8),n=r(44),d=r.n(n),h=r(302),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"12"}},[e("map-card",{attrs:{title:"",caption:this.$t("※7:30〜8:30の平均値"),"title-id":"tokyo-city-heatmap","chart-id":"tokyo-city-chart","map-id":"tokyo-city-map","initial-bounds":[[139.695239,35.676437],[139.773774,35.694493]],"map-height":640,"map-options":{interactive:!0},unit:"人",url:"https://ds.yahoo.co.jp/datapolicy/","source-link-header":this.$t("※本データは2020年3月31日までの掲載となります"),"heatmap-legend":[2e4,4e4,6e4],"link-string":this.$t("ヤフー・データソリューション"),date:""}})],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VCol:h.a})},549:function(t,e,r){"use strict";r.r(e);var o=r(310),c=r(381),n=r(370),d=r(382),h=r(383),m=r(386),l=r(385),$=r(394),f=r(387),y=r(388),k=r(399),C=r(400),v=r(402),j=r(390),w=r(389),_=r(401),D=r(397),T=r(396),A=r(395),M=r(375),N={components:{ConfirmedCasesDetailsCard:m.a,TestedCasesDetailsCard:l.a,ConfirmedCasesNumberCard:$.a,ConfirmedCasesAttributesCard:f.a,TestedNumberCard:y.a,InspectionPersonsNumberCard:k.a,TelephoneAdvisoryReportsNumberCard:C.a,ConsultationDeskReportsNumberCard:v.a,MetroCard:j.a,AgencyCard:w.a,ShinjukuVisitorsCard:_.a,ChiyodaVisitorsCard:D.a,ShinjukuStMapCard:T.a,TokyoStMapCard:A.a,TokyoCityMapCard:M.a},data:function(){var title,t;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=o.inspections_summary.date;break;case"details-of-tested-cases":title=this.$t("検査実施状況"),t=o.inspection_status_summary.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=o.patients.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),t=o.patients.date;break;case"number-of-tested":title=this.$t("検査実施件数"),t=o.inspections_summary.date;break;case"number-of-inspection-persons":title=this.$t("検査実施人数"),t=o.inspection_persons.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナコールセンター相談件数"),t=o.contacts.date;break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("新型コロナ受診相談窓口相談件数"),t=o.querents.date;break;case"predicted-number-of-toei-subway-passengers":title=this.$t("都営地下鉄の利用者数の推移"),t=c.date;break;case"agency":title=this.$t("都庁来庁者数の推移"),t=n.date;break;case"shinjuku-visitors":title=this.$t("新宿区エリアの来訪者数の推移（参考値）"),t=d.date;break;case"chiyoda-visitors":title=this.$t("千代田区エリアの来訪者数の推移（参考値）"),t=h.date}var data={title:title,updatedAt:t};return data},head:function(){var t="https://stopcovid19.metro.tokyo.lg.jp",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),o="".concat(this.updatedAt," | ").concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("東京都")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")},{hid:"description",name:"description",content:o},{hid:"og:description",property:"og:description",content:o},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},S=r(8),component=Object(S.a)(N,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-details-card"):"details-of-tested-cases"==this.$route.params.card?e("tested-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?e("tested-number-card"):"number-of-inspection-persons"==this.$route.params.card?e("inspection-persons-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?e("telephone-advisory-reports-number-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?e("consultation-desk-reports-number-card"):"predicted-number-of-toei-subway-passengers"==this.$route.params.card?e("metro-card"):"agency"==this.$route.params.card?e("agency-card"):"shinjuku-visitors"==this.$route.params.card?e("shinjuku-visitors-card"):"chiyoda-visitors"==this.$route.params.card?e("chiyoda-visitors-card"):"shinjuku-st-heatmap"==this.$route.params.card?e("shinjuku-st-map-card"):"tokyo-st-heatmap"==this.$route.params.card?e("tokyo-st-map-card"):"tokyo-city-heatmap"==this.$route.params.card?e("tokyo-city-map-card"):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);