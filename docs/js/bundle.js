!function(){var t={219:function(){!function(){function t(t){t.currentTarget.setAttribute("class","copy-btn copy"),t.currentTarget.setAttribute("aria-label","Copy this code.")}window.onload=function(){new ClipboardJS(".copy",{target:function(t){return t.nextElementSibling}}).on("success",(function(t){!function(t,o){t.setAttribute("class","copy-btn copy tooltipped"),t.setAttribute("aria-label","Copied!")}(t.trigger),t.clearSelection()})).on("error",(function(t){console.error("Action:",t.action),console.error("Trigger:",t.trigger)}))},document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".copy").forEach((function(o){o.addEventListener("animationend",t)}))}))}()},447:function(){document.addEventListener("DOMContentLoaded",(function(){document.querySelector("main").querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((function(t){if(t.id){var o=document.createElement("a");o.setAttribute("class","headerlink"),o.setAttribute("href","#"+t.id),o.setAttribute("title","Permalink to this headline");var e=document.createElement("i");e.setAttribute("class","fas fa-hashtag"),e.setAttribute("aria-hidden","true"),o.append(e),t.append(o)}}))}))},557:function(){var t;(t=jQuery)(window).on("load.BackToTheTop",(function(){t('a[href^="#"]').BackToTheTop()})),t.fn.BackToTheTop=function(o){var e={duration:300,easing:"swing",offset:0,hash:!0,scrolloffset:0,fadein:"slow",fadeout:"slow",display:"bottom-right",top:0,bottom:0,left:0,right:0,zIndex:999,position:"fixed"};t.extend(e,o),t('a[href^="#"]').on("click.BackToTheTop",(function(){var o=void 0!==t(this).data("backtothetop-scrolltop")?t(this).data("backtothetop-scrolltop"):t(this.hash).offset()?t(this.hash).offset().top:"backtothetop-fixed"==t(this).attr("id")&&"#"==t(this).attr("href")?0:null;if(null!==o){var a=void 0===t(this).data("backtothetop-duration")?e.duration:t(this).data("backtothetop-duration"),i=void 0===t(this).data("backtothetop-easing")?e.easing:t(this).data("backtothetop-easing"),n=void 0===t(this).data("backtothetop-offset")?e.offset:t(this).data("backtothetop-offset"),d=void 0===t(this).data("backtothetop-hash")?e.hash:t(this).data("backtothetop-hash"),r=t(this).attr("href");return t("html,body").animate({scrollTop:o+n},a,i,(function(){!0===d&&window.history.pushState("","",r)})),!1}})),function(){var o=t("a#backtothetop-fixed");if(o){var a=void 0===o.data("backtothetop-fixed-scroll-offset")?e.scrolloffset:o.data("backtothetop-fixed-scroll-offset"),i=void 0===o.data("backtothetop-fixed-fadein")?e.fadein:o.data("backtothetop-fixed-fadein"),n=void 0===o.data("backtothetop-fixed-fadeout")?e.fadeout:o.data("backtothetop-fixed-fadeout"),d=void 0===o.data("backtothetop-fixed-display")?e.display:o.data("backtothetop-fixed-display"),r=void 0===o.data("backtothetop-fixed-top")?e.top:o.data("backtothetop-fixed-top"),c=void 0===o.data("backtothetop-fixed-bottom")?e.bottom:o.data("backtothetop-fixed-bottom"),s=void 0===o.data("backtothetop-fixed-left")?e.left:o.data("backtothetop-fixed-left"),f=void 0===o.data("backtothetop-fixed-right")?e.right:o.data("backtothetop-fixed-right"),h=void 0===o.data("backtothetop-fixed-zindex")?e.zIndex:o.data("backtothetop-fixed-zindex");"top-left"==d?(c="none",f="none"):"top-right"==d?(c="none",s="none"):"bottom-left"==d?(r="none",f="none"):"bottom-right"==d&&(r="none",s="none"),o.css({display:"none"}),t(window).on("scroll.BackToTheTop",(function(){t(this).scrollTop()>a?(o.css({top:r,bottom:c,left:s,right:f,zIndex:h,position:e.position}),"none"==o.css("display")&&o.fadeIn(i)):t(this).scrollTop()<=0+a&&"none"!=o.css("display")&&o.fadeOut(n)}))}}()}},127:function(){document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".nav-prev"),o=document.querySelector(".nav-next");document.addEventListener("keydown",(function(e){t&&"ArrowLeft"===e.key&&(location.href=t.getAttribute("href")),o&&"ArrowRight"===e.key&&(location.href=o.getAttribute("href"))}))}))},738:function(){var t;(t=jQuery)(document).ready((function(){t(".has-sub-menu > a span.mark").on("click",(function(o){t(this).parent().siblings("ul").slideToggle("fast","swing",(function(){var o;o=t(this).is(":visible")?"-":"+",t(this).siblings("a").children("span.mark").text(o)})),o.preventDefault()}))}))}},o={};function e(a){var i=o[a];if(void 0!==i)return i.exports;var n=o[a]={exports:{}};return t[a](n,n.exports,e),n.exports}e(738),e(127),e(557),e(447),e(219)}();
