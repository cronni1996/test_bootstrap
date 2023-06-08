<template>
  <div class="container-main-up">
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
        <button stype="button" class="btn btn-link">
          <Forks class="svg-forks"/>
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
import {defineComponent} from "vue";
import Forks from "@/components/Forks.vue";

export default defineComponent({
  components: {Forks}
})
</script>

<style lang="stylus" scoped>
@import  "./color"



.container-main-up
  display flex
  flex-direction row
  background-color $background-color
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


@media (max-width: 1200px) and (min-width: 1000px)
  .container-main-up
    width 100%
  .breadcrumb-item
    margin-top 10px
    font-size 17px
  .button-public
    font-size 11px
    margin-right 5px
  .bi-journal-bookmark
    margin-top 10px
  .right-main1
    font-size 10px
    margin-left 5px
  .right-main1-bi
    font-size 10px
  .badge-main1
    font-size 8px
  .main1, .main2
    margin-left 20px
  .main2
    i
      font-size 14px
    button
      font-size 12px
  .p-badge
    right 0

@media (min-width: 1200px)
  .container-main-up
    width 100%
    padding-left 30px
  .breadcrumb-item
    margin-top 10px
    font-size 20px
  .button-public
    font-size 12px
    margin-right 5px
  .bi-journal-bookmark
    margin-top 10px
    font-size 20px
  .right-main1
    font-size 15px
    margin-left 5px
  .right-main1-bi
    font-size 15px
  .badge-main1
    font-size 13px
  .main1, .main2
    margin-left 20px
  .main2
    i
      font-size 14px
    button
      font-size 14px
  .p-badge
    right 0


</style>