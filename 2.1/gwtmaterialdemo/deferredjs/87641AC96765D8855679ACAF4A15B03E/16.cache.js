$wnd.gwtmaterialdemo.runAsyncCallback16("function ycc(){}\nfunction Dcc(){}\nfunction dLd(){}\nfunction fLd(a){this.a=a}\nfunction hLd(a){this.a=a}\nfunction Acc(a){this.a=a}\nfunction Gcc(){Gcc=Eub;Ccc=new Dcc}\nfunction oLd(a){var b;if(!a.d){b=new cLd;a.d=b}return a.d}\nfunction aLd(a){Tmd(Zmd(new $md,(Dod(),hod)),a.b,null)}\nfunction bLd(a){Tmd(Zmd(new $md,(Dod(),Ind)),a.a,null)}\nfunction VKd(a,b,c){UKd();qJb.call(this,a,b,c,(Xsd(),Vsd))}\nfunction kLd(a){this.c=a;this.a=lt($doc);this.b=new mwb(this.a)}\nfunction zcc(a,b){wcc();var c;c=new ycc;c.b=a;c.a=b;c.c=100;xcc(c)}\nfunction wcc(){wcc=Eub;!rPb&&(rPb=new sPb);Ujc();Yjc((Gcc(),Ccc),true,false)}\nfunction lLd(a){var b;b=new VMe;b.a+=n7e;UMe(b,Yvb(a));b.a+=q7e;return new Fvb(b.a)}\nfunction nLd(a){var b,c;if(!a.c){c=new VKd(eGb($Jb(a.a)),(b=oLd(a),b),mLd(a));LIb((bKb(a.a),c),_Lb(bKb(a.a)));a.c=c}return a.c}\nfunction xcc(a){var b;if(a.b){b=(Dwb(),lt($doc));Hs(a.b,b);$wnd.apply('#'+b,a.c,Fub(Acc.prototype.Ff,Acc,[a.a]))}else{new GLe;os()}}\nfunction cLd(){IJb.call(this);GJb(this,jLd(new kLd(this)));wcc();zcc(ho(this.c),Fub(dLd.prototype.Ff,dLd,[]));zcc(ho(this.b),Fub(fLd.prototype.Ff,fLd,[this]));zcc(ho(this.a),Fub(hLd.prototype.Ff,hLd,[this]))}\nfunction jLd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=new NAb(lLd(a.a).a);b=owb((Dwb(),c.tb));lwb(a.b);b.b?rs(b.b,b.a,b.c):qwb(b.a);LAb(c,(d=new f6b,wPb(d,(e=new Lld,Xod(e.b,''),Is(ho(e.a),(Xvb(),(new Lvb(Yvb(p8e))).a)),GA(e,p8e),e)),wPb(d,(f=new hjc,a.c.c=f,f)),wPb(d,(g=new Wye,Zod(g,(h=new VMe,h.a+='\\u2003MaterialScrollfire.apply(panel.getElement(), () -&gt; { <br> \\u2003MaterialToast.fireToast(\"Toasted\"); <br> }); <br> MaterialScrollfire.apply(listContainer.getElement(), () -&gt; { <br> \\u2003MaterialAnimator.animate(Transition.SHOW_STAGGERED_LIST, listContainer, 0); <br> }); <br> MaterialScrollfire.apply(image.getElement(), () -&gt; { <br> \\u2003MaterialAnimator.animate(Transition.FADE_IN_IMAGE, image, 0); <br> });',new Fvb(h.a)).a),zo(g.tb,v8e,true),g)),wPb(d,(i=new A9b,z9b(i,(j=new Xjd,wPb(j,(k=new Lld,Xod(k.b,Pcf),Is(ho(k.a),(new Lvb(Yvb(Pcf))).a),GA(k,Pcf),k)),j.tb.style.opacity=0,j)),z9b(i,(l=new Xjd,wPb(l,(m=new Lld,Xod(m.b,Pcf),Is(ho(m.a),(new Lvb(Yvb(Pcf))).a),GA(m,Pcf),m)),l.tb.style.opacity=0,l)),z9b(i,(n=new Xjd,wPb(n,(o=new Lld,Xod(o.b,Pcf),Is(ho(o.a),(new Lvb(Yvb(Pcf))).a),GA(o,Pcf),o)),n.tb.style.opacity=0,n)),z9b(i,(p=new Xjd,wPb(p,(q=new Lld,Xod(q.b,Pcf),Is(ho(q.a),(new Lvb(Yvb(Pcf))).a),GA(q,Pcf),q)),p.tb.style.opacity=0,p)),a.c.b=i,i)),wPb(d,(r=new _ic,r.tb.setAttribute(Rcf,Scf),r.tb.style.opacity=0,r.ob?Xic(r,l7e):pQb(r,Go(r,new bjc(r,l7e),(!eA&&(eA=new Ly),eA))),QZb(r,Cnf,true),a.c.a=r,r)),zo(d.tb,F4e,true),d),lwb(a.b));return c}\nvar Bnf='gwt.material.design.addins.client.scrollfire';Dub(2322,1,{},ycc);_.c=100;var PP=_Ke(Bnf,'MaterialScrollfire',2322);Dub(3195,$wnd.Function,{},Acc);_.Ff=function Bcc(){this.a.call(null)};var Ccc;Dub(2454,1,{},Dcc);_.Jd=function Ecc(){return 'scrollfireJs'};_.Kd=function Fcc(){return 'function apply(selector, offset, callback) {var didScroll = false; var done = false; var callbacks = $.Callbacks(); window.addEventListener(\"scroll\", function() {didScroll = true; }); setInterval(function() {if(didScroll) {didScroll = false; var windowScroll = window.pageYOffset + window.innerHeight; var currentElement = document.querySelector(selector); if ( currentElement !== null) {var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset; if (windowScroll > (elementOffset + offset)) {if (done !== true) {callbacks.add(callback); callbacks.fire(); done = true; } } } } }, 100); }'};var OP=_Ke(Bnf,'MaterialScrollfireClientBundle_default_InlineClientBundleGenerator/1',2454);Dub(981,55,E0e,VKd);_.De=function WKd(){vye();$Ib(this,new xye('Scrollfire',\"Executes callback functions depending on how far into the page you've scrolled.\",'addins/scrollfire/ScrollFireView',''))};var g5=_Ke(dbf,'ScrollFirePresenter',981);Dub(1385,65,F0e,cLd);var i5=_Ke(dbf,'ScrollFireView',1385);Dub(3103,$wnd.Function,{},dLd);_.Ff=function eLd(){Qld(new Tld(lD(fD(LK,1),oYe,22,0,[])),'Toasted',x1e,null)};Dub(3104,$wnd.Function,{},fLd);_.Ff=function gLd(){aLd(this.a)};Dub(3105,$wnd.Function,{},hLd);_.Ff=function iLd(){bLd(this.a)};Dub(1928,1,{},kLd);var h5=_Ke(dbf,'ScrollFireView_BinderImpl/Widgets',1928);Dub(828,1,O8e);_.Yc=function uLd(){qNb(this.b,nLd(this.a.a))};PXe(Jq)(16);\n//# sourceURL=gwtmaterialdemo-16.js\n")
