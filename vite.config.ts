import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import mkcert from 'vite-plugin-mkcert'
import { searchForWorkspaceRoot } from 'vite'

export default defineConfig({
  plugins: [mkcert(), sveltekit()],
  server: {
    proxy: {},
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd()), "/static/textures"]
    }
  },
  ssr: {
    noExternal: ['three']
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
})
