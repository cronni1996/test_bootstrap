<template>
  <div class="customers">
    <button type="button" class="btn btn-light"><i class="bi bi-people"></i>Customers</button>
  </div>
</template>

<script>
import MainRight from "@/App.vue";

export default {
  name: "Customers",
  components: {MainRight}
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