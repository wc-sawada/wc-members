<template>
	<div class="contents home">
		<h1 class="contents__title">部署一覧</h1>
		<ul class="department">
			<li v-for="department in departments" :key="department.id" class="department__link">
				<router-link :to="{name: 'department', params: {id: department.id}}" class="department__button">{{department.name}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			departments: [],
		}
	},
	created: function(){
		const apiUrl = "http://localhost:1337/departments/"
		this.axios.get(apiUrl)
		.then(response => {
			this.departments = response.data
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
	margin-top: 30px;
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