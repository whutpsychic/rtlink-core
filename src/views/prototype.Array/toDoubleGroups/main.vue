<template>
  <div class="page-container">
    <div class="main-content">
      <h2>{{ `Array
        <?>` }}</h2>
          <h3>Array.prototype.toDoubleGroups() 划分数组中的项</h3>
          <p>返回一个新的二维数组。将数组中的项按顺序划分为两组。</p>
          <highlightjs language="Javascript" :code="code" />
          <p class="result-spliter">********************* 运行结果 *********************</p>
          <highlightjs language="Javascript" :code="code2" />
        </div>
      </div>
</template>

<script setup>
const code = `const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newArr = array.toDoubleGroups()

console.log(newArr)`

const code2 = `[
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9]
]`

</script>

<style>
h2,
h3 {
  margin-bottom: 1em;
}

p {
  font-size: 14px;
  margin-bottom: 0.5em;
}
</style>