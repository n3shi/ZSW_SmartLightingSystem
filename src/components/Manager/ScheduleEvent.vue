<template>
  <div :class="['eventContainer', getStyleMode]">
    <p>Turn off all lights at 00:00</p>
    <button class="resetButton">Cancel</button>
  </div>
</template>

<script>
export default {
  name: "ScheduleEvent",
  computed: {
    darkmode() {
      return this.$store.state.darkmode;
    },
    getStyleMode() {
      return this.darkmode ? "eventDarkMode" : "eventLightMode";
    },
  },
};
</script>

<style scoped>
.eventContainer {
  box-sizing: border-box;
  border-radius: 1rem;
  margin: 2rem 1rem;
  height: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1rem;

  -webkit-box-shadow: 4px 0px 10px 1px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 4px 0px 10px 1px rgba(0, 0, 0, 0.25);
  box-shadow: 4px 0px 10px 1px rgba(0, 0, 0, 0.25);
}
p {
  flex: 1;
}
button {
  height: 2rem;
  color: #afafaf;
}
.eventDarkMode {
  color: #fff;
  background: #333533;
}
.eventLightMode {
  color: #333533;
}
</style>
