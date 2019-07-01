(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"/08F":function(module,exports,e){"use strict";(function(t){var n=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.NOTES_BY_MODULE=void 0;var a=n(e("RIqP")),r=n(e("VkAN")),o=n(e("lTCR")),i=e("oJmH"),l=e("YVUg");function _templateObject3(){var e=(0,r.default)(["\n  mutation UpdateNoteMutation ($noteId: String!, $noteDraft: DataMap!) {\n    UserNotesV1 @naptime {\n      update(id: $noteId, input: $noteDraft) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n      }\n    }\n  }\n"]);return _templateObject3=function _templateObject3(){return e},e}function _templateObject2(){var e=(0,r.default)(["\n  mutation DeleteNoteMutation ($noteId: String!) {\n    UserNotesV1 @naptime {\n      delete(id: $noteId) {\n        id\n      }\n    }\n  }\n"]);return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=(0,r.default)(["\n  query NotesModuleQuery ($courseId: String!, $moduleId: String!, $start: Int, $limit: Int) {\n    UserNotesV1 @naptime {\n      courseModuleWithContentSort(courseId: $courseId, moduleId: $moduleId, start: $start, limit: $limit) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n        paging\n      }\n    }\n  }\n"]);return _templateObject=function _templateObject(){return e},e}var u=function cloneData(e){return JSON.parse(JSON.stringify(e))},d=(0,o.default)(_templateObject());exports.NOTES_BY_MODULE=d;var s=function ModuleNotesQueryProvider(e){var n=e.course,module=e.module,r=e.pageSize,o=e.children;return t.createElement(i.Query,{query:d,variables:{courseId:n.id,moduleId:module.id,start:0,limit:r},notifyOnNetworkStatusChange:!0},function(e){var t,n,i,d,s,c,g=e.loading,f=e.error,m=e.data,v=e.fetchMore;if(f)return o({notes:null,onLastPage:!1,fetchNextPage:function fetchNextPage(){},error:!0,loadingInitialPage:!1,loadingNextPage:!1});if(g&&!(null===m||void 0===m?void 0:null===(t=m.UserNotesV1)||void 0===t?void 0:null===(n=t.courseModuleWithContentSort)||void 0===n?void 0:n.elements))return o({notes:null,onLastPage:!1,fetchNextPage:function fetchNextPage(){},error:!1,loadingInitialPage:!0,loadingNextPage:!1});var p=((null===m||void 0===m?void 0:null===(i=m.UserNotesV1)||void 0===i?void 0:null===(d=i.courseModuleWithContentSort)||void 0===d?void 0:d.elements)||[]).map(l.reshapeHighlightForClient),h=null===m||void 0===m?void 0:null===(s=m.UserNotesV1)||void 0===s?void 0:null===(c=s.courseModuleWithContentSort)||void 0===c?void 0:c.paging,x=!h||!h.next||h.total&&h.next>=h.total,N;return o({notes:p,fetchNextPage:function fetchNextPage(){v({variables:{start:p.length,limit:r},updateQuery:function updateQuery(e,t){var n=t.fetchMoreResult,r=u(e);if(!n)return r;var o=r;o.UserNotesV1.courseModuleWithContentSort.elements=[].concat((0,a.default)(e.UserNotesV1.courseModuleWithContentSort.elements),(0,a.default)(n.UserNotesV1.courseModuleWithContentSort.elements));var i=n.UserNotesV1.courseModuleWithContentSort.paging;return o.UserNotesV1.courseModuleWithContentSort.paging=i,o}})},onLastPage:x,error:!1,loadingInitialPage:!1,loadingNextPage:!!g})})},c=(0,o.default)(_templateObject2()),g=function ModuleNotesDeletionProvider(e){var n=e.course,module=e.module,a=e.pageSize,r=e.children;return t.createElement(i.Mutation,{mutation:c},function(e){var t;return r({deleteNote:function deleteNote(t){e({variables:{noteId:t},update:function update(e){var r,o,i=e.readQuery({query:d,variables:{courseId:n.id,moduleId:module.id,start:0,limit:a}}),l=u(i),s,c=((null===i||void 0===i?void 0:null===(r=i.UserNotesV1)||void 0===r?void 0:null===(o=r.courseModuleWithContentSort)||void 0===o?void 0:o.elements)||[]).filter(function(e){return e.id!==t}),g=l;g.UserNotesV1.courseModuleWithContentSort.elements=c,e.writeQuery({query:d,variables:{courseId:n.id,moduleId:module.id,start:0,limit:a},data:g})}})}})})},f=(0,o.default)(_templateObject3()),m=function ModuleNotesUpdateProvider(e){var n=e.children;return t.createElement(i.Mutation,{mutation:f},function(e){var t;return n({updateNote:function updateNote(t,n){e({variables:{noteId:t,noteDraft:n}})}})})},v,p=function ModuleNotesDataProvider(e){var n=e.course,module=e.module,a=e.pageSize,r=e.children;return t.createElement(s,{course:n,module:module,pageSize:a},function(e){var o=e.notes,i=e.fetchNextPage,l=e.error,u=e.loadingInitialPage,d=e.loadingNextPage,s=e.onLastPage;return t.createElement(g,{course:n,module:module,pageSize:a},function(e){var n=e.deleteNote;return t.createElement(m,null,function(e){var t=e.updateNote;return r({notes:o,onLastPage:s,fetchNextPage:i,deleteNote:n,updateNote:t,error:l,loadingInitialPage:u,loadingNextPage:d})})})})};exports.default=p}).call(this,e("sbe7"))},"4Q/t":function(module,exports,e){"use strict";var t=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.reshapeHighlightForClient=exports.getDraftFromHighlight=exports.generateHighlightFromCaptureButton=exports.generateHighlightFromTranscriptSelection=exports.getBlobFromDataURI=void 0;var n=t(e("h+TC")),a=t(e("ubj5")),r=e("UcWU"),o=function getBlobFromDataURI(e){for(var t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],a=new ArrayBuffer(t.length),r=new Uint8Array(a),o=0;o<t.length;o+=1)r[o]=t.charCodeAt(o);return new Blob([a],{type:n})};exports.getBlobFromDataURI=o;var i=function generateHighlightFromTranscriptSelection(e,t){var a=e.transcriptTextStartIndex,r=e.transcriptTextEndIndex,o=t.cues.filter(function(e){return e.index>=a.cueIndex&&e.index<=r.cueIndex}),i=o.reduce(function(e,t){var n=t.index,o=t.text,i=a.cueIndex,l=a.textIndex,u=r.cueIndex,d=r.textIndex;if(n===i){if(n===u)return"".concat(e).concat(o.substring(l,d+1));return"".concat(e).concat(o.substring(l))}if(n===u)return"".concat(e," ").concat(o.substring(0,d+1));return"".concat(e," ").concat(o)},""),l=(0,n.default)(),u=l,d=o[0],s,c=o[o.length-1].endTime,g,f,m="",v=!0,p=!1,h;return{id:l,clientId:u,captureTs:d.startTime,noteStartTs:d.startTime,noteEndTs:c,transcriptText:i,noteText:"",languageCode:t.languageCode,transcriptTextStartIndex:a,transcriptTextEndIndex:r,pendingCreate:!0,pendingUpdate:!1}};exports.generateHighlightFromTranscriptSelection=i;var l=function generateHighlightFromCaptureButton(e,t){var o=(0,n.default)(),i=o,l="",u=e.languageCode,d=t.currentTime(),s=(0,r.getAdjacentCues)(e.cues,d,u),c=s[0],g=s[s.length-1],f=s.reduce(function(e,t){if(t.index===c.index)return"".concat(e).concat(t.text);return"".concat(e," ").concat(t.text)},""),m={textIndex:0,cueIndex:c.index},v={textIndex:g.text.length-1,cueIndex:g.index},p=g.endTime,h,x=!0,N=!1,C;return{id:o,clientId:i,captureTs:d,noteStartTs:c.startTime,noteEndTs:p,transcriptText:f,noteText:"",languageCode:u,transcriptTextStartIndex:m,transcriptTextEndIndex:v,snapshotDataUrl:(0,a.default)(t),pendingCreate:!0,pendingUpdate:!1}};exports.generateHighlightFromCaptureButton=l;var u=function getDraftFromHighlight(e){var t=e.itemId,n=e.courseId,a=e.highlight,r=e.languageCode,o=a.noteStartTs,i=a.noteEndTs,l=a.captureTs,u=a.snapshotUrl,d=a.transcriptText,s=a.noteText,c=a.transcriptTextEndIndex,g=a.transcriptTextStartIndex;return{details:{typeName:"video",definition:{itemId:t,courseId:n,snapshotUrl:u||"",transcriptTextStartIndex:g,transcriptTextEndIndex:c,languageCode:r,transcriptText:d,noteEndTs:i&&1e3*i,captureTs:l&&1e3*l,noteStartTs:o&&1e3*o}},userNote:s}};exports.getDraftFromHighlight=u;var d=function reshapeHighlightForClient(e){var t=e.id,n=e.createdAt,a=e.updatedAt,r=e.userText,o=e.details.definition,i=o.noteEndTs,l=o.noteStartTs,u=o.captureTs,d=o.snapshotUrl,s=o.transcriptTextStartIndex,c=o.transcriptTextEndIndex,g=o.transcriptText,f,m,v;return{id:t,itemId:o.itemId,itemName:o.itemName,clientId:t,createdAt:n,updatedAt:a,languageCode:o.languageCode,noteText:r,noteEndTs:i&&i/1e3,noteStartTs:l&&l/1e3,captureTs:u&&u/1e3,snapshotUrl:d,transcriptTextStartIndex:s,transcriptTextEndIndex:c,transcriptText:g,pendingCreate:!1,pendingUpdate:!1}};exports.reshapeHighlightForClient=d},"5a0Z":function(module,exports,e){"use strict";var t=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=t(e("RIqP")),a=t(e("MVZn")),r=t(e("pVnL")),o=t(e("sbe7")),i=e("6gRZ"),l=t(e("Ne6o"));e("UVRO");var u=function FilterDropdownItem(e){var t=e.content,n=e.inMenu,a=e.onEnterKey,i,u=n?{role:"menuitem",tabIndex:0,onKeyDown:a&&function(e){"Enter"===e.key&&a()}}:{};return t&&"course"!==t.contentType?o.default.createElement("div",(0,r.default)({},u,{className:"content-name"}),t.name):o.default.createElement("span",u,(0,l.default)("All notes in this course"))},d,s=function NotesPageFilterDropdown(e){var t=e.course,r=e.modules,l=e.selectedContentId,d=e.onSelect,s=void 0===d?function(){}:d,c=l||t.id,g=(0,a.default)({contentType:"course"},t),f=r.map(function(module){return(0,a.default)({contentType:"module"},module)}),m=[g].concat((0,n.default)(f)),v=m.find(function(e){return e.id===c}),p=o.default.createElement("div",{className:"content-switcher-title"},o.default.createElement(u,{content:v,inMenu:!1}));return o.default.createElement("div",{className:"rc-NotesPageFilterDropdown"},o.default.createElement(i.DropdownButton,{title:p,onSelect:s},m.map(function(e){return o.default.createElement(i.MenuItem,{key:e.id,eventKey:e.id},o.default.createElement(u,{inMenu:!0,content:e,onEnterKey:function onEnterKey(){s(e.id)}}))})))};exports.default=s},AK1u:function(module,exports,e){var t=e("duPM"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},DiXE:function(module,exports,e){"use strict";(function(t){var n=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=n(e("MVZn")),r=n(e("VbXa")),o=e("Bgbc"),i=e("DpUQ"),l=n(e("Ihj9")),u=n(e("Ea9s")),d=n(e("Dyy4+")),s=e("4Q/t"),c=n(e("Ne6o"));e("lDT8");var g=(0,l.default)({type:"BUTTON"})(o.SvgButton),f,m=function(e){function NoteCard(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={isEditing:!1,isConfirmingDelete:!1,editNoteText:null},t.onDeleteClick=function(){t.setState({isConfirmingDelete:!0})},t.onDeleteConfirm=function(){var e;(0,t.props.deleteNote)(),t.setState({isConfirmingDelete:!1})},t.onDeleteCancel=function(){t.setState({isConfirmingDelete:!1})},t.onEditStart=function(){var e;if(!t.state.isEditing){var n=t.props.note;t.setState({isEditing:!0,editNoteText:n.noteText||""})}},t.onEditTextChange=function(e){t.setState({editNoteText:e})},t.onEditCancel=function(){t.setState({isEditing:!1,editNoteText:null})},t.onEditSave=function(){var e=t.props,n=e.note,r=e.course,o=e.updateNote,i=t.state.editNoteText;o((0,s.getDraftFromHighlight)({itemId:n.itemId,courseId:r.id,highlight:(0,a.default)({},n,{noteText:i}),languageCode:n.languageCode})),t.setState({isEditing:!1,editNoteText:null})},t.onNoteEditRef=function(e){e&&e.focus()},t}var n;return(0,r.default)(NoteCard,e),NoteCard.prototype.render=function render(){var e=this.props,n=e.note,a=e.course,r=this.state,l=r.isEditing,s=r.isConfirmingDelete,f=r.editNoteText;return t.createElement(o.Box,{rootClassName:"rc-NoteCard",htmlAttributes:{tabIndex:0},flexDirection:"row",justifyContent:"start",alignItems:"stretch"},t.createElement(u.default,{note:n,course:a}),t.createElement(o.Box,{rootClassName:"note-text-and-actions",flexDirection:"column",justifyContent:"start",alignItems:"stretch"},t.createElement(d.default,{editorRef:this.onNoteEditRef,note:n,editingState:{isEditing:l,editNoteText:f},isConfirmingDelete:s,onDeleteCancel:this.onDeleteCancel,onDeleteConfirm:this.onDeleteConfirm,onEditCancel:this.onEditCancel,onEditSave:this.onEditSave,onEditTextChange:this.onEditTextChange}),!(l||s)&&t.createElement(o.Box,{rootClassName:"action-buttons-row",justifyContent:"end",alignItems:"center"},t.createElement(g,{rootClassName:"note-card-button edit-button",htmlAttributes:{"aria-label":(0,c.default)("Edit"),tabIndex:0},trackingName:"note_edit_button",trackingData:{noteId:n.id},svgElement:t.createElement(i.SvgEdit,{size:24,color:o.color.lightGrayText,hoverColor:o.color.primary,title:(0,c.default)("Edit")}),type:"icon",size:"zero",onClick:this.onEditStart}),t.createElement(g,{rootClassName:"note-card-button delete-button",htmlAttributes:{"aria-label":(0,c.default)("Delete"),tabIndex:0},trackingName:"note_delete_button",trackingData:{noteId:n.id},svgElement:t.createElement(i.SvgTrash,{size:24,color:o.color.lightGrayText,hoverColor:o.color.primary,title:(0,c.default)("Delete")}),type:"icon",size:"zero",onClick:this.onDeleteClick}))))},NoteCard}(t.Component);exports.default=m}).call(this,e("sbe7"))},"Dyy4+":function(module,exports,e){"use strict";(function(t){var n=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=e("Bgbc"),r=n(e("Ihj9")),o=n(e("Ne6o"));e("oLhO");var i=(0,r.default)({type:"BUTTON"})(a.Button),l,u=function NoteCardNote(e){var n=e.note,r=e.editingState,l=e.isConfirmingDelete,u=e.onDeleteConfirm,d=e.onDeleteCancel,s=e.onEditTextChange,c=e.onEditSave,g=e.onEditCancel,f=e.editorRef;return t.createElement(a.Box,{rootClassName:"rc-NoteCardNote",flexDirection:"column",justifyContent:"start",alignItems:"stretch"},t.createElement("div",{className:"video-section-text","aria-label":(0,o.default)("Transcript")},n.transcriptText),!r.isEditing&&n.noteText&&n.noteText.length>0&&t.createElement("div",{className:"video-note-text-box video-note-text","aria-label":(0,o.default)("User Note")},n.noteText),r.isEditing&&t.createElement("textarea",{ref:f,className:"video-note-text-box video-note-editor",value:r.editNoteText,onChange:function onChange(e){var t=e.target.value;s(t)}}),r.isEditing&&t.createElement(a.Box,{rootClassName:"video-edit-actions",flexDirection:"row",justifyContent:"end",alignItems:"center"},t.createElement(i,{rootClassName:"edit-action-button edit-save-button",trackingName:"note_edit_save_button",trackingData:{noteId:n.id,oldText:n.noteText,newText:r.editNoteText},label:(0,o.default)("Save"),size:"sm",type:"primary",onClick:c}),t.createElement(i,{rootClassName:"edit-action-button edit-cancel-button",trackingName:"note_edit_cancel_button",trackingData:{noteId:n.id,oldText:n.noteText,newText:r.editNoteText},label:(0,o.default)("Cancel"),size:"sm",type:"default",onClick:g})),l&&t.createElement(a.Box,{rootClassName:"delete-confirm-container",justifyContent:"end",alignItems:"center"},t.createElement("div",{className:"delete-confirm-text"},(0,o.default)("Delete entire note?")),t.createElement(i,{rootClassName:"delete-confirm-button",size:"sm",type:"primary",label:(0,o.default)("Yes"),onClick:u,trackingName:"note_delete_confirm_button"}),t.createElement(i,{rootClassName:"delete-confirm-button",size:"sm",type:"secondary",label:(0,o.default)("No"),onClick:d,trackingName:"note_delete_cancel_button"})))};exports.default=u}).call(this,e("sbe7"))},Ea9s:function(module,exports,e){"use strict";(function(t){var n=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=e("Bgbc"),r=e("DpUQ"),o=e("9A5E"),i=e("vpZN"),l=e("UcWU"),u=n(e("Ne6o"));e("Il3Q");var d=function formatNoteClipDescription(e){var t=e.noteStartTs,n=e.noteEndTs,a=e.captureTs;if(t&&n)return"".concat((0,l.formatTime)(t)," - ").concat((0,l.formatTime)(n));return"".concat((0,l.formatTime)(a))},s=function constructItemLink(e,t,n){return"".concat((0,i.getCourseRootPath)(e),"/lecture/").concat(t,"?t=").concat(Math.trunc(n))},c=function HighlightItemInfo(e){var n=e.note,i=e.course;return t.createElement(a.Box,{rootClassName:"rc-NoteCardItemInfo highlight",flexDirection:"row",justifyContent:"start",alignItems:"start"},t.createElement(r.SvgVideo,{size:24,color:a.color.black}),t.createElement(a.Box,{rootClassName:"video-info-box",flexDirection:"column",justifyContent:"center",alignItems:"stretch"},t.createElement(o.TrackedLink2,{className:"nostyle",trackingName:"highlight_link",data:{itemId:n.itemId},href:s(i.slug,n.itemId,n.noteStartTs)},t.createElement("div",{className:"video-title","aria-label":(0,u.default)("Item Name")},n.itemName)),t.createElement("div",{className:"video-details","aria-label":(0,u.default)("Duration")},d(n))))},g=function HighlightItemInfoWithSnapshot(e){var n=e.note,r=e.course;return t.createElement(a.Box,{rootClassName:"rc-NoteCardItemInfo snapshot",flexDirection:"column",justifyContent:"center",alignItems:"stretch"},t.createElement(o.TrackedLink2,{className:"nostyle thumbnail-container",trackingName:"snapshot_link",data:{itemId:n.itemId},href:s(r.slug,n.itemId,n.noteStartTs)},t.createElement("div",{className:"thumbnail-overlay"},t.createElement("div",{className:"snapshot-link-text"},(0,u.default)("Go to video"))),t.createElement("img",{className:"snapshot-thumbnail",src:n.snapshotUrl,alt:"note"})),t.createElement("div",{className:"video-title","aria-label":(0,u.default)("Item Name")},n.itemName),t.createElement("div",{className:"video-details","aria-label":(0,u.default)("Duration")},d(n)))},f,m=function NoteCardItemInfo(e){var n=e.note,a=e.course;return n.snapshotUrl?t.createElement(g,{note:n,course:a}):t.createElement(c,{note:n,course:a})};exports.default=m}).call(this,e("sbe7"))},Il3Q:function(module,exports,e){var t=e("NEWV"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},IlkH:function(module,exports,e){"use strict";(function(t){var n=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=e("Bgbc"),r=e("DpUQ"),o=n(e("Ne6o"));e("kUh3");var i="https://s3.amazonaws.com/coursera_assets/learner/icon_note.svg",l="https://s3.amazonaws.com/coursera_assets/learner/icon_highlight.svg",u,d=function NotesReviewPageDataState(e){var n=e.dataState;return t.createElement(a.Box,{rootClassName:"rc-NotesReviewPageDataState",flexDirection:"column",justifyContent:"start",alignItems:"center"},"error"===n&&[t.createElement(r.SvgFail,{key:"icon",size:84,color:a.color.error}),t.createElement("div",{key:"message",className:"data-state-message headline-5-text"},(0,o.default)("There was an issue loading your notes data. Please try refreshing the page."))],"loading"===n&&[t.createElement(r.SvgLoaderSignal,{key:"icon",size:84}),t.createElement("div",{key:"message",className:"data-state-message headline-5-text"},(0,o.default)("Loading notes..."))],"empty"===n&&[t.createElement(a.Box,{justifyContent:"center",rootClassName:"state-icons"},t.createElement("img",{src:i,alt:(0,o.default)("Take notes"),className:"placeholder-icon"}),t.createElement("img",{src:l,alt:(0,o.default)("Highlight"),className:"placeholder-icon"})),t.createElement("div",{key:"message",className:"data-state-message headline-5-text"},(0,o.default)("You have not added any notes for this content. Go to course videos to take notes."))])};exports.default=d}).call(this,e("sbe7"))},Mc2R:function(module,exports,e){},NEWV:function(module,exports,e){},Ne6o:function(module,exports,e){var t=e("OIEB"),n=t.default?t.default:{},a,r=(0,e("HdzH").default)(n);r.getLocale=function(){return"en"},module.exports=r},OIEB:function(module,exports,e){"use strict";exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pt":true,"ru":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},"R+Yg":function(module,exports,e){var t=e("zIHK"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},Rb5M:function(module,exports,e){"use strict";(function(t){var n=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=n(e("RIqP")),r=n(e("VkAN")),o=n(e("lTCR")),i=e("oJmH"),l=e("YVUg");function _templateObject3(){var e=(0,r.default)(["\n  mutation UpdateNoteMutation ($noteId: String!, $noteDraft: DataMap!) {\n    UserNotesV1 @naptime {\n      update(id: $noteId, input: $noteDraft) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n      }\n    }\n  }\n"]);return _templateObject3=function _templateObject3(){return e},e}function _templateObject2(){var e=(0,r.default)(["\n  mutation DeleteNoteMutation ($noteId: String!) {\n    UserNotesV1 @naptime {\n      delete(id: $noteId) {\n        id\n      }\n    }\n  }\n"]);return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=(0,r.default)(["\n  query NotesDataQuery ($courseId: String!, $start: Int, $limit: Int) {\n    UserNotesV1 @naptime {\n      courseWithContentSort(courseId: $courseId, start: $start, limit: $limit) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n        paging\n      }\n    }\n  }\n"]);return _templateObject=function _templateObject(){return e},e}var u=function cloneData(e){return JSON.parse(JSON.stringify(e))},d=(0,o.default)(_templateObject()),s=function CourseNotesQueryProvider(e){var n=e.course,r=e.pageSize,o=e.children;return t.createElement(i.Query,{query:d,variables:{courseId:n.id,start:0,limit:r},notifyOnNetworkStatusChange:!0},function(e){var t,n,i,d,s,c,g=e.loading,f=e.error,m=e.data,v=e.fetchMore;if(f)return o({notes:null,onLastPage:!1,error:!0,fetchNextPage:function fetchNextPage(){},loadingInitialPage:!1,loadingNextPage:!1});if(g&&!(null===m||void 0===m?void 0:null===(t=m.UserNotesV1)||void 0===t?void 0:null===(n=t.courseWithContentSort)||void 0===n?void 0:n.elements))return o({notes:null,onLastPage:!1,error:!1,fetchNextPage:function fetchNextPage(){},loadingInitialPage:!0,loadingNextPage:!1});var p=((null===m||void 0===m?void 0:null===(i=m.UserNotesV1)||void 0===i?void 0:null===(d=i.courseWithContentSort)||void 0===d?void 0:d.elements)||[]).map(l.reshapeHighlightForClient),h=null===m||void 0===m?void 0:null===(s=m.UserNotesV1)||void 0===s?void 0:null===(c=s.courseWithContentSort)||void 0===c?void 0:c.paging,x=!h||!h.next||h.total&&h.next>=h.total,N;return o({notes:p,fetchNextPage:function fetchNextPage(){v({variables:{start:p.length,limit:r},updateQuery:function updateQuery(e,t){var n=t.fetchMoreResult,r=u(e);if(!n)return r;var o=r;o.UserNotesV1.courseWithContentSort.elements=[].concat((0,a.default)(e.UserNotesV1.courseWithContentSort.elements),(0,a.default)(n.UserNotesV1.courseWithContentSort.elements));var i=n.UserNotesV1.courseWithContentSort.paging;return o.UserNotesV1.courseWithContentSort.paging=i,o}})},onLastPage:x,error:!1,loadingInitialPage:!1,loadingNextPage:g})})},c=(0,o.default)(_templateObject2()),g=function CourseNotesDeletionProvider(e){var n=e.course,a=e.pageSize,r=e.children;return t.createElement(i.Mutation,{mutation:c},function(e){var t;return r({deleteNote:function deleteNote(t){e({variables:{noteId:t},update:function update(e){var r,o,i=e.readQuery({query:d,variables:{courseId:n.id,start:0,limit:a}}),l=u(i),s,c=((null===i||void 0===i?void 0:null===(r=i.UserNotesV1)||void 0===r?void 0:null===(o=r.courseWithContentSort)||void 0===o?void 0:o.elements)||[]).filter(function(e){return e.id!==t}),g=l;g.UserNotesV1.courseWithContentSort.elements=c,e.writeQuery({query:d,variables:{courseId:n.id,start:0,limit:a},data:g})}})}})})},f=(0,o.default)(_templateObject3()),m=function CourseNotesUpdateProvider(e){var n=e.children;return t.createElement(i.Mutation,{mutation:f},function(e){var t;return n({updateNote:function updateNote(t,n){e({variables:{noteId:t,noteDraft:n}})}})})},v,p=function CourseNotesDataProvider(e){var n=e.course,a=e.pageSize,r=e.children;return t.createElement(s,{course:n,pageSize:a},function(e){var o=e.notes,i=e.fetchNextPage,l=e.error,u=e.loadingInitialPage,d=e.loadingNextPage,s=e.onLastPage;return t.createElement(g,{course:n,pageSize:a},function(e){var n=e.deleteNote;return t.createElement(m,null,function(e){var t=e.updateNote;return r({notes:o,onLastPage:s,fetchNextPage:i,deleteNote:n,updateNote:t,error:l,loadingInitialPage:u,loadingNextPage:d})})})})};exports.default=p}).call(this,e("sbe7"))},Ttwl:function(module,exports,e){"use strict";(function(t){var n=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=e("1w3K"),r=e("Bgbc"),o=e("uhOI"),i=n(e("Ihj9")),l=n(e("DiXE")),u=n(e("Ne6o"));e("AK1u");var d=(0,i.default)({type:"BUTTON"})(r.ApiButton),s,c=function NotesCardList(e){var n=e.notes,i=e.course,s=e.fetchNextPage,c=e.onLastPage,g=e.deleteNote,f=e.updateNote,m=e.loadingPage;return t.createElement("div",{className:"rc-NotesCardList"},t.createElement("ul",{className:"nostyle note-card-list"},t.createElement(a.CSSTransitionGroup,{transitionEnter:!0,transitionLeave:!0,transitionName:"card-list-transition",transitionEnterTimeout:500,transitionLeaveTimeout:300},n.map(function(e){return t.createElement("li",{key:e.id},t.createElement(l.default,{note:e,course:i,deleteNote:function deleteNote(){return g(e.id)},updateNote:function updateNote(t){f(e.id,t)}}))}))),!c&&t.createElement(r.Box,{rootClassName:"notes-page-button-container",flexDirection:"column",justifyContent:"start",alignItems:"center"},t.createElement(d,{type:"secondary",rootClassName:"notes-next-page-button",trackingName:"next_notes_page",trackingData:{currentNoteCount:n.length},apiStatus:m?o.API_IN_PROGRESS:o.API_BEFORE_SEND,apiStatusAttributesConfig:{label:{API_BEFORE_SEND:(0,u.default)("See More Notes"),API_IN_PROGRESS:(0,u.default)("Loading Notes...")}},onClick:s})))};exports.default=c}).call(this,e("sbe7"))},UVRO:function(module,exports,e){var t=e("cDYO"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},UcWU:function(module,exports,e){"use strict";var t=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAdjacentCues=exports.getAdjancentCueIndices=exports.getSentenceCueIndices=exports.findCuesAroundTime=exports.buildParagraphs=exports.formatTime=exports.findCueIndexForTime=void 0;var n=t(e("bdFs")),a=1,r=function findCueIndexForTimeHelper(e,t,n,a){if(t>n)return-1;var r=n-Math.floor((n-t)/2);return a<e[r].startTime?findCueIndexForTimeHelper(e,t,r-1,a):r!==e.length-1&&a>=e[r+1].startTime?findCueIndexForTimeHelper(e,r+1,n,a):r},o=function findCueIndexForTime(e,t){return r(e,0,e.length-1,t)};exports.findCueIndexForTime=o;var i=function formatTime(e){var t="m:ss",a=1e3*e,r,o;return n.default.duration(a).hours()>0&&(t="h:m"+t),n.default.utc(a).format(t)};exports.formatTime=i;var l=function buildParagraphs(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],a,r,o;return e.forEach(function(e){r&&(o=e.startTime-r.endTime),(!a||o>=t)&&(a=[],n.push(a)),a.push(e),r=e}),n};exports.buildParagraphs=l;var u=function findCuesAroundTime(e,t){var n,a=e[o(e,t)];if(!a)return[];return[a]};exports.findCuesAroundTime=u;var d=function getSentenceCueIndices(e,t){for(var n=[],a=e-1;-1!==a;){var r=t[a];if("."===r.text[r.text.length-1])break;n.unshift(a),a-=1}for(var o=e;o<=t.length-1;){var i=t[o];if(n.push(o),"."===i.text[i.text.length-1])break;o+=1}return n};exports.getSentenceCueIndices=d;var s=function getAdjancentCueIndices(e,t){var n=[],a=[];return e>=2&&a.push(e-2),e>=1&&a.push(e-1),e<t-1&&n.push(e+1),e<t-2&&n.push(e+2),[].concat(a,[e],n)};exports.getAdjancentCueIndices=s;var c=function getAdjacentCues(e,t,n){var a=o(e,t);if(-1===a&&e.length>2)return[0,1,2].map(function(t){return e[t]});if(a<0||a>=e.length)return[];if("en"===n)return d(a,e).map(function(t){return e[t]});return s(a,e.length).map(function(t){return e[t]})};exports.getAdjacentCues=c},YVUg:function(module,exports,e){"use strict";var t=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.getCourseHighlights=exports.getHighlights=exports.deleteHighlight=exports.createHighlight=exports.updateHighlight=exports.reshapeHighlightForClient=void 0;var n=t(e("MVZn")),a=t(e("wiyT")),r=t(e("BDKN")),o=t(e("DnuM")),i=e("4Q/t"),l=(0,o.default)("/api/userNotes.v1",{type:"rest"}),u=function uploadSnapshot(e,t){return new a.default.Promise(function(n,a){var u=(new r.default).addQueryParam("action","getScreenShotUploadUrl").addQueryParam("id",e);l.post(u.toString()).then(function(a){var r=(0,i.getBlobFromDataURI)(t),l;(0,o.default)(a,{type:"rest"}).put("",{contentType:"image/png",data:r,processData:!1}).then(function(t){var a=e.split("~")[1];n("https://s3.amazonaws.com/coursera-video-thumbnail-notes/web/".concat(a))})})})},d=function reshapeHighlightForClient(e){var t=e.id,n=e.createdAt,a=e.updatedAt,r=e.userText,o=e.details.definition,i=o.noteEndTs,l=o.noteStartTs,u=o.captureTs,d=o.snapshotUrl,s=o.transcriptTextStartIndex,c=o.transcriptTextEndIndex,g=o.transcriptText,f,m,v;return{id:t,itemId:o.itemId,itemName:o.itemName,clientId:t,createdAt:n,updatedAt:a,languageCode:o.languageCode,noteText:r,noteEndTs:i&&i/1e3,noteStartTs:l&&l/1e3,captureTs:u&&u/1e3,snapshotUrl:d,transcriptTextStartIndex:s,transcriptTextEndIndex:c,transcriptText:g,pendingCreate:!1,pendingUpdate:!1}};exports.reshapeHighlightForClient=d;var s=function updateHighlight(e){var t=e.itemId,n=e.courseId,a=e.languageCode,o=e.id,u=e.highlight,d=new r.default(o),s=(0,i.getDraftFromHighlight)({itemId:t,courseId:n,highlight:u,languageCode:a});return l.put(d.toString(),{data:s})};exports.updateHighlight=s;var c=function createHighlight(e){var t=e.itemId,r=e.courseId,o=e.languageCode,d=e.highlight,c=(0,i.getDraftFromHighlight)({itemId:t,courseId:r,highlight:d,languageCode:o});if(d.snapshotDataUrl)return new a.default.Promise(function(e,a){l.post("",{data:c}).then(function(i){var l,c=i.elements[0].id;if(!d.snapshotDataUrl)return void a();u(c,d.snapshotDataUrl).then(function(a){s({itemId:t,courseId:r,languageCode:o,id:c,highlight:(0,n.default)({},d,{snapshotUrl:a})}).then(function(){e({id:c,snapshotUrl:a})})})})});return l.post("",{data:c}).then(function(e){return e.elements[0]})};exports.createHighlight=c;var g=function deleteHighlight(e){var t=e.itemId,n=e.courseId,a=e.languageCode,o=e.id,i=new r.default(o);return l.delete(i.toString())};exports.deleteHighlight=g;var f=function getHighlights(e){var t=e.itemId,n=e.courseId,a=e.languageCode,o=(new r.default).addQueryParam("itemId",t).addQueryParam("courseId",n).addQueryParam("languageCode",a).addQueryParam("q","courseItemLanguageCode").addQueryParam("fields","id, userText, createdAt, updatedAt, details");return l.get(o.toString()).then(function(e){return e.elements.map(d)})};exports.getHighlights=f;var m=function getCourseHighlights(e){var t=e.courseId,n=(new r.default).addQueryParam("courseId",t).addQueryParam("q","course").addQueryParam("fields","id, userText, createdAt, updatedAt, details");return l.get(n.toString()).then(function(e){return e.elements.map(d)})};exports.getCourseHighlights=m},cDYO:function(module,exports,e){},duPM:function(module,exports,e){},gBgk:function(module,exports,e){"use strict";(function(t){var n=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=n(e("Rb5M")),r=n(e("/08F")),o,i=function ContentNotesDataProvider(e){var n=e.contentType,o=e.course,module=e.module,i=e.pageSize,l=void 0===i?10:i,u=e.children;return"module"===n?t.createElement(r.default,{course:o,module:module,pageSize:l},function(e){return u(e)}):t.createElement(a.default,{course:o,pageSize:l},function(e){return u(e)})};exports.default=i}).call(this,e("sbe7"))},"gy+W":function(module,exports,e){"use strict";var t=e("284h"),n=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=n(e("VbXa")),r=t(e("sbe7")),o=n(e("q3BH")),i=n(e("Ttwl")),l=n(e("5a0Z")),u=n(e("IlkH")),d=n(e("xUaB")),s=n(e("gBgk")),c=n(e("Ne6o"));e("R+Yg");var g=20,f=function(e){function NotesReviewPageWithCourseData(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={selectedContentId:null},t.onContentSelect=function(e){t.setState({selectedContentId:e})},t}var t;return(0,a.default)(NotesReviewPageWithCourseData,e),NotesReviewPageWithCourseData.prototype.render=function render(){var e=this.props,t=e.course,n=e.modules,a,o=this.state.selectedContentId||t.id,d=o===t.id?t:n.find(function(module){return module.id===o}),g=o===t.id?"course":"module";return r.createElement("div",{className:"rc-NotesReviewPage"},r.createElement("h1",{className:"notes-header headline-6-text"},(0,c.default)("Notes")),r.createElement(l.default,{course:t,modules:n,selectedContentId:o,onSelect:this.onContentSelect}),r.createElement(s.default,{pageSize:20,contentType:g,course:t,module:"module"===g&&d?d:null},function(e){var n=e.notes,a=e.onLastPage,o=e.fetchNextPage,l=e.error,d=e.loadingInitialPage,s=e.loadingNextPage,c=e.updateNote,g=e.deleteNote;if(l)return r.createElement(u.default,{dataState:"error"});if(d)return r.createElement(u.default,{dataState:"loading"});if(!n||0===n.length)return r.createElement(u.default,{dataState:"empty"});return r.createElement(i.default,{course:t,notes:n,onLastPage:a,fetchNextPage:o,updateNote:c,deleteNote:g,loadingPage:s})}))},NotesReviewPageWithCourseData}(r.Component),m=o.default.createTrackedContainer(function(e){var t;return{namespace:{page:"notes_review"},course_id:e.course.id}})(f),v,p=function NotesReviewPage(e){var t=e.params.courseSlug;return r.createElement(d.default,{courseSlug:t},function(e){var t=e.course,n=e.modules,a=e.error,o=e.loading;if(a)return r.createElement(u.default,{dataState:"error"});if(o)return r.createElement(u.default,{dataState:"loading"});return r.createElement(m,{course:t,modules:n})})};exports.default=p},"h+TC":function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t,n=function generateUUID(){var e=(new Date).getTime(),t;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:7&n|8).toString(16)})};exports.default=n},kUh3:function(module,exports,e){var t=e("wIBC"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},lDT8:function(module,exports,e){var t=e("uEqH"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},oLhO:function(module,exports,e){var t=e("Mc2R"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},uEqH:function(module,exports,e){},ubj5:function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function _default(e){var t=document.createElement("canvas");t.width=960,t.height=540;var n=e.el().querySelector("video");return t.getContext("2d").drawImage(n,0,0,t.width,t.height),t.toDataURL("image/jpeg")};exports.default=t},wIBC:function(module,exports,e){},xUaB:function(module,exports,e){"use strict";(function(t){var n=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.CourseContentDataProvider=exports.courseMaterialsQuery=void 0;var a=n(e("VkAN")),r=n(e("lTCR")),o=e("oJmH");function _templateObject(){var e=(0,a.default)(['\n  query CourseMaterialsQuery($slug: String!) {\n    OnDemandCourseMaterialsV2 @naptime {\n      slug(slug: $slug, showHidden: true, includes: "modules") {\n        elements {\n          id\n          name\n        }\n        linked {\n          onDemandCourseMaterialModulesV1 {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n']);return _templateObject=function _templateObject(){return e},e}var i=(0,r.default)(_templateObject());exports.courseMaterialsQuery=i;var l=function CourseContentDataProvider(e){var n=e.courseSlug,a=e.children;return t.createElement(o.Query,{query:i,variables:{slug:n}},function(e){var t,r,o,i,l,u,d,s=e.loading,c=e.error,g=e.data;if(c||s)return a({course:null,modules:null,error:!!c,loading:!!s});var f=null===(t=g.OnDemandCourseMaterialsV2)||void 0===t?void 0:null===(r=t.slug)||void 0===r?void 0:r.elements[0].id,m=null===(o=g.OnDemandCourseMaterialsV2)||void 0===o?void 0:null===(i=o.slug)||void 0===i?void 0:i.elements[0].name,v=null===(l=g.OnDemandCourseMaterialsV2)||void 0===l?void 0:null===(u=l.slug)||void 0===u?void 0:null===(d=u.linked)||void 0===d?void 0:d.onDemandCourseMaterialModulesV1;return a({course:{id:f,name:m,slug:n},modules:v,error:!1,loading:!1})})};exports.CourseContentDataProvider=l;var u=l;exports.default=u}).call(this,e("sbe7"))},zIHK:function(module,exports,e){}}]);
//# sourceMappingURL=en.50.654d2eec60c9a384d185.js.map