<template>
  <div
    :class="['block', getBlocksState, getStyleMode, isActive]"
    @click="setThisButton()"
  >
    <p class="lightSourceName">{{ this.lightSource.name }}</p>
    <v-icon
      name="lightbulb"
      scale="4.5"
      :class="['lightBulbIcon', getIconState]"
    />
    <v-icon name="sliders-h" scale="2" />
  </div>
</template>

<script>
import "vue-awesome/icons/lightbulb";
import "vue-awesome/icons/sliders-h";
import Icon from "vue-awesome/components/Icon";

export default {
  components: {
    "v-icon": Icon,
  },
  props: {
    lightSource: Object,
    index: { type: Number },
  },

  // ['lightSource', 'index'],
  name: "LightSource",
  computed: {
    getBlocksState() {
      return this.lightSource.func === "on" ? "" : "offBlock";
    },
    darkmode() {
      return this.$store.state.darkmode;
    },
    getStyleMode() {
      return this.darkmode ? "blockDarkMode" : "blockLightMode";
    },
    getIconState() {
      return this.lightSource.func === "on"
        ? "lightSourceIconsOn"
        : "lightSourceIconsOff";
    },

    choosenBlock() {
      return this.$store.state.choosenBlock;
    },

    vuexIndex() {
      return this.$store.getters.getLightSourceIndex;
    },

    isActive2() {
      return this.$store.getters.getActive;
    },
  },
  watch: {
    vuexIndex: function() {
      if (this.vuexIndex != undefined) {
        //console.log(this.vuexIndex + "   index: " + this.index);
        if (this.vuexIndex == this.index) {
          this.isActive = "isActive";
        } else {
          this.isActive = "";
        }
      } else this.isActive = "";
    },
  },
  data: function() {
    return {
      isActive: "",
    };
  },
  methods: {
    setThisButton() {
      //jesli relay != choosenBlock.relay
      if (this.choosenBlock != undefined) {
        if (this.index != this.vuexIndex) {
          this.$store.commit("setChoosenBlock", this.lightSource);
          //i wskaż na niego
          this.$store.commit("setLightSourceIndex", this.index);
          this.$store.commit("setActive", true);
        } else {
          //w przeciwnym wypadku po 2 nacisnieciu zresetuj index
          this.$store.commit("setLightSourceIndex", -1);
          this.$store.commit("setActive", false);
        }
      }
      //w wprzeciwnym wypadku dodaj go i uzupelnij index
      else {
        this.$store.commit("setChoosenBlock", this.lightSource);
        this.$store.commit("setLightSourceIndex", this.index);
        this.$store.commit("setActive", true);
      }

      console.log(this.isActive2);
    },
  },
};
</script>

<style>
.lightSourceName {
  font-size: 1.75em;
  margin: 0;
}
.lightBulbIcon {
  flex: 1;
}
.lightSourceIconsOff {
  color: #242624;
}
.lightSourceIconsOn {
  color: #ffba08;
}
.blockDarkMode {
  color: #fff;
  background: #333533;
}
.blockLightMode {
  color: #333533;
}
.block {
  width: 15em;
  height: 15em;
  padding: 1.5em;
  margin: 2em 1em 2em 1em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 2em;

  -webkit-box-shadow: 4px 0px 10px 1px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 4px 0px 10px 1px rgba(0, 0, 0, 0.25);
  box-shadow: 4px 0px 10px 1px rgba(0, 0, 0, 0.25);
}
.block:hover {
  -webkit-box-shadow: 4px 0px 10px 1px rgba(255, 186, 8, 0.4);
  -moz-box-shadow: 4px 0px 10px 1px rgba(255, 186, 8, 0.4);
  box-shadow: 4px 0px 10px 1px rgba(255, 186, 8, 0.4);
}

.offBlock {
  /* smth */
}

.isActive {
  -webkit-box-shadow: 4px 0px 10px 1px rgba(255, 230, 8, 0.753);
  -moz-box-shadow: 4px 0px 10px 1px rgba(255, 230, 8, 0.753);
  box-shadow: 4px 0px 10px 1px rgba(255, 230, 8, 0.753);
}
</style>
