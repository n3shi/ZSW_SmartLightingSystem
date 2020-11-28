import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkmode: false,
    activeRoom: {
      name: "",
    },

    mainManager: {
      shedule: [
        {
          idSchedule: 1, // idSchedule <- musi byc bo nie mam pod co for przypisac...
          roomName: "nazwaPomieszczenia", // nazwaPomieszczenia
          lightName: "nazwaSwiatla", // nazwa swiatla
          relay: 1, // numer przelacznika
          funcVal1: "wartoscFunkcji1", // nazwaFunkcji (ON, OFF, <, >)
          hour1: "godzinaFunkcji1", // godzina w ktorej ma sie zmienic
          arg1: "wartosc1", // wartosc jesli np > to nowa wartosc mocy etc.
          boomerangChange: false, // jak true to znaczy ze wywolanie jest cykliczne
          // jak false to masz to w dupie
          funcTo2: "wartoscFunkcji2", // nazwa funkcji (przeciwna do wartoscFunkcji w sumie)
          hour2: "godzinaFunkcji2", // godzina w ktorej ma wrocic do poprzedniego
          arg2: "wartosc2", // wartosc funkcji, np jesli > to dla arg2:70 to wartosc mocy
        },
        {
          idSchedule: 2, // idSchedule <- musi byc bo nie mam pod co for przypisac...
          roomName: "Bedroom", // nazwaPomieszczenia
          lightName: "nazwaSwiatla", // nazwa swiatla
          relay: 1, // numer przelacznika
          funcVal1: "wartoscFunkcji1", // nazwaFunkcji (ON, OFF, <, >)
          hour1: "godzinaFunkcji1", // godzina w ktorej ma sie zmienic
          arg1: "wartosc1", // wartosc jesli np > to nowa wartosc mocy etc.
          boomerangChange: false, // jak true to znaczy ze wywolanie jest cykliczne
          // jak false to masz to w dupie
          funcTo2: "wartoscFunkcji2", // nazwa funkcji (przeciwna do wartoscFunkcji w sumie)
          hour2: "godzinaFunkcji2", // godzina w ktorej ma wrocic do poprzedniego
          arg2: "wartosc2", // wartosc funkcji, np jesli > to dla arg2:70 to wartosc mocy
        },
        {
          idSchedule: 3, // idSchedule <- musi byc bo nie mam pod co for przypisac...
          roomName: "Bedroom", // nazwaPomieszczenia
          lightName: "nazwaSwiatla", // nazwa swiatla
          relay: 1, // numer przelacznika
          funcVal1: "wartoscFunkcji1", // nazwaFunkcji (ON, OFF, <, >)
          hour1: "godzinaFunkcji1", // godzina w ktorej ma sie zmienic
          arg1: "wartosc1", // wartosc jesli np > to nowa wartosc mocy etc.
          boomerangChange: false, // jak true to znaczy ze wywolanie jest cykliczne
          // jak false to masz to w dupie
          funcTo2: "wartoscFunkcji2", // nazwa funkcji (przeciwna do wartoscFunkcji w sumie)
          hour2: "godzinaFunkcji2", // godzina w ktorej ma wrocic do poprzedniego
          arg2: "wartosc2", // wartosc funkcji, np jesli > to dla arg2:70 to wartosc mocy
        },
      ],
      manager: [
        {
          name: "Bedroom",
          lightSources: [
            {
              name: "Test",
              relay: 1,
              begin: "00:00",
              end: "23:59",
              func: "off",
              funcArg: "",
            },
            {
              name: "Night Light",
              relay: 2,
              begin: "00:00",
              end: "23:59",
              func: "on",
              funcArg: "",
            },
            {
              name: "Night Light",
              relay: 3,
              begin: "00:00",
              end: "23:59",
              func: "off",
              funcArg: "",
            },
          ],
        },
        {
          name: "Kitchen",
          lightSources: [
            {
              name: "Night Light",
              relay: 1,
              begin: "00:00",
              end: "23:59",
              func: "on",
              funcArg: "",
            },
            {
              name: "Test",
              relay: 2,
              begin: "00:00",
              end: "23:59",
              func: "on",
              funcArg: "",
            },
            {
              name: "Night Light",
              relay: 3,
              begin: "00:00",
              end: "23:59",
              func: "on",
              funcArg: "",
            },
            {
              name: "Night Light",
              relay: 4,
              begin: "00:00",
              end: "23:59",
              func: "on",
              funcArg: "",
            },
            {
              name: "Night Light",
              relay: 5,
              begin: "00:00",
              end: "23:59",
              func: "on",
              funcArg: "",
            },
          ],
        },
        {
          name: "Bathroom",
          lightSources: [
            {
              name: "Night Light",
              relay: 1,
              begin: "12:00",
              end: "23:59",
              func: "off",
              funcArg: "",
            },
            {
              name: "Night Light",
              relay: 2,
              begin: "12:00",
              end: "23:59",
              func: "off",
              funcArg: "",
            },
            {
              name: "Night Light",
              relay: 3,
              begin: "12:00",
              end: "23:59",
              func: "off",
              funcArg: "",
            },
            {
              name: "Night Light",
              relay: 4,
              begin: "12:00",
              end: "23:59",
              func: "off",
              funcArg: "",
            },
            {
              name: "Night Light",
              relay: 5,
              begin: "12:00",
              end: "23:59",
              func: "off",
              funcArg: "",
            },
            {
              name: "Night Light",
              relay: 6,
              begin: "12:00",
              end: "23:59",
              func: "off",
              funcArg: "",
            },
            {
              name: "Night Light",
              relay: 7,
              begin: "12:00",
              end: "23:59",
              func: "off",
              funcArg: "",
            },
            {
              name: "Night Light",
              relay: 8,
              begin: "12:00",
              end: "23:59",
              func: "off",
              funcArg: "",
            },
            {
              name: "Test",
              relay: 9,
              begin: "12:00",
              end: "23:59",
              func: "off",
              funcArg: "",
            },
            {
              name: "Test",
              relay: 10,
              begin: "12:00",
              end: "23:59",
              func: "off",
              funcArg: "",
            },
            {
              name: "Test",
              relay: 11,
              begin: "12:00",
              end: "23:59",
              func: "off",
              funcArg: "",
            },
            {
              name: "Test",
              relay: 12,
              begin: "12:00",
              end: "23:59",
              func: "off",
              funcArg: "",
            },
            {
              name: "Test",
              relay: 13,
              begin: "12:00",
              end: "23:59",
              func: "off",
              funcArg: "",
            },
          ],
        },
      ],
    },

    newShedule: [], //nowa tablica harmonogramow dla wybranego pokoju
    newSheduleLenght: 0, // dlugosc tej tablicy
    lightSourceIndex: undefined, //index swiatla ktore wybralismy myszka
    active: false, //okresla czy jakies swiatlo zostalo wybrane czy nie
    choosenBlock: undefined, // przechowuje informacje o wybranym swietle
  },
  mutations: {
    setCurrentOptions(state, payload) {
      state.mainManager.manager.push(payload);
    },
    setRoomName(state, payload) {
      state.activeRoom.name = payload;
    },
    setNewShedule(state, payload) {
      var newShedule = [];
      state.mainManager.shedule.forEach(function(el) {
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
      state.mainManager.manager = payload;
    },
    setMainManager(state, payload) {
      state.mainManager = payload;
    },
    toggleDarkMode(state) {
      state.darkmode = !state.darkmode;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getCurrentOptions: (state) => state.mainManager.manager,
    getCurrentRoomName: (state) => state.activeRoom.name,
    getRoom: (state) => (name) =>
      state.mainManager.manager.find((el) => el.name === name),
    //getShedule: (state) => (roomName) => state.shedule.find((el) => el.roomName == roomName)
    getShedule: (state) => state.mainManager.shedule,
    getNewShedule: (state) => state.newShedule,
    getNewSheduleLenght: (state) => state.newSheduleLenght,
    getLightSourceIndex: (state) => state.lightSourceIndex,
    getActive: (state) => state.active,
    getChoosenBlock: (state) => state.choosenBlock,
    getJsonData: (state) => state.mainManager,
    getDarkMode: (state) => state.darkmode,
  },
});
