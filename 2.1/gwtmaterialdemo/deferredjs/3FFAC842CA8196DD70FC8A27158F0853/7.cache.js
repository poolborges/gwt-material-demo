$wnd.gwtmaterialdemo.runAsyncCallback7("function $Ad(){}\nfunction aBd(){}\nfunction yyb(){xyb()}\nfunction s_b(a,b){a.o=b}\nfunction x_b(a){this.a=a}\nfunction z_b(a){this.a=a}\nfunction B_b(a){this.a=a}\nfunction eBd(a){this.a=a}\nfunction gBd(a){this.a=a}\nfunction Rs(a){nt((ct(),a))}\nfunction cyb(a){!!Uxb&&YB(Uxb,a)}\nfunction xyb(){xyb=gvb;wyb=new Vz}\nfunction fyb(){if(!Yxb){$yb();Yxb=true}}\nfunction p_b(a){t_b(a.k,a.o,a.i,a.f)}\nfunction q_b(a){t_b(a.k,a.o,a.i,a.f)}\nfunction YAd(a){s_b(a.b,ho(a.a));r_b(a.b)}\nfunction o_b(a){a.k.style[aif]=bif+a.e+' '+a.g}\nfunction kBd(a){var b;if(!a.d){b=new ZAd;a.d=b}return a.d}\nfunction dBd(a){this.a=new eBd(this);this.b=new gBd(this);this.c=a}\nfunction RAd(a,b,c){tJb();SJb.call(this,a,b,c,(qsd(),osd))}\nfunction ayb(a){dyb();fyb();return $xb((xyb(),xyb(),wyb),a)}\nfunction $yb(){var b=$wnd.onscroll;$wnd.onscroll=LUe(function(a){try{Yxb&&cyb((su($doc),tu($doc),new yyb))}finally{b&&b(a)}})}\nfunction jBd(a){var b,c;if(!a.c){c=new RAd(GGb(AKb(a.a)),(b=kBd(a),b),iBd(a));lJb((DKb(a.a),c),AMb(DKb(a.a)));a.c=c}return a.c}\nfunction u_b(a){if(a.a){a.k.style[VZe]=eif+a.j+'ms '+a.b;a.k.style[WZe]=eif+a.j+'ms '+a.b}else{a.k.style[VZe]='';a.k.style[WZe]=''}}\nfunction ZAd(){iKb.call(this);gKb(this,cBd(new dBd(this)));jsd(this.b);Go(this.b,new $Ad,tB?tB:(tB=new Vz));Go(this.b,new aBd,(!yB&&(yB=new Vz),yB))}\nfunction n_b(a){$doc.documentElement.style[lYe]=a.p;(fxb(),a.tb).style[pYe]=(tw(),HVe);!a.Y&&(a.Y=new e2c(a));b2c(a.Y);if(a.c){Mo(a);a.c=false}wB(a,a)}\nfunction v_b(){ERb.call(this,Lt($doc),vE(pE(Csb,1),BXe,2,6,['material-cutout']));this.d=(lyc(),Mtc);this.i=10;this.n=0.8;this.a=true;this.b='ease';this.f=false;this.c=false;this.j=500;this.k=Lt($doc);rs((fxb(),this.tb),this.k);this.tb.style[lYe]=(Ox(),ZWe);this.tb.style[pYe]=(tw(),HVe)}\nfunction t_b(a,b,c,d){var e,f,g,h,i;h=yt((ct(),bt),b)-(UPb==null&&(UPb=$wnd.$(gWe)),UPb).scrollTop();g=xt(bt,b);i=(b.offsetWidth||0)|0;f=(b.offsetHeight||0)|0;if(d){if(i!=f){e=i-f;if(i>f){f+=e;h-=e/2}else{e=-e;i+=e;g-=e/2}}}h-=c;g-=c;i+=c*2;f+=c*2;$wnd.$(a).css(nYe,h+cXe);$wnd.$(a).css(TWe,g+cXe);$wnd.$(a).css(EVe,i+cXe);$wnd.$(a).css(DVe,f+cXe)}\nfunction nt(a){var b=a.offsetLeft,c=a.offsetTop;var d=a.offsetWidth,e=a.offsetHeight;if(a.parentNode!=a.offsetParent){b-=a.parentNode.offsetLeft;c-=a.parentNode.offsetTop}var f=a.parentNode;while(f&&f.nodeType==1){b<f.scrollLeft&&(f.scrollLeft=b);b+d>f.scrollLeft+f.clientWidth&&(f.scrollLeft=b+d-f.clientWidth);c<f.scrollTop&&(f.scrollTop=c);c+e>f.scrollTop+f.clientHeight&&(f.scrollTop=c+e-f.clientHeight);var g=f.offsetLeft,h=f.offsetTop;if(f.parentNode!=f.offsetParent){g-=f.parentNode.offsetLeft;h-=f.parentNode.offsetTop}b+=g-f.scrollLeft;c+=h-f.scrollTop;f=f.parentNode}}\nfunction r_b(a){var b,c,d,e,f;c=(fxb(),a.tb).style;c[EVe]=(vy(),'100.0%');c[DVe]='100.0%';c[iWe]=(by(),jWe);c[nYe]=mYe;c[TWe]=mYe;c[qYe]='10000';a.k.className='material-cutout-focus';c=a.k.style;c[b0e]=\"''\";c[iWe]=kWe;c[qYe]='-1';if(!a.o){throw Iub(new DIe('The target element should be set before calling open().'))}Rs(a.o);a.g==null&&(d=new DRb(Lt($doc)),SQb(d,a.d),e=d.tb.style,e[iWe]=jWe,undefined,e[EVe]='1.0px',undefined,e[DVe]='1.0px',undefined,e[TWe]='-10.0px',undefined,e[nYe]='-10.0px',undefined,e[qYe]='-10000',undefined,f=joc(a.d),a.n<1&&rJe(f.substr(0,4),'rgb(')&&(f=wJe(wJe(f,'rgb(','rgba('),')',', '+a.n+')')),a.g=f,undefined);b=$doc.documentElement.style;a.p=(ct(),b)[lYe];b[lYe]=ZWe;a.e==null&&(a.e=(UPb==null&&(UPb=$wnd.$(gWe)),UPb).width()+300+cXe);u_b(a);if(a.a){a.k.style[aif]='0px 0px 0px 0rem '+a.g;Hr((Ar(),zr),new x_b(a))}else{a.k.style[aif]=bif+a.e+' '+a.g}if(a.f){a.k.style[cif]=$8e;a.k.style[dif]=$8e}else{a.k.style[cif]='';a.k.style[dif]=''}t_b(a.k,a.o,a.i,a.f);QQb(a,_xb(new z_b(a)));QQb(a,ayb(new B_b(a)));a.tb.style[pYe]='';if(!a.sb){a.c=true;vzb((nEb(),rEb(null)),a)}BB(a,a)}\nfunction cBd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=new Bjc;XPb(b,(c=new A6b,XPb(c,(e=new fld,Vs(ho(e.a),(zwb(),(new nwb(Awb(f5e))).a)),QB(e,f5e),e)),XPb(c,(f=new Bxe,tod(f,(g=new RJe,g.a+='\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;',new hwb(g.a)).a),zo((fxb(),f.tb),g5e,true),f)),zo(c.tb,u1e,true),c));XPb(b,(d=new A6b,XPb(d,(h=new fld,rod(h.b,'Click the icon below to show a material cutout.'),Vs(ho(h.a),(new nwb(Awb(gif))).a),QB(h,gif),h)),XPb(d,(i=new Yed,Wed(i,(sSc(),fNc)),_Pb(i,a.a),a.c.a=i,i)),XPb(d,(j=new v_b,XPb(j,(k=new fld,rod(k.b,'Description of your new Feature'),Vs(ho(k.a),(new nwb(Awb(hif))).a),QB(k,hif),tRb(k,(lyc(),Yxc)),k)),XPb(j,(l=new YWb,SQb(l,Yxc),dYb(l.k,B5e),l.k.ob||XPb(l,l.k),tRb(l,Mtc),_Pb(l,a.b),l)),sRb(j,(AUc(),wUc)),j.n=0.8,j.g=null,j.f=true,a.c.b=j,j)),XPb(d,(m=new Bxe,tod(m,(n=new RJe,n.a+='\\u2003&lt; -- Target Element --&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" ui:field=\"btnCutOut\"/&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;<br>',new hwb(n.a)).a),zo(m.tb,g5e,true),m)),XPb(d,(o=new Bxe,tod(o,(p=new RJe,p.a+='\\u2003@UiField MaterialCutOut cutout;<br><br>  &lt;-- Target Element --&gt;<br> @UiField MaterialIcon btnCutOut; <br><br>  @UiHandler(\"btnCutOut\")<br> void onCutOut(ClickEvent e){<br> \\u2003cutout.setTarget(btnCutOut);<br> \\u2003cutout.open();<br> }',new hwb(p.a)).a),zo(o.tb,l5e,true),o)),zo(d.tb,u1e,true),d));return b}\nvar aif='boxShadow',bif='0px 0px 0px ',cif='WebkitBorderRadius',dif='borderRadius',eif='box-shadow ',fif='gwt.material.design.addins.client.cutout',gif='Material Cut Out',hif='New Feature';var Yxb=false;fvb(758,fXe,{},yyb);_.gd=function zyb(a){q_b(fF(a,2990).a)};_.hd=function Ayb(){return wyb};var wyb;var AK=XHe(VUe,'Window/ScrollEvent',758);fvb(2266,26,YZe,v_b);_.Se=function w_b(a){this.d=a;this.g=null};_.a=false;_.c=false;_.f=false;_.i=0;_.j=0;_.n=0;var $O=XHe(fif,'MaterialCutOut',2266);fvb(2267,1,{},x_b);_.Zc=function y_b(){o_b(this.a)};var XO=XHe(fif,'MaterialCutOut/lambda$0$Type',2267);fvb(2268,1,_Ye,z_b);_.yd=function A_b(a){p_b(this.a)};var YO=XHe(fif,'MaterialCutOut/lambda$1$Type',2268);fvb(2269,1,{8:1,2990:1},B_b);var ZO=XHe(fif,'MaterialCutOut/lambda$2$Type',2269);fvb(955,56,AZe,RAd);_.Ee=function SAd(){axe();AJb(this,new cxe('CutOuts','The MaterialCutOut is an excellent component to show users about new features and important components (buttons, labels and so) on the UI.','addins/cutouts/CutOutsView',''))};var A2=XHe(E6e,'CutOutsPresenter',955);fvb(1316,65,BZe,ZAd);var G2=XHe(E6e,'CutOutsView',1316);fvb(1317,1,fZe,$Ad);_.wd=function _Ad(a){kld(new nld(vE(pE(YL,1),kVe,22,0,[])),'Close Event Fired',t$e,null)};var B2=XHe(E6e,'CutOutsView/lambda$0$Type',1317);fvb(1318,1,e2e,aBd);_.xd=function bBd(a){kld(new nld(vE(pE(YL,1),kVe,22,0,[])),'Open Event Fired',t$e,null)};var C2=XHe(E6e,'CutOutsView/lambda$1$Type',1318);fvb(1843,1,{},dBd);var F2=XHe(E6e,'CutOutsView_BinderImpl/Widgets',1843);fvb(1844,1,g$e,eBd);_.nd=function fBd(a){YAd(this.a.c)};var D2=XHe(E6e,'CutOutsView_BinderImpl/Widgets/1',1844);fvb(1845,1,g$e,gBd);_.nd=function hBd(a){n_b(this.a.c.b)};var E2=XHe(E6e,'CutOutsView_BinderImpl/Widgets/2',1845);fvb(794,1,E5e);_.Xc=function qBd(){RNb(this.b,jBd(this.a.a))};LUe(Kq)(7);\n//# sourceURL=gwtmaterialdemo-7.js\n")