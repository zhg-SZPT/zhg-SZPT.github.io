<template>
	<div class="main">
		<el-card>
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="资源名称" prop="resourcesName">
					<el-input v-model="form.resourcesName"></el-input>
				</el-form-item>
				<el-form-item label="跳转链接" prop="resourcesLink">
					<el-input v-model="form.resourcesLink">
						<template slot="prepend">Http://</template></el-input
					>
				</el-form-item>
				<el-form-item label="资源类型" prop="resourcesType">
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
				<el-form-item>
					<el-button type="primary" @click="onSubmit">立即创建</el-button>
					<el-button @click="resetForm">重置</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script>
import { addResources } from '../../../../api/admin/resources'
export default {
	data() {
		return {
			form: {
				resourcesId: '',
				resourcesName: '',
				resourcesLink: '',
				resourcesType: '',
			},
			options: [
				{
					value: '权重',
					label: '权重',
				},
				{
					value: '数据集',
					label: '数据集',
				},
				{
					value: '优秀文章',
					label: '优秀文章',
				},
			],
		}
	},
	methods: {
		onSubmit() {
			addResources(this.form).then((res) => {
				this.$message.success(res.data)
				this.$router.replace({ path: '/admin/resourcesList' })
			})
		},
		resetForm() {
			console.log(this.$refs.form)
			this.$refs.form.resetFields(this.form)
		},
	},
}
</script>

<style lang="scss" scoped>
.main {
	.el-card {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		.el-form {
			width: 500px;
		}
	}
}
</style>
