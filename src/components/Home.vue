<template>
	<div class="contents home">
		<h1 class=""></h1>
		<ul class="department">
			<li class="department__link"><router-link to="department/1" class="department__button">経営企画ディビジョン</router-link></li>
			<li class="department__link"><router-link to="department/1" class="department__button">金融サービス準備室</router-link></li>
			<li class="department__link"><router-link to="department/1" class="department__button">インシュアランスディビジョン</router-link></li>
			<li class="department__link"><router-link to="department/1" class="department__button">リアルサービスディビジョン</router-link></li>
			<li class="department__link"><router-link to="department/1" class="department__button">CS</router-link></li>
			<li class="department__link"><router-link to="department/1" class="department__button">ライフソリューションディビジョン</router-link></li>
			<li class="department__link"><router-link to="department/1" class="department__button">ビジネスプランニングディビジョン</router-link></li>
			<li class="department__link"><router-link to="department/1" class="department__button">システムディビジョン</router-link></li>
			<li class="department__link"><router-link to="department/1" class="department__button">人事部</router-link></li>
		</ul>
	</div>
</template>
<style lang="scss">
	.department {
		margin: auto;
		width: 1000px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		&__link {
			display: block;
			width: 480px;
			text-align: center;

			&:nth-child(n+3) {
				margin-top: 20px;
			}

			a {
				padding: 12px;
				display: block;
				background-color: #e3e3e3;
				color: #333;
				font-weight: bold;
			}
		}
	}
</style>