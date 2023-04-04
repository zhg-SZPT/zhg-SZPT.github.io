<template>
  <div class="main">
    <el-card>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="title">头像</div>
            <div class="avatar-box">
              <el-upload class="avatar-uploader" action="action" :http-request="avatarUpload" :show-file-list="false">
                <i class="el-icon-plus avatar-uploader-icon"></i>
                <el-image v-if="!(userInfoForm.iconUrl == '')" :src="userInfoForm.iconUrl" fit="cover"></el-image>
              </el-upload>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <div class="title">团队照片</div>
            <div class="teamImg-box">
              <el-upload class="avatar-uploader" action="action" :http-request="teamImgUpload" :show-file-list="false">
                <i class="el-icon-plus avatar-uploader-icon"></i>
                <el-image v-if="!(userInfoForm.teamImg == '')" :src="userInfoForm.teamImg" fit="cover"></el-image>
              </el-upload>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-form :model="userInfoForm">
        <el-form-item label="姓名">
          <el-input v-model="userInfoForm.fullName"></el-input>
        </el-form-item>
        <el-form-item label="介绍">
          <el-input v-model="userInfoForm.introduce"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="userInfoForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="userInfoForm.email"></el-input>
        </el-form-item>
      </el-form>
      <div class="button">
        <el-button type="primary" @click="save">保存</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { imageUpload } from '../../../../api/admin/public'
import { updateUserInfo, getUserinfo } from '../../../../api/admin/userInfo'
export default {
  data () {
    return {
      userInfoForm: {
        userinfoId: '1',
        iconUrl: '',
        teamImg: '',
        fullName: '',
        introduce: '',
        phone: '',
        email: '',
      },
    }
  },
  methods: {
    getUserInfoList () {
      getUserinfo().then((res) => {
        this.userInfoForm = (({
          userinfoId,
          iconUrl,
          teamImg,
          fullName,
          introduce,
          phone,
          email,
        }) => ({
          userinfoId,
          iconUrl,
          teamImg,
          fullName,
          introduce,
          phone,
          email,
        }))(res.data)
      })
    },
    avatarUpload (param) {
      const formData = new FormData()
      formData.append('file', param.file)
      imageUpload(formData).then((res) => {
        this.$message.success('图片上传成功')
        this.userInfoForm.iconUrl = 'http://' + res.data.fileUrl
      })
    },
    teamImgUpload (param) {
      const formData = new FormData()
      formData.append('file', param.file)
      imageUpload(formData).then((res) => {
        this.$message.success('图片上传成功')
        this.userInfoForm.teamImg = 'http://' + res.data.fileUrl
      })
    },
    save () {
      updateUserInfo(this.userInfoForm).then((res) => {
        this.$message.success(res.data)
      })
    },
  },
  mounted () {
    this.getUserInfoList()
  },
}
</script>

<style lang="scss" scoped>
.main {
  .el-card {
    height: 100%;

    .title {
      color: #606266;
      font-size: 14px;
    }

    .avatar-box {
      position: relative;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background-color: #f5f7fa;

      .avatar-uploader .el-upload {
        border-radius: 50%;
        cursor: pointer;
        overflow: hidden;
      }

      .avatar-uploader-icon {
        font-size: 30px;
        color: #4b4b4b;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: none;
        z-index: 999;
      }

      &:hover .avatar-uploader-icon {
        display: block;
      }

      .el-image {
        width: 140px;
        height: 140px;
        display: block;
        border-radius: 50%;
      }
    }

    .teamImg-box {
      position: relative;
      width: 400px;
      height: 200px;
      background-color: #f5f7fa;

      .avatar-uploader .el-upload {
        border-radius: 50%;
        cursor: pointer;
        overflow: hidden;
      }

      .avatar-uploader-icon {
        font-size: 30px;
        color: #4b4b4b;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: none;
        z-index: 999;
      }

      &:hover .avatar-uploader-icon {
        display: block;
      }

      .el-image {
        width: 400px;
        height: 200px;
        display: block;
      }
    }

    .el-form {
      width: 30%;
      margin-top: 20px;
    }
  }
}
</style>