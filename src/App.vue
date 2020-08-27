<template>
	<v-app>
	<header>
		へっだーちゃん
	</header>

	<v-content>
		<router-view></router-view>
	</v-content>

	<footer>
		ふったーちゃん
	</footer>
	</v-app>
</template>

<script>
export default {
	name: 'App',
	components: {
	},
	data: () => ({
		//
	}),
};
</script>