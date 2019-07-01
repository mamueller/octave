(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"0D09":function(module,exports,e){"use strict";var t=e("284h"),r=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var u=r(e("lSNA")),a=r(e("VbXa")),o=t(e("sbe7")),n=r(e("sQ/U")),s=r(e("CkRy")),l=r(e("vsdT")),d=r(e("8cuT")),i=r(e("e13k")),c=r(e("JUgE")),m=r(e("4Qgh")),p=r(e("uxKl")),f=r(e("CSoc")),I=r(e("4BIl")),g=function(e){function ReadingItem(){for(var t,r=arguments.length,u=new Array(r),a=0;a<r;a++)u[a]=arguments[a];return(t=e.call.apply(e,[this].concat(u))||this).state={readingCml:null},t}(0,a.default)(ReadingItem,e);var t=ReadingItem.prototype;return t.componentDidMount=function componentDidMount(){var e=this,t=this.props,r=t.computedItem,u=t.courseId,a=t.courseSlug,o=r.id;(0,l.default)({itemId:o,courseId:u,courseSlug:a}).then(function(t){e.setState({readingCml:t})})},t.render=function render(){var e,t=this.props,r=t.computedItem,a=t.courseId,l=t.courseSlug,d=t.itemMetadata,p=t.courseMaterials,f=this.state.readingCml,g=m.default.NAME,v=m.default.USER_ID,C,S=p.getNeighbors(d).nextItemMetadataOrItemGroup;return o.createElement(s.default,{className:"rc-ReadingItem",feedbackType:"reading",computedItem:r,courseId:a},!f&&o.createElement(i.default,null),f&&o.createElement("div",null,o.createElement(c.default,{cml:f,shouldApplyTracking:!0,variableData:(e={},(0,u.default)(e,g,n.default.get().fullName),(0,u.default)(e,v,n.default.get().id),e)}),o.createElement(I.default,{courseId:a,courseSlug:l,itemId:r.id,isComplete:r.isCompleted,nextItem:S})))},ReadingItem}(o.Component),v=(0,d.default)(["CourseStore"],function(e){var t=e.CourseStore;return{courseId:t.getCourseId(),courseSlug:t.getCourseSlug(),courseMaterials:t.getMaterials()}})(g);exports.default=v},"24m0":function(module,exports,e){"use strict";exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pt":true,"ru":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},"2ngF":function(module,exports,e){"use strict";var t=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.markStarted=exports.markComplete=exports.default=void 0;var r=t(e("wiyT")),u=t(e("CWYE")),a=t(e("IAOZ")),o=(0,u.default)(a.default.supplementCompletionApi,{type:"rest"}),n=(0,u.default)(a.default.supplementStartApi,{type:"rest"});function updateSupplementProgress(e){var t=e.itemId,u=e.courseId,a=e.userId,o=e.api,n={data:{userId:a,courseId:u,itemId:t}};return(0,r.default)(o.post("",n))}var s={markComplete:function markComplete(e,t,r){return updateSupplementProgress({itemId:e,courseId:t,userId:r,api:o})},markStarted:function markStarted(e,t,r){return updateSupplementProgress({itemId:e,courseId:t,userId:r,api:n})}},l=s;exports.default=l;var d=s.markComplete,i=s.markStarted;exports.markStarted=i,exports.markComplete=d},"4BIl":function(module,exports,e){"use strict";var t=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=t(e("VbXa")),u=t(e("sbe7")),a=t(e("17x9")),o=t(e("+LJP")),n=t(e("sQ/U")),s=t(e("y1LI")),l=e("vpeK"),d=e("biwp"),i=e("Nher"),c=t(e("2ngF")),m=t(e("uxKl")),p=t(e("MC18"));e("m3i1");var f=function(e){function ReadingCompleteButton(){for(var t,r=arguments.length,u=new Array(r),a=0;a<r;a++)u[a]=arguments[a];return(t=e.call.apply(e,[this].concat(u))||this).markComplete=function(){var e=t.props,r=e.itemId,u=e.courseId;c.default.markComplete(r,u,n.default.get().id).then(t.refreshProgress).done()},t.goToNextItem=function(){var e=t.props,r=e.nextItem,u=e.router;r&&u.push(r.getLink(),{trigger:!0})},t.refreshProgress=function(){var e=t.props,r=e.courseId,u=e.courseSlug,a=t.context.executeAction;a(l.getProgress,{courseId:r,refreshProgress:!0}),a(i.refreshCourseViewGrade,{courseId:r}),a(d.loadCourseMaterials,{courseSlug:u,refetch:!0})},t}var t;return(0,r.default)(ReadingCompleteButton,e),ReadingCompleteButton.prototype.render=function render(){var e=this.props,t=e.isComplete,r=e.nextItem;return u.default.createElement("div",{className:"rc-ReadingCompleteButton horizontal-box align-items-right"},t?u.default.createElement("div",{className:"completed"},u.default.createElement(s.default,{name:"checkmark",className:"color-success-dark"})," ",(0,p.default)("Complete"),!!r&&u.default.createElement("button",{className:"primary next-item",type:"submit",onClick:this.goToNextItem},(0,p.default)("Go to next item"))):u.default.createElement("button",{className:"primary mark-complete",type:"submit",onClick:this.markComplete},(0,p.default)("Mark as completed")))},ReadingCompleteButton}(u.default.Component);f.contextTypes={router:a.default.object,executeAction:a.default.func.isRequired};var I=(0,o.default)(function(e){return{router:e}})(f);exports.default=I},"4Qgh":function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.HASHED_USER_ID=exports.USER_ID=exports.NAME=exports.default=void 0;var t={NAME:"NAME",USER_ID:"USER_ID",HASHED_USER_ID:"HASHED_USER_ID"},r=t;exports.default=r;var u=t.NAME,a=t.USER_ID,o=t.HASHED_USER_ID;exports.HASHED_USER_ID=o,exports.USER_ID=a,exports.NAME=u},J4HX:function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={supplementsApi:"onDemandSupplements.v1"};exports.default=t},MC18:function(module,exports,e){var t=e("24m0"),r=t.default?t.default:{},u,a=(0,e("HdzH").default)(r);a.getLocale=function(){return"en"},module.exports=a},PZgX:function(module,exports,e){},m3i1:function(module,exports,e){var t=e("PZgX"),r;"string"==typeof t&&(t=[[module.i,t,""]]);var u={transform:void 0},a=e("aET+")(t,u);t.locals&&(module.exports=t.locals)},vsdT:function(module,exports,e){"use strict";var t=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=t(e("J4HX")),u=t(e("eBhw")),a=function _default(e){var t=e.itemId,a=e.courseId,o=e.courseSlug,n,s={includes:["asset"],fields:["openCourseAssets.v1(typeName)","openCourseAssets.v1(definition)"]};return new u.default({itemId:t,courseId:a,courseSlug:o}).getWithCourseItemId(r.default.supplementsApi,s).then(function(e){return e.linked["openCourseAssets.v1"][0]})};exports.default=a}}]);
//# sourceMappingURL=en.19.cd2090b0c0855682619e.js.map