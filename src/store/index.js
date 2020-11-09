import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeRoom: {
      name: "",
    },

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
  mutations: {
    setCurrentOptions(state, payload) {
      state.manager.push(payload);
    },
    setRoomName(state, payload) {
      state.activeRoom.name = payload;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getCurrentOptions: (state) => state.manager,
    getCurrentRoomName: (state) => state.activeRoom.name,
    getRoom: (state) => (name) => state.manager.find((el) => el.name === name),
  },
});
