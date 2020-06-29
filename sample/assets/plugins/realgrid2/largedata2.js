var ds, gridContainer, grid, form;
var rows;
var progressCount = 10000;
var checkShowProgress = false;

var countries = ["국산", "유럽", "중국", "일본", "미국"];
var products = ["현대", "기아", "르노삼성", "쉐보레", "벤츠", "BMW", "폭스바겐", "재규어", "핸드로버", "포드", "쌍용", "아우디", "푸조"];
var quantities = [10, 25, 30, 44, 97, 100, 150, 200, 220, 340];
var models = ["소형", "준형", "준중형", "중형", "대형", "소형SUV", "대형SUV", "트럭"];
var colors = ["블루", "미드나이트 블랙", "슬릭 실버", "폴리시드 메탈", "우유니 화이트", "사하라 베이지", "블레이징 레드", "포르토 레드"];
var names = ["임걱정", "홍길동", "김은미", "박기수", "현철", "이승기", "손예원"];

// count 수만큼 랜덤 데이터 생성한다.
function createRandomData(ds, count) {  	
	var data = [];
	var country, product, quantity, color, name, date, price;

	for (var i = 0; i < count; i++) {
		country = countries[Math.floor(Math.random() * countries.length)],
		product = products[Math.floor(Math.random() * products.length)],
    quantity = quantities[Math.floor(Math.random() * quantities.length)],
    model = models[Math.floor(Math.random() * models.length)],
		color = colors[Math.floor(Math.random() * colors.length)],
		name = names[Math.floor(Math.random() * names.length)],
		price = Math.floor(Math.random() * 1000000);

		data.push({
			id: i + 1,
			name : name, 
			country : country,
      product : product,
      model: model,
			quantity : quantity,
			color : color,
			price : price
		});
		
		// 일부러 Null, undefined 값 삽입하기 위함.
		if(Math.random() < 0.5) {
			delete data[data.length-1]["country"];
		}
		if(Math.random() < 0.5) {
			data[data.length-1]["price"] = null;
		}
		if(Math.random() < 0.5) {
			data[data.length-1]["quantity"] = null;
    }
	} 

  // grid 에 데이터 삽입합니다.
  ds.setRows(data);
};

function progress(start, pagecount, done) {
  createRandomData(ds, pagecount);
  grid._view.setProgress(0, progressCount, start + pagecount);
  if (start + pagecount < progressCount) {
    setTimeout(function () {
      progress(start + pagecount, pagecount, done);
    });
  } else {
    done();
  }
};

function largeLoadData(grid, ds, count, pageCount) {  
  var now = new Date();
  
  grid.beginUpdate();
  ds.setRows({}); 

  progressCount = count;
  
  grid._view.showProgress();
  grid._view.setProgress(0, progressCount, 0);
  progress(1, pageCount, function () {
    grid._view.closeProgress();
    var endDate = new Date();
    var dataTime = endDate.getTime() - now.getTime();
    document.getElementById("ellapse").innerHTML = progressCount + "개 출력 소요 시간 : " + dataTime + " ms";         
    grid.endUpdate();
  });
};

function largeLoadData2(grid, ds, count) {  
  var now = new Date();
  
  ds.setRows({}); 
  createRandomData(ds, count);

  var endDate = new Date();
  var dataTime = endDate.getTime() - now.getTime();
  document.getElementById("ellapse").innerHTML = progressCount + "개 출력 소요 시간 : " + dataTime + " ms";  
};

function createGrid(container) {
    ds = new RealGrid.LocalDataProvider();
    grid = new RealGrid.GridView(container);
    grid.setDataSource(ds);
    grid.rowIndicator.width = 100;

    // rgutils.js 유틸 함수를 사용해 필드와 컬럼을 함께 생성할 수 있다.
    setFieldsNColumns(ds, grid,
      [
      {"name": "id", "width": "100"}, 
      {"name": "name", "width": "100"},
      {"name": "country", "width": "100"}, 
      {"name": "product","width": "100"},
      {"name": "model","width": "100"},
      {"name": "color","width": "100"},
      {"name": "quantity", "width": "100"},
      {"name": "price", "width": "100"}
    ]
    );

    grid.stateBar.visible = false;
    grid.setRowStyleCallback(function (grid, item) {
        if (item.index % 2 == 0) {
            return "alternate-row";
        }
    });
    
    grid.onContextMenuPopup = function (grid, x, y, elementName) {
      // rgutils.js 기본 팝업 메뉴 생성
      setContextMenu(grid);
    };
      // rgutils.js 기본 팝업 메뉴 실행
    grid.onContextMenuItemClicked = onContextMenuClick;

    largeLoadData2(grid, ds, 10000);
};

function setActions(actionContainer) {
  createCheckBox(actionContainer, "Show Progressbar", function (e) {
    checkShowProgress = e.currentTarget.checked;;
  }, false);

  createButton(actionContainer, "30만건", function (e) {
    if(checkShowProgress)
      largeLoadData(grid, ds, 300000, 3000);
    else
      largeLoadData2(grid, ds, 300000);
  });
  createButton(actionContainer, "50만건", function (e) {
    if(checkShowProgress)
      largeLoadData(grid, ds, 500000, 5000);
    else
      largeLoadData2(grid, ds, 500000);
  });
  createButton(actionContainer, "100만건", function (e) {
    if(checkShowProgress)
      largeLoadData(grid, ds, 1000000, 20000);
    else
      largeLoadData2(grid, ds, 1000000);
  });
  createButton(actionContainer, "Clear Data", function (e) {
    ds.setRows({});    
  });
  createButton(actionContainer, "Show Loading", function (e) {
    grid._view.showLoading();
  });
  createButton(actionContainer, "Hide Loading", function (e) {
      grid._view.hideLoading();
  });
}  


