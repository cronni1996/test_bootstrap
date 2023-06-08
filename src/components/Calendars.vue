<template>
  <div class="calendar">
    <button type="button" class="btn btn-light"> <i class="calendar-bi bi bi-calendar2-date"></i>Calendars</button>
    <Badge class="badge-calendar" value="12" severity="info" style="
          font-size:12px"></Badge>
  </div>
</template>

<script>
export default {
  name: "Calendars"
}
</script>

<style lang="stylus" scoped>
@import "./color"
.btn
  background-color $background-color
  @extend $text-navi
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

.calendar-bi
  color $blue-color !important

</style>