<template>
  <section :class="{ controlPanelContainer: roomName, hidden: !roomName }">
    <div class="panelBlock">
      <p class="roomName">{{ roomName }}</p>
      <!-- <p class="lights">Lights</p> -->
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
        <div class="buttonContainer saveButton " tabindex="1">
          Save
        </div>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "ControlPanel",
  computed: {
    roomName() {
      return this.$store.state.activeRoom.name;
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
  background: #e8eddf;

  /* Menu "przyklejone" do ekranu */
  position: -webkit-sticky; /* Safari */
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
  border: 2px solid #ffba08;
  background: #f6f6f6;
  filter: blur(0);
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
  border: 2px solid #ffba08;
  background: #f6f6f6;
  color: #333533;
  filter: blur(0);
}
</style>
