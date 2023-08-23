import {mount} from '@vue/test-utils'
import _FooterCompoenent from '../components/FooterComponent.vue'

describe('Tests whether components are responsive', () => {

  test('test if they are being mounted', () => {
    expect(_FooterCompoenent).toBeTruthy()
    const wrapper = mount(_FooterCompoenent)
    expect(wrapper.findAll('.content')).toHaveLength(1)
  })

  test('Test if it\'s responsive', () => {
    window.innerWidth = 480 // mobile
    const wrapper = mount(_FooterCompoenent)
    expect(wrapper.findAll('div')).toHaveLength(0)
  })

  test('Test if it\'s responsive', () => {
    window.innerWidth = 481 // desktop
    const wrapper = mount(_FooterCompoenent)
    expect(wrapper.findAll('div')).toHaveLength(1)
  })
})