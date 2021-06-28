(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{506:function(e,t,a){"use strict";a.r(t);var v=a(7),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("随着对 vue 的不断了解，会越来越发现它生命周期的重要性，只有了解了它的生命周期，才能在开发项目的时候在逻辑上的很好的判断什么时候该发生什么事件，即很好的控制页面。")]),e._v(" "),a("h2",{attrs:{id:"一、什么是-vue-生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是-vue-生命周期"}},[e._v("#")]),e._v(" 一、什么是 vue 生命周期")]),e._v(" "),a("p",[e._v("Vue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。下面是官网中的生命周期照片")]),e._v(" "),a("p",[a("img",{attrs:{src:"/vue1.png",alt:"vue生命周期图",title:"vue生命周期图"}})]),e._v(" "),a("h2",{attrs:{id:"二、生命周期函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、生命周期函数"}},[e._v("#")]),e._v(" 二、生命周期函数")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[e._v("Vue 的生命周期总共分为8个阶段：创建前/后，载入前/后，更新前/后，销毁前/后。")]),e._v(" "),a("p",[e._v("1、beforeCreate（创建前）")]),e._v(" "),a("ul",[a("li",[e._v("表示实例完全被创建出来之前，vue 实例的挂载元素$el和数据对象 data 都为 undefined，还未初始化。")])]),e._v(" "),a("p",[e._v("2、created（创建后）")]),e._v(" "),a("ul",[a("li",[e._v("数据对象 data 已存在，可以调用 methods 中的方法，操作 data 中的数据，但 dom 未生成，$el 未存在 。")])]),e._v(" "),a("p",[e._v("3、beforeMount（挂载前）")]),e._v(" "),a("ul",[a("li",[e._v("vue 实例的 $el 和 data 都已初始化，挂载之前为虚拟的 dom节点，模板已经在内存中编辑完成了，但是尚未把模板渲染到页面中。data.message 未替换。")])]),e._v(" "),a("p",[e._v("4、mounted（挂载后）")]),e._v(" "),a("ul",[a("li",[e._v("vue 实例挂载完成，data.message 成功渲染。内存中的模板，已经真实的挂载到了页面中，用户已经可以看到渲染好的页面了。实例创建期间的最后一个生命周期函数，当执行完 mounted 就表示，实例已经被完全创建好了，DOM 渲染在 mounted 中就已经完成了。")])]),e._v(" "),a("p",[e._v("5、beforeUpdate（更新前）")]),e._v(" "),a("ul",[a("li",[e._v("当 data 变化时，会触发beforeUpdate方法 。data 数据尚未和最新的数据保持同步。")])]),e._v(" "),a("p",[e._v("6、updated（更新后）")]),e._v(" "),a("ul",[a("li",[e._v("当 data 变化时，会触发 updated 方法。页面和 data 数据已经保持同步了。")])]),e._v(" "),a("p",[e._v("7、beforeDestory（销毁前）")]),e._v(" "),a("ul",[a("li",[e._v("组件销毁之前调用 ，在这一步，实例仍然完全可用。")])]),e._v(" "),a("p",[e._v("8、destoryed（销毁后）")]),e._v(" "),a("ul",[a("li",[e._v("组件销毁之后调用，对 data 的改变不会再触发周期函数，vue 实例已解除事件监听和 dom绑定，但 dom 结构依然存在。")])])])])}),[],!1,null,null,null);t.default=_.exports}}]);