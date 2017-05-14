$wnd.gwtmaterialdemo.runAsyncCallback33("function NavBarPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(896, 57, $intern_56, NavBarPresenter);\n_.onReveal = function onReveal_53(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('NavBar', 'The navbar is fully contained by an HTML5 Nav tag. Inside a recommended container div, there are 2 main parts of the navbar. A logo or brand link, and the navigations links. You can align these links to the left or right.', 'components/navbar/NavBarView', 'https://material.io/guidelines/components/toolbars.html#'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_navbar_NavBarPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.navbar', 'NavBarPresenter', 896);\nfunction NavBarView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_29(new NavBarView_BinderImpl$Widgets(this)));\n  $addHandler_0(this.navSection, new NavBarView$lambda$0$Type, (!TYPE_19 && (TYPE_19 = new GwtEvent$Type) , TYPE_19));\n  $add_14(this.typePanel, new DemoImagePanel(new DemoImageDTO('Default NavBar', 'Provides a non-fixed navbar. Good for blogs.', 'http://i.imgur.com/rGx7XRW.gif', 'https://gwtmaterialdesign.github.io/gwt-material-patterns/snapshot/#navbar_default', 'https://github.com/GwtMaterialDesign/gwt-material-patterns/tree/release_2.0/src/main/java/com/github/gwtmaterialdesign/client/application/navbardefault/DefaultNavBarView.ui.xml')));\n  $add_14(this.typePanel, new DemoImagePanel(new DemoImageDTO('Fixed NavBar', \"By setting layoutPosition='FIXED', your navbar will be fixed on top when scrolling through the content.\", 'http://i.imgur.com/muYAAjl.gif', 'https://gwtmaterialdesign.github.io/gwt-material-patterns/snapshot/#navbar_fixed', 'https://github.com/GwtMaterialDesign/gwt-material-patterns/tree/release_2.0/src/main/java/com/github/gwtmaterialdesign/client/application/navbarfixed/FixedNavBarView.ui.xml')));\n  $add_14(this.typePanel, new DemoImagePanel(new DemoImageDTO('Tall NavBar', \"You can easily adjust the navbar's height to make it tall by height='200px',\", 'http://i.imgur.com/dtUsHRd.gif', 'https://gwtmaterialdesign.github.io/gwt-material-patterns/snapshot/#navbar_tall', 'https://github.com/GwtMaterialDesign/gwt-material-patterns/tree/release_2.0/src/main/java/com/github/gwtmaterialdesign/client/application/navbartall/TallNavBarView.ui.xml')));\n  $add_14(this.typePanel, new DemoImagePanel(new DemoImageDTO('Extended NavBar', 'Using MaterialNavContent - you can easily attached any component for the extension of your MaterialNavBar', 'http://i.imgur.com/bUYC6qs.png', 'https://gwtmaterialdesign.github.io/gwt-material-patterns/snapshot/#navbar_extend', 'https://github.com/GwtMaterialDesign/gwt-material-patterns/tree/release_2.0/src/main/java/com/github/gwtmaterialdesign/client/application/navbarextend/ExtendNavBarView.ui.xml')));\n  $add_14(this.typePanel, new DemoImagePanel(new DemoImageDTO('Tabs in NavBar', 'You can easily add tabs for secondary navigation on MaterialNavBar by attaching it on MaterialNavContent', 'http://i.imgur.com/7c3AGBs.png', 'https://gwtmaterialdesign.github.io/gwt-material-patterns/snapshot/#navbar_tab', 'https://github.com/GwtMaterialDesign/gwt-material-patterns/tree/release_2.0/src/main/java/com/github/gwtmaterialdesign/client/application/navbartab/TabNavBarView.ui.xml')));\n  $add_14(this.typePanel, new DemoImagePanel(new DemoImageDTO('Shrinkable NavBar', 'Provides a delightful scrolling effect when expanding or shrinking the navbar.', 'http://i.imgur.com/tHUDgqB.gif', 'https://gwtmaterialdesign.github.io/gwt-material-patterns/snapshot/#navbar_shrink', 'https://github.com/GwtMaterialDesign/gwt-material-patterns/tree/release_2.0/src/main/java/com/github/gwtmaterialdesign/client/application/navbarshrink/ShrinkNavBarView.ui.xml')));\n}\n\ndefineClass(1248, 61, $intern_57, NavBarView);\nvar Lgwt_material_design_demo_client_application_components_navbar_NavBarView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.navbar', 'NavBarView', 1248);\nfunction NavBarView$lambda$0$Type(){\n}\n\ndefineClass(1249, 1, $intern_65, NavBarView$lambda$0$Type);\n_.onSelection = function onSelection_14(arg0){\n  fireToast(arg0.selectedItem + ' Selected Index');\n}\n;\nvar Lgwt_material_design_demo_client_application_components_navbar_NavBarView$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.components.navbar', 'NavBarView/lambda$0$Type', 1249);\nfunction $build_f_HTMLPanel1_29(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialRow14, f_MaterialRow26, typePanel, f_MaterialRow36, f_MaterialTitle3, f_MaterialNavBar4, f_MaterialNavBrand5, f_MaterialNavSection6, f_PrettyPre13, sb, f_MaterialBadge15, f_MaterialTitle16, f_MaterialNavBar17, f_MaterialNavBrand18, navSection, f_PrettyPre25, sb_0, f_MaterialTitle27, f_MaterialNavBar28, f_MaterialNavBrand29, f_MaterialNavSection30, f_PrettyPre35, sb_1, f_MaterialTitle37, f_PrettyPre38, sb_2, f_MaterialAnchorButton39, f_MaterialLink7, f_MaterialLink8, f_MaterialTooltip9, f_MaterialLink10, f_MaterialTooltip11, f_MaterialLink12, f_MaterialLink19, f_MaterialLink20, f_MaterialTooltip21, f_MaterialLink22, f_MaterialTooltip23, f_MaterialLink24, f_MaterialTooltip31, f_MaterialLink32, f_MaterialTooltip33, f_MaterialLink34;\n  f_HTMLPanel1 = new HTMLPanel($html5_4(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_14(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_13(f_MaterialTitle3.paragraph, 'Based on material links you can add icons, link with icons or link only and apply ripple effect by adding waves attribute.') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Links ,Icons, and Waves'))).html_0)) , f_MaterialTitle3)) , $add_14(f_MaterialRow2, (f_MaterialNavBar4 = new MaterialNavBar , $add_36(f_MaterialNavBar4, (f_MaterialNavBrand5 = new MaterialNavBrand , $add_14(f_MaterialNavBrand5, f_MaterialNavBrand5.container) , $getElement(f_MaterialNavBrand5.container).textContent = 'Title' , f_MaterialNavBrand5.element_0.setAttribute('href', '#Test') , $setFloat(f_MaterialNavBrand5, ($clinit_Style$Float() , LEFT)) , f_MaterialNavBrand5.element_0.style['marginLeft'] = ($clinit_Style$Unit() , '60.0px') , f_MaterialNavBrand5)) , $add_36(f_MaterialNavBar4, (f_MaterialNavSection6 = new MaterialNavSection , $add_19(f_MaterialNavSection6, new ListItem_0((f_MaterialLink7 = new MaterialLink , $setWaves(f_MaterialLink7, ($clinit_WavesType() , LIGHT)) , $setIconType_0(f_MaterialLink7, ($clinit_IconType() , ACCOUNT_CIRCLE)) , $setIconPosition(f_MaterialLink7, ($clinit_IconPosition() , LEFT_6)) , $setText_9(f_MaterialLink7.span_1, 'Account') , f_MaterialLink7.span_1.attached || $add_14(f_MaterialLink7, f_MaterialLink7.span_1) , $setTextColor(f_MaterialLink7, ($clinit_Color() , WHITE)) , f_MaterialLink7))) , $add_19(f_MaterialNavSection6, new ListItem_0((f_MaterialLink8 = new MaterialLink , $setWaves(f_MaterialLink8, LIGHT) , $setIconType_0(f_MaterialLink8, AUTORENEW) , $setIconPosition(f_MaterialLink8, LEFT_6) , $setText_9(f_MaterialLink8.span_1, 'Refresh') , f_MaterialLink8.span_1.attached || $add_14(f_MaterialLink8, f_MaterialLink8.span_1) , $setTextColor(f_MaterialLink8, WHITE) , f_MaterialLink8))) , $add_0(f_MaterialNavSection6, (f_MaterialTooltip9 = new MaterialTooltip , $add_41(f_MaterialTooltip9, (f_MaterialLink10 = new MaterialLink , $setWaves(f_MaterialLink10, LIGHT) , $setIconType_0(f_MaterialLink10, SEARCH_0) , $setTextColor(f_MaterialLink10, WHITE) , f_MaterialLink10)) , f_MaterialTooltip9.text_0 = 'Menu' , $getElement(f_MaterialTooltip9.widget).setAttribute('data-tooltip', 'Menu') , f_MaterialTooltip9)) , $add_0(f_MaterialNavSection6, (f_MaterialTooltip11 = new MaterialTooltip , $add_41(f_MaterialTooltip11, (f_MaterialLink12 = new MaterialLink , $setWaves(f_MaterialLink12, LIGHT) , $setIconType_0(f_MaterialLink12, MORE_VERT) , $setTextColor(f_MaterialLink12, WHITE) , f_MaterialLink12)) , f_MaterialTooltip11.text_0 = 'Starter' , $getElement(f_MaterialTooltip11.widget).setAttribute('data-tooltip', 'Starter') , f_MaterialTooltip11)) , $setFloat(f_MaterialNavSection6, RIGHT) , f_MaterialNavSection6)) , f_MaterialNavBar4)) , $add_14(f_MaterialRow2, (f_PrettyPre13 = new PrettyPre , $setHTML_0(f_PrettyPre13, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialNavBar&gt;<br><br> \\u2003&lt;m:MaterialNavBrand href=\"#Test\" float=\"LEFT\" text=\"App Title\"/&gt;<br> \\u2003&lt;m:MaterialNavSection float=\"RIGHT\"&gt;<br> \\u2003\\u2003&lt;m:MaterialLink iconType=\"ACCOUNT_CIRCLE\" iconPosition=\"LEFT\" text=\"Account\" textColor=\"WHITE\" waves=\"LIGHT\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialLink iconType=\"AUTORENEW\" iconPosition=\"LEFT\" text=\"Refresh\" textColor=\"WHITE\" waves=\"LIGHT\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialTooltip text=\"Menu\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLink iconType=\"SEARCH\" textColor=\"WHITE\" waves=\"LIGHT\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialTooltip&gt;<br> \\u2003\\u2003&lt;m:MaterialTooltip text=\"Starter\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLink iconType=\"MORE_VERT\" textColor=\"WHITE\" waves=\"LIGHT\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialTooltip&gt;<br> \\u2003&lt;/m:MaterialNavSection&gt;<br><br> &lt;/m:MaterialNavBar&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre13.element_0, 'lang-xml', true) , f_PrettyPre13)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow14 = new MaterialRow , $add_14(f_MaterialRow14, (f_MaterialBadge15 = new MaterialBadge , $setBackgroundColor(f_MaterialBadge15, BLUE_LIGHTEN_5) , $setShadow_0((!f_MaterialBadge15.shadowMixin && (f_MaterialBadge15.shadowMixin = new ShadowMixin(f_MaterialBadge15)) , f_MaterialBadge15.shadowMixin), 1) , $setLayoutPosition(f_MaterialBadge15, ($clinit_Style$Position() , RELATIVE)) , $setInnerHTML(f_MaterialBadge15.element_0, (new SafeHtmlString(htmlEscape('NEW FEATURE'))).html_0) , $setFloat(f_MaterialBadge15, RIGHT) , $setTextColor(f_MaterialBadge15, BLUE) , f_MaterialBadge15)) , $add_14(f_MaterialRow14, (f_MaterialTitle16 = new MaterialTitle , $setText_13(f_MaterialTitle16.paragraph, 'We have provided a selection event to easily get the selected index.') , $setInnerHTML($getElement(f_MaterialTitle16.header), (new SafeHtmlString(htmlEscape('Selection Event'))).html_0) , f_MaterialTitle16)) , $add_14(f_MaterialRow14, (f_MaterialNavBar17 = new MaterialNavBar , $add_36(f_MaterialNavBar17, (f_MaterialNavBrand18 = new MaterialNavBrand , $add_14(f_MaterialNavBrand18, f_MaterialNavBrand18.container) , $getElement(f_MaterialNavBrand18.container).textContent = 'Title' , f_MaterialNavBrand18.element_0.setAttribute('href', '#Test') , $setFloat(f_MaterialNavBrand18, LEFT) , f_MaterialNavBrand18.element_0.style['marginLeft'] = '60.0px' , f_MaterialNavBrand18)) , $add_36(f_MaterialNavBar17, (navSection = new MaterialNavSection , $add_19(navSection, new ListItem_0((f_MaterialLink19 = new MaterialLink , $setWaves(f_MaterialLink19, LIGHT) , $setIconType_0(f_MaterialLink19, ACCOUNT_CIRCLE) , $setIconPosition(f_MaterialLink19, LEFT_6) , $setText_9(f_MaterialLink19.span_1, 'Account') , f_MaterialLink19.span_1.attached || $add_14(f_MaterialLink19, f_MaterialLink19.span_1) , $setTextColor(f_MaterialLink19, WHITE) , f_MaterialLink19))) , $add_19(navSection, new ListItem_0((f_MaterialLink20 = new MaterialLink , $setWaves(f_MaterialLink20, LIGHT) , $setIconType_0(f_MaterialLink20, AUTORENEW) , $setIconPosition(f_MaterialLink20, LEFT_6) , $setText_9(f_MaterialLink20.span_1, 'Refresh') , f_MaterialLink20.span_1.attached || $add_14(f_MaterialLink20, f_MaterialLink20.span_1) , $setTextColor(f_MaterialLink20, WHITE) , f_MaterialLink20))) , $add_0(navSection, (f_MaterialTooltip21 = new MaterialTooltip , $add_41(f_MaterialTooltip21, (f_MaterialLink22 = new MaterialLink , $setWaves(f_MaterialLink22, LIGHT) , $setIconType_0(f_MaterialLink22, SEARCH_0) , $setTextColor(f_MaterialLink22, WHITE) , f_MaterialLink22)) , f_MaterialTooltip21.text_0 = 'Menu' , $getElement(f_MaterialTooltip21.widget).setAttribute('data-tooltip', 'Menu') , f_MaterialTooltip21)) , $add_0(navSection, (f_MaterialTooltip23 = new MaterialTooltip , $add_41(f_MaterialTooltip23, (f_MaterialLink24 = new MaterialLink , $setWaves(f_MaterialLink24, LIGHT) , $setIconType_0(f_MaterialLink24, MORE_VERT) , $setTextColor(f_MaterialLink24, WHITE) , f_MaterialLink24)) , f_MaterialTooltip23.text_0 = 'Starter' , $getElement(f_MaterialTooltip23.widget).setAttribute('data-tooltip', 'Starter') , f_MaterialTooltip23)) , $setFloat(navSection, RIGHT) , this$static.owner.navSection = navSection , navSection)) , f_MaterialNavBar17.element_0.style['width'] = '100%' , f_MaterialNavBar17)) , $add_14(f_MaterialRow14, (f_PrettyPre25 = new PrettyPre , $setHTML_0(f_PrettyPre25, (sb_0 = new StringBuilder , sb_0.string += 'navSection.addSelectionHandler(selectionEvent -&gt; MaterialToast.fireToast(selectionEvent.getSelectedItem() + \" Selected Index\"));' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre25.element_0, 'lang-java', true) , f_PrettyPre25)) , setStyleName(f_MaterialRow14.element_0, 'code', true) , f_MaterialRow14), $get_0(this$static.domId1Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow26 = new MaterialRow , $add_14(f_MaterialRow26, (f_MaterialTitle27 = new MaterialTitle , $setText_13(f_MaterialTitle27.paragraph, \"Add align='right' to your nav brand and align='left' to your nav section\") , $setInnerHTML($getElement(f_MaterialTitle27.header), (new SafeHtmlString(htmlEscape('Alignment'))).html_0) , f_MaterialTitle27)) , $add_14(f_MaterialRow26, (f_MaterialNavBar28 = new MaterialNavBar , $add_36(f_MaterialNavBar28, (f_MaterialNavBrand29 = new MaterialNavBrand , $add_14(f_MaterialNavBrand29, f_MaterialNavBrand29.container) , $getElement(f_MaterialNavBrand29.container).textContent = 'App Title' , f_MaterialNavBrand29.element_0.setAttribute('href', '#Test') , $setFloat(f_MaterialNavBrand29, RIGHT) , f_MaterialNavBrand29)) , $add_36(f_MaterialNavBar28, (f_MaterialNavSection30 = new MaterialNavSection , $add_0(f_MaterialNavSection30, (f_MaterialTooltip31 = new MaterialTooltip , $add_41(f_MaterialTooltip31, (f_MaterialLink32 = new MaterialLink , $setIconType_0(f_MaterialLink32, SEARCH_0) , $setTextColor(f_MaterialLink32, WHITE) , f_MaterialLink32)) , f_MaterialTooltip31.text_0 = 'Menu' , $getElement(f_MaterialTooltip31.widget).setAttribute('data-tooltip', 'Menu') , f_MaterialTooltip31)) , $add_0(f_MaterialNavSection30, (f_MaterialTooltip33 = new MaterialTooltip , $add_41(f_MaterialTooltip33, (f_MaterialLink34 = new MaterialLink , $setIconType_0(f_MaterialLink34, MORE_VERT) , $setTextColor(f_MaterialLink34, WHITE) , f_MaterialLink34)) , f_MaterialTooltip33.text_0 = 'Starter' , $getElement(f_MaterialTooltip33.widget).setAttribute('data-tooltip', 'Starter') , f_MaterialTooltip33)) , $setFloat(f_MaterialNavSection30, LEFT) , f_MaterialNavSection30)) , f_MaterialNavBar28.element_0.style['width'] = '100%' , f_MaterialNavBar28)) , $add_14(f_MaterialRow26, (f_PrettyPre35 = new PrettyPre , $setHTML_0(f_PrettyPre35, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialNavBar width=\"100%\"&gt;<br><br> \\u2003&lt;m:MaterialNavBrand href=\"#Test\" float=\"RIGHT\" text=\"App Title\" /&gt;<br><br> \\u2003&lt;m:MaterialNavSection float=\"LEFT\"&gt;<br> \\u2003\\u2003&lt;m:MaterialTooltip text=\"Menu\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLink iconType=\"SEARCH\" textColor=\"WHITE\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialTooltip&gt;<br> \\u2003\\u2003&lt;m:MaterialTooltip text=\"Starter\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLink iconType=\"MORE_VERT\" textColor=\"WHITE\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialTooltip&gt;<br> \\u2003&lt;/m:MaterialNavSection&gt;<br><br> &lt;/m:MaterialNavBar&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre35.element_0, 'lang-xml', true) , f_PrettyPre35)) , setStyleName(f_MaterialRow26.element_0, 'code', true) , f_MaterialRow26), $get_0(this$static.domId2Element));\n  $addAndReplaceElement(f_HTMLPanel1, (typePanel = new MaterialPanel , this$static.owner.typePanel = typePanel , typePanel), $get_0(this$static.domId3Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow36 = new MaterialRow , $add_14(f_MaterialRow36, (f_MaterialTitle37 = new MaterialTitle , $setText_13(f_MaterialTitle37.paragraph, 'It is mandatory to wrap your MaterialNavBar with MaterialHeader to have a better and correct behavior of your navbar.') , $setInnerHTML($getElement(f_MaterialTitle37.header), (new SafeHtmlString(htmlEscape('Note'))).html_0) , f_MaterialTitle37)) , $add_14(f_MaterialRow36, (f_PrettyPre38 = new PrettyPre , $setHTML_0(f_PrettyPre38, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m:MaterialHeader&gt;<br> \\u2003&lt;m:MaterialNavBar&gt;<br> \\u2003\\u2003&lt;-- Navbar content goes here --&gt;<br> \\u2003&lt;/m:MaterialHeader&gt;<br> &lt;/m:MaterialNavBar&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre38.element_0, 'lang-xml', true) , f_PrettyPre38)) , $add_14(f_MaterialRow36, (f_MaterialAnchorButton39 = new MaterialAnchorButton , $setText_9(f_MaterialAnchorButton39.span_1, 'See Blue Print') , f_MaterialAnchorButton39.span_1.attached || $add_14(f_MaterialAnchorButton39, f_MaterialAnchorButton39.span_1) , f_MaterialAnchorButton39.element_0.setAttribute('href', '#blueprint') , f_MaterialAnchorButton39.element_0.setAttribute('target', '_blank') , f_MaterialAnchorButton39)) , setStyleName(f_MaterialRow36.element_0, 'code', true) , f_MaterialRow36), $get_0(this$static.domId4Element));\n  return f_HTMLPanel1;\n}\n\nfunction NavBarView_BinderImpl$Widgets(owner){\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n}\n\ndefineClass(1682, 1, {}, NavBarView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_navbar_NavBarView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.navbar', 'NavBarView_BinderImpl/Widgets', 1682);\nfunction $html5_4(arg0, arg1, arg2, arg3, arg4){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_4(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_4(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_4(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$_annotation$$none$$) {\n    result0 = new NavBarPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarView$_annotation$$none$$) {\n    result = new NavBarView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarView$_annotation$$none$$;\n}\n\ndefineClass(805, 1, $intern_110);\n_.onSuccess_0 = function onSuccess_34(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$navbar$NavBarPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(33);\n\n//# sourceURL=gwtmaterialdemo-33.js\n")
