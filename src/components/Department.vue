<template>
	<div class="contents department">
		<h2 class="contents__title">社員一覧</h2>
		<h3 class="department__name">部署名：{{this.department}}</h3>
		<ul class="card">
			<li v-for="member in members" :key="member.id" class="card__item">
				<router-link :to="`/member/${member.id}`">
					<div class="card__body">
						<span class="card__text">{{member.group}}</span>
						<span class="card__text">{{member.team}}</span>
						<span class="card__text">{{member.position}}</span>
						<span class="card__text card__text--name">{{member.staff_name}}</span>
					</div>
					<div class="card__thumbnail">
						<figure class="thumbnail">
							<img :src="`http://localhost:1337${member.photo[0].url}`" alt="">
						</figure>
						<span class="more-text">Read More</span>
					</div>
					<span v-if="member.status" class="card__status">休職中</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			department: "",
			members: [],
		}
	},
	created: function(){
		const apiUrl = "http://localhost:1337"
		return Promise.all([
			this.axios.get(apiUrl + "/departments/?department_id=" + this.$route.params.id),
			this.axios.get(apiUrl + "/members/?department_id=" + this.$route.params.id)
		])
		.then(([resDepartments, resMembers]) => {
			this.department = resDepartments.data[0].name
			this.members = resMembers.data
		})
		.catch(function (error) {
			console.log(error);
		})
	}
}
</script>
<style lang="scss" scoped>
.department__name {
	margin-top: 30px;
	display: block;
	font-weight: bold;
	font-size: 18px;
}
.card {
	padding: 25px 0 0 0;
	display: flex;
	flex-wrap: wrap;
	&__item {
		margin: 0 45px 45px 0;
		width: 200px;
		background-color: #fff;
		box-shadow: 0 0 8px rgba(0, 0, 0, .16);
		overflow: hidden;
		position: relative;
		&:nth-child(4n),
		&:last-child {
			margin: 0 0 45px 0;
		}
		a {
			color: #333;
			display: flex;
			flex-direction: column;
		}
	}
	&__body {
		padding: 10px 15px;
		order: 1;
	}
	&__text {
		display: block;
		color: #333;
		font-size: 14px;
		&--name {
			margin-top: 5px;
			font-weight: bold;
			font-size: 18px;
		}
	}
	&__thumbnail {
		position: relative;
		order: 0;
		border-bottom: 1px solid #eee;
		&:after {
			transition: 0.3s;
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			transform: translateY(-100%);
			display: block;
			width: 100%;
			height: 100%;
			background: #012087;
			opacity: 0.8;
			z-index: 2;
		}
	}
	.thumbnail {
		width: 100%;
	}
	.more-text {
		transition: 0.5s;
		transition: opacity 0.5s, transform 0.8s;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -80%);
		display: inline-block;
		padding: 6px 12px 8px;
		color: #fff;
		font-size: 14px;
		border: 1px solid #fff;
		opacity: 0;
		z-index: 3;
	}
	&__item:hover &__thumbnail:after {
		transform: translateY(0);
	}
	&__item:hover .more-text {
		transform: translate(-50%, -50%);
		opacity: 1;
	}
	&__status {
		padding: 4px 10px;
		display: inline-block;
		background: gray;
		color: #fff;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 1;
	}
}
</style>