import { shallowMount } from '@vue/test-utils'
import CounterComponent from '../../../src/components/CounterComponent.vue'

describe('Counter Component', () => {
    // test('debe de hacer match con el snapshot', () => {
    //     const wrapper = shallowMount(CounterComponent)
    //     expect(wrapper.html()).toMatchSnapshot()
    // })
    test('h2 debe de tener el valor por defecto.', () => {
        const wrapper = shallowMount(CounterComponent)
        expect( wrapper.find('h2').exists() ).toBetruthy()
        const h2Value = wrapper.find('h2').text()
        expect( h2Value ).toBe('Counter')
    })
})