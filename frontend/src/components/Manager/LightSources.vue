<template>
  <div :class="{ lightSourcesContainer: name, hidden: !name }">
    <p class="label">Light sources</p>
    <div class="results">
      <div v-for="(item, index) in manager.lightSources" :key="item.relay">
        <LightSource
          :lightSource="item"
          :index="index"
          @get-choosen-block="getBlock($event)"
        />
        <!-- DODAJ TO POD FORA WYZEJ ZEBY ZAZNACZYC DANY DIV (W TEORII BO NIE DZIALA) -->
        <!-- @mouseleave="active = false"   v-on:mouseover="active = true"  -->
      </div>
    </div>

    <!--<LightDetail />-->
  </div>
</template>

<script>
import LightSource from "./LightSource.vue";

export default {
  components: {
    LightSource,
  },
  name: "LightSources",
  methods: {
    mouseOver: function() {
      this.active = !this.active;
    },
    getBlock(val) {
      console.log(val);
      console.log(val.func);
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
    active() {
      return this.$store.getters.getActive;
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
  font-family: Roboto;
  font-weight: Regular;
  font-size: 2em;
}
</style>


