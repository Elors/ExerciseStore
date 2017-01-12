<template>
  <el-row type="flex" justify="center" class="sidebar-pane">
    <el-col>
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" class="tree-content"></el-tree>
    </el-col>
  </el-row>
</template>

<script type="text/babel">
export default {
  name: 'app-sidebar',
  data () {
    return {
      data: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .sidebar-pane
    min-height: 900px
    background: #F4F4F4

  .tree-content
    border-style: none
    background: #F4F4F4

</style>
