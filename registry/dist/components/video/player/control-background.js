!function(o,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/control-background"]=t():o["video/player/control-background"]=t()}(self,(function(){return function(){var o,t,e={421:function(o,t,e){var n=e(645)((function(o){return o[1]}));n.push([o.id,".bilibili-player-video-control-mask {\n  background: transparent !important;\n}\n.bilibili-player-video-control .bilibili-player-video-control-bottom {\n  background: rgba(0, 0, 0, var(--video-control-opacity)) !important;\n  margin: 5px 0 0 0 !important;\n  padding: 9px 0 0 !important;\n  height: 30px !important;\n}\nbody.player-mode-webfullscreen .bilibili-player-video-control .bilibili-player-video-control-bottom, body.player-fullscreen-fix .bilibili-player-video-control .bilibili-player-video-control-bottom, body.player-full-win .bilibili-player-video-control .bilibili-player-video-control-bottom {\n  margin: -2px 0 0 0 !important;\n  padding: 13px 0 0 !important;\n  height: 45px !important;\n}\n\nbody.video-control-progress-background .bui-track-video-progress .bui-bar-wrap {\n  background: rgba(0, 0, 0, var(--video-control-opacity)) !important;\n}",""]),o.exports=n},645:function(o){"use strict";
// eslint-disable-next-line func-names
o.exports=function(o){var t=[];return t.toString=function(){return this.map((function(t){var e=o(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
t.i=function(o,e,n){"string"==typeof o&&(
// eslint-disable-next-line no-param-reassign
o=[[null,o,""]]);var r={};if(n)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<o.length;c++){var l=[].concat(o[c]);n&&r[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},965:function(o,t,e){var n=e(421);n&&n.__esModule&&(n=n.default),o.exports="string"==typeof n?n:n.toString()},407:function(o){"use strict";o.exports=coreApis.settings}},n={};function r(o){var t=n[o];if(void 0!==t)return t.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(o){return Object.getPrototypeOf(o)}:function(o){return o.__proto__},r.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var i=Object.create(null);r.r(i);var a={};o=o||[null,t({}),t([]),t(t)];for(var c=2&n&&e;"object"==typeof c&&!~o.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(o){a[o]=function(){return e[o]}}));return a.default=function(){return e},r.d(i,a),i},r.d=function(o,t){for(var e in t)r.o(t,e)&&!r.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:t[e]})},r.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},r.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return t}});var o=coreApis.utils.urls;const t={name:"playerControlBackground",displayName:"播放器控制栏背景色",tags:[componentsTags.video,componentsTags.style],description:{"zh-CN":"给视频播放器控制栏附上半透明的黑色, 代替原来的阴影."},entry:async({metadata:o})=>{const{addComponentListener:t}=await Promise.resolve().then(r.t.bind(r,407,23));t(`${o.name}.includeProgress`,(o=>{document.body.classList.toggle("video-control-progress-background",o)}),!0),t(`${o.name}.opacity`,lodash.debounce((o=>{document.documentElement.style.setProperty("--video-control-opacity",(o/100).toString())}),200),!0)},instantStyles:[{name:"playerControlBackground",style:()=>Promise.resolve().then(r.t.bind(r,965,23))}],urlInclude:o.playerUrls,options:{opacity:{displayName:"不透明度(%)",defaultValue:64,slider:{}},includeProgress:{displayName:"包括进度条",defaultValue:!0}},commitHash:"4ad24eccaa616bea0d7e6952c2fa4e1e9febf13e",coreVersion:"2.1.4"}}(),i=i.component}()}));