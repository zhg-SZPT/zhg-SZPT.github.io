<template>
	<div class="mian">
		<el-dialog
			title="收货地址"
			:visible.sync="dialogFormVisible"
			:modal-append-to-body="false"
		>
			<div class="from">
				<el-form :model="form">
					<el-form-item label="跳转地址" label-width="120px">
						<el-input v-model="form.targetUrl" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="图片地址" label-width="120px">
						<el-input v-model="form.chartUrl" autocomplete="off"></el-input>
						<el-upload
							:http-request="uploadImg"
							:show-file-list="false"
							action=""
						>
							<el-button size="small" type="text">上传图片</el-button>
						</el-upload>
					</el-form-item>
				</el-form>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="confirm">确 定</el-button>
			</div>
		</el-dialog>
		<div class="top">
			<el-card class="top_card">
				<el-button type="primary" @click="add">添加</el-button>
			</el-card>
		</div>
		<div class="table">
			<el-card>
				<el-table :data="tableData" style="width: 100%">
					<el-table-column type="index" width="50"> </el-table-column>
					<el-table-column prop="targetUrl" label="跳转链接"> </el-table-column>
					<el-table-column label="图片">
						<template slot-scope="scope">
							<el-popover placement="top-start" width="400" trigger="click">
								<el-image :src="scope.row.chartUrl"></el-image>
								<span slot="reference">{{ scope.row.chartUrl }}</span>
							</el-popover>
						</template>
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="120">
						<template slot-scope="scope">
							<el-button
								@click.native.prevent="update(scope.row)"
								type="text"
								size="small"
							>
								修改
							</el-button>
							<el-button
								@click.native.prevent="deleteRow(scope.row)"
								type="text"
								size="small"
							>
								移除
							</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-card>
		</div>
	</div>
</template>

<script>
import {
	addSwiper,
	delSwiper,
	updateSwiper,
	getSwiperList,
} from '../../../../api/admin/swiper'
import { imageUpload } from '../../../../api/admin/public'
export default {
	data() {
		return {
			tableData: [],
			dialogFormVisible: false,
			dialogType: '',
			form: {
				chartUrl: '',
				targetUrl: '',
			},
			dialogType: '',
		}
	},
	methods: {
		getList() {
			getSwiperList().then((res) => {
				this.tableData = res.data
			})
		},
		confirm() {
			if (this.dialogType == 'add') {
				addSwiper(this.form).then((res) => {
					this.$message.success(res.data)
					this.dialogFormVisible = false
					this.getList()
				})
			} else {
				updateSwiper(this.form).then((res) => {
					this.$message.success(res.data)
					this.dialogFormVisible = false
					this.getList()
				})
			}
		},
		add() {
			this.dialogType = 'add'
			this.form = {
				chartUrl: '',
				targetUrl: '',
			}
			this.dialogFormVisible = true
		},
		update(row) {
			this.dialogType = 'update'
			this.form = (({ chartId, chartUrl, targetUrl }) => ({
				chartId,
				chartUrl,
				targetUrl,
			}))(row)
			this.dialogFormVisible = true
		},
		uploadImg(param) {
			const formData = new FormData()
			formData.append('file', param.file)
			imageUpload(formData).then((res) => {
				this.$message.success('图片上传成功')
				this.form.chartUrl = 'http://' + res.data.fileUrl
			})
		},
		progressCallBcak(e) {
			console.log(e)
		},
		deleteRow(row) {
			delSwiper({
				chartId: row.chartId,
			}).then((res) => {
				this.$message.success(res.data)
				this.getList()
			})
		},
	},
	mounted() {
		this.getList()
	},
}
</script>

<style scoped>
.main {
	width: 100%;
	height: 100%;
}
.top_card {
	width: 100%;
	margin-bottom: 20px;
}
.from {
	width: 60%;
}
.from >>> .el-form-item__content {
	display: flex;
}
</style>
