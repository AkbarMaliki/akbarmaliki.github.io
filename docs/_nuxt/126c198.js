(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{357:function(t,e,r){var content=r(360);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("54520980",content,!0,{sourceMap:!1})},358:function(t,e,r){"use strict";r.r(e);r(51),r(42),r(229),r(41),r(52),r(15),r(40),r(81),r(140),r(47),r(53),r(20);var n=r(5),o={props:["tables","hide","cari"],data:function(){return{ready:!1,datanya:[],keys:[],perPage:10,search:"",selected:{status:!1}}},watch:{selected:function(){window.scrollTo(0,0),this.selected&&this.$emit("selected",JSON.parse(JSON.stringify(this.selected)))},tables:function(){this.getData(),this.$forceUpdate()}},methods:{getData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t,t.tables&&(t.datanya=t.tables,t.datanya.forEach((function(t){t.id&&(t.id=parseInt(t.id))})),r.keys=Object.keys(t.datanya[0]),r.keys=r.keys.map((function(t){return{field:t,label:t.toUpperCase()}})),t.ready=!0,t.$forceUpdate()),t.$forceUpdate();case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t,t.$nuxt.$on("getData",(function(){r.getData()})),t.getData();case 3:case"end":return e.stop()}}),e)})))()},computed:{hides:function(){var data=this.hide?this.hide:[];return data.push("createdAt","updateAt"),data},caris:function(){return this.cari?this.cari:[""]},td:function(){var t=this,data=this.datanya,e=Object.keys(data[0]);return data=data.filter((function(r,i,a){var n=!1;if(e.filter((function(e){"string"==typeof r[e]?-1!=r[e].toLowerCase().indexOf(t.search.toLowerCase())&&(n=!0):null!=r[e]&&-1!=r[e].toString().indexOf(t.search)&&(n=!0)})),n)return r}))}}},l=(r(359),r(7)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.ready?r("section",[t.selected?r("div"):t._e(),t._v(" "),r("div",{staticClass:"scrollbarnya",staticStyle:{overflow:"scroll",padding:"10px"}},[r("div",{staticClass:"sm-form float-right"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"search",name:"search",placeholder:"search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.perPage,expression:"perPage"}],staticClass:"form-control",staticStyle:{width:"20vw"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.perPage=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"5"}},[t._v("5")]),t._v(" "),r("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),r("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),r("option",{attrs:{value:"1000"}},[t._v("semua")])]),t._v(" "),r("b-table",{attrs:{data:t.td,"sticky-header":!1,selected:t.selected,"per-page":t.perPage,bordered:!0,striped:!0,narrowed:!0,hoverable:!0,"mobile-cards":!1,paginated:!0,"sort-icon":"arrow-up","sort-icon-size":"is-small","pagination-simple":!1,"default-sort-direction":"asc","pagination-rounded":!0,"default-sort":"id"},on:{"update:selected":function(e){t.selected=e}}},t._l(t.keys,(function(e,n){return r("b-table-column",{key:n+"keys",attrs:{visible:!t.hides.includes(e.field),searchable:t.caris.includes(e.field),field:e.field,label:e.label,sortable:""},scopedSlots:t._u([{key:"default",fn:function(n){return["link"!=e.field?r("span",{staticClass:"text-md"},[t._v("\r\n                "+t._s(n.row[e.field])+"\r\n            ")]):r("span",[r("a",{staticClass:"text-sm",attrs:{href:n.row[e.field],target:"__blank"}},[r("button",{staticClass:"text-sm btn btn-sm btn-dark btn-block",attrs:{type:"button",name:"",id:""}},[r("span",{staticClass:"typcn typcn-download"}),t._v(" Download")])])])]}}],null,!0)})})),1)],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports},359:function(t,e,r){"use strict";r(357)},360:function(t,e,r){(e=r(17)(!1)).push([t.i,".scrollbarnya::-webkit-scrollbar{width:5px;height:5px}.scrollbarnya::-webkit-scrollbar-track{box-shadow:inset 0 0 5px transparent;border-radius:5px}.scrollbarnya::-webkit-scrollbar-thumb{cursor:-webkit-grab;cursor:grab;background:#000;border-radius:5px}.scrollbarnya::-webkit-scrollbar-thumb:hover{background:#b30000}",""]),t.exports=e},459:function(t,e,r){"use strict";r.r(e);r(20);var n=r(5),o=r(23),l=r(358),c=new o.a,d="https://gis.officialapp.website",m={components:{Btables:l.default},data:function(){return{selected:!1,vdata:{},btn:"tambah",datanya:[]}},layout:"app_admin",methods:{upload:function(){var t=this,e=document.querySelector("#filenya");c.collection("tbuser",!1,d).upload(e,!0,!0).then((function(e){console.log(e),t.vdata.gambar=e,t.$forceUpdate()}))},getData:function(){var t=this;c.collection("app_portofolio_stack",!1,d).doc().select("select * from app_portofolio_stack where iduser='".concat(this.$store.state.users.id,"'")).then((function(e){t.datanya=e,t.$forceUpdate()}))},ambil:function(data){this.vdata=data,this.btn="update",this.$forceUpdate()},submit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=t).vdata.iduser=t.$store.state.users.id,!confirm("Apakah yakin proses dilanjutkan ?")){e.next=20;break}if("tambah"!=t.btn){e.next=10;break}return delete t.vdata.id,e.next=7,c.collection("app_portofolio_stack",!0,d).doc().set(t.vdata);case 7:r.getData(),e.next=20;break;case 10:if("update"!=t.btn){e.next=16;break}return e.next=13,c.collection("app_portofolio_stack",!0,d).doc().set(t.vdata);case 13:r.getData(),e.next=20;break;case 16:if("delete"!=t.btn){e.next=20;break}return e.next=19,c.collection("app_portofolio_stack",!0,d).doc(t.vdata.id).delete();case 19:r.getData();case 20:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getData();case 1:case"end":return e.stop()}}),e)})))()}},v=r(7),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-sm-9 p-2",staticStyle:{"font-size":"12px"}},[r("div",{staticClass:"shadow p-3 rounded-lg"},[r("div",{staticClass:"sm-form"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id,expression:"vdata.id"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"id",name:"id",placeholder:"id",disabled:""},domProps:{value:t.vdata.id},on:{input:function(e){e.target.composing||t.$set(t.vdata,"id",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"sm-form "},[r("label",{attrs:{for:"title"}},[t._v("Title")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.title,expression:"vdata.title"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"title",name:"title",placeholder:"title"},domProps:{value:t.vdata.title},on:{input:function(e){e.target.composing||t.$set(t.vdata,"title",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"sm-form "},[r("label",{attrs:{for:"gambar"}},[t._v("gambar")]),t._v(" "),r("input",{staticClass:"form-control form-control-sm",attrs:{type:"file",id:"filenya",name:"gambar",placeholder:"gambar"},on:{change:t.upload}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.gambar,expression:"vdata.gambar"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"gambar",name:"gambar",placeholder:"gambar"},domProps:{value:t.vdata.gambar},on:{input:function(e){e.target.composing||t.$set(t.vdata,"gambar",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"sm-form "},[r("label",{attrs:{for:"urutan"}},[t._v("Urutan")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.urutan,expression:"vdata.urutan"}],staticClass:"form-control form-control-sm",attrs:{type:"number",id:"urutan",name:"urutan",placeholder:"urutan"},domProps:{value:t.vdata.urutan},on:{input:function(e){e.target.composing||t.$set(t.vdata,"urutan",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mt-3 p-3"},[r("button",{staticClass:"btn btn-sm",class:"tambah"==t.btn?"btn-primary":"update"==t.btn?"btn-success":"btn-danger",attrs:{type:"submit"}},[r("span",{staticClass:"typcn typcn-info"}),t._v(" Proses  "+t._s(t.btn)+"\n          ")]),t._v(" "),r("div",{staticClass:"float-right"},[r("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"btn btn-sm btn-dark",attrs:{type:"button"},on:{click:function(e){t.btn="tambah",t.vdata={}}}},[r("span",{staticClass:"typcn typcn-edit"}),t._v(" Tambah\n            ")]),t._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"ml-3 btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(e){t.btn="delete"}}},[r("span",{staticClass:"typcn typcn-delete"}),t._v(" Delete\n            ")])])])])]),t._v(" "),r("div",{staticClass:"col-sm-9 p-2",staticStyle:{"font-size":"12px"}},[r("div",{staticClass:"shadow rounded-lg"},[t.datanya.length>0?r("div",{staticClass:"p-2"},[r("div",{staticClass:"text-right"},[r("vue-json-excel",{attrs:{data:t.datanya}},[r("button",{staticClass:"btn btn-sm btn-dark",attrs:{type:"button"}},[t._v("\n                  Export "),r("span",{staticClass:"typcn typcn-chart-area"})])])],1),t._v(" "),r("Btables",{ref:"btable",attrs:{tables:t.datanya,cari:[""],hide:[""]},on:{selected:t.ambil}})],1):t._e()])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Btables:r(358).default})}}]);