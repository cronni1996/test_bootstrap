<template>
  <div class="dashboard">
    <button type="button" class="btn btn-light"> <i class="bi-dashboard bi bi-columns-gap"></i>Dashboard</button>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
      <label class="form-check-label" for="flexSwitchCheckDefault"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
}
</script>

<style lang="stylus" scoped>
@import "./color"
.btn
  background-color $background-color
  @extend $text-navi
.dashboard
  display: flex
  justify-content center
  align-items center
.bi-dashboard
  font-size 16px

</style>