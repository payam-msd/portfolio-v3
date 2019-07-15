import * as types from "./mutation-types.js";

const state = {
  sidebarOpen: false,
  aboutState: false,
  contentComponent: null,
};

// mutations
const mutations = {
  [types.TOGGLE_SIDEBAR](state) {
    state.sidebarOpen = !state.sidebarOpen;
  },
  [types.SET_SIDEBAR_COMPONENT](state, component) {
    state.contentComponent = component;
  },
  [types.ABOUT_STATE](state){
      state.aboutState = !state.aboutState;
  }
};

// actions
const actions = {
  toggleSidebar({ commit, state }, { component }) {
    commit(types.TOGGLE_SIDEBAR);
    commit(types.SET_SIDEBAR_COMPONENT, component);
  },
  toggle({ commit, state}) {
    commit(types.TOGGLE_SIDEBAR);
  },
  changeAbout({state}){
      commit(types.ABOUT_STATE);
  }
};


// getters
const getters = {
  sidebarOpen: state => state.sidebarOpen,
  contentComponent: state => state.contentComponent,
  aboutState : state => state.aboutState
};



export default {
  state,
  getters,
  actions,
  mutations
};
