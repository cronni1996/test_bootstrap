<template>
  <div class="applications">
    <button type="button" class="btn btn-light"> <i class="bi bi-grid-3x3-gap"></i>Applications</button>
  </div>
</template>

<script>
export default {
  name: "Applications"
}
</script>

<style lang="stylus" scoped>
@import "./color"
.btn
  background-color $background-color
  @extend $text-navi
</style>