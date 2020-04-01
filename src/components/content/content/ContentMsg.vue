<template>
  <div id="content">
    <ul>
      <li v-for="(item,index) in comments">
        <img :src="item.user.avatarUrl" alt="" class="userimg"><span>{{item.user.nickname}}</span>
        <p>{{item.content}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ContentMsg",
    props:{
      comments:{
        type:Array,
        default() {
          return [];
        }
      }

    }
  }
</script>

<style scoped>

  #content{
    padding: 10px;
  }
  .userimg{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  ul{
    height: 100%;
    overflow: auto;
    padding: 10px;
  }
</style>