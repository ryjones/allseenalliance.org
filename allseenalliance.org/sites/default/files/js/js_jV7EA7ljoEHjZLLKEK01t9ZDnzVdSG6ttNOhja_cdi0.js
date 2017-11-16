
/*!
 * jQuery UI 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.7",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,
"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");
if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,l,m){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(l)g-=parseFloat(c.curCSS(f,
"border"+this+"Width",true))||0;if(m)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,
d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");if("area"===b){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&k(a)}return(/input|select|textarea|button|object/.test(b)?!a.disabled:"a"==b?a.href||!isNaN(d):!isNaN(d))&&k(a)},tabbable:function(a){var b=c.attr(a,"tabindex");return(isNaN(b)||b>=0)&&c(a).is(":focusable")}});
c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&
b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;

/*!
 * jQuery UI Widget 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;

/*!
 * jQuery UI Mouse 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(c){c.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(b){return a._mouseDown(b)}).bind("click."+this.widgetName,function(b){if(true===c.data(b.target,a.widgetName+".preventClickEvent")){c.removeData(b.target,a.widgetName+".preventClickEvent");b.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(a){a.originalEvent=
a.originalEvent||{};if(!a.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var b=this,e=a.which==1,f=typeof this.options.cancel=="string"?c(a.target).parents().add(a.target).filter(this.options.cancel).length:false;if(!e||f||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){b.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=
this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}this._mouseMoveDelegate=function(d){return b._mouseMove(d)};this._mouseUpDelegate=function(d){return b._mouseUp(d)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return a.originalEvent.mouseHandled=true}},_mouseMove:function(a){if(c.browser.msie&&!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);
return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;a.target==this._mouseDownEvent.target&&c.data(a.target,this.widgetName+".preventClickEvent",
true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;

/*
 * jQuery UI Slider 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.slider",d.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var b=this,a=this.options;this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");a.disabled&&this.element.addClass("ui-slider-disabled ui-disabled");
this.range=d([]);if(a.range){if(a.range===true){this.range=d("<div></div>");if(!a.values)a.values=[this._valueMin(),this._valueMin()];if(a.values.length&&a.values.length!==2)a.values=[a.values[0],a.values[0]]}else this.range=d("<div></div>");this.range.appendTo(this.element).addClass("ui-slider-range");if(a.range==="min"||a.range==="max")this.range.addClass("ui-slider-range-"+a.range);this.range.addClass("ui-widget-header")}d(".ui-slider-handle",this.element).length===0&&d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
if(a.values&&a.values.length)for(;d(".ui-slider-handle",this.element).length<a.values.length;)d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");this.handles=d(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(c){c.preventDefault()}).hover(function(){a.disabled||d(this).addClass("ui-state-hover")},function(){d(this).removeClass("ui-state-hover")}).focus(function(){if(a.disabled)d(this).blur();
else{d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");d(this).addClass("ui-state-focus")}}).blur(function(){d(this).removeClass("ui-state-focus")});this.handles.each(function(c){d(this).data("index.ui-slider-handle",c)});this.handles.keydown(function(c){var e=true,f=d(this).data("index.ui-slider-handle"),h,g,i;if(!b.options.disabled){switch(c.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:e=
false;if(!b._keySliding){b._keySliding=true;d(this).addClass("ui-state-active");h=b._start(c,f);if(h===false)return}break}i=b.options.step;h=b.options.values&&b.options.values.length?(g=b.values(f)):(g=b.value());switch(c.keyCode){case d.ui.keyCode.HOME:g=b._valueMin();break;case d.ui.keyCode.END:g=b._valueMax();break;case d.ui.keyCode.PAGE_UP:g=b._trimAlignValue(h+(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.PAGE_DOWN:g=b._trimAlignValue(h-(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(h===
b._valueMax())return;g=b._trimAlignValue(h+i);break;case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(h===b._valueMin())return;g=b._trimAlignValue(h-i);break}b._slide(c,f,g);return e}}).keyup(function(c){var e=d(this).data("index.ui-slider-handle");if(b._keySliding){b._keySliding=false;b._stop(c,e);b._change(c,e);d(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();return this},_mouseCapture:function(b){var a=this.options,c,e,f,h,g;if(a.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();c=this._normValueFromMouse({x:b.pageX,y:b.pageY});e=this._valueMax()-this._valueMin()+1;h=this;this.handles.each(function(i){var j=Math.abs(c-h.values(i));if(e>j){e=j;f=d(this);g=i}});if(a.range===true&&this.values(1)===a.min){g+=1;f=d(this.handles[g])}if(this._start(b,
g)===false)return false;this._mouseSliding=true;h._handleIndex=g;f.addClass("ui-state-active").focus();a=f.offset();this._clickOffset=!d(b.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:b.pageX-a.left-f.width()/2,top:b.pageY-a.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(b,g,c);return this._animateOff=true},_mouseStart:function(){return true},
_mouseDrag:function(b){var a=this._normValueFromMouse({x:b.pageX,y:b.pageY});this._slide(b,this._handleIndex,a);return false},_mouseStop:function(b){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(b,this._handleIndex);this._change(b,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(b){var a;
if(this.orientation==="horizontal"){a=this.elementSize.width;b=b.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{a=this.elementSize.height;b=b.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}a=b/a;if(a>1)a=1;if(a<0)a=0;if(this.orientation==="vertical")a=1-a;b=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+a*b)},_start:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=
this.values(a);c.values=this.values()}return this._trigger("start",b,c)},_slide:function(b,a,c){var e;if(this.options.values&&this.options.values.length){e=this.values(a?0:1);if(this.options.values.length===2&&this.options.range===true&&(a===0&&c>e||a===1&&c<e))c=e;if(c!==this.values(a)){e=this.values();e[a]=c;b=this._trigger("slide",b,{handle:this.handles[a],value:c,values:e});this.values(a?0:1);b!==false&&this.values(a,c,true)}}else if(c!==this.value()){b=this._trigger("slide",b,{handle:this.handles[a],
value:c});b!==false&&this.value(c)}},_stop:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("stop",b,c)},_change:function(b,a){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("change",b,c)}},value:function(b){if(arguments.length){this.options.value=
this._trimAlignValue(b);this._refreshValue();this._change(null,0)}return this._value()},values:function(b,a){var c,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(a);this._refreshValue();this._change(null,b)}if(arguments.length)if(d.isArray(arguments[0])){c=this.options.values;e=arguments[0];for(f=0;f<c.length;f+=1){c[f]=this._trimAlignValue(e[f]);this._change(null,f)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(b):this.value();
else return this._values()},_setOption:function(b,a){var c,e=0;if(d.isArray(this.options.values))e=this.options.values.length;d.Widget.prototype._setOption.apply(this,arguments);switch(b){case "disabled":if(a){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(c=0;c<e;c+=1)this._change(null,c);this._animateOff=false;break}},_value:function(){var b=this.options.value;return b=this._trimAlignValue(b)},_values:function(b){var a,c;if(arguments.length){a=this.options.values[b];
return a=this._trimAlignValue(a)}else{a=this.options.values.slice();for(c=0;c<a.length;c+=1)a[c]=this._trimAlignValue(a[c]);return a}},_trimAlignValue:function(b){if(b<=this._valueMin())return this._valueMin();if(b>=this._valueMax())return this._valueMax();var a=this.options.step>0?this.options.step:1,c=(b-this._valueMin())%a;alignValue=b-c;if(Math.abs(c)*2>=a)alignValue+=c>0?a:-a;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var b=this.options.range,a=this.options,c=this,e=!this._animateOff?a.animate:false,f,h={},g,i,j,l;if(this.options.values&&this.options.values.length)this.handles.each(function(k){f=(c.values(k)-c._valueMin())/(c._valueMax()-c._valueMin())*100;h[c.orientation==="horizontal"?"left":"bottom"]=f+"%";d(this).stop(1,1)[e?"animate":"css"](h,a.animate);if(c.options.range===true)if(c.orientation==="horizontal"){if(k===0)c.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},a.animate);
if(k===1)c.range[e?"animate":"css"]({width:f-g+"%"},{queue:false,duration:a.animate})}else{if(k===0)c.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},a.animate);if(k===1)c.range[e?"animate":"css"]({height:f-g+"%"},{queue:false,duration:a.animate})}g=f});else{i=this.value();j=this._valueMin();l=this._valueMax();f=l!==j?(i-j)/(l-j)*100:0;h[c.orientation==="horizontal"?"left":"bottom"]=f+"%";this.handle.stop(1,1)[e?"animate":"css"](h,a.animate);if(b==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[e?"animate":"css"]({width:f+"%"},a.animate);if(b==="max"&&this.orientation==="horizontal")this.range[e?"animate":"css"]({width:100-f+"%"},{queue:false,duration:a.animate});if(b==="min"&&this.orientation==="vertical")this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},a.animate);if(b==="max"&&this.orientation==="vertical")this.range[e?"animate":"css"]({height:100-f+"%"},{queue:false,duration:a.animate})}}});d.extend(d.ui.slider,{version:"1.8.7"})})(jQuery);
;
(function($) {
  var plugins = {};
  Drupal.behaviors.mediafront = {
    attach: function(context) {
      // Iterate through each mediafront player settings.
      if (Drupal.settings.hasOwnProperty('mediafront')) {
        $.each(Drupal.settings.mediafront, function(id, settings) {
          $("#" + id + ":not(.mediafront-processed)").each(function() {
            if (typeof plugins[settings.preset] !== 'object') {
              plugins[settings.preset] = {};
            }
            plugins[settings.preset][settings.id] = $(this).addClass('mediafront-processed').osmplayer(settings);
          });
        });
      }

      // Now setup the mediafront connections.
      if (Drupal.settings.hasOwnProperty('mediafront_connect')) {
        $.each(Drupal.settings.mediafront_connect, function(plugin_id, settings) {
          if (!settings.connected) {
            settings.connected = true;
            minplayer.get(plugin_id, settings.type, function(plugin) {
              $.each(settings.connect, function(preset, preset) {
                if (plugins[preset]) {
                  $.each(plugins[preset], function(player_id, player) {
                    minplayer.get(player_id, "player", function(player) {
                      player.addPlugin(settings.type, plugin);
                    });
                  });
                }
              });
            });
          }
        });
      }
    }
  };
})(jQuery);;
(function(a,b){function c(a){if(""===g)return a;a=a.charAt(0).toUpperCase()+a.substr(1);return g+a}var d=Math,e=b.createElement("div").style,g=function(){for(var a=["t","webkitT","MozT","msT","OT"],b,c=0,d=a.length;c<d;c++)if(b=a[c]+"ransform",b in e)return a[c].substr(0,a[c].length-1);return!1}(),k=g?"-"+g.toLowerCase()+"-":"",p=c("transform"),l=c("transitionProperty"),q=c("transitionDuration"),H=c("transformOrigin"),I=c("transitionTimingFunction"),z=c("transitionDelay"),A=/android/gi.test(navigator.appVersion),
D=/iphone|ipad/gi.test(navigator.appVersion),v=/hp-tablet/gi.test(navigator.appVersion),E=c("perspective")in e,r="ontouchstart"in a&&!v,F=!1!==g,J=c("transition")in e,B="onorientationchange"in a?"orientationchange":"resize",C=r?"touchstart":"mousedown",w=r?"touchmove":"mousemove",x=r?"touchend":"mouseup",y=r?"touchcancel":"mouseup",u=!1===g?!1:{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"}[g],K=function(){return a.requestAnimationFrame||
a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){return setTimeout(a,1)}}(),G=a.cancelRequestAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||clearTimeout,t=E?" translateZ(0)":"",v=function(c,d){var h=this,e;h.wrapper="object"==typeof c?c:b.getElementById(c);h.wrapper.style.overflow="hidden";
h.scroller=h.wrapper.children[0];h.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,handleClick:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:A,hideScrollbar:D,fadeScrollbar:D&&E,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(a){a.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,
onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(e in d)h.options[e]=d[e];h.x=h.options.x;h.y=h.options.y;h.options.useTransform=F&&h.options.useTransform;h.options.hScrollbar=h.options.hScroll&&h.options.hScrollbar;h.options.vScrollbar=h.options.vScroll&&h.options.vScrollbar;h.options.zoom=h.options.useTransform&&h.options.zoom;h.options.useTransition=J&&h.options.useTransition;h.options.zoom&&A&&(t="");h.scroller.style[l]=
h.options.useTransform?k+"transform":"top left";h.scroller.style[q]="0";h.scroller.style[H]="0 0";h.options.useTransition&&(h.scroller.style[I]="cubic-bezier(0.33,0.66,0.66,1)");h.options.useTransform?h.scroller.style[p]="translate("+h.x+"px,"+h.y+"px)"+t:h.scroller.style.cssText+=";position:absolute;top:"+h.y+"px;left:"+h.x+"px";h.options.useTransition&&(h.options.fixedScrollbar=!0);h.refresh();h._bind(B,a);h._bind(C);r||"none"==h.options.wheelAction||(h._bind("DOMMouseScroll"),h._bind("mousewheel"));
h.options.checkDOMChanges&&(h.checkDOMTime=setInterval(function(){h._checkDOMChanges()},500))};v.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(a){switch(a.type){case C:if(!r&&0!==a.button)break;this._start(a);break;case w:this._move(a);break;case x:case y:this._end(a);break;case B:this._resize();break;case "DOMMouseScroll":case "mousewheel":this._wheel(a);break;case u:this._transitionEnd(a)}},_checkDOMChanges:function(){this.moved||
this.zoomed||this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale||this.refresh()},_scrollbar:function(a){var c;this[a+"Scrollbar"]?(this[a+"ScrollbarWrapper"]||(c=b.createElement("div"),this.options.scrollbarClass?c.className=this.options.scrollbarClass+a.toUpperCase():c.style.cssText="position:absolute;z-index:100;"+("h"==a?"height:7px;bottom:1px;left:2px;right:"+(this.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(this.hScrollbar?
"7":"2")+"px;top:2px;right:1px"),c.style.cssText+=";pointer-events:none;"+k+"transition-property:opacity;"+k+"transition-duration:"+(this.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(this.options.hideScrollbar?"0":"1"),this.wrapper.appendChild(c),this[a+"ScrollbarWrapper"]=c,c=b.createElement("div"),this.options.scrollbarClass||(c.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+k+"background-clip:padding-box;"+k+"box-sizing:border-box;"+
("h"==a?"height:100%":"width:100%")+";"+k+"border-radius:3px;border-radius:3px"),c.style.cssText+=";pointer-events:none;"+k+"transition-property:"+k+"transform;"+k+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+k+"transition-duration:0;"+k+"transform: translate(0,0)"+t,this.options.useTransition&&(c.style.cssText+=";"+k+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),this[a+"ScrollbarWrapper"].appendChild(c),this[a+"ScrollbarIndicator"]=c),"h"==a?(this.hScrollbarSize=this.hScrollbarWrapper.clientWidth,
this.hScrollbarIndicatorSize=d.max(d.round(this.hScrollbarSize*this.hScrollbarSize/this.scrollerW),8),this.hScrollbarIndicator.style.width=this.hScrollbarIndicatorSize+"px",this.hScrollbarMaxScroll=this.hScrollbarSize-this.hScrollbarIndicatorSize,this.hScrollbarProp=this.hScrollbarMaxScroll/this.maxScrollX):(this.vScrollbarSize=this.vScrollbarWrapper.clientHeight,this.vScrollbarIndicatorSize=d.max(d.round(this.vScrollbarSize*this.vScrollbarSize/this.scrollerH),8),this.vScrollbarIndicator.style.height=
this.vScrollbarIndicatorSize+"px",this.vScrollbarMaxScroll=this.vScrollbarSize-this.vScrollbarIndicatorSize,this.vScrollbarProp=this.vScrollbarMaxScroll/this.maxScrollY),this._scrollbarPos(a,!0)):this[a+"ScrollbarWrapper"]&&(F&&(this[a+"ScrollbarIndicator"].style[p]=""),this[a+"ScrollbarWrapper"].parentNode.removeChild(this[a+"ScrollbarWrapper"]),this[a+"ScrollbarWrapper"]=null,this[a+"ScrollbarIndicator"]=null)},_resize:function(){var a=this;setTimeout(function(){a.refresh()},A?200:0)},_pos:function(a,
b){this.zoomed||(a=this.hScroll?a:0,b=this.vScroll?b:0,this.options.useTransform?this.scroller.style[p]="translate("+a+"px,"+b+"px) scale("+this.scale+")"+t:(a=d.round(a),b=d.round(b),this.scroller.style.left=a+"px",this.scroller.style.top=b+"px"),this.x=a,this.y=b,this._scrollbarPos("h"),this._scrollbarPos("v"))},_scrollbarPos:function(a,b){var c="h"==a?this.x:this.y;this[a+"Scrollbar"]&&(c*=this[a+"ScrollbarProp"],0>c?(this.options.fixedScrollbar||(c=this[a+"ScrollbarIndicatorSize"]+d.round(3*c),
8>c&&(c=8),this[a+"ScrollbarIndicator"].style["h"==a?"width":"height"]=c+"px"),c=0):c>this[a+"ScrollbarMaxScroll"]&&(this.options.fixedScrollbar?c=this[a+"ScrollbarMaxScroll"]:(c=this[a+"ScrollbarIndicatorSize"]-d.round(3*(c-this[a+"ScrollbarMaxScroll"])),8>c&&(c=8),this[a+"ScrollbarIndicator"].style["h"==a?"width":"height"]=c+"px",c=this[a+"ScrollbarMaxScroll"]+(this[a+"ScrollbarIndicatorSize"]-c))),this[a+"ScrollbarWrapper"].style[z]="0",this[a+"ScrollbarWrapper"].style.opacity=b&&this.options.hideScrollbar?
"0":"1",this[a+"ScrollbarIndicator"].style[p]="translate("+("h"==a?c+"px,0)":"0,"+c+"px)")+t)},_start:function(b){var c=r?b.touches[0]:b,h,e;this.enabled&&(this.options.onBeforeScrollStart&&this.options.onBeforeScrollStart.call(this,b),(this.options.useTransition||this.options.zoom)&&this._transitionTime(0),this.zoomed=this.animating=this.moved=!1,this.dirY=this.dirX=this.absDistY=this.absDistX=this.distY=this.distX=0,this.options.zoom&&r&&1<b.touches.length&&(e=d.abs(b.touches[0].pageX-b.touches[1].pageX),
h=d.abs(b.touches[0].pageY-b.touches[1].pageY),this.touchesDistStart=d.sqrt(e*e+h*h),this.originX=d.abs(b.touches[0].pageX+b.touches[1].pageX-2*this.wrapperOffsetLeft)/2-this.x,this.originY=d.abs(b.touches[0].pageY+b.touches[1].pageY-2*this.wrapperOffsetTop)/2-this.y,this.options.onZoomStart&&this.options.onZoomStart.call(this,b)),this.options.momentum&&(this.options.useTransform?(h=getComputedStyle(this.scroller,null)[p].replace(/[^0-9\-.,]/g,"").split(","),e=+(h[12]||h[4]),h=+(h[13]||h[5])):(e=
+getComputedStyle(this.scroller,null).left.replace(/[^0-9-]/g,""),h=+getComputedStyle(this.scroller,null).top.replace(/[^0-9-]/g,"")),e!=this.x||h!=this.y)&&(this.options.useTransition?this._unbind(u):G(this.aniTime),this.steps=[],this._pos(e,h),this.options.onScrollEnd&&this.options.onScrollEnd.call(this)),this.absStartX=this.x,this.absStartY=this.y,this.startX=this.x,this.startY=this.y,this.pointX=c.pageX,this.pointY=c.pageY,this.startTime=b.timeStamp||Date.now(),this.options.onScrollStart&&this.options.onScrollStart.call(this,
b),this._bind(w,a),this._bind(x,a),this._bind(y,a))},_move:function(a){var b=r?a.touches[0]:a,c=b.pageX-this.pointX,e=b.pageY-this.pointY,g=this.x+c,k=this.y+e,m=a.timeStamp||Date.now();this.options.onBeforeScrollMove&&this.options.onBeforeScrollMove.call(this,a);if(this.options.zoom&&r&&1<a.touches.length)g=d.abs(a.touches[0].pageX-a.touches[1].pageX),k=d.abs(a.touches[0].pageY-a.touches[1].pageY),this.touchesDist=d.sqrt(g*g+k*k),this.zoomed=!0,b=1/this.touchesDistStart*this.touchesDist*this.scale,
b<this.options.zoomMin?b=0.5*this.options.zoomMin*Math.pow(2,b/this.options.zoomMin):b>this.options.zoomMax&&(b=2*this.options.zoomMax*Math.pow(0.5,this.options.zoomMax/b)),this.lastScale=b/this.scale,g=this.originX-this.originX*this.lastScale+this.x,k=this.originY-this.originY*this.lastScale+this.y,this.scroller.style[p]="translate("+g+"px,"+k+"px) scale("+b+")"+t,this.options.onZoom&&this.options.onZoom.call(this,a);else{this.pointX=b.pageX;this.pointY=b.pageY;if(0<g||g<this.maxScrollX)g=this.options.bounce?
this.x+c/2:0<=g||0<=this.maxScrollX?0:this.maxScrollX;if(k>this.minScrollY||k<this.maxScrollY)k=this.options.bounce?this.y+e/2:k>=this.minScrollY||0<=this.maxScrollY?this.minScrollY:this.maxScrollY;this.distX+=c;this.distY+=e;this.absDistX=d.abs(this.distX);this.absDistY=d.abs(this.distY);6>this.absDistX&&6>this.absDistY||(this.options.lockDirection&&(this.absDistX>this.absDistY+5?(k=this.y,e=0):this.absDistY>this.absDistX+5&&(g=this.x,c=0)),this.moved=!0,this._pos(g,k),this.dirX=0<c?-1:0>c?1:0,this.dirY=
0<e?-1:0>e?1:0,300<m-this.startTime&&(this.startTime=m,this.startX=this.x,this.startY=this.y),this.options.onScrollMove&&this.options.onScrollMove.call(this,a))}},_end:function(c){if(!r||0===c.touches.length){var f=this,h=r?c.changedTouches[0]:c,e,g,k={dist:0,time:0},m={dist:0,time:0},l=(c.timeStamp||Date.now())-f.startTime,n=f.x,s=f.y;f._unbind(w,a);f._unbind(x,a);f._unbind(y,a);f.options.onBeforeScrollEnd&&f.options.onBeforeScrollEnd.call(f,c);if(f.zoomed)n=f.scale*f.lastScale,n=Math.max(f.options.zoomMin,
n),n=Math.min(f.options.zoomMax,n),f.lastScale=n/f.scale,f.scale=n,f.x=f.originX-f.originX*f.lastScale+f.x,f.y=f.originY-f.originY*f.lastScale+f.y,f.scroller.style[q]="200ms",f.scroller.style[p]="translate("+f.x+"px,"+f.y+"px) scale("+f.scale+")"+t,f.zoomed=!1,f.refresh(),f.options.onZoomEnd&&f.options.onZoomEnd.call(f,c);else{if(f.moved){if(300>l&&f.options.momentum){k=n?f._momentum(n-f.startX,l,-f.x,f.scrollerW-f.wrapperW+f.x,f.options.bounce?f.wrapperW:0):k;m=s?f._momentum(s-f.startY,l,-f.y,0>
f.maxScrollY?f.scrollerH-f.wrapperH+f.y-f.minScrollY:0,f.options.bounce?f.wrapperH:0):m;n=f.x+k.dist;s=f.y+m.dist;if(0<f.x&&0<n||f.x<f.maxScrollX&&n<f.maxScrollX)k={dist:0,time:0};if(f.y>f.minScrollY&&s>f.minScrollY||f.y<f.maxScrollY&&s<f.maxScrollY)m={dist:0,time:0}}k.dist||m.dist?(k=d.max(d.max(k.time,m.time),10),f.options.snap&&(m=n-f.absStartX,l=s-f.absStartY,d.abs(m)<f.options.snapThreshold&&d.abs(l)<f.options.snapThreshold?f.scrollTo(f.absStartX,f.absStartY,200):(m=f._snap(n,s),n=m.x,s=m.y,
k=d.max(m.time,k))),f.scrollTo(d.round(n),d.round(s),k)):f.options.snap?(m=n-f.absStartX,l=s-f.absStartY,d.abs(m)<f.options.snapThreshold&&d.abs(l)<f.options.snapThreshold?f.scrollTo(f.absStartX,f.absStartY,200):(m=f._snap(f.x,f.y),m.x==f.x&&m.y==f.y||f.scrollTo(m.x,m.y,m.time))):f._resetPos(200)}else r&&(f.doubleTapTimer&&f.options.zoom?(clearTimeout(f.doubleTapTimer),f.doubleTapTimer=null,f.options.onZoomStart&&f.options.onZoomStart.call(f,c),f.zoom(f.pointX,f.pointY,1==f.scale?f.options.doubleTapZoom:
1),f.options.onZoomEnd&&setTimeout(function(){f.options.onZoomEnd.call(f,c)},200)):this.options.handleClick&&(f.doubleTapTimer=setTimeout(function(){f.doubleTapTimer=null;for(e=h.target;1!=e.nodeType;)e=e.parentNode;"SELECT"!=e.tagName&&"INPUT"!=e.tagName&&"TEXTAREA"!=e.tagName&&(g=b.createEvent("MouseEvents"),g.initMouseEvent("click",!0,!0,c.view,1,h.screenX,h.screenY,h.clientX,h.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,0,null),g._fake=!0,e.dispatchEvent(g))},f.options.zoom?250:0))),f._resetPos(400);
f.options.onTouchEnd&&f.options.onTouchEnd.call(f,c)}}},_resetPos:function(a){var b=0<=this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,c=this.y>=this.minScrollY||0<this.maxScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y;b==this.x&&c==this.y?(this.moved&&(this.moved=!1,this.options.onScrollEnd&&this.options.onScrollEnd.call(this)),this.hScrollbar&&this.options.hideScrollbar&&("webkit"==g&&(this.hScrollbarWrapper.style[z]="300ms"),this.hScrollbarWrapper.style.opacity="0"),
this.vScrollbar&&this.options.hideScrollbar&&("webkit"==g&&(this.vScrollbarWrapper.style[z]="300ms"),this.vScrollbarWrapper.style.opacity="0")):this.scrollTo(b,c,a||0)},_wheel:function(a){var b=this,c,d;if("wheelDeltaX"in a)c=a.wheelDeltaX/12,d=a.wheelDeltaY/12;else if("wheelDelta"in a)c=d=a.wheelDelta/12;else if("detail"in a)c=d=3*-a.detail;else return;"zoom"==b.options.wheelAction?(d=b.scale*Math.pow(2,1/3*(d?d/Math.abs(d):0)),d<b.options.zoomMin&&(d=b.options.zoomMin),d>b.options.zoomMax&&(d=b.options.zoomMax),
d!=b.scale&&(!b.wheelZoomCount&&b.options.onZoomStart&&b.options.onZoomStart.call(b,a),b.wheelZoomCount++,b.zoom(a.pageX,a.pageY,d,400),setTimeout(function(){b.wheelZoomCount--;!b.wheelZoomCount&&b.options.onZoomEnd&&b.options.onZoomEnd.call(b,a)},400))):(c=b.x+c,d=b.y+d,0<c?c=0:c<b.maxScrollX&&(c=b.maxScrollX),d>b.minScrollY?d=b.minScrollY:d<b.maxScrollY&&(d=b.maxScrollY),0>b.maxScrollY&&b.scrollTo(c,d,0))},_transitionEnd:function(a){a.target==this.scroller&&(this._unbind(u),this._startAni())},_startAni:function(){var a=
this,b=a.x,c=a.y,e=Date.now(),g,k,p;a.animating||(a.steps.length?(g=a.steps.shift(),g.x==b&&g.y==c&&(g.time=0),a.animating=!0,a.moved=!0,a.options.useTransition?(a._transitionTime(g.time),a._pos(g.x,g.y),a.animating=!1,g.time?a._bind(u):a._resetPos(0)):(p=function(){var l=Date.now(),n;l>=e+g.time?(a._pos(g.x,g.y),a.animating=!1,a.options.onAnimationEnd&&a.options.onAnimationEnd.call(a),a._startAni()):(l=(l-e)/g.time-1,k=d.sqrt(1-l*l),l=(g.x-b)*k+b,n=(g.y-c)*k+c,a._pos(l,n),a.animating&&(a.aniTime=
K(p)))},p())):a._resetPos(400))},_transitionTime:function(a){a+="ms";this.scroller.style[q]=a;this.hScrollbar&&(this.hScrollbarIndicator.style[q]=a);this.vScrollbar&&(this.vScrollbarIndicator.style[q]=a)},_momentum:function(a,b,c,e,g){b=d.abs(a)/b;var k=b*b/0.0012;0<a&&k>c?(c+=g/(6/(6E-4*(k/b))),b=b*c/k,k=c):0>a&&k>e&&(e+=g/(6/(6E-4*(k/b))),b=b*e/k,k=e);return{dist:k*(0>a?-1:1),time:d.round(b/6E-4)}},_offset:function(a){for(var b=-a.offsetLeft,c=-a.offsetTop;a=a.offsetParent;)b-=a.offsetLeft,c-=a.offsetTop;
a!=this.wrapper&&(b*=this.scale,c*=this.scale);return{left:b,top:c}},_snap:function(a,b){var c,e,g;g=this.pagesX.length-1;c=0;for(e=this.pagesX.length;c<e;c++)if(a>=this.pagesX[c]){g=c;break}g==this.currPageX&&0<g&&0>this.dirX&&g--;a=this.pagesX[g];e=(e=d.abs(a-this.pagesX[this.currPageX]))?500*(d.abs(this.x-a)/e):0;this.currPageX=g;g=this.pagesY.length-1;for(c=0;c<g;c++)if(b>=this.pagesY[c]){g=c;break}g==this.currPageY&&0<g&&0>this.dirY&&g--;b=this.pagesY[g];c=(c=d.abs(b-this.pagesY[this.currPageY]))?
500*(d.abs(this.y-b)/c):0;this.currPageY=g;g=d.round(d.max(e,c))||200;return{x:a,y:b,time:g}},_bind:function(a,b,c){(b||this.scroller).addEventListener(a,this,!!c)},_unbind:function(a,b,c){(b||this.scroller).removeEventListener(a,this,!!c)},destroy:function(){this.scroller.style[p]="";this.vScrollbar=this.hScrollbar=!1;this._scrollbar("h");this._scrollbar("v");this._unbind(B,a);this._unbind(C);this._unbind(w,a);this._unbind(x,a);this._unbind(y,a);this.options.hasTouch||(this._unbind("DOMMouseScroll"),
this._unbind("mousewheel"));this.options.useTransition&&this._unbind(u);this.options.checkDOMChanges&&clearInterval(this.checkDOMTime);this.options.onDestroy&&this.options.onDestroy.call(this)},refresh:function(){var a,b,c,e=0;b=0;this.scale<this.options.zoomMin&&(this.scale=this.options.zoomMin);this.wrapperW=this.wrapper.clientWidth||1;this.wrapperH=this.wrapper.clientHeight||1;this.minScrollY=-this.options.topOffset||0;this.scrollerW=d.round(this.scroller.offsetWidth*this.scale);this.scrollerH=
d.round((this.scroller.offsetHeight+this.minScrollY)*this.scale);this.maxScrollX=this.wrapperW-this.scrollerW;this.maxScrollY=this.wrapperH-this.scrollerH+this.minScrollY;this.dirY=this.dirX=0;this.options.onRefresh&&this.options.onRefresh.call(this);this.hScroll=this.options.hScroll&&0>this.maxScrollX;this.vScroll=this.options.vScroll&&(!this.options.bounceLock&&!this.hScroll||this.scrollerH>this.wrapperH);this.hScrollbar=this.hScroll&&this.options.hScrollbar;this.vScrollbar=this.vScroll&&this.options.vScrollbar&&
this.scrollerH>this.wrapperH;a=this._offset(this.wrapper);this.wrapperOffsetLeft=-a.left;this.wrapperOffsetTop=-a.top;if("string"==typeof this.options.snap)for(this.pagesX=[],this.pagesY=[],c=this.scroller.querySelectorAll(this.options.snap),a=0,b=c.length;a<b;a++)e=this._offset(c[a]),e.left+=this.wrapperOffsetLeft,e.top+=this.wrapperOffsetTop,this.pagesX[a]=e.left<this.maxScrollX?this.maxScrollX:e.left*this.scale,this.pagesY[a]=e.top<this.maxScrollY?this.maxScrollY:e.top*this.scale;else if(this.options.snap){for(this.pagesX=
[];e>=this.maxScrollX;)this.pagesX[b]=e,e-=this.wrapperW,b++;this.maxScrollX%this.wrapperW&&(this.pagesX[this.pagesX.length]=this.maxScrollX-this.pagesX[this.pagesX.length-1]+this.pagesX[this.pagesX.length-1]);b=e=0;for(this.pagesY=[];e>=this.maxScrollY;)this.pagesY[b]=e,e-=this.wrapperH,b++;this.maxScrollY%this.wrapperH&&(this.pagesY[this.pagesY.length]=this.maxScrollY-this.pagesY[this.pagesY.length-1]+this.pagesY[this.pagesY.length-1])}this._scrollbar("h");this._scrollbar("v");this.zoomed||(this.scroller.style[q]=
"0",this._resetPos(400))},scrollTo:function(a,b,c,d){var e=a;this.stop();e.length||(e=[{x:a,y:b,time:c,relative:d}]);a=0;for(b=e.length;a<b;a++)e[a].relative&&(e[a].x=this.x-e[a].x,e[a].y=this.y-e[a].y),this.steps.push({x:e[a].x,y:e[a].y,time:e[a].time||0});this._startAni()},scrollToElement:function(a,b){var c;if(a=a.nodeType?a:this.scroller.querySelector(a))c=this._offset(a),c.left+=this.wrapperOffsetLeft,c.top+=this.wrapperOffsetTop,c.left=0<c.left?0:c.left<this.maxScrollX?this.maxScrollX:c.left,
c.top=c.top>this.minScrollY?this.minScrollY:c.top<this.maxScrollY?this.maxScrollY:c.top,b=void 0===b?d.max(2*d.abs(c.left),2*d.abs(c.top)):b,this.scrollTo(c.left,c.top,b)},scrollToPage:function(a,b,c){c=void 0===c?400:c;this.options.onScrollStart&&this.options.onScrollStart.call(this);this.options.snap?(a="next"==a?this.currPageX+1:"prev"==a?this.currPageX-1:a,b="next"==b?this.currPageY+1:"prev"==b?this.currPageY-1:b,a=0>a?0:a>this.pagesX.length-1?this.pagesX.length-1:a,b=0>b?0:b>this.pagesY.length-
1?this.pagesY.length-1:b,this.currPageX=a,this.currPageY=b,a=this.pagesX[a],b=this.pagesY[b]):(a*=-this.wrapperW,b*=-this.wrapperH,a<this.maxScrollX&&(a=this.maxScrollX),b<this.maxScrollY&&(b=this.maxScrollY));this.scrollTo(a,b,c)},disable:function(){this.stop();this._resetPos(0);this.enabled=!1;this._unbind(w,a);this._unbind(x,a);this._unbind(y,a)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind(u):G(this.aniTime);this.steps=[];this.animating=this.moved=
!1},zoom:function(a,b,c,d){var e=c/this.scale;this.options.useTransform&&(this.zoomed=!0,d=void 0===d?200:d,a=a-this.wrapperOffsetLeft-this.x,b=b-this.wrapperOffsetTop-this.y,this.x=a-a*e+this.x,this.y=b-b*e+this.y,this.scale=c,this.refresh(),this.x=0<this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,this.y=this.y>this.minScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y,this.scroller.style[q]=d+"ms",this.scroller.style[p]="translate("+this.x+"px,"+this.y+"px) scale("+c+")"+
t,this.zoomed=!1)},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}};e=null;"undefined"!==typeof exports?exports.iScroll=v:a.iScroll=v})(window,document);var minplayer=minplayer||{};function checkPlayType(a,b){if("function"===typeof a.canPlayType){if("object"===typeof b){for(var c=b.length,d="";c--&&!(d=checkPlayType(a,b[c])););return d}c=a.canPlayType(b);if("no"!==c&&""!==c)return b}return""}
minplayer.compatibility=function(){var a=null,a=document.createElement("video");this.videoOGG=checkPlayType(a,"video/ogg");this.videoH264=checkPlayType(a,["video/mp4","video/h264"]);this.videoWEBM=checkPlayType(a,["video/x-webm","video/webm","application/octet-stream"]);this.videoMPEGURL=checkPlayType(a,"application/vnd.apple.mpegurl");a=document.createElement("audio");this.audioOGG=checkPlayType(a,"audio/ogg");this.audioMP3=checkPlayType(a,"audio/mpeg");this.audioMP4=checkPlayType(a,"audio/mp4")};
minplayer.playTypes||(minplayer.playTypes=new minplayer.compatibility,minplayer.isAndroid=/android/gi.test(navigator.appVersion),minplayer.isIDevice=/iphone|ipad/gi.test(navigator.appVersion),minplayer.isPlaybook=/playbook/gi.test(navigator.appVersion),minplayer.isTouchPad=/hp-tablet/gi.test(navigator.appVersion),minplayer.hasTouch="ontouchstart"in window&&!minplayer.isTouchPad);
if(!minplayer.urlVars){minplayer.urlVars={};var regEx=/[?&]+([^=&]+)=([^&]*)/gi;window.location.href.replace(regEx,function(a,b,c){minplayer.urlVars[b]=c})}minplayer=minplayer||{};minplayer.async=function(){this.value=null;this.queue=[]};minplayer.async.prototype.get=function(a,b){null!==this.value?a(this.value):this.queue.push(a)};minplayer.async.prototype.set=function(a){this.value=a;var b=this.queue.length;if(b){for(;b--;)this.queue[b](a);this.queue=[]}};minplayer=minplayer||{};
minplayer.flags=function(){this.flag=0;this.ids={};this.numFlags=0};minplayer.flags.prototype.setFlag=function(a,b){this.ids.hasOwnProperty(a)||(this.ids[a]=this.numFlags,this.numFlags++);this.flag=b?this.flag|1<<this.ids[a]:this.flag&~(1<<this.ids[a])};minplayer=minplayer||{};minplayer.plugins=minplayer.plugins||{};minplayer.queue=minplayer.queue||[];minplayer.lock=!1;
minplayer.plugin=function(a,b,c,d){this.options=c||{};this.name=a;this.pluginReady=!1;this.queue=d||{};this.triggered={};this.lock=!1;this.uuid=0;if(b){this.context=jQuery(b);a={};this.defaultOptions(a);for(var e in a)this.options.hasOwnProperty(e)||(this.options[e]=a[e]);this.initialize()}};minplayer.plugin.prototype.initialize=function(){this.construct()};minplayer.plugin.prototype.defaultOptions=function(a){};minplayer.plugin.prototype.construct=function(){this.active=!0;this.addPlugin()};
minplayer.plugin.prototype.destroy=function(){this.active=!1;this.unbind()};minplayer.plugin.prototype.create=function(a,b,c){var d=null;b=b||"minplayer";window[b][a]||(b="minplayer");c=c||this.display;return window[b][a]&&(d=window[b][a],d[this.options.template]&&(d=d[this.options.template]),"function"!==typeof d&&(d=window.minplayer[a]),"function"===typeof d)?new d(c,this.options):null};minplayer.plugin.prototype.ready=function(){this.pluginReady||(this.pluginReady=!0,this.trigger("ready"),this.checkQueue())};
minplayer.plugin.prototype.isValid=function(){return!!this.options.id&&this.active};minplayer.plugin.prototype.onAdded=function(a){};minplayer.plugin.prototype.addPlugin=function(a,b){a=a||this.name;b=b||this;if(b.isValid()){minplayer.plugins[this.options.id]||(minplayer.plugins[this.options.id]={});minplayer.plugins[this.options.id][a]||(minplayer.plugins[this.options.id][a]=[]);var c=minplayer.plugins[this.options.id][a].push(b);this.uuid=this.options.id+"__"+a+"__"+c;this.checkQueue(b);b.onAdded(this)}};
minplayer.timers={};minplayer.plugin.prototype.poll=function(a,b,c){minplayer.timers.hasOwnProperty(a)&&clearTimeout(minplayer.timers[a]);minplayer.timers[a]=setTimeout(function(d){return function g(){b.call(d)&&(minplayer.timers[a]=setTimeout(g,c))}}(this),c);return minplayer.timers[a]};minplayer.plugin.prototype.get=function(a,b){"function"===typeof a&&(b=a,a=null);return minplayer.get.call(this,this.options.id,a,b)};
minplayer.plugin.prototype.checkQueue=function(a){var b=null,c=0,d=!1;a=a||this;minplayer.lock=!0;for(var e=minplayer.queue.length,c=0;c<e;c++)minplayer.queue.hasOwnProperty(c)&&(b=minplayer.queue[c],d=!b.id&&!b.plugin,d|=b.plugin===a.name,(d&=!b.id||b.id===this.options.id)&&!b.addedto.hasOwnProperty(a.options.id)&&(b.addedto[a.options.id]=!0,minplayer.bind.call(b.context,b.event,this.options.id,a.name,b.callback,!0)));minplayer.lock=!1};minplayer.eventTypes={};
minplayer.plugin.prototype.isEvent=function(a,b){var c=a+"__"+b;"undefined"===typeof minplayer.eventTypes[c]&&(minplayer.eventTypes[c]=null!==a.match(b));return minplayer.eventTypes[c]};minplayer.plugin.prototype.trigger=function(a,b,c){if(!this.active)return this;c||(this.triggered[a]=b);c=0;var d={},e=null,g;for(g in this.queue)if(this.isEvent(g,a))for(c in e=this.queue[g],e)e.hasOwnProperty(c)&&(d=e[c],d.callback({target:this,data:d.data},b));return this};
minplayer.plugin.prototype.ubind=function(a,b,c){this.unbind(a);return this.bind(a,b,c)};minplayer.plugin.prototype.bind=function(a,b,c){if(!this.active)return this;"function"===typeof b&&(c=b,b=null);if(a&&c){this.queue[a]=this.queue[a]||[];this.queue[a].push({callback:c,data:b});for(var d in this.triggered)this.triggered.hasOwnProperty(d)&&this.isEvent(a,d)&&c({target:this,data:b},this.triggered[d]);return this}};
minplayer.plugin.prototype.unbind=function(a){this.lock&&setTimeout(function(b){return function(){b.unbind(a)}}(this),10);this.lock=!0;a?this.queue.hasOwnProperty(a)&&0<this.queue[a].length&&(this.queue[a].length=0):this.queue={};this.lock=!1;return this};minplayer.addQueue=function(a,b,c,d,e){minplayer.lock?setTimeout(function(){minplayer.addQueue(a,c,b,d,e)},10):minplayer.queue.push({context:a,id:c,event:b,plugin:d,callback:e,addedto:{}})};
minplayer.bind=function(a,b,c,d,e){if(!d)return!1;var g=minplayer.plugins,k=null,p=null,l=[],q=function(a,b){if(g.hasOwnProperty(a)&&g[a].hasOwnProperty(b))for(var c=g[a][b].length;c--;)l.push(g[a][b][c])};if(b&&c)q(b,c);else if(!b&&c)for(p in g)q(p,c);else if(b&&!c&&g[b])for(k in g[b])q(b,k);else if(!b&&!c)for(p in g)for(k in g[p])q(p,k);for(k=l.length;k--;)l[k].bind(a,function(a){return function(b){d.call(a,b.target)}}(this));e||minplayer.addQueue(this,a,b,c,d);return 0<l.length};
minplayer.get=function(a,b,c){var d=typeof b,e=typeof c;"function"===typeof a?(c=a,b=a=null):"function"===d?(c=b,b=a,a=null):"undefined"===d&&"undefined"===e&&(b=a,c=a=null);if(c="function"===typeof c?c:null)minplayer.bind.call(this,"ready",a,b,c);else if(d=minplayer.plugins,e=null,a||b||c)if(!a||b||c){if(a&&b&&!c)return d[a][b];if(!a&&b&&!c){a=[];for(e in d)if(d.hasOwnProperty(e)&&d[e].hasOwnProperty(b))for(c=d[e][b].length;c--;)a.push(d[e][b][c]);return a}}else return d[a];else return d};
minplayer=minplayer||{};minplayer.display=function(a,b,c,d){minplayer.plugin.call(this,a,b,c,d)};minplayer.display.prototype=new minplayer.plugin;minplayer.display.prototype.constructor=minplayer.display;minplayer.display.prototype.getDisplay=function(a,b){return a};minplayer.display.prototype.initialize=function(){this.display||(this.display=this.getDisplay(this.context,this.options));this.display&&(this.options.pluginName="display",this.elements=this.getElements(),minplayer.plugin.prototype.initialize.call(this))};
minplayer.display.prototype.construct=function(){minplayer.plugin.prototype.construct.call(this);this.autoHide=!1;if(this.onResize){var a=0;jQuery(window).resize(function(b){return function(){clearTimeout(a);a=setTimeout(function(){b.onResize()},200)}}(this))}};minplayer.display.prototype.onResize=!1;minplayer.display.prototype.hide=function(a){if(a=a||this.display)a.forceHide=!0,a.unbind().hide()};minplayer.display.prototype.fullScreenElement=function(){return this.display};
minplayer.click=function(a,b){var c=!1;a=jQuery(a);a.bind("touchstart click",function(a){c||(c=!0,setTimeout(function(){c=!1},100),b.call(this,a))});return a};minplayer.display.prototype.onFocus=function(a){this.hasFocus=this.focus=a;this.autoHide&&this.showThenHide(this.autoHide.element,this.autoHide.timeout,this.autoHide.cb)};
minplayer.display.prototype.showThenHide=function(a,b,c){var d=typeof a;"undefined"===d?(c=null,a=this.display):"number"===d?(c=b,b=a,a=this.display):"function"===d&&(c=a,a=this.display);a&&(b=b||5E3,this.autoHide={element:a,timeout:b,cb:c},a.forceHide||("undefined"!==typeof a.showMe?a.showMe&&a.showMe(c):(a.show(),c&&c(!0))),a.hoverState||(jQuery(a).bind("mouseenter",function(){a.hoverState=!0}),jQuery(a).bind("mouseleave",function(){a.hoverState=!1})),clearTimeout(this.showTimer),this.showTimer=
setTimeout(function(d){return function k(){a.hoverState?d.showTimer=setTimeout(k,b):"undefined"!==typeof a.hideMe?a.hideMe&&a.hideMe(c):a.hide("slow",function(){c&&c(!1)})}}(this),b))};
minplayer.display.prototype.fullscreen=function(a){var b=this.isFullScreen(),c=this.fullScreenElement();b&&!a?(c.removeClass("fullscreen"),screenfull&&screenfull.exit(),this.trigger("fullscreen",!1)):!b&&a&&(c.addClass("fullscreen"),screenfull&&(screenfull.request(c[0]),screenfull.onchange=function(a){return function(b){screenfull.isFullscreen||a.fullscreen(!1)}}(this)),this.trigger("fullscreen",!0))};minplayer.display.prototype.toggleFullScreen=function(){this.fullscreen(!this.isFullScreen())};
minplayer.display.prototype.isFullScreen=function(){return this.fullScreenElement().hasClass("fullscreen")};minplayer.display.prototype.getScaledRect=function(a,b){var c={};c.x=b.x?b.x:0;c.y=b.y?b.y:0;c.width=b.width?b.width:0;c.height=b.height?b.height:0;a&&(b.width/b.height>a?(c.height=b.height,c.width=Math.floor(b.height*a)):(c.height=Math.floor(b.width/a),c.width=b.width),c.x=Math.floor((b.width-c.width)/2),c.y=Math.floor((b.height-c.height)/2));return c};
minplayer.display.prototype.getElements=function(){return{}};
(function(a,b){var c=function(){for(var a=[["requestFullscreen","exitFullscreen","fullscreenchange","fullscreen","fullscreenElement"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitfullscreenchange","webkitIsFullScreen","webkitCurrentFullScreenElement"],["mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozFullScreen","mozFullScreenElement"]],c=0,d=a.length;c<d;c++)if(a.hasOwnProperty(c)){var e=a[c];if(e[1]in b)return e}}();if(!c)return a.screenfull=!1,a.screenfull;var d=
"ALLOW_KEYBOARD_INPUT"in Element,e={init:function(){b.addEventListener(c[2],function(a){e.isFullscreen=b[c[3]];e.element=b[c[4]];e.onchange(a)});return this},isFullscreen:b[c[3]],element:b[c[4]],request:function(a){a=a||b.documentElement;a[c[0]](d&&Element.ALLOW_KEYBOARD_INPUT);if(!b.isFullscreen)a[c[0]]()},exit:function(){b[c[1]]()},toggle:function(a){this.isFullscreen?this.exit():this.request(a)},onchange:function(){}};a.screenfull=e.init()})(window,document);
jQuery.fn.minplayer||(jQuery.fn.minplayer=function(a){return jQuery(this).each(function(){a=a||{};a.id=a.id||jQuery(this).attr("id")||Math.random();minplayer.plugins[a.id]||(a.template=a.template||"default",minplayer[a.template]?new minplayer[a.template](jQuery(this),a):new minplayer(jQuery(this),a))})});minplayer=jQuery.extend(function(a,b){minplayer.display.call(this,"player",a,b)},minplayer);minplayer.prototype=new minplayer.display;minplayer.prototype.constructor=minplayer;
minplayer.prototype.defaultOptions=function(a){a.id="player";a.build=!1;a.wmode="transparent";a.preload=!0;a.autoplay=!1;a.autoload=!0;a.loop=!1;a.width="100%";a.height="350px";a.debug=!1;a.volume=80;a.files=null;a.file="";a.preview="";a.attributes={};a.plugins={};a.logo="";a.link="";a.duration=0;jQuery.each(this.context[0].attributes,function(b,c){a[c.name]=c.value});minplayer.display.prototype.defaultOptions.call(this,a)};
minplayer.prototype.construct=function(){minplayer.display.prototype.construct.call(this);var a=null,b;for(b in this.options.plugins)a=this.options.plugins[b],minplayer[a]&&(a=minplayer[a],a[this.options.template]&&a[this.options.template].init?a[this.options.template].init(this):a.init&&a.init(this));this.options.pluginName="player";this.controller=this.create("controller");this.playLoader=this.create("playLoader");this.options.logo&&this.elements.logo&&(a="",this.options.link&&(a+='<a target="_blank" href="'+
this.options.link+'">'),a+='<img src="'+this.options.logo+'" >',this.options.link&&(a+="</a>"),this.logo=this.elements.logo.append(a));this.currentPlayer="html5";this.addKeyEvents();this.addEvents();this.load(this.getFiles());this.ready()};minplayer.prototype.setFocus=function(a){minplayer.get.call(this,this.options.id,null,function(b){b.onFocus(a)});this.trigger("playerFocus",a)};
minplayer.prototype.bindTo=function(a){a.ubind(this.uuid+":error",function(a){return function(c,d){"html5"===a.currentPlayer?(minplayer.player="minplayer",a.options.file.player="minplayer",a.loadPlayer()):a.showError(d)}}(this));a.ubind(this.uuid+":fullscreen",function(a){return function(c,d){a.resize()}}(this))};
minplayer.prototype.addEvents=function(){var a=!1;this.display.bind("mouseenter",function(b){return function(){a=!0;b.setFocus(!0)}}(this));this.display.bind("mouseleave",function(b){return function(){a=!1;b.setFocus(!1)}}(this));var b=!1;this.display.bind("mousemove",function(c){return function(){b||(b=setTimeout(function(){b=!1;a&&c.setFocus(!0)},300))}}(this));minplayer.get.call(this,this.options.id,null,function(a){return function(b){a.bindTo(b)}}(this))};
minplayer.prototype.showError=function(a){"object"!==typeof a&&(a=a||"",this.elements.error&&(this.elements.error.text(a),a?(this.elements.error.show(),setTimeout(function(a){return function(){a.elements.error.hide("slow")}}(this),5E3)):this.elements.error.hide()))};minplayer.prototype.addKeyEvents=function(){jQuery(document).bind("keydown",function(a){return function(b){switch(b.keyCode){case 113:case 27:a.isFullScreen()&&a.fullscreen(!1)}}}(this))};
minplayer.prototype.getFiles=function(){if(this.options.files)return this.options.files;if(this.options.file)return this.options.file;var a=[],b=null;this.elements.media&&((b=this.elements.media.attr("src"))&&a.push({path:b}),jQuery("source",this.elements.media).each(function(){a.push({path:jQuery(this).attr("src"),mimetype:jQuery(this).attr("type"),codecs:jQuery(this).attr("codecs")})}));return a};
minplayer.getMediaFile=function(a){if(!a)return null;if("string"===typeof a||a.path||a.id)return new minplayer.file(a);var b=0,c=null,d=null,e;for(e in a)a.hasOwnProperty(e)&&(d=new minplayer.file(a[e]),d.player&&d.priority>b&&(b=d.priority,c=d));return c};
minplayer.prototype.loadPlayer=function(){if(!this.options.file||0===this.elements.display.length||!this.options.file.player)return!1;this.showError();var a=this.options.file.player.toString();if(!this.media||a!==this.currentPlayer){this.currentPlayer=a;if(this.elements.display)return a={},this.media&&(a=this.media.queue,this.media.destroy()),pClass=minplayer.players[this.options.file.player],this.options.mediaelement=this.elements.media,this.media=new pClass(this.elements.display,this.options,a),
this.media.load(this.options.file),this.display.addClass("minplayer-player-"+this.media.mediaFile.player),!0;this.showError("No media display found.")}else if(this.media)return this.media.options=this.options,this.display.removeClass("minplayer-player-"+this.media.mediaFile.player),this.media.load(this.options.file),this.display.addClass("minplayer-player-"+this.media.mediaFile.player),!1};
minplayer.prototype.load=function(a){this.options.files=a||this.options.files;this.options.file=minplayer.getMediaFile(this.options.files);this.loadPlayer()&&(this.bindTo(this.media),this.options.file.mimetype&&!this.options.file.player&&this.showError("Cannot play media: "+this.options.file.mimetype))};minplayer.prototype.resize=function(){this.get(function(a){if(a.onResize)a.onResize()})};minplayer=minplayer||{};
minplayer.image=function(a,b){this.loaded=!1;this.loader=null;this.ratio=0;this.img=null;minplayer.display.call(this,"image",a,b)};minplayer.image.prototype=new minplayer.display;minplayer.image.prototype.constructor=minplayer.image;
minplayer.image.prototype.construct=function(){minplayer.display.prototype.construct.call(this);this.options.pluginName="image";this.display.css("overflow","hidden");this.loader=new Image;this.loader.onload=function(a){return function(){a.loaded=!0;a.ratio=a.loader.width/a.loader.height;a.resize();a.trigger("loaded")}}(this);this.ready()};
minplayer.image.prototype.load=function(a){this.clear(function(){this.display.empty();this.img=jQuery(document.createElement("img")).attr({src:""}).hide();this.display.append(this.img);this.loader.src=a;this.img.attr("src",a)})};minplayer.image.prototype.clear=function(a){this.loaded=!1;this.img?this.img.fadeOut(150,function(b){return function(){b.img.attr("src","");b.loader.src="";jQuery(this).remove();a&&a.call(b)}}(this)):a&&a.call(this)};
minplayer.image.prototype.resize=function(a,b){a=a||this.display.parent().width();b=b||this.display.parent().height();if(a&&b&&this.loaded){var c=this.getScaledRect(this.ratio,{width:a,height:b});this.img&&this.img.attr("src",this.loader.src).css({marginLeft:c.x,marginTop:c.y,width:c.width,height:c.height});this.img.fadeIn(150)}};minplayer.image.prototype.onResize=function(){this.resize()};minplayer=minplayer||{};
minplayer.file=function(a){if(!a)return null;a="string"===typeof a?{path:a}:a;if(a.hasOwnProperty("isMinPlayerFile"))return a;this.isMinPlayerFile=!0;this.duration=a.duration||0;this.bytesTotal=a.bytesTotal||0;this.quality=a.quality||0;this.stream=a.stream||"";this.path=a.path||"";this.codecs=a.codecs||"";this.extension=a.extension||this.getFileExtension();this.mimetype=a.mimetype||a.filemime||this.getMimeType();this.type=a.type||this.getType();this.type||(this.mimetype=this.getMimeType(),this.type=
this.getType());this.player=minplayer.player||a.player||this.getBestPlayer();this.priority=a.priority||this.getPriority();this.id=a.id||this.getId();this.path||(this.path=this.id)};minplayer.player="";minplayer.file.prototype.getBestPlayer=function(){var a=null,b=0;jQuery.each(minplayer.players,function(c){return function(d,e){var g=e.getPriority(c);e.canPlay(c)&&g>b&&(a=d,b=g)}}(this));return a};
minplayer.file.prototype.getPriority=function(){var a=1;this.player&&(a=minplayer.players[this.player].getPriority(this));switch(this.mimetype){case "video/x-webm":case "video/webm":case "application/octet-stream":case "application/vnd.apple.mpegurl":return 10*a;case "video/mp4":case "audio/mp4":case "audio/mpeg":return 9*a;case "video/ogg":case "audio/ogg":case "video/quicktime":return 8*a;default:return 5*a}};
minplayer.file.prototype.getFileExtension=function(){return this.path.substring(this.path.lastIndexOf(".")+1).toLowerCase()};
minplayer.file.prototype.getMimeType=function(){switch(this.extension){case "mp4":case "m4v":case "flv":case "f4v":return"video/mp4";case "m3u8":return"application/vnd.apple.mpegurl";case "webm":return"video/webm";case "ogg":case "ogv":return"video/ogg";case "3g2":return"video/3gpp2";case "3gpp":case "3gp":return"video/3gpp";case "mov":return"video/quicktime";case "swf":return"application/x-shockwave-flash";case "oga":return"audio/ogg";case "mp3":return"audio/mpeg";case "m4a":case "f4a":return"audio/mp4";
case "aac":return"audio/aac";case "wav":return"audio/vnd.wave";case "wma":return"audio/x-ms-wma";default:return"unknown"}};minplayer.file.prototype.getType=function(){var a=this.mimetype.match(/([^\/]+)(\/)/),a=a&&1<a.length?a[1]:"";if("video"===a)return"video";if("audio"===a)return"audio";switch(this.mimetype){case "application/octet-stream":case "application/x-shockwave-flash":case "application/vnd.apple.mpegurl":return"video"}return""};
minplayer.file.prototype.getId=function(){var a=minplayer.players[this.player];return a&&a.getMediaId?a.getMediaId(this):""};minplayer=minplayer||{};minplayer.playLoader=function(a,b){this.clear();minplayer.display.call(this,"playLoader",a,b)};minplayer.playLoader.prototype=new minplayer.display;minplayer.playLoader.prototype.constructor=minplayer.playLoader;
minplayer.playLoader.prototype.construct=function(){minplayer.display.prototype.construct.call(this);this.options.pluginName="playLoader";this.initializePlayLoader();this.ready()};
minplayer.playLoader.prototype.initializePlayLoader=function(){this.get("media",function(a){if(a.hasPlayLoader(this.options.preview))this.enabled=!1,this.hide(this.elements.busy),this.hide(this.elements.bigPlay),this.hide(this.elements.preview),this.hide();else{this.enabled=!0;this.options.preview||(this.options.preview=a.poster);var b=!0;this.preview&&this.preview.loader&&(b=this.preview.loader.src!==this.options.preview);b&&(a.elements.media.attr("poster",""),this.loadPreview());this.elements.bigPlay&&
minplayer.click(this.elements.bigPlay.unbind(),function(b){b.preventDefault();jQuery(this).hide();a.play()});a.ubind(this.uuid+":loadstart",function(a){return function(b,e,g){a.busy.setFlag("media",!0);a.bigPlay.setFlag("media",!0);a.previewFlag.setFlag("media",!0);a.checkVisibility()}}(this));a.ubind(this.uuid+":waiting",function(a){return function(b,e,g){g||(a.busy.setFlag("media",!0),a.checkVisibility())}}(this));a.ubind(this.uuid+":loadeddata",function(a){return function(b,e,g){g||(a.busy.setFlag("media",
!1),a.checkVisibility())}}(this));a.ubind(this.uuid+":playing",function(b){return function(d,e,g){g||(b.busy.setFlag("media",!1),b.bigPlay.setFlag("media",!1),"audio"!==a.mediaFile.type&&b.previewFlag.setFlag("media",!1),b.checkVisibility())}}(this));a.ubind(this.uuid+":pause",function(a){return function(b,e,g){g||(a.busy.setFlag("media",!1),a.bigPlay.setFlag("media",!0),a.checkVisibility())}}(this))}})};
minplayer.playLoader.prototype.clear=function(a){this.busy=new minplayer.flags;this.bigPlay=new minplayer.flags;this.previewFlag=new minplayer.flags;this.enabled=!0;this.preview?this.preview.clear(function(b){return function(){b.preview=null;a&&a()}}(this)):(this.preview=null,a&&a())};
minplayer.playLoader.prototype.loadPreview=function(a){a=a||this.options.preview;this.options.preview=a;if(this.enabled&&0!==this.display.length){if(this.elements.preview){if(this.options.preview)return this.elements.preview.addClass("has-preview").show(),this.preview=new minplayer.image(this.elements.preview,this.options),this.preview.load(this.options.preview),!0;this.elements.preview.hide()}return!1}};
minplayer.playLoader.prototype.checkVisibility=function(){this.enabled&&(this.busy.flag?this.elements.busy.show():this.elements.busy.hide(),this.bigPlay.flag?this.elements.bigPlay.show():this.elements.bigPlay.hide(),this.previewFlag.flag?this.elements.preview.show():this.elements.preview.hide(),(this.bigPlay.flag||this.busy.flag||this.previewFlag.flag)&&this.display.show(),this.bigPlay.flag||this.busy.flag||this.previewFlag.flag||this.display.hide())};minplayer=minplayer||{};
minplayer.players=minplayer.players||{};minplayer.players.base=function(a,b,c){minplayer.display.call(this,"media",a,b,c)};minplayer.players.base.prototype=new minplayer.display;minplayer.players.base.prototype.constructor=minplayer.players.base;minplayer.players.base.prototype.getElements=function(){var a=minplayer.display.prototype.getElements.call(this);return jQuery.extend(a,{media:this.options.mediaelement})};minplayer.players.base.getPriority=function(a){return 0};
minplayer.players.base.getMediaId=function(a){return""};minplayer.players.base.canPlay=function(a){return!1};minplayer.players.base.prototype.construct=function(){minplayer.display.prototype.construct.call(this);this.elements.media&&(this.poster=this.elements.media.attr("poster"));this.options.pluginName="basePlayer";this.readyQueue=[];this.mediaFile=this.options.file;this.clear();this.setupPlayer()};
minplayer.players.base.prototype.setupPlayer=function(){this.playerFound()||this.addPlayer();this.player=this.getPlayer();minplayer.click(this.display,function(a){return function(){a.playing?a.pause():a.play()}}(this));jQuery(document).bind("keydown",function(a){return function(b){if(a.hasFocus)switch(b.preventDefault(),b.keyCode){case 32:case 179:a.playing?a.pause():a.play();break;case 38:a.setVolumeRelative(0.1);break;case 40:a.setVolumeRelative(-0.1);break;case 37:case 227:a.seekRelative(-0.05);
break;case 39:case 228:a.seekRelative(0.05)}}}(this))};minplayer.players.base.prototype.addPlayer=function(){this.elements.media&&this.elements.media.remove();this.elements.media=jQuery(this.createPlayer());this.display.html(this.elements.media)};minplayer.players.base.prototype.destroy=function(){minplayer.plugin.prototype.destroy.call(this);this.clear()};minplayer.players.base.prototype.clear=function(){this.playerReady=!1;this.reset();this.player&&(jQuery(this.player).remove(),this.player=null)};
minplayer.players.base.prototype.reset=function(){this.duration=new minplayer.async;this.currentTime=new minplayer.async;this.bytesLoaded=new minplayer.async;this.bytesTotal=new minplayer.async;this.bytesStart=new minplayer.async;this.volume=new minplayer.async;this.loaded=this.loading=this.playing=this.hasFocus=!1;this.trigger("pause",null,!0);this.trigger("waiting",null,!0);this.trigger("progress",{loaded:0,total:0,start:0},!0);this.trigger("timeupdate",{currentTime:0,duration:0},!0)};
minplayer.players.base.prototype.onReady=function(){if(!this.playerReady)if(this.playerReady=!0,this.setVolume(this.options.volume/100),this.loading=!0,this.poll("progress",function(a){return function(){a.loading&&a.getBytesLoaded(function(c){a.getBytesTotal(function(d){if(c||d){var e=0;a.getBytesStart(function(a){e=a});a.trigger("progress",{loaded:c,total:d,start:e});c>=d&&(a.loading=!1)}})});return a.loading}}(this),1E3),this.ready(),this.isReady()){for(var a in this.readyQueue)this.readyQueue[a].call(this);
this.readyQueue.length=0;this.readyQueue=[];this.loaded||this.trigger("loadstart")}else this.readyQueue.length=0,this.readyQueue=[]};minplayer.players.base.prototype.getSeek=function(){var a=0,b=0,b=0;minplayer.urlVars&&minplayer.urlVars.seek&&((a=minplayer.urlVars.seek.match(/([0-9])s/i))&&(a=parseInt(a[1],10)),(b=minplayer.urlVars.seek.match(/([0-9])m/i))&&(a+=60*parseInt(b[1],10)),(b=minplayer.urlVars.seek.match(/([0-9])h/i))&&(a+=3600*parseInt(b[1],10)),a||(a=minplayer.urlVars.seek));return a};
minplayer.players.base.prototype.onPlaying=function(){this.trigger("playing");this.playing=this.hasFocus=!0;this.poll("timeupdate",function(a){return function(){a.playing&&a.getCurrentTime(function(b){a.getDuration(function(c){b=parseFloat(b);c=parseFloat(c);(b||c)&&a.trigger("timeupdate",{currentTime:b,duration:c})})});return a.playing}}(this),500)};minplayer.players.base.prototype.onPaused=function(){this.trigger("pause");this.playing=this.hasFocus=!1};
minplayer.players.base.prototype.onComplete=function(){if(this.playing)this.onPaused();this.hasFocus=this.loading=this.playing=!1;this.trigger("ended")};minplayer.players.base.prototype.onLoaded=function(){var a=this.loaded;!this.loaded&&this.options.autoplay&&this.play();this.loaded=!0;this.trigger("loadeddata");if(!a){var b=this.getSeek();b&&this.getDuration(function(a){return function(d){b<d&&(a.seek(b),a.play())}}(this))}};minplayer.players.base.prototype.onWaiting=function(){this.trigger("waiting")};
minplayer.players.base.prototype.onError=function(a){this.hasFocus=!1;this.trigger("error",a)};minplayer.players.base.prototype.isReady=function(){return this.player&&this.playerReady};minplayer.players.base.prototype.whenReady=function(a){this.isReady()?a.call(this):this.readyQueue.push(a)};minplayer.players.base.prototype.hasPlayLoader=function(a){return!1};minplayer.players.base.prototype.hasController=function(){return!1};minplayer.players.base.prototype.playerFound=function(){return!1};
minplayer.players.base.prototype.createPlayer=function(){this.reset();return null};minplayer.players.base.prototype.getPlayer=function(){return this.player};minplayer.players.base.prototype.load=function(a,b){var c="string"===typeof this.mediaFile?this.mediaFile:this.mediaFile.path;a&&a.path!==c&&(this.isReady()||this.setupPlayer(),this.reset(),this.mediaFile=a,b&&b.call(this))};minplayer.players.base.prototype.play=function(a){this.options.autoload=!0;this.options.autoplay=!0;this.whenReady(a)};
minplayer.players.base.prototype.pause=function(a){this.whenReady(a)};minplayer.players.base.prototype.stop=function(a){this.hasFocus=this.loading=this.playing=!1;this.whenReady(a)};minplayer.players.base.prototype.seekRelative=function(a){this.getCurrentTime(function(b){return function(c){b.getDuration(function(d){if(d){var e=0,e=-1<a&&1>a?(c/d+parseFloat(a))*d:c+parseFloat(a);b.seek(e)}})}}(this))};minplayer.players.base.prototype.seek=function(a,b){this.whenReady(b)};
minplayer.players.base.prototype.getValue=function(a,b){if(this.isReady()){var c=this.player[a]();void 0!==c&&null!==c&&b(c)}};minplayer.players.base.prototype.setVolumeRelative=function(a){this.getVolume(function(b){return function(c){c+=parseFloat(a);c=0>c?0:c;b.setVolume(1<c?1:c)}}(this))};minplayer.players.base.prototype.setVolume=function(a,b){this.trigger("volumeupdate",a);this.whenReady(b)};minplayer.players.base.prototype.getVolume=function(a){return this.volume.get(a)};
minplayer.players.base.prototype.getCurrentTime=function(a){return this.currentTime.get(a)};minplayer.players.base.prototype.getDuration=function(a){if(this.options.duration)a(this.options.duration);else return this.duration.get(a)};minplayer.players.base.prototype.getBytesStart=function(a){return this.bytesStart.get(a)};minplayer.players.base.prototype.getBytesLoaded=function(a){return this.bytesLoaded.get(a)};minplayer.players.base.prototype.getBytesTotal=function(a){return this.bytesTotal.get(a)};
minplayer=minplayer||{};minplayer.players=minplayer.players||{};minplayer.players.html5=function(a,b,c){minplayer.players.base.call(this,a,b,c)};minplayer.players.html5.prototype=new minplayer.players.base;minplayer.players.html5.prototype.constructor=minplayer.players.html5;minplayer.players.html5.getPriority=function(a){return 10};
minplayer.players.html5.canPlay=function(a){switch(a.mimetype){case "video/ogg":return!!minplayer.playTypes.videoOGG;case "video/mp4":case "video/x-mp4":case "video/m4v":case "video/x-m4v":return!!minplayer.playTypes.videoH264;case "application/vnd.apple.mpegurl":return!!minplayer.playTypes.videoMPEGURL;case "video/x-webm":case "video/webm":case "application/octet-stream":return!!minplayer.playTypes.videoWEBM;case "audio/ogg":return!!minplayer.playTypes.audioOGG;case "audio/mpeg":return!!minplayer.playTypes.audioMP3;
case "audio/mp4":return!!minplayer.playTypes.audioMP4;default:return!1}};minplayer.players.html5.prototype.construct=function(){minplayer.players.base.prototype.construct.call(this);this.options.pluginName="html5";this.addPlayerEvents()};minplayer.players.html5.prototype.addPlayerEvent=function(a,b){this.player&&this.player.addEventListener(a,function(c){var d=a+"Event";c[d]&&c.player.removeEventListener(a,c[d],!1);c[d]=function(a){b.call(c,a)};return c[d]}(this),!1)};
minplayer.players.html5.prototype.addPlayerEvents=function(){if(this.player){this.addPlayerEvent("abort",function(){this.trigger("abort")});this.addPlayerEvent("loadstart",function(){this.onReady();if(!this.options.autoload)this.onLoaded()});this.addPlayerEvent("loadeddata",function(){this.onLoaded()});this.addPlayerEvent("loadedmetadata",function(){this.onLoaded()});this.addPlayerEvent("canplaythrough",function(){this.onLoaded()});this.addPlayerEvent("ended",function(){this.onComplete()});this.addPlayerEvent("pause",
function(){this.onPaused()});this.addPlayerEvent("play",function(){this.onPlaying()});this.addPlayerEvent("playing",function(){this.onPlaying()});var a=!1;this.addPlayerEvent("error",function(){!a&&this.player&&(a=!0,this.trigger("error","An error occured - "+this.player.error.code))});this.addPlayerEvent("waiting",function(){this.onWaiting()});this.addPlayerEvent("durationchange",function(){this.player&&(this.duration.set(this.player.duration),this.trigger("durationchange",{duration:this.player.duration}))});
this.addPlayerEvent("progress",function(a){this.bytesTotal.set(a.total);this.bytesLoaded.set(a.loaded)});return!0}return!1};minplayer.players.html5.prototype.onReady=function(){minplayer.players.base.prototype.onReady.call(this);if(minplayer.isAndroid)this.onLoaded();minplayer.isIDevice&&setTimeout(function(a){return function(){a.pause();a.onLoaded()}}(this),1)};minplayer.players.html5.prototype.playerFound=function(){return 0<this.display.find(this.mediaFile.type).length};
minplayer.players.html5.prototype.createPlayer=function(){minplayer.players.base.prototype.createPlayer.call(this);var a=jQuery(document.createElement(this.mediaFile.type)).attr(this.options.attributes).append(jQuery(document.createElement("source")).attr({src:this.mediaFile.path}));a.eq(0)[0].setAttribute("width","100%");a.eq(0)[0].setAttribute("height","100%");var b=this.options.autoload?"metadata":"none",b=minplayer.isIDevice?"metadata":b;a.eq(0)[0].setAttribute("preload",b);this.options.autoload||
a.eq(0)[0].setAttribute("autobuffer",!1);return a};minplayer.players.html5.prototype.getPlayer=function(){return this.elements.media.eq(0)[0]};
minplayer.players.html5.prototype.load=function(a,b){minplayer.players.base.prototype.load.call(this,a,function(){var c=this.elements.media.attr("src");c||(c=jQuery("source",this.elements.media).eq(0).attr("src"));c!==a.path&&(this.addPlayer(),this.player=this.getPlayer(),this.addPlayerEvents(),c='<source src="'+a.path+'"></source>',this.elements.media.removeAttr("src").empty().html(c),b&&b.call(this))})};
minplayer.players.html5.prototype.play=function(a){minplayer.players.base.prototype.play.call(this,function(){this.player.play();a&&a.call(this)})};minplayer.players.html5.prototype.pause=function(a){minplayer.players.base.prototype.pause.call(this,function(){this.player.pause();a&&a.call(this)})};minplayer.players.html5.prototype.stop=function(a){minplayer.players.base.prototype.stop.call(this,function(){this.player.pause();this.player.src="";a&&a.call(this)})};
minplayer.players.html5.prototype.seek=function(a,b){minplayer.players.base.prototype.seek.call(this,a,function(){this.player.currentTime=a;b&&b.call(this)})};minplayer.players.html5.prototype.setVolume=function(a,b){minplayer.players.base.prototype.setVolume.call(this,a,function(){this.player.volume=a;b&&b.call(this)})};minplayer.players.html5.prototype.getVolume=function(a){this.whenReady(function(){a(this.player.volume)})};
minplayer.players.html5.prototype.getDuration=function(a){this.whenReady(function(){this.options.duration?a(this.options.duration):(this.duration.get(a),this.player.duration&&this.duration.set(this.player.duration))})};minplayer.players.html5.prototype.getCurrentTime=function(a){this.whenReady(function(){a(this.player.currentTime)})};
minplayer.players.html5.prototype.getBytesLoaded=function(a){this.whenReady(function(){var b=0;this.bytesLoaded.value?b=this.bytesLoaded.value:this.player.buffered&&0<this.player.buffered.length&&this.player.buffered.end&&this.player.duration?b=this.player.buffered.end(0):void 0!==this.player.bytesTotal&&0<this.player.bytesTotal&&void 0!==this.player.bufferedBytes&&(b=this.player.bufferedBytes);a(b)})};
minplayer.players.html5.prototype.getBytesTotal=function(a){this.whenReady(function(){var b=0;this.bytesTotal.value?b=this.bytesTotal.value:this.player.buffered&&0<this.player.buffered.length&&this.player.buffered.end&&this.player.duration?b=this.player.duration:void 0!==this.player.bytesTotal&&0<this.player.bytesTotal&&void 0!==this.player.bufferedBytes&&(b=this.player.bytesTotal);a(b)})};minplayer=minplayer||{};minplayer.players=minplayer.players||{};
minplayer.players.flash=function(a,b,c){minplayer.players.base.call(this,a,b,c)};minplayer.players.flash.prototype=new minplayer.players.base;minplayer.players.flash.prototype.constructor=minplayer.players.flash;minplayer.players.flash.prototype.construct=function(){minplayer.players.base.prototype.construct.call(this);this.options.pluginName="flash"};minplayer.players.flash.getPriority=function(a){return 0};minplayer.players.flash.canPlay=function(a){return!1};
minplayer.players.flash.prototype.getFlash=function(a){var b=document.createElement("script");b.src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c);setTimeout(function(b){return function g(){"undefined"!==typeof swfobject?swfobject.embedSWF(a.swf,a.id,a.width,a.height,"9.0.0",!1,a.flashvars,{allowscriptaccess:"always",allowfullscreen:"true",wmode:a.wmode,quality:"high"},{id:a.id,name:a.id,playerType:"flash"},
function(a){b.player=a.ref}):setTimeout(g,200)}}(this),200);return'<div id="'+a.id+'"></div>'};minplayer.players.flash.prototype.playerFound=function(){return 0<this.display.find('object[playerType="flash"]').length};minplayer=minplayer||{};minplayer.players=minplayer.players||{};minplayer.players.minplayer=function(a,b,c){minplayer.players.flash.call(this,a,b,c)};minplayer.players.minplayer.prototype=new minplayer.players.flash;minplayer.players.minplayer.prototype.constructor=minplayer.players.minplayer;
minplayer.players.minplayer.prototype.construct=function(){minplayer.players.flash.prototype.construct.call(this);this.options.pluginName="minplayer"};window.onFlashPlayerReady=function(a){a=minplayer.get(a,"media");for(var b=a.length;b--;)a[b].onReady()};window.onFlashPlayerUpdate=function(a,b){for(var c=minplayer.get(a,"media"),d=c.length;d--;)c[d].onMediaUpdate(b)};window.onFlashPlayerDebug=function(a){console&&console.log&&console.log(a)};
minplayer.players.minplayer.getPriority=function(a){return a.stream?100:1};minplayer.players.minplayer.canPlay=function(a){return a.stream?!0:!(0<=jQuery.inArray(a.mimetype,["video/x-webm","video/webm","application/octet-stream"]))&&("video"===a.type||"audio"===a.type)};
minplayer.players.minplayer.prototype.createPlayer=function(){this.options.swfplayer||(this.options.swfplayer="http://mediafront.org/assets/osmplayer/minplayer",this.options.swfplayer+="/flash/minplayer.swf");minplayer.players.flash.prototype.createPlayer.call(this);var a={id:this.options.id,debug:this.options.debug,config:"nocontrols",file:this.mediaFile.path,autostart:this.options.autoplay,autoload:this.options.autoload};this.mediaFile.stream&&(a.stream=this.mediaFile.stream);return this.getFlash({swf:this.options.swfplayer,
id:this.options.id+"_player",width:"100%",height:"100%",flashvars:a,wmode:this.options.wmode})};minplayer.players.minplayer.prototype.onMediaUpdate=function(a){switch(a){case "mediaMeta":this.onLoaded();break;case "mediaConnected":this.onLoaded();this.onPaused();break;case "mediaPlaying":this.onPlaying();break;case "mediaPaused":this.onPaused();break;case "mediaComplete":this.onComplete()}};
minplayer.players.minplayer.prototype.load=function(a,b){minplayer.players.flash.prototype.load.call(this,a,function(){this.player.loadMedia(a.path,a.stream);b&&b.call(this)})};minplayer.players.minplayer.prototype.play=function(a){minplayer.players.flash.prototype.play.call(this,function(){this.player.playMedia();a&&a.call(this)})};minplayer.players.minplayer.prototype.pause=function(a){minplayer.players.flash.prototype.pause.call(this,function(){this.player.pauseMedia();a&&a.call(this)})};
minplayer.players.minplayer.prototype.stop=function(a){minplayer.players.flash.prototype.stop.call(this,function(){this.player.stopMedia();a&&a.call(this)})};minplayer.players.minplayer.prototype.seek=function(a,b){minplayer.players.flash.prototype.seek.call(this,a,function(){this.player.seekMedia(a);b&&b.call(this)})};minplayer.players.minplayer.prototype.setVolume=function(a,b){minplayer.players.flash.prototype.setVolume.call(this,a,function(){this.player.setVolume(a);b&&b.call(this)})};
minplayer.players.minplayer.prototype.getVolume=function(a){this.whenReady(function(){a(this.player.getVolume())})};minplayer.players.minplayer.prototype.getDuration=function(a){this.whenReady(function(){if(this.options.duration)a(this.options.duration);else{var b=this.player.getDuration();b?a(b):this.poll("duration",function(c){return function(){(b=c.player.getDuration())&&a(b);return!b}}(this),1E3)}})};minplayer.players.minplayer.prototype.getCurrentTime=function(a){this.whenReady(function(){a(this.player.getCurrentTime())})};
minplayer.players.minplayer.prototype.getBytesLoaded=function(a){this.whenReady(function(){a(this.player.getMediaBytesLoaded())})};minplayer.players.minplayer.prototype.getBytesTotal=function(a){this.whenReady(function(){a(this.player.getMediaBytesTotal())})};minplayer=minplayer||{};minplayer.players=minplayer.players||{};minplayer.players.youtube=function(a,b,c){this.quality="default";minplayer.players.base.call(this,a,b,c)};minplayer.players.youtube.prototype=new minplayer.players.base;
minplayer.players.youtube.prototype.constructor=minplayer.players.youtube;minplayer.players.youtube.prototype.construct=function(){minplayer.players.base.prototype.construct.call(this);this.options.pluginName="youtube"};minplayer.players.youtube.getPriority=function(a){return 10};minplayer.players.youtube.canPlay=function(a){return"video/youtube"===a.mimetype?!0:0===a.path.search(/^http(s)?\:\/\/(www\.)?(youtube\.com|youtu\.be)/i)};
minplayer.players.youtube.getMediaId=function(a){var b;b="^http[s]?\\:\\/\\/(www\\.)?(youtube\\.com\\/watch\\?v=|youtu\\.be\\/)([a-zA-Z0-9_\\-]+)";b=RegExp(b,"i");return 0===a.path.search(b)?a.path.match(b)[3]:a.path};minplayer.players.youtube.getImage=function(a,b,c){c("https://img.youtube.com/vi/"+a.id+"/"+("thumbnail"===b?"1":"0")+".jpg")};
minplayer.players.youtube.parseNode=function(a){a="undefined"!==typeof a.video?a.video:a;return{title:a.title,description:a.description,mediafiles:{image:{thumbnail:{path:a.thumbnail.sqDefault},image:{path:a.thumbnail.hqDefault}},media:{media:{player:"youtube",id:a.id}}}}};minplayer.players.youtube.getNode=function(a,b){var c="https://gdata.youtube.com/feeds/api/videos/"+a.id;jQuery.get(c+"?v=2&alt=jsonc",function(a){b(minplayer.players.youtube.parseNode(a.data))})};
minplayer.players.youtube.prototype.setPlayerState=function(a){switch(a){case YT.PlayerState.BUFFERING:this.onWaiting();break;case YT.PlayerState.PAUSED:this.onPaused();break;case YT.PlayerState.PLAYING:this.onPlaying();break;case YT.PlayerState.ENDED:this.onComplete()}};minplayer.players.youtube.prototype.onReady=function(a){minplayer.players.base.prototype.onReady.call(this);this.options.autoplay||this.pause();this.onLoaded()};
minplayer.players.youtube.prototype.playerFound=function(){return 0<this.display.find("iframe#"+this.options.id+"-player.youtube-player").length};minplayer.players.youtube.prototype.onPlayerStateChange=function(a){this.setPlayerState(a.data)};minplayer.players.youtube.prototype.onQualityChange=function(a){this.quality=a.data};minplayer.players.youtube.prototype.hasPlayLoader=function(a){return minplayer.hasTouch||!a};minplayer.players.youtube.prototype.hasController=function(){return minplayer.isIDevice};
minplayer.players.youtube.prototype.createPlayer=function(){minplayer.players.base.prototype.createPlayer.call(this);if(0===jQuery('script[src="https://www.youtube.com/player_api"]').length){var a=document.createElement("script");a.src="https://www.youtube.com/player_api";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}this.playerId=this.options.id+"-player";this.poll(this.options.id+"_youtube",function(a){return function(){var b=0<jQuery("#"+a.playerId).length;if(b=
(b=b&&"YT"in window)&&"function"===typeof YT.Player){jQuery("#"+a.playerId).addClass("youtube-player");var e=location.protocol,e=e+("//"+location.hostname),e=e+(location.port&&":"+location.port),g={};minplayer.isIDevice?g.origin=e:g={enablejsapi:minplayer.isIDevice?0:1,origin:e,wmode:"opaque",controls:minplayer.isAndroid?1:0,rel:0,showinfo:0};a.player=new YT.Player(a.playerId,{height:"100%",width:"100%",frameborder:0,videoId:a.mediaFile.id,playerVars:g,events:{onReady:function(b){a.onReady(b)},onStateChange:function(b){a.onPlayerStateChange(b)},
onPlaybackQualityChange:function(b){a.onQualityChange(b)},onError:function(b){a.onError(b)}}})}return!b}}(this),200);return jQuery(document.createElement("div")).attr({id:this.playerId})};minplayer.players.youtube.prototype.load=function(a,b){minplayer.players.base.prototype.load.call(this,a,function(){this.player.loadVideoById(a.id,0,this.quality);b&&b.call(this)})};
minplayer.players.youtube.prototype.play=function(a){minplayer.players.base.prototype.play.call(this,function(){this.onWaiting();this.player.playVideo();a&&a.call(this)})};minplayer.players.youtube.prototype.pause=function(a){minplayer.players.base.prototype.pause.call(this,function(){this.player.pauseVideo();a&&a.call(this)})};minplayer.players.youtube.prototype.stop=function(a){minplayer.players.base.prototype.stop.call(this,function(){this.player.stopVideo();a&&a.call(this)})};
minplayer.players.youtube.prototype.seek=function(a,b){minplayer.players.base.prototype.seek.call(this,a,function(){this.onWaiting();this.player.seekTo(a,!0);b&&b.call(this)})};minplayer.players.youtube.prototype.setVolume=function(a,b){minplayer.players.base.prototype.setVolume.call(this,a,function(){this.player.setVolume(100*a);b&&b.call(this)})};minplayer.players.youtube.prototype.getVolume=function(a){this.getValue("getVolume",a)};
minplayer.players.youtube.prototype.getDuration=function(a){this.options.duration?a(this.options.duration):this.getValue("getDuration",a)};minplayer.players.youtube.prototype.getCurrentTime=function(a){this.getValue("getCurrentTime",a)};minplayer.players.youtube.prototype.getBytesStart=function(a){this.getValue("getVideoStartBytes",a)};minplayer.players.youtube.prototype.getBytesLoaded=function(a){this.getValue("getVideoBytesLoaded",a)};
minplayer.players.youtube.prototype.getBytesTotal=function(a){this.getValue("getVideoBytesTotal",a)};minplayer=minplayer||{};minplayer.players=minplayer.players||{};minplayer.players.vimeo=function(a,b,c){minplayer.players.base.call(this,a,b,c)};minplayer.players.vimeo.prototype=new minplayer.players.base;minplayer.players.vimeo.prototype.constructor=minplayer.players.vimeo;
minplayer.players.vimeo.prototype.construct=function(){minplayer.players.base.prototype.construct.call(this);this.options.pluginName="vimeo"};minplayer.players.vimeo.getPriority=function(a){return 10};minplayer.players.vimeo.canPlay=function(a){return"video/vimeo"===a.mimetype?!0:0===a.path.search(/^http(s)?\:\/\/(www\.)?vimeo\.com/i)};minplayer.players.vimeo.prototype.hasPlayLoader=function(a){return minplayer.hasTouch};minplayer.players.vimeo.prototype.hasController=function(){return minplayer.hasTouch};
minplayer.players.vimeo.getMediaId=function(a){var b=/^http[s]?\:\/\/(www\.)?vimeo\.com\/(\?v\=)?([0-9]+)/i;return 0===a.path.search(b)?a.path.match(b)[3]:a.path};minplayer.players.vimeo.parseNode=function(a){return{title:a.title,description:a.description,mediafiles:{image:{thumbnail:{path:a.thumbnail_small},image:{path:a.thumbnail_large}},media:{media:{player:"vimeo",id:a.id}}}}};minplayer.players.vimeo.nodes={};
minplayer.players.vimeo.getNode=function(a,b){minplayer.players.vimeo.nodes.hasOwnProperty(a.id)?b(minplayer.players.vimeo.nodes[a.id]):jQuery.ajax({url:"https://vimeo.com/api/v2/video/"+a.id+".json",dataType:"jsonp",success:function(c){c=minplayer.players.vimeo.parseNode(c[0]);minplayer.players.vimeo.nodes[a.id]=c;b(c)}})};minplayer.players.vimeo.getImage=function(a,b,c){minplayer.players.vimeo.getNode(a,function(a){c(a.mediafiles.image.image)})};minplayer.players.vimeo.prototype.reset=function(){minplayer.players.base.prototype.reset.call(this)};
minplayer.players.vimeo.prototype.createPlayer=function(){minplayer.players.base.prototype.createPlayer.call(this);if(0===jQuery('script[src="http://a.vimeocdn.com/js/froogaloop2.min.js"]').length){var a=document.createElement("script");a.src="http://a.vimeocdn.com/js/froogaloop2.min.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}var c=document.createElement("iframe");c.setAttribute("id",this.options.id+"-player");c.setAttribute("type","text/html");c.setAttribute("width",
"100%");c.setAttribute("height","100%");c.setAttribute("frameborder","0");jQuery(c).addClass("vimeo-player");a="https://player.vimeo.com/video/"+(this.mediaFile.id+"?");a+=jQuery.param({wmode:"opaque",api:1,player_id:this.options.id+"-player",title:0,byline:0,portrait:0,loop:this.options.loop});c.setAttribute("src",a);this.poll(this.options.id+"_vimeo",function(a){return function(){if(window.Froogaloop){a.player=window.Froogaloop(c);var b=0;a.player.addEvent("ready",function(){clearTimeout(b);a.onReady();
a.onError("")});b=setTimeout(function(){a.onReady()},3E3)}return!window.Froogaloop}}(this),200);this.trigger("loadstart");return c};
minplayer.players.vimeo.prototype.onReady=function(a){this.player.addEvent("loadProgress",function(a){return function(c){a.duration.set(parseFloat(c.duration));a.bytesLoaded.set(c.bytesLoaded);a.bytesTotal.set(c.bytesTotal)}}(this));this.player.addEvent("playProgress",function(a){return function(c){a.duration.set(parseFloat(c.duration));a.currentTime.set(parseFloat(c.seconds))}}(this));this.player.addEvent("play",function(a){return function(){a.onPlaying()}}(this));this.player.addEvent("pause",function(a){return function(){a.onPaused()}}(this));
this.player.addEvent("finish",function(a){return function(){a.onComplete()}}(this));minplayer.players.base.prototype.onReady.call(this);this.onLoaded();this.options.autoplay&&this.play()};minplayer.players.vimeo.prototype.clear=function(){this.player&&this.player.api("unload");minplayer.players.base.prototype.clear.call(this)};minplayer.players.vimeo.prototype.load=function(a,b){minplayer.players.base.prototype.load.call(this,a,function(){this.construct();b&&b.call(this)})};
minplayer.players.vimeo.prototype.play=function(a){minplayer.players.base.prototype.play.call(this,function(){this.player.api("play");a&&a.call(this)})};minplayer.players.vimeo.prototype.pause=function(a){minplayer.players.base.prototype.pause.call(this,function(){this.player.api("pause");a&&a.call(this)})};minplayer.players.vimeo.prototype.stop=function(a){minplayer.players.base.prototype.stop.call(this,function(){this.player.api("unload");a&&a.call(this)})};
minplayer.players.vimeo.prototype.seek=function(a,b){minplayer.players.base.prototype.seek.call(this,a,function(){this.player.api("seekTo",a);b&&b.call(this)})};minplayer.players.vimeo.prototype.setVolume=function(a,b){minplayer.players.base.prototype.setVolume.call(this,a,function(){this.volume.set(a);this.player.api("setVolume",a);b&&b.call(this)})};minplayer.players.vimeo.prototype.getVolume=function(a){this.whenReady(function(){this.player.api("getVolume",function(b){a(b)})})};
minplayer.players.vimeo.prototype.getDuration=function(a){this.whenReady(function(){this.options.duration?a(this.options.duration):this.duration.value?a(this.duration.value):this.player.api("getDuration",function(b){a(b)})})};minplayer=minplayer||{};minplayer.players=minplayer.players||{};minplayer.players.limelight=function(a,b){minplayer.players.flash.call(this,a,b)};minplayer.players.limelight.prototype=new minplayer.players.flash;minplayer.players.limelight.prototype.constructor=minplayer.players.limelight;
minplayer.players.limelight.prototype.construct=function(){minplayer.players.flash.prototype.construct.call(this);this.options.pluginName="limelight"};minplayer.players.limelight.getPriority=function(){return 10};minplayer.players.limelight.canPlay=function(a){return"video/limelight"===a.mimetype?!0:0===a.path.search(/.*limelight\.com.*/i)};minplayer.players.limelight.getMediaId=function(a){var b=/.*limelight\.com.*mediaId=([a-zA-Z0-9]+)/i;return 0===a.path.search(b)?a.path.match(b)[1]:a.path};
minplayer.players.limelight.prototype.register=function(){window.delvePlayerCallback=function(a,b,c){a=a.replace("-player","");jQuery.each(minplayer.get(a,"media"),function(a,e){e.onMediaUpdate(b,c)})}};
minplayer.players.limelight.prototype.onMediaUpdate=function(a,b){switch(a){case "onPlayerLoad":this.onReady();break;case "onMediaLoad":if(this.complete){this.pause();this.onPaused();break}this.shouldSeek=0<this.getSeek();this.onLoaded();break;case "onMediaComplete":this.complete=!0;this.onComplete();break;case "onPlayheadUpdate":if(b.positionInMilliseconds&&!this.playing&&!this.complete)this.onPlaying();this.complete=!1;this.shouldSeek&&this.seekValue?(this.shouldSeek=!1,this.seek(this.seekValue)):
(this.duration.set(b.durationInMilliseconds/1E3),this.currentTime.set(b.positionInMilliseconds/1E3));break;case "onError":this.onError();break;case "onPlayStateChanged":if(b.isPlaying)this.onPlaying();else if(b.isBusy)this.onWaiting();else this.onPaused()}};
minplayer.players.limelight.prototype.createPlayer=function(){minplayer.players.flash.prototype.createPlayer.call(this);var a=document.createElement("script");a.src="https://assets.delvenetworks.com/player/embed.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b);this.register();var a={deepLink:"true",autoplay:this.options.autoplay?"true":"false",startQuality:"HD"},b=null,c=this.options.channel;c||(b=/.*limelight\.com.*channelId=([a-zA-Z0-9]+)/i,0===this.mediaFile.path.search(b)&&
(c=this.mediaFile.path.match(b)[1]));c&&"media"===this.mediaFile.queueType&&(a.adConfigurationChannelId=c);c=this.options.playerForm;c||(b=/.*limelight\.com.*playerForm=([a-zA-Z0-9]+)/i,0===this.mediaFile.path.search(b)&&(c=this.mediaFile.path.match(b)[1]));c&&(a.playerForm=c);a.mediaId=this.mediaFile.id;var d=this.options.id+"-player";setTimeout(function g(){window.hasOwnProperty("LimelightPlayerUtil")?window.LimelightPlayerUtil.initEmbed(d):setTimeout(g,1E3)},1E3);return this.getFlash({swf:"https://assets.delvenetworks.com/player/loader.swf",
id:d,width:this.options.width,height:"100%",flashvars:a,wmode:this.options.wmode})};minplayer.players.limelight.prototype.play=function(a){minplayer.players.flash.prototype.play.call(this,function(){this.player.doPlay();a&&a.call(this)})};minplayer.players.limelight.prototype.pause=function(a){minplayer.players.flash.prototype.pause.call(this,function(){this.player.doPause();a&&a.call(this)})};
minplayer.players.limelight.prototype.stop=function(a){minplayer.players.flash.prototype.stop.call(this,function(){this.player.doPause();a&&a.call(this)})};minplayer.players.limelight.prototype.seek=function(a,b){minplayer.players.flash.prototype.seek.call(this,a,function(){this.seekValue=a;this.player.doSeekToSecond(a);b&&b.call(this)})};minplayer.players.limelight.prototype.setVolume=function(a,b){minplayer.players.flash.prototype.setVolume.call(this,a,function(){this.player.doSetVolume(a);b&&b.call(this)})};
minplayer.players.limelight.prototype.getVolume=function(a){this.whenReady(function(){a(this.player.doGetVolume())})};minplayer.players.limelight.prototype.search=function(a){this.whenReady(function(){this.player.doSearch(a)})};minplayer=minplayer||{};minplayer.players=minplayer.players||{};minplayer.players.kaltura=function(a,b){minplayer.players.base.call(this,a,b)};minplayer.players.kaltura.prototype=new minplayer.players.base;minplayer.players.kaltura.prototype.constructor=minplayer.players.kaltura;
minplayer.players.kaltura.prototype.construct=function(){minplayer.players.base.prototype.construct.call(this);this.options.pluginName="kaltura"};minplayer.players.kaltura.prototype.defaultOptions=function(a){a.entryId=0;a.uiConfId=0;a.partnerId=0;minplayer.players.base.prototype.defaultOptions.call(this,a)};minplayer.players.kaltura.getPriority=function(){return 10};minplayer.players.kaltura.canPlay=function(a){return"video/kaltura"===a.mimetype?!0:0===a.path.search(/.*kaltura\.com.*/i)};
minplayer.players.kaltura.prototype.playerStateChange=function(a){switch(a){case "ready":this.onLoaded();break;case "loading":case "buffering":this.onWaiting();break;case "playing":this.onPlaying();break;case "paused":this.onPaused()}};minplayer.players.kaltura.prototype.mediaReady=function(){this.onLoaded()};minplayer.players.kaltura.prototype.playerPlayEnd=function(a){this.onComplete()};minplayer.players.kaltura.prototype.playUpdate=function(a){this.currentTime.set(a)};
minplayer.players.kaltura.prototype.durationChange=function(a){this.duration.set(a.newValue)};minplayer.players.kaltura.prototype.getInstance=function(){if(this.instanceName)return this.instanceName;var a=this.uuid.split("__"),b="minplayer.plugins."+a[0],b=b+("."+a[1]);return this.instanceName=b+="["+(a[2]-1)+"]"};
minplayer.players.kaltura.prototype.registerEvents=function(){this.player.addJsListener("playerStateChange",this.getInstance()+".playerStateChange");this.player.addJsListener("durationChange",this.getInstance()+".durationChange");this.player.addJsListener("mediaReady",this.getInstance()+".mediaReady");this.player.addJsListener("playerUpdatePlayhead",this.getInstance()+".playUpdate");this.player.addJsListener("playerPlayEnd",this.getInstance()+".playerPlayEnd")};
minplayer.players.kaltura.prototype.createPlayer=function(){minplayer.players.base.prototype.createPlayer.call(this);var a={},b=this;jQuery.each(["entryId","uiConfId","partnerId"],function(c,d){a[d]="";if(b.options[d])a[d]=b.options[d];else{var e=null;switch(d){case "entryId":e=/.*kaltura\.com.*entry_id\/([a-zA-Z0-9_-]+)/i;break;case "uiConfId":e=/.*kaltura\.com.*uiconf_id\/([a-zA-Z0-9_-]+)/i;break;case "partnerId":e=/.*kaltura\.com.*wid\/_([a-zA-Z0-9_-]+)/i}e&&(a[d]=b.mediaFile.path.match(e),a[d]&&
(a[d]=a[d][1]))}});var c=document.createElement("script");c.src="http://cdnapi.kaltura.com/p/";c.src+=a.partnerId;c.src+="/sp/";c.src+=a.partnerId;c.src+="00/embedIframeJs/uiconf_id/";c.src+=a.uiConfId;c.src+="/partner_id/";c.src+=a.partnerId;var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d);var e=this.options.id+"-player";setTimeout(function k(){window.hasOwnProperty("kWidget")?kWidget.embed({targetId:e,wid:"_"+a.partnerId,uiconf_id:a.uiConfId,entry_id:a.entryId,flashvars:{autoPlay:!1},
params:{wmode:"transparent"},readyCallback:function(a){b.player=jQuery("#"+a).get(0);b.registerEvents();b.onReady()}}):setTimeout(k,1E3)},1E3);return'<div id="'+e+'" style="width:100%;height:100%;"></div>'};minplayer.players.kaltura.prototype.play=function(a){minplayer.players.base.prototype.play.call(this,function(){this.player.sendNotification("doPlay");a&&a.call(this)})};
minplayer.players.kaltura.prototype.pause=function(a){minplayer.players.base.prototype.pause.call(this,function(){this.player.sendNotification("doPause");a&&a.call(this)})};minplayer.players.kaltura.prototype.stop=function(a){minplayer.players.base.prototype.stop.call(this,function(){this.player.sendNotification("doStop");a&&a.call(this)})};
minplayer.players.kaltura.prototype.seek=function(a,b){minplayer.players.base.prototype.seek.call(this,a,function(){this.seekValue=a;this.player.sendNotification("doSeek",a);b&&b.call(this)})};minplayer.players.kaltura.prototype.setVolume=function(a,b){minplayer.players.base.prototype.setVolume.call(this,a,function(){this.player.sendNotification("changeVolume",a);b&&b.call(this)})};minplayer=minplayer||{};minplayer.controller=function(a,b){minplayer.display.call(this,"controller",a,b)};
minplayer.controller.prototype=new minplayer.display;minplayer.controller.prototype.constructor=minplayer.controller;minplayer.formatTime=function(a){a=a||0;var b=0,c=0,d=0,e="",d=Math.floor(a/3600);a-=3600*d;c=Math.floor(a/60);b=Math.floor((a-60*c)%60);d&&(e+=String(d),e+=":");e+=10<=c?String(c):"0"+String(c);e=e+":"+(10<=b?String(b):"0"+String(b));return{time:e,units:""}};
minplayer.controller.prototype.getElements=function(){var a=minplayer.display.prototype.getElements.call(this);return jQuery.extend(a,{play:null,pause:null,fullscreen:null,seek:null,progress:null,volume:null,timer:null})};minplayer.controller.prototype.defaultOptions=function(a){a.disptime=0;minplayer.display.prototype.defaultOptions.call(this,a)};
minplayer.controller.prototype.construct=function(){minplayer.display.prototype.construct.call(this);this.options.pluginName="controller";this.dragging=!1;this.vol=0;this.elements.seek&&(this.seekBar=this.elements.seek.slider({range:"min",create:function(a,b){jQuery(".ui-slider-range",a.target).addClass("ui-state-active")}}));this.elements.volume&&(this.volumeBar=this.elements.volume.slider({animate:!0,range:"min",orientation:"vertical"}));this.get("player",function(a){this.elements.fullscreen&&minplayer.click(this.elements.fullscreen.unbind(),
function(){a.toggleFullScreen()}).css({pointer:"hand"})});this.get("media",function(a){a.hasController()?this.hide():(this.elements.pause&&(minplayer.click(this.elements.pause.unbind(),function(b){return function(c){c.preventDefault();b.playPause(!1,a)}}(this)),a.ubind(this.uuid+":pause",function(a){return function(c){a.setPlayPause(!0)}}(this))),this.elements.play&&(minplayer.click(this.elements.play.unbind(),function(b){return function(c){c.preventDefault();b.playPause(!0,a)}}(this)),a.ubind(this.uuid+
":playing",function(a){return function(c){a.setPlayPause(!1)}}(this))),this.elements.duration&&(a.ubind(this.uuid+":durationchange",function(a){return function(c,d){a.setTimeString("duration",a.options.disptime||d.duration)}}(this)),a.getDuration(function(a){return function(c){c=a.options.disptime||c;a.setTimeString("duration",c)}}(this))),this.elements.progress&&a.ubind(this.uuid+":progress",function(a){return function(c,d){a.elements.progress.width((d.total?100*(d.loaded/d.total):0)+"%")}}(this)),
(this.seekBar||this.elements.timer)&&a.ubind(this.uuid+":timeupdate",function(a){return function(c,d){if(!a.dragging){var e=0;d.duration&&(e=100*(d.currentTime/d.duration));a.seekBar&&a.seekBar.slider("option","value",e);a.setTimeString("timer",d.currentTime)}}}(this)),this.seekBar&&this.seekBar.slider({start:function(a){return function(c,d){a.dragging=!0}}(this),stop:function(b){return function(c,d){b.dragging=!1;a.getDuration(function(b){a.seek(d.value/100*b)})}}(this),slide:function(b){return function(c,
d){a.getDuration(function(c){c*=d.value/100;b.dragging||a.seek(c);b.setTimeString("timer",c)})}}(this)}),this.elements.mute&&minplayer.click(this.elements.mute,function(b){return function(c){c.preventDefault();c=b.volumeBar.slider("option","value");0<c?(b.vol=c,b.volumeBar.slider("option","value",0),a.setVolume(0)):(b.volumeBar.slider("option","value",b.vol),a.setVolume(b.vol/100))}}(this)),this.volumeBar&&(this.volumeBar.slider({slide:function(b,c){a.setVolume(c.value/100)}}),a.ubind(this.uuid+":volumeupdate",
function(a){return function(c,d){a.volumeBar.slider("option","value",100*d)}}(this)),a.getVolume(function(a){return function(c){a.volumeBar.slider("option","value",100*c)}}(this))))});this.ready()};minplayer.controller.prototype.setPlayPause=function(a){this.elements.play&&this.elements.play.css("display",a?"inherit":"none");this.elements.pause&&this.elements.pause.css("display",a?"none":"inherit")};
minplayer.controller.prototype.playPause=function(a,b){var c=a?"play":"pause";this.display.trigger(c);this.setPlayPause(!a);if(b)b[c]()};minplayer.controller.prototype.setTimeString=function(a,b){this.elements[a]&&this.elements[a].text(minplayer.formatTime(b).time)};
jQuery.fn.osmplayer||(jQuery.event.special.playerdestroyed={remove:function(a){a.handler&&a.handler(this)}},jQuery.fn.osmplayer=function(a){return jQuery(this).each(function(){a=a||{};a.id=a.id||jQuery(this).attr("id")||Math.random();minplayer.plugins[a.id]||(a.template=a.template||"default",osmplayer[a.template]?new osmplayer[a.template](jQuery(this),a):new osmplayer(jQuery(this),a))})});osmplayer=function(a,b){minplayer.call(this,a,b)};osmplayer.prototype=new minplayer;
osmplayer.prototype.constructor=osmplayer;osmplayer.prototype.create=function(a,b,c){return minplayer.prototype.create.call(this,a,"osmplayer",c)};osmplayer.prototype.defaultOptions=function(a){a.playlist="";a.node={};a.link="http://www.mediafront.org";a.logo="http://mediafront.org/assets/osmplayer/logo.png";minplayer.prototype.defaultOptions.call(this,a)};
osmplayer.prototype.construct=function(){minplayer.prototype.construct.call(this);jQuery(this.display).bind("playerdestroyed",function(a){return function(b){if(b===a.display.eq(0)[0]){for(var c in minplayer.plugins[a.options.id]){for(var d in minplayer.plugins[a.options.id][c])minplayer.plugins[a.options.id][c][d].destroy(),delete minplayer.plugins[a.options.id][c][d];minplayer.plugins[a.options.id][c].length=0}delete minplayer.plugins[a.options.id];minplayer.plugins[a.options.id]=null}}}(this));
this.playQueue=[];this.playIndex=0;this.hasPlaylist=!1;this.create("playlist","osmplayer");this.get("playlist",function(a){this.hasPlaylist=!0;a.ubind(this.uuid+":nodeLoad",function(a){return function(c,d){a.loadNode(d)}}(this))});this.get("media",function(a){a.ubind(this.uuid+":ended",function(a){return function(){a.options.autoplay=!0;a.playNext()}}(this))});this.options.node&&this.loadNode(this.options.node)};osmplayer.prototype.fullScreenElement=function(){return this.elements.minplayer};
osmplayer.prototype.reset=function(a){this.playQueue.length=0;this.playQueue=[];this.playIndex=0;this.playLoader&&this.options.preview?(this.options.preview="",this.playLoader.clear(function(b){return function(){a.call(b)}}(this))):a&&a.call(this)};
osmplayer.prototype.loadNode=function(a){if(!a||a.hasOwnProperty("length")&&0===a.length)return!1;this.reset(function(){this.hasMedia=a&&a.mediafiles&&a.mediafiles.media;if(a&&a.mediafiles){var b=a.mediafiles.media;if(b){var c=null,d=[],d=minplayer.isAndroid||minplayer.isIDevice?["media"]:["intro","commercial","prereel","media","postreel"];jQuery.each(d,function(a){return function(d,k){if(c=a.addToQueue(b[k]))c.queueType=k}}(this))}else this.display.addClass("nomedia");this.playNext();osmplayer.getImage(a.mediafiles,
"preview",function(a){return function(b){a.playLoader&&0<a.playLoader.display.length&&(a.playLoader.enabled=!0,a.playLoader.loadPreview(b.path),a.playLoader.previewFlag.setFlag("media",!0),a.hasMedia||(a.playLoader.busy.setFlag("media",!1),a.playLoader.bigPlay.setFlag("media",!1)),a.playLoader.checkVisibility())}}(this))}})};osmplayer.prototype.addToQueue=function(a){(a=minplayer.getMediaFile(a))&&this.playQueue.push(a);return a};
osmplayer.prototype.playNext=function(){this.playQueue.length>this.playIndex?(this.load(this.playQueue[this.playIndex]),this.playIndex++):this.options.repeat?(this.playIndex=0,this.playNext()):0<this.playQueue.length?this.hasPlaylist&&this.options.autoNext?this.trigger("player_ended"):(this.options.autoplay=!1,this.playIndex=0,this.playNext()):this.media&&(this.media.stop(),this.hasMedia||this.media.clear())};
osmplayer.getNode=function(a,b){if(a&&a.mediafiles&&a.mediafiles.media){var c=minplayer.getMediaFile(a.mediafiles.media.media);if(c){var d=minplayer.players[c.player];d&&"function"===typeof d.getNode&&d.getNode(c,function(a){b(a)})}}};
osmplayer.getImage=function(a,b,c){var d="",e=a.image;if(e)if(e[b])d=e[b];else if(e.image)d=e.image;else for(b in e)if(e.hasOwnProperty(b)){d=e[b];break}d?c(new minplayer.file(d)):(a=minplayer.getMediaFile(a.media.media))&&(d=minplayer.players[a.player])&&"function"===typeof d.getImage&&d.getImage(a,b,function(a){c(new minplayer.file(a))})};var osmplayer=osmplayer||{};osmplayer.parser=osmplayer.parser||{};
osmplayer.parser["default"]={priority:1,valid:function(a){return!0},getType:function(a){return"json"},getFeed:function(a,b,c){a=a.replace(/(.*)\??(.*)/i,"$1");return a=a+("?start-index="+b)+("&max-results="+c)},parse:function(a){return a}};osmplayer=osmplayer||{};osmplayer.parser=osmplayer.parser||{};
osmplayer.parser.youtube={priority:10,valid:function(a){return 0===a.search(/^http(s)?\:\/\/gdata\.youtube\.com/i)},getType:function(a){return"jsonp"},getFeed:function(a,b,c){a=a.replace(/(.*)\??(.*)/i,"$1");a=a+("?start-index="+(b+1))+("&max-results="+c);return a+="&v=2&alt=jsonc"},parse:function(a){a=a.data;var b={total_rows:a.totalItems,nodes:[]},c=null,d;for(d in a.items)a.items.hasOwnProperty(d)&&(c=minplayer.players.youtube.parseNode(a.items[d]),b.nodes.push(c));return b}};
osmplayer=osmplayer||{};osmplayer.parser=osmplayer.parser||{};
osmplayer.parser.rss={priority:8,valid:function(a){a=a.replace(/(.*)\??(.*)/i,"$1");return null!==a.match(/\.rss$/i)},getType:function(a){return"xml"},getFeed:function(a,b,c){return a},parse:function(a){var b={total_rows:0,nodes:[]};jQuery("rss channel",a).find("item").each(function(a){osmplayer.parser.rss.addRSSItem(b,jQuery(this))});return b},addRSSItem:function(a,b){a.total_rows++;var c={},d="",d=d=d="",d=b.find("title");d.length&&(c.title=d.text());d=b.find("annotation");d.length&&(c.description=
d.text());c.mediafiles={};d=b.find("image");d.length&&(c.mediafiles.image={image:{path:d.text()}});d=b.find("location");d.length&&(c.mediafiles.media={media:{path:d.text()}});a.nodes.push(c)}};osmplayer=osmplayer||{};osmplayer.parser=osmplayer.parser||{};
osmplayer.parser.asx={priority:8,valid:function(a){a=a.replace(/(.*)\??(.*)/i,"$1");return null!==a.match(/\.asx$/i)},getType:function(a){return"xml"},getFeed:function(a,b,c){return a},parse:function(a){var b={total_rows:0,nodes:[]};jQuery("asx entry",a).each(function(a){osmplayer.parser.rss.addRSSItem(b,jQuery(this))});return b}};osmplayer=osmplayer||{};osmplayer.parser=osmplayer.parser||{};
osmplayer.parser.xsfp={priority:8,valid:function(a){a=a.replace(/(.*)\??(.*)/i,"$1");return null!==a.match(/\.xml$/i)},getType:function(a){return"xml"},getFeed:function(a,b,c){return a},parse:function(a){var b={total_rows:0,nodes:[]};jQuery("playlist trackList track",a).each(function(a){osmplayer.parser.rss.addRSSItem(b,jQuery(this))});return b}};osmplayer=osmplayer||{};osmplayer.playlist=function(a,b){minplayer.display.call(this,"playlist",a,b)};osmplayer.playlist.prototype=new minplayer.display;
osmplayer.playlist.prototype.constructor=osmplayer.playlist;osmplayer.playlist.prototype.defaultOptions=function(a){a.vertical=!0;a.playlist="";a.pageLimit=10;a.autoNext=!0;a.shuffle=!1;a.loop=!1;a.hysteresis=40;a.scrollSpeed=20;a.scrollMode="auto";minplayer.display.prototype.defaultOptions.call(this,a)};
osmplayer.playlist.prototype.construct=function(){this.nodes=[];this.page=-1;this.totalItems=0;this.currentItem=-1;this.playqueue=[];this.playqueuepos=0;this.playlist=this.options.playlist;this.scroll=null;this.orient={pos:this.options.vertical?"y":"x",pagePos:this.options.vertical?"pageY":"pageX",offset:this.options.vertical?"top":"left",wrapperSize:this.options.vertical?"wrapperH":"wrapperW",minScroll:this.options.vertical?"minScrollY":"minScrollX",maxScroll:this.options.vertical?"maxScrollY":"maxScrollX",
size:this.options.vertical?"height":"width"};this.pager=this.create("pager","osmplayer");this.pager.ubind(this.uuid+":nextPage",function(a){return function(b){a.nextPage()}}(this));this.pager.ubind(this.uuid+":prevPage",function(a){return function(b){a.prevPage()}}(this));minplayer.display.prototype.construct.call(this);this.hasPlaylist=this.next();this.ready()};
osmplayer.playlist.prototype.onAdded=function(a){this.options.autoNext&&a.get("player",function(a){return function(c){c.ubind(a.uuid+":player_ended",function(d){a.hasPlaylist&&(c.options.autoplay=!0,a.next())})}}(this))};osmplayer.playlist.prototype.scrollTo=function(a,b){this.scroll&&(this.scroll.options.hideScrollbar=!1,this.options.vertical?this.scroll.scrollTo(0,a,0,b):this.scroll.scrollTo(a,0,0,b),this.scroll.options.hideScrollbar=!0)};
osmplayer.playlist.prototype.refreshScroll=function(){if(window.addEventListener){var a=this.elements.list,b=this.elements.scroll;this.scroll&&(this.scroll.scrollTo(0,0),this.scroll.destroy(),this.scroll=null,this.elements.list.unbind("mousemove").unbind("mouseenter").unbind("mouseleave"));if(!this.options.vertical){var c=0;jQuery.each(this.elements.list.children(),function(){c+=jQuery(this).outerWidth()});this.elements.list.width(c)}0<a.length&&0<b.length&&a[this.orient.size]()>b[this.orient.size]()&&
(this.scroll=new iScroll(this.elements.scroll.eq(0)[0],{hScroll:!this.options.vertical,hScrollbar:!this.options.vertical,vScroll:this.options.vertical,vScrollbar:this.options.vertical,hideScrollbar:"none"!==this.options.scrollMode}),"auto"!=this.options.scrollMode||minplayer.hasTouch||this.elements.list.bind("mousemove",function(a){return function(b){b.preventDefault();var c=a.display.offset()[a.orient.offset];a.mousePos=b[a.orient.pagePos];a.mousePos-=c}}(this)).bind("mouseenter",function(a){return function(b){b.preventDefault();
a.scrolling=!0;var c=function(){if(a.scrolling){var b=a.scroll[a.orient.wrapperSize]/2,e=a.mousePos-b;if(Math.abs(e)>a.options.hysteresis){var l=a.options.hysteresis,e=a.options.scrollSpeed*(e+l*(0<e?-1:0)),e=e/b,b=a.scroll[a.orient.pos]-e,l=a.scroll[a.orient.minScroll]||0,q=a.scroll[a.orient.maxScroll];b>=l?a.scrollTo(l):b<=q?a.scrollTo(q):a.scrollTo(e,!0)}setTimeout(c,30)}};c()}}(this)).bind("mouseleave",function(a){return function(b){b.preventDefault();a.scrolling=!1}}(this)),this.scroll.refresh(),
this.scroll.scrollTo(0,0,200))}else setTimeout(function(a){return function(){a.refreshScroll.call(a)}}(this),200)};osmplayer.playlist.prototype.addNode=function(a){var b=this.nodes.length,c=this.create("teaser","osmplayer",this.elements.list);c.setNode(a);c.ubind(this.uuid+":nodeLoad",function(a){return function(c,g){a.loadItem(b)}}(this));this.nodes.push(c)};
osmplayer.playlist.prototype.set=function(a,b){if("object"!==typeof a)this.trigger("error","Playlist must be an object to set");else if(a.hasOwnProperty("total_rows")){if(a.total_rows&&a.nodes.length){this.totalItems=a.total_rows;this.currentItem=0;(this.page+1)*this.options.pageLimit>=this.totalItems||this.totalItems==a.nodes.length?this.pager.nextPage.hide():this.pager.nextPage.show();var c=a.nodes.length;this.elements.list.empty();this.nodes=[];for(var d=0;d<c;d++)this.addNode(a.nodes[d]),b===
d&&this.loadItem(d);this.refreshScroll();this.trigger("playlistLoad",a)}this.elements.playlist_busy&&this.elements.playlist_busy.hide()}else this.trigger("error","Unknown playlist format.")};osmplayer.playlist.prototype.setQueue=function(){this.playqueue.push({page:this.page,item:this.currentItem});this.playqueuepos=this.playqueue.length};
osmplayer.playlist.prototype.next=function(){var a=0,b=this.page;if(this.playqueuepos>=this.playqueue.length){if(this.options.shuffle)return a=Math.floor(Math.random()*this.totalItems),b=Math.floor(a/this.options.pageLimit),a%=this.options.pageLimit,this.load(b,a);a=this.currentItem+1;return a>=this.nodes.length?this.load(b+1,0):this.loadItem(a)}this.playqueuepos+=1;a=this.playqueue[this.playqueuepos];return this.load(a.page,a.item)};
osmplayer.playlist.prototype.prev=function(){this.playqueuepos-=1;this.playqueuepos=0>this.playqueuepos?0:this.playqueuepos;var a=this.playqueue[this.playqueuepos];return a?this.load(a.page,a.item):!1};osmplayer.playlist.prototype.loadItem=function(a){if(a<this.nodes.length){this.setQueue();var b=this.nodes[this.currentItem];b.select(!1);this.currentItem=a;b=this.nodes[a];b.select(!0);this.trigger("nodeLoad",b.node);return!0}return!1};
osmplayer.playlist.prototype.nextPage=function(a){return this.load(this.page+1,a)};osmplayer.playlist.prototype.prevPage=function(a){return this.load(this.page-1,a)};
osmplayer.playlist.prototype.load=function(a,b){if(this.playlist==this.options.playlist&&a==this.page)return this.loadItem(b);this.playlist=this.options.playlist;if(!this.playlist)return!1;if(a>Math.floor(this.totalItems/this.options.pageLimit))if(this.options.loop)b=a=0;else return!1;this.elements.playlist_busy&&this.elements.playlist_busy.show();a=a||0;a=0>a?0:a;this.setQueue();this.page=a;0===this.page?this.pager.prevPage.hide():this.pager.prevPage.show();if("object"==typeof this.playlist)return this.set(this.playlist,
b),this.playlist.endpoint&&(this.playlist=this.options.playlist=this.playlist.endpoint),!0;var c=osmplayer.parser["default"],d;for(d in osmplayer.parser)osmplayer.parser.hasOwnProperty(d)&&osmplayer.parser[d].valid(this.playlist)&&osmplayer.parser[d].priority>c.priority&&(c=osmplayer.parser[d]);d={type:"GET",url:c.getFeed(this.playlist,this.page*this.options.pageLimit,this.options.pageLimit),success:function(a){return function(d){a.set(c.parse(d),b)}}(this),error:function(a){return function(b,c,d){a.elements.playlist_busy&&
a.elements.playlist_busy.hide();a.trigger("error",c)}}(this)};var e=c.getType();e&&(d.dataType=e);jQuery.ajax(d);return!0};osmplayer=osmplayer||{};osmplayer.pager=function(a,b){minplayer.display.call(this,"pager",a,b)};osmplayer.pager.prototype=new minplayer.display;osmplayer.pager.prototype.constructor=osmplayer.pager;
osmplayer.pager.prototype.construct=function(){minplayer.display.prototype.construct.call(this);this.elements.prevPage&&(this.prevPage=this.elements.prevPage.click(function(a){return function(b){b.preventDefault();a.trigger("prevPage")}}(this)));this.elements.nextPage&&(this.nextPage=this.elements.nextPage.click(function(a){return function(b){b.preventDefault();a.trigger("nextPage")}}(this)))};osmplayer=osmplayer||{};
osmplayer.teaser=function(a,b){this.preview=null;minplayer.display.call(this,"teaser",a,b)};osmplayer.teaser.prototype=new minplayer.display;osmplayer.teaser.prototype.constructor=osmplayer.teaser;osmplayer.teaser.prototype.select=function(a){};
osmplayer.teaser.prototype.setNode=function(a){this.node=a;this.elements.title&&(a.title?this.elements.title.text(a.title):osmplayer.getNode(a,function(a){return function(c){a.elements.title.text(c.title)}}(this)));a.mediafiles&&osmplayer.getImage(a.mediafiles,"thumbnail",function(a){return function(c){c&&a.elements.image&&(a.preview=new minplayer.image(a.elements.image),a.preview.load(c.path))}}(this));this.display.unbind("click").click(function(a){return function(c){c.preventDefault();a.trigger("nodeLoad",
a.node)}}(this))};
;
(function(template, osmplayer) {

  /** The osmplayer namespace. */
  var osmplayer = osmplayer || {};

  // templated player.
  osmplayer[template] = function(context, options) {

    // Make sure we provide default options...
    this.options = jQuery.extend({
      controllerOnly: false
    }, this.options);

    // Derive from osmplayer.
    osmplayer.call(this, context, options);
  };

  /**
   * Define this template prototype.
   */
  osmplayer[template].prototype = new osmplayer();
  osmplayer[template].prototype.constructor = osmplayer[template];

  /**
   * The player constructor.
   */
  osmplayer[template].prototype.construct = function() {
    osmplayer.prototype.construct.call(this);
    if (this.options.controllerOnly) {
      this.display.addClass('controller-only');
    }
  };

  /**
   * The load node function.
   *
   * @param {object} node A media node object.
   * @return {boolean} If the node was loaded.
   */
  osmplayer[template].prototype.loadNode = function(node) {

    // Make sure this is a valid node.
    if (!node || (node.hasOwnProperty('length') && (node.length === 0))) {
      return false;
    }

    // Reset the player.
    this.reset(function() {

      // Set the hasMedia flag.
      this.hasMedia = node && node.mediafiles && node.mediafiles.media;

      // If this node is set and has files.
      if (node && node.mediafiles) {

        // Load the media files.
        var media = node.mediafiles.media;
        if (media) {
          var file = null;
          var types = [];

          // For mobile devices, we should only show the main media.
          if (minplayer.isAndroid || minplayer.isIDevice) {
            types = ['media'];
          }
          else {
            types = ['intro', 'commercial', 'prereel', 'media', 'postreel'];
          }

          // Iterate through the types.
          jQuery.each(types, (function(player) {
            return function(key, type) {
              file = player.addToQueue(media[type]);
              if (file) {
                file.queueType = type;
              }
            };
          })(this));
        }
        else {

          // Add a class to the display to let themes handle this.
          this.display.addClass('nomedia');
        }

        // Set the title of the player.
        if (this.elements.title) {
          this.elements.title.text(node.title);
        }
        // Set the description.    
        if (this.elements.description && node.description) {
          this.elements.description.text(node.description);
        }

        // Play the next media
        this.playNext();

        // Load the preview image.
        // osmplayer.getImage(node.mediafiles, 'preview', (function(player) {
        //   return function(image) {
        //     if (player.playLoader && (player.playLoader.display.length > 0)) {
        //       player.playLoader.enabled = true;
        //       player.playLoader.loadPreview(image.path);
        //       player.playLoader.previewFlag.setFlag('media', true);
        //       if (!player.hasMedia) {
        //         player.playLoader.busy.setFlag('media', false);
        //         player.playLoader.bigPlay.setFlag('media', false);
        //       }
        //       player.playLoader.checkVisibility();
        //     }
        //   };
        // })(this));
      }
    });
  };

  /**
   * Return the display for this plugin.
   */
  osmplayer[template].prototype.getDisplay = function() {

    // If this is the bottom element, then we need to build.
    if (this.context.children().length == 0) {

      // Build out the player provided the base tag.
      this.context = this.context.attr({
        'id': this.options.id + '-player',
        'class': 'minplayer-' + template + '-media'
      })
      .wrap(jQuery(document.createElement('div')).attr({
        'class': 'minplayer-' + template + '-display ui-widget-content'
      })).parent('.minplayer-' + template + '-display')
      .wrap(jQuery(document.createElement('div')).attr({
        'class': 'minplayer-' + template
      })).parent('.minplayer-' + template)
      .prepend('\
        <div class="minplayer-' + template + '-error"></div>\
        <h2 class="minplayer-' + template + '-title"></h2>\
        <div class="minplayer-' + template + '-description"></div>'
      )
      .wrap(jQuery(document.createElement('div')).attr({
        'id': this.options.id,
        'class': 'osmplayer-' + template + ' player-ui'
      })).parent('.osmplayer-' + template);

      // Mark a flag that says this display needs to be built.
      this.options.build = true;
    }

    return this.context;
  }

  // Get the elements for this player.
  osmplayer[template].prototype.getElements = function() {
    var elements = osmplayer.prototype.getElements.call(this);

    // Set the width and height of this element.
    this.display.width(this.options.width);
    this.display.height(this.options.height);

    // Get the minplayer component.
    var minplayer = jQuery('.minplayer-' + template, this.display);
    if (this.options.playlistOnly) {
      minplayer.remove();
      minplayer = null;
    }

    // Get the playlist component.
    var playlist = jQuery('.osmplayer-' + template + '-playlist', this.display);
    if (this.options.disablePlaylist) {
      playlist.remove();
      playlist = null;
    }

    return jQuery.extend(elements, {
      player:this.display,
      minplayer: minplayer,
      display:jQuery('.minplayer-' + template + '-display', this.display),
      media:jQuery('.minplayer-' + template + '-media', this.display),
      error:jQuery('.minplayer-' + template + '-error', this.display),
      title:jQuery('.minplayer-' + template + '-title', this.display),
      description:jQuery('.minplayer-' + template + '-description', this.display),
      playlist: playlist
    });
  };
})('alljoyn', osmplayer);
;
(function(template, osmplayer) {

  /** The osmplayer namespace. */
  var osmplayer = osmplayer || {};

  // Define the controller object.
  osmplayer.controller = osmplayer.controller || {};

  /**
   * Constructor for the minplayer.controller
   */
  osmplayer.controller[template] = function(context, options) {

    // Derive from default controller
    //minplayer.controller.call(this, context, options);
  };

  /** Derive from controller. */
  osmplayer.controller[template].prototype = new minplayer.controller();
  osmplayer.controller[template].prototype.constructor = osmplayer.controller[template];

  /**
   * @see minplayer.plugin#construct
   */
  osmplayer.controller[template].prototype.construct = function() { }

  /**
   * Return the display for this plugin.
   */
  osmplayer.controller[template].prototype.getDisplay = function() { }

  // Return the elements
  osmplayer.controller[template].prototype.getElements = function() { }
})('alljoyn', osmplayer);
;
(function(template, osmplayer) {
  /** The osmplayer namespace. */
  var osmplayer = osmplayer || {};
  
  // constructor.
  osmplayer.image = function(context, options) {
  
    // Determine if the image is loaded.
    this.loaded = false;
  
    // The image loader.
    this.loader = null;
  
    // The ratio of the image.
    this.ratio = 0;
  
    // The image element.
    this.img = null;
  
    // Derive from display
    minplayer.display.call(this, 'image', context, options);
    
  };
    
  /** Derive from minplayer.display. */
  osmplayer.image.prototype = new minplayer.display();
  osmplayer.image.prototype.constructor = osmplayer.image;

  /**
   * @see minplayer.plugin#construct
   */
  osmplayer.image.prototype.construct = function() {

    // Call the media display constructor.
    minplayer.display.prototype.construct.call(this);
  
    // Set the plugin name within the options.
    this.options.pluginName = 'image';

    // Set the container to not show any overflow...
    this.display.css('overflow', 'hidden');
  
    /** The loader for the image. */
    this.loader = new Image();
  
    /** Register for when the image is loaded within the loader. */
    this.loader.onload = (function(image) {
      return function() {
        image.loaded = true;
        image.ratio = (image.loader.width / image.loader.height);
        image.img.fadeIn();
        image.trigger('loaded');
      };
    })(this);
  
    // We are now ready.
    this.ready();
  }
  /**
   * Loads an image.
   *
   * @param {string} src The source of the image to load.
   */
  osmplayer.image.prototype.load = function(src) {
  
    // First clear the previous image.
    this.clear(function() {
  
      // Create the new image, and append to the display.
      this.display.empty();
      this.img = jQuery(document.createElement('img')).attr({src: ''}).hide();
      this.display.append(this.img);
      this.loader.src = src;
      this.img.attr('src', src);
    });
  };

  /**
   * Clears an image.
   *
   * @param {function} callback Called when the image is done clearing.
   */
  osmplayer.image.prototype.clear = function(callback) {
    this.loaded = false;
    if (this.img) {
      this.img.fadeOut(150, (function(image) {
        return function() {
          image.img.attr('src', '');
          image.loader.src = '';
          jQuery(this).remove();
          if (callback) {
            callback.call(image);
          }
        };
      })(this));
    }
    else if (callback) {
      callback.call(this);
    }
  }; 

  /**
   * @see minplayer.display#onResize
   */
  osmplayer.image.prototype.onResize = function() {
  
    // Resize the image to fit.
    //this.resize();
  };

})('alljoyn', osmplayer);;
(function(template, osmplayer) {

  /** The osmplayer namespace. */
  var osmplayer = osmplayer || {};

  // Define the busy object.
  osmplayer.pager = osmplayer.pager || {};

  // constructor.
  osmplayer.pager[template] = function(context, options) {

    // Derive from pager
    osmplayer.pager.call(this, context, options);
  };

  // Define the prototype for all controllers.
  osmplayer.pager[template].prototype = new osmplayer.pager();
  osmplayer.pager[template].prototype.constructor = osmplayer.pager[template];

  /**
   * Return the display for this plugin.
   */
  osmplayer.pager[template].prototype.getDisplay = function() {

    if (this.options.build) {

      // append the pager.
      this.context.append('\
      <div class="osmplayer-' + template + '-playlist-pager ui-widget-header">\
        <div class="osmplayer-' + template + '-playlist-pager-left">\
          <a href="#" class="osmplayer-' + template + '-playlist-pager-link osmplayer-' + template + '-playlist-pager-prevpage minplayer-' + template + '-button ui-state-default ui-corner-all">\
            <span class="ui-icon ui-icon-circle-triangle-w"></span>\
          </a>\
        </div>\
        <div class="osmplayer-' + template + '-playlist-pager-right">\
          <a href="#" class="osmplayer-' + template + '-playlist-pager-link osmplayer-' + template + '-playlist-pager-nextpage minplayer-' + template + '-button ui-state-default ui-corner-all">\
            <span class="ui-icon ui-icon-circle-triangle-e"></span>\
          </a>\
        </div>\
      </div>');
    }

    return jQuery('.osmplayer-' + template + '-playlist-pager', this.context);
  }

  // Return the elements
  osmplayer.pager[template].prototype.getElements = function() {
    var elements = osmplayer.pager.prototype.getElements.call(this);
    return jQuery.extend(elements, {
      prevPage:jQuery('.osmplayer-' + template + '-playlist-pager-prevpage', this.display),
      nextPage:jQuery('.osmplayer-' + template + '-playlist-pager-nextpage', this.display)
    });
  };
})('alljoyn', osmplayer);

;
(function(template, osmplayer) {

  /** The osmplayer namespace. */
  var osmplayer = osmplayer || {};

  // Define the busy object.
  osmplayer.playLoader = osmplayer.playLoader || {};

  // constructor.
  osmplayer.playLoader[template] = function(context, options) {

    // Derive from playLoader
    minplayer.playLoader.call(this, context, options);
  };

  // Define the prototype for all controllers.
  osmplayer.playLoader[template].prototype = new minplayer.playLoader();
  osmplayer.playLoader[template].prototype.constructor = osmplayer.playLoader[template];

  /**
   * Return the display for this plugin.
   */
  osmplayer.playLoader[template].prototype.getDisplay = function() {

    // See if we need to build out the controller.
    if (this.options.build) {

      // Prepend the playloader template.
      jQuery('.minplayer-' + template + '', this.context).prepend('\
      <div class="minplayer-' + template + '-loader-wrapper">\
        <div class="minplayer-' + template + '-loader">&nbsp;</div>\
      </div>');
    }

    return jQuery('.minplayer-' + template + ' .minplayer-' + template + '-loader-wrapper', this.context);
  }

  // Return the elements
  osmplayer.playLoader[template].prototype.getElements = function() {
    var elements = minplayer.playLoader.prototype.getElements.call(this);
    return jQuery.extend(elements, {
      busy:jQuery('.minplayer-' + template + '-loader', this.display),
/*       bigPlay:jQuery('.minplayer-' + template + '-big-play', this.display), */
/*       preview:jQuery('.minplayer-' + template + '-preview', this.display) */
    });
  };
})('alljoyn', osmplayer);

;
/** The minplayer namespace. */
var osmplayer = osmplayer || {};

/** All the media player implementations */
osmplayer.players = minplayer.players || {};

/**
 * @constructor
 * @extends minplayer.players.base
 * @class The YouTube media player.
 *
 * @param {object} context The jQuery context.
 * @param {object} options This components options.
 * @param {object} queue The event queue to pass events around.
 */
osmplayer.players.youtube = function(context, options, queue) {

  /** The quality of the YouTube stream. */
  this.quality = 'default';

  // Derive from players base.
  minplayer.players.base.call(this, context, options, queue);
};

/** Derive from minplayer.players.base. */
osmplayer.players.youtube.prototype = new minplayer.players.base();

/** Reset the constructor. */
osmplayer.players.youtube.prototype.constructor = minplayer.players.youtube;

/**
 * @see minplayer.plugin.construct
 * @this minplayer.players.youtube
 */
osmplayer.players.youtube.prototype.construct = function() {

  // Call the players.flash constructor.
  minplayer.players.base.prototype.construct.call(this);

  // Set the plugin name within the options.
  this.options.pluginName = 'youtube';
};

/**
 * @see minplayer.players.base#getPriority
 *
 * @param {object} file A {@link minplayer.file} object.
 * @return {number} The priority of this media player.
 */
osmplayer.players.youtube.getPriority = function(file) {
  return 10;
};

/**
 * @see minplayer.players.base#canPlay
 *
 * @param {object} file A {@link minplayer.file} object.
 * @return {boolean} If this player can play this media type.
 */
osmplayer.players.youtube.canPlay = function(file) {

  // Check for the mimetype for youtube.
  if (file.mimetype === 'video/youtube') {
    return true;
  }

  // If the path is a YouTube path, then return true.
  var regex = /^http(s)?\:\/\/(www\.)?(youtube\.com|youtu\.be)/i;
  return (file.path.search(regex) === 0);
};

/**
 * Return the ID for a provided media file.
 *
 * @param {object} file A {@link minplayer.file} object.
 * @return {string} The ID for the provided media.
 */
osmplayer.players.youtube.getMediaId = function(file) {
  var regex = '^http[s]?\\:\\/\\/(www\\.)?';
  regex += '(youtube\\.com\\/watch\\?v=|youtu\\.be\\/)';
  regex += '([a-zA-Z0-9_\\-]+)';
  var reg = RegExp(regex, 'i');

  // Locate the media id.
  if (file.path.search(reg) === 0) {
    return file.path.match(reg)[3];
  }
  else {
    return file.path;
  }
};

/**
 * Returns a preview image for this media player.
 *
 * @param {object} file A {@link minplayer.file} object.
 * @param {string} type The type of image.
 * @param {function} callback Called when the image is retrieved.
 */
osmplayer.players.youtube.getImage = function(file, type, callback) {
  type = (type === 'thumbnail') ? '1' : '0';
  // This image doesn't have the letterboxing
  type = "mqdefault";
  callback('https://img.youtube.com/vi/' + file.id + '/' + type + '.jpg');
};

/**
 * Parse a single playlist node.
 *
 * @param {object} item The youtube item.
 * @return {object} The mediafront node.
 */
osmplayer.players.youtube.parseNode = function(item) {
  var node = (typeof item.video !== 'undefined') ? item.video : item;
  return {
    title: node.title,
    description: node.description,
    mediafiles: {
      image: {
        'thumbnail': {
          path: node.thumbnail.sqDefault
        },
        'image': {
          path: node.thumbnail.hqDefault
        }
      },
      media: {
        'media': {
          player: 'youtube',
          id: node.id
        }
      }
    }
  };
};

/**
 * Returns information about this youtube video.
 *
 * @param {object} file The file to load.
 * @param {function} callback Called when the node is loaded.
 */
osmplayer.players.youtube.getNode = function(file, callback) {
  var url = 'https://gdata.youtube.com/feeds/api/videos/' + file.id;
  url += '?v=2&alt=jsonc';
  jQuery.get(url, function(data) {
    callback(minplayer.players.youtube.parseNode(data.data));
  });
};

/**
 * Translates the player state for the YouTube API player.
 *
 * @param {number} playerState The YouTube player state.
 */
osmplayer.players.youtube.prototype.setPlayerState = function(playerState) {
  switch (playerState) {
    case YT.PlayerState.CUED:
      break;
    case YT.PlayerState.BUFFERING:
      this.onWaiting();
      break;
    case YT.PlayerState.PAUSED:
      this.onPaused();
      break;
    case YT.PlayerState.PLAYING:
      this.onPlaying();
      break;
    case YT.PlayerState.ENDED:
      this.onComplete();
      break;
    default:
      break;
  }
};

/**
 * Called when an error occurs.
 *
 * @param {string} event The onReady event that was triggered.
 */
osmplayer.players.youtube.prototype.onReady = function(event) {
  minplayer.players.base.prototype.onReady.call(this);
  if (!this.options.autoplay) {
    this.pause();
  }
  this.onLoaded();
};

/**
 * Checks to see if this player can be found.
 * @return {bool} TRUE - Player is found, FALSE - otherwise.
 */
osmplayer.players.youtube.prototype.playerFound = function() {
  var id = 'iframe#' + this.options.id + '-player.youtube-player';
  var iframe = this.display.find(id);
  return (iframe.length > 0);
};

/**
 * Called when the player state changes.
 *
 * @param {object} event A JavaScript Event.
 */
osmplayer.players.youtube.prototype.onPlayerStateChange = function(event) {
  this.setPlayerState(event.data);
};

/**
 * Called when the player quality changes.
 *
 * @param {string} newQuality The new quality for the change.
 */
osmplayer.players.youtube.prototype.onQualityChange = function(newQuality) {
  this.quality = newQuality.data;
};

/**
 * Determines if the player should show the playloader.
 *
 * @param {string} preview The preview image.
 * @return {bool} If this player implements its own playLoader.
 */
osmplayer.players.youtube.prototype.hasPlayLoader = function(preview) {
  if (!preview) {
    return true;
  } else {
    return false;
  }
};

/**
 * Determines if the player should show the controller.
 *
 * @return {bool} If this player implements its own playLoader.
 */
osmplayer.players.youtube.prototype.hasController = function() {
  //return minplayer.isIDevice;
  return true;
};

/**
 * @see minplayer.players.base#create
 * @return {object} The media player entity.
 */
osmplayer.players.youtube.prototype.createPlayer = function() {
  minplayer.players.base.prototype.createPlayer.call(this);

  // Insert the YouTube iframe API player.
  var youtube_script = 'https://www.youtube.com/player_api';
  if (jQuery('script[src="' + youtube_script + '"]').length === 0) {
    var tag = document.createElement('script');
    tag.src = youtube_script;
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  // Get the player ID.
  this.playerId = this.options.id + '-player';

  // Poll until the YouTube API is ready.
  this.poll(this.options.id + '_youtube', (function(player) {
    return function() {
      var ready = jQuery('#' + player.playerId).length > 0;
      ready = ready && ('YT' in window);
      ready = ready && (typeof YT.Player === 'function');
      if (ready) {
        // Determine the origin of this script.
        jQuery('#' + player.playerId).addClass('youtube-player');
        var origin = location.protocol;
        origin += '//' + location.hostname;
        origin += (location.port && ':' + location.port);

        var playerVars = {
              wmode: 'opaque',
        };
/*         if (minplayer.isIDevice) { */
          playerVars.origin = origin;
/*         } */
/*
          else {
            playerVars = {
              enablejsapi: minplayer.isIDevice ? 0 : 1,
              origin: origin,
              wmode: 'opaque',
              controls: minplayer.isAndroid ? 1 : 0
            };
          }
*/

        // Create the player.
        player.player = new YT.Player(player.playerId, {
          height: '100%',
          width: '100%',
          frameborder: 0,
          videoId: player.mediaFile.id,
          playerVars: playerVars,
          events: {
            'onReady': function(event) {
              player.onReady(event);
            },
            'onStateChange': function(event) {
              player.onPlayerStateChange(event);
            },
            'onPlaybackQualityChange': function(newQuality) {
              player.onQualityChange(newQuality);
            },
            'onError': function(errorCode) {
              player.onError(errorCode);
            }
          }
        });
      }
      return !ready;
    };
  })(this), 200);

  // Return the player.
  return jQuery(document.createElement('div')).attr({
    id: this.playerId
  });
};

/**
 * @see minplayer.players.base#load
 */
osmplayer.players.youtube.prototype.load = function(file, callback) {
  minplayer.players.base.prototype.load.call(this, file, function() {
    this.player.loadVideoById(file.id, 0, this.quality);
    if (callback) {
      callback.call(this);
    }
  });
};

/**
 * @see minplayer.players.base#play
 */
osmplayer.players.youtube.prototype.play = function(callback) {
  minplayer.players.base.prototype.play.call(this, function() {
    this.onWaiting();
    this.player.playVideo();
    if (callback) {
      callback.call(this);
    }
  });
};

/**
 * @see minplayer.players.base#pause
 */
osmplayer.players.youtube.prototype.pause = function(callback) {
  minplayer.players.base.prototype.pause.call(this, function() {
    this.player.pauseVideo();
    if (callback) {
      callback.call(this);
    }
  });
};

/**
 * @see minplayer.players.base#stop
 */
osmplayer.players.youtube.prototype.stop = function(callback) {
  minplayer.players.base.prototype.stop.call(this, function() {
    this.player.stopVideo();
    if (callback) {
      callback.call(this);
    }
  });
};

/**
 * @see minplayer.players.base#seek
 */
osmplayer.players.youtube.prototype.seek = function(pos, callback) {
  minplayer.players.base.prototype.seek.call(this, pos, function() {
    this.onWaiting();
    this.player.seekTo(pos, true);
    if (callback) {
      callback.call(this);
    }
  });
};

/**
 * @see minplayer.players.base#setVolume
 */
osmplayer.players.youtube.prototype.setVolume = function(vol, callback) {
  minplayer.players.base.prototype.setVolume.call(this, vol, function() {
    this.player.setVolume(vol * 100);
    if (callback) {
      callback.call(this);
    }
  });
};

/**
 * @see minplayer.players.base#getVolume
 */
osmplayer.players.youtube.prototype.getVolume = function(callback) {
  this.getValue('getVolume', callback);
};

/**
 * @see minplayer.players.base#getDuration.
 */
osmplayer.players.youtube.prototype.getDuration = function(callback) {
  if (this.options.duration) {
    callback(this.options.duration);
  }
  else {
    this.getValue('getDuration', callback);
  }
};

/**
 * @see minplayer.players.base#getCurrentTime
 */
osmplayer.players.youtube.prototype.getCurrentTime = function(callback) {
  this.getValue('getCurrentTime', callback);
};

/**
 * @see minplayer.players.base#getBytesStart.
 */
osmplayer.players.youtube.prototype.getBytesStart = function(callback) {
  this.getValue('getVideoStartBytes', callback);
};

/**
 * @see minplayer.players.base#getBytesLoaded.
 */
osmplayer.players.youtube.prototype.getBytesLoaded = function(callback) {
  this.getValue('getVideoBytesLoaded', callback);
};

/**
 * @see minplayer.players.base#getBytesTotal.
 */
osmplayer.players.youtube.prototype.getBytesTotal = function(callback) {
  this.getValue('getVideoBytesTotal', callback);
};
;
(function(template, osmplayer) {

  /** The osmplayer namespace. */
  var osmplayer = osmplayer || {};

  // Define the busy object.
  osmplayer.playlist = osmplayer.playlist || {};

  // constructor.
  osmplayer.playlist[template] = function(context, options) {

    // Derive from playlist
    osmplayer.playlist.call(this, context, options);
  };

  // Define the prototype for all controllers.
  osmplayer.playlist[template].prototype = new osmplayer.playlist();
  osmplayer.playlist[template].prototype.constructor = osmplayer.playlist[template];

  /**
   * @see minplayer.plugin#construct
   */
  osmplayer.playlist[template].prototype.construct = function() {

    this.options = jQuery.extend({
      showPlaylist: true
    }, this.options);

    osmplayer.playlist.prototype.construct.call(this);

    // Make the main minplayer have the same width as the playlist.
    this.get('player', function(player) {
      // do nothing
    });
  };

  osmplayer.playlist[template].prototype.refreshScroll=function(){
    // do nothing
  }
  /**
   * Refresh the scrollbar.
   * Overridden to disable auto playlist sizing
   */
  osmplayer.playlist[template].prototype.refresh = function() {
    // do nothing
  }

  /**
   * Return the display for this plugin.
   */
  osmplayer.playlist[template].prototype.getDisplay = function() {
    if (this.options.build) {
      this.context.append('\
      <div class="osmplayer-' + template + '-playlist">\
        <div class="minplayer-' + template + '-loader-wrapper">\
          <div class="minplayer-' + template + '-loader"></div>\
        </div>\
        <div class="osmplayer-' + template + '-playlist-scroll ui-widget-content">\
          <div class="osmplayer-' + template + '-playlist-list"></div>\
      </div>\
      </div>');
    }
    return jQuery('.osmplayer-' + template + '-playlist', this.context);
  };

  // Return the elements
  osmplayer.playlist[template].prototype.getElements = function() {
    var elements = osmplayer.playlist.prototype.getElements.call(this);

    // Setup the dynamic settings.
    var cName = this.options.vertical ? 'playlist-vertical' : 'playlist-horizontal';

    this.display.addClass(cName);

    return jQuery.extend(elements, {
      playlist_busy:jQuery('.minplayer-' + template + '-loader-wrapper', this.display),
      list:jQuery('.osmplayer-' + template + '-playlist-list', this.display),
    });
  };
})('alljoyn', osmplayer);

;
(function(template, osmplayer) {

  /** The osmplayer namespace. */
  var osmplayer = osmplayer || {};

  // Define the teaser object.
  osmplayer.teaser = osmplayer.teaser || {};
  
  // constructor.
  osmplayer.teaser[template] = function(context, options) {

    // Derive from teaser
    osmplayer.teaser.call(this, context, options);
    
  };
  
  var teaserCount = 0;

  // Define the prototype for all controllers.
  osmplayer.teaser[template].prototype = new osmplayer.teaser();
  osmplayer.teaser[template].prototype.constructor = osmplayer.teaser[template];

  /**
   * @see minplayer.plugin#construct
   */
  osmplayer.teaser[template].prototype.construct = function() {

    minplayer.display.prototype.construct.call(this);
    
    // Add some hover events.
    this.display.bind('mouseenter', (function(container) {
      return function() {
        container.addClass('hover');
      };
    })(this.elements.container)).bind('mouseleave', (function(container) {
      return function() {
        container.removeClass('hover');
      };
    })(this.elements.container));
  };

  /**
   * Sets the node.
   *
   * @param {object} node The node object to set.
   *
   * Overridden entire method so we can modify the event binding
   */
  osmplayer.teaser.prototype.setNode = function(node) {
  
    // Add this to the node info for this teaser.
    this.node = node;

    // Set the title of the teaser.
    if (this.elements.title) {
      if (node.title) {
        this.elements.title.text(node.title);
      }
      else {
        osmplayer.getNode(node, (function(teaser) {
          return function(node) {
            teaser.elements.title.text(node.title);
          };
        })(this));
      }
    }
    
    // Set the description.    
    if (this.elements.description && node.description) {
      this.elements.description.text(node.description);
    }
  
    // Load the thumbnail image if it exists.
    if (node.mediafiles) {
      osmplayer.getImage(node.mediafiles, 'thumbnail', (function(teaser) {
        return function(image) {
          if (image && teaser.elements.image) {
            teaser.preview = new minplayer.image(teaser.elements.image);
            teaser.preview.load(image.path);
          }
        };
      })(this));
    }
  
    // Bind when they click on this teaser.
    this.display.unbind('click').click((function(teaser) {
      return function(event) {
        event.preventDefault();
        teaser.trigger('nodeLoad', teaser.node);
        jQuery('html,body').animate({
          scrollTop: jQuery("#content").offset().top
        },'slow');
      };
    })(this));
  };

  /**
   * Return the display for this plugin.
   */
  osmplayer.teaser[template].prototype.getDisplay = function() {
    
    if (teaserCount%2 == 0) {
      // Append this to the list.
      this.context.append('\
      <div class="osmplayer-' + template + '-teaser even">\
        <div class="osmplayer-' + template + '-teaser-inner">\
          <div class="osmplayer-' + template + '-teaser-image-container">\
            <div class="osmplayer-' + template + '-teaser-image-overlay"></div>\
            <div class="osmplayer-' + template + '-teaser-image"></div>\
          </div>\
          <div class="osmplayer-' + template + '-teaser-info">\
            <h2 class="osmplayer-' + template + '-teaser-title"></h2>\
            <div class="osmplayer-' + template + '-teaser-description"></div>\
          </div>\
        </div>\
      </div>');
    } else {
      // Append this to the list.
      this.context.append('\
      <div class="osmplayer-' + template + '-teaser odd">\
        <div class="osmplayer-' + template + '-teaser-inner">\
          <div class="osmplayer-' + template + '-teaser-image-container">\
            <div class="osmplayer-' + template + '-teaser-image-overlay"></div>\
            <div class="osmplayer-' + template + '-teaser-image"></div>\
          </div>\
          <div class="osmplayer-' + template + '-teaser-info">\
            <h2 class="osmplayer-' + template + '-teaser-title"></h2>\
            <div class="osmplayer-' + template + '-teaser-description"></div>\
          </div>\
        </div>\
      </div>\
      <div class="osmplayer-' + template + '-teaser-clear"></div>');
    }
        
    teaserCount = teaserCount + 1;
    
    var teasers = jQuery('.osmplayer-' + template + '-teaser', this.context);
    return teasers.eq(teasers.length - 1);
  }

  /**
   * Selects the teaser.
   */
  osmplayer.teaser[template].prototype.select = function(selected) {
    if (selected) {
      this.elements.imageContainer.addClass('active');
      this.elements.info.addClass('active');
    }
    else {
      this.elements.imageContainer.removeClass('active');
      this.elements.info.addClass('active');
    }
  }


  // Return the elements
  osmplayer.teaser[template].prototype.getElements = function() {    
    var elements = osmplayer.teaser.prototype.getElements.call(this);
        
    return jQuery.extend(elements, {
      container: jQuery('.osmplayer-' + template + '-teaser-inner', this.display),
      info: jQuery('.osmplayer-' + template + '-teaser-info', this.display),
      title:jQuery('.osmplayer-' + template + '-teaser-title', this.display),
      description:jQuery('.osmplayer-' + template + '-teaser-description', this.display),
      image:jQuery('.osmplayer-' + template + '-teaser-image', this.display),
      imageContainer:jQuery('.osmplayer-' + template + '-teaser-image-container', this.display)
    });
  };
})('alljoyn', osmplayer);

;
