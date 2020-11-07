<template>
  <div class="lightSourcesContainer">
    <p class="label">Light sources</p>
    <div class="results">
      <div
        :class="{ onBlock: active, offBlock: !active }"
        class="block"
        v-for="item in manager.lightSources"
        :key="item.relay"
      >
        <!-- DODAJ TO POD FORA WYZEJ ZEBY ZAZNACZYC DANY DIV (W TEORII BO NIE DZIALA) -->
        <!-- @mouseleave="active = false"   v-on:mouseover="active = true"  -->
        <p class="lightSourceName">{{ item.name }}</p>
        <v-icon name="lightbulb" scale="5" class="lightBulbIcon" />
        <v-icon name="sliders-h" scale="2" />
      </div>
    </div>
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
  name: "LightSources",
  data: function() {
    return {
      active: false,
    };
  },
  methods: {
    mouseOver: function() {
      this.active = !this.active;
    },
  },
  computed: {
    name() {
      return this.$store.getters.getCurrentRoomName;
    },
    manager() {
      //return this.$store.getters['getRoom'](name);
      return this.$store.getters["getRoom"](this.name);
    },
  },
};
</script>

<style>
.lightSourcesContainer {
  width: 80%;
  min-height: 50%;
  padding: 4rem 0;
  margin: 0 auto;
}
.lightSourceName {
  font-size: 1.75em;
  margin: 0;
}
.lightBulbIcon {
  flex: 1;
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
}
.offBlock {
  border: black solid 1px;
}
.onBlock {
  border: red solid 1px;
}

.results {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.label {
  color: rgba(36, 36, 35, 1);
  font-family: Roboto;
  font-weight: Regular;
  font-size: 2em;
}
</style>
