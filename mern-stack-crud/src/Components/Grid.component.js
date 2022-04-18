import React from 'react';
import './grid.css'; 
import pic from './img.jpg';
import p from './images.jpg';
import a from './ai.jpg';
import b from './me.jpg';
import c from './ee.jpg';
import d from './cs.jpg';
import e from './ci.jpg';
import f from './ch.jpg';
import Example from "./Marquee.compoent";
import { BrowserRouter as Router, Switch,
	Route, Link } from "react-router-dom";
export default function Grid() {
  return (
    <>
    <div className='slide'>
      <div className='imgBx'>
          <img src={p}/>
      </div>
      <div className='content'>
        <h1><b>Design Credit Course</b></h1>
        <p>The aim of this course is to inculcate the design thinking among the students and facilitate gaining design immersion experience. Student has to earn 6 credits from the various categories decided in the quidelines. It gives an opportunity to be the part of various projects being going on. Also enhances the critical thinking and indroduces to problem solving strategies.</p>
      </div>
    </div>
    <div className='marqueue'>
    <Example/>
    
    </div>
    {/* <div className='branch'>
      Branches
    </div> */}
    
    <div className='box' >
      <div className='imgBx'>
        <img src={a}/>
      </div>
      <div className='content'>
        <h2><b><Link to={"/ai"}
					className="nav-link">
				Artificial Intelligence And Data Science
				</Link></b></h2>
        <p>hkdkhka dkdkdkd wkkhdj shj qjdu dhjks ksliw jd</p>
      </div>
    </div>
    <div className='box1' >
      <div className='content'>
      <h2><b><Link to={"/bb"}
					className="nav-link">
				Bio Engineering
				</Link></b></h2>
        <p>hkdkhka dkdkdkd wkkhdj shj qjdu dhjks ksliw jd</p>
      </div>
      <div className='imgBx'>
        <img src={pic}/>
      </div>
    </div>
    <div className='box2' >
      <div className='imgBx'>
        <img src={f}/>
      </div>
      <div className='content'>
      <h2><b><Link to={"/ch"}
					className="nav-link">
				Chemical Engineering
				</Link></b></h2>
        <p>hkdkhka dkdkdkd wkkhdj shj qjdu dhjks ksliw jd</p>
      </div>
    </div>
    <div className='box3' >
      <div className='content'>
        <h2><b><Link to={"/ci"}
					className="nav-link">
				Civil And Infrastructure Engineering
				</Link></b></h2>
        <p>hkdkhka dkdkdkd wkkhdj shj qjdu dhjks ksliw jd</p>
      </div>
      <div className='imgBx'>
        <img src={e}/>
      </div>
    </div>
    <div className='box4' >
      
      <div className='imgBx'>
        <img src={d}/>
      </div>
      <div className='content'>
      <h2><b><Link to={"/cs"}
					className="nav-link">
				Computer Science & Engineering
				</Link></b></h2>
        <p>hkdkhka dkdkdkd wkkhdj shj qjdu dhjks ksliw jd</p>
      </div>
    </div>
    <div className='box5' >
      <div className='content'>
      <h2><b><Link to={"/ee"}
					className="nav-link">
				Electrical Engineering
				</Link></b></h2>
        
        <p>hkdkhka dkdkdkd wkkhdj shj qjdu dhjks ksliw jd</p>
      </div>
      <div className='imgBx'>
        <img src={pic}/>
      </div>
    </div>
    <div className='box6' >
      
      <div className='imgBx'>
        <img src={pic}/>
      </div>
      <div className='content'>
      <h2><b><Link to={"/ee"}
					className="nav-link">
				Materials Engineering
				</Link></b></h2>
        
        <p>hkdkhka dkdkdkd wkkhdj shj qjdu dhjks ksliw jd</p>
      </div>
    </div>
    <div className='box7' >
      <div className='content'>
      <h2><b><Link to={"/me"}
					className="nav-link">
				Mechanical Engineering
				</Link></b></h2>
        <p>hkdkhka dkdkdkd wkkhdj shj qjdu dhjks ksliw jd</p>
      </div>
      <div className='imgBx'>
        <img src={b}/>
      </div>
    </div>
    
  </>
    
 
    );
}