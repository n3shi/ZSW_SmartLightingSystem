<template>
    <div>
          <span class="label">Light sources</span>
      <div class="resultsBlock">
        <div class="results">
          <div :class="{'onBlock':active, 'block': !active}"
          v-for="item in manager.lightSources" 
          :key="item.relay"
          >
          <!-- DODAJ TO POD FORA WYZEJ ZEBY ZAZNACZYC DANY DIV (W TEORII BO NIE DZIALA) -->
           <!-- @mouseleave="active = false"   v-on:mouseover="active = true"  -->
              <span class="v27_254">{{item.name}}</span>
              <div class="v27_255">
                  <div class="v27_256"></div>
              </div>
              <div class="v27_257">
                  <div class="v27_258"></div>
                  <div class="v27_259"></div>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'LightSources',
    data: function() {
      return {
        active: false,
      };
    },
    methods: {
      mouseOver: function() {
        this.active = !this.active;
      }
    },
    computed: {
      name() {
        return this.$store.getters.getCurrentRoomName;
      },
       manager() {
        //return this.$store.getters['getRoom'](name);
        return this.$store.getters['getRoom'](this.name);
      },
    },
}
</script>

<style>


.block {
  width: 280px;
  height: 280px;
  background: rgba(255,255,255,1);
  opacity: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  border: black solid 1px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  /* box-shadow: 0px 0px 10px rgba(0.9607843160629272, 0.7960784435272217, 0.3607843220233917, 1); */
  /* overflow: hidden; */
}

.onBlock {
  width: 300px;
  height: 300px;
  background: rgba(255,255,255,1);
  opacity: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  border: black solid 1px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  /* box-shadow: 0px 0px 10px rgba(0.9607843160629272, 0.7960784435272217, 0.3607843220233917, 1); */
  /* overflow: hidden; */
}

.results {
  position: relative;
  left: 40px;
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  grid-auto-rows: 300px;
  align-items: center;
  justify-items: center;
  grid-gap: 70px;
}

.setOn{
 width: 300px;
  height: 300px;
}

.setOff {
  width: 280px;
  height: 280px;
}

.label {
  width: 145px;
  height:100px;
  color: rgba(36,36,35,1);
  display: block;
  position: relative;
  top: 30px;
  left: 94px;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 24px;
  opacity: 1;
  text-align: left;
}

.v27_254 {
  width: 150px;
  color: rgba(36,36,35,1);
  position: absolute;
  top: 30px;
  left: 86px;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 24px;
  opacity: 1;
  text-align: left;
}
.v27_255 {
  width: 80px;
  height: 80px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 80px;
  left: 100px;
  /* overflow: hidden; */
}
.v27_256 {
  width: 43px;
  height: 63px;
  background: rgba(255,186,8,1);
  opacity: 1;
  position: absolute;
  top: 10px;
  left: 17px;
}
.v27_257 {
  width: 30px;
  height: 30px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 182px;
  left: 125px;
  /* overflow: hidden; */
}
.v27_258 {
  width: 26px;
  height: 9px;
  background: rgba(255,186,8,1);
  opacity: 1;
  position: absolute;
  top: 3px;
  left: 2px;
}
.v27_259 {
  width: 26px;
  height: 9px;
  background: rgba(255,186,8,1);
  opacity: 1;
  position: absolute;
  top: 16px;
  left: 2px;
}

.v27_265 {
  width: 280px;
  height: 280px;
  background: rgba(232,237,223,1);
  opacity: 1;
  position: absolute;
  top: 88px;
  left: 434px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  /* overflow: hidden; */
}
.v27_266 {
  width: 73px;
  color: rgba(36,36,35,1);
  position: absolute;
  top: 30px;
  left: 104px;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 24px;
  opacity: 1;
  text-align: left;
}
.v27_267 {
  width: 30px;
  height: 30px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 182px;
  left: 125px;
  /* overflow: hidden; */
}
.v27_268 {
  width: 26px;
  height: 9px;
  background: rgba(36,36,35,1);
  opacity: 1;
  position: absolute;
  top: 3px;
  left: 2px;
}
.v27_269 {
  width: 26px;
  height: 9px;
  background: rgba(36,36,35,1);
  opacity: 1;
  position: absolute;
  top: 16px;
  left: 2px;
}
.v27_270 {
  width: 80px;
  height: 80px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 80px;
  left: 100px;
  /* overflow: hidden; */
}
.v27_271 {
  width: 43px;
  height: 63px;
  background: rgba(0,0,0,1);
  opacity: 1;
  position: absolute;
  top: 10px;
  left: 17px;
}
.v27_272 {
  width: 280px;
  height: 280px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 88px;
  left: 774px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 0px 0px 10px rgba(0.9607843160629272, 0.7960784435272217, 0.3607843220233917, 1);
  /* overflow: hidden; */
}
.v27_273 {
  width: 46px;
  color: rgba(36,36,35,1);
  position: absolute;
  top: 30px;
  left: 117px;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 24px;
  opacity: 1;
  text-align: left;
}
.v27_274 {
  width: 80px;
  height: 80px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 80px;
  left: 100px;
  /* overflow: hidden; */
}
.v27_275 {
  width: 43px;
  height: 63px;
  background: rgba(245,203,92,1);
  opacity: 1;
  position: absolute;
  top: 10px;
  left: 17px;
}
.v27_276 {
  width: 30px;
  height: 30px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 182px;
  left: 125px;
  /* overflow: hidden; */
}
.v27_277 {
  width: 26px;
  height: 9px;
  background: rgba(36,36,35,1);
  opacity: 1;
  position: absolute;
  top: 3px;
  left: 2px;
}
.v27_278 {
  width: 26px;
  height: 9px;
  background: rgba(36,36,35,1);
  opacity: 1;
  position: absolute;
  top: 16px;
  left: 2px;
}
.v27_279 {
  width: 80px;
  height: 80px;
  /* background: url("../images/v27_279.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 405px;
  left: 1364px;
  /* overflow: hidden; */
}
.v27_280 {
  width: 80px;
  height: 80px;
  background: rgba(255,186,8,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
}
.v27_281 {
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 20px;
  left: 20px;
  /* overflow: hidden; */
}
.v27_282 {
  width: 2px;
  height: 28px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 5px;
  left: 19px;
}
.v27_283 {
  width: 26px;
  height: 2px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 18px;
  left: 7px;
}


.v27_288 {
  width: 26px;
  height: 2px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 18px;
  left: 7px;
}
</style>