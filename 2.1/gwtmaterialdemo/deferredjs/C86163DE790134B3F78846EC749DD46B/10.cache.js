$wnd.gwtmaterialdemo.runAsyncCallback10("function QFd(){}\nfunction SFd(a){this.a=a}\nfunction UFd(a){this.a=a}\nfunction WFd(a){this.a=a}\nfunction YFd(a){this.a=a}\nfunction $Fd(a){this.a=a}\nfunction aGd(a){this.a=a}\nfunction cGd(a){this.a=a}\nfunction eGd(a){this.a=a}\nfunction gGd(a){this.a=a}\nfunction G6b(a){this.a=a}\nfunction W5b(a){return E6b(a.a,a.b)}\nfunction _5b(){J5b();Q5b.call(this)}\nfunction d6b(){J5b();Q5b.call(this)}\nfunction u6b(){J5b();Q5b.call(this)}\nfunction y6b(){J5b();Q5b.call(this)}\nfunction GFd(a,b,c){eKb();DKb.call(this,a,b,c,(iud(),gud))}\nfunction NFd(){VKb.call(this);TKb(this,OFd(new PFd(this)))}\nfunction kGd(a){var b;if(!a.d){b=new NFd;a.d=b}return a.d}\nfunction $5b(a){q5b(a,DMe($wnd.$(ho(a.G)).cleanVal()),false)}\nfunction t6b(a){q5b(a,cNe(EMe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction x6b(a){q5b(a,nNe(FMe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction c6b(a){q5b(a,new KMe(OMe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction Y5b(){J5b();Q5b.call(this);this.b=knf;this.a=new G6b(this);X5b(this,this.b)}\nfunction X5b(a,b){var c;a.b=b;c=NNe(NNe(NNe(b.toLowerCase(),'m','0'),'d','0'),'y','0');a.c=c}\nfunction E6b(a,b){if(D6b(a,b)){a5b(a.a);return hD((zD(),BD(b,KD((JD(),JD(),ID)))),Js(ho(a.a.G),y1e))}return null}\nfunction jGd(a){var b,c;if(!a.c){c=new GFd(rHb(lLb(a.a)),(b=kGd(a),b),iGd(a));YJb((oLb(a.a),c),mNb(oLb(a.a)));a.c=c}return a.c}\nfunction OMe(a){var b;b=DMe(a);if(b>3.4028234663852886E38){return Infinity}else if(b<-3.4028234663852886E38){return -Infinity}return b}\nfunction PFd(a){this.a=new QFd;this.c=new UFd(this);this.d=new WFd(this);this.e=new YFd(this);this.f=new $Fd(this);this.g=new aGd(this);this.i=new cGd(this);this.j=new eGd(this);this.k=new gGd(this);this.b=new SFd(this);this.n=a}\nfunction F6b(a,b,c){return !(INe(a,'31')&&(INe(b,'4')||INe(b,'6')||INe(b,'9')||INe(b,'11')||INe(b,'04')||INe(b,'06')||INe(b,'09')))&&(!(INe(b,'2')||INe(b,'02'))||(c%4==0?!INe(a,'30')&&!INe(a,'31'):!INe(a,'29')&&!INe(a,'30')&&!INe(a,'31')))}\nfunction zNe(){zNe=Uvb;var a;vNe=xE(rE(CF,1),k$e,116,15,[-1,-1,30,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5]);wNe=tE(CF,k$e,116,37,15,1);xNe=xE(rE(CF,1),k$e,116,15,[-1,-1,63,40,32,28,25,23,21,20,19,19,18,18,17,17,16,16,16,15,15,15,15,14,14,14,14,14,14,13,13,13,13,13,13,13,13]);yNe=tE(DF,n$e,116,37,14,1);for(a=2;a<=36;a++){wNe[a]=zF($wnd.Math.pow(a,vNe[a]));yNe[a]=yvb({l:u0e,m:u0e,h:524287},wNe[a])}}\nfunction D6b(a,b){var c,d,e,f,g;if(Js(ho(a.a.G),y1e)!=null&&Js(ho(a.a.G),y1e).length!=0&&a.a.c!=null&&b!=null){c=Js(ho(a.a.G),y1e);e=TNe(c,b.indexOf('M'),b.indexOf('M/')+1);d=TNe(c,b.indexOf('d'),b.indexOf('d/')+1);g=TNe(c,b.indexOf('y'),b.lastIndexOf('y')+1);f=F6b(d,e,EMe(g));f||h5b(a.a,'Not a valid date');return h5b(a.a,'Month does not match'),(new RegExp('^(^(0?[1-9]|1[012])$)$')).test(e)&&(h5b(a.a,'Day does not match'),(new RegExp('^((0?[1-9]|[12][0-9]|3[01]))$')).test(d))&&(h5b(a.a,'Year does not match'),(new RegExp('^(^\\\\d{4}$)$')).test(g))&&f}h5b(a.a,'Text input must not be empty or null');return false}\nfunction FMe(a){var b,c,d,e,f,g,h,i,j,k,l;if(a==null){throw uvb(new ANe(IZe))}j=a;f=a.length;i=false;if(f>0){b=(PYe(0,a.length),a.charCodeAt(0));if(b==45||b==43){a=a.substr(1);--f;i=b==45}}if(f==0){throw uvb(new ANe(Ykf+j+'\"'))}while(a.length>0&&(PYe(0,a.length),a.charCodeAt(0)==48)){a=a.substr(1);--f}if(f>(zNe(),xNe)[10]){throw uvb(new ANe(Ykf+j+'\"'))}for(e=0;e<f;e++){if(fMe((PYe(e,a.length),a.charCodeAt(e)))==-1){throw uvb(new ANe(Ykf+j+'\"'))}}l=0;g=vNe[10];k=wNe[10];h=Fvb(yNe[10]);c=true;d=f%g;if(d>0){l=-parseInt(a.substr(0,d),10);a=a.substr(d);f-=d;c=false}while(f>=g){d=parseInt(a.substr(0,g),10);a=a.substr(g);f-=g;if(c){c=false}else{if(wvb(l,h)<0){throw uvb(new ANe(Ykf+j+'\"'))}l=Evb(l,k)}l=Gvb(l,d)}if(wvb(l,0)>0){throw uvb(new ANe(Ykf+j+'\"'))}if(!i){l=Fvb(l);if(wvb(l,0)<0){throw uvb(new ANe(Ykf+j+'\"'))}}return l}\nfunction OFd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb;b=new ukc;JQb(b,(c=new s7b,JQb(c,(k=new Ymd,Ws(ho(k.a),(lxb(),(new _wb(mxb(mnf))).a)),SB(k,mnf),k)),JQb(c,(l=new Yze,pXb(l.a,xmf),rXb(l.a),(Txb(),l.tb).style[caf]=(xy(),laf),sXb(l.a,'jQuery-Mask-Plugin 1.14.10'),l)),JQb(c,(m=new s7b,JQb(m,(n=new B6b,rrc((!n.X&&(n.X=new urc(n)),n.X),r8e),ho(n.G).setAttribute(M3e,'eg: 000-00-0000000'),$pd(n.A).length==0||ro(n.A,c2e),_pd(n.A,'Phone Number'),Es(ho(n.G),M3e).length==0||ro(n.A,c2e),n.c=nnf,n)),JQb(m,(o=new B6b,rrc((!o.X&&(o.X=new urc(o)),o.X),r8e),ho(o.G).setAttribute(M3e,'eg: (00) 0000-0000'),$pd(o.A).length==0||ro(o.A,c2e),_pd(o.A,'Phone with Odd'),Es(ho(o.G),M3e).length==0||ro(o.A,c2e),o.c='(00) 0000-0000',o)),JQb(m,(p=new B6b,rrc((!p.X&&(p.X=new urc(p)),p.X),r8e),ho(p.G).setAttribute(M3e,'eg: (000) 000-000'),$pd(p.A).length==0||ro(p.A,c2e),_pd(p.A,'US Phone Number'),Es(ho(p.G),M3e).length==0||ro(p.A,c2e),p.c='(000) 000-000',p)),m)),JQb(c,(q=new s7b,JQb(q,(r=new B6b,rrc((!r.X&&(r.X=new urc(r)),r.X),r8e),ho(r.G).setAttribute(M3e,'eg: 00000-000'),$pd(r.A).length==0||ro(r.A,c2e),_pd(r.A,'CEP'),Es(ho(r.G),M3e).length==0||ro(r.A,c2e),r.c='00000-000',r)),JQb(q,(s=new B6b,rrc((!s.X&&(s.X=new urc(s)),s.X),r8e),ho(s.G).setAttribute(M3e,'eg: 000.000.000-00'),$pd(s.A).length==0||ro(s.A,c2e),_pd(s.A,'CPF'),Es(ho(s.G),M3e).length==0||ro(s.A,c2e),s.c='000.000.000-00',s)),JQb(q,(t=new B6b,rrc((!t.X&&(t.X=new urc(t)),t.X),r8e),ho(t.G).setAttribute(M3e,'eg: 000,000,000,000,000.00'),$pd(t.A).length==0||ro(t.A,c2e),_pd(t.A,'Money'),Es(ho(t.G),M3e).length==0||ro(t.A,c2e),t.c='000,000,000,000,000.00',t)),q)),JQb(c,(u=new s7b,JQb(u,(v=new B6b,rrc((!v.X&&(v.X=new urc(v)),v.X),r8e),ho(v.G).setAttribute(M3e,onf),$pd(v.A).length==0||ro(v.A,c2e),_pd(v.A,pnf),Es(ho(v.G),M3e).length==0||ro(v.A,c2e),v.c=qnf,v)),JQb(u,(w=new B6b,rrc((!w.X&&(w.X=new urc(w)),w.X),r8e),ho(w.G).setAttribute(M3e,rnf),$pd(w.A).length==0||ro(w.A,c2e),_pd(w.A,snf),Es(ho(w.G),M3e).length==0||ro(w.A,c2e),w.c=tnf,w)),JQb(u,(A=new B6b,rrc((!A.X&&(A.X=new urc(A)),A.X),r8e),ho(A.G).setAttribute(M3e,unf),$pd(A.A).length==0||ro(A.A,c2e),_pd(A.A,vnf),Es(ho(A.G),M3e).length==0||ro(A.A,c2e),A.c=wnf,A)),u)),JQb(c,(B=new hAe,kqd(B,(C=new gOe,C.a+='\\u2003&lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone Number\" placeholder=\"eg: 000-00-0000000\" mask=\"000-00-0000000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone with Odd\" placeholder=\"eg: (00) 0000-0000\" mask=\"(00) 0000-0000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"US Phone Number\" placeholder=\"eg: (000) 000-000\" mask=\"(000) 000-000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CEP\" placeholder=\"eg: 00000-000\" mask=\"00000-000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CPF\" placeholder=\"eg: 000.000.000-00\" mask=\"000.000.000-00\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Money\" placeholder=\"eg: 000,000,000,000,000.00\" mask=\"000,000,000,000,000.00\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br>',new Vwb(C.a)).a),zo(B.tb,y9e,true),B)),zo(c.tb,N5e,true),c));JQb(b,(d=new s7b,JQb(d,(D=new Ymd,iqd(D.b,'The mask will be placed from the right to the left if reverse is true (Default : false)'),Ws(ho(D.a),(new _wb(mxb('Reverse'))).a),SB(D,'Reverse'),D)),JQb(d,(F=new s7b,JQb(F,(G=new B6b,rrc((!G.X&&(G.X=new urc(G)),G.X),r8e),ho(G.G).setAttribute(M3e,onf),$pd(G.A).length==0||ro(G.A,c2e),_pd(G.A,pnf),Es(ho(G.G),M3e).length==0||ro(G.A,c2e),G.d.reverse=true,G.c=qnf,G)),JQb(F,(H=new B6b,rrc((!H.X&&(H.X=new urc(H)),H.X),r8e),ho(H.G).setAttribute(M3e,rnf),$pd(H.A).length==0||ro(H.A,c2e),_pd(H.A,snf),Es(ho(H.G),M3e).length==0||ro(H.A,c2e),H.d.reverse=true,H.c=tnf,H)),JQb(F,(I=new B6b,rrc((!I.X&&(I.X=new urc(I)),I.X),r8e),ho(I.G).setAttribute(M3e,unf),$pd(I.A).length==0||ro(I.A,c2e),_pd(I.A,vnf),Es(ho(I.G),M3e).length==0||ro(I.A,c2e),I.d.reverse=true,I.c=wnf,I)),F)),JQb(d,(J=new hAe,kqd(J,(K=new gOe,K.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Vwb(K.a)).a),zo(J.tb,y9e,true),J)),zo(d.tb,N5e,true),d));JQb(b,(e=new s7b,JQb(e,(L=new Ymd,iqd(L.b,'The textfield will automatically clears whenever the value is not match with the mask provided. (Default : false)'),Ws(ho(L.a),(new _wb(mxb(xnf))).a),SB(L,xnf),L)),JQb(e,(M=new s7b,JQb(M,(N=new B6b,rrc((!N.X&&(N.X=new urc(N)),N.X),r8e),N.d.clearIfNotMatch=true,ho(N.G).setAttribute(M3e,onf),$pd(N.A).length==0||ro(N.A,c2e),_pd(N.A,pnf),Es(ho(N.G),M3e).length==0||ro(N.A,c2e),N.c=qnf,N)),JQb(M,(O=new B6b,rrc((!O.X&&(O.X=new urc(O)),O.X),r8e),O.d.clearIfNotMatch=true,ho(O.G).setAttribute(M3e,rnf),$pd(O.A).length==0||ro(O.A,c2e),_pd(O.A,snf),Es(ho(O.G),M3e).length==0||ro(O.A,c2e),O.c=tnf,O)),JQb(M,(P=new B6b,rrc((!P.X&&(P.X=new urc(P)),P.X),r8e),P.d.clearIfNotMatch=true,ho(P.G).setAttribute(M3e,unf),$pd(P.A).length==0||ro(P.A,c2e),_pd(P.A,vnf),Es(ho(P.G),M3e).length==0||ro(P.A,c2e),P.c=wnf,P)),M)),JQb(e,(Q=new hAe,kqd(Q,(R=new gOe,R.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Vwb(R.a)).a),zo(Q.tb,y9e,true),Q)),zo(e.tb,N5e,true),e));JQb(b,(f=new s7b,JQb(f,(S=new Ymd,iqd(S.b,'Set whether you want to set on focus on your mask for easy selection.'),Ws(ho(S.a),(new _wb(mxb(ynf))).a),SB(S,ynf),S)),JQb(f,(T=new s7b,JQb(T,(U=new B6b,rrc((!U.X&&(U.X=new urc(U)),U.X),r8e),U.d.selectOnFocus=true,ho(U.G).setAttribute(M3e,onf),$pd(U.A).length==0||ro(U.A,c2e),_pd(U.A,pnf),Es(ho(U.G),M3e).length==0||ro(U.A,c2e),U.c=qnf,U)),JQb(T,(V=new B6b,rrc((!V.X&&(V.X=new urc(V)),V.X),r8e),V.d.selectOnFocus=true,ho(V.G).setAttribute(M3e,rnf),$pd(V.A).length==0||ro(V.A,c2e),_pd(V.A,snf),Es(ho(V.G),M3e).length==0||ro(V.A,c2e),V.c=tnf,V)),JQb(T,(W=new B6b,rrc((!W.X&&(W.X=new urc(W)),W.X),r8e),W.d.selectOnFocus=true,ho(W.G).setAttribute(M3e,unf),$pd(W.A).length==0||ro(W.A,c2e),_pd(W.A,vnf),Es(ho(W.G),M3e).length==0||ro(W.A,c2e),W.c=wnf,W)),T)),JQb(f,(X=new hAe,kqd(X,(Y=new gOe,Y.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Vwb(Y.a)).a),zo(X.tb,y9e,true),X)),zo(f.tb,N5e,true),f));JQb(b,(g=new s7b,JQb(g,(Z=new Ymd,iqd(Z.b,'We supported type safe Input Masks'),Ws(ho(Z.a),(new _wb(mxb('Types'))).a),SB(Z,'Types'),Z)),JQb(g,($=new B6b,rrc((!$.X&&($.X=new urc($)),$.X),z9e),ho($.G).setAttribute(M3e,'eg. A0A-1A1'),$pd($.A).length==0||ro($.A,c2e),_pd($.A,j$e),Es(ho($.G),M3e).length==0||ro($.A,c2e),$.c='S0S-0S0',$4b($,a.a),$)),JQb(g,(ab=new u6b,rrc((!ab.X&&(ab.X=new urc(ab)),ab.X),z9e),_pd(ab.A,'Integer'),Es(ho(ab.G),M3e).length==0||ro(ab.A,c2e),ab.c='000-00-000',$4b(ab,a.c),a.n.e=ab,ab)),JQb(g,(bb=new _5b,rrc((!bb.X&&(bb.X=new urc(bb)),bb.X),z9e),_pd(bb.A,'Double'),Es(ho(bb.G),M3e).length==0||ro(bb.A,c2e),bb.c='000-00-00000',$4b(bb,a.d),a.n.c=bb,bb)),JQb(g,(cb=new d6b,rrc((!cb.X&&(cb.X=new urc(cb)),cb.X),z9e),_pd(cb.A,znf),Es(ho(cb.G),M3e).length==0||ro(cb.A,c2e),cb.c='000-00-0000',$4b(cb,a.e),a.n.d=cb,cb)),JQb(g,(db=new y6b,rrc((!db.X&&(db.X=new urc(db)),db.X),z9e),_pd(db.A,'Long'),Es(ho(db.G),M3e).length==0||ro(db.A,c2e),db.c=nnf,$4b(db,a.f),a.n.f=db,db)),JQb(g,(eb=new Y5b,rrc((!eb.X&&(eb.X=new urc(eb)),eb.X),z9e),eb.b=knf,fb=NNe(NNe(NNe(knf.toLowerCase(),'m','0'),'d','0'),'y','0'),eb.c=fb,eb.ob?CRb(eb,$4b(eb,new Fmc(eb))):CRb(eb,Go(eb,new Dmc(eb),(!qB&&(qB=new Xz),qB))),_pd(eb.A,t0e),Es(ho(eb.G),M3e).length==0||ro(eb.A,c2e),$4b(eb,a.g),a.n.b=eb,eb)),zo(g.tb,N5e,true),g));JQb(b,(h=new s7b,JQb(h,(gb=new Ymd,iqd(gb.b,'Gets the value of the field with the mask.'),Ws(ho(gb.a),(new _wb(mxb(N9e))).a),SB(gb,N9e),gb)),JQb(h,(hb=new s7b,JQb(hb,(ib=new B6b,rrc((!ib.X&&(ib.X=new urc(ib)),ib.X),r8e),ho(ib.G).setAttribute(M3e,onf),$pd(ib.A).length==0||ro(ib.A,c2e),_pd(ib.A,pnf),Es(ho(ib.G),M3e).length==0||ro(ib.A,c2e),ib.d.reverse=true,ib.c=qnf,a.n.g=ib,ib)),JQb(hb,(jb=new ied,JQb(jb,(kb=new LXb,SYb(kb.k,N9e),kb.k.ob||JQb(kb,kb.k),NQb(kb,a.j),kb)),rrc((!jb.X&&(jb.X=new urc(jb)),jb.X),z9e),jb)),hb)),JQb(h,(lb=new hAe,kqd(lb,(mb=new gOe,mb.a+='inputMask.getValue();',new Vwb(mb.a)).a),zo(lb.tb,D9e,true),lb)),zo(h.tb,N5e,true),h));JQb(b,(i=new s7b,JQb(i,(nb=new Ymd,iqd(nb.b,'Gets the value of the field without the mask.'),Ws(ho(nb.a),(new _wb(mxb(Anf))).a),SB(nb,Anf),nb)),JQb(i,(ob=new s7b,JQb(ob,(pb=new B6b,rrc((!pb.X&&(pb.X=new urc(pb)),pb.X),r8e),ho(pb.G).setAttribute(M3e,onf),$pd(pb.A).length==0||ro(pb.A,c2e),_pd(pb.A,pnf),Es(ho(pb.G),M3e).length==0||ro(pb.A,c2e),pb.d.reverse=true,pb.c=qnf,a.n.a=pb,pb)),JQb(ob,(qb=new ied,JQb(qb,(rb=new LXb,SYb(rb.k,Anf),rb.k.ob||JQb(rb,rb.k),NQb(rb,a.i),rb)),rrc((!qb.X&&(qb.X=new urc(qb)),qb.X),z9e),qb)),ob)),JQb(i,(sb=new hAe,kqd(sb,(tb=new gOe,tb.a+='inputMask.getCleanValue();',new Vwb(tb.a)).a),zo(sb.tb,D9e,true),sb)),zo(i.tb,N5e,true),i));JQb(b,(j=new s7b,JQb(j,(ub=new Ymd,iqd(ub.b,'Programmatically controls the Input Mask main methods.'),Ws(ho(ub.a),(new _wb(mxb(Bnf))).a),SB(ub,Bnf),ub)),JQb(j,(vb=new s7b,JQb(vb,(wb=new B6b,rrc((!wb.X&&(wb.X=new urc(wb)),wb.X),r8e),ho(wb.G).setAttribute(M3e,onf),$pd(wb.A).length==0||ro(wb.A,c2e),_pd(wb.A,pnf),Es(ho(wb.G),M3e).length==0||ro(wb.A,c2e),wb.d.reverse=true,wb.c=qnf,a.n.i=wb,wb)),JQb(vb,(xb=new ied,JQb(xb,(yb=new LXb,yb.tb.style[g2e]=M9e,ERb(yb,(Ozc(),zzc)),SYb(yb.k,'Unmask'),yb.k.ob||JQb(yb,yb.k),fSb(yb,mvc),NQb(yb,a.k),yb)),JQb(xb,(zb=new LXb,SYb(zb.k,'mask'),zb.k.ob||JQb(zb,zb.k),NQb(zb,a.b),zb)),rrc((!xb.X&&(xb.X=new urc(xb)),xb.X),z9e),xb)),vb)),JQb(j,(Ab=new hAe,kqd(Ab,(Bb=new gOe,Bb.a+='\\u2003inputMask.mask(\"00.00\"); <br> inputMask.unmask();',new Vwb(Bb.a)).a),zo(Ab.tb,D9e,true),Ab)),zo(j.tb,N5e,true),j));return b}\nvar knf='MM/dd/yyyy',mnf='Basic Examples',nnf='000-00-0000000',onf='eg: 000.000.000.000',pnf='Ip Address',qnf='000.000.000.000',rnf='eg: 000000.00%',snf='Percentage',tnf='000000.00%',unf='eg: 0000 0000 0000 0000',vnf='Credit Card',wnf='0000 0000 0000 0000',xnf='Clear If not Match',ynf='Select on Focus',Anf='Get Clean Value',Bnf='Unmask and Mask control';Tvb(2653,324,O3e,Y5b);_.Xd=function Z5b(){return E6b(this.a,this.b)};var SP=mMe(lnf,'MaterialDateInputMask',2653);Tvb(2650,324,O3e,_5b);_.Xd=function a6b(){return DMe($wnd.$(ho(this.G)).cleanVal())};_.Yd=function b6b(a){var b;$5b((b=this,AF(a),b))};var TP=mMe(lnf,'MaterialDoubleInputMask',2650);Tvb(2651,324,O3e,d6b);_.Xd=function e6b(){return new KMe(OMe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function f6b(a){var b;c6b((b=this,AF(a),b))};var UP=mMe(lnf,'MaterialFloatInputMask',2651);Tvb(2649,324,O3e,u6b);_.Xd=function v6b(){return cNe(EMe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function w6b(a){var b;t6b((b=this,AF(a),b))};var XP=mMe(lnf,'MaterialIntegerInputMask',2649);Tvb(2652,324,O3e,y6b);_.Xd=function z6b(){return nNe(FMe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function A6b(a){var b;x6b((b=this,AF(a),b))};var YP=mMe(lnf,'MaterialLongInputMask',2652);Tvb(2702,1,{},G6b);var $P=mMe('gwt.material.design.addins.client.inputmask.base','DateInputParser',2702);Tvb(973,55,Q1e,GFd);_.Fe=function HFd(){Ize();lKb(this,new Kze(vhf,'An inputmask helps the user with the input by ensuring a predefined format. This can be useful for dates, numerics, phone numbers etc...','addins/inputmask/InputMask',''))};var T3=mMe(rbf,'InputMaskPresenter',973);Tvb(1366,65,R1e,NFd);var d4=mMe(rbf,'InputMaskView',1366);Tvb(1870,1,{},PFd);var c4=mMe(rbf,'InputMaskView_BinderImpl/Widgets',1870);Tvb(1871,1,r1e,QFd);_.Bd=function RFd(a){fnd(nF(a.a))};var V3=mMe(rbf,'InputMaskView_BinderImpl/Widgets/1',1871);Tvb(1880,1,w2e,SFd);_.od=function TFd(a){O5b(this.a.n.i,qnf)};var U3=mMe(rbf,'InputMaskView_BinderImpl/Widgets/10',1880);Tvb(1872,1,r1e,UFd);_.Bd=function VFd(a){fnd(cNe(EMe($wnd.$(ho(this.a.n.e.G)).cleanVal()))+'')};var W3=mMe(rbf,'InputMaskView_BinderImpl/Widgets/2',1872);Tvb(1873,1,r1e,WFd);_.Bd=function XFd(a){fnd(''+HMe(DMe($wnd.$(ho(this.a.n.c.G)).cleanVal())))};var X3=mMe(rbf,'InputMaskView_BinderImpl/Widgets/3',1873);Tvb(1874,1,r1e,YFd);_.Bd=function ZFd(a){fnd(''+(new KMe(OMe($wnd.$(ho(this.a.n.d.G)).cleanVal()))).a)};var Y3=mMe(rbf,'InputMaskView_BinderImpl/Widgets/4',1874);Tvb(1875,1,r1e,$Fd);_.Bd=function _Fd(a){fnd(''+Kvb(nNe(FMe($wnd.$(ho(this.a.n.f.G)).cleanVal())).a))};var Z3=mMe(rbf,'InputMaskView_BinderImpl/Widgets/5',1875);Tvb(1876,1,r1e,aGd);_.Bd=function bGd(a){fnd(dE(W5b(this.a.n.b)))};var $3=mMe(rbf,'InputMaskView_BinderImpl/Widgets/6',1876);Tvb(1877,1,w2e,cGd);_.od=function dGd(a){fnd($wnd.$(ho(this.a.n.a.G)).cleanVal())};var _3=mMe(rbf,'InputMaskView_BinderImpl/Widgets/7',1877);Tvb(1878,1,w2e,eGd);_.od=function fGd(a){fnd(nF(b5b(this.a.n.g)))};var a4=mMe(rbf,'InputMaskView_BinderImpl/Widgets/8',1878);Tvb(1879,1,w2e,gGd);_.od=function hGd(a){$wnd.$(ho(this.a.n.i.G)).unmask()};var b4=mMe(rbf,'InputMaskView_BinderImpl/Widgets/9',1879);Tvb(814,1,W9e);_.Yc=function qGd(){DOb(this.b,jGd(this.a.a))};var vNe,wNe,xNe,yNe;var DF=pMe('long','J');aZe(Kq)(10);\n//# sourceURL=gwtmaterialdemo-10.js\n")
