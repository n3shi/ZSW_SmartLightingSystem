<template>
  <div :class="{ lightSourcesContainer: name, hidden: !name }">
    <p class="label">Light sources</p>
    <div class="results">
      <div v-for="lightSource in manager.lightSources" :key="lightSource.relay">
        <LightSource v-bind:lightSource="lightSource" />
        <!-- DODAJ TO POD FORA WYZEJ ZEBY ZAZNACZYC DANY DIV (W TEORII BO NIE DZIALA) -->
        <!-- @mouseleave="active = false"   v-on:mouseover="active = true"  -->
      </div>
    </div>
  </div>
</template>

<script>
import LightSource from "./LightSource.vue";
export default {
  components: { LightSource },
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
  /* min-height: 50%; */
  padding: 4.5rem 0;
  margin: 0 auto;
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
