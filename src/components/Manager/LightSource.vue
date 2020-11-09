<template>
  <div :class="['block', getBlocksState]">
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
  color: #333533;
}
.lightSourceIconsOn {
  color: #ffba08;
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
  border: #333533 solid 1px;
}
.block:hover {
  border: #ffba08 solid 1px;
}
.offBlock {
  background: #f8f8f8;
}
</style>
