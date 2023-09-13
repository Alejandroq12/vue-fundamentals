import { shallowMount } from '@vue/test-utils'
import CounterComponent from '../../../src/components/CounterComponent.vue'

describe('Counter Component', () => {
    // test('debe de hacer match con el snapshot', () => {
    //     const wrapper = shallowMount(CounterComponent)
    //     expect(wrapper.html()).toMatchSnapshot()
    // })
    test('h2 debe de tener el valor por defecto.', () => {
        const wrapper = shallowMount(CounterComponent)
        const h2 = wrapper.find('h2')
        console.log(h2.text())
    })
})