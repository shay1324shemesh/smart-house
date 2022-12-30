import React from 'react'
import {Link} from 'react-router-dom'

export default function Rooms(props) {


  console.log(props.roomArr);

  const showRoomH=()=>{
    if(props.roomArr <= 0){
      return null
    }
    else{
      return <h1 className='showRoomsH2Css'>: כניסה לחדר קיים </h1>
    }
  }

  let currentIndex=0;
  function letIndex(){
    let i = currentIndex
    currentIndex++;
    return i
  }

  // let lastPressedIndex =(e)=>{
  //   props.currentI =  e.target.value
  //   return props.currentI
  // }

  //   let roomsStatus=()=>{
  //   console.log(roomArr);
  // }

  // const showArr=()=>{
  //   let arr = props.roomArr

  //   if(arr == ''){
  //     return <p>hello</p>
  //   }
  //   else{
  //     arr.map((room)=>{
  //       return <Link to='/room'><div>{room.roomName}</div></Link>
  //     })
  //    }
  //   }

  // let saveLastPress=(e)=>{
  //   props.numIndex.push(e.target.value) 
  // }


//   const showRooms=()=>{
//     let arr =props.roomArr

//     let arrayCount =  arr.length
//     if(arrayCount<0){
//       return 
//     }
//     else{
//       for(let i = 0;i< arr.length;i++){
//         let colorS = arr[i].roomColor
//         console.log(colorS);
//        return <Link to={'/room'}><button style={{color:colorS}}>{arr[i].roomName}</button></Link>
//     }
//   }
// }
  //  const show=()=>{
  //   let arr = props.roomArr
  //   if(arr.length < 0 ){
  //     return
  //   }
  //   else{
  //     for(let i=0;i<arr.length;i++){

  //   }
  //  }




  // {props.roomArr.map((room,index)=>{
  //   if(index < 0){
  //     return <p>hello</p>
  //   }
  //   else{
  //     <button>{room.roomName}</button>
  //   }
  //  })}




  return (
    <div  className='mainRooms'>

      <div className='roomHeaderMain'>
      <h2 className='roomsH2'>ברוכים הבאים לבית החכם </h2>

      {showRoomH()}

      <br />


      </div>
   <div className='main'>
<div className='buttomsNames'>
{props.roomArr.map((room)=>(
        <Link to='/room'><button onClick={props.numIndex} value={letIndex(currentIndex)} className='RoomsButtons' color='aquamarine' style={{backgroundColor:room.roomColor}}>{room.roomName}</button></Link>
    )
    )}
</div>

     </div>
     <div className='butMain'>
      
      <Link to='/editroom'><button className='roomsBut'><h4 className='addButtomH4'>צרו חדר חדש </h4>{<svg className='addButtomSvg' xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="white" class="bi bi-house-add" viewBox="0 0 16 16">
<path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h4a.5.5 0 1 0 0-1h-4a.5.5 0 0 1-.5-.5V7.207l5-5 6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
<path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 1 0 1 0v-1h1a.5.5 0 1 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"/>
</svg>}</button></Link>
</div>



<br />
</div>
)
}
