<template>
  <div v-if="!route.hidden">
    <template v-if="hasOneChild">
      <router-link :to="routerUrl">
        <el-menu-item :index="'/' + onlyOne.path">
          <i :class="onlyOne.meta.icon"></i>
          <span slot="title">{{ onlyOne.meta.title }}</span>
        </el-menu-item>
      </router-link>
    </template>

    <el-submenu v-else :index="route.path">
      <template slot="title">
        <i :class="route.meta.icon"></i>
        <span>{{ route.meta.title }}</span>
      </template>
      <el-menu-item-group>
        <menu-item
          v-for="item in route.children"
          :route="item"
          :key="item.path"
          :base-path="route.path"
        />
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  data() {
    return {
      onlyOne: null,
    };
  },
  computed: {
    hasOneChild() {
      if (!this.route.children) {
        this.onlyOne = this.route;
        return true;
      } else if (this.route.children.length === 1) {
        this.onlyOne = this.route.children[0];
        return true;
      } else {
        return false;
      }
    },
    childrenPath(item) {
      return this.route.path + "/" + item.path;
    },
    routerUrl() {
      // return this.onlyOne.path
      if (this.basePath === "/") {
        return this.basePath + this.onlyOne.path;
      } else {
        return this.basePath + "/" + this.onlyOne.path;
      }
    },
  },
  props: {
    route: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
