import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import { createApp } from 'vue'
import App from './App.vue'
import "primevue/resources/themes/lara-light-indigo/theme.css"
import "primevue/resources/primevue.min.css"
import 'primeicons/primeicons.css'



import PrimeVue from 'primevue/config';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import BadgeDirective from 'primevue/badgedirective';
import InputSwitch from 'primevue/inputswitch';
import SpeedDial from 'primevue/speeddial';
import Toast from 'primevue/toast';
import { Octokit } from '@octokit/rest'



const app=createApp(App)
app.use(PrimeVue)
app.component('Avatar', Avatar);
app.component('AvatarGroup', AvatarGroup)
app.component('Badge', Badge)
app.directive('badge', BadgeDirective)
app.component('InputSwitch', InputSwitch)
app.component('SpeedDial', SpeedDial)
app.component('Toast', Toast)
app.component("Octokit", Octokit)
app.mount('#app')