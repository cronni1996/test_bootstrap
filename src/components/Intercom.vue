<template>
<!--  Контейнер Интерком -->
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
</template>

<script>
export default {
  name: "Intercom"
}
</script>

<style lang="stylus" scoped>
@import "./color"
.intercom
  display flex
  flex-direction row
  align-items center

</style>