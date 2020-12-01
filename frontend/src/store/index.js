import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkmode: false,
    activeRoom: {
      name: "",
    },

    manager: [],
    //manager: [
    //  {
    //    name: "Bedroom",
    //    lightSources: [
    //      {
    //        name: "Test",
    //        relay: 1,
    //        begin: "12:00",
    //        end: "23:59",
    //        func: "off",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Night Light",
    //        relay: 2,
    //        begin: "00:00",
    //        end: "23:59",
    //        func: "on",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Night Light",
    //        relay: 3,
    //        begin: "00:00",
    //        end: "23:59",
    //        func: "off",
    //        funcArg: "",
    //      },
    //    ],
    //  },
    //  {
    //    name: "Kitchen",
    //    lightSources: [
    //      {
    //        name: "Night Light",
    //        relay: 1,
    //        begin: "00:00",
    //        end: "23:59",
    //        func: "on",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Test",
    //        relay: 2,
    //        begin: "00:00",
    //        end: "23:59",
    //        func: "on",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Night Light",
    //        relay: 3,
    //        begin: "00:00",
    //        end: "23:59",
    //        func: "on",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Night Light",
    //        relay: 4,
    //        begin: "00:00",
    //        end: "23:59",
    //        func: "on",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Night Light",
    //        relay: 5,
    //        begin: "00:00",
    //        end: "23:59",
    //        func: "on",
    //        funcArg: "",
    //      },
    //    ],
    //  },
    //  {
    //    name: "Bathroom",
    //    lightSources: [
    //      {
    //        name: "Night Light",
    //        relay: 1,
    //        begin: "12:00",
    //        end: "23:59",
    //        func: "off",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Night Light",
    //        relay: 2,
    //        begin: "12:00",
    //        end: "23:59",
    //        func: "off",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Night Light",
    //        relay: 3,
    //        begin: "12:00",
    //        end: "23:59",
    //        func: "off",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Night Light",
    //        relay: 4,
    //        begin: "12:00",
    //        end: "23:59",
    //        func: "off",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Night Light",
    //        relay: 5,
    //        begin: "12:00",
    //        end: "23:59",
    //        func: "off",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Night Light",
    //        relay: 6,
    //        begin: "12:00",
    //        end: "23:59",
    //        func: "off",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Night Light",
    //        relay: 7,
    //        begin: "12:00",
    //        end: "23:59",
    //        func: "off",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Night Light",
    //        relay: 8,
    //        begin: "12:00",
    //        end: "23:59",
    //        func: "off",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Test",
    //        relay: 9,
    //        begin: "12:00",
    //        end: "23:59",
    //        func: "off",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Test",
    //        relay: 10,
    //        begin: "12:00",
    //        end: "23:59",
    //        func: "off",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Test",
    //        relay: 11,
    //        begin: "12:00",
    //        end: "23:59",
    //        func: "off",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Test",
    //        relay: 12,
    //        begin: "12:00",
    //        end: "23:59",
    //        func: "off",
    //        funcArg: "",
    //      },
    //      {
    //        name: "Test",
    //        relay: 13,
    //        begin: "12:00",
    //        end: "23:59",
    //        func: "off",
    //        funcArg: "",
    //      },
    //    ],
    //  },
    //],

    newShedule: [], //nowa tablica harmonogramow dla wybranego pokoju
    newSheduleLenght: 0, // dlugosc tej tablicy
    lightSourceIndex: undefined, //index swiatla ktore wybralismy myszka
    active: false, //okresla czy jakies swiatlo zostalo wybrane czy nie
    choosenBlock: undefined, // przechowuje informacje o wybranym swietle
    //=======
    //    newShedule: [], //nowa tablica harmonogramow dla wybranego pokoju
    //    newSheduleLenght: 0, // dlugosc tej tablicy
    //    lightSourceIndex: undefined, //index swiatla ktore wybralismy myszka
    //    active: false, //okresla czy jakies swiatlo zostalo wybrane czy nie
    //    choosenBlock: undefined, // przechowuje informacje o wybranym swietle
    //>>>>>>> 21aeeb2d414397ab49f9f0cdeea144b1e17051a9
  },
  mutations: {
    setCurrentOptions(state, payload) {
      //  state.mainManager.manager.push(payload);
      console.log(payload);
      state.manager = payload;
    },
    setRoomName(state, payload) {
      state.activeRoom.name = payload;
    },
    setNewShedule(state, payload) {
      var newShedule = [];
      state.shedule.forEach(function(el) {
        if (el.roomName == payload) {
          newShedule.push(el);
        }
      });
      state.newShedule = newShedule;
      state.newSheduleLenght = newShedule.length;
    },
    setActive(state, payload) {
      state.active = payload;
    },
    setChoosenBlock(state, payload) {
      state.choosenBlock = payload;
    },
    setLightSourceIndex(state, payload) {
      state.lightSourceIndex = payload;
    },
    setAllRooms(state, payload) {
      state.manager = payload;
    },
    setMainManager(state, payload) {
      state = payload;
    },
    toggleDarkMode(state) {
      state.darkmode = !state.darkmode;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getCurrentOptions: (state) => state.manager,
    getCurrentRoomName: (state) => state.activeRoom.name,
    getRoom: (state) => (name) => state.manager.find((el) => el.name === name),
    //getShedule: (state) => (roomName) => state.shedule.find((el) => el.roomName == roomName)
    getShedule: (state) => state.shedule,
    getNewShedule: (state) => state.newShedule,
    getNewSheduleLenght: (state) => state.newSheduleLenght,
    getLightSourceIndex: (state) => state.lightSourceIndex,
    getActive: (state) => state.active,
    getChoosenBlock: (state) => state.choosenBlock,
    getJsonData: (state) => state.manager,
    getDarkMode: (state) => state.darkmode,
  },
});
