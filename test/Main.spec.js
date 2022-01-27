import { mount } from '@vue/test-utils'
import Board from '@/components/main-component.vue'

describe('Main Board', () => {
    test('Top nav is rendered correctly and contains the input field', () => {
        const wrapper = mount(Board)
        expect(wrapper.vm).toBeTruthy()
        const input = wrapper.find('input[type=text]')
        expect(input.exists()).toBe(true)
    })
})