import React from 'react'
import './inter.css'

export default function inter(props) {
    console.log(props.color)
    const cl = props.color
    const bzm = props.bzm
    return (
        <div className="cl" >
            <h3 className={bzm}>Безлимитный {props.num}</h3>
            <div className={cl}><h4 className='f'>руб</h4><h2>{props.num}</h2><h4 className='f2'>/мес</h4></div>
            <h4 className='dd'>до {props.mBit} Мбит/сек</h4>
            <h3 className='dd'>Объем включенного</h3>
            <h3 className='dd'>трафика {props.ogr}</h3>
        </div>
    )


}