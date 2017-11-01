<template>
  <div>
    <x-header>{{title}}</x-header>
    <scroller lock-x scrollbar-y ref="scroller" :height="scrollerHeight">
      <div>
        <div>
          <panel :list="list" @on-click-item="onClickItem"></panel>
        </div>
      </div>
    </scroller>
    <div v-transfer-dom>
      <loading :show="showLoading" :text="Loadingtext"></loading>
    </div>
  </div>
</template>

<script>
  import { Scroller, Panel, XHeader, Actionsheet, TransferDom, Loading } from 'vux';
  import Store from 'common/js/store';
  // import bookInfo from 'api/bookInfo';

  export default {
    name: 'chapters',
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Actionsheet,
      Scroller,
      Panel,
      Loading
    },
    data () {
      return {
        scrollerHeight: (window.innerHeight - 46) + 'px',
        list: [],
        title: '',
        showLoading: false,
        Loadingtext: '正在切换'
      };
    },
    mounted () {
      this.$emit('hideTab');
      let bookData = this.$route.params.bookData;
      if (bookData) {
        this.title = bookData.title;
      }
      this.setList(bookData['_id']);
    },
    methods: {
      setList (_id) {
        let book = Store.getBook(_id);
        console.log(book);
        let chapters = book.chapters;
        let tempList = [];
        for (let i = 0; i < chapters.length; i++) {
          tempList.push({
            title: chapters[i].title,
            url: '',
            dataIndex: i
          });
        }
        this.list = tempList;
      },
      onClickItem (item) {
        let bookData = this.$route.params.bookData;
        Store.setReadIndex(bookData['_id'], item.dataIndex);
        this.$router.push({
          name: 'read',
          params: { bookData: bookData }
        });
      }
    },
    watch: {
      $route (param) {
        if (param.name === 'sources') {
          let bookData = this.$route.params.bookData;
          if (bookData) {
            this.title = bookData.title;
          }
          this.setList(bookData['_id']);
        }
      }
    }
  };
</script>

<style>

</style>
