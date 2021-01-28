import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


export const getters = {
    allTodos: jest.fn().mockReturnValue([{
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
    ])
};

export const mutations = {
    setTodos: jest.fn(),
    newTodo: jest.fn(),
    removeTodo: jest.fn()
};

export const actions = {
    fetchTodos: jest.fn(),
    addTodo: jest.fn(),
    deleteTodo: jest.fn(),
};

export const state = {
    todos: [{
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
    ]
};

export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {} }) {
    const mockGetters = Object.assign({}, getters, custom.getters);
    const mockMutations = Object.assign({}, mutations, custom.mutations);
    const mockActions = Object.assign({}, actions, custom.actions);
    const mockState = Object.assign({}, state, custom.state);
  
    return {
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState,
      store: new Vuex.Store({
        getters: mockGetters,
        mutations: mockMutations,
        actions: mockActions,
        state: mockState,
      }),
    };
  }
  
  export const store = __createMocks().store;