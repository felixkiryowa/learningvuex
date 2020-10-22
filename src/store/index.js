import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';


//Load Vuesx
Vue.use(Vuex);


//Create a store
export default new Vuex.Store({
    modules:{
        todos
    }
})