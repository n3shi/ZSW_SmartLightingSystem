<template>
  <div
    class="mainWrapper"
    :class="{
      sidePanelDarkMode: this.darkMode,
      sidePanelLightMode: !this.darkMode,
    }"
  >
    <p class="lighsourceName">
      {{ this.choosenBlock.name }}
    </p>
    <div>
      <p class="LightIntensity">
        Light intensity
      </p>
      <vue-slider v-model="lightValue" v-bind="options" />
    </div>
    <button
      @click="setLight('on')"
      class="resetButton buttonContainer"
      :class="{
        onButtonLightMode: this.choosenBlock.func === 'on' && !this.darkMode,
        onButtonDarkMode: this.choosenBlock.func === 'on' && this.darkMode,
        offButtonLightMode: this.choosenBlock.func === 'off' && !this.darkMode,
        offButtonDarkMode: this.choosenBlock.func === 'off' && this.darkMode,
      }"
    >
      On
    </button>
    <button
      @click="setLight('off')"
      class="resetButton buttonContainer"
      :class="{
        onButtonLightMode: this.choosenBlock.func === 'off' && !this.darkMode,
        onButtonDarkMode: this.choosenBlock.func === 'off' && this.darkMode,
        offButtonLightMode: this.choosenBlock.func === 'on' && !this.darkMode,
        offButtonDarkMode: this.choosenBlock.func === 'on' && this.darkMode,
      }"
    >
      Off
    </button>

    <SheduleAdd />
    <button class="resetButton deletebutton">
      Delete
    </button>
  </div>
</template>

<script>
import SheduleAdd from "@/components/Manager/SheduleAdd.vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
export default {
  name: "LightSourceDetail",
  components: {
    SheduleAdd,
    VueSlider,
  },
  data: function() {
    return {
      isOn: undefined,
      lightValue: 0, // wartość slidera od mocy świecenia

      //opcje slidera
      options: {
        dotSize: 14,
        width: "auto",
        height: 4,
        contained: false,
        direction: "ltr",
        data: null,
        min: 0,
        max: 100,
        interval: 1,
        disabled: false,
        clickable: true,
        duration: 0.5,
        adsorb: false,
        lazy: true, // zmiana wartości nastąpi dopiero po zakończeniu przesuwania suwaka
        tooltip: "active",
        tooltipPlacement: "top",
        tooltipFormatter: void 0,
        useKeyboard: false,
        keydownHook: null,
        dragOnClick: false,
        enableCross: true,
        fixed: false,
        minRange: void 0,
        maxRange: void 0,
        order: true,
        marks: false,
        dotOptions: void 0,
        process: true,
        dotStyle: void 0,
        railStyle: void 0,
        processStyle: { "background-color": "#ffba08" },
        tooltipStyle: void 0,
        stepStyle: void 0,
        stepActiveStyle: void 0,
        labelStyle: void 0,
        labelActiveStyle: void 0,
      },
    };
  },
  methods: {
    //nacisniecie On lub Off zmieni aktualnie wyswietlane swiatelko dla wybranego typa
    setLight(val) {
      //var temp = manager.lightSource.findIndex(el => el.relay == this.choosenBlock);
      //manager.lightSource[choosenBlock].relay
      //this.manager.lightSource[this.index].func = val;

      this.choosenBlock.func = val;

      //przypisanie nowej wartosci do calej grupy:
      //1. znajdz grupe pokoi
      var temp = this.allRooms.findIndex((el) => el.name == this.name);

      //2. przypisz nowy obiekt
      this.allRooms[temp].lightSources[this.index] = this.choosenBlock;

      //3. zapisz w vuex
      this.$store.commit("setAllRooms", this.allRooms);

      //this.$store.commit('setAllRoms');
    },
  },
  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
    choosenBlock() {
      return this.$store.getters.getChoosenBlock;
    },
    name() {
      return this.$store.getters.getCurrentRoomName;
    },
    manager() {
      return this.$store.getters["getRoom"](this.name);
    },
    index() {
      return this.$store.getters.getLightSourceIndex;
    },
    allRooms() {
      return this.$store.getters.getCurrentOptions;
    },
  },
};
</script>

<style>
.mainWrapper {
  min-height: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
  color: white;
  width: 20rem;
}

.deletebutton {
  color: rgba(208, 0, 0, 1);
  font-family: Roboto;
  font-weight: Bold;
  font-size: 30px;
  text-align: center;
}
.vue-slider-dot-tooltip-inner {
  border-color: #ffba08;
  background-color: #ffba08;
}

/* .setoffcolor {
  width: 140px;
  height: 40px;
  background: rgba(175, 175, 175, 1);
  opacity: 1;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  overflow: hidden;
}

.setoncolor {
  width: 140px;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(255, 186, 8, 1);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  overflow: hidden;
} */
</style>
