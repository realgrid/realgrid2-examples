import React, { Component } from 'react';
import { GridView, LocalDataProvider } from 'realgrid';
import { columns, fields, rows } from './realgrid-data';
import './App.css';

class App extends Component {   
  loadDataClick = () => {
  this.dataProvider.setRows(rows);
  }

  componentDidMount() {
    this.dataProvider = new LocalDataProvider(false);
    this.gridView = new GridView("realgrid");
    this.gridView.setDataSource(this.dataProvider);

    this.dataProvider.setFields(fields);
    this.gridView.setColumns(columns);
  }

  render() {
    
    return(
      <div className="App">
        <h2>RealGrid2 React Sample</h2>
        <div id='realgrid'></div>
        <button id='loaddata' onClick={this.loadDataClick}>Load Data!</button>
      </div>
    ) 
  }
}

export default App;
