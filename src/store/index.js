import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        robot : {
            id: 0,
            name: '',
            state: -1
        }
    },
    getters:
        {},
    mutations: {
        changeState(state, arg){
            state.robot.state = arg
        },
        setRobot(state, arg) {
            state.robot = arg
        }
    },
    actions: {}
})