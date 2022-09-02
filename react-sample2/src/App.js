import './App.css'
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields, rows } from './realgrid-data'
import { useEffect, useState, useRef } from 'react'
import 'realgrid/dist/realgrid-style.css'

function App() {
  const [dataProvider, setDataProvider] = useState(null)
  const [gridView, setGridView] = useState(null)
  const realgridElement = useRef(null)

  useEffect(() => {
    const container = realgridElement.current
    const dp = new LocalDataProvider(true)
    const gv = new GridView(container)

    gv.setDataSource(dp)
    dp.setFields(fields)
    gv.setColumns(columns)
    dp.setRows(rows)

    setDataProvider(dp)
    setGridView(gv)

    return () => {
      dp.clearRows()
      gv.destroy()
      dp.destroy()
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
