$wnd.gwtmaterialdemo.runAsyncCallback28("function $getValue_4(this$static){\n  return $clinit_Boolean() , $getElement(this$static.input_0).hasAttribute('checked')?true:false;\n}\n\nfunction SwitchPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(863, 60, $intern_53, SwitchPresenter);\n_.onReveal = function onReveal_48(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Switch', 'On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it\\u2019s in, should be made clear from the corresponding inline label. Switches take on the same visual properties of the radio button.', 'components/forms/switches/SwitchView', 'https://material.io/guidelines/components/selection-controls.html#selection-controls-switch'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_switches_SwitchPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.switches', 'SwitchPresenter', 863);\nfunction $onSwitchValue(this$static){\n  checkNotNull($getValue_4(this$static.switchSetValue))?$setValue_24(this$static.switchSetValue, ($clinit_Boolean() , $clinit_Boolean() , false), false):$setValue_24(this$static.switchSetValue, ($clinit_Boolean() , $clinit_Boolean() , true), false);\n}\n\nfunction $onSwitchValueEvent(this$static){\n  checkNotNull($getValue_4(this$static.switchSetValue))?$setValue_24(this$static.switchSetValue, ($clinit_Boolean() , $clinit_Boolean() , false), true):$setValue_24(this$static.switchSetValue, ($clinit_Boolean() , $clinit_Boolean() , true), true);\n}\n\nfunction SwitchView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialRow1_4(new SwitchView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(1183, 67, $intern_54, SwitchView);\nvar Lgwt_material_design_demo_client_application_components_forms_switches_SwitchView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.switches', 'SwitchView', 1183);\nfunction $build_f_MaterialRow1_4(this$static){\n  var f_MaterialRow1, f_MaterialRow2, f_MaterialRow7, f_MaterialTitle3, switch1, switch2, f_MaterialSwitch4, f_MaterialSwitch5, f_PrettyPre6, sb, f_MaterialBadge8, f_MaterialTitle9, switchEvent, f_PrettyPre10, sb_0, f_MaterialTitle11, switchSetValue, btnSwitchValue, btnSwitchValueEvent, f_PrettyPre12, sb_1;\n  f_MaterialRow1 = new MaterialRow;\n  $add_9(f_MaterialRow1, (f_MaterialRow2 = new MaterialRow , $add_9(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Switches'))).html_0)) , fire_5(f_MaterialTitle3, 'Switches') , f_MaterialTitle3)) , $add_9(f_MaterialRow2, (switch1 = new MaterialSwitch , $setGrid((!switch1.gridMixin && (switch1.gridMixin = new GridMixin(switch1)) , switch1.gridMixin), 'l0') , $setValue_24(switch1, ($clinit_Boolean() , $clinit_Boolean() , true), false) , switch1)) , $add_9(f_MaterialRow2, (switch2 = new MaterialSwitch , $setGrid((!switch2.gridMixin && (switch2.gridMixin = new GridMixin(switch2)) , switch2.gridMixin), 'l0') , $setValue_24(switch2, (null , false), false) , switch2)) , $add_9(f_MaterialRow2, (f_MaterialSwitch4 = new MaterialSwitch , $setGrid((!f_MaterialSwitch4.gridMixin && (f_MaterialSwitch4.gridMixin = new GridMixin(f_MaterialSwitch4)) , f_MaterialSwitch4.gridMixin), 'l0') , $setValue_24(f_MaterialSwitch4, (null , true), false) , $setEnabled_5(f_MaterialSwitch4, false) , f_MaterialSwitch4)) , $add_9(f_MaterialRow2, (f_MaterialSwitch5 = new MaterialSwitch , $setGrid((!f_MaterialSwitch5.gridMixin && (f_MaterialSwitch5.gridMixin = new GridMixin(f_MaterialSwitch5)) , f_MaterialSwitch5.gridMixin), 'l0') , $setEnabled_5(f_MaterialSwitch5, false) , f_MaterialSwitch5)) , $add_9(f_MaterialRow2, (f_PrettyPre6 = new PrettyPre , $setHTML_0(f_PrettyPre6, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialSwitch ui:field=\"switch1\" value=\"true\" grid=\"l0\"/&gt;<br> &lt;m:MaterialSwitch ui:field=\"switch2\" value=\"false\" grid=\"l0\"/&gt;<br> &lt;m:MaterialSwitch enabled=\"false\" value=\"true\" grid=\"l0\"/&gt;<br> &lt;m:MaterialSwitch enabled=\"false\" grid=\"l0\"/&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(($clinit_DOM() , f_PrettyPre6.element_0), 'lang-xml', true) , f_PrettyPre6)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2));\n  $add_9(f_MaterialRow1, (f_MaterialRow7 = new MaterialRow , $add_9(f_MaterialRow7, (f_MaterialBadge8 = new MaterialBadge , $setBackgroundColor(f_MaterialBadge8, ($clinit_Color() , AMBER_LIGHTEN_5)) , $setShadow_0((!f_MaterialBadge8.shadowMixin && (f_MaterialBadge8.shadowMixin = new ShadowMixin(f_MaterialBadge8)) , f_MaterialBadge8.shadowMixin), 1) , $setLayoutPosition(f_MaterialBadge8, ($clinit_Style$Position() , RELATIVE)) , $setInnerHTML(f_MaterialBadge8.element_0, (new SafeHtmlString(htmlEscape('FEATURE UPDATE'))).html_0) , $setFloat(f_MaterialBadge8, ($clinit_Style$Float() , RIGHT)) , $setTextColor(f_MaterialBadge8, AMBER) , f_MaterialBadge8)) , $add_9(f_MaterialRow7, (f_MaterialTitle9 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle9.header), (new SafeHtmlString(htmlEscape('Switch : Value Change Event'))).html_0) , fire_5(f_MaterialTitle9, 'Switch : Value Change Event') , f_MaterialTitle9)) , $add_9(f_MaterialRow7, (switchEvent = new MaterialSwitch , $setText_6(switchEvent.onLabel, 'On') , $setText_6(switchEvent.offLabel, 'Off') , $addHandler(switchEvent, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (!TYPE_18 && (TYPE_18 = new GwtEvent$Type) , TYPE_18)) , switchEvent)) , $add_9(f_MaterialRow7, (f_PrettyPre10 = new PrettyPre , $setHTML_0(f_PrettyPre10, (sb_0 = new StringBuilder , sb_0.string += '\\u2003@UiHandler(\"mSwitch\") <br> void onValueChange(ValueChangeEvent&lt;Boolean&gt; e) { <br> \\u2003MaterialToast.fireToast(\"Value \" + e.getValue()); <br> }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre10.element_0, 'lang-java', true) , f_PrettyPre10)) , $add_9(f_MaterialRow7, (f_MaterialTitle11 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle11.header), (new SafeHtmlString(htmlEscape('Switch : setValue(value, fireEvents)'))).html_0) , fire_5(f_MaterialTitle11, 'Switch : setValue(value, fireEvents)') , f_MaterialTitle11)) , $add_9(f_MaterialRow7, (switchSetValue = new MaterialSwitch , $setText_6(switchSetValue.onLabel, 'On') , $setText_6(switchSetValue.offLabel, 'Off') , $addHandler(switchSetValue, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, (!TYPE_18 && (TYPE_18 = new GwtEvent$Type) , TYPE_18)) , this$static.owner.switchSetValue = switchSetValue , switchSetValue)) , $add_9(f_MaterialRow7, (btnSwitchValue = new MaterialButton , btnSwitchValue.element_0.style['marginRight'] = ($clinit_Style$Unit() , '20.0px') , $setText_6(btnSwitchValue.span_1, 'Set Value') , btnSwitchValue.span_1.attached || $add_9(btnSwitchValue, btnSwitchValue.span_1) , $addClickHandler(btnSwitchValue, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2) , btnSwitchValue)) , $add_9(f_MaterialRow7, (btnSwitchValueEvent = new MaterialButton , $setText_6(btnSwitchValueEvent.span_1, 'Set Value with Event') , btnSwitchValueEvent.span_1.attached || $add_9(btnSwitchValueEvent, btnSwitchValueEvent.span_1) , $addClickHandler(btnSwitchValueEvent, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3) , btnSwitchValueEvent)) , $add_9(f_MaterialRow7, (f_PrettyPre12 = new PrettyPre , $setHTML_0(f_PrettyPre12, (sb_1 = new StringBuilder , sb_1.string += '\\u2003// Set Value with firing the value change event <br> mSwitch.setValue(true, true); <br> // Set Value without firing the value change event <br> mSwitch.setValue(true);<br> mSwitch.setValue(true, false);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre12.element_0, 'lang-java', true) , f_PrettyPre12)) , setStyleName(f_MaterialRow7.element_0, 'code', true) , f_MaterialRow7));\n  return f_MaterialRow1;\n}\n\nfunction SwitchView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new SwitchView_BinderImpl$Widgets$1;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new SwitchView_BinderImpl$Widgets$2(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new SwitchView_BinderImpl$Widgets$3(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new SwitchView_BinderImpl$Widgets$4;\n  this.owner = owner;\n}\n\ndefineClass(1684, 1, {}, SwitchView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_forms_switches_SwitchView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.switches', 'SwitchView_BinderImpl/Widgets', 1684);\nfunction SwitchView_BinderImpl$Widgets$1(){\n}\n\ndefineClass(1685, 1, $intern_44, SwitchView_BinderImpl$Widgets$1);\n_.onValueChange = function onValueChange_33(event_0){\n  fireToast('Value ' + event_0.value_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_switches_SwitchView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.switches', 'SwitchView_BinderImpl/Widgets/1', 1685);\nfunction SwitchView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1686, 1, $intern_63, SwitchView_BinderImpl$Widgets$2);\n_.onClick = function onClick_224(event_0){\n  $onSwitchValue(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_switches_SwitchView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.switches', 'SwitchView_BinderImpl/Widgets/2', 1686);\nfunction SwitchView_BinderImpl$Widgets$3(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1687, 1, $intern_63, SwitchView_BinderImpl$Widgets$3);\n_.onClick = function onClick_225(event_0){\n  $onSwitchValueEvent(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_switches_SwitchView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.switches', 'SwitchView_BinderImpl/Widgets/3', 1687);\nfunction SwitchView_BinderImpl$Widgets$4(){\n}\n\ndefineClass(1688, 1, $intern_44, SwitchView_BinderImpl$Widgets$4);\n_.onValueChange = function onValueChange_34(event_0){\n  fireToast('Value ' + event_0.value_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_switches_SwitchView_1BinderImpl$Widgets$4_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.switches', 'SwitchView_BinderImpl/Widgets/4', 1688);\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$forms$switches$SwitchPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$switches$SwitchPresenter$_annotation$$none$$) {\n    result0 = new SwitchPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$components$forms$switches$SwitchView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$components$forms$switches$SwitchPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$switches$SwitchPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$switches$SwitchPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$forms$switches$SwitchView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$switches$SwitchView$_annotation$$none$$) {\n    result = new SwitchView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$switches$SwitchView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$switches$SwitchView$_annotation$$none$$;\n}\n\ndefineClass(759, 1, $intern_101);\n_.onSuccess_0 = function onSuccess_29(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$forms$switches$SwitchPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_1)(28);\n\n//# sourceURL=gwtmaterialdemo-28.js\n")
