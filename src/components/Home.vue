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
<script src="https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js"></script>
<script>
export default {
	data: function() {
		return {
			departments: [],
		}
	},
	crated() {
		const apiUrl = "http://localhost:1337/departments/"
		axios.get(apiUrl)
		.then(response => {
			this.departments = response.data
			console.log(response.data);
		})
		.catch(function (error) {
			console.log(error);
		})
	}
}
</script>
<style lang="scss" scoped>
.department {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	&__link {
		display: block;
		width: 470px;
		text-align: center;
		&:nth-child(n+3) {
			margin-top: 20px;
		}
		a {
			padding: 12px;
			display: block;
			border: 2px solid #989898;
			border-radius: 8px;
			background-color: #fff;
			color: #464646;
			font-weight: bold;
			&:hover {
				border: 2px solid #012087;
				background-color: #012087;
				color: #fff;
			}
		}
	}
}
.v-application a {
	color: #333;
}
</style>