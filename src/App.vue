<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="child-view" v-on:showTab="showTab" v-on:hideTab="hideTab" ></router-view>
      </keep-alive>
    </transition>
    <tab v-show="isShow" v-on:showTab="showTab" v-on:hideTab="hideTab"></tab>
  </div>
</template>

<script>
import Tab from './components/tab/Tab';

export default {
  name: 'app',
  components: {
    Tab
  },
  data () {
    return {
      transitionName: 'slide-left',
      isShow: true
    };
  },
  methods: {
    showTab () {
      this.isShow = true;
    },
    hideTab () {
      this.isShow = false;
    }
  },
  // 监听路由的路径，可以通过不同的路径去选择不同的切换效果
  watch: {
    '$route' (to, from) {
      if (to.path === '/') {
        this.transitionName = 'slide-right';
      } else {
        this.transitionName = 'slide-left';
      }
    }
  }
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
