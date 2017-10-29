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
  </div>
</template>

<script>
  import { Scroller, Panel, XHeader, Actionsheet, TransferDom } from 'vux';
  // import Store from 'common/js/store';
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
      Panel
    },
    data () {
      return {
        scrollerHeight: (window.innerHeight - 46) + 'px',
        list: [],
        title: ''
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
        this.$router.push({
          name: 'read',
          params: { soureData: item.data }
        });
      }
    }
  };
</script>

<style>

</style>
