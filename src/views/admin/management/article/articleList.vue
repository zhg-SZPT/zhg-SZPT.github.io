<template>
	<div class="main">
		<el-card>
			<el-table empty-text="暂无数据" :data="tableData">
				<el-table-column type="index" />
				<el-table-column label="文章名" prop="title"></el-table-column>
				<el-table-column label="最后修改日期" sortable>
					<template slot-scope="scope">
						{{ scope.row.updateTime | getDate }}
					</template>
				</el-table-column>
				<el-table-column label="状态" sortable>
					<template slot-scope="scope">
						<el-tag :type="scope.row.state == '已发布' ? 'success' : 'info'">{{
							scope.row.state == '已发布' ? '已发布' : '未发布'
						}}</el-tag>
					</template>
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="edit(scope.row)"
							>编辑</el-button
						>
						<el-button
							type="text"
							size="small"
							@click="disPublish(scope.row)"
							v-if="scope.row.state == '已发布'"
							>取消发布</el-button
						>
						<el-button type="text" size="small" @click="del(scope.row)"
							>删除</el-button
						>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page.sync="page.current"
				:page-sizes="[30, 50, 100, 500]"
				:page-size.sync="page.size"
				layout="total, sizes, prev, pager, next, jumper"
				:total="total"
			>
			</el-pagination>
		</el-card>
	</div>
</template>

<script>
import {
	queryArticleList,
	deleteArticle,
	unPublish,
} from '../../../../api/admin/article'
import { formatDate } from '../../../../utils/utils'
export default {
	data() {
		return {
			tableData: [],
			page: {
				current: '1',
				size: '30',
			},
			total: 0,
		}
	},
	methods: {
		edit(row) {
			this.$router.push({
				path: '/admin/articleEdit',
				query: { id: row.articleId },
			})
		},
		getArticleList() {
			queryArticleList(this.page).then((res) => {
				this.tableData = res.data.list
				this.total = res.data.total
			})
		},
		del(row) {
			deleteArticle({ articleId: row.articleId }).then((res) => {
				this.$message.success(res.data)
				this.getArticleList()
			})
		},
		disPublish(row) {
			unPublish({ articleId: row.articleId, title: row.title }).then((res) => {
				this.$message.success(res.data)
				this.getArticleList()
			})
		},
	},
	mounted() {
		this.getArticleList()
	},
	filters: {
		getDate(date) {
			return formatDate(date)
		},
	},
}
</script>

<style></style>
