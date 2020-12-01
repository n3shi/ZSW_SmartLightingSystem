<template>
  <section :class="[showPanel, getStyleMode]">
    <div class="panelBlock">
      <p class="roomName">{{ roomName }}</p>
      <!-- <p class="lights">Lights</p> -->
      <button class="resetButton">
        <div class="buttonContainer offButton" tabindex="1" @click="getJSON">
          get API JSON
        </div>
      </button>
      <button class="resetButton">
        <div :class="['buttonContainer', getButtonStyle]" tabindex="1">
          On
        </div>
      </button>
      <button class="resetButton">
        <div :class="['buttonContainer', getButtonStyle]" tabindex="1">
          Manual
        </div>
      </button>
      <button class="resetButton ">
        <div :class="['buttonContainer', getButtonStyle]" tabindex="1">
          Off
        </div>
      </button>
      <button class="resetButton">
        <div class="buttonContainer saveButton " tabindex="1" @click="sendJson">
          Save
        </div>
      </button>
      <button class="resetButton emoji" @click="toggleDarkMode()">
        <div v-if="darkMode" tabindex="1">
          🌕
        </div>
        <div v-else tabindex="1">
          ☀️
        </div>
      </button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "ControlPanel",
  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
    roomName() {
      return this.$store.state.activeRoom.name;
    },
    showPanel() {
      return this.roomName ? "controlPanelContainer" : "hidden";
    },
    getStyleMode() {
      return this.darkMode ? "controlPanelDarkMode" : "controlPanelLightMode";
    },
    getButtonStyle() {
      return this.darkMode ? "offButtonDarkMode" : "offButtonLightMode";
    },
  },

//  mounted: function() {
//    this.load();
//  },

  methods: {
    //load() {
    //  axios
    //    .get("/technical/getInstallation/1")
    //    .then((m) => {
    //      console.log(m.data);
    //    })
    //    .catch((e) => {
    //      console.error(e);
    //    });
    //},

    sendJson() {
      console.log(this.jsonData);
      var newJson = JSON.stringify(this.jsonData);
      console.log(newJson);

      //var url = ""
      //wyślij json
      let token = undefined;
      axios
        .post("/relay/setConfig", { ...this.jsonData, token })
        .then((m) => {
          console.log(m);
        })
        .catch((e) => {
          //401 brak dostepu
          console.log(e);
        });
    },

    getJSON() {
      //pobierz json z serwera
      var stringJson = "{}";

      //test
      stringJson =
        '{"shedule":[{"idSchedule":1,"roomName":"nazwaPomieszczenia","lightName":"nazwaSwiatla","relay":1,"funcVal1":"wartoscFunkcji1","hour1":"godzinaFunkcji1","arg1":"wartosc1","boomerangChange":false,"funcTo2":"wartoscFunkcji2","hour2":"godzinaFunkcji2","arg2":"wartosc2"}],"manager":[{"name":"nazwaPomieszczenia","lightSources":[{"name":"nazwaSwiatla","relay":1,"begin":"00:00","end":"23:59","func":"off","funcArg":""}]}]}';

      //skonwetuj go do obiektu
      var newObject = JSON.parse(stringJson);

      //zapisz do mainManager
      this.$store.commit("setMainManager", newObject);
      this.$store.commit("setRoomName", "");
      this.$store.commit("setActive", false);
      this.$store.commit("setChoosenBlock", undefined);
      this.$store.commit("setLightSourceIndex", -1);
    },
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    },
    jsonData() {
      return this.$store.getters.getJsonData;
    },
  },
};
</script>

<style>
.hidden {
  display: none;
}
.controlPanelContainer {
  width: 100%;
}

.panelBlock {
  width: 80%;

  height: 6.5rem;
  box-sizing: border-box;
  display: flex;

  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}
.panelBlock .roomName {
  font-size: 2rem;
}
.panelBlock .lights {
  font-size: 1.5rem;
}
.buttonContainer {
  width: 7rem;
  text-align: center;
  box-sizing: border-box;
  font-size: 1rem;
  border-radius: 2rem;
  padding: 0.5rem;
}
/* style dla przycisków aktywnych/nieaktwnych */
.onButtonLightMode {
  color: #242624;
  font-weight: bold;
  border: 2px solid #ffba08;
  background: #f6f6f6;
}
.onButtonDarkMode {
  color: #242624;
  font-weight: bold;
  border: 2px solid #ffba08;
  background: #f6f6f6;
}
.offButtonLightMode {
  color: #242624;
  background: #afafaf;
  filter: blur(0.5px);
}
.offButtonDarkMode {
  color: #242624;
  background: #afafaf;
  filter: blur(0.5px);
}
.offButtonDarkMode:hover {
  background: #f6f6f6;
  color: #333533;
  filter: blur(0);
}
.offButtonLightMode:hover {
  background: #f6f6f6;
  color: #333533;
  filter: blur(0);
}
.panelBlock .saveButton {
  background: #242624;
  color: #ffffff;
}
/* ---------------------------------------------- */
.panelBlock .saveButton:hover {
  background: #f6f6f6;
  color: #333533;
  filter: blur(0);
}
.controlPanelDarkMode {
  background: #323131;
}
.controlPanelLightMode {
  background: #e8eddf;
}
.emoji {
  font-size: 1.5em;
}
</style>
