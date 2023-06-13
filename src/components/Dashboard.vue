<template>
  <!-- Контейнер для панели управления -->
  <div class="dashboard">
    <!-- Кнопка "Dashboard" -->
    <button type="button" class="btn btn-light"> <i class="bi-dashboard bi bi-columns-gap"></i>Dashboard</button>
    <!-- Переключатель формы -->
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
      <label class="form-check-label" for="flexSwitchCheckDefault"></label>
    </div>
  </div>
</template>

<script>
export default {
  // Компонент Vue.js с именем "Dashboard"
  name: "Dashboard"
}
</script>

<style lang="stylus" scoped>
@import "./color"

/* Стили для кнопки */
.btn
  background-color $background-color
  @extend $text-navi

/* Стили для контейнера панели управления */
.dashboard
  display: flex
  justify-content: center
  align-items: center

/* Стили для иконки "bi-dashboard" */
.bi-dashboard
  font-size: 16px

/* Дополнительные стили для кнопки */
.btn
  padding-left: 0
  margin-left:  0
</style>