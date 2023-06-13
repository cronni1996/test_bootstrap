<template>
  <!-- Блок шапки страницы -->
  <header class="header">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">

        <!-- Логотип -->
        <a class="navbar-logo" href="#"></a>

        <!-- Кнопка для открытия/закрытия навигации на мобильных устройствах -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbar-nav-dropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Блок навигации -->
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">

            <!-- Элементы навигации -->
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Enterprise</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                 aria-expanded="false">
                Explore
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Marketplase</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                 aria-expanded="false">
                Pricing
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>

          <!-- Форма поиска -->
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          </form>
        </div>

        <!-- Блок иконок -->
        <div class="svg-icons">
          <i class="bi-icons bi-square"></i>
          <i class="bi-icons bi-bar-chart-fill"></i>
          <i class="bi-icons bi bi-globe"></i>
        </div>

        <!-- Блок аватара и значка уведомлений -->
        <div class="avatar-group">
          <Avatar label="MH" class="mr-2 mr-2-header" shape="circle"
                  style="font-size:12px; font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-weight:900;"/>

          <!-- Значок уведомлений -->
          <Badge class="badge" value="2" position="releative" color="red"/>
        </div>

        <!-- Блок пользователя -->
        <div class="user">
          <div class="dropdown">
            <!-- Кнопка с выпадающим меню пользователя -->
            <button class=" dropdown-button btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
              Esther Howard
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

          <!-- Кнопка "Add Code" -->
          <button type="button" class="btn-add-code btn btn-primary">Add Code</button>
        </div>
      </div>
    </nav>
  </header>

</template>

<script>
</script>

<style lang="stylus" scoped>
/*
  Стили компонента шапки страницы.
  Используется препроцессор Stylus для удобной разработки CSS.
  Файл импорта "color" содержит цветовые переменные.
*/
@import "./color"

/* Стили для контейнера */
.container-fluid
  font-family 'Roboto' sans-serif
  align-items center
  display flex
  width 100%
  background-color $background-color
  height 110px

/* Стили для навигационной панели */
.navbar
  padding-top 0
  padding-bottom 0
  border-bottom $border-color 2px solid

/* Стили для ссылок навигации */
.nav-link
  margin-left 10px
  margin-right 10px
  font-family Roboto
  font-weight 600

/* Стили для блока навигации */
.navbar-collapse
  margin-left 10px

/* Стили для блока шапки */
.header
  justify-content center
  width 100%

/* Стили для блока формы поиска */
.d-flex
  position relative
  width auto
  margin-right 20px

/* Стили для блока иконок */
.svg-icons
  position relative
  margin-right 20px

/* Стили для логотипа */
.navbar-logo
  height 35px
  width 35px
  display: flex;
  font-size: 33px;
  color: $text-color;
  border: 6px $blue-color solid;
  border-radius: 100px;

/* Стили для иконок */
.bi-icons
  font-size 20px
  margin-right 10px
  font-family Roboto
  font-weight 400
  color $text-color

/* Стили для блока аватара и значка уведомлений */
.avatar-group
  position relative

.badge
  background-color $badge-color
  position relative
  right 20px
  bottom 23px

/* Стили для класса "mr-2-header" */
.mr-2-header
  margin-top 20px

/* Стили для блока пользователя */
.user
  display flex
  flex-direction row

/* Стили для выпадающего меню пользователя */
.dropdown-button
  font-family Roboto
  font-weight 600
  background-color $background-color
  color $text-color
  border none
  margin-right 50px
  font-size 18px

/* Стили для кнопки "Add Code" */
.btn-add-code
  font-family Roboto
  font-weight 900
  margin-right 20px
  background-color $background-add-code
  color $blue-color
  border none

/* Стиль для аватара пользователя */
.mr-2
  margin-right 10px
  color $blue-color
  background-color $background-add-code

/* Медиазапросы для адаптивного дизайна */
@media (max-width: 1200px)
  .nav-link
    font-size 10px
    margin-left -5px

.btn-add-code
  font-size 10px

.dropdown-button
  font-size 10px
  margin-right 20px

.navbar-logo
  height 30px
  width 30px

.svg-icons
  display flex
  flex-direction column

.button-add-code
  font-size 10px

.form-control
  height 30px

.svg-icons
  display flex
  flex-direction column

.avatar-group
  margin-bottom 15px

.btn-add-service
  width 20px


@media (min-width: 1200px)
  .nav-link
    font-size 14px
    margin-left -5px

  .btn-add-code
    font-size 14px

  .dropdown-button
    font-size 14px
    margin-right 20px

  .svg-icons
    display flex
    flex-direction column

  .button-add-code
    font-size 14px

  .form-control
    height 30px

  .svg-icons
    display flex
    flex-direction row


  .avatar-group
    margin-bottom 15px

  .btn-add-service
    width 20px

  .mr-2-header
    .p-avatar-text
      font-size 12px

@media (min-width: 1650px) and (max-width: 2000px)
  .nav-item
    margin-left 20px

  .nav-link
    font-size 16px

  .d-flex
    margin-left 60px


  .p-avatar
    width 3rem
    height 3rem

  .dropdown-button
    font-size 16px

  .btn-add-code
    font-size 16px
    font-weight 600

  .form-control
    height 30px
    width 300px

  .bi-icons
    margin-right 20px

  .svg-icons
    margin-right 2px

  .navbar-logo
    margin-left 30px
    height 33px
    width 33px
</style>