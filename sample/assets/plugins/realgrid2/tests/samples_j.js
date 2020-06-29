var fields = [
    { 
        "fieldName": "restarea",
        "dataType":"text"
    }, 
    {
        "fieldName": "highwayno",
        "dataType":"number"
    },
    {
        "fieldName": "highwayname",
        "dataType": "text"
    },
    {
        "fieldName": "restkind",
        "dataType": "text"
    },
    {
        "fieldName": "opentime",
        "dataType": "text"
    },
    {
        "fieldName":"closetime",
        "dataType": "text"
    },
    {
        "fieldName": "area",
        "dataType": "number"
    },
    {
        "fieldName": "parkingcnt",
        "dataType": "number"
    },
    {
        "fieldName": "maintenance",
        "dataType": "boolean"
    },
    {
        "fieldName": "gasstation",
        "dataType": "boolean"
    },
    {
        "fieldName": "lpgstation",
        "dataType": "boolean"
    },
    {
        "fieldName": "carchanging",
        "dataType": "boolean"
    },
    {
        "fieldName": "tel",
        "dataType": "text"
    },
    {
        "fieldName": "stddate",
        "dataType": "datetime",
        "subType": "date"
    }
];

var columns = [
    { 
        "fieldName": "restarea",
        "name": "restarea",
        "header":{
            "text":"휴계소명"
        },
        "width":100
    }, 
    {
        "fieldName": "highwayno",
        "name": "highwayno",
        "header":{
            "text":"도로번호"
        },
        "width":100
    },
    {
        "fieldName": "highwayname",
        "name": "highwayname",
        "header":{
            "text":"도로명"
        },
        "width":100
    },
    {
        "fieldName": "restkind",
        "name": "restkind",
        "header":{
            "text":"휴게소종류"
        },
        "width":100
    },
    {
        "fieldName": "opentime",
        "name": "opentime",
        "header":{
            "text":"시작시각"
        },
        "width":100
    },
    {
        "fieldName":"closetime",
        "name":"closetime",
        "header":{
            "text":"종료시각"
        },
        "width":100
    },
    {
        "fieldName": "area",
        "name": "area",
        "header":{
            "text":"면적"
        },
        "footer":{
            "expression":"sum",
            "groupExpression":"sum"
        },
        "width":100
    },
    {
        "fieldName": "parkingcnt",
        "name": "parkingcnt",
        "header":{
            "text":"주차면수"
        },
        "footer":{
            "expression":"sum",
            "groupExpression":"sum"
        },
        "width":100
    },
    {
        "fieldName": "maintenance",
        "name": "maintenance",
        "header":{
            "text":"경정비유무"
        },
        "width":100
    },
    {
        "fieldName": "gasstation",
        "name": "gasstation",
        "header":{
            "text":"주유소유무"
        },
        "width":100
    },
    {
        "fieldName": "lpgstation",
        "name": "lpgstation",
        "header":{
            "text":"LPG충전"
        },
        "width":100
    },
    {
        "fieldName": "carchanging",
        "name": "carchanging",
        "header":{
            "text":"전기차충전"
        },
        "width":100
    },
    {
        "fieldName": "tel",
        "name": "tel",
        "header":{
            "text":"전화번호"
        },
        "width":100
    },
    {
        "fieldName": "stddate",
        "name": "stddate",
        "header":{
            "text":"등록일자"
        },
        "width":100
    }
];
var data = [
    {"restarea":"강릉(강릉)","highwayno":50,"highwayname":"영동선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":85218,"parkingcnt":252,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"033-648-8850","stddate":"2019-05-31"},
    {"restarea":"강릉(인천)","highwayno":50,"highwayname":"영동선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":71026,"parkingcnt":279,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"033-647-9970","stddate":"2019-05-31"},
    {"restarea":"강천산(광주)","highwayno":12,"highwayname":"광주대구선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":17767,"parkingcnt":63,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"063-653-4033","stddate":"2019-05-31"},
    {"restarea":"강천산(대구)","highwayno":12,"highwayname":"광주대구선","restkind":"간이휴게소","opentime":"0:00","closetime":"23:59","area":12365,"parkingcnt":56,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"063-653-3050","stddate":"2019-05-31"},
    {"restarea":"거창(광주)","highwayno":12,"highwayname":"광주대구선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":56462,"parkingcnt":110,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"055-943-9534","stddate":"2019-05-31"},
    {"restarea":"거창(대구)","highwayno":12,"highwayname":"광주대구선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":56462,"parkingcnt":86,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"055-943-0992","stddate":"2019-05-31"},
    {"restarea":"건천(부산)","highwayno":1,"highwayname":"경부선","restkind":"간이휴게소","opentime":"0:00","closetime":"23:59","area":13041,"parkingcnt":146,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"054-751-6890","stddate":"2019-05-31"},
    {"restarea":"건천(서울)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":23174,"parkingcnt":124,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"054-751-7401","stddate":"2019-05-31"},
    {"restarea":"경산(서울)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":40171,"parkingcnt":215,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"053-852-5243","stddate":"2019-05-31"},
    {"restarea":"경주(부산)","highwayno":1,"highwayname":"경부선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":72848,"parkingcnt":290,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-748-3195","stddate":"2019-05-31"},
    {"restarea":"고성(통영)","highwayno":35,"highwayname":"중부선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":42488,"parkingcnt":187,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"055-674-7028","stddate":"2019-05-31"},
    {"restarea":"고성(대전)","highwayno":35,"highwayname":"중부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":50422,"parkingcnt":160,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"055-674-0494","stddate":"2019-05-31"},
    {"restarea":"고창고인돌(목포)","highwayno":15,"highwayname":"서해안선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":52451,"parkingcnt":294,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"063-561-6313","stddate":"2019-05-31"},
    {"restarea":"고창고인돌(서울)","highwayno":15,"highwayname":"서해안선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":114191,"parkingcnt":261,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"063-561-6323","stddate":"2019-05-31"},
    {"restarea":"곡성(순천)","highwayno":25,"highwayname":"호남선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":16137,"parkingcnt":54,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"061-363-2766","stddate":"2019-05-31"},
    {"restarea":"곡성(천안)","highwayno":25,"highwayname":"호남선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":24680,"parkingcnt":118,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"061-362-8300","stddate":"2019-05-31"},
    {"restarea":"공주(당진)","highwayno":30,"highwayname":"당진영덕선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":52144,"parkingcnt":178,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-854-0050","stddate":"2019-05-31"},
    {"restarea":"공주(대전)","highwayno":30,"highwayname":"당진영덕선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":49748,"parkingcnt":188,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-854-6060","stddate":"2019-05-31"},
    {"restarea":"괴산(창원)","highwayno":45,"highwayname":"중부내륙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":37162,"parkingcnt":90,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-832-7966","stddate":"2019-05-31"},
    {"restarea":"괴산(양평)","highwayno":45,"highwayname":"중부내륙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":38776,"parkingcnt":90,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-832-6594","stddate":"2019-05-31"},
    {"restarea":"구리(일산)","highwayno":100,"highwayname":"서울외곽선","restkind":"간이휴게소","opentime":"0:00","closetime":"23:59","area":19500,"parkingcnt":144,"maintenance":"N","gasstation":"N","lpgstation":"Y","carchanging":"Y","tel":"031-529-3564","stddate":"2019-05-31"},
    {"restarea":"구정(삼척)","highwayno":65,"highwayname":"동해선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":41920,"parkingcnt":230,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"033-644-8345","stddate":"2019-05-31"},
    {"restarea":"구정(속초)","highwayno":65,"highwayname":"동해선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":52345,"parkingcnt":226,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"033-644-4760","stddate":"2019-05-31"},
    {"restarea":"군산(목포)","highwayno":15,"highwayname":"서해안선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":14071,"parkingcnt":151,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"063-453-0402","stddate":"2019-05-31"},
    {"restarea":"군산(서울)","highwayno":15,"highwayname":"서해안선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":50249,"parkingcnt":226,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"063-453-2868","stddate":"2019-05-31"},
    {"restarea":"군위(부산)","highwayno":55,"highwayname":"중앙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":36839,"parkingcnt":227,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-383-6114","stddate":"2019-05-31"},
    {"restarea":"군위(춘천)","highwayno":55,"highwayname":"중앙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":39273,"parkingcnt":227,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-383-7114","stddate":"2019-05-31"},
    {"restarea":"금강(부산)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":17409,"parkingcnt":295,"maintenance":"Y","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"043-731-2233","stddate":"2019-05-31"},
    {"restarea":"금왕(제천)","highwayno":40,"highwayname":"평택제천선","restkind":"간이휴게소","opentime":"0:00","closetime":"23:59","area":42829,"parkingcnt":170,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-881-0001","stddate":"2019-05-31"},
    {"restarea":"금왕(평택)","highwayno":40,"highwayname":"평택제천선","restkind":"간이휴게소","opentime":"0:00","closetime":"23:59","area":42627,"parkingcnt":170,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-877-7000","stddate":"2019-05-31"},
    {"restarea":"기흥(부산)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":72615,"parkingcnt":418,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-286-5001","stddate":"2019-05-31"},
    {"restarea":"김천(부산)","highwayno":1,"highwayname":"경부선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":45224,"parkingcnt":193,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-435-0211","stddate":"2019-05-31"},
    {"restarea":"김천(서울)","highwayno":1,"highwayname":"경부선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":30577,"parkingcnt":163,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-433-1523","stddate":"2019-05-31"},
    {"restarea":"김해금관가야","highwayno":600,"highwayname":"부산외곽선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":52100,"parkingcnt":337,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"055-312-2820","stddate":"2019-05-31"},
    {"restarea":"남성주(양평)","highwayno":45,"highwayname":"중부내륙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":39978,"parkingcnt":136,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-931-5741","stddate":"2019-05-31"},
    {"restarea":"남성주(창원)","highwayno":45,"highwayname":"중부내륙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":38447,"parkingcnt":110,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-933-7105","stddate":"2019-05-31"},
    {"restarea":"내린천(통합)","highwayno":60,"highwayname":"서울양양선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":88867,"parkingcnt":330,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"033-852-8615","stddate":"2019-05-31"},
    {"restarea":"논공(광주)","highwayno":12,"highwayname":"광주대구선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":29234,"parkingcnt":125,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"070-4304-0600","stddate":"2019-05-31"},
    {"restarea":"논공(대구)","highwayno":12,"highwayname":"광주대구선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":37766,"parkingcnt":156,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"070-4304-0620","stddate":"2019-05-31"},
    {"restarea":"단양(부산)","highwayno":55,"highwayname":"중앙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":31481,"parkingcnt":112,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-423-5401","stddate":"2019-05-31"},
    {"restarea":"단양(춘천)","highwayno":55,"highwayname":"중앙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":79980,"parkingcnt":111,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-421-1671","stddate":"2019-05-31"},
    {"restarea":"대천(목포)","highwayno":15,"highwayname":"서해안선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":38519,"parkingcnt":196,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-931-6901","stddate":"2019-05-31"},
    {"restarea":"대천(서울)","highwayno":15,"highwayname":"서해안선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":49169,"parkingcnt":234,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-931-6801","stddate":"2019-05-31"},
    {"restarea":"덕유산(통영)","highwayno":35,"highwayname":"중부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":47737,"parkingcnt":206,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"063-353-5100","stddate":"2019-05-31"},
    {"restarea":"덕유산(대전)","highwayno":35,"highwayname":"중부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":43941,"parkingcnt":193,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"063-353-4200","stddate":"2019-05-31"},
    {"restarea":"덕평","highwayno":50,"highwayname":"영동선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":182761,"parkingcnt":670,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-645-0001","stddate":"2019-05-31"},
    {"restarea":"동명(부산)","highwayno":55,"highwayname":"중앙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":28095,"parkingcnt":235,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-977-6921","stddate":"2019-05-31"},
    {"restarea":"동명(춘천)","highwayno":55,"highwayname":"중앙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":28096,"parkingcnt":194,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-977-6901","stddate":"2019-05-31"},
    {"restarea":"동해(삼척)","highwayno":65,"highwayname":"동해선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":39724,"parkingcnt":86,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"033-534-6631","stddate":"2019-05-31"},
    {"restarea":"마장(복합)","highwayno":35,"highwayname":"중부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":103000,"parkingcnt":620,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-630-0001","stddate":"2019-05-31"},
    {"restarea":"망향(부산)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":34779,"parkingcnt":332,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-557-4000","stddate":"2019-05-31"},
    {"restarea":"매송(목포)","highwayno":15,"highwayname":"서해안선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":80395,"parkingcnt":394,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"031-296-1501","stddate":"2019-05-31"},
    {"restarea":"매송(서울)","highwayno":15,"highwayname":"서해안선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":87552,"parkingcnt":396,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"031-295-1501","stddate":"2019-05-31"},
    {"restarea":"목감(서울)","highwayno":15,"highwayname":"서해안선","restkind":"간이휴게소","opentime":"0:00","closetime":"23:59","area":19800,"parkingcnt":85,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"N","tel":"031-411-0590","stddate":"2019-05-31"},
    {"restarea":"문경(창원)","highwayno":45,"highwayname":"중부내륙선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":74440,"parkingcnt":146,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-554-1660","stddate":"2019-05-31"},
    {"restarea":"문경(양평)","highwayno":45,"highwayname":"중부내륙선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":58347,"parkingcnt":177,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-554-1610","stddate":"2019-05-31"},
    {"restarea":"문막(강릉)","highwayno":50,"highwayname":"영동선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":42780,"parkingcnt":182,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"033-731-8481","stddate":"2019-05-31"},
    {"restarea":"문막(인천)","highwayno":50,"highwayname":"영동선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":18397,"parkingcnt":164,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"033-747-8162","stddate":"2019-05-31"},
    {"restarea":"문산(순천)","highwayno":10,"highwayname":"남해선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":52200,"parkingcnt":298,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"055-761-2820","stddate":"2019-05-31"},
    {"restarea":"백양사(순천)","highwayno":25,"highwayname":"호남선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":31030,"parkingcnt":70,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"061-394-9990","stddate":"2019-05-31"},
    {"restarea":"백양사(천안)","highwayno":25,"highwayname":"호남선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":29681,"parkingcnt":70,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"061-394-5177","stddate":"2019-05-31"},
    {"restarea":"벌곡(논산)","highwayno":251,"highwayname":"호남지선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":27840,"parkingcnt":141,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-732-7694","stddate":"2019-05-31"},
    {"restarea":"벌곡(대전)","highwayno":251,"highwayname":"호남지선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":24628,"parkingcnt":171,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-734-5250","stddate":"2019-05-31"},
    {"restarea":"보성녹차(순천)","highwayno":10,"highwayname":"남해선","restkind":"간이휴게소","opentime":"0:00","closetime":"23:59","area":27411,"parkingcnt":85,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"070-4325-8808","stddate":"2019-05-31"},
    {"restarea":"보성녹차(영암)","highwayno":10,"highwayname":"남해선","restkind":"간이휴게소","opentime":"0:00","closetime":"23:59","area":41433,"parkingcnt":71,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"070-4325-8801","stddate":"2019-05-31"},
    {"restarea":"부여백제(공주)","highwayno":151,"highwayname":"서천공주선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":71199,"parkingcnt":95,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-833-5400","stddate":"2019-05-31"},
    {"restarea":"부여백제(서천)","highwayno":151,"highwayname":"서천공주선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":72611,"parkingcnt":99,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-834-5600","stddate":"2019-05-31"},
    {"restarea":"사천(부산)","highwayno":10,"highwayname":"남해선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":21205,"parkingcnt":134,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"055-854-3134","stddate":"2019-05-31"},
    {"restarea":"사천(순천)","highwayno":10,"highwayname":"남해선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":30117,"parkingcnt":131,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"055-854-3547","stddate":"2019-05-31"},
    {"restarea":"산청(통영)","highwayno":35,"highwayname":"중부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":26830,"parkingcnt":104,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"055-973-9036","stddate":"2019-05-31"},
    {"restarea":"산청(대전)","highwayno":35,"highwayname":"중부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":30853,"parkingcnt":139,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"055-973-5970","stddate":"2019-05-31"},
    {"restarea":"서산(목포)","highwayno":15,"highwayname":"서해안선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":61600,"parkingcnt":266,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-688-8814","stddate":"2019-05-31"},
    {"restarea":"서산(서울)","highwayno":15,"highwayname":"서해안선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":53378,"parkingcnt":213,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-688-7714","stddate":"2019-05-31"},
    {"restarea":"서여주(창원)","highwayno":45,"highwayname":"중부내륙","restkind":"간이휴게소","opentime":"0:00","closetime":"23:59","area":51095,"parkingcnt":65,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-884-9714","stddate":"2019-05-31"},
    {"restarea":"서여주(양평)","highwayno":45,"highwayname":"중부내륙","restkind":"간이휴게소","opentime":"0:00","closetime":"23:59","area":58111,"parkingcnt":70,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-885-9760","stddate":"2019-05-31"},
    {"restarea":"서울만남(부산)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":13845,"parkingcnt":262,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"02-578-3372","stddate":"2019-05-31"},
    {"restarea":"서천(목포)","highwayno":15,"highwayname":"서해안선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":57948,"parkingcnt":147,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-952-5757","stddate":"2019-05-31"},
    {"restarea":"서천(서울)","highwayno":15,"highwayname":"서해안선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":54919,"parkingcnt":206,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-952-9700","stddate":"2019-05-31"},
    {"restarea":"선산(양평)","highwayno":45,"highwayname":"중부내륙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":32460,"parkingcnt":274,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-482-6011","stddate":"2019-05-31"},
    {"restarea":"선산(창원)","highwayno":45,"highwayname":"중부내륙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":28943,"parkingcnt":297,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-482-6031","stddate":"2019-05-31"},
    {"restarea":"섬진강(부산)","highwayno":10,"highwayname":"남해선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":18130,"parkingcnt":195,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"061-772-7986","stddate":"2019-05-31"},
    {"restarea":"섬진강(순천)","highwayno":10,"highwayname":"남해선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":15454,"parkingcnt":184,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"061-772-7993","stddate":"2019-05-31"},
    {"restarea":"성주(양평)","highwayno":45,"highwayname":"중부내륙선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":38848,"parkingcnt":180,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"054-933-0800","stddate":"2019-05-31"},
    {"restarea":"성주(창원)","highwayno":45,"highwayname":"중부내륙선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":38631,"parkingcnt":180,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"054-932-0800","stddate":"2019-05-31"},
    {"restarea":"속리산(청주)","highwayno":30,"highwayname":"당진영덕선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":53607,"parkingcnt":150,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-544-1466","stddate":"2019-05-31"},
    {"restarea":"순천(순천)","highwayno":25,"highwayname":"호남선","restkind":"간이휴게소","opentime":"0:00","closetime":"23:59","area":23306,"parkingcnt":42,"maintenance":"N","gasstation":"N","lpgstation":"Y","carchanging":"Y","tel":"061-755-4982","stddate":"2019-05-31"},
    {"restarea":"시흥하늘","highwayno":100,"highwayname":"서울외곽선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":16700,"parkingcnt":560,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-481-9758","stddate":"2019-05-31"},
    {"restarea":"신탄진(서울)","highwayno":1,"highwayname":"경부선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":63846,"parkingcnt":293,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"042-934-2442","stddate":"2019-05-31"},
    {"restarea":"안동(부산)","highwayno":55,"highwayname":"중앙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":42822,"parkingcnt":190,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-853-4370","stddate":"2019-05-31"},
    {"restarea":"안동(춘천)","highwayno":55,"highwayname":"중앙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":40874,"parkingcnt":254,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-853-4061","stddate":"2019-05-31"},
    {"restarea":"안성(부산)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":28974,"parkingcnt":479,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-655-0531","stddate":"2019-05-31"},
    {"restarea":"안성(서울)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":85692,"parkingcnt":385,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-611-5793","stddate":"2019-05-31"},
    {"restarea":"안성맞춤(제천)","highwayno":40,"highwayname":"평택제천선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":66492,"parkingcnt":148,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-674-4406","stddate":"2019-05-31"},
    {"restarea":"양산(서울)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":35779,"parkingcnt":207,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"055-384-0144","stddate":"2019-05-31"},
    {"restarea":"언양(서울)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":27816,"parkingcnt":170,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"052-263-6153","stddate":"2019-05-31"},
    {"restarea":"여산(순천)","highwayno":25,"highwayname":"호남선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":51744,"parkingcnt":2,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"063-836-5168","stddate":"2019-05-31"},
    {"restarea":"여산(천안)","highwayno":25,"highwayname":"호남선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":28050,"parkingcnt":184,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"N","tel":"063-836-5168","stddate":"2019-05-31"},
    {"restarea":"여주(강릉)","highwayno":50,"highwayname":"영동선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":52610,"parkingcnt":252,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-882-3120","stddate":"2019-05-31"},
    {"restarea":"여주(인천)","highwayno":50,"highwayname":"영동선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":47973,"parkingcnt":247,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-882-2900","stddate":"2019-05-31"},
    {"restarea":"영산(창원)","highwayno":451,"highwayname":"중부내륙지선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":20609,"parkingcnt":102,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"055-521-2978","stddate":"2019-05-31"},
    {"restarea":"영천(대구)","highwayno":20,"highwayname":"익산포항선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":80288,"parkingcnt":304,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-338-0037","stddate":"2019-05-31"},
    {"restarea":"영천(포항)","highwayno":20,"highwayname":"익산포항선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":74442,"parkingcnt":270,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-338-0062","stddate":"2019-05-31"},
    {"restarea":"예산(당진)","highwayno":30,"highwayname":"당진영덕선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":66423,"parkingcnt":150,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-335-0020","stddate":"2019-05-31"},
    {"restarea":"예산(대전)","highwayno":30,"highwayname":"당진영덕선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":62787,"parkingcnt":119,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-334-0094","stddate":"2019-05-31"},
    {"restarea":"안성맞춤(평택)","highwayno":40,"highwayname":"평택제천선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":59766,"parkingcnt":141,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-673-3822","stddate":"2019-05-31"},
    {"restarea":"오수(완주)","highwayno":27,"highwayname":"순천완주선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":44883,"parkingcnt":156,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"063-644-5115","stddate":"2019-05-31"},
    {"restarea":"오수(순천)","highwayno":27,"highwayname":"순천완주선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":57978,"parkingcnt":156,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"063-644-6116","stddate":"2019-05-31"},
    {"restarea":"오창(통영)","highwayno":35,"highwayname":"중부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":11001,"parkingcnt":49,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"043-217-1477","stddate":"2019-05-31"},
    {"restarea":"오창(하남)","highwayno":35,"highwayname":"중부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":16297,"parkingcnt":65,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"043-217-8303","stddate":"2019-05-31"},
    {"restarea":"옥계(속초)","highwayno":65,"highwayname":"동해선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":70390,"parkingcnt":230,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"033-534-1700","stddate":"2019-05-31"},
    {"restarea":"옥산(부산)","highwayno":1,"highwayname":"경부선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":33272,"parkingcnt":319,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-260-1053","stddate":"2019-05-31"},
    {"restarea":"옥천(만남)","highwayno":1,"highwayname":"경부선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":45218,"parkingcnt":169,"maintenance":"Y","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"043-732-0081","stddate":"2019-05-31"},
    {"restarea":"옥천(부산)","highwayno":1,"highwayname":"경부선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":43421,"parkingcnt":145,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-731-8521","stddate":"2019-05-31"},
    {"restarea":"옥천(서울)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":25278,"parkingcnt":126,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-731-8097","stddate":"2019-05-31"},
    {"restarea":"와촌(포항)","highwayno":20,"highwayname":"익산포항선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":41484,"parkingcnt":163,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"053-853-1002","stddate":"2019-05-31"},
    {"restarea":"외동(부산)","highwayno":65,"highwayname":"울산포항선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":27498,"parkingcnt":72,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"054-745-0637","stddate":"2019-05-31"},
    {"restarea":"외동(포항)","highwayno":65,"highwayname":"울산포항선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":29069,"parkingcnt":72,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"054-745-0631","stddate":"2019-05-31"},
    {"restarea":"용인(강릉)","highwayno":50,"highwayname":"영동선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":33223,"parkingcnt":286,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-339-3663","stddate":"2019-05-31"},
    {"restarea":"용인(인천)","highwayno":50,"highwayname":"영동선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":32862,"parkingcnt":163,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-339-3660","stddate":"2019-05-31"},
    {"restarea":"원주(부산)","highwayno":55,"highwayname":"중앙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":48897,"parkingcnt":173,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"033-731-4291","stddate":"2019-05-31"},
    {"restarea":"원주(춘천)","highwayno":55,"highwayname":"중앙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":42927,"parkingcnt":188,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"033-731-4291","stddate":"2019-05-31"},
    {"restarea":"음성(통영)","highwayno":35,"highwayname":"중부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":77783,"parkingcnt":361,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-878-6410","stddate":"2019-05-31"},
    {"restarea":"음성(하남)","highwayno":35,"highwayname":"중부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":43895,"parkingcnt":260,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-878-6403","stddate":"2019-05-31"},
    {"restarea":"의성(청주)","highwayno":30,"highwayname":"당진영덕선","restkind":"간이휴게소","opentime":"0:00","closetime":"23:59","area":16237,"parkingcnt":47,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-862-9076","stddate":"2019-05-31"},
    {"restarea":"이서(순천)","highwayno":25,"highwayname":"호남선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":29463,"parkingcnt":90,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"063-227-4114","stddate":"2019-05-31"},
    {"restarea":"이서(천안)","highwayno":25,"highwayname":"호남선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":27508,"parkingcnt":91,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"063-236-2592","stddate":"2019-05-31"},
    {"restarea":"이천(통영)","highwayno":35,"highwayname":"중부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":70002,"parkingcnt":128,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-637-0987","stddate":"2019-05-31"},
    {"restarea":"이천(하남)","highwayno":35,"highwayname":"중부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":82868,"parkingcnt":244,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-638-1117","stddate":"2019-05-31"},
    {"restarea":"인삼랜드(통영)","highwayno":35,"highwayname":"중부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":48351,"parkingcnt":237,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-751-2892","stddate":"2019-05-31"},
    {"restarea":"인삼랜드(대전)","highwayno":35,"highwayname":"중부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":40492,"parkingcnt":187,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-754-9200","stddate":"2019-05-31"},
    {"restarea":"입장(서울)","highwayno":1,"highwayname":"경부선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":81553,"parkingcnt":309,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-588-7868","stddate":"2019-05-31"},
    {"restarea":"장유(서부산)","highwayno":10,"highwayname":"남해선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":41925,"parkingcnt":107,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"055-313-2610","stddate":"2019-05-31"},
    {"restarea":"정읍(순천)","highwayno":25,"highwayname":"호남선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":40011,"parkingcnt":126,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"063-532-0510","stddate":"2019-05-31"},
    {"restarea":"정읍(천안)","highwayno":25,"highwayname":"호남선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":28126,"parkingcnt":174,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"063-532-2373","stddate":"2019-05-31"},
    {"restarea":"주암(순천)","highwayno":25,"highwayname":"호남선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":28705,"parkingcnt":95,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"061-754-4980","stddate":"2019-05-31"},
    {"restarea":"의성(영덕)","highwayno":30,"highwayname":"당진영덕선","restkind":"간이휴게소","opentime":"0:00","closetime":"23:59","area":19101,"parkingcnt":47,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-862-9252","stddate":"2019-05-31"},
    {"restarea":"주암(천안)","highwayno":25,"highwayname":"호남선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":25780,"parkingcnt":120,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"061-754-2432","stddate":"2019-05-31"},
    {"restarea":"죽암(부산)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":29312,"parkingcnt":175,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-269-0850","stddate":"2019-05-31"},
    {"restarea":"죽암(서울)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":18860,"parkingcnt":240,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-260-8035","stddate":"2019-05-31"},
    {"restarea":"죽전(서울)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":28982,"parkingcnt":186,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"031-262-3168","stddate":"2019-05-31"},
    {"restarea":"지리산(광주)","highwayno":12,"highwayname":"광주대구선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":40224,"parkingcnt":141,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"063-636-7195","stddate":"2019-05-31"},
    {"restarea":"지리산(대구)","highwayno":12,"highwayname":"광주대구선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":61516,"parkingcnt":104,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"063-636-7191","stddate":"2019-05-31"},
    {"restarea":"진안(익산)","highwayno":20,"highwayname":"익산포항선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":53532,"parkingcnt":118,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"063-432-1380","stddate":"2019-05-31"},
    {"restarea":"진안(장수)","highwayno":20,"highwayname":"익산포항선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":50251,"parkingcnt":138,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"063-432-6350","stddate":"2019-05-31"},
    {"restarea":"진영(부산)","highwayno":10,"highwayname":"남해선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":22194,"parkingcnt":233,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"055-342-3236","stddate":"2019-05-31"},
    {"restarea":"진영(순천)","highwayno":10,"highwayname":"남해선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":31124,"parkingcnt":188,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"055-342-3959","stddate":"2019-05-31"},
    {"restarea":"진주(부산)","highwayno":10,"highwayname":"남해선","restkind":"간이휴게소","opentime":"0:00","closetime":"23:59","area":93523,"parkingcnt":231,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"055-759-3205","stddate":"2019-05-31"},
    {"restarea":"천등산(제천)","highwayno":40,"highwayname":"평택제천선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":28016,"parkingcnt":69,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-844-2991","stddate":"2019-05-31"},
    {"restarea":"천등산(평택)","highwayno":40,"highwayname":"평택제천선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":16876,"parkingcnt":69,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"043-844-2930","stddate":"2019-05-31"},
    {"restarea":"천안(부산)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":17803,"parkingcnt":176,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-552-4560","stddate":"2019-05-31"},
    {"restarea":"천안(서울)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":26533,"parkingcnt":257,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-551-2480","stddate":"2019-05-31"},
    {"restarea":"청송(청주)","highwayno":30,"highwayname":"당진영덕선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":6014,"parkingcnt":51,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"N","tel":"054-872-5910","stddate":"2019-05-31"},
    {"restarea":"청송(영덕)","highwayno":30,"highwayname":"당진영덕선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":6394,"parkingcnt":51,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"N","tel":"054-872-9101","stddate":"2019-05-31"},
    {"restarea":"청주(서울)","highwayno":1,"highwayname":"경부선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":23402,"parkingcnt":287,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-237-1700","stddate":"2019-05-31"},
    {"restarea":"청통(대구)","highwayno":20,"highwayname":"익산포항선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":47354,"parkingcnt":150,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-337-5009","stddate":"2019-05-31"},
    {"restarea":"추풍령(서울)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":16546,"parkingcnt":176,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"N","tel":"054-439-3187","stddate":"2019-05-31"},
    {"restarea":"춘천(부산)","highwayno":55,"highwayname":"중앙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":46378,"parkingcnt":209,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"033-264-0500","stddate":"2019-05-31"},
    {"restarea":"충주(창원)","highwayno":45,"highwayname":"중부내륙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":70169,"parkingcnt":237,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-857-9339","stddate":"2019-05-31"},
    {"restarea":"충주(양평)","highwayno":45,"highwayname":"중부내륙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":63390,"parkingcnt":294,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-857-9229","stddate":"2019-05-31"},
    {"restarea":"치악(부산)","highwayno":55,"highwayname":"중앙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":45696,"parkingcnt":156,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"033-762-9234","stddate":"2019-05-31"},
    {"restarea":"치악(춘천)","highwayno":55,"highwayname":"중앙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":61992,"parkingcnt":136,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"033-762-8030","stddate":"2019-05-31"},
    {"restarea":"칠곡(부산)","highwayno":1,"highwayname":"경부선","restkind":"화물차휴게소","opentime":"0:00","closetime":"23:59","area":29675,"parkingcnt":300,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-975-2277","stddate":"2019-05-31"},
    {"restarea":"칠곡(서울)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":45558,"parkingcnt":257,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-975-1883","stddate":"2019-05-31"},
    {"restarea":"칠서(양평)","highwayno":45,"highwayname":"중부내륙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":22467,"parkingcnt":108,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"055-587-9656","stddate":"2019-05-31"},
    {"restarea":"통도사(부산)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":23752,"parkingcnt":117,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"055-383-6145","stddate":"2019-05-31"},
    {"restarea":"평사(부산)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":44617,"parkingcnt":187,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"053-852-8651","stddate":"2019-05-31"},
    {"restarea":"추풍령(부산)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":26457,"parkingcnt":237,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"N","tel":"054-430-2000","stddate":"2019-05-31"},
    {"restarea":"평창(강릉)","highwayno":50,"highwayname":"영동선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":24871,"parkingcnt":98,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"033-334-5100","stddate":"2019-05-31"},
    {"restarea":"평창(인천)","highwayno":50,"highwayname":"영동선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":25690,"parkingcnt":98,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"033-333-6131","stddate":"2019-05-31"},
    {"restarea":"하남만남(통영)","highwayno":35,"highwayname":"중부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":29882,"parkingcnt":721,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-791-4200","stddate":"2019-05-31"},
    {"restarea":"함안(부산)","highwayno":10,"highwayname":"남해선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":63813,"parkingcnt":274,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"N","tel":"055-582-2191","stddate":"2019-05-31"},
    {"restarea":"함안(순천)","highwayno":10,"highwayname":"남해선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":61050,"parkingcnt":263,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"N","tel":"055-582-5470","stddate":"2019-05-31"},
    {"restarea":"함양(통영)","highwayno":35,"highwayname":"중부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":29993,"parkingcnt":107,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"055-963-8001","stddate":"2019-05-31"},
    {"restarea":"함양(대전)","highwayno":35,"highwayname":"중부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":20787,"parkingcnt":101,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"055-963-8001","stddate":"2019-05-31"},
    {"restarea":"함평나비(광주)","highwayno":12,"highwayname":"무안광주선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":50294,"parkingcnt":105,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"061-324-8840","stddate":"2019-05-31"},
    {"restarea":"함평나비(무안)","highwayno":12,"highwayname":"무안광주선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":47179,"parkingcnt":105,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"061-324-8858","stddate":"2019-05-31"},
    {"restarea":"함평천지(목포)","highwayno":15,"highwayname":"서해안선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":26068,"parkingcnt":93,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"061-323-3751","stddate":"2019-05-31"},
    {"restarea":"함평천지(서울)","highwayno":15,"highwayname":"서해안선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":46847,"parkingcnt":118,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"061-323-3641","stddate":"2019-05-31"},
    {"restarea":"행담도","highwayno":15,"highwayname":"서해안선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":202440,"parkingcnt":1729,"maintenance":"Y","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-358-0702","stddate":"2019-05-31"},
    {"restarea":"현풍(대구)","highwayno":45,"highwayname":"중부내륙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":21068,"parkingcnt":96,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"053-615-0337","stddate":"2019-05-31"},
    {"restarea":"현풍(창원)","highwayno":451,"highwayname":"중부내륙지선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":47569,"parkingcnt":87,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"053-614-2436","stddate":"2019-05-31"},
    {"restarea":"홍성(목포)","highwayno":15,"highwayname":"서해안선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":54324,"parkingcnt":214,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-642-1151","stddate":"2019-05-31"},
    {"restarea":"홍성(서울)","highwayno":15,"highwayname":"서해안선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":49784,"parkingcnt":214,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"041-642-1172","stddate":"2019-05-31"},
    {"restarea":"홍천(서울)","highwayno":60,"highwayname":"서울양양선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":42203,"parkingcnt":188,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"033-436-9000","stddate":"2019-05-31"},
    {"restarea":"홍천(양양)","highwayno":60,"highwayname":"서울양양선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":42378,"parkingcnt":160,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"033-436-3000","stddate":"2019-05-31"},
    {"restarea":"홍천강(춘천)","highwayno":55,"highwayname":"중앙선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":23928,"parkingcnt":142,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"033-435-1201","stddate":"2019-05-31"},
    {"restarea":"화서(영덕)","highwayno":30,"highwayname":"당진영덕선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":64043,"parkingcnt":150,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"054-531-1982","stddate":"2019-05-31"},
    {"restarea":"화성(목포)","highwayno":15,"highwayname":"서해안선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":81664,"parkingcnt":623,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-353-8140","stddate":"2019-05-31"},
    {"restarea":"화성(서울)","highwayno":15,"highwayname":"서해안선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":55517,"parkingcnt":414,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"031-353-8143","stddate":"2019-05-31"},
    {"restarea":"황간(순천)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":43386,"parkingcnt":133,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"043-742-5805","stddate":"2019-05-31"},
    {"restarea":"황간(서울)","highwayno":1,"highwayname":"경부선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":32652,"parkingcnt":104,"maintenance":"N","gasstation":"Y","lpgstation":"N","carchanging":"Y","tel":"043-742-7633","stddate":"2019-05-31"},
    {"restarea":"황전(순천)","highwayno":27,"highwayname":"순천완주선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":26097,"parkingcnt":98,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"061-782-1135","stddate":"2019-05-31"},
    {"restarea":"황전(완주)","highwayno":27,"highwayname":"순천완주선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":34013,"parkingcnt":99,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"061-782-1154","stddate":"2019-05-31"},
    {"restarea":"횡성(강릉)","highwayno":50,"highwayname":"영동선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":47509,"parkingcnt":235,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"033-342-4231","stddate":"2019-05-31"},
    {"restarea":"횡성(인천)","highwayno":50,"highwayname":"영동선","restkind":"일반휴게소","opentime":"0:00","closetime":"23:59","area":28345,"parkingcnt":151,"maintenance":"N","gasstation":"Y","lpgstation":"Y","carchanging":"Y","tel":"033-344-3832","stddate":"2019-05-31"}
];