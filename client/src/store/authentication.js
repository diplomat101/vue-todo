import router from '../router';
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    registerEmail: 'hello',
    registerPassword: 'world',
    registerError: null,
    loginEmail: 'hello',
    loginPassword: 'world',
    loginError: null,
    token: null,
    currentProject: null,
  },
  actions: {
    logout({ commit }) {
      commit('setToken', null);
      commit('setCurrentProject', null);
      router.push('/login');
    },
    register({ commit, state }) {
      commit('setRegisterError', null);
      return HTTP().post('/auth/register', {
        email: state.registerEmail,
        password: state.registerPassword,
      })
        .then(({ data }) => {
          commit('setToken', data.token);
          router.push('/');
        })
        .catch((error) => {
          if (error.response.status === 500) {
            commit('setRegisterError', 'User with this email is already exists');
            console.log('User with this email is already exists');
          }
        });
    },
    login({ commit, state }) {
      commit('setLoginError', null);
      return HTTP().post('/auth/login', {
        email: state.loginEmail,
        password: state.loginPassword,
      })
        .then(({ data }) => {
          commit('setToken', data.token);
          router.push('/');
        })
        .catch((error) => {
          if (error.response.status === 500) {
            commit('setLoginError', 'An error has occured trying to login');
          }
        });
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setRegisterError(state, error) {
      state.registerError = error;
    },
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    },
    setLoginError(state, error) {
      state.loginError = error;
    },
    setLoginEmail(state, email) {
      state.loginEmail = email;
    },
    setLoginPassword(state, password) {
      state.loginPassword = password;
    },
    setCurrentProject(state, project) {
      state.currentProject = project;
    },
  },
};
