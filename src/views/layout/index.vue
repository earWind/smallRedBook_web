<template>
  <div class="home">
    <el-container>
      <!-- aside -->
      <el-aside :width="isCollapse ? '' : '200px'">
        <aside-menu />
      </el-aside>
      <el-container>
        <!-- header -->
        <el-header height="81px">
          <navbar />
          <tags-view v-if="needTagsView" />
        </el-header>
        <!-- main -->
        <el-main>
          <app-main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { AsideMenu, Navbar, TagsView, AppMain } from "./components";
export default {
  name: "Home",
  components: {
    Navbar,
    TagsView,
    AsideMenu,
    AppMain,
  },
  computed: {
    ...mapState({
      sidebar: (state) => state.app.sidebar,
      needTagsView: (state) => state.settings.tagsView,
    }),
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
}
.el-container {
  height: 100%;
  .el-aside {
    background-color: #304156;
  }
}
.el-header,
.el-main {
  padding: 0;
}
</style>
