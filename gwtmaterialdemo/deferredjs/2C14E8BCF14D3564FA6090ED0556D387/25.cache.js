$wnd.gwtmaterialdemo.runAsyncCallback25("function $checkIndex(this$static){\n  if (0 >= ($clinit_DOM() , this$static.element_0).options.length) {\n    throw toJs(new IndexOutOfBoundsException);\n  }\n}\n\nfunction $removeItem(this$static){\n  $checkIndex(this$static);\n  ($clinit_DOM() , this$static.element_0).remove(0);\n}\n\nfunction $reload_0(this$static){\n  $unload_2(this$static);\n  $load_6(this$static);\n}\n\nfunction $removeItem_0(this$static){\n  $remove_9(this$static.values, 0);\n  $removeItem(this$static.listBox);\n  $unload_2(this$static);\n  $load_6(this$static);\n}\n\nfunction ListBoxPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(860, 60, $intern_54, ListBoxPresenter);\n_.onReveal = function onReveal_45(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('ListBox', 'Material ListBox is another dropdown component that will set / get the value depends on the selected index', 'components/forms/listbox/ListBoxView', 'https://material.io/guidelines/components/menus.html'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_listbox_ListBoxPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.listbox', 'ListBoxPresenter', 860);\nfunction $addOption(this$static){\n  $addItem_6(this$static.lstAddOptions, 'Item added', true);\n  $setSelectedIndex_2(this$static.lstAddOptions, $getElement(this$static.lstAddOptions.listBox).options.length - 1);\n}\n\nfunction $onAddItems(this$static){\n  var i;\n  for (i = 1; i <= 100; i++) {\n    $addItem_6(this$static.lstLazy, 'Item ' + i, false);\n  }\n}\n\nfunction ListBoxView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialRow1_1(new ListBoxView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(1180, 67, $intern_55, ListBoxView);\nvar Lgwt_material_design_demo_client_application_components_forms_listbox_ListBoxView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.listbox', 'ListBoxView', 1180);\nfunction $build_f_MaterialRow1_1(this$static){\n  var f_MaterialRow1, f_MaterialRow2, f_MaterialRow15, f_MaterialRow27, f_MaterialRow39, f_MaterialRow47, f_MaterialRow50, f_MaterialRow58, f_MaterialRow71, f_MaterialTitle3, lstOptions, f_Option4, f_Option5, f_Option6, f_Option7, f_Option8, f_Option9, f_Option10, f_Option11, f_Option12, f_Option13, f_PrettyPre14, sb, f_MaterialTitle16, lstAddOptions, f_Option17, f_Option18, f_Option19, f_Option20, f_Option21, f_Option22, f_Option23, f_Option24, f_Option25, f_Option26, btnAddNewOption, f_MaterialTitle28, lstRemoveOptions, f_Option29, f_Option30, f_Option31, f_Option32, f_Option33, f_Option34, f_Option35, f_Option36, f_Option37, f_Option38, btnRemoveOption, f_MaterialBadge40, f_MaterialTitle41, lstSetValue, f_Option42, f_Option43, f_Option44, f_Option45, btnListBoxValue, btnListBoxValueEvent, f_PrettyPre46, sb_0, f_MaterialTitle48, f_PrettyPre49, sb_1, f_MaterialTitle51, f_MaterialListBox52, f_Option53, f_Option54, f_Option55, f_Option56, f_PrettyPre57, sb_2, f_MaterialTitle59, f_MaterialListBox60, f_Option61, f_Option62, f_Option63, f_Option64, f_MaterialListBox65, f_Option66, f_Option67, f_Option68, f_Option69, f_PrettyPre70, sb_3, f_MaterialBadge72, f_MaterialTitle73, lstLazy, addItems, reload, f_PrettyPre74, sb_4;\n  f_MaterialRow1 = new MaterialRow;\n  $add_9(f_MaterialRow1, (f_MaterialRow2 = new MaterialRow , $add_9(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_12(f_MaterialTitle3.paragraph, 'Select allows user input through specified options.') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('ListBox'))).html_0)) , fire_5(f_MaterialTitle3, 'ListBox') , f_MaterialTitle3)) , $add_9(f_MaterialRow2, (lstOptions = new MaterialListBox , $add_29(lstOptions, (f_Option4 = new Option_0 , ($clinit_DOM() , f_Option4.element_0).text = 'Option 1' , f_Option4)) , $add_29(lstOptions, (f_Option5 = new Option_0 , f_Option5.element_0.text = 'Option 2' , f_Option5)) , $add_29(lstOptions, (f_Option6 = new Option_0 , f_Option6.element_0.text = 'Option 3' , f_Option6)) , $add_29(lstOptions, (f_Option7 = new Option_0 , f_Option7.element_0.text = 'Option 4' , f_Option7)) , $add_29(lstOptions, (f_Option8 = new Option_0 , f_Option8.element_0.text = 'Option 5' , f_Option8)) , $add_29(lstOptions, (f_Option9 = new Option_0 , f_Option9.element_0.text = 'Option 6' , f_Option9)) , $add_29(lstOptions, (f_Option10 = new Option_0 , f_Option10.element_0.text = 'Option 7' , f_Option10)) , $add_29(lstOptions, (f_Option11 = new Option_0 , f_Option11.element_0.text = 'Option 8' , f_Option11)) , $add_29(lstOptions, (f_Option12 = new Option_0 , f_Option12.element_0.text = 'Option 9' , f_Option12)) , $add_29(lstOptions, (f_Option13 = new Option_0 , f_Option13.element_0.text = 'Option 10' , f_Option13)) , $setGrid((!lstOptions.gridMixin && (lstOptions.gridMixin = new GridMixin(lstOptions)) , lstOptions.gridMixin), 's12') , $setText_11(lstOptions.label_0, 'ListBox') , $addHandler(lstOptions, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, (!TYPE_18 && (TYPE_18 = new GwtEvent$Type) , TYPE_18)) , this$static.owner.lstOptions = lstOptions , lstOptions)) , $add_9(f_MaterialRow2, (f_PrettyPre14 = new PrettyPre , $setHTML_0(f_PrettyPre14, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialListBox placeholder=\"ListBox\"&gt; \\u2003&lt;m.html:Option text=\"Option 1\"/&gt;<br> \\u2003&lt;m.html:Option text=\"Option 2\"/&gt;<br> \\u2003&lt;m.html:Option text=\"Option 3\"/&gt;<br> \\u2003&lt;m.html:Option text=\"Option 4\"/&gt;<br> &lt;/m:MaterialListBox&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre14.element_0, 'lang-xml', true) , f_PrettyPre14)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2));\n  $add_9(f_MaterialRow1, (f_MaterialRow15 = new MaterialRow , $add_9(f_MaterialRow15, (f_MaterialTitle16 = new MaterialTitle , $setText_12(f_MaterialTitle16.paragraph, 'You can easily add an item by calling addItem(Item)') , $setInnerHTML($getElement(f_MaterialTitle16.header), (new SafeHtmlString(htmlEscape('Add Option'))).html_0) , fire_5(f_MaterialTitle16, 'Add Option') , f_MaterialTitle16)) , $add_9(f_MaterialRow15, (lstAddOptions = new MaterialListBox , $add_29(lstAddOptions, (f_Option17 = new Option_0 , f_Option17.element_0.text = 'Option 1' , f_Option17)) , $add_29(lstAddOptions, (f_Option18 = new Option_0 , f_Option18.element_0.text = 'Option 2' , f_Option18)) , $add_29(lstAddOptions, (f_Option19 = new Option_0 , f_Option19.element_0.text = 'Option 3' , f_Option19)) , $add_29(lstAddOptions, (f_Option20 = new Option_0 , f_Option20.element_0.text = 'Option 4' , f_Option20)) , $add_29(lstAddOptions, (f_Option21 = new Option_0 , f_Option21.element_0.text = 'Option 5' , f_Option21)) , $add_29(lstAddOptions, (f_Option22 = new Option_0 , f_Option22.element_0.text = 'Option 6' , f_Option22)) , $add_29(lstAddOptions, (f_Option23 = new Option_0 , f_Option23.element_0.text = 'Option 7' , f_Option23)) , $add_29(lstAddOptions, (f_Option24 = new Option_0 , f_Option24.element_0.text = 'Option 8' , f_Option24)) , $add_29(lstAddOptions, (f_Option25 = new Option_0 , f_Option25.element_0.text = 'Option 9' , f_Option25)) , $add_29(lstAddOptions, (f_Option26 = new Option_0 , f_Option26.element_0.text = 'Option 10' , f_Option26)) , $setGrid((!lstAddOptions.gridMixin && (lstAddOptions.gridMixin = new GridMixin(lstAddOptions)) , lstAddOptions.gridMixin), 's12') , $setText_11(lstAddOptions.label_0, 'ListBox') , this$static.owner.lstAddOptions = lstAddOptions , lstAddOptions)) , $add_9(f_MaterialRow15, (btnAddNewOption = new MaterialButton , $setText_6(btnAddNewOption.span_1, 'Add New Option') , btnAddNewOption.span_1.attached || $add_9(btnAddNewOption, btnAddNewOption.span_1) , $addClickHandler(btnAddNewOption, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3) , btnAddNewOption)) , setStyleName(f_MaterialRow15.element_0, 'code', true) , f_MaterialRow15));\n  $add_9(f_MaterialRow1, (f_MaterialRow27 = new MaterialRow , $add_9(f_MaterialRow27, (f_MaterialTitle28 = new MaterialTitle , $setText_12(f_MaterialTitle28.paragraph, 'You can easily remove an item by calling removeItem(0)') , $setInnerHTML($getElement(f_MaterialTitle28.header), (new SafeHtmlString(htmlEscape('Remove Option'))).html_0) , fire_5(f_MaterialTitle28, 'Remove Option') , f_MaterialTitle28)) , $add_9(f_MaterialRow27, (lstRemoveOptions = new MaterialListBox , $add_29(lstRemoveOptions, (f_Option29 = new Option_0 , f_Option29.element_0.text = 'Option 1' , f_Option29)) , $add_29(lstRemoveOptions, (f_Option30 = new Option_0 , f_Option30.element_0.text = 'Option 2' , f_Option30)) , $add_29(lstRemoveOptions, (f_Option31 = new Option_0 , f_Option31.element_0.text = 'Option 3' , f_Option31)) , $add_29(lstRemoveOptions, (f_Option32 = new Option_0 , f_Option32.element_0.text = 'Option 4' , f_Option32)) , $add_29(lstRemoveOptions, (f_Option33 = new Option_0 , f_Option33.element_0.text = 'Option 5' , f_Option33)) , $add_29(lstRemoveOptions, (f_Option34 = new Option_0 , f_Option34.element_0.text = 'Option 6' , f_Option34)) , $add_29(lstRemoveOptions, (f_Option35 = new Option_0 , f_Option35.element_0.text = 'Option 7' , f_Option35)) , $add_29(lstRemoveOptions, (f_Option36 = new Option_0 , f_Option36.element_0.text = 'Option 8' , f_Option36)) , $add_29(lstRemoveOptions, (f_Option37 = new Option_0 , f_Option37.element_0.text = 'Option 9' , f_Option37)) , $add_29(lstRemoveOptions, (f_Option38 = new Option_0 , f_Option38.element_0.text = 'Option 10' , f_Option38)) , $setGrid((!lstRemoveOptions.gridMixin && (lstRemoveOptions.gridMixin = new GridMixin(lstRemoveOptions)) , lstRemoveOptions.gridMixin), 's12') , $setText_11(lstRemoveOptions.label_0, 'ListBox') , this$static.owner.lstRemoveOptions = lstRemoveOptions , lstRemoveOptions)) , $add_9(f_MaterialRow27, (btnRemoveOption = new MaterialButton , $setText_6(btnRemoveOption.span_1, 'Remove Option') , btnRemoveOption.span_1.attached || $add_9(btnRemoveOption, btnRemoveOption.span_1) , $addClickHandler(btnRemoveOption, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4) , btnRemoveOption)) , setStyleName(f_MaterialRow27.element_0, 'code', true) , f_MaterialRow27));\n  $add_9(f_MaterialRow1, (f_MaterialRow39 = new MaterialRow , $add_9(f_MaterialRow39, (f_MaterialBadge40 = new MaterialBadge , $setBackgroundColor(f_MaterialBadge40, ($clinit_Color() , AMBER_LIGHTEN_5)) , $setShadow_0((!f_MaterialBadge40.shadowMixin && (f_MaterialBadge40.shadowMixin = new ShadowMixin(f_MaterialBadge40)) , f_MaterialBadge40.shadowMixin), 1) , $setLayoutPosition(f_MaterialBadge40, ($clinit_Style$Position() , RELATIVE)) , $setInnerHTML(f_MaterialBadge40.element_0, (new SafeHtmlString(htmlEscape('FEATURE UPDATE'))).html_0) , $setFloat(f_MaterialBadge40, ($clinit_Style$Float() , RIGHT)) , $setTextColor(f_MaterialBadge40, AMBER) , f_MaterialBadge40)) , $add_9(f_MaterialRow39, (f_MaterialTitle41 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle41.header), (new SafeHtmlString(htmlEscape('ListBox : setValue(value, fireEvents)'))).html_0) , fire_5(f_MaterialTitle41, 'ListBox : setValue(value, fireEvents)') , f_MaterialTitle41)) , $add_9(f_MaterialRow39, (lstSetValue = new MaterialListBox , $add_29(lstSetValue, (f_Option42 = new Option_0 , f_Option42.element_0.text = 'Option 1' , f_Option42)) , $add_29(lstSetValue, (f_Option43 = new Option_0 , f_Option43.element_0.text = 'Option 2' , f_Option43)) , $add_29(lstSetValue, (f_Option44 = new Option_0 , f_Option44.element_0.text = 'Option 3' , f_Option44)) , $add_29(lstSetValue, (f_Option45 = new Option_0 , f_Option45.element_0.text = 'Option 4' , f_Option45)) , $setGrid((!lstSetValue.gridMixin && (lstSetValue.gridMixin = new GridMixin(lstSetValue)) , lstSetValue.gridMixin), 's12') , $setText_11(lstSetValue.label_0, 'ListBox') , $addHandler(lstSetValue, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, (!TYPE_18 && (TYPE_18 = new GwtEvent$Type) , TYPE_18)) , this$static.owner.lstSetValue = lstSetValue , lstSetValue)) , $add_9(f_MaterialRow39, (btnListBoxValue = new MaterialButton , btnListBoxValue.element_0.style['marginRight'] = ($clinit_Style$Unit() , '20.0px') , $setText_6(btnListBoxValue.span_1, 'Set Value') , btnListBoxValue.span_1.attached || $add_9(btnListBoxValue, btnListBoxValue.span_1) , $addClickHandler(btnListBoxValue, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7) , btnListBoxValue)) , $add_9(f_MaterialRow39, (btnListBoxValueEvent = new MaterialButton , $setText_6(btnListBoxValueEvent.span_1, 'Set Value with Event') , btnListBoxValueEvent.span_1.attached || $add_9(btnListBoxValueEvent, btnListBoxValueEvent.span_1) , $addClickHandler(btnListBoxValueEvent, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames8) , btnListBoxValueEvent)) , $add_9(f_MaterialRow39, (f_PrettyPre46 = new PrettyPre , $setHTML_0(f_PrettyPre46, (sb_0 = new StringBuilder , sb_0.string += '\\u2003// Set Value with firing the value change event <br> listbox.setValue(users.get(0), true); <br> // Set Value without firing the value change event <br> listbox.setValue(users.get(1));<br> listbox.setValue(users.get(1), false);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre46.element_0, 'lang-java', true) , f_PrettyPre46)) , setStyleName(f_MaterialRow39.element_0, 'code', true) , f_MaterialRow39));\n  $add_9(f_MaterialRow1, (f_MaterialRow47 = new MaterialRow , $add_9(f_MaterialRow47, (f_MaterialTitle48 = new MaterialTitle , $setText_12(f_MaterialTitle48.paragraph, 'Add the code below to trigger any events on listbox') , $setInnerHTML($getElement(f_MaterialTitle48.header), (new SafeHtmlString(htmlEscape('Value Change Handler'))).html_0) , fire_5(f_MaterialTitle48, 'Value Change Handler') , f_MaterialTitle48)) , $add_9(f_MaterialRow47, (f_PrettyPre49 = new PrettyPre , $setHTML_0(f_PrettyPre49, (sb_1 = new StringBuilder , sb_1.string += '\\u2003@UiHandler(\"lstOptions\") void onChangeListBox(ValueChangeEvent&lt;String&gt; e) { \\u2003MaterialToast.fireToast(\"Selected Index: \" + lstOptions.getSelectedIndex()); }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre49.element_0, 'lang-java', true) , f_PrettyPre49)) , setStyleName(f_MaterialRow47.element_0, 'code', true) , f_MaterialRow47));\n  $add_9(f_MaterialRow1, (f_MaterialRow50 = new MaterialRow , $add_9(f_MaterialRow50, (f_MaterialTitle51 = new MaterialTitle , $setText_12(f_MaterialTitle51.paragraph, \"You can add an attribute old='true' to get the browser default listbox.\") , $setInnerHTML($getElement(f_MaterialTitle51.header), (new SafeHtmlString(htmlEscape('Old Browser List Box'))).html_0) , fire_5(f_MaterialTitle51, 'Old Browser List Box') , f_MaterialTitle51)) , $add_9(f_MaterialRow50, (f_MaterialListBox52 = new MaterialListBox , $add_29(f_MaterialListBox52, (f_Option53 = new Option_0 , f_Option53.element_0.text = 'Option 1' , f_Option53)) , $add_29(f_MaterialListBox52, (f_Option54 = new Option_0 , f_Option54.element_0.text = 'Option 2' , f_Option54)) , $add_29(f_MaterialListBox52, (f_Option55 = new Option_0 , f_Option55.element_0.text = 'Option 3' , f_Option55)) , $add_29(f_MaterialListBox52, (f_Option56 = new Option_0 , f_Option56.element_0.text = 'Option 4' , f_Option56)) , $setOn((!f_MaterialListBox52.toggleOldMixin && (f_MaterialListBox52.toggleOldMixin = new ToggleStyleMixin(f_MaterialListBox52.listBox, 'browser-default')) , f_MaterialListBox52.toggleOldMixin), true) , f_MaterialListBox52)) , $add_9(f_MaterialRow50, (f_PrettyPre57 = new PrettyPre , $setHTML_0(f_PrettyPre57, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m:MaterialListBox old=\"true\"&gt;<br> \\u2003&lt;m.html:Option text=\"Option 1\"/&gt;<br> \\u2003&lt;m.html:Option text=\"Option 2\"/&gt;<br> \\u2003&lt;m.html:Option text=\"Option 3\"/&gt;<br> \\u2003&lt;m.html:Option text=\"Option 4\"/&gt;<br> &lt;/m:MaterialListBox&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre57.element_0, 'lang-xml', true) , setStyleName(f_PrettyPre57.element_0, 'java', true) , f_PrettyPre57)) , setStyleName(f_MaterialRow50.element_0, 'code', true) , f_MaterialRow50));\n  $add_9(f_MaterialRow1, (f_MaterialRow58 = new MaterialRow , $add_9(f_MaterialRow58, (f_MaterialTitle59 = new MaterialTitle , $setText_12(f_MaterialTitle59.paragraph, \"You can also add an attribute disabled='true' to the select element to make the whole thing disabled. Or if you add disabled to the options, the individual options will be unselectable.\") , $setInnerHTML($getElement(f_MaterialTitle59.header), (new SafeHtmlString(htmlEscape('Disabled Styles'))).html_0) , fire_5(f_MaterialTitle59, 'Disabled Styles') , f_MaterialTitle59)) , $add_9(f_MaterialRow58, (f_MaterialListBox60 = new MaterialListBox , $add_29(f_MaterialListBox60, (f_Option61 = new Option_0 , f_Option61.element_0.text = 'Option 1' , f_Option61)) , $add_29(f_MaterialListBox60, (f_Option62 = new Option_0 , f_Option62.element_0.text = 'Option 2' , f_Option62)) , $add_29(f_MaterialListBox60, (f_Option63 = new Option_0 , f_Option63.element_0.text = 'Option 3' , f_Option63)) , $add_29(f_MaterialListBox60, (f_Option64 = new Option_0 , f_Option64.element_0.text = 'Option 4' , f_Option64)) , $setEnabled(f_MaterialListBox60.listBox, false) , $unload_2(f_MaterialListBox60) , $load_6(f_MaterialListBox60) , f_MaterialListBox60)) , $add_9(f_MaterialRow58, (f_MaterialListBox65 = new MaterialListBox , $add_29(f_MaterialListBox65, (f_Option66 = new Option_0 , f_Option66.element_0.text = 'Option 1' , f_Option66)) , $add_29(f_MaterialListBox65, (f_Option67 = new Option_0 , f_Option67.element_0.text = 'Option 2' , f_Option67)) , $add_29(f_MaterialListBox65, (f_Option68 = new Option_0 , f_Option68.element_0.text = 'Option 3' , f_Option68)) , $add_29(f_MaterialListBox65, (f_Option69 = new Option_0 , f_Option69.element_0.text = 'Option 4' , f_Option69)) , $setOn((!f_MaterialListBox65.toggleOldMixin && (f_MaterialListBox65.toggleOldMixin = new ToggleStyleMixin(f_MaterialListBox65.listBox, 'browser-default')) , f_MaterialListBox65.toggleOldMixin), true) , $setEnabled(f_MaterialListBox65.listBox, false) , $unload_2(f_MaterialListBox65) , $load_6(f_MaterialListBox65) , f_MaterialListBox65)) , $add_9(f_MaterialRow58, (f_PrettyPre70 = new PrettyPre , $setHTML_0(f_PrettyPre70, (sb_3 = new StringBuilder , sb_3.string += '\\u2003&lt;m:MaterialListBox old=\"true\" enabled=\"false\"&gt;<br> \\u2003&lt;m.html:Option text=\"Option 1\"/&gt;<br> \\u2003&lt;m.html:Option text=\"Option 2\"/&gt;<br> \\u2003&lt;m.html:Option text=\"Option 3\"/&gt;<br> \\u2003&lt;m.html:Option text=\"Option 4\"/&gt;<br><br> \\u2003&lt;m:MaterialListBox old=\"true\" enabled=\"false\"&gt;<br> \\u2003&lt;m.html:Option text=\"Option 1\"/&gt;<br> \\u2003&lt;m.html:Option text=\"Option 2\"/&gt;<br> \\u2003&lt;m.html:Option text=\"Option 3\"/&gt;<br> \\u2003&lt;m.html:Option text=\"Option 4\"/&gt;<br> &lt;/m:MaterialListBox&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre70.element_0, 'lang-xml', true) , f_PrettyPre70)) , setStyleName(f_MaterialRow58.element_0, 'code', true) , f_MaterialRow58));\n  $add_9(f_MaterialRow1, (f_MaterialRow71 = new MaterialRow , $add_9(f_MaterialRow71, (f_MaterialBadge72 = new MaterialBadge , $setBackgroundColor(f_MaterialBadge72, AMBER_LIGHTEN_5) , $setShadow_0((!f_MaterialBadge72.shadowMixin && (f_MaterialBadge72.shadowMixin = new ShadowMixin(f_MaterialBadge72)) , f_MaterialBadge72.shadowMixin), 1) , $setLayoutPosition(f_MaterialBadge72, RELATIVE) , $setInnerHTML(f_MaterialBadge72.element_0, (new SafeHtmlString(htmlEscape('FEATURE UPDATE'))).html_0) , $setFloat(f_MaterialBadge72, RIGHT) , $setTextColor(f_MaterialBadge72, AMBER) , f_MaterialBadge72)) , $add_9(f_MaterialRow71, (f_MaterialTitle73 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle73.header), (new SafeHtmlString(htmlEscape('ListBox : Lazyload'))).html_0) , fire_5(f_MaterialTitle73, 'ListBox : Lazyload') , f_MaterialTitle73)) , $add_9(f_MaterialRow71, (lstLazy = new MaterialListBox , $setGrid((!lstLazy.gridMixin && (lstLazy.gridMixin = new GridMixin(lstLazy)) , lstLazy.gridMixin), 's12') , $setText_11(lstLazy.label_0, 'ListBox') , this$static.owner.lstLazy = lstLazy , lstLazy)) , $add_9(f_MaterialRow71, (addItems = new MaterialButton , addItems.element_0.style['marginRight'] = '12.0px' , $setText_6(addItems.span_1, 'ADD 100 Items') , addItems.span_1.attached || $add_9(addItems, addItems.span_1) , $addClickHandler(addItems, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , addItems)) , $add_9(f_MaterialRow71, (reload = new MaterialButton , $setText_6(reload.span_1, 'Reload') , reload.span_1.attached || $add_9(reload, reload.span_1) , $addClickHandler(reload, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2) , reload)) , $add_9(f_MaterialRow71, (f_PrettyPre74 = new PrettyPre , $setHTML_0(f_PrettyPre74, (sb_4 = new StringBuilder , sb_4.string += '\\u2003listBox.addItem(value, false); // second param (reload) <br> lsitBox.reload();' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html_0) , setStyleName(f_PrettyPre74.element_0, 'lang-java', true) , f_PrettyPre74)) , setStyleName(f_MaterialRow71.element_0, 'code', true) , f_MaterialRow71));\n  return f_MaterialRow1;\n}\n\nfunction ListBoxView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ListBoxView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ListBoxView_BinderImpl$Widgets$2(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ListBoxView_BinderImpl$Widgets$3(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ListBoxView_BinderImpl$Widgets$4(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new ListBoxView_BinderImpl$Widgets$5(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new ListBoxView_BinderImpl$Widgets$6;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7 = new ListBoxView_BinderImpl$Widgets$7(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames8 = new ListBoxView_BinderImpl$Widgets$8(this);\n  this.owner = owner;\n}\n\ndefineClass(1666, 1, {}, ListBoxView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_forms_listbox_ListBoxView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.listbox', 'ListBoxView_BinderImpl/Widgets', 1666);\nfunction ListBoxView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1667, 1, $intern_64, ListBoxView_BinderImpl$Widgets$1);\n_.onClick = function onClick_214(event_0){\n  $onAddItems(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_listbox_ListBoxView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.listbox', 'ListBoxView_BinderImpl/Widgets/1', 1667);\nfunction ListBoxView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1668, 1, $intern_64, ListBoxView_BinderImpl$Widgets$2);\n_.onClick = function onClick_215(event_0){\n  $reload_0(this.this$11.owner.lstLazy);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_listbox_ListBoxView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.listbox', 'ListBoxView_BinderImpl/Widgets/2', 1668);\nfunction ListBoxView_BinderImpl$Widgets$3(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1669, 1, $intern_64, ListBoxView_BinderImpl$Widgets$3);\n_.onClick = function onClick_216(event_0){\n  $addOption(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_listbox_ListBoxView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.listbox', 'ListBoxView_BinderImpl/Widgets/3', 1669);\nfunction ListBoxView_BinderImpl$Widgets$4(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1670, 1, $intern_64, ListBoxView_BinderImpl$Widgets$4);\n_.onClick = function onClick_217(event_0){\n  $removeItem_0(this.this$11.owner.lstRemoveOptions);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_listbox_ListBoxView_1BinderImpl$Widgets$4_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.listbox', 'ListBoxView_BinderImpl/Widgets/4', 1670);\nfunction ListBoxView_BinderImpl$Widgets$5(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1671, 1, $intern_45, ListBoxView_BinderImpl$Widgets$5);\n_.onValueChange = function onValueChange_28(event_0){\n  fireToast('Selected Index: ' + $getElement(this.this$11.owner.lstOptions.listBox).selectedIndex);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_listbox_ListBoxView_1BinderImpl$Widgets$5_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.listbox', 'ListBoxView_BinderImpl/Widgets/5', 1671);\nfunction ListBoxView_BinderImpl$Widgets$6(){\n}\n\ndefineClass(1672, 1, $intern_45, ListBoxView_BinderImpl$Widgets$6);\n_.onValueChange = function onValueChange_29(event_0){\n  fireToast(castToString(event_0.value_0));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_listbox_ListBoxView_1BinderImpl$Widgets$6_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.listbox', 'ListBoxView_BinderImpl/Widgets/6', 1672);\nfunction ListBoxView_BinderImpl$Widgets$7(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1673, 1, $intern_64, ListBoxView_BinderImpl$Widgets$7);\n_.onClick = function onClick_218(event_0){\n  $setValue_21(this.this$11.owner.lstSetValue, 'Option 2', false);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_listbox_ListBoxView_1BinderImpl$Widgets$7_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.listbox', 'ListBoxView_BinderImpl/Widgets/7', 1673);\nfunction ListBoxView_BinderImpl$Widgets$8(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1674, 1, $intern_64, ListBoxView_BinderImpl$Widgets$8);\n_.onClick = function onClick_219(event_0){\n  $setValue_21(this.this$11.owner.lstSetValue, 'Option 3', true);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_listbox_ListBoxView_1BinderImpl$Widgets$8_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.listbox', 'ListBoxView_BinderImpl/Widgets/8', 1674);\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$forms$listbox$ListBoxPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$listbox$ListBoxPresenter$_annotation$$none$$) {\n    result0 = new ListBoxPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$components$forms$listbox$ListBoxView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$components$forms$listbox$ListBoxPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$listbox$ListBoxPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$listbox$ListBoxPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$forms$listbox$ListBoxView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$listbox$ListBoxView$_annotation$$none$$) {\n    result = new ListBoxView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$listbox$ListBoxView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$listbox$ListBoxView$_annotation$$none$$;\n}\n\ndefineClass(753, 1, $intern_102);\n_.onSuccess_0 = function onSuccess_26(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$forms$listbox$ListBoxPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_1)(25);\n\n//# sourceURL=gwtmaterialdemo-25.js\n")
