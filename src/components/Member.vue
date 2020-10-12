<template>
	<div class="contents member">
		<h2 class="contents__title">社員詳細 {{ $route.params.id }}</h2>
		<div class="detail">
			<figure class="detail__image">
				<img src="../assets/images/member_no_image.jpg" alt="">
			</figure>
			<table>
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
					<td>http://keikan-tsushin/?vol=61</td>
				</tr>
			</table>
		</div>
		<img src="" alt="">
	</div>
</template>
<style lang="scss">
.detail {
	display: flex;

	&__image {
		img {
			display: inline-block;
			border: 1px solid #e3e3e3;
		}
	}
}

table {
	width: 640px;
}
table th {
	padding: 8px;
	border: 1px solid #000;
	font-weight: bold;
	text-align: center;
	background-color: #eee;
}
table td {
	padding: 8px;
	border: 1px solid #000;
}
</style>

