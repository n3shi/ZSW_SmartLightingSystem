<template>
    <div class="panelBlock">
                <span class="roomName">{{roomName}}</span>
                <span class="lights">Lights</span>
                <div class="off" tabindex="1">
                    <div class="v27_214" ></div>
                    <span class="v27_215">Off</span>
                </div>
                <div class="save"  tabindex="1">
                    <div class="v27_217" ></div>
                    <span class="v27_218">Save</span>
                </div>
                <div class="manual" tabindex="1">
                    <div class="v27_220"  ></div>
                    <span class="v27_221">Manual</span>
                </div>
                <div class="on" tabindex="1"> 
                    <div class="v27_223" ></div>
                    <span class="v27_224">On</span>
                </div>
            </div>
</template>

<script>
export default {
    name: "ControlPanel",
    computed: {
      roomName() {
        return this.$store.state.activeRoom.name;
      },
    },
}
</script>

<style>
.colorPalete{
   background: rgba(232,237,223,1);
   color: rgba(36,36,35,1);
   background: rgba(175,175,175,1);

}

.on {
  width: 140px;
  height: 40px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 55px;
  left: 823px;
  overflow: hidden;
}

.manual {
  width: 140px;
  height: 40px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 55px;
  left: 983px;
  overflow: hidden;
}

.off {
  width: 140px;
  height: 40px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 55px;
  left: 1143px;
  overflow: hidden;
}

.on, .manual, .off, .save {
  width: 140px;
  height: 40px;
  background: rgba(175,175,175,1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: Roboto;
  font-size: 20px;
  color: black;

  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  /* overflow: hidden; */

    /* Niezaznaczalny obiekt */
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}
.on:hover, .manual:hover, .off:hover {
 background-color: rgb(235, 235, 235);
 box-sizing: border-box;
 border: 1px orange solid;
}

.on:focus, .manual:focus, .off:focus {
  outline:none;
  box-sizing: border-box;
 border: 1px black solid;
  background-color: white;
}

.save {
  background-color: black;
  color: white;
}

.save:hover {
  background-color: white;
  color: black;
  box-sizing: border-box;
 border: 1px black solid;
}

.save:focus {
  outline: none;
  background-color: white;
  color: black;
  box-sizing: border-box;
 border: 1px black solid;

}


/* .on >div:hover, .manual>div:hover, .off>div:hover{
  background-color: orange;
}

.on>div:focus {
  outline:none;
  background-color: white;
} */

.save {
  width: 140px;
  height: 40px;
  /* background: url("../images/save.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 55px;
  left: 1323px;
  overflow: hidden;
}

.panelBlock {
  width: 100%;
  height: 150px;
  background: rgba(232,237,223,1);
  opacity: 1;
  position: relative;
  top: 0px;
  left: 377px;
  overflow: hidden;
}
.roomName {
  width: 600px;
  color: rgba(36,36,35,1);
  position: absolute;
  top: 55px;
  left: 38px;
  font-family: Roboto;
  font-weight: Bold;
  font-size: 34px;
  opacity: 1;
  text-align: left;
}
.lights {
  width: 72px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 60px;
  left: 705px;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 26px;
  opacity: 1;
  text-align: left;
}

/* .v27_214 {
  width: 140px;
  height: 40px;
  background: rgba(175,175,175,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  overflow: hidden;
}
.v27_215 {
  width: 28px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 8px;
  left: 56px;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 18px;
  opacity: 1;
  text-align: left;
}

.v27_217 {
  width: 140px;
  height: 40px;
  background: rgba(51,53,51,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  overflow: hidden;
}
.v27_218 {
  width: 39px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 9px;
  left: 51px;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 18px;
  opacity: 1;
  text-align: left;
}

.v27_220 {
  width: 140px;
  height: 40px;
  background: rgba(246,246,246,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  border: 2px solid rgba(255,186,8,1);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  overflow: hidden;
}
.v27_221 {
  width: 61px;
  color: rgba(36,36,35,1);
  position: absolute;
  top: 10px;
  left: 40px;
  font-family: Roboto;
  font-weight: Bold;
  font-size: 18px;
  opacity: 1;
  text-align: left;
}

.v27_223 {
  width: 140px;
  height: 40px;
  background: rgba(175,175,175,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  overflow: hidden;
}
.v27_224 {
  width: 28px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 8px;
  left: 56px;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 18px;
  opacity: 1;
  text-align: left;
} */
</style>