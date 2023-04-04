<template>
	<div class="main">
		<div class="swiper">
			<div class="swiper-box">
				<el-carousel :interval="5000" height="380px" trigger="click">
					<el-carousel-item v-for="item in swiperList" :key="item.chart_id">
						<el-image :src="item.chart_url"></el-image>
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<div class="list">
			<div
				class="item"
				v-for="i in articleList"
				:key="i.articleId"
				@click="articleDetail(i.articleId)"
			>
				<div class="title">
					<span>{{ i.title }}</span>
				</div>
				<div class="content">
					<span>{{ i.content }}</span>
				</div>
				<div class="date">
					<div class="icon">
						<i class="el-icon-date"></i>
					</div>
					<div class="text">
						<span>{{ i.updateTime | getDate }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getCharts } from '../../api/homePage/swiper'
import { getAllArticles } from '../../api/homePage/article'
import { formatDate } from '../../utils/utils'
export default {
	data() {
		return {
			articleList: [],
			swiperList: [],
		}
	},
	mounted() {
		this.getAllArticlesList()
		this.getSwiper()
	},
	methods: {
		articleDetail(id) {
			this.$router.push({ path: '/articleDetail/' + id })
		},
		getAllArticlesList() {
			getAllArticles().then((res) => {
				this.articleList = res.data
			})
		},
		getSwiper() {
			getCharts().then((res) => {
				this.swiperList = res.data
			})
		},
	},
	filters: {
		getDate(date) {
			return formatDate(date)
		},
	},
}
</script>

<style lang="scss" scoped>
.main {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: auto;
	.swiper {
		width: 700px;
		height: 400px;
		margin-top: 21px;
		border-bottom: 1px solid #cecece;
		display: flex;
		justify-content: center;
		.swiper-box {
			width: 700px;
			height: 380px;
			.el-image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.list {
		margin-top: 22px;
		width: 700px;
		min-height: 600px;
		.item {
			cursor: pointer;
			margin-bottom: 17px;
			border-bottom: 2px solid;
			border-image: linear-gradient(
					100deg,
					#ffffff 0%,
					#cecece 50%,
					#ffffff 100%
				)
				2 2 2 2;
			width: 100%;
			height: 140px;
			&:hover .title {
				color: #2a408e;
			}
			.title {
				font-size: 20px;
				color: #6c6c6c;
			}
			.content {
				margin-top: 18px;
				color: #9d9d9d;
				overflow: hidden;
				text-overflow: ellipsis;
				height: 55px;
				// white-space: nowrap;
			}
			.date {
				margin-top: 17px;
				display: flex;
				color: #9d9d9d;
				.text {
					margin-left: 10px;
				}
			}
		}
	}
}
</style>
