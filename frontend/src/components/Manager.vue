<template>
  <div
    class="window"
    :class="{ windowDarkMode: darkmode, windowLightMode: !darkmode }"
  >
    <link
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
      rel="stylesheet"
    />
    <div
      :class="{ sidePanelDarkMode: darkmode, sidePanelLightMode: !darkmode }"
    >
      <SideMenu />
    </div>
    <div class="mainPanel" v-if="this.roomName != ''">
      <div class="test"><ControlPanel /></div>
      <div class="row">
        <div class="column">
          <LightSources />
          <Schedule />
        </div>
        <LightDetail v-if="this.active" />
      </div>

      <!--<Panel v-if="this.active"/>-->
    </div>
  </div>
</template>

<script>
import LightDetail from "@/components/Manager/LightSourceDetail.vue";
import SideMenu from "@/components/Manager/SideMenu.vue";
import ControlPanel from "@/components/Manager/ControlPanel.vue";
import LightSources from "@/components/Manager/LightSources.vue";
import Schedule from "@/components/Manager/Schedule.vue";
import axios from 'axios';
//import Panel from "@/components/Manager/LightSourceDetail.vue";

export default {
	name: "Manager",
  computed: {
    darkmode() {
      return this.$store.state.darkmode;
    },
    roomName() {
      return this.$store.state.activeRoom.name;
    },

    active() {
      return this.$store.getters.getActive;
    },
  },
    created() {
		this.load();
  },

  methods: {
	load(){
		axios.get("/technical/getInstallation/1").then(m=>{
			this.$store.commit('getCurrentOptions',m.data);
		}).catch(e => {
			console.error(e)
		})
	},
  },
 
  components: {
    SideMenu,
    ControlPanel,
    LightSources,
    Schedule,
    LightDetail,
    //Panel,
  },
};
</script>

<style>
.row {
  display: flex;
  flex: 1;
}
.column {
  flex: 1;
}
.test {
  /* Menu "przyklejone" do ekranu */
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  /*-----------------------------------------*/
}
.window {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
}
.sidePanelLightMode {
  background-color: #333533;
}
.sidePanelDarkMode {
  background: #1b1d1b;
}
.windowDarkMode {
  background-color: #242624;
  color: #fff;
}
.windowLightMode {
  background: #fff;
}
.mainPanelDarkMode {
  background-color: #333533;
}
.mainPanel {
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
}
</style>
