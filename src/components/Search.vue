<template>
	<div class="contents search">
		<h2 class="contents__title">「{{$route.params.name}}」の検索結果</h2>
		<ul v-if="members" class="card">
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
		<p v-else>対象の社員は、いません。</p>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			members: null,
		}
	},
	created: function() {
		// TODO strapiには部分一致検索(like)ができなさそうなので、やり方工夫しないといけない…
		const apiUrl = "http://localhost:1337/members/"
		this.axios.get(apiUrl + "?staff_name=" + this.$route.params.name+ "?staff_name_furigana=" + this.$route.params.name)
		.then(response => {
			if (this.members.length !== 0) {
				this.members = response.data
			}
		})
		.catch(function (error) {
			console.log(error);
		})
	}
}
</script>
<style lang="scss" scoped>
.card {
	margin-top: 30px;
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