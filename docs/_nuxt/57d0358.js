(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{362:function(t,e,o){t.exports=o.p+"img/whatsapp.704b060.png"},437:function(t,e,o){"use strict";o.r(e);o(228);var l=new(o(23).a),n={layout:"a-4",data:function(){return{about:[]}},methods:{wame:function(){window.location="https://wa.me/6282251970006"}},mounted:function(){var t=this;l.collection("app_portofolio_about",!1,"https://gis.officialapp.website").doc().select("select * from app_portofolio_about where iduser='".concat(this.$store.state.id,"'")).then((function(e){t.about=e,t.$forceUpdate()}))}},r=o(7),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm-10"},[t._m(0),t._v(" "),l("div",{staticClass:"p-3 ml-1 mr-1  shadow-lg rounded-lg animate__animated animate__fadeInDown",staticStyle:{"font-family":"Titillium Web","line-height":"1.5",background:"black"},style:""+t.$store.state.data.layout.background_card2},[l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[l("path",{attrs:{fill:"#273036","fill-opacity":"1",d:"M0,224L40,229.3C80,235,160,245,240,240C320,235,400,213,480,186.7C560,160,640,128,720,144C800,160,880,224,960,229.3C1040,235,1120,181,1200,176C1280,171,1360,213,1400,234.7L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"}})]),t._v(" "),l("p",{staticClass:"font-bold underline italic text-center",staticStyle:{"margin-top":"-30px"}},[t._v("ID CARD")]),t._v(" "),l("div",{staticClass:"text-center"},[t.about.length>0?l("a",{attrs:{href:t.about[0].github}},[l("button",{staticClass:"btn btn-sm btn-style9 float-right",staticStyle:{"margin-left":"5px",padding:"3px","padding-top":"0px","padding-bottom":"0px"},style:""+(t.$store.state.data.layout?t.$store.state.data.layout.button_color:""),attrs:{type:"button"}},[l("img",{staticClass:"d-inline",staticStyle:{height:"20px",width:"20px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/social-github-circular.svg",alt:""}})])]):t._e(),t._v(" "),t.about.length>0?l("a",{attrs:{href:t.about[0].linkedin}},[l("button",{staticClass:"btn btn-sm btn-style9 float-right",staticStyle:{"margin-left":"5px",padding:"3px","padding-top":"0px","padding-bottom":"0px"},style:""+(t.$store.state.data.layout?t.$store.state.data.layout.button_color:""),attrs:{type:"button"}},[l("img",{staticClass:"d-inline",staticStyle:{height:"20px",width:"20px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/social-linkedin-circular.svg",alt:""}})])]):t._e(),t._v(" "),t.about.length>0?l("a",{attrs:{href:t.about[0].instagram}},[l("button",{staticClass:"btn btn-sm btn-style9 float-right",staticStyle:{"margin-left":"5px",padding:"3px","padding-top":"0px","padding-bottom":"0px"},style:""+(t.$store.state.data.layout?t.$store.state.data.layout.button_color:""),attrs:{type:"button"}},[l("img",{staticClass:"d-inline",staticStyle:{height:"20px",width:"20px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/social-instagram.svg",alt:""}})])]):t._e(),t._v(" "),t.about.length>0?l("a",{attrs:{href:t.about[0].facebook}},[l("button",{staticClass:"btn btn-sm btn-style9 float-right",staticStyle:{"margin-left":"5px",padding:"3px","padding-top":"0px","padding-bottom":"0px"},style:""+(t.$store.state.data.layout?t.$store.state.data.layout.button_color:""),attrs:{type:"button"}},[l("img",{staticClass:"d-inline",staticStyle:{height:"20px",width:"20px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/social-facebook.svg",alt:""}})])]):t._e()]),t._v(" "),l("hr",{staticClass:"style4 mt-4 mb-4"}),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm-4 text-center mx-auto"},[l("div",{staticClass:"text-center mx-auto"},[t.about.length>0?l("a",{attrs:{href:"https://wa.me/"+t.about[0].nohp}},[l("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"kinoLightBox img-thumbnail mx-auto",staticStyle:{"border-radius":"20px",width:"130px",height:"130px"},attrs:{src:o(362)}})]):t._e(),t._v(" "),l("br"),t._v(" "),t._m(1)])]),t._v(" "),t.about.length>0?l("div",{staticClass:"col-sm-8 mt-1 text-sm"},[l("tr",[l("td",[t._v("Nama")]),t._v(" "),l("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),t._v(" "),l("td",{staticClass:"font-bold"},[t._v(t._s(t.about[0].nama))])]),t._v(" "),l("tr",[l("td",[t._v("No hp")]),t._v(" "),l("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),t._v(" "),l("td",{staticClass:"font-bold"},[t._v(t._s(t.about[0].nohp))])]),t._v(" "),l("tr",[l("td",[t._v("Email")]),t._v(" "),l("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),t._v(" "),l("td",{staticClass:"font-bold"},[t._v(t._s(t.about[0].email))])]),t._v(" "),l("tr",[l("td",[t._v("Alamat")]),t._v(" "),l("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),t._v(" "),l("td",{staticClass:"font-bold"},[l("p",{domProps:{innerHTML:t._s(t.about[0].alamat)}}),t._v(" "),l("br")])]),t._v(" "),l("hr",{staticClass:"style4 mt-4 mb-4"})]):t._e()]),t._v(" "),l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[l("path",{attrs:{fill:"#273036","fill-opacity":"1",d:"M0,224L40,229.3C80,235,160,245,240,240C320,235,400,213,480,186.7C560,160,640,128,720,144C800,160,880,224,960,229.3C1040,235,1120,181,1200,176C1280,171,1360,213,1400,234.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"}})])])])]),t._v(" "),l("h1",{staticStyle:{"font-size":"1px",opacity:"0.1"}},[t._v("Contact TA_Maliki / Taufik Akbar Maliki PORTOFOLIO WEBSITE OFFICIAL")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center mx-auto"},[e("img",{staticClass:"mx-auto kinoLightBox img-fluid animate__animated animate__fadeInDown",staticStyle:{width:"70px",height:"100px",position:"absolute",top:"-80px","z-index":"5"},attrs:{src:"https://akbarmaliki.github.io/portofolio/_nuxt/img/strap.dc23f7d.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"cursor-pointer font-bold"},[e("span",{staticClass:"typcn typcn-message text-green-600"}),this._v(" WA AKU !")])}],!1,null,null,null);e.default=component.exports}}]);