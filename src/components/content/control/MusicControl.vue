<template>
  <div id="musiccontrol">
    <audio :src="songsUrl" controls class="songscon" autoplay></audio>
  </div>
</template>

<script>
  export default {
    name: "MusicControl",
    props:{
      songsUrl:{
        type:String,
        default:''
      }
    }
  }
</script>

<style scoped>
  #musiccontrol{
    width: 100%;
    height: 59px;
  }
  .songscon{
    width: 100%;
    height: 100%;
  }
</style>