<template>
  <div class="scheduleContainer">
    <div class="scheduleContentContaier">
      <p class="label">Schedule</p>
      <!-- Miejsce na fora z generowaniem komponentów, póki co trzy na sztywno -->
      <div class="scheduleEventsContainer">
        <ScheduleEvent />
        <ScheduleEvent />
        <ScheduleEvent />
      </div>
    </div>
  </div>
</template>

<script>
import ScheduleEvent from "./ScheduleEvent";

export default { components: { ScheduleEvent } };
</script>

<style>
.scheduleContainer {
  width: 100%;
}
.label {
  width: 100%;
}
.scheduleEventsContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.scheduleContentContaier {
  width: 80%;
  margin: 0 auto;
}
</style>
