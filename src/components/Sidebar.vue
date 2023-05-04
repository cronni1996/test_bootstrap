<!--suppress ALL -->
<template>
  <div class="container-sidebar">
    <div class="users">
      <div class="user-avatar">
        <Avatar label="MH" class="mr-2 mr-2-sidebar" size="large" shape="circle"
                style="font-size:17px; font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-weight:900;"/>
      </div>
      <div class="user">
        <h2 class="good-day">Good Day</h2>
        <h1 class="user-name">Michail D.</h1>
      </div>
      <div class="user-icons">
        <i class="bi bi-person"></i>
        <i class="bi bi-gear"></i>
      </div>
    </div>
    <div class="sidebar-navi">
      <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
        <div class="dashboard">
          <button type="button" class="btn btn-light"> <i class="bi-dashboard bi bi-columns-gap"></i>Dashboard</button>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
          </div>
        </div>
        <div class="project">
          <button type="button" class="btn btn-light"><i class="bi bi-folder"></i>My Project Task</button>
        </div>
        <div class="calendar">
          <button type="button" class="btn btn-light"> <i class="calendar-bi bi bi-calendar2-date"></i>Calendars</button>
          <Badge class="badge-calendar" value="12" severity="info" style="font-size:12px"></Badge>
        </div>
        <div class="mails">
          <button type="button" class="btn btn-light"> <i class="bi bi-envelope-exclamation"></i>Mails</button>
        </div>
        <div class="notifications">
          <button type="button" class="btn btn-light"><i class="bi bi-bell"></i>Notifications</button>
        </div>
        <div class="sales">
          <button type="button" class="btn btn-light"><i class="bi bi-bag-check"></i>Sales</button>
        </div>
        <div class="applications">
          <button type="button" class="btn btn-light"> <i class="bi bi-grid-3x3-gap"></i>Applications</button>
        </div>
        <div class="customers">
          <button type="button" class="btn btn-light"><i class="bi bi-people"></i>Customers</button>
        </div>
      </div>
    </div>
    <div class="services">
      <div class="add-services">
        <div class="add-servis">
          <h2>Add Services</h2>
          <div class="btn-group dropend">
            <button type="button" class="btn-add-service btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
              <i class="pi pi-ellipsis-h" style="font-size: 1rem"></i>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
        <div class="group">
          <div class="jira">
            <img src="../img/jira.png"/>
            <!-- Default dropend button -->
            <div class="btn-group dropend">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                      aria-expanded="false">
                Jira Software
              </button>
              <ul class="dpm-service dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
          <div class="slack">
            <img src="../img/slack.png"/>
            <!-- Default dropend button -->
            <div class="btn-group dropend">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                      aria-expanded="false">
                Slack Software
              </button>
              <ul class="dpm-service dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
          <div class="intercom">
            <img src="../img/intercom.png"/>
            <!-- Default dropend button -->
            <div class="btn-group dropend">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                      aria-expanded="false">
                Intercom
              </button>
              <ul class="dpm-service dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
          <div class="messenger">
            <img src="../img/messenger.png"/>
            <!-- Default dropend button -->
            <div class="btn-group dropend">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                      aria-expanded="false">
                Messenger
              </button>
              <ul class="dpm-service dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
          <div class="add-plagin">
            <img src="../img/add.png"/>
            <!-- Default dropend button -->
            <div class="btn-group dropend">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                      aria-expanded="false">
                Add New Plugin
              </button>
              <ul class="dpm-service dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="add-project">
      <div class="button-add">
        <button type="button" class="btn btn-primary bi bi-plus-circle">
        </button>
      </div>
      <h3>Add New Project</h3>
      <div class="link-invite">
        <h4>Our Use</h4>
        <button type="button" class="btn-link-add btn btn-light">invite link</button>
      </div>
    </div>
  </div>
</template>

<script>
</script>


<style lang="stylus">
$background-add-code = #e4eafa
$text-color = #838383
$badge-color = red
$blue-color = #3360fd
$background-color = #f6f7f8
$icons-color = #b7c1d7
$background-block = #fdfdfd


$text-navi {
  text-align left
  font-size 20px
  font-family Roboto
  font-weight 500
  color $text-color
}


.container-sidebar
  width 330px
  height 1360px
  background-color $background-color
  display flex
  flex-direction column
  float left
.users
  margin-top 20px
  flex-direction row
  display: flex;
  h1
    font-size 20px
    font-family Roboto
    font-weight 900
    $text-color
  h2
    font-size 17px
    font-family Roboto
    font-weight 400
    $text-color
.user-icons
  margin-left 40px
  color $text-color
.bi
  margin-right 5px
  color $icons-color
.mr-2
  color $blue-color
  background-color $background-add-code
.btn-group-vertical
  width: 250px;
  margin-left: 11px;
  margin-top: 20px;
.btn
  background-color $background-color
  @extend $text-navi
.btn-group-vertical
  width 250px
.dashboard
  display: flex
  justify-content center
  align-items center
.bi-dashboard
  font-size 20px
.checked
  margin-left 50px
.sidebar-navi
  .bi
    font-size 20px
.calendar
  display: flex
  justify-content center
  align-items center
  color $blue-color
  .btn
    color $blue-color
.badge-calendar
  display flex
  align-items center
  margin-left 63px
  with 30px
.calendar-bi
  color $blue-color !important
.add-services
  margin-top 30px
  margin-left 10px
  width 260px
  height 350px
  background-color $background-block
  display flex
  flex-direction column
  border-radius 10px
.add-servis
  display flex
  margin-top 20px
  margin-left 10px
  h2
    color $text-color
    margin-top 20px
    margin-left 15px
    font-size 12px
    font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
    font-weight 600
.dropend .dropdown-toggle::after
  content none
.btn-add-service
  background-color $background-block
  margin-top 10px
  margin-left 60px
  justify-content center
  height 40px
  border none
.link-invite
  display flex
  flex-direction row
  align-items center
.group
  margin-left 25px
  button
    margin-top 20px
    border none
    background-color $background-block
    width 200px
    color $text-color
  img
    margin-top 20px
    width 30px
.add-project
  border-radius 10px
  margin-left 13px
  margin-top 30px
  width 250px
  height 300px
  background-color $background-block
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin-bottom 50px
  button
    background-color $blue-color
    border-radius 30px
  .bi
    font-size 80px
  .btn-link-add
    background-color $background-block
    padding-left -30px
    margin-left -5px
    color $blue-color
    text-decoration none
    font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
    font-size 19px
    font-weight 600
  h3
    margin-top 10px
    font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
    font-weight 900
    font-size 25px
  h4
    font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
    font-weight 600
    font-size 19px
    margin-top 7px
    margin-right 7px
.form-check-input
  margin-left 20px

@media (max-width 1200px) and (min-width: 1000px)
  .container-sidebar
    width 200px
  .user-avatar
    margin-left 15px
  .good-day
    font-size 10px
  .user-name
    font-size 14px
  .users
    margin-top 10px
  .user
    margin-top 15px
  .badge-calendar
    font-size 14px
    margin-left 12px
  .form-check
    margin-left 5px
  .user-icons
    display flex
    flex-direction column
    justify-content center
    margin-left 15px
    float right
  .svg-icons
    display flex
    flex-direction row
    justify-content center
  .add-services
    width 170px
    .btn-add-service
      margin-left 5px
      width 40px
    img
      height 14px
      width 14px
    .dropdown-toggle
      width 110px
      font-size 13px
  .add-project
    width 170px
    h3
      font-size 12px
    h4
      font-size 12px
    .btn-link-add
      font-size 12px
      padding-left -30px
    .bi-plus-circle
      font-size 30px
  .form-check-input
    margin-left -35px
 .bi-person, .bi-gear
   font-size 18px
   margin-top 5px
  .mr-2-sidebar
    margin 10px 0px 0px 0px
  .users
    .user
      flex-grow 1
      margin-left 10px
    h2
      font-size 12px
    h1
      font-size 13px
  .btn-group-vertical
    width auto
    Button
     font-size 13px
     flex-grow 1
  .btn-group
    .btn-add-service
      width 40px

@media (min-width 1200px)
  .container-sidebar
    width 200px
  .user-avatar
    margin-left 15px
  .good-day
    font-size 10px
  .user-name
    font-size 14px
  .users
    margin-top 10px
  .user
    margin-top 15px
  .badge-calendar
    font-size 14px
    margin-left 12px
  .form-check
    margin-left 5px
  .user-icons
    display flex
    flex-direction column
    justify-content center
    margin-left 15px
  .svg-icons
    display flex
    flex-direction row
    justify-content center
  .add-services
    width 170px
    .btn-add-service
      margin-left 5px
      width 40px
    img
      height 14px
      width 14px
    .dropdown-toggle
      width 110px
      font-size 13px
  .add-project
    width 170px
    h3
      font-size 12px
    h4
      font-size 12px
    .btn-link-add
      font-size 12px
      padding-left -30px
    .bi-plus-circle
      font-size 30px
  .form-check-input
    margin-left -35px

  .mr-2-sidebar
    margin 10px 0px 0px 0px
  .users
    .user
      flex-grow 1
      margin-left 10px
    h2
      font-size 12px
    h1
      font-size 13px
    .user-icons
      float right
  .btn-group-vertical
    width auto
    Button
      font-size 13px
      flex-grow 1
  .btn-group
    .btn-add-service
      width 40px


</style>