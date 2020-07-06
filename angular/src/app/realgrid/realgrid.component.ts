import { Component, OnInit } from '@angular/core';
import { GridView, LocalDataProvider } from 'realgrid';
import { columns, rows, fields } from './realgrid-data';

let gridView: GridView, dataProvider: LocalDataProvider;

@Component({
  selector: 'app-realgrid',
  templateUrl: './realgrid.component.html',
  styleUrls: ['./realgrid.component.css']
})

export class RealgridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

document.addEventListener('DOMContentLoaded', function () {
  dataProvider = new LocalDataProvider(false);
  gridView = new GridView("realgrid");
  gridView.setDataSource(dataProvider);

  dataProvider.setFields(fields);
  gridView.setColumns(columns);

  const button = document.getElementById('loaddata');

  if (button) {
      button.onclick = loadData;
  }
});

const loadData = function() {
  dataProvider.setRows(rows);
}