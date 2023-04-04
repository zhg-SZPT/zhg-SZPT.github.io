<template>
	<div class="main">
		<div class="weight">
			<div class="title">
				<span>权重下载</span>
			</div>
			<div class="list">
				<div class="noData" v-if="weightData.length == 0">
					<span>暂无数据</span>
				</div>
				<div
					class="item"
					v-for="(item, index) in weightData"
					:key="item.resourcesId"
					@click="jump(item.resourcesLink)"
				>
					<span
						><span>{{ index + 1 }}. </span> {{ item.resourcesName }}
					</span>
				</div>
			</div>
			<div class="pagination">
				<el-pagination
					@current-change="weightCurrentChange"
					layout="prev, pager, next"
					:total="page.weightData.total"
					small
					:page-size="page.pageSize"
				>
				</el-pagination>
			</div>
		</div>
		<div class="data-set">
			<div class="title">
				<span>数据集下载</span>
			</div>
			<div class="list">
				<div class="noData" v-if="dataSetData.length == 0">
					<span>暂无数据</span>
				</div>
				<div
					class="item"
					v-for="(item, index) in dataSetData"
					:key="item.resourcesId"
					@click="jump(item.resourcesLink)"
				>
					<span
						><span>{{ index + 1 }}. </span> {{ item.resourcesName }}
					</span>
				</div>
			</div>
			<div class="pagination">
				<el-pagination
					@current-change="dataSetCurrentChange"
					layout="prev, pager, next"
					:total="page.dataSetData.total"
					small
					:page-size="page.pageSize"
				>
				</el-pagination>
			</div>
		</div>
		<div class="article">
			<div class="title">
				<span>优秀文章分享</span>
			</div>
			<div class="list">
				<div class="noData" v-if="articleData.length == 0">
					<span>暂无数据</span>
				</div>
				<div
					class="item"
					v-for="(item, index) in articleData"
					:key="item.resourcesId"
					@click="jump(item.resourcesLink)"
				>
					<span
						><span>{{ index + 1 }}. </span> {{ item.resourcesName }}
					</span>
				</div>
			</div>
			<div class="pagination">
				<el-pagination
					@current-change="acticleCurrentChange"
					layout="prev, pager, next"
					:total="page.articleData.total"
					small
					:page-size="page.pageSize"
				>
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
import {
	queryWeightsResources,
	queryDataSetResources,
	queryExcellentResources,
} from '../../api/homePage/resources'
export default {
	data() {
		return {
			weightData: [],
			dataSetData: [],
			articleData: [],
			page: {
				pageSize: 7,
				weightData: {
					total: 0,
					current: {
						current: 1,
					},
				},
				dataSetData: {
					total: 0,
					current: {
						current: 1,
					},
				},
				articleData: {
					total: 0,
					current: {
						current: 1,
					},
				},
			},
		}
	},
	methods: {
		getWeightList() {
			queryWeightsResources(this.page.weightData.current).then((res) => {
				this.weightData = res.data.list
				this.page.weightData.total = res.data.total
			})
		},
		getDataSetList() {
			queryDataSetResources(this.page.dataSetData.current).then((res) => {
				this.dataSetData = res.data.list
				this.page.dataSetData.total = res.data.total
			})
		},
		getarticleList() {
			queryExcellentResources(this.page.articleData.current).then((res) => {
				this.articleData = res.data.list
				this.page.articleData.total = res.data.total
			})
		},
		weightCurrentChange(val) {
			this.page.weightData.current.current = val
			this.getWeightList()
		},
		dataSetCurrentChange(val) {
			this.page.dataSetData.current.current = val
			this.getDataSetList()
		},
		acticleCurrentChange(val) {
			this.page.articleData.current.current = val
			this.getarticleList()
		},
		jump(url) {
			window.open('//' + url)
		},
	},
	mounted() {
		this.getWeightList()
		this.getDataSetList()
		this.getarticleList()
	},
}
</script>

<style lang="scss" scoped>
.main {
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
	.title {
		font-size: 20px;
		border-bottom: 1px solid #cecece;
		height: 35px;
	}
	.weight,
	.data-set,
	.article {
		width: 800px;
		height: 70%;
		.list {
			height: 22vh;
			.noData {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #a5a3b8;
			}
			.item {
				cursor: pointer;
				color: #101010;
				font-size: 14px;
				margin-top: 10px;
				&:hover {
					color: #2a408e;
				}
			}
		}
		.pagination {
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}
	.weight {
		margin-top: 20px;
	}
}
</style>
