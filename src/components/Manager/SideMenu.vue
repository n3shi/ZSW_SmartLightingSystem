<template>
    <div class="sideMenu">
        <span class="header">Smart Lighting System</span>
        <span class="subheader">Rooms</span>
        <div class="rooms" >
          <div class="objects" v-for="item in manager" :key="item.id" 
          
          contentEditable="false" readonly tabindex="0" @click="updateName(item.name)" >
           {{item.name}}
          </div>

          <div class="addRoom" tabindex="0">
            <span class="v27_206" >Add room</span>
            <div class="v27_207">
                <div class="v27_208"></div>
                <div class="v27_209"></div>
            </div>
          </div>
        </div>
        
        <div class="v27_204"></div>
        
    </div>
</template>

<script>
export default {
    name: 'sideMenu',
    data: function() {
      return {
        roomName:"",
        manager: [],
        a: 0,
      }
    },
    methods: {
      updateName(name) {
        this.roomName = name;
        this.$store.commit('setRoomName', this.roomName);
      }
    },
    mounted() {
      this.manager = this.$store.getters.getCurrentOptions;
    }
}
</script>

<style>

.rooms {
  color:white;
  position: relative;
  width:100%;
  height:auto;
  top: 273px;
  left: 45px;
  display: flex;
  flex-direction: column;
  font-size: 25px;
}

.objects {
  display: flex;
  flex-direction: column;
  width:100%;
  height: 70px;
  align-items: flex-start;
  justify-content: center;


  /* Niezaznaczalny obiekt */
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}

.objects:hover {
  color: orange
}

.objects:focus {
  color: rgb(255, 211, 66);
  outline: none;
  font-size: 45px;
}

.addRoom {
  width: 180px;
  height: 50px;
  margin-top: 10px;
  display:flex;
  position: relative; 
  flex-direction: row;
    align-items: center;
    justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  left: 150px;

    /* Niezaznaczalny obiekt */
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}

.addRoom:hover {
  background-color: rgb(145, 128, 128);
  color: black;
}

.addRoom:focus {
  outline: none;
  background-color: white;
  color: black;
}


.sideMenu {
  width: 377px;
  height: 100%;
  background: rgba(51,53,51,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.header {
  width: 278px;
  color: rgba(232,237,223,1);
  position: absolute;
  top: 59px;
  left: 45px;
  font-family: Roboto;
  font-weight: Bold;
  font-size: 27px;
  opacity: 1;
  text-align: left;
}
.subheader {
  width: 86px;
  color: rgba(232,237,223,1);
  position: absolute;
  top: 209px;
  left: 45px;
  font-family: Roboto;
  font-weight: Bold;
  font-size: 27px;
  opacity: 1;
  text-align: left;
}
.v27_200 {
  width: 90px;
  color: rgba(255,186,8,1);
  position: absolute;
  top: 272px;
  left: 55px;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 22px;
  opacity: 1;
  text-align: left;
}

.v27_201 {
  width: 74px;
  color: rgba(207,219,213,1);
  position: absolute;
  top: 319px;
  left: 55px;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 22px;
  opacity: 1;
  text-align: left;
}

.v27_204 {
  width: 367px;
  height: 2px;
  background: linear-gradient(white, white);
  opacity: 1;
  position: absolute;
  top: 245px;
  left: 0px;
  overflow: hidden;
}

.v27_208 {
  width: 2px;
  height: 18px;
  background: rgba(255,186,8,1);
  opacity: 1;
  position: absolute;
  top: 14px;
  left: 16px;
}
.v27_209 {
  width: 18px;
  height: 2px;
  background: rgba(255,186,8,1);
  opacity: 1;
  position: absolute;
  top: 22px;
  left: 8px;
}
</style>