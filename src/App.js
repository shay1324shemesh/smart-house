import {useState} from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Editroom from './components/Editroom';
import Rooms from './components/Rooms';
import Room from './components/Room';
import './App.css' 
import TvToggle from './components/TvToggle';


let roomArr = [];

function App() {




  const [roomIndex,setRoomIndex]=useState()

  const numIndex =(e)=>{
    let ind = e.target.value
    setRoomIndex({...roomIndex,ind})
  }


  // const [checked,setChecked]=useState(false);

  // const checkedBut = () => {
  //   setChecked(!checked);
  // };



    const [room,setRoom]=useState({
      roomName:"",
      roomColor:"",
      roomScale:"",
      roomDeviceTv:"",
      roomDeviceAir:"",
      roomDevicePower:"",
      roomDeviceLights:"",
    })


    var updateRoomArr=()=>{

      if(room.roomName.length > 5 || room.roomName === ''){
        return alert('room is to long or empty')
      }
      else{
        roomArr.push(room)
        resetRoom()
        console.log(roomArr);
      }
    }


  function resetRoom(){

    return setRoom({...room,
    roomName:"",
    roomColor:"",
    roomScale:"",
    roomDeviceTv:"",
    roomDeviceAir:"",
    roomDevicePower:"",
    roomDeviceLights:"",
  })
  }




  function changeRoomName(e){
     return setRoom({...room,roomName:e.target.value})
  }
  function changeRoomColor(e){
    return setRoom({...room,roomColor:e.target.value})
 }
 function changeRoomScale(e){
  return setRoom({...room,roomScale:e.target.value})
}
//  function addDevice(e){
//   return setRoom({...room,roomDevices:+e.target.value})
// }
// var addDeviceTv =(e)=>{
//   return setRoom({...room,roomDeviceTv:e.target.value})
// }
// var addDeviceAir =(e)=>{
//   return setRoom({...room,roomDeviceAir:e.target.value})
// }
// var addDevicePower =(e)=>{
//   return setRoom({...room,roomDevicePower:e.target.value})
// }
// var addDeviceLights =(e)=>{
//   return setRoom({...room,roomDeviceLights:e.target.value})



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path = '/smart-house' element={<Rooms numIndex={numIndex} roomArr={roomArr} room={room}/>}/>
        <Route path = '/' element={<Rooms numIndex={numIndex} roomArr={roomArr} room={room}/>}/>
        <Route path = '/rooms' element={<Rooms numIndex={numIndex}  room={room} roomArr={roomArr}/>}/>
          <Route path = '/editroom' element={<Editroom resetRoom={resetRoom}  updateRoomArr={updateRoomArr} room={room} changeRoomScale={changeRoomScale} changeRoomColor={changeRoomColor} changeRoomName={changeRoomName}/>}/>
          <Route path = '/room' element={<Room roomIndex={roomIndex} numIndex={numIndex} roomArr={roomArr} room={room}/>}/>
          <Route path='/tvtoggle' element={<TvToggle/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;



  

// class room {
//   color = '';
//   constructor(name,type){
//     this.name = name;
//     this.type = type;
//   }
//   change(){
//     this.color = 
//   }
// }

// const [roomColor,setRoomColor]=useState('');

// const[roomScale,setRoomScale]=useState('')
// function changeScale(e){
//   setRoomScale([e.target.value])
// }
// function changeColor(e){
//   setRoomColor([e.target.value])
//   console.log(roomColor);
// }

// const [roomName,setRoomName]=useState('');

// function changeRoomName(e){
//   setRoomName([e.target.value])
// }

// const addAir=(e)=>{
//   setRoomName({...roomName,nickname:e.target.value})
// }
