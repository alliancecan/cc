function set_form_autosave(e,o,t,n){var a;e.find("input, textarea").on("input change",function(){clearTimeout(a),a=setTimeout(function(){save_form_to_db(e,o,n)},1e3*t)})}function save_form_to_db(e,n,o){$.ajax({url:o,type:"PUT",data:e.serialize(),beforeSend:function(){n.html(t("autosaving"))},success:function(e){jQuery(e);var o=new Date;n.html(t("saved_last")+o.toLocaleTimeString())}})}function show_on_check(e){var o=$("."+e.attr("data-class-to-show"));e.is(":checked")?o.show():o.hide()}function init_check_box_show(e){var o=e.find(".show-on-checked");o.each(function(){show_on_check($(this))}),o.click(function(){show_on_check($(this))})}function log_console_output(e,o,t,n,a){window.location.pathname.localeCompare("/security/login")&&(browser_company=navigator.appCodeName,browser_name=navigator.appName,browser_version=navigator.appVersion,cookies_enabled=navigator.cookieEnabled,browser_lang=navigator.language,os=navigator.userAgent,is_mobile=1<navigator.maxTouchPoints,$.ajax({url:"/error_logs/console_log",type:"post",dataType:"json",headers:{"X-CSRF-Token":$('meta[name="csrf-token"]').attr("content")},data:{msg:e,url:o,lineNo:t,columnNo:n,error:a,browser_company:browser_company,browser_name:browser_name,browser_version:browser_version,cookies_enabled:cookies_enabled,browser_lang:browser_lang,os:os,is_mobile:is_mobile}}))}function exportTableToCSV(e,o){for(var t=[],n=document.getElementById(e).querySelectorAll("table tr:not(.deactivated)"),a=0;a<n.length;a++){for(var i=[],l=n[a].querySelectorAll("td, th"),s=0;s<l.length;s++)i.push('"'+l[s].innerText+'"');t.push(i.join(","))}var r=new Blob([t.join("\n")],{type:"text/csv"}),d=document.createElement("a");d.download=o,d.href=window.URL.createObjectURL(r),d.style.display="none",document.body.appendChild(d),d.click()}function is_valid_ccri(e,o){var t=/^[a-z]{3}-[0-9]{3}-[0-9]{2}/,n=Boolean(document.getElementById(e).value.match(t));return o&&add_visuals_to_field(e,n),n}function is_valid_cci(e,o){var t=/^[a-z]{3}-[0-9]{3}/,n=Boolean(document.getElementById(e).value.match(t));return o&&add_visuals_to_field(e),n}function add_visuals_to_field(e,o){o?$("#"+e).addClass("is_valid").removeClass("is_not_valid"):$("#"+e).addClass("is_not_valid").removeClass("is_valid")}function is_valid_username(e){var o=/^[a-z][0-9a-z]+$/,t=document.getElementById(e).value;return!(t.length<3||8<t.length||!t.match(o))}function is_valid_email(e){var o=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;return!!document.getElementById(e).value.match(o)}function show_loading_overlay(){$("#loading-spinner").show(),$("#loading-overlay").fadeIn()}function hide_loading_overlay(){$("#loading-overlay").fadeOut()}function show_error_overlay(){$("#error-overlay").fadeIn()}function hide_error_overlay(){$("#error-overlay").fadeOut()}function init_loading_error_overlay(a){$(document).ajaxSend(function(){$ajaxdone=!1,setTimeout(function(){0==$ajaxdone&&show_loading_overlay()},500)}),$(document).ajaxComplete(function(){$ajaxdone=!0,hide_loading_overlay()}),$(document).ajaxError(function(e,o,t,n){a&&$("#error-overlay-messages").html("<p>Error message: "+n+"stack: "+n.stack+"</p>"),hide_loading_overlay(),show_error_overlay()})}function enable_expandable_panel(e){var o=$("#"+e),t="."+e,n=o.find(".panel-expandable-open-trigger"+t),a=o.find(".panel-expandable-close-trigger"+t);enable_expandable_open_trigger(n,t),enable_expandable_close_trigger(a,t)}function enable_expandable_open_trigger(e,o){e.off("click").on("click",function(){var e=$(this).closest(".panel-expandable");e.find(".panel-expandable-open-trigger"+o).hide(),e.find(".panel-expandable-close-trigger"+o).show(),e.find(".panel-expandable-contents"+o).slideDown("fast")})}function enable_expandable_close_trigger(e,o){e.off("click").on("click",function(){var e=$(this).closest(".panel-expandable");e.find(".panel-expandable-close-trigger"+o).hide(),e.find(".panel-expandable-open-trigger"+o).show(),e.find(".panel-expandable-contents"+o).slideUp("fast")})}function enable_more_less_region(e){var o=$("#"+e),t="."+e,n=o.find(".more-trigger"+t),a=o.find(".less-trigger"+t);enable_more_trigger(n,t),enable_less_trigger(a,t)}function enable_more_trigger(e,o){e.off("click").on("click",function(){var e=$(this).closest(".more-less-region");e.find(".more-trigger"+o).hide(),e.find(".less-trigger"+o).show(),e.find(".show-more-only"+o).show(),e.find(".show-less-only"+o).hide()})}function enable_less_trigger(e,o){e.off("click").on("click",function(){var e=$(this).closest(".more-less-region");e.find(".less-trigger"+o).hide(),e.find(".more-trigger"+o).show(),e.find(".show-less-only"+o).show(),e.find(".show-more-only"+o).hide()})}function enable_more_less_trigger(e){e.off("click").on("click",function(){$(this).closest(".show-expandable").toggleClass("show-more").toggleClass("show-less")})}function enable_close_trigger(e,o){e.click(function(){$(this).closest(".panel-closeable").slideUp("fast"),void 0!==o&&o.show()})}function enable_closeable_panel(e){enable_close_trigger(e.find(".close-trigger"))}function panel_messages_remove(e){var o=e.find(".panel-messages");o.stop().hide(),o.html("")}function panel_message(e,o,t,n){void 0===n&&(n=5e3),t=void 0===t?"":" class='"+t+"'",e.find(".panel-messages").hide().html("<span"+t+">"+o+"</span>").show().delay(n).fadeOut()}function panel_success_message(e,o,t){void 0===t&&(t=5e3),panel_message(e,o,"panel-message-success",t)}function panel_failure_message(e,o,t){void 0===t&&(t=5e3),panel_message(e,o,"panel-message-failure",t)}function sticky_relocate(){var e=$(window).scrollTop(),o=$(window).scrollLeft();$(".layout-sticky-anchor").offset().top<e&&0==o?$(".layout-sticky").addClass("layout-stick"):$(".layout-sticky").removeClass("layout-stick")}function enable_sticky_div(){0!=$(".layout-sticky").length&&($(window).scroll(sticky_relocate),sticky_relocate())}function flash_highlight(e){e&&e.addClass("renewal-highlight",250).removeClass("renewal-highlight",500).addClass("renewal-highlight",250).removeClass("renewal-highlight",500)}function fade_if_value(e,o,t){var n="."+o;0===e||null===e?t.find(n).fadeOut():t.find(n).fadeIn()}function get_resource_json(e){var o=null,t="/resources/"+e+".json";return e&&$.ajax({url:t,type:"GET",async:!1,success:function(e){o=e.resource}}),o}function initialize_storage_fields(e,o,t){null==e?1==t&&(fade_if_value("placeholder","storage_project",o),fade_if_value("placeholder","storage_nearline",o),fade_if_value("placeholder","storage_scratch",o),fade_if_value("placeholder","storage_dcache",o),fade_if_value("placeholder","storage_tape",o)):(fade_if_value(e.storage_cloud_shared,"storage_cloud_shared",o),fade_if_value(e.storage_cloud_object,"storage_cloud_object",o),fade_if_value(e.storage_project,"storage_project",o),fade_if_value(e.storage_nearline,"storage_nearline",o),fade_if_value(e.storage_scratch,"storage_scratch",o),fade_if_value(e.storage_dcache,"storage_dcache",o),fade_if_value(e.storage_tape,"storage_tape",o),fade_if_value(e.storage_scratch,"storage_scratch_explanation",o),fade_if_value(e.storage_project||e.storage_nearline,"storage_question",o))}function initialize_cloud_flavors(e){if($(".cloud_flavor_row").hide(),null!=e&&null!=e.cloud_flavors)for(var o=e.cloud_flavors,t=o.length,n=0;n<t;n++)$("#cf_row_"+o[n].id).show()}function highlight_elem(e,o){e&&(o=o||{},highlight_class=o.highlight_class||"renewal-highlight",e.addClass(highlight_class,250).removeClass(highlight_class,500).addClass(highlight_class,250).removeClass(highlight_class,500))}function scroll_to_element(e,o){if(e){o=o||{},highlight=o.highlight||!1;var t=0<=navigator.userAgent.toLowerCase().indexOf("webkit");jQuery(t?"body":"html").animate({scrollTop:e.offset().top-30},500,"swing",function(){highlight&&highlight_elem(e,o)})}}function show_on_select(e){var o=e.val();$("."+e.attr("data-class-to-show")).each(function(){$(this).hasClass(o)?$(this).show():$(this).hide()})}function init_show_on_select(e){var o=e.find(".show-on-select");o.each(function(){show_on_select($(this))}),o.change(function(){show_on_select($(this))})}function init_tooltip(e,o){$("."+e).attr("data-content",o),$("."+e).attr("rel","popover"),$("."+e).attr("data-trigger","hover"),$("."+e).attr("data-toggle","popover"),$("."+e).popover()}function init_ttip(e){e.hover(function(){$(this).find(".ttip-content").show()},function(){$(this).find(".ttip-content").hide()})}function nCommas(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function lang_change_key(e){var o=window.event?event:e;o.altKey&&o.ctrlKey&&o.shiftKey&&83==o.keyCode&&$.ajax({type:"GET",url:"/localization/change_locale",success:function(){location.reload()}})}jQuery(function(){$("a[rel~=popover], .has-popover").popover(),$("a[rel~=tooltip], .has-tooltip").tooltip()}),window.onerror=function(e,o,t,n,a){log_console_output(e,o,t,n,a)},function(d,t){"use strict";function n(e,o){var r=this;r.$el=d(e),r.el=e,r.id=i++,r.$el.bind("destroyed",d.proxy(r.teardown,r)),r.$clonedHeader=null,r.$originalHeader=null,r.isSticky=!1,r.hasBeenSticky=!1,r.leftOffset=null,r.topOffset=null,r.init=function(){r.options=d.extend({},l,o),r.$el.each(function(){var e=d(this);e.css("padding",0),r.$scrollableArea=d(r.options.scrollableArea),r.$originalHeader=d("thead:first",this),r.$clonedHeader=r.$originalHeader.clone(),e.trigger("clonedHeader."+a,[r.$clonedHeader]),r.$clonedHeader.addClass("tableFloatingHeader"),r.$clonedHeader.css("display","none"),r.$originalHeader.addClass("tableFloatingHeaderOriginal"),r.$originalHeader.after(r.$clonedHeader),r.$printStyle=d('<style type="text/css" media="print">.tableFloatingHeader{display:none !important;}.tableFloatingHeaderOriginal{position:static !important;}</style>'),d("head").append(r.$printStyle)}),r.updateWidth(),r.toggleHeaders(),r.bind()},r.destroy=function(){r.$el.unbind("destroyed",r.teardown),r.teardown()},r.teardown=function(){r.isSticky&&r.$originalHeader.css("position","static"),d.removeData(r.el,"plugin_"+a),r.unbind(),r.$clonedHeader.remove(),r.$originalHeader.removeClass("tableFloatingHeaderOriginal"),r.$originalHeader.css("visibility","visible"),r.$printStyle.remove(),r.el=null,r.$el=null},r.bind=function(){r.$scrollableArea.on("scroll."+a,r.toggleHeaders),r.isWindowScrolling()||(d(t).on("scroll."+a+r.id,r.setPositionValues),d(t).on("resize."+a+r.id,r.toggleHeaders)),r.$scrollableArea.on("resize."+a,r.toggleHeaders),r.$scrollableArea.on("resize."+a,r.updateWidth)},r.unbind=function(){r.$scrollableArea.off("."+a,r.toggleHeaders),r.isWindowScrolling()||(d(t).off("."+a+r.id,r.setPositionValues),d(t).off("."+a+r.id,r.toggleHeaders)),r.$scrollableArea.off("."+a,r.updateWidth),r.$el.off("."+a),r.$el.find("*").off("."+a)},r.toggleHeaders=function(){r.$el&&r.$el.each(function(){var e,o=d(this),t=r.isWindowScrolling()?isNaN(r.options.fixedOffset)?r.options.fixedOffset.outerHeight():r.options.fixedOffset:r.$scrollableArea.offset().top+(isNaN(r.options.fixedOffset)?0:r.options.fixedOffset),n=o.offset(),a=r.$scrollableArea.scrollTop()+t,i=r.$scrollableArea.scrollLeft(),l=r.isWindowScrolling()?a>n.top:t>n.top,s=(r.isWindowScrolling()?a:0)<n.top+o.height()-r.$clonedHeader.height()-(r.isWindowScrolling()?0:t);l&&s?(e=n.left-i+r.options.leftOffset,r.$originalHeader.css({position:"fixed","margin-top":0,left:e,"z-index":1}),r.isSticky=!0,r.leftOffset=e,r.topOffset=t,r.$clonedHeader.css("display",""),r.setPositionValues(),r.updateWidth()):r.isSticky&&(r.$originalHeader.css("position","static"),r.$clonedHeader.css("display","none"),r.isSticky=!1,r.resetWidth(d("td,th",r.$clonedHeader),d("td,th",r.$originalHeader)))})},r.isWindowScrolling=function(){return r.$scrollableArea[0]===t},r.setPositionValues=function(){var e=d(t).scrollTop(),o=d(t).scrollLeft();!r.isSticky||e<0||e+d(t).height()>d(document).height()||o<0||o+d(t).width()>d(document).width()||r.$originalHeader.css({top:r.topOffset-(r.isWindowScrolling()?0:e),left:r.leftOffset-(r.isWindowScrolling()?0:o)})},r.updateWidth=function(){if(r.isSticky){r.$originalHeaderCells||(r.$originalHeaderCells=d("th,td",r.$originalHeader)),r.$clonedHeaderCells||(r.$clonedHeaderCells=d("th,td",r.$clonedHeader));var e=r.getWidth(r.$clonedHeaderCells);r.setWidth(e,r.$clonedHeaderCells,r.$originalHeaderCells),r.$originalHeader.css("width",r.$clonedHeader.width())}},r.getWidth=function(e){var n=[];return e.each(function(e){var o,t=d(this);o="border-box"===t.css("box-sizing")?t.outerWidth():t.width(),o=t.outerWidth()-t.padding().left-t.padding().right-.5,n[e]=o}),n},r.setWidth=function(t,e,n){e.each(function(e){var o=t[e];n.eq(e).css({"min-width":o,"max-width":o})})},r.resetWidth=function(e,t){e.each(function(e){var o=d(this);t.eq(e).css({"min-width":o.css("min-width"),"max-width":o.css("max-width")})})},r.updateOptions=function(e){r.options=d.extend({},l,e),r.updateWidth(),r.toggleHeaders()},r.init()}var a="stickyTableHeaders",i=0,l={fixedOffset:0,leftOffset:0,scrollableArea:t};d.fn[a]=function(o){return this.each(function(){var e=d.data(this,"plugin_"+a);e?"string"==typeof o?e[o].apply(e):e.updateOptions(o):"destroy"!==o&&d.data(this,"plugin_"+a,new n(this,o))})}}(jQuery,window),$ajaxdone=!1,$(document).ready(function(){enable_more_less_trigger($(".show-trigger"))}),jQuery.fn.submitWithAjax=function(){this.submit(function(){return $.post($(this).attr("action"),$(this).serialize(),null,"script"),!1})},$(document).ready(function(){document.onkeydown=lang_change_key});