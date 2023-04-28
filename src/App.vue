<template>

  <Header class="header"/>
  <div class="down">
    <sitebar class="sitebar"/>

    <div class="mainDown">
      <main-up class="mainUp"/>
      <div class="main21frr">
      <div class="mainDownLeftGroup">
        <MainTopLeft class="mainTopLeft"/>
        <MainDownLeft class="mainDownLeft"/>
      </div>
        <MainRight/>
      </div>
    </div>

  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Sitebar from "@/components/sitebar.vue";
import MainUp from "@/components/mainUp.vue"
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
.header
  width 100%
  display flex
  flex-direction column



#app

  flex-direction column

.main21frr
  display flex
  flex-direction row

.down
  display flex
  flex-direction row

.mainDown
  flex-direction column
  width 100%

.mainDownGroup
  display flex
  flex-direction row

.mainDownLeftGroup
  display flex
  flex-direction column
  width 170%
  margin-left 80px
</style>
