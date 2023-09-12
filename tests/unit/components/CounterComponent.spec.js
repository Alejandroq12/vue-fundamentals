import { shallowMount, mount } from '@vue/test-utils'
import CounterComponent from '../../../src/components/CounterComponent.vue'

describe('Counter Component', () => {
    test('debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount(CounterComponent)
        expect().toMatchSnapshot()
    })
})