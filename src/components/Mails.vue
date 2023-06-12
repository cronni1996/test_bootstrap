<template>
  <div class="mails">
    <button type="button" class="btn btn-light"> <i class="bi bi-envelope-exclamation"></i>Mails</button>
  </div>
</template>

<script>
export default {
  name: "Mails"
}
</script>

<style lang="stylus" scoped>
@import "./color"
.btn
  background-color $background-color
  @extend $text-navi

.btn
  padding-left 0px
  margin-left  0px
</style>