(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c39468c"],{"32a9":function(e,r,t){},"6bc8":function(e,r,t){"use strict";t("32a9")},"92e8":function(e,r,t){"use strict";t.d(r,"c",(function(){return s})),t.d(r,"a",(function(){return u})),t.d(r,"d",(function(){return a})),t.d(r,"b",(function(){return n}));var o=t("b775");function s(e){return Object(o["a"])({url:"/admin/resources/queryResources",method:"post",data:e})}function u(e){return Object(o["a"])({url:"/admin/resources/add",method:"post",data:e})}function a(e){return Object(o["a"])({url:"/admin/resources/update",method:"post",data:e})}function n(e){return Object(o["a"])({url:"/admin/resources/delete",method:"post",data:e})}},eb96:function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e._self._c;return r("div",{staticClass:"main"},[r("el-card",[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"资源名称",prop:"resourcesName"}},[r("el-input",{model:{value:e.form.resourcesName,callback:function(r){e.$set(e.form,"resourcesName",r)},expression:"form.resourcesName"}})],1),r("el-form-item",{attrs:{label:"跳转链接",prop:"resourcesLink"}},[r("el-input",{model:{value:e.form.resourcesLink,callback:function(r){e.$set(e.form,"resourcesLink",r)},expression:"form.resourcesLink"}},[r("template",{slot:"prepend"},[e._v("Http://")])],2)],1),r("el-form-item",{attrs:{label:"资源类型",prop:"resourcesType"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.resourcesType,callback:function(r){e.$set(e.form,"resourcesType",r)},expression:"form.resourcesType"}},e._l(e.options,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),r("el-button",{on:{click:e.resetForm}},[e._v("重置")])],1)],1)],1)],1)},s=[],u=t("92e8"),a={data(){return{form:{resourcesId:"",resourcesName:"",resourcesLink:"",resourcesType:""},options:[{value:"权重",label:"权重"},{value:"数据集",label:"数据集"},{value:"优秀文章",label:"优秀文章"}]}},methods:{onSubmit(){Object(u["a"])(this.form).then(e=>{this.$message.success(e.data),this.$router.replace({path:"/admin/resourcesList"})})},resetForm(){console.log(this.$refs.form),this.$refs.form.resetFields(this.form)}}},n=a,c=(t("6bc8"),t("2877")),l=Object(c["a"])(n,o,s,!1,null,"76207392",null);r["default"]=l.exports}}]);