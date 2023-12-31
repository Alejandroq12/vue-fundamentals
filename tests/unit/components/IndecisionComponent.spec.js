import { shallowMount } from '@vue/test-utils';
import IndecisionComponent from '../../../src/components/IndecisionComponent.vue';

describe('IndecisionComponent', () => {
  let wrapper;
  let clgSpy;

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          answer: 'yes',
          forced: false,
          image: 'https://yesno.wtf/assets/yes/2.gif',
        }),
    })
  );

  beforeEach(() => {
    wrapper = shallowMount(IndecisionComponent);

    clgSpy = jest.spyOn(console, 'log');

    jest.clearAllMocks();
  });
  test('Debe de hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Should not dispatch when typing on input console.log()', async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');
    const input = wrapper.find('input');
    await input.setValue('Hola mundo');

    expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getAnswerSpy).not.toHaveBeenCalled();
  });

  test('Question mark "?" must dispatch getAnswer', async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');
    const input = wrapper.find('input');
    await input.setValue('?');

    expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getAnswerSpy).toBeCalled();
  });

  test('getAnswer tests', async () => {
    await wrapper.vm.getAnswer();

    const img = wrapper.find('img');

    expect(img.exists()).toBeTruthy();
    expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif');
    expect(wrapper.vm.answer).toBe('Si');
  });

  test('getAnswer test - API failure', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('API is down!'));
    await wrapper.vm.getAnswer();
    const img = wrapper.find('img');
    expect(img.exists()).toBeFalsy();
    expect(wrapper.vm.answer).toBe('No se pudo cargar el API');
  });
});
