<template>
  <div class="sideMenu">
    <p class="header">Smart Lighting System</p>
    <p class="subheader">Rooms</p>
    <div class="gradientLine"></div>
    <div class="rooms">
      <div
        class="room"
        v-for="item in manager"
        :key="item.id"
        contentEditable="false"
        readonly
        tabindex="0"
      >
        <button class="roomName resetButton" @click="updateName(item.name)">
          {{ item.name }}
        </button>
      </div>

      <div class="addRoomButtonContainer" tabindex="0">
        <button class="addRoomButton resetButton">
          <v-icon name="plus" scale="1.25" />
          <p class="addRoomText">Add room</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-awesome/icons/plus";
import Icon from "vue-awesome/components/Icon";
export default {
  components: { "v-icon": Icon },
  name: "sideMenu",
  data: function() {
    return {
      isActive: false,
      roomName: "",
      manager: [],
      a: 0,
    };
  },
  methods: {
    updateName(name) {
      this.isActive = !this.isActive;
      this.roomName = name;
      this.$store.commit("setRoomName", this.roomName);
    },
  },
  mounted() {
    this.manager = this.$store.getters.getCurrentOptions;
  },
};
</script>

<style>
.sideMenu {
  /* Menu "przyklejone" do ekranu */
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  width: 100%;
  /*-----------------------------------------*/
  color: #e8eddf;
  padding: 0;
  box-sizing: border-box;
}
.sideMenu .header {
  padding: 2rem 2.5rem;
  font-size: 2rem;
  margin-bottom: 3rem;
}
.sideMenu .subheader {
  padding: 2rem 2.5rem;
  font-size: 2rem;
}
.sideMenu .gradientLine {
  width: 100%;
  height: 3px;
  margin-bottom: 0.5rem;
  background: rgb(36, 36, 35);
  background: linear-gradient(
    90deg,
    rgba(36, 36, 35, 1) 0%,
    rgba(51, 53, 51, 1) 100%
  );
}
.sideMenu .room {
  width: 40%;
  font-size: 1.5rem;
  padding: 1rem 4rem;
}

.sideMenu .roomName:hover {
  color: #ffba08;
  font-weight: bold;
}
.sideMenu .addRoomButtonContainer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 2rem;
  font-size: 1.5rem;
}
.sideMenu .addRoomButton {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.sideMenu .addRoomButton:hover {
  color: #ffba08;
  font-weight: bold;
}

/* klasa resetująca wygląd przycisku */
.resetButton {
  color: inherit;
  font: inherit;

  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
}
.sideMenu .addRoomText {
  margin-left: 1rem;
}
</style>
