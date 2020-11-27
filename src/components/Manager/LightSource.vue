<template>
  <div :class="['block', getBlocksState, getStyleMode]">
    <p class="lightSourceName">{{ lightSource.name }}</p>
    <v-icon
      name="lightbulb"
      scale="4.5"
      :class="['lightBulbIcon', getIconState]"
    />
    <v-icon name="sliders-h" scale="2" />
  </div>
</template>

<script>
import "vue-awesome/icons/lightbulb";
import "vue-awesome/icons/sliders-h";
import Icon from "vue-awesome/components/Icon";

export default {
  components: {
    "v-icon": Icon,
  },
  props: ["lightSource"],
  name: "LightSource",
  computed: {
    getBlocksState() {
      return this.lightSource.func === "on" ? "" : "offBlock";
    },
    darkmode() {
      return this.$store.state.darkmode;
    },
    getStyleMode() {
      return this.darkmode ? "blockDarkMode" : "blockLightMode";
    },
    getIconState() {
      return this.lightSource.func === "on"
        ? "lightSourceIconsOn"
        : "lightSourceIconsOff";
    },
  },
};
</script>

<style>
.lightSourceName {
  font-size: 1.75em;
  margin: 0;
}
.lightBulbIcon {
  flex: 1;
}
.lightSourceIconsOff {
  color: #242624;
}
.lightSourceIconsOn {
  color: #ffba08;
}
.blockDarkMode {
  color: #fff;
  background: #333533;
}
.blockLightMode {
  color: #333533;
}
.block {
  width: 15em;
  height: 15em;
  padding: 1.5em;
  margin: 2em 1em 2em 1em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 2em;

  -webkit-box-shadow: 4px 0px 10px 1px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 4px 0px 10px 1px rgba(0, 0, 0, 0.25);
  box-shadow: 4px 0px 10px 1px rgba(0, 0, 0, 0.25);
}
.block:hover {
  -webkit-box-shadow: 4px 0px 10px 1px rgba(255, 186, 8, 0.4);
  -moz-box-shadow: 4px 0px 10px 1px rgba(255, 186, 8, 0.4);
  box-shadow: 4px 0px 10px 1px rgba(255, 186, 8, 0.4);
}
</style>
