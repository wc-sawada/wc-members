<template>
	<div class="contents member">
		<div class="inner" v-for="detail in details" :key="detail.id">
			<h2  class="contents__title">社員詳細「{{detail.staff_name}}」さん</h2>
			<div class="detail">
				<figure class="detail__image">
					<img :src="`http://localhost:1337${detail.photo[0].url}`" alt="">
				</figure>
				<table class="detail__table">
					<tr>
						<th>部署名</th>
						<td>{{department}}</td>
					</tr>
					<tr>
						<th>グループ名</th>
						<td>{{detail.group}}</td>
					</tr>
					<tr>
						<th>チーム名</th>
						<td>{{detail.team}}</td>
					</tr>
					<tr>
						<th>役職</th>
						<td>{{detail.position}}</td>
					</tr>
					<tr>
						<th>氏名</th>
						<td>{{detail.staff_name}}</td>
					</tr>
					<tr>
						<th>ふりがな</th>
						<td>{{detail.staff_name_furigana}}</td>
					</tr>
					<tr>
						<th>メールアドレス</th>
						<td>{{detail.email}}</td>
					</tr>
					<tr>
						<th>入社日</th>
						<td>{{detail.join_date}}</td>
					</tr>
					<tr>
						<th>生年月日</th>
						<td>{{detail.birthday}}</td>
					</tr>
					<tr>
						<th>ステータス</th>
						<td>{{detail.leave_flg ? "在籍中" : "休職中"}}</td>
					</tr>
					<tr>
						<th>人事部通信</th>
						<td><a target="_blank" :href="`http://keikan-tsushin/?vol=${detail.url}`">{{detail.url}}</a></td>
<!-- 
<td><a target="_blank" href="http://keikan-tsushin/?vol=61">http://keikan-tsushin/?vol=61</a></td>
-->
					</tr>
				</table>
			</div>
			<img src="" alt="">
		</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			department: "",
			details: [],
		}
	},
	methods: {
		getMembersData: function(){
			return new Promise((resolve) => {
				this.axios.get("http://localhost:1337/members/?id=" + this.$route.params.id)
				.then(response => {
					this.details = response.data
					resolve()
				})
			})
		},
		getDepartmentName: function(){
			return new Promise((resolve) => {
				this.axios.get("http://localhost:1337/departments/?department_id=" + this.details[0].department_id)
				.then(response => {
					this.department = response.data[0].name
					resolve()
				})
			})
		},
	},
	mounted: function(){
		this.getMembersData()
		.then(() => {
			this.getDepartmentName()
		})
	}
}
</script>
<style lang="scss" scoped>
.detail {
	margin-top: 30px;
	display: flex;
	justify-content: space-around;
	&__image {
		img {
			display: inline-block;
			border: 1px solid #e3e3e3;
		}
	}
	&__table {
		width: 680px;
		th {
			padding: 12px;
			border: 1px solid #dcdcdc;
			font-weight: bold;
			text-align: center;
			background-color: #828282;
			color: #fff;
		}
		td {
			padding: 12px 1em;
			border: 1px solid #dcdcdc;
			border-left: none;
			background-color: #fff;
		}
	}
}
</style>