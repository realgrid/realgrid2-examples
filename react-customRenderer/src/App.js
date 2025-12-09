import './App.css'
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields, rows } from './realgrid-data'
import { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client';
import 'realgrid/dist/realgrid-style.css'
 

export const SwitchToggle = ({text, dataRow, dataField, id, onChange, disabled, value}) => {
  return (
      <>
          <label className="switch">
              <input type="checkbox" data-row={dataRow} data-field={dataField} id={id} onChange={onChange} checked={value} />
              <span className="slider round"></span>
          </label>
      </>
  )
}

function App() {
  const realgridElement = useRef(null);
  const gridView = useRef(null);

  useEffect(() => {
    const container = realgridElement.current;
    const dp = new LocalDataProvider(true);
    const gv = gridView.current = new GridView(container);

    gv.setDataSource(dp);
    dp.setFields(fields);
    gv.setColumns(columns);
    dp.setRows(rows);
    gv.displayOptions.rowHeight = 40;

    gv.registerCustomRenderer("switch", {
        initContent(dom) {
            //@ts-ignore
            this._root = createRoot(dom);
        },
        clearContent(dom) {
            //@ts-ignore
            const root = this._root;
            root.unmount();
        },
        render(grid, model, w, h, info) {
            const root = this._root;
            const id = `id_check_${model.item.dataRow}`;
            root.render(<SwitchToggle id={id} dataRow={model.index.dataRow} 
                          dataField={model.index.column.fieldName} 
                          onChange={checkOnChange} 
                          disabled={false} text={""} 
                          value={model.value}></SwitchToggle>)
        },
        canClick(event) {
            return true;
        },
        click() {
            return {};
        }
    });   

    const checkOnChange = (e) => {
      const target = e.target;
      const dataRow = parseInt(target.getAttribute("data-row"));
      const dataField = target.getAttribute("data-field");
      const dp = gridView.current.getDataSource();
      dp.setValue(dataRow, dataField, target.checked);
    };


    return () => {
      dp.clearRows();
      gv.destroy();
      dp.destroy();
    }
  }, [])

  return (
    <div className='App'>
      <h2>RealGrid2 React Sample</h2>
      <div
        style={{ height: '500px', width: '100%' }}
        ref={realgridElement}></div>
    </div>
  )
}

export default App
