<template>
  <div class="sales">
    <button type="button" class="btn btn-light"><i class="bi bi-bag-check"></i>Sales</button>
  </div>
</template>

<script>
export default {
  name: "Sales"
}
</script>

<style lang="stylus" scoped>
@import "./color"
.btn
  background-color $background-color
  @extend $text-navi
</style>