(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"2RA0":function(module,exports,t){var e=t("CIm+"),n;"string"==typeof e&&(e=[[module.i,e,""]]);var a={transform:void 0},s=t("aET+")(e,a);e.locals&&(module.exports=e.locals)},"3g8Y":function(module,exports,t){var e,n,a,s;a=window,s=function(t,e,n){var a=function template(n){var a=[],s,l=n||{};return function(e,n,l){switch(e){case"countdown":a.push('<div class="vjs-control c-countdown"><span class="c-countdown-text"><em class="cif-spin cif-refresh"></em></span></div>');break;case"subtitlesMenuItem":a.push('<em class="cif-lg cif-fw c-subtitles-menu-item-selected-icon"></em><span data-js="c-subtitles-menu-item-label" class="c-subtitles-menu-item-label caption-text">'+t.escape(null==(s=n(l))?"":s)+"</span>");break;case"subtitlesOffLabel":a.push(""+t.escape(null==(s=n("Subtitles Off"))?"":s));break;case"subtitlesMenuTitle":a.push('<h3 class="vjs-menu-title headline-1-text menu-section-title">'+t.escape(null==(s=n("Subtitles"))?"":s)+"</h3>");break;case"menuDivider":a.push('<div class="c-menu-divider"></div>')}}.call(this,"controlName"in l?l.controlName:"undefined"!=typeof controlName?controlName:void 0,"_t"in l?l._t:void 0!==e?e:void 0,"label"in l?l.label:"undefined"!=typeof label?label:void 0),a.join("")};return function(t){return t&&"_t"in t&&(e=t._t.merge(e)),a(t)}},e=[t("xgPa"),t("Kq1R")],void 0===(n=function(t,e){var n;return s(t,e,n)}.apply(exports,e))||(module.exports=n)},"CIm+":function(module,exports,t){},Goki:function(module,t,e){"use strict";var n=e("VbXa"),a=e.n(n),s=e("PTN7"),l=e.n(s),i=e("Suiq"),o=e.n(i),c=function(t){function CountdownDisplay(e,n){var a;return(a=t.call(this,e,n)||this).on(e,"timeupdate",a.updateContent),a.on(e,"durationchange",a.updateContent),a}a()(CountdownDisplay,t);var e=CountdownDisplay.prototype;return e.createEl=function createEl(){var e=t.prototype.createEl.call(this,"div",{className:"vjs-countdown-time vjs-time-controls vjs-control"});return this.contentEl_=t.prototype.createEl.call(this,"div",{className:"vjs-countdown-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span><em class="cif-spin cif-refresh"></em>'},{"aria-live":"off"}),e.appendChild(this.contentEl_),e},e.updateContent=function updateContent(){if(Number.isNaN(this.player().duration()))return;var t=this.player().duration()-this.player().currentTime();this.contentEl_.innerHTML='<span class="vjs-control-text">'+this.localize("Time Left")+"</span> "+o.a.utc(1e3*t).format("m:ss")},CountdownDisplay}(l.a.getComponent("Component"));l.a.registerComponent("CountdownDisplay",c)},KK0S:function(module,t,e){"use strict";e.r(t);var n=e("PTN7"),a=e.n(n),s=e("3g8Y"),l=e.n(s),i=e("PRI2"),o=e("Goki"),c=e("2RA0"),r=e.n(c);t.default=a.a},Kq1R:function(module,exports,t){var e=t("wfto"),n=e.default?e.default:{},a,s=(0,t("HdzH").default)(n);s.getLocale=function(){return"en"},module.exports=s},PRI2:function(module,t,e){"use strict";var n=e("VbXa"),a=e.n(n),s=e("PTN7"),l=e.n(s),i=e("oYk5"),o=e.n(i),c=e("u5HK"),r=e.n(c),u=function(t){function CPlayToggle(e,n){var a;a=t.call(this,e,n)||this;var s=r()("Play"),l;return a.el_.innerHTML='<span class="cif-2x cif-fw cif-play"></span>',a.el_.innerHTML+='<span class="vjs-control-text">'.concat(s,"</span>"),a.el_.setAttribute("aria-label",s),n.isAudio&&(a.el_.innerHTML='<span class="cif-fw cif-play"></span>'),a}a()(CPlayToggle,t);var e=CPlayToggle.prototype;return e.createEl=function createEl(){var e=t.prototype.createEl.call(this),n=o()(e);return n.attr("data-js","c-play-control"),n.addClass("c-video-control c-play-control"),e},e.handlePlay=function handlePlay(){t.prototype.handlePlay.call(this);var e=r()("Pause");this.el_.setAttribute("aria-label",e);var n=o()(this.el_).find("span.cif-fw"),a;n.removeClass("cif-play"),n.addClass("cif-pause"),o()(this.el_).find("span.vjs-control-text").html(e)},e.handlePause=function handlePause(){t.prototype.handlePause.call(this);var e=r()("Play");this.el_.setAttribute("aria-label",e);var n=o()(this.el_).find("span.cif-fw"),a;n.removeClass("cif-pause"),n.addClass("cif-play"),o()(this.el_).find("span.vjs-control-text").html(e)},CPlayToggle}(l.a.getComponent("PlayToggle"));l.a.registerComponent("CPlayToggle",u)},wfto:function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pseudo":true,"pt":true,"ru":true,"tr":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}}}]);
//# sourceMappingURL=en.74.6c24b3b844eecda2f64a.js.map