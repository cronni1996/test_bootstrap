<template>
  <div class="container-main-right">
    <div class="content">
      <div class="text">
        <h3 class="text-h3">About</h3>
        <h4 class="text-h4">JavaScript 3D Library</h4>
      </div>
      <div class="three">
        <h4 class="text-three"><i class="bi bi-link"></i>threee.js</h4>
        <div class="three-line1">
          <h5> javascript</h5>
          <h5>svg</h5>
          <h5>webjl</h5>
          <h5>html5</h5>
        </div>
        <div class="three-line2">
          <h5>canvas</h5>
          <h5>augmented-reality</h5>
          <h5>webaudio</h5>
        </div>
        <div class="three-line3">
          <h5>virtual-reality</h5>
          <h5>webgl2</h5>
          <h5>webgpu</h5>
        </div>

      </div>
      <div class="icons">
        <h4 class="readme"><i class="bi bi-book"></i>Readme</h4>
        <h4 class="mit">
          <Scales/>
          MIT License
        </h4>
        <h4 class="code"><i class="bi bi-file-earmark"></i>Code conduct</h4>
        <div class="stars">
          <i class="bi bi-star"></i>
          <h4 class="int-stars">71.1k</h4>
          <h4 class="string-stars">stars</h4>
        </div>
        <div class="watching">
          <i class="bi bi-eye"/>
          <h4 class="int-watching">2.5k</h4>
          <h4 class="string-watching">watching</h4>
        </div>
        <div class="forks">
          <Forks />
          <h4 class="int-forks">30k</h4>
          <h4 class="string-forks">forks</h4>
        </div>
      </div>
      <div class="contributors">
        <div class="contributors-top">
          <h4 class="text-contributors">Contributors</h4>
          <h5 class="int-contributors">1.559</h5>
        </div>
        <div class="avatar-contributors">
          <Avatar label="SD" class="mr-2 mr-2-sd" size="large" shape="circle"/>
          <i v-badge.danger class=" p-overlay1" style="font-size: 2rem; "/>
          <Avatar label="SG" class="mr-2 mr-2-sg" size="large" shape="circle"/>
          <Avatar label="FD" class="mr-2 mr-2-fd" size="large" shape="circle"/>
          <i v-badge.danger class=" p-overlay1" style="font-size: 2rem;"/>
          <Avatar label="MH" class="mr-2 mr-2-mh1" size="large" shape="circle"/>
          <Badge class="badge3" value="2" position="releative" severity="danger"/>
          <Avatar label="MH" class="mr-2 mr-2-mh2" size="large" shape="circle"/>
          <i v-badge.danger class=" p-overlay1" style="font-size: 2rem; "/>
          <Avatar label="MH" class="mr-2 mr-2-mh3" size="large" shape="circle"/>
          <Avatar label="KL" class="mr-2 mr-2-kl" size="large" shape="circle"/>
          <i v-badge.danger class=" p-overlay1" style="font-size: 2rem; "/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Scales from "@/components/Scales.vue";
import Forks from "@/components/Forks.vue";

export default defineComponent({
  components: {Forks, Scales}
})
</script>

<style lang="stylus" >
@import "./color"


.container-main-right
  display flex
  flex-direction column
  width 420px
  height auto
.three-line1
  display flex
  flex-direction row
.three-line2
  display flex
  flex-direction row
.three-line3
  display flex
  flex-direction row
.badge3
  background-color $badge-color
  position relative
  right 10px
  bottom 23px
h5
  font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
  font-size 14px
  font-weight 600
  background-color $background-add-code
  padding 5px 15px 5px 15px
  color $blue-color
  margin-right 10px
  justify-content center
  display flex
  border-radius 30px
.content
  font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
  margin-left 40px
  margin-top 50px
  .text-h3
    font-weight 900
    color $text-color-black
.icons
  border-bottom $text-color solid 2px
  margin 20px 50px 0 15px
  padding-bottom 20px
  max-width 415px

.text-h4
  margin-top 20px
  font-weight 900
  color $text-color-black
.three
  margin-top 20px
  max-width 415px
  .three-line1, .three-line2, .three-line3
    display flex
    flex-wrap wrap
.text-three
  font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
  font-weight 600
  color $blue-color
.bi-link
  margin-right 10px
svg
  height 25px
  margin 0px -1px 0px -5px
.bi
  color $text-color
h4
  color $text-color
  font-size 14px
.stars
  display flex
  flex-direction row
  align-items center
  .int-stars
    color $text-color-black
    margin 4px 10px 0 0
  .string-stars
    margin-top 10px
.watching
  display flex
  flex-direction row
  align-items center
  .int-watching
    color $text-color-black
    margin 4px 10px 0 0
  .string-watching
    margin-top 10px
.forks
  display flex
  flex-direction row
  align-items center
  .int-forks
    color $text-color-black
    margin 4px 10px 0 3px
  .string-forks
    margin-top 10px
.text
  max-width 415px
.mr-2-sd
  color $color-sd
    margin-top 20px
    margin-left 30px
.mr-2-sg
  color $color-sg
    margin-top 20px
    margin-left 30px
.mr-2-fd
  color $color-fd
    margin-top 20px
    margin-left 30px
.mr-2-mh1
  color $color-mh1
    margin-top 20px
    margin-left 30px
.mr-2-mh2
  color $color-mh2
    margin-top 20px
    margin-left 30px
.mr-2-mh3
  color $color-mh3
    margin-top 20px
    margin-left 30px
.mr-2-kl
  color $color-kl
    margin-top 20px
     margin-left 30px
#pv_id_1_badge, #pv_id_2_badge
  margin-top 50px
  margin-right 10px
  background-color #fdc933
#pv_id_3_badge, #pv_id_4_badge
  margin-top 50px
  margin-right 10px
  background-color #29ca39
.contributors
  width 250px
  .mr-2
    margin-left 5px
.contributors-top
  display flex
  flex-direction row
  margin-top 20px
  margin-left 10px
  align-items center
  .text-contributors
    font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
    font-size 18px
    font-weight 900
    color $text-color-black
    margin-right 20px
  .int-contributors
    display flex
    align-items center
    background-color $background-block
    color $text-color
    border 2px solid $border-color
    padding 5px 10px
.p-avatar-text
  font-size 1rem
.avatar-contributors
  .mr-2-sd
    color $color-sd
    font-size:17px;
    font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
    font-weight:900;
    background-color:#f6e5ed
  .mr-2-sg
    color $color-sg
    font-size:17px;
    font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
    font-weight:900;
    background-color:#e4eafa
  .mr-2-fd
    color $color-fd
    font-size:17px;
    font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
    font-weight:900;
    background-color:#e4f7f5
  .mr-2-mh1
    color $color-mh1
    font-size:17px;
    font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
    font-weight:900;
    background-color:#e3f4e6
  .mr-2-mh2
    color $color-mh2
    font-size:17px;
    font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
    font-weight:900;
    background-color:#f6e5e5
  .mr-2-mh3
    color $color-mh3
    font-size:17px;
    font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
    font-weight:900;
    background-color:#f6e5ed
  .mr-2-kl
    color $color-kl
    font-size:17px;
    font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
    font-weight:900;
    background-color:#f3ece5

@media (max-width: 1200px)
  .container-main-right
    width 218px
  .three-line1, .three-line2, .three-line3
    flex-wrap wrap
  .p-avatar
    width 2.5rem
    height 2.5rem
    .p-avatar-text
      font-size 12px
  .int-contributors
    font-size 12px
  .contributors
    margin-bottom 20px
  .content
    margin-left 20px
@media (min-width: 1650px)
  .content
    margin-left 10px
    .text-h3
      font-size 23px
    .text-h4
      font-size 18px
    .text-three
      font-size 18px
      font-weight 700
      margin-bottom: 20px
     .three-line1 ,.three-line2, .three-line3
       h5
          margin 0px 10px 10px 0px
          padding: 5px 15px 5px 15px;
          font-size 12px
          font-weight 800
  .icons
    h4 ,.stars,.watching,.forks
      font-size 14px
      margin-top 25px
  .contributors
    .avatar-contributors
      .mr-2
        margin-right 3px
        margin-top 10px
</style>