<template>
	<v-app>
	<header>
		<div class="header">
			<div class="header__left">
				<router-link to="/">
					<img class="header__logo" src="./assets/images/logo.png" alt="">
					<h1 class="header__title">Webcrew 社員名簿</h1>
				</router-link>
			</div>
			<div class="header__right">
				<button class="button--search" type="button">社員を検索する</button>
			</div>
		</div>
	</header>

	<v-content>
		<router-view></router-view>
	</v-content>

	<footer class="footer">
		<small class="footer__text">footer nani kakebaiinoka wakaranai</small>
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