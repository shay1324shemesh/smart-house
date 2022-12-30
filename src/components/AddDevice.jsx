import React from 'react'
import { Link } from 'react-router-dom'
import TvToggle from './TvToggle'
export default function AddDevice(props) {
    let indexNum = props.index
  return (
    <div className='TvMain'>
        <TvToggle changeOtherSide={props.changeOtherSide} roomArr={props.roomArr} resetAddDeviceTv={props.resetAddDeviceTv}  newAddDeviceTv={props.newAddDeviceTv} index={indexNum}/>
    </div>
  )
}
