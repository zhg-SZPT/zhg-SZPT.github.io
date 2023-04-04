<template>
  <div class="main-box">
    <el-container>
      <el-aside :width="isShow ? '64px' : '200px'">
        <el-menu
          background-color="#304156"
          text-color="#fff"
          :collapse="isShow"
          :collapse-transition="false"
          :router="true"
          :default-active="this.$store.getters.pageIndex"
        >
          <!-- <el-menu-item index="data">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item> -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/admin/articleList">文章列表</el-menu-item>
              <el-menu-item index="/admin/addArticle">添加文章</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-download"></i>
              <span>资源管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/admin/addResources">新增资源</el-menu-item>
              <el-menu-item index="/admin/addResult">新增成果</el-menu-item>
              <el-menu-item index="/admin/resourcesList">资源列表</el-menu-item>
              <el-menu-item index="/admin/resultsList">成果列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-operation"></i>
              <span>页面设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/admin/basicSetting"
                >基础信息设置</el-menu-item
              >
              <el-menu-item index="/admin/swipeList">轮播图</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <div class="menu-button" @click="isShow = !isShow">
            <i v-if="isShow" class="el-icon-s-unfold"></i>
            <i v-else class="el-icon-s-fold"></i>
          </div>
          <div class="user-info">
            <el-button type="text" @click="signOut">退出登录</el-button>
          </div>
        </el-header>
        <el-main>
          <transition name="fade-transform" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    signOut() {
      sessionStorage.removeItem('token');
      this.$router.replace({ path: '/' });
    },
  },
};
</script>

<style scoped>
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.main-box {
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100%;
  width: 100%;
}
.el-aside {
  background-color: rgb(48, 65, 86);
}
.el-aside .el-menu {
  border-right: none;
}
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  border-bottom: 1px solid rgb(220, 220, 220);
}
.menu-button i {
  font-size: 25px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.el-header .menu-button {
  position: relative;
  width: 60px;
  height: 100%;
}
.el-header .menu-button:hover {
  cursor: pointer;
  background-color: rgb(228, 228, 228);
}
.el-header .user-info {
  margin-right: 10px;
}
</style>
