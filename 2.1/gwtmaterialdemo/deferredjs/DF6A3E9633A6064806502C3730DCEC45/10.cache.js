$wnd.gwtmaterialdemo.runAsyncCallback10("function rCd(){}\nfunction tCd(a){this.a=a}\nfunction vCd(a){this.a=a}\nfunction xCd(a){this.a=a}\nfunction zCd(a){this.a=a}\nfunction BCd(a){this.a=a}\nfunction DCd(a){this.a=a}\nfunction FCd(a){this.a=a}\nfunction HCd(a){this.a=a}\nfunction JCd(a){this.a=a}\nfunction g4b(a){this.a=a}\nfunction w3b(a){return e4b(a.a,a.b)}\nfunction B3b(){j3b();q3b.call(this)}\nfunction F3b(){j3b();q3b.call(this)}\nfunction W3b(){j3b();q3b.call(this)}\nfunction $3b(){j3b();q3b.call(this)}\nfunction hCd(a,b,c){NHb();kIb.call(this,a,b,c,(Kqd(),Iqd))}\nfunction oCd(){CIb.call(this);AIb(this,pCd(new qCd(this)))}\nfunction NCd(a){var b;if(!a.d){b=new oCd;a.d=b}return a.d}\nfunction A3b(a){T2b(a,GGe($wnd.$(ho(a.G)).cleanVal()),false)}\nfunction V3b(a){T2b(a,fHe(HGe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction Z3b(a){T2b(a,qHe(IGe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction E3b(a){T2b(a,new NGe(RGe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction y3b(){j3b();q3b.call(this);this.b=ehf;this.a=new g4b(this);x3b(this,this.b)}\nfunction x3b(a,b){var c;a.b=b;c=QHe(QHe(QHe(b.toLowerCase(),'m','0'),'d','0'),'y','0');a.c=c}\nfunction e4b(a,b){if(d4b(a,b)){D2b(a.a);return NB((dC(),fC(b,oC((nC(),nC(),mC)))),ys(ho(a.a.G),AXe))}return null}\nfunction MCd(a){var b,c;if(!a.c){c=new hCd($Eb(UIb(a.a)),(b=NCd(a),b),LCd(a));FHb((XIb(a.a),c),UKb(XIb(a.a)));a.c=c}return a.c}\nfunction RGe(a){var b;b=GGe(a);if(b>3.4028234663852886E38){return Infinity}else if(b<-3.4028234663852886E38){return -Infinity}return b}\nfunction qCd(a){this.a=new rCd;this.c=new vCd(this);this.d=new xCd(this);this.e=new zCd(this);this.f=new BCd(this);this.g=new DCd(this);this.i=new FCd(this);this.j=new HCd(this);this.k=new JCd(this);this.b=new tCd(this);this.n=a}\nfunction f4b(a,b,c){return !(LHe(a,'31')&&(LHe(b,'4')||LHe(b,'6')||LHe(b,'9')||LHe(b,'11')||LHe(b,'04')||LHe(b,'06')||LHe(b,'09')))&&(!(LHe(b,'2')||LHe(b,'02'))||(c%4==0?!(LHe(a,'30')||LHe(a,'31')):!(LHe(a,'29')||LHe(a,'30')||LHe(a,'31'))))}\nfunction CHe(){CHe=Jtb;var a;yHe=bD(XC(fE,1),qUe,116,15,[-1,-1,30,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5]);zHe=ZC(fE,qUe,116,37,15,1);AHe=bD(XC(fE,1),qUe,116,15,[-1,-1,63,40,32,28,25,23,21,20,19,19,18,18,17,17,16,16,16,15,15,15,15,14,14,14,14,14,14,13,13,13,13,13,13,13,13]);BHe=ZC(gE,tUe,116,37,14,1);for(a=2;a<=36;a++){zHe[a]=cE($wnd.Math.pow(a,yHe[a]));BHe[a]=ntb({l:rWe,m:rWe,h:524287},zHe[a])}}\nfunction d4b(a,b){var c,d,e,f,g;if(ys(ho(a.a.G),AXe)!=null&&ys(ho(a.a.G),AXe).length!=0&&a.a.c!=null&&b!=null){c=ys(ho(a.a.G),AXe);e=WHe(c,b.indexOf('M'),b.indexOf('M/')+1);d=WHe(c,b.indexOf('d'),b.indexOf('d/')+1);g=WHe(c,b.indexOf('y'),b.lastIndexOf('y')+1);f=f4b(d,e,HGe(g));f||K2b(a.a,'Not a valid date');return K2b(a.a,'Month does not match'),(new RegExp('^(^(0?[1-9]|1[012])$)$')).test(e)&&(K2b(a.a,'Day does not match'),(new RegExp('^((0?[1-9]|[12][0-9]|3[01]))$')).test(d))&&(K2b(a.a,'Year does not match'),(new RegExp('^(^\\\\d{4}$)$')).test(g))&&f}K2b(a.a,'Text input must not be empty or null');return false}\nfunction IGe(a){var b,c,d,e,f,g,h,i,j,k,l;if(a==null){throw jtb(new DHe(LTe))}j=a;f=a.length;i=false;if(f>0){b=(SSe(0,a.length),a.charCodeAt(0));if(b==45||b==43){a=a.substr(1);--f;i=b==45}}if(f==0){throw jtb(new DHe(Uef+j+'\"'))}while(a.length>0&&(SSe(0,a.length),a.charCodeAt(0)==48)){a=a.substr(1);--f}if(f>(CHe(),AHe)[10]){throw jtb(new DHe(Uef+j+'\"'))}for(e=0;e<f;e++){if(hGe((SSe(e,a.length),a.charCodeAt(e)))==-1){throw jtb(new DHe(Uef+j+'\"'))}}l=0;g=yHe[10];k=zHe[10];h=utb(BHe[10]);c=true;d=f%g;if(d>0){l=-parseInt(a.substr(0,d),10);a=a.substr(d);f-=d;c=false}while(f>=g){d=parseInt(a.substr(0,g),10);a=a.substr(g);f-=g;if(c){c=false}else{if(ltb(l,h)<0){throw jtb(new DHe(Uef+j+'\"'))}l=ttb(l,k)}l=vtb(l,d)}if(ltb(l,0)>0){throw jtb(new DHe(Uef+j+'\"'))}if(!i){l=utb(l);if(ltb(l,0)<0){throw jtb(new DHe(Uef+j+'\"'))}}return l}\nfunction pCd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb;b=new Vhc;pOb(b,(c=new U4b,pOb(c,(k=new zjd,Fs(ho(k.a),(bvb(),(new Rub(cvb(ghf))).a)),wA(k,ghf),k)),pOb(c,(l=new Kve,WUb(l.a,tgf),YUb(l.a),(Jvb(),l.tb).style[f4e]=(bx(),o4e),ZUb(l.a,'jQuery-Mask-Plugin 1.14.10'),l)),pOb(c,(m=new U4b,pOb(m,(n=new b4b,Joc((!n.X&&(n.X=new Loc(n)),n.X),t2e),ho(n.G).setAttribute(OZe,'eg: 000-00-0000000'),Bmd(n.B).length==0||ro(n.B,dYe),Cmd(n.B,'Phone Number'),(ho(n.G).getAttribute(OZe)||'').length==0||ro(n.B,dYe),n.c=hhf,n)),pOb(m,(o=new b4b,Joc((!o.X&&(o.X=new Loc(o)),o.X),t2e),ho(o.G).setAttribute(OZe,'eg: (00) 0000-0000'),Bmd(o.B).length==0||ro(o.B,dYe),Cmd(o.B,'Phone with Odd'),(ho(o.G).getAttribute(OZe)||'').length==0||ro(o.B,dYe),o.c='(00) 0000-0000',o)),pOb(m,(p=new b4b,Joc((!p.X&&(p.X=new Loc(p)),p.X),t2e),ho(p.G).setAttribute(OZe,'eg: (000) 000-000'),Bmd(p.B).length==0||ro(p.B,dYe),Cmd(p.B,'US Phone Number'),(ho(p.G).getAttribute(OZe)||'').length==0||ro(p.B,dYe),p.c='(000) 000-000',p)),m)),pOb(c,(q=new U4b,pOb(q,(r=new b4b,Joc((!r.X&&(r.X=new Loc(r)),r.X),t2e),ho(r.G).setAttribute(OZe,'eg: 00000-000'),Bmd(r.B).length==0||ro(r.B,dYe),Cmd(r.B,'CEP'),(ho(r.G).getAttribute(OZe)||'').length==0||ro(r.B,dYe),r.c='00000-000',r)),pOb(q,(s=new b4b,Joc((!s.X&&(s.X=new Loc(s)),s.X),t2e),ho(s.G).setAttribute(OZe,'eg: 000.000.000-00'),Bmd(s.B).length==0||ro(s.B,dYe),Cmd(s.B,'CPF'),(ho(s.G).getAttribute(OZe)||'').length==0||ro(s.B,dYe),s.c='000.000.000-00',s)),pOb(q,(t=new b4b,Joc((!t.X&&(t.X=new Loc(t)),t.X),t2e),ho(t.G).setAttribute(OZe,'eg: 000,000,000,000,000.00'),Bmd(t.B).length==0||ro(t.B,dYe),Cmd(t.B,'Money'),(ho(t.G).getAttribute(OZe)||'').length==0||ro(t.B,dYe),t.c='000,000,000,000,000.00',t)),q)),pOb(c,(u=new U4b,pOb(u,(v=new b4b,Joc((!v.X&&(v.X=new Loc(v)),v.X),t2e),ho(v.G).setAttribute(OZe,ihf),Bmd(v.B).length==0||ro(v.B,dYe),Cmd(v.B,jhf),(ho(v.G).getAttribute(OZe)||'').length==0||ro(v.B,dYe),v.c=khf,v)),pOb(u,(w=new b4b,Joc((!w.X&&(w.X=new Loc(w)),w.X),t2e),ho(w.G).setAttribute(OZe,lhf),Bmd(w.B).length==0||ro(w.B,dYe),Cmd(w.B,mhf),(ho(w.G).getAttribute(OZe)||'').length==0||ro(w.B,dYe),w.c=nhf,w)),pOb(u,(A=new b4b,Joc((!A.X&&(A.X=new Loc(A)),A.X),t2e),ho(A.G).setAttribute(OZe,ohf),Bmd(A.B).length==0||ro(A.B,dYe),Cmd(A.B,phf),(ho(A.G).getAttribute(OZe)||'').length==0||ro(A.B,dYe),A.c=qhf,A)),u)),pOb(c,(B=new Vve,Nmd(B,(C=new jIe,C.a+='\\u2003&lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone Number\" placeholder=\"eg: 000-00-0000000\" mask=\"000-00-0000000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone with Odd\" placeholder=\"eg: (00) 0000-0000\" mask=\"(00) 0000-0000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"US Phone Number\" placeholder=\"eg: (000) 000-000\" mask=\"(000) 000-000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CEP\" placeholder=\"eg: 00000-000\" mask=\"00000-000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CPF\" placeholder=\"eg: 000.000.000-00\" mask=\"000.000.000-00\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Money\" placeholder=\"eg: 000,000,000,000,000.00\" mask=\"000,000,000,000,000.00\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br>',new Lub(C.a)).a),zo(B.tb,B3e,true),B)),zo(c.tb,P_e,true),c));pOb(b,(d=new U4b,pOb(d,(D=new zjd,Lmd(D.b,'The mask will be placed from the right to the left if reverse is true (Default : false)'),Fs(ho(D.a),(new Rub(cvb('Reverse'))).a),wA(D,'Reverse'),D)),pOb(d,(F=new U4b,pOb(F,(G=new b4b,Joc((!G.X&&(G.X=new Loc(G)),G.X),t2e),ho(G.G).setAttribute(OZe,ihf),Bmd(G.B).length==0||ro(G.B,dYe),Cmd(G.B,jhf),(ho(G.G).getAttribute(OZe)||'').length==0||ro(G.B,dYe),G.d.reverse=true,G.c=khf,G)),pOb(F,(H=new b4b,Joc((!H.X&&(H.X=new Loc(H)),H.X),t2e),ho(H.G).setAttribute(OZe,lhf),Bmd(H.B).length==0||ro(H.B,dYe),Cmd(H.B,mhf),(ho(H.G).getAttribute(OZe)||'').length==0||ro(H.B,dYe),H.d.reverse=true,H.c=nhf,H)),pOb(F,(I=new b4b,Joc((!I.X&&(I.X=new Loc(I)),I.X),t2e),ho(I.G).setAttribute(OZe,ohf),Bmd(I.B).length==0||ro(I.B,dYe),Cmd(I.B,phf),(ho(I.G).getAttribute(OZe)||'').length==0||ro(I.B,dYe),I.d.reverse=true,I.c=qhf,I)),F)),pOb(d,(J=new Vve,Nmd(J,(K=new jIe,K.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Lub(K.a)).a),zo(J.tb,B3e,true),J)),zo(d.tb,P_e,true),d));pOb(b,(e=new U4b,pOb(e,(L=new zjd,Lmd(L.b,'The textfield will automatically clears whenever the value is not match with the mask provided. (Default : false)'),Fs(ho(L.a),(new Rub(cvb(rhf))).a),wA(L,rhf),L)),pOb(e,(M=new U4b,pOb(M,(N=new b4b,Joc((!N.X&&(N.X=new Loc(N)),N.X),t2e),N.d.clearIfNotMatch=true,ho(N.G).setAttribute(OZe,ihf),Bmd(N.B).length==0||ro(N.B,dYe),Cmd(N.B,jhf),(ho(N.G).getAttribute(OZe)||'').length==0||ro(N.B,dYe),N.c=khf,N)),pOb(M,(O=new b4b,Joc((!O.X&&(O.X=new Loc(O)),O.X),t2e),O.d.clearIfNotMatch=true,ho(O.G).setAttribute(OZe,lhf),Bmd(O.B).length==0||ro(O.B,dYe),Cmd(O.B,mhf),(ho(O.G).getAttribute(OZe)||'').length==0||ro(O.B,dYe),O.c=nhf,O)),pOb(M,(P=new b4b,Joc((!P.X&&(P.X=new Loc(P)),P.X),t2e),P.d.clearIfNotMatch=true,ho(P.G).setAttribute(OZe,ohf),Bmd(P.B).length==0||ro(P.B,dYe),Cmd(P.B,phf),(ho(P.G).getAttribute(OZe)||'').length==0||ro(P.B,dYe),P.c=qhf,P)),M)),pOb(e,(Q=new Vve,Nmd(Q,(R=new jIe,R.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Lub(R.a)).a),zo(Q.tb,B3e,true),Q)),zo(e.tb,P_e,true),e));pOb(b,(f=new U4b,pOb(f,(S=new zjd,Lmd(S.b,'Set whether you want to set on focus on your mask for easy selection.'),Fs(ho(S.a),(new Rub(cvb(shf))).a),wA(S,shf),S)),pOb(f,(T=new U4b,pOb(T,(U=new b4b,Joc((!U.X&&(U.X=new Loc(U)),U.X),t2e),U.d.selectOnFocus=true,ho(U.G).setAttribute(OZe,ihf),Bmd(U.B).length==0||ro(U.B,dYe),Cmd(U.B,jhf),(ho(U.G).getAttribute(OZe)||'').length==0||ro(U.B,dYe),U.c=khf,U)),pOb(T,(V=new b4b,Joc((!V.X&&(V.X=new Loc(V)),V.X),t2e),V.d.selectOnFocus=true,ho(V.G).setAttribute(OZe,lhf),Bmd(V.B).length==0||ro(V.B,dYe),Cmd(V.B,mhf),(ho(V.G).getAttribute(OZe)||'').length==0||ro(V.B,dYe),V.c=nhf,V)),pOb(T,(W=new b4b,Joc((!W.X&&(W.X=new Loc(W)),W.X),t2e),W.d.selectOnFocus=true,ho(W.G).setAttribute(OZe,ohf),Bmd(W.B).length==0||ro(W.B,dYe),Cmd(W.B,phf),(ho(W.G).getAttribute(OZe)||'').length==0||ro(W.B,dYe),W.c=qhf,W)),T)),pOb(f,(X=new Vve,Nmd(X,(Y=new jIe,Y.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Lub(Y.a)).a),zo(X.tb,B3e,true),X)),zo(f.tb,P_e,true),f));pOb(b,(g=new U4b,pOb(g,(Z=new zjd,Lmd(Z.b,'We supported type safe Input Masks'),Fs(ho(Z.a),(new Rub(cvb('Types'))).a),wA(Z,'Types'),Z)),pOb(g,($=new b4b,Joc((!$.X&&($.X=new Loc($)),$.X),C3e),ho($.G).setAttribute(OZe,'eg. A0A-1A1'),Bmd($.B).length==0||ro($.B,dYe),Cmd($.B,nUe),(ho($.G).getAttribute(OZe)||'').length==0||ro($.B,dYe),$.c='S0S-0S0',B2b($,a.a),$)),pOb(g,(ab=new W3b,Joc((!ab.X&&(ab.X=new Loc(ab)),ab.X),C3e),Cmd(ab.B,'Integer'),(ho(ab.G).getAttribute(OZe)||'').length==0||ro(ab.B,dYe),ab.c='000-00-000',B2b(ab,a.c),a.n.e=ab,ab)),pOb(g,(bb=new B3b,Joc((!bb.X&&(bb.X=new Loc(bb)),bb.X),C3e),Cmd(bb.B,'Double'),(ho(bb.G).getAttribute(OZe)||'').length==0||ro(bb.B,dYe),bb.c='000-00-00000',B2b(bb,a.d),a.n.c=bb,bb)),pOb(g,(cb=new F3b,Joc((!cb.X&&(cb.X=new Loc(cb)),cb.X),C3e),Cmd(cb.B,thf),(ho(cb.G).getAttribute(OZe)||'').length==0||ro(cb.B,dYe),cb.c='000-00-0000',B2b(cb,a.e),a.n.d=cb,cb)),pOb(g,(db=new $3b,Joc((!db.X&&(db.X=new Loc(db)),db.X),C3e),Cmd(db.B,'Long'),(ho(db.G).getAttribute(OZe)||'').length==0||ro(db.B,dYe),db.c=hhf,B2b(db,a.f),a.n.f=db,db)),pOb(g,(eb=new y3b,Joc((!eb.X&&(eb.X=new Loc(eb)),eb.X),C3e),eb.b=ehf,fb=QHe(QHe(QHe(ehf.toLowerCase(),'m','0'),'d','0'),'y','0'),eb.c=fb,eb.ob?iPb(eb,B2b(eb,new Mjc(eb))):iPb(eb,Go(eb,new Kjc(eb),(!Wz&&(Wz=new By),Wz))),Cmd(eb.B,qWe),(ho(eb.G).getAttribute(OZe)||'').length==0||ro(eb.B,dYe),B2b(eb,a.g),a.n.b=eb,eb)),zo(g.tb,P_e,true),g));pOb(b,(h=new U4b,pOb(h,(gb=new zjd,Lmd(gb.b,'Gets the value of the field with the mask.'),Fs(ho(gb.a),(new Rub(cvb(Q3e))).a),wA(gb,Q3e),gb)),pOb(h,(hb=new U4b,pOb(hb,(ib=new b4b,Joc((!ib.X&&(ib.X=new Loc(ib)),ib.X),t2e),ho(ib.G).setAttribute(OZe,ihf),Bmd(ib.B).length==0||ro(ib.B,dYe),Cmd(ib.B,jhf),(ho(ib.G).getAttribute(OZe)||'').length==0||ro(ib.B,dYe),ib.d.reverse=true,ib.c=khf,a.n.g=ib,ib)),pOb(hb,(jb=new Qad,pOb(jb,(kb=new qVb,xWb(kb.k,Q3e),kb.k.ob||pOb(kb,kb.k),tOb(kb,a.j),kb)),Joc((!jb.X&&(jb.X=new Loc(jb)),jb.X),C3e),jb)),hb)),pOb(h,(lb=new Vve,Nmd(lb,(mb=new jIe,mb.a+='inputMask.getValue();',new Lub(mb.a)).a),zo(lb.tb,G3e,true),lb)),zo(h.tb,P_e,true),h));pOb(b,(i=new U4b,pOb(i,(nb=new zjd,Lmd(nb.b,'Gets the value of the field without the mask.'),Fs(ho(nb.a),(new Rub(cvb(uhf))).a),wA(nb,uhf),nb)),pOb(i,(ob=new U4b,pOb(ob,(pb=new b4b,Joc((!pb.X&&(pb.X=new Loc(pb)),pb.X),t2e),ho(pb.G).setAttribute(OZe,ihf),Bmd(pb.B).length==0||ro(pb.B,dYe),Cmd(pb.B,jhf),(ho(pb.G).getAttribute(OZe)||'').length==0||ro(pb.B,dYe),pb.d.reverse=true,pb.c=khf,a.n.a=pb,pb)),pOb(ob,(qb=new Qad,pOb(qb,(rb=new qVb,xWb(rb.k,uhf),rb.k.ob||pOb(rb,rb.k),tOb(rb,a.i),rb)),Joc((!qb.X&&(qb.X=new Loc(qb)),qb.X),C3e),qb)),ob)),pOb(i,(sb=new Vve,Nmd(sb,(tb=new jIe,tb.a+='inputMask.getCleanValue();',new Lub(tb.a)).a),zo(sb.tb,G3e,true),sb)),zo(i.tb,P_e,true),i));pOb(b,(j=new U4b,pOb(j,(ub=new zjd,Lmd(ub.b,'Programmatically controls the Input Mask main methods.'),Fs(ho(ub.a),(new Rub(cvb(vhf))).a),wA(ub,vhf),ub)),pOb(j,(vb=new U4b,pOb(vb,(wb=new b4b,Joc((!wb.X&&(wb.X=new Loc(wb)),wb.X),t2e),ho(wb.G).setAttribute(OZe,ihf),Bmd(wb.B).length==0||ro(wb.B,dYe),Cmd(wb.B,jhf),(ho(wb.G).getAttribute(OZe)||'').length==0||ro(wb.B,dYe),wb.d.reverse=true,wb.c=khf,a.n.i=wb,wb)),pOb(vb,(xb=new Qad,pOb(xb,(yb=new qVb,yb.tb.style[hYe]=P3e,kPb(yb,(Fwc(),qwc)),xWb(yb.k,'Unmask'),yb.k.ob||pOb(yb,yb.k),NPb(yb,dsc),tOb(yb,a.k),yb)),pOb(xb,(zb=new qVb,xWb(zb.k,'mask'),zb.k.ob||pOb(zb,zb.k),tOb(zb,a.b),zb)),Joc((!xb.X&&(xb.X=new Loc(xb)),xb.X),C3e),xb)),vb)),pOb(j,(Ab=new Vve,Nmd(Ab,(Bb=new jIe,Bb.a+='\\u2003inputMask.mask(\"00.00\"); <br> inputMask.unmask();',new Lub(Bb.a)).a),zo(Ab.tb,G3e,true),Ab)),zo(j.tb,P_e,true),j));return b}\nvar ehf='MM/dd/yyyy',ghf='Basic Examples',hhf='000-00-0000000',ihf='eg: 000.000.000.000',jhf='Ip Address',khf='000.000.000.000',lhf='eg: 000000.00%',mhf='Percentage',nhf='000000.00%',ohf='eg: 0000 0000 0000 0000',phf='Credit Card',qhf='0000 0000 0000 0000',rhf='Clear If not Match',shf='Select on Focus',uhf='Get Clean Value',vhf='Unmask and Mask control';Itb(2621,320,QZe,y3b);_.Vd=function z3b(){return e4b(this.a,this.b)};var rO=pGe(fhf,'MaterialDateInputMask',2621);Itb(2618,320,QZe,B3b);_.Vd=function C3b(){return GGe($wnd.$(ho(this.G)).cleanVal())};_.Wd=function D3b(a){var b;A3b((b=this,dE(a),b))};var sO=pGe(fhf,'MaterialDoubleInputMask',2618);Itb(2619,320,QZe,F3b);_.Vd=function G3b(){return new NGe(RGe($wnd.$(ho(this.G)).cleanVal()))};_.Wd=function H3b(a){var b;E3b((b=this,dE(a),b))};var tO=pGe(fhf,'MaterialFloatInputMask',2619);Itb(2617,320,QZe,W3b);_.Vd=function X3b(){return fHe(HGe($wnd.$(ho(this.G)).cleanVal()))};_.Wd=function Y3b(a){var b;V3b((b=this,dE(a),b))};var wO=pGe(fhf,'MaterialIntegerInputMask',2617);Itb(2620,320,QZe,$3b);_.Vd=function _3b(){return qHe(IGe($wnd.$(ho(this.G)).cleanVal()))};_.Wd=function a4b(a){var b;Z3b((b=this,dE(a),b))};var xO=pGe(fhf,'MaterialLongInputMask',2620);Itb(2675,1,{},g4b);var zO=pGe('gwt.material.design.addins.client.inputmask.base','DateInputParser',2675);Itb(961,56,RXe,hCd);_.Ce=function iCd(){uve();UHb(this,new wve(ubf,'An inputmask helps the user with the input by ensuring a predefined format. This can be useful for dates, numerics, phone numbers etc...','addins/inputmask/InputMask',''))};var l2=pGe(t5e,'InputMaskPresenter',961);Itb(1354,65,SXe,oCd);var x2=pGe(t5e,'InputMaskView',1354);Itb(1850,1,{},qCd);var w2=pGe(t5e,'InputMaskView_BinderImpl/Widgets',1850);Itb(1851,1,tXe,rCd);_.zd=function sCd(a){Ijd(TD(a.a))};var n2=pGe(t5e,'InputMaskView_BinderImpl/Widgets/1',1851);Itb(1860,1,xYe,tCd);_.md=function uCd(a){o3b(this.a.n.i,khf)};var m2=pGe(t5e,'InputMaskView_BinderImpl/Widgets/10',1860);Itb(1852,1,tXe,vCd);_.zd=function wCd(a){Ijd(fHe(HGe($wnd.$(ho(this.a.n.e.G)).cleanVal()))+'')};var o2=pGe(t5e,'InputMaskView_BinderImpl/Widgets/2',1852);Itb(1853,1,tXe,xCd);_.zd=function yCd(a){Ijd(''+KGe(GGe($wnd.$(ho(this.a.n.c.G)).cleanVal())))};var p2=pGe(t5e,'InputMaskView_BinderImpl/Widgets/3',1853);Itb(1854,1,tXe,zCd);_.zd=function ACd(a){Ijd(''+(new NGe(RGe($wnd.$(ho(this.a.n.d.G)).cleanVal()))).a)};var q2=pGe(t5e,'InputMaskView_BinderImpl/Widgets/4',1854);Itb(1855,1,tXe,BCd);_.zd=function CCd(a){Ijd(''+ztb(qHe(IGe($wnd.$(ho(this.a.n.f.G)).cleanVal())).a))};var r2=pGe(t5e,'InputMaskView_BinderImpl/Widgets/5',1855);Itb(1856,1,tXe,DCd);_.zd=function ECd(a){Ijd(JC(w3b(this.a.n.b)))};var s2=pGe(t5e,'InputMaskView_BinderImpl/Widgets/6',1856);Itb(1857,1,xYe,FCd);_.md=function GCd(a){Ijd($wnd.$(ho(this.a.n.a.G)).cleanVal())};var t2=pGe(t5e,'InputMaskView_BinderImpl/Widgets/7',1857);Itb(1858,1,xYe,HCd);_.md=function ICd(a){Ijd(TD(E2b(this.a.n.g)))};var u2=pGe(t5e,'InputMaskView_BinderImpl/Widgets/8',1858);Itb(1859,1,xYe,JCd);_.md=function KCd(a){$wnd.$(ho(this.a.n.i.G)).unmask()};var v2=pGe(t5e,'InputMaskView_BinderImpl/Widgets/9',1859);Itb(803,1,Z3e);_.Xc=function TCd(){jMb(this.b,MCd(this.a.a))};var yHe,zHe,AHe,BHe;var gE=sGe('long','J');dTe(Iq)(10);\n//# sourceURL=gwtmaterialdemo-10.js\n")