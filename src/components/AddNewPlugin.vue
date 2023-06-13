<template>
  <!-- Контейнер для добавления плагина -->
  <div class="add-plagin">
    <!-- Изображение добавления -->
    <img src="../img/add.png"/>
    <!-- Кнопка с выпадающим меню -->
    <div class="btn-group dropend">
      <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
              aria-expanded="false">
        Add New Plugin
      </button>
      <!-- Список опций выпадающего меню -->
      <ul class="dpm-service dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // Компонент Vue.js с именем "AddNewPlugin"
  name: "AddNewPlugin"
}
</script>

<style lang="stylus" scoped>
@import "./color"

/* Стили для контейнера добавления плагина */
.add-plagin
  display: flex
  flex-direction: row
  align-items: center
</style>