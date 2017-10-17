<template>
    <tabbar>
      <tabbar-item selected link="/">
        <span slot="label">书架</span>
      </tabbar-item>
      <tabbar-item link="/search">
        <span slot="label">搜索</span>
      </tabbar-item>
    </tabbar>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem
    },
    data () {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>

<style>

</style>
