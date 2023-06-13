<template>
  <!-- Контейнер для календарей -->
  <div class="calendar">
    <!-- Кнопка "Calendars" -->
    <button type="button" class="btn btn-light"> <i class="calendar-bi bi bi-calendar2-date"></i>Calendars</button>
    <!-- Бейдж с информацией о календаре -->
    <Badge class="badge-calendar" value="12" severity="info" style="font-size:12px"></Badge>
  </div>
</template>

<script>
export default {
  // Компонент Vue.js с именем "Calendars"
  name: "Calendars"
}
</script>

<style lang="stylus" scoped>
@import "./color"

/* Стили для кнопки */
.btn
  background-color $background-color
  @extend $text-navi

/* Стили для контейнера календарей */
.calendar
  display: flex
  justify-content: center
  align-items: center
  color: $blue-color

  /* Дополнительные стили для кнопки внутри контейнера календарей */
  .btn
    color: $blue-color

/* Стили для бейджа с информацией о календаре */
.badge-calendar
  display: flex
  align-items: center

/* Стили для иконки "calendar-bi" */
.calendar-bi
  color: $blue-color !important

/* Дополнительные стили для кнопки */
.btn
  padding-left: 0
  margin-left: 0
</style>
