<template>
  <div class="project">
    <button type="button" class="btn btn-light"><i class="bi bi-folder"></i>My Project Task</button>
  </div>
</template>

<script>
export default {
  name: "Project"
}
</script>

<style lang="stylus" scoped>
@import "./color"
.btn
  background-color $background-color
  @extend $text-navi
</style>