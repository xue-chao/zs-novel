<template>
  <div>
    <search
      :results="results"
      v-model="searchValue"
      position="absolute"
      @on-submit="searchDate"
      ref="search"></search>

  </div>
</template>

<script>
  import { Search } from 'vux'
  import axios from 'common/js/axios'

  export default {
    components: {
      Search
    },
    data () {
      return {
        results: [],
        searchValue: ''
      }
    },
    methods: {
      searchDate: function (data) {
        console.log(this.searchValue)
        axios.get('/search', {
          params: {
            keyword: data
          }
        }).then((res) => {
          if (res.data.code === 1) {
            console.log(res.data)
          }
        })
      }
    }
  }
</script>

<style>

</style>
