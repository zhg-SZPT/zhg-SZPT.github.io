<template>
	<div class="main">
		<div class="thesis">
			<div class="title">
				<span>论文</span>
			</div>
			<div class="list">
				<div class="noData" v-if="paperData.length == 0">
					<span>暂无数据</span>
				</div>
				<div class="year" v-for="i in paperData" :key="i.year">
					<div class="content">
						<span>{{ i.year }}</span>
					</div>
					<div class="item" v-for="k in i.data" :key="k.title">
						<span
							>{{ k.achievementName
							}}<el-link @click="jump(k.codeUrl)" :underline="false"
								>[code]</el-link
							>
							<el-link @click="jump(k.pdfUrl)" :underline="false"
								>[PDF]</el-link
							>
						</span>
					</div>
				</div>
			</div>
			<div class="pagination">
				<el-pagination
					layout="prev, pager, next"
					:total="paperTotal"
					:page-size="pageSize"
					:current-page.sync="paperPage.current"
					@current-change="this.getPaperList"
				>
				</el-pagination>
			</div>
		</div>
		<div class="patent">
			<div class="title">
				<span>专利</span>
			</div>
			<div class="list">
				<div class="noData" v-if="patentData.length == 0">
					<span>暂无数据</span>
				</div>
				<div class="year" v-for="i in patentData" :key="i.year">
					<div class="content">
						<span>{{ i.year }}</span>
					</div>
					<div class="item" v-for="k in i.data" :key="k.title">
						<span>{{ k.achievementName }}</span>
						<el-link @click="jump(k.codeUrl)" :underline="false"
							>[code]</el-link
						>
						<el-link @click="jump(k.pdfUrl)" :underline="false">[PDF]</el-link>
					</div>
				</div>
			</div>
			<div class="pagination">
				<el-pagination
					layout="prev, pager, next"
					:total="patentTotal"
					:page-size="pageSize"
					:current-page.sync="paperPage.current"
					@current-change="this.getPatentList"
				>
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
import {
	getPaperAchievement,
	getPatentAchievement,
} from '../../api/homePage/results'
export default {
	data() {
		return {
			paperData: [],
			patentData: [],
			paperPage: {
				current: 1,
			},
			patentPage: {
				current: 1,
			},
			paperTotal: 0,
			patentTotal: 0,
			pageSize: 10,
		}
	},
	methods: {
		getPaperList() {
			getPaperAchievement(this.paperPage).then((res) => {
				this.paperData = res.data.list
				this.paperTotal = res.data.total
			})
		},
		getPatentList() {
			getPatentAchievement(this.patentPage).then((res) => {
				this.patentData = res.data.list
				this.patentTotal = res.data.total
			})
		},
		jump(url) {
			window.open('//' + url)
		},
	},
	mounted() {
		this.getPaperList()
		this.getPatentList()
	},
}
</script>

<style lang="scss" scoped>
.main {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
	.title {
		font-size: 20px;
		border-bottom: 1px solid #cecece;
		height: 35px;
	}
	.thesis,
	.patent {
		width: 800px;
		// height: 400px;
		.list {
			height: 35vh;
			.noData {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #a5a3b8;
			}
			.year {
				margin-top: 10px;
				.content {
					color: #bababa;
					font-size: 14px;
				}
				.item {
					font-size: 13px;
					margin-top: 5px;
					.el-link {
						cursor: pointer;
					}
				}
			}
		}
		.pagination {
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}
	.thesis {
		margin-top: 20px;
	}
}
</style>
