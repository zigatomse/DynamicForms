(function(e){function t(t){for(var a,o,s=t[0],d=t[1],l=t[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);c&&c(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var d=n[s];0!==r[d]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"033f":function(e,t,n){"use strict";n("33e4")},"0d44":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:"modal fade "+e.className,attrs:{id:e.uuid,tabindex:"-1",role:"dialog","aria-hidden":"true"}},[n("div",{class:"modal-dialog "+e.sizeClass,attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title"},[e._v(e._s(e.title))]),e._m(0)]),n("transition",{attrs:{name:"flip",mode:"out-in"}},[e.isComponent?n("div",{key:e.uniqId,staticClass:"modal-body"},[n(e.body.component.replace(/-/g,""),{tag:"div",attrs:{data:e.body.data}})],1):n("div",{key:e.uniqId,staticClass:"modal-body",domProps:{innerHTML:e._s(e.body)}})]),n("div",{staticClass:"modal-footer"},e._l(e.buttons,(function(t){return n("button",e._b({key:t.uuid,class:t.classes,attrs:{id:t.uuid,type:"button"},on:{click:function(n){return n.stopPropagation(),e.buttonClick(n,t,e.callback)}}},"button",t.arias,!1),[e._v(e._s(t.label)+" ")])})),0)],1)])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])}],i=(n("caad"),n("d81d"),n("ac1f"),n("1276"),n("c975"),n("a15b"),n("13d5"),n("b64b"),n("d3b7"),n("cbde")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{id:"form-"+e.formUUID}},[e._t("form-error",(function(){return[e.getErrorText?n("div",[n("small",{staticClass:"form-text text-danger",attrs:{id:"form-"+e.formUUID+"-err"}},[e._v(e._s(e.getErrorText))]),n("hr")]):e._e()]})),e._l(e.definition.rows,(function(t,a){return n("dfformrow",{key:a,attrs:{columns:t,data:e.record_data,errors:e.errors}})}))],2)},s=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isHiddenSingle?n("dfformcolumn",{attrs:{def:e.columns[0],data:e.data,errors:e.errors}}):n("div",{staticClass:"row align-items-end"},e._l(e.columns,(function(t,a){return n("dfformcolumn",{key:a,attrs:{def:t,data:e.data,errors:e.errors}})})),1)},l=[],c=n("8c2d"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isGroup?n("div",{staticClass:"col"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[e._v(" "+e._s(e.def.title)+" ")]),n("div",{staticClass:"card-body"},[n(e.def.field.render_params.form.replace(/-/g,""),{tag:"component",attrs:{def:e.def.field,data:e.data,errors:e.errors}})],1),e.def.footer?n("div",{staticClass:"card-footer"},[e._v(" "+e._s(e.def.footer)+" ")]):e._e()])]):e.isHidden?n(e.def.field.render_params.form.replace(/-/g,""),{tag:"component",attrs:{def:e.def.field,data:e.data,errors:e.errors}}):n("div",{class:"col"+e.columnClasses},[n(e.def.field.render_params.form.replace(/-/g,""),{tag:"component",attrs:{def:e.def.field,data:e.data,errors:e.errors}})],1)},f=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dfwidgetbase",{attrs:{def:e.def,data:e.data,errors:e.errors}},["checkbox"===e.def.render_params.input_type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.data[e.def.field_name],expression:"\n/* eslint-disable */\ndata[def.field_name]"}],class:e.def.render_params.field_class,attrs:{slot:"input",id:e.def.uuid,name:e.def.field_name,"aria-describedby":e.def.help_text?e.def.field_name+"-help":null,placeholder:e.def.placeholder,pattern:e.def.render_params.pattern,min:e.def.render_params.min,max:e.def.render_params.max,step:e.def.render_params.step,minlength:e.def.render_params.minlength,maxlength:e.def.render_params.maxlength,size:e.def.render_params.size,type:"checkbox"},domProps:{checked:Array.isArray(e.data[e.def.field_name])?e._i(e.data[e.def.field_name],null)>-1:e.data[e.def.field_name]},on:{change:function(t){var n=e.data[e.def.field_name],a=t.target,r=!!a.checked;if(Array.isArray(n)){var i=null,o=e._i(n,i);a.checked?o<0&&e.$set(e.data,e.def.field_name,n.concat([i])):o>-1&&e.$set(e.data,e.def.field_name,n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.data,e.def.field_name,r)}},slot:"input"}):"radio"===e.def.render_params.input_type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.data[e.def.field_name],expression:"\n/* eslint-disable */\ndata[def.field_name]"}],class:e.def.render_params.field_class,attrs:{slot:"input",id:e.def.uuid,name:e.def.field_name,"aria-describedby":e.def.help_text?e.def.field_name+"-help":null,placeholder:e.def.placeholder,pattern:e.def.render_params.pattern,min:e.def.render_params.min,max:e.def.render_params.max,step:e.def.render_params.step,minlength:e.def.render_params.minlength,maxlength:e.def.render_params.maxlength,size:e.def.render_params.size,type:"radio"},domProps:{checked:e._q(e.data[e.def.field_name],null)},on:{change:function(t){return e.$set(e.data,e.def.field_name,null)}},slot:"input"}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.data[e.def.field_name],expression:"\n/* eslint-disable */\ndata[def.field_name]"}],class:e.def.render_params.field_class,attrs:{slot:"input",id:e.def.uuid,name:e.def.field_name,"aria-describedby":e.def.help_text?e.def.field_name+"-help":null,placeholder:e.def.placeholder,pattern:e.def.render_params.pattern,min:e.def.render_params.min,max:e.def.render_params.max,step:e.def.render_params.step,minlength:e.def.render_params.minlength,maxlength:e.def.render_params.maxlength,size:e.def.render_params.size,type:e.def.render_params.input_type},domProps:{value:e.data[e.def.field_name]},on:{input:function(t){t.target.composing||e.$set(e.data,e.def.field_name,t.target.value)}},slot:"input"})])},p=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isHidden?n("input",{attrs:{type:"hidden",name:e.def.field_name},domProps:{value:e.data[e.def.field_name]}}):n("div",{class:e.def.render_params.container_class,attrs:{id:"container-"+e.def.uuid}},[e._t("error",(function(){return[e.getErrorText?n("small",{staticClass:"form-text text-danger",attrs:{id:e.def.field_name+"-err"}},[e._v(e._s(e.getErrorText))]):e._e()]})),!1===e.labelAfterElement?n("dfwidgetbaselabel",{attrs:{data:e.data,def:e.def}}):e._e(),e._t("input"),e.labelAfterElement?n("dfwidgetbaselabel",{attrs:{data:e.data,def:e.def}}):e._e(),e._t("help",(function(){return[e.def.help_text?n("small",{staticClass:"form-text text-muted",attrs:{id:e.def.field_name+"-help"}},[e._v(e._s(e.def.help_text))]):e._e()]}))],2)},g=[],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.def.label?n("label",{attrs:{for:e.def.uuid,def:e.def,data:e.data}},[e._v(e._s(e.def.label))]):e._e()},b=[],w={name:"dfwidgetbaselabel",props:["def","data"]},v=w,y=n("2877"),x=Object(y["a"])(v,_,b,!1,null,"1933d682",null),C=x.exports,D={name:"dfwidgetbase",props:["def","data","errors"],computed:{isHidden:function(){return this.def.display===c["a"].HIDDEN},labelAfterElement:function(){return this.def.render_params.label_after_element},getErrorText:function(){try{if(this.errors&&this.errors[this.def.field_name])return this.errors[this.def.field_name]}catch(e){}return""}},components:{dfwidgetbaselabel:C}},k=D,O=Object(y["a"])(k,h,g,!1,null,"617ab2ea",null),E=O.exports,$={name:"dfwidgetinput",props:["def","data","errors"],components:{dfwidgetbase:E}},j=$,I=Object(y["a"])(j,m,p,!1,null,"3a113b72",null),A=I.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dfwidgetbase",{attrs:{def:e.def,data:e.data,errors:e.errors}},[n("div",{staticClass:"input-group",attrs:{slot:"input"},slot:"input"},["checkbox"===e.passwordFieldType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:e.def.render_params.class,attrs:{id:e.def.uuid,name:e.def.field_name,"aria-describedby":e.def.help_text?e.def.field_name+"-help":null,placeholder:e.def.placeholder,pattern:e.def.render_params.pattern,type:"checkbox"},domProps:{value:e.data[e.def.field_name],checked:Array.isArray(e.password)?e._i(e.password,e.data[e.def.field_name])>-1:e.password},on:{change:function(t){var n=e.password,a=t.target,r=!!a.checked;if(Array.isArray(n)){var i=e.data[e.def.field_name],o=e._i(n,i);a.checked?o<0&&(e.password=n.concat([i])):o>-1&&(e.password=n.slice(0,o).concat(n.slice(o+1)))}else e.password=r}}}):"radio"===e.passwordFieldType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:e.def.render_params.class,attrs:{id:e.def.uuid,name:e.def.field_name,"aria-describedby":e.def.help_text?e.def.field_name+"-help":null,placeholder:e.def.placeholder,pattern:e.def.render_params.pattern,type:"radio"},domProps:{value:e.data[e.def.field_name],checked:e._q(e.password,e.data[e.def.field_name])},on:{change:function(t){e.password=e.data[e.def.field_name]}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:e.def.render_params.class,attrs:{id:e.def.uuid,name:e.def.field_name,"aria-describedby":e.def.help_text?e.def.field_name+"-help":null,placeholder:e.def.placeholder,pattern:e.def.render_params.pattern,type:e.passwordFieldType},domProps:{value:e.data[e.def.field_name],value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("span",{staticClass:"input-group-text",class:e.isPassword?"password-field":"password-field-slash",on:{click:e.toggle_password}})])])},T=[],P={name:"dfwidgetpassword",props:["def","data","errors"],data:function(){return{password:"",passwordFieldType:"password",isPassword:!0}},methods:{toggle_password:function(){this.isPassword=!this.isPassword,this.passwordFieldType="password"===this.passwordFieldType?"text":"password"}},components:{dfwidgetbase:E}},U=P,S=Object(y["a"])(U,R,T,!1,null,"d3122ea4",null),L=S.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dfwidgetbase",{attrs:{def:e.def,data:e.data,errors:e.errors}},[n("ckeditor",{attrs:{slot:"input",editor:e.editor,config:e.editorConfig},slot:"input",model:{value:e.editorData,callback:function(t){e.editorData=t},expression:"editorData"}})],1)},H=[],M=n("6930"),V=n.n(M),q=n("fb3d"),F=n.n(q),z={name:"dfwidgetckeditor",props:["def","data","errors"],data:function(){return{editor:F.a,editorData:"<p>Content of the editor.</p>",editorConfig:{}}},components:{dfwidgetbase:E,ckeditor:V.a.component}},K=z,W=Object(y["a"])(K,N,H,!1,null,"b81ed886",null),B=W.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dfwidgetbase",{attrs:{def:e.def,data:e.data,errors:e.errors}},[n("select",{staticClass:"form-control",attrs:{slot:"input",id:e.id,name:e.name,disabled:e.disabled,required:e.required},slot:"input"},[n("option",{attrs:{selected:"selected"}},[e._v("orange")]),n("option",[e._v("white")]),n("option",[e._v("purple")])])])},J=[],X=n("2909"),Y=n("5530"),Q=(n("7db0"),n("1157")),Z=(n("28f8"),n("d724"),{name:"dfwidgetselect",data:function(){return{select2:null,id:"",name:"",placeholder:"",options:[],modelValue:null,disabled:!1,required:!1,settings:{}}},emits:["update:modelValue"],props:{def:{type:Object,required:!0},data:{type:Object,required:!0},errors:{type:Object,required:!0}},methods:{setOption:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.select2.empty(),this.select2.select2(Object(Y["a"])(Object(Y["a"])({placeholder:this.placeholder},this.settings),{},{data:e,dropdownParent:Q(".df-modal-handler"),tags:!0})),this.setValue(this.modelValue)},setValue:function(e){e instanceof Array?this.select2.val(Object(X["a"])(e)):this.select2.val([e]),this.select2.trigger("change")}},mounted:function(){var e=this;this.options=[{id:1,text:"Option 1"},{id:2,text:"Option 2"}],this.select2=Q(this.$el).find("select").select2(Object(Y["a"])(Object(Y["a"])({placeholder:this.placeholder},this.settings),{},{data:this.options,tags:!0,dropdownParent:Q(".df-modal-handler")})).on("select2:select select2:unselect",(function(t){e.$emit("update:modelValue",e.select2.val()),e.$emit("select",t.params.data)})),this.setValue(this.modelValue),setTimeout((function(){e.options=[{id:6,text:"Option 6"},{id:5,text:"Option 5"},{id:7,text:"Option 7"}],e.modelValue=5}),3e3)},beforeUnmount:function(){this.select2.select2("destroy")},components:{dfwidgetbase:E},watch:{options:{handler:function(e){this.setOption(e)},deep:!0},modelValue:{handler:function(e){this.setValue(e)},deep:!0}}}),ee=Z,te=Object(y["a"])(ee,G,J,!1,null,"2112f2c4",null),ne=te.exports,ae={name:"dfformcolumn",props:["def","data","errors"],computed:{isGroup:function(){return"group"===this.def.type},isHidden:function(){return this.def.field.display===c["a"].HIDDEN},columnClasses:function(){return this.def.width_classes?" ".concat(this.def.width_classes):""}},components:{dfwidgetinput:A,dfwidgetpassword:L,dfwidgetckeditor:B,dfwidgetselect:ne}},re=ae,ie=(n("b9c1"),Object(y["a"])(re,u,f,!1,null,"16f9d57e",null)),oe=ie.exports,se={name:"formrow",props:["columns","data","errors"],computed:{isHiddenSingle:function(){return 1===this.columns.length&&this.columns[0].field.display===c["a"].HIDDEN}},components:{dfformcolumn:oe}},de=se,le=Object(y["a"])(de,d,l,!1,null,"5d915fc1",null),ce=le.exports,ue=n("c950"),fe={name:"formlayout",props:["data","def","uuid","url"],data:function(){var e=this.data.dialog||this.def,t=this.data.uuid||this.uuid;return{definition:e,formUUID:t,record_data:this.data.record||{},errors:{}}},computed:{getErrorText:function(){var e="non_field_errors";try{if(this.errors&&this.errors[e])return this.errors[e]}catch(t){}return""}},components:{dfformrow:ce},beforeDestroy:function(){ue["a"].$off("formEvents_".concat(this.formUUID))},mounted:function(){var e=this;ue["a"].$on("formEvents_".concat(this.formUUID),(function(t){console.log(t),"submitErrors"===t.type&&(e.errors=t.data)}))}},me=fe,pe=Object(y["a"])(me,o,s,!1,null,"d17e53e4",null),he=pe.exports,ge=(n("4989"),{name:"modalhandler",data:function(){return{dialogs:[],initialEventAssignDone:!1,uniqIdCounter:0,loading:!1}},computed:{className:function(){return"df-modal-handler"},bootstrapDialog:function(){return".df-modal-handler"},currentDialog:function(){var e=this.dialogs.length?this.dialogs[this.dialogs.length-1]:null;return e&&(e.uniqId=e.uniqId||this.uniqIdCounter++),e},sizeClass:function(){var e=this.currentDialog;return e?e.large||["large","lg","modal-lg"].includes(e.size)?"modal-lg":e.small||["small","sm","modal-sm"].includes(e.size)?"modal-sm":"":"modal-sm"},title:function(){return this.currentDialog?this.currentDialog.title:"No dialogs to show!"},body:function(){return this.currentDialog?this.currentDialog.body:"No dialogs have been invoked"},callback:function(){return this.currentDialog?this.currentDialog.callback:null},uniqId:function(){return this.currentDialog?this.currentDialog.uniqId:null},isComponent:function(){return!!this.currentDialog&&(this.currentDialog.body.component&&this.currentDialog.body.data)},uuid:function(){return this.currentDialog&&this.currentDialog.uuid?"dialog-".concat(this.currentDialog.uuid):"df-modal-handler"},buttons:function(){var e=this,t=this.currentDialog?this.currentDialog.buttons:null,n=this.currentDialog&&t?t:[{close:"default"}];return n.map((function(t){"default"===t.close?t={label:e.gettext("Close"),classes:"btn btn-secondary",data_return:"close"}:"default"===t.yes?t={label:e.gettext("Yes"),classes:"btn btn-primary",data_return:"yes"}:"default"===t.no&&(t={label:e.gettext("No"),classes:"btn btn-secondary",data_return:"no"}),t.arias=t.arias||{},t.guid=t.guid||"";var n=(t.classes||"").split(" ");return-1===n.indexOf("btn")&&n.push("btn"),t.classes=n.join(" "),t}))}},created:function(){window.dynamicforms.dialog||(window.dynamicforms.dialog=this)},methods:{show:function(){var e=this;this.initialEventAssignDone||(this.initialEventAssignDone=!0,Q(this.bootstrapDialog).on("hide.bs.modal",(function(t){var n=null;e.dialogs.length&&(n=e.dialogs.pop().callback),e.dialogs.length&&t.preventDefault(),n&&!0!==n.df_called&&n(null)}))),Q(this.bootstrapDialog).modal("show")},hide:function(){Q(this.bootstrapDialog).modal("hide")},gettext:function(e){return e},buttonClick:function(e,t,n){ue["a"].$emit("tableActionExecuted_".concat(this.currentDialog.tableUuid),{action:t,data:this.currentDialog.body.data.record,modal:this,event:e}),n&&(n(t.data_return),n.df_called=!0)},yesNo:function(e,t,n){this.dialogs.push({title:e,body:t,buttons:[{yes:"default"},{no:"default"}],callback:n}),this.show()},showComponent:function(e,t,n){var a=e.data.dialog.actions;this.dialogs.push({uuid:e.data.uuid,title:e.data.titles[t||"new"],body:e,buttons:Object.keys(a).reduce((function(t,n){return a[n].data_return={dialog_id:e.data.uuid,button:a[n]},t.push(a[n]),t}),[]),callback:null,size:e.data.dialog.size,tableUuid:n}),this.show()},fromURL:function(e,t,n){var a=this;this.loading=!0,i["a"].get(e,{headers:{"x-viewmode":"FORM","x-df-render-type":"dialog"}}).then((function(e){a.showComponent(e.data,t,n)})).catch((function(e){console.error(e)})).finally((function(){a.loading=!1}))}},components:{dfformlayout:he}}),_e=ge,be=Object(y["a"])(_e,a,r,!1,null,"3ee13836",null);t["a"]=be.exports},"14a2":function(e,t,n){"use strict";n("e8e5")},"17a6":function(e,t,n){},"33e4":function(e,t,n){},4703:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),function(e){n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("a026"),a=n("fdf9"),r=n("0d44"),i=n("85fe"),o=n("bc3a"),s=n.n(o),d=n("1157"),l=n.n(d);t["default"].config.productionTip=!1,t["default"].use(i["a"]),t["default"].component("dftable",a["a"]);var c=function(e){return new t["default"]({el:"#".concat(e),components:{ModalHandler:r["a"]},template:"<ModalHandler></ModalHandler>"})},u=function(e,t){s.a.get(e,{headers:{"x-viewmode":"TABLE_ROW","x-pagination":1,"x-df-component-def":!0}}).then((function(e){t(e.data)})).catch((function(e){alert(e.data)}))},f=function(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return"undefined"===typeof window.dynamicforms&&(window.dynamicforms={}),!window.dynamicforms.dialog&&i&&c(i),new t["default"]({el:"#".concat(e),template:n,data:function(){return r},components:{dftable:a["a"]}})};window.$=l.a,window.$,window.createApp=f,window.getComponentDef=u}.call(this,n("1157"))},"7fcd":function(e,t,n){"use strict";n("ebce")},"8c2d":function(e,t,n){"use strict";n("dca8");var a=Object.freeze({SUPPRESS:1,HIDDEN:5,INVISIBLE:8,FULL:10});t["a"]=a},b9c1:function(e,t,n){"use strict";n("4703")},c950:function(e,t,n){"use strict";var a=n("a026"),r=new a["default"];t["a"]=r},cbde:function(e,t,n){"use strict";var a=n("bc3a"),r=n.n(a),i=r.a.create({xsrfCookieName:"csrftoken",xsrfHeaderName:"X-CSRFToken",withCredentials:!1});t["a"]=i},cce0:function(e,t,n){"use strict";n("d0d0")},d0d0:function(e,t,n){},e4d7:function(e,t,n){"use strict";n("17a6")},e8e5:function(e,t,n){},ebce:function(e,t,n){},fdf9:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n(e.component+"table",{tag:"component",attrs:{configuration:e.processedConfiguration}})],1)},r=[],i=n("5530"),o=(n("159b"),n("99af"),n("caad"),n("d81d"),n("4e82"),n("4de4"),n("d3b7"),n("13d5"),n("ac1f"),n("5319"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[e._v(e._s(e.configuration.titles.table)+" "),n("div",{staticClass:"float-right"},[n("Actions",{attrs:{actions:e.configuration.actions.filter("HEADER")}})],1)]),n("div",{staticClass:"card-body"},[n("table",{staticClass:"table"},[n("dftablehead",{attrs:{columns:e.configuration.columns}}),n("dftablebody",{attrs:{columns:e.configuration.columns,rows:e.configuration.rows,loading:e.configuration.loading,actions:e.configuration.actions,rowProperties:e.configuration.rowProperties}}),n("dftablefoot",{attrs:{columns:e.configuration.columns,rows:e.configuration.rows,loading:e.configuration.loading,noDataString:e.configuration.noDataString}})],1)])])])}),s=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",e._l(e.columns,(function(t,a){return n("th",{key:t.name,class:t.th_classes,style:"text-align: "+t.align,on:{click:function(n){return e.colClicked(n,t,a)}}},[e._v(" "+e._s(t.label)+" "),t.isOrdered?n("span",{staticClass:"ordering"},[n("div",{staticClass:"ordering-arrow"},[e._v(e._s(t.ascDescChar))]),e._v(" "+e._s(t.orderIndexChar)+" ")]):e._e()])})),0)])},l=[],c=(n("2532"),{name:"dftablehead",props:["columns"],computed:{numSortedCols:function(){return this.columns.filter((function(e){return e.ordering.includes("seg-")})).length}},methods:{colClicked:function(e,t,n){if(t.isOrdered)if(e.altKey);else if(e.ctrlKey&&e.shiftKey)t.setSorted("unsorted");else if(e.ctrlKey)this.$parent.$parent.changeOrder(n,t.isDescending?"desc":"asc",1);else{var a=t.orderIndex,r=e.shiftKey?0===a?this.numSortedCols+1:a:1,i=e.shiftKey?this.column.isAscending?"desc":"asc":t.cycleOrdering;this.$parent.$parent.changeOrder(n,i,r,!e.shiftKey)}}}}),u=c,f=(n("cce0"),n("2877")),m=Object(f["a"])(u,d,l,!1,null,"5f23df67",null),p=m.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tbody",e._l(e.rows,(function(t){return n("tr",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.rows.getVisibilityHandler(t.id),expression:"rows.getVisibilityHandler(row.id)"}],key:t.id,style:t.df_control_data.row_css_style,on:{click:function(n){return e.rowClick(n,"ROW_CLICK",t)},mouseup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"right",39,t.key,["Right","ArrowRight"])||"button"in t&&2!==t.button?null:e.rowClick(t,"ROW_RIGHTCLICK")}}},e._l(e.columns,(function(a){return n("td",{key:a.name,attrs:{"data-name":a.name}},[n("Actions",{attrs:{row:t,actions:e.actions.filter("FIELD_START",a.name)}}),a.renderDecoratorComponentName?n(a.renderDecoratorComponentName,{tag:"component",attrs:{row:t,column:a,value:t[a.name],"body-id":e.$parent._uid}}):["#actions-row_start","#actions-row_end"].includes(a.name)?n("Actions",{attrs:{row:t,actions:e.actions.filter(a.name.substr(9).toUpperCase())}}):n("div",{staticStyle:{display:"inline-block"},domProps:{innerHTML:e._s(a.renderDecoratorFunction(t,a,t[a.name]))}}),n("Actions",{attrs:{row:t,actions:e.actions.filter("FIELD_END",a.name)}})],1)})),0)})),0)},g=[],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"inline-block"},domProps:{innerHTML:e._s(e.displayValue)}})},b=[],w=(n("c975"),n("a15b"),n("a026")),v={name:"dftablecellfloat",props:["row","column","value","bodyId"],computed:{displayValue:function(){["dynamicforms","df-tablecell-float-configs"].reduce((function(e,t){return e[t]||(e[t]={})}),window);var e=window.dynamicforms["df-tablecell-float-configs"][this.bodyId];e||(e=w["default"].observable({max_decimals:0,decimal_char:1.1.toLocaleString().substr(1,1)}),window.dynamicforms["df-tablecell-float-configs"][this.bodyId]=e);var t=this.value.toLocaleString(),n=t.indexOf(e.decimal_char),a=-1===n?0:t.substr(n+1).length;a>e.max_decimals&&(e.max_decimals=a),-1===n&&(t+=e.decimal_char);var r=Array(e.max_decimals+1-a).join("0");return this.column.render_params.table_show_zeroes?t+=r:t+=r?'<span style="visibility: hidden">'.concat(r,"</span>"):"",t}}},y=v,x=Object(f["a"])(y,_,b,!1,null,"30809ebb",null),C=x.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.actions.list.length>0?n("div",{staticClass:"actions-holder"},e._l(e.actions.list,(function(t){return n("div",{key:t.name+t.icon,staticClass:"btn btn-sm btn-info text-nowrap",on:{click:function(n){return n.stopPropagation(),e.actions.exec(n,t,e.row)}}},[n("IonIcon",{staticClass:"d-inline-block",attrs:{name:t.icon}}),n("span",{staticClass:"d-none d-md-inline-block"},[e._v(e._s(t.label))])],1)})),0):e._e()},k=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loaded_svg?n("div",{key:e.loaded_svg,domProps:{innerHTML:e._s(e.loaded_svg)}}):e._e()},E=[],$=n("cbde"),j=n("2ef0"),I=n.n(j),A={name:"ionicon",props:["name"],data:function(){return{loaded_svg:""}},computed:{},mounted:function(){var e=this,t=e.name;if(window.cache_ionicon||(window.cache_ionicon={}),t)if(window.cache_ionicon[t]){if("function"===typeof window.cache_ionicon[t].then)return window.cache_ionicon[t].then((function(t){e.loaded_svg=t.data})),void(e.loaded_svg="&hellip;");e.loaded_svg=window.cache_ionicon[t]}else e.loaded_svg="&hellip;",window.cache_ionicon[t]=$["a"].get("https://unpkg.com/ionicons@5.5.1/dist/svg/".concat(t,".svg")),window.cache_ionicon[t].then((function(n){e.loaded_svg=window.cache_ionicon[t]=n.data}));else Object(j["noop"])()},methods:{}},R=A,T=(n("e4d7"),n("14a2"),Object(f["a"])(R,O,E,!1,null,"37e01838",null)),P=T.exports,U={name:"actions",props:["row","actions"],components:{IonIcon:P}},S=U,L=(n("7fcd"),Object(f["a"])(S,D,k,!1,null,"0276bfd4",null)),N=L.exports,H={name:"dftablebody",props:["columns","rowProperties","rows","loading","actions"],data:function(){return{}},methods:{rowClick:function(e,t,n){var a=this.actions.filter(t);a.list.forEach((function(t){a.exec(e,t,n)}))}},components:{Actions:N,dftablecellfloat:C}},M=H,V=Object(f["a"])(M,h,g,!1,null,"a4ba6f0c",null),q=V.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tfoot",[0!==e.rows.length||e.loading?e._e():n("tr",{staticClass:"no-data-indicator"},[n("td",{attrs:{colspan:e.columns.length}},[e._v(e._s(e.noDataString))])]),0===e.rows.length&&e.loading?n("tr",{staticClass:"no-data-indicator"},[n("td",{attrs:{colspan:e.columns.length}},[e._m(0)])]):e._e(),e.rows.length>0&&e.loading?n("tr",{staticClass:"loading-indicator"},[n("td",{attrs:{colspan:e.columns.length}},[e._m(1)])]):e._e()])},z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lds-ellipsis"},[n("div"),n("div"),n("div"),n("div")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lds-ellipsis"},[n("div"),n("div"),n("div"),n("div")])}],K={name:"dftablefoot",props:["columns","rows","loading","noDataString"]},W=K,B=(n("033f"),Object(f["a"])(W,F,z,!1,null,"6881e20b",null)),G=B.exports,J={name:"dftable",props:["configuration"],components:{dftablefoot:G,dftablehead:p,dftablebody:q,Actions:N}},X=J,Y=Object(f["a"])(X,o,s,!1,null,"1ad0f510",null),Q=Y.exports,Z=n("d4ec"),ee=n("bee2"),te=(n("07ac"),n("c950")),ne=function(){function e(t,n,a){Object(Z["a"])(this,e),this.actions=t,this.showModal=n,this.tableUuid=a,this.filterCache={}}return Object(ee["a"])(e,[{key:"list",get:function(){return Object.values(this.actions)}},{key:"filter",value:function(t,n){var a=this,r=t+(n?"|".concat(n):"");return void 0===this.filterCache[r]&&(this.filterCache[r]=new e(Object.values(this.actions).filter((function(e){return e.position===t&&(null===e.field_name||e.field_name===n)})).reduce((function(e,t){return e[t.name]=a.actions[t.name],e}),{}),this.showModal,this.tableUuid)),this.filterCache[r]}},{key:"exec",value:function(e,t,n){te["a"].$emit("tableActionExecuted_".concat(this.tableUuid),{event:e,action:t,data:n})}}]),e}(),ae=ne,re=(n("498a"),n("a9e3"),n("1276"),n("8c2d")),ie=function(){function e(t){Object(Z["a"])(this,e),this._columnDef=t}return Object(ee["a"])(e,[{key:"name",get:function(){return this._columnDef.name}},{key:"label",get:function(){return this._columnDef.label}},{key:"align",get:function(){return this._columnDef.align}},{key:"table_classes",get:function(){return this._columnDef.table_classes}},{key:"ordering",get:function(){return this._columnDef.ordering}},{key:"visibility",get:function(){switch(this._columnDef.visibility){case 1:return re["a"].SUPPRESS;case 5:return re["a"].HIDDEN;case 8:return re["a"].INVISIBLE;case 10:return re["a"].FULL;default:return console.warn("Table column came with visibility set to ".concat(this._columnDef.visibility,", but we don't know")+" that constant"),re["a"].FULL}}},{key:"isOrdered",get:function(){return this.ordering.includes("ordering")}},{key:"th_classes",get:function(){return"".concat(this.table_classes," ").concat(this.isOrdered?"ordering":"").trim()}},{key:"isAscending",get:function(){return this.isOrdered&&this.ordering.includes("asc")}},{key:"isDescending",get:function(){return this.isOrdered&&this.ordering.includes("desc")}},{key:"isUnsorted",get:function(){return this.isOrdered&&this.ordering.includes("unsorted")}},{key:"cycleOrdering",get:function(){return this.isAscending?"desc":this.isDescending?"unsorted":"asc"}},{key:"setSorted",value:function(e,t){void 0===t&&(t=this.orderIndex>0?this.orderIndex:1),this.isOrdered?"asc"===e||"desc"===e||"unsorted"===e?this._columnDef.ordering="ordering ".concat(e," ").concat("unsorted"===e?"":"seg-".concat(t)):console.warn('unknown sort direction "'.concat(e,'" for the column ').concat(this.name,". not doing anything")):console.warn("column $(this.name) is not orderable. Why are you trying to set its order direction?")}},{key:"ascDescChar",get:function(){return this.isOrdered?this.isAscending?"▲":this.isDescending?"▼":this.isUnsorted?"↕":"":""}},{key:"orderIndex",get:function(){if(!this.isOrdered)return 0;var e=/(?:seg-)(\d+)/.exec(this.ordering);return null!=e?Number(e[1]):0}},{key:"orderIndexChar",get:function(){return this.orderIndex>0?String.fromCharCode(9312+this.orderIndex-1):""}},{key:"render_params",get:function(){return this._columnDef.render_params||{}}},{key:"renderDecoratorComponentName",get:function(){if(this.render_params.table){var e=this.render_params.table,t="#"===e.substr(0,1)?e.substr(1):"";return t.replace(/-/g,"")}return null}},{key:"renderDecoratorFunction",get:function(){if(this.render_params&&this.render_params.table){var e=this.render_params.table;if("df-tablecell-"!==e.substr(0,13))return e.split(".").reduce((function(e,t){return e[t]}),window);var t=e.substr(13);switch(t){case"bool":return function(e,t,n){return"<code>".concat(n,"</code>")};case"link":return function(e,t,n){return'<a href="'.concat(n,'">').concat(n,"</a>")};case"email":return function(e,t,n){var a=n.includes("<")?n.substr(0,n.indexOf("<")).trim():n;return'<a href="mailto:'.concat(n,'">').concat(a,"</a>")};case"ipaddr":return function(e,t,n){var a=n.split(".");return 4===a.length&&(n=a.map((function(e){var t=e.length<3?'<span style="opacity: .5">'.concat("000".slice(e.length-3),"</span>"):"";return t+e})).join(".")),"<code>".concat(n,"</code>")}}}return function(e,t,n){return n}}}]),e}(),oe=ie,se=(n("a434"),n("25f0"),{methods:{executeTableAction:function(e,t,n){var a=this;if(I.a.size(e))if("delete"===e.name)$["a"].delete(this.detail_url.replace("--record_id--",t.id)).then((function(){a.rows.results.splice(I.a.indexOf(a.rows.results,t),1)}));else if(["edit","add"].includes(e.name))this.showModal(e,t);else if("submit"===e.name){var r,i;t.id?(r=t.id,i=$["a"].put):(r="new",i=$["a"].post),i(this.detail_url.replace("--record_id--",r),t,{headers:{"x-viewmode":"TABLE_ROW","x-pagination":1,"x-df-component-def":!0}}).then((function(e){n&&n.hide();var t=I.a.indexOf(I.a.map(a.rows.results,"id"),e.data.id.toString());t>=0?a.rows.results.splice(t,1,e.data):a.rows.results.push(e.data)})).catch((function(e){var t={},a="formEvents_".concat(n.currentDialog.body.data.uuid);400===e.response.status?I.a.forOwn(e.response.data,(function(e,n){t["".concat(n)]=I.a.join(e,"\n")})):t.non_field_errors=e.response.data.detail,te["a"].$emit(a,{type:"submitErrors",data:t})}))}else"cancel"===e.name&&n&&n.hide()}}}),de=se,le={getObjectFromPath:function(e){return e.split(".").reduce((function(e,t){return e[t]||{}}),window)}},ce=le,ue={name:"dftable",mixins:[de],data:function(){return{loading:!1,rows:this.$parent.rows,columns:this.$parent.columns,titles:this.$parent.titles,actions:this.$parent.actions,uuid:this.$parent.uuid,list_url:this.$parent.list_url,detail_url:this.$parent.detail_url,editingRowURL:this.$parent.editingRowURL,editDialogTitle:this.$parent.editDialogTitle,"row-properties":this.$parent["row-properties"]}},beforeDestroy:function(){te["a"].$off("tableActionExecuted_".concat(this.uuid))},mounted:function(){var e=this,t="";this.columns.forEach((function(n,a){t+="#list-".concat(e.uuid," tbody tr td:nth-child(").concat(a+1,") {\n            text-align: ").concat(n.align,";\n          }\n          ")}));var n=document.createElement("style");n.appendChild(document.createTextNode(t)),document.head.appendChild(n),te["a"].$on("tableActionExecuted_".concat(this.uuid),(function(t){if(["add","edit","delete","filter","submit","cancel"].includes(t.action.name))e.executeTableAction(t.action,t.data,t.modal);else{var n=ce.getObjectFromPath(t.action.action.func_name);if(n){var a={};try{a=t.action.action.params}catch(o){}var r=Object(i["a"])({context:e},t);a?n.apply(a,[r]):n(r)}}}))},computed:{processedConfiguration:function(){return{rows:this.loadableRows(this.rows),columns:this.columns.map((function(e){return new oe(e)})),actions:new ae(this.actions,this.showModal,this.uuid),rowProperties:this["row-properties"],loading:this.loading,noDataString:"No data",editDialogTitle:"Test dialog",editingRowURL:"",titles:this.titles}},component:function(){return window.dynamicformsUi},sortedColumns:function(){return this.processedConfiguration.columns.filter((function(e){return e.isOrdered&&!e.isUnsorted})).map((function(e){return{fieldName:e.name,direction:e.isAscending,index:e.orderIndex}})).sort((function(e,t){return e.index-t.index}))},orderingParam:function(){return this.sortedColumns.map((function(e){return(!0===e.direction?"":"-")+e.fieldName}))}},methods:{changeOrder:function(e,t,n,a){var r=this.processedConfiguration.columns[e].orderIndex!==n;this.processedConfiguration.columns.forEach((function(i,o){o===e?i.setSorted(t,n):i.orderIndex>0&&(a?i.setSorted("unsorted"):r&&i.orderIndex>=n&&i.setSorted(i.isAscending?"asc":"desc",i.orderIndex+1))}))},loadData:function(){var e=this;this.loading=!0,window.setTimeout((function(){}),250),$["a"].get("".concat(this.list_url,"?ordering=").concat(this.orderingParam),{headers:{"x-viewmode":"TABLE_ROW","x-pagination":1}}).then((function(t){e.rows=t.data})).catch((function(e){console.error(e)})).finally((function(){e.loading=!1}))},loadableRows:function(e){var t=this,n=[],a=null;e&&e.results&&e.results.constructor===Array&&(n=e.results,a=e.next);var r=function(e){var t=null,a=null;e&&e.length&&(t=e[0].id,a=e[e.length-1].id),n.getVisibilityHandler=function(e){return(t===e||a===e)&&{callback:n.loadMoreRows,once:!0}}};return r(n.length&&a?n:null),n.loadMoreRows=function(e){e&&(t.loading=!0,$["a"].get(t.rows.next,{headers:{"x-viewmode":"TABLE_ROW","x-pagination":1}}).then((function(e){var n=t.rows.results.reduce((function(e,t,n){return e[t.id]=n,e}),{});e.data.results.map((function(e){var a=n[e.id];a?t.rows.results[a]=e:t.rows.results.push(e)})),t.rows.next=e.data.next,r(e.data.results.length&&e.data.next?e.data.results:null)})).catch((function(e){console.log(e)})).finally((function(){t.loading=!1})))},n},showModal:function(e,t){"edit"===e.name?(this.editDialogTitle="".concat(this.titles.edit," ").concat(t.id),this.editingRowURL=this.detail_url.replace("--record_id--",t.id).replace(".json",".component"),window.dynamicforms.dialog.fromURL(this.editingRowURL,e.name,this.uuid)):"add"===e.name?(this.editDialogTitle=this.titles.add,this.editingRowURL=this.detail_url.replace("--record_id--","new").replace(".json",".component"),console.log(this.editingRowURL,"add -url"),window.dynamicforms.dialog.fromURL(this.editingRowURL,e.name,this.uuid)):(this.editDialogTitle="unknown action ".concat(e.name,"... so, a stupid title"),this.editingRowURL="")}},watch:{orderingParam:function(e,t){I.a.isEqual(e,t)||this.loadData()}},components:{bootstraptable:Q}},fe=ue,me=Object(f["a"])(fe,a,r,!1,null,"58bc03d3",null);t["a"]=me.exports}});
//# sourceMappingURL=df-components.js.map