<template>
	<v-app>
	<header>
		<div class="header">
			<div class="header__left">
				<router-link to="/">
					<img class="header__logo" src="./assets/images/logo.png" alt="Webcrew">
					<h1 class="header__title">社員名簿</h1>
				</router-link>
			</div>
			<div class="header__right">
				<button @click="clickModalOpen()" class="button--search" type="button">社員を検索する</button>
			</div>
		</div>
	</header>
	<transition class="fade">
		<div v-if="modalFlg" class="searchModal">
			<div class="searchModal__contents">
				<span @click="clickModalClose()" class="searchModal__close"><img src="./assets/images/close.png" alt="close"></span>
				<p class="searchModal__text">探したい社員の名前を「漢字」または「ひらがな」で入力してください。</p>
				<input v-model="inputText" class="searchModal__input" type="text">
				<button @click="clickModalSearch()" class="button--search" type="button">検索する</button>
			</div>
		</div>
	</transition>
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
		modalFlg: false,
		inputText: ""
	}),
	methods: {
		clickModalOpen() {
			this.modalFlg = true
		},
		clickModalClose() {
			this.modalFlg = false
			this.$router.push
		},
		clickModalSearch() {
			this.inputText
			// json syutoku
			this.$router.push('/member/1', () => {})
		}
	},
};
</script>
<style lang="scss">
.searchModal {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #00000087;
	z-index: 3;
	display: flex;
	justify-content: center;
	align-items: center;
	&__contents {
		width: 640px;
		padding: 80px 20px 60px;
		background-color: #fff;
		position: relative;
	}
	&__close {
		position: absolute;
		top: 18px;
		right: 12px;
		cursor: pointer;
		&:hover {
			opacity: .8;
		}
	}
	&__text {
		text-align: center;
	}
	&__input {
		width: 320px;
		padding: 4px .5em;
		margin: auto;
		display: block;
		border: 1px solid #ddccdd;
	}
	.button--search {
		width: 200px;
		display: block;
		padding: 16px .5em;
		margin: 20px auto 0;
		text-align: center;
	}
}
.v-application p {
	margin-bottom: 30px;
}
</style>
