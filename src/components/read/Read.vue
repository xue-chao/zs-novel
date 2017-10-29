<template>
  <div>
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">{{title}}</x-header>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" @on-click-menu="clickMenu"></actionsheet>
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
          chapters: '目录',
          sources: '换源'
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
    methods: {
      clickMenu (key) {
        if (key === 'chapters') {
          this.$router.push({
            name: 'chapters',
            params: { bookData: this.$route.params.bookData }
          });
        } else if (key === 'sources') {
          this.$router.push({
            name: 'sources',
            params: { bookData: this.$route.params.bookData }
          });
        }
      }
    },
    watch: {
      $route (param) {
        let bookData = this.$route.params.bookData;
        if (bookData) {
          this.title = bookData.lastChapter;
        }
      }
    }
  };
</script>

<style>

</style>
