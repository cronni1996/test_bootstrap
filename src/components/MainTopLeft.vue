<template>
  <div class="container-mainTopLeft">
    <div class="topLeftUp">
      <div class="topLeftUp1">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
            <svg width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>
              ionicons-v5-d</title>
              <circle cx="160" cy="96" r="48"
                      style="fill:none;stroke:#b6bfd5;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
              <circle cx="160" cy="416" r="48"
                      style="fill:none;stroke:#b6bfd5;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
              <line x1="160" y1="368" x2="160" y2="144"
                    style="fill:none;stroke:#b6bfd5;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
              <circle cx="352" cy="160" r="48"
                      style="fill:none;stroke:#b6bfd5;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
              <path d="M352,208c0,128-192,48-192,160"
                    style="fill:none;stroke:#b6bfd5;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
            </svg>
            Development
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>

        <div class="branches">
          <svg class="svg-branches" width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>
            ionicons-v5-d</title>
            <circle cx="160" cy="96" r="48"
                    style="fill:none;stroke:#b6bfd5;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
            <circle cx="160" cy="416" r="48"
                    style="fill:none;stroke:#b6bfd5;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
            <line x1="160" y1="368" x2="160" y2="144"
                  style="fill:none;stroke:#b6bfd5;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
            <circle cx="352" cy="160" r="48"
                    style="fill:none;stroke:#b6bfd5;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
            <path d="M352,208c0,128-192,48-192,160"
                  style="fill:none;stroke:#b6bfd5;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
          </svg>
          <h3 class="branches-h3-int"> 15 </h3>
          <h3 class="branches-h3-string"> branches </h3>
        </div>
        <div class="tags">
          <i class="bi bi-tag"></i>
          <h3 class="tags-h3-int">127</h3>
          <h3 class="tags-h3-string"> tags</h3>
        </div>
      </div>
      <div class="topLeftUp2">
        <button type="button" class="btn-goToFile btn btn-light">Go to file</button>
        <div class="btn-group">
          <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Code
          </button>
          <ul class="dropdown-menu">
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
</script>

<style lang="stylus">
$background-add-code = #e4eafa
$text-color = #838383
$badge-color = red
$blue-color = #3360fd
$background-color = #f6f7f8
$icons-color = #b7c1d7
$background-block = #fdfdfd
$color-black = black

.container-mainTopLeft
  display flex
  width 100%
  flex-grow 1
  margin-top 5px
  h3
    font-family Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif
    font-size 23px
    font-weight 400
    color $text-color
    margin-left 10px
  .svg-branches
    margin-left 60px
  i
    margin-left 10px
  .topLeftUp
    display flex
    width 100%
  .topLeftUp1
    height 120px
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
  .topLeftUp2
    align-items center
    display flex
    flex-direction row
    .btn-group
      margin-left 20px
      .btn-light
        display flex
        flex-direction row
        align-content center
.btn-goToFile
  width 120px
  display flex
  flex-direction row
  justify-content center
.btn-primary
  border none
.btn-secondary
  border none
</style>