<template>
  <div id="songsList">
    <ul>
      <li v-for="(items,index) in songs" :key="index" @click="playsongs(items.id)">{{items.name}}</li>
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
      playsongs(id){
        this.$emit('playsong',id);
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
    overflow: hidden;
  }
  li{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
  }
</style>