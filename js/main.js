// build time:Mon Dec 02 2019 18:01:53 GMT+0800 (中国标准时间)
(function(i){i("#back-to-top").on("click",function(){i("body, html").animate({scrollTop:0},600)});i("#main-nav-toggle").on("click",function(){i(".nav-container-inner").slideToggle()});i(".article-entry").each(function(n){i(this).find("img").each(function(){if(this.alt&&!(!!i.prototype.justifiedGallery&&i(this).parent(".justified-gallery").length)){i(this).after('<span class="caption">'+this.alt+"</span>")}if(i(this).parent().prop("tagName")!=="A"){i(this).wrap('<a href="'+this.src+'" title="'+this.alt+'" class="gallery-item"></a>')}})});if(typeof lightGallery!="undefined"){var n={selector:".gallery-item"};i(".article-entry").each(function(i,a){lightGallery(a,n)});lightGallery(i(".article-gallery")[0],n)}if(!!i.prototype.justifiedGallery){var n={rowHeight:140,margins:4,lastRow:"justify"};i(".justified-gallery").justifiedGallery(n)}i("#sidebar .sidebar-toggle").on("click",function(){if(i("#sidebar").hasClass("expend")){i("#sidebar").removeClass("expend")}else{i("#sidebar").addClass("expend")}});i(".main-nav-list > li").unwrap();i("#main-nav > li > .main-nav-list-link").each(function(){if(i(".page-title-link").length>0){if(i(this).html().toUpperCase()==i(".page-title-link").html().toUpperCase()){i(this).addClass("current")}else if(i(this).attr("href")==i(".page-title-link").attr("data-url")){i(this).addClass("current")}}});function a(){var n=i(".nav-container-inner").width()-10;var a=i("#main-nav").width();var e=i("#sub-nav").width();if(a+e>n){if(i(".main-nav-more").length==0){i(['<li class="main-nav-list-item top-level-menu main-nav-more">','<a class="main-nav-list-link" href="javascript:;">More</a>','<ul class="main-nav-list-child">',"</ul></li>"].join("")).appendTo(i("#main-nav"));i(".main-nav-more").hover(function(){if(i(window).width()<480){return}i(this).children(".main-nav-list-child").slideDown("fast")},function(){if(i(window).width()<480){return}i(this).children(".main-nav-list-child").slideUp("fast")})}var t=i("#main-nav").children().length;for(var l=t-2;l>=0;l--){var r=i("#main-nav").children().eq(l);if(a+e>n){r.prependTo(i(".main-nav-more > ul"));a=i("#main-nav").width()}else{return}}}if(i(".main-nav-more").length>0){i(".main-nav-more > ul").children().appendTo(i("#main-nav"));i(".main-nav-more").remove()}}a();i(window).on("resize",function(){a()});i(".main-nav-list-item").hover(function(){if(i(window).width()<480){return}i(this).children(".main-nav-list-child").slideDown("fast")},function(){if(i(window).width()<480){return}i(this).children(".main-nav-list-child").slideUp("fast")});i(".main-nav-list-item").each(function(){if(i(this).find(".main-nav-list-child").length>0){i(this).addClass("top-level-menu")}})})(jQuery);
//rebuild by neat 