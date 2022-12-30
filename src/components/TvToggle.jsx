import React from 'react'
import ReactSwitch from 'react-switch';
import { useState } from 'react';


let deviceStatus ;

let cnt = false;

export default function TvToggle(props) {


    const [checked, setChecked] = useState(cnt);


    // const changeDeviceFlag=()=>{
    //     setDeviceFlag(true)
    //     showTv()
    //   }

    const handleChangeTv = val => {
        if(checked === false){
          deviceStatus = 'מערכת סטריאו דלוקה'
          setChecked(val)
        }
        else if(checked === true){
          deviceStatus = 'מערכת סטריאו כבויה'
          setChecked(val)
        }
      }

      const showPrTv=()=>{
        if(deviceStatus === 'מערכת סטריאו דלוקה'){
            cnt = true
        }
        else{
            cnt =false
        }
    }


    // const showTv=()=>{
    //     return <div>
    //     <p>deviceStatus : {deviceStatus}</p><br />
    //     <ReactSwitch  
    //     checked={checked}
    //     onChange={handleChangeTv} />
    //     </div>
    //   }
  return (
    <div>
        <div className='tvControll'>
        <button className='removeTv' onClick={props.changeOtherSide}> X הסר סטריאו</button>
<br />
    <p className='TvP'>מצב סטריאו : {deviceStatus}</p><br />
    <div className='TvToggleSwitch'>
    <ReactSwitch  
    checked={checked}
    onChange={handleChangeTv} />
    <p className='svgTv'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-boombox-fill" viewBox="0 0 16 16">
  <path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v2H0V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0ZM2 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 3h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1ZM6 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm7 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm.5-1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
  <path d="M0 6h16v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V6Zm2 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm7 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"/>
</svg></p>
    </div>
    </div>

    {showPrTv()}
    </div>
    
  )
}
