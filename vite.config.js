import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [vue()],
	build: {
		lib: {
			entry: './themes/index.js',
			name: 'Theme',
			fileName: 'theme',
		},
	},
})
