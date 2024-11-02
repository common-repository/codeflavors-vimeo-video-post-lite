(()=>{"use strict";var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var i in o)e.o(o,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=jQuery;var o,i=e.n(t);i().fn.VimeoPlayer=function(e){if(0==this.length)return!1;if(this.length>1)return this.each((function(e,t){i()(t).VimeoPlayer()}));var t,o=this,n=i().extend({},i().fn.VimeoPlayer.defaults,e),a=i()(this).data(),r=!1;this.isError=!1;try{t=new Vimeo.Player(i()(this).find("iframe"))}catch(e){o.isError=e}if(this.isError){try{console.log("%cCould not load Vimeotheque player for video "+a.video_id+" due to Vimeo.Player error.","color: #FF0000")}catch(e){}return i()(this).find("iframe").on("load",n.onIframeReload),o}return t.on("loaded",(function(){o.addClass("loaded"),n.onLoad(o),i()(document).trigger("Vimeotheque_PlayerReady",[o])})),t.on("play",(function(e){r||(o.setVolume(parseInt(a.volume)/100),r=!0),n.onPlay(e,o),o.trigger("onPlay",a)})),t.on("timeupdate",(function(e){n.onPlayback(e,o)})),t.on("pause",(function(e){n.onPause(e,o),o.trigger("onPause",e)})),t.on("ended",(function(e){n.onFinish(e,o),o.trigger("onEnd",e)})),t.on("error",(function(e){n.onError(e,o)})),t.on("volumechange",(function(e){r=!0})),this.loadVideo=function(e){return t.loadVideo(e).then((function(e){})).catch((function(e){})),o},this.pause=function(){return t.pause().then((function(){})).catch((function(e){})),o},this.play=function(){return t.play().then((function(){})).catch((function(e){})),o},this.setVolume=function(e){return a.background||a.muted||t.setVolume(e).then((function(e){})).catch((function(e){})),o},this.getVolume=function(){return t.getVolume()},this.setPlaybackPosition=function(e){return t.setCurrentTime(e).then((function(e){})).catch((function(e){})),o},this.getPlayer=function(){return t},i()(this).data("ref",this),o},i().fn.VimeoPlayer.defaults={onIframeReload:function(){},onLoad:function(e){},onPlay:function(e){},onPlayback:function(e){},onPause:function(e){},onFinish:function(e){},onError:function(e){}},window.vimeotheque=window.vimeotheque||{},(o=vimeotheque).resizeAll=function(){i()("div.vimeotheque-player").each((function(e,t){vimeotheque.resize(t)}))},o.resize=function(e){var t,o=parseFloat(i()(e).attr("data-size_ratio")||0),n=i()(e).attr("data-aspect_ratio"),a=i()(e).width();if(o>0)t=Math.floor(a/o);else switch(n){case"16x9":default:t=Math.floor(9*a/16);break;case"4x3":t=Math.floor(3*a/4);break;case"2.35x1":t=Math.floor(a/2.35)}i()(e).css({height:t})},i()(document).ready(vimeotheque.resizeAll),i()(window).on("resize",vimeotheque.resizeAll),i().fn.VimeoPlaylist=function(e){if(0==this.length)return!1;if(this.length>1)return this.each((function(t,o){i()(o).VimeoPlaylist(e)}));var t=!1,o=i().extend({},i().fn.VimeoPlaylist.defaults,e),n=this,a=i()(this).find(o.player).VimeoPlayer({onIframeReload:function(){n.VimeoPlaylist(o)},onFinish:function(){y()},onPlay:function(){t=!0},onLoad:function(){1==m&&t&&a.play()}});if(!a.isError){var r=i()(this).find(o.items),l=i()(a).data(),u=l.playlist_loop,c=l.volume;if(l.shuffle&&r.length>2)for(var s=r.length-1;s>1;--s){var f=1+Math.floor(Math.random()*s),d=[r[f],r[s]];r[s]=d[0],r[f]=d[1]}var h=0,m=parseInt(u),v=function(e,t){var l=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t!==h){var u=i()(e).data(),c=(u.autoplay,u.video_id),s=u.size_ratio,f=u.aspect_ratio;i()(r[h]).removeClass("active-video"),i()(e).addClass("active-video"),a.loadVideo(c).attr({"data-size_ratio":s,"data-aspect_ratio":f}),l&&a.setVolume(l),vimeotheque.resize(a),h=t,o.loadVideo.call(n,e,t,a)}},y=function(){1==m&&h<r.length-1&&i()(r[h+1]).trigger("click")};return vimeotheque.resize(a),a.setVolume(c/100),i().each(r,(function(e,t){0==e&&(v(t,e),i()(t).addClass("active-video")),i()(t).on("click",(function(o){o.preventDefault(),a.getVolume().then((function(o){v(t,e,o)}))}))})),n}},i().fn.VimeoPlaylist.defaults={player:".vimeotheque-player",items:".cvm-playlist-item a[data-video_id]",loadVideo:function(){}},window.vimeotheque=window.vimeotheque||{},i()(document).ready((function(){i()(".vimeotheque-player.lazy-load .vimeotheque-load-video").on("click",(function(e){e.preventDefault(),i()(this).closest(".vimeotheque-player.lazy-load").html(i()("<iframe />",{src:i()(this).data("url"),width:"100%",height:"100%",frameborder:0,allowFullScreen:"",mozallowfullscreen:"",webkitallowfullscreen:"",allow:"autoplay; fullscreen"})).removeClass("lazy-load").VimeoPlayer({onLoad:function(e){e.play()}})})),i()(".vimeotheque-player.lazy-load").each((function(e,t){var o=i()(t).find("img.video-thumbnail");if(0!=o.length){var n=!1,a=!1;i()(o[0]).prop("complete")&&(n=i()(o[0]).width(),a=i()(o[0]).height()),i()(o[0]).on("load",(function(){n=i()(o[0]).width(),a=i()(o[0]).height()}));var r=setInterval((function(){if(n&&a){i()(t).width();var e=i()(t).height();a<e&&i()(o[0]).addClass("center-horizontal"),clearInterval(r)}}),300)}})),vimeotheque.players=i()(".vimeotheque-player:not(.lazy-load)").VimeoPlayer({})}))})();