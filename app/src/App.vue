<template>
    <el-row type="flex" justify="center">
      <el-col>
        <app-header class="header" />
        <app-body class="body" />
      </el-col>
    </el-row>
</template>

<script type="text/babel">
  import Header from './components/Header.vue'
  import Body from './components/Body.vue'

  export default {
    name: 'app',
    components: {
      'app-header': Header,
      'app-body': Body
    }
  }
</script>

<style lang="stylus">
body
  padding: 0px
  margin: 0px
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif
  font-size: 14px
  line-height: 1.42857143
  color: #333
  background-color: #fff
</style>

<style lang="stylus" scoped>
  .header
    min-height: 50px
    background: #F8F8F8
    border: 1px solid #e7e7e7

  .body
    min-height: 900px

</style>
