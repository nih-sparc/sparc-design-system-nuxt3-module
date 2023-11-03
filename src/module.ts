import { defineNuxtModule, createResolver, addComponent, installModule } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'sparc-design-system',
    configKey: 'sparcDesignSystem'
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
  }
})
