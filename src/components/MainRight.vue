<template>
  <div class="container-mainRight">
    <div class="content">
      <div class="text">
        <h3 class="text-h3">About</h3>
        <h4 class="text-h4">JavaScript 3D Library</h4>
      </div>
      <div class="three">
        <h4 class="text-three"><i class="bi bi-link"></i>three.js</h4>
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
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#838383">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
               stroke-width="0.032"></g>
            <g id="SVGRepo_iconCarrier">
              <path fill="#838383"
                    d="M15.81 9l-2.47-4.93 0.83-0.15c0.239-0.044 0.418-0.251 0.418-0.5 0-0.281-0.227-0.508-0.508-0.508-0.032 0-0.063 0.003-0.093 0.009l-0.777 0.14c-0.993-0.755-2.25-1.21-3.613-1.21-0.21 0-0.418 0.011-0.623 0.032-0.036-0.5-0.457-0.882-0.967-0.882-0.003 0-0.005 0-0.008 0-0.552 0-1 0.448-1 1v0.2c-1.714 0.336-3.151 1.327-4.066 2.697l-0.754 0.153c-0.257 0.024-0.457 0.239-0.457 0.5 0 0.277 0.225 0.502 0.502 0.502 0.016 0 0.032-0.001 0.047-0.002l0.088 0 0.35-0.050-2.52 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.56-5.12h0.1c0.172-0.031 0.311-0.144 0.379-0.297 0.021-0.093 0.701-1.583 3.271-2.363v10.78h-1v1h-2v1h8v-1h-2v-1h-1v-11.12c0.201-0.031 0.434-0.049 0.67-0.049 1.152 0 2.205 0.419 3.016 1.114l-0.006-0.005-2.49 5.060h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 11h-4l2-3.94zM11 9l2-3.94 2 3.94h-4z"></path>
            </g>
          </svg>
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
          <svg width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>
            ionicons-v5-d</title>
            <circle cx="160" cy="96" r="48"
                    style="fill:none;stroke:#b6bfd5;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
            <circle cx="160" cy="416" r="48"
                    style="fill:none;stroke:#b6bfd5;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
            <line x1="160" y1="368" x2="160" y2="144"
                  style="fill:none;stroke:#b6bfd5;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
            <circle cx="352" cy="160" r="48"
                    style="fill:none;stroke:#b6bfd5;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
            <path d="M352,208c0,128-192,48-192,160"
                  style="fill:none;stroke:#b6bfd5;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
          </svg>
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
          <Avatar label="SD" class="mr-2 mr-2-sd" size="xlarge" shape="circle"
                  style="font-size:17px; font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-weight:900;background-color:#f6e5ed"/>
          <i v-badge.danger class=" p-overlay1" style="font-size: 2rem; "/>
          <Avatar label="SG" class="mr-2 mr-2-sg" size="xlarge" shape="circle"
                  style="font-size:17px;  font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-weight:900; background-color:#e4eafa"/>
          <Avatar label="FD" class="mr-2 mr-2-fd" size="xlarge" shape="circle"
                  style="font-size:17px; font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-weight:900; background-color:#e4f7f5"/>
          <i v-badge.danger class=" p-overlay1" style="font-size: 2rem;"/>
          <Avatar label="MH" class="mr-2 mr-2-mh1" size="xlarge" shape="circle"
                  style="font-size:17px; font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-weight:900;background-color:#e3f4e6"/>
          <Badge class="badge3" value="2" position="releative" color="red"/>
          <Avatar label="MH" class="mr-2 mr-2-mh2" size="xlarge" shape="circle"
                  style="font-size:17px; font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-weight:900;background-color:#f6e5e5"/>
          <i v-badge.danger class=" p-overlay1" style="font-size: 2rem; "/>
          <Avatar label="MH" class="mr-2 mr-2-mh3" size="xlarge" shape="circle"
                  style="font-size:17px; font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-weight:900;background-color:#f6e5ed"/>

          <Avatar label="KL" class="mr-2 mr-2-kl" size="xlarge" shape="circle"
                  style="font-size:17px; font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-weight:900;background-color:#f3ece5"/>
          <i v-badge.danger class=" p-overlay1" style="font-size: 2rem; "/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="stylus">
$background-add-code = #e4eafa
$text-color = #838383
$badge-color = red
$blue-color = #3360fd
$background-color = #f6f7f8
$icons-color = #b7c1d7
$background-block = #fdfdfd
$color-black = black
$text-color-black = #3f547f
$color-sd = #e42e7a
$color-sg = #3360fd
$color-fd = #3de5cc
$color-mh1 = #29ca39
$color-mh2 = #e42f2f
$color-mh3 = #e4317c
$color-kl = #ca7329

.container-mainRight
  display flex
  flex-direction column
  width 100%
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
  background-color $badge-color !important
  position relative
  right 10px
  bottom 23px

h5
  font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
  font-size 16px
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

.text-h4
  margin-top 20px
  font-weight 900
  color $text-color-black

.three
  margin-top 20px

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
  font-size 18px
  color $text-color

h4
  color $text-color
  font-size 18px

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


.mr-2
  margin-top 20px
  margin-left 30px

.mr-2-sd
  color $color-sd

.mr-2-sg
  color $color-sg

.mr-2-fd
  color $color-fd

.mr-2-mh1
  color $color-mh1

.mr-2-mh2
  color $color-mh2

.mr-2-mh3
  color $color-mh3

.mr-2-kl
  color $color-kl

#pv_id_1_badge, #pv_id_2_badge
  margin-top 50px
  margin-right 10px
  background-color #fdc933

#pv_id_3_badge, #pv_id_4_badge
  margin-top 50px
  margin-right 10px
  background-color #29ca39

.contributors-top
  display flex
  flex-direction row
  margin-top 20px
  margin-left 20px

  .text-contributors
    font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
    font-size 30px
    font-weight 900
    color $text-color-black
    margin-right 20px

  .int-contributors
    display flex
    align-items center
    background-color none
</style>