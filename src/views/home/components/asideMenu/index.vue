<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo aside-menu"
    @open="handleOpen"
    @close="handleClose"
    background-color="#304156"
    text-color="#fff"
    active-text-color="#409EFF"
    :collapse="isCollapse"
  >
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="3">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
     <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>设置</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">用户管理</el-menu-item>
        <el-menu-item index="1-2">权限管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AsideMenu",
  computed: {
    ...mapState({
      sidebar: (state) => state.app.sidebar,
    }),
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo {
  border: 0;
}
</style>
