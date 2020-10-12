import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Member from './views/Member.vue';
import Department from './views/Department.vue';

Vue.use(Router);

export default new Router({
	routes: [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/department/:id',
		name: 'department',
		component: Department,
	},
	{
		path: '/member/:id',
		name: 'member',
		component: Member,
	},
	]
});