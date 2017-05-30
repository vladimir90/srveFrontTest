import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//importing from modules
import usersData from './modules/users';


//importing for global state
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

export const store = new Vuex.Store({

  state:{
    jsonData:{},
  },

  getters,
  mutations,
  actions,
  modules:{
    usersData
  }

});


