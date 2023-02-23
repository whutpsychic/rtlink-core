<template>
  <div class="page-content-container">
    <h2>findTreeParentNodeIdAsCascader(data, id, option) 整理树形控制键数据</h2>
    <h4>data, id, option = { idStr: 'id', childStr: 'children', parentIdStr: 'parentId' }</h4>
    <p>返回一个经过整理后的一维数组。对比字段，从树形数据中找到目标节点id，并将其各层父节点id按照层级顺序从大到小排进一个数组里，使其可以直接锚定 cascader 中的数据位置。</p>
    <highlightjs language="js" :code="code" />
    <p> ************** 运行结果 ************** </p>
    <highlightjs language="js" :code="result" />
  </div>
</template>
<script>

export default {
  data() {
    return {
      code:
        `import { findTreeParentNodeIdAsCascader } from '@/rtlink-core';

const dataArr = [
  {
    "children": [
      {
        "children": [
          {
            "children": [
              {
                "children": [],
                "pkVal": "1623928814165336064",
                "id": "1623928814165336064",
                "name": "郑州购电量",
                "code": "001inflow001001",
                "parentId": "1623614778093686784",
                "level": 3,
                "sort": 0,
                "createTime": "2023-02-10 14:16:15",
                "createUser": "1",
                "organizationId": "1621040539824025600",
                "point": "12",
                "shareRatio": 0,
                "direction": "2",
                "label": "郑州购电量",
                "value": "1623928814165336064"
              },
              {
                "children": [],
                "pkVal": "1623928975872532480",
                "id": "1623928975872532480",
                "name": "洛阳购电量",
                "code": "001inflow001002",
                "parentId": "1623614778093686784",
                "level": 3,
                "sort": 0,
                "createTime": "2023-02-10 14:16:53",
                "createUser": "1",
                "organizationId": "1621040539824025600",
                "point": "13",
                "shareRatio": 0,
                "direction": "2",
                "label": "洛阳购电量",
                "value": "1623928975872532480"
              }
            ],
            "pkVal": "1623614778093686784",
            "id": "1623614778093686784",
            "name": "自购电量",
            "code": "001inflow001",
            "parentId": "1623602956896649216",
            "level": 2,
            "sort": 0,
            "createTime": "2023-02-09 17:28:22",
            "createUser": "1",
            "organizationId": "1621040539824025600",
            "point": "10",
            "shareType": 1,
            "shareRatio": 0,
            "direction": "2",
            "label": "自购电量",
            "value": "1623614778093686784"
          },
          {
            "children": [
              {
                "children": [],
                "pkVal": "1626469249704169472",
                "id": "1626469249704169472",
                "name": "青岛购入",
                "code": "001inflow002001",
                "parentId": "1626469113586421760",
                "level": 3,
                "sort": 0,
                "createTime": "2023-02-17 14:31:02",
                "createUser": "1",
                "organizationId": "1621040539824025600",
                "point": "15",
                "shareRatio": 0,
                "direction": "2",
                "label": "青岛购入",
                "value": "1626469249704169472"
              },
              {
                "children": [],
                "pkVal": "1626469428784173056",
                "id": "1626469428784173056",
                "name": "济南购入",
                "code": "001inflow002002",
                "parentId": "1626469113586421760",
                "level": 3,
                "sort": 0,
                "createTime": "2023-02-17 14:31:45",
                "createUser": "1",
                "organizationId": "1621040539824025600",
                "point": "16",
                "shareRatio": 0,
                "direction": "2",
                "label": "济南购入",
                "value": "1626469428784173056"
              }
            ],
            "pkVal": "1626469113586421760",
            "id": "1626469113586421760",
            "name": "外购电量",
            "code": "001inflow002",
            "parentId": "1623602956896649216",
            "level": 2,
            "sort": 1,
            "createTime": "2023-02-17 14:30:30",
            "createUser": "1",
            "organizationId": "1621040539824025600",
            "point": "14",
            "shareRatio": 0,
            "direction": "2",
            "label": "外购电量",
            "value": "1626469113586421760"
          }
        ],
        "pkVal": "1623602956896649216",
        "id": "1623602956896649216",
        "name": "流入",
        "code": "001inflow",
        "parentId": "1623602956200394752",
        "level": 1,
        "sort": 0,
        "createTime": "2023-02-09 16:41:24",
        "createUser": "1",
        "direction": "2",
        "label": "流入",
        "value": "1623602956896649216"
      },
      {
        "children": [
          {
            "children": [
              {
                "children": [],
                "pkVal": "1626469721651449856",
                "id": "1626469721651449856",
                "name": "钴车间电消耗",
                "code": "001outflow013001",
                "parentId": "1623603259859615744",
                "level": 3,
                "sort": 0,
                "createTime": "2023-02-17 14:32:55",
                "createUser": "1",
                "organizationId": "1621040918192189440",
                "point": "17",
                "shareRatio": 0,
                "direction": "3",
                "selectParentId": "1623603259859615744",
                "label": "钴车间电消耗",
                "value": "1626469721651449856"
              },
              {
                "children": [],
                "pkVal": "1626469815561916416",
                "id": "1626469815561916416",
                "name": "铜车间电消耗",
                "code": "001outflow013002",
                "parentId": "1623603259859615744",
                "level": 3,
                "sort": 1,
                "createTime": "2023-02-17 14:33:17",
                "createUser": "1",
                "organizationId": "1621040857341227008",
                "point": "18",
                "shareRatio": 0,
                "direction": "3",
                "selectParentId": "1623603259859615744",
                "label": "铜车间电消耗",
                "value": "1626469815561916416"
              }
            ],
            "pkVal": "1623603259859615744",
            "id": "1623603259859615744",
            "name": "冶炼厂电消耗量",
            "code": "001outflow013",
            "parentId": "1623602957148307456",
            "level": 2,
            "sort": 0,
            "createTime": "2023-02-10 14:15:15",
            "createUser": "1",
            "organizationId": "1621040634510438400",
            "point": "7",
            "shareType": 1,
            "shareRatio": 0.4,
            "direction": "3",
            "selectParentId": "1623602956200394752",
            "label": "冶炼厂电消耗量",
            "value": "1623603259859615744"
          },
          {
            "children": [],
            "pkVal": "1623613529969471488",
            "id": "1623613529969471488",
            "name": "选矿厂电量消耗",
            "code": "001outflow010",
            "parentId": "1623602957148307456",
            "level": 2,
            "sort": 0,
            "createTime": "2023-02-09 17:22:57",
            "createUser": "1",
            "organizationId": "1621040716483915776",
            "point": "8",
            "shareType": 1,
            "shareRatio": 0.3,
            "direction": "3",
            "selectParentId": "1623602956200394752",
            "label": "选矿厂电量消耗",
            "value": "1623613529969471488"
          },
          {
            "children": [],
            "pkVal": "1623613777596985344",
            "id": "1623613777596985344",
            "name": "电解厂电量消耗",
            "code": "001outflow011",
            "parentId": "1623602957148307456",
            "level": 2,
            "sort": 0,
            "createTime": "2023-02-09 17:24:09",
            "createUser": "1",
            "organizationId": "1621040716483915776",
            "point": "9",
            "shareType": 1,
            "shareRatio": 0.3,
            "direction": "3",
            "selectParentId": "1623602956200394752",
            "label": "电解厂电量消耗",
            "value": "1623613777596985344"
          }
        ],
        "pkVal": "1623602957148307456",
        "id": "1623602957148307456",
        "name": "流出",
        "code": "001outflow",
        "parentId": "1623602956200394752",
        "level": 1,
        "sort": 1,
        "createTime": "2023-02-09 16:41:24",
        "createUser": "1",
        "shareType": 1,
        "direction": "3",
        "label": "流出",
        "value": "1623602957148307456"
      }
    ],
    "pkVal": "1623602956200394752",
    "id": "1623602956200394752",
    "name": "公司电量总消耗",
    "code": "001",
    "level": 0,
    "sort": 0,
    "createTime": "2023-02-09 18:05:24",
    "createUser": "1",
    "organizationId": "1621040539824025600",
    "point": "6",
    "shareType": 1,
    "shareRatio": 0,
    "direction": "1",
    "label": "公司电量总消耗",
    "value": "1623602956200394752"
  },
  {
    "children": [
      {
        "children": [],
        "pkVal": "1623614944137793536",
        "id": "1623614944137793536",
        "name": "流入",
        "code": "002inflow",
        "parentId": "1623614943571562496",
        "level": 1,
        "sort": 0,
        "createTime": "2023-02-09 17:29:02",
        "createUser": "1",
        "direction": "2",
        "label": "流入",
        "value": "1623614944137793536"
      },
      {
        "children": [],
        "pkVal": "1623614944506892288",
        "id": "1623614944506892288",
        "name": "流出",
        "code": "002outflow",
        "parentId": "1623614943571562496",
        "level": 1,
        "sort": 1,
        "createTime": "2023-02-09 17:29:02",
        "createUser": "1",
        "shareType": 1,
        "direction": "3",
        "label": "流出",
        "value": "1623614944506892288"
      }
    ],
    "pkVal": "1623614943571562496",
    "id": "1623614943571562496",
    "name": "公司天然气消耗量",
    "code": "002",
    "level": 0,
    "sort": 0,
    "createTime": "2023-02-09 17:29:02",
    "createUser": "1",
    "organizationId": "1621040539824025600",
    "point": "11",
    "shareType": 1,
    "shareRatio": 0,
    "direction": "1",
    "label": "公司天然气消耗量",
    "value": "1623614943571562496"
  }
];
const newData = findTreeParentNodeIdAsCascader(dataArr, "1623928814165336064");

console.log(newData);`,
      result:
        `['1623602956200394752', '1623602956896649216', '1623614778093686784']`
    }
  }
}

</script>


<style scoped>
p {
  font-size: 15px;
}
</style>