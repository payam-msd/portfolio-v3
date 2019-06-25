import * as types from "./mutation-types.js";

const state = {
  sidebarOpen: false,
  sidebarComponent: null,
};

// mutations
const mutations = {
  [types.TOGGLE_SIDEBAR](state) {
    state.sidebarOpen = !state.sidebarOpen;
  },
  [types.SET_SIDEBAR_COMPONENT](state, component) {
    state.sidebarComponent = component;
  }
};

// actions
const actions = {
  toggleSidebar({ commit, state }, { component }) {
    commit(types.TOGGLE_SIDEBAR);
    commit(types.SET_SIDEBAR_COMPONENT, component);
  },
  toggle({ commit, state }) {
    commit(types.TOGGLE_SIDEBAR);
  }
};


// getters
const getters = {
  sidebarOpen: state => state.sidebarOpen,
  sidebarComponent: state => state.sidebarComponent
};



export default {
  state,
  getters,
  actions,
  mutations
};
