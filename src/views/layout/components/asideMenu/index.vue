<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-vertical-demo aside-menu"
    background-color="#304156"
    text-color="#fff"
    active-text-color="#409EFF"
    :collapse="isCollapse"
  >
    <menu-item
      v-for="route in permissionRoutes"
      :route="route"
      :key="route.path"
      :base-path="route.path"
    />
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import MenuItem from "./MenuItem";
export default {
  name: "AsideMenu",
  components: {
    MenuItem,
  },
  computed: {
    ...mapGetters(["permissionRoutes", "sidebar"]),
    isCollapse() {
      return !this.sidebar.opened;
    },
    activeIndex() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo {
  border: 0;
}
</style>
