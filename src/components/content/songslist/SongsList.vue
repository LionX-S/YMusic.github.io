<template>
  <div id="songsList">
    <ul>
      <li v-for="(items,index) in songs" :key="index" @click="playsongs(items.id)" :class="{iswhite:index%2===0,isgary:!(index%2===0)}">{{items.name}}</li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: "SongsList",
    props:{
      songs:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      playsongs(id,index){
        this.$emit('playsong',id);
      }
    },
    computed:{
      iswhite(){
        return
      }
    }
  }
</script>

<style scoped>
  #songsList{
    padding: 10px;
  }
  ul{
    height: 100%;
    overflow: auto;
  }
  li{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
  }
  .iswhite{
    background-color: #fff;
  }
  .isgary{
    background-color: #cccccc;
  }
</style>