import { shallowMount } from '@vue/test-utils';
import CounterComponent from '../../../src/components/CounterComponent.vue';

describe('Counter Component', () => {
  // test('debe de hacer match con el snapshot', () => {
  //     const wrapper = shallowMount(CounterComponent)
  //     expect(wrapper.html()).toMatchSnapshot()
  // })
  test('h2 debe de tener el valor por defecto.', () => {
    const wrapper = shallowMount(CounterComponent);
    expect(wrapper.find('h2').exists()).toBeTruthy();
    const h2Value = wrapper.find('h2').text();
    expect(h2Value).toBe('Counter');
  });

  test('Default value must be 100', () => {
    const wrapper = shallowMount(CounterComponent);
    const value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe('100');
  });

  test('It must be increased and decrease the value of the counter', async () => {
    const wrapper = shallowMount( CounterComponent );
    const increaseBtn = wrapper.find('button');
    await increaseBtn.trigger('click');
    let value = wrapper.find('[data-testid="counter"]').text()
    expect( value ).toBe('101');

    const decreaseBtn = wrapper.findAll('button')[1];
    await decreaseBtn.trigger('click');
    await decreaseBtn.trigger('click');
    value = wrapper.find('[data-testid="counter"]').text()
    expect( value ).toBe('99');
  })
});
