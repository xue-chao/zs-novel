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
  import bookInfo from 'api/bookInfo';

  export default {
    name: 'sources',
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
        bookInfo.sources(_id).then((data) => {
          if (data.code === 1) {
            let soureData = data.data;
            let tempList = [];
            for (let i = 0; i < soureData.length; i++) {
              tempList.push({
                title: soureData[i].lastChapter,
                desc: '地址：' + soureData[i].name,
                url: '',
                data: soureData[i]
              });
            }
            this.list = tempList;
          }
        });
      },
      onClickItem (item) {
        this.showLoading = true;
        bookInfo.chapters(item.data['_id']).then((data) => {
          if (data.code === 1) {
            data.data.chapters = data.data.chapters;
            Store.saveSource(data.data['book'], data.data);
          }
          this.showLoading = false;
          this.$router.push({
            name: 'read',
            params: { bookData: data.data }
          });
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
