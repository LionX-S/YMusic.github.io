<template>
  <div id="musiccontrol">
    <audio :src="songsUrl" controls class="songscon" autoplay @play="play" @pause="pause"></audio>
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
    },
    methods:{
      play(){
        this.$emit('play');
      },
      pause(){
        this.$emit('pause');
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