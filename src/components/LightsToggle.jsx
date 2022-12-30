import React from 'react'
import {useState} from 'react'
import ReactSwitch from 'react-switch'

let deviceStatus;
let cnt= false;
export default function LightsToggle(props) {


    const [checkedLights, setLightsChecked] = useState(cnt);

    let indexNum = props.indexNum
    
    const handleChangeTv = val => {
        if(checkedLights === false){
          deviceStatus = 'אורות דלוקים'
          setLightsChecked(val)
        }
        else if(checkedLights === true){
          deviceStatus = 'אורות כבויים'
          setLightsChecked(val)
        }
      }

      const showPrLights=()=>{
        if(deviceStatus === 'אורות דלוקים'){
            cnt = true
        }
        else{
            cnt =false
        }
    }


  return (
    <div className='LightsMain'>
                <div>
        <button className='removeLights' onClick={props.changeOtherSideLights}> X הסר מנורה</button>
<br />

    <p className='LightsPCss'>מצב מנורה : {deviceStatus}</p><br />
    <div className='LightsSwitch'>
    <ReactSwitch  
    className='reactSwitch'

    checked={checkedLights}
    onChange={handleChangeTv} />
    <p className='svgP'><svg className='svgPIcon' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gold" class="bi bi-lightbulb" viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
</svg></p>
    </div>

    </div>

    {showPrLights()}
    </div>
  )
}
