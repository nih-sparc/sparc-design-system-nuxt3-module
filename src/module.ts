import { defineNuxtModule, createResolver, addComponent, installModule } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'sparc-design-system-nuxt3-module',
    configKey: 'sparcDesignSystemNuxt3Module'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    await installModule("@element-plus/nuxt")

    addComponent({
      name: 'SparcLogo',
      filePath: resolver.resolve('./components/SparcLogo.vue'),
      global: true,
      mode: 'client'
    })
    addComponent({
      name: 'SparcTooltip',
      filePath: resolver.resolve('./components/SparcTooltip.vue'),
      global: true,
      mode: 'client'
    })

    nuxt.options.css.push(resolver.resolve('assets/styles.scss'));
  }
})
