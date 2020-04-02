<template>
  <div id="playView">
    <div class="circle" :class="{'roate':isTrans,'isroate':isroate}">
      <img :src="picUrl" alt="" class="songPic">
    </div>
  </div>
</template>

<script>
  export default {
    name: "PlayView",
    props:{
      picUrl:{
        type:String,
        default:''
      },
      isTrans:{
        type: Boolean,
        default: false
      },
      isroate:{
        type:Boolean,
      }
    }
  }
</script>

<style scoped>
  #playView{
    position: relative;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;

  }
  @keyframes turn{
    from{
      transform: rotateZ(0);
    }
    to{
      transform: rotateZ(360deg);
    }
  }
  .circle{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 1px solid #cccccc;
    position: absolute;
    left: 50%;
    top: 50%;
    /*transform: translate(-50%,-50%);*/
    animation-play-state: paused;
    margin-left: -150px;
    margin-top: -150px;
  }
  .roate{
    animation-name: turn;
    animation-iteration-count: infinite;
    animation-play-state: running;
    animation-timing-function: linear;
    animation-duration: 5s;
  }
  .isroate{
    animation-play-state: paused;
  }
  .songPic{
    width: 180px;
    height: 180px;
    border-radius: 50%;
    position: relative;
    left: 50%;
    top: 50%;
    margin-left: -90px;
    margin-top: -90px;
  }
</style>