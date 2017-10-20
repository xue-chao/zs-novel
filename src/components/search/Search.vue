<template>
  <div class="search">
    <search
      :results="results"
      v-model="searchValue"
      position="absolute"
      @on-submit="searchDate"
      ref="search"></search>
      <panel  :list="list"></panel>
  </div>
</template>

<script>
  import { Search, Panel } from 'vux'
  import axios from 'common/js/axios'

  export default {
    components: {
      Search,
      Panel
    },
    data () {
      return {
        results: [],
        searchValue: '',
        list: []
      }
    },
    methods: {
      searchDate: function (data) {
        console.log(this.searchValue)
        let that = this
        axios.get('/search', {
          params: {
            keyword: data
          }
        }).then((res) => {
          if (res.data.code === 1 && res.data.data.books) {
            let books = res.data.data.books
            for (let i = 0; i < books.length; i++) {
              that.list.push({
                src: 'http://statics.zhuishushenqi.com' + books[i].cover,
                title: books[i].title,
                desc: books[i].shortIntro,
                url: ''
              })
            }
          }
        })
      }
    }
  }
</script>

<style>
  .search{
    height: 100%;
    overflow-y: auto;
  }
</style>
