(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"0D09":function(module,e,t){"use strict";t.r(e);var r=t("lSNA"),n=t.n(r),o=t("VbXa"),a=t.n(o),s=t("sbe7"),u=t.n(s),i=t("sQ/U"),c=t("CkRy"),m=t("vsdT"),l=t("8cuT"),p=t.n(l),d=t("e13k"),I=t("JUgE"),g=t("4Qgh"),f=t("uxKl"),C=t("CSoc"),v=t("4BIl"),S=function(e){function ReadingItem(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={readingCml:null},t}a()(ReadingItem,e);var t=ReadingItem.prototype;return t.componentDidMount=function componentDidMount(){var e=this,t=this.props,r=t.computedItem,n=t.courseId,o=t.courseSlug,a=r.id;Object(m.a)({itemId:a,courseId:n,courseSlug:o}).then(function(t){e.setState({readingCml:t})})},t.render=function render(){var e,t=this.props,r=t.computedItem,o=t.courseId,a=t.courseSlug,u=t.itemMetadata,m=t.courseMaterials,l=this.state.readingCml,p=g.a.NAME,f=g.a.USER_ID,C,S=m.getNeighbors(u).nextItemMetadataOrItemGroup;return s.createElement(c.a,{className:"rc-ReadingItem",feedbackType:"reading",computedItem:r,courseId:o},!l&&s.createElement(d.a,null),l&&s.createElement("div",null,s.createElement(I.a,{cml:l,shouldApplyTracking:!0,variableData:(e={},n()(e,p,i.a.get().fullName),n()(e,f,i.a.get().id),e)}),s.createElement(v.a,{courseId:o,courseSlug:a,itemId:r.id,isComplete:r.isCompleted,nextItem:S})))},ReadingItem}(s.Component);e.default=p()(["CourseStore"],function(e){var t=e.CourseStore;return{courseId:t.getCourseId(),courseSlug:t.getCourseSlug(),courseMaterials:t.getMaterials()}})(S)},"24m0":function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pt":true,"ru":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},"2ngF":function(module,e,t){"use strict";var r=t("wiyT"),n=t.n(r),o=t("CWYE"),a=t("IAOZ"),s=Object(o.a)(a.e.supplementCompletionApi,{type:"rest"}),u=Object(o.a)(a.e.supplementStartApi,{type:"rest"});function updateSupplementProgress(e){var t=e.itemId,r=e.courseId,o=e.userId,a=e.api,s={data:{userId:o,courseId:r,itemId:t}};return n()(a.post("",s))}var i={markComplete:function markComplete(e,t,r){return updateSupplementProgress({itemId:e,courseId:t,userId:r,api:s})},markStarted:function markStarted(e,t,r){return updateSupplementProgress({itemId:e,courseId:t,userId:r,api:u})}};e.a=i;var c=i.markComplete,m=i.markStarted},"4BIl":function(module,e,t){"use strict";var r=t("VbXa"),n=t.n(r),o=t("sbe7"),a=t.n(o),s=t("17x9"),u=t.n(s),i=t("+LJP"),c=t("sQ/U"),m=t("y1LI"),l=t("vpeK"),p=t("biwp"),d=t("Nher"),I=t("2ngF"),g=t("uxKl"),f=t("MC18"),C=t.n(f),v=t("m3i1"),S=t.n(v),h=function(e){function ReadingCompleteButton(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).markComplete=function(){var e=t.props,r=e.itemId,n=e.courseId;I.a.markComplete(r,n,c.a.get().id).then(t.refreshProgress).done()},t.goToNextItem=function(){var e=t.props,r=e.nextItem,n=e.router;r&&n.push(r.getLink(),{trigger:!0})},t.refreshProgress=function(){var e=t.props,r=e.courseId,n=e.courseSlug,o=t.context.executeAction;o(l.a,{courseId:r,refreshProgress:!0}),o(d.b,{courseId:r}),o(p.b,{courseSlug:n,refetch:!0})},t}var t;return n()(ReadingCompleteButton,e),ReadingCompleteButton.prototype.render=function render(){var e=this.props,t=e.isComplete,r=e.nextItem;return a.a.createElement("div",{className:"rc-ReadingCompleteButton horizontal-box align-items-right"},t?a.a.createElement("div",{className:"completed"},a.a.createElement(m.a,{name:"checkmark",className:"color-success-dark"})," ",C()("Complete"),!!r&&a.a.createElement("button",{className:"primary next-item",type:"submit",onClick:this.goToNextItem},C()("Go to next item"))):a.a.createElement("button",{className:"primary mark-complete",type:"submit",onClick:this.markComplete},C()("Mark as completed")))},ReadingCompleteButton}(a.a.Component);h.contextTypes={router:u.a.object,executeAction:u.a.func.isRequired},e.a=Object(i.a)(function(e){return{router:e}})(h)},"4Qgh":function(module,e,t){"use strict";var r={NAME:"NAME",USER_ID:"USER_ID",HASHED_USER_ID:"HASHED_USER_ID"};e.a=r;var n=r.NAME,o=r.USER_ID,a=r.HASHED_USER_ID},J4HX:function(module,e,t){"use strict";e.a={supplementsApi:"onDemandSupplements.v1"}},MC18:function(module,exports,e){var t=e("24m0"),r=t.default?t.default:{},n,o=(0,e("HdzH").default)(r);o.getLocale=function(){return"en"},module.exports=o},m3i1:function(module,exports,e){var t=e("reKo"),r;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},o=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},reKo:function(module,exports,e){},vsdT:function(module,e,t){"use strict";var r=t("J4HX"),n=t("eBhw");e.a=function(e){var t=e.itemId,o=e.courseId,a=e.courseSlug,s,u={includes:["asset"],fields:["openCourseAssets.v1(typeName)","openCourseAssets.v1(definition)"]};return new n.a({itemId:t,courseId:o,courseSlug:a}).getWithCourseItemId(r.a.supplementsApi,u).then(function(e){return e.linked["openCourseAssets.v1"][0]})}}}]);
//# sourceMappingURL=en.20.90ce2cd6c288c61f82e9.js.map