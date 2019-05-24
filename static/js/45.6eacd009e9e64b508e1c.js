webpackJsonp([45],{dN7W:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("0qgA"),i=t("gnUw"),n=t("w3CS"),o={components:{quickForm:i.a},props:{formId:{type:String,default:""},readOnly:{type:Boolean,default:!1}},created:function(){},computed:{},data:function(){return{option:{name:"品牌管理",apiName:"brand",initObject:{id:this.formId},callback:{},hasPermission:{save:{isShow:!this.readOnly,isPermission:!0},back:{isShow:"true",isPermission:!0}},columns:[{label:"品牌名称",value:"brandName",type:"input",disabled:this.readOnly,rule:[{required:!0,message:"品牌名称不能为空",trigger:"blur"},{min:0,max:64,message:"品牌名称长度必须介于 0 到 64 之间",trigger:"blur"},{validator:n.e({validateMethod:"brand_validateName",name:"品牌名称",keyField:"brandName",fileId:this.formId}),trigger:"blur"}]},{label:"制造商名称",value:"manufacturerName",type:"input",disabled:this.readOnly,rule:[{required:!0,message:"制造商名称不能为空",trigger:"blur"},{min:0,max:64,message:"制造商名称长度必须介于 0 到 64 之间",trigger:"blur"}]},{label:"备注",value:"remarks",type:"textarea",disabled:this.readOnly,rule:[{min:0,max:500,message:"备注长度必须介于 0 到 500 之间",trigger:"blur"}]}],formObject:{}}}},methods:{goBack:function(){this.$emit("goBack")}}},s={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"brandform"},[a("quick-form",{attrs:{option:this.option},on:{goBack:this.goBack}})],1)},staticRenderFns:[]},l=t("C7Lr")(o,s,!1,null,null,null).exports,d={name:"brandList",components:{quickTable:r.a,quickForm:l},data:function(){return{option:{selection:!1,showIndex:!0,tableMenu:!1,isPage:!0,activeName:"brand",formId:"",name:"品牌管理",readOnly:!1,apiName:"brand",hasPermission:{edit:{isShow:!0,flag:"brand:edit",isPermission:!1},del:{isShow:!0,flag:"brand:remove",isPermission:!0}},columns:[{label:"品牌名称",prop:"brandName"},{label:"制造商名称",prop:"manufacturerName"},{label:"备注",prop:"remarks"}],searchObject:{brandId:"",brandName:"",manufacturerId:"",pageNo:1,pageSize:15},searchColums:[{label:"品牌名称",value:"brandId",name:"brandName",type:"tree",disHid:!1,disabled:!1,tree:{defaultProps:{id:"id",children:"children",label:"brandName"},treeMethod:"brand_allList",treeObject:{},treeData:[]}}]}}},created:function(){},computed:{formLabel:function(){return this.option.formId?this.option.readOnly?"品牌管理查看":"品牌管理编辑":"品牌管理添加"}},methods:{goBack:function(){this.option.formId="",this.option.activeName="brand",this.option.readOnly=!1,this.$refs.quickTable.getList()},handleClick:function(e,a){"brand"==e.name&&(this.option.formId="",this.option.readOnly=!1,this.$refs.quickTable.getList())}}},m={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container"},[t("div",{},[t("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.option.activeName,callback:function(a){e.$set(e.option,"activeName",a)},expression:"option.activeName"}},[t("el-tab-pane",{attrs:{label:"品牌管理列表",name:"brand"}},[t("quick-table",{ref:"quickTable",attrs:{option:e.option}})],1),e._v(" "),e.option.readOnly||e.option.hasPermission.edit.isPermission?t("el-tab-pane",{attrs:{label:e.formLabel,name:"brandform"}},["brandform"==e.option.activeName?t("quick-form",{attrs:{formId:e.option.formId,readOnly:e.option.readOnly},on:{goBack:e.goBack}}):e._e()],1):e._e()],1)],1)])},staticRenderFns:[]},c=t("C7Lr")(d,m,!1,null,null,null);a.default=c.exports}});