import { createStore } from 'vuex'

export default createStore({
  state: {
    student_id: 's34',
    password: '12'
  },
  getters: {
    student_id:state=>state.student_id,
  },
  mutations: {
    set_student_id(state, student_id){
      state.student_id = student_id
    },
    set_password(state, password){
      state.password = password
    }
  },
  actions: {
  },
  modules: {
  }
})
