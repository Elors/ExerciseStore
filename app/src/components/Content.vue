<template>
<el-row type='flex' justify='center' align='middle' class='content-pane'>
  <div label-width='0px' class='page-pane'>

    <div class='text item-input'>
      <el-input v-model='jsonLeft' type='textarea' :autosize='{minRows: 30}' class='json-input'></el-input>
      <el-input v-model='jsonRight' type='textarea' :autosize='{minRows: 30}' class='json-input'></el-input>
    </div>

    <div class='item-submit'>
      <el-button type='primary' icon='edit' @click='onCompare'>对比JSON对象</el-button>
    </div>

    <div class='item-submit'>
      <el-alert class='item-alert'
                v-bind:title="alert.info"
                v-bind:type="alert.type"
                v-bind:description="alert.desc"
                :closable="false"
                show-icon>
      </el-alert>
    </div>

  </div>
</el-row>
</template>

<script type='text/babel'>
export default {
  name: 'app-content',
  data () {
    return {
      jsonLeft: jsonStr1,
      jsonRight: jsonStr2,
      alert: {
        info: '提示信息',
        type: 'info',
        desc: '提示详细说明文字'
      }
    }
  },
  methods: {
    onCompare () {
      let json1 = JSON.parse(this.jsonLeft)
      let json2 = JSON.parse(this.jsonRight)
      this.handleAlert(this.compObj(json1, json2))
    },
    handleAlert (object) {
      this.alert = object !== true ? object : {
        info: 'JSON匹配成功',
        type: 'success',
        desc: ''
      }
    },
    // Compare Function
    compArray (array1, array2) {
      if ((array1 && typeof array1 === 'object' && array1.constructor === Array) && (array2 && typeof array2 === 'object' && array2.constructor === Array)) {
        if (array1.length === array2.length) {
          for (let i = 0; i < array1.length; i++) {
            let ggg = this.compObj(array1[i], array2[i])
            if (!(ggg === true)) {
              return this.packageError(null, null, '数组属性对比不一致')
            }
          }
        } else {
          return this.packageError(null, null, '数组长度不一致')
        }
      } else {
        return this.packageError(null, null, 'argunment is  error ')
      }
      return true
    },
    // 比较两个对象是否相等，不包含原形上的属性计较
    compObj (obj1, obj2) {
      if ((obj1 && typeof obj1 === 'object') && ((obj2 && typeof obj2 === 'object'))) {
        let count1 = this.propertyLength(obj1)
        let count2 = this.propertyLength(obj2)
        if (count1 === count2) {
          for (let ob in obj1) {
            if (obj1.hasOwnProperty(ob) && obj2.hasOwnProperty(ob)) {
              // 如果属性是数组
              if (obj1[ob].constructor === Array && obj2[ob].constructor === Array) {
                if (!this.compArray(obj1[ob], obj2[ob])) {
                  return this.packageError(obj1, ob)
                }
                // 字符串
              } else if (typeof obj1[ob] === 'string' && typeof obj2[ob] === 'string') {
                if (obj1[ob] !== obj2[ob]) {
                  return this.packageError(obj1, ob)
                }
                // 数字
              } else if (typeof obj1[ob] === 'number' && typeof obj2[ob] === 'number') {
                if (obj1[ob] !== obj2[ob]) {
                  return this.packageError(obj1, ob)
                }
                // 属性是对象
              } else if (typeof obj1[ob] === 'object' && typeof obj2[ob] === 'object') {
                if (!this.compObj(obj1[ob], obj2[ob])) {
                  return this.packageError(obj1, ob)
                }
              } else {
                return this.packageError(null, null, '无法解析属性' + ob + ' [type: ' + typeof obj1[ob] + ']')
              }
            } else {
              return this.packageError(null, null, '未拥有属性' + ob + ' [type: ' + typeof obj1[ob] + ']')
            }
          }
        } else {
          return this.packageError(null, null, 'JSON对象属性数目不一致, [left: ' + count1 + ', right: ' + count2 + ']')
        }
      }
      return true
    },
    // 获得对象上的属性个数，不包含对象原形上的属性
    propertyLength (obj) {
      let count = 0
      if (obj && typeof obj === 'object') {
        for (let ooo in obj) {
          if (obj.hasOwnProperty(ooo)) {
            count++
          }
        }
        return count
      } else {
        return this.packageError(null, null, 'argunment can not be null')
      }
    },
    packageError (errorObject, errorProperty, errorMessage) {
      return {
        info: 'JSON对象不匹配',
        type: 'error',
        desc: errorMessage || '属性' + errorProperty + ' [type: ' + typeof errorObject[errorProperty] + ']不匹配'
      }
    }
  }
}

//  数据模型
var jsonStr1 = '{"date": 2, "json": "jsonStr", "end": "true"}'
var jsonStr2 = '{"json": "jsonStr", "date": 2, "end": "true"}'

</script>

<style lang='stylus' scoped>
.content-pane
  min-height: 900px
  background: #F0F0F0

.page-pane
  background: #FFF
  margin: 50px 50px 50px 50px
  min-height: 800px
  width: 85%
  border: 1px solid #DADADA
  padding: 20px 0 20px 0

.text
  font-size: 14px

.item-submit
  display: flex
  justify-content: center
  margin: 30px 0 0 0

.item-alert
  display: flex
  width: 93%

.item-input
  padding: 4px 50px 0 50px
  margin-bottom: 5px
  display: flex
  flex-direction: row
  justify-content: space-between

.json-input
  width: 45%
  min-height: 600px


</style>
