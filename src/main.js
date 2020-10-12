import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import './assets/sass/destyle.scss';
import './assets/sass/default.scss';

Vue.config.productionTip = false

new Vue({
	vuetify,
	router,
	render: h => h(App)
}).$mount('#app')