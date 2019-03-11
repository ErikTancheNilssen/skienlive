;(function(ApliaSiteObject,Repo){var Menu=(function(){var mainMenuHoverID,mainMenuID,dropdownMenuID='dropdownID',subMenuClass='submenu',dropdownMenuClass='dropdownmenu',dropdownMenues=[],stillHover,delayHide,hoverOffDelay;return{init:function(options){var that=this;options=$.extend({mainMenuHoverID:'topmenu-hover',mainMenuID:'topmenu',hoverOffDelay:500},options);mainMenuHoverID=options.mainMenuHoverID;mainMenuID=options.mainMenuID;hoverOffDelay=options.hoverOffDelay;$('#'+mainMenuHoverID).mouseover(function(){that.menuHover();});$('#'+mainMenuHoverID).mouseout(function(){that.tryHideAllDropdowns();});$('#'+mainMenuID+' ul > li > a').mouseover(function(){that.switchDropdown(this);});var subMenuItemsCount=0;var elementItems=$('#'+mainMenuID+' div');for(var k=0;k<elementItems.length;k++){if(elementItems[k].className==subMenuClass){dropdownMenues[subMenuItemsCount]=elementItems[k].id=dropdownMenuID+subMenuItemsCount;$('#'+elementItems[k].id).addClass(dropdownMenuClass);if($('#'+elementItems[k].id).children().length!=0){$('#'+elementItems[k].id).siblings().first().addClass('children');}subMenuItemsCount++;}}},switchDropdown:function(element){var getElement=element.nextSibling.id;if(!getElement&&element.nextSibling!=undefined&&element.nextSibling.nextSibling!=undefined){getElement=element.nextSibling.nextSibling.id;}var idPattern=new RegExp('^'+dropdownMenuID+'(\\d+)');if(idPattern.test(getElement)){var currentMenuNumber=RegExp.$1;}else{return false;}for(var menuCount=0;menuCount<dropdownMenues.length;menuCount++){if(menuCount==currentMenuNumber){this.showDropdown(menuCount);}else{this.hideDropdown(menuCount);}}stillHover=true;},showDropdown:function(menuNumber){var currentMenu=$('#'+dropdownMenues[menuNumber]);currentMenu.css('display','block');currentMenu.siblings().first().addClass('menuhover');},menuHover:function(){stillHover=true;},tryHideAllDropdowns:function(){var that=this;stillHover=false;clearTimeout(delayHide);delayHide=setTimeout(function(){that.hideAllDropdowns();},hoverOffDelay);},hideAllDropdowns:function(){if(!stillHover){for(var menuCount=0;menuCount<dropdownMenues.length;menuCount++){this.hideDropdown(menuCount);}}},hideDropdown:function(menuNumber){var currentMenu=$('#'+dropdownMenues[menuNumber]);currentMenu.css('display','none');currentMenu.siblings().first().removeClass('menuhover');}};})();var Slideshow={initialized:false,init:function(){if(this.initialized)return;this.initialized=true;if($('.slideshow-slides').length>0){$('.slideshow-slides').cycle({slides:'div.slide',autoHeight:'calc',fx:'fade',log:false,swipe:true,prev:'div.slideshow-controls a.slide-previous',next:'div.slideshow-controls a.slide-next',pager:'div.slideshow-markers',before:function(){$('div.slideshow-controls').css('display','none');$('.hovershow').css('display','none');}});$('.slideshow-slides').swipe({swipe:function(event,direction,distance,duration,fingerCount){},allowPageScroll:'vertical'});this.eventsInit();}},eventsInit:function(){var transitionTime=250;$('div.slideshow').mouseover(function(){$('div.slideshow-controls').css('display','block');$('.hovershow').css('display','block');$('div.slideshow-controls a').blur();$(this).cycle('pause');});$('div.slideshow').mouseleave(function(){$('.hovershow').slideUp(transitionTime);$('div.slideshow-controls').fadeOut(transitionTime);$(this).cycle('resume');});}};var IOS={init:function(){if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)){var viewportElement=document.querySelector('meta[name="viewport"]');var initialSettings='width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';var gestureSettings='width=device-width, minimum-scale=1, maximum-scale=10';if(viewportElement){viewportElement.content=initialSettings;document.body.addEventListener('gesturestart',function(){viewportElement.content=gestureSettings;},false);}window.onorientationchange=function(){viewportElement.content=initialSettings;}}}};var Resize={init:function(){var currentWidth,previousWidth=0;$(window).resize(function(){currentWidth=$('div#page').css('width');if((currentWidth!=previousWidth)&&(previousWidth!=0)){}previousWidth=currentWidth;});}};var Gallery={init:function(){$("a.gallery").fancybox({openEffect:'none',closeEffect:'none',padding:0,helpers:{title:{type:'over'},media:{}},beforeLoad:function(){var caption=$(this.element).data('caption');this.title=caption?caption:$(this.element).attr('title');}});$('a.gallery-trigger').click(function(e){e.preventDefault();$(this).parents('.class-image').find('.gallery').click();});}};var StickyMenu={init:function(options){$('#topmenu-bg').waypoint({element:document.getElementById('topmenu-bg'),handler:function(direction){if(direction=='down'){$('#topmenu-bg').addClass('stuck');}else{$('#topmenu-bg').removeClass('stuck');}}});}};var FieldsetOpener={decideIcon:function($el){var $content=$el.parents('fieldset').find('.fieldsetcontent');if($content.is(':visible')){$el.text($el.data('close'));}else{$el.text($el.data('open'));}},init:function(options){var that=this;$('.fieldsetopener').click(function(){var $el=$(this),$content=$el.parents('fieldset').find('.fieldsetcontent');if($content.is(':visible')){$content.addClass('closed');}else{$content.removeClass('closed');}that.decideIcon($el);});$('.fieldsetopener').each(function(){that.decideIcon($(this));});}};$.extend(Repo,{Menu:Menu,Resize:Resize,IOS:IOS,Slideshow:Slideshow,Gallery:Gallery,StickyMenu:StickyMenu,FieldsetOpener:FieldsetOpener});})(window.ApliaSiteObject=window.ApliaSiteObject||{},window.ApliaSiteObject.Components=window.ApliaSiteObject.Components||{});