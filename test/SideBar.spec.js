import { mount } from '@vue/test-utils'
import SideNav from '@/components/side-nav.vue'


describe('SideNav', () => {
  test('side bar Exists', () => {
    const wrapper = mount(SideNav)
    expect(wrapper.vm).toBeTruthy()
    const h2 = wrapper.find('h2')
    expect(h2.exists()).toBe(true)
    expect(h2.text()).toBe('BoardJect')
    // expect(wrapper.find('h2')).toBe(true)
  })

  test('That accordion opens', async () => {
    const wrapper = mount(SideNav)
    const accordion = wrapper.find('.accordion-header')
    await accordion.trigger('click')
    const listItems = wrapper.find('#collapseOne ul')
    const list = listItems.findAll('li')
    expect(list.length).toBe(4)
  })
})
