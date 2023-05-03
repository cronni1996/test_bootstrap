<template>
  <div class="container-mainUp">
    <div class="flex-dirrec">
      <div class="main1">
        <div class="left">
          <div class="breadcrumb">
            <i class="bi bi-journal-bookmark"></i>
          </div>
          <div class="public-bitton">
            <nav aria-label="breadcrumb-full">
              <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page"><a href="#">mrdoob</a></li>
                <li class="breadcrumb-item active" aria-current="page">threee.js</li>
              </ol>
            </nav>
          </div>
          <button type="button" class="button-public btn btn-light">Public</button>
        </div>
        <div class="right-button">
          <button type="button" class="right-main1 btn btn-light"><i class="right-main1-bi bi bi-heart"></i> Sponsor
          </button>
          <button type="button" class="right-main1 btn btn-light"><i class="right-main1-bi bi bi-bell"></i>
            Notifications
          </button>
          <button type="button" class="right-main1 btn btn-light"><i class="right-main1-bi bi bi-briefcase"></i> Fork
            <Badge class="badge-main1" value="32k" style="background-color: #f3f5f8; color:black"></Badge>
          </button>
          <button type="button" class="right-main1 btn btn-light"><i class="right-main1-bi bi bi-star"></i> Star
            <Badge class="badge-main1" value="77k" style="background-color: #f3f5f8; color:black"></Badge>
          </button>
        </div>
      </div>
      <div class="main2">
        <button type="button" class="bi-code-main2  btn btn-lin "><i class="bi-code-main22  bi bi-chevron-left"></i>
          <i class="bi-code-main22  bi bi-chevron-right"></i>
          Code
        </button>
        <button type="button" class="btn btn-link"><i class="bi bi-record-circle"></i>Issues
          <Badge class="badge-pull-request" value="139"></Badge>
        </button>
        <button type="button" class="btn btn-link">
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
          Pull request
        </button>
        <button type="button" class="btn btn-link"><i class="bi bi-play-circle"></i>Actions</button>
        <button type="button" class="btn btn-link"><i class="bi bi-book-half"></i>Wiki</button>
        <button type="button" class="btn btn-link"><i class="bi bi-shield-lock"></i>Security</button>
        <button type="button" class="btn btn-link"><i class="bi bi-graph-up"></i>Insights</button>
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


.container-mainUp
  display flex
  flex-direction row
  background-color $background-color
  margin-left 5px
  height 138px
  flex-grow 1
  max-width: 100%
.flex-dirrec
  display flex
  flex-direction column
  width 94%
.badge-main1
  margin-left 10px
  display flex
  flex-direction row
a
  text-decoration none
.left
  display flex
  flex-grow 1
  heigt 100px
.main1
  margin-left 80px
  margin-right 10px
  margin-top 20px
  display flex
  flex-direction row
  height 40px
  width 100%
.btn
  text-decoration none
.main2
  margin-left 85px
  margin-right 10px
  margin-top 37px
  display flex
  flex-direction row
  height 40px
  width 100%
  align-items center
  button
    display flex
    align-items center
  i
    font-size 20px
    margin-right 15px
  .bi-code-main2
    border-bottom: solid;
    border-radius: 0;
    color $blue-color
  .bi-code-main22
    color $blue-color
    margin-left -20px
  .badge-pull-request
    margin-left 10px
    background-color $background-block
    color $color-black
.right-button
  display flex
  justify-content flex-end
.breadcrumb-item
  margin-left 10px
  color $blue-color
  font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
  font-size 30px
  text-decoration: none
.bi
  font-size 30px
.button-public
  margin-left 20px
  border-radius 20px
  font-size 15px
  margin-top 7px
  background-color $background-block
.right-main1
  margin-left 20px
  display flex
  align-items center
  background-color $background-block
  border-radius 10px
.right-main1-bi
  font-size 15px
  margin-right 15px

@media (max-width: 992px)
  .container-mainUp
    width 770px
  .breadcrumb-item
    margin-top 10px
    font-size 17px!important
  .button-public
    font-size 11px!important
    margin-right 5px
  .bi-journal-bookmark
    margin-top 10px
  .right-main1
    font-size 12px !important
    margin-left 5px !important
  .right-main1-bi
    font-size 12px !important
  .badge-main1
    font-size 8px !important
  .main1, .main2
    margin-left 20px
  .main2
    i
      font-size 14px !important
    button
      font-size 12px !important

@media (max-width: 1200px)
  .container-mainUp
    width 975px
  .breadcrumb-item
    margin-top 10px
    font-size 17px!important
  .button-public
    font-size 11px!important
    margin-right 5px
  .bi-journal-bookmark
    margin-top 10px
  .right-main1
    font-size 12px !important
    margin-left 5px !important
  .right-main1-bi
    font-size 12px !important
  .badge-main1
    font-size 8px !important
  .main1, .main2
    margin-left 20px
  .main2
    i
      font-size 14px !important
    button
      font-size 12px !important

@media (max-width: 1400px)
  .container-mainUp
    width 927px
  .breadcrumb-item
    margin-top 10px
    font-size 19px!important
  .button-public
    font-size 14px!important
    margin-right 5px
  .bi-journal-bookmark
    margin-top 10px
  .right-main1
    font-size 14px !important
    margin-left 5px !important
  .right-main1-bi
    font-size 14px !important
  .badge-main1
    font-size 10px !important
  .main1, .main2
    margin-left 20px
  .main2
    i
      font-size 16px !important
    button
      font-size 16px !important


</style>