'use client';

import RealGrid from 'realgrid'
import '../../../node_modules/realgrid/dist/realgrid-style.css'
import { useEffect, useRef } from 'react'
import { RGDataColumn, RealGridReact } from '@realgrid/realgrid-react'

RealGrid.setLicenseKey(
    'upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYm9cY8amGDkiMnVeQKUHJDjW2y71jtk+wte7L7C4dZzvC/YywSuOuJaA601fFcMg7s='
  );

const RealGridComponent = () => {
    const grid = useRef(null)

    useEffect(() => {
        if (grid.current) {
          const gridView = (grid.current as RealGridReact).gridView;
          gridView.checkBar.visible = false;
          gridView.header.height = 36;
          gridView.displayOptions.rowHeight = 36;
        }
      }, [grid]);
    
    const data = [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 27 },
        { id: 3, name: 'Alice Johnson', age: 35 },
        { id: 4, name: 'Bob Brown', age: 22 },
        { id: 5, name: 'Charlie Davis', age: 28 },
        { id: 6, name: 'Dana White', age: 33 }
    ]

    return (
        <>
            <div style={{ width: '100%', height: '550px' }}>
                <RealGridReact ref={grid} rows={data} autoGenerateField={true}>
                    <RGDataColumn name='id' fieldName='id' />
                    <RGDataColumn name='name' fieldName='name' />
                    <RGDataColumn name='age' fieldName='age' />
                </RealGridReact>
            </div>
        </>
    )
}

export default RealGridComponent

