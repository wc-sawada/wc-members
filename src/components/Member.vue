<template>
	<div class="contents member">
		<h2 class="contents__title">社員詳細 {{ $route.params.id }} さん</h2>
		<div class="detail">
			<figure class="detail__image">
				<img src="../assets/images/member_no_image.jpg" alt="">
			</figure>
			<table class="detail__table"> 
				<tr>
					<th>部署名</th>
					<td>システムディビジョン</td>
				</tr>
				<tr>
					<th>グループ名</th>
					<td>UXデザイングループ</td>
				</tr>
				<tr>
					<th>チーム名</th>
					<td>フロントエンドチーム</td>
				</tr>
				<tr>
					<th>役職</th>
					<td>スタッフ</td>
				</tr>
				<tr>
					<th>氏名</th>
					<td>お名前 たろう</td>
				</tr>
				<tr>
					<th>ふりがな</th>
					<td>おなまえ たろう</td>
				</tr>
				<tr>
					<th>メールアドレス</th>
					<td>メールアドレス</td>
				</tr>
				<tr>
					<th>入社日</th>
					<td>2000年4月1日</td>
				</tr>
				<tr>
					<th>生年月日</th>
					<td>2000年4月1日</td>
				</tr>
				<tr>
					<th>ステータス</th>
					<td>在籍(または休職)</td>
				</tr>
				<tr>
					<th>人事部通信</th>
					<td><a target="_blank" href="http://keikan-tsushin/?vol=61">http://keikan-tsushin/?vol=61</a></td>
				</tr>
			</table>
		</div>
		<img src="" alt="">
	</div>
</template>
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