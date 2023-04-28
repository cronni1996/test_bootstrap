<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-logo" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
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
        </div>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        </form>
        <div class="svg-icons">
          <i class="bi-icons bi-emoji-dizzy-fill"></i>
          <i class="bi-icons bi-emoji-dizzy-fill"></i>
          <i class="bi-icons bi-emoji-dizzy-fill"></i>
        </div>
        <div class="avatar-group">
          <Avatar label="MH" class="mr-2" size="large" shape="circle"
                  style="font-size:17px; font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-weight:900;"/>
          <Badge class="badge" value="2" position="releative" color="red"/>
        </div>
        <div class="user">
          <div class="dropdown">
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
          <button type="button" class="btn-add-code btn btn-primary">Add Code</button>
        </div>
      </div>
    </nav>
  </header>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
</template>

<script>
</script>

<style lang="stylus" scoped>
$background-add-code = #e4eafa
$text-color = #838383
$badge-color = red
$blue-color = #3360fd
$background-color = #f6f7f8

.container-fluid
  font-family 'Roboto' sans-serif
  align-items center
  display flex
  width 100%
  background-color $background-color
  height 90px

.navbar
  padding-top 0

.nav-link
  margin-left 10px
  margin-right 10px
  font-family Roboto
  font-weight 600

.navbar-collapse
  margin-left 10px

.header
  justify-content center
  width 100%

.d-flex
  position relative
  margin-right 20px

.svg-icons
  position relative
  margin-right 20px

.navbar-logo
  height 33px
  width 33px
  display: flex;
  font-size: 33px;
  color: $text-color;
  border: 9px $blue-color solid;
  border-radius: 100px;

.bi-icons
  font-size 20px
  margin-right 10px
  font-family Roboto
  font-weight 400
  color $text-color

.avatar-group
  position relative


.badge
  background-color $badge-color
  position relative
  right 10px
  bottom 23px

.user
  display flex
  flex-direction row

.btn-add-code
  font-family Roboto
  font-weight 900
  margin-right 20px
  background-color $background-add-code
  color $blue-color
  border none

.dropdown-button
  font-family Roboto
  font-weight 600
  background-color $background-color
  color $text-color
  border none
  margin-right 50px
  font-size 18px

.mr-2
  color $blue-color
  background-color $background-add-code
</style>