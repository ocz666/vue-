<template>
  <div>
      <el-popover
        ref="category-popover"
        placement="right"
        width="700px"
        height="637px"
        trigger="hover">
        <el-table :data="gridData">
          <el-table-column width="150" property="date" label="日期"></el-table-column>
          <el-table-column width="100" property="name" label="姓名"></el-table-column>
          <el-table-column width="300" property="address" label="地址"></el-table-column>
        </el-table>
      </el-popover>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  
</style>