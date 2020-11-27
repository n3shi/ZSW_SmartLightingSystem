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
      <ControlPanel />
      <LightSources />

      <Schedule />
	<!--<Panel v-if="this.active"/>-->
    </div>
	<div class="newPanel" v-if="this.active == true"/>
  </div>
</template>

<script>
import SideMenu from "@/components/Manager/SideMenu.vue";
import ControlPanel from "@/components/Manager/ControlPanel.vue";
import LightSources from "@/components/Manager/LightSources.vue";
import Schedule from "@/components/Manager/Schedule.vue";
//import Panel from "@/components/Manager/LightSourceDetail.vue";

export default {
  computed: {
    darkmode() {
      return this.$store.state.darkmode;
    },
    roomName() {
      return this.$store.state.activeRoom.name;
	},
	
	active() {
		return this.$store.getters.getActive;
	}
  },
  name: "Manager",
  components: {
    SideMenu,
    ControlPanel,
    LightSources,
	Schedule,
	//Panel,
  },
};
</script>

<style>
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
  height: 100%;
  display: flex;

  flex-direction: column;
}

.newPanel{
	width:514px;
}
</style>
