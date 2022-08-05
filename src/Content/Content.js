
import React from 'react';
import './Content.css';
import Mapcontainer from '../Map/Mapcontainer';
// import  './icon.jpg';
import pdt from './icon.jpg';
export default function Content() {
  return (
    
   <div className='main'>
          <div className='navbar'><img  className='icon' src={pdt}/></div>
          <div className='heading'><h3>Lets calculate <span className='darker'>distance</span> from Google maps</h3></div>
          <div className='body'>
              <div className='input'>
               
               <div className='origin'>Origin <br></br> <input type="text" placeholder="Mumbai" className='takeinput'></input> </div>
               <div className='btn'><button className='calculatebtn'>calculate</button></div>
               <div className='destination'>Destination <br></br><input type="text" placeholder="Delhi" className='takeinput'></input> </div>
               <div className='distance'>Distance <span className='disvalue'>1427kms</span></div>
               <div className='detail'>The distance between Mumbai and Delhi is 1427 kms</div>
  


              </div>
              <div className='mapping'><Mapcontainer/></div>
          </div>
 





   </div>

    
  )
}