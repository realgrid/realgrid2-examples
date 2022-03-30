import { ValueType } from "realgrid";

export const fields = [
    {fieldName:"area1code", dataType:"text"},
    {fieldName:"area1name", dataType:"text"},
    {fieldName:"area2code", dataType:"text"},
    {fieldName:"area2name", dataType:"text"},
    {fieldName:"area3code", dataType:"text"},
    {fieldName:"area3name", dataType:"text"},
    {fieldName:"treeId", dataType:"text"},
    {fieldName:"treeName", dataType:"text"},
    {fieldName:"iconField", dataType:"text"}
  ];

export const columns = [
    {fieldName:"treeName", name:"treeName", width: 150, header:{text:"지역명"}},
    {fieldName:"treeId", name:"treeId", header:{text:"TreeID"}},
    {fieldName:"area1code", name:"area1code", header:{text:"시도코드"}},
    {fieldName:"area1name", name:"area1name", header:{text:"시도명"}},
    {fieldName:"area2code", name:"area2code", header:{text:"시군구코드"}},
    {fieldName:"area2name", name:"area2name", header:{text:"시군구명"}},
    {fieldName:"area3code", name:"area3code", header:{text:"읍면동코드"}},
    {fieldName:"area3name", name:"area3name", header:{text:"읍면동명"}},
    {fieldName:"iconField", name:"iconField"}
  ];

export const rows = [
    {
      "treeId": "11",
      "treeName": "서울특별시",
      "area1code": "11",
      "area1name": "서울특별시",
      "iconField": 0
    },
    {
      "treeId": "11.010",
      "treeName": "종로구",
      "area1code": "11",
      "area1name": "서울특별시",
      "area2code": "11010",
      "area2name": "종로구",
      "iconField": 1
    },
    {
      "area1code": "11",
      "area1name": "서울특별시",
      "area2code": "11010",
      "area2name": "종로구",
      "area3code": "1101053",
      "area3name": "사직동",
      "date1": "20160416",
      "treeId": "11.010.53",
      "treeName": "사직동"
    },
    {
      "area1code": "11",
      "area1name": "서울특별시",
      "area2code": "11010",
      "area2name": "종로구",
      "area3code": "1101054",
      "area3name": "삼청동",
      "treeId": "11.010.54",
      "treeName": "삼청동"
    },
    {
      "area1code": "11",
      "area1name": "서울특별시",
      "area2code": "11010",
      "area2name": "종로구",
      "area3code": "1101055",
      "area3name": "부암동",
      "treeId": "11.010.55",
      "treeName": "부암동"
    }
  ];
