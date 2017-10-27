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
          <panel :list="list" @on-click-item="onClickItem"></panel>
        </div>
      </div>
    </scroll>
    <div v-transfer-dom>
      <loading :show="showLoading" :text="Loadingtext"></loading>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Search, Panel, Loading, TransferDomDirective as TransferDom, ConfirmPlugin } from 'vux';
  import axios from 'common/js/axios';
  import Scroll from 'common/js/scroll';
  import Store from 'common/js/store';

  Vue.use(ConfirmPlugin);

  export default {
    directives: {
      TransferDom
    },
    components: {
      Search,
      Panel,
      Scroll,
      Loading
    },
    data () {
      return {
        results: [],
        searchValue: '',
        list: [],
        showLoading: false,
        Loadingtext: '正在加载'
      };
    },
    methods: {
      searchDate: function (data) {
        let that = this;
        this.$refs.search.setBlur();
        this.showLoading = true;
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
                url: '',
                data: books[i]
              });
            }
            that.list = tempList;
            that.$refs.scroll.refresh();
          }
          that.showLoading = false;
        }).catch(() => {
          that.showLoading = false;
        });
      },
      onClickItem (item) {
        this.$vux.confirm.show({
          title: '加入书架？',
          // 组件除show外的属性
          onCancel () {
          },
          onConfirm () {
            Store.addShelf(item.data);
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
