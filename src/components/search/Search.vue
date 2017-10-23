<template>
  <div class="search">
    <div class="search-text">
      <search
        :results="results"
        v-model="searchValue"
        position="absolute"
        @on-submit="searchDate"
        ref="search"></search>
    </div>
    <scroll ref="scroll" class="recommend-content" :data="list">
      <div>
        <div>
          <panel :list="list"></panel>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import { Search, Panel } from 'vux';
  import axios from 'common/js/axios';
  import Scroll from 'common/js/scroll';

  export default {
    components: {
      Search,
      Panel,
      Scroll
    },
    data () {
      return {
        results: [],
        searchValue: '',
        list: []
      };
    },
    methods: {
      searchDate: function (data) {
        let that = this;
        axios.get('/search', {
          params: {
            keyword: data
          }
        }).then((res) => {
          if (res.data.code === 1 && res.data.data.books) {
            let books = res.data.data.books;
            let tempList = [];
            for (let i = 0; i < books.length; i++) {
              tempList.push({
                src: 'http://statics.zhuishushenqi.com' + books[i].cover,
                title: books[i].title,
                desc: books[i].shortIntro,
                url: ''
              });
            }
            that.list = tempList;
            that.$refs.scroll.refresh();
          }
        });
      }
    }
  };
</script>

<style>
  .search{
    height: 100%;
  }
  .search-text{
    height: 40px;
  }
  .recommend-content{
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 50px;
  }
</style>
