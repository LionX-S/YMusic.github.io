<template>
  <div id="playView">
    <div class="circle">
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "PlayView"
  }
</script>

<style scoped>
  #playView{
    position: relative;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
  }
  .circle{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 1px solid #cccccc;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>