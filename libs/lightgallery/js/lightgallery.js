// build time:Mon Dec 02 2019 18:16:54 GMT+0800 (中国标准时间)
(function(e){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=e()}else if(typeof define==="function"&&define.amd){define([],e)}else{var t;if(typeof window!=="undefined"){t=window}else if(typeof global!=="undefined"){t=global}else if(typeof self!=="undefined"){t=self}else{t=this}t.Lightgallery=e()}})(function(){var e,t,s;return function l(e,t,s){function i(o,a){if(!t[o]){if(!e[o]){var d=typeof require=="function"&&require;if(!a&&d)return d(o,!0);if(r)return r(o,!0);var n=new Error("Cannot find module '"+o+"'");throw n.code="MODULE_NOT_FOUND",n}var u=t[o]={exports:{}};e[o][0].call(u.exports,function(t){var s=e[o][1][t];return i(s?s:t)},u,u.exports,l,e,t,s)}return t[o].exports}var r=typeof require=="function"&&require;for(var o=0;o<s.length;o++)i(s[o]);return i}({1:[function(t,s,l){(function(t,s){if(typeof e==="function"&&e.amd){e(["exports"],s)}else if(typeof l!=="undefined"){s(l)}else{var i={exports:{}};s(i.exports);t.lgUtils=i.exports}})(this,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:true});window.getAttribute=function(e){return window[e]};window.setAttribute=function(e,t){window[e]=t};document.getAttribute=function(e){return document[e]};document.setAttribute=function(e,t){document[e]=t};var t={wrap:function s(e,t){if(!e){return}var s=document.createElement("div");s.className=t;e.parentNode.insertBefore(s,e);e.parentNode.removeChild(e);s.appendChild(e)},addClass:function l(e,t){if(!e){return}if(e.classList){e.classList.add(t)}else{e.className+=" "+t}},removeClass:function i(e,t){if(!e){return}if(e.classList){e.classList.remove(t)}else{e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}},hasClass:function r(e,t){if(e.classList){return e.classList.contains(t)}else{return new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}return false},setVendor:function o(e,t,s){if(!e){return}e.style[t.charAt(0).toLowerCase()+t.slice(1)]=s;e.style["webkit"+t]=s;e.style["moz"+t]=s;e.style["ms"+t]=s;e.style["o"+t]=s},trigger:function a(e,t){var s=arguments.length<=2||arguments[2]===undefined?null:arguments[2];if(!e){return}var l=new CustomEvent(t,{detail:s});e.dispatchEvent(l)},Listener:{uid:0},on:function d(e,s,l){if(!e){return}s.split(" ").forEach(function(s){var i=e.getAttribute("lg-event-uid")||"";t.Listener.uid++;i+="&"+t.Listener.uid;e.setAttribute("lg-event-uid",i);t.Listener[s+t.Listener.uid]=l;e.addEventListener(s.split(".")[0],l,false)})},off:function n(e,s){if(!e){return}var l=e.getAttribute("lg-event-uid");if(l){l=l.split("&");for(var i=0;i<l.length;i++){if(l[i]){var r=s+l[i];if(r.substring(0,1)==="."){for(var o in t.Listener){if(t.Listener.hasOwnProperty(o)){if(o.split(".").indexOf(r.split(".")[1])>-1){e.removeEventListener(o.split(".")[0],t.Listener[o]);e.setAttribute("lg-event-uid",e.getAttribute("lg-event-uid").replace("&"+l[i],""));delete t.Listener[o]}}}}else{e.removeEventListener(r.split(".")[0],t.Listener[r]);e.setAttribute("lg-event-uid",e.getAttribute("lg-event-uid").replace("&"+l[i],""));delete t.Listener[r]}}}}},param:function u(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}};e.default=t})},{}],2:[function(t,s,l){(function(s,i){if(typeof e==="function"&&e.amd){e(["./lg-utils"],i)}else if(typeof l!=="undefined"){i(t("./lg-utils"))}else{var r={exports:{}};i(s.lgUtils);s.lightgallery=r.exports}})(this,function(e){"use strict";var t=s(e);function s(e){return e&&e.__esModule?e:{"default":e}}var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s){if(Object.prototype.hasOwnProperty.call(s,l)){e[l]=s[l]}}}return e};(function(){if(typeof window.CustomEvent==="function"){return false}function e(e,t){t=t||{bubbles:false,cancelable:false,detail:undefined};var s=document.createEvent("CustomEvent");s.initCustomEvent(e,t.bubbles,t.cancelable,t.detail);return s}e.prototype=window.Event.prototype;window.CustomEvent=e})();window.utils=t.default;window.lgData={uid:0};window.lgModules={};var i={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:false,closable:true,loop:true,escKey:true,keyPress:true,controls:true,slideEndAnimatoin:true,hideControlOnEnd:false,mousewheel:false,getCaptionFromTitleOrAlt:true,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:false,preload:1,showAfterLoad:true,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:false,iframeMaxWidth:"100%",download:true,counter:true,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:true,enableDrag:true,dynamic:false,dynamicEl:[],galleryId:1};function r(e,t){this.el=e;this.s=l({},i,t);if(this.s.dynamic&&this.s.dynamicEl!=="undefined"&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length){throw"When using dynamic mode, you must also define dynamicEl as an Array."}this.modules={};this.lGalleryOn=false;this.lgBusy=false;this.hideBartimeout=false;this.isTouch="ontouchstart"in document.documentElement;if(this.s.slideEndAnimatoin){this.s.hideControlOnEnd=false}this.items=[];if(this.s.dynamic){this.items=this.s.dynamicEl}else{if(this.s.selector==="this"){this.items.push(this.el)}else if(this.s.selector!==""){if(this.s.selectWithin){this.items=document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector)}else{this.items=this.el.querySelectorAll(this.s.selector)}}else{this.items=this.el.children}}this.___slide="";this.outer="";this.init();return this}r.prototype.init=function(){var e=this;if(e.s.preload>e.items.length){e.s.preload=e.items.length}var s=window.location.hash;if(s.indexOf("lg="+this.s.galleryId)>0){e.index=parseInt(s.split("&slide=")[1],10);t.default.addClass(document.body,"lg-from-hash");if(!t.default.hasClass(document.body,"lg-on")){t.default.addClass(document.body,"lg-on");setTimeout(function(){e.build(e.index)})}}if(e.s.dynamic){t.default.trigger(this.el,"onBeforeOpen");e.index=e.s.index||0;if(!t.default.hasClass(document.body,"lg-on")){t.default.addClass(document.body,"lg-on");setTimeout(function(){e.build(e.index)})}}else{for(var l=0;l<e.items.length;l++){(function(s){t.default.on(e.items[s],"click.lgcustom",function(l){l.preventDefault();t.default.trigger(e.el,"onBeforeOpen");e.index=e.s.index||s;if(!t.default.hasClass(document.body,"lg-on")){e.build(e.index);t.default.addClass(document.body,"lg-on")}})})(l)}}};r.prototype.build=function(e){var s=this;s.structure();for(var l in window.lgModules){s.modules[l]=new window.lgModules[l](s.el)}s.slide(e,false,false);if(s.s.keyPress){s.keyPress()}if(s.items.length>1){s.arrow();setTimeout(function(){s.enableDrag();s.enableSwipe()},50);if(s.s.mousewheel){s.mousewheel()}}s.counter();s.closeGallery();t.default.trigger(s.el,"onAfterOpen");t.default.on(s.outer,"mousemove.lg click.lg touchstart.lg",function(){t.default.removeClass(s.outer,"lg-hide-items");clearTimeout(s.hideBartimeout);s.hideBartimeout=setTimeout(function(){t.default.addClass(s.outer,"lg-hide-items")},s.s.hideBarsDelay)})};r.prototype.structure=function(){var e="";var s="";var l=0;var i="";var r;var o=this;document.body.insertAdjacentHTML("beforeend",'<div class="lg-backdrop"></div>');t.default.setVendor(document.querySelector(".lg-backdrop"),"TransitionDuration",this.s.backdropDuration+"ms");for(l=0;l<this.items.length;l++){e+='<div class="lg-item"></div>'}if(this.s.controls&&this.items.length>1){s='<div class="lg-actions">'+'<div class="lg-prev lg-icon">'+this.s.prevHtml+"</div>"+'<div class="lg-next lg-icon">'+this.s.nextHtml+"</div>"+"</div>"}if(this.s.appendSubHtmlTo===".lg-sub-html"){i='<div class="lg-sub-html"></div>'}r='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'">'+'<div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'">'+'<div class="lg-inner">'+e+"</div>"+'<div class="lg-toolbar group">'+'<span class="lg-close lg-icon"></span>'+"</div>"+s+i+"</div>"+"</div>";document.body.insertAdjacentHTML("beforeend",r);this.outer=document.querySelector(".lg-outer");this.___slide=this.outer.querySelectorAll(".lg-item");if(this.s.useLeft){t.default.addClass(this.outer,"lg-use-left");this.s.mode="lg-slide"}else{t.default.addClass(this.outer,"lg-use-css3")}o.setTop();t.default.on(window,"resize.lg orientationchange.lg",function(){setTimeout(function(){o.setTop()},100)});t.default.addClass(this.___slide[this.index],"lg-current");if(this.doCss()){t.default.addClass(this.outer,"lg-css3")}else{t.default.addClass(this.outer,"lg-css");this.s.speed=0}t.default.addClass(this.outer,this.s.mode);if(this.s.enableDrag&&this.items.length>1){t.default.addClass(this.outer,"lg-grab")}if(this.s.showAfterLoad){t.default.addClass(this.outer,"lg-show-after-load")}if(this.doCss()){var a=this.outer.querySelector(".lg-inner");t.default.setVendor(a,"TransitionTimingFunction",this.s.cssEasing);t.default.setVendor(a,"TransitionDuration",this.s.speed+"ms")}t.default.addClass(document.querySelector(".lg-backdrop"),"in");setTimeout(function(){t.default.addClass(o.outer,"lg-visible")},this.s.backdropDuration);if(this.s.download){this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend",'<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>')}this.prevScrollTop=document.documentElement.scrollTop||document.body.scrollTop};r.prototype.setTop=function(){if(this.s.height!=="100%"){var e=window.innerHeight;var t=(e-parseInt(this.s.height,10))/2;var s=this.outer.querySelector(".lg");if(e>=parseInt(this.s.height,10)){s.style.top=t+"px"}else{s.style.top="0px"}}};r.prototype.doCss=function(){var e=function t(){var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"];var t=document.documentElement;var s=0;for(s=0;s<e.length;s++){if(e[s]in t.style){return true}}};if(e()){return true}return false};r.prototype.isVideo=function(e,t){var s;if(this.s.dynamic){s=this.s.dynamicEl[t].html}else{s=this.items[t].getAttribute("data-html")}if(!e&&s){return{html5:true}}var l=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);var i=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);var r=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);var o=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);if(l){return{youtube:l}}else if(i){return{vimeo:i}}else if(r){return{dailymotion:r}}else if(o){return{vk:o}}};r.prototype.counter=function(){if(this.s.counter){this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend",'<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.items.length+"</span></div>")}};r.prototype.addHtml=function(e){var s=null;var l;if(this.s.dynamic){s=this.s.dynamicEl[e].subHtml}else{l=this.items[e];s=l.getAttribute("data-sub-html");if(this.s.getCaptionFromTitleOrAlt&&!s){s=l.getAttribute("title");if(s&&l.querySelector("img")){s=l.querySelector("img").getAttribute("alt")}}}if(typeof s!=="undefined"&&s!==null){var i=s.substring(0,1);if(i==="."||i==="#"){if(this.s.subHtmlSelectorRelative&&!this.s.dynamic){s=l.querySelector(s).innerHTML}else{s=document.querySelector(s).innerHTML}}}else{s=""}if(this.s.appendSubHtmlTo===".lg-sub-html"){this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML=s}else{this.___slide[e].insertAdjacentHTML("beforeend",s)}if(typeof s!=="undefined"&&s!==null){if(s===""){t.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html")}else{t.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html")}}t.default.trigger(this.el,"onAfterAppendSubHtml",{index:e})};r.prototype.preload=function(e){var t=1;var s=1;for(t=1;t<=this.s.preload;t++){if(t>=this.items.length-e){break}this.loadContent(e+t,false,0)}for(s=1;s<=this.s.preload;s++){if(e-s<0){break}this.loadContent(e-s,false,0)}};r.prototype.loadContent=function(e,s,l){var i=this;var r=false;var o;var a;var d;var n;var u;var f;var c=function b(e){var t=[];var s=[];for(var l=0;l<e.length;l++){var i=e[l].split(" ");if(i[0]===""){i.splice(0,1)}s.push(i[0]);t.push(i[1])}var r=window.innerWidth;for(var o=0;o<t.length;o++){if(parseInt(t[o],10)>r){a=s[o];break}}};if(i.s.dynamic){if(i.s.dynamicEl[e].poster){r=true;d=i.s.dynamicEl[e].poster}f=i.s.dynamicEl[e].html;a=i.s.dynamicEl[e].src;if(i.s.dynamicEl[e].responsive){var g=i.s.dynamicEl[e].responsive.split(",");c(g)}n=i.s.dynamicEl[e].srcset;u=i.s.dynamicEl[e].sizes}else{if(i.items[e].getAttribute("data-poster")){r=true;d=i.items[e].getAttribute("data-poster")}f=i.items[e].getAttribute("data-html");a=i.items[e].getAttribute("href")||i.items[e].getAttribute("data-src");if(i.items[e].getAttribute("data-responsive")){var h=i.items[e].getAttribute("data-responsive").split(",");c(h)}n=i.items[e].getAttribute("data-srcset");u=i.items[e].getAttribute("data-sizes")}var m=false;if(i.s.dynamic){if(i.s.dynamicEl[e].iframe){m=true}}else{if(i.items[e].getAttribute("data-iframe")==="true"){m=true}}var p=i.isVideo(a,e);if(!t.default.hasClass(i.___slide[e],"lg-loaded")){if(m){i.___slide[e].insertAdjacentHTML("afterbegin",'<div class="lg-video-cont" style="max-width:'+i.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+a+'"  allowfullscreen="true"></iframe></div></div>')}else if(r){var v="";if(p&&p.youtube){v="lg-has-youtube"}else if(p&&p.vimeo){v="lg-has-vimeo"}else{v="lg-has-html5"}i.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont '+v+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+d+'" /></div></div>')}else if(p){i.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont "><div class="lg-video"></div></div>');t.default.trigger(i.el,"hasVideo",{index:e,src:a,html:f})}else{i.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+a+'" /></div>')}t.default.trigger(i.el,"onAferAppendSlide",{index:e});o=i.___slide[e].querySelector(".lg-object");if(u){o.setAttribute("sizes",u)}if(n){o.setAttribute("srcset",n);try{picturefill({elements:[o[0]]})}catch(y){console.error("Make sure you have included Picturefill version 2")}}if(this.s.appendSubHtmlTo!==".lg-sub-html"){i.addHtml(e)}t.default.addClass(i.___slide[e],"lg-loaded")}t.default.on(i.___slide[e].querySelector(".lg-object"),"load.lg error.lg",function(){var s=0;if(l&&!t.default.hasClass(document.body,"lg-from-hash")){s=l}setTimeout(function(){t.default.addClass(i.___slide[e],"lg-complete");t.default.trigger(i.el,"onSlideItemLoad",{index:e,delay:l||0})},s)});if(p&&p.html5&&!r){t.default.addClass(i.___slide[e],"lg-complete")}if(s===true){if(!t.default.hasClass(i.___slide[e],"lg-complete")){t.default.on(i.___slide[e].querySelector(".lg-object"),"load.lg error.lg",function(){i.preload(e)})}else{i.preload(e)}}};r.prototype.slide=function(e,s,l){var i=0;for(var r=0;r<this.___slide.length;r++){if(t.default.hasClass(this.___slide[r],"lg-current")){i=r;break}}var o=this;if(o.lGalleryOn&&i===e){return}var a=this.___slide.length;var d=o.lGalleryOn?this.s.speed:0;var n=false;var u=false;if(!o.lgBusy){if(this.s.download){var f;if(o.s.dynamic){f=o.s.dynamicEl[e].downloadUrl!==false&&(o.s.dynamicEl[e].downloadUrl||o.s.dynamicEl[e].src)}else{f=o.items[e].getAttribute("data-download-url")!=="false"&&(o.items[e].getAttribute("data-download-url")||o.items[e].getAttribute("href")||o.items[e].getAttribute("data-src"))}if(f){document.getElementById("lg-download").setAttribute("href",f);t.default.removeClass(o.outer,"lg-hide-download")}else{t.default.addClass(o.outer,"lg-hide-download")}}t.default.trigger(o.el,"onBeforeSlide",{prevIndex:i,index:e,fromTouch:s,fromThumb:l});o.lgBusy=true;clearTimeout(o.hideBartimeout);if(this.s.appendSubHtmlTo===".lg-sub-html"){setTimeout(function(){o.addHtml(e)},d)}this.arrowDisable(e);if(!s){t.default.addClass(o.outer,"lg-no-trans");for(var c=0;c<this.___slide.length;c++){t.default.removeClass(this.___slide[c],"lg-prev-slide");t.default.removeClass(this.___slide[c],"lg-next-slide")}if(e<i){u=true;if(e===0&&i===a-1&&!l){u=false;n=true}}else if(e>i){n=true;if(e===a-1&&i===0&&!l){u=true;n=false}}if(u){t.default.addClass(this.___slide[e],"lg-prev-slide");t.default.addClass(this.___slide[i],"lg-next-slide")}else if(n){t.default.addClass(this.___slide[e],"lg-next-slide");t.default.addClass(this.___slide[i],"lg-prev-slide")}setTimeout(function(){t.default.removeClass(o.outer.querySelector(".lg-current"),"lg-current");t.default.addClass(o.___slide[e],"lg-current");t.default.removeClass(o.outer,"lg-no-trans")},50)}else{var g=e-1;var h=e+1;if(e===0&&i===a-1){h=0;g=a-1}else if(e===a-1&&i===0){h=0;g=a-1}t.default.removeClass(o.outer.querySelector(".lg-prev-slide"),"lg-prev-slide");t.default.removeClass(o.outer.querySelector(".lg-current"),"lg-current");t.default.removeClass(o.outer.querySelector(".lg-next-slide"),"lg-next-slide");t.default.addClass(o.___slide[g],"lg-prev-slide");t.default.addClass(o.___slide[h],"lg-next-slide");t.default.addClass(o.___slide[e],"lg-current")}if(o.lGalleryOn){setTimeout(function(){o.loadContent(e,true,0)},this.s.speed+50);setTimeout(function(){o.lgBusy=false;t.default.trigger(o.el,"onAfterSlide",{prevIndex:i,index:e,fromTouch:s,fromThumb:l})},this.s.speed)}else{o.loadContent(e,true,o.s.backdropDuration);o.lgBusy=false;t.default.trigger(o.el,"onAfterSlide",{prevIndex:i,index:e,fromTouch:s,fromThumb:l})}o.lGalleryOn=true;if(this.s.counter){if(document.getElementById("lg-counter-current")){document.getElementById("lg-counter-current").innerHTML=e+1}}}};r.prototype.goToNextSlide=function(e){var s=this;if(!s.lgBusy){if(s.index+1<s.___slide.length){s.index++;t.default.trigger(s.el,"onBeforeNextSlide",{index:s.index});s.slide(s.index,e,false)}else{if(s.s.loop){s.index=0;t.default.trigger(s.el,"onBeforeNextSlide",{index:s.index});s.slide(s.index,e,false)}else if(s.s.slideEndAnimatoin){t.default.addClass(s.outer,"lg-right-end");setTimeout(function(){t.default.removeClass(s.outer,"lg-right-end")},400)}}}};r.prototype.goToPrevSlide=function(e){var s=this;if(!s.lgBusy){if(s.index>0){s.index--;t.default.trigger(s.el,"onBeforePrevSlide",{index:s.index,fromTouch:e});s.slide(s.index,e,false)}else{if(s.s.loop){s.index=s.items.length-1;t.default.trigger(s.el,"onBeforePrevSlide",{index:s.index,fromTouch:e});s.slide(s.index,e,false)}else if(s.s.slideEndAnimatoin){t.default.addClass(s.outer,"lg-left-end");setTimeout(function(){t.default.removeClass(s.outer,"lg-left-end")},400)}}}};r.prototype.keyPress=function(){var e=this;if(this.items.length>1){t.default.on(window,"keyup.lg",function(t){if(e.items.length>1){if(t.keyCode===37){t.preventDefault();e.goToPrevSlide()}if(t.keyCode===39){t.preventDefault();e.goToNextSlide()}}})}t.default.on(window,"keydown.lg",function(s){if(e.s.escKey===true&&s.keyCode===27){s.preventDefault();if(!t.default.hasClass(e.outer,"lg-thumb-open")){e.destroy()}else{t.default.removeClass(e.outer,"lg-thumb-open")}}})};r.prototype.arrow=function(){var e=this;t.default.on(this.outer.querySelector(".lg-prev"),"click.lg",function(){e.goToPrevSlide()});t.default.on(this.outer.querySelector(".lg-next"),"click.lg",function(){e.goToNextSlide()})};r.prototype.arrowDisable=function(e){if(!this.s.loop&&this.s.hideControlOnEnd){var s=this.outer.querySelector(".lg-next");var l=this.outer.querySelector(".lg-prev");if(e+1<this.___slide.length){s.removeAttribute("disabled");t.default.removeClass(s,"disabled")}else{s.setAttribute("disabled","disabled");t.default.addClass(s,"disabled")}if(e>0){l.removeAttribute("disabled");t.default.removeClass(l,"disabled")}else{s.setAttribute("disabled","disabled");t.default.addClass(s,"disabled")}}};r.prototype.setTranslate=function(e,s,l){if(this.s.useLeft){e.style.left=s}else{t.default.setVendor(e,"Transform","translate3d("+s+"px, "+l+"px, 0px)")}};r.prototype.touchMove=function(e,s){var l=s-e;if(Math.abs(l)>15){t.default.addClass(this.outer,"lg-dragging");this.setTranslate(this.___slide[this.index],l,0);this.setTranslate(document.querySelector(".lg-prev-slide"),-this.___slide[this.index].clientWidth+l,0);this.setTranslate(document.querySelector(".lg-next-slide"),this.___slide[this.index].clientWidth+l,0)}};r.prototype.touchEnd=function(e){var s=this;if(s.s.mode!=="lg-slide"){t.default.addClass(s.outer,"lg-slide")}for(var l=0;l<this.___slide.length;l++){if(!t.default.hasClass(this.___slide[l],"lg-current")&&!t.default.hasClass(this.___slide[l],"lg-prev-slide")&&!t.default.hasClass(this.___slide[l],"lg-next-slide")){this.___slide[l].style.opacity="0"}}setTimeout(function(){t.default.removeClass(s.outer,"lg-dragging");if(e<0&&Math.abs(e)>s.s.swipeThreshold){s.goToNextSlide(true)}else if(e>0&&Math.abs(e)>s.s.swipeThreshold){s.goToPrevSlide(true)}else if(Math.abs(e)<5){t.default.trigger(s.el,"onSlideClick")}for(var l=0;l<s.___slide.length;l++){s.___slide[l].removeAttribute("style")}});setTimeout(function(){if(!t.default.hasClass(s.outer,"lg-dragging")&&s.s.mode!=="lg-slide"){t.default.removeClass(s.outer,"lg-slide")}},s.s.speed+100)};r.prototype.enableSwipe=function(){var e=this;var s=0;var l=0;var i=false;if(e.s.enableSwipe&&e.isTouch&&e.doCss()){for(var r=0;r<e.___slide.length;r++){t.default.on(e.___slide[r],"touchstart.lg",function(l){if(!t.default.hasClass(e.outer,"lg-zoomed")&&!e.lgBusy){l.preventDefault();e.manageSwipeClass();s=l.targetTouches[0].pageX}})}for(var o=0;o<e.___slide.length;o++){t.default.on(e.___slide[o],"touchmove.lg",function(r){if(!t.default.hasClass(e.outer,"lg-zoomed")){r.preventDefault();l=r.targetTouches[0].pageX;e.touchMove(s,l);i=true}})}for(var a=0;a<e.___slide.length;a++){t.default.on(e.___slide[a],"touchend.lg",function(){if(!t.default.hasClass(e.outer,"lg-zoomed")){if(i){i=false;e.touchEnd(l-s)}else{t.default.trigger(e.el,"onSlideClick")}}})}}};r.prototype.enableDrag=function(){var e=this;var s=0;var l=0;var i=false;var r=false;if(e.s.enableDrag&&!e.isTouch&&e.doCss()){for(var o=0;o<e.___slide.length;o++){t.default.on(e.___slide[o],"mousedown.lg",function(l){if(!t.default.hasClass(e.outer,"lg-zoomed")){if(t.default.hasClass(l.target,"lg-object")||t.default.hasClass(l.target,"lg-video-play")){l.preventDefault();if(!e.lgBusy){e.manageSwipeClass();s=l.pageX;i=true;e.outer.scrollLeft+=1;e.outer.scrollLeft-=1;t.default.removeClass(e.outer,"lg-grab");t.default.addClass(e.outer,"lg-grabbing");t.default.trigger(e.el,"onDragstart")}}}})}t.default.on(window,"mousemove.lg",function(o){if(i){r=true;l=o.pageX;e.touchMove(s,l);t.default.trigger(e.el,"onDragmove")}});t.default.on(window,"mouseup.lg",function(o){if(r){r=false;e.touchEnd(l-s);t.default.trigger(e.el,"onDragend")}else if(t.default.hasClass(o.target,"lg-object")||t.default.hasClass(o.target,"lg-video-play")){t.default.trigger(e.el,"onSlideClick")}if(i){i=false;t.default.removeClass(e.outer,"lg-grabbing");t.default.addClass(e.outer,"lg-grab")}})}};r.prototype.manageSwipeClass=function(){var e=this.index+1;var s=this.index-1;var l=this.___slide.length;if(this.s.loop){if(this.index===0){s=l-1}else if(this.index===l-1){e=0}}for(var i=0;i<this.___slide.length;i++){t.default.removeClass(this.___slide[i],"lg-next-slide");t.default.removeClass(this.___slide[i],"lg-prev-slide")}if(s>-1){t.default.addClass(this.___slide[s],"lg-prev-slide")}t.default.addClass(this.___slide[e],"lg-next-slide")};r.prototype.mousewheel=function(){var e=this;t.default.on(e.outer,"mousewheel.lg",function(t){if(!t.deltaY){return}if(t.deltaY>0){e.goToPrevSlide()}else{e.goToNextSlide()}t.preventDefault()})};r.prototype.closeGallery=function(){var e=this;var s=false;t.default.on(this.outer.querySelector(".lg-close"),"click.lg",function(){e.destroy()});if(e.s.closable){t.default.on(e.outer,"mousedown.lg",function(e){if(t.default.hasClass(e.target,"lg-outer")||t.default.hasClass(e.target,"lg-item")||t.default.hasClass(e.target,"lg-img-wrap")){s=true}else{s=false}});t.default.on(e.outer,"mouseup.lg",function(l){if(t.default.hasClass(l.target,"lg-outer")||t.default.hasClass(l.target,"lg-item")||t.default.hasClass(l.target,"lg-img-wrap")&&s){if(!t.default.hasClass(e.outer,"lg-dragging")){e.destroy()}}})}};r.prototype.destroy=function(e){var s=this;if(!e){t.default.trigger(s.el,"onBeforeClose")}document.body.scrollTop=s.prevScrollTop;document.documentElement.scrollTop=s.prevScrollTop;if(e){if(!s.s.dynamic){for(var l=0;l<this.items.length;l++){t.default.off(this.items[l],".lg");t.default.off(this.items[l],".lgcustom")}}var i=s.el.getAttribute("lg-uid");delete window.lgData[i];s.el.removeAttribute("lg-uid")}t.default.off(this.el,".lgtm");for(var r in window.lgModules){if(s.modules[r]){s.modules[r].destroy()}}this.lGalleryOn=false;clearTimeout(s.hideBartimeout);this.hideBartimeout=false;t.default.off(window,".lg");t.default.removeClass(document.body,"lg-on");t.default.removeClass(document.body,"lg-from-hash");if(s.outer){t.default.removeClass(s.outer,"lg-visible")}t.default.removeClass(document.querySelector(".lg-backdrop"),"in");setTimeout(function(){try{if(s.outer){s.outer.parentNode.removeChild(s.outer)}if(document.querySelector(".lg-backdrop")){document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop"))}if(!e){t.default.trigger(s.el,"onCloseAfter")}}catch(l){}},s.s.backdropDuration+50)};window.lightGallery=function(e,t){if(!e){return}try{if(!e.getAttribute("lg-uid")){var s="lg"+window.lgData.uid++;window.lgData[s]=new r(e,t);e.setAttribute("lg-uid",s)}else{try{window.lgData[e.getAttribute("lg-uid")].init()}catch(l){console.error("lightGallery has not initiated properly")}}}catch(l){console.error("lightGallery has not initiated properly")}}})},{"./lg-utils":1}]},{},[2])(2)});
//rebuild by neat 