webpackJsonp([19],{eaNf:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("6MWA"),s=i("0qgA"),n=i("TIfe"),o=i("LUZf"),r={name:"processDepy",components:{},data:function(){var e=function(e,t,i){""===t||void 0===t?i(new Error("名字不能为空")):i()};return{uploadheaders:{Authorization:Object(n.a)(o.a.token),UserId:Object(n.a)(o.a.userId)},action:"mcws/act/process/deploy",flag:{flag:"1"},items:[{value:"",del:"删除"}],formId:{id:""},validateCode:"",appType:[],appManage:{id:"",appType:"",versionNum:"",remarks:"",filePath:"",fileSize:""},filePath:[],rules:{appType:[{required:!0,message:"APP类型不能为空",trigger:"blur"},{validator:e,trigger:"blur"},{min:0,max:64,message:"APP类型必须介于 0 到 64 之间",trigger:"blur"}],versionNum:[{required:!0,message:"版本号不能为空",trigger:"blur"},{pattern:/\d+\.\d+\.\d+/,message:"版本号格式按照 数字.数字.数字 格式"},{min:0,max:64,message:"版本号长度必须介于 0 到 64 之间",trigger:"blur"}],remarks:[{required:!0,message:"更新说明不能为空",trigger:"blur"},{validator:e,trigger:"blur"},{min:0,max:100,message:"更新说明长度必须介于 0 到 100 之间",trigger:"blur"}],filePath:[{required:!0,message:"附件不能为空",trigger:"blur"},{validator:e,trigger:"blur"}]}}},created:function(){},methods:{submitUpload:function(){this.$refs.upload.submit()},handleSuccess:function(e,t,i){"200"===e.code?this.$message({message:e.message,showClose:!0,type:"success",duration:3e3}):this.$message({message:e.message,showClose:!0,type:"danger",duration:3e3})},handleRemove:function(e,t){this.appManage.filePath=""},beforeAvatarUpload:function(e){console.log(e.name.split("."));var t="zip"===e.name.split(".")[e.name.split(".").length-1],i="bar"===e.name.split(".")[e.name.split(".").length-1],a="bpmn"===e.name.split(".")[e.name.split(".").length-1],s="xml"===e.name.split(".")[e.name.split(".").length-1];e.size;return this.appManage.fileSize=e.size,!!(t||i||a||s)||(this.$message({message:"上传文件只能是 zip、bar、bpmn、bpmn20.xml 格式!",showClose:!0,type:"warning",duration:3e3}),!1)},goBack:function(){this.$emit("goBack")},submitSave:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("表单验证失败"),!1;""===t.filePath||void 0===t.filePath?t.$message({message:"上传文件不能为空",showClose:!0,type:"error",duration:3e3}):t.goBack()})}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"infoform"},[i("div",{staticClass:"form_title"},[e._v("部署流程基本信息")]),e._v(" "),i("el-form",{ref:"ruleForm",staticClass:"baseform",attrs:{rules:e.rules,"label-width":"100px"}},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"文件路径:",prop:"filePath"}},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:e.action,headers:e.uploadheaders,"file-list":e.filePath,limit:1,"on-remove":e.handleRemove,"before-upload":e.beforeAvatarUpload,"on-success":e.handleSuccess,data:e.flag,"auto-upload":!1}},[i("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("部署到服务器")]),e._v(" "),i("el-tooltip",{staticClass:"item",attrs:{content:"只支持文件 zip、bar、bpmn、bpmn20.xml 格式!",placement:"right-start"}},[i("i",{staticClass:"icon-question-sign",staticStyle:{color:"gray"}})])],1)],1)],1)],1),e._v(" "),i("el-row",{staticStyle:{"margin-top":"200px"},attrs:{gutter:20}},[i("el-col",{attrs:{span:12,offset:6}},[i("el-form-item",[i("el-button",{on:{click:function(t){return e.goBack()}}},[e._v("返回")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var l=i("C7Lr")(r,c,!1,function(e){i("k28r")},null,null).exports,u=i("ANQr"),p=i("oAV5"),m={name:"processList",components:{Viewer:a.a,quickTable:s.a,quickForm:l,baseButton:u.a},data:function(){var e=this;return{dropdown:function(t){var i=e;return[{content:"挂起",disHid:!("0"===t.suspended),callback:function(){i.oaform(t)}},{content:"激活",disHid:"0"===t.suspended,callback:function(){i.oaformA(t)}},{content:"转换为模型",callback:function(){i.exporModel(t)}},{content:"下载流程图",callback:function(){i.processPic(t,"1")}}]},option:{selection:!1,showIndex:!0,tableMenu:!0,isPage:!0,name:"流程",apiName:"process",activeName:"processManag",searchObject:{pageNo:1,pageSize:15},hasPermission:{edit:{isShow:!0,isPermission:!1},del:{isShow:!0,isPermission:!0}},columns:[{label:"流程ID",prop:"id",width:200},{label:"流程标识",prop:"key"},{label:"流程名称",prop:"name"},{label:"流程版本",prop:"version",width:100},{label:"部署时间",prop:"deploymentTime"},{label:"流程XML",prop:"resourceName",isClick:!0,clickFunction:function(t){e.processXML(t)}},{label:"流程图片",prop:"diagramResourceName",isClick:!0,clickFunction:function(t){e.processPic(t)}}]},imgVisible:!1,imgurl:""}},created:function(){},methods:{goBack:function(){this.option.activeName="processManag",this.$refs.quickTable.getList()},oaform:function(e){var t=this;this.$confirm("您确定要挂起该流程吗？","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$store.dispatch("process_suspend",e.id).then(function(){t.$refs.quickTable.getList()})}).catch(function(){})},oaformA:function(e){var t=this;this.$confirm("您确定要激活该流程吗？","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$store.dispatch("process_active",e.id).then(function(){t.$refs.quickTable.getList()})}).catch(function(){})},exporModel:function(e){var t=this;this.$confirm("您确定要转换该流程为模型吗？","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$store.dispatch("process_convertToModel",e.id).then(function(){t.$refs.quickTable.getList()})}).catch(function(){})},processXML:function(e){var t=this;this.$confirm("您确定要下载该XML文件吗？","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){""!==e.id&&void 0!==e.id?t.$store.dispatch("process_read",{id:e.id,resType:"xml"}).then(function(t){Object(p.d)(t.data,e.resourceName)}):t.$message({message:"没有附件可以下载",showClose:!0,type:"warning"})}).catch(function(){})},processPic:function(e,t){var i=this;t?this.$confirm("您确定要下载该图片吗？","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){""!==e.id&&void 0!==e.id?i.$store.dispatch("process_read",{id:e.id,resType:"image"}).then(function(t){Object(p.d)(t.data,e.diagramResourceName)}):i.$message({message:"没有附件可以下载",showClose:!0,type:"warning"})}).catch(function(){}):(this.imgurl="mcws/act/process/resource/read?id="+e.id+"&resType=image",this.imgVisible=!0)},handleClick:function(e,t){}}},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("div",{},[i("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.option.activeName,callback:function(t){e.$set(e.option,"activeName",t)},expression:"option.activeName"}},[i("el-tab-pane",{attrs:{label:"流程管理列表",name:"processManag"}},[i("quick-table",{ref:"quickTable",attrs:{option:e.option},scopedSlots:e._u([{key:"menuTop",fn:function(t){var a=t.row;return[i("base-button",{attrs:{type:"primary",icon:"el-icon-arrow-down el-icon--right",size:"mini",content:"更多",dropdown:e.dropdown(a)}})]}}])})],1),e._v(" "),i("el-tab-pane",{attrs:{label:"部署流程",name:"processDepy"}},["processDepy"==e.option.activeName?i("quick-form",{on:{goBack:e.goBack}}):e._e()],1)],1)],1),e._v(" "),i("viewer",{attrs:{src:e.imgurl},model:{value:e.imgVisible,callback:function(t){e.imgVisible=t},expression:"imgVisible"}})],1)},staticRenderFns:[]},f=i("C7Lr")(m,d,!1,null,null,null);t.default=f.exports},k28r:function(e,t){}});