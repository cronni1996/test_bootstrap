<template>
  <div class="notifications">
    <button type="button" class="btn btn-light"><i class="bi bi-bell"></i>Notifications</button>
  </div>
</template>

<script>
export default {
  name: "Notifications"
}
</script>

<style lang="stylus" scoped>
@import "./color"
.btn
  background-color $background-color
  @extend $text-navi

.btn
  padding-left 0
  margin-left  0
</style>