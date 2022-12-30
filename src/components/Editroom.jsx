import React from 'react'
import { Link } from 'react-router-dom';



export default function Editroom(props) {






  // let name = props.room.roomName;
  // let style = props.room.roomScale;
  // let color = props.room.roomColor;
  // const saveRoom=()=>{
  //   const newRoom={
  //      name : name,
  //      style : style,
  //      color : color,
  //   }
  //   window.localStorage.setItem(name,JSON.stringify(newRoom));
  //   console.log(newRoom);
  // }


  return (
    <div className='editRoomBackround'>
     <div className='editMain'>
      <p className='editHeader'> עצב את החדר שלך </p><br />
      <input type="text"  placeholder='שם החדר' className='RoomName' onChange={props.changeRoomName}/>
      <select className='roomScaleSelect' id="roomScaleSelect" onChange={props.changeRoomScale}>
        <option value="kitchen">מטבח</option>
        <option value="LivingRoom">סלון</option>
        <option value="sleeproom">חדר שינה</option>
        <option value="bethroom" >אמבטיה</option>
        </select>



      <select className="colorSelect" id="colorSelect" onChange={props.changeRoomColor} defaultValue='red'>
        <option>בחר צבע</option>
        <option value='Red'>אדום</option>
        <option value='Black'>שחור</option>
        <option value='White'>לבן</option>
        <option value='Green'>ירוק</option>
        <option value='Yellow'>צהוב</option>
        <option value='Pink'>ורוד</option>
        <option value='Blue'>כחול</option>
        <option value='Dark Grey'>אפור כהה</option>
        <option value='Grey'>אפור</option>
        <option value='Orange'>כתום</option>
        <option value='Purple'>סגול</option>
      </select>
      <br /> <br /><br /><br />




      <br />

      <Link to='/rooms'>
      <button onClick={props.updateRoomArr} className='saveRoomClass'>שמור חדר</button>
      </Link>
        </div>
    </div>
    
  )
}



