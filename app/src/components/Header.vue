<template>
  <el-row type="flex" justify="space-between">
    <el-col :span="6" class="header-brand">
      <a class="navbar-brand" href="#">Octarine Space</a>
    </el-col>
    <el-col :span="4" class="header-brand">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">托尔斯泰</a></li>
        <li><a href="#"></li>
      </ul>
    </el-col>
  </el-row>
</template>

<script type="text/babel">
export default {
  name: 'app-header'
}
</script>

<style lang="stylus" scoped>
  .header-brand
    min-height: 35px

  .navbar-brand
    margin-left: 15px
    min-height: 35px
    float: left
    font-size: 18px
    line-height: 20px

  .navbar-right
    float: right !important
    margin-right: 15px

  img
    padding: 0 40px 0 10px
    vertical-align: middle
    border: 0

  a
    color: #777
    padding: 25px 0 0 0
    vertical-align: middle
    text-decoration: none

  ul
    padding: 10px 0 0 0
    list-style: none

    li
      font-size: 14px
      float: left
      display: block
      line-height: 20px
      margin-left: 20px
      list-style-type: square


</style>
