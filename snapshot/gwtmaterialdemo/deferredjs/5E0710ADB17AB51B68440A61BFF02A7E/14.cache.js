$wnd.gwtmaterialdemo.runAsyncCallback14("function $setSelectionType(this$static, selectionType){\n  this$static.selectionType = selectionType;\n}\n\nfunction PickersPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(530, 51, $intern_40, PickersPresenter);\n_.onReveal = function onReveal_19(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Pickers', 'Pickers provide a simple way to select a single value from a pre-determined set.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersPresenter', 530);\nfunction PickersView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_14(new PickersView_BinderImpl$Widgets));\n}\n\ndefineClass(673, 55, $intern_41, PickersView);\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView', 673);\nfunction PickersView_BinderImpl(){\n}\n\ndefineClass(868, 1, {}, PickersView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView_BinderImpl', 868);\nfunction $build_f_HTMLPanel1_14(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, dp, f_PrettyPre3, f_MaterialTitle4, f_MaterialDatePicker5, f_PrettyPre6, f_MaterialTitle7, tp, f_PrettyPre8, sb, sb_0, sb_1;\n  f_HTMLPanel1 = new HTMLPanel($html4_1(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Date Picker') , $setText_4(f_MaterialTitle2.paragraph, 'Material Datepicker') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (dp = new MaterialDatePicker , dp.placeholder = 'Date' , dp), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre3 = new PrettyPre , $setHTML(f_PrettyPre3, (sb = new StringBuilder , sb.string += '&lt;m:MaterialDatePicker ui:field=\"dp\" placeholder=\"Date\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(f_PrettyPre3.element, 'lang-xml', true) , setStyleName(f_PrettyPre3.element, 'z-depth-1', true) , f_PrettyPre3), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle4 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle4.header), 'Date Picker Selection Types') , $setText_4(f_MaterialTitle4.paragraph, \"You can set easily the selection type of your datepicker by adding an attribute, selectionType='YEAR'. Here is the available formats [DAY, MONTH_DAY, YEAR_MONTH_DAY, YEAR]\") , f_MaterialTitle4), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialDatePicker5 = new MaterialDatePicker , f_MaterialDatePicker5.placeholder = 'Date' , $setSelectionType(f_MaterialDatePicker5, ($clinit_MaterialDatePicker$MaterialDatePickerType() , YEAR)) , f_MaterialDatePicker5), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre6 = new PrettyPre , $setHTML(f_PrettyPre6, (sb_0 = new StringBuilder , sb_0.string += '&lt;m:MaterialDatePicker placeholder=\"Date\" selectionType=\"YEAR\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(f_PrettyPre6.element, 'lang-xml', true) , setStyleName(f_PrettyPre6.element, 'z-depth-1', true) , f_PrettyPre6), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle7 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle7.header), 'Time Picker') , $setText_4(f_MaterialTitle7.paragraph, 'Tap between the hour and minute label in the title bar to switch between the hour or minute view. Additionally, tap on the AM/PM label in the title bar to switch between AM or PM (in 12-hour clock mode).') , f_MaterialTitle7), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (tp = new MaterialTimePicker , $setAttribute($getElement(tp.input_0), 'placeholder', 'Time') , tp), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre8 = new PrettyPre , $setHTML(f_PrettyPre8, (sb_1 = new StringBuilder , sb_1.string += '&lt;m:MaterialTimePicker ui:field=\"tp\" placeholder=\"Snooze Time\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , setStyleName(f_PrettyPre8.element, 'lang-xml', true) , setStyleName(f_PrettyPre8.element, 'z-depth-1', true) , f_PrettyPre8), $get_0(this$static.domId8Element));\n  return f_HTMLPanel1;\n}\n\nfunction PickersView_BinderImpl$Widgets(){\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n}\n\ndefineClass(869, 1, {}, PickersView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView_BinderImpl/Widgets', 869);\nfunction $html4_1(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$_annotation$$none$$) {\n    result = new PickersPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersView$_annotation$$none$$) {\n    result = new PickersView(new PickersView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersView$_annotation$$none$$;\n}\n\ndefineClass(477, 1, $intern_55);\n_.onSuccess_0 = function onSuccess_13(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(14);\n\n//# sourceURL=gwtmaterialdemo-14.js\n")
