import { shallowMount } from '@vue/test-utils';
import CounterComponent from '../../../src/components/CounterComponent.vue';

describe('Counter Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CounterComponent);

  })
  // test('debe de hacer match con el snapshot', () => {
  //     expect(wrapper.html()).toMatchSnapshot()
  // })
  test('h2 debe de tener el valor por defecto.', () => {
    expect(wrapper.find('h2').exists()).toBeTruthy();
    const h2Value = wrapper.find('h2').text();
    expect(h2Value).toBe('Counter');
  });

  test('Default value must be 100', async () => {
    const value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe('100');

    const [increaseBtn, decreaseBtn ] = wrapper.findAll('button');
    await increaseBtn.trigger('click');
  });

  test('It must be increase and decrease the value of the counter', async () => {
    const [increaseBtn, decreaseBtn] = wrapper.findAll('button');

    await increaseBtn.trigger('click');
    await increaseBtn.trigger('click');
    await increaseBtn.trigger('click');
    await decreaseBtn.trigger('click');
    await decreaseBtn.trigger('click');

    let value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe('101');
  });
});
