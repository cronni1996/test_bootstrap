<template>
  <!-- Контейнер для клиентов -->
  <div class="customers">
    <!-- Кнопка "Customers" -->
    <button type="button" class="btn btn-light"><i class="bi bi-people"></i>Customers</button>
  </div>
</template>

<script>
// Импорт компонента MainRight из файла App.vue
import MainRight from "@/App.vue";

export default {
  // Компонент Vue.js с именем "Customers"
  name: "Customers",
  // Подключение компонента MainRight в качестве дочернего компонента
  components: { MainRight }
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
  margin-left: 0
</style>
