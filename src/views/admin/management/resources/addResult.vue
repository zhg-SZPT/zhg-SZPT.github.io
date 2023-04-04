<template>
	<div class="main">
		<el-card>
			<el-form ref="form" :model="form" label-width="90px">
				<el-form-item label="资源名称" prop="achievementName">
					<el-input v-model="form.achievementName"></el-input>
				</el-form-item>
				<el-form-item label="CODE链接" prop="codeUrl">
					<el-input v-model="form.codeUrl"
						><template slot="prepend">Http://</template></el-input
					>
				</el-form-item>
				<el-form-item label="PDF链接" prop="pdfUrl">
					<el-input v-model="form.pdfUrl"
						><template slot="prepend">Http://</template></el-input
					>
				</el-form-item>
				<el-form-item label="发表年份" prop="achievementName">
					<el-date-picker
						v-model="form.publicYear"
						type="year"
						placeholder="选择年"
						value-format="yyyy"
					>
					</el-date-picker>
				</el-form-item>
				<el-form-item label="成果类型" prop="achievementType">
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
				<el-form-item>
					<el-button type="primary" @click="onSubmit">立即创建</el-button>
					<el-button @click="resetForm">重置</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script>
import { addAchievement } from '../../../../api/admin/results'
export default {
	data() {
		return {
			form: {
				achievementName: '',
				achievementType: '',
				codeUrl: '',
				pdfUrl: '',
				publicYear: '',
			},
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
		onSubmit() {
			addAchievement(this.form).then((res) => {
				this.$message.success(res.data)
				this.$router.replace({ path: '/admin/resultsList' })
			})
		},
		resetForm() {
			this.$refs.form.resetFields()
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
