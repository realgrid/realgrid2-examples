import { LocalDataProvider, GridView } from 'realgrid';

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('realgrid');
  const ds = new LocalDataProvider(false);
  const grid = new GridView(container);
  grid.setDataSource(ds);
  console.log('hot2');
});