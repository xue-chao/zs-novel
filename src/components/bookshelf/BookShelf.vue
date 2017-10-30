<template>
  <div>
    <scroller lock-x scrollbar-y use-pulldown :pulldown-config="{content:'下拉刷新',downContent:'下拉刷新',upContent:'释放刷新',loadingContent:'加载中'}" :height="scrollerHeight" @on-pulldown-loading="load" v-model="status">
      <div class="box2">
        <div>
          <panel :list="list" @on-click-item="onClickItem"></panel>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
  import { Scroller, Panel } from 'vux';
  import Store from 'common/js/store';
  import bookInfo from 'api/bookInfo';

  export default {
    components: {
      Scroller,
      Panel
    },
    data () {
      return {
        scrollerHeight: (window.innerHeight - 50) + 'px',
        status: {
          pulldownStatus: 'default'
        },
        list: []
      };
    },
    mounted () {
      this.$emit('showTab');
      this.setList();
    },
    methods: {
      load () {
        bookInfo.refreshBook();
        setTimeout(() => {
          this.setList();
          this.status.pulldownStatus = 'default';
        }, 1000);
      },
      setList () {
        let books = Store.getShelf();
        let tempList = [];
        for (let i = 0; i < books.length; i++) {
          tempList.push({
            src: 'http://statics.zhuishushenqi.com' + books[i].cover,
            title: books[i].title + '——' + books[i].author,
            desc: '最新章节：' + books[i].lastChapter,
            url: '',
            data: books[i]
          });
        }
        this.list = tempList;
      },
      onClickItem (item) {
        this.$router.push({
          name: 'read',
          params: { bookData: item.data }
        });
      }
    },
    watch: {
      $route (param) {
        if (param.name === 'bookshelf') {
          this.setList();
        }
      }
    }
  };
</script>

<style>

</style>
