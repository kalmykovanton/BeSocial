(this.webpackJsonpbesocial=this.webpackJsonpbesocial||[]).push([[4],{302:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t(37),s=t(38),r=t(40),l=t(39),i=t(41),o=t(0),u=t.n(o),c=t(10),d=t(30),p=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var a=function(a){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,a),Object(s.a)(t,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(d.a,{to:"/login"})}}]),t}(u.a.Component);return Object(c.b)(p)(a)}},307:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,s=t(308),r=(n=s)&&n.__esModule?n:{default:n};a.default=r.default},308:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),s=t(0),r=u(s),l=u(t(3)),i=u(t(309)),o=u(t(310));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));t.handlePreviousPage=function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)},t.handleNextPage=function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)},t.handlePageSelected=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))},t.handleBreakClick=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)},t.callCallback=function(e){"undefined"!==typeof t.props.onPageChange&&"function"===typeof t.props.onPageChange&&t.props.onPageChange({selected:e})},t.pagination=function(){var e=[],a=t.props,n=a.pageRangeDisplayed,s=a.pageCount,l=a.marginPagesDisplayed,i=a.breakLabel,u=a.breakClassName,c=a.breakLinkClassName,d=t.state.selected;if(s<=n)for(var p=0;p<s;p++)e.push(t.getPageElement(p));else{var f=n/2,g=n-f;d>s-n/2?f=n-(g=s-d):d<n/2&&(g=n-(f=d));var m=void 0,b=void 0,C=void 0,h=function(e){return t.getPageElement(e)};for(m=0;m<s;m++)(b=m+1)<=l?e.push(h(m)):b>s-l?e.push(h(m)):m>=d-f&&m<=d+g?e.push(h(m)):i&&e[e.length-1]!==C&&(C=r.default.createElement(o.default,{key:m,breakLabel:i,breakClassName:u,breakLinkClassName:c,onClick:t.handleBreakClick.bind(null,m)}),e.push(C))}return e};var n=void 0;return n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:n},t}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),n(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,n=e.extraAriaContext;"undefined"===typeof a||t||this.callCallback(a),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){"undefined"!==typeof this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,n=e+a.pageRangeDisplayed;return n>=t?t-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<n)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,n=t.pageClassName,s=t.pageLinkClassName,l=t.activeClassName,o=t.activeLinkClassName,u=t.extraAriaContext;return r.default.createElement(i.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:n,pageLinkClassName:s,activeClassName:l,activeLinkClassName:o,extraAriaContext:u,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.previousClassName,n=e.nextClassName,s=e.pageCount,l=e.containerClassName,i=e.previousLinkClassName,o=e.previousLabel,u=e.nextLinkClassName,c=e.nextLabel,d=this.state.selected,p=t+(0===d?" "+a:""),f=n+(d===s-1?" "+a:""),g=0===d?"true":"false",m=d===s-1?"true":"false";return r.default.createElement("ul",{className:l},r.default.createElement("li",{className:p},r.default.createElement("a",{onClick:this.handlePreviousPage,className:i,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":g},o)),this.pagination(),r.default.createElement("li",{className:f},r.default.createElement("a",{onClick:this.handleNextPage,className:u,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":m},c)))}}]),a}(s.Component);c.propTypes={pageCount:l.default.number.isRequired,pageRangeDisplayed:l.default.number.isRequired,marginPagesDisplayed:l.default.number.isRequired,previousLabel:l.default.node,nextLabel:l.default.node,breakLabel:l.default.oneOfType([l.default.string,l.default.node]),hrefBuilder:l.default.func,onPageChange:l.default.func,initialPage:l.default.number,forcePage:l.default.number,disableInitialCallback:l.default.bool,containerClassName:l.default.string,pageClassName:l.default.string,pageLinkClassName:l.default.string,activeClassName:l.default.string,activeLinkClassName:l.default.string,previousClassName:l.default.string,nextClassName:l.default.string,previousLinkClassName:l.default.string,nextLinkClassName:l.default.string,disabledClassName:l.default.string,breakClassName:l.default.string,breakLinkClassName:l.default.string,extraAriaContext:l.default.string,ariaLabelBuilder:l.default.func},c.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},a.default=c},309:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(t(0)),s=r(t(3));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var a=e.pageClassName,t=e.pageLinkClassName,s=e.onClick,r=e.href,l=e.ariaLabel||"Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),i=null;return e.selected&&(i="page",l=e.ariaLabel||"Page "+e.page+" is your current page",a="undefined"!==typeof a?a+" "+e.activeClassName:e.activeClassName,"undefined"!==typeof t?"undefined"!==typeof e.activeLinkClassName&&(t=t+" "+e.activeLinkClassName):t=e.activeLinkClassName),n.default.createElement("li",{className:a},n.default.createElement("a",{onClick:s,role:"button",className:t,href:r,tabIndex:"0","aria-label":l,"aria-current":i,onKeyPress:s},e.page))};l.propTypes={onClick:s.default.func.isRequired,selected:s.default.bool.isRequired,pageClassName:s.default.string,pageLinkClassName:s.default.string,activeClassName:s.default.string,activeLinkClassName:s.default.string,extraAriaContext:s.default.string,href:s.default.string,ariaLabel:s.default.string,page:s.default.number.isRequired},a.default=l},310:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(t(0)),s=r(t(3));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var a=e.breakLabel,t=e.breakClassName,s=e.breakLinkClassName,r=e.onClick,l=t||"break";return n.default.createElement("li",{className:l},n.default.createElement("a",{className:s,onClick:r,role:"button",tabIndex:"0",onKeyPress:r},a))};l.propTypes={breakLabel:s.default.oneOfType([s.default.string,s.default.node]),breakClassName:s.default.string,breakLinkClassName:s.default.string,onClick:s.default.func.isRequired},a.default=l},311:function(e,a,t){e.exports={container:"Users_container__1g6iF",paginator:"Users_paginator__S_jb5",paginatorItems:"Users_paginatorItems__1KPuP",break:"Users_break__UvnXT",next:"Users_next__1WuJ2",previous:"Users_previous__3dWti",paginatorItemsActive:"Users_paginatorItemsActive__R9aqu",user:"Users_user__1_oz_",avatar:"Users_avatar__3tuws",img:"Users_img__2rTvd",followButton:"Users_followButton__3O1px",info:"Users_info__1V5w6",name:"Users_name__14Zet",location:"Users_location__2-GUy",buttonContainer:"Users_buttonContainer__bxLps",moreButton:"Users_moreButton__2Vl7W"}},314:function(e,a,t){"use strict";t.r(a);var n=t(37),s=t(38),r=t(40),l=t(39),i=t(41),o=t(0),u=t.n(o),c=t(10),d=function(e){return e.usersPage.users},p=function(e){return e.usersPage.totalUsersCount},f=function(e){return e.usersPage.currentPage},g=function(e){return e.usersPage.pageSize},m=function(e){return e.usersPage.isFetching},b=function(e){return e.usersPage.isFollowingInProgress},C=t(132),h=t(307),v=t.n(h),k=t(311),N=t.n(k),P=t(28),_=t.n(P),y=t(42),x=t(19),L=function(e){var a=Math.ceil(e.totalUsersCount/e.pageSize);return u.a.createElement("div",{className:N.a.container},e.isFetching?u.a.createElement(y.a,null):null,u.a.createElement(v.a,{pageCount:a,pageRangeDisplayed:3,marginPagesDisplayed:2,pageClassName:N.a.paginatorItems,activeClassName:N.a.paginatorItemsActive,c:!0,containerClassName:N.a.paginator,onPageChange:function(a){return e.setCurrentPage(a)},breakLabel:"...",nextClassName:N.a.next,previousClassName:N.a.previous,breakClassName:N.a.break}),e.users.map((function(a){return u.a.createElement("div",{className:N.a.user,key:a.id},u.a.createElement("div",{className:N.a.avatar},u.a.createElement("div",null,u.a.createElement(x.b,{to:"/profile/".concat(a.id)},u.a.createElement("img",{className:N.a.img,src:a.photos.small?a.photos.small:_.a,alt:"ava"}))),u.a.createElement("div",null,a.followed?u.a.createElement("button",{disabled:e.isFollowingInProgress.some((function(e){return e===a.id})),onClick:function(){e.unfollow(a.id)},className:N.a.followButton},"Unfollow"):u.a.createElement("button",{disabled:e.isFollowingInProgress.some((function(e){return e===a.id})),onClick:function(){e.follow(a.id)},className:N.a.followButton},"Follow"))),u.a.createElement("div",{className:N.a.info},u.a.createElement(x.b,{to:"/profile/".concat(a.id),className:N.a.name},u.a.createElement("div",{className:N.a.name},a.name)),u.a.createElement("div",null,a.status)),u.a.createElement("div",{className:N.a.location},u.a.createElement("div",null,"City: ","user.location.city"),u.a.createElement("div",null,"Country: ","user.location.country")))})),u.a.createElement("div",{className:N.a.buttonContainer},u.a.createElement("button",{className:N.a.moreButton},"More Users")))},E=t(7),w=t(302),U=function(e){function a(){var e,t;Object(n.a)(this,a);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(t=Object(r.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).setCurrentPage=function(e){var a=e.selected+1;t.props.setCurrentPage(a),t.props.requestUsers(a,t.props.pageSize)},t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return u.a.createElement(L,{setCurrentPage:this.setCurrentPage,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,isFatching:this.props.isFetching,isFollowingInProgress:this.props.isFollowingInProgress})}}]),a}(u.a.Component);a.default=Object(E.d)(w.a,Object(c.b)((function(e){return{users:d(e),totalUsersCount:p(e),currentPage:f(e),pageSize:g(e),isFetching:m(e),isFollowingInProgress:b(e)}}),{follow:C.b,unfollow:C.e,setCurrentPage:C.d,requestUsers:C.c}))(U)}}]);
//# sourceMappingURL=4.f193567c.chunk.js.map