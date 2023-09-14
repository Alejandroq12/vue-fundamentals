import { shallowMount } from '@vue/test-utils';
import IndecisionComponent from '../../../src/components/IndecisionComponent.vue';

describe('IndecisionComponent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(IndecisionComponent);
  });
  test('Debe de hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Should not dispactch when typing on input console.log()', () => {

  });

  test('Question mark "?" must dispatch fecth', () => {

  })

  test('getAsnwer tests', () => {

  })

  test('getAnswer test - API failure', () => {

  })
});
