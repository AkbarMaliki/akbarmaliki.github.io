(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{358:function(t,e,n){var content=n(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("54520980",content,!0,{sourceMap:!1})},359:function(t,e,n){"use strict";n.r(e);n(53),n(42),n(229),n(41),n(54),n(13),n(37),n(82),n(140),n(47),n(55),n(20);var r=n(5),o={props:["tables","hide","cari"],data:function(){return{ready:!1,datanya:[],keys:[],perPage:10,search:"",selected:{status:!1}}},watch:{selected:function(){window.scrollTo(0,0),this.selected&&this.$emit("selected",JSON.parse(JSON.stringify(this.selected)))},tables:function(){this.getData(),this.$forceUpdate()}},methods:{getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t,t.tables&&(t.datanya=t.tables,t.datanya.forEach((function(t){t.id&&(t.id=parseInt(t.id))})),n.keys=Object.keys(t.datanya[0]),n.keys=n.keys.map((function(t){return{field:t,label:t.toUpperCase()}})),t.ready=!0,t.$forceUpdate()),t.$forceUpdate();case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t,t.$nuxt.$on("getData",(function(){n.getData()})),t.getData();case 3:case"end":return e.stop()}}),e)})))()},computed:{hides:function(){var data=this.hide?this.hide:[];return data.push("createdAt","updateAt"),data},caris:function(){return this.cari?this.cari:[""]},td:function(){var t=this,data=this.datanya,e=Object.keys(data[0]);return data=data.filter((function(n,i,a){var r=!1;if(e.filter((function(e){"string"==typeof n[e]?-1!=n[e].toLowerCase().indexOf(t.search.toLowerCase())&&(r=!0):null!=n[e]&&-1!=n[e].toString().indexOf(t.search)&&(r=!0)})),r)return n}))}}},l=(n(360),n(7)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.ready?n("section",[t.selected?n("div"):t._e(),t._v(" "),n("div",{staticClass:"scrollbarnya",staticStyle:{overflow:"scroll",padding:"10px"}},[n("div",{staticClass:"sm-form float-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"search",name:"search",placeholder:"search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.perPage,expression:"perPage"}],staticClass:"form-control",staticStyle:{width:"20vw"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.perPage=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"5"}},[t._v("5")]),t._v(" "),n("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),n("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),n("option",{attrs:{value:"1000"}},[t._v("semua")])]),t._v(" "),n("b-table",{attrs:{data:t.td,"sticky-header":!1,selected:t.selected,"per-page":t.perPage,bordered:!0,striped:!0,narrowed:!0,hoverable:!0,"mobile-cards":!1,paginated:!0,"sort-icon":"arrow-up","sort-icon-size":"is-small","pagination-simple":!1,"default-sort-direction":"asc","pagination-rounded":!0,"default-sort":"id"},on:{"update:selected":function(e){t.selected=e}}},t._l(t.keys,(function(e,r){return n("b-table-column",{key:r+"keys",attrs:{visible:!t.hides.includes(e.field),searchable:t.caris.includes(e.field),field:e.field,label:e.label,sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){return["link"!=e.field?n("span",{staticClass:"text-md"},[t._v("\r\n                "+t._s(r.row[e.field])+"\r\n            ")]):n("span",[n("a",{staticClass:"text-sm",attrs:{href:r.row[e.field],target:"__blank"}},[n("button",{staticClass:"text-sm btn btn-sm btn-dark btn-block",attrs:{type:"button",name:"",id:""}},[n("span",{staticClass:"typcn typcn-download"}),t._v(" Download")])])])]}}],null,!0)})})),1)],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports},360:function(t,e,n){"use strict";n(358)},361:function(t,e,n){(e=n(17)(!1)).push([t.i,".scrollbarnya::-webkit-scrollbar{width:5px;height:5px}.scrollbarnya::-webkit-scrollbar-track{box-shadow:inset 0 0 5px transparent;border-radius:5px}.scrollbarnya::-webkit-scrollbar-thumb{cursor:-webkit-grab;cursor:grab;background:#000;border-radius:5px}.scrollbarnya::-webkit-scrollbar-thumb:hover{background:#b30000}",""]),t.exports=e},452:function(t,e,n){"use strict";n.r(e);n(20);var r=n(5),o=n(23),l=n(359),c=new o.a,d="https://gis.officialapp.website",v={components:{Btables:l.default},data:function(){return{selected:!1,vdata:{},btn:"tambah",datanya:[],kategoris:[]}},layout:"app_admin",methods:{upload:function(){var t=this,e=document.querySelector("#filenya");c.collection("tbuser",!1,d).upload(e,!0,!0).then((function(e){console.log(e),t.vdata.gambar=e,t.$forceUpdate()}))},getData:function(){var t=this;c.collection("app_portofolio_project",!1,d).doc().select("select * from app_portofolio_project where iduser='".concat(this.$store.state.users.id,"'")).then((function(e){t.datanya=e,t.$forceUpdate()}))},ambil:function(data){this.vdata=data,this.btn="update",this.$forceUpdate()},getKategori:function(){var t=this;c.collection("app_portofolio_project_kategori",!1,d).doc().select("select * from app_portofolio_project_kategori").then((function(e){console.log(e),t.kategoris=e,t.$forceUpdate()}))},submit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=t).vdata.iduser=t.$store.state.users.id,!confirm("Apakah yakin proses dilanjutkan ?")){e.next=20;break}if("tambah"!=t.btn){e.next=10;break}return delete t.vdata.id,e.next=7,c.collection("app_portofolio_project",!0,d).doc().set(t.vdata);case 7:n.getData(),e.next=20;break;case 10:if("update"!=t.btn){e.next=16;break}return e.next=13,c.collection("app_portofolio_project",!0,d).doc().set(t.vdata);case 13:n.getData(),e.next=20;break;case 16:if("delete"!=t.btn){e.next=20;break}return e.next=19,c.collection("app_portofolio_project",!0,d).doc(t.vdata.id).delete();case 19:n.getData();case 20:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getKategori(),t.getData();case 2:case"end":return e.stop()}}),e)})))()}},m=n(7),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-sm-9 p-2",staticStyle:{"font-size":"12px"}},[n("div",{staticClass:"shadow p-3 rounded-lg"},[n("div",{staticClass:"sm-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id,expression:"vdata.id"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"id",name:"id",placeholder:"id",disabled:""},domProps:{value:t.vdata.id},on:{input:function(e){e.target.composing||t.$set(t.vdata,"id",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("div",{staticClass:"sm-form "},[n("label",{attrs:{for:"judul"}},[t._v("judul")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.judul,expression:"vdata.judul"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"judul",name:"judul",placeholder:"judul"},domProps:{value:t.vdata.judul},on:{input:function(e){e.target.composing||t.$set(t.vdata,"judul",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"sm-form "},[n("label",{attrs:{for:"link"}},[t._v("link")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.link,expression:"vdata.link"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"link",name:"link",placeholder:"link"},domProps:{value:t.vdata.link},on:{input:function(e){e.target.composing||t.$set(t.vdata,"link",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"sm-form "},[n("label",{attrs:{for:"tanggal"}},[t._v("tanggal")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.tanggal,expression:"vdata.tanggal"}],staticClass:"form-control form-control-sm",attrs:{type:"date",id:"tanggal",name:"tanggal",placeholder:"tanggal"},domProps:{value:t.vdata.tanggal},on:{input:function(e){e.target.composing||t.$set(t.vdata,"tanggal",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"sm-form "},[n("label",{attrs:{for:"tanggal_project"}},[t._v("tanggal_project")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.tanggal_project,expression:"vdata.tanggal_project"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"tanggal_project",name:"tanggal_project",placeholder:"01/01/2021 - 02/04/2022"},domProps:{value:t.vdata.tanggal_project},on:{input:function(e){e.target.composing||t.$set(t.vdata,"tanggal_project",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col-6"},[n("div",{staticClass:"sm-form "},[n("label",{attrs:{for:"teknologi"}},[t._v("teknologi")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.teknologi,expression:"vdata.teknologi"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"teknologi",name:"teknologi",placeholder:"teknologi"},domProps:{value:t.vdata.teknologi},on:{input:function(e){e.target.composing||t.$set(t.vdata,"teknologi",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"sm-form "},[n("label",{attrs:{for:"gambar"}},[t._v("gambar")]),t._v(" "),n("input",{staticClass:"form-control form-control-sm",attrs:{type:"file",id:"filenya",name:"gambar",placeholder:"gambar"},on:{change:t.upload}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.gambar,expression:"vdata.gambar"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"gambar",name:"gambar",placeholder:"gambar"},domProps:{value:t.vdata.gambar},on:{input:function(e){e.target.composing||t.$set(t.vdata,"gambar",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"sm-form "},[n("label",{attrs:{for:"urutan"}},[t._v("urutan")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.urutan,expression:"vdata.urutan"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"urutan",name:"urutan",placeholder:"urutan"},domProps:{value:t.vdata.urutan},on:{input:function(e){e.target.composing||t.$set(t.vdata,"urutan",e.target.value)}}})])])]),t._v(" "),n("p",{staticClass:"p-3 pl-0"},[t._v("\n          Keterangan\n        ")]),t._v(" "),n("wysiwyg",{attrs:{options:{image:{uploadURL:"https://gis.officialapp.website/upload1.php",dropzoneOptions:{}}}},model:{value:t.vdata.keterangan,callback:function(e){t.$set(t.vdata,"keterangan",e)},expression:"vdata.keterangan"}}),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.type,expression:"vdata.type"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.vdata,"type",e.target.multiple?n:n[0])}}},t._l(t.kategoris,(function(e,r){return n("option",{key:r+"kategoris"},[t._v(t._s(e.kategori))])})),0),t._v(" "),n("div",{staticClass:"mt-3 p-3"},[n("button",{staticClass:"btn btn-sm",class:"tambah"==t.btn?"btn-primary":"update"==t.btn?"btn-success":"btn-danger",attrs:{type:"submit"}},[n("span",{staticClass:"typcn typcn-info"}),t._v(" Proses  "+t._s(t.btn)+"\n          ")]),t._v(" "),n("div",{staticClass:"float-right"},[n("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"btn btn-sm btn-dark",attrs:{type:"button"},on:{click:function(e){t.btn="tambah",t.vdata={}}}},[n("span",{staticClass:"typcn typcn-edit"}),t._v(" Tambah\n            ")]),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"ml-3 btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(e){t.btn="delete"}}},[n("span",{staticClass:"typcn typcn-delete"}),t._v(" Delete\n            ")])])])],1)]),t._v(" "),n("div",{staticClass:"col-sm-9 p-2",staticStyle:{"font-size":"12px"}},[n("div",{staticClass:"shadow rounded-lg"},[t.datanya.length>0?n("div",{staticClass:"p-2"},[n("div",{staticClass:"text-right"}),t._v(" "),n("Btables",{ref:"btable",attrs:{tables:t.datanya,cari:[""],hide:["keterangan"]},on:{selected:t.ambil}})],1):t._e()])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Btables:n(359).default})}}]);