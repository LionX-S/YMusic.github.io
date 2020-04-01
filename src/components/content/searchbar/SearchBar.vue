<template>
  <div id="searchbar">
    <span class="title">悦音乐</span>
    <input type="text" v-model="keywords" class="inputKey" @keyup.enter="search">
  </div>
</template>

<script>
  export default {
    name: "SearchBar",
    data(){
      return{
        keywords:'',
      }
    },
    methods:{
      search() {
        this.$emit('search',this.keywords);
      }
    }
  }
</script>

<style scoped>
  #searchbar{
    width: 100%;
    height: 59px;
    line-height: 59px;
    background-color: deepskyblue;
    position: relative;
  }
  .title{
    font-size: 20px;
    color: #ffffff;
    margin-left: 10px;
  }
  .inputKey{
    height: 35px;
    width: 190px;
    border-radius: 13px;
    border: none;
    position: absolute;
    right: 20px;
    top: 12px;
    font-size: 14px;
    outline: none;
    padding-left: 10px;
  }
</style>