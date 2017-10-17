<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Icon } from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem,
      Icon
    },
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: '书架!'
      }
    }
  }
</script>

<style>

</style>
