$wnd.gwtmaterialdemo.runAsyncCallback24("function $setText_4(this$static, text_0){\n  $setTextOrHtml(this$static.directionalTextHelper, text_0);\n}\n\nfunction CheckBoxPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(859, 60, $intern_54, CheckBoxPresenter);\n_.onReveal = function onReveal_44(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('CheckBox', 'Checkboxes allow the user to select multiple options from a set. If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches.', 'components/forms/checkbox/CheckBoxView', 'https://material.io/guidelines/components/selection-controls.html'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_checkbox_CheckBoxPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.checkbox', 'CheckBoxPresenter', 859);\nfunction $onCheckAll(this$static, e){\n  if (checkNotNull(castToBoolean(e.value_0))) {\n    $setValue_14(this$static.cbBlue, ($clinit_Boolean() , $clinit_Boolean() , true), false);\n    $setValue_14(this$static.cbRed, (null , true), false);\n    $setValue_14(this$static.cbCyan, (null , true), false);\n    $setValue_14(this$static.cbGreen, (null , true), false);\n    $setValue_14(this$static.cbBrown, (null , true), false);\n  }\n   else {\n    $setValue_14(this$static.cbBlue, ($clinit_Boolean() , $clinit_Boolean() , false), false);\n    $setValue_14(this$static.cbRed, (null , false), false);\n    $setValue_14(this$static.cbCyan, (null , false), false);\n    $setValue_14(this$static.cbGreen, (null , false), false);\n    $setValue_14(this$static.cbBrown, (null , false), false);\n  }\n}\n\nfunction $onCheckBox(this$static, e){\n  checkNotNull(castToBoolean(e.value_0))?$setText_4(this$static.cbBox, 'CheckBox 1: true'):$setText_4(this$static.cbBox, 'CheckBox 1: false');\n}\n\nfunction CheckBoxView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialRow1_0(new CheckBoxView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(1182, 67, $intern_55, CheckBoxView);\nvar Lgwt_material_design_demo_client_application_components_forms_checkbox_CheckBoxView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.checkbox', 'CheckBoxView', 1182);\nfunction $build_f_MaterialRow1_0(this$static){\n  var f_MaterialRow1, f_MaterialRow2, f_MaterialRow14, f_MaterialTitle3, f_MaterialRow4, f_MaterialColumn5, f_MaterialCheckBox6, f_MaterialCheckBox7, f_MaterialCheckBox8, f_MaterialCheckBox9, f_MaterialCheckBox10, cbBox, f_MaterialColumn11, cbBoxAll, cbBlue, cbRed, cbCyan, cbGreen, cbBrown, f_PrettyPre12, sb, f_PrettyPre13, sb_0, f_MaterialBadge15, f_MaterialTitle16, cbValue, f_MaterialRow17, btnCbValue, btnCbValueEvent, f_PrettyPre18, sb_1;\n  f_MaterialRow1 = new MaterialRow;\n  $add_9(f_MaterialRow1, (f_MaterialRow2 = new MaterialRow , $add_9(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_12(f_MaterialTitle3.paragraph, 'Checkboxes') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Check Box'))).html_0)) , fire_5(f_MaterialTitle3, 'Check Box') , f_MaterialTitle3)) , $add_9(f_MaterialRow2, (f_MaterialRow4 = new MaterialRow , $add_9(f_MaterialRow4, (f_MaterialColumn5 = new MaterialColumn , $add_9(f_MaterialColumn5, (f_MaterialCheckBox6 = new MaterialCheckBox , $setTextOrHtml(f_MaterialCheckBox6.directionalTextHelper, 'Blue') , $setValue_14(f_MaterialCheckBox6, ($clinit_Boolean() , $clinit_Boolean() , true), false) , f_MaterialCheckBox6)) , $add_9(f_MaterialColumn5, (f_MaterialCheckBox7 = new MaterialCheckBox , $setTextOrHtml(f_MaterialCheckBox7.directionalTextHelper, 'Red') , f_MaterialCheckBox7)) , $add_9(f_MaterialColumn5, (f_MaterialCheckBox8 = new MaterialCheckBox , $setTextOrHtml(f_MaterialCheckBox8.directionalTextHelper, 'Cyan') , $setType_3(f_MaterialCheckBox8, ($clinit_CheckBoxType() , FILLED)) , $setValue_14(f_MaterialCheckBox8, (null , true), false) , f_MaterialCheckBox8)) , $add_9(f_MaterialColumn5, (f_MaterialCheckBox9 = new MaterialCheckBox , $setTextOrHtml(f_MaterialCheckBox9.directionalTextHelper, 'Green') , $setValue_14(f_MaterialCheckBox9, (null , true), false) , f_MaterialCheckBox9.inputElem.disabled = true , $setStyleName_0(f_MaterialCheckBox9, getStylePrimaryName(($clinit_DOM() , f_MaterialCheckBox9.element_0)) + '-' + 'disabled', true) , f_MaterialCheckBox9)) , $add_9(f_MaterialColumn5, (f_MaterialCheckBox10 = new MaterialCheckBox , $setTextOrHtml(f_MaterialCheckBox10.directionalTextHelper, 'Brown') , f_MaterialCheckBox10.inputElem.disabled = true , $setStyleName_0(f_MaterialCheckBox10, getStylePrimaryName(f_MaterialCheckBox10.element_0) + '-' + 'disabled', true) , f_MaterialCheckBox10)) , $add_9(f_MaterialColumn5, (cbBox = new MaterialCheckBox , $setTextOrHtml(cbBox.directionalTextHelper, 'CheckBox 1: true') , $setType_3(cbBox, FILLED) , $setValue_14(cbBox, (null , true), false) , $addValueChangeHandler_3(cbBox, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , this$static.owner.cbBox = cbBox , cbBox)) , $setGrid((!f_MaterialColumn5.gridMixin && (f_MaterialColumn5.gridMixin = new GridMixin(f_MaterialColumn5)) , f_MaterialColumn5.gridMixin), 'l2') , f_MaterialColumn5)) , $add_9(f_MaterialRow4, (f_MaterialColumn11 = new MaterialColumn , $add_9(f_MaterialColumn11, (cbBoxAll = new MaterialCheckBox , $setTextOrHtml(cbBoxAll.directionalTextHelper, 'Check all') , $setType_3(cbBoxAll, FILLED) , $addValueChangeHandler_3(cbBoxAll, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2) , cbBoxAll)) , $add_9(f_MaterialColumn11, (cbBlue = new MaterialCheckBox , $setTextOrHtml(cbBlue.directionalTextHelper, 'Blue') , $setType_3(cbBlue, FILLED) , this$static.owner.cbBlue = cbBlue , cbBlue)) , $add_9(f_MaterialColumn11, (cbRed = new MaterialCheckBox , $setTextOrHtml(cbRed.directionalTextHelper, 'Red') , $setType_3(cbRed, FILLED) , this$static.owner.cbRed = cbRed , cbRed)) , $add_9(f_MaterialColumn11, (cbCyan = new MaterialCheckBox , $setTextOrHtml(cbCyan.directionalTextHelper, 'Cyan') , $setType_3(cbCyan, FILLED) , this$static.owner.cbCyan = cbCyan , cbCyan)) , $add_9(f_MaterialColumn11, (cbGreen = new MaterialCheckBox , $setTextOrHtml(cbGreen.directionalTextHelper, 'Green') , $setType_3(cbGreen, FILLED) , this$static.owner.cbGreen = cbGreen , cbGreen)) , $add_9(f_MaterialColumn11, (cbBrown = new MaterialCheckBox , $setTextOrHtml(cbBrown.directionalTextHelper, 'Brown') , $setType_3(cbBrown, FILLED) , this$static.owner.cbBrown = cbBrown , cbBrown)) , $setGrid((!f_MaterialColumn11.gridMixin && (f_MaterialColumn11.gridMixin = new GridMixin(f_MaterialColumn11)) , f_MaterialColumn11.gridMixin), 'l2') , f_MaterialColumn11)) , f_MaterialRow4)) , $add_9(f_MaterialRow2, (f_PrettyPre12 = new PrettyPre , $setHTML_0(f_PrettyPre12, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialCheckBox text=\"Blue\" value=\"true\" /&gt;<br> &lt;m:MaterialCheckBox text=\"Red\" /&gt;<br> &lt;m:MaterialCheckBox text=\"Cyan\" value=\"true\" type=\"FILLED\"/&gt;<br> &lt;m:MaterialCheckBox text=\"Green\" value=\"true\" enabled=\"false\"/&gt;<br> &lt;m:MaterialCheckBox text=\"Brown\" enabled=\"false\"/&gt;<br> &lt;m:MaterialCheckBox ui:field=\"cbBox\" text=\"CheckBox 1: true\" value=\"true\" type=\"FILLED\"/&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre12.element_0, 'lang-xml', true) , f_PrettyPre12)) , $add_9(f_MaterialRow2, (f_PrettyPre13 = new PrettyPre , $setHTML_0(f_PrettyPre13, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;m:MaterialCheckBox ui:field=\"cbBoxAll\" text=\"Check all\" type=\"FILLED\"/&gt;<br> &lt;m:MaterialCheckBox ui:field=\"cbBlue\" text=\"Blue\" type=\"FILLED\" /&gt;<br> &lt;m:MaterialCheckBox ui:field=\"cbRed\" text=\"Red\" type=\"FILLED\"/&gt;<br> &lt;m:MaterialCheckBox ui:field=\"cbCyan\" text=\"Cyan\" type=\"FILLED\"/&gt;<br> &lt;m:MaterialCheckBox ui:field=\"cbGreen\" text=\"Green\" type=\"FILLED\"/&gt;<br> &lt;m:MaterialCheckBox ui:field=\"cbBrown\" text=\"Brown\" type=\"FILLED\"/&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre13.element_0, 'lang-xml', true) , f_PrettyPre13)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2));\n  $add_9(f_MaterialRow1, (f_MaterialRow14 = new MaterialRow , $add_9(f_MaterialRow14, (f_MaterialBadge15 = new MaterialBadge , $setBackgroundColor(f_MaterialBadge15, ($clinit_Color() , AMBER_LIGHTEN_5)) , $setShadow_0((!f_MaterialBadge15.shadowMixin && (f_MaterialBadge15.shadowMixin = new ShadowMixin(f_MaterialBadge15)) , f_MaterialBadge15.shadowMixin), 1) , $setLayoutPosition(f_MaterialBadge15, ($clinit_Style$Position() , RELATIVE)) , $setInnerHTML(f_MaterialBadge15.element_0, (new SafeHtmlString(htmlEscape('FEATURE UPDATE'))).html_0) , $setFloat(f_MaterialBadge15, ($clinit_Style$Float() , RIGHT)) , $setTextColor(f_MaterialBadge15, AMBER) , f_MaterialBadge15)) , $add_9(f_MaterialRow14, (f_MaterialTitle16 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle16.header), (new SafeHtmlString(htmlEscape('CheckBox : setValue(value, fireEvents)'))).html_0) , fire_5(f_MaterialTitle16, 'CheckBox : setValue(value, fireEvents)') , f_MaterialTitle16)) , $add_9(f_MaterialRow14, (cbValue = new MaterialCheckBox , $setTextOrHtml(cbValue.directionalTextHelper, 'CheckBox') , $addValueChangeHandler_3(cbValue, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3) , this$static.owner.cbValue = cbValue , cbValue)) , $add_9(f_MaterialRow14, (f_MaterialRow17 = new MaterialRow , $add_9(f_MaterialRow17, (btnCbValue = new MaterialButton , btnCbValue.element_0.style['marginRight'] = ($clinit_Style$Unit() , '20.0px') , $setText_6(btnCbValue.span_1, 'Set Value') , btnCbValue.span_1.attached || $add_9(btnCbValue, btnCbValue.span_1) , $addClickHandler(btnCbValue, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4) , btnCbValue)) , $add_9(f_MaterialRow17, (btnCbValueEvent = new MaterialButton , $setText_6(btnCbValueEvent.span_1, 'Set Value with Event') , btnCbValueEvent.span_1.attached || $add_9(btnCbValueEvent, btnCbValueEvent.span_1) , $addClickHandler(btnCbValueEvent, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5) , btnCbValueEvent)) , f_MaterialRow17)) , $add_9(f_MaterialRow14, (f_PrettyPre18 = new PrettyPre , $setHTML_0(f_PrettyPre18, (sb_1 = new StringBuilder , sb_1.string += '\\u2003// Set Value with firing the value change event <br> checkBox.setValue(true, true); <br> // Set Value without firing the value change event <br> checkBox.setValue(false);<br> checkBox.setValue(false, false);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre18.element_0, 'lang-java', true) , f_PrettyPre18)) , setStyleName(f_MaterialRow14.element_0, 'code', true) , f_MaterialRow14));\n  return f_MaterialRow1;\n}\n\nfunction CheckBoxView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new CheckBoxView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new CheckBoxView_BinderImpl$Widgets$2(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new CheckBoxView_BinderImpl$Widgets$3;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new CheckBoxView_BinderImpl$Widgets$4(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new CheckBoxView_BinderImpl$Widgets$5(this);\n  this.owner = owner;\n}\n\ndefineClass(1663, 1, {}, CheckBoxView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_forms_checkbox_CheckBoxView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.checkbox', 'CheckBoxView_BinderImpl/Widgets', 1663);\nfunction CheckBoxView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1664, 1, $intern_45, CheckBoxView_BinderImpl$Widgets$1);\n_.onValueChange = function onValueChange_25(event_0){\n  $onCheckBox(this.this$11.owner, event_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_checkbox_CheckBoxView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.checkbox', 'CheckBoxView_BinderImpl/Widgets/1', 1664);\nfunction CheckBoxView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1665, 1, $intern_45, CheckBoxView_BinderImpl$Widgets$2);\n_.onValueChange = function onValueChange_26(event_0){\n  $onCheckAll(this.this$11.owner, event_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_checkbox_CheckBoxView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.checkbox', 'CheckBoxView_BinderImpl/Widgets/2', 1665);\nfunction CheckBoxView_BinderImpl$Widgets$3(){\n}\n\ndefineClass(1666, 1, $intern_45, CheckBoxView_BinderImpl$Widgets$3);\n_.onValueChange = function onValueChange_27(event_0){\n  fireToast('Value : ' + event_0.value_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_checkbox_CheckBoxView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.checkbox', 'CheckBoxView_BinderImpl/Widgets/3', 1666);\nfunction CheckBoxView_BinderImpl$Widgets$4(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1667, 1, $intern_64, CheckBoxView_BinderImpl$Widgets$4);\n_.onClick = function onClick_212(event_0){\n  $setValue_14(this.this$11.owner.cbValue, ($clinit_Boolean() , $clinit_Boolean() , true), false);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_checkbox_CheckBoxView_1BinderImpl$Widgets$4_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.checkbox', 'CheckBoxView_BinderImpl/Widgets/4', 1667);\nfunction CheckBoxView_BinderImpl$Widgets$5(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1668, 1, $intern_64, CheckBoxView_BinderImpl$Widgets$5);\n_.onClick = function onClick_213(event_0){\n  $setValue_14(this.this$11.owner.cbValue, ($clinit_Boolean() , $clinit_Boolean() , false), true);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_checkbox_CheckBoxView_1BinderImpl$Widgets$5_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.checkbox', 'CheckBoxView_BinderImpl/Widgets/5', 1668);\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$forms$checkbox$CheckBoxPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$checkbox$CheckBoxPresenter$_annotation$$none$$) {\n    result0 = new CheckBoxPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$components$forms$checkbox$CheckBoxView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$components$forms$checkbox$CheckBoxPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$checkbox$CheckBoxPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$checkbox$CheckBoxPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$forms$checkbox$CheckBoxView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$checkbox$CheckBoxView$_annotation$$none$$) {\n    result = new CheckBoxView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$checkbox$CheckBoxView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$checkbox$CheckBoxView$_annotation$$none$$;\n}\n\ndefineClass(751, 1, $intern_103);\n_.onSuccess_0 = function onSuccess_25(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$forms$checkbox$CheckBoxPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_1)(24);\n\n//# sourceURL=gwtmaterialdemo-24.js\n")
