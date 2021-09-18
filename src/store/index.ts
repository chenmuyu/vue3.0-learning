import { createStore } from "vuex";
export default createStore({
  state: {
    count: 0,
    user: {
      name: "123",
      isLogin:false
    },
  },
  mutations: {
    add(state) {
      state.count++;
    },
    login(state) {
      state.user = { ...state.user, isLogin: true, name: "viking" };
    },
  },
  actions: {},
  modules: {},
});
