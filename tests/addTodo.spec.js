import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
import AddTodo from '../src/components/AddTodo.vue';
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
        wrapper = shallowMount(AddTodo, {
            store: storeMocks.store,
            localVue,
        });
    });

    it("returns an error for a valid code", () => {
        expect(wrapper).toMatchSnapshot();
      });


    it("sets the value", () => {
        const input = wrapper.find('#title')

        input.setValue('Post One')

        expect(input.element.value).toBe('Post One')
    });

    it('It should add  to do when clicked.', () => {
        wrapper.find('#submitBtn').trigger('submit');

        expect(storeMocks.actions.addTodo).toHaveBeenCalled();
    });

});