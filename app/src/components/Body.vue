<template>
  <el-row type="flex">
    <el-col :span="4">
      <app-nav class="grid-content bg-body"/>
    </el-col>
    <el-col :span="20">
      <app-content class="grid-content bg-body"/>
    </el-col>
    <!--<el-col :span="4">-->
      <!--<app-sidebar class="grid-content bg-body"/>-->
    <!--</el-col>-->
  </el-row>
</template>

<script type="text/babel">
import Nav from './Nav.vue'
import Content from './Content.vue'
import Sidebar from './Sidebar.vue'

export default {
  name: 'app-body',
  components: {
    'app-nav': Nav,
    'app-content': Content,
    'app-sidebar': Sidebar
  }
}
</script>

<style lang="stylus" scoped>
  .bg-body
    background: #F8F8F8

  .grid-content
    min-height: 900px

  .el-col
    background: #F4F4F4

</style>
