import { defineNuxtModule, createResolver, addComponent, installModule } from '@nuxt/kit'
import { join } from 'path'
import { client } from 'process'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'sparc-design-system-nuxt3-module',
    configKey: 'sparcDesignSystemNuxt3Module'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    installModule("@element-plus/nuxt", options, nuxt)

    addComponent({
      name: 'SparcLogo',
      filePath: resolver.resolve('../src/components/SparcLogo.vue'),
      global: true,
      mode: 'client'
    })
    addComponent({
      name: 'SparcTooltip',
      filePath: resolver.resolve('../src/components/SparcTooltip.vue'),
      global: true,
      mode: 'client'
    })
    addComponent({
      name: 'LargeModal',
      filePath: resolver.resolve('../src/components/LargeModal.vue'),
      global:true,
      mode:'client'
    })
    addComponent({
      name: 'SparcRadio',
      filePath: resolver.resolve('../src/components/SparcRadio.vue'),
      global:true,
      mode:'client'
    })
    addComponent({
      name:'SparcCheckbox',
      filePath: resolver.resolve('../src/components/SparcCheckbox.vue'),
      global:true,
      mode:'client'
    })
    nuxt.options.css.push(resolver.resolve('../src/assets/styles.scss'));
  }
})
