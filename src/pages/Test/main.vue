<template>
  <div class="main-content">
    <p>Test</p>
  </div>
</template>

<script setup>
import moment from "moment";
import { buildTableQueryParams } from '@/rtlink-core';

const condition = buildTableQueryParams({
  pageBean: {
    page: 1,
    pageSize: 10,
    total: 0
  }
}, {
  treeIds: { operation: "EQUAL", relation: "AND", value: "treeIds" },
  cycleType: { operation: "EQUAL", relation: "AND", value: "cycleType" },
  start: { operation: "EQUAL", relation: "AND", value: moment().format("YYYY-MM-DD 00:00:00") },
  end: { operation: "EQUAL", relation: "AND", value: moment().format("YYYY-MM-DD 23:59:59") },
})

console.log(condition)

</script>
