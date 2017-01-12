<template>
  <div class="nav-pane">
  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect">
    <el-menu-item index="2" class="menu-item">JSON对象对比</el-menu-item>
  </el-menu>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'app-nav',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .el-menu
    background: #F4F4F4
    width: 100%

  .menu-item
    height: 45px
    line-height: 45px
    text-align: center

  .nav-pane
    background: #F4F4F4

</style>
