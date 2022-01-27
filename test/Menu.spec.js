import { mount } from '@vue/test-utils'
import MenuComponent from '@/components/menu.vue'

describe('Menu', () => {
    test('Check Menu exist', () => {
        const wrapper = mount(MenuComponent)
        expect(wrapper.vm).toBeTruthy()
        const recent = wrapper.find('.__recent')
        const all = recent.findAll('.__group')
        expect(all.exists()).toBeTruthy
    });
});
