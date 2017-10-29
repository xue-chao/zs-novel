<template>
  <div>
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">{{title}}</x-header>

    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus"></actionsheet>
    </div>

  </div>
</template>

<script>
  import { XHeader, Actionsheet, TransferDom } from 'vux';

  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Actionsheet
    },
    data () {
      return {
        title: '',
        menus: {
          menu1: '目录',
          menu2: '换源'
        },
        showMenus: false
      };
    },
    mounted () {
      this.$emit('hideTab');
      let bookData = this.$route.params.bookData;
      if (bookData) {
        this.title = bookData.lastChapter;
      }
    },
    watch: {
      $route (param) {
        let bookData = this.$route.params.bookData;
        if (bookData) {
          this.title = bookData.lastChapter;
        }
        if (param.name === 'read') {
          this.$emit('showTab');
        }
      }
    }
  };
</script>

<style>

</style>
