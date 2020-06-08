import {GridView, LocalDataProvider} from 'realgrid';
import { columns, rows, fields } from './data';

let grid: GridView, ds: LocalDataProvider;

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('realgrid') as HTMLDivElement;
    ds = new LocalDataProvider(false);
    grid = new GridView(container);
    grid.setDataSource(ds);

    grid.displayOptions.emptyMessage = 'There is no data...';

    const button = document.getElementById('loaddata');

    if (button) {
        button.onclick = loadData;
    }
});


const loadData = function() {
    ds.setFields(fields);
    grid.setColumns(columns);
    ds.setRows(rows);

    grid.header.height = 35;
    grid.displayOptions.rowHeight = 35;

    grid.header.showTooltip = true;

    grid.fixedOptions.colCount = 2;
}
