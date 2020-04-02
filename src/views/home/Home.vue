<template>
  <div id="home">
    <search-bar @search="searchsongs"></search-bar>
    <div class="mainView">
      <songs-list :songs="songs" class="songslist" @playsong="playsong"></songs-list>
      <play-view class="playview" :picUrl="pic" :is-trans="isTrans" :isroate="isroate"></play-view>
      <content-msg class="contentmsg" :comments="commentsMsg"></content-msg>
    </div>
    <music-control :songsUrl="songsUrl" @play="play" @pause="pause"></music-control>
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
        songsUrl: '',
        commentsMsg: [],
        pic: '',
        isTrans: false,
        isroate: false
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
          this.songs = res.data.result.songs;
        })
      },
      playsong(id) {
        Promise.all(
            [
              request({
                params: {
                  type: 'song',
                  id: id
                }
              }),
              request({
                params: {
                  type: 'comments',
                  id: id
                }
              }),
              request({
                params: {
                  type: 'detail',
                  id: id
                }
              })
            ]).then(res => {
          console.log(res);
          this.songsUrl = res[0].data.data[0].url;
          this.commentsMsg = res[1].data.hotComments;
          this.pic = res[2].data.songs[0].al.picUrl;
        });
      },
      play() {
        this.isTrans = true;
        this.isroate = false;
      },
      pause() {
        this.isTrans = true;
        this.isroate = true;
      }

    }
  }
</script>

<style scoped>
  #home {
    width: 100%;
    height: 100%;
  }

  .mainView {
    width: 100%;
    height: calc(100% - 59px - 59px);
    display: flex;
    box-sizing: border-box;
  }

  .contentmsg, .songslist {
    flex: 1;
  }

  .playview {
    flex: 2;
  }
</style>