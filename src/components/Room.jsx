import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddDevice from './AddDevice';
import LightsToggle from './LightsToggle';
import PowerToggle from './PowerToggle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBath} from '@fortawesome/free-solid-svg-icons'
import {faBed} from '@fortawesome/free-solid-svg-icons'
import {faKitchenSet, faHouse} from '@fortawesome/free-solid-svg-icons'
import AirToggle from './AirToggle'

let eNum;

export default function Room(props) {

  console.log(props.roomArr);
  let indexNum = props.roomIndex.ind

const [example,setExample]=useState(false)
const changeExample=()=>{
  setExample(!example);
}
  const[mainFlag,setMainFlag]=useState(false)

  const changeMainFlag=()=>{
    setMainFlag(!mainFlag)
  }


  let chooseState=(e)=>{
    eNum = e.target.value
  }

  // const showArrRoom=()=>{
  //   if(deviceFlag == true){
  //     roomClickArr = 
  //     return <AddDevice changeOtherSide={changeOtherSide}/>
  //   }
  // }

 
 const showAddRow=()=>{
  if(mainFlag === true){
    return<div className='addDeviceDivClass'><br />
      <button className='addDeviceButClass' onClick={changeDeviceFlag}>+ הוסף מכשיר </button><br />
      <select className='DeviceSelectBut' onChange={chooseState}>
      <option value='none'>- בחר סוג חדר -</option>
      <option value='Tv'>מערכת סטריאו</option>
      <option value='lights'>מנורה</option>
      <option value='power'>דוד</option>
      <option value='air'>מזגן</option>
      </select>
      <br /></div>
  }
 }
 let changeDeviceFlag=()=>{
  if(eNum === 'Tv'){
    props.roomArr[indexNum].roomDeviceTv = 'Tv Added'
    changeMainFlag()
    eNum='';
  }
   if(eNum === 'power'){
    props.roomArr[indexNum].roomDevicePower = 'Power Added'
    changeMainFlag()
    eNum='';

  }
   if(eNum === 'lights'){
    props.roomArr[indexNum].roomDeviceLights = 'Lights Added'
    changeMainFlag()

    eNum='';
  }
  if(eNum === 'air'){
    props.roomArr[indexNum].roomDeviceAir = 'Air Added'
    changeMainFlag()
    eNum ='';
  }
  if(eNum === null){
    return null
  }
}

 const changeOtherSideLights=()=>{
  props.roomArr[indexNum].roomDeviceLights = ''
  changeExample()
 }
 const changeOtherSidePower=()=>{
  props.roomArr[indexNum].roomDevicePower = ''
  changeExample()

 }
 const changeOtherSideAir=()=>{
  props.roomArr[indexNum].roomDeviceAir = ''
  changeExample()

 }

 const changeOtherSide=()=>{
  props.roomArr[indexNum].roomDeviceTv = ''
  changeExample()
 }

 const showDeviceAdd=()=>{

  if(props.roomArr[indexNum].roomDeviceTv === 'Tv Added'){
    return <AddDevice changeOtherSide={changeOtherSide}/>
  }
  else{
    return null
  }
 }
 const showDeviceAddAir=()=>{

  if(props.roomArr[indexNum].roomDeviceAir === 'Air Added'){
    return <AirToggle changeOtherSideAir={changeOtherSideAir}/>
  }
  else{
    return null
  }
 }
 const showLightsDeviceAdd=()=>{

  if(props.roomArr[indexNum].roomDeviceLights === 'Lights Added'){
    return <LightsToggle indexNum={indexNum} changeOtherSideLights={changeOtherSideLights}/> 
    
  }
  else{
    return null
  }
 }
 const showPowerDeviceAdd=()=>{

  if(props.roomArr[indexNum].roomDevicePower === 'Power Added' ){
    return <PowerToggle roomArr={props.roomArr} indexNum={indexNum} changeOtherSidePower={changeOtherSidePower}/>
  }
  else{
    return null
  }
 }


  console.log(props.roomArr);
      

  //  let showDevicesButtoms=()=>{
  //   return <AddDevice roomArr={props.roomArr} index={indexNum}/>
  // }


  // const resetAddDeviceTv=()=>{
  //   props.roomArr[indexNum].roomDeviceTv = ''
  // }

  // const newAddDeviceTv=(val)=>{
  //   props.roomArr[indexNum].roomDeviceTv = 'Tv'
  // }


  


  // let power = props.roomArr[indexNum].roomDevicePower
  // let tv = props.roomArr[indexNum].roomDeviceTv
  // let air = props.roomArr[indexNum].roomDeviceAir
  // let lights = props.roomArr[indexNum].roomDeviceLights
  // const devices =()=>{
  //   let arr=[[lights],[power],[tv],[air]]
  //   arr.map(()=>{
  //     return <div>
  //       <p>
  //         {arr}
  //       </p>
  //     </div>
  //   })
  // }
  let roomStyle = props.roomArr[indexNum].roomScale

  let name = props.roomArr[indexNum].roomName

  let colorProp = props.roomArr[indexNum].roomColor



  let showColor=()=>{
    return <h1 className='colorH1' >{<svg className='colorH1Svg' xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill={colorProp} class="bi bi-paint-bucket" viewBox="0 0 16 16">
    <path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z"/>
  </svg>}</h1>
  } 
  let showStyleIcon=()=>{
    if(roomStyle === 'bethroom'){
      return <FontAwesomeIcon icon={faBath} />
    }
    if(roomStyle === 'LivingRoom'){
      return <FontAwesomeIcon icon={faHouse}/>
    }
    if(roomStyle === 'kitchen'){
      return <FontAwesomeIcon icon={faKitchenSet}/>
    }
    else if(roomStyle === 'sleeproom'){
      return <FontAwesomeIcon icon={faBed} color={colorProp} />
    }
    else{
      return null
    }
    }
  let showNameIcon=()=>{
    return <h1 className='showNameIcon'><svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
  </svg></h1>
  } 
  let showStyle=()=>{
    let newStyle;
    if(roomStyle === 'LivingRoom'){
      newStyle ='סלון' 
    }
    if(roomStyle === 'bethroom'){
      newStyle = 'אמבטיה'
    }
    if(roomStyle === 'kitchen'){
      newStyle = 'מטבח'
    }
    if(roomStyle === 'sleeproom'){
      newStyle = 'חדר שינה'
    }
    return <h1 className='roomStyleCss'>{newStyle}</h1>
  } 
  let showColorName=()=>{
    let newColor;
    if(colorProp === 'Red'){
      newColor ='אדום' 
    }
    if(colorProp === 'Black'){
      newColor = 'שחור'
    }
    if(colorProp === 'White'){
      newColor = 'לבן'
    }
    if(colorProp === 'Grey'){
      newColor ='אפור' 
    }
    if(colorProp === 'Yellow'){
      newColor = 'צהוב'
    }
    if(colorProp === 'Orange'){
      newColor = 'כתום'
    }
    if(colorProp === 'Pink'){
      newColor ='ורוד' 
    }
    if(colorProp === 'Dark Grey'){
      newColor = 'אפור כהה'
    }
    if(colorProp === 'Blue'){
      newColor = 'כחול'
    }
    if(colorProp === 'Purple'){
      newColor = 'סגול'
    }    
    if(colorProp === 'Green'){
      newColor = 'ירוק'
    }   
    return <p className='showColorName' style={{color:colorProp}}>{newColor}</p>
  }
  let showName=()=>{
    return <p className='showName'>{name}</p>
  }
  const showLastButtomIcon=()=>{
  
   return <Link style={{textDecoration: 'none'}} to='/rooms'><button className='roomButBack'>    
    <svg className='roomBackIcon' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-reply-fill" viewBox="0 0 16 16">
  <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
</svg>
<p className='backHomeP'>חזרה למסך הבית</p>
  </button></Link>
}

const showH2Devices=()=>{
  if(props.roomArr[indexNum].roomDeviceLights === 'Lights Added' || 
  props.roomArr[indexNum].roomDevicePower === 'Power Added' ||
  props.roomArr[indexNum].roomDeviceTv === 'Tv Added')
  {
    return <h2 className='roomDevicesHeader'>המכשירים שהוספת לחדר</h2>
  }
}

  // const checkAndShowTv=()=>{
  //   if()
  // }


  // const AddChooseState=()=>{
  //   if(eNum === 'Tv'){
  //     newAddDeviceTv('Tv')

  //   }    
  //   else{
  //     return null
  //   }
  // }

  return (

    <div className='roomMainBackground'>
              <h1 className='mainRoomH1'>ברוכים הבאים לחדר שלכם</h1>
      <div className='mainControll'>
      <div className='mainControllClass'>
      <div className='controllNameCladd'>
        <p className='roomNameClass'>{showNameIcon()}{showName()}: שם החדר <li className='nameLi'></li></p>
        </div>
        <div className='controllColorClass'>
        <p className='roomColorClass'>{showColorName()}{showColor()}: צבע החדר  <li className='colorLi'></li></p>
        </div>
        <div className='controllKindClass'>
        <p className='roomKindClass'>{showStyleIcon()}{showStyle()} : סוג החדר  <li className='kindLi'></li></p>
        </div>
      </div>
      <div>
        <p>{showAddRow()}</p>
        </div>
      <div className='ButtomsDivClass'>
        <button onClick={changeMainFlag} className='AddBut'>הוסף</button>
        <p className='showButtomP'>{showLastButtomIcon()} </p>        
        </div>
      </div>


<br />
        <div className='showH2DevicesControll'>
          {showH2Devices()}
        </div>
        <div className='controllAll'>
        {showDeviceAdd()}
  {showLightsDeviceAdd()}
  {showPowerDeviceAdd()}
  {showDeviceAddAir()}
        </div>
        <br />

        <br />
        <br />

        <br />

        
        

    </div>
  )
}


