import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
import TodosComponent from '../src/components/Todos.vue';
import {
    __createMocks as createStoreMocks
} from '../src/store';


// Tell Jest to use the mock
// Implementation of the store

jest.mock('../src/store/index.js');

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Testing TODOS component', () => {
    let storeMocks;
    let wrapper;


    beforeEach(() => {

        storeMocks = createStoreMocks();
        wrapper = shallowMount(TodosComponent, {
            store: storeMocks.store,
            localVue,
        });
    });

    it("returns an error for a valid code", () => {
        expect(wrapper).toMatchSnapshot();
      });


    it('It should fetch todos.', () => {
        expect(storeMocks.actions.fetchTodos).toBeCalled();
    });

    it('It should remove todo when clicked.', () => {
        wrapper.find('.deleteBtn').trigger('click');

        expect(storeMocks.actions.deleteTodo).toBeCalled();
    });
});