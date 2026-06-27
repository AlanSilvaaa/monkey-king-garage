import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'
import vuetify from '../plugins/vuetify'
import router from '../router'

class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.ResizeObserver = ResizeObserverStub as typeof ResizeObserver

describe('App', () => {
  it('mounts the landing page content', async () => {
    await router.push('/')
    await router.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [router, vuetify],
      },
    })

    expect(wrapper.text()).toContain('Monkey King Garage')
    expect(wrapper.text()).toContain('Servicios principales')
    expect(wrapper.text()).toContain('Escribir por WhatsApp')
  })
})
