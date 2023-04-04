<template>
	<div class="main">
		<el-dialog title="修改" :visible.sync="dialogFormVisible">
			<el-form ref="form" :model="form" label-width="90px">
				<el-form-item label="资源名称">
					<el-input v-model="form.resourcesName"></el-input>
				</el-form-item>
				<el-form-item label="跳转链接">
					<el-input v-model="form.resourcesLink">
						<template slot="prepend">Http://</template></el-input
					>
				</el-form-item>
				<el-form-item label="资源类型">
					<el-select v-model="form.resourcesType" placeholder="请选择">
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
			<el-table empty-text="暂无数据" :data="tableData">
				<el-table-column type="index" />
				<el-table-column
					label="资源名称"
					prop="resourcesName"
					width="300"
				></el-table-column>
				<el-table-column label="资源类型" width="100">
					<template slot-scope="scope">
						<el-tag type="success">{{ scope.row.resourcesType }}</el-tag>
					</template>
				</el-table-column>
				<el-table-column
					label="资源链接"
					prop="resourcesLink"
					width="600"
				></el-table-column>
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
				@size-change="this.getResourcesList"
				@current-change="this.getResourcesList"
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
	TYPE_WEIGHTS: '权重',
	TYPE_DATASET: '数据集',
	TYPE_EXCELLENT: '优秀文章',
}
import {
	queryResources,
	deleteResources,
	updateResources,
} from '../../../../api/admin/resources'
export default {
	data() {
		return {
			page: {
				size: 30,
				current: 1,
			},
			tableData: [],
			total: 0,
			form: {
				resourcesName: 'test',
				resourcesType: 'test',
				resourcesLink: 'https://test.test.com',
				resourcesId: '',
			},
			dialogFormVisible: false,
			options: [
				{
					value: 'TYPE_WEIGHTS',
					label: '权重',
				},
				{
					value: 'TYPE_DATASET',
					label: '数据集',
				},
				{
					value: 'TYPE_EXCELLENT',
					label: '优秀文章',
				},
			],
		}
	},
	methods: {
		edit(row) {
			this.form = (({
				resourcesName,
				resourcesType,
				resourcesLink,
				resourcesId,
			}) => ({
				resourcesName,
				resourcesType,
				resourcesLink,
				resourcesId,
			}))(row)
			this.dialogFormVisible = true
		},
		confirm() {
			updateResources(this.form).then((res) => {
				this.$message.success(res.data)
				this.dialogFormVisible = false
				this.getResourcesList()
			})
		},
		del(row) {
			deleteResources({ resourcesId: row.resourcesId }).then((res) => {
				this.$message.success(res.data)
				this.getResourcesList()
			})
		},
		getResourcesList() {
			queryResources(this.page).then((res) => {
				this.tableData = res.data.list
				this.total = res.data.total
			})
		},
	},
	mounted() {
		this.getResourcesList()
	},
	filters: {
		type_filter(typeContent) {
			return type[typeContent]
		},
	},
}
</script>

<style></style>
