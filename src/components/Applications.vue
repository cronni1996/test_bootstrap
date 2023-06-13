<template>
  <!-- Контейнер для приложений -->
  <div class="applications">
    <!-- Кнопка "Applications" -->
    <button type="button" class="btn btn-light"> <i class="bi bi-grid-3x3-gap"></i>Applications</button>
  </div>
</template>

<script>
export default {
  // Компонент Vue.js с именем "Applications"
  name: "Applications"
}
</script>

<style lang="stylus" scoped>
@import "./color"

/* Стили для кнопки */
.btn
  background-color $background-color
  @extend $text-navi

/* Дополнительные стили для кнопки */
.btn
  padding-left: 0
  margin-left:  0
</style>
