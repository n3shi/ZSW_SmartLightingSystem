<template>
  <div class="window">
    <link
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
      rel="stylesheet"
    />
    <div class="sidePanel">
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
import axios from 'axios';
//import Panel from "@/components/Manager/LightSourceDetail.vue";

export default {
	name: "Manager",
  computed: {
    roomName() {
      return this.$store.state.activeRoom.name;
	},
	
	active() {
		return this.$store.getters.getActive;
	}
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
.sidePanel {
  background-color: #333533;
}
.mainPanel {
  flex: 1;
  height: 100%;
  display: flex;
  background: #fff;
  flex-direction: column;
}

.newPanel{
	width:514px;
}
</style>
