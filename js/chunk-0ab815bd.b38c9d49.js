(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ab815bd"],{3711:function(t,s,a){},9639:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"my-container"},[t.$store.state.user?a("div",{staticClass:"user-info-wrap"},[a("div",{staticClass:"base-info-wrap"},[a("div",{staticClass:"avatar-title-wrap",on:{click:function(s){return t.$router.push({name:"user",params:{userId:t.user.id}})}}},[a("van-image",{staticClass:"avatar",attrs:{round:"",fit:"cover",src:t.user.photo}}),a("div",{staticClass:"title"},[t._v(t._s(t.user.name))])],1),a("van-button",{attrs:{round:"",size:"mini"},on:{click:function(s){return t.$router.push("/profile")}}},[t._v("编辑资料")])],1),a("van-grid",{staticClass:"data-info",attrs:{border:!1}},[a("van-grid-item",[a("span",{staticClass:"count"},[t._v(t._s(t.user.art_count))]),a("span",{staticClass:"text"},[t._v("头条")])]),a("van-grid-item",{attrs:{to:"/"+t.user.id+"/followers"}},[a("span",{staticClass:"count"},[t._v(t._s(t.user.follow_count))]),a("span",{staticClass:"text"},[t._v("关注")])]),a("van-grid-item",[a("span",{staticClass:"count"},[t._v(t._s(t.user.fans_count))]),a("span",{staticClass:"text"},[t._v("粉丝")])]),a("van-grid-item",[a("span",{staticClass:"count"},[t._v(t._s(t.user.like_count))]),a("span",{staticClass:"text"},[t._v("获赞")])])],1)],1):a("div",{staticClass:"not-login"},[a("div",{staticClass:"mobile",on:{click:function(s){return t.$router.push({name:"login",query:{redirect:"/my"}})}}}),a("div",{staticClass:"text"},[t._v("点击登录")])]),a("van-grid",{attrs:{clickable:"","column-num":3}},[a("van-grid-item",{attrs:{text:"我的收藏",to:"/my-article/collect"}},[a("van-icon",{attrs:{slot:"icon",name:"star-o",color:"#eb5253"},slot:"icon"})],1),a("van-grid-item",{attrs:{text:"浏览历史",to:"/my-article/history"}},[a("van-icon",{attrs:{slot:"icon",name:"browsing-history-o",color:"#ffa023"},slot:"icon"})],1),a("van-grid-item",{attrs:{text:"作品",to:"/my-article"}},[a("van-icon",{attrs:{slot:"icon",name:"edit",color:"#678eff"},slot:"icon"})],1)],1),a("van-cell-group",{attrs:{border:!1}},[a("van-cell",{attrs:{title:"消息通知","is-link":""}}),a("van-cell",{attrs:{title:"小智同学","is-link":""},on:{click:function(s){return t.$router.push("/chat")}}})],1),t.$store.state.user?a("van-cell-group",[a("van-cell",{staticStyle:{"text-align":"center"},attrs:{title:"退出登录",clickable:""},on:{click:t.onLogout}})],1):t._e()],1)},n=[],r=(a("d3b7"),a("96cf"),a("c24f")),i={name:"MyPage",data:function(){return{user:{}}},watch:{"$store.state.user":function(){this.$store.state.user&&this.loadUser()}},created:function(){this.$store.state.user&&this.loadUser()},methods:{onLogout:function(){var t=this;this.$dialog.confirm({title:"退户确认",message:"退出当前头条账号，将不能同步收藏，发布评论和云端分享等"}).then((function(){t.$store.commit("setUser",null)})).catch((function(){}))},loadUser:function(){var t;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,regeneratorRuntime.awrap(Object(r["d"])());case 2:t=s.sent,this.user=t.data.data;case 4:case"end":return s.stop()}}),null,this)}}},o=i,c=(a("f168"),a("2877")),l=Object(c["a"])(o,e,n,!1,null,"4a4afdde",null);s["default"]=l.exports},f168:function(t,s,a){"use strict";var e=a("3711"),n=a.n(e);n.a}}]);
//# sourceMappingURL=chunk-0ab815bd.b38c9d49.js.map