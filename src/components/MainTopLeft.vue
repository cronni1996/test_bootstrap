<template>
  <div class="container-main-top-left">
    <div class="top-left-up">
      <!-- Верхняя часть слева -->
      <div class="top-left-up1">
        <div class="dropdown">
          <!-- Кнопка выпадающего меню -->
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
            <Forks/>
            Development
          </button>
          <ul class="dropdown-menu">
            <!-- Список элементов выпадающего меню -->
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>

        <div class="branches">
          <!-- Отображение количества веток -->
          <div class="svg-branches">
            <Forks/>
          </div>
          <h3 class="branches-h3-int"> 15 </h3>
          <h3 class="branches-h3-string"> branches </h3>
        </div>
        <div class="tags">
          <!-- Отображение количества тегов -->
          <i class="bi bi-tag"></i>
          <h3 class="tags-h3-int">127</h3>
          <h3 class="tags-h3-string"> tags</h3>
        </div>
      </div>
      <div class="top-left-up2">
        <!-- Кнопка "Go to file" -->
        <button type="button" class="btn-go-to-file btn btn-light">Go to file</button>
        <div class="btn-group">
          <!-- Группа кнопок с выпадающим меню -->
          <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Code
          </button>
          <ul class="dropdown-menu">
            <!-- Список элементов выпадающего меню -->
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Forks from "@/components/Forks.vue";

export default defineComponent({
  components: {Forks}
})
</script>

<style lang="stylus" scoped>
@import "./color"

.container-main-top-left
  display flex
  width 100%
  flex-grow 1
  margin-top 5px

  h3
    font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
    font-size 12px
    font-weight 400
    color $text-color
    margin-left 10px

  .svg-branches
    margin-left 20px

  i
    margin-left 10px

  .top-left-up
    display flex
    width 100%

  .top-left-up1
    height 60px
    width 100%
    flex-grow 1
    display flex
    flex-direction row
    align-items center

  .branches
    display flex
    flex-direction row
    justify-content center
    align-items center

  .tags
    margin-left 20px
    display flex
    flex-direction row
    justify-content center
    align-items center

  .top-left-up2
    align-items center
    display flex
    flex-direction row

    .btn-group
      margin-left 20px

      .btn-light
        display flex
        flex-direction row
        align-content center

.branches
  .branches-h3-int
    color $text-color-black
    font-weight 600

.tags
  .tags-h3-int
    color $text-color-black
    font-weight 600

.btn-go-to-file
  font-size 12px
  width 120px
  display flex
  flex-direction row
  justify-content center

.btn-primary
  font-size 12px
  border none

.btn-secondary
  font-size 12px
  border none

.top-left-up1
  .dropdown
    .btn
      background-color $background-block
      color $text-color-black
      font-size 16px
      font-weight 600
      margin-right 30px
      border 1px solid $border-color

.top-left-up2
  .btn-go-to-file
    background-color $background-block
    font-size 16px
    font-weight 600
    width 100px
    padding 10px 20px 10px 20px
    border 1px solid $border-color

  .btn
    font-size 14px
    padding 10px 20px 10px 20px
    border 1px solid $border-color

  .btn-group
    margin-right 0
</style>