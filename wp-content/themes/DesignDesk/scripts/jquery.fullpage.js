/**
 * fullPage 2.3.0
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(a){a.fn.fullpage=function(c){function fa(){a("body").append('<div id="fp-nav"><ul></ul></div>');l=a("#fp-nav");l.css("color",c.navigationColor);l.addClass(c.navigationPosition);for(var b=0;b<a(".fp-section").length;b++){var d="";c.anchors.length&&(d=c.anchors[b]);var e=c.navigationTooltips[b];"undefined"===typeof e&&(e="");l.find("ul").append('<li data-tooltip="'+e+'"><a href="#'+d+'"><span></span></a></li>')}}function L(){a(".fp-section").each(function(){var b=a(this).find(".fp-slide");
b.length?b.each(function(){w(a(this))}):w(a(this))});a.isFunction(c.afterRender)&&c.afterRender.call(this)}function M(){if(!c.autoScrolling){var b=a(window).scrollTop(),d=a(".fp-section").map(function(){if(a(this).offset().top<b+100)return a(this)}),d=d[d.length-1];if(!d.hasClass("active")){D=!0;var e=a(".fp-section.active").index(".fp-section")+1,f=E(d),h=d.data("anchor");d.addClass("active").siblings().removeClass("active");a.isFunction(c.onLeave)&&c.onLeave.call(this,e,d.index(".fp-section")+
1,f);a.isFunction(c.afterLoad)&&c.afterLoad.call(this,h,d.index(".fp-section")+1);F(h);G(h,0);c.anchors.length&&!u&&(v=h,location.hash=h);clearTimeout(N);N=setTimeout(function(){D=!1},100)}}}function O(b){return scrollable=b.find(".fp-slides").length?b.find(".fp-slide.active").find(".fp-scrollable"):b.find(".fp-scrollable")}function x(b,d){if("down"==b)var c="bottom",f=a.fn.fullpage.moveSectionDown;else c="top",f=a.fn.fullpage.moveSectionUp;if(0<d.length)if(c="top"===c?!d.scrollTop():"bottom"===c?
d.scrollTop()+1+d.innerHeight()>=d[0].scrollHeight:void 0,c)f();else return!0;else f()}function ga(b){var d=b.originalEvent;c.autoScrolling&&b.preventDefault();if(!P(b.target)){b=a(".fp-section.active");var e=O(b);u||t||(d=Q(d),n=d.y,y=d.x,b.find(".fp-slides").length&&Math.abs(z-y)>Math.abs(q-n)?Math.abs(z-y)>a(window).width()/100*c.touchSensitivity&&(z>y?a.fn.fullpage.moveSlideRight():a.fn.fullpage.moveSlideLeft()):c.autoScrolling&&Math.abs(q-n)>a(window).height()/100*c.touchSensitivity&&(q>n?x("down",
e):n>q&&x("up",e)))}}function P(b,d){d=d||0;var e=a(b).parent();return d<c.normalScrollElementTouchThreshold&&e.is(c.normalScrollElements)?!0:d==c.normalScrollElementTouchThreshold?!1:P(e,++d)}function ha(b){b=Q(b.originalEvent);q=b.y;z=b.x}function m(b){if(c.autoScrolling){b=window.event||b;b=Math.max(-1,Math.min(1,b.wheelDelta||-b.deltaY||-b.detail));var d=a(".fp-section.active"),d=O(d);u||(0>b?x("down",d):x("up",d));return!1}}function R(b){var d=a(".fp-section.active").find(".fp-slides");if(d.length&&
!t){var e=d.find(".fp-slide.active"),f=null,f="prev"===b?e.prev(".fp-slide"):e.next(".fp-slide");if(!f.length){if(!c.loopHorizontal)return;f="prev"===b?e.siblings(":last"):e.siblings(":first")}t=!0;p(d,f)}}function S(){a(".fp-slide.active").each(function(){H(a(this))})}function r(b,d,e){var f={},h=b.position();if("undefined"!==typeof h){var h=h.top,A=E(b),g=b.data("anchor"),l=b.index(".fp-section"),k=b.find(".fp-slide.active"),B=a(".fp-section.active"),t=B.index(".fp-section")+1,m=C;if(k.length)var p=
k.data("anchor"),r=k.index();if(c.autoScrolling&&c.continuousVertical&&"undefined"!==typeof e&&(!e&&"up"==A||e&&"down"==A)){e?a(".fp-section.active").before(B.nextAll(".fp-section")):a(".fp-section.active").after(B.prevAll(".fp-section").get().reverse());s(a(".fp-section.active").position().top);S();var n=B,h=b.position(),h=h.top,A=E(b)}b.addClass("active").siblings().removeClass("active");u=!0;"undefined"!==typeof g&&T(r,p,g);c.autoScrolling?(f.top=-h,b="."+U):(f.scrollTop=h,b="html, body");var q=
function(){n&&n.length&&(e?a(".fp-section:first").before(n):a(".fp-section:last").after(n),s(a(".fp-section.active").position().top),S());a.isFunction(c.afterLoad)&&!m&&c.afterLoad.call(this,g,l+1);setTimeout(function(){u=!1;a.isFunction(d)&&d.call(this)},600)};a.isFunction(c.onLeave)&&!m&&c.onLeave.call(this,t,l+1,A);c.css3&&c.autoScrolling?(V("translate3d(0px, -"+h+"px, 0px)",!0),setTimeout(function(){q()},c.scrollingSpeed)):a(b).animate(f,c.scrollingSpeed,c.easing,function(){q()});v=g;c.autoScrolling&&
(F(g),G(g,l))}}function W(){if(!D){var b=window.location.hash.replace("#","").split("/"),a=b[0],b=b[1];if(a.length){var c="undefined"===typeof v,f="undefined"===typeof v&&"undefined"===typeof b&&!t;(a&&a!==v&&!c||f||!t&&I!=b)&&J(a,b)}}}function p(b,d){var e=d.position(),f=b.find(".fp-slidesContainer").parent(),h=d.index(),g=b.closest(".fp-section"),l=g.index(".fp-section"),k=g.data("anchor"),n=g.find(".fp-slidesNav"),m=d.data("anchor"),q=C;if(c.onSlideLeave){var p=g.find(".fp-slide.active").index(),
r;r=p==h?"none":p>h?"left":"right";q||a.isFunction(c.onSlideLeave)&&c.onSlideLeave.call(this,k,l+1,p,r)}d.addClass("active").siblings().removeClass("active");"undefined"===typeof m&&(m=h);c.loopHorizontal||(g.find(".fp-controlArrow.fp-prev").toggle(0!=h),g.find(".fp-controlArrow.fp-next").toggle(!d.is(":last-child")));g.hasClass("active")&&T(h,m,k);var s=function(){q||a.isFunction(c.afterSlideLoad)&&c.afterSlideLoad.call(this,k,l+1,m,h);t=!1};c.css3?(e="translate3d(-"+e.left+"px, 0px, 0px)",b.find(".fp-slidesContainer").toggleClass("fp-easing",
0<c.scrollingSpeed).css(X(e)),setTimeout(function(){s()},c.scrollingSpeed,c.easing)):f.animate({scrollLeft:e.left},c.scrollingSpeed,c.easing,function(){s()});n.find(".active").removeClass("active");n.find("li").eq(h).find("a").addClass("active")}function Y(){K?"text"!==a(document.activeElement).attr("type")&&a.fn.fullpage.reBuild():(clearTimeout(Z),Z=setTimeout(a.fn.fullpage.reBuild,500))}function ia(b,c){if(825>b||900>c){var e=Math.min(100*b/825,100*c/900).toFixed(2);a("body").css("font-size",e+
"%")}else a("body").css("font-size","100%")}function G(b,d){c.navigation&&(a("#fp-nav").find(".active").removeClass("active"),b?a("#fp-nav").find('a[href="#'+b+'"]').addClass("active"):a("#fp-nav").find("li").eq(d).find("a").addClass("active"))}function F(b){c.menu&&(a(c.menu).find(".active").removeClass("active"),a(c.menu).find('[data-menuanchor="'+b+'"]').addClass("active"))}function E(b){var c=a(".fp-section.active").index(".fp-section");b=b.index(".fp-section");return c>b?"up":"down"}function w(b){b.css("overflow",
"hidden");var a=b.closest(".fp-section"),e=b.find(".fp-scrollable");if(e.length)var f=e.get(0).scrollHeight;else f=b.get(0).scrollHeight,c.verticalCentered&&(f=b.find(".fp-tableCell").get(0).scrollHeight);a=k-parseInt(a.css("padding-bottom"))-parseInt(a.css("padding-top"));f>a?e.length?e.css("height",a+"px").parent().css("height",a+"px"):(c.verticalCentered?b.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />'):b.wrapInner('<div class="fp-scrollable" />'),b.find(".fp-scrollable").slimScroll({allowPageScroll:!0,
height:a+"px",size:"10px",alwaysVisible:!0})):$(b);b.css("overflow","")}function $(b){b.find(".fp-scrollable").children().first().unwrap().unwrap();b.find(".slimScrollBar").remove();b.find(".slimScrollRail").remove()}function aa(b){b.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:'+ba(b)+'px;" />')}function ba(b){var a=k;if(c.paddingTop||c.paddingBottom)a=b,a.hasClass("fp-section")||(a=b.closest(".fp-section")),b=parseInt(a.css("padding-top"))+parseInt(a.css("padding-bottom")),
a=k-b;return a}function V(a,c){g.toggleClass("fp-easing",c);g.css(X(a))}function J(b,c){"undefined"===typeof c&&(c=0);var e=isNaN(b)?a('[data-anchor="'+b+'"]'):a(".fp-section").eq(b-1);b===v||e.hasClass("active")?ca(e,c):r(e,function(){ca(e,c)})}function ca(a,c){if("undefined"!=typeof c){var e=a.find(".fp-slides"),f=e.find('[data-anchor="'+c+'"]');f.length||(f=e.find(".fp-slide").eq(c));f.length&&p(e,f)}}function ja(a,d){a.append('<div class="fp-slidesNav"><ul></ul></div>');var e=a.find(".fp-slidesNav");
e.addClass(c.slidesNavPosition);for(var f=0;f<d;f++)e.find("ul").append('<li><a href="#"><span></span></a></li>');e.css("margin-left","-"+e.width()/2+"px");e.find("li").first().find("a").addClass("active")}function T(a,d,e){var f="";c.anchors.length&&(a?("undefined"!==typeof e&&(f=e),"undefined"===typeof d&&(d=a),I=d,location.hash=f+"/"+d):("undefined"!==typeof a&&(I=d),location.hash=e))}function ka(){var a=document.createElement("p"),c,e={webkitTransform:"-webkit-transform",OTransform:"-o-transform",
msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(a,null);for(var f in e)void 0!==a.style[f]&&(a.style[f]="translate3d(1px,1px,1px)",c=window.getComputedStyle(a).getPropertyValue(e[f]));document.body.removeChild(a);return void 0!==c&&0<c.length&&"none"!==c}function da(){return window.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Q(a){var c=[];window.navigator.msPointerEnabled?(c.y=
a.pageY,c.x=a.pageX):(c.y=a.touches[0].pageY,c.x=a.touches[0].pageX);return c}function H(b){var d=c.scrollingSpeed;a.fn.fullpage.setScrollingSpeed(0);p(b.closest(".fp-slides"),b);a.fn.fullpage.setScrollingSpeed(d)}function s(a){c.css3?V("translate3d(0px, -"+a+"px, 0px)",!1):g.css("top",-a)}function X(a){return{"-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,transform:a}}function la(){s(0);a("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove();a(".fp-section").css({height:"","background-color":"",
padding:""});a(".fp-slide").css({width:""});g.css({height:"",position:"","-ms-touch-action":"","touch-action":""});a(".fp-section, .fp-slide").each(function(){$(a(this));a(this).removeClass("fp-table active")});g.find(".fp-easing").removeClass("fp-easing");g.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function(){a(this).replaceWith(this.childNodes)});a("html, body").scrollTop(0)}c=a.extend({verticalCentered:!0,resize:!0,sectionsColor:[],anchors:[],scrollingSpeed:700,easing:"easeInQuart",
menu:!1,navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],slidesNavigation:!1,slidesNavPosition:"bottom",controlArrowColor:"#fff",loopBottom:!1,loopTop:!1,loopHorizontal:!0,autoScrolling:!0,scrollOverflow:!1,css3:!1,paddingTop:0,paddingBottom:0,fixedElements:null,normalScrollElements:null,keyboardScrolling:!0,touchSensitivity:5,continuousVertical:!1,animateAnchor:!0,normalScrollElementTouchThreshold:5,sectionSelector:".section",slideSelector:".slide",afterLoad:null,
onLeave:null,afterRender:null,afterResize:null,afterSlideLoad:null,onSlideLeave:null},c);c.continuousVertical&&(c.loopTop||c.loopBottom)&&(c.continuousVertical=!1,console&&console.log&&console.log("Option loopTop/loopBottom is mutually exclusive with continuousVertical; continuousVertical disabled"));a.fn.fullpage.setAutoScrolling=function(b){c.autoScrolling=b;b=a(".fp-section.active");c.autoScrolling?(a("html, body").css({overflow:"hidden",height:"100%"}),g.css({"-ms-touch-action":"none","touch-action":"none"}),
b.length&&s(b.position().top)):(a("html, body").css({overflow:"visible",height:"initial"}),g.css({"-ms-touch-action":"","touch-action":""}),s(0),a("html, body").scrollTop(b.position().top))};a.fn.fullpage.setScrollingSpeed=function(a){c.scrollingSpeed=a};a.fn.fullpage.setMouseWheelScrolling=function(a){a?document.addEventListener?(document.addEventListener("mousewheel",m,!1),document.addEventListener("wheel",m,!1)):document.attachEvent("onmousewheel",m):document.addEventListener?(document.removeEventListener("mousewheel",
m,!1),document.removeEventListener("wheel",m,!1)):document.detachEvent("onmousewheel",m)};a.fn.fullpage.setAllowScrolling=function(b){if(b){if(a.fn.fullpage.setMouseWheelScrolling(!0),K||ea)MSPointer=da(),a(document).off("touchstart "+MSPointer.down).on("touchstart "+MSPointer.down,ha),a(document).off("touchmove "+MSPointer.move).on("touchmove "+MSPointer.move,ga)}else if(a.fn.fullpage.setMouseWheelScrolling(!1),K||ea)MSPointer=da(),a(document).off("touchstart "+MSPointer.down),a(document).off("touchmove "+
MSPointer.move)};a.fn.fullpage.setKeyboardScrolling=function(a){c.keyboardScrolling=a};a.fn.fullpage.moveSectionUp=function(){var b=a(".fp-section.active").prev(".fp-section");b.length||!c.loopTop&&!c.continuousVertical||(b=a(".fp-section").last());b.length&&r(b,null,!0)};a.fn.fullpage.moveSectionDown=function(){var b=a(".fp-section.active").next(".fp-section");b.length||!c.loopBottom&&!c.continuousVertical||(b=a(".fp-section").first());b.length&&r(b,null,!1)};a.fn.fullpage.moveTo=function(b,c){var e=
"",e=isNaN(b)?a('[data-anchor="'+b+'"]'):a(".fp-section").eq(b-1);"undefined"!==typeof c?J(b,c):0<e.length&&r(e)};a.fn.fullpage.moveSlideRight=function(){R("next")};a.fn.fullpage.moveSlideLeft=function(){R("prev")};a.fn.fullpage.reBuild=function(){C=!0;var b=a(window).width();k=a(window).height();c.resize&&ia(k,b);a(".fp-section").each(function(){parseInt(a(this).css("padding-bottom"));parseInt(a(this).css("padding-top"));c.verticalCentered&&a(this).find(".fp-tableCell").css("height",ba(a(this))+
"px");a(this).css("height",k+"px");if(c.scrollOverflow){var b=a(this).find(".fp-slide");b.length?b.each(function(){w(a(this))}):w(a(this))}b=a(this).find(".fp-slides");b.length&&p(b,b.find(".fp-slide.active"))});a(".fp-section.active").position();b=a(".fp-section.active");b.index(".fp-section")&&r(b);C=!1;a.isFunction(c.afterResize)&&c.afterResize.call(this)};var t=!1,K=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/),ea="ontouchstart"in window||0<navigator.msMaxTouchPoints,
g=a(this),k=a(window).height(),u=!1,C=!1,v,I,l,U="fullpage-wrapper";a.fn.fullpage.setAllowScrolling(!0);c.css3&&(c.css3=ka());a(this).length?(g.css({height:"100%",position:"relative"}),g.addClass(U)):console.error("Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();");a(c.sectionSelector).each(function(){a(this).addClass("fp-section")});a(c.slideSelector).each(function(){a(this).addClass("fp-slide")});c.navigation&&fa();a(".fp-section").each(function(b){var d=
a(this),e=a(this).find(".fp-slide"),f=e.length;b||0!==a(".fp-section.active").length||a(this).addClass("active");a(this).css("height",k+"px");(c.paddingTop||c.paddingBottom)&&a(this).css("padding",c.paddingTop+" 0 "+c.paddingBottom+" 0");"undefined"!==typeof c.sectionsColor[b]&&a(this).css("background-color",c.sectionsColor[b]);"undefined"!==typeof c.anchors[b]&&a(this).attr("data-anchor",c.anchors[b]);if(1<f){b=100*f;var g=100/f;e.wrapAll('<div class="fp-slidesContainer" />');e.parent().wrap('<div class="fp-slides" />');
a(this).find(".fp-slidesContainer").css("width",b+"%");a(this).find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>');"#fff"!=c.controlArrowColor&&(a(this).find(".fp-controlArrow.fp-next").css("border-color","transparent transparent transparent "+c.controlArrowColor),a(this).find(".fp-controlArrow.fp-prev").css("border-color","transparent "+c.controlArrowColor+" transparent transparent"));c.loopHorizontal||a(this).find(".fp-controlArrow.fp-prev").hide();
c.slidesNavigation&&ja(a(this),f);e.each(function(b){a(this).css("width",g+"%");c.verticalCentered&&aa(a(this))});d=d.find(".fp-slide.active");0==d.length?e.eq(0).addClass("active"):H(d)}else c.verticalCentered&&aa(a(this))}).promise().done(function(){a.fn.fullpage.setAutoScrolling(c.autoScrolling);var b=a(".fp-section.active").find(".fp-slide.active");b.length&&(0!=a(".fp-section.active").index(".fp-section")||0==a(".fp-section.active").index(".fp-section")&&0!=b.index())&&H(b);c.fixedElements&&
c.css3&&a(c.fixedElements).appendTo("body");c.navigation&&(l.css("margin-top","-"+l.height()/2+"px"),l.find("li").eq(a(".fp-section.active").index(".fp-section")).find("a").addClass("active"));c.menu&&c.css3&&a(c.menu).closest(".fullpage-wrapper").length&&a(c.menu).appendTo("body");c.scrollOverflow?("complete"===document.readyState&&L(),a(window).on("load",L)):a.isFunction(c.afterRender)&&c.afterRender.call(this);b=window.location.hash.replace("#","").split("/")[0];if(b.length){var d=a('[data-anchor="'+
b+'"]');!c.animateAnchor&&d.length&&(c.autoScrolling?s(d.position().top):(s(0),a("html, body").scrollTop(d.position().top)),F(b),G(b,null),a.isFunction(c.afterLoad)&&c.afterLoad.call(this,b,d.index(".fp-section")+1),d.addClass("active").siblings().removeClass("active"))}a(window).on("load",function(){var a=window.location.hash.replace("#","").split("/"),b=a[0],a=a[1];b&&J(b,a)})});var N,D=!1;a(window).on("scroll",M);var q=0,z=0,n=0,y=0;a(window).on("hashchange",W);a(document).keydown(function(b){if(c.keyboardScrolling&&
!u)switch(b.which){case 38:case 33:a.fn.fullpage.moveSectionUp();break;case 40:case 34:a.fn.fullpage.moveSectionDown();break;case 36:a.fn.fullpage.moveTo(1);break;case 35:a.fn.fullpage.moveTo(a(".fp-section").length);break;case 37:a.fn.fullpage.moveSlideLeft();break;case 39:a.fn.fullpage.moveSlideRight()}});a(document).on("click touchstart","#fp-nav a",function(b){b.preventDefault();b=a(this).parent().index();r(a(".fp-section").eq(b))});a(document).on("click touchstart",".fp-slidesNav a",function(b){b.preventDefault();
b=a(this).closest(".fp-section").find(".fp-slides");var c=b.find(".fp-slide").eq(a(this).closest("li").index());p(b,c)});a(document).on({mouseenter:function(){var b=a(this).data("tooltip");a('<div class="fp-tooltip '+c.navigationPosition+'">'+b+"</div>").hide().appendTo(a(this)).fadeIn(200)},mouseleave:function(){a(this).find(".fp-tooltip").fadeOut(200,function(){a(this).remove()})}},"#fp-nav li");c.normalScrollElements&&(a(document).on("mouseenter",c.normalScrollElements,function(){a.fn.fullpage.setMouseWheelScrolling(!1)}),
a(document).on("mouseleave",c.normalScrollElements,function(){a.fn.fullpage.setMouseWheelScrolling(!0)}));a(".fp-section").on("click touchstart",".fp-controlArrow",function(){a(this).hasClass("fp-prev")?a.fn.fullpage.moveSlideLeft():a.fn.fullpage.moveSlideRight()});a(".fp-section").on("click",".toSlide",function(b){b.preventDefault();b=a(this).closest(".fp-section").find(".fp-slides");b.find(".fp-slide.active");var c=null,c=b.find(".fp-slide").eq(a(this).data("index")-1);0<c.length&&p(b,c)});a(window).resize(Y);
var Z;a.fn.fullpage.destroy=function(b){a.fn.fullpage.setAutoScrolling(!1);a.fn.fullpage.setAllowScrolling(!1);a.fn.fullpage.setKeyboardScrolling(!1);a(window).off("scroll",M).off("hashchange",W).off("resize",Y);a(document).off("click","#fp-nav a").off("mouseenter","#fp-nav li").off("mouseleave","#fp-nav li").off("click",".fp-slidesNav a").off("mouseover",c.normalScrollElements).off("mouseout",c.normalScrollElements);a(".fp-section").off("click",".fp-controlArrow").off("click",".toSlide");b&&la()}}})(jQuery);