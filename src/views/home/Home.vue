<template>
  <div id="home">
    <search-bar @search="searchsongs"></search-bar>
    <div class="mainView">
      <songs-list :songs="songs" class="songslist" @playsong="playsong"></songs-list>
      <play-view class="playview"></play-view>
      <content-msg class="contentmsg"></content-msg>
    </div>
    <music-control :songsUrl="songsUrl"></music-control>
  </div>
</template>

<script>
  import SearchBar from "../../components/content/searchbar/SearchBar";
  import SongsList from "../../components/content/songslist/SongsList";
  import PlayView from "../../components/content/play/PlayView";
  import ContentMsg from "../../components/content/content/ContentMsg";
  import MusicControl from "../../components/content/control/MusicControl";
  import {request} from "../../network/request";

  export default {
    name: "Home",
    components: {
      SearchBar,
      SongsList,
      PlayView,
      ContentMsg,
      MusicControl
    },
    data() {
      return {
        songs: [],
        songsUrl:''
      }
    },
    methods: {
      searchsongs(keyword) {
        request({
          params: {
            type: 'search',
            search_type: 1,
            s: keyword
          }
        }).then(res => {
          console.log(res);
          this.songs = res.data.result.songs;
        })
      },
      playsong(id){
        request({
          params:{
            type:'song',
            id:id
          }
        }).then(res=>{
          this.songsUrl=res.data.data[0].url;
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    width: 100%;
    height: 100%;
  }
  .mainView{
    width: 100%;
    height: calc(100% - 59px - 59px);
    display: flex;
    box-sizing: border-box;
  }
  .contentmsg,.songslist{
    flex: 1;
  }
  .playview{
    flex: 2;
  }
</style>