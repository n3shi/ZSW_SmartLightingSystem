<template>
  <div
    class="mainWrapper"
    :class="{
      sidePanelDarkMode: this.darkMode,
      sidePanelLightMode: !this.darkMode,
    }"
  >
    <button class="resetButton closeButton" @click="this.close">
      <v-icon name="times" scale="2" />
    </button>

    <input
      class="lightsourceName"
      type="text"
      :placeholder="choosenBlock.name"
      value="choosenBlock.name"
      v-model="test"
      @change="setLightName(test)"
    />
    <div class="lightIntensityContainer">
      <p class="lightIntensity">
        Light intensity
      </p>
      <div class="lightIntensitySliderContainer">
        <v-icon name="sun" scale="1.5" />
        <div class="slider">
			<vue-slider v-model="lightValue" v-bind="options" @change="choosenBlock.funcVal = lightValue"/>
        </div>
        <v-icon name="sun" scale="1.5" color="#ffba08" />
      </div>
    </div>
    <div class="buttonsContainer">
      <button
        @click="setLight('on')"
        class="resetButton buttonContainer"
        :class="{
          onButtonLightMode: this.choosenBlock.func === 'on' && !this.darkMode,
          onButtonDarkMode: this.choosenBlock.func === 'on' && this.darkMode,
          offButtonLightMode:
            this.choosenBlock.func === 'off' && !this.darkMode,
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
    </div>
    <vue-timepicker
      v-model="beginTimeInput"
      format="HH:mm"
      @change="changeBeginTime"
    ></vue-timepicker>
    <vue-timepicker
      v-model="endTimeInput"
      format="HH:mm"
      @change="changeEndTime"
    ></vue-timepicker>
    <button class="resetButton deletebutton">
      Delete
    </button>
    <SheduleAdd />
  </div>
</template>

<script>
import SheduleAdd from "@/components/Manager/SheduleAdd.vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/times";
import "vue-awesome/icons/sun";
import VueTimepicker from "vue2-timepicker";
// CSS
import "vue2-timepicker/dist/VueTimepicker.css";
export default {
  name: "LightSourceDetail",
  components: {
    SheduleAdd,
    VueSlider,
    "v-icon": Icon,
    VueTimepicker,
  },
  data: function() {
    return {
      isOn: undefined,
      lightValue: 0, // wartość slidera od mocy świecenia
      test: "",
      beginTimeInput: "",
      endTimeInput: "",
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
  updated() {
    this.beginTimeInput = this.choosenBlock.begin;
    this.endTimeInput = this.choosenBlock.end;
  },
  created() {
    this.beginTimeInput = this.choosenBlock.begin;
    this.endTimeInput = this.choosenBlock.end;
  },
  methods: {
    consolelog(eventData) {
      console.log(eventData);
    },
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

    setLightName(val) {
      //console.log("dzialam" + val);
      this.choosenBlock.name = val;
      var temp = this.allRooms.findIndex((el) => el.name == this.name);
      this.allRooms[temp].lightSources[this.index] = this.choosenBlock;

      this.$store.commit("setAllRooms", this.allRooms);
    },
    close() {
      this.$store.commit("setActive", false);
      this.$store.commit("setChoosenBlock", undefined);
      this.$store.commit("setLightSourceIndex", -1);
    },
    changeBeginTime(data) {
      const time = data.displayTime;
      this.choosenBlock.begin = time;
      var temp = this.allRooms.findIndex((el) => el.name == this.name);
      this.allRooms[temp].lightSources[this.index] = this.choosenBlock;

      this.$store.commit("setAllRooms", this.allRooms);
    },
    changeEndTime(data) {
      const time = data.displayTime;
      this.choosenBlock.end = time;
      var temp = this.allRooms.findIndex((el) => el.name == this.name);
      this.allRooms[temp].lightSources[this.index] = this.choosenBlock;

      this.$store.commit("setAllRooms", this.allRooms);
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
  padding: 2rem 2rem;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: column;
  width: 20rem;
  text-align: center;
}
.mainWrapper .lightsourceName {
  font-size: 2rem;
  margin-bottom: 2rem;
  outline: none;
  background: none;
  color: white;
  border: none;
}

.lightsourceName:focus {
  text-decoration: underline;
}

.lightIntensitySliderContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
.lightIntensitySliderContainer .slider {
  flex: 1;
  padding: 0 0.8rem;
}
.mainWrapper .lightIntensity {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
.mainWrapper .deletebutton {
  color: red;
  font-size: 2rem;
  font-weight: bold;
}
.mainWrapper .closeButton {
  align-self: flex-end;
  margin-bottom: 1rem;
}
.mainWrapper .buttonsContainer {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20rem;
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
