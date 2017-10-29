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
  import { Tabbar, TabbarItem } from 'vux';

  export default {
    components: {
      Tabbar,
      TabbarItem
    },
    watch: {
      $route (param) {
        if (param.name === 'bookshelf') {
          this.$emit('showTab');
        } else if (param.name === 'search') {
          this.$emit('showTab');
        } else if (param.name === 'read') {
          this.$emit('hideTab');
        } else if (param.name === 'sources') {
          this.$emit('hideTab');
        }
      }
    }
  };
</script>

<style>

</style>
