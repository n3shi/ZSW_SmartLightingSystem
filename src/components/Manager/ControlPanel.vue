<template>
  <section :class="{ controlPanelContainer: roomName, hidden: !roomName }">
    <div class="panelBlock">
      <p class="roomName">{{ roomName }}</p>
      <!-- <p class="lights">Lights</p> -->
		<button class="resetButton">
        <div class="buttonContainer offButton" tabindex="1" @click="getJSON">
		get API JSON
        </div>
      </button>
      <button class="resetButton">
        <div class="buttonContainer offButton" tabindex="1">
          On
        </div>
      </button>
      <button class="resetButton">
        <div class="buttonContainer offButton" tabindex="1">
          Manual
        </div>
      </button>
      <button class="resetButton ">
        <div class="buttonContainer offButton " tabindex="1">
          Off
        </div>
      </button>
      <button class="resetButton">
        <div class="buttonContainer saveButton " tabindex="1" @click="sendJson">
          Save
        </div>
      </button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: "ControlPanel",
  computed: {
    roomName() {
      return this.$store.state.activeRoom.name;
	},
	jsonData() {
		return this.$store.getters.getJsonData;
	}
  },
	mounted: function() {
		this.load()
	},

  methods: {
	load(){
			axios.get("/technical/getInstallation/1").then(m=>{
				console.log(m.data)
			}).catch(e => {
				console.error(e)
			})
		},

		sendJson() {
			console.log(this.jsonData);
			var newJson = JSON.stringify(this.jsonData);
			console.log(newJson);
			
			//var url = ""
			//wyślij json
			let token = undefined;
			axios.post("/setConfig", {...this.jsonData, token}).then(m => {console.log(m);
			}).catch(e => {
				//401 brak dostepu
				console.log(e);
			})
		},

		getJSON(){
			//pobierz json z serwera
			var stringJson = '{}';

			//test
			stringJson = '{"shedule":[{"idSchedule":1,"roomName":"nazwaPomieszczenia","lightName":"nazwaSwiatla","relay":1,"funcVal1":"wartoscFunkcji1","hour1":"godzinaFunkcji1","arg1":"wartosc1","boomerangChange":false,"funcTo2":"wartoscFunkcji2","hour2":"godzinaFunkcji2","arg2":"wartosc2"}],"manager":[{"name":"nazwaPomieszczenia","lightSources":[{"name":"nazwaSwiatla","relay":1,"begin":"00:00","end":"23:59","func":"off","funcArg":""}]}]}';

			//skonwetuj go do obiektu
			var newObject = JSON.parse(stringJson);

			//zapisz do mainManager
			this.$store.commit('setMainManager',newObject);
			this.$store.commit('setRoomName','');
			this.$store.commit('setActive',false);
			this.$store.commit('setChoosenBlock',undefined);
			this.$store.commit('setLightSourceIndex',-1);
		}
  }
};
</script>

<style>
.hidden {
  display: none;
}
.controlPanelContainer {
  width: 100%;
  background: #e8eddf;

  /* Menu "przyklejone" do ekranu */
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  /*-----------------------------------------*/
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
.panelBlock .buttonContainer {
  width: 7rem;
  text-align: center;
  box-sizing: border-box;
  font-size: 1rem;
  border-radius: 2rem;
  padding: 0.5rem;
}
.panelBlock .buttonContainer:hover {
  /* border: 2px solid #ffba08; */
  background: #f6f6f6;
  filter: blur(0);
  -webkit-box-shadow: 4px 0px 5px 1px rgba(255, 186, 8, 0.4);
  -moz-box-shadow: 4px 0px 5px 1px rgba(255, 186, 8, 0.4);
  box-shadow: 4px 0px 5px 1px rgba(255, 186, 8, 0.4);
}
/* style dla przycisków aktywnych/nieaktwnych */
.panelBlock .onButton {
  font-weight: bold;
  border: 2px solid #ffba08;
  background: #f6f6f6;
}
.panelBlock .offButton {
  background: #afafaf;
  filter: blur(0.5px);
}
.panelBlock .saveButton {
  background: #333533;
  color: #ffffff;
}
/* ---------------------------------------------- */
.panelBlock .saveButton:hover {
  background: #f6f6f6;
  color: #333533;
  filter: blur(0);
}
</style>
