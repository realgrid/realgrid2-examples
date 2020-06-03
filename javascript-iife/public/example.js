document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('realgrid');
  const ds = new RealGrid.LocalDataProvider(false);
  const grid = new RealGrid.GridView(container);
  grid.setDataSource(ds);
});