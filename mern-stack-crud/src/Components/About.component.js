import React from 'react'
import './grid.css';
import a from './user.png';


export default function About(){
  return (
      <>
      
    <div className='m1'>
      <div className='imgBx'>
          <img src={a}/>
      </div>
      <div className='content'>
        <h1><b>Noopur Zambare</b></h1>
        <p>Description</p>
      <ul>
          <li>Developer</li>
          <li></li>
      </ul>
      </div>
    </div>
    <div className='m2'>
    <div className='imgBx'>
        <img src={a}/>
    </div>
    <div className='content'>
      <h1><b>Nitin Prasad</b></h1>
      <p>Description</p>
      <ul>
         <li>skill1</li>
          <li>skill2</li>
      </ul>
    </div>
  </div>
  </>
  )
}