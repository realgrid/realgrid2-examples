'use client';

import RealGrid from 'realgrid'
import '../../../node_modules/realgrid/dist/realgrid-style.css'
import { useRef } from 'react'
import { RGDataColumn, RealGridReact } from '@realgrid/realgrid-react'

const RealGridComponent = () => {
    const grid = useRef(null)
    const data = [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 27 },
        { id: 3, name: 'Alice Johnson', age: 35 },
        { id: 4, name: 'Bob Brown', age: 22 },
        { id: 5, name: 'Charlie Davis', age: 28 },
        { id: 6, name: 'Dana White', age: 33 }
    ]
    RealGrid.setLicenseKey('Your LicenseKey')

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

