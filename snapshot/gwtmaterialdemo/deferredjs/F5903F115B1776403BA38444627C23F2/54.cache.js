$wnd.gwtmaterialdemo.runAsyncCallback54("function Rse(){}\nfunction Tse(){}\nfunction Vse(){}\nfunction Xse(){}\nfunction Zse(){}\nfunction bte(){}\nfunction dte(){}\nfunction b5c(a,b){a.onshow=b}\nfunction a5c(a,b){a.onerror=b}\nfunction $4c(a,b){a.onclick=b}\nfunction _4c(a,b){a.onclose=b}\nfunction ate(){this.a=new bte;this.b=new dte}\nfunction Qse(){UJb.call(this);SJb(this,_se(new ate))}\nfunction Hse(a,b,c){dJb();CJb.call(this,a,b,c,(Vsd(),Tsd))}\nfunction hte(a){var b;if(!a.d){b=new Qse;a.d=b}return a.d}\nfunction gte(a){var b,c;if(!a.c){c=new Hse(qGb(kKb(a.a)),(b=hte(a),b),fte(a));XIb((nKb(a.a),c),lMb(nKb(a.a)));a.c=c}return a.c}\nfunction Ose(){var a;a=(H4c(),$wnd.navigator.serviceWorker!=null);a||Pld(new Rld(dD(ZC(GK,1),f$e,21,0,[])),'Push Notification is not supported',p3e,null);return a}\nfunction Pse(){var a,b;if(Ose()){if(WNe($wnd.Notification.permission,'granted')){b=new $wnd.Object;b.body='I love GMD';b.icon='https://user.oc-static.com/upload/2017/05/03/14938342186053_01-duration-and-easing.png';a=new $wnd.Notification('GMD Says',b);$4c(a,_ub(Tse.prototype.Cf,Tse,[]));_4c(a,_ub(Vse.prototype.Cf,Vse,[]));a5c(a,_ub(Xse.prototype.Cf,Xse,[]));b5c(a,_ub(Zse.prototype.Cf,Zse,[]))}else{Pld(new Rld(dD(ZC(GK,1),f$e,21,0,[])),'Permission Denied. Update it thru the browser setting',p3e,null)}}}\nfunction _se(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A;b=new xjc;IPb(b,(c=new v6b,IPb(c,(i=new Jld,Vod(i.b,'Will check if the Notification API is supported'),Fs(ho(i.a),(rwb(),(new fwb(swb(vxf))).a)),yA(i,vxf),i)),IPb(c,(j=new gAe,Xod(j,(k=new uOe,k.a+='PwaManager.isPwaSupported()',new _vb(k.a)).a),zo((Zwb(),j.tb),naf,true),j)),zo(c.tb,y6e,true),c));IPb(b,(d=new v6b,IPb(d,(l=new Jld,Fs(ho(l.a),(new fwb(swb(wxf))).a),yA(l,wxf),l)),IPb(d,(m=new NWb,UXb(m.k,wxf),m.k.ob||IPb(m,m.k),MPb(m,a.a),m)),IPb(d,(n=new gAe,Xod(n,(o=new uOe,o.a+='// Will return the following status (see next section) <br> Notification.getPermission();',new _vb(o.a)).a),zo(n.tb,naf,true),n)),zo(d.tb,y6e,true),d));IPb(b,(e=new v6b,IPb(e,(p=new Jld,Fs(ho(p.a),(new fwb(swb(xxf))).a),yA(p,xxf),p)),IPb(e,new kBb((q=new uOe,q.a+='<blockquote> <p><b>denied<\\/b> - The user refuses to have notifications displayed. <\\/p> <p><b>granted<\\/b> - The user accepts having notifications displayed. <\\/p> <p><b>default<\\/b> - The user choice is unknown and therefore the browser will act as if the value were denied. <\\/p> <\\/blockquote>',new _vb(q.a)).a)),zo(e.tb,y6e,true),e));IPb(b,(f=new v6b,IPb(f,(r=new Jld,Fs(ho(r.a),(new fwb(swb(yxf))).a),yA(r,yxf),r)),IPb(f,(s=new NWb,UXb(s.k,yxf),s.k.ob||IPb(s,s.k),MPb(s,a.b),s)),zo(f.tb,y6e,true),f));IPb(b,(g=new v6b,IPb(g,(t=new Jld,Fs(ho(t.a),(new fwb(swb(zxf))).a),yA(t,zxf),t)),IPb(g,new kBb((u=new uOe,u.a+='<blockquote> <p><b>actions<\\/b> - The actions array of the notification as specified in the options parameter of the constructor.<\\/p> <p><b>badge<\\/b> - The URL of the image used to represent the notification when there is not enough space to display the notification itself.<\\/p> <p><b>body<\\/b> - The body string of the notification as specified in the options parameter of the constructor.<\\/p> <p><b>data<\\/b> - Returns a structured clone of the notification\\u2019s data.<\\/p> <p><b>dir<\\/b> - The text direction of the notification as specified in the options parameter of the constructor.<\\/p> <p><b>lang<\\/b> - The language code of the notification as specified in the options parameter of the constructor. <\\/p> <p><b>tag<\\/b> - The ID of the notification (if any) as specified in the options parameter of the constructor. <\\/p> <p><b>icon<\\/b> - The URL of the image used as an icon of the notification as specified in the options parameter of the constructor. <\\/p> <p><b>image<\\/b> - The URL of an image to be displayed as part of the notification, as specified in the options parameter of the constructor. <\\/p> <p><b>renotify<\\/b> - Specifies whether the user should be notified after a new notification replaces an old one. <\\/p> <p><b>requireInteraction<\\/b> - A Boolean indicating that a notification should remain active until the user clicks or dismisses it, rather than closing automatically. <\\/p> <p><b>silent<\\/b> - Specifies whether the notification should be silent, i.e. no sounds or vibrations should be issued, regardless of the device settings. <\\/p> <p><b>timestamp<\\/b> - Specifies the time at which a notification is created or applicable (past, present, or future). <\\/p> <p><b>title<\\/b> - The title of the notification as specified in the first parameter of the constructor. <\\/p> <p><b>vibrate<\\/b> - Specifies a vibration pattern for devices with vibration hardware to emit. <\\/p> <\\/blockquote>',new _vb(u.a)).a)),zo(g.tb,y6e,true),g));IPb(b,(h=new v6b,IPb(h,(v=new Jld,Fs(ho(v.a),(new fwb(swb(Axf))).a),yA(v,Axf),v)),IPb(h,(w=new gAe,Xod(w,(A=new uOe,A.a+='Notification notification = new Notification(\"GMD Says\", options); <br> // Listen to any Notification events <br> // A handler for the click event. It is triggered each time the user clicks on the notification. <br> notification.setOnclick(param1 -&gt; MaterialToast.fireToast(\"Clicked\")); <br> // A handler for the close event. It is triggered when the user closes the notification. <br> notification.setOnclose(param1 -&gt; MaterialToast.fireToast(\"Closed\")); <br> // A handler for the error event. It is triggered each time the notification encounters an error. <br> notification.setOnerror(param1 -&gt; MaterialToast.fireToast(\"Error\")); <br> // A handler for the show event. It is triggered when the notification is displayed. <br> notification.setOnshow(param1 -&gt; MaterialToast.fireToast(\"Shown\")); <br>',new _vb(A.a)).a),zo(w.tb,naf,true),w)),zo(h.tb,y6e,true),h));return b}\nvar vxf='isSupported()',wxf='Request Permission',xxf='Permission Status',yxf='Show Notification',zxf='Notification Options',Axf='Notification Handlers';Zub(1120,120,t2e,Hse);_.Ee=function Ise(){Hze();kJb(this,new Jze(gjf,'Push messaging provides a simple and effective way to re-engage with your users','pwa/notification/NotificationView',''))};var Imb=yMe(njf,'NotificationPresenter',1120);Zub(1735,129,u2e,Qse);var Mmb=yMe(njf,'NotificationView',1735);Zub(3216,$wnd.Function,{},Rse);_.Cf=function Sse(a){Sld('Status: '+VD(a))};Zub(3212,$wnd.Function,{},Tse);_.Cf=function Use(a){Pld(new Rld(dD(ZC(GK,1),f$e,21,0,[])),'Clicked',p3e,null)};Zub(3213,$wnd.Function,{},Vse);_.Cf=function Wse(a){Pld(new Rld(dD(ZC(GK,1),f$e,21,0,[])),Xmf,p3e,null)};Zub(3214,$wnd.Function,{},Xse);_.Cf=function Yse(a){Pld(new Rld(dD(ZC(GK,1),f$e,21,0,[])),tsf,p3e,null)};Zub(3215,$wnd.Function,{},Zse);_.Cf=function $se(a){Pld(new Rld(dD(ZC(GK,1),f$e,21,0,[])),'Shown',p3e,null)};Zub(2280,1,{},ate);var Lmb=yMe(njf,'NotificationView_BinderImpl/Widgets',2280);Zub(2281,1,c3e,bte);_.nd=function cte(a){Ose()&&$wnd.Notification.requestPermission(_ub(Rse.prototype.Cf,Rse,[]))};var Jmb=yMe(njf,'NotificationView_BinderImpl/Widgets/1',2281);Zub(2282,1,c3e,dte);_.nd=function ete(a){Pse()};var Kmb=yMe(njf,'NotificationView_BinderImpl/Widgets/2',2282);Zub(1005,1,Faf);_.Yc=function nte(){CNb(this.b,gte(this.a.a))};GZe(Iq)(54);\n//# sourceURL=gwtmaterialdemo-54.js\n")
