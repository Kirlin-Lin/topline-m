(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a07f91ec"],{"1b59":function(t,e,r){"use strict";var n=r("c311"),a=r.n(n);a.a},2423:function(t,e,r){"use strict";r.d(e,"f",(function(){return a})),r.d(e,"e",(function(){return i})),r.d(e,"b",(function(){return s})),r.d(e,"d",(function(){return c})),r.d(e,"g",(function(){return o})),r.d(e,"h",(function(){return u})),r.d(e,"i",(function(){return l})),r.d(e,"j",(function(){return f})),r.d(e,"a",(function(){return d})),r.d(e,"c",(function(){return p}));var n=r("b775");function a(t){return Object(n["a"])({method:"GET",url:"/app/v1_1/articles",params:t})}function i(t){return Object(n["a"])({method:"GET",url:"/app/v1_0/articles/".concat(t)})}function s(t){return Object(n["a"])({method:"POST",url:"/app/v1_0/article/likings",data:{target:t}})}function c(t){return Object(n["a"])({method:"DELETE",url:"/app/v1_0/article/likings/".concat(t)})}function o(t,e){return Object(n["a"])({method:"GET",url:"/app/v1_0/users/".concat(t,"/articles"),params:e})}function u(t){return Object(n["a"])({method:"GET",url:"/app/v1_0/user/articles",params:t})}function l(t){return Object(n["a"])({method:"GET",url:"/app/v1_0/article/collections",params:t})}function f(t){return Object(n["a"])({method:"GET",url:"/app/v1_0/user/histories",params:t})}function d(t){return Object(n["a"])({method:"POST",url:"/app/v1_0/article/collections",data:{target:t}})}function p(t){return Object(n["a"])({method:"DELETE",url:"/app/v1_0/article/collections/".concat(t)})}},2909:function(t,e,r){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("e260"),r("0d03"),r("d3b7"),r("25f0"),r("3ca3"),r("ddb0");function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){return n(t)||a(t)||i()}r.d(e,"a",(function(){return s}))},"32b4":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.value,(function(e,n){return r("div",{key:n},[t._t("default",[t._v(t._s(e))],{item:e})],2)})),0)},a=[],i=(r("a9e3"),r("d3b7"),r("2909")),s=(r("96cf"),{name:"LoadingList",components:{},props:{fn:{type:Function,required:!0},value:{type:Array,default:function(){return[]}},totalCount:{type:Number}},data:function(){return{loading:!1,finished:!1,page:null,perPage:10}},computed:{},watch:{},created:function(){},methods:{onLoad:function(){var t,e,r,n,a,s;return regeneratorRuntime.async((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,regeneratorRuntime.awrap(this.fn({page:this.page,per_page:this.perPage}));case 2:e=c.sent,r=e.data,n=r.data,a=n.results,s=n.total_count,(t=this.value).push.apply(t,Object(i["a"])(a)),this.$emit("update:total-count",s),this.loading=!1,a.length?this.page++:this.finished=!0;case 9:case"end":return c.stop()}}),null,this)}}}),c=s,o=(r("1b59"),r("2877")),u=Object(o["a"])(c,n,a,!1,null,"f9d6c224",null);e["a"]=u.exports},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,a=r("69f3"),i=r("7dd0"),s="String Iterator",c=a.set,o=a.getterFor(s);i(String,"String",(function(t){c(this,{type:s,string:String(t),index:0})}),(function(){var t,e=o(this),r=e.string,a=e.index;return a>=r.length?{value:void 0,done:!0}:(t=n(r,a),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("f8c2"),a=r("7b0b"),i=r("9bdd"),s=r("e95a"),c=r("50c4"),o=r("8418"),u=r("35a1");t.exports=function(t){var e,r,l,f,d,p=a(t),v="function"==typeof this?this:Array,h=arguments.length,b=h>1?arguments[1]:void 0,m=void 0!==b,g=0,_=u(p);if(m&&(b=n(b,h>2?arguments[2]:void 0,2)),void 0==_||v==Array&&s(_))for(e=c(p.length),r=new v(e);e>g;g++)o(r,g,m?b(p[g],g):p[g]);else for(f=_.call(p),d=f.next,r=new v;!(l=d.call(f)).done;g++)o(r,g,m?i(f,b,[l.value,g],!0):l.value);return r.length=g,r}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),a=r("5899"),i="["+a+"]",s=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),o=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(s,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:o(1),end:o(2),trim:o(3)}},"647d":function(t,e,r){"use strict";var n=r("7198"),a=r.n(n);a.a},6547:function(t,e,r){var n=r("a691"),a=r("1d80"),i=function(t){return function(e,r){var i,s,c=String(a(e)),o=n(r),u=c.length;return o<0||o>=u?t?"":void 0:(i=c.charCodeAt(o),i<55296||i>56319||o+1===u||(s=c.charCodeAt(o+1))<56320||s>57343?t?c.charAt(o):i:t?c.slice(o,o+2):s-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},7156:function(t,e,r){var n=r("861d"),a=r("d2bb");t.exports=function(t,e,r){var i,s;return a&&"function"==typeof(i=e.constructor)&&i!==r&&n(s=i.prototype)&&s!==r.prototype&&a(t,s),t}},7198:function(t,e,r){},"972b":function(t,e,r){"use strict";var n=r("c2b2"),a=r.n(n);a.a},a434:function(t,e,r){"use strict";var n=r("23e7"),a=r("23cb"),i=r("a691"),s=r("50c4"),c=r("7b0b"),o=r("65f0"),u=r("8418"),l=r("1dde"),f=Math.max,d=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!l("splice")},{splice:function(t,e){var r,n,l,h,b,m,g=c(this),_=s(g.length),y=a(t,_),O=arguments.length;if(0===O?r=n=0:1===O?(r=0,n=_-y):(r=O-2,n=d(f(i(e),0),_-y)),_+r-n>p)throw TypeError(v);for(l=o(g,n),h=0;h<n;h++)b=y+h,b in g&&u(l,h,g[b]);if(l.length=n,r<n){for(h=y;h<_-n;h++)b=h+n,m=h+r,b in g?g[m]=g[b]:delete g[m];for(h=_;h>_-n+r;h--)delete g[h-1]}else if(r>n)for(h=_-n;h>y;h--)b=h+n-1,m=h+r-1,b in g?g[m]=g[b]:delete g[m];for(h=0;h<r;h++)g[h+y]=arguments[h+2];return g.length=_-n+r,l}})},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),i=r("1c7e"),s=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:s},{from:a})},a9e3:function(t,e,r){"use strict";var n=r("83ab"),a=r("da84"),i=r("94ca"),s=r("6eeb"),c=r("5135"),o=r("c6b6"),u=r("7156"),l=r("c04e"),f=r("d039"),d=r("7c73"),p=r("241c").f,v=r("06cf").f,h=r("9bf2").f,b=r("58a8").trim,m="Number",g=a[m],_=g.prototype,y=o(d(_))==m,O=function(t){var e,r,n,a,i,s,c,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=b(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(i=u.slice(2),s=i.length,c=0;c<s;c++)if(o=i.charCodeAt(c),o<48||o>a)return NaN;return parseInt(i,n)}return+u};if(i(m,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var w,x=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof x&&(y?f((function(){_.valueOf.call(r)})):o(r)!=m)?u(new g(O(e)),r,x):O(e)},j=n?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;j.length>C;C++)c(g,w=j[C])&&!c(x,w)&&h(x,w,v(g,w));x.prototype=_,_.constructor=x,s(a,m,x)}},aa05:function(t,e,r){},b0c0:function(t,e,r){var n=r("83ab"),a=r("9bf2").f,i=Function.prototype,s=i.toString,c=/^\s*function ([^ (]*)/,o="name";!n||o in i||a(i,o,{configurable:!0,get:function(){try{return s.call(this).match(c)[1]}catch(t){return""}}})},c2b2:function(t,e,r){},c311:function(t,e,r){},c975:function(t,e,r){"use strict";var n=r("23e7"),a=r("4d64").indexOf,i=r("b301"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,o=i("indexOf");n({target:"Array",proto:!0,forced:c||o},{indexOf:function(t){return c?s.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},d28b:function(t,e,r){var n=r("746f");n("iterator")},da14:function(t,e,r){"use strict";var n=r("aa05"),a=r.n(n);a.a},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),i=r("da84"),s=r("5135"),c=r("861d"),o=r("9bf2").f,u=r("e893"),l=i.Symbol;if(a&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(d,l);var p=d.prototype=l.prototype;p.constructor=d;var v=p.toString,h="Symbol(test)"==String(l("test")),b=/^Symbol\((.*)\)[^)]+$/;o(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=v.call(t);if(s(f,t))return"";var r=h?e.slice(7,-1):e.replace(b,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e382:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-container page-container"},[r("van-nav-bar",{staticClass:"page-navbar",attrs:{fixed:"","left-arrow":"",title:t.user.name},on:{"click-left":function(e){return t.$router.back()}}}),r("user-info",{attrs:{user:t.user}}),r("loading-list",{attrs:{fn:t.getArticlesByUser},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.item;return[r("article-item",{attrs:{article:e}})]}}])})],1)},a=[],i=(r("c975"),r("fb6a"),r("a434"),r("b0c0"),r("a9e3"),r("d3b7"),r("96cf"),r("c24f")),s=r("2423"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-info-container"},[r("div",{staticClass:"row1"},[r("van-image",{staticClass:"col1",attrs:{fit:"cover",round:"",src:t.user.photo},on:{click:function(e){return t.onPreview(t.user.photo)}}}),r("div",{staticClass:"col2"},[r("div",{staticClass:"row1"},[r("div",{staticClass:"item"},[r("div",{staticClass:"count"},[t._v(t._s(t.user.art_count))]),r("div",{staticClass:"text"},[t._v("发布")])]),r("div",{staticClass:"item"},[r("div",{staticClass:"count"},[t._v(t._s(t.user.follow_count))]),r("div",{staticClass:"text"},[t._v("关注")])]),r("div",{staticClass:"item"},[r("div",{staticClass:"count"},[t._v(t._s(t.user.fans_count))]),r("div",{staticClass:"text"},[t._v("粉丝")])]),r("div",{staticClass:"item"},[r("div",{staticClass:"count"},[t._v(t._s(t.user.like_count))]),r("div",{staticClass:"text"},[t._v("获赞")])])]),r("div",[t.sessionUser&&t.user.id===t.sessionUser.id?r("van-button",{attrs:{type:"default",size:"small"},on:{click:function(e){return t.$router.push("/profile")}}},[t._v("编辑资料")]):r("follow-user",{attrs:{"user-id":t.user.id},model:{value:t.user.is_following,callback:function(e){t.$set(t.user,"is_following",e)},expression:"user.is_following"}})],1)])],1),r("div",{staticClass:"intro-wrap"},[t.user.is_media?r("div",[r("span",[t._v("认证：")]),r("span",[t._v(t._s(t.user.certi))])]):t._e(),r("div",[r("span",[t._v("简介：")]),r("span",[t._v(t._s(t.user.intro))])])])])},o=[],u=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("cea6"),r("28a2")),l=r("ade3"),f=r("f50e"),d=r("2f62");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){Object(l["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={name:"UserInfo",props:{user:{type:Object,required:!0}},components:{FollowUser:f["a"]},computed:v({},Object(d["b"])({sessionUser:function(t){return t.user}})),methods:{onPreview:function(t){Object(u["a"])([t])}}},b=h,m=(r("da14"),r("2877")),g=Object(m["a"])(b,c,o,!1,null,"8befe934",null),_=g.exports,y=r("32b4"),O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-item",on:{click:function(e){t.$router.push({name:"article",params:{articleId:t.article.art_id.toString()}})}}},[r("div",{staticClass:"author"},[r("van-image",{staticClass:"avatar",attrs:{round:"",fit:"cover",src:"https://img.yzcdn.cn/vant/cat.jpeg"}}),r("div",[r("div",{staticClass:"name"},[t._v(t._s(t.article.aut_name))]),r("div",{staticClass:"date"},[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])])],1),t.article.cover.type?r("div",{staticClass:"title-cover"},[r("div",{staticClass:"title"},[t._v(t._s(t.article.title))]),r("van-image",{staticClass:"cover",attrs:{fit:"cover",src:t.article.cover.images[0]}})],1):r("div",{staticClass:"title"},[t._v(t._s(t.article.title))]),r("div",{staticClass:"action"},[r("div",{staticClass:"action-item"},[r("van-icon",{staticClass:"comment-icon",attrs:{name:"comment-o"}}),r("span",[t._v(t._s(t.article.comm_count))])],1),r("div",{staticClass:"action-item"},[r("van-icon",{attrs:{name:"good-job-o"}}),r("span",[t._v(t._s(t.article.like_count))])],1),r("div",{staticClass:"action-item"},[r("van-icon",{attrs:{name:"star-o"}}),r("span",[t._v(t._s(t.article.collect_count))])],1)])])},w=[],x={name:"",components:{},props:{article:{type:Object,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},methods:{}},j=x,C=(r("647d"),Object(m["a"])(j,O,w,!1,null,"5716a1e9",null)),A=C.exports,E={beforeRouteLeave:function(t,e,r){var n=this.$store.state.keepAlive.slice(),a=n.indexOf("UserPage");"article"===t.name?-1===a&&n.push("UserPage"):-1!==a&&n.splice(a,1),this.$store.commit("setKeepAlive",n),r()},name:"UserPage",components:{UserInfo:_,LoadingList:y["a"],ArticleItem:A},props:{userId:{type:[String,Number,Object],required:!0}},data:function(){return{user:{id:this.userId},getArticlesByUser:s["g"].bind(null,this.userId)}},computed:{},watch:{},created:function(){this.loadUser()},methods:{loadUser:function(){var t,e;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(Object(i["e"])(this.userId));case 2:t=r.sent,e=t.data,this.user=e.data;case 5:case"end":return r.stop()}}),null,this)}}},I=E,S=(r("972b"),Object(m["a"])(I,n,a,!1,null,"49aed50a",null));e["default"]=S.exports},f50e:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("van-button",t._b({attrs:{type:t.value?"default":"info",icon:t.value?"":"plus",size:"small",loading:t.loading},on:{click:function(e){return e.stopPropagation(),t.onFollow(e)}}},"van-button",t.$attrs,!1),[t._v(t._s(t.value?"已关注":"关注"))])},a=[],i=(r("a9e3"),r("d3b7"),r("96cf"),r("c24f")),s={name:"FollowUser",components:{},props:{value:{type:Boolean},userId:{type:[Number,String],required:!0}},data:function(){return{loading:!1}},computed:{},watch:{},created:function(){},methods:{onFollow:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(this.loading=!0,t.prev=1,!this.value){t.next=7;break}return t.next=5,regeneratorRuntime.awrap(Object(i["i"])(this.userId));case 5:t.next=9;break;case 7:return t.next=9,regeneratorRuntime.awrap(Object(i["a"])(this.userId));case 9:this.$emit("input",!this.value),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](1),t.t0.response&&400===t.t0.response.status&&this.$toast("你不能关注你自己");case 15:this.loading=!1;case 16:case"end":return t.stop()}}),null,this,[[1,12]])}}},c=s,o=r("2877"),u=Object(o["a"])(c,n,a,!1,null,"35d92173",null);e["a"]=u.exports},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),i=r("e8b5"),s=r("23cb"),c=r("50c4"),o=r("fc6a"),u=r("8418"),l=r("1dde"),f=r("b622"),d=f("species"),p=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!l("slice")},{slice:function(t,e){var r,n,l,f=o(this),h=c(f.length),b=s(t,h),m=s(void 0===e?h:e,h);if(i(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[d],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(f,b,m);for(n=new(void 0===r?Array:r)(v(m-b,0)),l=0;b<m;b++,l++)b in f&&u(n,l,f[b]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-a07f91ec.b0a90715.js.map