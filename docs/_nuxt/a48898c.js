(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{413:function(t,o,e){"use strict";e.r(o);var l=e(23),n=(e(228),new l.a),r="https://gis.officialapp.website",c={layout:"a-5",data:function(){return{about:[],pengalamans:[],pendidikans:[],header:[]}},mounted:function(){var t=this;n.collection("app_portofolio_about",!1,r).doc().select("select * from app_portofolio_about where iduser='".concat(this.$store.state.id,"'")).then((function(o){t.about=o,t.$forceUpdate()})),n.collection("app_portofolio_pengalaman",!1,r).doc().select("select * from app_portofolio_pengalaman where iduser='".concat(this.$store.state.id,"'")).then((function(o){t.pengalamans=o,t.$forceUpdate()})),n.collection("app_portofolio_pendidikan",!1,r).doc().select("select * from app_portofolio_pendidikan where iduser='".concat(this.$store.state.id,"'")).then((function(o){t.pendidikans=o,t.$forceUpdate()}))}},d=e(7),component=Object(d.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[t.about.length>0?e("div",[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8"},[e("img",{staticClass:"img-fluid shadow rounded-lg",staticStyle:{height:"75vh",display:"block",margin:"auto"},attrs:{src:t.$store.state.data.about.gambar,alt:""}})]),t._v(" "),e("div",{staticClass:"col-md-4"},[e("a",{attrs:{href:t.about[0].github}},[e("button",{staticClass:"btn btn-sm btn-style9 float-right",staticStyle:{"margin-left":"5px",padding:"3px","padding-top":"0px","padding-bottom":"0px"},style:""+(t.$store.state.data.layout?t.$store.state.data.layout.button_color:""),attrs:{type:"button"}},[e("img",{staticClass:"d-inline",staticStyle:{height:"20px",width:"20px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/social-github-circular.svg",alt:""}})])]),t._v(" "),e("a",{attrs:{href:t.about[0].linkedin}},[e("button",{staticClass:"btn btn-sm btn-style9 float-right",staticStyle:{"margin-left":"5px",padding:"3px","padding-top":"0px","padding-bottom":"0px"},style:""+(t.$store.state.data.layout?t.$store.state.data.layout.button_color:""),attrs:{type:"button"}},[e("img",{staticClass:"d-inline",staticStyle:{height:"20px",width:"20px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/social-linkedin-circular.svg",alt:""}})])]),t._v(" "),e("a",{attrs:{href:t.about[0].instagram}},[e("button",{staticClass:"btn btn-sm btn-style9 float-right",staticStyle:{"margin-left":"5px",padding:"3px","padding-top":"0px","padding-bottom":"0px"},style:""+(t.$store.state.data.layout?t.$store.state.data.layout.button_color:""),attrs:{type:"button"}},[e("img",{staticClass:"d-inline",staticStyle:{height:"20px",width:"20px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/social-instagram.svg",alt:""}})])]),t._v(" "),e("a",{attrs:{href:t.about[0].facebook}},[e("button",{staticClass:"btn btn-sm btn-style9 float-right",staticStyle:{"margin-left":"5px",padding:"3px","padding-top":"0px","padding-bottom":"0px"},style:""+(t.$store.state.data.layout?t.$store.state.data.layout.button_color:""),attrs:{type:"button"}},[e("img",{staticClass:"d-inline",staticStyle:{height:"20px",width:"20px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/social-facebook.svg",alt:""}})])]),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"font-semibold text-sm italic"},[t._v("- Hello World -")]),t._v(" "),e("p",{staticClass:"text-5xl font-semibold"},[t._v(t._s(t.$store.state.data.about.nama))]),t._v(" "),e("p",{staticClass:"text-lg font-semibold"},[t._v("~ "+t._s(t.$store.state.data.about.title))]),t._v(" "),e("hr"),t._v(" "),t.about.length>0?e("div",{staticClass:"col-sm-8 mt-1 text-sm"},[e("tr",[t._m(0),t._v(" "),e("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),t._v(" "),e("td",{staticClass:"font-bold"},[t._v(t._s(t.about[0].nohp))])]),t._v(" "),e("tr",[t._m(1),t._v(" "),e("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),t._v(" "),e("td",{staticClass:"font-bold"},[t._v(t._s(t.about[0].email))])]),t._v(" "),e("tr",[t._m(2),t._v(" "),e("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),t._v(" "),e("td",{staticClass:"font-bold"},[e("p",{domProps:{innerHTML:t._s(t.about[0].alamat)}}),t._v(" "),e("br")])]),t._v(" "),e("hr",{staticClass:"style4 mt-4 mb-4"})]):t._e(),t._v(" "),e("button",{staticClass:"btn btn-sm btn-style9 ml-2",style:""+(t.$store.state.data.layout?t.$store.state.data.layout.button_color:""),attrs:{type:"button"},on:{click:function(o){return t.$router.push("/a-5/project")}}},[e("span",{staticClass:"typcn typcn-anchor text-white italic"}),t._v(" "),e("span",{staticClass:"pl-1 text-white italic underline"},[t._v("Project ")])]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-style9 ml-2",style:""+(t.$store.state.data.layout?t.$store.state.data.layout.button_color:""),attrs:{type:"button"},on:{click:function(o){return t.$router.push("/a-5/sertifikat")}}},[e("span",{staticClass:"typcn typcn-document-text text-white italic"}),t._v(" "),e("span",{staticClass:"pl-1 text-white italic underline"},[t._v("Sertifikat ")])])])]),t._v(" "),e("h1",{staticStyle:{"font-size":"1px",opacity:"0.1"}},[t._v("Tentang TA_Maliki / Taufik Akbar Maliki")]),t._v(" "),e("br"),t._v(" "),e("a",{staticStyle:{"font-size":"1px",opacity:"0.1"},attrs:{href:"https://akbarmaliki.github.io/portofolio/"}},[t._v("-")]),t._v(" "),e("a",{staticStyle:{"font-size":"1px",opacity:"0.1"},attrs:{href:"https://akbarmaliki.github.io/portofolio/contact"}},[t._v("contact")]),t._v(" "),e("a",{staticStyle:{"font-size":"1px",opacity:"0.1"},attrs:{href:"https://akbarmaliki.github.io/portofolio/about"}},[t._v("about")]),t._v(" "),e("a",{staticStyle:{"font-size":"1px",opacity:"0.1"},attrs:{href:"https://akbarmaliki.github.io/portofolio/coffe"}},[t._v("coffe")]),t._v(" "),e("a",{staticStyle:{"font-size":"1px",opacity:"0.1"},attrs:{href:"https://akbarmaliki.github.io/portofolio/portofolio"}},[t._v("portofolio")]),t._v(" "),e("a",{staticStyle:{"font-size":"1px",opacity:"0.1"},attrs:{href:"https://akbarmaliki.github.io/portofolio/project"}},[t._v("project")]),t._v(" "),e("a",{staticStyle:{"font-size":"1px",opacity:"0.1"},attrs:{href:"https://akbarmaliki.github.io/portofolio/sertifikat"}},[t._v("sertifikat")])]):t._e()])}),[function(){var t=this.$createElement,o=this._self._c||t;return o("td",[o("span",{staticClass:"typcn typcn-phone"})])},function(){var t=this.$createElement,o=this._self._c||t;return o("td",[o("span",{staticClass:"typcn typcn-mail"})])},function(){var t=this.$createElement,o=this._self._c||t;return o("td",[o("span",{staticClass:"typcn typcn-home"})])}],!1,null,null,null);o.default=component.exports}}]);