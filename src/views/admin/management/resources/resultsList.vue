<template>
	<div class="main">
		<el-dialog title="修改" :visible.sync="dialogFormVisible">
			<el-form ref="form" :model="form" label-width="90px">
				<el-form-item label="资源名称">
					<el-input v-model="form.achievementName"></el-input>
				</el-form-item>
				<el-form-item label="CODE链接">
					<el-input v-model="form.codeUrl"
						><template slot="prepend">Http://</template></el-input
					>
				</el-form-item>
				<el-form-item label="PDF链接">
					<el-input v-model="form.pdfUrl"
						><template slot="prepend">Http://</template></el-input
					>
				</el-form-item>
				<el-form-item label="发表年份">
					<el-date-picker
						v-model="form.publicYear"
						type="year"
						placeholder="选择年"
						value-format="yyyy"
					>
					</el-date-picker>
				</el-form-item>
				<el-form-item label="资源类型">
					<el-select v-model="form.achievementType" placeholder="请选择">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						>
						</el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="confirm">确 定</el-button>
			</div>
		</el-dialog>
		<el-card>
			<el-table empty-text="暂无数据" :data="tableData" border>
				<el-table-column type="index" />
				<el-table-column
					label="成果名称"
					prop="achievementName"
					width="250"
				></el-table-column>
				<el-table-column label="成果类型" width="100">
					<template slot-scope="scope">
						<el-tag type="success">{{ scope.row.achievementType }}</el-tag>
					</template>
				</el-table-column>
				<el-table-column label="发表年份" prop="publicYear"></el-table-column>
				<el-table-column label="资源链接" width="600">
					<template slot-scope="scope">
						<div class="column-item">
							<span
								><span style="font-weight: 600">CODE:</span
								>{{ scope.row.codeUrl }}</span
							>
						</div>
						<div class="column-item">
							<span
								><span style="font-weight: 600">PDF:</span
								>{{ scope.row.pdfUrl }}</span
							>
						</div>
					</template>
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="edit(scope.row)"
							>编辑</el-button
						>
						<el-button type="text" size="small" @click="del(scope.row)"
							>删除</el-button
						>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination
				@size-change="this.getAchievementsList"
				@current-change="this.getAchievementsList"
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
const type = {
	TYPE_PATENT: '专利',
	TYPE_PAPER: '论文',
}
import {
	queryAchievements,
	delAchievement,
	updateAchievements,
} from '../../../../api/admin/results'
export default {
	data() {
		return {
			tableData: [],
			total: 0,
			page: {
				size: 30,
				current: 1,
			},
			form: {
				achievementId: '',
				achievementName: '',
				achievementType: '',
				codeUrl: '',
				pdfUrl: '',
			},
			dialogFormVisible: false,
			options: [
				{
					value: '论文',
					label: '论文',
				},
				{
					value: '专利',
					label: '专利',
				},
			],
		}
	},
	methods: {
		edit(row) {
			console.log(row)
			this.form = (({
				achievementId,
				achievementName,
				achievementType,
				codeUrl,
				pdfUrl,
				publicYear,
			}) => ({
				achievementId,
				achievementName,
				achievementType,
				codeUrl,
				pdfUrl,
				publicYear,
			}))(row)
			this.form.publicYear = this.form.publicYear + ''
			this.dialogFormVisible = true
		},
		del(row) {
			delAchievement({ achievementId: row.achievementId }).then((res) => {
				this.$message.success(res.data)
				this.dialogFormVisible = false
				this.getAchievementsList()
			})
		},
		confirm() {
			updateAchievements(this.form).then((res) => {
				this.$message.success(res.data)
				this.dialogFormVisible = false
				this.getAchievementsList()
			})
		},
		getAchievementsList() {
			queryAchievements(this.page).then((res) => {
				this.tableData = res.data.list
				this.total = res.data.total
			})
		},
	},
	mounted() {
		this.getAchievementsList()
	},
	filters: {
		type_filter(typeContent) {
			return type[typeContent]
		},
	},
}
</script>

<style lang="scss" scoped>
.main {
	.column-item {
		border-bottom: 1px solid #ebeef5;
	}
	.column-item:last-child {
		border: none;
	}
}
</style>
