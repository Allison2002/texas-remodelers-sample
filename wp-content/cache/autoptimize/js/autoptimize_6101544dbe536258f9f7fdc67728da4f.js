;
var astraGetParents=function(elem,selector){if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(s){var matches=(this.document||this.ownerDocument).querySelectorAll(s),i=matches.length;while(--i>=0&&matches.item(i)!==this){}
return i>-1;};}
var parents=[];for(;elem&&elem!==document;elem=elem.parentNode){if(selector){if(elem.matches(selector)){parents.push(elem);}}else{parents.push(elem);}}
return parents;};var getParents=function(elem,selector){console.warn('getParents() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraGetParents() instead.');astraGetParents(elem,selector);}
var astraToggleClass=function(el,className){if(el.classList.contains(className)){el.classList.remove(className);}else{el.classList.add(className);}};var toggleClass=function(el,className){console.warn('toggleClass() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraToggleClass() instead.');astraToggleClass(el,className);};(function(){if(typeof window.CustomEvent==="function")return false;function CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:undefined};var evt=document.createEvent('CustomEvent');evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt;}
CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent;})();var astraTriggerEvent=function astraTriggerEvent(el,typeArg){var customEventInit=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var event=new CustomEvent(typeArg,customEventInit);el.dispatchEvent(event);};astraSmoothScroll=function astraSmoothScroll(e,top){e.preventDefault();window.scrollTo({top:top,left:0,behavior:'smooth'});};astScrollToTopHandler=function(masthead,astScrollTop){var content=getComputedStyle(astScrollTop).content,device=astScrollTop.dataset.onDevices;content=content.replace(/[^0-9]/g,'');if('both'==device||('desktop'==device&&'769'==content)||('mobile'==device&&''==content)){var scrollTop=window.pageYOffset||document.body.scrollTop;if(masthead&&masthead.length){if(scrollTop>masthead.offsetHeight+100){astScrollTop.style.display="block";}else{astScrollTop.style.display="none";}}else{if(window.pageYOffset>300){astScrollTop.style.display="block";}else{astScrollTop.style.display="none";}}}else{astScrollTop.style.display="none";}};(function(){var menu_toggle_all=document.querySelectorAll('#masthead .main-header-menu-toggle'),main_header_masthead=document.getElementById('masthead'),menu_click_listeners_nav={},mobileHeaderType='',body=document.body,mobileHeader='';if(undefined!==main_header_masthead&&null!==main_header_masthead){mobileHeader=main_header_masthead.querySelector("#ast-mobile-header");}
if(''!==mobileHeader&&null!==mobileHeader){mobileHeaderType=mobileHeader.dataset.type;}
document.addEventListener('astMobileHeaderTypeChange',updateHeaderType,false);function updateHeaderType(e){mobileHeaderType=e.detail.type;var popupTrigger=document.querySelectorAll('.menu-toggle');if('dropdown'===mobileHeaderType){document.getElementById('ast-mobile-popup').classList.remove('active','show');updateTrigger('updateHeader');}
if('off-canvas'===mobileHeaderType){for(var item=0;item<popupTrigger.length;item++){if(undefined!==popupTrigger[item]&&popupTrigger[item].classList.contains('toggled')){popupTrigger[item].click();}}}
init(mobileHeaderType);}
popupTriggerClick=function(event){var triggerType=event.currentTarget.trigger_type;var popupWrap=document.getElementById('ast-mobile-popup');const menuToggleClose=document.getElementById('menu-toggle-close');if(menuToggleClose){menuToggleClose.focus();}
if(!body.classList.contains('ast-popup-nav-open')){body.classList.add('ast-popup-nav-open');}
if(!body.classList.contains('ast-main-header-nav-open')&&'mobile'!==triggerType){body.classList.add('ast-main-header-nav-open');}
if(!document.documentElement.classList.contains('ast-off-canvas-active')){document.documentElement.classList.add('ast-off-canvas-active');}
if('desktop'===triggerType){popupWrap.querySelector('.ast-mobile-popup-content').style.display='none';popupWrap.querySelector('.ast-desktop-popup-content').style.display='block';}
if('mobile'===triggerType){popupWrap.querySelector('.ast-desktop-popup-content').style.display='none';popupWrap.querySelector('.ast-mobile-popup-content').style.display='block';}
this.style.display='none';popupWrap.classList.add('active','show');}
function updateTrigger(currentElement){mobileHeader=main_header_masthead.querySelector("#ast-mobile-header");var parent_li_sibling='';if(undefined!==mobileHeader&&null!==mobileHeader&&'dropdown'===mobileHeader.dataset.type&&'updateHeader'!==currentElement){return;}
if(undefined!==currentElement&&'updateHeader'!==currentElement){parent_li_sibling=currentElement.closest('.ast-mobile-popup-inner').querySelectorAll('.menu-item-has-children');}else{var popup=document.querySelector('#ast-mobile-popup');parent_li_sibling=popup.querySelectorAll('.menu-item-has-children');}
parent_li_sibling.forEach((li_sibling)=>{li_sibling.classList.remove('ast-submenu-expanded');const all_sub_menu=Array.from(li_sibling.querySelectorAll('.sub-menu'));all_sub_menu.forEach((sub_menu)=>{if(!sub_menu.hasAttribute('data-initial-display')){sub_menu.setAttribute('data-initial-display',window.getComputedStyle(sub_menu).display);}
if(sub_menu.getAttribute('data-initial-display')==='block'){sub_menu.style.display='block';}else{sub_menu.style.display='none';}});});var popupTrigger=document.querySelectorAll('.menu-toggle');document.body.classList.remove('ast-main-header-nav-open','ast-popup-nav-open');document.documentElement.classList.remove('ast-off-canvas-active');for(var item=0;item<popupTrigger.length;item++){popupTrigger[item].classList.remove('toggled');popupTrigger[item].style.display='flex';}}
function init(mobileHeaderType){var popupTriggerMobile=document.querySelectorAll('#ast-mobile-header .menu-toggle');var popupTriggerDesktop=document.querySelectorAll('#ast-desktop-header .menu-toggle');if(undefined===mobileHeaderType&&null!==main_header_masthead){mobileHeader=main_header_masthead.querySelector("#ast-mobile-header");if(mobileHeader){mobileHeaderType=mobileHeader.dataset.type;}else{var desktopHeader=main_header_masthead.querySelector("#ast-desktop-header");if(desktopHeader){mobileHeaderType=desktopHeader.dataset.toggleType;}else{return;}}}
if('off-canvas'===mobileHeaderType){var popupClose=document.getElementById('menu-toggle-close'),popupInner=document.querySelector('.ast-mobile-popup-inner');if(undefined===popupInner||null===popupInner){return;}
popupLinks=popupInner.getElementsByTagName('a');for(var item=0;item<popupTriggerMobile.length;item++){popupTriggerMobile[item].removeEventListener("click",astraNavMenuToggle,false);popupTriggerMobile[item].removeEventListener("click",popupTriggerClick);popupTriggerMobile[item].addEventListener("click",popupTriggerClick,false);popupTriggerMobile[item].trigger_type='mobile';}
for(var item=0;item<popupTriggerDesktop.length;item++){popupTriggerDesktop[item].removeEventListener("click",astraNavMenuToggle,false);popupTriggerDesktop[item].removeEventListener("click",popupTriggerClick);popupTriggerDesktop[item].addEventListener("click",popupTriggerClick,false);popupTriggerDesktop[item].trigger_type='desktop';}
popupClose.addEventListener("click",function(e){document.getElementById('ast-mobile-popup').classList.remove('active','show');updateTrigger(this);});document.addEventListener('keyup',function(event){if(event.keyCode===27){event.preventDefault();document.getElementById('ast-mobile-popup').classList.remove('active','show');updateTrigger();}});document.addEventListener('click',function(event){var target=event.target;var modal=document.querySelector('.ast-mobile-popup-drawer.active .ast-mobile-popup-overlay');if(target===modal){document.getElementById('ast-mobile-popup').classList.remove('active','show');updateTrigger();}});for(let link=0,len=popupLinks.length;link<len;link++){if(null!==popupLinks[link].getAttribute("href")&&(popupLinks[link].getAttribute("href").startsWith('#')||-1!==popupLinks[link].getAttribute("href").search("#"))&&(!popupLinks[link].parentElement.classList.contains('menu-item-has-children')||(popupLinks[link].parentElement.classList.contains('menu-item-has-children')&&document.querySelector('header.site-header').classList.contains('ast-builder-menu-toggle-icon')))){popupLinks[link].addEventListener('click',triggerToggleClose,true);popupLinks[link].headerType='off-canvas';}}
AstraToggleSetup();}else if('dropdown'===mobileHeaderType){var mobileDropdownContent=document.querySelectorAll('.ast-mobile-header-content')||false,desktopDropdownContent=document.querySelector('.ast-desktop-header-content')||false;if(mobileDropdownContent.length>0){for(let index=0;index<mobileDropdownContent.length;index++){var mobileLinks=mobileDropdownContent[index].getElementsByTagName('a');for(link=0,len=mobileLinks.length;link<len;link++){if(null!==mobileLinks[link].getAttribute("href")&&(mobileLinks[link].getAttribute("href").startsWith('#')||-1!==mobileLinks[link].getAttribute("href").search("#"))&&(!mobileLinks[link].parentElement.classList.contains('menu-item-has-children')||(mobileLinks[link].parentElement.classList.contains('menu-item-has-children')&&document.querySelector('header.site-header').classList.contains('ast-builder-menu-toggle-icon')))){mobileLinks[link].addEventListener('click',triggerToggleClose,true);mobileLinks[link].headerType='dropdown';}}}}
if(desktopDropdownContent){var desktopLinks=desktopDropdownContent.getElementsByTagName('a');for(link=0,len=desktopLinks.length;link<len;link++){desktopLinks[link].addEventListener('click',triggerToggleClose,true);desktopLinks[link].headerType='dropdown';}}
for(var item=0;item<popupTriggerMobile.length;item++){popupTriggerMobile[item].removeEventListener("click",popupTriggerClick,false);popupTriggerMobile[item].removeEventListener('click',astraNavMenuToggle);popupTriggerMobile[item].addEventListener('click',astraNavMenuToggle,false);popupTriggerMobile[item].trigger_type='mobile';}
for(var item=0;item<popupTriggerDesktop.length;item++){popupTriggerDesktop[item].removeEventListener("click",popupTriggerClick,false);popupTriggerDesktop[item].removeEventListener('click',astraNavMenuToggle);popupTriggerDesktop[item].addEventListener('click',astraNavMenuToggle,false);popupTriggerDesktop[item].trigger_type='desktop';}
AstraToggleSetup();}
accountPopupTrigger();}
function triggerToggleClose(event){var headerType=event.currentTarget.headerType;switch(headerType){case'dropdown':var popupTrigger=document.querySelectorAll('.menu-toggle.toggled');for(var item=0;item<popupTrigger.length;item++){popupTrigger[item].click();}
break;case'off-canvas':var popupClose=document.getElementById('menu-toggle-close');popupClose.click();break;default:break;}}
window.addEventListener('load',function(){init();});document.addEventListener('astLayoutWidthChanged',function(){init();});document.addEventListener('astPartialContentRendered',function(){menu_toggle_all=document.querySelectorAll('.main-header-menu-toggle');body.classList.remove("ast-main-header-nav-open");document.addEventListener('astMobileHeaderTypeChange',updateHeaderType,false);init();accountPopupTrigger();});var mobile_width=(null!==navigator.userAgent.match(/Android/i)&&'Android'===navigator.userAgent.match(/Android/i)[0])?window.visualViewport.width:window.innerWidth;function AstraHandleResizeEvent(){var menu_offcanvas_close=document.getElementById('menu-toggle-close');var menu_dropdown_close=document.querySelector('.menu-toggle.toggled');var desktop_header_content=document.querySelector('#masthead > #ast-desktop-header .ast-desktop-header-content');var elementor_editor=document.querySelector('.elementor-editor-active');if(desktop_header_content){desktop_header_content.style.display='none';}
var mobileResizeWidth=(null!==navigator.userAgent.match(/Android/i)&&'Android'===navigator.userAgent.match(/Android/i)[0])?window.visualViewport.width:window.innerWidth;if(mobileResizeWidth!==mobile_width){if(menu_dropdown_close&&null===elementor_editor){menu_dropdown_close.click();}
document.body.classList.remove('ast-main-header-nav-open','ast-popup-nav-open');if(menu_offcanvas_close&&null==elementor_editor){menu_offcanvas_close.click();}}
updateHeaderBreakPoint();AstraToggleSetup();}
window.addEventListener('resize',function(){if('INPUT'!==document.activeElement.tagName){AstraHandleResizeEvent();}});document.addEventListener('DOMContentLoaded',function(){AstraToggleSetup();var containerButton;if(body.classList.contains('ast-header-break-point')){containerButton=document.getElementById('ast-mobile-header');}else{containerButton=document.getElementById('ast-desktop-header');}
if(null!==containerButton){var containerMenu=containerButton.querySelector('.navigation-accessibility');navigation_accessibility(containerMenu,containerButton);}});var get_window_width=function(){return document.documentElement.clientWidth;}
var updateHeaderBreakPoint=function(){var originalOverflow=body.style.overflow;body.style.overflow='hidden';var ww=get_window_width();body.style.overflow=originalOverflow;var break_point=astra.break_point;if(ww>break_point||0===ww){if(menu_toggle_all.length>0){for(var i=0;i<menu_toggle_all.length;i++){if(null!==menu_toggle_all[i]){menu_toggle_all[i].classList.remove('toggled');}}}
body.classList.remove("ast-header-break-point");body.classList.add("ast-desktop");astraTriggerEvent(body,"astra-header-responsive-enabled");}else{body.classList.add("ast-header-break-point");body.classList.remove("ast-desktop");astraTriggerEvent(body,"astra-header-responsive-disabled")}}
var accountPopupTrigger=function(){var header_account_trigger=document.querySelectorAll('.ast-account-action-login');if(!header_account_trigger.length){return;}
const formWrapper=document.querySelector('#ast-hb-account-login-wrap');if(!formWrapper){return;}
const formCloseBtn=document.querySelector('#ast-hb-login-close');header_account_trigger.forEach(function(_trigger){_trigger.addEventListener('click',function(e){e.preventDefault();formWrapper.classList.add('show');});});if(formCloseBtn){formCloseBtn.addEventListener('click',function(e){e.preventDefault();formWrapper.classList.remove('show');});}}
updateHeaderBreakPoint();AstraToggleSubMenu=function(event){event.preventDefault();if('false'===event.target.getAttribute('aria-expanded')||!event.target.getAttribute('aria-expanded')){event.target.setAttribute('aria-expanded','true');}else{event.target.setAttribute('aria-expanded','false');}
var parent_li=this.parentNode;if(parent_li.classList.contains('ast-submenu-expanded')&&document.querySelector('header.site-header').classList.contains('ast-builder-menu-toggle-link')){if(!this.classList.contains('ast-menu-toggle')){var link=parent_li.querySelector('a').getAttribute('href');if(''!==link&&'#'!==link){window.location=link;}}}
var parent_li_child=parent_li.querySelectorAll('.menu-item-has-children');for(var j=0;j<parent_li_child.length;j++){parent_li_child[j].classList.remove('ast-submenu-expanded');var parent_li_child_sub_menu=parent_li_child[j].querySelector('.sub-menu, .children');if(null!==parent_li_child_sub_menu){parent_li_child_sub_menu.style.display='none';}}
var parent_li_sibling=parent_li.parentNode.querySelectorAll('.menu-item-has-children');for(var j=0;j<parent_li_sibling.length;j++){if(parent_li_sibling[j]!=parent_li){parent_li_sibling[j].classList.remove('ast-submenu-expanded');var all_sub_menu=parent_li_sibling[j].querySelectorAll('.sub-menu');for(var k=0;k<all_sub_menu.length;k++){all_sub_menu[k].style.display='none';}}}
if(parent_li.classList.contains('menu-item-has-children')){astraToggleClass(parent_li,'ast-submenu-expanded');if(parent_li.classList.contains('ast-submenu-expanded')){parent_li.querySelector('.sub-menu').style.display='block';}else{parent_li.querySelector('.sub-menu').style.display='none';}}};AstraToggleSetup=function(){if(typeof astraAddon!='undefined'&&typeof astraToggleSetupPro==="function"){astraToggleSetupPro(mobileHeaderType,body,menu_click_listeners_nav);}else{var flag=false;var menuToggleAllLength;if('off-canvas'===mobileHeaderType||'full-width'===mobileHeaderType){var __main_header_all=document.querySelectorAll('#ast-mobile-popup, #ast-mobile-header');var menu_toggle_all=document.querySelectorAll('#ast-mobile-header .main-header-menu-toggle');menuToggleAllLength=menu_toggle_all.length;}else{var __main_header_all=document.querySelectorAll('#ast-mobile-header'),menu_toggle_all=document.querySelectorAll('#ast-mobile-header .main-header-menu-toggle');menuToggleAllLength=menu_toggle_all.length;flag=menuToggleAllLength>0?false:true;menuToggleAllLength=flag?1:menuToggleAllLength;}
if(menuToggleAllLength>0||flag){for(var i=0;i<menuToggleAllLength;i++){if(!flag){menu_toggle_all[i].setAttribute('data-index',i);if(!menu_click_listeners_nav[i]){menu_click_listeners_nav[i]=menu_toggle_all[i];menu_toggle_all[i].removeEventListener('click',astraNavMenuToggle);menu_toggle_all[i].addEventListener('click',astraNavMenuToggle,false);}}
if('undefined'!==typeof __main_header_all[i]){for(var mainHeaderCount=0;mainHeaderCount<__main_header_all.length;mainHeaderCount++){if(document.querySelector('header.site-header').classList.contains('ast-builder-menu-toggle-link')){var astra_menu_toggle=__main_header_all[mainHeaderCount].querySelectorAll('ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle');}else{var astra_menu_toggle=__main_header_all[mainHeaderCount].querySelectorAll('ul.main-header-menu .ast-menu-toggle');}
if(astra_menu_toggle.length>0){for(var j=0;j<astra_menu_toggle.length;j++){astra_menu_toggle[j].removeEventListener('click',AstraToggleSubMenu);astra_menu_toggle[j].addEventListener('click',AstraToggleSubMenu,false);}}}}}}}};astraNavMenuToggle=function(event){if(typeof astraAddon!='undefined'){astraNavMenuTogglePro(event,body,mobileHeaderType,this);}else{event.preventDefault();var __main_header_all=document.querySelectorAll('#masthead > #ast-mobile-header .main-header-bar-navigation');menu_toggle_all=document.querySelectorAll('#masthead > #ast-mobile-header .main-header-menu-toggle')
var event_index='0';if(null!==this.closest('#ast-fixed-header')){__main_header_all=document.querySelectorAll('#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation');menu_toggle_all=document.querySelectorAll('#ast-fixed-header .main-header-menu-toggle')
event_index='0';}
if('undefined'===typeof __main_header_all[event_index]){return false;}
var menuHasChildren=__main_header_all[event_index].querySelectorAll('.menu-item-has-children');for(var i=0;i<menuHasChildren.length;i++){menuHasChildren[i].classList.remove('ast-submenu-expanded');var menuHasChildrenSubMenu=menuHasChildren[i].querySelectorAll('.sub-menu');for(var j=0;j<menuHasChildrenSubMenu.length;j++){menuHasChildrenSubMenu[j].style.display='none';}}
var menu_class=this.getAttribute('class')||'';if(menu_class.indexOf('main-header-menu-toggle')!==-1){astraToggleClass(__main_header_all[event_index],'toggle-on');astraToggleClass(menu_toggle_all[event_index],'toggled');if(__main_header_all[event_index].classList.contains('toggle-on')){__main_header_all[event_index].style.display='block';body.classList.add("ast-main-header-nav-open");}else{__main_header_all[event_index].style.display='';body.classList.remove("ast-main-header-nav-open");}}}};body.addEventListener("astra-header-responsive-enabled",function(){var __main_header_all=document.querySelectorAll('.main-header-bar-navigation');if(__main_header_all.length>0){for(var i=0;i<__main_header_all.length;i++){if(null!=__main_header_all[i]){__main_header_all[i].classList.remove('toggle-on');__main_header_all[i].style.display='';}
var sub_menu=__main_header_all[i].getElementsByClassName('sub-menu');for(var j=0;j<sub_menu.length;j++){sub_menu[j].style.display='';}
var child_menu=__main_header_all[i].getElementsByClassName('children');for(var k=0;k<child_menu.length;k++){child_menu[k].style.display='';}
var searchIcons=__main_header_all[i].getElementsByClassName('ast-search-menu-icon');for(var l=0;l<searchIcons.length;l++){searchIcons[l].classList.remove('ast-dropdown-active');searchIcons[l].style.display='';}}}},false);var get_browser=function(){var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];if(/trident/i.test(M[1])){tem=/\brv[ :]+(\d+)/g.exec(ua)||[];return;}
if('Chrome'===M[1]){tem=ua.match(/\bOPR|Edge\/(\d+)/)
if(tem!=null){return;}}
M=M[2]?[M[1],M[2]]:[navigator.appName,navigator.appVersion,'-?'];if((tem=ua.match(/version\/(\d+)/i))!=null){M.splice(1,1,tem[1]);}
if('Safari'===M[0]&&M[1]<11){document.body.classList.add("ast-safari-browser-less-than-11");}}
get_browser();var SearchIcons=document.getElementsByClassName('astra-search-icon');for(var i=0;i<SearchIcons.length;i++){SearchIcons[i].onclick=function(event){if(this.classList.contains('slide-search')){event.preventDefault();var sibling=this.parentNode.parentNode.parentNode.querySelector('.ast-search-menu-icon');if(!sibling.classList.contains('ast-dropdown-active')){sibling.classList.add('ast-dropdown-active');sibling.querySelector('.search-field').setAttribute('autocomplete','off');setTimeout(function(){sibling.querySelector('.search-field').focus();},200);}else{var searchTerm=sibling.querySelector('.search-field').value||'';if(''!==searchTerm){sibling.querySelector('.search-form').submit();}
sibling.classList.remove('ast-dropdown-active');}}}}
var SearchInputs=document.querySelectorAll('.search-field');SearchInputs.forEach(input=>{input.addEventListener('focus',function(e){var sibling=this.parentNode.parentNode.parentNode.querySelector('.ast-search-menu-icon');if(sibling){astraToggleClass(sibling,'ast-dropdown-active');}});input.addEventListener('blur',function(e){var sibling=this.parentNode.parentNode.parentNode.querySelector('.ast-search-menu-icon');if(sibling){sibling.classList.remove('ast-dropdown-active');astraToggleClass(sibling,'ast-dropdown-active');}});});body.onclick=function(event){if(typeof event.target.classList!=='undefined'){if(!event.target.classList.contains('ast-search-menu-icon')&&astraGetParents(event.target,'.ast-search-menu-icon').length===0&&astraGetParents(event.target,'.ast-search-icon').length===0){var dropdownSearchWrap=document.getElementsByClassName('ast-search-menu-icon');for(var i=0;i<dropdownSearchWrap.length;i++){dropdownSearchWrap[i].classList.remove('ast-dropdown-active');}}}}
function navigation_accessibility(containerMenu,containerButton){if(!containerMenu||!containerButton){return;}
var button=containerButton.getElementsByTagName('button')[0];if('undefined'===typeof button){button=containerButton.getElementsByTagName('a')[0];var search_type=button.classList.contains('astra-search-icon');if(true===search_type){return;}
if('undefined'===typeof button){return;}}
var menu=containerMenu.getElementsByTagName('ul')[0];if('undefined'===typeof menu){button.style.display='none';return;}
if(-1===menu.className.indexOf('nav-menu')){menu.className+=' nav-menu';}
document.addEventListener('DOMContentLoaded',function(){if('off-canvas'===mobileHeaderType){var popupClose=document.getElementById('menu-toggle-close');if(popupClose){popupClose.onclick=function(){if(-1!==containerMenu.className.indexOf('toggled')){containerMenu.className=containerMenu.className.replace(' toggled','');button.setAttribute('aria-expanded','false');menu.setAttribute('aria-expanded','false');}else{containerMenu.className+=' toggled';button.setAttribute('aria-expanded','true');menu.setAttribute('aria-expanded','true');}};}}});button.onclick=function(){if(-1!==containerMenu.className.indexOf('toggled')){containerMenu.className=containerMenu.className.replace(' toggled','');button.setAttribute('aria-expanded','false');menu.setAttribute('aria-expanded','false');}else{containerMenu.className+=' toggled';button.setAttribute('aria-expanded','true');menu.setAttribute('aria-expanded','true');}};if(!astra.is_header_footer_builder_active){var links=menu.getElementsByTagName('a');var subMenus=menu.getElementsByTagName('ul');for(var i=0,len=subMenus.length;i<len;i++){subMenus[i].parentNode.setAttribute('aria-haspopup','true');}
for(i=0,len=links.length;i<len;i++){links[i].addEventListener('focus',toggleFocus,true);links[i].addEventListener('blur',toggleFocus,true);links[i].addEventListener('click',toggleClose,true);}}
if(astra.is_header_footer_builder_active){tabNavigation();}}
function tabNavigation(){const dropdownToggleLinks=document.querySelectorAll('nav.site-navigation .menu-item-has-children > a .ast-header-navigation-arrow');const siteNavigationSubMenu=document.querySelectorAll('nav.site-navigation .sub-menu');const menuLi=document.querySelectorAll('nav.site-navigation .menu-item-has-children');const megaMenuFullWidth=document.querySelectorAll('.astra-full-megamenu-wrapper');if(dropdownToggleLinks){dropdownToggleLinks.forEach(element=>{element.addEventListener('keydown',function(e){if('Enter'===e.key){if(!e.target.closest('li').querySelector('.sub-menu').classList.contains('astra-megamenu')){setTimeout(()=>{e.target.closest('li').querySelector('.sub-menu').classList.toggle('toggled-on');e.target.closest('li').classList.toggle('ast-menu-hover');if('false'===e.target.getAttribute('aria-expanded')||!e.target.getAttribute('aria-expanded')){e.target.setAttribute('aria-expanded','true');}else{e.target.setAttribute('aria-expanded','false');}},10);}else{setTimeout(()=>{const subMenuTarget=e.target.closest('li').querySelector('.sub-menu');const fullMegaMenuWrapper=e.target.closest('li').querySelector('.astra-full-megamenu-wrapper');if(subMenuTarget){subMenuTarget.classList.toggle('astra-megamenu-focus');}
if(fullMegaMenuWrapper){fullMegaMenuWrapper.classList.toggle('astra-megamenu-wrapper-focus');}
e.target.closest('li').classList.toggle('ast-menu-hover');if('false'===e.target.getAttribute('aria-expanded')||!e.target.getAttribute('aria-expanded')){e.target.setAttribute('aria-expanded','true');}else{e.target.setAttribute('aria-expanded','false');}},10);}}});});if(siteNavigationSubMenu||menuLi){document.addEventListener('click',function(e){closeNavigationMenu(siteNavigationSubMenu,dropdownToggleLinks,menuLi,megaMenuFullWidth);},false);}
if(siteNavigationSubMenu||menuLi){document.addEventListener('keydown',function(e){if('Escape'===e.key){closeNavigationMenu(siteNavigationSubMenu,dropdownToggleLinks,menuLi,megaMenuFullWidth);}},false);}}
const allParentMenu=document.querySelectorAll('nav.site-navigation .ast-nav-menu > .menu-item-has-children > a .ast-header-navigation-arrow');if(allParentMenu){allParentMenu.forEach(element=>{element.addEventListener('keydown',function(e){if(!e.target.closest('li').classList.contains('ast-menu-hover')&&'Enter'===e.key){closeNavigationMenu(siteNavigationSubMenu,dropdownToggleLinks,menuLi,megaMenuFullWidth);}},false);});}}
function closeNavigationMenu(siteNavigationSubMenu,dropdownToggleLinks,menuLi,megaMenuFullWidth){if(siteNavigationSubMenu){siteNavigationSubMenu.forEach(element=>{element.classList.remove('astra-megamenu-focus');element.classList.remove('toggled-on');});}
if(menuLi){menuLi.forEach(element=>{element.classList.remove('ast-menu-hover');});}
if(megaMenuFullWidth){megaMenuFullWidth.forEach(element=>{element.classList.remove('astra-megamenu-wrapper-focus')});}
if(dropdownToggleLinks){dropdownToggleLinks.forEach(element=>{element.setAttribute('aria-expanded','false');});}}
function toggleClose()
{var self=this||'',hash='#';if(self&&!self.classList.contains('astra-search-icon')&&null===self.closest('.ast-builder-menu')){var link=String(self);if(link.indexOf(hash)!==-1){var link_parent=self.parentNode;if(body.classList.contains('ast-header-break-point')){if(!(document.querySelector('header.site-header').classList.contains('ast-builder-menu-toggle-link')&&link_parent.classList.contains('menu-item-has-children'))){var builder_header_menu_toggle=document.querySelector('.main-header-menu-toggle');builder_header_menu_toggle.classList.remove('toggled');var main_header_bar_navigation=document.querySelector('.main-header-bar-navigation');main_header_bar_navigation.classList.remove('toggle-on');main_header_bar_navigation.style.display='none';astraTriggerEvent(document.querySelector('body'),'astraMenuHashLinkClicked');}}else{while(-1===self.className.indexOf('nav-menu')){if('li'===self.tagName.toLowerCase()){if(-1!==self.className.indexOf('focus')){self.className=self.className.replace(' focus','');}}
self=self.parentElement;}}}}}
function toggleFocus(){var self=this;while(-1===self.className.indexOf('navigation-accessibility')){if('li'===self.tagName.toLowerCase()){self.classList.toggle('focus');}
self=self.parentElement;}}
if(!astra.is_header_footer_builder_active){if('querySelector'in document&&'addEventListener'in window){body.addEventListener('mousedown',function(){body.classList.add('ast-mouse-clicked');});body.addEventListener('keydown',function(){body.classList.remove('ast-mouse-clicked');});}}
if(astra.is_scroll_to_id){const getOffsetTop=(element)=>{let offsetTop=0;while(element){offsetTop+=element.offsetTop;element=element.offsetParent;}
return offsetTop;}
const scrollToIDHandler=(e)=>{let offset=0;const siteHeader=document.querySelector('.site-header');if(siteHeader){const headerHeight=siteHeader.querySelectorAll('div[data-stick-support]');if(headerHeight){headerHeight.forEach(single=>{offset+=single.clientHeight;});}
const href=e.target.closest('a').hash;if(href){const scrollId=document.querySelector(href);if(scrollId){const scrollOffsetTop=getOffsetTop(scrollId)-offset;if(scrollOffsetTop){astraSmoothScroll(e,scrollOffsetTop);}}}}}
let hashLinks=[];const links=document.querySelectorAll('a[href*="#"]:not([href="#"]):not([href="#0"]):not([href*="uagb-tab"]):not(.uagb-toc-link__trigger):not(.skip-link):not(.nav-links a):not([href*="tab-"])');if(links){for(const link of links){if(link.href.split("#")[0]!==location.href.split("#")[0]){hashLinks.push({hash:link.hash,url:link.href.split("#")[0],});}else if(link.hash!==""){link.addEventListener("click",scrollToIDHandler);}}}
window.addEventListener('DOMContentLoaded',(event)=>{for(let link of hashLinks){if(window.location.href.split('#')[0]===link.url){const siteHeader=document.querySelector('.site-header');let offset=0;const headerHeight=siteHeader.querySelectorAll('div[data-stick-support]');if(headerHeight){headerHeight.forEach(single=>{offset+=single.clientHeight;});}
const scrollId=document.querySelector(link.hash);if(scrollId){const scrollOffsetTop=getOffsetTop(scrollId)-offset;if(scrollOffsetTop){astraSmoothScroll(event,scrollOffsetTop);}}}}});}
if(astra.is_scroll_to_top){var masthead=document.querySelector('#page header');var astScrollTop=document.getElementById('ast-scroll-top');astScrollToTopHandler(masthead,astScrollTop);window.addEventListener('scroll',function(){astScrollToTopHandler(masthead,astScrollTop);});astScrollTop.onclick=function(e){astraSmoothScroll(e,0);};astScrollTop.addEventListener('keydown',function(e){if(e.key==='Enter'){astraSmoothScroll(e,0);}});}
window.addEventListener('DOMContentLoaded',(event)=>{const isHangOverTopNotice=document.querySelector('.ast-woocommerce-store-notice-hanged');const adjustBodyHeight=()=>{const storeNotice=document.querySelector('.woocommerce-store-notice[data-position="hang-over-top"]');document.body.style.marginTop=`${storeNotice?.clientHeight || 0}px`;}
if(isHangOverTopNotice){window.addEventListener('resize',adjustBodyHeight);setTimeout(()=>adjustBodyHeight(),0);}
document.querySelector('.woocommerce-store-notice__dismiss-link')?.addEventListener('click',()=>{if(!wp?.customize){document.body.classList.remove('ast-woocommerce-store-notice-hanged');window.removeEventListener('resize',adjustBodyHeight);document.body.style.marginTop=0;}});});})();document.addEventListener('DOMContentLoaded',function(){let submenuToggles=document.querySelectorAll('.menu-link .dropdown-menu-toggle');submenuToggles.forEach((toggle)=>{toggle.addEventListener('focus',function(){updateAriaExpanded(this);});toggle.addEventListener('blur',function(){updateAriaExpanded(this);});toggle.addEventListener('keydown',function(event){if(event.key==='Enter'){toggleAriaExpanded(this);}});});document.addEventListener('keydown',function(event){if(event.key==='Escape'){closeAllSubmenus();}});function updateAriaExpanded(toggle){let menuItemLink=toggle.closest('.menu-link');let submenu=menuItemLink.nextElementSibling;let isSubmenuVisible=submenu.classList.contains('toggled-on');menuItemLink.setAttribute('aria-expanded',isSubmenuVisible?'true':'false');}
function toggleAriaExpanded(toggle){let menuItemLink=toggle.closest('.menu-link');let currentState=menuItemLink.getAttribute('aria-expanded');menuItemLink.setAttribute('aria-expanded',currentState==='true'?'false':'true');}
function closeAllSubmenus(){let submenuToggles=document.querySelectorAll('.menu-link .dropdown-menu-toggle');submenuToggles.forEach(function(toggle){updateAriaExpanded(toggle);});}});document.addEventListener('DOMContentLoaded',()=>{const thumbnailWraps=document.querySelectorAll('.astra-shop-thumbnail-wrap');thumbnailWraps.forEach(wrap=>{const focusableElements=wrap.querySelectorAll('a, span');focusableElements.forEach(el=>{el.addEventListener('focus',()=>{wrap.querySelectorAll('.ast-on-card-button, .ast-quick-view-trigger').forEach(btn=>{btn.style.opacity='1';btn.style.visibility='visible';btn.style.borderStyle='none';});});el.addEventListener('blur',()=>{const isAnyFocused=Array.from(focusableElements).some(child=>child===document.activeElement);if(!isAnyFocused){wrap.querySelectorAll('.ast-on-card-button, .ast-quick-view-trigger').forEach(btn=>{btn.style.opacity='';btn.style.visibility='';});}});});});});
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
(function(global,factory){"use strict";if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}
return factory(w);};}else{factory(global);}})(typeof window!=="undefined"?window:this,function(window,noGlobal){"use strict";var arr=[];var getProto=Object.getPrototypeOf;var slice=arr.slice;var flat=arr.flat?function(array){return arr.flat.call(array);}:function(array){return arr.concat.apply([],array);};var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};var isFunction=function isFunction(obj){return typeof obj==="function"&&typeof obj.nodeType!=="number"&&typeof obj.item!=="function";};var isWindow=function isWindow(obj){return obj!=null&&obj===obj.window;};var document=window.document;var preservedScriptAttributes={type:true,src:true,nonce:true,noModule:true};function DOMEval(code,node,doc){doc=doc||document;var i,val,script=doc.createElement("script");script.text=code;if(node){for(i in preservedScriptAttributes){val=node[i]||node.getAttribute&&node.getAttribute(i);if(val){script.setAttribute(i,val);}}}
doc.head.appendChild(script).parentNode.removeChild(script);}
function toType(obj){if(obj==null){return obj+"";}
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;}
var version="3.7.1",rhtmlSuffix=/HTML$/i,jQuery=function(selector,context){return new jQuery.fn.init(selector,context);};jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,length:0,toArray:function(){return slice.call(this);},get:function(num){if(num==null){return slice.call(this);}
return num<0?this[num+this.length]:this[num];},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;return ret;},each:function(callback){return jQuery.each(this,callback);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},even:function(){return this.pushStack(jQuery.grep(this,function(_elem,i){return(i+1)%2;}));},odd:function(){return this.pushStack(jQuery.grep(this,function(_elem,i){return i%2;}));},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor();},push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++;}
if(typeof target!=="object"&&!isFunction(target)){target={};}
if(i===length){target=this;i--;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){copy=options[name];if(name==="__proto__"||target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=Array.isArray(copy)))){src=target[name];if(copyIsArray&&!Array.isArray(src)){clone=[];}else if(!copyIsArray&&!jQuery.isPlainObject(src)){clone={};}else{clone=src;}
copyIsArray=false;target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},isPlainObject:function(obj){var proto,Ctor;if(!obj||toString.call(obj)!=="[object Object]"){return false;}
proto=getProto(obj);if(!proto){return true;}
Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},globalEval:function(code,options,doc){DOMEval(code,{nonce:options&&options.nonce},doc);},each:function(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}
return obj;},text:function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){while((node=elem[i++])){ret+=jQuery.text(node);}}
if(nodeType===1||nodeType===11){return elem.textContent;}
if(nodeType===9){return elem.documentElement.textContent;}
if(nodeType===3||nodeType===4){return elem.nodeValue;}
return ret;},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},isXMLDoc:function(elem){var namespace=elem&&elem.namespaceURI,docElem=elem&&(elem.ownerDocument||elem).documentElement;return!rhtmlSuffix.test(namespace||docElem&&docElem.nodeName||"HTML");},merge:function(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}
first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}
return matches;},map:function(elems,callback,arg){var length,value,i=0,ret=[];if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}
return flat(ret);},guid:1,support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(_i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){var length=!!obj&&"length"in obj&&obj.length,type=toType(obj);if(isFunction(obj)||isWindow(obj)){return false;}
return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj;}
function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();}
var pop=arr.pop;var sort=arr.sort;var splice=arr.splice;var whitespace="[\\x20\\t\\r\\n\\f]";var rtrimCSS=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g");jQuery.contains=function(a,b){var bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(a.contains?a.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));};var rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function fcssescape(ch,asCodePoint){if(asCodePoint){if(ch==="\0"){return"\uFFFD";}
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}
return"\\"+ch;}
jQuery.escapeSelector=function(sel){return(sel+"").replace(rcssescape,fcssescape);};var preferredDoc=document,pushNative=push;(function(){var i,Expr,outermostContext,sortInput,hasDuplicate,push=pushNative,document,documentElement,documentIsHTML,rbuggyQSA,matches,expando=jQuery.expando,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),nonnativeSelectorCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}
return 0;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|"+"loop|multiple|open|readonly|required|scoped",identifier="(?:\\\\[\\da-fA-F]{1,6}"+whitespace+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+"*([*^$|!~]?=)"+whitespace+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+
whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+".*"+")\\)|)",rwhitespace=new RegExp(whitespace+"+","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rleadingCombinator=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+
whitespace+"*"),rdescend=new RegExp(whitespace+"|>"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={ID:new RegExp("^#("+identifier+")"),CLASS:new RegExp("^\\.("+identifier+")"),TAG:new RegExp("^("+identifier+"|[*])"),ATTR:new RegExp("^"+attributes),PSEUDO:new RegExp("^"+pseudos),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+
whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+
whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),bool:new RegExp("^(?:"+booleans+")$","i"),needsContext:new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,runescape=new RegExp("\\\\[\\da-fA-F]{1,6}"+whitespace+"?|\\\\([^\\r\\n\\f])","g"),funescape=function(escape,nonHex){var high="0x"+escape.slice(1)-0x10000;if(nonHex){return nonHex;}
return high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},unloadHandler=function(){setDocument();},inDisabledFieldset=addCombinator(function(elem){return elem.disabled===true&&nodeName(elem,"fieldset");},{dir:"parentNode",next:"legend"});function safeActiveElement(){try{return document.activeElement;}catch(err){}}
try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:function(target,els){pushNative.apply(target,slice.call(els));},call:function(target){pushNative.apply(target,slice.call(arguments,1));}};}
function find(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,nodeType=context?context.nodeType:9;results=results||[];if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}
if(!seed){setDocument(context);context=context||document;if(documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){if((elem=context.getElementById(m))){if(elem.id===m){push.call(results,elem);return results;}}else{return results;}}else{if(newContext&&(elem=newContext.getElementById(m))&&find.contains(context,elem)&&elem.id===m){push.call(results,elem);return results;}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}
if(!nonnativeSelectorCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){newSelector=selector;newContext=context;if(nodeType===1&&(rdescend.test(selector)||rleadingCombinator.test(selector))){newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;if(newContext!=context||!support.scope){if((nid=context.getAttribute("id"))){nid=jQuery.escapeSelector(nid);}else{context.setAttribute("id",(nid=expando));}}
groups=tokenize(selector);i=groups.length;while(i--){groups[i]=(nid?"#"+nid:":scope")+" "+
toSelector(groups[i]);}
newSelector=groups.join(",");}
try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){nonnativeSelectorCache(selector,true);}finally{if(nid===expando){context.removeAttribute("id");}}}}}
return select(selector.replace(rtrimCSS,"$1"),context,results,seed);}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()];}
return(cache[key+" "]=value);}
return cache;}
function markFunction(fn){fn[expando]=true;return fn;}
function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{if(el.parentNode){el.parentNode.removeChild(el);}
el=null;}}
function createInputPseudo(type){return function(elem){return nodeName(elem,"input")&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){return(nodeName(elem,"input")||nodeName(elem,"button"))&&elem.type===type;};}
function createDisabledPseudo(disabled){return function(elem){if("form"in elem){if(elem.parentNode&&elem.disabled===false){if("label"in elem){if("label"in elem.parentNode){return elem.parentNode.disabled===disabled;}else{return elem.disabled===disabled;}}
return elem.isDisabled===disabled||elem.isDisabled!==!disabled&&inDisabledFieldset(elem)===disabled;}
return elem.disabled===disabled;}else if("label"in elem){return elem.disabled===disabled;}
return false;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}
function setDocument(node){var subWindow,doc=node?node.ownerDocument||node:preferredDoc;if(doc==document||doc.nodeType!==9||!doc.documentElement){return document;}
document=doc;documentElement=document.documentElement;documentIsHTML=!jQuery.isXMLDoc(document);matches=documentElement.matches||documentElement.webkitMatchesSelector||documentElement.msMatchesSelector;if(documentElement.msMatchesSelector&&preferredDoc!=document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){subWindow.addEventListener("unload",unloadHandler);}
support.getById=assert(function(el){documentElement.appendChild(el).id=jQuery.expando;return!document.getElementsByName||!document.getElementsByName(jQuery.expando).length;});support.disconnectedMatch=assert(function(el){return matches.call(el,"*");});support.scope=assert(function(){return document.querySelectorAll(":scope");});support.cssHas=assert(function(){try{document.querySelector(":has(*,:jqfake)");return false;}catch(e){return true;}});if(support.getById){Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};Expr.find.ID=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var elem=context.getElementById(id);return elem?[elem]:[];}};}else{Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};Expr.find.ID=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var node,i,elems,elem=context.getElementById(id);if(elem){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}
elems=context.getElementsByName(id);i=0;while((elem=elems[i++])){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}}}
return[];}};}
Expr.find.TAG=function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);}else{return context.querySelectorAll(tag);}};Expr.find.CLASS=function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};rbuggyQSA=[];assert(function(el){var input;documentElement.appendChild(el).innerHTML="<a id='"+expando+"' href='' disabled='disabled'></a>"+"<select id='"+expando+"-\r\\' disabled='disabled'>"+"<option selected=''></option></select>";if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}
if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}
if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}
if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}
input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");documentElement.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}
input=document.createElement("input");input.setAttribute("name","");el.appendChild(input);if(!el.querySelectorAll("[name='']").length){rbuggyQSA.push("\\["+whitespace+"*name"+whitespace+"*="+
whitespace+"*(?:''|\"\")");}});if(!support.cssHas){rbuggyQSA.push(":has");}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));sortOrder=function(a,b){if(a===b){hasDuplicate=true;return 0;}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}
compare=(a.ownerDocument||a)==(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===document||a.ownerDocument==preferredDoc&&find.contains(preferredDoc,a)){return-1;}
if(b===document||b.ownerDocument==preferredDoc&&find.contains(preferredDoc,b)){return 1;}
return sortInput?(indexOf.call(sortInput,a)-indexOf.call(sortInput,b)):0;}
return compare&4?-1:1;};return document;}
find.matches=function(expr,elements){return find(expr,null,null,elements);};find.matchesSelector=function(elem,expr){setDocument(elem);if(documentIsHTML&&!nonnativeSelectorCache[expr+" "]&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){nonnativeSelectorCache(expr,true);}}
return find(expr,document,null,[elem]).length>0;};find.contains=function(context,elem){if((context.ownerDocument||context)!=document){setDocument(context);}
return jQuery.contains(context,elem);};find.attr=function(elem,name){if((elem.ownerDocument||elem)!=document){setDocument(elem);}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;if(val!==undefined){return val;}
return elem.getAttribute(name);};find.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};jQuery.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.sortStable;sortInput=!support.sortStable&&slice.call(results,0);sort.call(results,sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
while(j--){splice.call(results,duplicates[j],1);}}
sortInput=null;return results;};jQuery.fn.uniqueSort=function(){return this.pushStack(jQuery.uniqueSort(slice.apply(this)));};Expr=jQuery.expr={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},CHILD:function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){find.error(match[0]);}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){find.error(match[0]);}
return match;},PSEUDO:function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr.CHILD.test(match[0])){return null;}
if(match[3]){match[2]=match[4]||match[5]||"";}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
return match.slice(0,3);}},filter:{TAG:function(nodeNameSelector){var expectedNodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return nodeName(elem,expectedNodeName);};},CLASS:function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},ATTR:function(name,operator,check){return function(elem){var result=find.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";if(operator==="="){return result===check;}
if(operator==="!="){return result!==check;}
if(operator==="^="){return check&&result.indexOf(check)===0;}
if(operator==="*="){return check&&result.indexOf(check)>-1;}
if(operator==="$="){return check&&result.slice(-check.length)===check;}
if(operator==="~="){return(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1;}
if(operator==="|="){return result===check||result.slice(0,check.length+1)===check+"-";}
return false;};},CHILD:function(type,what,_argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,_context,xml){var cache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?nodeName(node,name):node.nodeType===1){return false;}}
start=dir=type==="only"&&!start&&"nextSibling";}
return true;}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){outerCache=parent[expando]||(parent[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];break;}}}else{if(useCache){outerCache=elem[expando]||(elem[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}
if(diff===false){while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?nodeName(node,name):node.nodeType===1)&&++diff){if(useCache){outerCache=node[expando]||(node[expando]={});outerCache[type]=[dirruns,diff];}
if(node===elem){break;}}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0);}};},PSEUDO:function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||find.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf.call(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{not:markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrimCSS,"$1"));return matcher[expando]?markFunction(function(seed,matches,_context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,_context,xml){input[0]=elem;matcher(input,null,xml,results);input[0]=null;return!results.pop();};}),has:markFunction(function(selector){return function(elem){return find(selector,elem).length>0;};}),contains:markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||jQuery.text(elem)).indexOf(text)>-1;};}),lang:markFunction(function(lang){if(!ridentifier.test(lang||"")){find.error("unsupported lang: "+lang);}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),target:function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},root:function(elem){return elem===documentElement;},focus:function(elem){return elem===safeActiveElement()&&document.hasFocus()&&!!(elem.type||elem.href||~elem.tabIndex);},enabled:createDisabledPseudo(false),disabled:createDisabledPseudo(true),checked:function(elem){return(nodeName(elem,"input")&&!!elem.checked)||(nodeName(elem,"option")&&!!elem.selected);},selected:function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},empty:function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}
return true;},parent:function(elem){return!Expr.pseudos.empty(elem);},header:function(elem){return rheader.test(elem.nodeName);},input:function(elem){return rinputs.test(elem.nodeName);},button:function(elem){return nodeName(elem,"input")&&elem.type==="button"||nodeName(elem,"button");},text:function(elem){var attr;return nodeName(elem,"input")&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},first:createPositionalPseudo(function(){return[0];}),last:createPositionalPseudo(function(_matchIndexes,length){return[length-1];}),eq:createPositionalPseudo(function(_matchIndexes,length,argument){return[argument<0?argument+length:argument];}),even:createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),odd:createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),lt:createPositionalPseudo(function(matchIndexes,length,argument){var i;if(argument<0){i=argument+length;}else if(argument>length){i=length;}else{i=argument;}
for(;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),gt:createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};Expr.pseudos.nth=Expr.pseudos.eq;for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();function tokenize(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
groups.push((tokens=[]));}
matched=false;if((match=rleadingCombinator.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrimCSS," ")});soFar=soFar.slice(matched.length);}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
if(!matched){break;}}
if(parseOnly){return soFar.length;}
return soFar?find.error(selector):tokenCache(selector,groups).slice(0);}
function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
return selector;}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}
return false;}:function(elem,context,xml){var oldCache,outerCache,newCache=[dirruns,doneName];if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});if(skip&&nodeName(elem,skip)){elem=elem[dir]||elem;}else if((oldCache=outerCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2]);}else{outerCache[key]=newCache;if((newCache[2]=matcher(elem,context,xml))){return true;}}}}}
return false;};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){find(selector,contexts[i],results);}
return results;}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,matcherOut,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems;if(matcher){matcherOut=postFinder||(seed?preFilter:preexisting||postFilter)?[]:results;matcher(matcherIn,matcherOut,context,xml);}else{matcherOut=matcherIn;}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf.call(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf.call(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!=outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));checkContext=null;return ret;}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrimCSS,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find.TAG("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;if(outermost){outermostContext=context==document||context||outermost;}
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!=document){setDocument(elem);xml=!documentIsHTML;}
while((matcher=elementMatchers[j++])){if(matcher(elem,context||document,xml)){push.call(results,elem);break;}}
if(outermost){dirruns=dirrunsUnique;}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
if(seed){unmatched.push(elem);}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
setMatched=condense(setMatched);}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){jQuery.uniqueSort(results);}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
function compile(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!match){match=tokenize(selector);}
i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));cached.selector=selector;}
return cached;}
function select(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));results=results||[];if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find.ID(token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}else if(compiled){context=context.parentNode;}
selector=selector.slice(tokens.shift().value.length);}
i=matchExpr.needsContext.test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
break;}}}}
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;}
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;setDocument();support.sortDetached=assert(function(el){return el.compareDocumentPosition(document.createElement("fieldset"))&1;});jQuery.find=find;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=jQuery.uniqueSort;find.compile=compile;find.select=select;find.setDocument=setDocument;find.tokenize=tokenize;find.escape=jQuery.escapeSelector;find.getText=jQuery.text;find.isXML=jQuery.isXMLDoc;find.selectors=jQuery.expr;find.support=jQuery.support;find.uniqueSort=jQuery.uniqueSort;})();var dir=function(elem,dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}
matched.push(elem);}}
return matched;};var siblings=function(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}
return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=(/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);function winnow(elements,qualifier,not){if(isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
if(typeof qualifier!=="string"){return jQuery.grep(elements,function(elem){return(indexOf.call(qualifier,elem)>-1)!==not;});}
return jQuery.filter(qualifier,elements,not);}
jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}
if(elems.length===1&&elem.nodeType===1){return jQuery.find.matchesSelector(elem,expr)?[elem]:[];}
return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
return len>1?jQuery.uniqueSort(ret):ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});var rootjQuery,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;if(!selector){return this;}
root=root||rootjQuery;if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
return this;}else{elem=document.getElementById(match[2]);if(elem){this[0]=elem;this.length=1;}
return this;}}else if(!context||context.jquery){return(context||root).find(selector);}else{return this.constructor(context).find(selector);}}else if(selector.nodeType){this[0]=selector;this.length=1;return this;}else if(isFunction(selector)){return root.ready!==undefined?root.ready(selector):selector(jQuery);}
return jQuery.makeArray(selector,this);};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(targets?targets.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}
return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;}
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}
return indexOf.call(this,elem.jquery?elem[0]:elem);},add:function(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}
return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return dir(elem,"parentNode");},parentsUntil:function(elem,_i,until){return dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return dir(elem,"nextSibling");},prevAll:function(elem){return dir(elem,"previousSibling");},nextUntil:function(elem,_i,until){return dir(elem,"nextSibling",until);},prevUntil:function(elem,_i,until){return dir(elem,"previousSibling",until);},siblings:function(elem){return siblings((elem.parentNode||{}).firstChild,elem);},children:function(elem){return siblings(elem.firstChild);},contents:function(elem){if(elem.contentDocument!=null&&getProto(elem.contentDocument)){return elem.contentDocument;}
if(nodeName(elem,"template")){elem=elem.content||elem;}
return jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}
if(this.length>1){if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}
if(rparentsprev.test(name)){matched.reverse();}}
return this.pushStack(matched);};});var rnothtmlwhite=(/[^\x20\t\r\n\f]+/g);function createOptions(options){var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var
firing,memory,fired,locked,list=[],queue=[],firingIndex=-1,fire=function(){locked=locked||options.once;fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){firingIndex=list.length;memory=false;}}}
if(!options.memory){memory=false;}
firing=false;if(locked){if(memory){list=[];}else{list="";}}},self={add:function(){if(list){if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}
(function add(args){jQuery.each(args,function(_,arg){if(isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&toType(arg)!=="string"){add(arg);}});})(arguments);if(memory&&!firing){fire();}}
return this;},remove:function(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(index<=firingIndex){firingIndex--;}}});return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},empty:function(){if(list){list=[];}
return this;},disable:function(){locked=queue=[];list=memory="";return this;},disabled:function(){return!list;},lock:function(){locked=queue=[];if(!memory&&!firing){list=memory="";}
return this;},locked:function(){return!!locked;},fireWith:function(context,args){if(!locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};function Identity(v){return v;}
function Thrower(ex){throw ex;}
function adoptValue(value,resolve,reject,noValue){var method;try{if(value&&isFunction((method=value.promise))){method.call(value).done(resolve).fail(reject);}else if(value&&isFunction((method=value.then))){method.call(value,resolve,reject);}else{resolve.apply(undefined,[value].slice(noValue));}}catch(value){reject.apply(undefined,[value]);}}
jQuery.extend({Deferred:function(func){var tuples=[["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},"catch":function(fn){return promise.then(null,fn);},pipe:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(_i,tuple){var fn=isFunction(fns[tuple[4]])&&fns[tuple[4]];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function(){var returned,then;if(depth<maxDepth){return;}
returned=handler.apply(that,args);if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}
then=returned&&(typeof returned==="object"||typeof returned==="function")&&returned.then;if(isFunction(then)){if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));}else{maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}}else{if(handler!==Identity){that=undefined;args=[returned];}
(special||deferred.resolveWith)(that,args);}},process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.error);}
if(depth+1>=maxDepth){if(handler!==Thrower){that=undefined;args=[e];}
deferred.rejectWith(that,args);}}};if(depth){process();}else{if(jQuery.Deferred.getErrorHook){process.error=jQuery.Deferred.getErrorHook();}else if(jQuery.Deferred.getStackHook){process.error=jQuery.Deferred.getStackHook();}
window.setTimeout(process);}};}
return jQuery.Deferred(function(newDefer){tuples[0][3].add(resolve(0,newDefer,isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));tuples[1][3].add(resolve(0,newDefer,isFunction(onFulfilled)?onFulfilled:Identity));tuples[2][3].add(resolve(0,newDefer,isFunction(onRejected)?onRejected:Thrower));}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[3-i][2].disable,tuples[3-i][3].disable,tuples[0][2].lock,tuples[0][3].lock);}
list.add(tuple[3].fire);deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
return deferred;},when:function(singleValue){var
remaining=arguments.length,i=remaining,resolveContexts=Array(i),resolveValues=slice.call(arguments),primary=jQuery.Deferred(),updateFunc=function(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?slice.call(arguments):value;if(!(--remaining)){primary.resolveWith(resolveContexts,resolveValues);}};};if(remaining<=1){adoptValue(singleValue,primary.done(updateFunc(i)).resolve,primary.reject,!remaining);if(primary.state()==="pending"||isFunction(resolveValues[i]&&resolveValues[i].then)){return primary.then();}}
while(i--){adoptValue(resolveValues[i],updateFunc(i),primary.reject);}
return primary.promise();}});var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,asyncError){if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,asyncError);}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn).catch(function(error){jQuery.readyException(error);});return this;};jQuery.extend({isReady:false,readyWait:1,ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}
if(document.readyState==="complete"||(document.readyState!=="loading"&&!document.documentElement.doScroll)){window.setTimeout(jQuery.ready);}else{document.addEventListener("DOMContentLoaded",completed);window.addEventListener("load",completed);}
var access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;if(toType(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}}else if(value!==undefined){chainable=true;if(!isFunction(value)){raw=true;}
if(bulk){if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,_key,value){return bulk.call(jQuery(elem),value);};}}
if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
if(chainable){return elems;}
if(bulk){return fn.call(elems);}
return len?fn(elems[0],key):emptyGet;};var rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g;function fcamelCase(_all,letter){return letter.toUpperCase();}
function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);}
var acceptData=function(owner){return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType);};function Data(){this.expando=jQuery.expando+Data.uid++;}
Data.uid=1;Data.prototype={cache:function(owner){var value=owner[this.expando];if(!value){value={};if(acceptData(owner)){if(owner.nodeType){owner[this.expando]=value;}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}
return value;},set:function(owner,data,value){var prop,cache=this.cache(owner);if(typeof data==="string"){cache[camelCase(data)]=value;}else{for(prop in data){cache[camelCase(prop)]=data[prop];}}
return cache;},get:function(owner,key){return key===undefined?this.cache(owner):owner[this.expando]&&owner[this.expando][camelCase(key)];},access:function(owner,key,value){if(key===undefined||((key&&typeof key==="string")&&value===undefined)){return this.get(owner,key);}
this.set(owner,key,value);return value!==undefined?value:key;},remove:function(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}
if(key!==undefined){if(Array.isArray(key)){key=key.map(camelCase);}else{key=camelCase(key);key=key in cache?[key]:(key.match(rnothtmlwhite)||[]);}
i=key.length;while(i--){delete cache[key[i]];}}
if(key===undefined||jQuery.isEmptyObject(cache)){if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){if(data==="true"){return true;}
if(data==="false"){return false;}
if(data==="null"){return null;}
if(data===+data+""){return+data;}
if(rbrace.test(data)){return JSON.parse(data);}
return data;}
function dataAttr(elem,key,data){var name;if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=getData(data);}catch(e){}
dataUser.set(elem,key,data);}else{data=undefined;}}
return data;}
jQuery.extend({hasData:function(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function(elem,name,data){return dataUser.access(elem,name,data);},removeData:function(elem,name){dataUser.remove(elem,name);},_data:function(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}
dataPriv.set(elem,"hasDataAttrs",true);}}
return data;}
if(typeof key==="object"){return this.each(function(){dataUser.set(this,key);});}
return access(this,function(value){var data;if(elem&&value===undefined){data=dataUser.get(elem,key);if(data!==undefined){return data;}
data=dataAttr(elem,key);if(data!==undefined){return data;}
return;}
this.each(function(){dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);if(data){if(!queue||Array.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var documentElement=document.documentElement;var isAttached=function(elem){return jQuery.contains(elem.ownerDocument,elem);},composed={composed:true};if(documentElement.getRootNode){isAttached=function(elem){return jQuery.contains(elem.ownerDocument,elem)||elem.getRootNode(composed)===elem.ownerDocument;};}
var isHiddenWithinTree=function(elem,el){elem=el||elem;return elem.style.display==="none"||elem.style.display===""&&isAttached(elem)&&jQuery.css(elem,"display")==="none";};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),initialInUnit=elem.nodeType&&(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){initial=initial/2;unit=unit||initialInUnit[3];initialInUnit=+initial||1;while(maxIterations--){jQuery.style(elem,prop,initialInUnit+unit);if((1-scale)*(1-(scale=currentValue()/initial||0.5))<=0){maxIterations=0;}
initialInUnit=initialInUnit/scale;}
initialInUnit=initialInUnit*2;jQuery.style(elem,prop,initialInUnit+unit);valueParts=valueParts||[];}
if(valueParts){initialInUnit=+initialInUnit||+initial||0;adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}
return adjusted;}
var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}
temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}
defaultDisplayMap[nodeName]=display;return display;}
function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
display=elem.style.display;if(show){if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}
if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";dataPriv.set(elem,"display",display);}}}
for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}
return elements;}
jQuery.fn.extend({show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=(/^(?:checkbox|radio)$/i);var rtagName=(/<([a-z][^\/\0>\x20\t\r\n\f]*)/i);var rscriptType=(/^$|^module$|\/(?:java|ecma)script/i);(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;div.innerHTML="<option></option>";support.option=!!div.lastChild;})();var wrapMap={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;if(!support.option){wrapMap.optgroup=wrapMap.option=[1,"<select multiple='multiple'>","</select>"];}
function getAll(context,tag){var ret;if(typeof context.getElementsByTagName!=="undefined"){ret=context.getElementsByTagName(tag||"*");}else if(typeof context.querySelectorAll!=="undefined"){ret=context.querySelectorAll(tag||"*");}else{ret=[];}
if(tag===undefined||tag&&nodeName(context,tag)){return jQuery.merge([context],ret);}
return ret;}
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}
var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,attached,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(toType(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||fragment.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild;}
jQuery.merge(nodes,tmp.childNodes);tmp=fragment.firstChild;tmp.textContent="";}}}
fragment.textContent="";i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}
continue;}
attached=isAttached(elem);tmp=getAll(fragment.appendChild(elem),"script");if(attached){setGlobalEval(tmp);}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
return fragment;}
var rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}
function returnFalse(){return false;}
function on(elem,types,selector,data,fn,one){var origFn,type;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){on(elem,type,selector,data,types[type],one);}
return elem;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return elem;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);if(!acceptData(elem)){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
if(selector){jQuery.find.matchesSelector(documentElement,selector);}
if(!handler.guid){handler.guid=jQuery.guid++;}
if(!(events=elemData.events)){events=elemData.events=Object.create(null);}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}},remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function(nativeEvent){var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),event=jQuery.event.fix(nativeEvent),handlers=(dataPriv.get(this,"events")||Object.create(null))[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}
event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.rnamespace||handleObj.namespace===false||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},handlers:function(event,handlers){var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&!(event.type==="click"&&event.button>=1)){for(;cur!==this;cur=cur.parentNode||this){if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matchedSelectors[sel]===undefined){matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}
if(matchedSelectors[sel]){matchedHandlers.push(handleObj);}}
if(matchedHandlers.length){handlerQueue.push({elem:cur,handlers:matchedHandlers});}}}}
cur=this;if(delegateCount<handlers.length){handlerQueue.push({elem:cur,handlers:handlers.slice(delegateCount)});}
return handlerQueue;},addProp:function(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{noBubble:true},click:{setup:function(data){var el=this||data;if(rcheckableType.test(el.type)&&el.click&&nodeName(el,"input")){leverageNative(el,"click",true);}
return false;},trigger:function(data){var el=this||data;if(rcheckableType.test(el.type)&&el.click&&nodeName(el,"input")){leverageNative(el,"click");}
return true;},_default:function(event){var target=event.target;return rcheckableType.test(target.type)&&target.click&&nodeName(target,"input")&&dataPriv.get(target,"click")||nodeName(target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};function leverageNative(el,type,isSetup){if(!isSetup){if(dataPriv.get(el,type)===undefined){jQuery.event.add(el,type,returnTrue);}
return;}
dataPriv.set(el,type,false);jQuery.event.add(el,type,{namespace:false,handler:function(event){var result,saved=dataPriv.get(this,type);if((event.isTrigger&1)&&this[type]){if(!saved){saved=slice.call(arguments);dataPriv.set(this,type,saved);this[type]();result=dataPriv.get(this,type);dataPriv.set(this,type,false);if(saved!==result){event.stopImmediatePropagation();event.preventDefault();return result;}}else if((jQuery.event.special[type]||{}).delegateType){event.stopPropagation();}}else if(saved){dataPriv.set(this,type,jQuery.event.trigger(saved[0],saved.slice(1),this));event.stopPropagation();event.isImmediatePropagationStopped=returnTrue;}}});}
jQuery.removeEvent=function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse;this.target=(src.target&&src.target.nodeType===3)?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||Date.now();this[jQuery.expando]=true;};jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}
this.stopPropagation();}};jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,code:true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:true},jQuery.event.addProp);jQuery.each({focus:"focusin",blur:"focusout"},function(type,delegateType){function focusMappedHandler(nativeEvent){if(document.documentMode){var handle=dataPriv.get(this,"handle"),event=jQuery.event.fix(nativeEvent);event.type=nativeEvent.type==="focusin"?"focus":"blur";event.isSimulated=true;handle(nativeEvent);if(event.target===event.currentTarget){handle(event);}}else{jQuery.event.simulate(delegateType,nativeEvent.target,jQuery.event.fix(nativeEvent));}}
jQuery.event.special[type]={setup:function(){var attaches;leverageNative(this,type,true);if(document.documentMode){attaches=dataPriv.get(this,delegateType);if(!attaches){this.addEventListener(delegateType,focusMappedHandler);}
dataPriv.set(this,delegateType,(attaches||0)+1);}else{return false;}},trigger:function(){leverageNative(this,type);return true;},teardown:function(){var attaches;if(document.documentMode){attaches=dataPriv.get(this,delegateType)-1;if(!attaches){this.removeEventListener(delegateType,focusMappedHandler);dataPriv.remove(this,delegateType);}else{dataPriv.set(this,delegateType,attaches);}}else{return false;}},_default:function(event){return dataPriv.get(event.target,type);},delegateType:delegateType};jQuery.event.special[delegateType]={setup:function(){var doc=this.ownerDocument||this.document||this,dataHolder=document.documentMode?this:doc,attaches=dataPriv.get(dataHolder,delegateType);if(!attaches){if(document.documentMode){this.addEventListener(delegateType,focusMappedHandler);}else{doc.addEventListener(type,focusMappedHandler,true);}}
dataPriv.set(dataHolder,delegateType,(attaches||0)+1);},teardown:function(){var doc=this.ownerDocument||this.document||this,dataHolder=document.documentMode?this:doc,attaches=dataPriv.get(dataHolder,delegateType)-1;if(!attaches){if(document.documentMode){this.removeEventListener(delegateType,focusMappedHandler);}else{doc.removeEventListener(type,focusMappedHandler,true);}
dataPriv.remove(dataHolder,delegateType);}else{dataPriv.set(dataHolder,delegateType,attaches);}}};});jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});jQuery.fn.extend({on:function(types,selector,data,fn){return on(this,types,selector,data,fn);},one:function(types,selector,data,fn){return on(this,types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var
rnoInnerhtml=/<script|<style|<link/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rcleanScript=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function manipulationTarget(elem,content){if(nodeName(elem,"table")&&nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return jQuery(elem).children("tbody")[0]||elem;}
return elem;}
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}
function restoreScript(elem){if((elem.type||"").slice(0,5)==="true/"){elem.type=elem.type.slice(5);}else{elem.removeAttribute("type");}
return elem;}
function cloneCopyEvent(src,dest){var i,l,type,pdataOld,udataOld,udataCur,events;if(dest.nodeType!==1){return;}
if(dataPriv.hasData(src)){pdataOld=dataPriv.get(src);events=pdataOld.events;if(events){dataPriv.remove(dest,"handle events");for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}
if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
function domManip(collection,args,callback,ignored){args=flat(args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],valueIsFunction=isFunction(value);if(valueIsFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return collection.each(function(index){var self=collection.eq(index);if(valueIsFunction){args[0]=value.call(this,index,self.html());}
domManip(self,args,callback,ignored);});}
if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}
callback.call(collection[i],node,i);}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src&&(node.type||"").toLowerCase()!=="module"){if(jQuery._evalUrl&&!node.noModule){jQuery._evalUrl(node.src,{nonce:node.nonce||node.getAttribute("nonce")},doc);}}else{DOMEval(node.textContent.replace(rcleanScript,""),node,doc);}}}}}}
return collection;}
function remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}
if(node.parentNode){if(keepData&&isAttached(node)){setGlobalEval(getAll(node,"script"));}
node.parentNode.removeChild(node);}}
return elem;}
jQuery.extend({htmlPrefilter:function(html){return html;},clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=isAttached(elem);if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}
return clone;},cleanData:function(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if((data=elem[dataPriv.expando])){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
elem[dataPriv.expando]=undefined;}
if(elem[dataUser.expando]){elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function(selector){return remove(this,selector,true);},remove:function(selector){return remove(this,selector);},text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.textContent="";}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var ignored=[];return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);push.apply(ret,elems.get());}
return this.pushStack(ret);};});var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var rcustomProp=/^--/;var getStyles=function(elem){var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}
return view.getComputedStyle(elem);};var swap=function(elem,options,callback){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.call(elem);for(name in options){elem.style[name]=old[name];}
return ret;};var rboxStyle=new RegExp(cssExpand.join("|"),"i");(function(){function computeStyleTests(){if(!div){return;}
container.style.cssText="position:absolute;left:-11111px;width:60px;"+"margin-top:1px;padding:0;border:0";div.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;"+"margin:auto;border:1px;padding:1px;"+"width:60%;top:1%";documentElement.appendChild(container).appendChild(div);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";reliableMarginLeftVal=roundPixelMeasures(divStyle.marginLeft)===12;div.style.right="60%";pixelBoxStylesVal=roundPixelMeasures(divStyle.right)===36;boxSizingReliableVal=roundPixelMeasures(divStyle.width)===36;div.style.position="absolute";scrollboxSizeVal=roundPixelMeasures(div.offsetWidth/3)===12;documentElement.removeChild(container);div=null;}
function roundPixelMeasures(measure){return Math.round(parseFloat(measure));}
var pixelPositionVal,boxSizingReliableVal,scrollboxSizeVal,pixelBoxStylesVal,reliableTrDimensionsVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");if(!div.style){return;}
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";jQuery.extend(support,{boxSizingReliable:function(){computeStyleTests();return boxSizingReliableVal;},pixelBoxStyles:function(){computeStyleTests();return pixelBoxStylesVal;},pixelPosition:function(){computeStyleTests();return pixelPositionVal;},reliableMarginLeft:function(){computeStyleTests();return reliableMarginLeftVal;},scrollboxSize:function(){computeStyleTests();return scrollboxSizeVal;},reliableTrDimensions:function(){var table,tr,trChild,trStyle;if(reliableTrDimensionsVal==null){table=document.createElement("table");tr=document.createElement("tr");trChild=document.createElement("div");table.style.cssText="position:absolute;left:-11111px;border-collapse:separate";tr.style.cssText="box-sizing:content-box;border:1px solid";tr.style.height="1px";trChild.style.height="9px";trChild.style.display="block";documentElement.appendChild(table).appendChild(tr).appendChild(trChild);trStyle=window.getComputedStyle(tr);reliableTrDimensionsVal=(parseInt(trStyle.height,10)+
parseInt(trStyle.borderTopWidth,10)+
parseInt(trStyle.borderBottomWidth,10))===tr.offsetHeight;documentElement.removeChild(table);}
return reliableTrDimensionsVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,isCustomProp=rcustomProp.test(name),style=elem.style;computed=computed||getStyles(elem);if(computed){ret=computed.getPropertyValue(name)||computed[name];if(isCustomProp&&ret){ret=ret.replace(rtrimCSS,"$1")||undefined;}
if(ret===""&&!isAttached(elem)){ret=jQuery.style(elem,name);}
if(!support.pixelBoxStyles()&&rnumnonpx.test(ret)&&rboxStyle.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret!==undefined?ret+"":ret;}
function addGetHookIf(conditionFn,hookFn){return{get:function(){if(conditionFn()){delete this.get;return;}
return(this.get=hookFn).apply(this,arguments);}};}
var cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style,vendorProps={};function vendorPropName(name){var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}
function finalPropName(name){var final=jQuery.cssProps[name]||vendorProps[name];if(final){return final;}
if(name in emptyStyle){return name;}
return vendorProps[name]=vendorPropName(name)||name;}
var
rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"};function setPositiveNumber(_elem,value,subtract){var matches=rcssNum.exec(value);return matches?Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}
function boxModelAdjustment(elem,dimension,box,isBorderBox,styles,computedVal){var i=dimension==="width"?1:0,extra=0,delta=0,marginDelta=0;if(box===(isBorderBox?"border":"content")){return 0;}
for(;i<4;i+=2){if(box==="margin"){marginDelta+=jQuery.css(elem,box+cssExpand[i],true,styles);}
if(!isBorderBox){delta+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(box!=="padding"){delta+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}else{extra+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{if(box==="content"){delta-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}
if(box!=="margin"){delta-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
if(!isBorderBox&&computedVal>=0){delta+=Math.max(0,Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-
computedVal-
delta-
extra-
0.5))||0;}
return delta+marginDelta;}
function getWidthOrHeight(elem,dimension,extra){var styles=getStyles(elem),boxSizingNeeded=!support.boxSizingReliable()||extra,isBorderBox=boxSizingNeeded&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",valueIsBorderBox=isBorderBox,val=curCSS(elem,dimension,styles),offsetProp="offset"+dimension[0].toUpperCase()+dimension.slice(1);if(rnumnonpx.test(val)){if(!extra){return val;}
val="auto";}
if((!support.boxSizingReliable()&&isBorderBox||!support.reliableTrDimensions()&&nodeName(elem,"tr")||val==="auto"||!parseFloat(val)&&jQuery.css(elem,"display",false,styles)==="inline")&&elem.getClientRects().length){isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";valueIsBorderBox=offsetProp in elem;if(valueIsBorderBox){val=elem[offsetProp];}}
val=parseFloat(val)||0;return(val+
boxModelAdjustment(elem,dimension,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles,val))+"px";}
jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{animationIterationCount:true,aspectRatio:true,borderImageSlice:true,columnCount:true,flexGrow:true,flexShrink:true,fontWeight:true,gridArea:true,gridColumn:true,gridColumnEnd:true,gridColumnStart:true,gridRow:true,gridRowEnd:true,gridRowStart:true,lineHeight:true,opacity:true,order:true,orphans:true,scale:true,widows:true,zIndex:true,zoom:true,fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeMiterlimit:true,strokeOpacity:true},cssProps:{},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name),style=elem.style;if(!isCustomProp){name=finalPropName(origName);}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);type="number";}
if(value==null||value!==value){return;}
if(type==="number"&&!isCustomProp){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){if(isCustomProp){style.setProperty(name,value);}else{style[name]=value;}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra,styles){var val,num,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name);if(!isCustomProp){name=finalPropName(origName);}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
if(val===undefined){val=curCSS(elem,name,styles);}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}
return val;}});jQuery.each(["height","width"],function(_i,dimension){jQuery.cssHooks[dimension]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&(!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,dimension,extra);}):getWidthOrHeight(elem,dimension,extra);}},set:function(elem,value,extra){var matches,styles=getStyles(elem),scrollboxSizeBuggy=!support.scrollboxSize()&&styles.position==="absolute",boxSizingNeeded=scrollboxSizeBuggy||extra,isBorderBox=boxSizingNeeded&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",subtract=extra?boxModelAdjustment(elem,dimension,extra,isBorderBox,styles):0;if(isBorderBox&&scrollboxSizeBuggy){subtract-=Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-
parseFloat(styles[dimension])-
boxModelAdjustment(elem,dimension,"border",false,styles)-
0.5);}
if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[dimension]=value;value=jQuery.css(elem,dimension);}
return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-
swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(prefix!=="margin"){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(Array.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
return map;}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(jQuery.cssHooks[tween.prop]||tween.elem.style[finalPropName(tween.prop)]!=null)){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var
fxNow,inProgress,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function schedule(){if(inProgress){if(document.hidden===false&&window.requestAnimationFrame){window.requestAnimationFrame(schedule);}else{window.setTimeout(schedule,jQuery.fx.interval);}
jQuery.fx.tick();}}
function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return(fxNow=Date.now());}
function genFx(type,includeWidth){var which,i=0,attrs={height:type};includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween;}}}
function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}
propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}
if(isBox&&elem.nodeType===1){opts.overflow=[style.overflow,style.overflowX,style.overflowY];restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}
display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}
if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}
style.display="inline-block";}}}
if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}
propTween=false;for(prop in orig){if(!propTween){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){showHide([elem],true);}
anim.done(function(){if(!hidden){showHide([elem]);}
dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}
propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=camelCase(index);easing=specialEasing[name];value=props[index];if(Array.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){if(stopped){return false;}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}
if(!length){deferred.notifyWith(elem,[animation,1,0]);}
deferred.resolveWith(elem,[animation]);return false;},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=result.stop.bind(result);}
return result;}}
jQuery.map(props,createTween,animation);if(isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation;}
jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function(props,callback){if(isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnothtmlwhite);}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!isFunction(easing)&&easing};if(jQuery.fx.off){opt.duration=0;}else{if(typeof opt.duration!=="number"){if(opt.duration in jQuery.fx.speeds){opt.duration=jQuery.fx.speeds[opt.duration];}else{opt.duration=jQuery.fx.speeds._default;}}}
if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(){if(isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHiddenWithinTree).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(_i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=Date.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);jQuery.fx.start();};jQuery.fx.interval=13;jQuery.fx.start=function(){if(inProgress){return;}
inProgress=true;schedule();};jQuery.fx.stop=function(){inProgress=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";support.checkOn=input.value!=="";support.optSelected=opt.selected;input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}
if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}
if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
elem.setAttribute(name,value+"");return value;}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret;},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}}},removeAttr:function(elem,value){var name,i=0,attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){elem.removeAttribute(name);}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}
return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(_i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}
return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
return(elem[name]=value);}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
return elem[name];},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");if(tabindex){return parseInt(tabindex,10);}
if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){return 0;}
return-1;}}},propFix:{"for":"htmlFor","class":"className"}});if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}
return null;},set:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});function stripAndCollapse(value){var tokens=value.match(rnothtmlwhite)||[];return tokens.join(" ");}
function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}
function classesToArray(value){if(Array.isArray(value)){return value;}
if(typeof value==="string"){return value.match(rnothtmlwhite)||[];}
return[];}
jQuery.fn.extend({addClass:function(value){var classNames,cur,curValue,className,i,finalValue;if(isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}
classNames=classesToArray(value);if(classNames.length){return this.each(function(){curValue=getClass(this);cur=this.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");if(cur){for(i=0;i<classNames.length;i++){className=classNames[i];if(cur.indexOf(" "+className+" ")<0){cur+=className+" ";}}
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){this.setAttribute("class",finalValue);}}});}
return this;},removeClass:function(value){var classNames,cur,curValue,className,i,finalValue;if(isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}
if(!arguments.length){return this.attr("class","");}
classNames=classesToArray(value);if(classNames.length){return this.each(function(){curValue=getClass(this);cur=this.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");if(cur){for(i=0;i<classNames.length;i++){className=classNames[i];while(cur.indexOf(" "+className+" ")>-1){cur=cur.replace(" "+className+" "," ");}}
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){this.setAttribute("class",finalValue);}}});}
return this;},toggleClass:function(value,stateVal){var classNames,className,i,self,type=typeof value,isValidValue=type==="string"||Array.isArray(value);if(isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}
if(typeof stateVal==="boolean"&&isValidValue){return stateVal?this.addClass(value):this.removeClass(value);}
classNames=classesToArray(value);return this.each(function(){if(isValidValue){self=jQuery(this);for(i=0;i<classNames.length;i++){className=classNames[i];if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){dataPriv.set(this,"__className__",className);}
if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function(selector){var className,elem,i=0;className=" "+selector+" ";while((elem=this[i++])){if(elem.nodeType===1&&(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){return true;}}
return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function(value){var hooks,ret,valueIsFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;if(typeof ret==="string"){return ret.replace(rreturn,"");}
return ret==null?"":ret;}
return;}
valueIsFunction=isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
if(valueIsFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(Array.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:stripAndCollapse(jQuery.text(elem));}},select:{get:function(elem){var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length;if(index<0){i=max;}else{i=one?index:0;}
for(;i<max;i++){option=options[i];if((option.selected||i===index)&&!option.disabled&&(!option.parentNode.disabled||!nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}}
if(!optionSet){elem.selectedIndex=-1;}
return values;}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(Array.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1);}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});var location=window.location;var nonce={guid:Date.now()};var rquery=(/\?/);jQuery.parseXML=function(data){var xml,parserErrorElem;if(!data||typeof data!=="string"){return null;}
try{xml=(new window.DOMParser()).parseFromString(data,"text/xml");}catch(e){}
parserErrorElem=xml&&xml.getElementsByTagName("parsererror")[0];if(!xml||parserErrorElem){jQuery.error("Invalid XML: "+(parserErrorElem?jQuery.map(parserErrorElem.childNodes,function(el){return el.textContent;}).join("\n"):data));}
return xml;};var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,stopPropagationCallback=function(e){e.stopPropagation();};jQuery.extend(jQuery.event,{trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,lastElement,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=lastElement=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return;}
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf(".")>-1){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem;}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
if(!onlyHandlers&&!special.noBubble&&!isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){lastElement=cur;event.type=i>1?bubbleType:special.bindType||type;handle=(dataPriv.get(cur,"events")||Object.create(null))[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){if(ontype&&isFunction(elem[type])&&!isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null;}
jQuery.event.triggered=type;if(event.isPropagationStopped()){lastElement.addEventListener(type,stopPropagationCallback);}
elem[type]();if(event.isPropagationStopped()){lastElement.removeEventListener(type,stopPropagationCallback);}
jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
return event.result;},simulate:function(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});var
rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(Array.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&toType(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,valueOrFunction){var value=isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+
encodeURIComponent(value==null?"":value);};if(a==null){return"";}
if(Array.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(_i,elem){var val=jQuery(this).val();if(val==null){return null;}
if(Array.isArray(val)){return jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};});}
return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var
r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,prefilters={},transports={},allTypes="*/".concat("*"),originAnchor=document.createElement("a");originAnchor.href=location.href;function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}
return target;}
function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
break;}}}}
if(conv!==true){if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}
return{state:"success",data:response};}
jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":JSON.parse,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var transport,cacheURL,responseHeadersString,responseHeaders,timeoutTimer,urlAnchor,completed,fireGlobals,i,uncached,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()+" "]=(responseHeaders[match[1].toLowerCase()+" "]||[]).concat(match[2]);}}
match=responseHeaders[key.toLowerCase()+" "];}
return match==null?null:match.join(", ");},getAllResponseHeaders:function(){return completed?responseHeadersString:null;},setRequestHeader:function(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}
return this;},overrideMimeType:function(type){if(completed==null){s.mimeType=type;}
return this;},statusCode:function(map){var code;if(map){if(completed){jqXHR.always(map[jqXHR.status]);}else{for(code in map){statusCode[code]=[statusCode[code],map[code]];}}}
return this;},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
done(0,finalText);return this;}};deferred.promise(jqXHR);s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];if(s.crossDomain==null){urlAnchor=document.createElement("a");try{urlAnchor.href=s.url;urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){s.crossDomain=true;}}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(completed){return jqXHR;}
fireGlobals=jQuery.event&&s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url.replace(rhash,"");if(!s.hasContent){uncached=s.url.slice(cacheURL.length);if(s.data&&(s.processData||typeof s.data==="string")){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;delete s.data;}
if(s.cache===false){cacheURL=cacheURL.replace(rantiCache,"$1");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+(nonce.guid++)+
uncached;}
s.url=cacheURL+uncached;}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+
(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){return jqXHR.abort();}
strAbort="abort";completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(completed){return jqXHR;}
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{completed=false;transport.send(requestHeaders,done);}catch(e){if(completed){throw e;}
done(-1,e);}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(completed){return;}
completed=true;if(timeoutTimer){window.clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
if(!isSuccess&&jQuery.inArray("script",s.dataTypes)>-1&&jQuery.inArray("json",s.dataTypes)<0){s.converters["text script"]=function(){};}
response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}
if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(_i,method){jQuery[method]=function(url,data,callback,type){if(isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery.ajaxPrefilter(function(s){var i;for(i in s.headers){if(i.toLowerCase()==="content-type"){s.contentType=s.headers[i]||"";}}});jQuery._evalUrl=function(url,options,doc){return jQuery.ajax({url:url,type:"GET",dataType:"script",cache:true,async:false,global:false,converters:{"text script":function(){}},dataFilter:function(response){jQuery.globalEval(response,options,doc);}});};jQuery.fn.extend({wrapAll:function(html){var wrap;if(this[0]){if(isFunction(html)){html=html.call(this[0]);}
wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var htmlIsFunction=isFunction(html);return this.each(function(i){jQuery(this).wrapAll(htmlIsFunction?html.call(this,i):html);});},unwrap:function(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={0:200,1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var callback,errorCallback;if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
for(i in headers){xhr.setRequestHeader(i,headers[i]);}
callback=function(type){return function(){if(callback){callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.ontimeout=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};xhr.onload=callback();errorCallback=xhr.onerror=xhr.ontimeout=callback("error");if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){if(xhr.readyState===4){window.setTimeout(function(){if(callback){errorCallback();}});}};}
callback=callback("abort");try{xhr.send(options.hasContent&&options.data||null);}catch(e){if(callback){throw e;}}},abort:function(){if(callback){callback();}}};}});jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var script,callback;return{send:function(_,complete){script=jQuery("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();callback=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});document.head.appendChild(script[0]);},abort:function(){if(callback){callback();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce.guid++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){if(overwritten===undefined){jQuery(window).removeProp(callbackName);}else{window[callbackName]=overwritten;}
if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
if(responseContainer&&isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;});return"script";}});support.createHTMLDocument=(function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;})();jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}
if(typeof context==="boolean"){keepScripts=context;context=false;}
var base,parsed,scripts;if(!context){if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}
parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])];}
parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}
return jQuery.merge([],parsed.childNodes);};jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=stripAndCollapse(url.slice(off));url=url.slice(0,off);}
if(isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
if(self.length>0){jQuery.ajax({url:url,type:type||"GET",dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}
return this;};jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};if(position==="static"){elem.style.position="relative";}
curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(isFunction(options)){options=options.call(elem,i,jQuery.extend({},curOffset));}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var rect,win,elem=this[0];if(!elem){return;}
if(!elem.getClientRects().length){return{top:0,left:0};}
rect=elem.getBoundingClientRect();win=elem.ownerDocument.defaultView;return{top:rect.top+win.pageYOffset,left:rect.left+win.pageXOffset};},position:function(){if(!this[0]){return;}
var offsetParent,offset,doc,elem=this[0],parentOffset={top:0,left:0};if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect();}else{offset=this.offset();doc=elem.ownerDocument;offsetParent=elem.offsetParent||doc.documentElement;while(offsetParent&&(offsetParent===doc.body||offsetParent===doc.documentElement)&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.parentNode;}
if(offsetParent&&offsetParent!==elem&&offsetParent.nodeType===1){parentOffset=jQuery(offsetParent).offset();parentOffset.top+=jQuery.css(offsetParent,"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent,"borderLeftWidth",true);}}
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}
return offsetParent||documentElement;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win;if(isWindow(elem)){win=elem;}else if(elem.nodeType===9){win=elem.defaultView;}
if(val===undefined){return win?win[prop]:elem[method];}
if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});jQuery.each(["top","left"],function(_i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(isWindow(elem)){return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(_i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.fn.extend({bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},hover:function(fnOver,fnOut){return this.on("mouseenter",fnOver).on("mouseleave",fnOut||fnOver);}});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(_i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});var rtrim=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;jQuery.proxy=function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
if(!isFunction(fn)){return undefined;}
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;};jQuery.holdReady=function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}};jQuery.isArray=Array.isArray;jQuery.parseJSON=JSON.parse;jQuery.nodeName=nodeName;jQuery.isFunction=isFunction;jQuery.isWindow=isWindow;jQuery.camelCase=camelCase;jQuery.type=toType;jQuery.now=Date.now;jQuery.isNumeric=function(obj){var type=jQuery.type(obj);return(type==="number"||type==="string")&&!isNaN(obj-parseFloat(obj));};jQuery.trim=function(text){return text==null?"":(text+"").replace(rtrim,"$1");};if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}
var
_jQuery=window.jQuery,_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;};if(typeof noGlobal==="undefined"){window.jQuery=window.$=jQuery;}
return jQuery;});jQuery.noConflict();
/*!
 * jQuery Migrate - v3.4.1 - 2023-02-23T15:31Z
 * Copyright OpenJS Foundation and other contributors
 */
(function(factory){"use strict";if(typeof define==="function"&&define.amd){define(["jquery"],function(jQuery){return factory(jQuery,window);});}else if(typeof module==="object"&&module.exports){module.exports=factory(require("jquery"),window);}else{factory(jQuery,window);}})(function(jQuery,window){"use strict";jQuery.migrateVersion="3.4.1";function compareVersions(v1,v2){var i,rVersionParts=/^(\d+)\.(\d+)\.(\d+)/,v1p=rVersionParts.exec(v1)||[],v2p=rVersionParts.exec(v2)||[];for(i=1;i<=3;i++){if(+v1p[i]>+v2p[i]){return 1;}
if(+v1p[i]<+v2p[i]){return-1;}}
return 0;}
function jQueryVersionSince(version){return compareVersions(jQuery.fn.jquery,version)>=0;}
var disabledPatches=Object.create(null);jQuery.migrateDisablePatches=function(){var i;for(i=0;i<arguments.length;i++){disabledPatches[arguments[i]]=true;}};jQuery.migrateEnablePatches=function(){var i;for(i=0;i<arguments.length;i++){delete disabledPatches[arguments[i]];}};jQuery.migrateIsPatchEnabled=function(patchCode){return!disabledPatches[patchCode];};(function(){if(!window.console||!window.console.log){return;}
if(!jQuery||!jQueryVersionSince("3.0.0")||jQueryVersionSince("5.0.0")){window.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED");}
if(jQuery.migrateWarnings){window.console.log("JQMIGRATE: Migrate plugin loaded multiple times");}
window.console.log("JQMIGRATE: Migrate is installed"+
(jQuery.migrateMute?"":" with logging active")+", version "+jQuery.migrateVersion);})();var warnedAbout={};jQuery.migrateDeduplicateWarnings=true;jQuery.migrateWarnings=[];if(jQuery.migrateTrace===undefined){jQuery.migrateTrace=true;}
jQuery.migrateReset=function(){warnedAbout={};jQuery.migrateWarnings.length=0;};function migrateWarn(code,msg){var console=window.console;if(jQuery.migrateIsPatchEnabled(code)&&(!jQuery.migrateDeduplicateWarnings||!warnedAbout[msg])){warnedAbout[msg]=true;jQuery.migrateWarnings.push(msg+" ["+code+"]");if(console&&console.warn&&!jQuery.migrateMute){console.warn("JQMIGRATE: "+msg);if(jQuery.migrateTrace&&console.trace){console.trace();}}}}
function migrateWarnProp(obj,prop,value,code,msg){Object.defineProperty(obj,prop,{configurable:true,enumerable:true,get:function(){migrateWarn(code,msg);return value;},set:function(newValue){migrateWarn(code,msg);value=newValue;}});}
function migrateWarnFuncInternal(obj,prop,newFunc,code,msg){var finalFunc,origFunc=obj[prop];obj[prop]=function(){if(msg){migrateWarn(code,msg);}
finalFunc=jQuery.migrateIsPatchEnabled(code)?newFunc:(origFunc||jQuery.noop);return finalFunc.apply(this,arguments);};}
function migratePatchAndWarnFunc(obj,prop,newFunc,code,msg){if(!msg){throw new Error("No warning message provided");}
return migrateWarnFuncInternal(obj,prop,newFunc,code,msg);}
function migratePatchFunc(obj,prop,newFunc,code){return migrateWarnFuncInternal(obj,prop,newFunc,code);}
if(window.document.compatMode==="BackCompat"){migrateWarn("quirks","jQuery is not compatible with Quirks Mode");}
var findProp,class2type={},oldInit=jQuery.fn.init,oldFind=jQuery.find,rattrHashTest=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,rattrHashGlob=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,rtrim=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;migratePatchFunc(jQuery.fn,"init",function(arg1){var args=Array.prototype.slice.call(arguments);if(jQuery.migrateIsPatchEnabled("selector-empty-id")&&typeof arg1==="string"&&arg1==="#"){migrateWarn("selector-empty-id","jQuery( '#' ) is not a valid selector");args[0]=[];}
return oldInit.apply(this,args);},"selector-empty-id");jQuery.fn.init.prototype=jQuery.fn;migratePatchFunc(jQuery,"find",function(selector){var args=Array.prototype.slice.call(arguments);if(typeof selector==="string"&&rattrHashTest.test(selector)){try{window.document.querySelector(selector);}catch(err1){selector=selector.replace(rattrHashGlob,function(_,attr,op,value){return"["+attr+op+"\""+value+"\"]";});try{window.document.querySelector(selector);migrateWarn("selector-hash","Attribute selector with '#' must be quoted: "+args[0]);args[0]=selector;}catch(err2){migrateWarn("selector-hash","Attribute selector with '#' was not fixed: "+args[0]);}}}
return oldFind.apply(this,args);},"selector-hash");for(findProp in oldFind){if(Object.prototype.hasOwnProperty.call(oldFind,findProp)){jQuery.find[findProp]=oldFind[findProp];}}
migratePatchAndWarnFunc(jQuery.fn,"size",function(){return this.length;},"size","jQuery.fn.size() is deprecated and removed; use the .length property");migratePatchAndWarnFunc(jQuery,"parseJSON",function(){return JSON.parse.apply(null,arguments);},"parseJSON","jQuery.parseJSON is deprecated; use JSON.parse");migratePatchAndWarnFunc(jQuery,"holdReady",jQuery.holdReady,"holdReady","jQuery.holdReady is deprecated");migratePatchAndWarnFunc(jQuery,"unique",jQuery.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort");migrateWarnProp(jQuery.expr,"filters",jQuery.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos");migrateWarnProp(jQuery.expr,":",jQuery.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");if(jQueryVersionSince("3.1.1")){migratePatchAndWarnFunc(jQuery,"trim",function(text){return text==null?"":(text+"").replace(rtrim,"$1");},"trim","jQuery.trim is deprecated; use String.prototype.trim");}
if(jQueryVersionSince("3.2.0")){migratePatchAndWarnFunc(jQuery,"nodeName",function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},"nodeName","jQuery.nodeName is deprecated");migratePatchAndWarnFunc(jQuery,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray");}
if(jQueryVersionSince("3.3.0")){migratePatchAndWarnFunc(jQuery,"isNumeric",function(obj){var type=typeof obj;return(type==="number"||type==="string")&&!isNaN(obj-parseFloat(obj));},"isNumeric","jQuery.isNumeric() is deprecated");jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(_,name){class2type["[object "+name+"]"]=name.toLowerCase();});migratePatchAndWarnFunc(jQuery,"type",function(obj){if(obj==null){return obj+"";}
return typeof obj==="object"||typeof obj==="function"?class2type[Object.prototype.toString.call(obj)]||"object":typeof obj;},"type","jQuery.type is deprecated");migratePatchAndWarnFunc(jQuery,"isFunction",function(obj){return typeof obj==="function";},"isFunction","jQuery.isFunction() is deprecated");migratePatchAndWarnFunc(jQuery,"isWindow",function(obj){return obj!=null&&obj===obj.window;},"isWindow","jQuery.isWindow() is deprecated");}
if(jQuery.ajax){var oldAjax=jQuery.ajax,rjsonp=/(=)\?(?=&|$)|\?\?/;migratePatchFunc(jQuery,"ajax",function(){var jQXHR=oldAjax.apply(this,arguments);if(jQXHR.promise){migratePatchAndWarnFunc(jQXHR,"success",jQXHR.done,"jqXHR-methods","jQXHR.success is deprecated and removed");migratePatchAndWarnFunc(jQXHR,"error",jQXHR.fail,"jqXHR-methods","jQXHR.error is deprecated and removed");migratePatchAndWarnFunc(jQXHR,"complete",jQXHR.always,"jqXHR-methods","jQXHR.complete is deprecated and removed");}
return jQXHR;},"jqXHR-methods");if(!jQueryVersionSince("4.0.0")){jQuery.ajaxPrefilter("+json",function(s){if(s.jsonp!==false&&(rjsonp.test(s.url)||typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data))){migrateWarn("jsonp-promotion","JSON-to-JSONP auto-promotion is deprecated");}});}}
var oldRemoveAttr=jQuery.fn.removeAttr,oldToggleClass=jQuery.fn.toggleClass,rmatchNonSpace=/\S+/g;migratePatchFunc(jQuery.fn,"removeAttr",function(name){var self=this,patchNeeded=false;jQuery.each(name.match(rmatchNonSpace),function(_i,attr){if(jQuery.expr.match.bool.test(attr)){self.each(function(){if(jQuery(this).prop(attr)!==false){patchNeeded=true;return false;}});}
if(patchNeeded){migrateWarn("removeAttr-bool","jQuery.fn.removeAttr no longer sets boolean properties: "+attr);self.prop(attr,false);}});return oldRemoveAttr.apply(this,arguments);},"removeAttr-bool");migratePatchFunc(jQuery.fn,"toggleClass",function(state){if(state!==undefined&&typeof state!=="boolean"){return oldToggleClass.apply(this,arguments);}
migrateWarn("toggleClass-bool","jQuery.fn.toggleClass( boolean ) is deprecated");return this.each(function(){var className=this.getAttribute&&this.getAttribute("class")||"";if(className){jQuery.data(this,"__className__",className);}
if(this.setAttribute){this.setAttribute("class",className||state===false?"":jQuery.data(this,"__className__")||"");}});},"toggleClass-bool");function camelCase(string){return string.replace(/-([a-z])/g,function(_,letter){return letter.toUpperCase();});}
var origFnCss,internalCssNumber,internalSwapCall=false,ralphaStart=/^[a-z]/,rautoPx=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;if(jQuery.swap){jQuery.each(["height","width","reliableMarginRight"],function(_,name){var oldHook=jQuery.cssHooks[name]&&jQuery.cssHooks[name].get;if(oldHook){jQuery.cssHooks[name].get=function(){var ret;internalSwapCall=true;ret=oldHook.apply(this,arguments);internalSwapCall=false;return ret;};}});}
migratePatchFunc(jQuery,"swap",function(elem,options,callback,args){var ret,name,old={};if(!internalSwapCall){migrateWarn("swap","jQuery.swap() is undocumented and deprecated");}
for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name];}
return ret;},"swap");if(jQueryVersionSince("3.4.0")&&typeof Proxy!=="undefined"){jQuery.cssProps=new Proxy(jQuery.cssProps||{},{set:function(){migrateWarn("cssProps","jQuery.cssProps is deprecated");return Reflect.set.apply(this,arguments);}});}
if(jQueryVersionSince("4.0.0")){internalCssNumber={animationIterationCount:true,columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,gridArea:true,gridColumn:true,gridColumnEnd:true,gridColumnStart:true,gridRow:true,gridRowEnd:true,gridRowStart:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true};if(typeof Proxy!=="undefined"){jQuery.cssNumber=new Proxy(internalCssNumber,{get:function(){migrateWarn("css-number","jQuery.cssNumber is deprecated");return Reflect.get.apply(this,arguments);},set:function(){migrateWarn("css-number","jQuery.cssNumber is deprecated");return Reflect.set.apply(this,arguments);}});}else{jQuery.cssNumber=internalCssNumber;}}else{internalCssNumber=jQuery.cssNumber;}
function isAutoPx(prop){return ralphaStart.test(prop)&&rautoPx.test(prop[0].toUpperCase()+prop.slice(1));}
origFnCss=jQuery.fn.css;migratePatchFunc(jQuery.fn,"css",function(name,value){var camelName,origThis=this;if(name&&typeof name==="object"&&!Array.isArray(name)){jQuery.each(name,function(n,v){jQuery.fn.css.call(origThis,n,v);});return this;}
if(typeof value==="number"){camelName=camelCase(name);if(!isAutoPx(camelName)&&!internalCssNumber[camelName]){migrateWarn("css-number","Number-typed values are deprecated for jQuery.fn.css( \""+
name+"\", value )");}}
return origFnCss.apply(this,arguments);},"css-number");var origData=jQuery.data;migratePatchFunc(jQuery,"data",function(elem,name,value){var curData,sameKeys,key;if(name&&typeof name==="object"&&arguments.length===2){curData=jQuery.hasData(elem)&&origData.call(this,elem);sameKeys={};for(key in name){if(key!==camelCase(key)){migrateWarn("data-camelCase","jQuery.data() always sets/gets camelCased names: "+key);curData[key]=name[key];}else{sameKeys[key]=name[key];}}
origData.call(this,elem,sameKeys);return name;}
if(name&&typeof name==="string"&&name!==camelCase(name)){curData=jQuery.hasData(elem)&&origData.call(this,elem);if(curData&&name in curData){migrateWarn("data-camelCase","jQuery.data() always sets/gets camelCased names: "+name);if(arguments.length>2){curData[name]=value;}
return curData[name];}}
return origData.apply(this,arguments);},"data-camelCase");if(jQuery.fx){var intervalValue,intervalMsg,oldTweenRun=jQuery.Tween.prototype.run,linearEasing=function(pct){return pct;};migratePatchFunc(jQuery.Tween.prototype,"run",function(){if(jQuery.easing[this.easing].length>1){migrateWarn("easing-one-arg","'jQuery.easing."+this.easing.toString()+"' should use only one argument");jQuery.easing[this.easing]=linearEasing;}
oldTweenRun.apply(this,arguments);},"easing-one-arg");intervalValue=jQuery.fx.interval;intervalMsg="jQuery.fx.interval is deprecated";if(window.requestAnimationFrame){Object.defineProperty(jQuery.fx,"interval",{configurable:true,enumerable:true,get:function(){if(!window.document.hidden){migrateWarn("fx-interval",intervalMsg);}
if(!jQuery.migrateIsPatchEnabled("fx-interval")){return intervalValue;}
return intervalValue===undefined?13:intervalValue;},set:function(newValue){migrateWarn("fx-interval",intervalMsg);intervalValue=newValue;}});}}
var oldLoad=jQuery.fn.load,oldEventAdd=jQuery.event.add,originalFix=jQuery.event.fix;jQuery.event.props=[];jQuery.event.fixHooks={};migrateWarnProp(jQuery.event.props,"concat",jQuery.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed");migratePatchFunc(jQuery.event,"fix",function(originalEvent){var event,type=originalEvent.type,fixHook=this.fixHooks[type],props=jQuery.event.props;if(props.length){migrateWarn("event-old-patch","jQuery.event.props are deprecated and removed: "+props.join());while(props.length){jQuery.event.addProp(props.pop());}}
if(fixHook&&!fixHook._migrated_){fixHook._migrated_=true;migrateWarn("event-old-patch","jQuery.event.fixHooks are deprecated and removed: "+type);if((props=fixHook.props)&&props.length){while(props.length){jQuery.event.addProp(props.pop());}}}
event=originalFix.call(this,originalEvent);return fixHook&&fixHook.filter?fixHook.filter(event,originalEvent):event;},"event-old-patch");migratePatchFunc(jQuery.event,"add",function(elem,types){if(elem===window&&types==="load"&&window.document.readyState==="complete"){migrateWarn("load-after-event","jQuery(window).on('load'...) called after load event occurred");}
return oldEventAdd.apply(this,arguments);},"load-after-event");jQuery.each(["load","unload","error"],function(_,name){migratePatchFunc(jQuery.fn,name,function(){var args=Array.prototype.slice.call(arguments,0);if(name==="load"&&typeof args[0]==="string"){return oldLoad.apply(this,args);}
migrateWarn("shorthand-removed-v3","jQuery.fn."+name+"() is deprecated");args.splice(0,0,name);if(arguments.length){return this.on.apply(this,args);}
this.triggerHandler.apply(this,args);return this;},"shorthand-removed-v3");});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(_i,name){migratePatchAndWarnFunc(jQuery.fn,name,function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);},"shorthand-deprecated-v3","jQuery.fn."+name+"() event shorthand is deprecated");});jQuery(function(){jQuery(window.document).triggerHandler("ready");});jQuery.event.special.ready={setup:function(){if(this===window.document){migrateWarn("ready-event","'ready' event is deprecated");}}};migratePatchAndWarnFunc(jQuery.fn,"bind",function(types,data,fn){return this.on(types,null,data,fn);},"pre-on-methods","jQuery.fn.bind() is deprecated");migratePatchAndWarnFunc(jQuery.fn,"unbind",function(types,fn){return this.off(types,null,fn);},"pre-on-methods","jQuery.fn.unbind() is deprecated");migratePatchAndWarnFunc(jQuery.fn,"delegate",function(selector,types,data,fn){return this.on(types,selector,data,fn);},"pre-on-methods","jQuery.fn.delegate() is deprecated");migratePatchAndWarnFunc(jQuery.fn,"undelegate",function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},"pre-on-methods","jQuery.fn.undelegate() is deprecated");migratePatchAndWarnFunc(jQuery.fn,"hover",function(fnOver,fnOut){return this.on("mouseenter",fnOver).on("mouseleave",fnOut||fnOver);},"pre-on-methods","jQuery.fn.hover() is deprecated");var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,makeMarkup=function(html){var doc=window.document.implementation.createHTMLDocument("");doc.body.innerHTML=html;return doc.body&&doc.body.innerHTML;},warnIfChanged=function(html){var changed=html.replace(rxhtmlTag,"<$1></$2>");if(changed!==html&&makeMarkup(html)!==makeMarkup(changed)){migrateWarn("self-closed-tags","HTML tags must be properly nested and closed: "+html);}};jQuery.UNSAFE_restoreLegacyHtmlPrefilter=function(){jQuery.migrateEnablePatches("self-closed-tags");};migratePatchFunc(jQuery,"htmlPrefilter",function(html){warnIfChanged(html);return html.replace(rxhtmlTag,"<$1></$2>");},"self-closed-tags");jQuery.migrateDisablePatches("self-closed-tags");var origOffset=jQuery.fn.offset;migratePatchFunc(jQuery.fn,"offset",function(){var elem=this[0];if(elem&&(!elem.nodeType||!elem.getBoundingClientRect)){migrateWarn("offset-valid-elem","jQuery.fn.offset() requires a valid DOM element");return arguments.length?this:undefined;}
return origOffset.apply(this,arguments);},"offset-valid-elem");if(jQuery.ajax){var origParam=jQuery.param;migratePatchFunc(jQuery,"param",function(data,traditional){var ajaxTraditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;if(traditional===undefined&&ajaxTraditional){migrateWarn("param-ajax-traditional","jQuery.param() no longer uses jQuery.ajaxSettings.traditional");traditional=ajaxTraditional;}
return origParam.call(this,data,traditional);},"param-ajax-traditional");}
migratePatchAndWarnFunc(jQuery.fn,"andSelf",jQuery.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()");if(jQuery.Deferred){var oldDeferred=jQuery.Deferred,tuples=[["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory")]];migratePatchFunc(jQuery,"Deferred",function(func){var deferred=oldDeferred(),promise=deferred.promise();function newDeferredPipe(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=typeof fns[i]==="function"&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&typeof returned.promise==="function"){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);}else{newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();}
migratePatchAndWarnFunc(deferred,"pipe",newDeferredPipe,"deferred-pipe","deferred.pipe() is deprecated");migratePatchAndWarnFunc(promise,"pipe",newDeferredPipe,"deferred-pipe","deferred.pipe() is deprecated");if(func){func.call(deferred,deferred);}
return deferred;},"deferred-pipe");jQuery.Deferred.exceptionHook=oldDeferred.exceptionHook;}
return jQuery;});
(function($){var WidgethfeSearchButton=function($scope,$){if('undefined'==typeof $scope)
return;var $input=$scope.find("input.hfe-search-form__input");var $clear=$scope.find("button#clear");var $clear_with_button=$scope.find("button#clear-with-button");var $search_button=$scope.find(".hfe-search-submit");var $toggle_search=$scope.find(".hfe-search-icon-toggle input");$scope.find('.hfe-search-icon-toggle').on('click',function(){$scope.find(".hfe-search-form__input").trigger('focus');});$scope.find(".hfe-search-form__input").on('focus',function(){$scope.find(".hfe-search-button-wrapper").addClass("hfe-input-focus");});$scope.find(".hfe-search-form__input").blur(function(){$scope.find(".hfe-search-button-wrapper").removeClass("hfe-input-focus");});$search_button.on('touchstart click',function(){$input.submit();});$toggle_search.css('padding-right',$toggle_search.next().outerWidth()+'px');$input.on('keyup',function(){$clear.style=(this.value.length)?$clear.css('visibility','visible'):$clear.css('visibility','hidden');$clear_with_button.style=(this.value.length)?$clear_with_button.css('visibility','visible'):$clear_with_button.css('visibility','hidden');$clear_with_button.css('right',$search_button.outerWidth()+'px');});$clear.on("click",function(){this.style=$clear.css('visibility','hidden');$input.value="";});$clear_with_button.on("click",function(){this.style=$clear_with_button.css('visibility','hidden');$input.value="";});};var WidgethfeNavMenuHandler=function($scope,$){if('undefined'==typeof $scope)
return;var id=$scope.data('id');var wrapper=$scope.find('.elementor-widget-hfe-nav-menu ');var layout=$('.elementor-element-'+id+' .hfe-nav-menu').data('layout');var flyout_data=$('.elementor-element-'+id+' .hfe-flyout-wrapper').data('flyout-class');var last_item=$('.elementor-element-'+id+' .hfe-nav-menu').data('last-item');var last_item_flyout=$('.elementor-element-'+id+' .hfe-flyout-wrapper').data('last-item');var menu_items_links=$('.elementor-element-'+id+' .hfe-nav-menu nav li a');var menu_items_links_flyout=$('.elementor-element-'+id+' .hfe-flyout-wrapper li a');if(menu_items_links.length>0){_handle_current_menu_item_class(menu_items_links);}
if(menu_items_links_flyout.length>0){_handle_current_menu_item_class(menu_items_links_flyout);}
$('div.hfe-has-submenu-container').removeClass('sub-menu-active');_toggleClick(id);_handleSinglePageMenu(id,layout);if('horizontal'!==layout){_eventClick(id);}else if('horizontal'===layout&&window.matchMedia("( max-width: 767px )").matches){_eventClick(id);}else if('horizontal'===layout&&window.matchMedia("( max-width: 1024px )").matches){_eventClick(id);}
$('.elementor-element-'+id+' .hfe-flyout-trigger .hfe-nav-menu-icon').off('click keyup').on('click keyup',function(){_openMenu(id);});$('.elementor-element-'+id+' .hfe-flyout-close').off('click keyup').on('click keyup',function(){_closeMenu(id);});$('.elementor-element-'+id+' .hfe-flyout-overlay').off('click').on('click',function(){_closeMenu(id);});$scope.find('.sub-menu').each(function(){var parent=$(this).closest('.menu-item');$scope.find(parent).addClass('parent-has-child');$scope.find(parent).removeClass('parent-has-no-child');});if(('cta'==last_item||'cta'==last_item_flyout)&&'expandible'!=layout){$('.elementor-element-'+id+' li.menu-item:last-child a.hfe-menu-item').parent().addClass('elementor-button-wrapper');$('.elementor-element-'+id+' li.menu-item:last-child a.hfe-menu-item').addClass('elementor-button');}
_borderClass(id);$(window).on('resize',function(){if('horizontal'!==layout){_eventClick(id);}else if('horizontal'===layout&&window.matchMedia("( max-width: 767px )").matches){_eventClick(id);}else if('horizontal'===layout&&window.matchMedia("( max-width: 1024px )").matches){_eventClick(id);}
if('horizontal'==layout&&window.matchMedia("( min-width: 977px )").matches){$('.elementor-element-'+id+' div.hfe-has-submenu-container').next().css('position','absolute');}
if('expandible'==layout||'flyout'==layout){_toggleClick(id);}else if('vertical'==layout||'horizontal'==layout){if(window.matchMedia("( max-width: 767px )").matches&&($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-tablet')||$('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-mobile'))){_toggleClick(id);}else if(window.matchMedia("( max-width: 1024px )").matches&&$('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-tablet')){_toggleClick(id);}}
_borderClass(id);});$scope.find('.parent-has-child .hfe-has-submenu-container a').attr('aria-haspopup','true');$scope.find('.parent-has-child .hfe-has-submenu-container a').attr('aria-expanded','false');$scope.find('.hfe-nav-menu__toggle').attr('aria-haspopup','true');$scope.find('.hfe-nav-menu__toggle').attr('aria-expanded','false');$(document).trigger('hfe_nav_menu_init',id);$('.elementor-element-'+id+' div.hfe-has-submenu-container').on('keyup',function(e){var $this=$(this);if($this.parent().hasClass('menu-active')){$this.parent().removeClass('menu-active');$this.parent().next().find('ul').css({'visibility':'hidden','opacity':'0','height':'0'});$this.parent().prev().find('ul').css({'visibility':'hidden','opacity':'0','height':'0'});$this.parent().next().find('div.hfe-has-submenu-container').removeClass('sub-menu-active');$this.parent().prev().find('div.hfe-has-submenu-container').removeClass('sub-menu-active');}else{$this.parent().next().find('ul').css({'visibility':'hidden','opacity':'0','height':'0'});$this.parent().prev().find('ul').css({'visibility':'hidden','opacity':'0','height':'0'});$this.parent().next().find('div.hfe-has-submenu-container').removeClass('sub-menu-active');$this.parent().prev().find('div.hfe-has-submenu-container').removeClass('sub-menu-active');$this.parent().siblings().find('.hfe-has-submenu-container a').attr('aria-expanded','false');$this.parent().next().removeClass('menu-active');$this.parent().prev().removeClass('menu-active');event.preventDefault();$this.parent().addClass('menu-active');if('horizontal'!==layout){$this.addClass('sub-menu-active');}
$this.find('a').attr('aria-expanded','true');$this.next().css({'visibility':'visible','opacity':'1','height':'auto'});if('horizontal'!==layout){$this.next().css('position','relative');}else if('horizontal'===layout&&window.matchMedia("( max-width: 767px )").matches&&($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-tablet')||$('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-mobile'))){$this.next().css('position','relative');}else if('horizontal'===layout&&window.matchMedia("( max-width: 1024px )").matches){if($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-tablet')){$this.next().css('position','relative');}else if($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-mobile')||$('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-none')){$this.next().css('position','absolute');}}}});$('.elementor-element-'+id+' li.menu-item').on('keyup',function(e){var $this=$(this);$this.next().find('a').attr('aria-expanded','false');$this.prev().find('a').attr('aria-expanded','false');$this.next().find('ul').css({'visibility':'hidden','opacity':'0','height':'0'});$this.prev().find('ul').css({'visibility':'hidden','opacity':'0','height':'0'});$this.siblings().removeClass('menu-active');$this.next().find('div.hfe-has-submenu-container').removeClass('sub-menu-active');$this.prev().find('div.hfe-has-submenu-container').removeClass('sub-menu-active');});};function _handle_current_menu_item_class(layout_links){layout_links.each(function(){var $this=$(this);if($this.is('[href*="#"]')){var menu_item_parent=$this.parent();menu_item_parent.removeClass('current-menu-item current-menu-ancestor');$this.click(function(){var current_index=menu_item_parent.index(),parent_element=$this.closest('ul');parent_element.find('li').not(':eq('+current_index+')').removeClass('current-menu-item current-menu-ancestor');menu_item_parent.addClass('current-menu-item current-menu-ancestor');})}});}
function _openMenu(id){var flyout_content=$('#hfe-flyout-content-id-'+id);var layout=$('#hfe-flyout-content-id-'+id).data('layout');var layout_type=$('#hfe-flyout-content-id-'+id).data('flyout-type');var wrap_width=flyout_content.width()+'px';var container=$('.elementor-element-'+id+' .hfe-flyout-container .hfe-side.hfe-flyout-'+layout);$('.elementor-element-'+id+' .hfe-flyout-overlay').fadeIn(100);if('left'==layout){$('body').css('margin-left','0');container.css('left','0');if('push'==layout_type){$('body').addClass('hfe-flyout-animating').css({position:'absolute',width:'100%','margin-left':wrap_width,'margin-right':'auto'});}
container.addClass('hfe-flyout-show');}else{$('body').css('margin-right','0');container.css('right','0');if('push'==layout_type){$('body').addClass('hfe-flyout-animating').css({position:'absolute',width:'100%','margin-left':'-'+wrap_width,'margin-right':'auto',});}
container.addClass('hfe-flyout-show');}}
function _closeMenu(id){var flyout_content=$('#hfe-flyout-content-id-'+id);var layout=$('#hfe-flyout-content-id-'+id).data('layout');var wrap_width=flyout_content.width()+'px';var layout_type=$('#hfe-flyout-content-id-'+id).data('flyout-type');var container=$('.elementor-element-'+id+' .hfe-flyout-container .hfe-side.hfe-flyout-'+layout);$('.elementor-element-'+id+' .hfe-flyout-overlay').fadeOut(100);if('left'==layout){container.css('left','-'+wrap_width);if('push'==layout_type){$('body').css({position:'','margin-left':'','margin-right':'',});setTimeout(function(){$('body').removeClass('hfe-flyout-animating').css({width:'',});});}
container.removeClass('hfe-flyout-show');}else{container.css('right','-'+wrap_width);if('push'==layout_type){$('body').css({position:'','margin-right':'','margin-left':'',});setTimeout(function(){$('body').removeClass('hfe-flyout-animating').css({width:'',});});}
container.removeClass('hfe-flyout-show');}}
function _eventClick(id){var layout=$('.elementor-element-'+id+' .hfe-nav-menu').data('layout');$('.elementor-element-'+id+' div.hfe-has-submenu-container').off('click').on('click',function(event){var $this=$(this);if($('.elementor-element-'+id).hasClass('hfe-link-redirect-child')){if($this.hasClass('sub-menu-active')){if(!$this.next().hasClass('sub-menu-open')){$this.find('a').attr('aria-expanded','false');if('horizontal'!==layout){event.preventDefault();$this.next().css('position','relative');}else if('horizontal'===layout&&window.matchMedia("( max-width: 767px )").matches&&($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-tablet')||$('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-mobile'))){event.preventDefault();$this.next().css('position','relative');}else if('horizontal'===layout&&window.matchMedia("( max-width: 1024px )").matches&&($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-tablet')||$('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-mobile'))){event.preventDefault();$this.next().css('position','relative');}
$this.removeClass('sub-menu-active');$this.nextAll('.sub-menu').removeClass('sub-menu-open');$this.nextAll('.sub-menu').css({'visibility':'hidden','opacity':'0','height':'0'});$this.nextAll('.sub-menu').css({'transition':'none'});}else{$this.find('a').attr('aria-expanded','false');$this.removeClass('sub-menu-active');$this.nextAll('.sub-menu').removeClass('sub-menu-open');$this.nextAll('.sub-menu').css({'visibility':'hidden','opacity':'0','height':'0'});$this.nextAll('.sub-menu').css({'transition':'none'});if('horizontal'!==layout){$this.next().css('position','relative');}else if('horizontal'===layout&&window.matchMedia("( max-width: 767px )").matches&&($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-tablet')||$('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-mobile'))){$this.next().css('position','relative');}else if('horizontal'===layout&&window.matchMedia("( max-width: 1024px )").matches&&($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-tablet')||$('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-mobile'))){$this.next().css('position','absolute');}}}else{$this.find('a').attr('aria-expanded','true');if('horizontal'!==layout){event.preventDefault();$this.next().css('position','relative');}else if('horizontal'===layout&&window.matchMedia("( max-width: 767px )").matches&&($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-tablet')||$('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-mobile'))){event.preventDefault();$this.next().css('position','relative');}else if('horizontal'===layout&&window.matchMedia("( max-width: 1024px )").matches){event.preventDefault();if($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-tablet')){$this.next().css('position','relative');}else if($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-mobile')||$('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-none')){$this.next().css('position','absolute');}}
$this.addClass('sub-menu-active');$this.nextAll('.sub-menu').addClass('sub-menu-open');$this.nextAll('.sub-menu').css({'visibility':'visible','opacity':'1','height':'auto'});$this.nextAll('.sub-menu').css({'transition':'0.3s ease'});}}});$('.elementor-element-'+id+' .hfe-menu-toggle').off('click keyup').on('click keyup',function(event){var $this=$(this);if($this.parent().parent().hasClass('menu-active')){event.preventDefault();$this.parent().parent().removeClass('menu-active');$this.parent().parent().next().css({'visibility':'hidden','opacity':'0','height':'0'});if('horizontal'!==layout){$this.parent().parent().next().css('position','relative');}else if('horizontal'===layout&&window.matchMedia("( max-width: 767px )").matches&&($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-tablet')||$('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-mobile'))){$this.parent().parent().next().css('position','relative');}else if('horizontal'===layout&&window.matchMedia("( max-width: 1024px )").matches){if($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-tablet')){$this.parent().parent().next().css('position','relative');}else if($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-mobile')||$('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-none')){$this.parent().parent().next().css('position','absolute');}}}else{event.preventDefault();$this.parent().parent().addClass('menu-active');$this.parent().parent().next().css({'visibility':'visible','opacity':'1','height':'auto'});if('horizontal'!==layout){$this.parent().parent().next().css('position','relative');}else if('horizontal'===layout&&window.matchMedia("( max-width: 767px )").matches&&($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-tablet')||$('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-mobile'))){$this.parent().parent().next().css('position','relative');}else if('horizontal'===layout&&window.matchMedia("( max-width: 1024px )").matches){if($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-tablet')){$this.parent().parent().next().css('position','relative');}else if($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-mobile')||$('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-none')){$this.parent().parent().next().css('position','absolute');}}}});}
function _borderClass(id){var last_item=$('.elementor-element-'+id+' .hfe-nav-menu').data('last-item');var last_item_flyout=$('.elementor-element-'+id+' .hfe-flyout-wrapper').data('last-item');var layout=$('.elementor-element-'+id+' .hfe-nav-menu').data('layout');$('.elementor-element-'+id+' nav').removeClass('hfe-dropdown');if(window.matchMedia("( max-width: 767px )").matches){if($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-mobile')||$('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-tablet')){$('.elementor-element-'+id+' nav').addClass('hfe-dropdown');if(('cta'==last_item||'cta'==last_item_flyout)&&'expandible'!=layout){$('.elementor-element-'+id+' li.menu-item:last-child a.hfe-menu-item').parent().removeClass('elementor-button-wrapper');$('.elementor-element-'+id+' li.menu-item:last-child a.hfe-menu-item').removeClass('elementor-button');}}else{$('.elementor-element-'+id+' nav').removeClass('hfe-dropdown');if(('cta'==last_item||'cta'==last_item_flyout)&&'expandible'!=layout){$('.elementor-element-'+id+' li.menu-item:last-child a.hfe-menu-item').parent().addClass('elementor-button-wrapper');$('.elementor-element-'+id+' li.menu-item:last-child a.hfe-menu-item').addClass('elementor-button');}}}else if(window.matchMedia("( max-width: 1024px )").matches){if($('.elementor-element-'+id).hasClass('hfe-nav-menu__breakpoint-tablet')){$('.elementor-element-'+id+' nav').addClass('hfe-dropdown');if(('cta'==last_item||'cta'==last_item_flyout)&&'expandible'!=layout){$('.elementor-element-'+id+' li.menu-item:last-child a.hfe-menu-item').parent().removeClass('elementor-button-wrapper');$('.elementor-element-'+id+' li.menu-item:last-child a.hfe-menu-item').removeClass('elementor-button');}}else{$('.elementor-element-'+id+' nav').removeClass('hfe-dropdown');if(('cta'==last_item||'cta'==last_item_flyout)&&'expandible'!=layout){$('.elementor-element-'+id+' li.menu-item:last-child a.hfe-menu-item').parent().addClass('elementor-button-wrapper');$('.elementor-element-'+id+' li.menu-item:last-child a.hfe-menu-item').addClass('elementor-button');}}}else{var $parent_element=$('.elementor-element-'+id);$parent_element.find('nav').removeClass('hfe-dropdown');if(('cta'==last_item||'cta'==last_item_flyout)&&'expandible'!=layout){$parent_element.find('li.menu-item:last-child a.hfe-menu-item').parent().addClass('elementor-button-wrapper');$parent_element.find('li.menu-item:last-child a.hfe-menu-item').addClass('elementor-button');}}
var layout=$('.elementor-element-'+id+' .hfe-nav-menu').data('layout');if('expandible'==layout){if(('cta'==last_item||'cta'==last_item_flyout)&&'expandible'!=layout){$('.elementor-element-'+id+' li.menu-item:last-child a.hfe-menu-item').parent().removeClass('elementor-button-wrapper');$('.elementor-element-'+id+' li.menu-item:last-child a.hfe-menu-item').removeClass('elementor-button');}}}
function _toggleClick(id){if($('.elementor-element-'+id+' .hfe-nav-menu__toggle').hasClass('hfe-active-menu-full-width')){$('.elementor-element-'+id+' .hfe-nav-menu__toggle').next().css('left','0');var width=$('.elementor-element-'+id).closest('.elementor-section').outerWidth();var sec_pos=$('.elementor-element-'+id).closest('.elementor-section').offset().left-$('.elementor-element-'+id+' .hfe-nav-menu__toggle').next().offset().left;$('.elementor-element-'+id+' .hfe-nav-menu__toggle').next().css('width',width+'px');$('.elementor-element-'+id+' .hfe-nav-menu__toggle').next().css('left',sec_pos+'px');}
$('.elementor-element-'+id+' .hfe-nav-menu__toggle').off('click keyup').on('click keyup',function(event){var $this=$(this);var $selector=$this.next();if($this.hasClass('hfe-active-menu')){var layout=$('.elementor-element-'+id+' .hfe-nav-menu').data('layout');var full_width=$selector.data('full-width');var toggle_icon=$('.elementor-element-'+id+' nav').data('toggle-icon');$('.elementor-element-'+id).find('.hfe-nav-menu-icon').html(toggle_icon);$this.removeClass('hfe-active-menu');$this.attr('aria-expanded','false');if('yes'==full_width){$this.removeClass('hfe-active-menu-full-width');$selector.css('width','auto');$selector.css('left','0');$selector.css('z-index','0');}}else{var layout=$('.elementor-element-'+id+' .hfe-nav-menu').data('layout');var full_width=$selector.data('full-width');var close_icon=$('.elementor-element-'+id+' nav').data('close-icon');$('.elementor-element-'+id).find('.hfe-nav-menu-icon').html(close_icon);$this.addClass('hfe-active-menu');$this.attr('aria-expanded','true');if('yes'==full_width){$this.addClass('hfe-active-menu-full-width');var width=$('.elementor-element-'+id).closest('.elementor-section').outerWidth();var sec_pos=$('.elementor-element-'+id).closest('.elementor-section').offset().left-$selector.offset().left;$selector.css('width',width+'px');$selector.css('left',sec_pos+'px');$selector.css('z-index','9999');}}
if($('.elementor-element-'+id+' nav').hasClass('menu-is-active')){$('.elementor-element-'+id+' nav').removeClass('menu-is-active');}else{$('.elementor-element-'+id+' nav').addClass('menu-is-active');}});}
function _handleSinglePageMenu(id,layout){$('.elementor-element-'+id+' ul.hfe-nav-menu li a').on('click',function(){var $this=$(this);var link=$this.attr('href');var linkValue='';if(link.includes('#')){var index=link.indexOf('#');linkValue=link.slice(index+1);}
if(linkValue.length>0){if('expandible'==layout){$('.elementor-element-'+id+' .hfe-nav-menu__toggle').trigger("click");if($this.hasClass('hfe-sub-menu-item')){$('.elementor-element-'+id+' .hfe-menu-toggle').trigger("click");}}else{if(window.matchMedia('(max-width: 1024px)').matches&&('horizontal'==layout||'vertical'==layout)){$('.elementor-element-'+id+' .hfe-nav-menu__toggle').trigger("click");if($this.hasClass('hfe-sub-menu-item')){$('.elementor-element-'+id+' .hfe-menu-toggle').trigger("click");}}else{if($this.hasClass('hfe-sub-menu-item')){_closeMenu(id);$('.elementor-element-'+id+' .hfe-menu-toggle').trigger("click");}
_closeMenu(id);}}}});}
$(window).on('elementor/frontend/init',function(){elementorFrontend.hooks.addAction('frontend/element_ready/navigation-menu.default',WidgethfeNavMenuHandler);elementorFrontend.hooks.addAction('frontend/element_ready/hfe-search-button.default',WidgethfeSearchButton);});})(jQuery);
/*! elementor - v3.18.0 - 20-12-2023 */
(()=>{"use strict";var __webpack_modules__=({});var __webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(cachedModule!==undefined){return cachedModule.exports;}
var module=__webpack_module_cache__[moduleId]={exports:{}};__webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__);return module.exports;}
__webpack_require__.m=__webpack_modules__;(()=>{var deferred=[];__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(chunkIds){priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority];return;}
var notFulfilled=Infinity;for(var i=0;i<deferred.length;i++){var[chunkIds,fn,priority]=deferred[i];var fulfilled=true;for(var j=0;j<chunkIds.length;j++){if((priority&1===0||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key)=>(__webpack_require__.O[key](chunkIds[j])))){chunkIds.splice(j--,1);}else{fulfilled=false;if(priority<notFulfilled)notFulfilled=priority;}}
if(fulfilled){deferred.splice(i--,1)
var r=fn();if(r!==undefined)result=r;}}
return result;};})();(()=>{var getProto=Object.getPrototypeOf?(obj)=>(Object.getPrototypeOf(obj)):(obj)=>(obj.__proto__);var leafPrototypes;__webpack_require__.t=function(value,mode){if(mode&1)value=this(value);if(mode&8)return value;if(typeof value==='object'&&value){if((mode&4)&&value.__esModule)return value;if((mode&16)&&typeof value.then==='function')return value;}
var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=mode&2&&value;typeof current=='object'&&!~leafPrototypes.indexOf(current);current=getProto(current)){Object.getOwnPropertyNames(current).forEach((key)=>(def[key]=()=>(value[key])));}
def['default']=()=>(value);__webpack_require__.d(ns,def);return ns;};})();(()=>{__webpack_require__.d=(exports,definition)=>{for(var key in definition){if(__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)){Object.defineProperty(exports,key,{enumerable:true,get:definition[key]});}}};})();(()=>{__webpack_require__.f={};__webpack_require__.e=(chunkId)=>{return Promise.all(Object.keys(__webpack_require__.f).reduce((promises,key)=>{__webpack_require__.f[key](chunkId,promises);return promises;},[]));};})();(()=>{__webpack_require__.u=(chunkId)=>{if(chunkId==="lightbox")return""+chunkId+".755daee67033f198467b.bundle.js";if(chunkId==="text-path")return""+chunkId+".bfa8a1f6fcf6c803aaa9.bundle.js";if(chunkId==="accordion")return""+chunkId+".c16b88b2e8a0c50189bc.bundle.js";if(chunkId==="alert")return""+chunkId+".c3c6a3fdf4745bd26b7f.bundle.js";if(chunkId==="counter")return""+chunkId+".3f74a246dff765f39aea.bundle.js";if(chunkId==="progress")return""+chunkId+".553d43a5b3903206bedc.bundle.js";if(chunkId==="tabs")return"tabs.520bc2ed4560c561029e.bundle.js";if(chunkId==="toggle")return""+chunkId+".d79746a764407a0828ee.bundle.js";if(chunkId==="video")return""+chunkId+".bb330f394f46f2666bc1.bundle.js";if(chunkId==="image-carousel")return""+chunkId+".9399f19d95d7300cbc2e.bundle.js";if(chunkId==="text-editor")return""+chunkId+".2f2f7e0ea1e16387a004.bundle.js";if(chunkId==="wp-audio")return""+chunkId+".b8efdc046bc9df72a075.bundle.js";if(chunkId==="container")return""+chunkId+".dfea7c883442d5ae61c8.bundle.js";return undefined;};})();(()=>{__webpack_require__.g=(function(){if(typeof globalThis==='object')return globalThis;try{return this||new Function('return this')();}catch(e){if(typeof window==='object')return window;}})();})();(()=>{__webpack_require__.o=(obj,prop)=>(Object.prototype.hasOwnProperty.call(obj,prop))})();(()=>{var inProgress={};var dataWebpackPrefix="elementor:";__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url]){inProgress[url].push(done);return;}
var script,needAttach;if(key!==undefined){var scripts=document.getElementsByTagName("script");for(var i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")==dataWebpackPrefix+key){script=s;break;}}}
if(!script){needAttach=true;script=document.createElement('script');script.charset='utf-8';script.timeout=120;if(__webpack_require__.nc){script.setAttribute("nonce",__webpack_require__.nc);}
script.setAttribute("data-webpack",dataWebpackPrefix+key);script.src=url;}
inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null;clearTimeout(timeout);var doneFns=inProgress[url];delete inProgress[url];script.parentNode&&script.parentNode.removeChild(script);doneFns&&doneFns.forEach((fn)=>(fn(event)));if(prev)return prev(event);}
var timeout=setTimeout(onScriptComplete.bind(null,undefined,{type:'timeout',target:script}),120000);script.onerror=onScriptComplete.bind(null,script.onerror);script.onload=onScriptComplete.bind(null,script.onload);needAttach&&document.head.appendChild(script);};})();(()=>{__webpack_require__.r=(exports)=>{if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};})();(()=>{var scriptUrl;if(__webpack_require__.g.importScripts)scriptUrl=__webpack_require__.g.location+"";var document=__webpack_require__.g.document;if(!scriptUrl&&document){if(document.currentScript)
scriptUrl=document.currentScript.src;if(!scriptUrl){var scripts=document.getElementsByTagName("script");if(scripts.length){var i=scripts.length-1;while(i>-1&&!scriptUrl)scriptUrl=scripts[i--].src;}}}
if(!scriptUrl)throw new Error("Automatic publicPath is not supported in this browser");scriptUrl=scriptUrl.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/");__webpack_require__.p=scriptUrl;})();(()=>{var installedChunks={"webpack.runtime":0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:undefined;if(installedChunkData!==0){if(installedChunkData){promises.push(installedChunkData[2]);}else{if("webpack.runtime"!=chunkId){var promise=new Promise((resolve,reject)=>(installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId);var error=new Error();var loadingEnded=(event)=>{if(__webpack_require__.o(installedChunks,chunkId)){installedChunkData=installedChunks[chunkId];if(installedChunkData!==0)installedChunks[chunkId]=undefined;if(installedChunkData){var errorType=event&&(event.type==='load'?'missing':event.type);var realSrc=event&&event.target&&event.target.src;error.message='Loading chunk '+chunkId+' failed.\n('+errorType+': '+realSrc+')';error.name='ChunkLoadError';error.type=errorType;error.request=realSrc;installedChunkData[1](error);}}};__webpack_require__.l(url,loadingEnded,"chunk-"+chunkId,chunkId);}else installedChunks[chunkId]=0;}}};__webpack_require__.O.j=(chunkId)=>(installedChunks[chunkId]===0);var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var[chunkIds,moreModules,runtime]=data;var moduleId,chunkId,i=0;if(chunkIds.some((id)=>(installedChunks[id]!==0))){for(moduleId in moreModules){if(__webpack_require__.o(moreModules,moduleId)){__webpack_require__.m[moduleId]=moreModules[moduleId];}}
if(runtime)var result=runtime(__webpack_require__);}
if(parentChunkLoadingFunction)parentChunkLoadingFunction(data);for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]){installedChunks[chunkId][0]();}
installedChunks[chunkId]=0;}
return __webpack_require__.O(result);}
var chunkLoadingGlobal=self["webpackChunkelementor"]=self["webpackChunkelementor"]||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0));chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal));})();})();
/*! elementor - v3.18.0 - 20-12-2023 */
(self["webpackChunkelementor"]=self["webpackChunkelementor"]||[]).push([["frontend-modules"],{"../assets/dev/js/editor/utils/is-instanceof.js":
/*!******************************************************!*\
  !*** ../assets/dev/js/editor/utils/is-instanceof.js ***!
  \******************************************************/
((__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _default=(object,constructors)=>{constructors=Array.isArray(constructors)?constructors:[constructors];for(const constructor of constructors){if(object.constructor.name===constructor.prototype[Symbol.toStringTag]){return true;}}
return false;};exports["default"]=_default;}),"../assets/dev/js/frontend/document.js":
/*!*********************************************!*\
  !*** ../assets/dev/js/frontend/document.js ***!
  \*********************************************/
((__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{elements:'.elementor-element',nestedDocumentElements:'.elementor .elementor-element'},classes:{editMode:'elementor-edit-mode'}};}
getDefaultElements(){const selectors=this.getSettings('selectors');return{$elements:this.$element.find(selectors.elements).not(this.$element.find(selectors.nestedDocumentElements))};}
getDocumentSettings(setting){let elementSettings;if(this.isEdit){elementSettings={};const settings=elementor.settings.page.model;jQuery.each(settings.getActiveControls(),controlKey=>{elementSettings[controlKey]=settings.attributes[controlKey];});}else{elementSettings=this.$element.data('elementor-settings')||{};}
return this.getItems(elementSettings,setting);}
runElementsHandlers(){this.elements.$elements.each((index,element)=>setTimeout(()=>elementorFrontend.elementsHandler.runReadyTrigger(element)));}
onInit(){this.$element=this.getSettings('$element');super.onInit();this.isEdit=this.$element.hasClass(this.getSettings('classes.editMode'));if(this.isEdit){elementor.on('document:loaded',()=>{elementor.settings.page.model.on('change',this.onSettingsChange.bind(this));});}else{this.runElementsHandlers();}}
onSettingsChange(){}}
exports["default"]=_default;}),"../assets/dev/js/frontend/handlers/accessibility/nested-title-keyboard-handler.js":
/*!*****************************************************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/accessibility/nested-title-keyboard-handler.js ***!
  \*****************************************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _base=_interopRequireDefault(__webpack_require__(
/*! ../base */
"../assets/dev/js/frontend/handlers/base.js"));class NestedTitleKeyboardHandler extends _base.default{__construct(settings){super.__construct(settings);this.directionNext='next';this.directionPrevious='previous';this.focusableElementSelector='audio, button, canvas, details, iframe, input, select, summary, textarea, video, [accesskey], [contenteditable], [href], [tabindex]:not([tabindex="-1"])';}
getDefaultSettings(){return{selectors:{itemTitle:'.e-n-tab-title',itemContainer:'.e-n-tabs-content > .e-con'},ariaAttributes:{titleStateAttribute:'aria-selected',activeTitleSelector:'[aria-selected="true"]'},datasets:{titleIndex:'data-tab-index'},keyDirection:{ArrowLeft:elementorFrontendConfig.is_rtl?this.directionNext:this.directionPrevious,ArrowUp:this.directionPrevious,ArrowRight:elementorFrontendConfig.is_rtl?this.directionPrevious:this.directionNext,ArrowDown:this.directionNext}};}
getDefaultElements(){const selectors=this.getSettings('selectors');return{$itemTitles:this.findElement(selectors.itemTitle),$itemContainers:this.findElement(selectors.itemContainer),$focusableContainerElements:this.getFocusableElements(this.findElement(selectors.itemContainer))};}
getFocusableElements($elements){return $elements.find(this.focusableElementSelector).not('[disabled], [inert]');}
getKeyDirectionValue(event){const direction=this.getSettings('keyDirection')[event.key];return this.directionNext===direction?1:-1;}
getTitleIndex(itemTitleElement){const{titleIndex:indexAttribute}=this.getSettings('datasets');return itemTitleElement.getAttribute(indexAttribute);}
getTitleFilterSelector(titleIndex){const{titleIndex:indexAttribute}=this.getSettings('datasets');return`[${indexAttribute}="${titleIndex}"]`;}
getActiveTitleElement(){const activeTitleFilter=this.getSettings('ariaAttributes').activeTitleSelector;return this.elements.$itemTitles.filter(activeTitleFilter);}
onInit(){super.onInit(...arguments);}
bindEvents(){this.elements.$itemTitles.on(this.getTitleEvents());this.elements.$focusableContainerElements.on(this.getContentElementEvents());}
unbindEvents(){this.elements.$itemTitles.off();this.elements.$itemContainers.children().off();}
getTitleEvents(){return{keydown:this.handleTitleKeyboardNavigation.bind(this)};}
getContentElementEvents(){return{keydown:this.handleContentElementKeyboardNavigation.bind(this)};}
isDirectionKey(event){const directionKeys=['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'];return directionKeys.includes(event.key);}
isActivationKey(event){const activationKeys=['Enter',' '];return activationKeys.includes(event.key);}
handleTitleKeyboardNavigation(event){if(this.isDirectionKey(event)){event.preventDefault();const currentTitleIndex=parseInt(this.getTitleIndex(event.currentTarget))||1,numberOfTitles=this.elements.$itemTitles.length,titleIndexUpdated=this.getTitleIndexFocusUpdated(event,currentTitleIndex,numberOfTitles);this.changeTitleFocus(titleIndexUpdated);event.stopPropagation();}else if(this.isActivationKey(event)){event.preventDefault();if(this.handeTitleLinkEnterOrSpaceEvent(event)){return;}
const titleIndex=this.getTitleIndex(event.currentTarget);elementorFrontend.elements.$window.trigger('elementor/nested-elements/activate-by-keyboard',{widgetId:this.getID(),titleIndex});}else if('Escape'===event.key){this.handleTitleEscapeKeyEvents(event);}}
handeTitleLinkEnterOrSpaceEvent(event){const isLinkElement='a'===event?.currentTarget?.tagName?.toLowerCase();if(!elementorFrontend.isEditMode()&&isLinkElement){event?.currentTarget?.click();event.stopPropagation();}
return isLinkElement;}
getTitleIndexFocusUpdated(event,currentTitleIndex,numberOfTitles){let titleIndexUpdated=0;switch(event.key){case'Home':titleIndexUpdated=1;break;case'End':titleIndexUpdated=numberOfTitles;break;default:const directionValue=this.getKeyDirectionValue(event),isEndReached=numberOfTitles<currentTitleIndex+directionValue,isStartReached=0===currentTitleIndex+directionValue;if(isEndReached){titleIndexUpdated=1;}else if(isStartReached){titleIndexUpdated=numberOfTitles;}else{titleIndexUpdated=currentTitleIndex+directionValue;}}
return titleIndexUpdated;}
changeTitleFocus(titleIndexUpdated){const $newTitle=this.elements.$itemTitles.filter(this.getTitleFilterSelector(titleIndexUpdated));this.setTitleTabindex(titleIndexUpdated);$newTitle.trigger('focus');}
setTitleTabindex(titleIndex){this.elements.$itemTitles.attr('tabindex','-1');const $newTitle=this.elements.$itemTitles.filter(this.getTitleFilterSelector(titleIndex));$newTitle.attr('tabindex','0');}
handleTitleEscapeKeyEvents(){}
handleContentElementKeyboardNavigation(event){if('Tab'===event.key&&!event.shiftKey){this.handleContentElementTabEvents(event);}else if('Escape'===event.key){event.preventDefault();event.stopPropagation();this.handleContentElementEscapeEvents(event);}}
handleContentElementEscapeEvents(){this.getActiveTitleElement().trigger('focus');}
handleContentElementTabEvents(){}}
exports["default"]=NestedTitleKeyboardHandler;}),"../assets/dev/js/frontend/handlers/base-carousel.js":
/*!***********************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/base-carousel.js ***!
  \***********************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _baseSwiper=_interopRequireDefault(__webpack_require__(
/*! ./base-swiper */
"../assets/dev/js/frontend/handlers/base-swiper.js"));class CarouselHandlerBase extends _baseSwiper.default{getDefaultSettings(){return{selectors:{carousel:`.${elementorFrontend.config.swiperClass}`,swiperWrapper:'.swiper-wrapper',slideContent:'.swiper-slide',swiperArrow:'.elementor-swiper-button',paginationWrapper:'.swiper-pagination',paginationBullet:'.swiper-pagination-bullet',paginationBulletWrapper:'.swiper-pagination-bullets'}};}
getDefaultElements(){const selectors=this.getSettings('selectors'),elements={$swiperContainer:this.$element.find(selectors.carousel),$swiperWrapper:this.$element.find(selectors.swiperWrapper),$swiperArrows:this.$element.find(selectors.swiperArrow),$paginationWrapper:this.$element.find(selectors.paginationWrapper),$paginationBullets:this.$element.find(selectors.paginationBullet),$paginationBulletWrapper:this.$element.find(selectors.paginationBulletWrapper)};elements.$slides=elements.$swiperContainer.find(selectors.slideContent);return elements;}
getSwiperSettings(){const elementSettings=this.getElementSettings(),slidesToShow=+elementSettings.slides_to_show||3,isSingleSlide=1===slidesToShow,elementorBreakpoints=elementorFrontend.config.responsive.activeBreakpoints,defaultSlidesToShowMap={mobile:1,tablet:isSingleSlide?1:2};const swiperOptions={slidesPerView:slidesToShow,loop:'yes'===elementSettings.infinite,speed:elementSettings.speed,handleElementorBreakpoints:true};swiperOptions.breakpoints={};let lastBreakpointSlidesToShowValue=slidesToShow;Object.keys(elementorBreakpoints).reverse().forEach(breakpointName=>{const defaultSlidesToShow=defaultSlidesToShowMap[breakpointName]?defaultSlidesToShowMap[breakpointName]:lastBreakpointSlidesToShowValue;swiperOptions.breakpoints[elementorBreakpoints[breakpointName].value]={slidesPerView:+elementSettings['slides_to_show_'+breakpointName]||defaultSlidesToShow,slidesPerGroup:+elementSettings['slides_to_scroll_'+breakpointName]||1};if(elementSettings.image_spacing_custom){swiperOptions.breakpoints[elementorBreakpoints[breakpointName].value].spaceBetween=this.getSpaceBetween(breakpointName);}
lastBreakpointSlidesToShowValue=+elementSettings['slides_to_show_'+breakpointName]||defaultSlidesToShow;});if('yes'===elementSettings.autoplay){swiperOptions.autoplay={delay:elementSettings.autoplay_speed,disableOnInteraction:'yes'===elementSettings.pause_on_interaction};}
if(isSingleSlide){swiperOptions.effect=elementSettings.effect;if('fade'===elementSettings.effect){swiperOptions.fadeEffect={crossFade:true};}}else{swiperOptions.slidesPerGroup=+elementSettings.slides_to_scroll||1;}
if(elementSettings.image_spacing_custom){swiperOptions.spaceBetween=this.getSpaceBetween();}
const showArrows='arrows'===elementSettings.navigation||'both'===elementSettings.navigation,showPagination='dots'===elementSettings.navigation||'both'===elementSettings.navigation||elementSettings.pagination;if(showArrows){swiperOptions.navigation={prevEl:'.elementor-swiper-button-prev',nextEl:'.elementor-swiper-button-next'};}
if(showPagination){swiperOptions.pagination={el:`.elementor-element-${this.getID()} .swiper-pagination`,type:!!elementSettings.pagination?elementSettings.pagination:'bullets',clickable:true,renderBullet:(index,classname)=>{return`<span class="${classname}" data-bullet-index="${index}" aria-label="${elementorFrontend.config.i18n.a11yCarouselPaginationBulletMessage} ${index + 1}"></span>`;}};}
if('yes'===elementSettings.lazyload){swiperOptions.lazy={loadPrevNext:true,loadPrevNextAmount:1};}
swiperOptions.a11y={enabled:true,prevSlideMessage:elementorFrontend.config.i18n.a11yCarouselPrevSlideMessage,nextSlideMessage:elementorFrontend.config.i18n.a11yCarouselNextSlideMessage,firstSlideMessage:elementorFrontend.config.i18n.a11yCarouselFirstSlideMessage,lastSlideMessage:elementorFrontend.config.i18n.a11yCarouselLastSlideMessage};swiperOptions.on={slideChangeTransitionEnd:()=>{this.a11ySetSlideAriaHidden();},slideChange:()=>{this.a11ySetPaginationTabindex();this.handleElementHandlers();},init:()=>{this.a11ySetWidgetAriaDetails();this.a11ySetPaginationTabindex();this.a11ySetSlideAriaHidden('initialisation');}};this.applyOffsetSettings(elementSettings,swiperOptions,slidesToShow);return swiperOptions;}
getOffsetWidth(){const currentDevice=elementorFrontend.getCurrentDeviceMode();return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),'offset_width','size',currentDevice)||0;}
applyOffsetSettings(elementSettings,swiperOptions,slidesToShow){const offsetSide=elementSettings.offset_sides,isNestedCarouselInEditMode=elementorFrontend.isEditMode()&&'NestedCarousel'===this.constructor.name;if(isNestedCarouselInEditMode||!offsetSide||'none'===offsetSide){return;}
const offset=this.getOffsetWidth();switch(offsetSide){case'right':this.forceSliderToShowNextSlideWhenOnLast(swiperOptions,slidesToShow);this.addClassToSwiperContainer('offset-right');break;case'left':this.addClassToSwiperContainer('offset-left');break;case'both':this.forceSliderToShowNextSlideWhenOnLast(swiperOptions,slidesToShow);this.addClassToSwiperContainer('offset-both');break;}}
forceSliderToShowNextSlideWhenOnLast(swiperOptions,slidesToShow){swiperOptions.slidesPerView=slidesToShow+0.001;}
addClassToSwiperContainer(className){this.getDefaultElements().$swiperContainer[0].classList.add(className);}
async onInit(){super.onInit(...arguments);if(!this.elements.$swiperContainer.length||2>this.elements.$slides.length){return;}
const Swiper=elementorFrontend.utils.swiper;this.swiper=await new Swiper(this.elements.$swiperContainer,this.getSwiperSettings());this.elements.$swiperContainer.data('swiper',this.swiper);const elementSettings=this.getElementSettings();if('yes'===elementSettings.pause_on_hover){this.togglePauseOnHover(true);}}
bindEvents(){this.elements.$swiperArrows.on('keydown',this.onDirectionArrowKeydown.bind(this));this.elements.$paginationWrapper.on('keydown','.swiper-pagination-bullet',this.onDirectionArrowKeydown.bind(this));this.elements.$swiperContainer.on('keydown','.swiper-slide',this.onDirectionArrowKeydown.bind(this));this.$element.find(':focusable').on('focus',this.onFocusDisableAutoplay.bind(this));elementorFrontend.elements.$window.on('resize',this.getSwiperSettings.bind(this));}
unbindEvents(){this.elements.$swiperArrows.off();this.elements.$paginationWrapper.off();this.elements.$swiperContainer.off();this.$element.find(':focusable').off();elementorFrontend.elements.$window.off('resize');}
onDirectionArrowKeydown(event){const isRTL=elementorFrontend.config.is_rtl,inlineDirectionArrows=['ArrowLeft','ArrowRight'],currentKeydown=event.originalEvent.code,isDirectionInlineKeydown=-1!==inlineDirectionArrows.indexOf(currentKeydown),directionStart=isRTL?'ArrowRight':'ArrowLeft',directionEnd=isRTL?'ArrowLeft':'ArrowRight';if(!isDirectionInlineKeydown){return true;}else if(directionStart===currentKeydown){this.swiper.slidePrev();}else if(directionEnd===currentKeydown){this.swiper.slideNext();}}
onFocusDisableAutoplay(){this.swiper.autoplay.stop();}
updateSwiperOption(propertyName){const elementSettings=this.getElementSettings(),newSettingValue=elementSettings[propertyName],params=this.swiper.params;switch(propertyName){case'autoplay_speed':params.autoplay.delay=newSettingValue;break;case'speed':params.speed=newSettingValue;break;}
this.swiper.update();}
getChangeableProperties(){return{pause_on_hover:'pauseOnHover',autoplay_speed:'delay',speed:'speed',arrows_position:'arrows_position'};}
onElementChange(propertyName){if(0===propertyName.indexOf('image_spacing_custom')){this.updateSpaceBetween(propertyName);return;}
const changeableProperties=this.getChangeableProperties();if(changeableProperties[propertyName]){if('pause_on_hover'===propertyName){const newSettingValue=this.getElementSettings('pause_on_hover');this.togglePauseOnHover('yes'===newSettingValue);}else{this.updateSwiperOption(propertyName);}}}
onEditSettingsChange(propertyName){if('activeItemIndex'===propertyName){this.swiper.slideToLoop(this.getEditSettings('activeItemIndex')-1);}}
getSpaceBetween(){let device=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),'image_spacing_custom','size',device)||0;}
updateSpaceBetween(propertyName){const deviceMatch=propertyName.match('image_spacing_custom_(.*)'),device=deviceMatch?deviceMatch[1]:'desktop',newSpaceBetween=this.getSpaceBetween(device);if('desktop'!==device){this.swiper.params.breakpoints[elementorFrontend.config.responsive.activeBreakpoints[device].value].spaceBetween=newSpaceBetween;}
this.swiper.params.spaceBetween=newSpaceBetween;this.swiper.update();}
getPaginationBullets(){let type=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'array';const paginationBullets=this.$element.find(this.getSettings('selectors').paginationBullet);return'array'===type?Array.from(paginationBullets):paginationBullets;}
a11ySetWidgetAriaDetails(){const $widget=this.$element;$widget.attr('aria-roledescription','carousel');$widget.attr('aria-label',elementorFrontend.config.i18n.a11yCarouselWrapperAriaLabel);}
a11ySetPaginationTabindex(){const bulletClass=this.swiper?.params.pagination.bulletClass,activeBulletClass=this.swiper?.params.pagination.bulletActiveClass;this.getPaginationBullets().forEach(bullet=>{if(!bullet.classList?.contains(activeBulletClass)){bullet.removeAttribute('tabindex');}});const isDirectionInlineArrowKey='ArrowLeft'===event?.code||'ArrowRight'===event?.code;if(event?.target?.classList?.contains(bulletClass)&&isDirectionInlineArrowKey){this.$element.find(`.${activeBulletClass}`).trigger('focus');}}
getSwiperWrapperTranformXValue(){let transformValue=this.elements.$swiperWrapper[0]?.style.transform;transformValue=transformValue.replace('translate3d(','');transformValue=transformValue.split(',');transformValue=parseInt(transformValue[0].replace('px',''));return!!transformValue?transformValue:0;}
a11ySetSlideAriaHidden(){let status=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';const currentIndex='initialisation'===status?0:this.swiper?.activeIndex;if('number'!==typeof currentIndex){return;}
const swiperWrapperTransformXValue=this.getSwiperWrapperTranformXValue(),swiperWrapperWidth=this.elements.$swiperWrapper[0].clientWidth,$slides=this.elements.$swiperContainer.find(this.getSettings('selectors').slideContent);$slides.each((index,slide)=>{const isSlideInsideWrapper=0<=slide.offsetLeft+swiperWrapperTransformXValue&&swiperWrapperWidth>slide.offsetLeft+swiperWrapperTransformXValue;if(!isSlideInsideWrapper){slide.setAttribute('aria-hidden',true);slide.setAttribute('inert','');}else{slide.removeAttribute('aria-hidden');slide.removeAttribute('inert');}});}
handleElementHandlers(){}}
exports["default"]=CarouselHandlerBase;}),"../assets/dev/js/frontend/handlers/base-swiper.js":
/*!*********************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/base-swiper.js ***!
  \*********************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _base=_interopRequireDefault(__webpack_require__(
/*! ./base */
"../assets/dev/js/frontend/handlers/base.js"));class SwiperHandlerBase extends _base.default{getInitialSlide(){const editSettings=this.getEditSettings();return editSettings.activeItemIndex?editSettings.activeItemIndex-1:0;}
getSlidesCount(){return this.elements.$slides.length;}
togglePauseOnHover(toggleOn){if(toggleOn){this.elements.$swiperContainer.on({mouseenter:()=>{this.swiper.autoplay.stop();},mouseleave:()=>{this.swiper.autoplay.start();}});}else{this.elements.$swiperContainer.off('mouseenter mouseleave');}}
handleKenBurns(){const settings=this.getSettings();if(this.$activeImageBg){this.$activeImageBg.removeClass(settings.classes.kenBurnsActive);}
this.activeItemIndex=this.swiper?this.swiper.activeIndex:this.getInitialSlide();if(this.swiper){this.$activeImageBg=jQuery(this.swiper.slides[this.activeItemIndex]).children('.'+settings.classes.slideBackground);}else{this.$activeImageBg=jQuery(this.elements.$slides[0]).children('.'+settings.classes.slideBackground);}
this.$activeImageBg.addClass(settings.classes.kenBurnsActive);}}
exports["default"]=SwiperHandlerBase;}),"../assets/dev/js/frontend/handlers/base.js":
/*!**************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/base.js ***!
  \**************************************************/
((module)=>{"use strict";module.exports=elementorModules.ViewModule.extend({$element:null,editorListeners:null,onElementChange:null,onEditSettingsChange:null,onPageSettingsChange:null,isEdit:null,__construct(settings){if(!this.isActive(settings)){return;}
this.$element=settings.$element;this.isEdit=this.$element.hasClass('elementor-element-edit-mode');if(this.isEdit){this.addEditorListeners();}},isActive(){return true;},isElementInTheCurrentDocument(){if(!elementorFrontend.isEditMode()){return false;}
return elementor.documents.currentDocument.id.toString()===this.$element[0].closest('.elementor').dataset.elementorId;},findElement(selector){var $mainElement=this.$element;return $mainElement.find(selector).filter(function(){return jQuery(this).parent().closest('.elementor-element').is($mainElement);});},getUniqueHandlerID(cid,$element){if(!cid){cid=this.getModelCID();}
if(!$element){$element=this.$element;}
return cid+$element.attr('data-element_type')+this.getConstructorID();},initEditorListeners(){var self=this;self.editorListeners=[{event:'element:destroy',to:elementor.channels.data,callback(removedModel){if(removedModel.cid!==self.getModelCID()){return;}
self.onDestroy();}}];if(self.onElementChange){const elementType=self.getWidgetType()||self.getElementType();let eventName='change';if('global'!==elementType){eventName+=':'+elementType;}
self.editorListeners.push({event:eventName,to:elementor.channels.editor,callback(controlView,elementView){var elementViewHandlerID=self.getUniqueHandlerID(elementView.model.cid,elementView.$el);if(elementViewHandlerID!==self.getUniqueHandlerID()){return;}
self.onElementChange(controlView.model.get('name'),controlView,elementView);}});}
if(self.onEditSettingsChange){self.editorListeners.push({event:'change:editSettings',to:elementor.channels.editor,callback(changedModel,view){if(view.model.cid!==self.getModelCID()){return;}
const propName=Object.keys(changedModel.changed)[0];self.onEditSettingsChange(propName,changedModel.changed[propName]);}});}
['page'].forEach(function(settingsType){var listenerMethodName='on'+settingsType[0].toUpperCase()+settingsType.slice(1)+'SettingsChange';if(self[listenerMethodName]){self.editorListeners.push({event:'change',to:elementor.settings[settingsType].model,callback(model){self[listenerMethodName](model.changed);}});}});},getEditorListeners(){if(!this.editorListeners){this.initEditorListeners();}
return this.editorListeners;},addEditorListeners(){var uniqueHandlerID=this.getUniqueHandlerID();this.getEditorListeners().forEach(function(listener){elementorFrontend.addListenerOnce(uniqueHandlerID,listener.event,listener.callback,listener.to);});},removeEditorListeners(){var uniqueHandlerID=this.getUniqueHandlerID();this.getEditorListeners().forEach(function(listener){elementorFrontend.removeListeners(uniqueHandlerID,listener.event,null,listener.to);});},getElementType(){return this.$element.data('element_type');},getWidgetType(){const widgetType=this.$element.data('widget_type');if(!widgetType){return;}
return widgetType.split('.')[0];},getID(){return this.$element.data('id');},getModelCID(){return this.$element.data('model-cid');},getElementSettings(setting){let elementSettings={};const modelCID=this.getModelCID();if(this.isEdit&&modelCID){const settings=elementorFrontend.config.elements.data[modelCID],attributes=settings.attributes;let type=attributes.widgetType||attributes.elType;if(attributes.isInner){type='inner-'+type;}
let settingsKeys=elementorFrontend.config.elements.keys[type];if(!settingsKeys){settingsKeys=elementorFrontend.config.elements.keys[type]=[];jQuery.each(settings.controls,(name,control)=>{if(control.frontend_available){settingsKeys.push(name);}});}
jQuery.each(settings.getActiveControls(),function(controlKey){if(-1!==settingsKeys.indexOf(controlKey)){let value=attributes[controlKey];if(value.toJSON){value=value.toJSON();}
elementSettings[controlKey]=value;}});}else{elementSettings=this.$element.data('settings')||{};}
return this.getItems(elementSettings,setting);},getEditSettings(setting){var attributes={};if(this.isEdit){attributes=elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes;}
return this.getItems(attributes,setting);},getCurrentDeviceSetting(settingKey){return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(),settingKey);},onInit(){if(this.isActive(this.getSettings())){elementorModules.ViewModule.prototype.onInit.apply(this,arguments);}},onDestroy(){if(this.isEdit){this.removeEditorListeners();}
if(this.unbindEvents){this.unbindEvents();}}});}),"../assets/dev/js/frontend/handlers/stretched-element.js":
/*!***************************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/stretched-element.js ***!
  \***************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _base=_interopRequireDefault(__webpack_require__(
/*! ./base */
"../assets/dev/js/frontend/handlers/base.js"));class StretchedElement extends _base.default{getStretchedClass(){return'e-stretched';}
getStretchSettingName(){return'stretch_element';}
getStretchActiveValue(){return'yes';}
bindEvents(){const handlerID=this.getUniqueHandlerID();elementorFrontend.addListenerOnce(handlerID,'resize',this.stretch);elementorFrontend.addListenerOnce(handlerID,'sticky:stick',this.stretch,this.$element);elementorFrontend.addListenerOnce(handlerID,'sticky:unstick',this.stretch,this.$element);if(elementorFrontend.isEditMode()){this.onKitChangeStretchContainerChange=this.onKitChangeStretchContainerChange.bind(this);elementor.channels.editor.on('kit:change:stretchContainer',this.onKitChangeStretchContainerChange);}}
unbindEvents(){elementorFrontend.removeListeners(this.getUniqueHandlerID(),'resize',this.stretch);if(elementorFrontend.isEditMode()){elementor.channels.editor.off('kit:change:stretchContainer',this.onKitChangeStretchContainerChange);}}
isActive(settings){return elementorFrontend.isEditMode()||settings.$element.hasClass(this.getStretchedClass());}
getStretchElementForConfig(){let childSelector=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(childSelector){return this.$element.find(childSelector);}
return this.$element;}
getStretchElementConfig(){return{element:this.getStretchElementForConfig(),selectors:{container:this.getStretchContainer()},considerScrollbar:elementorFrontend.isEditMode()&&elementorFrontend.config.is_rtl};}
initStretch(){this.stretch=this.stretch.bind(this);this.stretchElement=new elementorModules.frontend.tools.StretchElement(this.getStretchElementConfig());}
getStretchContainer(){return elementorFrontend.getKitSettings('stretched_section_container')||window;}
isStretchSettingEnabled(){return this.getElementSettings(this.getStretchSettingName())===this.getStretchActiveValue();}
stretch(){if(!this.isStretchSettingEnabled()){return;}
this.stretchElement.stretch();}
onInit(){if(!this.isActive(this.getSettings())){return;}
this.initStretch();super.onInit(...arguments);this.stretch();}
onElementChange(propertyName){const stretchSettingName=this.getStretchSettingName();if(stretchSettingName===propertyName){if(this.isStretchSettingEnabled()){this.stretch();}else{this.stretchElement.reset();}}}
onKitChangeStretchContainerChange(){this.stretchElement.setSettings('selectors.container',this.getStretchContainer());this.stretch();}}
exports["default"]=StretchedElement;}),"../assets/dev/js/frontend/modules.js":
/*!********************************************!*\
  !*** ../assets/dev/js/frontend/modules.js ***!
  \********************************************/
((__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _modules=_interopRequireDefault(__webpack_require__(
/*! ../modules/modules */
"../assets/dev/js/modules/modules.js"));var _document=_interopRequireDefault(__webpack_require__(
/*! ./document */
"../assets/dev/js/frontend/document.js"));var _stretchElement=_interopRequireDefault(__webpack_require__(
/*! ./tools/stretch-element */
"../assets/dev/js/frontend/tools/stretch-element.js"));var _stretchedElement=_interopRequireDefault(__webpack_require__(
/*! ./handlers/stretched-element */
"../assets/dev/js/frontend/handlers/stretched-element.js"));var _base=_interopRequireDefault(__webpack_require__(
/*! ./handlers/base */
"../assets/dev/js/frontend/handlers/base.js"));var _baseSwiper=_interopRequireDefault(__webpack_require__(
/*! ./handlers/base-swiper */
"../assets/dev/js/frontend/handlers/base-swiper.js"));var _baseCarousel=_interopRequireDefault(__webpack_require__(
/*! ./handlers/base-carousel */
"../assets/dev/js/frontend/handlers/base-carousel.js"));var _nestedTabs=_interopRequireDefault(__webpack_require__(
/*! elementor/modules/nested-tabs/assets/js/frontend/handlers/nested-tabs */
"../modules/nested-tabs/assets/js/frontend/handlers/nested-tabs.js"));var _nestedAccordion=_interopRequireDefault(__webpack_require__(
/*! elementor/modules/nested-accordion/assets/js/frontend/handlers/nested-accordion */
"../modules/nested-accordion/assets/js/frontend/handlers/nested-accordion.js"));var _nestedTitleKeyboardHandler=_interopRequireDefault(__webpack_require__(
/*! ./handlers/accessibility/nested-title-keyboard-handler */
"../assets/dev/js/frontend/handlers/accessibility/nested-title-keyboard-handler.js"));_modules.default.frontend={Document:_document.default,tools:{StretchElement:_stretchElement.default},handlers:{Base:_base.default,StretchedElement:_stretchedElement.default,SwiperBase:_baseSwiper.default,CarouselBase:_baseCarousel.default,NestedTabs:_nestedTabs.default,NestedAccordion:_nestedAccordion.default,NestedTitleKeyboardHandler:_nestedTitleKeyboardHandler.default}};}),"../assets/dev/js/frontend/tools/stretch-element.js":
/*!**********************************************************!*\
  !*** ../assets/dev/js/frontend/tools/stretch-element.js ***!
  \**********************************************************/
((module)=>{"use strict";module.exports=elementorModules.ViewModule.extend({getDefaultSettings(){return{element:null,direction:elementorFrontend.config.is_rtl?'right':'left',selectors:{container:window},considerScrollbar:false,cssOutput:'inline'};},getDefaultElements(){return{$element:jQuery(this.getSettings('element'))};},stretch(){const settings=this.getSettings();let $container;try{$container=jQuery(settings.selectors.container);}catch(e){}
if(!$container||!$container.length){$container=jQuery(this.getDefaultSettings().selectors.container);}
this.reset();var $element=this.elements.$element,containerWidth=$container.innerWidth(),elementOffset=$element.offset().left,isFixed='fixed'===$element.css('position'),correctOffset=isFixed?0:elementOffset,isContainerFullScreen=window===$container[0];if(!isContainerFullScreen){var containerOffset=$container.offset().left;if(isFixed){correctOffset=containerOffset;}
if(elementOffset>containerOffset){correctOffset=elementOffset-containerOffset;}}
if(settings.considerScrollbar&&isContainerFullScreen){const scrollbarWidth=window.innerWidth-containerWidth;correctOffset-=scrollbarWidth;}
if(!isFixed){if(elementorFrontend.config.is_rtl){correctOffset=containerWidth-($element.outerWidth()+correctOffset);}
correctOffset=-correctOffset;}
if(settings.margin){correctOffset+=settings.margin;}
var css={};let width=containerWidth;if(settings.margin){width-=settings.margin*2;}
css.width=width+'px';css[settings.direction]=correctOffset+'px';if('variables'===settings.cssOutput){this.applyCssVariables($element,css);return;}
$element.css(css);},reset(){const css={},settings=this.getSettings(),$element=this.elements.$element;if('variables'===settings.cssOutput){this.resetCssVariables($element);return;}
css.width='';css[settings.direction]='';$element.css(css);},applyCssVariables($element,css){$element.css('--stretch-width',css.width);if(!!css.left){$element.css('--stretch-left',css.left);}else{$element.css('--stretch-right',css.right);}},resetCssVariables($element){$element.css({'--stretch-width':'','--stretch-left':'','--stretch-right':''});}});}),"../assets/dev/js/frontend/utils/flex-horizontal-scroll.js":
/*!*****************************************************************!*\
  !*** ../assets/dev/js/frontend/utils/flex-horizontal-scroll.js ***!
  \*****************************************************************/
((__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",({value:true}));exports.changeScrollStatus=changeScrollStatus;exports.setHorizontalScrollAlignment=setHorizontalScrollAlignment;exports.setHorizontalTitleScrollValues=setHorizontalTitleScrollValues;function changeScrollStatus(element,event){if('mousedown'===event.type){element.classList.add('e-scroll');element.dataset.pageX=event.pageX;}else{element.classList.remove('e-scroll','e-scroll-active');element.dataset.pageX='';}}
function setHorizontalTitleScrollValues(element,horizontalScrollStatus,event){const isActiveScroll=element.classList.contains('e-scroll'),isHorizontalScrollActive='enable'===horizontalScrollStatus,headingContentIsWiderThanWrapper=element.scrollWidth>element.clientWidth;if(!isActiveScroll||!isHorizontalScrollActive||!headingContentIsWiderThanWrapper){return;}
event.preventDefault();const previousPositionX=parseFloat(element.dataset.pageX),mouseMoveX=event.pageX-previousPositionX,maximumScrollValue=5,stepLimit=20;let toScrollDistanceX=0;if(stepLimit<mouseMoveX){toScrollDistanceX=maximumScrollValue;}else if(stepLimit*-1>mouseMoveX){toScrollDistanceX=-1*maximumScrollValue;}else{toScrollDistanceX=mouseMoveX;}
element.scrollLeft=element.scrollLeft-toScrollDistanceX;element.classList.add('e-scroll-active');}
function setHorizontalScrollAlignment(_ref){let{element,direction,justifyCSSVariable,horizontalScrollStatus}=_ref;if(!element){return;}
if(isHorizontalScroll(element,horizontalScrollStatus)){initialScrollPosition(element,direction,justifyCSSVariable);}else{element.style.setProperty(justifyCSSVariable,'');}}
function isHorizontalScroll(element,horizontalScrollStatus){return element.clientWidth<getChildrenWidth(element.children)&&'enable'===horizontalScrollStatus;}
function getChildrenWidth(children){let totalWidth=0;const parentContainer=children[0].parentNode,computedStyles=getComputedStyle(parentContainer),gap=parseFloat(computedStyles.gap)||0;for(let i=0;i<children.length;i++){totalWidth+=children[i].offsetWidth+gap;}
return totalWidth;}
function initialScrollPosition(element,direction,justifyCSSVariable){const isRTL=elementorFrontend.config.is_rtl;switch(direction){case'end':element.style.setProperty(justifyCSSVariable,'start');element.scrollLeft=isRTL?-1*getChildrenWidth(element.children):getChildrenWidth(element.children);break;default:element.style.setProperty(justifyCSSVariable,'start');element.scrollLeft=0;}}}),"../assets/dev/js/modules/imports/args-object.js":
/*!*******************************************************!*\
  !*** ../assets/dev/js/modules/imports/args-object.js ***!
  \*******************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;__webpack_require__(
/*! core-js/modules/es.error.cause.js */
"../node_modules/core-js/modules/es.error.cause.js");var _instanceType=_interopRequireDefault(__webpack_require__(
/*! ./instance-type */
"../assets/dev/js/modules/imports/instance-type.js"));var _isInstanceof=_interopRequireDefault(__webpack_require__(
/*! ../../editor/utils/is-instanceof */
"../assets/dev/js/editor/utils/is-instanceof.js"));class ArgsObject extends _instanceType.default{static getInstanceType(){return'ArgsObject';}
constructor(args){super();this.args=args;}
requireArgument(property){let args=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.args;if(!Object.prototype.hasOwnProperty.call(args,property)){throw Error(`${property} is required.`);}}
requireArgumentType(property,type){let args=arguments.length>2&&arguments[2]!==undefined?arguments[2]:this.args;this.requireArgument(property,args);if(typeof args[property]!==type){throw Error(`${property} invalid type: ${type}.`);}}
requireArgumentInstance(property,instance){let args=arguments.length>2&&arguments[2]!==undefined?arguments[2]:this.args;this.requireArgument(property,args);if(!(args[property]instanceof instance)&&!(0,_isInstanceof.default)(args[property],instance)){throw Error(`${property} invalid instance.`);}}
requireArgumentConstructor(property,type){let args=arguments.length>2&&arguments[2]!==undefined?arguments[2]:this.args;this.requireArgument(property,args);if(args[property].constructor.toString()!==type.prototype.constructor.toString()){throw Error(`${property} invalid constructor type.`);}}}
exports["default"]=ArgsObject;}),"../assets/dev/js/modules/imports/force-method-implementation.js":
/*!***********************************************************************!*\
  !*** ../assets/dev/js/modules/imports/force-method-implementation.js ***!
  \***********************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=exports.ForceMethodImplementation=void 0;__webpack_require__(
/*! core-js/modules/es.error.cause.js */
"../node_modules/core-js/modules/es.error.cause.js");class ForceMethodImplementation extends Error{constructor(){let info=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};let args=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};super(`${info.isStatic ? 'static ' : ''}${info.fullName}() should be implemented, please provide '${info.functionName || info.fullName}' functionality.`,args);if(Object.keys(args).length){console.error(args);}
Error.captureStackTrace(this,ForceMethodImplementation);}}
exports.ForceMethodImplementation=ForceMethodImplementation;var _default=args=>{const stack=Error().stack,caller=stack.split('\n')[2].trim(),callerName=caller.startsWith('at new')?'constructor':caller.split(' ')[1],info={};info.functionName=callerName;info.fullName=callerName;if(info.functionName.includes('.')){const parts=info.functionName.split('.');info.className=parts[0];info.functionName=parts[1];}else{info.isStatic=true;}
throw new ForceMethodImplementation(info,args);};exports["default"]=_default;}),"../assets/dev/js/modules/imports/instance-type.js":
/*!*********************************************************!*\
  !*** ../assets/dev/js/modules/imports/instance-type.js ***!
  \*********************************************************/
((__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;class InstanceType{static[Symbol.hasInstance](target){let result=super[Symbol.hasInstance](target);if(target&&!target.constructor.getInstanceType){return result;}
if(target){if(!target.instanceTypes){target.instanceTypes=[];}
if(!result){if(this.getInstanceType()===target.constructor.getInstanceType()){result=true;}}
if(result){const name=this.getInstanceType===InstanceType.getInstanceType?'BaseInstanceType':this.getInstanceType();if(-1===target.instanceTypes.indexOf(name)){target.instanceTypes.push(name);}}}
if(!result&&target){result=target.instanceTypes&&Array.isArray(target.instanceTypes)&&-1!==target.instanceTypes.indexOf(this.getInstanceType());}
return result;}
static getInstanceType(){elementorModules.ForceMethodImplementation();}
constructor(){let target=new.target;const prototypes=[];while(target.__proto__&&target.__proto__.name){prototypes.push(target.__proto__);target=target.__proto__;}
prototypes.reverse().forEach(proto=>this instanceof proto);}}
exports["default"]=InstanceType;}),"../assets/dev/js/modules/imports/module.js":
/*!**************************************************!*\
  !*** ../assets/dev/js/modules/imports/module.js ***!
  \**************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";__webpack_require__(
/*! core-js/modules/es.error.cause.js */
"../node_modules/core-js/modules/es.error.cause.js");const Module=function(){const $=jQuery,instanceParams=arguments,self=this,events={};let settings;const ensureClosureMethods=function(){$.each(self,function(methodName){const oldMethod=self[methodName];if('function'!==typeof oldMethod){return;}
self[methodName]=function(){return oldMethod.apply(self,arguments);};});};const initSettings=function(){settings=self.getDefaultSettings();const instanceSettings=instanceParams[0];if(instanceSettings){$.extend(true,settings,instanceSettings);}};const init=function(){self.__construct.apply(self,instanceParams);ensureClosureMethods();initSettings();self.trigger('init');};this.getItems=function(items,itemKey){if(itemKey){const keyStack=itemKey.split('.'),currentKey=keyStack.splice(0,1);if(!keyStack.length){return items[currentKey];}
if(!items[currentKey]){return;}
return this.getItems(items[currentKey],keyStack.join('.'));}
return items;};this.getSettings=function(setting){return this.getItems(settings,setting);};this.setSettings=function(settingKey,value,settingsContainer){if(!settingsContainer){settingsContainer=settings;}
if('object'===typeof settingKey){$.extend(settingsContainer,settingKey);return self;}
const keyStack=settingKey.split('.'),currentKey=keyStack.splice(0,1);if(!keyStack.length){settingsContainer[currentKey]=value;return self;}
if(!settingsContainer[currentKey]){settingsContainer[currentKey]={};}
return self.setSettings(keyStack.join('.'),value,settingsContainer[currentKey]);};this.getErrorMessage=function(type,functionName){let message;switch(type){case'forceMethodImplementation':message=`The method '${functionName}' must to be implemented in the inheritor child.`;break;default:message='An error occurs';}
return message;};this.forceMethodImplementation=function(functionName){throw new Error(this.getErrorMessage('forceMethodImplementation',functionName));};this.on=function(eventName,callback){if('object'===typeof eventName){$.each(eventName,function(singleEventName){self.on(singleEventName,this);});return self;}
const eventNames=eventName.split(' ');eventNames.forEach(function(singleEventName){if(!events[singleEventName]){events[singleEventName]=[];}
events[singleEventName].push(callback);});return self;};this.off=function(eventName,callback){if(!events[eventName]){return self;}
if(!callback){delete events[eventName];return self;}
const callbackIndex=events[eventName].indexOf(callback);if(-1!==callbackIndex){delete events[eventName][callbackIndex];events[eventName]=events[eventName].filter(val=>val);}
return self;};this.trigger=function(eventName){const methodName='on'+eventName[0].toUpperCase()+eventName.slice(1),params=Array.prototype.slice.call(arguments,1);if(self[methodName]){self[methodName].apply(self,params);}
const callbacks=events[eventName];if(!callbacks){return self;}
$.each(callbacks,function(index,callback){callback.apply(self,params);});return self;};init();};Module.prototype.__construct=function(){};Module.prototype.getDefaultSettings=function(){return{};};Module.prototype.getConstructorID=function(){return this.constructor.name;};Module.extend=function(properties){const $=jQuery,parent=this;const child=function(){return parent.apply(this,arguments);};$.extend(child,parent);child.prototype=Object.create($.extend({},parent.prototype,properties));child.prototype.constructor=child;child.__super__=parent.prototype;return child;};module.exports=Module;}),"../assets/dev/js/modules/imports/utils/masonry.js":
/*!*********************************************************!*\
  !*** ../assets/dev/js/modules/imports/utils/masonry.js ***!
  \*********************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _viewModule=_interopRequireDefault(__webpack_require__(
/*! ../view-module */
"../assets/dev/js/modules/imports/view-module.js"));var _default=_viewModule.default.extend({getDefaultSettings(){return{container:null,items:null,columnsCount:3,verticalSpaceBetween:30};},getDefaultElements(){return{$container:jQuery(this.getSettings('container')),$items:jQuery(this.getSettings('items'))};},run(){var heights=[],distanceFromTop=this.elements.$container.position().top,settings=this.getSettings(),columnsCount=settings.columnsCount;distanceFromTop+=parseInt(this.elements.$container.css('margin-top'),10);this.elements.$items.each(function(index){var row=Math.floor(index/columnsCount),$item=jQuery(this),itemHeight=$item[0].getBoundingClientRect().height+settings.verticalSpaceBetween;if(row){var itemPosition=$item.position(),indexAtRow=index%columnsCount,pullHeight=itemPosition.top-distanceFromTop-heights[indexAtRow];pullHeight-=parseInt($item.css('margin-top'),10);pullHeight*=-1;$item.css('margin-top',pullHeight+'px');heights[indexAtRow]+=itemHeight;}else{heights.push(itemHeight);}});}});exports["default"]=_default;}),"../assets/dev/js/modules/imports/utils/scroll.js":
/*!********************************************************!*\
  !*** ../assets/dev/js/modules/imports/utils/scroll.js ***!
  \********************************************************/
((__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;class Scroll{static scrollObserver(obj){let lastScrollY=0;const buildThreshholds=function(){let sensitivityPercentage=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;const threshholds=[];if(sensitivityPercentage>0&&sensitivityPercentage<=100){const increment=100/sensitivityPercentage;for(let i=0;i<=100;i+=increment){threshholds.push(i/100);}}else{threshholds.push(0);}
return threshholds;};const options={root:obj.root||null,rootMargin:obj.offset||'0px',threshold:buildThreshholds(obj.sensitivity)};function handleIntersect(entries){const currentScrollY=entries[0].boundingClientRect.y,isInViewport=entries[0].isIntersecting,intersectionScrollDirection=currentScrollY<lastScrollY?'down':'up',scrollPercentage=Math.abs(parseFloat((entries[0].intersectionRatio*100).toFixed(2)));obj.callback({sensitivity:obj.sensitivity,isInViewport,scrollPercentage,intersectionScrollDirection});lastScrollY=currentScrollY;}
return new IntersectionObserver(handleIntersect,options);}
static getElementViewportPercentage($element){let offsetObj=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};const elementOffset=$element[0].getBoundingClientRect(),offsetStart=offsetObj.start||0,offsetEnd=offsetObj.end||0,windowStartOffset=window.innerHeight*offsetStart/100,windowEndOffset=window.innerHeight*offsetEnd/100,y1=elementOffset.top-window.innerHeight,y2=elementOffset.top+windowStartOffset+$element.height(),startPosition=0-y1+windowStartOffset,endPosition=y2-y1+windowEndOffset,percent=Math.max(0,Math.min(startPosition/endPosition,1));return parseFloat((percent*100).toFixed(2));}
static getPageScrollPercentage(){let offsetObj=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};let limitPageHeight=arguments.length>1?arguments[1]:undefined;const offsetStart=offsetObj.start||0,offsetEnd=offsetObj.end||0,initialPageHeight=limitPageHeight||document.documentElement.scrollHeight-document.documentElement.clientHeight,heightOffset=initialPageHeight*offsetStart/100,pageRange=initialPageHeight+heightOffset+initialPageHeight*offsetEnd/100,scrollPos=document.documentElement.scrollTop+document.body.scrollTop+heightOffset;return scrollPos/pageRange*100;}}
exports["default"]=Scroll;}),"../assets/dev/js/modules/imports/view-module.js":
/*!*******************************************************!*\
  !*** ../assets/dev/js/modules/imports/view-module.js ***!
  \*******************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _module=_interopRequireDefault(__webpack_require__(
/*! ./module */
"../assets/dev/js/modules/imports/module.js"));var _default=_module.default.extend({elements:null,getDefaultElements(){return{};},bindEvents(){},onInit(){this.initElements();this.bindEvents();},initElements(){this.elements=this.getDefaultElements();}});exports["default"]=_default;}),"../assets/dev/js/modules/modules.js":
/*!*******************************************!*\
  !*** ../assets/dev/js/modules/modules.js ***!
  \*******************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _module=_interopRequireDefault(__webpack_require__(
/*! ./imports/module */
"../assets/dev/js/modules/imports/module.js"));var _viewModule=_interopRequireDefault(__webpack_require__(
/*! ./imports/view-module */
"../assets/dev/js/modules/imports/view-module.js"));var _argsObject=_interopRequireDefault(__webpack_require__(
/*! ./imports/args-object */
"../assets/dev/js/modules/imports/args-object.js"));var _masonry=_interopRequireDefault(__webpack_require__(
/*! ./imports/utils/masonry */
"../assets/dev/js/modules/imports/utils/masonry.js"));var _scroll=_interopRequireDefault(__webpack_require__(
/*! ./imports/utils/scroll */
"../assets/dev/js/modules/imports/utils/scroll.js"));var _forceMethodImplementation=_interopRequireDefault(__webpack_require__(
/*! ./imports/force-method-implementation */
"../assets/dev/js/modules/imports/force-method-implementation.js"));var _default=window.elementorModules={Module:_module.default,ViewModule:_viewModule.default,ArgsObject:_argsObject.default,ForceMethodImplementation:_forceMethodImplementation.default,utils:{Masonry:_masonry.default,Scroll:_scroll.default}};exports["default"]=_default;}),"../modules/nested-accordion/assets/js/frontend/handlers/nested-accordion-title-keyboard-handler.js":
/*!**********************************************************************************************************!*\
  !*** ../modules/nested-accordion/assets/js/frontend/handlers/nested-accordion-title-keyboard-handler.js ***!
  \**********************************************************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _nestedTitleKeyboardHandler=_interopRequireDefault(__webpack_require__(
/*! elementor-assets-js/frontend/handlers/accessibility/nested-title-keyboard-handler */
"../assets/dev/js/frontend/handlers/accessibility/nested-title-keyboard-handler.js"));class NestedAccordionTitleKeyboardHandler extends _nestedTitleKeyboardHandler.default{__construct(){super.__construct(...arguments);const config=arguments.length<=0?undefined:arguments[0];this.toggleTitle=config.toggleTitle;}
getDefaultSettings(){const parentSettings=super.getDefaultSettings();return{...parentSettings,selectors:{itemTitle:'.e-n-accordion-item-title',itemContainer:'.e-n-accordion-item > .e-con'},ariaAttributes:{titleStateAttribute:'aria-expanded',activeTitleSelector:'[aria-expanded="true"]'},datasets:{titleIndex:'data-accordion-index'}};}
handeTitleLinkEnterOrSpaceEvent(event){this.toggleTitle(event);}
handleContentElementEscapeEvents(event){this.getActiveTitleElement().trigger('focus');this.toggleTitle(event);}
handleTitleEscapeKeyEvents(event){const detailsNode=event?.currentTarget?.parentElement,isOpen=detailsNode?.open;if(isOpen){this.toggleTitle(event);}}}
exports["default"]=NestedAccordionTitleKeyboardHandler;}),"../modules/nested-accordion/assets/js/frontend/handlers/nested-accordion.js":
/*!***********************************************************************************!*\
  !*** ../modules/nested-accordion/assets/js/frontend/handlers/nested-accordion.js ***!
  \***********************************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _base=_interopRequireDefault(__webpack_require__(
/*! elementor-frontend/handlers/base */
"../assets/dev/js/frontend/handlers/base.js"));var _nestedAccordionTitleKeyboardHandler=_interopRequireDefault(__webpack_require__(
/*! ./nested-accordion-title-keyboard-handler */
"../modules/nested-accordion/assets/js/frontend/handlers/nested-accordion-title-keyboard-handler.js"));class NestedAccordion extends _base.default{constructor(){super(...arguments);this.animations=new Map();}
getDefaultSettings(){return{selectors:{accordion:'.e-n-accordion',accordionContentContainers:'.e-n-accordion > .e-con',accordionItems:'.e-n-accordion-item',accordionItemTitles:'.e-n-accordion-item-title',accordionContent:'.e-n-accordion-item > .e-con',accordionWrapper:'.e-n-accordion-item'},default_state:'expanded'};}
getDefaultElements(){const selectors=this.getSettings('selectors');return{$accordion:this.findElement(selectors.accordion),$contentContainers:this.findElement(selectors.accordionContentContainers),$accordionItems:this.findElement(selectors.accordionItems),$accordionTitles:this.findElement(selectors.accordionItemTitles),$accordionContent:this.findElement(selectors.accordionContent)};}
onInit(){super.onInit(...arguments);if(elementorFrontend.isEditMode()){this.interlaceContainers();}
this.injectKeyboardHandler();}
injectKeyboardHandler(){if('nested-accordion.default'===this.getSettings('elementName')){new _nestedAccordionTitleKeyboardHandler.default({$element:this.$element,toggleTitle:this.clickListener.bind(this)});}}
interlaceContainers(){const{$contentContainers,$accordionItems}=this.getDefaultElements();$contentContainers.each((index,element)=>{$accordionItems[index].appendChild(element);});}
bindEvents(){this.elements.$accordionTitles.on('click',this.clickListener.bind(this));}
unbindEvents(){this.elements.$accordionTitles.off();}
clickListener(event){event.preventDefault();const settings=this.getSettings(),accordionItem=event?.currentTarget?.closest(settings.selectors.accordionWrapper),itemSummary=accordionItem.querySelector(settings.selectors.accordionItemTitles),accordionContent=accordionItem.querySelector(settings.selectors.accordionContent),{max_items_expended:maxItemsExpended}=this.getElementSettings(),{$accordionTitles,$accordionItems}=this.elements;if('one'===maxItemsExpended){this.closeAllItems($accordionItems,$accordionTitles);}
if(!accordionItem.open){this.prepareOpenAnimation(accordionItem,itemSummary,accordionContent);}else{this.closeAccordionItem(accordionItem,itemSummary);}}
animateItem(accordionItem,startHeight,endHeight,isOpen){accordionItem.style.overflow='hidden';let animation=this.animations.get(accordionItem);if(animation){animation.cancel();}
animation=accordionItem.animate({height:[startHeight,endHeight]},{duration:this.getAnimationDuration()});animation.onfinish=()=>this.onAnimationFinish(accordionItem,isOpen);this.animations.set(accordionItem,animation);accordionItem.querySelector('summary')?.setAttribute('aria-expanded',isOpen);}
closeAccordionItem(accordionItem,accordionItemTitle){const startHeight=`${accordionItem.offsetHeight}px`,endHeight=`${accordionItemTitle.offsetHeight}px`;this.animateItem(accordionItem,startHeight,endHeight,false);}
prepareOpenAnimation(accordionItem,accordionItemTitle,accordionItemContent){accordionItem.style.overflow='hidden';accordionItem.style.height=`${accordionItem.offsetHeight}px`;accordionItem.open=true;window.requestAnimationFrame(()=>this.openAccordionItem(accordionItem,accordionItemTitle,accordionItemContent));}
openAccordionItem(accordionItem,accordionItemTitle,accordionItemContent){const startHeight=`${accordionItem.offsetHeight}px`,endHeight=`${accordionItemTitle.offsetHeight + accordionItemContent.offsetHeight}px`;this.animateItem(accordionItem,startHeight,endHeight,true);}
onAnimationFinish(accordionItem,isOpen){accordionItem.open=isOpen;this.animations.set(accordionItem,null);accordionItem.style.height=accordionItem.style.overflow='';}
closeAllItems($items,$titles){$titles.each((index,title)=>{this.closeAccordionItem($items[index],title);});}
getAnimationDuration(){const{size,unit}=this.getElementSettings('n_accordion_animation_duration');return size*('ms'===unit?1:1000);}}
exports["default"]=NestedAccordion;}),"../modules/nested-tabs/assets/js/frontend/handlers/nested-tabs.js":
/*!*************************************************************************!*\
  !*** ../modules/nested-tabs/assets/js/frontend/handlers/nested-tabs.js ***!
  \*************************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _base=_interopRequireDefault(__webpack_require__(
/*! elementor-frontend/handlers/base */
"../assets/dev/js/frontend/handlers/base.js"));var _flexHorizontalScroll=__webpack_require__(
/*! elementor-frontend-utils/flex-horizontal-scroll */
"../assets/dev/js/frontend/utils/flex-horizontal-scroll.js");class NestedTabs extends _base.default{constructor(){super(...arguments);this.resizeListenerNestedTabs=null;}
getTabTitleFilterSelector(tabIndex){return`[data-tab-index="${tabIndex}"]`;}
getTabContentFilterSelector(tabIndex){return`*:nth-child(${tabIndex})`;}
getTabIndex(tabTitleElement){return tabTitleElement.getAttribute('data-tab-index');}
getDefaultSettings(){return{selectors:{widgetContainer:'.e-n-tabs',tabTitle:'.e-n-tab-title',tabContent:'.e-n-tabs-content > .e-con',headingContainer:'.e-n-tabs-heading',activeTabContentContainers:'.e-con.e-active'},classes:{active:'e-active'},ariaAttributes:{titleStateAttribute:'aria-selected',activeTitleSelector:'[aria-selected="true"]'},showTabFn:'show',hideTabFn:'hide',toggleSelf:false,hidePrevious:true,autoExpand:true};}
getDefaultElements(){const selectors=this.getSettings('selectors');return{$tabTitles:this.findElement(selectors.tabTitle),$tabContents:this.findElement(selectors.tabContent),$headingContainer:this.findElement(selectors.headingContainer)};}
getKeyboardNavigationSettings(){return this.getSettings();}
activateDefaultTab(){const settings=this.getSettings();const defaultActiveTab=this.getEditSettings('activeItemIndex')||1,originalToggleMethods={showTabFn:settings.showTabFn,hideTabFn:settings.hideTabFn};this.setSettings({showTabFn:'show',hideTabFn:'hide'});this.changeActiveTab(defaultActiveTab);this.setSettings(originalToggleMethods);}
deactivateActiveTab(newTabIndex){const settings=this.getSettings(),activeClass=settings.classes.active,activeTitleFilter=settings.ariaAttributes.activeTitleSelector,activeContentFilter='.'+activeClass,$activeTitle=this.elements.$tabTitles.filter(activeTitleFilter),$activeContent=this.elements.$tabContents.filter(activeContentFilter);this.setTabDeactivationAttributes($activeTitle,newTabIndex);$activeContent.removeClass(activeClass);$activeContent[settings.hideTabFn](0,()=>this.onHideTabContent($activeContent));return $activeContent;}
getTitleActivationAttributes(){const titleStateAttribute=this.getSettings('ariaAttributes').titleStateAttribute;return{tabindex:'0',[titleStateAttribute]:'true'};}
setTabDeactivationAttributes($activeTitle){const titleStateAttribute=this.getSettings('ariaAttributes').titleStateAttribute;$activeTitle.attr({tabindex:'-1',[titleStateAttribute]:'false'});}
onHideTabContent(){}
activateTab(tabIndex){const settings=this.getSettings(),activeClass=settings.classes.active,animationDuration='show'===settings.showTabFn?0:400;let $requestedTitle=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(tabIndex)),$requestedContent=this.elements.$tabContents.filter(this.getTabContentFilterSelector(tabIndex));if(!$requestedTitle.length){const previousTabIndex=Math.max(tabIndex-1,1);$requestedTitle=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(previousTabIndex));$requestedContent=this.elements.$tabContents.filter(this.getTabContentFilterSelector(previousTabIndex));}
$requestedTitle.attr(this.getTitleActivationAttributes());$requestedContent.addClass(activeClass);$requestedContent[settings.showTabFn](animationDuration,()=>this.onShowTabContent($requestedContent));}
onShowTabContent($requestedContent){elementorFrontend.elements.$window.trigger('elementor-pro/motion-fx/recalc');elementorFrontend.elements.$window.trigger('elementor/nested-tabs/activate',$requestedContent);elementorFrontend.elements.$window.trigger('elementor/bg-video/recalc');}
isActiveTab(tabIndex){return'true'===this.elements.$tabTitles.filter('[data-tab-index="'+tabIndex+'"]').attr(this.getSettings('ariaAttributes').titleStateAttribute);}
onTabClick(event){event.preventDefault();this.changeActiveTab(event.currentTarget?.getAttribute('data-tab-index'),true);}
getTabEvents(){return{click:this.onTabClick.bind(this)};}
getHeadingEvents(){const navigationWrapper=this.elements.$headingContainer[0];return{mousedown:_flexHorizontalScroll.changeScrollStatus.bind(this,navigationWrapper),mouseup:_flexHorizontalScroll.changeScrollStatus.bind(this,navigationWrapper),mouseleave:_flexHorizontalScroll.changeScrollStatus.bind(this,navigationWrapper),mousemove:_flexHorizontalScroll.setHorizontalTitleScrollValues.bind(this,navigationWrapper,this.getHorizontalScrollSetting())};}
bindEvents(){this.elements.$tabTitles.on(this.getTabEvents());this.elements.$headingContainer.on(this.getHeadingEvents());const settingsObject={element:this.elements.$headingContainer[0],direction:this.getTabsDirection(),justifyCSSVariable:'--n-tabs-heading-justify-content',horizontalScrollStatus:this.getHorizontalScrollSetting()};this.resizeListenerNestedTabs=_flexHorizontalScroll.setHorizontalScrollAlignment.bind(this,settingsObject);elementorFrontend.elements.$window.on('resize',this.resizeListenerNestedTabs);elementorFrontend.elements.$window.on('resize',this.setTouchMode.bind(this));elementorFrontend.elements.$window.on('elementor/nested-tabs/activate',this.reInitSwipers);elementorFrontend.elements.$window.on('elementor/nested-elements/activate-by-keyboard',this.changeActiveTabByKeyboard.bind(this));}
unbindEvents(){this.elements.$tabTitles.off();this.elements.$headingContainer.off();this.elements.$tabContents.children().off();elementorFrontend.elements.$window.off('resize');elementorFrontend.elements.$window.off('elementor/nested-tabs/activate');}
reInitSwipers(event,content){const swiperElements=content.querySelectorAll(`.${elementorFrontend.config.swiperClass}`);for(const element of swiperElements){if(!element.swiper){return;}
element.swiper.initialized=false;element.swiper.init();}}
onInit(){super.onInit(...arguments);if(this.getSettings('autoExpand')){this.activateDefaultTab();}
const settingsObject={element:this.elements.$headingContainer[0],direction:this.getTabsDirection(),justifyCSSVariable:'--n-tabs-heading-justify-content',horizontalScrollStatus:this.getHorizontalScrollSetting()};(0,_flexHorizontalScroll.setHorizontalScrollAlignment)(settingsObject);this.setTouchMode();if('nested-tabs.default'===this.getSettings('elementName')){new elementorModules.frontend.handlers.NestedTitleKeyboardHandler(this.getKeyboardNavigationSettings());}}
onEditSettingsChange(propertyName,value){if('activeItemIndex'===propertyName){this.changeActiveTab(value,false);}}
onElementChange(propertyName){if(this.checkSliderPropsToWatch(propertyName)){const settingsObject={element:this.elements.$headingContainer[0],direction:this.getTabsDirection(),justifyCSSVariable:'--n-tabs-heading-justify-content',horizontalScrollStatus:this.getHorizontalScrollSetting()};(0,_flexHorizontalScroll.setHorizontalScrollAlignment)(settingsObject);}}
checkSliderPropsToWatch(propertyName){return 0===propertyName.indexOf('horizontal_scroll')||'breakpoint_selector'===propertyName||0===propertyName.indexOf('tabs_justify_horizontal')||0===propertyName.indexOf('tabs_title_space_between');}
changeActiveTab(tabIndex){let fromUser=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(fromUser&&this.isEdit&&this.isElementInTheCurrentDocument()){return window.top.$e.run('document/repeater/select',{container:elementor.getContainer(this.$element.attr('data-id')),index:parseInt(tabIndex)});}
const isActiveTab=this.isActiveTab(tabIndex),settings=this.getSettings();if((settings.toggleSelf||!isActiveTab)&&settings.hidePrevious){this.deactivateActiveTab(tabIndex);}
if(!settings.hidePrevious&&isActiveTab){this.deactivateActiveTab(tabIndex);}
if(!isActiveTab){if(this.isAccordionVersion()){this.activateMobileTab(tabIndex);return;}
this.activateTab(tabIndex);}}
changeActiveTabByKeyboard(event,settings){if(settings.widgetId.toString()!==this.getID().toString()){return;}
this.changeActiveTab(settings.titleIndex,true);}
activateMobileTab(tabIndex){setTimeout(()=>{this.activateTab(tabIndex);this.forceActiveTabToBeInViewport(tabIndex);},10);}
forceActiveTabToBeInViewport(tabIndex){if(!elementorFrontend.isEditMode()){return;}
const $activeTabTitle=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(tabIndex));if(!elementor.helpers.isInViewport($activeTabTitle[0])){$activeTabTitle[0].scrollIntoView({block:'center'});}}
getActiveClass(){const settings=this.getSettings();return settings.classes.active;}
getTabsDirection(){const currentDevice=elementorFrontend.getCurrentDeviceMode();return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),'tabs_justify_horizontal','',currentDevice);}
getHorizontalScrollSetting(){const currentDevice=elementorFrontend.getCurrentDeviceMode();return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),'horizontal_scroll','',currentDevice);}
isAccordionVersion(){return'contents'===this.elements.$headingContainer.css('display');}
setTouchMode(){const widgetSelector=this.getSettings('selectors').widgetContainer;if(elementorFrontend.isEditMode()||'resize'===event?.type){const responsiveDevices=['mobile','mobile_extra','tablet','tablet_extra'],currentDevice=elementorFrontend.getCurrentDeviceMode();if(-1!==responsiveDevices.indexOf(currentDevice)){this.$element.find(widgetSelector).attr('data-touch-mode','true');return;}}else if('ontouchstart'in window){this.$element.find(widgetSelector).attr('data-touch-mode','true');return;}
this.$element.find(widgetSelector).attr('data-touch-mode','false');}}
exports["default"]=NestedTabs;}),"../node_modules/core-js/internals/a-callable.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/a-callable.js ***!
  \*******************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isCallable=__webpack_require__(
/*! ../internals/is-callable */
"../node_modules/core-js/internals/is-callable.js");var tryToString=__webpack_require__(
/*! ../internals/try-to-string */
"../node_modules/core-js/internals/try-to-string.js");var $TypeError=TypeError;module.exports=function(argument){if(isCallable(argument))return argument;throw $TypeError(tryToString(argument)+' is not a function');};}),"../node_modules/core-js/internals/a-possible-prototype.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/a-possible-prototype.js ***!
  \*****************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isCallable=__webpack_require__(
/*! ../internals/is-callable */
"../node_modules/core-js/internals/is-callable.js");var $String=String;var $TypeError=TypeError;module.exports=function(argument){if(typeof argument=='object'||isCallable(argument))return argument;throw $TypeError("Can't set "+$String(argument)+' as a prototype');};}),"../node_modules/core-js/internals/an-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/an-object.js ***!
  \******************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isObject=__webpack_require__(
/*! ../internals/is-object */
"../node_modules/core-js/internals/is-object.js");var $String=String;var $TypeError=TypeError;module.exports=function(argument){if(isObject(argument))return argument;throw $TypeError($String(argument)+' is not an object');};}),"../node_modules/core-js/internals/array-includes.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/array-includes.js ***!
  \***********************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var toIndexedObject=__webpack_require__(
/*! ../internals/to-indexed-object */
"../node_modules/core-js/internals/to-indexed-object.js");var toAbsoluteIndex=__webpack_require__(
/*! ../internals/to-absolute-index */
"../node_modules/core-js/internals/to-absolute-index.js");var lengthOfArrayLike=__webpack_require__(
/*! ../internals/length-of-array-like */
"../node_modules/core-js/internals/length-of-array-like.js");var createMethod=function(IS_INCLUDES){return function($this,el,fromIndex){var O=toIndexedObject($this);var length=lengthOfArrayLike(O);var index=toAbsoluteIndex(fromIndex,length);var value;if(IS_INCLUDES&&el!=el)while(length>index){value=O[index++];if(value!=value)return true;}else for(;length>index;index++){if((IS_INCLUDES||index in O)&&O[index]===el)return IS_INCLUDES||index||0;}return!IS_INCLUDES&&-1;};};module.exports={includes:createMethod(true),indexOf:createMethod(false)};}),"../node_modules/core-js/internals/classof-raw.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/classof-raw.js ***!
  \********************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var uncurryThis=__webpack_require__(
/*! ../internals/function-uncurry-this */
"../node_modules/core-js/internals/function-uncurry-this.js");var toString=uncurryThis({}.toString);var stringSlice=uncurryThis(''.slice);module.exports=function(it){return stringSlice(toString(it),8,-1);};}),"../node_modules/core-js/internals/classof.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/classof.js ***!
  \****************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var TO_STRING_TAG_SUPPORT=__webpack_require__(
/*! ../internals/to-string-tag-support */
"../node_modules/core-js/internals/to-string-tag-support.js");var isCallable=__webpack_require__(
/*! ../internals/is-callable */
"../node_modules/core-js/internals/is-callable.js");var classofRaw=__webpack_require__(
/*! ../internals/classof-raw */
"../node_modules/core-js/internals/classof-raw.js");var wellKnownSymbol=__webpack_require__(
/*! ../internals/well-known-symbol */
"../node_modules/core-js/internals/well-known-symbol.js");var TO_STRING_TAG=wellKnownSymbol('toStringTag');var $Object=Object;var CORRECT_ARGUMENTS=classofRaw(function(){return arguments;}())=='Arguments';var tryGet=function(it,key){try{return it[key];}catch(error){}};module.exports=TO_STRING_TAG_SUPPORT?classofRaw:function(it){var O,tag,result;return it===undefined?'Undefined':it===null?'Null':typeof(tag=tryGet(O=$Object(it),TO_STRING_TAG))=='string'?tag:CORRECT_ARGUMENTS?classofRaw(O):(result=classofRaw(O))=='Object'&&isCallable(O.callee)?'Arguments':result;};}),"../node_modules/core-js/internals/copy-constructor-properties.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/internals/copy-constructor-properties.js ***!
  \************************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var hasOwn=__webpack_require__(
/*! ../internals/has-own-property */
"../node_modules/core-js/internals/has-own-property.js");var ownKeys=__webpack_require__(
/*! ../internals/own-keys */
"../node_modules/core-js/internals/own-keys.js");var getOwnPropertyDescriptorModule=__webpack_require__(
/*! ../internals/object-get-own-property-descriptor */
"../node_modules/core-js/internals/object-get-own-property-descriptor.js");var definePropertyModule=__webpack_require__(
/*! ../internals/object-define-property */
"../node_modules/core-js/internals/object-define-property.js");module.exports=function(target,source,exceptions){var keys=ownKeys(source);var defineProperty=definePropertyModule.f;var getOwnPropertyDescriptor=getOwnPropertyDescriptorModule.f;for(var i=0;i<keys.length;i++){var key=keys[i];if(!hasOwn(target,key)&&!(exceptions&&hasOwn(exceptions,key))){defineProperty(target,key,getOwnPropertyDescriptor(source,key));}}};}),"../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \***************************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var DESCRIPTORS=__webpack_require__(
/*! ../internals/descriptors */
"../node_modules/core-js/internals/descriptors.js");var definePropertyModule=__webpack_require__(
/*! ../internals/object-define-property */
"../node_modules/core-js/internals/object-define-property.js");var createPropertyDescriptor=__webpack_require__(
/*! ../internals/create-property-descriptor */
"../node_modules/core-js/internals/create-property-descriptor.js");module.exports=DESCRIPTORS?function(object,key,value){return definePropertyModule.f(object,key,createPropertyDescriptor(1,value));}:function(object,key,value){object[key]=value;return object;};}),"../node_modules/core-js/internals/create-property-descriptor.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/internals/create-property-descriptor.js ***!
  \***********************************************************************/
((module)=>{"use strict";module.exports=function(bitmap,value){return{enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value};};}),"../node_modules/core-js/internals/define-built-in.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/define-built-in.js ***!
  \************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isCallable=__webpack_require__(
/*! ../internals/is-callable */
"../node_modules/core-js/internals/is-callable.js");var definePropertyModule=__webpack_require__(
/*! ../internals/object-define-property */
"../node_modules/core-js/internals/object-define-property.js");var makeBuiltIn=__webpack_require__(
/*! ../internals/make-built-in */
"../node_modules/core-js/internals/make-built-in.js");var defineGlobalProperty=__webpack_require__(
/*! ../internals/define-global-property */
"../node_modules/core-js/internals/define-global-property.js");module.exports=function(O,key,value,options){if(!options)options={};var simple=options.enumerable;var name=options.name!==undefined?options.name:key;if(isCallable(value))makeBuiltIn(value,name,options);if(options.global){if(simple)O[key]=value;else defineGlobalProperty(key,value);}else{try{if(!options.unsafe)delete O[key];else if(O[key])simple=true;}catch(error){}
if(simple)O[key]=value;else definePropertyModule.f(O,key,{value:value,enumerable:false,configurable:!options.nonConfigurable,writable:!options.nonWritable});}return O;};}),"../node_modules/core-js/internals/define-global-property.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/define-global-property.js ***!
  \*******************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var global=__webpack_require__(
/*! ../internals/global */
"../node_modules/core-js/internals/global.js");var defineProperty=Object.defineProperty;module.exports=function(key,value){try{defineProperty(global,key,{value:value,configurable:true,writable:true});}catch(error){global[key]=value;}return value;};}),"../node_modules/core-js/internals/descriptors.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/descriptors.js ***!
  \********************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var fails=__webpack_require__(
/*! ../internals/fails */
"../node_modules/core-js/internals/fails.js");module.exports=!fails(function(){return Object.defineProperty({},1,{get:function(){return 7;}})[1]!=7;});}),"../node_modules/core-js/internals/document-all.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/document-all.js ***!
  \*********************************************************/
((module)=>{"use strict";var documentAll=typeof document=='object'&&document.all;var IS_HTMLDDA=typeof documentAll=='undefined'&&documentAll!==undefined;module.exports={all:documentAll,IS_HTMLDDA:IS_HTMLDDA};}),"../node_modules/core-js/internals/document-create-element.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/document-create-element.js ***!
  \********************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var global=__webpack_require__(
/*! ../internals/global */
"../node_modules/core-js/internals/global.js");var isObject=__webpack_require__(
/*! ../internals/is-object */
"../node_modules/core-js/internals/is-object.js");var document=global.document;var EXISTS=isObject(document)&&isObject(document.createElement);module.exports=function(it){return EXISTS?document.createElement(it):{};};}),"../node_modules/core-js/internals/engine-user-agent.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-user-agent.js ***!
  \**************************************************************/
((module)=>{"use strict";module.exports=typeof navigator!='undefined'&&String(navigator.userAgent)||'';}),"../node_modules/core-js/internals/engine-v8-version.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-v8-version.js ***!
  \**************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var global=__webpack_require__(
/*! ../internals/global */
"../node_modules/core-js/internals/global.js");var userAgent=__webpack_require__(
/*! ../internals/engine-user-agent */
"../node_modules/core-js/internals/engine-user-agent.js");var process=global.process;var Deno=global.Deno;var versions=process&&process.versions||Deno&&Deno.version;var v8=versions&&versions.v8;var match,version;if(v8){match=v8.split('.');version=match[0]>0&&match[0]<4?1:+(match[0]+match[1]);}
if(!version&&userAgent){match=userAgent.match(/Edge\/(\d+)/);if(!match||match[1]>=74){match=userAgent.match(/Chrome\/(\d+)/);if(match)version=+match[1];}}
module.exports=version;}),"../node_modules/core-js/internals/enum-bug-keys.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/enum-bug-keys.js ***!
  \**********************************************************/
((module)=>{"use strict";module.exports=['constructor','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','toLocaleString','toString','valueOf'];}),"../node_modules/core-js/internals/error-stack-clear.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/error-stack-clear.js ***!
  \**************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var uncurryThis=__webpack_require__(
/*! ../internals/function-uncurry-this */
"../node_modules/core-js/internals/function-uncurry-this.js");var $Error=Error;var replace=uncurryThis(''.replace);var TEST=(function(arg){return String($Error(arg).stack);})('zxcasd');var V8_OR_CHAKRA_STACK_ENTRY=/\n\s*at [^:]*:[^\n]*/;var IS_V8_OR_CHAKRA_STACK=V8_OR_CHAKRA_STACK_ENTRY.test(TEST);module.exports=function(stack,dropEntries){if(IS_V8_OR_CHAKRA_STACK&&typeof stack=='string'&&!$Error.prepareStackTrace){while(dropEntries--)stack=replace(stack,V8_OR_CHAKRA_STACK_ENTRY,'');}return stack;};}),"../node_modules/core-js/internals/error-stack-install.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/internals/error-stack-install.js ***!
  \****************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var createNonEnumerableProperty=__webpack_require__(
/*! ../internals/create-non-enumerable-property */
"../node_modules/core-js/internals/create-non-enumerable-property.js");var clearErrorStack=__webpack_require__(
/*! ../internals/error-stack-clear */
"../node_modules/core-js/internals/error-stack-clear.js");var ERROR_STACK_INSTALLABLE=__webpack_require__(
/*! ../internals/error-stack-installable */
"../node_modules/core-js/internals/error-stack-installable.js");var captureStackTrace=Error.captureStackTrace;module.exports=function(error,C,stack,dropEntries){if(ERROR_STACK_INSTALLABLE){if(captureStackTrace)captureStackTrace(error,C);else createNonEnumerableProperty(error,'stack',clearErrorStack(stack,dropEntries));}};}),"../node_modules/core-js/internals/error-stack-installable.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/error-stack-installable.js ***!
  \********************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var fails=__webpack_require__(
/*! ../internals/fails */
"../node_modules/core-js/internals/fails.js");var createPropertyDescriptor=__webpack_require__(
/*! ../internals/create-property-descriptor */
"../node_modules/core-js/internals/create-property-descriptor.js");module.exports=!fails(function(){var error=Error('a');if(!('stack'in error))return true;Object.defineProperty(error,'stack',createPropertyDescriptor(1,7));return error.stack!==7;});}),"../node_modules/core-js/internals/export.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/export.js ***!
  \***************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var global=__webpack_require__(
/*! ../internals/global */
"../node_modules/core-js/internals/global.js");var getOwnPropertyDescriptor=(__webpack_require__(
/*! ../internals/object-get-own-property-descriptor */
"../node_modules/core-js/internals/object-get-own-property-descriptor.js").f);var createNonEnumerableProperty=__webpack_require__(
/*! ../internals/create-non-enumerable-property */
"../node_modules/core-js/internals/create-non-enumerable-property.js");var defineBuiltIn=__webpack_require__(
/*! ../internals/define-built-in */
"../node_modules/core-js/internals/define-built-in.js");var defineGlobalProperty=__webpack_require__(
/*! ../internals/define-global-property */
"../node_modules/core-js/internals/define-global-property.js");var copyConstructorProperties=__webpack_require__(
/*! ../internals/copy-constructor-properties */
"../node_modules/core-js/internals/copy-constructor-properties.js");var isForced=__webpack_require__(
/*! ../internals/is-forced */
"../node_modules/core-js/internals/is-forced.js");module.exports=function(options,source){var TARGET=options.target;var GLOBAL=options.global;var STATIC=options.stat;var FORCED,target,key,targetProperty,sourceProperty,descriptor;if(GLOBAL){target=global;}else if(STATIC){target=global[TARGET]||defineGlobalProperty(TARGET,{});}else{target=(global[TARGET]||{}).prototype;}
if(target)for(key in source){sourceProperty=source[key];if(options.dontCallGetSet){descriptor=getOwnPropertyDescriptor(target,key);targetProperty=descriptor&&descriptor.value;}else targetProperty=target[key];FORCED=isForced(GLOBAL?key:TARGET+(STATIC?'.':'#')+key,options.forced);if(!FORCED&&targetProperty!==undefined){if(typeof sourceProperty==typeof targetProperty)continue;copyConstructorProperties(sourceProperty,targetProperty);}
if(options.sham||(targetProperty&&targetProperty.sham)){createNonEnumerableProperty(sourceProperty,'sham',true);}
defineBuiltIn(target,key,sourceProperty,options);}};}),"../node_modules/core-js/internals/fails.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/internals/fails.js ***!
  \**************************************************/
((module)=>{"use strict";module.exports=function(exec){try{return!!exec();}catch(error){return true;}};}),"../node_modules/core-js/internals/function-apply.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/function-apply.js ***!
  \***********************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var NATIVE_BIND=__webpack_require__(
/*! ../internals/function-bind-native */
"../node_modules/core-js/internals/function-bind-native.js");var FunctionPrototype=Function.prototype;var apply=FunctionPrototype.apply;var call=FunctionPrototype.call;module.exports=typeof Reflect=='object'&&Reflect.apply||(NATIVE_BIND?call.bind(apply):function(){return call.apply(apply,arguments);});}),"../node_modules/core-js/internals/function-bind-native.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/function-bind-native.js ***!
  \*****************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var fails=__webpack_require__(
/*! ../internals/fails */
"../node_modules/core-js/internals/fails.js");module.exports=!fails(function(){var test=(function(){}).bind();return typeof test!='function'||test.hasOwnProperty('prototype');});}),"../node_modules/core-js/internals/function-call.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/function-call.js ***!
  \**********************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var NATIVE_BIND=__webpack_require__(
/*! ../internals/function-bind-native */
"../node_modules/core-js/internals/function-bind-native.js");var call=Function.prototype.call;module.exports=NATIVE_BIND?call.bind(call):function(){return call.apply(call,arguments);};}),"../node_modules/core-js/internals/function-name.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/function-name.js ***!
  \**********************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var DESCRIPTORS=__webpack_require__(
/*! ../internals/descriptors */
"../node_modules/core-js/internals/descriptors.js");var hasOwn=__webpack_require__(
/*! ../internals/has-own-property */
"../node_modules/core-js/internals/has-own-property.js");var FunctionPrototype=Function.prototype;var getDescriptor=DESCRIPTORS&&Object.getOwnPropertyDescriptor;var EXISTS=hasOwn(FunctionPrototype,'name');var PROPER=EXISTS&&(function something(){}).name==='something';var CONFIGURABLE=EXISTS&&(!DESCRIPTORS||(DESCRIPTORS&&getDescriptor(FunctionPrototype,'name').configurable));module.exports={EXISTS:EXISTS,PROPER:PROPER,CONFIGURABLE:CONFIGURABLE};}),"../node_modules/core-js/internals/function-uncurry-this-accessor.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/internals/function-uncurry-this-accessor.js ***!
  \***************************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var uncurryThis=__webpack_require__(
/*! ../internals/function-uncurry-this */
"../node_modules/core-js/internals/function-uncurry-this.js");var aCallable=__webpack_require__(
/*! ../internals/a-callable */
"../node_modules/core-js/internals/a-callable.js");module.exports=function(object,key,method){try{return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object,key)[method]));}catch(error){}};}),"../node_modules/core-js/internals/function-uncurry-this.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/function-uncurry-this.js ***!
  \******************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var NATIVE_BIND=__webpack_require__(
/*! ../internals/function-bind-native */
"../node_modules/core-js/internals/function-bind-native.js");var FunctionPrototype=Function.prototype;var call=FunctionPrototype.call;var uncurryThisWithBind=NATIVE_BIND&&FunctionPrototype.bind.bind(call,call);module.exports=NATIVE_BIND?uncurryThisWithBind:function(fn){return function(){return call.apply(fn,arguments);};};}),"../node_modules/core-js/internals/get-built-in.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/get-built-in.js ***!
  \*********************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var global=__webpack_require__(
/*! ../internals/global */
"../node_modules/core-js/internals/global.js");var isCallable=__webpack_require__(
/*! ../internals/is-callable */
"../node_modules/core-js/internals/is-callable.js");var aFunction=function(argument){return isCallable(argument)?argument:undefined;};module.exports=function(namespace,method){return arguments.length<2?aFunction(global[namespace]):global[namespace]&&global[namespace][method];};}),"../node_modules/core-js/internals/get-method.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/get-method.js ***!
  \*******************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var aCallable=__webpack_require__(
/*! ../internals/a-callable */
"../node_modules/core-js/internals/a-callable.js");var isNullOrUndefined=__webpack_require__(
/*! ../internals/is-null-or-undefined */
"../node_modules/core-js/internals/is-null-or-undefined.js");module.exports=function(V,P){var func=V[P];return isNullOrUndefined(func)?undefined:aCallable(func);};}),"../node_modules/core-js/internals/global.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/global.js ***!
  \***************************************************/
(function(module,__unused_webpack_exports,__webpack_require__){"use strict";var check=function(it){return it&&it.Math==Math&&it;};module.exports=check(typeof globalThis=='object'&&globalThis)||check(typeof window=='object'&&window)||check(typeof self=='object'&&self)||check(typeof __webpack_require__.g=='object'&&__webpack_require__.g)||(function(){return this;})()||this||Function('return this')();}),"../node_modules/core-js/internals/has-own-property.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/internals/has-own-property.js ***!
  \*************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var uncurryThis=__webpack_require__(
/*! ../internals/function-uncurry-this */
"../node_modules/core-js/internals/function-uncurry-this.js");var toObject=__webpack_require__(
/*! ../internals/to-object */
"../node_modules/core-js/internals/to-object.js");var hasOwnProperty=uncurryThis({}.hasOwnProperty);module.exports=Object.hasOwn||function hasOwn(it,key){return hasOwnProperty(toObject(it),key);};}),"../node_modules/core-js/internals/hidden-keys.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/hidden-keys.js ***!
  \********************************************************/
((module)=>{"use strict";module.exports={};}),"../node_modules/core-js/internals/ie8-dom-define.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/ie8-dom-define.js ***!
  \***********************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var DESCRIPTORS=__webpack_require__(
/*! ../internals/descriptors */
"../node_modules/core-js/internals/descriptors.js");var fails=__webpack_require__(
/*! ../internals/fails */
"../node_modules/core-js/internals/fails.js");var createElement=__webpack_require__(
/*! ../internals/document-create-element */
"../node_modules/core-js/internals/document-create-element.js");module.exports=!DESCRIPTORS&&!fails(function(){return Object.defineProperty(createElement('div'),'a',{get:function(){return 7;}}).a!=7;});}),"../node_modules/core-js/internals/indexed-object.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/indexed-object.js ***!
  \***********************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var uncurryThis=__webpack_require__(
/*! ../internals/function-uncurry-this */
"../node_modules/core-js/internals/function-uncurry-this.js");var fails=__webpack_require__(
/*! ../internals/fails */
"../node_modules/core-js/internals/fails.js");var classof=__webpack_require__(
/*! ../internals/classof-raw */
"../node_modules/core-js/internals/classof-raw.js");var $Object=Object;var split=uncurryThis(''.split);module.exports=fails(function(){return!$Object('z').propertyIsEnumerable(0);})?function(it){return classof(it)=='String'?split(it,''):$Object(it);}:$Object;}),"../node_modules/core-js/internals/inherit-if-required.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/internals/inherit-if-required.js ***!
  \****************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isCallable=__webpack_require__(
/*! ../internals/is-callable */
"../node_modules/core-js/internals/is-callable.js");var isObject=__webpack_require__(
/*! ../internals/is-object */
"../node_modules/core-js/internals/is-object.js");var setPrototypeOf=__webpack_require__(
/*! ../internals/object-set-prototype-of */
"../node_modules/core-js/internals/object-set-prototype-of.js");module.exports=function($this,dummy,Wrapper){var NewTarget,NewTargetPrototype;if(setPrototypeOf&&isCallable(NewTarget=dummy.constructor)&&NewTarget!==Wrapper&&isObject(NewTargetPrototype=NewTarget.prototype)&&NewTargetPrototype!==Wrapper.prototype)setPrototypeOf($this,NewTargetPrototype);return $this;};}),"../node_modules/core-js/internals/inspect-source.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/inspect-source.js ***!
  \***********************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var uncurryThis=__webpack_require__(
/*! ../internals/function-uncurry-this */
"../node_modules/core-js/internals/function-uncurry-this.js");var isCallable=__webpack_require__(
/*! ../internals/is-callable */
"../node_modules/core-js/internals/is-callable.js");var store=__webpack_require__(
/*! ../internals/shared-store */
"../node_modules/core-js/internals/shared-store.js");var functionToString=uncurryThis(Function.toString);if(!isCallable(store.inspectSource)){store.inspectSource=function(it){return functionToString(it);};}
module.exports=store.inspectSource;}),"../node_modules/core-js/internals/install-error-cause.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/internals/install-error-cause.js ***!
  \****************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isObject=__webpack_require__(
/*! ../internals/is-object */
"../node_modules/core-js/internals/is-object.js");var createNonEnumerableProperty=__webpack_require__(
/*! ../internals/create-non-enumerable-property */
"../node_modules/core-js/internals/create-non-enumerable-property.js");module.exports=function(O,options){if(isObject(options)&&'cause'in options){createNonEnumerableProperty(O,'cause',options.cause);}};}),"../node_modules/core-js/internals/internal-state.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/internal-state.js ***!
  \***********************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var NATIVE_WEAK_MAP=__webpack_require__(
/*! ../internals/weak-map-basic-detection */
"../node_modules/core-js/internals/weak-map-basic-detection.js");var global=__webpack_require__(
/*! ../internals/global */
"../node_modules/core-js/internals/global.js");var isObject=__webpack_require__(
/*! ../internals/is-object */
"../node_modules/core-js/internals/is-object.js");var createNonEnumerableProperty=__webpack_require__(
/*! ../internals/create-non-enumerable-property */
"../node_modules/core-js/internals/create-non-enumerable-property.js");var hasOwn=__webpack_require__(
/*! ../internals/has-own-property */
"../node_modules/core-js/internals/has-own-property.js");var shared=__webpack_require__(
/*! ../internals/shared-store */
"../node_modules/core-js/internals/shared-store.js");var sharedKey=__webpack_require__(
/*! ../internals/shared-key */
"../node_modules/core-js/internals/shared-key.js");var hiddenKeys=__webpack_require__(
/*! ../internals/hidden-keys */
"../node_modules/core-js/internals/hidden-keys.js");var OBJECT_ALREADY_INITIALIZED='Object already initialized';var TypeError=global.TypeError;var WeakMap=global.WeakMap;var set,get,has;var enforce=function(it){return has(it)?get(it):set(it,{});};var getterFor=function(TYPE){return function(it){var state;if(!isObject(it)||(state=get(it)).type!==TYPE){throw TypeError('Incompatible receiver, '+TYPE+' required');}return state;};};if(NATIVE_WEAK_MAP||shared.state){var store=shared.state||(shared.state=new WeakMap());store.get=store.get;store.has=store.has;store.set=store.set;set=function(it,metadata){if(store.has(it))throw TypeError(OBJECT_ALREADY_INITIALIZED);metadata.facade=it;store.set(it,metadata);return metadata;};get=function(it){return store.get(it)||{};};has=function(it){return store.has(it);};}else{var STATE=sharedKey('state');hiddenKeys[STATE]=true;set=function(it,metadata){if(hasOwn(it,STATE))throw TypeError(OBJECT_ALREADY_INITIALIZED);metadata.facade=it;createNonEnumerableProperty(it,STATE,metadata);return metadata;};get=function(it){return hasOwn(it,STATE)?it[STATE]:{};};has=function(it){return hasOwn(it,STATE);};}
module.exports={set:set,get:get,has:has,enforce:enforce,getterFor:getterFor};}),"../node_modules/core-js/internals/is-callable.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/is-callable.js ***!
  \********************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $documentAll=__webpack_require__(
/*! ../internals/document-all */
"../node_modules/core-js/internals/document-all.js");var documentAll=$documentAll.all;module.exports=$documentAll.IS_HTMLDDA?function(argument){return typeof argument=='function'||argument===documentAll;}:function(argument){return typeof argument=='function';};}),"../node_modules/core-js/internals/is-forced.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-forced.js ***!
  \******************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var fails=__webpack_require__(
/*! ../internals/fails */
"../node_modules/core-js/internals/fails.js");var isCallable=__webpack_require__(
/*! ../internals/is-callable */
"../node_modules/core-js/internals/is-callable.js");var replacement=/#|\.prototype\./;var isForced=function(feature,detection){var value=data[normalize(feature)];return value==POLYFILL?true:value==NATIVE?false:isCallable(detection)?fails(detection):!!detection;};var normalize=isForced.normalize=function(string){return String(string).replace(replacement,'.').toLowerCase();};var data=isForced.data={};var NATIVE=isForced.NATIVE='N';var POLYFILL=isForced.POLYFILL='P';module.exports=isForced;}),"../node_modules/core-js/internals/is-null-or-undefined.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/is-null-or-undefined.js ***!
  \*****************************************************************/
((module)=>{"use strict";module.exports=function(it){return it===null||it===undefined;};}),"../node_modules/core-js/internals/is-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-object.js ***!
  \******************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isCallable=__webpack_require__(
/*! ../internals/is-callable */
"../node_modules/core-js/internals/is-callable.js");var $documentAll=__webpack_require__(
/*! ../internals/document-all */
"../node_modules/core-js/internals/document-all.js");var documentAll=$documentAll.all;module.exports=$documentAll.IS_HTMLDDA?function(it){return typeof it=='object'?it!==null:isCallable(it)||it===documentAll;}:function(it){return typeof it=='object'?it!==null:isCallable(it);};}),"../node_modules/core-js/internals/is-pure.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/is-pure.js ***!
  \****************************************************/
((module)=>{"use strict";module.exports=false;}),"../node_modules/core-js/internals/is-symbol.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-symbol.js ***!
  \******************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var getBuiltIn=__webpack_require__(
/*! ../internals/get-built-in */
"../node_modules/core-js/internals/get-built-in.js");var isCallable=__webpack_require__(
/*! ../internals/is-callable */
"../node_modules/core-js/internals/is-callable.js");var isPrototypeOf=__webpack_require__(
/*! ../internals/object-is-prototype-of */
"../node_modules/core-js/internals/object-is-prototype-of.js");var USE_SYMBOL_AS_UID=__webpack_require__(
/*! ../internals/use-symbol-as-uid */
"../node_modules/core-js/internals/use-symbol-as-uid.js");var $Object=Object;module.exports=USE_SYMBOL_AS_UID?function(it){return typeof it=='symbol';}:function(it){var $Symbol=getBuiltIn('Symbol');return isCallable($Symbol)&&isPrototypeOf($Symbol.prototype,$Object(it));};}),"../node_modules/core-js/internals/length-of-array-like.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/length-of-array-like.js ***!
  \*****************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var toLength=__webpack_require__(
/*! ../internals/to-length */
"../node_modules/core-js/internals/to-length.js");module.exports=function(obj){return toLength(obj.length);};}),"../node_modules/core-js/internals/make-built-in.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/make-built-in.js ***!
  \**********************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var uncurryThis=__webpack_require__(
/*! ../internals/function-uncurry-this */
"../node_modules/core-js/internals/function-uncurry-this.js");var fails=__webpack_require__(
/*! ../internals/fails */
"../node_modules/core-js/internals/fails.js");var isCallable=__webpack_require__(
/*! ../internals/is-callable */
"../node_modules/core-js/internals/is-callable.js");var hasOwn=__webpack_require__(
/*! ../internals/has-own-property */
"../node_modules/core-js/internals/has-own-property.js");var DESCRIPTORS=__webpack_require__(
/*! ../internals/descriptors */
"../node_modules/core-js/internals/descriptors.js");var CONFIGURABLE_FUNCTION_NAME=(__webpack_require__(
/*! ../internals/function-name */
"../node_modules/core-js/internals/function-name.js").CONFIGURABLE);var inspectSource=__webpack_require__(
/*! ../internals/inspect-source */
"../node_modules/core-js/internals/inspect-source.js");var InternalStateModule=__webpack_require__(
/*! ../internals/internal-state */
"../node_modules/core-js/internals/internal-state.js");var enforceInternalState=InternalStateModule.enforce;var getInternalState=InternalStateModule.get;var $String=String;var defineProperty=Object.defineProperty;var stringSlice=uncurryThis(''.slice);var replace=uncurryThis(''.replace);var join=uncurryThis([].join);var CONFIGURABLE_LENGTH=DESCRIPTORS&&!fails(function(){return defineProperty(function(){},'length',{value:8}).length!==8;});var TEMPLATE=String(String).split('String');var makeBuiltIn=module.exports=function(value,name,options){if(stringSlice($String(name),0,7)==='Symbol('){name='['+replace($String(name),/^Symbol\(([^)]*)\)/,'$1')+']';}
if(options&&options.getter)name='get '+name;if(options&&options.setter)name='set '+name;if(!hasOwn(value,'name')||(CONFIGURABLE_FUNCTION_NAME&&value.name!==name)){if(DESCRIPTORS)defineProperty(value,'name',{value:name,configurable:true});else value.name=name;}
if(CONFIGURABLE_LENGTH&&options&&hasOwn(options,'arity')&&value.length!==options.arity){defineProperty(value,'length',{value:options.arity});}
try{if(options&&hasOwn(options,'constructor')&&options.constructor){if(DESCRIPTORS)defineProperty(value,'prototype',{writable:false});}else if(value.prototype)value.prototype=undefined;}catch(error){}
var state=enforceInternalState(value);if(!hasOwn(state,'source')){state.source=join(TEMPLATE,typeof name=='string'?name:'');}return value;};Function.prototype.toString=makeBuiltIn(function toString(){return isCallable(this)&&getInternalState(this).source||inspectSource(this);},'toString');}),"../node_modules/core-js/internals/math-trunc.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/math-trunc.js ***!
  \*******************************************************/
((module)=>{"use strict";var ceil=Math.ceil;var floor=Math.floor;module.exports=Math.trunc||function trunc(x){var n=+x;return(n>0?floor:ceil)(n);};}),"../node_modules/core-js/internals/normalize-string-argument.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/internals/normalize-string-argument.js ***!
  \**********************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var toString=__webpack_require__(
/*! ../internals/to-string */
"../node_modules/core-js/internals/to-string.js");module.exports=function(argument,$default){return argument===undefined?arguments.length<2?'':$default:toString(argument);};}),"../node_modules/core-js/internals/object-define-property.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/object-define-property.js ***!
  \*******************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var DESCRIPTORS=__webpack_require__(
/*! ../internals/descriptors */
"../node_modules/core-js/internals/descriptors.js");var IE8_DOM_DEFINE=__webpack_require__(
/*! ../internals/ie8-dom-define */
"../node_modules/core-js/internals/ie8-dom-define.js");var V8_PROTOTYPE_DEFINE_BUG=__webpack_require__(
/*! ../internals/v8-prototype-define-bug */
"../node_modules/core-js/internals/v8-prototype-define-bug.js");var anObject=__webpack_require__(
/*! ../internals/an-object */
"../node_modules/core-js/internals/an-object.js");var toPropertyKey=__webpack_require__(
/*! ../internals/to-property-key */
"../node_modules/core-js/internals/to-property-key.js");var $TypeError=TypeError;var $defineProperty=Object.defineProperty;var $getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;var ENUMERABLE='enumerable';var CONFIGURABLE='configurable';var WRITABLE='writable';exports.f=DESCRIPTORS?V8_PROTOTYPE_DEFINE_BUG?function defineProperty(O,P,Attributes){anObject(O);P=toPropertyKey(P);anObject(Attributes);if(typeof O==='function'&&P==='prototype'&&'value'in Attributes&&WRITABLE in Attributes&&!Attributes[WRITABLE]){var current=$getOwnPropertyDescriptor(O,P);if(current&&current[WRITABLE]){O[P]=Attributes.value;Attributes={configurable:CONFIGURABLE in Attributes?Attributes[CONFIGURABLE]:current[CONFIGURABLE],enumerable:ENUMERABLE in Attributes?Attributes[ENUMERABLE]:current[ENUMERABLE],writable:false};}}return $defineProperty(O,P,Attributes);}:$defineProperty:function defineProperty(O,P,Attributes){anObject(O);P=toPropertyKey(P);anObject(Attributes);if(IE8_DOM_DEFINE)try{return $defineProperty(O,P,Attributes);}catch(error){}
if('get'in Attributes||'set'in Attributes)throw $TypeError('Accessors not supported');if('value'in Attributes)O[P]=Attributes.value;return O;};}),"../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*******************************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var DESCRIPTORS=__webpack_require__(
/*! ../internals/descriptors */
"../node_modules/core-js/internals/descriptors.js");var call=__webpack_require__(
/*! ../internals/function-call */
"../node_modules/core-js/internals/function-call.js");var propertyIsEnumerableModule=__webpack_require__(
/*! ../internals/object-property-is-enumerable */
"../node_modules/core-js/internals/object-property-is-enumerable.js");var createPropertyDescriptor=__webpack_require__(
/*! ../internals/create-property-descriptor */
"../node_modules/core-js/internals/create-property-descriptor.js");var toIndexedObject=__webpack_require__(
/*! ../internals/to-indexed-object */
"../node_modules/core-js/internals/to-indexed-object.js");var toPropertyKey=__webpack_require__(
/*! ../internals/to-property-key */
"../node_modules/core-js/internals/to-property-key.js");var hasOwn=__webpack_require__(
/*! ../internals/has-own-property */
"../node_modules/core-js/internals/has-own-property.js");var IE8_DOM_DEFINE=__webpack_require__(
/*! ../internals/ie8-dom-define */
"../node_modules/core-js/internals/ie8-dom-define.js");var $getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;exports.f=DESCRIPTORS?$getOwnPropertyDescriptor:function getOwnPropertyDescriptor(O,P){O=toIndexedObject(O);P=toPropertyKey(P);if(IE8_DOM_DEFINE)try{return $getOwnPropertyDescriptor(O,P);}catch(error){}
if(hasOwn(O,P))return createPropertyDescriptor(!call(propertyIsEnumerableModule.f,O,P),O[P]);};}),"../node_modules/core-js/internals/object-get-own-property-names.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-names.js ***!
  \**************************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var internalObjectKeys=__webpack_require__(
/*! ../internals/object-keys-internal */
"../node_modules/core-js/internals/object-keys-internal.js");var enumBugKeys=__webpack_require__(
/*! ../internals/enum-bug-keys */
"../node_modules/core-js/internals/enum-bug-keys.js");var hiddenKeys=enumBugKeys.concat('length','prototype');exports.f=Object.getOwnPropertyNames||function getOwnPropertyNames(O){return internalObjectKeys(O,hiddenKeys);};}),"../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \****************************************************************************/
((__unused_webpack_module,exports)=>{"use strict";exports.f=Object.getOwnPropertySymbols;}),"../node_modules/core-js/internals/object-is-prototype-of.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/object-is-prototype-of.js ***!
  \*******************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var uncurryThis=__webpack_require__(
/*! ../internals/function-uncurry-this */
"../node_modules/core-js/internals/function-uncurry-this.js");module.exports=uncurryThis({}.isPrototypeOf);}),"../node_modules/core-js/internals/object-keys-internal.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/object-keys-internal.js ***!
  \*****************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var uncurryThis=__webpack_require__(
/*! ../internals/function-uncurry-this */
"../node_modules/core-js/internals/function-uncurry-this.js");var hasOwn=__webpack_require__(
/*! ../internals/has-own-property */
"../node_modules/core-js/internals/has-own-property.js");var toIndexedObject=__webpack_require__(
/*! ../internals/to-indexed-object */
"../node_modules/core-js/internals/to-indexed-object.js");var indexOf=(__webpack_require__(
/*! ../internals/array-includes */
"../node_modules/core-js/internals/array-includes.js").indexOf);var hiddenKeys=__webpack_require__(
/*! ../internals/hidden-keys */
"../node_modules/core-js/internals/hidden-keys.js");var push=uncurryThis([].push);module.exports=function(object,names){var O=toIndexedObject(object);var i=0;var result=[];var key;for(key in O)!hasOwn(hiddenKeys,key)&&hasOwn(O,key)&&push(result,key);while(names.length>i)if(hasOwn(O,key=names[i++])){~indexOf(result,key)||push(result,key);}
return result;};}),"../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \**************************************************************************/
((__unused_webpack_module,exports)=>{"use strict";var $propertyIsEnumerable={}.propertyIsEnumerable;var getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;var NASHORN_BUG=getOwnPropertyDescriptor&&!$propertyIsEnumerable.call({1:2},1);exports.f=NASHORN_BUG?function propertyIsEnumerable(V){var descriptor=getOwnPropertyDescriptor(this,V);return!!descriptor&&descriptor.enumerable;}:$propertyIsEnumerable;}),"../node_modules/core-js/internals/object-set-prototype-of.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/object-set-prototype-of.js ***!
  \********************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var uncurryThisAccessor=__webpack_require__(
/*! ../internals/function-uncurry-this-accessor */
"../node_modules/core-js/internals/function-uncurry-this-accessor.js");var anObject=__webpack_require__(
/*! ../internals/an-object */
"../node_modules/core-js/internals/an-object.js");var aPossiblePrototype=__webpack_require__(
/*! ../internals/a-possible-prototype */
"../node_modules/core-js/internals/a-possible-prototype.js");module.exports=Object.setPrototypeOf||('__proto__'in{}?function(){var CORRECT_SETTER=false;var test={};var setter;try{setter=uncurryThisAccessor(Object.prototype,'__proto__','set');setter(test,[]);CORRECT_SETTER=test instanceof Array;}catch(error){}
return function setPrototypeOf(O,proto){anObject(O);aPossiblePrototype(proto);if(CORRECT_SETTER)setter(O,proto);else O.__proto__=proto;return O;};}():undefined);}),"../node_modules/core-js/internals/ordinary-to-primitive.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \******************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var call=__webpack_require__(
/*! ../internals/function-call */
"../node_modules/core-js/internals/function-call.js");var isCallable=__webpack_require__(
/*! ../internals/is-callable */
"../node_modules/core-js/internals/is-callable.js");var isObject=__webpack_require__(
/*! ../internals/is-object */
"../node_modules/core-js/internals/is-object.js");var $TypeError=TypeError;module.exports=function(input,pref){var fn,val;if(pref==='string'&&isCallable(fn=input.toString)&&!isObject(val=call(fn,input)))return val;if(isCallable(fn=input.valueOf)&&!isObject(val=call(fn,input)))return val;if(pref!=='string'&&isCallable(fn=input.toString)&&!isObject(val=call(fn,input)))return val;throw $TypeError("Can't convert object to primitive value");};}),"../node_modules/core-js/internals/own-keys.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/internals/own-keys.js ***!
  \*****************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var getBuiltIn=__webpack_require__(
/*! ../internals/get-built-in */
"../node_modules/core-js/internals/get-built-in.js");var uncurryThis=__webpack_require__(
/*! ../internals/function-uncurry-this */
"../node_modules/core-js/internals/function-uncurry-this.js");var getOwnPropertyNamesModule=__webpack_require__(
/*! ../internals/object-get-own-property-names */
"../node_modules/core-js/internals/object-get-own-property-names.js");var getOwnPropertySymbolsModule=__webpack_require__(
/*! ../internals/object-get-own-property-symbols */
"../node_modules/core-js/internals/object-get-own-property-symbols.js");var anObject=__webpack_require__(
/*! ../internals/an-object */
"../node_modules/core-js/internals/an-object.js");var concat=uncurryThis([].concat);module.exports=getBuiltIn('Reflect','ownKeys')||function ownKeys(it){var keys=getOwnPropertyNamesModule.f(anObject(it));var getOwnPropertySymbols=getOwnPropertySymbolsModule.f;return getOwnPropertySymbols?concat(keys,getOwnPropertySymbols(it)):keys;};}),"../node_modules/core-js/internals/proxy-accessor.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/proxy-accessor.js ***!
  \***********************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var defineProperty=(__webpack_require__(
/*! ../internals/object-define-property */
"../node_modules/core-js/internals/object-define-property.js").f);module.exports=function(Target,Source,key){key in Target||defineProperty(Target,key,{configurable:true,get:function(){return Source[key];},set:function(it){Source[key]=it;}});};}),"../node_modules/core-js/internals/require-object-coercible.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/require-object-coercible.js ***!
  \*********************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isNullOrUndefined=__webpack_require__(
/*! ../internals/is-null-or-undefined */
"../node_modules/core-js/internals/is-null-or-undefined.js");var $TypeError=TypeError;module.exports=function(it){if(isNullOrUndefined(it))throw $TypeError("Can't call method on "+it);return it;};}),"../node_modules/core-js/internals/shared-key.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/shared-key.js ***!
  \*******************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var shared=__webpack_require__(
/*! ../internals/shared */
"../node_modules/core-js/internals/shared.js");var uid=__webpack_require__(
/*! ../internals/uid */
"../node_modules/core-js/internals/uid.js");var keys=shared('keys');module.exports=function(key){return keys[key]||(keys[key]=uid(key));};}),"../node_modules/core-js/internals/shared-store.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/shared-store.js ***!
  \*********************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var global=__webpack_require__(
/*! ../internals/global */
"../node_modules/core-js/internals/global.js");var defineGlobalProperty=__webpack_require__(
/*! ../internals/define-global-property */
"../node_modules/core-js/internals/define-global-property.js");var SHARED='__core-js_shared__';var store=global[SHARED]||defineGlobalProperty(SHARED,{});module.exports=store;}),"../node_modules/core-js/internals/shared.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/shared.js ***!
  \***************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var IS_PURE=__webpack_require__(
/*! ../internals/is-pure */
"../node_modules/core-js/internals/is-pure.js");var store=__webpack_require__(
/*! ../internals/shared-store */
"../node_modules/core-js/internals/shared-store.js");(module.exports=function(key,value){return store[key]||(store[key]=value!==undefined?value:{});})('versions',[]).push({version:'3.32.0',mode:IS_PURE?'pure':'global',copyright:'© 2014-2023 Denis Pushkarev (zloirock.ru)',license:'https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE',source:'https://github.com/zloirock/core-js'});}),"../node_modules/core-js/internals/symbol-constructor-detection.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js/internals/symbol-constructor-detection.js ***!
  \*************************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var V8_VERSION=__webpack_require__(
/*! ../internals/engine-v8-version */
"../node_modules/core-js/internals/engine-v8-version.js");var fails=__webpack_require__(
/*! ../internals/fails */
"../node_modules/core-js/internals/fails.js");var global=__webpack_require__(
/*! ../internals/global */
"../node_modules/core-js/internals/global.js");var $String=global.String;module.exports=!!Object.getOwnPropertySymbols&&!fails(function(){var symbol=Symbol();return!$String(symbol)||!(Object(symbol)instanceof Symbol)||!Symbol.sham&&V8_VERSION&&V8_VERSION<41;});}),"../node_modules/core-js/internals/to-absolute-index.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/to-absolute-index.js ***!
  \**************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var toIntegerOrInfinity=__webpack_require__(
/*! ../internals/to-integer-or-infinity */
"../node_modules/core-js/internals/to-integer-or-infinity.js");var max=Math.max;var min=Math.min;module.exports=function(index,length){var integer=toIntegerOrInfinity(index);return integer<0?max(integer+length,0):min(integer,length);};}),"../node_modules/core-js/internals/to-indexed-object.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/to-indexed-object.js ***!
  \**************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var IndexedObject=__webpack_require__(
/*! ../internals/indexed-object */
"../node_modules/core-js/internals/indexed-object.js");var requireObjectCoercible=__webpack_require__(
/*! ../internals/require-object-coercible */
"../node_modules/core-js/internals/require-object-coercible.js");module.exports=function(it){return IndexedObject(requireObjectCoercible(it));};}),"../node_modules/core-js/internals/to-integer-or-infinity.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \*******************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var trunc=__webpack_require__(
/*! ../internals/math-trunc */
"../node_modules/core-js/internals/math-trunc.js");module.exports=function(argument){var number=+argument;return number!==number||number===0?0:trunc(number);};}),"../node_modules/core-js/internals/to-length.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-length.js ***!
  \******************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var toIntegerOrInfinity=__webpack_require__(
/*! ../internals/to-integer-or-infinity */
"../node_modules/core-js/internals/to-integer-or-infinity.js");var min=Math.min;module.exports=function(argument){return argument>0?min(toIntegerOrInfinity(argument),0x1FFFFFFFFFFFFF):0;};}),"../node_modules/core-js/internals/to-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-object.js ***!
  \******************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var requireObjectCoercible=__webpack_require__(
/*! ../internals/require-object-coercible */
"../node_modules/core-js/internals/require-object-coercible.js");var $Object=Object;module.exports=function(argument){return $Object(requireObjectCoercible(argument));};}),"../node_modules/core-js/internals/to-primitive.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/to-primitive.js ***!
  \*********************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var call=__webpack_require__(
/*! ../internals/function-call */
"../node_modules/core-js/internals/function-call.js");var isObject=__webpack_require__(
/*! ../internals/is-object */
"../node_modules/core-js/internals/is-object.js");var isSymbol=__webpack_require__(
/*! ../internals/is-symbol */
"../node_modules/core-js/internals/is-symbol.js");var getMethod=__webpack_require__(
/*! ../internals/get-method */
"../node_modules/core-js/internals/get-method.js");var ordinaryToPrimitive=__webpack_require__(
/*! ../internals/ordinary-to-primitive */
"../node_modules/core-js/internals/ordinary-to-primitive.js");var wellKnownSymbol=__webpack_require__(
/*! ../internals/well-known-symbol */
"../node_modules/core-js/internals/well-known-symbol.js");var $TypeError=TypeError;var TO_PRIMITIVE=wellKnownSymbol('toPrimitive');module.exports=function(input,pref){if(!isObject(input)||isSymbol(input))return input;var exoticToPrim=getMethod(input,TO_PRIMITIVE);var result;if(exoticToPrim){if(pref===undefined)pref='default';result=call(exoticToPrim,input,pref);if(!isObject(result)||isSymbol(result))return result;throw $TypeError("Can't convert object to primitive value");}
if(pref===undefined)pref='number';return ordinaryToPrimitive(input,pref);};}),"../node_modules/core-js/internals/to-property-key.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/to-property-key.js ***!
  \************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var toPrimitive=__webpack_require__(
/*! ../internals/to-primitive */
"../node_modules/core-js/internals/to-primitive.js");var isSymbol=__webpack_require__(
/*! ../internals/is-symbol */
"../node_modules/core-js/internals/is-symbol.js");module.exports=function(argument){var key=toPrimitive(argument,'string');return isSymbol(key)?key:key+'';};}),"../node_modules/core-js/internals/to-string-tag-support.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/to-string-tag-support.js ***!
  \******************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var wellKnownSymbol=__webpack_require__(
/*! ../internals/well-known-symbol */
"../node_modules/core-js/internals/well-known-symbol.js");var TO_STRING_TAG=wellKnownSymbol('toStringTag');var test={};test[TO_STRING_TAG]='z';module.exports=String(test)==='[object z]';}),"../node_modules/core-js/internals/to-string.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-string.js ***!
  \******************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var classof=__webpack_require__(
/*! ../internals/classof */
"../node_modules/core-js/internals/classof.js");var $String=String;module.exports=function(argument){if(classof(argument)==='Symbol')throw TypeError('Cannot convert a Symbol value to a string');return $String(argument);};}),"../node_modules/core-js/internals/try-to-string.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/try-to-string.js ***!
  \**********************************************************/
((module)=>{"use strict";var $String=String;module.exports=function(argument){try{return $String(argument);}catch(error){return'Object';}};}),"../node_modules/core-js/internals/uid.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/internals/uid.js ***!
  \************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var uncurryThis=__webpack_require__(
/*! ../internals/function-uncurry-this */
"../node_modules/core-js/internals/function-uncurry-this.js");var id=0;var postfix=Math.random();var toString=uncurryThis(1.0.toString);module.exports=function(key){return'Symbol('+(key===undefined?'':key)+')_'+toString(++id+postfix,36);};}),"../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \**************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var NATIVE_SYMBOL=__webpack_require__(
/*! ../internals/symbol-constructor-detection */
"../node_modules/core-js/internals/symbol-constructor-detection.js");module.exports=NATIVE_SYMBOL&&!Symbol.sham&&typeof Symbol.iterator=='symbol';}),"../node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \********************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var DESCRIPTORS=__webpack_require__(
/*! ../internals/descriptors */
"../node_modules/core-js/internals/descriptors.js");var fails=__webpack_require__(
/*! ../internals/fails */
"../node_modules/core-js/internals/fails.js");module.exports=DESCRIPTORS&&fails(function(){return Object.defineProperty(function(){},'prototype',{value:42,writable:false}).prototype!=42;});}),"../node_modules/core-js/internals/weak-map-basic-detection.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/weak-map-basic-detection.js ***!
  \*********************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var global=__webpack_require__(
/*! ../internals/global */
"../node_modules/core-js/internals/global.js");var isCallable=__webpack_require__(
/*! ../internals/is-callable */
"../node_modules/core-js/internals/is-callable.js");var WeakMap=global.WeakMap;module.exports=isCallable(WeakMap)&&/native code/.test(String(WeakMap));}),"../node_modules/core-js/internals/well-known-symbol.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/well-known-symbol.js ***!
  \**************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var global=__webpack_require__(
/*! ../internals/global */
"../node_modules/core-js/internals/global.js");var shared=__webpack_require__(
/*! ../internals/shared */
"../node_modules/core-js/internals/shared.js");var hasOwn=__webpack_require__(
/*! ../internals/has-own-property */
"../node_modules/core-js/internals/has-own-property.js");var uid=__webpack_require__(
/*! ../internals/uid */
"../node_modules/core-js/internals/uid.js");var NATIVE_SYMBOL=__webpack_require__(
/*! ../internals/symbol-constructor-detection */
"../node_modules/core-js/internals/symbol-constructor-detection.js");var USE_SYMBOL_AS_UID=__webpack_require__(
/*! ../internals/use-symbol-as-uid */
"../node_modules/core-js/internals/use-symbol-as-uid.js");var Symbol=global.Symbol;var WellKnownSymbolsStore=shared('wks');var createWellKnownSymbol=USE_SYMBOL_AS_UID?Symbol['for']||Symbol:Symbol&&Symbol.withoutSetter||uid;module.exports=function(name){if(!hasOwn(WellKnownSymbolsStore,name)){WellKnownSymbolsStore[name]=NATIVE_SYMBOL&&hasOwn(Symbol,name)?Symbol[name]:createWellKnownSymbol('Symbol.'+name);}return WellKnownSymbolsStore[name];};}),"../node_modules/core-js/internals/wrap-error-constructor-with-cause.js":
/*!******************************************************************************!*\
  !*** ../node_modules/core-js/internals/wrap-error-constructor-with-cause.js ***!
  \******************************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var getBuiltIn=__webpack_require__(
/*! ../internals/get-built-in */
"../node_modules/core-js/internals/get-built-in.js");var hasOwn=__webpack_require__(
/*! ../internals/has-own-property */
"../node_modules/core-js/internals/has-own-property.js");var createNonEnumerableProperty=__webpack_require__(
/*! ../internals/create-non-enumerable-property */
"../node_modules/core-js/internals/create-non-enumerable-property.js");var isPrototypeOf=__webpack_require__(
/*! ../internals/object-is-prototype-of */
"../node_modules/core-js/internals/object-is-prototype-of.js");var setPrototypeOf=__webpack_require__(
/*! ../internals/object-set-prototype-of */
"../node_modules/core-js/internals/object-set-prototype-of.js");var copyConstructorProperties=__webpack_require__(
/*! ../internals/copy-constructor-properties */
"../node_modules/core-js/internals/copy-constructor-properties.js");var proxyAccessor=__webpack_require__(
/*! ../internals/proxy-accessor */
"../node_modules/core-js/internals/proxy-accessor.js");var inheritIfRequired=__webpack_require__(
/*! ../internals/inherit-if-required */
"../node_modules/core-js/internals/inherit-if-required.js");var normalizeStringArgument=__webpack_require__(
/*! ../internals/normalize-string-argument */
"../node_modules/core-js/internals/normalize-string-argument.js");var installErrorCause=__webpack_require__(
/*! ../internals/install-error-cause */
"../node_modules/core-js/internals/install-error-cause.js");var installErrorStack=__webpack_require__(
/*! ../internals/error-stack-install */
"../node_modules/core-js/internals/error-stack-install.js");var DESCRIPTORS=__webpack_require__(
/*! ../internals/descriptors */
"../node_modules/core-js/internals/descriptors.js");var IS_PURE=__webpack_require__(
/*! ../internals/is-pure */
"../node_modules/core-js/internals/is-pure.js");module.exports=function(FULL_NAME,wrapper,FORCED,IS_AGGREGATE_ERROR){var STACK_TRACE_LIMIT='stackTraceLimit';var OPTIONS_POSITION=IS_AGGREGATE_ERROR?2:1;var path=FULL_NAME.split('.');var ERROR_NAME=path[path.length-1];var OriginalError=getBuiltIn.apply(null,path);if(!OriginalError)return;var OriginalErrorPrototype=OriginalError.prototype;if(!IS_PURE&&hasOwn(OriginalErrorPrototype,'cause'))delete OriginalErrorPrototype.cause;if(!FORCED)return OriginalError;var BaseError=getBuiltIn('Error');var WrappedError=wrapper(function(a,b){var message=normalizeStringArgument(IS_AGGREGATE_ERROR?b:a,undefined);var result=IS_AGGREGATE_ERROR?new OriginalError(a):new OriginalError();if(message!==undefined)createNonEnumerableProperty(result,'message',message);installErrorStack(result,WrappedError,result.stack,2);if(this&&isPrototypeOf(OriginalErrorPrototype,this))inheritIfRequired(result,this,WrappedError);if(arguments.length>OPTIONS_POSITION)installErrorCause(result,arguments[OPTIONS_POSITION]);return result;});WrappedError.prototype=OriginalErrorPrototype;if(ERROR_NAME!=='Error'){if(setPrototypeOf)setPrototypeOf(WrappedError,BaseError);else copyConstructorProperties(WrappedError,BaseError,{name:true});}else if(DESCRIPTORS&&STACK_TRACE_LIMIT in OriginalError){proxyAccessor(WrappedError,OriginalError,STACK_TRACE_LIMIT);proxyAccessor(WrappedError,OriginalError,'prepareStackTrace');}
copyConstructorProperties(WrappedError,OriginalError);if(!IS_PURE)try{if(OriginalErrorPrototype.name!==ERROR_NAME){createNonEnumerableProperty(OriginalErrorPrototype,'name',ERROR_NAME);}
OriginalErrorPrototype.constructor=WrappedError;}catch(error){}
return WrappedError;};}),"../node_modules/core-js/modules/es.error.cause.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es.error.cause.js ***!
  \*********************************************************/
((__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__(
/*! ../internals/export */
"../node_modules/core-js/internals/export.js");var global=__webpack_require__(
/*! ../internals/global */
"../node_modules/core-js/internals/global.js");var apply=__webpack_require__(
/*! ../internals/function-apply */
"../node_modules/core-js/internals/function-apply.js");var wrapErrorConstructorWithCause=__webpack_require__(
/*! ../internals/wrap-error-constructor-with-cause */
"../node_modules/core-js/internals/wrap-error-constructor-with-cause.js");var WEB_ASSEMBLY='WebAssembly';var WebAssembly=global[WEB_ASSEMBLY];var FORCED=Error('e',{cause:7}).cause!==7;var exportGlobalErrorCauseWrapper=function(ERROR_NAME,wrapper){var O={};O[ERROR_NAME]=wrapErrorConstructorWithCause(ERROR_NAME,wrapper,FORCED);$({global:true,constructor:true,arity:1,forced:FORCED},O);};var exportWebAssemblyErrorCauseWrapper=function(ERROR_NAME,wrapper){if(WebAssembly&&WebAssembly[ERROR_NAME]){var O={};O[ERROR_NAME]=wrapErrorConstructorWithCause(WEB_ASSEMBLY+'.'+ERROR_NAME,wrapper,FORCED);$({target:WEB_ASSEMBLY,stat:true,constructor:true,arity:1,forced:FORCED},O);}};exportGlobalErrorCauseWrapper('Error',function(init){return function Error(message){return apply(init,this,arguments);};});exportGlobalErrorCauseWrapper('EvalError',function(init){return function EvalError(message){return apply(init,this,arguments);};});exportGlobalErrorCauseWrapper('RangeError',function(init){return function RangeError(message){return apply(init,this,arguments);};});exportGlobalErrorCauseWrapper('ReferenceError',function(init){return function ReferenceError(message){return apply(init,this,arguments);};});exportGlobalErrorCauseWrapper('SyntaxError',function(init){return function SyntaxError(message){return apply(init,this,arguments);};});exportGlobalErrorCauseWrapper('TypeError',function(init){return function TypeError(message){return apply(init,this,arguments);};});exportGlobalErrorCauseWrapper('URIError',function(init){return function URIError(message){return apply(init,this,arguments);};});exportWebAssemblyErrorCauseWrapper('CompileError',function(init){return function CompileError(message){return apply(init,this,arguments);};});exportWebAssemblyErrorCauseWrapper('LinkError',function(init){return function LinkError(message){return apply(init,this,arguments);};});exportWebAssemblyErrorCauseWrapper('RuntimeError',function(init){return function RuntimeError(message){return apply(init,this,arguments);};});}),"../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
((module)=>{function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}
module.exports=_interopRequireDefault,module.exports.__esModule=true,module.exports["default"]=module.exports;})},__webpack_require__=>{var __webpack_exec__=(moduleId)=>(__webpack_require__(__webpack_require__.s=moduleId))
var __webpack_exports__=(__webpack_exec__("../assets/dev/js/frontend/modules.js"));}]);
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function(){'use strict'
var keyCounter=0
var allWaypoints={}
function Waypoint(options){if(!options){throw new Error('No options passed to Waypoint constructor')}
if(!options.element){throw new Error('No element option passed to Waypoint constructor')}
if(!options.handler){throw new Error('No handler option passed to Waypoint constructor')}
this.key='waypoint-'+keyCounter
this.options=Waypoint.Adapter.extend({},Waypoint.defaults,options)
this.element=this.options.element
this.adapter=new Waypoint.Adapter(this.element)
this.callback=options.handler
this.axis=this.options.horizontal?'horizontal':'vertical'
this.enabled=this.options.enabled
this.triggerPoint=null
this.group=Waypoint.Group.findOrCreate({name:this.options.group,axis:this.axis})
this.context=Waypoint.Context.findOrCreateByElement(this.options.context)
if(Waypoint.offsetAliases[this.options.offset]){this.options.offset=Waypoint.offsetAliases[this.options.offset]}
this.group.add(this)
this.context.add(this)
allWaypoints[this.key]=this
keyCounter+=1}
Waypoint.prototype.queueTrigger=function(direction){this.group.queueTrigger(this,direction)}
Waypoint.prototype.trigger=function(args){if(!this.enabled){return}
if(this.callback){this.callback.apply(this,args)}}
Waypoint.prototype.destroy=function(){this.context.remove(this)
this.group.remove(this)
delete allWaypoints[this.key]}
Waypoint.prototype.disable=function(){this.enabled=false
return this}
Waypoint.prototype.enable=function(){this.context.refresh()
this.enabled=true
return this}
Waypoint.prototype.next=function(){return this.group.next(this)}
Waypoint.prototype.previous=function(){return this.group.previous(this)}
Waypoint.invokeAll=function(method){var allWaypointsArray=[]
for(var waypointKey in allWaypoints){allWaypointsArray.push(allWaypoints[waypointKey])}
for(var i=0,end=allWaypointsArray.length;i<end;i++){allWaypointsArray[i][method]()}}
Waypoint.destroyAll=function(){Waypoint.invokeAll('destroy')}
Waypoint.disableAll=function(){Waypoint.invokeAll('disable')}
Waypoint.enableAll=function(){Waypoint.Context.refreshAll()
for(var waypointKey in allWaypoints){allWaypoints[waypointKey].enabled=true}
return this}
Waypoint.refreshAll=function(){Waypoint.Context.refreshAll()}
Waypoint.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight}
Waypoint.viewportWidth=function(){return document.documentElement.clientWidth}
Waypoint.adapters=[]
Waypoint.defaults={context:window,continuous:true,enabled:true,group:'default',horizontal:false,offset:0}
Waypoint.offsetAliases={'bottom-in-view':function(){return this.context.innerHeight()-this.adapter.outerHeight()},'right-in-view':function(){return this.context.innerWidth()-this.adapter.outerWidth()}}
window.Waypoint=Waypoint}());(function(){'use strict'
function requestAnimationFrameShim(callback){window.setTimeout(callback,1000/60)}
var keyCounter=0
var contexts={}
var Waypoint=window.Waypoint
var oldWindowLoad=window.onload
function Context(element){this.element=element
this.Adapter=Waypoint.Adapter
this.adapter=new this.Adapter(element)
this.key='waypoint-context-'+keyCounter
this.didScroll=false
this.didResize=false
this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()}
this.waypoints={vertical:{},horizontal:{}}
element.waypointContextKey=this.key
contexts[element.waypointContextKey]=this
keyCounter+=1
if(!Waypoint.windowContext){Waypoint.windowContext=true
Waypoint.windowContext=new Context(window)}
this.createThrottledScrollHandler()
this.createThrottledResizeHandler()}
Context.prototype.add=function(waypoint){var axis=waypoint.options.horizontal?'horizontal':'vertical'
this.waypoints[axis][waypoint.key]=waypoint
this.refresh()}
Context.prototype.checkEmpty=function(){var horizontalEmpty=this.Adapter.isEmptyObject(this.waypoints.horizontal)
var verticalEmpty=this.Adapter.isEmptyObject(this.waypoints.vertical)
var isWindow=this.element==this.element.window
if(horizontalEmpty&&verticalEmpty&&!isWindow){this.adapter.off('.waypoints')
delete contexts[this.key]}}
Context.prototype.createThrottledResizeHandler=function(){var self=this
function resizeHandler(){self.handleResize()
self.didResize=false}
this.adapter.on('resize.waypoints',function(){if(!self.didResize){self.didResize=true
Waypoint.requestAnimationFrame(resizeHandler)}})}
Context.prototype.createThrottledScrollHandler=function(){var self=this
function scrollHandler(){self.handleScroll()
self.didScroll=false}
this.adapter.on('scroll.waypoints',function(){if(!self.didScroll||Waypoint.isTouch){self.didScroll=true
Waypoint.requestAnimationFrame(scrollHandler)}})}
Context.prototype.handleResize=function(){Waypoint.Context.refreshAll()}
Context.prototype.handleScroll=function(){var triggeredGroups={}
var axes={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:'right',backward:'left'},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:'down',backward:'up'}}
for(var axisKey in axes){var axis=axes[axisKey]
var isForward=axis.newScroll>axis.oldScroll
var direction=isForward?axis.forward:axis.backward
for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey]
if(waypoint.triggerPoint===null){continue}
var wasBeforeTriggerPoint=axis.oldScroll<waypoint.triggerPoint
var nowAfterTriggerPoint=axis.newScroll>=waypoint.triggerPoint
var crossedForward=wasBeforeTriggerPoint&&nowAfterTriggerPoint
var crossedBackward=!wasBeforeTriggerPoint&&!nowAfterTriggerPoint
if(crossedForward||crossedBackward){waypoint.queueTrigger(direction)
triggeredGroups[waypoint.group.id]=waypoint.group}}}
for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers()}
this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll}}
Context.prototype.innerHeight=function(){if(this.element==this.element.window){return Waypoint.viewportHeight()}
return this.adapter.innerHeight()}
Context.prototype.remove=function(waypoint){delete this.waypoints[waypoint.axis][waypoint.key]
this.checkEmpty()}
Context.prototype.innerWidth=function(){if(this.element==this.element.window){return Waypoint.viewportWidth()}
return this.adapter.innerWidth()}
Context.prototype.destroy=function(){var allWaypoints=[]
for(var axis in this.waypoints){for(var waypointKey in this.waypoints[axis]){allWaypoints.push(this.waypoints[axis][waypointKey])}}
for(var i=0,end=allWaypoints.length;i<end;i++){allWaypoints[i].destroy()}}
Context.prototype.refresh=function(){var isWindow=this.element==this.element.window
var contextOffset=isWindow?undefined:this.adapter.offset()
var triggeredGroups={}
var axes
this.handleScroll()
axes={horizontal:{contextOffset:isWindow?0:contextOffset.left,contextScroll:isWindow?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:'right',backward:'left',offsetProp:'left'},vertical:{contextOffset:isWindow?0:contextOffset.top,contextScroll:isWindow?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:'down',backward:'up',offsetProp:'top'}}
for(var axisKey in axes){var axis=axes[axisKey]
for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey]
var adjustment=waypoint.options.offset
var oldTriggerPoint=waypoint.triggerPoint
var elementOffset=0
var freshWaypoint=oldTriggerPoint==null
var contextModifier,wasBeforeScroll,nowAfterScroll
var triggeredBackward,triggeredForward
if(waypoint.element!==waypoint.element.window){elementOffset=waypoint.adapter.offset()[axis.offsetProp]}
if(typeof adjustment==='function'){adjustment=adjustment.apply(waypoint)}
else if(typeof adjustment==='string'){adjustment=parseFloat(adjustment)
if(waypoint.options.offset.indexOf('%')>-1){adjustment=Math.ceil(axis.contextDimension*adjustment/100)}}
contextModifier=axis.contextScroll-axis.contextOffset
waypoint.triggerPoint=Math.floor(elementOffset+contextModifier-adjustment)
wasBeforeScroll=oldTriggerPoint<axis.oldScroll
nowAfterScroll=waypoint.triggerPoint>=axis.oldScroll
triggeredBackward=wasBeforeScroll&&nowAfterScroll
triggeredForward=!wasBeforeScroll&&!nowAfterScroll
if(!freshWaypoint&&triggeredBackward){waypoint.queueTrigger(axis.backward)
triggeredGroups[waypoint.group.id]=waypoint.group}
else if(!freshWaypoint&&triggeredForward){waypoint.queueTrigger(axis.forward)
triggeredGroups[waypoint.group.id]=waypoint.group}
else if(freshWaypoint&&axis.oldScroll>=waypoint.triggerPoint){waypoint.queueTrigger(axis.forward)
triggeredGroups[waypoint.group.id]=waypoint.group}}}
Waypoint.requestAnimationFrame(function(){for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers()}})
return this}
Context.findOrCreateByElement=function(element){return Context.findByElement(element)||new Context(element)}
Context.refreshAll=function(){for(var contextId in contexts){contexts[contextId].refresh()}}
Context.findByElement=function(element){return contexts[element.waypointContextKey]}
window.onload=function(){if(oldWindowLoad){oldWindowLoad()}
Context.refreshAll()}
Waypoint.requestAnimationFrame=function(callback){var requestFn=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||requestAnimationFrameShim
requestFn.call(window,callback)}
Waypoint.Context=Context}());(function(){'use strict'
function byTriggerPoint(a,b){return a.triggerPoint-b.triggerPoint}
function byReverseTriggerPoint(a,b){return b.triggerPoint-a.triggerPoint}
var groups={vertical:{},horizontal:{}}
var Waypoint=window.Waypoint
function Group(options){this.name=options.name
this.axis=options.axis
this.id=this.name+'-'+this.axis
this.waypoints=[]
this.clearTriggerQueues()
groups[this.axis][this.name]=this}
Group.prototype.add=function(waypoint){this.waypoints.push(waypoint)}
Group.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}}
Group.prototype.flushTriggers=function(){for(var direction in this.triggerQueues){var waypoints=this.triggerQueues[direction]
var reverse=direction==='up'||direction==='left'
waypoints.sort(reverse?byReverseTriggerPoint:byTriggerPoint)
for(var i=0,end=waypoints.length;i<end;i+=1){var waypoint=waypoints[i]
if(waypoint.options.continuous||i===waypoints.length-1){waypoint.trigger([direction])}}}
this.clearTriggerQueues()}
Group.prototype.next=function(waypoint){this.waypoints.sort(byTriggerPoint)
var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
var isLast=index===this.waypoints.length-1
return isLast?null:this.waypoints[index+1]}
Group.prototype.previous=function(waypoint){this.waypoints.sort(byTriggerPoint)
var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
return index?this.waypoints[index-1]:null}
Group.prototype.queueTrigger=function(waypoint,direction){this.triggerQueues[direction].push(waypoint)}
Group.prototype.remove=function(waypoint){var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
if(index>-1){this.waypoints.splice(index,1)}}
Group.prototype.first=function(){return this.waypoints[0]}
Group.prototype.last=function(){return this.waypoints[this.waypoints.length-1]}
Group.findOrCreate=function(options){return groups[options.axis][options.name]||new Group(options)}
Waypoint.Group=Group}());(function(){'use strict'
var $=window.jQuery
var Waypoint=window.Waypoint
function JQueryAdapter(element){this.$element=$(element)}
$.each(['innerHeight','innerWidth','off','offset','on','outerHeight','outerWidth','scrollLeft','scrollTop'],function(i,method){JQueryAdapter.prototype[method]=function(){var args=Array.prototype.slice.call(arguments)
return this.$element[method].apply(this.$element,args)}})
$.each(['extend','inArray','isEmptyObject'],function(i,method){JQueryAdapter[method]=$[method]})
Waypoint.adapters.push({name:'jquery',Adapter:JQueryAdapter})
Waypoint.Adapter=JQueryAdapter}());(function(){'use strict'
var Waypoint=window.Waypoint
function createExtension(framework){return function(){var waypoints=[]
var overrides=arguments[0]
if(framework.isFunction(arguments[0])){overrides=framework.extend({},arguments[1])
overrides.handler=arguments[0]}
this.each(function(){var options=framework.extend({},overrides,{element:this})
if(typeof options.context==='string'){options.context=framework(this).closest(options.context)[0]}
waypoints.push(new Waypoint(options))})
return waypoints}}
if(window.jQuery){window.jQuery.fn.elementorWaypoint=createExtension(window.jQuery)}
if(window.Zepto){window.Zepto.fn.elementorWaypoint=createExtension(window.Zepto)}}());
/*! jQuery UI - v1.13.3 - 2024-04-26
* https://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(factory){"use strict";if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else{factory(jQuery);}}(function($){"use strict";$.ui=$.ui||{};$.ui.version="1.13.3";
/*!
 * jQuery UI :data 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
$.extend($.expr.pseudos,{data:$.expr.createPseudo?$.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName);};}):function(elem,i,match){return!!$.data(elem,match[3]);}});
/*!
 * jQuery UI Disable Selection 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
$.fn.extend({disableSelection:(function(){var eventType="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(eventType+".ui-disableSelection",function(event){event.preventDefault();});};})(),enableSelection:function(){return this.off(".ui-disableSelection");}});
/*!
 * jQuery UI Focusable 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
$.ui.focusable=function(element,hasTabindex){var map,mapName,img,focusableIfVisible,fieldset,nodeName=element.nodeName.toLowerCase();if("area"===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return false;}
img=$("img[usemap='#"+mapName+"']");return img.length>0&&img.is(":visible");}
if(/^(input|select|textarea|button|object)$/.test(nodeName)){focusableIfVisible=!element.disabled;if(focusableIfVisible){fieldset=$(element).closest("fieldset")[0];if(fieldset){focusableIfVisible=!fieldset.disabled;}}}else if("a"===nodeName){focusableIfVisible=element.href||hasTabindex;}else{focusableIfVisible=hasTabindex;}
return focusableIfVisible&&$(element).is(":visible")&&visible($(element));};function visible(element){var visibility=element.css("visibility");while(visibility==="inherit"){element=element.parent();visibility=element.css("visibility");}
return visibility==="visible";}
$.extend($.expr.pseudos,{focusable:function(element){return $.ui.focusable(element,$.attr(element,"tabindex")!=null);}});$.fn._form=function(){return typeof this[0].form==="string"?this.closest("form"):$(this[0].form);};
/*!
 * jQuery UI Form Reset Mixin 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
$.ui.formResetMixin={_formResetHandler:function(){var form=$(this);setTimeout(function(){var instances=form.data("ui-form-reset-instances");$.each(instances,function(){this.refresh();});});},_bindFormResetHandler:function(){this.form=this.element._form();if(!this.form.length){return;}
var instances=this.form.data("ui-form-reset-instances")||[];if(!instances.length){this.form.on("reset.ui-form-reset",this._formResetHandler);}
instances.push(this);this.form.data("ui-form-reset-instances",instances);},_unbindFormResetHandler:function(){if(!this.form.length){return;}
var instances=this.form.data("ui-form-reset-instances");instances.splice($.inArray(this,instances),1);if(instances.length){this.form.data("ui-form-reset-instances",instances);}else{this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");}}};$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
/*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 *
 */
if(!$.expr.pseudos){$.expr.pseudos=$.expr[":"];}
if(!$.uniqueSort){$.uniqueSort=$.unique;}
if(!$.escapeSelector){var rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;var fcssescape=function(ch,asCodePoint){if(asCodePoint){if(ch==="\0"){return"\uFFFD";}
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}
return"\\"+ch;};$.escapeSelector=function(sel){return(sel+"").replace(rcssescape,fcssescape);};}
if(!$.fn.even||!$.fn.odd){$.fn.extend({even:function(){return this.filter(function(i){return i%2===0;});},odd:function(){return this.filter(function(i){return i%2===1;});}});}
/*!
 * jQuery UI Keycode 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
$.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38};
/*!
 * jQuery UI Labels 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
$.fn.labels=function(){var ancestor,selector,id,labels,ancestors;if(!this.length){return this.pushStack([]);}
if(this[0].labels&&this[0].labels.length){return this.pushStack(this[0].labels);}
labels=this.eq(0).parents("label");id=this.attr("id");if(id){ancestor=this.eq(0).parents().last();ancestors=ancestor.add(ancestor.length?ancestor.siblings():this.siblings());selector="label[for='"+$.escapeSelector(id)+"']";labels=labels.add(ancestors.find(selector).addBack(selector));}
return this.pushStack(labels);};$.ui.plugin={add:function(module,option,set){var i,proto=$.ui[module].prototype;for(i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]]);}},call:function(instance,name,args,allowDisconnected){var i,set=instance.plugins[name];if(!set){return;}
if(!allowDisconnected&&(!instance.element[0].parentNode||instance.element[0].parentNode.nodeType===11)){return;}
for(i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args);}}}};
/*!
 * jQuery UI Position 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 *
 * https://api.jqueryui.com/position/
 */
(function(){var cachedScrollbarWidth,max=Math.max,abs=Math.abs,rhorizontal=/left|center|right/,rvertical=/top|center|bottom/,roffset=/[\+\-]\d+(\.[\d]+)?%?/,rposition=/^\w+/,rpercent=/%$/,_position=$.fn.position;function getOffsets(offsets,width,height){return[parseFloat(offsets[0])*(rpercent.test(offsets[0])?width/100:1),parseFloat(offsets[1])*(rpercent.test(offsets[1])?height/100:1)];}
function parseCss(element,property){return parseInt($.css(element,property),10)||0;}
function isWindow(obj){return obj!=null&&obj===obj.window;}
function getDimensions(elem){var raw=elem[0];if(raw.nodeType===9){return{width:elem.width(),height:elem.height(),offset:{top:0,left:0}};}
if(isWindow(raw)){return{width:elem.width(),height:elem.height(),offset:{top:elem.scrollTop(),left:elem.scrollLeft()}};}
if(raw.preventDefault){return{width:0,height:0,offset:{top:raw.pageY,left:raw.pageX}};}
return{width:elem.outerWidth(),height:elem.outerHeight(),offset:elem.offset()};}
$.position={scrollbarWidth:function(){if(cachedScrollbarWidth!==undefined){return cachedScrollbarWidth;}
var w1,w2,div=$("<div style="+"'display:block;position:absolute;width:200px;height:200px;overflow:hidden;'>"+"<div style='height:300px;width:auto;'></div></div>"),innerDiv=div.children()[0];$("body").append(div);w1=innerDiv.offsetWidth;div.css("overflow","scroll");w2=innerDiv.offsetWidth;if(w1===w2){w2=div[0].clientWidth;}
div.remove();return(cachedScrollbarWidth=w1-w2);},getScrollInfo:function(within){var overflowX=within.isWindow||within.isDocument?"":within.element.css("overflow-x"),overflowY=within.isWindow||within.isDocument?"":within.element.css("overflow-y"),hasOverflowX=overflowX==="scroll"||(overflowX==="auto"&&within.width<within.element[0].scrollWidth),hasOverflowY=overflowY==="scroll"||(overflowY==="auto"&&within.height<within.element[0].scrollHeight);return{width:hasOverflowY?$.position.scrollbarWidth():0,height:hasOverflowX?$.position.scrollbarWidth():0};},getWithinInfo:function(element){var withinElement=$(element||window),isElemWindow=isWindow(withinElement[0]),isDocument=!!withinElement[0]&&withinElement[0].nodeType===9,hasOffset=!isElemWindow&&!isDocument;return{element:withinElement,isWindow:isElemWindow,isDocument:isDocument,offset:hasOffset?$(element).offset():{left:0,top:0},scrollLeft:withinElement.scrollLeft(),scrollTop:withinElement.scrollTop(),width:withinElement.outerWidth(),height:withinElement.outerHeight()};}};$.fn.position=function(options){if(!options||!options.of){return _position.apply(this,arguments);}
options=$.extend({},options);var atOffset,targetWidth,targetHeight,targetOffset,basePosition,dimensions,target=typeof options.of==="string"?$(document).find(options.of):$(options.of),within=$.position.getWithinInfo(options.within),scrollInfo=$.position.getScrollInfo(within),collision=(options.collision||"flip").split(" "),offsets={};dimensions=getDimensions(target);if(target[0].preventDefault){options.at="left top";}
targetWidth=dimensions.width;targetHeight=dimensions.height;targetOffset=dimensions.offset;basePosition=$.extend({},targetOffset);$.each(["my","at"],function(){var pos=(options[this]||"").split(" "),horizontalOffset,verticalOffset;if(pos.length===1){pos=rhorizontal.test(pos[0])?pos.concat(["center"]):rvertical.test(pos[0])?["center"].concat(pos):["center","center"];}
pos[0]=rhorizontal.test(pos[0])?pos[0]:"center";pos[1]=rvertical.test(pos[1])?pos[1]:"center";horizontalOffset=roffset.exec(pos[0]);verticalOffset=roffset.exec(pos[1]);offsets[this]=[horizontalOffset?horizontalOffset[0]:0,verticalOffset?verticalOffset[0]:0];options[this]=[rposition.exec(pos[0])[0],rposition.exec(pos[1])[0]];});if(collision.length===1){collision[1]=collision[0];}
if(options.at[0]==="right"){basePosition.left+=targetWidth;}else if(options.at[0]==="center"){basePosition.left+=targetWidth/2;}
if(options.at[1]==="bottom"){basePosition.top+=targetHeight;}else if(options.at[1]==="center"){basePosition.top+=targetHeight/2;}
atOffset=getOffsets(offsets.at,targetWidth,targetHeight);basePosition.left+=atOffset[0];basePosition.top+=atOffset[1];return this.each(function(){var collisionPosition,using,elem=$(this),elemWidth=elem.outerWidth(),elemHeight=elem.outerHeight(),marginLeft=parseCss(this,"marginLeft"),marginTop=parseCss(this,"marginTop"),collisionWidth=elemWidth+marginLeft+parseCss(this,"marginRight")+
scrollInfo.width,collisionHeight=elemHeight+marginTop+parseCss(this,"marginBottom")+
scrollInfo.height,position=$.extend({},basePosition),myOffset=getOffsets(offsets.my,elem.outerWidth(),elem.outerHeight());if(options.my[0]==="right"){position.left-=elemWidth;}else if(options.my[0]==="center"){position.left-=elemWidth/2;}
if(options.my[1]==="bottom"){position.top-=elemHeight;}else if(options.my[1]==="center"){position.top-=elemHeight/2;}
position.left+=myOffset[0];position.top+=myOffset[1];collisionPosition={marginLeft:marginLeft,marginTop:marginTop};$.each(["left","top"],function(i,dir){if($.ui.position[collision[i]]){$.ui.position[collision[i]][dir](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:[atOffset[0]+myOffset[0],atOffset[1]+myOffset[1]],my:options.my,at:options.at,within:within,elem:elem});}});if(options.using){using=function(props){var left=targetOffset.left-position.left,right=left+targetWidth-elemWidth,top=targetOffset.top-position.top,bottom=top+targetHeight-elemHeight,feedback={target:{element:target,left:targetOffset.left,top:targetOffset.top,width:targetWidth,height:targetHeight},element:{element:elem,left:position.left,top:position.top,width:elemWidth,height:elemHeight},horizontal:right<0?"left":left>0?"right":"center",vertical:bottom<0?"top":top>0?"bottom":"middle"};if(targetWidth<elemWidth&&abs(left+right)<targetWidth){feedback.horizontal="center";}
if(targetHeight<elemHeight&&abs(top+bottom)<targetHeight){feedback.vertical="middle";}
if(max(abs(left),abs(right))>max(abs(top),abs(bottom))){feedback.important="horizontal";}else{feedback.important="vertical";}
options.using.call(this,props,feedback);};}
elem.offset($.extend(position,{using:using}));});};$.ui.position={fit:{left:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollLeft:within.offset.left,outerWidth=within.width,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=withinOffset-collisionPosLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-withinOffset,newOverRight;if(data.collisionWidth>outerWidth){if(overLeft>0&&overRight<=0){newOverRight=position.left+overLeft+data.collisionWidth-outerWidth-
withinOffset;position.left+=overLeft-newOverRight;}else if(overRight>0&&overLeft<=0){position.left=withinOffset;}else{if(overLeft>overRight){position.left=withinOffset+outerWidth-data.collisionWidth;}else{position.left=withinOffset;}}}else if(overLeft>0){position.left+=overLeft;}else if(overRight>0){position.left-=overRight;}else{position.left=max(position.left-collisionPosLeft,position.left);}},top:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollTop:within.offset.top,outerHeight=data.within.height,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=withinOffset-collisionPosTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-withinOffset,newOverBottom;if(data.collisionHeight>outerHeight){if(overTop>0&&overBottom<=0){newOverBottom=position.top+overTop+data.collisionHeight-outerHeight-
withinOffset;position.top+=overTop-newOverBottom;}else if(overBottom>0&&overTop<=0){position.top=withinOffset;}else{if(overTop>overBottom){position.top=withinOffset+outerHeight-data.collisionHeight;}else{position.top=withinOffset;}}}else if(overTop>0){position.top+=overTop;}else if(overBottom>0){position.top-=overBottom;}else{position.top=max(position.top-collisionPosTop,position.top);}}},flip:{left:function(position,data){var within=data.within,withinOffset=within.offset.left+within.scrollLeft,outerWidth=within.width,offsetLeft=within.isWindow?within.scrollLeft:within.offset.left,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=collisionPosLeft-offsetLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-offsetLeft,myOffset=data.my[0]==="left"?-data.elemWidth:data.my[0]==="right"?data.elemWidth:0,atOffset=data.at[0]==="left"?data.targetWidth:data.at[0]==="right"?-data.targetWidth:0,offset=-2*data.offset[0],newOverRight,newOverLeft;if(overLeft<0){newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth-
outerWidth-withinOffset;if(newOverRight<0||newOverRight<abs(overLeft)){position.left+=myOffset+atOffset+offset;}}else if(overRight>0){newOverLeft=position.left-data.collisionPosition.marginLeft+myOffset+
atOffset+offset-offsetLeft;if(newOverLeft>0||abs(newOverLeft)<overRight){position.left+=myOffset+atOffset+offset;}}},top:function(position,data){var within=data.within,withinOffset=within.offset.top+within.scrollTop,outerHeight=within.height,offsetTop=within.isWindow?within.scrollTop:within.offset.top,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=collisionPosTop-offsetTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-offsetTop,top=data.my[1]==="top",myOffset=top?-data.elemHeight:data.my[1]==="bottom"?data.elemHeight:0,atOffset=data.at[1]==="top"?data.targetHeight:data.at[1]==="bottom"?-data.targetHeight:0,offset=-2*data.offset[1],newOverTop,newOverBottom;if(overTop<0){newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight-
outerHeight-withinOffset;if(newOverBottom<0||newOverBottom<abs(overTop)){position.top+=myOffset+atOffset+offset;}}else if(overBottom>0){newOverTop=position.top-data.collisionPosition.marginTop+myOffset+atOffset+
offset-offsetTop;if(newOverTop>0||abs(newOverTop)<overBottom){position.top+=myOffset+atOffset+offset;}}}},flipfit:{left:function(){$.ui.position.flip.left.apply(this,arguments);$.ui.position.fit.left.apply(this,arguments);},top:function(){$.ui.position.flip.top.apply(this,arguments);$.ui.position.fit.top.apply(this,arguments);}}};})();$.ui.safeActiveElement=function(document){var activeElement;try{activeElement=document.activeElement;}catch(error){activeElement=document.body;}
if(!activeElement){activeElement=document.body;}
if(!activeElement.nodeName){activeElement=document.body;}
return activeElement;};$.ui.safeBlur=function(element){if(element&&element.nodeName.toLowerCase()!=="body"){$(element).trigger("blur");}};
/*!
 * jQuery UI Scroll Parent 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
$.fn.scrollParent=function(includeHidden){var position=this.css("position"),excludeStaticParent=position==="absolute",overflowRegex=includeHidden?/(auto|scroll|hidden)/:/(auto|scroll)/,scrollParent=this.parents().filter(function(){var parent=$(this);if(excludeStaticParent&&parent.css("position")==="static"){return false;}
return overflowRegex.test(parent.css("overflow")+parent.css("overflow-y")+
parent.css("overflow-x"));}).eq(0);return position==="fixed"||!scrollParent.length?$(this[0].ownerDocument||document):scrollParent;};
/*!
 * jQuery UI Tabbable 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
$.extend($.expr.pseudos,{tabbable:function(element){var tabIndex=$.attr(element,"tabindex"),hasTabindex=tabIndex!=null;return(!hasTabindex||tabIndex>=0)&&$.ui.focusable(element,hasTabindex);}});
/*!
 * jQuery UI Unique ID 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
$.fn.extend({uniqueId:(function(){var uuid=0;return function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++uuid);}});};})(),removeUniqueId:function(){return this.each(function(){if(/^ui-id-\d+$/.test(this.id)){$(this).removeAttr("id");}});}});
/*!
 * jQuery UI Widget 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
var widgetUuid=0;var widgetHasOwnProperty=Array.prototype.hasOwnProperty;var widgetSlice=Array.prototype.slice;$.cleanData=(function(orig){return function(elems){var events,elem,i;for(i=0;(elem=elems[i])!=null;i++){events=$._data(elem,"events");if(events&&events.remove){$(elem).triggerHandler("remove");}}
orig(elems);};})($.cleanData);$.widget=function(name,base,prototype){var existingConstructor,constructor,basePrototype;var proxiedPrototype={};var namespace=name.split(".")[0];name=name.split(".")[1];var fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget;}
if(Array.isArray(prototype)){prototype=$.extend.apply(null,[{}].concat(prototype));}
$.expr.pseudos[fullName.toLowerCase()]=function(elem){return!!$.data(elem,fullName);};$[namespace]=$[namespace]||{};existingConstructor=$[namespace][name];constructor=$[namespace][name]=function(options,element){if(!this||!this._createWidget){return new constructor(options,element);}
if(arguments.length){this._createWidget(options,element);}};$.extend(constructor,existingConstructor,{version:prototype.version,_proto:$.extend({},prototype),_childConstructors:[]});basePrototype=new base();basePrototype.options=$.widget.extend({},basePrototype.options);$.each(prototype,function(prop,value){if(typeof value!=="function"){proxiedPrototype[prop]=value;return;}
proxiedPrototype[prop]=(function(){function _super(){return base.prototype[prop].apply(this,arguments);}
function _superApply(args){return base.prototype[prop].apply(this,args);}
return function(){var __super=this._super;var __superApply=this._superApply;var returnValue;this._super=_super;this._superApply=_superApply;returnValue=value.apply(this,arguments);this._super=__super;this._superApply=__superApply;return returnValue;};})();});constructor.prototype=$.widget.extend(basePrototype,{widgetEventPrefix:existingConstructor?(basePrototype.widgetEventPrefix||name):name},proxiedPrototype,{constructor:constructor,namespace:namespace,widgetName:name,widgetFullName:fullName});if(existingConstructor){$.each(existingConstructor._childConstructors,function(i,child){var childPrototype=child.prototype;$.widget(childPrototype.namespace+"."+childPrototype.widgetName,constructor,child._proto);});delete existingConstructor._childConstructors;}else{base._childConstructors.push(constructor);}
$.widget.bridge(name,constructor);return constructor;};$.widget.extend=function(target){var input=widgetSlice.call(arguments,1);var inputIndex=0;var inputLength=input.length;var key;var value;for(;inputIndex<inputLength;inputIndex++){for(key in input[inputIndex]){value=input[inputIndex][key];if(widgetHasOwnProperty.call(input[inputIndex],key)&&value!==undefined){if($.isPlainObject(value)){target[key]=$.isPlainObject(target[key])?$.widget.extend({},target[key],value):$.widget.extend({},value);}else{target[key]=value;}}}}
return target;};$.widget.bridge=function(name,object){var fullName=object.prototype.widgetFullName||name;$.fn[name]=function(options){var isMethodCall=typeof options==="string";var args=widgetSlice.call(arguments,1);var returnValue=this;if(isMethodCall){if(!this.length&&options==="instance"){returnValue=undefined;}else{this.each(function(){var methodValue;var instance=$.data(this,fullName);if(options==="instance"){returnValue=instance;return false;}
if(!instance){return $.error("cannot call methods on "+name+" prior to initialization; "+"attempted to call method '"+options+"'");}
if(typeof instance[options]!=="function"||options.charAt(0)==="_"){return $.error("no such method '"+options+"' for "+name+" widget instance");}
methodValue=instance[options].apply(instance,args);if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue&&methodValue.jquery?returnValue.pushStack(methodValue.get()):methodValue;return false;}});}}else{if(args.length){options=$.widget.extend.apply(null,[options].concat(args));}
this.each(function(){var instance=$.data(this,fullName);if(instance){instance.option(options||{});if(instance._init){instance._init();}}else{$.data(this,fullName,new object(options,this));}});}
return returnValue;};};$.Widget=function(){};$.Widget._childConstructors=[];$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:false,create:null},_createWidget:function(options,element){element=$(element||this.defaultElement||this)[0];this.element=$(element);this.uuid=widgetUuid++;this.eventNamespace="."+this.widgetName+this.uuid;this.bindings=$();this.hoverable=$();this.focusable=$();this.classesElementLookup={};if(element!==this){$.data(element,this.widgetFullName,this);this._on(true,this.element,{remove:function(event){if(event.target===element){this.destroy();}}});this.document=$(element.style?element.ownerDocument:element.document||element);this.window=$(this.document[0].defaultView||this.document[0].parentWindow);}
this.options=$.widget.extend({},this.options,this._getCreateOptions(),options);this._create();if(this.options.disabled){this._setOptionDisabled(this.options.disabled);}
this._trigger("create",null,this._getCreateEventData());this._init();},_getCreateOptions:function(){return{};},_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function(){var that=this;this._destroy();$.each(this.classesElementLookup,function(key,value){that._removeClass(value,key);});this.element.off(this.eventNamespace).removeData(this.widgetFullName);this.widget().off(this.eventNamespace).removeAttr("aria-disabled");this.bindings.off(this.eventNamespace);},_destroy:$.noop,widget:function(){return this.element;},option:function(key,value){var options=key;var parts;var curOption;var i;if(arguments.length===0){return $.widget.extend({},this.options);}
if(typeof key==="string"){options={};parts=key.split(".");key=parts.shift();if(parts.length){curOption=options[key]=$.widget.extend({},this.options[key]);for(i=0;i<parts.length-1;i++){curOption[parts[i]]=curOption[parts[i]]||{};curOption=curOption[parts[i]];}
key=parts.pop();if(arguments.length===1){return curOption[key]===undefined?null:curOption[key];}
curOption[key]=value;}else{if(arguments.length===1){return this.options[key]===undefined?null:this.options[key];}
options[key]=value;}}
this._setOptions(options);return this;},_setOptions:function(options){var key;for(key in options){this._setOption(key,options[key]);}
return this;},_setOption:function(key,value){if(key==="classes"){this._setOptionClasses(value);}
this.options[key]=value;if(key==="disabled"){this._setOptionDisabled(value);}
return this;},_setOptionClasses:function(value){var classKey,elements,currentElements;for(classKey in value){currentElements=this.classesElementLookup[classKey];if(value[classKey]===this.options.classes[classKey]||!currentElements||!currentElements.length){continue;}
elements=$(currentElements.get());this._removeClass(currentElements,classKey);elements.addClass(this._classes({element:elements,keys:classKey,classes:value,add:true}));}},_setOptionDisabled:function(value){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!value);if(value){this._removeClass(this.hoverable,null,"ui-state-hover");this._removeClass(this.focusable,null,"ui-state-focus");}},enable:function(){return this._setOptions({disabled:false});},disable:function(){return this._setOptions({disabled:true});},_classes:function(options){var full=[];var that=this;options=$.extend({element:this.element,classes:this.options.classes||{}},options);function bindRemoveEvent(){var nodesToBind=[];options.element.each(function(_,element){var isTracked=$.map(that.classesElementLookup,function(elements){return elements;}).some(function(elements){return elements.is(element);});if(!isTracked){nodesToBind.push(element);}});that._on($(nodesToBind),{remove:"_untrackClassesElement"});}
function processClassString(classes,checkOption){var current,i;for(i=0;i<classes.length;i++){current=that.classesElementLookup[classes[i]]||$();if(options.add){bindRemoveEvent();current=$($.uniqueSort(current.get().concat(options.element.get())));}else{current=$(current.not(options.element).get());}
that.classesElementLookup[classes[i]]=current;full.push(classes[i]);if(checkOption&&options.classes[classes[i]]){full.push(options.classes[classes[i]]);}}}
if(options.keys){processClassString(options.keys.match(/\S+/g)||[],true);}
if(options.extra){processClassString(options.extra.match(/\S+/g)||[]);}
return full.join(" ");},_untrackClassesElement:function(event){var that=this;$.each(that.classesElementLookup,function(key,value){if($.inArray(event.target,value)!==-1){that.classesElementLookup[key]=$(value.not(event.target).get());}});this._off($(event.target));},_removeClass:function(element,keys,extra){return this._toggleClass(element,keys,extra,false);},_addClass:function(element,keys,extra){return this._toggleClass(element,keys,extra,true);},_toggleClass:function(element,keys,extra,add){add=(typeof add==="boolean")?add:extra;var shift=(typeof element==="string"||element===null),options={extra:shift?keys:extra,keys:shift?element:keys,element:shift?this.element:element,add:add};options.element.toggleClass(this._classes(options),add);return this;},_on:function(suppressDisabledCheck,element,handlers){var delegateElement;var instance=this;if(typeof suppressDisabledCheck!=="boolean"){handlers=element;element=suppressDisabledCheck;suppressDisabledCheck=false;}
if(!handlers){handlers=element;element=this.element;delegateElement=this.widget();}else{element=delegateElement=$(element);this.bindings=this.bindings.add(element);}
$.each(handlers,function(event,handler){function handlerProxy(){if(!suppressDisabledCheck&&(instance.options.disabled===true||$(this).hasClass("ui-state-disabled"))){return;}
return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}
if(typeof handler!=="string"){handlerProxy.guid=handler.guid=handler.guid||handlerProxy.guid||$.guid++;}
var match=event.match(/^([\w:-]*)\s*(.*)$/);var eventName=match[1]+instance.eventNamespace;var selector=match[2];if(selector){delegateElement.on(eventName,selector,handlerProxy);}else{element.on(eventName,handlerProxy);}});},_off:function(element,eventName){eventName=(eventName||"").split(" ").join(this.eventNamespace+" ")+
this.eventNamespace;element.off(eventName);this.bindings=$(this.bindings.not(element).get());this.focusable=$(this.focusable.not(element).get());this.hoverable=$(this.hoverable.not(element).get());},_delay:function(handler,delay){function handlerProxy(){return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}
var instance=this;return setTimeout(handlerProxy,delay||0);},_hoverable:function(element){this.hoverable=this.hoverable.add(element);this._on(element,{mouseenter:function(event){this._addClass($(event.currentTarget),null,"ui-state-hover");},mouseleave:function(event){this._removeClass($(event.currentTarget),null,"ui-state-hover");}});},_focusable:function(element){this.focusable=this.focusable.add(element);this._on(element,{focusin:function(event){this._addClass($(event.currentTarget),null,"ui-state-focus");},focusout:function(event){this._removeClass($(event.currentTarget),null,"ui-state-focus");}});},_trigger:function(type,event,data){var prop,orig;var callback=this.options[type];data=data||{};event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();event.target=this.element[0];orig=event.originalEvent;if(orig){for(prop in orig){if(!(prop in event)){event[prop]=orig[prop];}}}
this.element.trigger(event,data);return!(typeof callback==="function"&&callback.apply(this.element[0],[event].concat(data))===false||event.isDefaultPrevented());}};$.each({show:"fadeIn",hide:"fadeOut"},function(method,defaultEffect){$.Widget.prototype["_"+method]=function(element,options,callback){if(typeof options==="string"){options={effect:options};}
var hasOptions;var effectName=!options?method:options===true||typeof options==="number"?defaultEffect:options.effect||defaultEffect;options=options||{};if(typeof options==="number"){options={duration:options};}else if(options===true){options={};}
hasOptions=!$.isEmptyObject(options);options.complete=callback;if(options.delay){element.delay(options.delay);}
if(hasOptions&&$.effects&&$.effects.effect[effectName]){element[method](options);}else if(effectName!==method&&element[effectName]){element[effectName](options.duration,options.easing,callback);}else{element.queue(function(next){$(this)[method]();if(callback){callback.call(element[0]);}
next();});}};});}));
"use strict"
/*! elementor - v3.18.0 - 20-12-2023 */
;(self["webpackChunkelementor"]=self["webpackChunkelementor"]||[]).push([["frontend"],{"../assets/dev/js/frontend/documents-manager.js":
/*!******************************************************!*\
  !*** ../assets/dev/js/frontend/documents-manager.js ***!
  \******************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _document=_interopRequireDefault(__webpack_require__(
/*! ./document */
"../assets/dev/js/frontend/document.js"));class _default extends elementorModules.ViewModule{constructor(){super(...arguments);this.documents={};this.initDocumentClasses();this.attachDocumentsClasses();}
getDefaultSettings(){return{selectors:{document:'.elementor'}};}
getDefaultElements(){const selectors=this.getSettings('selectors');return{$documents:jQuery(selectors.document)};}
initDocumentClasses(){this.documentClasses={base:_document.default};elementorFrontend.hooks.doAction('elementor/frontend/documents-manager/init-classes',this);}
addDocumentClass(documentType,documentClass){this.documentClasses[documentType]=documentClass;}
attachDocumentsClasses(){this.elements.$documents.each((index,document)=>this.attachDocumentClass(jQuery(document)));}
attachDocumentClass($document){const documentData=$document.data(),documentID=documentData.elementorId,documentType=documentData.elementorType,DocumentClass=this.documentClasses[documentType]||this.documentClasses.base;this.documents[documentID]=new DocumentClass({$element:$document,id:documentID});}}
exports["default"]=_default;}),"../assets/dev/js/frontend/elements-handlers-manager.js":
/*!**************************************************************!*\
  !*** ../assets/dev/js/frontend/elements-handlers-manager.js ***!
  \**************************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _global=_interopRequireDefault(__webpack_require__(
/*! ./handlers/global */
"../assets/dev/js/frontend/handlers/global.js"));var _background=_interopRequireDefault(__webpack_require__(
/*! ./handlers/background */
"../assets/dev/js/frontend/handlers/background.js"));var _container=_interopRequireDefault(__webpack_require__(
/*! ./handlers/container/container */
"../assets/dev/js/frontend/handlers/container/container.js"));var _column=_interopRequireDefault(__webpack_require__(
/*! ./handlers/column */
"../assets/dev/js/frontend/handlers/column.js"));var _handlesPosition=_interopRequireDefault(__webpack_require__(
/*! ./handlers/section/handles-position */
"../assets/dev/js/frontend/handlers/section/handles-position.js"));var _stretchedSection=_interopRequireDefault(__webpack_require__(
/*! ./handlers/section/stretched-section */
"../assets/dev/js/frontend/handlers/section/stretched-section.js"));var _shapes=_interopRequireDefault(__webpack_require__(
/*! ./handlers/section/shapes */
"../assets/dev/js/frontend/handlers/section/shapes.js"));module.exports=function($){var _this=this;const handlersInstances={};this.elementsHandlers={'accordion.default':()=>__webpack_require__.e(
/*! import() | accordion */
"accordion").then(__webpack_require__.bind(__webpack_require__,
/*! ./handlers/accordion */
"../assets/dev/js/frontend/handlers/accordion.js")),'alert.default':()=>__webpack_require__.e(
/*! import() | alert */
"alert").then(__webpack_require__.bind(__webpack_require__,
/*! ./handlers/alert */
"../assets/dev/js/frontend/handlers/alert.js")),'counter.default':()=>__webpack_require__.e(
/*! import() | counter */
"counter").then(__webpack_require__.bind(__webpack_require__,
/*! ./handlers/counter */
"../assets/dev/js/frontend/handlers/counter.js")),'progress.default':()=>__webpack_require__.e(
/*! import() | progress */
"progress").then(__webpack_require__.bind(__webpack_require__,
/*! ./handlers/progress */
"../assets/dev/js/frontend/handlers/progress.js")),'tabs.default':()=>__webpack_require__.e(
/*! import() | tabs */
"tabs").then(__webpack_require__.bind(__webpack_require__,
/*! ./handlers/tabs */
"../assets/dev/js/frontend/handlers/tabs.js")),'toggle.default':()=>__webpack_require__.e(
/*! import() | toggle */
"toggle").then(__webpack_require__.bind(__webpack_require__,
/*! ./handlers/toggle */
"../assets/dev/js/frontend/handlers/toggle.js")),'video.default':()=>__webpack_require__.e(
/*! import() | video */
"video").then(__webpack_require__.bind(__webpack_require__,
/*! ./handlers/video */
"../assets/dev/js/frontend/handlers/video.js")),'image-carousel.default':()=>__webpack_require__.e(
/*! import() | image-carousel */
"image-carousel").then(__webpack_require__.bind(__webpack_require__,
/*! ./handlers/image-carousel */
"../assets/dev/js/frontend/handlers/image-carousel.js")),'text-editor.default':()=>__webpack_require__.e(
/*! import() | text-editor */
"text-editor").then(__webpack_require__.bind(__webpack_require__,
/*! ./handlers/text-editor */
"../assets/dev/js/frontend/handlers/text-editor.js")),'wp-widget-media_audio.default':()=>__webpack_require__.e(
/*! import() | wp-audio */
"wp-audio").then(__webpack_require__.bind(__webpack_require__,
/*! ./handlers/wp-audio */
"../assets/dev/js/frontend/handlers/wp-audio.js"))};if(elementorFrontendConfig.experimentalFeatures['nested-elements']){this.elementsHandlers['nested-tabs.default']=()=>Promise.resolve(
/*! import() */
).then(__webpack_require__.bind(__webpack_require__,
/*! elementor/modules/nested-tabs/assets/js/frontend/handlers/nested-tabs */
"../modules/nested-tabs/assets/js/frontend/handlers/nested-tabs.js"));}
if(elementorFrontendConfig.experimentalFeatures['nested-elements']){this.elementsHandlers['nested-accordion.default']=()=>Promise.resolve(
/*! import() */
).then(__webpack_require__.bind(__webpack_require__,
/*! elementor/modules/nested-accordion/assets/js/frontend/handlers/nested-accordion */
"../modules/nested-accordion/assets/js/frontend/handlers/nested-accordion.js"));}
const addGlobalHandlers=()=>elementorFrontend.hooks.addAction('frontend/element_ready/global',_global.default);const addElementsHandlers=()=>{this.elementsHandlers.section=[_stretchedSection.default,..._background.default,_handlesPosition.default,_shapes.default];this.elementsHandlers.container=[..._background.default];if(elementorFrontend.isEditMode()){this.elementsHandlers.container.push(..._container.default);}
this.elementsHandlers.column=_column.default;$.each(this.elementsHandlers,(elementName,Handlers)=>{const elementData=elementName.split('.');elementName=elementData[0];const skin=elementData[1]||null;this.attachHandler(elementName,Handlers,skin);});};const isClassHandler=Handler=>Handler.prototype?.getUniqueHandlerID;const addHandlerWithHook=function(elementBaseName,Handler){let skin=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'default';skin=skin?'.'+skin:'';const elementName=elementBaseName+skin;elementorFrontend.hooks.addAction(`frontend/element_ready/${elementName}`,$element=>{if(isClassHandler(Handler)){_this.addHandler(Handler,{$element,elementName},true);}else{const handlerValue=Handler();if(!handlerValue){return;}
if(handlerValue instanceof Promise){handlerValue.then(_ref=>{let{default:dynamicHandler}=_ref;_this.addHandler(dynamicHandler,{$element,elementName},true);});}else{_this.addHandler(handlerValue,{$element,elementName},true);}}});};this.addHandler=function(HandlerClass,options){const elementID=options.$element.data('model-cid');let handlerID;if(elementID){handlerID=HandlerClass.prototype.getConstructorID();if(!handlersInstances[elementID]){handlersInstances[elementID]={};}
const oldHandler=handlersInstances[elementID][handlerID];if(oldHandler){oldHandler.onDestroy();}}
const newHandler=new HandlerClass(options);elementorFrontend.hooks.doAction(`frontend/element_handler_ready/${options.elementName}`,options.$element,$);if(elementID){handlersInstances[elementID][handlerID]=newHandler;}};this.attachHandler=(elementName,Handlers,skin)=>{if(!Array.isArray(Handlers)){Handlers=[Handlers];}
Handlers.forEach(Handler=>addHandlerWithHook(elementName,Handler,skin));};this.getHandler=function(handlerName){const elementHandler=this.elementsHandlers[handlerName];if(isClassHandler(elementHandler)){return elementHandler;}
return new Promise(res=>{elementHandler().then(_ref2=>{let{default:dynamicHandler}=_ref2;res(dynamicHandler);});});};this.getHandlers=function(handlerName){elementorDevTools.deprecation.deprecated('getHandlers','3.1.0','elementorFrontend.elementsHandler.getHandler');if(handlerName){return this.getHandler(handlerName);}
return this.elementsHandlers;};this.runReadyTrigger=function(scope){if(elementorFrontend.config.is_static){return;}
const $scope=jQuery(scope),elementType=$scope.attr('data-element_type');if(!elementType){return;}
elementorFrontend.hooks.doAction('frontend/element_ready/global',$scope,$);elementorFrontend.hooks.doAction(`frontend/element_ready/${elementType}`,$scope,$);if('widget'===elementType){const widgetType=$scope.attr('data-widget_type');elementorFrontend.hooks.doAction(`frontend/element_ready/${widgetType}`,$scope,$);}};this.init=()=>{addGlobalHandlers();addElementsHandlers();};};}),"../assets/dev/js/frontend/frontend.js":
/*!*********************************************!*\
  !*** ../assets/dev/js/frontend/frontend.js ***!
  \*********************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;__webpack_require__(
/*! ../public-path */
"../assets/dev/js/public-path.js");var _documentsManager=_interopRequireDefault(__webpack_require__(
/*! ./documents-manager */
"../assets/dev/js/frontend/documents-manager.js"));var _storage=_interopRequireDefault(__webpack_require__(
/*! elementor-common/utils/storage */
"../core/common/assets/js/utils/storage.js"));var _environment=_interopRequireDefault(__webpack_require__(
/*! elementor-common/utils/environment */
"../core/common/assets/js/utils/environment.js"));var _youtubeLoader=_interopRequireDefault(__webpack_require__(
/*! ./utils/video-api/youtube-loader */
"../assets/dev/js/frontend/utils/video-api/youtube-loader.js"));var _vimeoLoader=_interopRequireDefault(__webpack_require__(
/*! ./utils/video-api/vimeo-loader */
"../assets/dev/js/frontend/utils/video-api/vimeo-loader.js"));var _baseLoader=_interopRequireDefault(__webpack_require__(
/*! ./utils/video-api/base-loader */
"../assets/dev/js/frontend/utils/video-api/base-loader.js"));var _urlActions=_interopRequireDefault(__webpack_require__(
/*! ./utils/url-actions */
"../assets/dev/js/frontend/utils/url-actions.js"));var _swiper=_interopRequireDefault(__webpack_require__(
/*! ./utils/swiper */
"../assets/dev/js/frontend/utils/swiper.js"));var _lightboxManager=_interopRequireDefault(__webpack_require__(
/*! ./utils/lightbox/lightbox-manager */
"../assets/dev/js/frontend/utils/lightbox/lightbox-manager.js"));var _assetsLoader=_interopRequireDefault(__webpack_require__(
/*! ./utils/assets-loader */
"../assets/dev/js/frontend/utils/assets-loader.js"));var _breakpoints=_interopRequireDefault(__webpack_require__(
/*! elementor-utils/breakpoints */
"../assets/dev/js/utils/breakpoints.js"));var _events=_interopRequireDefault(__webpack_require__(
/*! elementor-utils/events */
"../assets/dev/js/utils/events.js"));var _frontend=_interopRequireDefault(__webpack_require__(
/*! elementor/modules/shapes/assets/js/frontend/frontend */
"../modules/shapes/assets/js/frontend/frontend.js"));var _controls=_interopRequireDefault(__webpack_require__(
/*! ./utils/controls */
"../assets/dev/js/frontend/utils/controls.js"));var _utils=__webpack_require__(
/*! elementor-frontend/utils/utils */
"../assets/dev/js/frontend/utils/utils.js");const EventManager=__webpack_require__(
/*! elementor-utils/hooks */
"../assets/dev/js/utils/hooks.js"),ElementsHandler=__webpack_require__(
/*! elementor-frontend/elements-handlers-manager */
"../assets/dev/js/frontend/elements-handlers-manager.js"),AnchorsModule=__webpack_require__(
/*! elementor-frontend/utils/anchors */
"../assets/dev/js/frontend/utils/anchors.js");class Frontend extends elementorModules.ViewModule{constructor(){super(...arguments);this.config=elementorFrontendConfig;this.config.legacyMode={get elementWrappers(){if(elementorFrontend.isEditMode()){window.top.elementorDevTools.deprecation.deprecated('elementorFrontend.config.legacyMode.elementWrappers','3.1.0','elementorFrontend.config.experimentalFeatures.e_dom_optimization');}
return!elementorFrontend.config.experimentalFeatures.e_dom_optimization;}};this.populateActiveBreakpointsConfig();}
get Module(){if(this.isEditMode()){parent.elementorDevTools.deprecation.deprecated('elementorFrontend.Module','2.5.0','elementorModules.frontend.handlers.Base');}
return elementorModules.frontend.handlers.Base;}
getDefaultSettings(){return{selectors:{elementor:'.elementor',adminBar:'#wpadminbar'}};}
getDefaultElements(){const defaultElements={window,$window:jQuery(window),$document:jQuery(document),$head:jQuery(document.head),$body:jQuery(document.body),$deviceMode:jQuery('<span>',{id:'elementor-device-mode',class:'elementor-screen-only'})};defaultElements.$body.append(defaultElements.$deviceMode);return defaultElements;}
bindEvents(){this.elements.$window.on('resize',()=>this.setDeviceModeData());}
getElements(elementName){return this.getItems(this.elements,elementName);}
getPageSettings(settingName){const settingsObject=this.isEditMode()?elementor.settings.page.model.attributes:this.config.settings.page;return this.getItems(settingsObject,settingName);}
getGeneralSettings(settingName){if(this.isEditMode()){parent.elementorDevTools.deprecation.deprecated('getGeneralSettings()','3.0.0','getKitSettings() and remove the `elementor_` prefix');}
return this.getKitSettings(`elementor_${settingName}`);}
getKitSettings(settingName){return this.getItems(this.config.kit,settingName);}
getCurrentDeviceMode(){return getComputedStyle(this.elements.$deviceMode[0],':after').content.replace(/"/g,'');}
getDeviceSetting(deviceMode,settings,settingKey){if('widescreen'===deviceMode){return this.getWidescreenSetting(settings,settingKey);}
const devices=elementorFrontend.breakpoints.getActiveBreakpointsList({largeToSmall:true,withDesktop:true});let deviceIndex=devices.indexOf(deviceMode);while(deviceIndex>0){const currentDevice=devices[deviceIndex],fullSettingKey=settingKey+'_'+currentDevice,deviceValue=settings[fullSettingKey];if(deviceValue||0===deviceValue){return deviceValue;}
deviceIndex--;}
return settings[settingKey];}
getWidescreenSetting(settings,settingKey){const deviceMode='widescreen',widescreenSettingKey=settingKey+'_'+deviceMode;let settingToReturn;if(settings[widescreenSettingKey]){settingToReturn=settings[widescreenSettingKey];}else{settingToReturn=settings[settingKey];}
return settingToReturn;}
getCurrentDeviceSetting(settings,settingKey){return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(),settings,settingKey);}
isEditMode(){return this.config.environmentMode.edit;}
isWPPreviewMode(){return this.config.environmentMode.wpPreview;}
initDialogsManager(){let dialogsManager;this.getDialogsManager=()=>{if(!dialogsManager){dialogsManager=new DialogsManager.Instance();}
return dialogsManager;};}
initOnReadyComponents(){this.utils={youtube:new _youtubeLoader.default(),vimeo:new _vimeoLoader.default(),baseVideoLoader:new _baseLoader.default(),anchors:new AnchorsModule(),get lightbox(){return _lightboxManager.default.getLightbox();},urlActions:new _urlActions.default(),swiper:_swiper.default,environment:_environment.default,assetsLoader:new _assetsLoader.default(),escapeHTML:_utils.escapeHTML,events:_events.default,controls:new _controls.default()};this.modules={StretchElement:elementorModules.frontend.tools.StretchElement,Masonry:elementorModules.utils.Masonry};this.elementsHandler.init();if(this.isEditMode()){elementor.once('document:loaded',()=>this.onDocumentLoaded());}else{this.onDocumentLoaded();}}
initOnReadyElements(){this.elements.$wpAdminBar=this.elements.$document.find(this.getSettings('selectors.adminBar'));}
addUserAgentClasses(){for(const[key,value]of Object.entries(_environment.default)){if(value){this.elements.$body.addClass('e--ua-'+key);}}}
setDeviceModeData(){this.elements.$body.attr('data-elementor-device-mode',this.getCurrentDeviceMode());}
addListenerOnce(listenerID,event,callback,to){if(!to){to=this.elements.$window;}
if(!this.isEditMode()){to.on(event,callback);return;}
this.removeListeners(listenerID,event,to);if(to instanceof jQuery){const eventNS=event+'.'+listenerID;to.on(eventNS,callback);}else{to.on(event,callback,listenerID);}}
removeListeners(listenerID,event,callback,from){if(!from){from=this.elements.$window;}
if(from instanceof jQuery){const eventNS=event+'.'+listenerID;from.off(eventNS,callback);}else{from.off(event,callback,listenerID);}}
debounce(func,wait){let timeout;return function(){const context=this,args=arguments;const later=()=>{timeout=null;func.apply(context,args);};const callNow=!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow){func.apply(context,args);}};}
waypoint($element,callback,options){const defaultOptions={offset:'100%',triggerOnce:true};options=jQuery.extend(defaultOptions,options);const correctCallback=function(){const element=this.element||this,result=callback.apply(element,arguments);if(options.triggerOnce&&this.destroy){this.destroy();}
return result;};return $element.elementorWaypoint(correctCallback,options);}
muteMigrationTraces(){jQuery.migrateMute=true;jQuery.migrateTrace=false;}
initModules(){const handlers={shapes:_frontend.default};elementorFrontend.trigger('elementor/modules/init:before');elementorFrontend.trigger('elementor/modules/init/before');Object.entries(handlers).forEach(_ref=>{let[moduleName,ModuleClass]=_ref;this.modulesHandlers[moduleName]=new ModuleClass();});}
populateActiveBreakpointsConfig(){this.config.responsive.activeBreakpoints={};Object.entries(this.config.responsive.breakpoints).forEach(_ref2=>{let[breakpointKey,breakpointData]=_ref2;if(breakpointData.is_enabled){this.config.responsive.activeBreakpoints[breakpointKey]=breakpointData;}});}
init(){this.hooks=new EventManager();this.breakpoints=new _breakpoints.default(this.config.responsive);this.storage=new _storage.default();this.elementsHandler=new ElementsHandler(jQuery);this.modulesHandlers={};this.addUserAgentClasses();this.setDeviceModeData();this.initDialogsManager();if(this.isEditMode()){this.muteMigrationTraces();}
_events.default.dispatch(this.elements.$window,'elementor/frontend/init');this.initModules();this.initOnReadyElements();this.initOnReadyComponents();}
onDocumentLoaded(){this.documentsManager=new _documentsManager.default();this.trigger('components:init');new _lightboxManager.default();}}
exports["default"]=Frontend;window.elementorFrontend=new Frontend();if(!elementorFrontend.isEditMode()){jQuery(()=>elementorFrontend.init());}}),"../assets/dev/js/frontend/handlers/background-slideshow.js":
/*!******************************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/background-slideshow.js ***!
  \******************************************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;class BackgroundSlideshow extends elementorModules.frontend.handlers.SwiperBase{getDefaultSettings(){return{classes:{swiperContainer:`elementor-background-slideshow ${elementorFrontend.config.swiperClass}`,swiperWrapper:'swiper-wrapper',swiperSlide:'elementor-background-slideshow__slide swiper-slide',swiperPreloader:'swiper-lazy-preloader',slideBackground:'elementor-background-slideshow__slide__image',kenBurns:'elementor-ken-burns',kenBurnsActive:'elementor-ken-burns--active',kenBurnsIn:'elementor-ken-burns--in',kenBurnsOut:'elementor-ken-burns--out'}};}
getSwiperOptions(){const elementSettings=this.getElementSettings(),swiperOptions={grabCursor:false,slidesPerView:1,slidesPerGroup:1,loop:'yes'===elementSettings.background_slideshow_loop,speed:elementSettings.background_slideshow_transition_duration,autoplay:{delay:elementSettings.background_slideshow_slide_duration,stopOnLastSlide:!elementSettings.background_slideshow_loop},handleElementorBreakpoints:true,on:{slideChange:()=>{if(elementSettings.background_slideshow_ken_burns){this.handleKenBurns();}}}};if('yes'===elementSettings.background_slideshow_loop){swiperOptions.loopedSlides=this.getSlidesCount();}
switch(elementSettings.background_slideshow_slide_transition){case'fade':swiperOptions.effect='fade';swiperOptions.fadeEffect={crossFade:true};break;case'slide_down':swiperOptions.autoplay.reverseDirection=true;swiperOptions.direction='vertical';break;case'slide_up':swiperOptions.direction='vertical';break;}
if('yes'===elementSettings.background_slideshow_lazyload){swiperOptions.lazy={loadPrevNext:true,loadPrevNextAmount:1};}
return swiperOptions;}
buildSwiperElements(){const classes=this.getSettings('classes'),elementSettings=this.getElementSettings(),direction='slide_left'===elementSettings.background_slideshow_slide_transition?'ltr':'rtl',$container=jQuery('<div>',{class:classes.swiperContainer,dir:direction}),$wrapper=jQuery('<div>',{class:classes.swiperWrapper}),kenBurnsActive=elementSettings.background_slideshow_ken_burns,lazyload='yes'===elementSettings.background_slideshow_lazyload;let slideInnerClass=classes.slideBackground;if(kenBurnsActive){slideInnerClass+=' '+classes.kenBurns;const kenBurnsDirection='in'===elementSettings.background_slideshow_ken_burns_zoom_direction?'kenBurnsIn':'kenBurnsOut';slideInnerClass+=' '+classes[kenBurnsDirection];}
if(lazyload){slideInnerClass+=' swiper-lazy';}
this.elements.$slides=jQuery();elementSettings.background_slideshow_gallery.forEach(slide=>{const $slide=jQuery('<div>',{class:classes.swiperSlide});let $slidebg;if(lazyload){const $slideloader=jQuery('<div>',{class:classes.swiperPreloader});$slidebg=jQuery('<div>',{class:slideInnerClass,'data-background':slide.url});$slidebg.append($slideloader);}else{$slidebg=jQuery('<div>',{class:slideInnerClass,style:'background-image: url("'+slide.url+'");'});}
$slide.append($slidebg);$wrapper.append($slide);this.elements.$slides=this.elements.$slides.add($slide);});$container.append($wrapper);this.$element.prepend($container);this.elements.$backgroundSlideShowContainer=$container;}
async initSlider(){if(1>=this.getSlidesCount()){return;}
const elementSettings=this.getElementSettings();const Swiper=elementorFrontend.utils.swiper;this.swiper=await new Swiper(this.elements.$backgroundSlideShowContainer,this.getSwiperOptions());this.elements.$backgroundSlideShowContainer.data('swiper',this.swiper);if(elementSettings.background_slideshow_ken_burns){this.handleKenBurns();}}
activate(){this.buildSwiperElements();this.initSlider();}
deactivate(){if(this.swiper){this.swiper.destroy();this.elements.$backgroundSlideShowContainer.remove();}}
run(){if('slideshow'===this.getElementSettings('background_background')){this.activate();}else{this.deactivate();}}
onInit(){super.onInit();if(this.getElementSettings('background_slideshow_gallery')){this.run();}}
onDestroy(){super.onDestroy();this.deactivate();}
onElementChange(propertyName){if('background_background'===propertyName){this.run();}}}
exports["default"]=BackgroundSlideshow;}),"../assets/dev/js/frontend/handlers/background-video.js":
/*!**************************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/background-video.js ***!
  \**************************************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;class BackgroundVideo extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{backgroundVideoContainer:'.elementor-background-video-container',backgroundVideoEmbed:'.elementor-background-video-embed',backgroundVideoHosted:'.elementor-background-video-hosted'}};}
getDefaultElements(){const selectors=this.getSettings('selectors'),elements={$backgroundVideoContainer:this.$element.find(selectors.backgroundVideoContainer)};elements.$backgroundVideoEmbed=elements.$backgroundVideoContainer.children(selectors.backgroundVideoEmbed);elements.$backgroundVideoHosted=elements.$backgroundVideoContainer.children(selectors.backgroundVideoHosted);return elements;}
calcVideosSize($video){let aspectRatioSetting='16:9';if('vimeo'===this.videoType){aspectRatioSetting=$video[0].width+':'+$video[0].height;}
const containerWidth=this.elements.$backgroundVideoContainer.outerWidth(),containerHeight=this.elements.$backgroundVideoContainer.outerHeight(),aspectRatioArray=aspectRatioSetting.split(':'),aspectRatio=aspectRatioArray[0]/aspectRatioArray[1],ratioWidth=containerWidth/aspectRatio,ratioHeight=containerHeight*aspectRatio,isWidthFixed=containerWidth/containerHeight>aspectRatio;return{width:isWidthFixed?containerWidth:ratioHeight,height:isWidthFixed?ratioWidth:containerHeight};}
changeVideoSize(){if(!('hosted'===this.videoType)&&!this.player){return;}
let $video;if('youtube'===this.videoType){$video=jQuery(this.player.getIframe());}else if('vimeo'===this.videoType){$video=jQuery(this.player.element);}else if('hosted'===this.videoType){$video=this.elements.$backgroundVideoHosted;}
if(!$video){return;}
const size=this.calcVideosSize($video);$video.width(size.width).height(size.height);}
startVideoLoop(firstTime){if(!this.player.getIframe().contentWindow){return;}
const elementSettings=this.getElementSettings(),startPoint=elementSettings.background_video_start||0,endPoint=elementSettings.background_video_end;if(elementSettings.background_play_once&&!firstTime){this.player.stopVideo();return;}
this.player.seekTo(startPoint);if(endPoint){const durationToEnd=endPoint-startPoint+1;setTimeout(()=>{this.startVideoLoop(false);},durationToEnd*1000);}}
prepareVimeoVideo(Vimeo,videoLink){const elementSettings=this.getElementSettings(),videoSize=this.elements.$backgroundVideoContainer.outerWidth(),vimeoOptions={url:videoLink,width:videoSize.width,autoplay:true,loop:!elementSettings.background_play_once,transparent:true,background:true,muted:true};if(elementSettings.background_privacy_mode){vimeoOptions.dnt=true;}
this.player=new Vimeo.Player(this.elements.$backgroundVideoContainer,vimeoOptions);this.handleVimeoStartEndTimes(elementSettings);this.player.ready().then(()=>{jQuery(this.player.element).addClass('elementor-background-video-embed');this.changeVideoSize();});}
handleVimeoStartEndTimes(elementSettings){if(elementSettings.background_video_start){this.player.on('play',data=>{if(0===data.seconds){this.player.setCurrentTime(elementSettings.background_video_start);}});}
this.player.on('timeupdate',data=>{if(elementSettings.background_video_end&&elementSettings.background_video_end<data.seconds){if(elementSettings.background_play_once){this.player.pause();}else{this.player.setCurrentTime(elementSettings.background_video_start);}}
this.player.getDuration().then(duration=>{if(elementSettings.background_video_start&&!elementSettings.background_video_end&&data.seconds>duration-0.5){this.player.setCurrentTime(elementSettings.background_video_start);}});});}
prepareYTVideo(YT,videoID){const $backgroundVideoContainer=this.elements.$backgroundVideoContainer,elementSettings=this.getElementSettings();let startStateCode=YT.PlayerState.PLAYING;if(window.chrome){startStateCode=YT.PlayerState.UNSTARTED;}
const playerOptions={videoId:videoID,events:{onReady:()=>{this.player.mute();this.changeVideoSize();this.startVideoLoop(true);this.player.playVideo();},onStateChange:event=>{switch(event.data){case startStateCode:$backgroundVideoContainer.removeClass('elementor-invisible elementor-loading');break;case YT.PlayerState.ENDED:if('function'===typeof this.player.seekTo){this.player.seekTo(elementSettings.background_video_start||0);}
if(elementSettings.background_play_once){this.player.destroy();}}}},playerVars:{controls:0,rel:0,playsinline:1}};if(elementSettings.background_privacy_mode){playerOptions.host='https://www.youtube-nocookie.com';playerOptions.origin=window.location.hostname;}
$backgroundVideoContainer.addClass('elementor-loading elementor-invisible');this.player=new YT.Player(this.elements.$backgroundVideoEmbed[0],playerOptions);}
activate(){let videoLink=this.getElementSettings('background_video_link'),videoID;const playOnce=this.getElementSettings('background_play_once');if(-1!==videoLink.indexOf('vimeo.com')){this.videoType='vimeo';this.apiProvider=elementorFrontend.utils.vimeo;}else if(videoLink.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/)){this.videoType='youtube';this.apiProvider=elementorFrontend.utils.youtube;}
if(this.apiProvider){videoID=this.apiProvider.getVideoIDFromURL(videoLink);this.apiProvider.onApiReady(apiObject=>{if('youtube'===this.videoType){this.prepareYTVideo(apiObject,videoID);}
if('vimeo'===this.videoType){this.prepareVimeoVideo(apiObject,videoLink);}});}else{this.videoType='hosted';const startTime=this.getElementSettings('background_video_start'),endTime=this.getElementSettings('background_video_end');if(startTime||endTime){videoLink+='#t='+(startTime||0)+(endTime?','+endTime:'');}
this.elements.$backgroundVideoHosted.attr('src',videoLink).one('canplay',this.changeVideoSize.bind(this));if(playOnce){this.elements.$backgroundVideoHosted.on('ended',()=>{this.elements.$backgroundVideoHosted.hide();});}}
elementorFrontend.elements.$window.on('resize elementor/bg-video/recalc',this.changeVideoSize);}
deactivate(){if('youtube'===this.videoType&&this.player.getIframe()||'vimeo'===this.videoType){this.player.destroy();}else{this.elements.$backgroundVideoHosted.removeAttr('src').off('ended');}
elementorFrontend.elements.$window.off('resize',this.changeVideoSize);}
run(){const elementSettings=this.getElementSettings();if(!elementSettings.background_play_on_mobile&&'mobile'===elementorFrontend.getCurrentDeviceMode()){return;}
if('video'===elementSettings.background_background&&elementSettings.background_video_link){this.activate();}else{this.deactivate();}}
onInit(){super.onInit(...arguments);this.changeVideoSize=this.changeVideoSize.bind(this);this.run();}
onElementChange(propertyName){if('background_background'===propertyName){this.run();}}}
exports["default"]=BackgroundVideo;}),"../assets/dev/js/frontend/handlers/background.js":
/*!********************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/background.js ***!
  \********************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _backgroundSlideshow=_interopRequireDefault(__webpack_require__(
/*! ./background-slideshow */
"../assets/dev/js/frontend/handlers/background-slideshow.js"));var _backgroundVideo=_interopRequireDefault(__webpack_require__(
/*! ./background-video */
"../assets/dev/js/frontend/handlers/background-video.js"));var _default=[_backgroundSlideshow.default,_backgroundVideo.default];exports["default"]=_default;}),"../assets/dev/js/frontend/handlers/column.js":
/*!****************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/column.js ***!
  \****************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _backgroundSlideshow=_interopRequireDefault(__webpack_require__(
/*! ./background-slideshow */
"../assets/dev/js/frontend/handlers/background-slideshow.js"));var _default=[_backgroundSlideshow.default];exports["default"]=_default;}),"../assets/dev/js/frontend/handlers/container/container.js":
/*!*****************************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/container/container.js ***!
  \*****************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _default=[()=>__webpack_require__.e(
/*! import() | container */
"container").then(__webpack_require__.bind(__webpack_require__,
/*! ./handles-position */
"../assets/dev/js/frontend/handlers/container/handles-position.js")),()=>__webpack_require__.e(
/*! import() | container */
"container").then(__webpack_require__.bind(__webpack_require__,
/*! ./shapes */
"../assets/dev/js/frontend/handlers/container/shapes.js")),()=>__webpack_require__.e(
/*! import() | container */
"container").then(__webpack_require__.bind(__webpack_require__,
/*! ./grid-container */
"../assets/dev/js/frontend/handlers/container/grid-container.js"))];exports["default"]=_default;}),"../assets/dev/js/frontend/handlers/global.js":
/*!****************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/global.js ***!
  \****************************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;class GlobalHandler extends elementorModules.frontend.handlers.Base{getWidgetType(){return'global';}
animate(){const $element=this.$element,animation=this.getAnimation();if('none'===animation){$element.removeClass('elementor-invisible');return;}
const elementSettings=this.getElementSettings(),animationDelay=elementSettings._animation_delay||elementSettings.animation_delay||0;$element.removeClass(animation);if(this.currentAnimation){$element.removeClass(this.currentAnimation);}
this.currentAnimation=animation;setTimeout(()=>{$element.removeClass('elementor-invisible').addClass('animated '+animation);},animationDelay);}
getAnimation(){return this.getCurrentDeviceSetting('animation')||this.getCurrentDeviceSetting('_animation');}
onInit(){super.onInit(...arguments);if(this.getAnimation()){const observer=elementorModules.utils.Scroll.scrollObserver({callback:event=>{if(event.isInViewport){this.animate();observer.unobserve(this.$element[0]);}}});observer.observe(this.$element[0]);}}
onElementChange(propertyName){if(/^_?animation/.test(propertyName)){this.animate();}}}
var _default=$scope=>{elementorFrontend.elementsHandler.addHandler(GlobalHandler,{$element:$scope});};exports["default"]=_default;}),"../assets/dev/js/frontend/handlers/section/handles-position.js":
/*!**********************************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/section/handles-position.js ***!
  \**********************************************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;class HandlesPosition extends elementorModules.frontend.handlers.Base{isActive(){return elementorFrontend.isEditMode();}
isFirstSection(){return this.$element[0]===document.querySelector('.elementor-edit-mode .elementor-top-section');}
isOverflowHidden(){return'hidden'===this.$element.css('overflow');}
getOffset(){if('body'===elementor.config.document.container){return this.$element.offset().top;}
const $container=jQuery(elementor.config.document.container);return this.$element.offset().top-$container.offset().top;}
setHandlesPosition(){const document=elementor.documents.getCurrent();if(!document||!document.container.isEditable()){return;}
const insideHandleClass='elementor-section--handles-inside';if(elementor.settings.page.model.attributes.scroll_snap){this.$element.addClass(insideHandleClass);return;}
const isOverflowHidden=this.isOverflowHidden();if(!isOverflowHidden&&!this.isFirstSection()){return;}
const offset=isOverflowHidden?0:this.getOffset();if(offset<25){this.$element.addClass(insideHandleClass);const $handlesElement=this.$element.find('> .elementor-element-overlay > .elementor-editor-section-settings');if(offset<-5){$handlesElement.css('top',-offset);}else{$handlesElement.css('top','');}}else{this.$element.removeClass(insideHandleClass);}}
onInit(){if(!this.isActive()){return;}
this.setHandlesPosition();this.$element.on('mouseenter',this.setHandlesPosition.bind(this));}}
exports["default"]=HandlesPosition;}),"../assets/dev/js/frontend/handlers/section/shapes.js":
/*!************************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/section/shapes.js ***!
  \************************************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;class Shapes extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{container:'> .elementor-shape-%s'},svgURL:elementorFrontend.config.urls.assets+'shapes/'};}
getDefaultElements(){const elements={},selectors=this.getSettings('selectors');elements.$topContainer=this.$element.find(selectors.container.replace('%s','top'));elements.$bottomContainer=this.$element.find(selectors.container.replace('%s','bottom'));return elements;}
isActive(){return elementorFrontend.isEditMode();}
getSvgURL(shapeType,fileName){let svgURL=this.getSettings('svgURL')+fileName+'.svg';if(elementor.config.additional_shapes&&shapeType in elementor.config.additional_shapes){svgURL=elementor.config.additional_shapes[shapeType];if(-1<fileName.indexOf('-negative')){svgURL=svgURL.replace('.svg','-negative.svg');}}
return svgURL;}
buildSVG(side){const baseSettingKey='shape_divider_'+side,shapeType=this.getElementSettings(baseSettingKey),$svgContainer=this.elements['$'+side+'Container'];$svgContainer.attr('data-shape',shapeType);if(!shapeType){$svgContainer.empty();return;}
let fileName=shapeType;if(this.getElementSettings(baseSettingKey+'_negative')){fileName+='-negative';}
const svgURL=this.getSvgURL(shapeType,fileName);jQuery.get(svgURL,data=>{$svgContainer.empty().append(data.childNodes[0]);});this.setNegative(side);}
setNegative(side){this.elements['$'+side+'Container'].attr('data-negative',!!this.getElementSettings('shape_divider_'+side+'_negative'));}
onInit(){if(!this.isActive(this.getSettings())){return;}
super.onInit(...arguments);['top','bottom'].forEach(side=>{if(this.getElementSettings('shape_divider_'+side)){this.buildSVG(side);}});}
onElementChange(propertyName){const shapeChange=propertyName.match(/^shape_divider_(top|bottom)$/);if(shapeChange){this.buildSVG(shapeChange[1]);return;}
const negativeChange=propertyName.match(/^shape_divider_(top|bottom)_negative$/);if(negativeChange){this.buildSVG(negativeChange[1]);this.setNegative(negativeChange[1]);}}}
exports["default"]=Shapes;}),"../assets/dev/js/frontend/handlers/section/stretched-section.js":
/*!***********************************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/section/stretched-section.js ***!
  \***********************************************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;class StretchedSection extends elementorModules.frontend.handlers.StretchedElement{getStretchedClass(){return'elementor-section-stretched';}
getStretchSettingName(){return'stretch_section';}
getStretchActiveValue(){return'section-stretched';}}
exports["default"]=StretchedSection;}),"../assets/dev/js/frontend/utils/anchors.js":
/*!**************************************************!*\
  !*** ../assets/dev/js/frontend/utils/anchors.js ***!
  \**************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{var _utils=__webpack_require__(
/*! ./utils */
"../assets/dev/js/frontend/utils/utils.js");module.exports=elementorModules.ViewModule.extend({getDefaultSettings(){return{scrollDuration:500,selectors:{links:'a[href*="#"]',targets:'.elementor-element, .elementor-menu-anchor',scrollable:(0,_utils.isScrollSnapActive)()?'body':'html, body'}};},getDefaultElements(){var $=jQuery,selectors=this.getSettings('selectors');return{$scrollable:$(selectors.scrollable)};},bindEvents(){elementorFrontend.elements.$document.on('click',this.getSettings('selectors.links'),this.handleAnchorLinks);},handleAnchorLinks(event){var clickedLink=event.currentTarget,isSamePathname=location.pathname===clickedLink.pathname,isSameHostname=location.hostname===clickedLink.hostname,$anchor;if(!isSameHostname||!isSamePathname||clickedLink.hash.length<2){return;}
try{$anchor=jQuery(clickedLink.hash).filter(this.getSettings('selectors.targets'));}catch(e){return;}
if(!$anchor.length){return;}
var scrollTop=$anchor.offset().top,$wpAdminBar=elementorFrontend.elements.$wpAdminBar,$activeStickies=jQuery('.elementor-section.elementor-sticky--active:visible'),maxStickyHeight=0;if($wpAdminBar.length>0){scrollTop-=$wpAdminBar.height();}
if($activeStickies.length>0){maxStickyHeight=Math.max.apply(null,$activeStickies.map(function(){return jQuery(this).outerHeight();}).get());scrollTop-=maxStickyHeight;}
event.preventDefault();scrollTop=elementorFrontend.hooks.applyFilters('frontend/handlers/menu_anchor/scroll_top_distance',scrollTop);if((0,_utils.isScrollSnapActive)()){elementorFrontend.elements.$body.css('scroll-snap-type','none');}
this.elements.$scrollable.animate({scrollTop},this.getSettings('scrollDuration'),'linear',()=>{if((0,_utils.isScrollSnapActive)()){elementorFrontend.elements.$body.css('scroll-snap-type','');}});},onInit(){elementorModules.ViewModule.prototype.onInit.apply(this,arguments);}});}),"../assets/dev/js/frontend/utils/assets-loader.js":
/*!********************************************************!*\
  !*** ../assets/dev/js/frontend/utils/assets-loader.js ***!
  \********************************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;class AssetsLoader{getScriptElement(src){const scriptElement=document.createElement('script');scriptElement.src=src;return scriptElement;}
getStyleElement(src){const styleElement=document.createElement('link');styleElement.rel='stylesheet';styleElement.href=src;return styleElement;}
load(type,key){const assetData=AssetsLoader.assets[type][key];if(!assetData.loader){assetData.loader=new Promise(resolve=>{const element='style'===type?this.getStyleElement(assetData.src):this.getScriptElement(assetData.src);element.onload=()=>resolve(true);const parent='head'===assetData.parent?assetData.parent:'body';document[parent].appendChild(element);});}
return assetData.loader;}}
exports["default"]=AssetsLoader;const fileSuffix=elementorFrontendConfig.environmentMode.isScriptDebug?'':'.min';const swiperSource=elementorFrontendConfig.experimentalFeatures.e_swiper_latest?`${elementorFrontendConfig.urls.assets}lib/swiper/v8/swiper${fileSuffix}.js?ver=8.4.5`:`${elementorFrontendConfig.urls.assets}lib/swiper/swiper${fileSuffix}.js?ver=5.3.6`;AssetsLoader.assets={script:{dialog:{src:`${elementorFrontendConfig.urls.assets}lib/dialog/dialog${fileSuffix}.js?ver=4.9.0`},'share-link':{src:`${elementorFrontendConfig.urls.assets}lib/share-link/share-link${fileSuffix}.js?ver=${elementorFrontendConfig.version}`},swiper:{src:swiperSource}},style:{}};}),"../assets/dev/js/frontend/utils/controls.js":
/*!***************************************************!*\
  !*** ../assets/dev/js/frontend/utils/controls.js ***!
  \***************************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;class Controls{getControlValue(controlSettings,controlKey,controlSubKey){let value;if('object'===typeof controlSettings[controlKey]&&controlSubKey){value=controlSettings[controlKey][controlSubKey];}else{value=controlSettings[controlKey];}
return value;}
getResponsiveControlValue(controlSettings,controlKey){let controlSubKey=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';let device=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;const currentDeviceMode=device||elementorFrontend.getCurrentDeviceMode(),controlValueDesktop=this.getControlValue(controlSettings,controlKey,controlSubKey);if('widescreen'===currentDeviceMode){const controlValueWidescreen=this.getControlValue(controlSettings,`${controlKey}_widescreen`,controlSubKey);return!!controlValueWidescreen||0===controlValueWidescreen?controlValueWidescreen:controlValueDesktop;}
const activeBreakpoints=elementorFrontend.breakpoints.getActiveBreakpointsList({withDesktop:true});let parentDeviceMode=currentDeviceMode,deviceIndex=activeBreakpoints.indexOf(currentDeviceMode),controlValue='';while(deviceIndex<=activeBreakpoints.length){if('desktop'===parentDeviceMode){controlValue=controlValueDesktop;break;}
const responsiveControlKey=`${controlKey}_${parentDeviceMode}`,responsiveControlValue=this.getControlValue(controlSettings,responsiveControlKey,controlSubKey);if(!!responsiveControlValue||0===responsiveControlValue){controlValue=responsiveControlValue;break;}
deviceIndex++;parentDeviceMode=activeBreakpoints[deviceIndex];}
return controlValue;}}
exports["default"]=Controls;}),"../assets/dev/js/frontend/utils/lightbox/lightbox-manager.js":
/*!********************************************************************!*\
  !*** ../assets/dev/js/frontend/utils/lightbox/lightbox-manager.js ***!
  \********************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;class LightboxManager extends elementorModules.ViewModule{static getLightbox(){const lightboxPromise=new Promise(resolveLightbox=>{__webpack_require__.e(
/*! import() | lightbox */
"lightbox").then(__webpack_require__.t.bind(__webpack_require__,
/*! elementor-frontend/utils/lightbox/lightbox */
"../assets/dev/js/frontend/utils/lightbox/lightbox.js",23)).then(_ref=>{let{default:LightboxModule}=_ref;return resolveLightbox(new LightboxModule());});}),dialogPromise=elementorFrontend.utils.assetsLoader.load('script','dialog'),shareLinkPromise=elementorFrontend.utils.assetsLoader.load('script','share-link');return Promise.all([lightboxPromise,dialogPromise,shareLinkPromise]).then(()=>lightboxPromise);}
getDefaultSettings(){return{selectors:{links:'a, [data-elementor-lightbox]'}};}
getDefaultElements(){return{$links:jQuery(this.getSettings('selectors.links'))};}
isLightboxLink(element){if('a'===element.tagName.toLowerCase()&&(element.hasAttribute('download')||!/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(element.href))&&!element.dataset.elementorLightboxVideo){return false;}
const generalOpenInLightbox=elementorFrontend.getKitSettings('global_image_lightbox'),currentLinkOpenInLightbox=element.dataset.elementorOpenLightbox;return'yes'===currentLinkOpenInLightbox||generalOpenInLightbox&&'no'!==currentLinkOpenInLightbox;}
async onLinkClick(event){const element=event.currentTarget,$target=jQuery(event.target),editMode=elementorFrontend.isEditMode(),isColorPickingMode=editMode&&elementor.$previewContents.find('body').hasClass('elementor-editor__ui-state__color-picker'),isClickInsideElementor=!!$target.closest('.elementor-edit-area').length;if(!this.isLightboxLink(element)){if(editMode&&isClickInsideElementor){event.preventDefault();}
return;}
event.preventDefault();if(editMode&&!elementor.getPreferences('lightbox_in_editor')){return;}
if(isColorPickingMode){return;}
const lightbox=this.isOptimizedAssetsLoading()?await LightboxManager.getLightbox():elementorFrontend.utils.lightbox;lightbox.createLightbox(element);}
isOptimizedAssetsLoading(){return elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading;}
bindEvents(){elementorFrontend.elements.$document.on('click',this.getSettings('selectors.links'),event=>this.onLinkClick(event));}
onInit(){super.onInit(...arguments);if(!this.isOptimizedAssetsLoading()||elementorFrontend.isEditMode()){return;}
this.elements.$links.each((index,element)=>{if(this.isLightboxLink(element)){LightboxManager.getLightbox();return false;}});}}
exports["default"]=LightboxManager;}),"../assets/dev/js/frontend/utils/swiper.js":
/*!*************************************************!*\
  !*** ../assets/dev/js/frontend/utils/swiper.js ***!
  \*************************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;class Swiper{constructor(container,config){this.config=config;if(this.config.breakpoints){this.config=this.adjustConfig(config);}
if(container instanceof jQuery){container=container[0];}
container.closest('.elementor-widget-wrap')?.classList.add('e-swiper-container');container.closest('.elementor-widget')?.classList.add('e-widget-swiper');return new Promise(resolve=>{if(!elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading){return resolve(this.createSwiperInstance(container,this.config));}
elementorFrontend.utils.assetsLoader.load('script','swiper').then(()=>resolve(this.createSwiperInstance(container,this.config)));});}
createSwiperInstance(container,config){const SwiperSource=window.Swiper;SwiperSource.prototype.adjustConfig=this.adjustConfig;return new SwiperSource(container,config);}
adjustConfig(config){if(!config.handleElementorBreakpoints){return config;}
const elementorBreakpoints=elementorFrontend.config.responsive.activeBreakpoints,elementorBreakpointValues=elementorFrontend.breakpoints.getBreakpointValues();Object.keys(config.breakpoints).forEach(configBPKey=>{const configBPKeyInt=parseInt(configBPKey);let breakpointToUpdate;if(configBPKeyInt===elementorBreakpoints.mobile.value||configBPKeyInt+1===elementorBreakpoints.mobile.value){breakpointToUpdate=0;}else if(elementorBreakpoints.widescreen&&(configBPKeyInt===elementorBreakpoints.widescreen.value||configBPKeyInt+1===elementorBreakpoints.widescreen.value)){breakpointToUpdate=configBPKeyInt;}else{const currentBPIndexInElementorBPs=elementorBreakpointValues.findIndex(elementorBP=>{return configBPKeyInt===elementorBP||configBPKeyInt+1===elementorBP;});breakpointToUpdate=elementorBreakpointValues[currentBPIndexInElementorBPs-1];}
config.breakpoints[breakpointToUpdate]=config.breakpoints[configBPKey];config.breakpoints[configBPKey]={slidesPerView:config.slidesPerView,slidesPerGroup:config.slidesPerGroup?config.slidesPerGroup:1};});return config;}}
exports["default"]=Swiper;}),"../assets/dev/js/frontend/utils/url-actions.js":
/*!******************************************************!*\
  !*** ../assets/dev/js/frontend/utils/url-actions.js ***!
  \******************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;__webpack_require__(
/*! core-js/modules/web.dom-exception.stack.js */
"../node_modules/core-js/modules/web.dom-exception.stack.js");class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{links:'a[href^="%23elementor-action"], a[href^="#elementor-action"]'}};}
bindEvents(){elementorFrontend.elements.$document.on('click',this.getSettings('selectors.links'),this.runLinkAction.bind(this));}
initActions(){this.actions={lightbox:async settings=>{const lightbox=await elementorFrontend.utils.lightbox;if(settings.slideshow){lightbox.openSlideshow(settings.slideshow,settings.url);}else{if(settings.id){settings.type='image';}
lightbox.showModal(settings);}}};}
addAction(name,callback){this.actions[name]=callback;}
runAction(url){url=decodeURIComponent(url);const actionMatch=url.match(/action=(.+?)&/);if(!actionMatch){return;}
const action=this.actions[actionMatch[1]];if(!action){return;}
let settings={};const settingsMatch=url.match(/settings=(.+)/);if(settingsMatch){settings=JSON.parse(atob(settingsMatch[1]));}
for(var _len=arguments.length,restArgs=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){restArgs[_key-1]=arguments[_key];}
action(settings,...restArgs);}
runLinkAction(event){event.preventDefault();this.runAction(jQuery(event.currentTarget).attr('href'),event);}
runHashAction(){if(!location.hash){return;}
const elementWithHash=document.querySelector(`[data-e-action-hash="${location.hash}"], a[href*="${location.hash}"]`);if(elementWithHash){this.runAction(elementWithHash.getAttribute('data-e-action-hash'));}}
createActionHash(action,settings){return encodeURIComponent(`#elementor-action:action=${action}&settings=${btoa(JSON.stringify(settings))}`);}
onInit(){super.onInit();this.initActions();elementorFrontend.on('components:init',this.runHashAction.bind(this));}}
exports["default"]=_default;}),"../assets/dev/js/frontend/utils/utils.js":
/*!************************************************!*\
  !*** ../assets/dev/js/frontend/utils/utils.js ***!
  \************************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports.isScrollSnapActive=exports.escapeHTML=void 0;const escapeHTML=str=>{const specialChars={'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'};return str.replace(/[&<>'"]/g,tag=>specialChars[tag]||tag);};exports.escapeHTML=escapeHTML;const isScrollSnapActive=()=>{const scrollSnapStatus=elementorFrontend.isEditMode()?elementor.settings.page.model.attributes?.scroll_snap:elementorFrontend.config.settings.page?.scroll_snap;return'yes'===scrollSnapStatus?true:false;};exports.isScrollSnapActive=isScrollSnapActive;}),"../assets/dev/js/frontend/utils/video-api/base-loader.js":
/*!****************************************************************!*\
  !*** ../assets/dev/js/frontend/utils/video-api/base-loader.js ***!
  \****************************************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;class BaseLoader extends elementorModules.ViewModule{getDefaultSettings(){return{isInserted:false,selectors:{firstScript:'script:first'}};}
getDefaultElements(){return{$firstScript:jQuery(this.getSettings('selectors.firstScript'))};}
insertAPI(){this.elements.$firstScript.before(jQuery('<script>',{src:this.getApiURL()}));this.setSettings('isInserted',true);}
getVideoIDFromURL(url){const videoIDParts=url.match(this.getURLRegex());return videoIDParts&&videoIDParts[1];}
onApiReady(callback){if(!this.getSettings('isInserted')){this.insertAPI();}
if(this.isApiLoaded()){callback(this.getApiObject());}else{setTimeout(()=>{this.onApiReady(callback);},350);}}
getAutoplayURL(videoURL){return videoURL.replace('&autoplay=0','')+'&autoplay=1';}}
exports["default"]=BaseLoader;}),"../assets/dev/js/frontend/utils/video-api/vimeo-loader.js":
/*!*****************************************************************!*\
  !*** ../assets/dev/js/frontend/utils/video-api/vimeo-loader.js ***!
  \*****************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _baseLoader=_interopRequireDefault(__webpack_require__(
/*! ./base-loader */
"../assets/dev/js/frontend/utils/video-api/base-loader.js"));class VimeoLoader extends _baseLoader.default{getApiURL(){return'https://player.vimeo.com/api/player.js';}
getURLRegex(){return/^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/;}
isApiLoaded(){return window.Vimeo;}
getApiObject(){return Vimeo;}
getAutoplayURL(videoURL){videoURL=super.getAutoplayURL(videoURL);const timeMatch=videoURL.match(/#t=[^&]*/);return videoURL.replace(timeMatch[0],'')+timeMatch;}}
exports["default"]=VimeoLoader;}),"../assets/dev/js/frontend/utils/video-api/youtube-loader.js":
/*!*******************************************************************!*\
  !*** ../assets/dev/js/frontend/utils/video-api/youtube-loader.js ***!
  \*******************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__(
/*! @babel/runtime/helpers/interopRequireDefault */
"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _baseLoader=_interopRequireDefault(__webpack_require__(
/*! ./base-loader */
"../assets/dev/js/frontend/utils/video-api/base-loader.js"));class YoutubeLoader extends _baseLoader.default{getApiURL(){return'https://www.youtube.com/iframe_api';}
getURLRegex(){return/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/;}
isApiLoaded(){return window.YT&&YT.loaded;}
getApiObject(){return YT;}}
exports["default"]=YoutubeLoader;}),"../assets/dev/js/public-path.js":
/*!***************************************!*\
  !*** ../assets/dev/js/public-path.js ***!
  \***************************************/
((__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__.p=elementorFrontendConfig.urls.assets+'js/';}),"../assets/dev/js/utils/breakpoints.js":
/*!*********************************************!*\
  !*** ../assets/dev/js/utils/breakpoints.js ***!
  \*********************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;class Breakpoints extends elementorModules.Module{constructor(responsiveConfig){super();this.responsiveConfig=responsiveConfig;}
getActiveBreakpointsList(){let args=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};const defaultArgs={largeToSmall:false,withDesktop:false};args={...defaultArgs,...args};const breakpointKeys=Object.keys(this.responsiveConfig.activeBreakpoints);if(args.withDesktop){const widescreenIndex=breakpointKeys.indexOf('widescreen'),indexToInsertDesktopDevice=-1===widescreenIndex?breakpointKeys.length:breakpointKeys.length-1;breakpointKeys.splice(indexToInsertDesktopDevice,0,'desktop');}
if(args.largeToSmall){breakpointKeys.reverse();}
return breakpointKeys;}
getBreakpointValues(){const{activeBreakpoints}=this.responsiveConfig,breakpointValues=[];Object.values(activeBreakpoints).forEach(breakpointConfig=>{breakpointValues.push(breakpointConfig.value);});return breakpointValues;}
getDesktopPreviousDeviceKey(){let desktopPreviousDevice='';const{activeBreakpoints}=this.responsiveConfig,breakpointKeys=Object.keys(activeBreakpoints),numOfDevices=breakpointKeys.length;if('min'===activeBreakpoints[breakpointKeys[numOfDevices-1]].direction){desktopPreviousDevice=breakpointKeys[numOfDevices-2];}else{desktopPreviousDevice=breakpointKeys[numOfDevices-1];}
return desktopPreviousDevice;}
getDesktopMinPoint(){const{activeBreakpoints}=this.responsiveConfig,desktopPreviousDevice=this.getDesktopPreviousDeviceKey();return activeBreakpoints[desktopPreviousDevice].value+1;}
getDeviceMinBreakpoint(device){if('desktop'===device){return this.getDesktopMinPoint();}
const{activeBreakpoints}=this.responsiveConfig,breakpointNames=Object.keys(activeBreakpoints);let minBreakpoint;if(breakpointNames[0]===device){minBreakpoint=320;}else if('widescreen'===device){if(activeBreakpoints[device]){minBreakpoint=activeBreakpoints[device].value;}else{minBreakpoint=this.responsiveConfig.breakpoints.widescreen;}}else{const deviceNameIndex=breakpointNames.indexOf(device),previousIndex=deviceNameIndex-1;minBreakpoint=activeBreakpoints[breakpointNames[previousIndex]].value+1;}
return minBreakpoint;}
getActiveMatchRegex(){return new RegExp(this.getActiveBreakpointsList().map(device=>'_'+device).join('|')+'$');}}
exports["default"]=Breakpoints;}),"../assets/dev/js/utils/events.js":
/*!****************************************!*\
  !*** ../assets/dev/js/utils/events.js ***!
  \****************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=exports.Events=void 0;class Events{static dispatch(context,event){let data=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;let bcEvent=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;context=context instanceof jQuery?context[0]:context;if(bcEvent){context.dispatchEvent(new CustomEvent(bcEvent,{detail:data}));}
context.dispatchEvent(new CustomEvent(event,{detail:data}));}}
exports.Events=Events;var _default=Events;exports["default"]=_default;}),"../assets/dev/js/utils/hooks.js":
/*!***************************************!*\
  !*** ../assets/dev/js/utils/hooks.js ***!
  \***************************************/
((module)=>{var EventManager=function(){var slice=Array.prototype.slice,MethodsAvailable;var STORAGE={actions:{},filters:{}};function _removeHook(type,hook,callback,context){var handlers,handler,i;if(!STORAGE[type][hook]){return;}
if(!callback){STORAGE[type][hook]=[];}else{handlers=STORAGE[type][hook];if(!context){for(i=handlers.length;i--;){if(handlers[i].callback===callback){handlers.splice(i,1);}}}else{for(i=handlers.length;i--;){handler=handlers[i];if(handler.callback===callback&&handler.context===context){handlers.splice(i,1);}}}}}
function _hookInsertSort(hooks){var tmpHook,j,prevHook;for(var i=1,len=hooks.length;i<len;i++){tmpHook=hooks[i];j=i;while((prevHook=hooks[j-1])&&prevHook.priority>tmpHook.priority){hooks[j]=hooks[j-1];--j;}
hooks[j]=tmpHook;}
return hooks;}
function _addHook(type,hook,callback,priority,context){var hookObject={callback,priority,context};var hooks=STORAGE[type][hook];if(hooks){var hasSameCallback=false;jQuery.each(hooks,function(){if(this.callback===callback){hasSameCallback=true;return false;}});if(hasSameCallback){return;}
hooks.push(hookObject);hooks=_hookInsertSort(hooks);}else{hooks=[hookObject];}
STORAGE[type][hook]=hooks;}
function _runHook(type,hook,args){var handlers=STORAGE[type][hook],i,len;if(!handlers){return'filters'===type?args[0]:false;}
len=handlers.length;if('filters'===type){for(i=0;i<len;i++){args[0]=handlers[i].callback.apply(handlers[i].context,args);}}else{for(i=0;i<len;i++){handlers[i].callback.apply(handlers[i].context,args);}}
return'filters'===type?args[0]:true;}
function addAction(action,callback,priority,context){if('string'===typeof action&&'function'===typeof callback){priority=parseInt(priority||10,10);_addHook('actions',action,callback,priority,context);}
return MethodsAvailable;}
function doAction(){var args=slice.call(arguments);var action=args.shift();if('string'===typeof action){_runHook('actions',action,args);}
return MethodsAvailable;}
function removeAction(action,callback){if('string'===typeof action){_removeHook('actions',action,callback);}
return MethodsAvailable;}
function addFilter(filter,callback,priority,context){if('string'===typeof filter&&'function'===typeof callback){priority=parseInt(priority||10,10);_addHook('filters',filter,callback,priority,context);}
return MethodsAvailable;}
function applyFilters(){var args=slice.call(arguments);var filter=args.shift();if('string'===typeof filter){return _runHook('filters',filter,args);}
return MethodsAvailable;}
function removeFilter(filter,callback){if('string'===typeof filter){_removeHook('filters',filter,callback);}
return MethodsAvailable;}
MethodsAvailable={removeFilter,applyFilters,addFilter,removeAction,doAction,addAction};return MethodsAvailable;};module.exports=EventManager;}),"../core/common/assets/js/utils/environment.js":
/*!*****************************************************!*\
  !*** ../core/common/assets/js/utils/environment.js ***!
  \*****************************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;const matchUserAgent=UserAgentStr=>{return userAgent.indexOf(UserAgentStr)>=0;},userAgent=navigator.userAgent,isOpera=!!window.opr&&!!opr.addons||!!window.opera||matchUserAgent(' OPR/'),isFirefox=matchUserAgent('Firefox'),isSafari=/^((?!chrome|android).)*safari/i.test(userAgent)||/constructor/i.test(window.HTMLElement)||(p=>{return'[object SafariRemoteNotification]'===p.toString();})(!window.safari||typeof safari!=='undefined'&&safari.pushNotification),isIE=/Trident|MSIE/.test(userAgent)&&(false||!!document.documentMode),isEdge=!isIE&&!!window.StyleMedia||matchUserAgent('Edg'),isChrome=!!window.chrome&&matchUserAgent('Chrome')&&!(isEdge||isOpera),isBlink=matchUserAgent('Chrome')&&!!window.CSS,isAppleWebkit=matchUserAgent('AppleWebKit')&&!isBlink,isTouchDevice='ontouchstart'in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,environment={isTouchDevice,appleWebkit:isAppleWebkit,blink:isBlink,chrome:isChrome,edge:isEdge,firefox:isFirefox,ie:isIE,mac:matchUserAgent('Macintosh'),opera:isOpera,safari:isSafari,webkit:matchUserAgent('AppleWebKit')};var _default=environment;exports["default"]=_default;}),"../core/common/assets/js/utils/storage.js":
/*!*************************************************!*\
  !*** ../core/common/assets/js/utils/storage.js ***!
  \*************************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;class _default extends elementorModules.Module{get(key,options){options=options||{};let storage;try{storage=options.session?sessionStorage:localStorage;}catch(e){return key?undefined:{};}
let elementorStorage=storage.getItem('elementor');if(elementorStorage){elementorStorage=JSON.parse(elementorStorage);}else{elementorStorage={};}
if(!elementorStorage.__expiration){elementorStorage.__expiration={};}
const expiration=elementorStorage.__expiration;let expirationToCheck=[];if(key){if(expiration[key]){expirationToCheck=[key];}}else{expirationToCheck=Object.keys(expiration);}
let entryExpired=false;expirationToCheck.forEach(expirationKey=>{if(new Date(expiration[expirationKey])<new Date()){delete elementorStorage[expirationKey];delete expiration[expirationKey];entryExpired=true;}});if(entryExpired){this.save(elementorStorage,options.session);}
if(key){return elementorStorage[key];}
return elementorStorage;}
set(key,value,options){options=options||{};const elementorStorage=this.get(null,options);elementorStorage[key]=value;if(options.lifetimeInSeconds){const date=new Date();date.setTime(date.getTime()+options.lifetimeInSeconds*1000);elementorStorage.__expiration[key]=date.getTime();}
this.save(elementorStorage,options.session);}
save(object,session){let storage;try{storage=session?sessionStorage:localStorage;}catch(e){return;}
storage.setItem('elementor',JSON.stringify(object));}}
exports["default"]=_default;}),"../modules/shapes/assets/js/frontend/frontend.js":
/*!********************************************************!*\
  !*** ../modules/shapes/assets/js/frontend/frontend.js ***!
  \********************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;class _default extends elementorModules.Module{constructor(){super();elementorFrontend.elementsHandler.attachHandler('text-path',()=>__webpack_require__.e(
/*! import() | text-path */
"text-path").then(__webpack_require__.bind(__webpack_require__,
/*! ./handlers/text-path */
"../modules/shapes/assets/js/frontend/handlers/text-path.js")));}}
exports["default"]=_default;}),"../node_modules/core-js/internals/an-instance.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/an-instance.js ***!
  \********************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{var isPrototypeOf=__webpack_require__(
/*! ../internals/object-is-prototype-of */
"../node_modules/core-js/internals/object-is-prototype-of.js");var $TypeError=TypeError;module.exports=function(it,Prototype){if(isPrototypeOf(Prototype,it))return it;throw $TypeError('Incorrect invocation');};}),"../node_modules/core-js/internals/dom-exception-constants.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/dom-exception-constants.js ***!
  \********************************************************************/
((module)=>{module.exports={IndexSizeError:{s:'INDEX_SIZE_ERR',c:1,m:1},DOMStringSizeError:{s:'DOMSTRING_SIZE_ERR',c:2,m:0},HierarchyRequestError:{s:'HIERARCHY_REQUEST_ERR',c:3,m:1},WrongDocumentError:{s:'WRONG_DOCUMENT_ERR',c:4,m:1},InvalidCharacterError:{s:'INVALID_CHARACTER_ERR',c:5,m:1},NoDataAllowedError:{s:'NO_DATA_ALLOWED_ERR',c:6,m:0},NoModificationAllowedError:{s:'NO_MODIFICATION_ALLOWED_ERR',c:7,m:1},NotFoundError:{s:'NOT_FOUND_ERR',c:8,m:1},NotSupportedError:{s:'NOT_SUPPORTED_ERR',c:9,m:1},InUseAttributeError:{s:'INUSE_ATTRIBUTE_ERR',c:10,m:1},InvalidStateError:{s:'INVALID_STATE_ERR',c:11,m:1},SyntaxError:{s:'SYNTAX_ERR',c:12,m:1},InvalidModificationError:{s:'INVALID_MODIFICATION_ERR',c:13,m:1},NamespaceError:{s:'NAMESPACE_ERR',c:14,m:1},InvalidAccessError:{s:'INVALID_ACCESS_ERR',c:15,m:1},ValidationError:{s:'VALIDATION_ERR',c:16,m:0},TypeMismatchError:{s:'TYPE_MISMATCH_ERR',c:17,m:1},SecurityError:{s:'SECURITY_ERR',c:18,m:1},NetworkError:{s:'NETWORK_ERR',c:19,m:1},AbortError:{s:'ABORT_ERR',c:20,m:1},URLMismatchError:{s:'URL_MISMATCH_ERR',c:21,m:1},QuotaExceededError:{s:'QUOTA_EXCEEDED_ERR',c:22,m:1},TimeoutError:{s:'TIMEOUT_ERR',c:23,m:1},InvalidNodeTypeError:{s:'INVALID_NODE_TYPE_ERR',c:24,m:1},DataCloneError:{s:'DATA_CLONE_ERR',c:25,m:1}};}),"../node_modules/core-js/modules/web.dom-exception.stack.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/modules/web.dom-exception.stack.js ***!
  \******************************************************************/
((__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__(
/*! ../internals/export */
"../node_modules/core-js/internals/export.js");var global=__webpack_require__(
/*! ../internals/global */
"../node_modules/core-js/internals/global.js");var getBuiltIn=__webpack_require__(
/*! ../internals/get-built-in */
"../node_modules/core-js/internals/get-built-in.js");var createPropertyDescriptor=__webpack_require__(
/*! ../internals/create-property-descriptor */
"../node_modules/core-js/internals/create-property-descriptor.js");var defineProperty=(__webpack_require__(
/*! ../internals/object-define-property */
"../node_modules/core-js/internals/object-define-property.js").f);var hasOwn=__webpack_require__(
/*! ../internals/has-own-property */
"../node_modules/core-js/internals/has-own-property.js");var anInstance=__webpack_require__(
/*! ../internals/an-instance */
"../node_modules/core-js/internals/an-instance.js");var inheritIfRequired=__webpack_require__(
/*! ../internals/inherit-if-required */
"../node_modules/core-js/internals/inherit-if-required.js");var normalizeStringArgument=__webpack_require__(
/*! ../internals/normalize-string-argument */
"../node_modules/core-js/internals/normalize-string-argument.js");var DOMExceptionConstants=__webpack_require__(
/*! ../internals/dom-exception-constants */
"../node_modules/core-js/internals/dom-exception-constants.js");var clearErrorStack=__webpack_require__(
/*! ../internals/error-stack-clear */
"../node_modules/core-js/internals/error-stack-clear.js");var DESCRIPTORS=__webpack_require__(
/*! ../internals/descriptors */
"../node_modules/core-js/internals/descriptors.js");var IS_PURE=__webpack_require__(
/*! ../internals/is-pure */
"../node_modules/core-js/internals/is-pure.js");var DOM_EXCEPTION='DOMException';var Error=getBuiltIn('Error');var NativeDOMException=getBuiltIn(DOM_EXCEPTION);var $DOMException=function DOMException(){anInstance(this,DOMExceptionPrototype);var argumentsLength=arguments.length;var message=normalizeStringArgument(argumentsLength<1?undefined:arguments[0]);var name=normalizeStringArgument(argumentsLength<2?undefined:arguments[1],'Error');var that=new NativeDOMException(message,name);var error=Error(message);error.name=DOM_EXCEPTION;defineProperty(that,'stack',createPropertyDescriptor(1,clearErrorStack(error.stack,1)));inheritIfRequired(that,this,$DOMException);return that;};var DOMExceptionPrototype=$DOMException.prototype=NativeDOMException.prototype;var ERROR_HAS_STACK='stack'in Error(DOM_EXCEPTION);var DOM_EXCEPTION_HAS_STACK='stack'in new NativeDOMException(1,2);var descriptor=NativeDOMException&&DESCRIPTORS&&Object.getOwnPropertyDescriptor(global,DOM_EXCEPTION);var BUGGY_DESCRIPTOR=!!descriptor&&!(descriptor.writable&&descriptor.configurable);var FORCED_CONSTRUCTOR=ERROR_HAS_STACK&&!BUGGY_DESCRIPTOR&&!DOM_EXCEPTION_HAS_STACK;$({global:true,constructor:true,forced:IS_PURE||FORCED_CONSTRUCTOR},{DOMException:FORCED_CONSTRUCTOR?$DOMException:NativeDOMException});var PolyfilledDOMException=getBuiltIn(DOM_EXCEPTION);var PolyfilledDOMExceptionPrototype=PolyfilledDOMException.prototype;if(PolyfilledDOMExceptionPrototype.constructor!==PolyfilledDOMException){if(!IS_PURE){defineProperty(PolyfilledDOMExceptionPrototype,'constructor',createPropertyDescriptor(1,PolyfilledDOMException));}
for(var key in DOMExceptionConstants)if(hasOwn(DOMExceptionConstants,key)){var constant=DOMExceptionConstants[key];var constantName=constant.s;if(!hasOwn(PolyfilledDOMException,constantName)){defineProperty(PolyfilledDOMException,constantName,createPropertyDescriptor(6,constant.c));}}}})},__webpack_require__=>{var __webpack_exec__=(moduleId)=>(__webpack_require__(__webpack_require__.s=moduleId))
__webpack_require__.O(0,["frontend-modules"],()=>(__webpack_exec__("../assets/dev/js/frontend/frontend.js")));var __webpack_exports__=__webpack_require__.O();}]);
/*! jQuery Validation Plugin - v1.21.0 - 7/17/2024
 * https://jqueryvalidation.org/
 * Copyright (c) 2024 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}});var b=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};a.extend(a.expr.pseudos||a.expr[":"],{blank:function(c){return!b(""+a(c).val())},filled:function(c){var d=a(c).val();return null!==d&&!!b(""+d)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,customElements:[],onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)});var f=[":text","[type='password']","[type='file']","select","textarea","[type='number']","[type='search']","[type='tel']","[type='url']","[type='email']","[type='datetime']","[type='date']","[type='month']","[type='week']","[type='time']","[type='datetime-local']","[type='range']","[type='color']","[type='radio']","[type='checkbox']","[contenteditable]","[type='button']"],g=["select","option","[type='radio']","[type='checkbox']"];a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",f.concat(this.settings.customElements).join(", "),b).on("click.validate",g.concat(this.settings.customElements).join(", "),b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={},d=["input","select","textarea","[contenteditable]"];return a(this.currentForm).find(d.concat(this.settings.customElements).join(", ")).not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);this.abortRequest(b),"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),this.settings&&this.settings.escapeHtml?h.text(c||""):h.html(c||"")):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass),this.settings&&this.settings.escapeHtml?h.text(c||""):h.html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return void 0===a?"":a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},elementAjaxPort:function(a){return"validate"+a.name},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()&&0===this.pendingRequest?(a(this.currentForm).trigger("submit"),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},abortRequest:function(b){var c;this.pending[b.name]&&(c=this.elementAjaxPort(b),a.ajaxAbort(c),this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass))},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a["date"===b?"dateISO":c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(a,d){b[a]="function"==typeof d&&"normalizer"!==a?d(c):d}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var a;b[this]&&(Array.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(a=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(a[0]),Number(a[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:-?\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c},maxlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d<=c},rangelength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c[0]&&d<=c[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),null!==i.valid&&i.old===h?i.valid:(i.old=h,i.valid=null,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:this.elementAjaxPort(c),dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var c,d={};return a.ajaxPrefilter?a.ajaxPrefilter(function(b,c,e){var f=b.port;"abort"===b.mode&&(a.ajaxAbort(f),d[f]=e)}):(c=a.ajax,a.ajax=function(b){var e=("mode"in b?b:a.ajaxSettings).mode,f=("port"in b?b:a.ajaxSettings).port;return"abort"===e?(a.ajaxAbort(f),d[f]=c.apply(this,arguments),d[f]):c.apply(this,arguments)}),a.ajaxAbort=function(a){d[a]&&(d[a].abort(),delete d[a])},a});
/*! mailcheck v1.1.2 @licence MIT */var Mailcheck={domainThreshold:2,secondLevelThreshold:2,topLevelThreshold:2,defaultDomains:["msn.com","bellsouth.net","telus.net","comcast.net","optusnet.com.au","earthlink.net","qq.com","sky.com","icloud.com","mac.com","sympatico.ca","googlemail.com","att.net","xtra.co.nz","web.de","cox.net","gmail.com","ymail.com","aim.com","rogers.com","verizon.net","rocketmail.com","google.com","optonline.net","sbcglobal.net","aol.com","me.com","btinternet.com","charter.net","shaw.ca"],defaultSecondLevelDomains:["yahoo","hotmail","mail","live","outlook","gmx"],defaultTopLevelDomains:["com","com.au","com.tw","ca","co.nz","co.uk","de","fr","it","ru","net","org","edu","gov","jp","nl","kr","se","eu","ie","co.il","us","at","be","dk","hk","es","gr","ch","no","cz","in","net","net.au","info","biz","mil","co.jp","sg","hu","uk"],run:function(a){a.domains=a.domains||Mailcheck.defaultDomains,a.secondLevelDomains=a.secondLevelDomains||Mailcheck.defaultSecondLevelDomains,a.topLevelDomains=a.topLevelDomains||Mailcheck.defaultTopLevelDomains,a.distanceFunction=a.distanceFunction||Mailcheck.sift4Distance;var b=function(a){return a},c=a.suggested||b,d=a.empty||b,e=Mailcheck.suggest(Mailcheck.encodeEmail(a.email),a.domains,a.secondLevelDomains,a.topLevelDomains,a.distanceFunction);return e?c(e):d()},suggest:function(a,b,c,d,e){a=a.toLowerCase();var f=this.splitEmail(a);if(c&&d&&-1!==c.indexOf(f.secondLevelDomain)&&-1!==d.indexOf(f.topLevelDomain))return!1;var g=this.findClosestDomain(f.domain,b,e,this.domainThreshold);if(g)return g==f.domain?!1:{address:f.address,domain:g,full:f.address+"@"+g};var h=this.findClosestDomain(f.secondLevelDomain,c,e,this.secondLevelThreshold),i=this.findClosestDomain(f.topLevelDomain,d,e,this.topLevelThreshold);if(f.domain){g=f.domain;var j=!1;if(h&&h!=f.secondLevelDomain&&(g=g.replace(f.secondLevelDomain,h),j=!0),i&&i!=f.topLevelDomain&&""!==f.secondLevelDomain&&(g=g.replace(new RegExp(f.topLevelDomain+"$"),i),j=!0),j)return{address:f.address,domain:g,full:f.address+"@"+g}}return!1},findClosestDomain:function(a,b,c,d){d=d||this.topLevelThreshold;var e,f=1/0,g=null;if(!a||!b)return!1;c||(c=this.sift4Distance);for(var h=0;h<b.length;h++){if(a===b[h])return a;e=c(a,b[h]),f>e&&(f=e,g=b[h])}return d>=f&&null!==g?g:!1},sift4Distance:function(a,b,c){if(void 0===c&&(c=5),!a||!a.length)return b?b.length:0;if(!b||!b.length)return a.length;for(var d=a.length,e=b.length,f=0,g=0,h=0,i=0,j=0,k=[];d>f&&e>g;){if(a.charAt(f)==b.charAt(g)){i++;for(var l=!1,m=0;m<k.length;){var n=k[m];if(f<=n.c1||g<=n.c2){l=Math.abs(g-f)>=Math.abs(n.c2-n.c1),l?j++:n.trans||(n.trans=!0,j++);break}f>n.c2&&g>n.c1?k.splice(m,1):m++}k.push({c1:f,c2:g,trans:l})}else{h+=i,i=0,f!=g&&(f=g=Math.min(f,g));for(var o=0;c>o&&(d>f+o||e>g+o);o++){if(d>f+o&&a.charAt(f+o)==b.charAt(g)){f+=o-1,g--;break}if(e>g+o&&a.charAt(f)==b.charAt(g+o)){f--,g+=o-1;break}}}f++,g++,(f>=d||g>=e)&&(h+=i,i=0,f=g=Math.min(f,g))}return h+=i,Math.round(Math.max(d,e)-h+j)},splitEmail:function(a){a=null!==a?a.replace(/^\s*/,"").replace(/\s*$/,""):null;var b=a.split("@");if(b.length<2)return!1;for(var c=0;c<b.length;c++)if(""===b[c])return!1;var d=b.pop(),e=d.split("."),f="",g="";if(0===e.length)return!1;if(1==e.length)g=e[0];else{f=e[0];for(var h=1;h<e.length;h++)g+=e[h]+".";g=g.substring(0,g.length-1)}return{topLevelDomain:g,secondLevelDomain:f,domain:d,address:b.join("@")}},encodeEmail:function(a){var b=encodeURI(a);return b=b.replace("%20"," ").replace("%25","%").replace("%5E","^").replace("%60","`").replace("%7B","{").replace("%7C","|").replace("%7D","}")}};"undefined"!=typeof module&&module.exports&&(module.exports=Mailcheck),"function"==typeof define&&define.amd&&define("mailcheck",[],function(){return Mailcheck}),"undefined"!=typeof window&&window.jQuery&&!function(a){a.fn.mailcheck=function(a){var b=this;if(a.suggested){var c=a.suggested;a.suggested=function(a){c(b,a)}}if(a.empty){var d=a.empty;a.empty=function(){d.call(null,b)}}a.email=this.val(),Mailcheck.run(a)}}(jQuery);
"use strict";var punycode=new function(){this.utf16={decode:function(r){for(var e,o,t=[],n=0,f=r.length;n<f;){if(55296==(63488&(e=r.charCodeAt(n++)))){if(o=r.charCodeAt(n++),55296!=(64512&e)||56320!=(64512&o))throw new RangeError("UTF-16(decode): Illegal UTF-16 sequence");e=((1023&e)<<10)+(1023&o)+65536}t.push(e)}return t},encode:function(r){for(var e,o=[],t=0,n=r.length;t<n;){if(55296==(63488&(e=r[t++])))throw new RangeError("UTF-16(encode): Illegal UTF-16 value");65535<e&&(e-=65536,o.push(String.fromCharCode(e>>>10&1023|55296)),e=56320|1023&e),o.push(String.fromCharCode(e))}return o.join("")}};var v=36,A=2147483647;this.decode=function(r,e){var o,t,n,f,h,a,i,c,l=[],u=[],d=r.length,s=128,g=0,C=72,p=r.lastIndexOf("-");for(p<0&&(p=0),t=0;t<p;++t){if(e&&(u[l.length]=r.charCodeAt(t)-65<26),128<=r.charCodeAt(t))throw new RangeError("Illegal input >= 0x80");l.push(r.charCodeAt(t))}for(n=0<p?p+1:0;n<d;){for(f=g,h=1,a=v;;a+=v){if(d<=n)return;if(c=r.charCodeAt(n++),v<=(c=c-48<10?c-22:c-65<26?c-65:c-97<26?c-97:v))return;if(c>Math.floor((A-g)/h))return;if(g+=c*h,c<(c=a<=C?1:C+26<=a?26:a-C))break;if(h>Math.floor(A/(v-c)))return;h*=v-c}if(C=function(r,e,o){var t;for(r=o?Math.floor(r/700):r>>1,r+=Math.floor(r/e),t=0;455<r;t+=v)r=Math.floor(r/35);return Math.floor(t+36*r/(r+38))}(g-f,o=l.length+1,0===f),Math.floor(g/o)>A-s)return;s+=Math.floor(g/o),g%=o,e&&u.splice(g,0,r.charCodeAt(n-1)-65<26),l.splice(g,0,s),g++}if(e)for(g=0,i=l.length;g<i;g++)u[g]&&(l[g]=String.fromCharCode(l[g]).toUpperCase().charCodeAt(0));return this.utf16.encode(l)},this.toUnicode=function(r){for(var e=r.split("."),o=[],t=0;t<e.length;++t){var n=e[t];o.push(n.match(/^xn--/)?punycode.decode(n.slice(4)):n)}return o.join(".")}};
var WPFormsUtils=window.WPFormsUtils||function(e){const s={triggerEvent(r,t,o=[]){t=new e.Event(t);return r.trigger(t,o),t},debounce(e,s,l){let n;return function(){const r=this,t=arguments;var o=l&&!n;clearTimeout(n),n=setTimeout(function(){n=null,l||e.apply(r,t)},s),o&&e.apply(r,t)}},cssColorsUtils:{isTransparentColor(r,t=.33){r=s.cssColorsUtils.getColorAsRGBArray(r);return Number(r?.[3])<=t},getColorAsRGBArray(r){if(!s.cssColorsUtils.isValidColor(r))return!1;r="transparent"===(r=r.replace(/^#/,"").replaceAll(" ",""))?"rgba(0,0,0,0)":r;let t;return r.match(/[0-9a-f]{6,8}$/gi)?(t=r.match(/\w\w/g).map(r=>parseInt(r,16)))[3]=t[3]||0===t[3]?(t[3]/255).toFixed(2):1:t=r.split("(")[1].split(")")[0].split(","),t},isValidColor(r){var t=(new Option).style;return t.color=r,""!==t.color},getContrastColor(r){var r=s.cssColorsUtils.getColorAsRGBArray(r),t=r.reduce((r,t)=>r+t,0);return Math.round(t/3*(r[3]??1))<128?"#ffffff":"#000000"},getColorWithOpacity(r,t){r=r.trim();var o=s.cssColorsUtils.getColorAsRGBArray(r);if(!o)return r;t=t&&0!==t.length?t.toString():"1";r=4===o.length?parseFloat(o[3]):1,t=parseFloat(t)*r;return`rgba(${o[0]},${o[1]},${o[2]},${t})`.replace(/\s+/g,"")}}};return s}((document,window,jQuery));
var wpforms=window.wpforms||function(s,p,d){const l={cache:{},isUpdatingToken:!1,init(){d(l.ready),d(p).on("load",function(){"function"==typeof d.ready.then?d.ready.then(l.load):l.load()}),l.bindUIActions(),l.bindOptinMonster()},ready(){l.clearUrlQuery(),l.setUserIdentifier(),l.loadValidation(),l.loadHoneypot(),l.loadDatePicker(),l.loadTimePicker(),l.loadInputMask(),l.loadSmartPhoneField(),l.loadPayments(),l.loadMailcheck(),l.loadChoicesJS(),l.initTokenUpdater(),l.restoreSubmitButtonOnEventPersisted(),l.bindSmartPhoneField(),l.bindChoicesJS(),d(".wpforms-randomize").each(function(){for(var e=d(this),t=e.children();t.length;)e.append(t.splice(Math.floor(Math.random()*t.length),1)[0])}),d(".wpforms-page-button").prop("disabled",!1),l.initFormsStartTime(),d(s).trigger("wpformsReady"),d(".wpforms-smart-phone-field").each(function(){l.repairSmartPhoneHiddenField(d(this))})},load(){},clearUrlQuery(){var e=p.location;let t=e.search;-1!==t.indexOf("wpforms_form_id=")&&(t=t.replace(/([&?]wpforms_form_id=[0-9]*$|wpforms_form_id=[0-9]*&|[?&]wpforms_form_id=[0-9]*(?=#))/,""),history.replaceState({},null,e.origin+e.pathname+t))},loadHoneypot(){d(".wpforms-form").each(function(){const e=d(this),t=e.data("formid"),r=[],a=[];var i,o,s,n;void 0!==wpforms_settings.hn_data[t]&&(d(`#wpforms-form-${t} .wpforms-field`).each(function(){var e=d(this);r.push(e.data("field-id")),a.push(e.find(".wpforms-field-label").text())}),i=l.getHoneypotRandomLabel(a.join(" ").split(" ")),o=l.getHoneypotFieldId(r),n=r[Math.floor(Math.random()*r.length)],s=`wpforms-${t}-field_`+o,d(`#wpforms-${t}-field_${n}-container`,e).before(`
						<div id="${s}-container" class="wpforms-field wpforms-field-text" data-field-type="text" data-field-id="${o}" style="position: absolute !important; overflow: hidden !important; display: inline !important; height: 1px !important; width: 1px !important; z-index: -1000 !important; padding: 0 !important;">
							<label class="wpforms-field-label" for="${s}" aria-hidden="true" style="counter-increment: none;">${i}</label>
							<input type="text" id="${s}" class="wpforms-field-medium" name="wpforms[fields][${o}]" aria-hidden="true" style="visibility: hidden;" tabindex="-1">
						</div>`),(n=d(`#wpforms-${t}-field_${wpforms_settings.hn_data[t]}-container`,e)).find("input").attr({tabindex:"-1","aria-hidden":"true"}),n.find("label").attr("aria-hidden","true"))})},getHoneypotRandomLabel(t){let r="";for(let e=0;e<3;e++)r+=t[Math.floor(Math.random()*t.length)]+" ";return r.trim()},getHoneypotFieldId(t){var r=Math.max(...t);let a=0;for(let e=1;e<r;e++)if(!t.includes(e)){a=e;break}return a=a||r+1},loadValidation(){void 0!==d.fn.validate&&(d(".wpforms-input-temp-name").each(function(e,t){var r=Math.floor(9999*Math.random())+1;d(this).attr("name","wpf-temp-"+r)}),d(s).on("change",".wpforms-validate input[type=url]",function(){var e=d(this).val();if(!e)return!1;"http://"!==e.substr(0,7)&&"https://"!==e.substr(0,8)&&d(this).val("https://"+e)}),d.validator.messages.required=wpforms_settings.val_required,d.validator.messages.url=wpforms_settings.val_url,d.validator.messages.email=wpforms_settings.val_email,d.validator.messages.number=wpforms_settings.val_number,void 0!==d.fn.payment&&d.validator.addMethod("creditcard",function(e,t){e=d.payment.validateCardNumber(e);return this.optional(t)||e},wpforms_settings.val_creditcard),d.validator.addMethod("extension",function(e,t,r){return r="string"==typeof r?r.replace(/,/g,"|"):"png|jpe?g|gif",this.optional(t)||e.match(new RegExp("\\.("+r+")$","i"))},wpforms_settings.val_fileextension),d.validator.addMethod("maxsize",function(e,t,r){var a=r,r=this.optional(t);let i,o;if(r)return r;if(t.files&&t.files.length)for(i=0,o=t.files.length;i<o;i++)if(t.files[i].size>a)return!1;return!0},wpforms_settings.val_filesize),d.validator.addMethod("step",function(e,t,r){o=r;const a=Math.floor(o)!==o&&o.toString().split(".")[1].length||0;function i(e){return Math.round(e*Math.pow(10,a))}var o=i(d(t).attr("min"));return e=i(e)-o,this.optional(t)||i(e)%i(r)==0}),d.validator.methods.email=function(e,t){return this.optional(t)||function(e){if("string"!=typeof e)return!1;var t=e.indexOf("@",1);if(e.length<6||254<e.length||-1===t)return!1;if(-1!==e.indexOf("@",t+1))return!1;var[t,e]=e.split("@");if(!t||!e)return!1;if(!/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+$/.test(t)||63<t.length)return!1;if(/\.{2,}/.test(e)||e.trim(" \t\n\r\0\v.")!==e)return!1;t=e.split(".");if(t.length<2)return!1;var r=/^[a-z0-9-]+$/i;for(const a of t)if(63<a.length||a.trim(" \t\n\r\0\v-")!==a||!r.test(a))return!1;return!0}(e)},d.validator.addMethod("restricted-email",function(e,t){var r=d(t);return!r.val().length||(r=r.closest(".wpforms-form").data("formid"),Object.prototype.hasOwnProperty.call(l.cache,r)&&Object.prototype.hasOwnProperty.call(l.cache[r],"restrictedEmailValidation")&&Object.prototype.hasOwnProperty.call(l.cache[r].restrictedEmailValidation,e)?l.cache[r].restrictedEmailValidation[e]:(l.restrictedEmailRequest(t,e),"pending"))},wpforms_settings.val_email_restricted),d.validator.addMethod("confirm",function(e,t,r){t=d(t).closest(".wpforms-field");return d(t.find("input")[0]).val()===d(t.find("input")[1]).val()},wpforms_settings.val_confirm),d.validator.addMethod("required-payment",function(e,t){return 0<l.amountSanitize(e)},wpforms_settings.val_requiredpayment),d.validator.addMethod("time12h",function(e,t){return this.optional(t)||/^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(e)},wpforms_settings.val_time12h),d.validator.addMethod("time24h",function(e,t){return this.optional(t)||/^(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])(\ ?[AP]M)?$/i.test(e)},wpforms_settings.val_time24h),d.validator.addMethod("turnstile",function(e){return e},wpforms_settings.val_turnstile_fail_msg),d.validator.addMethod("time-limit",function(e,t){var t=d(t),r=t.data("min-time");return void 0===r||!(t.prop("required")||!l.empty(e))||(t=t.data("max-time"),l.compareTimesGreaterThan(t,r)?l.compareTimesGreaterThan(e,r)&&l.compareTimesGreaterThan(t,e):l.compareTimesGreaterThan(e,r)&&l.compareTimesGreaterThan(e,t)||l.compareTimesGreaterThan(r,e)&&l.compareTimesGreaterThan(t,e))},function(e,t){t=d(t);let r=t.data("min-time"),a=t.data("max-time");return r=r.replace(/^00:([0-9]{2})pm$/,"12:$1pm"),a=a.replace(/^00:([0-9]{2})pm$/,"12:$1pm"),r=r.replace(/(am|pm)/g," $1").toUpperCase(),a=a.replace(/(am|pm)/g," $1").toUpperCase(),wpforms_settings.val_time_limit.replace("{minTime}",r).replace("{maxTime}",a)}),d.validator.addMethod("check-limit",function(e,t){var t=d(t).closest("ul"),r=parseInt(t.attr("data-choice-limit")||0,10);return 0===r||t.find('input[type="checkbox"]:checked').length<=r},function(e,t){t=parseInt(d(t).closest("ul").attr("data-choice-limit")||0,10);return wpforms_settings.val_checklimit.replace("{#}",t)}),void 0!==p.intlTelInput&&d.validator.addMethod("smart-phone-field",function(e,t){var r;return!e.match(/[^\d()\-+\s]/)&&(e=p.intlTelInputGlobals?.getInstance(t),r=d(t).triggerHandler("validate"),this.optional(t)||e?.isValidNumberPrecise()||r)},wpforms_settings.val_phone),d.validator.addMethod("inputmask-incomplete",function(e,t){return 0===e.length||void 0===d.fn.inputmask||d(t).inputmask("isComplete")},wpforms_settings.val_inputmask_incomplete),d.validator.addMethod("required-positive-number",function(e,t){return 0<l.amountSanitize(e)},wpforms_settings.val_number_positive),d.validator.addMethod("required-minimum-price",function(e,t,r){t=d(t);return""===e&&!t.hasClass("wpforms-field-required")||Number(l.amountSanitize(l.amountFormat(r)))<=Number(l.amountSanitize(e))},wpforms_settings.val_minimum_price),d.validator.addMethod("us-phone-field",function(e,t){return!e.match(/[^\d()\-+\s]/)&&(this.optional(t)||10===e.replace(/[^\d]/g,"").length)},wpforms_settings.val_phone),d.validator.addMethod("int-phone-field",function(e,t){return!e.match(/[^\d()\-+\s]/)&&(this.optional(t)||0<e.replace(/[^\d]/g,"").length)},wpforms_settings.val_phone),d.validator.addMethod("password-strength",function(e,t){var r=d(t),t=WPFormsPasswordField.passwordStrength(e,t);return""===e&&!r.hasClass("wpforms-field-required")||t>=Number(r.data("password-strength-level"))},wpforms_settings.val_password_strength),d(".wpforms-validate").each(function(){var e=d(this),t=e.data("formid");let r;r=void 0!==p["wpforms_"+t]&&p["wpforms_"+t].hasOwnProperty("validate")?p["wpforms_"+t].validate:"undefined"!=typeof wpforms_validate?wpforms_validate:{errorElement:l.isModernMarkupEnabled()?"em":"label",errorClass:"wpforms-error",validClass:"wpforms-valid",ignore:":hidden:not(textarea.wp-editor-area), .wpforms-conditional-hide textarea.wp-editor-area",ignoreTitle:!0,errorPlacement(e,t){l.isLikertScaleField(t)?(t.closest("table").hasClass("single-row")?t.closest(".wpforms-field"):t.closest("tr").find("th")).append(e):l.isWrappedField(t)?t.closest(".wpforms-field").append(e):l.isDateTimeField(t)?l.dateTimeErrorPlacement(t,e):l.isFieldInColumn(t)||l.isFieldHasHint(t)?t.parent().append(e):l.isLeadFormsSelect(t)?t.parent().parent().append(e):t.hasClass("wp-editor-area")?t.parent().parent().parent().append(e):e.insertAfter(t),l.isModernMarkupEnabled()&&e.attr({role:"alert","aria-label":wpforms_settings.errorMessagePrefix,for:""})},highlight(e,t,r){var a=d(e),i=a.closest(".wpforms-field"),o=a.attr("name");("radio"===a.attr("type")||"checkbox"===a.attr("type")?i.find('input[name="'+o+'"]'):a).addClass(t).removeClass(r),"password"===a.attr("type")&&""===a.val().trim()&&p.WPFormsPasswordField&&a.data("rule-password-strength")&&a.hasClass("wpforms-field-required")&&WPFormsPasswordField.passwordStrength("",e),i.addClass("wpforms-has-error")},unhighlight(e,t,r){var e=d(e),a=e.closest(".wpforms-field"),i=e.attr("name");("radio"===e.attr("type")||"checkbox"===e.attr("type")?a.find('input[name="'+i+'"]'):e).addClass(r).removeClass(t),a.find(":input.wpforms-error,[data-dz-errormessage]:not(:empty)").length||a.removeClass("wpforms-has-error"),l.isModernMarkupEnabled()&&e.parent().find("em.wpforms-error").remove()},submitHandler(s){function n(e,t){let r="label",a="";l.isModernMarkupEnabled()&&(r="em",a='role="alert"');var i=`<${r} id="wpforms-field_recaptcha-error" class="wpforms-error" ${a}> ${wpforms_settings.val_recaptcha_fail_msg}</${r}>`;e.find(".wpforms-recaptcha-container").append(i),l.restoreSubmitButton(e,t)}function e(){const e=d(s),t=e.closest(".wpforms-container"),r=e.find(".wpforms-submit"),a=r.data("captchaInvalid"),i=r.data("alt-text"),o=r.get(0).recaptchaID;return e.data("token")&&0===d(".wpforms-token",e).length&&d('<input type="hidden" class="wpforms-token" name="wpforms[token]" />').val(e.data("token")).appendTo(e),e.find("#wpforms-field_recaptcha-error").remove(),r.prop("disabled",!0),WPFormsUtils.triggerEvent(e,"wpformsFormSubmitButtonDisable",[e,r]),i&&r.text(i),a?n(e,t):l.empty(o)&&0!==o?(d(".wpforms-input-temp-name").removeAttr("name"),void l.formSubmit(e)):(grecaptcha.execute(o).then(null,function(){grecaptcha.getResponse()||n(e,t)}),!1)}return"function"==typeof wpformsRecaptchaV3Execute?wpformsRecaptchaV3Execute(e):e()},invalidHandler(e,t){void 0!==t.errorList[0]&&l.scrollToError(d(t.errorList[0].element))},onkeyup:WPFormsUtils.debounce(function(e,t){d(e).hasClass("wpforms-novalidate-onkeyup")||9===t.which&&""===this.elementValue(e)||-1!==d.inArray(t.keyCode,[16,17,18,20,35,36,37,38,39,40,45,144,225])||(e.name in this.submitted||e.name in this.invalid)&&this.element(e)},1e3),onfocusout:function(e){let t=!1;d(e).hasClass("wpforms-novalidate-onkeyup")&&!e.value&&(t=!0),this.checkable(e)||!(e.name in this.submitted)&&this.optional(e)||(t=!0),(t=d(e).data("server-error")?!1:t)&&this.element(e)},onclick(e){let t=!1;var r=(e||{}).type;let a=d(e);-1<["checkbox","radio"].indexOf(r)&&((a=a.hasClass("wpforms-likert-scale-option")?a.closest("tr"):a.closest(".wpforms-field")).find("label.wpforms-error, em.wpforms-error").remove(),t=!0),t&&this.element(e)}},e.validate(r),l.loadValidationGroups(e)}))},restrictedEmailRequest(r,a){var e=d(r),t=e.closest("form");const i=t.data("validator"),o=t.data("formid");t=e.closest(".wpforms-field").data("field-id");l.cache[o]=l.cache[o]||{},i.startRequest(r),d.post({url:wpforms_settings.ajaxurl,type:"post",data:{action:"wpforms_restricted_email",form_id:o,field_id:t,email:a},dataType:"json",success(e){var t={},e=e.success&&e.data;e||(t[r.name]=wpforms_settings.val_email_restricted,i.showErrors(t)),l.cache[o].restrictedEmailValidation=l.cache[o].restrictedEmailValidation||[],Object.prototype.hasOwnProperty.call(l.cache[o].restrictedEmailValidation,a)||(l.cache[o].restrictedEmailValidation[a]=e),i.stopRequest(r,e)}})},isFieldInColumn(e){return e.parent().hasClass("wpforms-one-half")||e.parent().hasClass("wpforms-two-fifths")||e.parent().hasClass("wpforms-one-fifth")},isFieldHasHint(e){return 0<e.nextAll(".wpforms-field-sublabel, .wpforms-field-description, .wpforms-field-limit-text, .wpforms-pass-strength-result").length},isDateTimeField(e){return e.hasClass("wpforms-timepicker")||e.hasClass("wpforms-datepicker")||e.is("select")&&e.attr("class").match(/date-month|date-day|date-year/)},isWrappedField(e){return"checkbox"===e.attr("type")||"radio"===e.attr("type")||"range"===e.attr("type")||"select"===e.is("select")||1===e.data("is-wrapped-field")||e.parent().hasClass("iti")||e.hasClass("wpforms-validation-group-member")||e.hasClass("choicesjs-select")||e.hasClass("wpforms-net-promoter-score-option")||e.hasClass("wpforms-field-payment-coupon-input")},isLikertScaleField(e){return e.hasClass("wpforms-likert-scale-option")},isLeadFormsSelect(e){return e.parent().hasClass("wpforms-lead-forms-select")},isCoupon(e){return console.warn('WARNING! Function "wpforms.isCoupon( element )" has been deprecated'),e.closest(".wpforms-field").hasClass("wpforms-field-payment-coupon")},dateTimeErrorPlacement(e,t){var r=e.closest(".wpforms-field-row-block, .wpforms-field-date-time");r.length?r.find("label.wpforms-error, em.wpforms-error").length||r.append(t):e.closest(".wpforms-field").append(t)},loadDatePicker(e){void 0!==d.fn.flatpickr&&(e=e?.length?e:d(s)).find(".wpforms-datepicker-wrap").each(function(){const a=d(this),e=a.find("input"),t=a.closest(".wpforms-form"),r=t.data("formid"),i=a.closest(".wpforms-field").data("field-id");let o;var s;!(o=void 0!==p["wpforms_"+r+"_"+i]&&p["wpforms_"+r+"_"+i].hasOwnProperty("datepicker")?p["wpforms_"+r+"_"+i].datepicker:void 0!==p["wpforms_"+r]&&p["wpforms_"+r].hasOwnProperty("datepicker")?p["wpforms_"+r].datepicker:"undefined"!=typeof wpforms_datepicker?wpforms_datepicker:{disableMobile:!0}).hasOwnProperty("locale")&&"undefined"!=typeof wpforms_settings&&wpforms_settings.hasOwnProperty("locale")&&(o.locale=wpforms_settings.locale),o.wrap=!0,o.dateFormat=e.data("date-format"),1===e.data("disable-past-dates")&&(o.minDate="today",1===e.data("disable-todays-date"))&&(s=new Date,o.minDate=s.setDate(s.getDate()+1));let n=e.data("limit-days");const l=["sun","mon","tue","wed","thu","fri","sat"];n&&""!==n&&(n=n.split(","),o.disable=[function(e){for(const t in n)if(l.indexOf(n[t])===e.getDay())return!1;return!0}]),o.onChange=function(e,t,r){a.find(".wpforms-datepicker-clear").css("display",""===t?"none":"block")},a.flatpickr(o)})},loadTimePicker(e){void 0!==d.fn.timepicker&&(e=e?.length?e:d(s)).find(".wpforms-timepicker").each(function(){var e=d(this),t=e.closest(".wpforms-form").data("formid"),r=e.closest(".wpforms-field").data("field-id");let a;a=void 0!==p["wpforms_"+t+"_"+r]&&p["wpforms_"+t+"_"+r].hasOwnProperty("timepicker")?p["wpforms_"+t+"_"+r].timepicker:void 0!==p["wpforms_"+t]&&p["wpforms_"+t].hasOwnProperty("timepicker")?p["wpforms_"+t].timepicker:"undefined"!=typeof wpforms_timepicker?wpforms_timepicker:{scrollDefault:"now",forceRoundTime:!0};r=e.val();e.timepicker(a),r&&(e.val(r),e.trigger("changeTime"))})},loadInputMask(e){void 0!==d.fn.inputmask&&(e=e?.length?e:d(s)).find(".wpforms-masked-input").inputmask({rightAlign:!1})},fixPhoneFieldSnippets(t){console.warn("WARNING! Obsolete function called. Function wpforms.fixPhoneFieldSnippets( $field ) has been deprecated, please use the wpforms.repairSmartPhoneHiddenField( $field ) function instead!"),t.siblings('input[type="hidden"]').each(function(){var e;d(this).attr("name").includes("function")&&(e=(e=t.data("plugin_intlTelInput")).d||e.options)&&(p.intlTelInputGlobals.getInstance(t[0]).destroy(),e.initialCountry=e.initialCountry.toLowerCase(),e.onlyCountries=e.onlyCountries.map(e=>e.toLowerCase()),e.preferredCountries=e.preferredCountries.map(e=>e.toLowerCase()),p.intlTelInput(t[0],e),t.siblings('input[type="hidden"]').each(function(){var e=d(this);e.attr("name",e.attr("name").replace("wpf-temp-",""))}))})},repairSmartPhoneHiddenField(r){var a=r.closest(".wpforms-field-phone").data("field-id");if(!d('[name="wpforms[fields]['+a+']"]').length){a=r.data("plugin_intlTelInput");let e=r.val(),t={};a&&(t=a.d||a.options||{},e=a.getNumber(),a.destroy()),r.removeData("plugin_intlTelInput"),r.val(e),l.initSmartPhoneField(r,t)}},getDefaultSmartPhoneFieldOptions(){var e,t={countrySearch:!1,fixDropdownWidth:!1,preferredCountries:["us","gb"],countryListAriaLabel:wpforms_settings.country_list_label};wpforms_settings.gdpr||(t.geoIpLookup=l.currentIpToCountry);let r;if(wpforms_settings.gdpr&&(e=l.mapLanguageToIso(this.getFirstBrowserLanguage()),r=-1<e.indexOf("-")?e.split("-").pop():e),r){let e=p.intlTelInputGlobals.getCountryData();e=e.filter(function(e){return e.iso2===r.toLowerCase()}),r=e.length?r:""}return t.initialCountry=wpforms_settings.gdpr&&r?r.toLowerCase():"auto",t},loadSmartPhoneField(e){void 0!==p.intlTelInput&&(l.loadJqueryIntlTelInput(),(e=e?.length?e:d(s)).find(".wpforms-smart-phone-field").each(function(e,t){t=d(t);if(t.parents(".elementor-location-popup").is(":hidden"))return!1;l.initSmartPhoneField(t,{})}))},loadJqueryIntlTelInput(){void 0===d.fn.intlTelInput&&d.fn.extend({intlTelInput(a){var e=d(this);if(void 0===a||"object"==typeof a)return e.each(function(){var e,t=d(this);t.data("plugin_intlTelInput")||(e=p.intlTelInput(t.get(0),a),t.data("plugin_intlTelInput",e))});if("string"==typeof a||"_"!==a[0]){const i=a;let r=this;return e.each(function(){var e=d(this),t=e.data("plugin_intlTelInput");"function"==typeof t[i]&&(r=t[i](),"destroy"===a)&&e.removeData("plugin_intlTelInput")}),r}}})},initSmartPhoneField(t,e){if("object"!=typeof t.data("plugin_intlTelInput")){e=0<Object.keys(e).length?e:l.getDefaultSmartPhoneFieldOptions();const r=t.closest(".wpforms-field-phone").data("field-id"),a=(e.hiddenInput=function(){return{phone:"wpforms[fields]["+r+"]"}},e.utilsScript=wpforms_settings.wpforms_plugin_url+"assets/pro/lib/intl-tel-input/module.intl-tel-input-utils.min.js",p.intlTelInput(t.get(0),e));t.on("validate",function(){return a.isValidNumber(a.getNumber())}),t.data("plugin_intlTelInput",a),t.attr("name","wpf-temp-wpforms[fields]["+r+"]"),t.addClass("wpforms-input-temp-name"),t.on("blur input",function(){var e=t.data("plugin_intlTelInput");t.siblings('input[type="hidden"]').val(e.getNumber())})}},bindSmartPhoneField(){d(".wpforms-form").on("wpformsBeforeFormSubmit",function(){var e=d(this).find(".wpforms-smart-phone-field");e.each(function(){l.repairSmartPhoneHiddenField(d(this))}),e.trigger("input")})},loadPayments(){d(".wpforms-payment-total").each(function(e,t){l.amountTotal(this)}),void 0!==d.fn.payment&&(d(".wpforms-field-credit-card-cardnumber").payment("formatCardNumber"),d(".wpforms-field-credit-card-cardcvc").payment("formatCardCVC"))},loadMailcheck(){wpforms_settings.mailcheck_enabled&&void 0!==d.fn.mailcheck&&(0<wpforms_settings.mailcheck_domains.length&&(Mailcheck.defaultDomains=Mailcheck.defaultDomains.concat(wpforms_settings.mailcheck_domains)),0<wpforms_settings.mailcheck_toplevel_domains.length&&(Mailcheck.defaultTopLevelDomains=Mailcheck.defaultTopLevelDomains.concat(wpforms_settings.mailcheck_toplevel_domains)),d(s).on("blur",".wpforms-field-email input",function(){const e=d(this),i=e.attr("id");e.mailcheck({suggested(e,t){t.full=t.full.replace(/%(?![0-9][0-9a-fA-F]+)/g,"%25"),t.address=t.address.replace(/%(?![0-9][0-9a-fA-F]+)/g,"%25"),t.domain=t.domain.replace(/%(?![0-9][0-9a-fA-F]+)/g,"%25"),t.address.match(/^xn--/)&&(t.full=punycode.toUnicode(decodeURI(t.full)),r=t.full.split("@"),t.address=r[0],t.domain=r[1]),t.domain.match(/^xn--/)&&(t.domain=punycode.toUnicode(decodeURI(t.domain)));var r=decodeURI(t.address).replaceAll(/[<>'"()/\\|:;=@%&\s]/gi,"").substr(0,64),a=decodeURI(t.domain).replaceAll(/[<>'"()/\\|:;=@%&+_\s]/gi,"");t='<a href="#" class="mailcheck-suggestion" data-id="'+i+'" title="'+wpforms_settings.val_email_suggestion_title+'">'+r+"@"+a+"</a>",t=wpforms_settings.val_email_suggestion.replace("{suggestion}",t),e.closest(".wpforms-field").find("#"+i+"_suggestion").remove(),e.parent().append('<label class="wpforms-error mailcheck-error" id="'+i+'_suggestion">'+t+"</label>")},empty(){d("#"+i+"_suggestion").remove()}})}),d(s).on("click",".wpforms-field-email .mailcheck-suggestion",function(e){var t=d(this),r=t.closest(".wpforms-field"),a=t.data("id");e.preventDefault(),r.find("#"+a).val(t.text()),t.parent().remove()}))},loadChoicesJS(o){"function"==typeof p.Choices&&(o=o?.length?o:d(s)).find(".wpforms-field-select-style-modern .choicesjs-select, .wpforms-field-payment-select .choicesjs-select").each(function(e,t){var r,a,i;d(t).data("choicesjs")||WPFormsUtils.triggerEvent(o,"wpformsBeforeLoadElementChoices",[t]).isDefaultPrevented()||(r=p.wpforms_choicesjs_config||{},a=d(t).data("search-enabled"),i=d(t).data("remove-items-enabled"),r.searchEnabled=void 0===a||a,r.removeItems=void 0===i||i,r.removeItemButton=r.removeItems,r.searchEnabled=void 0===a||a,r.allowHTML=!0,r.callbackOnInit=function(){const t=this,r=d(t.passedElement.element),a=d(t.input.element),e=r.data("size-class");r.removeAttr("hidden").addClass(t.config.classNames.input+"--hidden"),e&&d(t.containerOuter.element).addClass(e),r.prop("multiple")&&(a.data("placeholder",a.attr("placeholder")).css("width","auto"),t.getValue(!0).length&&a.removeAttr("placeholder"),a.css("width","1ch")),r.on("change",function(){r.prop("multiple")&&(t.getValue(!0).length?a.removeAttr("placeholder"):a.attr("placeholder",a.data("placeholder")).css("width","auto"));var e=r.closest("form").data("validator");e&&e.element(r)})},r.callbackOnCreateTemplates=function(){const r=d(this.passedElement.element);return{option(e){var t=Choices.defaults.templates.option.call(this,e);return void 0!==e.placeholder&&!0===e.placeholder&&t.classList.add("placeholder"),r.hasClass("wpforms-payment-price")&&void 0!==e.customProperties&&null!==e.customProperties&&(t.dataset.amount=e.customProperties),t}}},d(t).data("choicesjs",new Choices(t,r)))})},bindChoicesJS(){d(s).on("click",".choices",function(e){var t=d(this),r=t.find("select").data("choicesjs");r&&t.hasClass("is-open")&&(e.target.classList.contains("choices__inner")||e.target.classList.contains("choices__arrow"))&&r.hideDropdown()})},bindUIActions(){var e=d(s);e.on("click",".wpforms-page-button",function(e){e.preventDefault(),l.pagebreakNav(this)}),e.on("change input",".wpforms-payment-price",function(){l.amountTotal(this,!0)}),e.on("change input","select.wpforms-payment-quantity",function(){l.amountTotal(this,!0),l.updateOrderSummaryItemQuantity(d(this))}),e.on("input",".wpforms-payment-user-input",function(){var e=d(this),t=e.val();e.val(t.replace(/[^0-9.,]/g,""))}),e.on("focusout",".wpforms-payment-user-input",function(){var e=d(this),t=e.val();if(!t)return t;t=l.amountSanitize(t),t=l.amountFormat(t);e.val(t)}),e.on("wpformsProcessConditionals",function(e,t){l.amountTotal(t,!0)}),e.on("mouseenter",".wpforms-field-rating-item",function(){d(this).parent().find(".wpforms-field-rating-item").removeClass("selected hover"),d(this).prevAll().addBack().addClass("hover")}).on("mouseleave",".wpforms-field-rating-item",function(){d(this).parent().find(".wpforms-field-rating-item").removeClass("selected hover"),d(this).parent().find("input:checked").parent().prevAll().addBack().addClass("selected")}),d(s).on("change",".wpforms-field-rating-item input",function(){var e=d(this),t=e.closest(".wpforms-field-rating-items").find(".wpforms-field-rating-item");e.focus(),t.removeClass("hover selected"),e.parent().prevAll().addBack().addClass("selected")}),d(function(){d(".wpforms-field-rating-item input:checked").trigger("change")}),e.on("keydown",".wpforms-image-choices-item label",function(e){var t=d(this);if(t.closest(".wpforms-field").hasClass("wpforms-conditional-hide"))return e.preventDefault(),!1;32===e.keyCode&&(t.find("input").trigger("click"),e.preventDefault())}),p.document.documentMode&&e.on("click",".wpforms-image-choices-item img",function(){d(this).closest("label").find("input").trigger("click")}),e.on("change",".wpforms-field-checkbox input, .wpforms-field-radio input, .wpforms-field-payment-multiple input, .wpforms-field-payment-checkbox input, .wpforms-field-gdpr-checkbox input",function(e){var t=d(this);if(t.closest(".wpforms-field").hasClass("wpforms-conditional-hide"))return e.preventDefault(),!1;switch(t.attr("type")){case"radio":t.closest("ul").find("li").removeClass("wpforms-selected").find("input[type=radio]").removeProp("checked"),t.prop("checked",!0).closest("li").addClass("wpforms-selected");break;case"checkbox":t.is(":checked")?(t.closest("li").addClass("wpforms-selected"),t.prop("checked",!0)):(t.closest("li").removeClass("wpforms-selected"),t.prop("checked",!1))}}),e.on("input",".wpforms-field-file-upload",function(){var e=d(this),t=e.closest("form.wpforms-form").find('.wpforms-field-file-upload input:not(".dropzone-input")');let a=0,r=Number(wpforms_settings.post_max_size),i='<div class="wpforms-error-container-post_max_size">'+wpforms_settings.val_post_max_size+"</div>";e=e.closest("form.wpforms-form").find(".wpforms-submit-container");let o=e.find("button.wpforms-submit"),s=e.prev();var n=o.closest("form"),l=n.find(".wpforms-page-next:visible");0!==n.find(".wpforms-page-indicator").length&&0!==l.length&&(o=l),t.each(function(){var e=d(this);let t=0;for(var r=e[0].files.length;t<r;t++)a+=e[0].files[t].size}),a<r?(s.find(".wpforms-error-container-post_max_size").remove(),o.prop("disabled",!1),WPFormsUtils.triggerEvent(n,"wpformsFormSubmitButtonRestore",[n,o]),WPFormsUtils.triggerEvent(n,"wpformsCombinedUploadsSizeOk",[n,s])):(a=Number((a/1048576).toFixed(3)),r=Number((r/1048576).toFixed(3)),i=i.replace(/{totalSize}/,a).replace(/{maxSize}/,r),s.hasClass("wpforms-error-container")?(s.find(".wpforms-error-container-post_max_size").remove(),s.append(i)):(e.before('<div class="wpforms-error-container">{errorMsg}</div>'.replace(/{errorMsg}/,i)),s=e.prev()),o.prop("disabled",!0),WPFormsUtils.triggerEvent(n,"wpformsFormSubmitButtonDisable",[n,o]),WPFormsUtils.triggerEvent(n,"wpformsCombinedUploadsSizeError",[n,s]))}),e.on("change input",".wpforms-field-number-slider input[type=range]",function(e){var t=d(e.target).siblings(".wpforms-field-number-slider-hint");t.html(t.data("hint").replaceAll("{value}","<b>"+e.target.value+"</b>"))}),e.on("keydown",".wpforms-form input",function(e){var t,r;13!==e.keyCode||0===(r=(t=d(this)).closest(".wpforms-page")).length||["text","tel","number","email","url","radio","checkbox"].indexOf(t.attr("type"))<0||(t.hasClass("wpforms-datepicker")&&t.flatpickr("close"),e.preventDefault(),(r.hasClass("last")?r.closest(".wpforms-form").find(".wpforms-submit"):r.find(".wpforms-page-next")).trigger("click"))}),e.on("keypress",".wpforms-field-number input",function(e){return/^[-0-9.]+$/.test(String.fromCharCode(e.keyCode||e.which))}),e.one("input",".wpforms-field input, .wpforms-field textarea, .wpforms-field select",l.formChanged).one("change",".wpforms-field-select-style-modern, .wpforms-timepicker",l.formChanged).one("focus",".dropzone-input",l.formChanged).one("click touchstart",".wpforms-signature-canvas",l.formChanged).one("wpformsRichTextContentChange",l.richTextContentChanged),d("form.wpforms-form").on("wpformsBeforePageChange",l.skipEmptyPages)},skipEmptyPages(e,t,r,a){var i=l.findNonEmptyPage(t,r,a);i!==t&&(e.preventDefault(),1===i&&"prev"===a?(e=r.find(".wpforms-page-2"),a=r.find(".wpforms-page-"+t),t=(e.find(".wpforms-page-prev").length?e:a).find(".wpforms-page-prev"),wpforms.navigateToPage(t,"prev",2,r,e)):(t=r.find(".wpforms-page-"+(a=i-1)),wpforms.navigateToPage(t.find(".wpforms-page-next"),"next",a,r,t)))},findNonEmptyPage(e,t,r){let a=e;for(;l.isEmptyPage(t,a);)"prev"===r?a--:a++;return a},isEmptyPage(e,t){return 1!==t&&!(e=e.find(".wpforms-page-"+t)).hasClass("last")&&(t=e.find(".wpforms-field:not(.wpforms-field-pagebreak):not(.wpforms-field-hidden)"),e.find(".wpforms-conditional-hide").length===t.length)},formChanged(e){var t=d(this).closest(".wpforms-form");l.maybeSetStartTime(t)},richTextContentChanged(e,t,r){r=r.getContainer(),r=d(r).closest(".wpforms-form");l.maybeSetStartTime(r)},initFormsStartTime(){d(".wpforms-form").each(function(){l.maybeSetStartTime(d(this))})},maybeSetStartTime(e){e.data("start_timestamp")||e.data("start_timestamp",l.getTimestampSec())},entryPreviewFieldPageChange(e,t,r){console.warn("WARNING! Obsolete function called. Function wpforms.entryPreviewFieldPageChange has been deprecated, please use the WPFormsEntryPreview.pageChange function instead!"),WPFormsEntryPreview.pageChange(e,t,r)},entryPreviewFieldUpdate(e,t){console.warn("WARNING! Obsolete function called. Function wpforms.entryPreviewFieldUpdate has been deprecated, please use the WPFormsEntryPreview.update function instead!"),WPFormsEntryPreview.update(e,t)},scrollToError(e){if(0!==e.length){let t=e.find(".wpforms-field.wpforms-has-error");0!==(t=0===t.length?e.closest(".wpforms-field"):t).length&&void 0!==(e=t.offset())&&l.animateScrollTop(e.top-75,750).done(function(){var e=t.find(".wpforms-error").first();"function"==typeof e.focus&&e.trigger("focus")})}},pagebreakNav(e){const t=d(e),r=t.data("action"),a=t.data("page"),i=t.closest(".wpforms-form"),o=i.find(".wpforms-page-"+a);l.saveTinyMCE(),"next"===r&&void 0!==d.fn.validate?l.checkForInvalidFields(i,o,function(){l.navigateToPage(t,r,a,i,o)}):"prev"!==r&&"next"!==r||l.navigateToPage(t,r,a,i,o)},checkForInvalidFields(e,t,r){var a=e.data("validator");if(a)if(0<a.pendingRequest)setTimeout(function(){l.checkForInvalidFields(e,t,r)},800);else{let a=!0;t.find(":input").each(function(e,t){var r=d(t);!r.attr("name")||r.hasClass("wpforms-field-skip-validation")||d(t).valid()||(a=!1)}),a?r():l.scrollToError(t)}},navigateToPage(t,r,a,i,e){if(!t.hasClass("wpforms-disabled")){let e=a;"next"===r?e+=1:"prev"===r&&--e,WPFormsUtils.triggerEvent(t,"wpformsBeforePageChange",[e,i,r]).isDefaultPrevented()||(i.find(".wpforms-page").hide(),(a=i.find(".wpforms-page-"+e)).show(),l.toggleReCaptchaAndSubmitDisplay(i,r,a),l.checkTurnstileVisibility(i),(a=l.getPageScroll(i))&&l.animateScrollTop(i.offset().top-a,750,null),t.trigger("wpformsPageChange",[e,i,r]),l.manipulateIndicator(e,i))}},toggleReCaptchaAndSubmitDisplay(e,t,r){var a=e.find(".wpforms-submit-container"),e=e.find(".wpforms-recaptcha-container");"next"===t&&r.hasClass("last")?(e.show(),a.show()):"prev"===t&&(e.hide(),a.hide())},checkTurnstileVisibility(e){var t,e=e.find(".wpforms-recaptcha-container");e.hasClass("wpforms-is-turnstile")&&(t=e.find(".g-recaptcha").height(),0===parseInt(t,10)?e.addClass("wpforms-is-turnstile-invisible"):e.removeClass("wpforms-is-turnstile-invisible"))},getPageScroll(e){return!1!==p.wpforms_pageScroll&&(l.empty(p.wpform_pageScroll)?0!==e.find(".wpforms-page-indicator").data("scroll")&&75:p.wpform_pageScroll)},manipulateIndicator(e,t){var r,a=t.find(".wpforms-page-indicator");a&&("connector"===(r=a.data("indicator"))||"circles"===r?l.manipulateConnectorAndCirclesIndicator(a,r,e):"progress"===r&&l.manipulateProgressIndicator(a,t,e))},manipulateConnectorAndCirclesIndicator(e,t,r){var a=e.data("indicator-color");e.find(".wpforms-page-indicator-page").removeClass("active"),e.find(".wpforms-page-indicator-page-"+r).addClass("active"),e.find(".wpforms-page-indicator-page-number").removeAttr("style"),e.find(".active .wpforms-page-indicator-page-number").css("background-color",a),"connector"===t&&(e.find(".wpforms-page-indicator-page-triangle").removeAttr("style"),e.find(".active .wpforms-page-indicator-page-triangle").css("border-top-color",a))},manipulateProgressIndicator(e,t,r){var a=e.find(".wpforms-page-indicator-page-title"),i=e.find(".wpforms-page-indicator-page-title-sep"),t=r/t.find(".wpforms-page").length*100;e.find(".wpforms-page-indicator-page-progress").css("width",t+"%"),e.find(".wpforms-page-indicator-steps-current").text(r),a.data("page-"+r+"-title")?(a.css("display","inline").text(a.data("page-"+r+"-title")),i.css("display","inline")):(a.css("display","none"),i.css("display","none"))},bindOptinMonster(){s.addEventListener("om.Campaign.load",function(e){l.ready(),l.optinMonsterRecaptchaReset(e.detail.Campaign.data.id)}),s.addEventListener("om.Campaign.afterShow",function(e){"undefined"!=typeof WPFormsRepeaterField&&WPFormsRepeaterField.ready()}),d(s).on("OptinMonsterOnShow",function(e,t,r){l.ready(),l.optinMonsterRecaptchaReset(t.optin),"undefined"!=typeof WPFormsRepeaterField&&WPFormsRepeaterField.ready()})},optinMonsterRecaptchaReset(e){var e=d("#om-"+e).find(".wpforms-form"),t=e.find(".wpforms-recaptcha-container"),r=e.find(".g-recaptcha");if(e.length&&r.length){const a=r.attr("data-sitekey"),i="recaptcha-"+Date.now(),o=t.hasClass("wpforms-is-hcaptcha")?hcaptcha:grecaptcha;r.remove(),t.prepend('<div class="g-recaptcha" id="'+i+'" data-sitekey="'+a+'"></div>'),o.render(i,{sitekey:a,callback(){wpformsRecaptchaCallback(d("#"+i))}})}},amountTotal(e,t){t=t||!1;const r=d(e),a=r.closest(".wpforms-form"),i=l.amountTotalCalc(a);if(l.allowAmountTotalCalc(a,r,i)){const o=l.amountFormatSymbol(i);a.find(".wpforms-payment-total").each(function(){"hidden"===d(this).attr("type")||"text"===d(this).attr("type")?(d(this).val(o),"text"===d(this).attr("type")&&t&&a.data("validator")&&d(this).valid()):d(this).text(o)}),l.updateOrderSummaryItems(a,r,o)}},allowAmountTotalCalc(e,t,r){var e=e.data("formid");return l.getCache(e,"amountTotal")!==r?(l.updateCache(e,"amountTotal",r),!0):"radio"===(e=t.prop("type"))||"select-one"===e},updateOrderSummaryItems(t,e,r){t.find(".wpforms-order-summary-preview").each(function(){const e=d(this);""!==r&&e.find(".wpforms-order-summary-preview-total .wpforms-order-summary-item-price").text(r),t.find(".wpforms-payment-price").each(function(){l.updateOrderSummaryItem(d(this),e)})})},updateCache(e,t,r){l.cache[e]=l.cache[e]||{},l.cache[e][t]=r},getCache(e,t){return!(!Object.prototype.hasOwnProperty.call(l.cache,e)||!Object.prototype.hasOwnProperty.call(l.cache[e],t))&&l.cache[e][t]},updateOrderSummaryItem(e,t){if(e.hasClass("wpforms-payment-price")){const i=e.closest(".wpforms-field"),o=i.data("field-id"),s=e.prop("type"),n="block"===i.css("display");var r,a;"checkbox"===s||"radio"===s||"select-one"===s?t.find(`tr[data-field="${o}"]`).each(function(){var e=d(this).data("choice"),e="select-one"===s?e===parseInt(i.find("select").val(),10):i.find(`input[value="${e}"]`).is(":checked");d(this).toggle(n&&e)}):(r=t.find(`tr[data-field="${o}"]`),a=e.val(),r.find(".wpforms-order-summary-item-price").text(l.amountFormatSymbol(l.amountSanitize(a))),r.toggle(n)),i.hasClass("wpforms-payment-quantities-enabled")?l.updateOrderSummaryItemQuantity(e):(l.updateSummaryPriceWidth(t),l.toggleSummaryPlaceholder(t))}},updateOrderSummaryItemQuantity(e){const t=e.closest(".wpforms-field"),a=t.find("input.wpforms-payment-price, select.wpforms-payment-price"),r=e.closest(".wpforms-form"),i=t.data("field-id"),o=l.getPaymentFieldQuantity(a),s=l.getPaymentFieldAmount(a),n=a.prop("type");r.find(".wpforms-order-summary-preview").each(function(){var e,t=d(this);let r;(r="checkbox"===n||"radio"===n||"select-one"===n?(e=a.val(),t.find(`tr[data-field="${i}"][data-choice="${e}"]`)):t.find(`tr[data-field="${i}"]`)).toggle(0<o),r.find(".wpforms-order-summary-item-quantity").text(o),r.find(".wpforms-order-summary-item-price").text(l.amountFormatSymbol(s*o)),l.updateSummaryPriceWidth(t),l.toggleSummaryPlaceholder(t)})},updateSummaryPriceWidth(e){var t=Math.max(e.find(".wpforms-order-summary-preview-coupon-total .wpforms-order-summary-item-price").text().length,e.find(".wpforms-order-summary-preview-total .wpforms-order-summary-item-price").text().length+3);e.find(".wpforms-order-summary-item-price").css("width",t+"ch")},toggleSummaryPlaceholder(e){var t=e.find(".wpforms-order-summary-placeholder");let r=!0;e.find(".wpforms-order-summary-field").each(function(){if("none"!==d(this).css("display"))return r=!1}),t.toggle(r)},amountTotalCalc(e){let r=0;d(".wpforms-payment-price",e).each(function(){var e,t=d(this);t.closest(".wpforms-field-payment-single").hasClass("wpforms-conditional-hide")||(e=l.getPaymentFieldAmount(t))&&(r=Number(r)+e*l.getPaymentFieldQuantity(t))});var t=d(s),a=WPFormsUtils.triggerEvent(t,"wpformsAmountTotalCalculate",[e,r]);return r=void 0!==a.result&&0<=a.result?a.result:r,WPFormsUtils.triggerEvent(t,"wpformsAmountTotalCalculated",[e,r]),r},getPaymentFieldAmount(e){var t=e.attr("type");return"text"===t||"hidden"===t?Number(l.amountSanitize(e.val())):"radio"!==t&&"checkbox"!==t||!e.is(":checked")?e.is("select")&&0<e.find("option:selected").length&&e.find("option:selected").data("amount")?Number(l.amountSanitize(e.find("option:selected").data("amount"))):0:Number(l.amountSanitize(e.data("amount")))},getPaymentFieldQuantity(e){e=e.attr("id"),e=d(`#${e}-quantity`);return e.length?Number(e.val()):1},amountSanitize(e){var t=l.getCurrency();return e=e.toString().replace(t.symbol,"").replace(/[^0-9.,]/g,""),","===t.decimal_sep?("."===t.thousands_sep&&-1!==e.indexOf(t.thousands_sep)?e=e.replace(new RegExp("\\"+t.thousands_sep,"g"),""):""===t.thousands_sep&&-1!==e.indexOf(".")&&(e=e.replace(/\./g,"")),e=e.replace(t.decimal_sep,".")):","===t.thousands_sep&&-1!==e.indexOf(t.thousands_sep)&&(e=e.replace(new RegExp("\\"+t.thousands_sep,"g"),"")),l.numberFormat(e,t.decimals,".","")},amountFormat(e){var t,r=l.getCurrency();return e=String(e),","===r.decimal_sep&&-1!==e.indexOf(r.decimal_sep)&&(t=e.indexOf(r.decimal_sep),e=e.substr(0,t)+"."+e.substr(t+1,e.length-1)),","===r.thousands_sep&&-1!==e.indexOf(r.thousands_sep)&&(e=e.replace(/,/g,"")),l.empty(e)&&(e=0),l.numberFormat(e,r.decimals,r.decimal_sep,r.thousands_sep)},amountFormatSymbol(e){var t=l.getCurrency(),e=l.amountFormat(e);return"left"===t.symbol_pos?t.symbol+e:e+" "+t.symbol},getCurrency(){var e={code:"USD",thousands_sep:",",decimals:2,decimal_sep:".",symbol:"$",symbol_pos:"left"};return void 0!==wpforms_settings.currency_code&&(e.code=wpforms_settings.currency_code),void 0!==wpforms_settings.currency_thousands&&(e.thousands_sep=wpforms_settings.currency_thousands),void 0!==wpforms_settings.currency_decimals&&(e.decimals=wpforms_settings.currency_decimals),void 0!==wpforms_settings.currency_decimal&&(e.decimal_sep=wpforms_settings.currency_decimal),void 0!==wpforms_settings.currency_symbol&&(e.symbol=wpforms_settings.currency_symbol),void 0!==wpforms_settings.currency_symbol_pos&&(e.symbol_pos=wpforms_settings.currency_symbol_pos),e},numberFormat(e,t,r,a){e=(e+"").replace(/[^0-9+\-Ee.]/g,"");var i,o,e=isFinite(+e)?+e:0,t=isFinite(+t)?Math.abs(t):0,a=void 0===a?",":a,r=void 0===r?".":r,s=(t?(s=e,i=t,o=Math.pow(10,i),""+(Math.round(s*o)/o).toFixed(i)):""+Math.round(e)).split(".");return 3<s[0].length&&(s[0]=s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,a)),(s[1]||"").length<t&&(s[1]=s[1]||"",s[1]+=new Array(t-s[1].length+1).join("0")),s.join(r)},empty(e){var t;let r,a;var i=[void 0,null,!1,0,"","0"];for(a=0,t=i.length;a<t;a++)if(e===i[a])return!0;if("object"!=typeof e)return!1;for(r in e)if(e.hasOwnProperty(r))return!1;return!0},setUserIdentifier(){if((!p.hasRequiredConsent&&"undefined"!=typeof wpforms_settings&&wpforms_settings.uuid_cookie||p.hasRequiredConsent&&p.hasRequiredConsent())&&!l.getCookie("_wpfuuid")){var t=new Array(36),r="0123456789abcdef";for(let e=0;e<36;e++)t[e]=r.substr(Math.floor(16*Math.random()),1);t[14]="4",t[19]=r.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-";var e=t.join("");l.createCookie("_wpfuuid",e,3999)}},createCookie(e,t,r){let a="",i="";var o;wpforms_settings.is_ssl&&(i=";secure"),a=r?-1===r?"":((o=new Date).setTime(o.getTime()+24*r*60*60*1e3),";expires="+o.toGMTString()):";expires=Thu, 01 Jan 1970 00:00:01 GMT",s.cookie=e+"="+t+a+";path=/;samesite=strict"+i},getCookie(e){var r=e+"=",a=s.cookie.split(";");for(let t=0;t<a.length;t++){let e=a[t];for(;" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(r))return e.substring(r.length,e.length)}return null},removeCookie(e){l.createCookie(e,"",-1)},getFirstBrowserLanguage(){var e=p.navigator,t=["language","browserLanguage","systemLanguage","userLanguage"];let r,a;if(Array.isArray(e.languages))for(r=0;r<e.languages.length;r++)if((a=e.languages[r])&&a.length)return a;for(r=0;r<t.length;r++)if((a=e[t[r]])&&a.length)return a;return""},mapLanguageToIso(e){return{ar:"ar-SA",bg:"bg-BG",ca:"ca-ES",cs:"cs-CZ",da:"da-DK",de:"de-DE",el:"el-GR",en:"en-US",es:"es-ES",fi:"fi-FI",fr:"fr-FR",he:"he-IL",hi:"hi-IN",hr:"hr-HR",hu:"hu-HU",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lt:"lt-LT",lv:"lv-LV",ms:"ms-MY",nl:"nl-NL",no:"nb-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",sr:"sr-RS",sv:"sv-SE",th:"th-TH",tr:"tr-TR",uk:"uk-UA",vi:"vi-VN",zh:"zh-CN"}[e]||e},currentIpToCountry(r){if(wpforms_settings.country)r(wpforms_settings.country);else{const t=function(){d.get("https://ipapi.co/jsonp",function(){},"jsonp").always(function(e){let t=e?.country?e.country:"";t||(e=l.getFirstBrowserLanguage(),t=-1<e.indexOf("-")?e.split("-").pop():""),r(t)})};d.get("https://geo.wpforms.com/v3/geolocate/json").done(function(e){e&&e.country_iso?r(e.country_iso):t()}).fail(function(e){t()})}},formSubmit(e){e instanceof jQuery||(e=d(e)),l.saveTinyMCE(),WPFormsUtils.triggerEvent(e,"wpformsBeforeFormSubmit",[e]).isDefaultPrevented()?l.restoreSubmitButton(e,e.closest(".wpforms-container")):e.hasClass("wpforms-ajax-form")&&"undefined"!=typeof FormData?l.formSubmitAjax(e):l.formSubmitNormal(e)},restoreSubmitButton(e,t){var r=e.find(".wpforms-submit"),a=r.data("submit-text");a&&r.text(a),r.prop("disabled",!1),WPFormsUtils.triggerEvent(e,"wpformsFormSubmitButtonRestore",[e,r]),t.css("opacity",""),e.find(".wpforms-submit-spinner").hide()},formSubmitNormal(e){var t,r;e.length&&(r=(t=e.find(".wpforms-submit")).get(0).recaptchaID,l.empty(r)&&0!==r||(t.get(0).recaptchaID=!1),e.append('<input type="hidden" name="start_timestamp" value="'+e.data("start_timestamp")+'">'),e.append('<input type="hidden" name="end_timestamp" value="'+l.getTimestampSec()+'">'),e.get(0).submit())},formHasCaptcha(e){return!(!e||!e.length||"undefined"==typeof hcaptcha&&"undefined"==typeof grecaptcha&&"undefined"==typeof turnstile)&&(e=e.find(".wpforms-recaptcha-container"),Boolean(e.length))},resetFormRecaptcha(r){if(l.formHasCaptcha(r)){var a=r.find(".wpforms-recaptcha-container");let e,t;e=a.hasClass("wpforms-is-hcaptcha")?hcaptcha:a.hasClass("wpforms-is-turnstile")?turnstile:grecaptcha,t=r.find(".wpforms-submit").get(0).recaptchaID,l.empty(t)&&0!==t&&(t=r.find(".g-recaptcha").data("recaptcha-id")),l.empty(t)&&0!==t||e.reset(t)}},consoleLogAjaxError(e){e?console.error("WPForms AJAX submit error:\n%s",e):console.error("WPForms AJAX submit error")},displayFormAjaxErrors(e,t){"string"==typeof t?l.displayFormAjaxGeneralErrors(e,t):(t=t&&"errors"in t?t.errors:null,l.empty(t)||l.empty(t.general)&&l.empty(t.field)?l.consoleLogAjaxError():(l.empty(t.general)||l.displayFormAjaxGeneralErrors(e,t.general),l.empty(t.field)||l.displayFormAjaxFieldErrors(e,t.field)))},displayFormAjaxGeneralErrors(e,t){var r,a;e&&e.length&&(l.empty(t)||(l.isModernMarkupEnabled()&&e.attr({"aria-invalid":"true","aria-errormessage":""}),"string"==typeof t?(a=l.isModernMarkupEnabled()?' role="alert"':"",r=l.isModernMarkupEnabled()?`<span class="wpforms-hidden">${wpforms_settings.formErrorMessagePrefix}</span>`:"",e.find(".wpforms-submit-container").before(`<div class="wpforms-error-container"${a}>${r}${t}</div>`),l.setCurrentPage(e,{})):(a=e.data("formid"),l.printGeneralErrors(e,t,a))))},printGeneralErrors(i,e,o){d.each(e,function(e,t){switch(e){case"header":case"header_styled":i.prepend(t);break;case"footer":case"footer_styled":r=t,0===i.find(".wpforms-page-indicator").length?i.find(".wpforms-submit-container").before(r):i.find(".wpforms-page-1").append(r);break;case"recaptcha":r=t,i.find(".wpforms-recaptcha-container").append(r)}var r,a;l.isModernMarkupEnabled()&&(a=i.attr("aria-errormessage")||"",i.attr("aria-errormessage",a+` wpforms-${o}-${e}-error`))}),i.find(".wpforms-error-container").length&&l.animateScrollTop(i.find(".wpforms-error-container").first().offset().top-100)},clearFormAjaxGeneralErrors(e){e.find(".wpforms-error-container").remove(),e.find("#wpforms-field_recaptcha-error").remove(),l.isModernMarkupEnabled()&&e.attr({"aria-invalid":"false","aria-errormessage":""})},displayFormAjaxFieldErrors(r,e){var t;r&&r.length&&(l.empty(e)||(t=r.data("validator"))&&(e=l.splitFieldErrors(e),d.each(e,function(e,t){d('[name="'+e+'"]',r).attr("data-server-error",t)}),t.showErrors(e),l.formHasCaptcha(r)||t.focusInvalid()))},splitFieldErrors:o=>(d.each(o,function(i,e){"string"!=typeof e&&d.each(e,function(e,t){var r=i.split("[").pop().replace("]",""),a=i.replace("["+r+"]","");r===e?o[i]=t:"string"==typeof e&&isNaN(e)&&(o[a+"["+e+"]"]=t)})}),o),formSubmitAjax:a=>{if(!a.length)return d.Deferred().reject();const r=a.closest(".wpforms-container"),e=a.find(".wpforms-submit-spinner");let i;r.css("opacity",.6),e.show(),l.clearFormAjaxGeneralErrors(a);var t=new FormData(a.get(0)),t=(t.append("action","wpforms_submit"),t.append("start_timestamp",a.data("start_timestamp")),t.append("end_timestamp",l.getTimestampSec()),{type:"post",dataType:"json",url:wpforms_settings.ajaxurl,data:t,cache:!1,contentType:!1,processData:!1});return t.success=function(e){var t;if(e)if(e.data&&e.data.action_required)a.trigger("wpformsAjaxSubmitActionRequired",e);else if(e.success){if(a.trigger("wpformsAjaxSubmitSuccess",e),e.data)return e.data.redirect_url?(t=e.data.new_tab||!1,a.trigger("wpformsAjaxSubmitBeforeRedirect",e),t?(p.open(e.data.redirect_url,"_blank"),void location.reload()):void(p.location=e.data.redirect_url)):void(e.data.confirmation&&(r.html(e.data.confirmation),i=r.find("div.wpforms-confirmation-scroll"),r.trigger("wpformsAjaxSubmitSuccessConfirmation",e),i.length)&&l.animateScrollTop(i.offset().top-100))}else l.resetFormRecaptcha(a),l.displayFormAjaxErrors(a,e.data),a.trigger("wpformsAjaxSubmitFailed",e),l.setCurrentPage(a,e.data);else l.consoleLogAjaxError()},t.error=function(e,t,r){l.consoleLogAjaxError(r),a.trigger("wpformsAjaxSubmitError",[e,t,r])},t.complete=function(e,t){e.responseJSON&&e.responseJSON.data&&(e.responseJSON.data.action_required||"success"===t&&e.responseJSON.data.redirect_url)||(l.restoreSubmitButton(a,r),a.trigger("wpformsAjaxSubmitCompleted",[e,t]))},WPFormsUtils.triggerEvent(a,"wpformsAjaxBeforeSubmit",[a]).isDefaultPrevented()?(l.restoreSubmitButton(a,r),d.Deferred().reject()):d.ajax(t)},setCurrentPage(r,a){if(0!==r.find(".wpforms-page-indicator").length){const o=[];if(r.find(".wpforms-page").each(function(e,t){if(1<=d(t).find(".wpforms-has-error").length)return o.push(d(t))}),0!==o.length||void 0===a.errors||void 0===a.errors.general||void 0!==a.errors.general.footer||void 0===a.errors.general.recaptcha){var i=0<o.length?o[0]:r.find(".wpforms-page-1");let e,t="prev";1===i.data("page")||void 0!==a.errors&&void 0!==a.errors.general.footer?e=r.find(".wpforms-page-1").next():(e=0!==i.next().length?i.next():i.prev(),t=0!==i.next().length?"prev":"next");a=e.find(".wpforms-page-next"),i=e.data("page");l.navigateToPage(a,t,i,r,d(".wpforms-page-"+i))}}},animateScrollTop(e,t,r){return t=t||1e3,r="function"==typeof r?r:function(){},d("html, body").animate({scrollTop:parseInt(e,10)},{duration:t,complete:r}).promise()},saveTinyMCE(){"undefined"!=typeof tinyMCE&&tinyMCE.triggerSave()},isFunction(e){return!!(e&&e.constructor&&e.call&&e.apply)},compareTimesGreaterThan(e,t){e=e.replace(/(am|pm)/g," $1").toUpperCase(),t=t.replace(/(am|pm)/g," $1").toUpperCase();e=Date.parse("01 Jan 2021 "+e);return Date.parse("01 Jan 2021 "+t)<=e},isModernMarkupEnabled(){return!!wpforms_settings.isModernMarkupEnabled},initTokenUpdater(){d(".wpforms-form").on("focusin",function(e){var t=d(e.target.closest("form")),r=Date.now();this.needsTokenUpdate(r,t)&&this.updateToken(r,t,e)}.bind(this))},needsTokenUpdate(e,t){return e-1e3*(t.attr("data-token-time")||0)>=1e3*wpforms_settings.token_cache_lifetime&&!this.isUpdatingToken},updateToken(t,r,a){var e=r.data("formid");const i=r.find(".wpforms-submit");this.isUpdatingToken=!0,i.prop("disabled",!0),d.post(wpforms_settings.ajaxurl,{action:"wpforms_get_token",formId:e}).done(function(e){e.success?(r.attr("data-token-time",t),r.attr("data-token",e.data.token),i.prop("disabled",!1),a.target===i[0]&&i.trigger("click")):console.error("Failed to update token: ",e)}).fail(function(e,t,r){console.error("AJAX request failed: ",t,r)}).always(function(){this.isUpdatingToken=!1,i.prop("disabled",!1)}.bind(this))},restoreSubmitButtonOnEventPersisted(){p.onpageshow=function(e){e.persisted&&d(".wpforms-form").each(function(){var e=d(this);l.restoreSubmitButton(e,e.closest(".wpforms-container"))})}},loadValidationGroups(e){var t=e.closest(".wpforms-form").data("validator");t&&d.extend(t.groups,l.getDateTimeValidationGroups(e))},getDateTimeValidationGroups(e){const a={};return e.find(".wpforms-field.wpforms-field-date-time").each(function(){var e=d(this);if(e.find(".wpforms-field-date-dropdown-wrap").length){const r=e.attr("id").replace("-container","");d.each(["month","day","year"],function(e,t){t=d(`#${r}-`+t).attr("name");a[t]=r})}}),a},getTimestampSec(){return Math.floor(Date.now()/1e3)}};return l}(document,window,jQuery);wpforms.init();
var WPForms=window.WPForms||{};WPForms.FrontendModern=WPForms.FrontendModern||function(i,o){const a={init(){o(a.ready),a.bindOptinMonster()},ready(){a.updateGBBlockAccentColors(),a.initPageBreakButtons(),a.initButtonStyle(),a.events()},events(){o(i).on("wpforms_elementor_form_fields_initialized",a.initPageBreakButtons),o("form.wpforms-form").on("wpformsCombinedUploadsSizeError",a.combinedUploadsSizeError).on("wpformsFormSubmitButtonDisable",a.formSubmitButtonDisable).on("wpformsFormSubmitButtonRestore",a.formSubmitButtonRestore).on("wpformsPageChange",a.pageChange),o("form.wpforms-form .wpforms-submit").on("keydown click",a.disabledButtonPress),o(i).on("focus",".wpforms-render-modern .wpforms-timepicker",a.updateTimepickerDropdown),o(i).on("focusout",".wpforms-render-modern .wpforms-timepicker",a.resetTimepickerDropdown)},bindOptinMonster(){i.addEventListener("om.Campaign.load",function(){a.ready()}),o(i).on("OptinMonsterOnShow",function(){a.ready()})},updateTimepickerDropdown(){const e=a.getCssVars(o(this));setTimeout(function(){var r=o(".ui-timepicker-wrapper .ui-timepicker-list");r.css("background",e["field-menu-color"]),r.find("li").css("color",e["field-text-color"]),r.find(".ui-timepicker-selected").css("background",e["button-background-color"]).css("color",e["button-text-color"])},0)},resetTimepickerDropdown(){setTimeout(function(){o(".ui-timepicker-wrapper .ui-timepicker-list").find(":not(.ui-timepicker-selected)").attr("style","")},0)},initButtonStyle(){o(".wpforms-block.wpforms-container-full, .elementor-widget-wpforms .wpforms-container-full").each(function(){var r=o(this),e=getComputedStyle(r.get(0)),e=a.getCssVar(e,"--wpforms-button-background-color-alt");a.isTransparentColor(e)&&r.find("button.wpforms-submit").addClass("wpforms-opacity-hover")})},isTransparentColor(r){r=a.getColorAsRGBArray(r);return Number(r?.[3])<=.33},updateGBBlockAccentColors(){o(".wpforms-block.wpforms-container-full, .elementor-widget-wpforms .wpforms-container-full").each(function(){var r=o(this);a.updateGBBlockPageIndicatorColor(r),a.updateGBBlockIconChoicesColor(r),a.updateGBBlockRatingColor(r)})},updateGBBlockPageIndicatorColor(r){var r=r.find(".wpforms-page-indicator"),e=r.find(".wpforms-page-indicator-page-progress, .wpforms-page-indicator-page.active .wpforms-page-indicator-page-number"),o=e.find(".wpforms-page-indicator-page-triangle");r.data("indicator-color","var( --wpforms-page-break-color )"),e.css("background-color","var( --wpforms-page-break-color )"),o.css("border-top-color","var( --wpforms-page-break-color )")},updateGBBlockIconChoicesColor(r){r.find(".wpforms-icon-choices").css("--wpforms-icon-choices-color","var( --wpforms-button-background-color )")},updateGBBlockRatingColor(r){r.find(".wpforms-field-rating-item svg").css("color","var( --wpforms-page-break-color, var( --wpforms-button-background-color ) )")},initPageBreakButtons(){o(".wpforms-page-button").removeClass("wpforms-disabled").attr("aria-disabled","false").attr("aria-describedby","")},combinedUploadsSizeError(r,e,o){var t=e.data("formid"),s=e.attr("aria-errormessage")||"",t=`wpforms-${t}-footer-error`,i=e.find(".wpforms-submit");e.attr({"aria-invalid":"true","aria-errormessage":s+" "+t}),o.attr({role:"alert",id:t}),o.find("> .wpforms-hidden:first-child").remove(),o.prepend(`<span class="wpforms-hidden">${wpforms_settings.formErrorMessagePrefix}</span>`),i.attr("aria-describedby",t)},combinedUploadsSizeOk(r,e,o){console.warn('WARNING! Function "WPForms.FrontendModern( e, $form, $errorCnt )" has been deprecated, please use the new "formSubmitButtonDisable: function( e, $form, $submitBtn )" function instead!'),e.find(".wpforms-submit").removeClass("wpforms-disabled").attr("aria-disabled","false").attr("aria-describedby","")},formSubmitButtonDisable(r,e,o){e=e.attr("id")+"-submit-btn-disabled";o.before(`<div class="wpforms-hidden" id="${e}">${wpforms_settings.submitBtnDisabled}</div>`),o.prop("disabled",!1).addClass("wpforms-disabled").attr("aria-disabled","true").attr("aria-describedby",e)},formSubmitButtonRestore(r,e,o){var t=e.attr("id")+"-submit-btn-disabled";e.find("#"+t).remove(),o.removeClass("wpforms-disabled").attr("aria-disabled","false").attr("aria-describedby","")},disabledButtonPress(r){!o(this).hasClass("wpforms-disabled")||"Enter"!==r.key&&"click"!==r.type||(r.preventDefault(),r.stopPropagation())},pageChange(r,o,t){var s=t.find(".wpforms-page-indicator");if(wpforms_settings.indicatorStepsPattern&&s.length){t=t.find(".wpforms-page").length;let r=wpforms_settings.indicatorStepsPattern,e;r=r.replace("{current}",o).replace("{total}",t),e=s.hasClass("progress")?s.find(".wpforms-page-indicator-page-title").data(`page-${o}-title`):s.find(`.wpforms-page-indicator-page-${o} .wpforms-page-indicator-page-title`).text(),r=e?e+". "+r:r,s.attr("aria-valuenow",o),a.screenReaderAnnounce(r,"polite")}},screenReaderAnnounce(r,e){var o=i.createElement("div"),t="wpforms-screen-reader-announce-"+Date.now();o.setAttribute("id",t),o.setAttribute("aria-live",e||"polite"),o.classList.add("wpforms-screen-reader-announce");const s=i.body.appendChild(o);setTimeout(function(){s.innerHTML=r},100),setTimeout(function(){i.body.removeChild(s)},1e3)},getColorWithOpacity(r,e){return WPFormsUtils.cssColorsUtils.getColorWithOpacity(r,e)},getSolidColor(r){r=r.trim();var e=a.getColorAsRGBArray(r);return e?`rgb(${e[0]},${e[1]},${e[2]})`:r},isValidColor(r){return WPFormsUtils.cssColorsUtils.isValidColor(r)},getColorAsRGBArray(r){return WPFormsUtils.cssColorsUtils.getColorAsRGBArray(r)},getCssVar(r,e){if(!r||"function"!=typeof r.getPropertyValue)return null;let o=r.getPropertyValue(e).trim();return o=e.includes("color")?o.replace(/\s/g,""):o},getCssVars(r){if(!r||!r.length)return null;var r=r.hasClass("wpforms-container")?r:r.closest(".wpforms-container"),e=getComputedStyle(r.get(0)),o=wpforms_settings.css_vars,t={};for(let r=0;r<o.length;r++)t[o[r]]=a.getCssVar(e,"--wpforms-"+o[r]);return t}};return a}(document,(window,jQuery)),WPForms.FrontendModern.init();