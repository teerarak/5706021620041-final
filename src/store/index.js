import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: []
  },
  getters: {
    todos: (state) => state.todos
  },
  actions: {
    addSubject ({commit}, text) {
      let todo = {
        id: Date.now(),
        text
      }
      commit('addTodo', todo)
    },
    removeSubject ({commit}, todo) {
      commit('removeTodo', todo)
    }
  },
  mutations: {
    addSubject (state, todo) {
      state.todos.push(todo)
    },
    removeSubject (state, todo) {
      let index = state.todos.findIndex(item => item.id === todo.id)
      state.todos.splice(index, 1)
    }
  }
})
