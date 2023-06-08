<template>
  <Header class="header"/>
  <div class="down">
    <sitebar class="sitebar"/>
    <div class="main-down">
      <main-up class="mainUp"/>
      <div class="main21frr">
        <div class="main-down-left-group">
          <MainTopLeft class="main-top-left"/>
          <MainDownLeft class="main-down-left"/>
        </div>
        <MainRight/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sitebar from "@/components/Sidebar.vue";
import MainUp from "@/components/MainUp.vue"
import MainTopLeft from "@/components/MainTopLeft.vue";
import MainDownLeft from "@/components/MainDownLeft.vue"
import MainRight from "@/components/MainRight.vue"

export default {
  name: 'App',
  components: {
    Header,
    Sitebar,
    MainUp,
    MainTopLeft,
    MainDownLeft,
    MainRight
  }
}
</script>

<style lang="stylus">
@import  "/components/color"
.header
  width 100%
  display flex
  flex-direction column
#app
  flex-direction column
.main21frr
  display flex
  flex-direction row
  background-color $background-color
  padding-bottom: 30px;
.down
  width 100%
  display flex
  flex-direction row
  .main-down-left-group
    width 66%
.main-down
  flex-direction column
  width 100%
.main-down-group
  display flex
  flex-direction row
.main-down-left-group
  display flex
  flex-direction column
  width 80%
  margin-left 70px



</style>
