import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import './style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret,faBars,faPersonSnowboarding } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
library.add(faUserSecret,faTwitter,faGithub,faPersonSnowboarding)

createApp(App)
.use(router)
.use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
