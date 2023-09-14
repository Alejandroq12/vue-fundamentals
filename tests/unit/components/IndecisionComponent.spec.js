import { shallowMount } from '@vue/test-utils';
import IndecisionComponent from '../../../src/components/IndecisionComponent.vue';

describe('IndecisionComponent', () => {
  let wrapper;
  let clgSpy;

  beforeEach(() => {
    wrapper = shallowMount(IndecisionComponent);

    clgSpy = jest.spyOn(console, 'log');
  });
  test('Debe de hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Should not dispatch when typing on input console.log()', async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
    const input = wrapper.find('input');
    await input.setValue('Hola mundo');

    expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getAnswerSpy).not.toHaveBeenCalled();

  });

  test('Question mark "?" must dispatch fecth', () => {

  })

  test('getAnswer tests', () => {

  })

  test('getAnswer test - API failure', () => {

  })
});
