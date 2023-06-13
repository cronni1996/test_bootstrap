<template>
<!--  Контейнер Jira-->
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
</template>

<script>
export default {
  name: "Jira"
}
</script>

<style lang="stylus" scoped>
@import "./color"
.jira
  display flex
  flex-direction row
  align-items center

</style>