function J(){this.B=function(a){for(var b=0;24>b;b++)this[String.fromCharCode(97+b)]=a[b]||0;.01>this.c&&(this.c=.01),a=this.b+this.c+this.e,.18>a&&(a=.18/a,this.b*=a,this.c*=a,this.e*=a)}}var W=new function(){this.A=new J;var a,b,c,d,e,f,g,h,i,j,k,l;this.reset=function(){var a=this.A;d=100/(a.f*a.f+.001),e=100/(a.g*a.g+.001),f=1-a.h*a.h*a.h*.01,g=-a.i*a.i*a.i*1e-6,a.a||(k=.5-a.n/2,l=5e-5*-a.o),h=1+a.l*a.l*(0<a.l?-.9:10),i=0,j=1==a.m?0:(1-a.m)*(1-a.m)*2e4+32},this.D=function(){this.reset();var d=this.A;return a=d.b*d.b*1e5,b=d.c*d.c*1e5,c=d.e*d.e*1e5+12,3*((a+b+c)/3|0)},this.C=function(m,n){var o=this.A,p=1!=o.s||o.v,q=o.v*o.v*.1,r=1+3e-4*o.w,s=o.s*o.s*o.s*.1,t=1+1e-4*o.t,u=1!=o.s,v=o.x*o.x,w=o.g,x=o.q||o.r,y=o.r*o.r*o.r*.2,z=o.q*o.q*(0>o.q?-1020:1020),A=o.p?((1-o.p)*(1-o.p)*2e4|0)+32:0,B=o.d,C=o.j/2,D=o.k*o.k*.01,E=o.a,F=a,G=1/a,H=1/b,I=1/c,o=5/(1+o.u*o.u*20)*(.01+s);o>.8&&(o=.8);for(var J,K,L,M,N,o=1-o,O=!1,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=Array(1024),$=Array(32),_=Z.length;_--;)Z[_]=0;for(_=$.length;_--;)$[_]=2*Math.random()-1;for(_=0;n>_;_++){if(O)return _;if(A&&++X>=A&&(X=0,this.reset()),j&&++i>=j&&(j=0,d*=h),f+=g,d*=f,d>e&&(d=e,w>0&&(O=!0)),K=d,C>0&&(Y+=D,K*=1+Math.sin(Y)*C),K|=0,8>K&&(K=8),E||(k+=l,0>k?k=0:k>.5&&(k=.5)),++Q>F)switch(Q=0,++P){case 1:F=b;break;case 2:F=c}switch(P){case 0:R=Q*G;break;case 1:R=1+2*(1-Q*H)*B;break;case 2:R=1-Q*I;break;case 3:R=0,O=!0}x&&(z+=y,L=0|z,0>L?L=-L:L>1023&&(L=1023)),p&&r&&(q*=r,1e-5>q?q=1e-5:q>.1&&(q=.1)),N=0;for(var ab=8;ab--;){if(V++,V>=K&&(V%=K,3==E))for(J=$.length;J--;)$[J]=2*Math.random()-1;switch(E){case 0:M=k>V/K?.5:-.5;break;case 1:M=1-V/K*2;break;case 2:M=V/K,M=6.28318531*(M>.5?M-1:M),M=1.27323954*M+.405284735*M*M*(0>M?1:-1),M=.225*((0>M?-1:1)*M*M-M)+M;break;case 3:M=$[Math.abs(32*V/K|0)]}p&&(J=U,s*=t,0>s?s=0:s>.1&&(s=.1),u?(T+=(M-U)*s,T*=o):(U=M,T=0),U+=T,S+=U-J,M=S*=1-q),x&&(Z[W%1024]=M,M+=Z[(W-L+1024)%1024],W++),N+=M}N=.125*N*R*v,m[_]=N>=1?32767:-1>=N?-32768:32767*N|0}return n}};window.jsfxr=function(a){W.A.B(a);var b=W.D();a=new Uint8Array(4*((b+1)/2|0)+44);var b=2*W.C(new Uint16Array(a.buffer,44),b),c=new Uint32Array(a.buffer,0,44);c[0]=1179011410,c[1]=b+36,c[2]=1163280727,c[3]=544501094,c[4]=16,c[5]=65537,c[6]=44100,c[7]=88200,c[8]=1048578,c[9]=1635017060,c[10]=b;for(var b=b+44,c=0,d="data:audio/wav;base64,";b>c;c+=3)var e=a[c]<<16|a[c+1]<<8|a[c+2],d=d+("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>18]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>12&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>6&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[63&e]);return d};var aa;!function(){function a(){this.sounds={}}a.prototype.add=function(a,b,c){this.sounds[a]=[],c.forEach(function(c,d){this.sounds[a].push({tick:0,count:b,pool:[]});for(var e=0;b>e;e++){var f=new Audio;f.src=jsfxr(c),this.sounds[a][d].pool.push(f)}},this)},a.prototype.play=function(a){var b=this.sounds[a],c=b.length>1?b[Math.floor(Math.random()*b.length)]:b[0];c.pool[c.tick].play(),c.tick<c.count-1?c.tick++:c.tick=0},aa=new a,aa.add("check",1,[[2,,.1747,,.1291,.6731,.2,-.2999,,,,,,.4368,.1862,,.28,,1,,,.1596,,.5]]),aa.add("move",5,[[3,,.0316,,.1483,.5871,,-.6609,,,,,,,,,,,1,,,.0227,,.25]]),aa.add("capture",5,[[0,,.3065,,.2516,.36,,.1584,,,,,,.1149,,,,,1,,,.2188,,.25]]),aa.add("checkmate",1,[[1,,.2402,,.3917,.2242,,.1535,,,,,,,,.5609,,,1,,,,,.5]])}(),window.onload=function(){"use strict";function a(){$=Y.createElement("div"),$.id="root",Z.appendChild($);var a=$.style;a.position="absolute",a.left="50%",a.top="0",a.marginLeft=-db/2+"px ",A(),C(),H(),B(),c(0),j()}function b(){for(var a=Ab.length-1,b=0;b<Ab.length;b++)if(xb<Ab[b]){b>0&&(a=b-1);break}c(a),P=null,Bb=-1,rb++}function c(a){function b(){var a=_.ceil(f/2);Ab.push(h+a);for(var b=0;f>b;b++){if(zb[h]=[],b==a)for(var c=0;eb>c;c++)zb[h][c]={checkPoint:!0};h++}}function c(){var b,c=Array.prototype.slice.call(arguments);b="object"==typeof c[0]?c.shift():{};var d,f,i,j,k=a<Ab.length,l=h;for(i=c.length-1;i>=0;i--){if(f=c[i],f.length>eb)throw new Error;if(zb[h]=[],k&&""!==f)for(j=0;j<f.length;j++){var m=f.charAt(j);if(" "!==m&&"."!==m){var n=m.toLowerCase(),o=e(n,h,j);b.showThreat==n&&(d=zb[h][j]),b.intro&&(o.piece.intro=!0)}}h++}if(d)for(d.piece.showThreat=!0,i=l;h>i;i++)for(f=zb[i],j=0;eb>j;j++){var p=g(i,j);p&&p.piece==d.piece&&(zb[i][j]||(zb[i][j]={}),zb[i][j].showThreat=!0)}}zb&&d(),zb=[],Ab=[0];var f=5,h=0;c({intro:!0},"","","",Kb?"  reqr":"",Kb?"   kk":"","","","","","","","kkkkkkkk"),c({showThreat:"p"},"","","    p","","","","",""),c("  pppp","  pppp","","  p","","     p",""," p"),c("","pppppp","","  pppppp","","pppppp","",""),c("","pp   ppp","  p p","   p","","","",""),c("","   pp","p p  p p"," p    p","","","",""),c("","    ppp","     p","ppp"," p   ppp","      p","",""),b(),c({showThreat:"r"},"","   p","","   r","","   p","",""),c("","","r"," r","  r","   r","    r","     r","pppppp"),c("","","","       p","    rp r","","","pp","r   p  p","p"),c("","p     r","r     p","r    p","","   p","   p","p  ppppp",""),b(),c({showThreat:"b"},"","","","","...b","","","",""),c(""," p p p","b b b b","","","","","",""),c("","r.p..p.r","p......p","","b      b","pp....pp","",""),c("","r"," r  p..b","     ..r","....p","...p","..p","pp.....p"),b(),c({showThreat:"k"},"","","   k","","","","",""),c("p","r.....p","","","......kk","","pkk",""),c("p   pppp","r    b r","   p b p","","",""," k","","",""),b(),c({showThreat:"l"},"","","","   l","","","",""),c("l.llllll","l.l....l","..l.llll",".ll.l   ","l...l l ","l.lll l ","l.    l ","lllllll "),c(" p  pll"," l p   l","lpl p p ","     lp","ll ll l"," l  l","",""),c("","  r","  llk","     .","   l ..","   p  pb","  . .  l","  p  l","","","","",""),b(),c("","c","","","","",""),Q=h,0===a?(Eb=e(Ob,5,4).piece,xb=2):(xb=Ab[a],Eb=e(Ob,xb,3).piece,xb-=4)}function d(){for(var a in zb)if(zb[a])for(var b in zb[a]){var c=zb[a][b];c&&c.piece&&G(c.piece)}}function e(a,b,c){var d={shape:null,type:a,row:b,col:c,showThreat:!1};if(zb[b]||(zb[b]=[]),zb[b][c]||(zb[b][c]={}),zb[b][c].piece=d,a==Wb)for(var e=0;eb>e;e++)3!=e&&4!=e&&(zb[b][e]||(zb[b][e]={}),zb[b][e].wall=!0);return zb[b][c]}function f(a,b){var c=Eb.col,d=Eb.row;0>b?b=0:b>=eb&&(b=eb-1);var e=_.floor(xb),f=Bb-2;if(e>a?a=e:a>=f&&(a=f),b!=c||a!=d){var h=zb[d][c];zb[a]||(zb[a]=[]);var j=zb[a][b];if(j||(j={},zb[a][b]=j),!j.wall){var l=g(a,b);l?(aa.play("check"),Eb.invalid=!0,Eb.invalidCol=b,Eb.invalidRow=a,Eb.threateningPiece=l.piece,b=c,a=d,sb++):(Eb.invalid=!1,j.piece?(i(j.piece),qb++,aa.play("capture")):aa.play("move"),h.piece=null,j.piece=Eb),Eb.oldCol=c,Eb.oldRow=d,Eb.anim=!0,Eb.animStartTime=ob,Eb.col=b,Eb.row=a,a>=Q&&k(!0,!0)}}}function g(a,b){var c;if(c=h(a,b,Ub))return c;if(c=h(a+1,b-1,Qb)||h(a+1,b+1,Qb))return c;var d,e,f;for(e=b-1;e>=0;e--)if(f=h(a,e),f&&f.piece){if(f.piece.type==Rb)return f;break}for(e=b+1;eb>=e;e++)if(f=h(a,e),f&&f.piece){if(f.piece.type==Rb)return f;break}for(d=a+1;a+eb>=d;d++)if(f=h(d,b),f&&f.piece){if(f.piece.type==Rb)return f;break}for(d=a-1;d>=a-eb;d--)if(f=h(d,b),f&&f.piece){if(f.piece.type==Rb)return f;break}for(e=b-1,d=a-1;e>=0;e--,d--)if(f=h(d,e),f&&f.piece){if(f.piece.type==Sb)return f;break}for(e=b+1,d=a-1;eb>e;e++,d--)if(f=h(d,e),f&&f.piece){if(f.piece.type==Sb)return f;break}for(e=b-1,d=a+1;e>=0;e--,d++)if(f=h(d,e),f&&f.piece){if(f.piece.type==Sb)return f;break}for(e=b+1,d=a+1;eb>e;e++,d++)if(f=h(d,e),f&&f.piece){if(f.piece.type==Sb)return f;break}return c=h(a+2,b-1,Tb)||h(a-2,b-1,Tb)||h(a+2,b+1,Tb)||h(a-2,b+1,Tb)||h(a+1,b-2,Tb)||h(a-1,b-2,Tb)||h(a+1,b+2,Tb)||h(a-1,b+2,Tb)}function h(a,b,c){var d=zb[a];if(d){var e=d[b];if(e&&e.piece&&(!c||e.piece.type==c))return e}}function i(a){if(Db.push(a),a.removedTime=ob,a.justRemoved=!0,a.showThreat)for(var b=a.row-eb;b<a.row+eb;b++){var c=zb[b];if(c)for(var d=a.col-eb;d<a.col+eb;d++)c[d]&&(c[d].showThreat=!1)}}function j(){window.stb&&stb(),vb?(0===Dc.space||bc.click)&&(k(!1),Dc.space=-1):(Kb?(Nb>=0&&(0===Dc.space||bc.click)&&(Dc.space=-1,o()),n()):(l(),m()),t()),bc.click=!1,window.ste&&ste(),Cb&&requestAnimationFrame(j)}function k(a,c){c?(Cb=!1,vb=!0,tb.style.display="block"):a!=vb&&(vb=a,vb?ub.style.display="block":(ub.style.display="none",b()))}function l(){if(!(0>=Bb||Eb.invalid||Kb)){var a=0,b=0;ac||((Dc.down==$b||0===Dc.down)&&(b=-1),(Dc.up==$b||0===Dc.up)&&(b=1),(Dc.left==$b||0===Dc.left)&&(a=-1),(Dc.right==$b||0===Dc.right)&&(a=1),(a||b)&&(a?(Dc.up<=$b&&Dc.up>0&&(b=1),Dc.down<=$b&&Dc.down>0&&(b=-1)):(Dc.left<=$b&&Dc.left>0&&(a=-1),Dc.right<=$b&&Dc.right>0&&(a=1)),f(Eb.row+b,Eb.col+a),ac=!0));var c;if(ac){var d=!0;for(c in Cc)if(Cc[c]){d=!1;break}ac=!d}for(c in Dc)Dc[c]>=1?Dc[c]++:Dc[c]>_b&&Dc[c]--;if(!Eb.anim&&bc.x>0&&bc.x<db&&bc.y>cb&&bc.y<db+cb){var e=bc.x/db,g=(bc.y-cb)/db;x(e,g),dc=_.floor(x.res.x*eb),cc=_.floor(x.res.y*eb+xb),a=dc-Eb.col,b=cc-Eb.row,a>1?a=1:-1>a&&(a=-1),b>1?b=1:-1>b&&(b=-1),cc=Eb.row+b,dc=Eb.col+a,bc.click&&(a||b)&&f(cc,dc)}else dc=-1,cc=-1}}function m(){if(ob=Date.now(),P&&(xb+=yb*(ob-P)*pb),Eb.row<xb-.9){if(wb)if(g(Eb.row+1,Eb.col))if(g(Eb.row+1,Eb.col+1)){if(g(Eb.row+1,Eb.col-1))return void k(!0);f(Eb.row+1,Eb.col+1)}else f(Eb.row+1,Eb.col+1);else f(Eb.row+1,Eb.col);else k(!0);aa.play("checkmate")}var a=_.floor(xb)+gb;if(!P||a>Bb){for(var b,c,d,e=a-gb-5;e>Bb-gb-5;e--)if(b=zb[e])for(d=!0,c=0;eb>c;c++)b[c]&&b[c].piece&&G(b[c].piece);for(e=Bb+1;a>=e;e++)if(b=zb[e])for(d=!0,c=0;eb>c;c++){var h=eb/2;c%2===0?h+=c/2:h-=(c+1)/2,b[h]&&b[h].piece&&F(b[h].piece)}Bb=a}P=ob}function n(){var a,b,c,d,e=zb[8][3].piece,f=Eb;ob=Date.now();var g=!R;if(g&&(R=ob,r(),e&&(e.talking=!1,e.talkingStarTime=ob),f.talking=!1,f.talkingStarTime=ob),-1==Nb)kb.style.opacity=0,mb.style.opacity=0,Lb=0,m(),P=null,Nb=0;else if(0===Nb);else if(1==Nb)g&&(I(!0,["Surrender Black King !","Your army is defeated, and your Queen is mine !"]),e.talking=!0);else if(2==Nb){if(g)for(J(),b=0;eb>b;b++)c=zb[0][b],p(c.piece,{row:2,col:b+(b%2===0?1:-1)},.1*b,.5)}else if(3==Nb)g&&(I(!0,["You thought I'd only bring two knights to battle ?","You are surrounded,","admit defeat now and I shall be merciful."]),e.talking=!0);else if(4==Nb)g&&(I(!1,["Never !"]),f.talking=!0);else if(5==Nb)g&&(I(!0,["As you wish...","I am taking the prisoner back to the castle.","Knights, capture him, I want him alive."]),e.talking=!0);else if(6==Nb){if(g){for(J(),b=2;5>=b;b++)c=zb[8][b],c&&(p(c.piece,{row:9},0,.5),p(c.piece,{row:10},1,.5));p(zb[7][3].piece,{row:8,col:1},.5,.5),p(zb[7][3].piece,{row:10,col:2},1.5,.5),p(zb[7][4].piece,{row:8,col:6},.5,.5),p(zb[7][4].piece,{row:10,col:5},1.5,.5)}}else if(7==Nb){if(g){var h='<animate attributeType="CSS" attributeName="fill" from="red" to="orange" dur="0.5s" repeatCount="indefinite"/>';for(I(!1,['It looks like our roles are <tspan fill="red" font-family="impact">REVERSED'+h+"</tspan> my Queen.","Today, it is my turn to protect you !"]),f.talking=!0,a=1;2*eb>a;a++)if(d=zb[a])for(b=0;eb>b;b++)c=d[b],c&&c.piece&&c.piece.intro&&(G(c.piece),d[b]={})}}else 8==Nb&&(g&&(J(),Hb.style.display="none"),Mb=(ob-R)/4e3,Mb>1?Nb=9:(Mb=_.sin(Mb*ab/2),Lb=(Mb-.2)/.6,0>Lb?Lb=0:Lb>1&&(Lb=1),kb.style.opacity=Lb,Mb>.8&&(Jb.style.opacity=(1-Mb)/.2,mb.style.opacity=1-Jb.style.opacity)));if(g)if(W.length){Hb.style.opacity=0;var i=W[0].e==S&&W[0].to._y==wc,j=W[W.length-1],k=j.du+j.de;i?p(Hb.style,{opacity:1},k+2,.1):Nb>1&&8>Nb&&q(o,k)}else Hb.style.opacity=1;s(),9==Nb&&(Kb=!1,Lb=1,Jb.style.display="none",kb.style.opacity=1,mb.style.opacity=1,Hb.style.display="none",J(),Eb.talking=!1),P=ob}function o(){Nb++,R=null}function p(a,b,c,d){W.push({e:a,to:b,de:c||0,du:d})}function q(a,b){W.push({cb:a,de:0,du:b})}function r(){if(W)for(var a=0;a<W.length;a++){var b=W[a];if(b.e)for(var c in b.to)b.e[c]=b.to[c]}W=[]}function s(){for(var a,b=(ob-R)*pb,c=0;c<W.length;c++){var d=W[c];if(b<=d.de);else if(b>=d.de+d.du)d.cb&&(d.cb(),d.cb=null);else if(d.e){if(!d.from){d.from={};for(a in d.to)d.from[a]=d.e[a]}var e=(b-d.de)/d.du;e=_.sin(e*ab/2);for(a in d.to)d.e[a]=d.from[a]*(1-e)+d.to[a]*e}}S.setAttributeNS(null,"y",S._y)}function t(){for(var a,b,c=Bb-gb-5;Bb>=c;c++)if(b=zb[c])for(var d=0;eb>d;d++)if(b[d]&&b[d].piece){var e=b[d].piece;if(u(e.row,e.col,e),e.talking){var f=-_.abs(_.sin((ob-e.talkingStarTime)*ab/800))*fb*.2;e.y+=f}v(e),e.y>Eb.y&&(!a||a.y>e.y)&&(a=e)}var g;if(Eb.anim)if(g=Eb.invalid?pb*(ob-Eb.animStartTime)/Gb:pb*(ob-Eb.animStartTime)/Fb,0>g||g>=1)Eb.anim=!1,Eb.invalid&&Eb.threateningPiece&&(Eb.threateningPiece.shape.style.filter="none"),Eb.invalid=!1;else if(g=_.sin(g*ab*.5),Eb.invalid){u(Eb.row,Eb.col);var h=.4*(.5>g?g:1-g)*fb,i=_.sin(6*g*ab)*h;Eb.x+=i,v(Eb),Eb.threateningPiece.shape.style.filter="url(#"+Yb+")"}else u(Eb.oldRow,Eb.oldCol),Eb.opacity=g*Eb.opacity+(1-g)*u.res.opacity,Eb.scale=g*Eb.scale+(1-g)*u.res.scale,Eb.x=g*Eb.x+(1-g)*u.res.x,Eb.y=g*Eb.y+(1-g)*u.res.y,v(Eb);for(l=0,n=Db.length;n>l;l++){var j=Db[l],k=(ob-j.removedTime)/1e3;k>1?(G(j),Db[l]=Db[n-1],n--,l--,Db=Db.slice(0,n)):(j.justRemoved&&(j.justRemoved=!1,j.removedX=j.x,j.removedY=j.y),j.x=j.x<.5*db?j.removedX-k*db:j.removedX+k*db,j.y=j.removedY-_.sin(k*ab)*db*.4,v(j))}Eb.anim&&Eb.invalid?(V||(V={onTop:!0,type:Zb}),V.shape||(F(V),V.row=Eb.invalidRow,V.col=Eb.invalidCol),u(Eb.invalidRow,Eb.invalidCol,V),V.scale=1,V.y-=g*V.scale*fb*.2,V.opacity=.8>g?1:1-(g-.8)/(1-.8),v(V)):V&&V.shape&&G(V),a&&a.shape&&Eb.shape&&Eb.shape.nextSibling!=a.shape&&yc.insertBefore(Eb.shape,a.shape),jb.save(),jb.translate(0,cb),jb.fillStyle=ec,jb.beginPath(),jb.rect(0,0,db,db),jb.fill(),jb.clip();var l,m,n,o=_.floor(xb),p=-(xb-_.floor(xb)),q={},r={},s={},t={};for(l=-1;gb>l;l++)for(m=0;eb>m;m++){if(w(m/eb,(l+p)/eb,q),w(m/eb,(l+1+p)/eb,t),w((m+1)/eb,(l+1+p)/eb,s),w((m+1)/eb,(l+p)/eb,r),jb.beginPath(),jb.moveTo(q.x*db,q.y*db),jb.lineTo(r.x*db,r.y*db),jb.lineTo(s.x*db,s.y*db),jb.lineTo(t.x*db,t.y*db),jb.closePath(),jb.lineWidth=1,jb.fillStyle=-1!=cc&&-1!=dc&&l+o==cc&&m==dc?hc:(l+m+o)%2===0?fc:gc,jb.fill(),b=zb[l+o],b&&b[m]){var x=b[m];x.showThreat&&(jb.fillStyle="rgba("+kc+",0.5)",jb.fill()),x.checkPoint&&(jb.fillStyle=lc,jb.fill())}if(Eb.invalid&&Eb.invalidCol==m&&Eb.invalidRow==l+o){var y=1.5*(.5>g?g:1-g);jb.fillStyle="rgba("+kc+","+y+")",jb.fill()}}jb.restore()}function u(a,b,c){c=c||u.res,w((b+.5)/eb,(a-xb+.5)/eb);var d=.02,e=1;return w.res.y<mc?e=0:w.res.y<nc&&(e=1-(d-w.res.y)/(nc-mc)),c.opacity=e,c.x=w.res.x*db,c.y=w.res.y*db+cb,c.scale=w.res.scaleX,c}function v(a){a.shape&&(a.shape.style.opacity=a.opacity,a.scale>0&&a.shape.setAttributeNS(null,"transform","scale("+a.scale+") translate("+a.x/a.scale+","+a.y/a.scale+")"))}function w(a,b,c){return c=c||w.res,c.y=y(b,oc,pc,qc),c.scaleX=y(b,rc,sc,tc),c.scaleY=c.scaleX,c.x=(1-c.scaleX)/2+a*c.scaleX,Kb&&(c.x=Lb*c.x+(1-Lb)*a,c.y=Lb*c.y+(1-Lb)*(1-b),c.scaleX=Lb*c.scaleX+1*(1-Lb),c.scaleY=c.scaleX),c}function x(a,b,c){c=c||x.res,c.y=z(b,oc,pc,qc,!1);var d=y(c.y,rc,sc,tc);return c.x=(a-(1-d)/2)/d,c}function y(a,b,c,d){return b*a*a+c*a+d}function z(a,b,c,d,e){return e?(-c+_.sqrt(c*c-4*b*(d-a)))/(2*b):(-c-_.sqrt(c*c-4*b*(d-a)))/(2*b)}function A(){$.appendChild(ib),ib.width=db,ib.height=db+cb}function B(){var a=lb,b=a.createLinearGradient(0,0,0,db),c="rgba(10,20,25,",d=")";b.addColorStop(0,c+0+d),b.addColorStop(.2,c+0+d),b.addColorStop(1,c+.5+d),a.fillStyle=b,a.fillRect(0,0,db,db),a.restore(),kb.style.top=cb+"px",kb.style.pointerEvents="none",$.appendChild(kb)}function C(){var a=.02*db;mb.width=db,mb.height=cb+a;var b=nb;b.clearRect(0,0,db,db),b.save(),b.fillStyle="#FF8601",b.beginPath(),b.rect(0,0,db,cb),b.fill(),b.clip(),b.fillStyle="#FFE7CA";var c=db/4;b.beginPath(),b.arc(db/2,cb+.3*c,c,0,ab,!0),b.fill(),b.restore(),b.beginPath(),b.fillStyle="rgb(10,20,25)";for(var d=40,e=[0,.7,.1,.3,.2,1,.3,.5,.35,.8,.42,.5,.55,.9,.7,.45,.8,1.1,.88,.4,1,.8],f=0;f<e.length;f+=2){var g=e[f]*db,h=cb-d*e[f+1];0===f?b.moveTo(g,h):b.lineTo(g,h)}b.lineTo(db,cb),b.lineTo(0,cb),b.fill(),b.restore(),b.save(),b.translate(0,cb);var i=b.createLinearGradient(0,0,0,a),j="rgba(10,20,25,",k=")";i.addColorStop(0,j+1+k),i.addColorStop(1,j+0+k),b.fillStyle=i,b.fillRect(0,0,db,a),b.restore(),$.appendChild(mb)}function D(a,b,c){var d=Y.createElement("canvas");return c&&(d.id=c),d.width=a,d.height=b,d}function E(a){return a.getContext("2d")}function F(a){var b;if(zc[a.type]||(zc[a.type]=[]),b=zc[a.type].length?zc[a.type].pop():uc(a.type),yc.firstChild&&!a.onTop?yc.insertBefore(b,yc.firstChild):yc.appendChild(b),a.shape)throw new Error;a.shape=b,b.style.filter="none"}function G(a){a.shape&&(zc[a.type].push(a.shape),yc.removeChild(a.shape),a.shape=null)}function H(){function a(a,b){return g(["M",[a,b],"L",[a+1,b],"L",[a+.5,b-3],"L",[a,b]])}function b(a,b,c){var e=Y.createElementNS(r,"g");e.setAttributeNS(null,"id",a),c||e.appendChild(d());for(var f=0;f<b.length;f++){var g=b[f];g.getAttributeNS(null,"x")||(g.setAttributeNS(null,"x",-fb/2),g.setAttributeNS(null,"y",-fb)),e.appendChild(g)}return v.appendChild(e),e}function c(a){var b=Y.createElementNS(r,"filter");return b.setAttributeNS(null,"id",a),L(b,{x:"0",y:"0",width:"100%",height:"100%","color-interpolation-filters":"sRGB"}),K(b,'<feFlood flood-color="rgba(255,0,0,0.3)" result="COLOR"></feFlood><feComposite operator="atop" in="COLOR" in2="SourceGraphic"></feComposite>'),v.appendChild(b),b}function d(){var a=f(5,8,3.1,1.8);return M(a,"rgba(0,0,0,0.2)","none"),a}function e(a,b,c){var d=Y.createElementNS(r,"circle");return L(d,{cx:j(a-w),cy:j(b-x),r:j(c)}),d}function f(a,b,c,d){var e=Y.createElementNS(r,"ellipse");return L(e,{cx:j(a-w),cy:j(b-x),rx:j(c),ry:j(d)}),e}function g(a,b){var c=Y.createElementNS(r,"path");return c.setAttributeNS(null,"d",h(a)),b&&L(c,b),c}function h(a){for(var b="",c=0;c<a.length;c++){var d=a[c];"object"==typeof d&&(d=j(d[0]-w)+","+j(d[1]-x)),b+=d+" "}return b}function i(a,b){var c=Y.createElementNS(r,"use");return L(c,b),c.setAttributeNS(s,"xlink:href","#"+a),c.setAttribute("xmlns:xlink",s),c}function j(a){return.1*_.round(fb*a)}function k(a,b){var c=Y.createElementNS(r,"text");c.setAttributeNS(null,"id",a),L(c,{x:"-40","font-size":"28",fill:"red",stroke:"black","stroke-width":"1","font-family":"Impact"}),K(c,b),v.appendChild(c)}function l(){ub=Y.createElementNS(r,"g"),ub.style.display="none",vc.appendChild(ub);var a=Y.createElementNS(r,"rect");L(a,{x:0,y:0,width:"100%",height:"100%",fill:"rgba(0,0,0,0.5)"}),ub.appendChild(a);var b=Y.createElementNS(r,"text");L(b,{x:"50%",y:"50%","font-size":"48px",fill:"orange",stroke:"red","stroke-width":"2px","text-anchor":"middle","font-family":"Impact"}),K(b,"CHECKMATE !"),ub.appendChild(b),b=Y.createElementNS(r,"text"),L(b,{x:"50%",y:"60%","font-size":"22px",fill:"white",stroke:"black","stroke-width":"1px","text-anchor":"middle","font-family":"Impact"}),K(b,'<tspan x="50%">Press <tspan style="fill:orange;">SPACE</tspan> or <tspan style="fill:orange;">CLICK</tspan></tspan><tspan x="50%" dy="1.5em">to restart from the last checkpoint.</tspan>'),ub.appendChild(b)}function m(){Jb=Y.createElementNS(r,"g"),vc.appendChild(Jb);var a=Y.createElementNS(r,"rect");L(a,{x:0,y:0,width:"100%",height:cb,fill:ec,stroke:"#000"}),Jb.appendChild(a);var b=Y.createElementNS(r,"text");L(b,{x:"50%",y:"60","font-size":"48px",fill:"orange",stroke:"red","stroke-width":"2px","text-anchor":"middle","font-family":"Impact"}),K(b,'CHESS<tspan style="font-style:italic;">PURSUIT</tspan>'),Jb.appendChild(b)}function n(){Hb=Y.createElementNS(r,"text"),L(Hb,{x:"50%",y:cb+db-10,"font-size":"22px",fill:"white",stroke:"black","stroke-width":"1px","text-anchor":"middle","font-family":"Impact"}),K(Hb,'Press <tspan style="fill:orange;">SPACE</tspan> or <tspan style="fill:orange;">CLICK</tspan>'),vc.appendChild(Hb)}function o(){Ib=Y.createElementNS(r,"text"),L(Ib,{x:"50%",y:"50%","font-size":"32px",fill:"orange",stroke:"black","stroke-width":"1px","text-anchor":"middle","font-family":"Impact"}),K(Ib,"PAUSED"),Ib.style.display="none",vc.appendChild(Ib)}function p(){var a=db-2*hb,b=.3*db-2*hb;xc=db+cb,wc=cb+db-b-hb,S=Y.createElementNS(r,"svg"),S._y=xc,L(S,{x:hb,y:xc,width:a,height:b}),vc.appendChild(S);var c=Y.createElementNS(r,"rect");L(c,{width:"100%",height:"100%",fill:"rgba(0,0,0,0.8)",stroke:"#fff","stroke-width":2}),S.appendChild(c),T=Y.createElementNS(r,"text"),L(T,{x:10,y:20,"font-size":"18px",fill:"#fff","text-anchor":"left","font-family":"Impact"}),S.appendChild(T),U=Y.createElementNS(r,"text"),L(U,{x:10,y:40,"font-size":"16px",fill:"#fff","text-anchor":"left","font-family":"sans-serif"}),S.appendChild(U)}function q(){tb=Y.createElementNS(r,"g"),tb.style.display="none",vc.appendChild(tb);var a=Y.createElementNS(r,"rect");L(a,{x:0,y:0,width:"100%",height:"100%",fill:"rgba(0,0,0,0.5)"}),tb.appendChild(a);var b=Y.createElementNS(r,"text");L(b,{x:"50%",y:"50%","font-size":"48px",fill:"#5f7",stroke:"black","stroke-width":"2px","text-anchor":"middle","font-family":"Impact"}),K(b,"YOU WIN !"),tb.appendChild(b),b=Y.createElementNS(r,"text"),L(b,{x:"50%",y:"60%","font-size":"22px",fill:"white",stroke:"black","stroke-width":"1px","text-anchor":"middle","font-family":"Impact"}),K(b,"Alas, your Queen is in another castle..."),tb.appendChild(b)}uc=i;var r="http://www.w3.org/2000/svg",s="http://www.w3.org/1999/xlink",t=db,u=db+cb;vc=Y.createElementNS(r,"svg"),vc.setAttribute("xmlns",r),vc.setAttributeNS(null,"viewBox","0 0 "+t+" "+u),vc.setAttributeNS(null,"width",t),vc.setAttributeNS(null,"height",u),$.appendChild(vc);var v=Y.createElementNS(r,"defs");vc.appendChild(v),yc=Y.createElementNS(r,"g"),vc.appendChild(yc),m(),c(Yb),k(Zb,"CHECK"),l(),p(),n(),o(),q();var w=5,x=8;M(b(Qb,[g(["M",[2,8],"Q",[5,10],[8,8],"L",[5,3],"L",[2,8]]),e(5,3,2)]),ic,jc,0),M(b(Pb,[g(["M",[4.6,1.4],"L",[5.4,1.4],"L",[5.4,-.6],"L",[6.4,-.6],"L",[6.4,-1.4],"L",[5.4,-1.4],"L",[5.4,-2.4],"L",[4.6,-2.4],"L",[4.6,-1.4],"L",[3.6,-1.4],"L",[3.6,-.6],"L",[4.6,-.6],"L",[4.6,1.4]]),g(["M",[2,8],"Q",[5,10],[8,8],"L",[6,3],"L",[7,1],"Q",[5,0],[3,1],"L",[4,3],"L",[2,8]])]),ic,jc,0),M(b(Tb,[g(["M",[2,8],"Q",[5,10],[8,8],"L",[7,6],"Q",[8,3],[7,0],"L",[6,1],"L",[5,1],"L",[2,4],"L",[3,5],"L",[5,4],"L",[2,8]])]),ic,jc,0),M(b(Rb,[g(["M",[2,8],"Q",[5,10],[8,8],"L",[6.5,3],"L",[8,2],"L",[8,0],"L",[7,0],"L",[7,1],"L",[6,1],"L",[6,0],"L",[4,0],"L",[4,1],"L",[3,1],"L",[3,0],"L",[2,0],"L",[2,2],"L",[3.5,3],"L",[2,8]])]),ic,jc,0),M(b(Sb,[g(["M",[2,8],"Q",[5,10],[8,8],"L",[6,4],"Q",[8,1.1],[5,0],"Q",[2,1.1],[4,4],"L",[2,8]]),e(5,0,.7),g(["M",[3.8,.8],"L",[4.4,2.5]],{"stroke-width":2})]),ic,jc,0),M(b(Vb,[g(["M",[2,8],"Q",[5,10],[8,8],"L",[8.5,6],"L",[7,7],"L",[7,5],"L",[6,6],"L",[5,4.5],"L",[4,6],"L",[3,5],"L",[3,7],"L",[1.5,6],"L",[2,8]])]),ic,jc,0),M(b(Ub,[a(2,9.5),a(5,9),a(8,10),a(7,8),a(4,7.5),a(1,8.5)],!0),ic,jc,0),M(b(Ob,[g(["M",[4.6,1.4],"L",[5.4,1.4],"L",[5.4,-.6],"L",[6.4,-.6],"L",[6.4,-1.4],"L",[5.4,-1.4],"L",[5.4,-2.4],"L",[4.6,-2.4],"L",[4.6,-1.4],"L",[3.6,-1.4],"L",[3.6,-.6],"L",[4.6,-.6],"L",[4.6,1.4]]),g(["M",[2,8],"Q",[5,10],[8,8],"L",[6,3],"L",[7,1],"Q",[5,0],[3,1],"L",[4,3],"L",[2,8]])]),"#002","#333",0),M(b(Xb,[e(5,.4,.6),g(["M",[2,8],"Q",[5,10],[8,8],"L",[6,3],"L",[7.5,1],"L",[5.8,1.5],"L",[5,.8],"L",[4.2,1.5],"L",[2.5,1],"L",[4,3],"L",[2,8]])]),"#002","#333",0),w=2.5,x=50,M(b(Wb,[g(["M",[25,30],"L",[50,30],"L",[50,5],"L",[45,5],"L",[45,10],"L",[40,10],"L",[40,5],"L",[35,5],"L",[35,10],"L",[30,10],"L",[30,5],"L",[25,5],"L",[25,30]]),g(["M",[0,50],"L",[0,50],"L",[27.5,50],"L",[27.5,35],"L",[47.5,35],"L",[47.5,50],"L",[75,50],"L",[75,20],"L",[70,20],"L",[70,25],"L",[65,25],"L",[65,20],"L",[60,20],"L",[60,25],"L",[55,25],"L",[55,20],"L",[50,20],"L",[50,25],"L",[45,25],"L",[45,20],"L",[40,20],"L",[40,25],"L",[35,25],"L",[35,20],"L",[30,20],"L",[30,25],"L",[25,25],"L",[25,20],"L",[20,20],"L",[20,25],"L",[15,25],"L",[15,20],"L",[10,20],"L",[10,25],"L",[5,25],"L",[5,20],"L",[0,20],"L",[0,50]])],!0),ic,jc,0)}function I(a,b){a?K(T,"White King :"):K(T,"Black King :");for(var c="",d=0;d<b.length;d++)c+='<tspan x="10" '+(0===d?"":'dy="1.2em"')+">"+b[d]+"</tspan>";K(U,c),p(S,{_y:wc},0,.5)}function J(){p(S,{_y:xc},0,.5)}function K(a,b){for(;a.firstChild;)a.removeChild(a.firstChild);var c="<svg>"+b+"</svg>";Ac.innerHTML=c;var d=Array.prototype.slice.call(Ac.childNodes[0].childNodes);d.forEach(function(b){a.appendChild(b)})}function L(a,b){if(b)for(var c in b)a.setAttributeNS(null,c,b[c]);return a}function M(a,b,c,d){var e={};return"undefined"!=typeof b&&(e.fill=b),"undefined"!=typeof c&&(e.stroke=c),"undefined"!=typeof d&&(e.strokeWidth=d),L(a,e),a}function N(a,b){b||(b=window.e);var c=b.keyCode;b.charCode&&!c&&(c=b.charCode);var d=Bc[c];d&&Cc[d]!==a&&(Cc[d]=a,"undefined"==typeof Dc[d]&&(Dc[d]=-1),a?Dc[d]<1&&(Dc[d]=1):Dc[d]>0&&(Dc[d]=0))}function O(a,b){bc.click=a,Y.onmousemove(b)}var P,Q,R,S,T,U,V,W,X=window,Y=X.document,Z=Y.body,$=null,_=X.Math,ab=_.PI,bb=(_.sqrt,_.random,1),cb=100*bb,db=400*bb,eb=8,fb=db/eb,gb=2*eb+3,hb=6,ib=D(db,db,"bg"),jb=E(ib),kb=D(db,db,"shadow"),lb=E(kb),mb=D(db,2*db,"sky"),nb=E(mb),ob=0,pb=.001,qb=0,rb=0,sb=0,tb=null,ub=null,vb=!1,wb=!1,xb=0,yb=1,zb=null,Ab=null,Bb=-1,Cb=!0,Db=[],Eb=null,Fb=.05,Gb=.5,Hb=null,Ib=null,Jb=null,Kb=!0,Lb=0,Mb=0,Nb=-1,Ob="h",Pb="e",Qb="p",Rb="r",Sb="b",Tb="k",Ub="l",Vb="w",Wb="c",Xb="q",Yb="ef",Zb="ct",$b=6,_b=-1,ac=!1,bc={},cc=-1,dc=-1,ec="#193441",fc="#D1DBBD",gc="#3E606F",hc="#794",ic="#eee",jc="#555",kc="255,0,0",lc="rgba(93, 255, 182, 0.56)",mc=-.02,nc=.02;u.res={};var oc=3/16,pc=-0.875,qc=1,rc=-2.5/16,sc=0,tc=1;w.res={},x.res={};var uc,vc,wc,xc,yc=null,zc={},Ac=Y.createElement("div"),Bc={37:"left",65:"left",81:"left",38:"up",90:"up",87:"up",83:"down",40:"down",39:"right",68:"right",32:"space",27:"esc",13:"enter"},Cc={},Dc={};Y.onkeyup=function(a){Kb||!Cc.enter||vb||(Cb=!Cb,Ib.style.display=Cb?"none":"block",console.log("debug toggle anim: ",Cb),Cb&&(P=Date.now(),j())),N(!1,a)},Y.onkeydown=function(a){N(!0,a)},Y.onmousedown=function(a){O(!0,a)},Y.onmousemove=function(a){bc.x=a.clientX-$.offsetLeft,bc.y=a.clientY},a()};