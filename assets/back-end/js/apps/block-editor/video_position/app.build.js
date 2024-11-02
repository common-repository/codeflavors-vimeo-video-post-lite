(()=>{"use strict";var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var a in o)e.o(o,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=jQuery;var o=e.n(t);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){var l,i,n,r;l=e,i=t,n=o[t],r=function(e,t){if("object"!=a(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var l=o.call(e,"string");if("object"!=a(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i),(i="symbol"==a(r)?r:r+"")in l?Object.defineProperty(l,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):l[i]=n})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a,l,i,n,r=[],c=!0,u=!1;try{if(i=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;c=!1}else for(;!(c=(a=i.call(o)).done)&&(r.push(a.value),r.length!==t);c=!0);}catch(e){u=!0,l=e}finally{try{if(!c&&null!=o.return&&(n=o.return(),Object(n)!==n))return}finally{if(u)throw l}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}var c=wp,u=c.blockEditor.InspectorControls,d=c.blocks.registerBlockType,s=c.components,m=(s.Panel,s.PanelBody),p=s.PanelRow,v=s.ColorIndicator,f=s.ColorPalette,b=(s.Dropdown,s.TextControl),h=s.SelectControl,y=s.ToggleControl,g=s.RangeControl,_=(c.compose.withState,c.element),E=(_.useCallback,_.useEffect),R=_.useState,w=c.hooks,k=w.applyFilters,O=(w.doAction,c.i18n),C=O.__,S=O.sprintf;d("vimeotheque/video-position",{title:C("Vimeotheque video position","codeflavors-vimeo-video-post-lite"),description:C("Video embed customization options","codeflavors-vimeo-video-post-lite"),icon:"video-alt3",category:"layout",attributes:{embed_options:{type:"object",source:"meta",meta:"__cvm_playback_settings",default:!1},video_id:{type:"string",source:"meta",meta:"__cvm_video_id",default:!1},extra:{type:"object",default:{}}},supports:{align:!1,anchor:!1,html:!1,multiple:!1,reusable:!1,customClassName:!1},example:{attributes:{video_id:"1084537",embed_options:{title:1,byline:1,portrait:1,color:"",loop:0,autoplay:1,aspect_ratio:"16x9",width:200,video_position:"below-content",volume:70,playlist_loop:0}}},edit:function(e){var t=e.attributes,a=t.embed_options,l=t.extra,r=t.video_id,c=e.setAttributes,d=(e.className,n(R(0==a.length?(jQuery.each(vmtq_default_embed_options,(function(e,t){isNaN(t)||""===t||(vmtq_default_embed_options[e]=parseInt(t))})),vmtq_default_embed_options):a),2)),s=d[0],_=d[1],w=n(R(""),2),O=w[0],j=w[1],P="replace-featured-image"===a.video_position?"above-content":a.video_position,x=function(e){q(e,1==s[e]?0:1)},q=function(e,t){var o={};o[e]=t,_(i(i({},s),o))},A=function(){var e=Math.floor(s.start_time/3600),t=Math.floor(s.start_time/60),o=s.start_time%60;return"".concat(e,"h").concat(t,"m").concat(o,"s")};return E((function(){c({embed_options:i(i({},s),l)})}),[s,l]),[React.createElement("div",{key:"vimeotheque-video-position-block"},React.createElement("div",{className:"vimeotheque-player ".concat(s.video_align," ").concat(O),"data-width":s.width,"data-aspect_ratio":s.aspect_ratio,style:{width:"".concat(s.width,"px"),maxWidth:"100%"},onLoad:function(e){vimeotheque.resize(e.currentTarget),j("loaded")}},React.createElement("iframe",{src:function(){var e="https://player.vimeo.com/video",t={dnt:s.dnt,start_time:s.start_time,transparent:s.transparent};s.background?t.background=s.background:(t.title=s.title,t.byline=s.byline,t.portrait=s.portrait,t.loop=s.loop,t.color=s.color.replace("#",""),t.autoplay=s.autoplay,s.muted||(t.volume=s.volume),t.muted=s.muted);var a=k("vimeotheque.video-position.embed-url-extra-params",{}),l=o().extend({},t,a);return k("vimeotheque.video-position.embed-url","".concat(e,"/").concat(r,"?").concat(jQuery.param(l),"#t=").concat(A()),e,r,l,s.start_time,A())}(),width:"100%",height:"100%",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0})),!e.isSelected&&React.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),React.createElement(u,{key:"vimeotheque-video-position-controls"},React.createElement(m,{title:C("Player options","codeflavors-vimeo-video-post-lite"),initialOpen:!0},React.createElement(p,null,React.createElement(y,{label:C("Background mode","codeflavors-vimeo-video-post-lite"),help:!s.background&&C("Whether the player is in background mode, which hides the playback controls, enables autoplay, and loops the video.","codeflavors-vimeo-video-post-lite"),checked:s.background,onChange:function(){return x("background")}})),!s.background&&React.createElement(React.Fragment,null,React.createElement(p,null,React.createElement(y,{label:C("Show title","codeflavors-vimeo-video-post-lite"),checked:s.title,onChange:function(){return x("title")}})),React.createElement(p,null,React.createElement(y,{label:C("Show byline","codeflavors-vimeo-video-post-lite"),checked:s.byline,onChange:function(){return x("byline")}})),React.createElement(p,null,React.createElement(y,{label:C("Show portrait","codeflavors-vimeo-video-post-lite"),checked:s.portrait,onChange:function(){return x("portrait")}})),React.createElement(p,null,React.createElement(y,{label:C("Loop video","codeflavors-vimeo-video-post-lite"),checked:s.loop,onChange:function(){return x("loop")}})),React.createElement(p,null,React.createElement(y,{label:C("Autoplay video","codeflavors-vimeo-video-post-lite"),help:C("This feature might not work on all devices.","codeflavors-vimeo-video-post-lite"),checked:s.autoplay,onChange:function(){return x("autoplay")}})),React.createElement(p,null,React.createElement(y,{label:C("Load muted","codeflavors-vimeo-video-post-lite"),help:!s.muted&&C("Will load the video muted which is required for the autoplay behavior in some browsers.","codeflavors-vimeo-video-post-lite"),checked:s.muted,onChange:function(){return x("muted")}}))),React.createElement(p,null,React.createElement(g,{label:C("Start time","codeflavors-vimeo-video-post-lite"),help:S(C("Video playback initial start time in seconds. Must not exceed %s seconds.","codeflavors-vimeo-video-post-lite"),l.duration),initialPosition:s.start_time,value:s.start_time,isShiftStepEnabled:!0,marks:!1,min:"0",max:l.duration,step:"1",withInputField:!0,onChange:function(e){var t=parseInt(e),o=parseInt(l.duration),a=t>=0&&t<=o?e:s.start_time;q("start_time",a)}})),React.createElement(p,null,React.createElement(y,{label:C("Transparent background","codeflavors-vimeo-video-post-lite"),help:!s.transparent&&C("Video will be embedded without a background.","codeflavors-vimeo-video-post-lite"),checked:s.transparent,onChange:function(){return x("transparent")}})),!s.background&&!s.muted&&React.createElement(p,null,React.createElement(g,{label:C("Volume","codeflavors-vimeo-video-post-lite"),help:C("Will be applied in front-end after the user initializes playback.","codeflavors-vimeo-video-post-lite"),step:"1",initialPosition:s.volume,min:"0",max:"100",isShiftStepEnabled:!0,marks:[{value:0,label:"0"},{value:25,label:"25"},{value:50,label:"50"},{value:75,label:"75"},{value:100,label:"100"}],withInputField:!0,onChange:function(e){var t=e>=0&&e<=100?e:s.volume;q("volume",t)}}))),React.createElement(m,{title:C("Embedding options","codeflavors-vimeo-video-post-lite"),initialOpen:!1},React.createElement(p,null,React.createElement(y,{label:C("Replace featured image","codeflavors-vimeo-video-post-lite"),help:"replace-featured-image"!==s.video_position&&C("Video embed will replace the featured image.","codeflavors-vimeo-video-post-lite"),checked:"replace-featured-image"==s.video_position,onChange:function(){q("video_position","replace-featured-image"==a.video_position?P:"replace-featured-image")}})),React.createElement(y,{label:C("Lazy load","codeflavors-vimeo-video-post-lite"),help:!s.lazy_load&&C("Video won't be embedded directly into the page.","codeflavors-vimeo-video-post-lite"),checked:s.lazy_load,onChange:function(){return x("lazy_load")}}),React.createElement(p,null,React.createElement(b,{label:C("Width","codeflavors-vimeo-video-post-lite"),type:"number",step:"5",value:s.width,min:"200",onChange:function(e){q("width",!e||e<200?200:e),vimeotheque.resizeAll()}})),React.createElement(p,null,React.createElement(h,{label:C("Aspect ratio","codeflavors-vimeo-video-post-lite"),value:s.aspect_ratio,options:[{label:"4x3",value:"4x3"},{label:"16x9",value:"16x9"},{label:"2.35x1",value:"2.35x1"}],onChange:function(e){q("aspect_ratio",e),setTimeout(vimeotheque.resizeAll,100)}})),React.createElement(p,null,React.createElement(h,{label:C("Align","codeflavors-vimeo-video-post-lite"),value:s.video_align,options:[{label:"left",value:"align-left"},{label:"center",value:"align-center"},{label:"right",value:"align-right"}],onChange:function(e){q("video_align",e)}}))),!s.background&&React.createElement(m,{title:C("Color options","codeflavors-vimeo-video-post-lite"),initialOpen:!1},React.createElement(p,null,React.createElement("label",null,"".concat(C("Player color","codeflavors-vimeo-video-post-lite")," : "),React.createElement(v,{colorValue:"#".concat(s.color.replace("#",""))}),React.createElement("span",null,s.color&&"#".concat(s.color.replace("#",""))))),React.createElement(p,null,React.createElement(f,{value:"#".concat(s.color.replace("#","")),onChange:function(e){var t=e.replace("#","");q("color",t)}}))))]},save:function(e){return null}})})();