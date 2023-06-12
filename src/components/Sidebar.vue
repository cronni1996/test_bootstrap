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
        <Dashboard/>
        <Project/>
        <Calendars/>
        <Mails/>
        <Notifications/>
        <Sales/>
        <Applications/>
        <Customers/>
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
          <Jira/>
          <Slack/>
          <Intercom/>
          <Messenger/>
          <AddNewPlugin/>
        </div>
      </div>
    </div>
    <div class="add-project">
      <div class="button-add">
        <button type="button" class="btn btn-primary bi bi-plus-circle">
        </button>
      </div>
      <h3 class="sidebar-add-project-text">Add New Project</h3>
      <div class="link-invite">
        <h4>Our Use</h4>
        <button type="button" class="btn-link-add btn btn-light">invite link</button>
      </div>
    </div>
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard.vue";
import Project from "@/components/Project.vue";
import Mails from "@/components/Mails.vue";
import Notifications from "@/components/Notifications.vue";
import Sales from "@/components/Sales.vue";
import Applications from "@/components/Applications.vue";
import Calendars from "@/components/Calendars.vue";
import Customers from "@/components/Customers.vue";
import Jira from "@/components/Jira.vue";
import Slack from "@/components/Slack.vue";
import Intercom from "@/components/Intercom.vue";
import Messenger from "@/components/Messenger.vue";
import AddNewPlugin from "@/components/AddNewPlugin.vue";

export default ({
  components: {
    Customers,
    Applications,
    Sales,
    Notifications,
    Mails,
    Calendars,
    Project,
    Dashboard,
    Jira,
    Slack,
    Intercom,
    Messenger,
    AddNewPlugin
  }
})

</script>


<style lang="stylus" >
@import "./color"


.container-sidebar
  border-right $border-color 2px solid
  width 330px
  background-color $background-color
  display flex
  flex-direction column
  float left
  align-items center

.users
  margin-top 20px
  flex-direction row
  display: flex;
  align-items center

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

.p-avatar
  background-color $background-add-code

.btn-group-vertical
  width: 250px;
  margin-left: 11px;
  margin-top: 20px;

.pi
  color $text-sidebar

.sidebar-navi
  .bi
    font-size 20px
    margin-right 10px

.add-services
  margin-top 30px
  margin-left 10px
  width 260px
  height 270px
  background-color $background-block
  display flex
  flex-direction column
  border-radius 10px

.add-servis
  display flex

  margin-left 10px

  h2
    color $text-sidebar
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
  img

  button
    margin-top 5px
    border none
    background-color $background-block
    width 200px
    color $text-sidebar



.add-project
  border-radius 10px
  margin-left 13px
  margin-top 30px
  width 250px
  height 250px
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
    font-size 30px
    width 60px
    height 60px

  .btn-link-add
    background-color $background-block
    padding-left -30px
    margin-left -5px
    color $blue-color
    text-decoration none
    font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
    font-size 12px
    font-weight 600

  h3
    margin-top 30px
    font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
    font-weight 600
    font-size 16px

  h4
    font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
    font-weight 600
    font-size 12px
    margin-top 7px
    margin-right 7px


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

@media (min-width 1200px) and (max-width 1649px)
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

    .sidebar-add-project-text
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

@media (min-width 1650px)
  .container-sidebar
    width 400px

  .user-avatar
    margin 0 10px 0 20px

  .user-icons
    flex-direction row
    align-items center
    margin-right 15px
  .badge-calendar
    margin-left 63px
    with 30px
  .form-check
    margin-left 60px
  .add-services
    width 250px
    .dropdown-toggle
       font-weight 600
       font-size 16px
    img
      height 16px
      width 16px
    h2
      font-size 16px
      font-weight 900
    .sidebar-add-project-text
      margin-top 10px
      font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
      font-weight 900
      font-size 22px
  .group
    button
      width 150px
  h4
    font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
    font-weight 600
    font-size 19px
    margin-top 7px
    margin-right 7px
.sidebar-navi
  .bi
    margin-right 30px

</style>