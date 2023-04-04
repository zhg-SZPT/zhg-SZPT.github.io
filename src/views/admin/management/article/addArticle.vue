<template>
  <div class="main">
    <div class="top">
      <el-card>
        <el-button type="primary" @click="save">保存</el-button>
        <el-button type="success" @click="release">发布</el-button>
      </el-card>
    </div>
    <div class="edit">
      <el-card>
        <el-form :model="acticleForm">
          <el-form-item label="文章名称">
            <el-input v-model="acticleForm.title"></el-input>
          </el-form-item>
          <el-form-item>
            <edit v-model="acticleForm.content"></edit>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import { addArticle, keepArticle } from '../../../../api/admin/article'
import edit from './components/edit.vue'
export default {
  components: {
    edit,
  },
  data () {
    return {
      acticleForm: {
        title: '',
        content: '',
      },
    }
  },
  methods: {
    save () {
      let date = new Date()
      this.acticleForm.publicTime = date
      keepArticle(this.acticleForm).then((res) => {
        this.$message.success(res.data)
        this.$router.replace({ path: '/admin/articleList' })
      })
    },
    release () {
      keepArticle(this.acticleForm).then((res) => {
        addArticle({ articleId: this.acticleForm.articleId }).then((res) => {
          this.$message.success(res.data)
          this.$router.replace({ path: '/admin/articleList' })
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  .top {
    .el-card {
      margin-bottom: 20px;
    }
  }

  .edit {
    .el-input {
      width: auto;
    }
  }
}
</style>