<template>
  <div class="customers">
    <button type="button" class="btn btn-light"><i class="bi bi-people"></i>Customers</button>
  </div>
</template>

<script>
export default {
  name: "Customers"
}
</script>

<style lang="stylus" scoped>
@import "./color"
.btn
  background-color $background-color
  @extend $text-navi
</style>