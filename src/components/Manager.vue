<template>
    <div>
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />

            <div class="v27_196">
                <SideMenu/>
                <ControlPanel/>
                <div class="v27_252">
                <LightSources/>
                <Schedule/>
                </div>
            </div>
    </div>   
</template>

<script>
import SideMenu from '@/components/Manager/SideMenu.vue';
import ControlPanel from '@/components/Manager/ControlPanel.vue';
import LightSources from '@/components/Manager/LightSources.vue';
import Schedule from '@/components/Manager/Schedule.vue';

export default {
    name: 'Manager',
    components: {
        SideMenu,
        ControlPanel,
        LightSources,
        Schedule,
    }
}
</script>

<style>
* {
  overflow-x: hidden;
  padding: 0px !important;
  margin: 0px !important;
}
.v27_196 {
  width: 100%;
  height: 1080px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}


.v27_252 {
  width: 100%;
  height: 930px;
  /* background: url("../images/v27_252.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 160px;
  left: 360px;
  overflow: hidden;
}

</style>