webpackJsonp([44],{CAGU:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("0qgA"),s=t("gnUw"),r=t("w3CS"),l={components:{quickForm:s.a},props:{formId:{type:String,default:""},readOnly:{type:Boolean,default:!1}},created:function(){},computed:{},data:function(){var e=this;return{option:{name:"资产分类",apiName:"class",initObject:{id:this.formId},callback:{},hasPermission:{save:{isShow:!this.readOnly,isPermission:!0},back:{isShow:!0,isPermission:!0}},columns:[{label:"分类名称",value:"className",type:"input",disabled:this.readOnly,rule:[{required:!0,message:"分类名称不能为空",trigger:"blur"},{min:0,max:64,message:"分类名称长度必须介于 0 到 64 之间",trigger:"blur"},{validator:r.e({validateMethod:"class_validateName",name:"分类名称",keyField:"className",fileId:this.formId}),trigger:"blur"}]},{label:"备注",value:"remarks",type:"textarea",disabled:this.readOnly,rule:[{min:0,max:500,message:"备注长度必须介于 0 到 500 之间",trigger:"blur"}]}],formObject:{brands:[]},formChildInfo:[{childTitle:"关联品牌",childEnName:"brand",dialogField:!1,dialogTitle:"关联品牌",disabled:this.readOnly,indexField:0,delInterface:{useInt:!1,delMethod:"",delObject:{}},childObject:{brandId:"",brandName:"",manufacturerName:""},otherVaild:function(a){var t=a.commonList,i=0,s=a.oldVal,r=a.childInfo;if(s.brandId==r.brandId)return!1;for(var l=0;l<t.length;l++)t[l].brandId==a.childInfo.brandId&&i++;return i>1&&(e.$message({message:"关联品牌列表不能添加重复的数据",showClose:!0,type:"warning",duration:3e3}),!0)},childArray:[{label:"品牌名称",value:"brandId",name:"brandName",type:"tree",rule:[{required:!0,message:"品牌名称不能为空",trigger:"change"}],disHid:!1,disabled:this.readOnly,callback:function(a,t,i){e.$set(i.childObject,t.name,a.brandName),e.$set(i.childObject,t.value,a.id),i.childObject.manufacturerName=a.manufacturerName},tree:{defaultProps:{id:"id",children:"children",label:"brandName"},treeMethod:"brand_allList",treeObject:{},treeData:[]}},{label:"制造商名称",value:"manufacturerName",type:"input",rule:[{required:!0,message:"制造商名称不能为空",trigger:"change"}],disHid:!1,disabled:!0,placeholder:"选择品牌名称自动带出"}]}]}}},methods:{goBack:function(){this.$emit("goBack")}}},n={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"classform"},[a("quick-form",{attrs:{option:this.option},on:{goBack:this.goBack}})],1)},staticRenderFns:[]},o=t("C7Lr")(l,n,!1,null,null,null).exports,d={name:"classList",components:{quickTable:i.a,quickForm:o},data:function(){return{option:{selection:!1,showIndex:!0,tableMenu:!1,isPage:!0,activeName:"class",formId:"",readOnly:!1,name:"资产分类",apiName:"class",hasPermission:{edit:{isShow:"true",flag:"assetsClass:edit",isPermission:!1},del:{isShow:"true",flag:"assetsClass:remove",isPermission:!0}},columns:[{label:"分类名称",prop:"className"},{label:"备注",prop:"remarks"},{label:"创建时间",prop:"createDate"}],searchObject:{className:"",pageNo:1,pageSize:15},searchColums:[{label:"分类名称",value:"className",type:"input"}]}}},created:function(){},computed:{formLabel:function(){return this.option.formId?this.option.readOnly?"资产分类查看":"资产分类编辑":"资产分类添加"}},methods:{goBack:function(){this.option.formId="",this.option.activeName="class",this.option.readOnly=!1,this.$refs.quickTable.getList()},handleClick:function(e,a){"class"==e.name&&(this.option.formId="",this.option.readOnly=!1,this.$refs.quickTable.getList())}}},c={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container"},[t("div",{},[t("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.option.activeName,callback:function(a){e.$set(e.option,"activeName",a)},expression:"option.activeName"}},[t("el-tab-pane",{attrs:{label:"资产分类列表",name:"class"}},[t("quick-table",{ref:"quickTable",attrs:{option:e.option}})],1),e._v(" "),e.option.readOnly||e.option.hasPermission.edit.isPermission?t("el-tab-pane",{attrs:{label:e.formLabel,name:"classform"}},["classform"==e.option.activeName?t("quick-form",{attrs:{formId:e.option.formId,readOnly:e.option.readOnly},on:{goBack:e.goBack}}):e._e()],1):e._e()],1)],1)])},staticRenderFns:[]},m=t("C7Lr")(d,c,!1,null,null,null);a.default=m.exports}});