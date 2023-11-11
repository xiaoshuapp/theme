import { createApp } from 'vue'
import './src/style.css'
import App from './src/App.vue'

import * as Theme from './themes'

let manifest = []
for(let key in Theme) {
    manifest.push({
        name: key,
        cover: Theme[key].cover,
        description: Theme[key].description,
    })
}

console.log(manifest)

createApp(App).mount('#app')
