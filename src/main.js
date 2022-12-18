import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faUserSecret, faAngleDown, faMagnifyingGlass, faDeleteLeft)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
