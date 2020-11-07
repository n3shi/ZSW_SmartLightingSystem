<template>
  <div class="window">
    <link
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
      rel="stylesheet"
    />
    <div class="sidePanel">
      <SideMenu />
    </div>
    <div class="mainPanel">
      <ControlPanel />
      <LightSources />
      <Schedule />
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/Manager/SideMenu.vue";
import ControlPanel from "@/components/Manager/ControlPanel.vue";
import LightSources from "@/components/Manager/LightSources.vue";
import Schedule from "@/components/Manager/Schedule.vue";

export default {
  name: "Manager",
  components: {
    SideMenu,
    ControlPanel,
    LightSources,
    Schedule,
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
  border: 1px red solid;
}

.mainPanel {
  flex: 1;
  height: 100%;
  border: 1px blue solid;
  display: flex;
  flex-direction: column;
}
</style>
