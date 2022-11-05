import React from 'react'
import "./Hstyle.css"
import HomeFooter from './HomeFooter'

const Home = () => {
  return (
    <>
        <span className='heading'>Yoga for Flat Abs</span>
        <span className='prog'>90 Days program</span>
        <span className='detl'>Details</span>
        <span className='techn'>Techniques</span>
        
        <span className='det2'>Choose a quiet space so that you can <br /> do the session uninterrupted. Make <br /> sure there is at least 2 hours gap <br /> between a meal and the class. Put all <br /> other devices aside and enjoy the <br /> session.</span>
        <div className='video-box'>
        <img src="play-btn.png" alt="play-btn" className='play-btn'/>
        </div>
        <span className='intro'>Introduction video</span>
        <span className='aed'>AED 99/-</span>
        <button> <div className='join-box'></div><span className='join-now'>Join now </span></button>
       <button><img src="view-rec.png" alt="view-rec" className='view-box' />
       <span className='view-box-txt'>View Schedule</span></button>
       
        <div className='struct-box'>
          <span className='strut-title'>Structure of program</span>
          <span className='strut-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod.</span>
          <div className='day-main'><span className='days'>90</span><span className='days1'>Days</span></div>
          <span className='yoga-text'>Yoga</span>
          <span className='reco'>Recovery</span>
          <span className='rest'>Rest</span>
          <span className='rep'>Repeat</span>
          <img src="pipe.png" alt="pipe-1" className='pipe-one'/>
          <img src="pipe.png" alt="pipe-2" className='pipe-two'/>
          <img src="pipe.png" alt="pipe-3" className='pipe-three'/>
        </div>
        <img src="image.png" alt="img" className='struct-img'/>
          <span className='sche'>Schedule</span>
          <span className='day-one'>Day 1- Class </span>
          <div className='box-week'></div>
          <div className='week'>
          <span className='week-txt'>Week 1</span>
          <img src="Polygonsss.png" alt="arrow" className='polygon3'/>
          </div>
          <span className='text-box'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</span>
          <span className='join-today'>Join Today.</span>
          <img src="curve.png" alt="curve" className='curve'/>
          <img src="ball-one.png" alt="ball-1"  className='ball-one'/>
          <img src="ball-two.png" alt="ball-2"  className='ball-two'/>
          <img src="ball-three.png" alt="ball-3"  className='ball-three'/>
          <img src="ball-forth.png" alt="ball-4"  className='ball-forth'/>
          <img src="ball-five.png" alt="ball-5"  className='ball-five'/>
          <img src="ball-six.png" alt="ball-6"  className='ball-six'/>
          <img src="ball-seven.png" alt="ball-7"  className='ball-seven'/>
        <img src="orange-ball.png" alt="ornage" className='orange'/>
        <img src="Polygon.png" alt="polygon1" className='polygon11'/>
        <img src="Polygons.png" alt="polygon2" className='polygon22'/>  
        <img src="dane.png" alt="dane" className='dane'/>
        <img src="Ellipse.png" alt="elp" className='Ellip' />
        <img src="daneface.png" alt="face" className='face' />
        <img src="Polygon.png" alt="polygon1" className='polygon1'/>
        <img src="Polygons.png" alt="polygon2" className='polygon2'/>
        <img src="floral.Png" alt="backround-logo" className='bg-img-h' />
        <img src="white-ball.png" alt="white-ball" className='white-ball' />
        <img src="rec-box.png" alt="rec-box" className='rec-box'/>
        <span className='tech'>Our Teachers</span>
        <div className='tech-det-box'></div>
        <span className='tech-det-box-text'>Ashrei Mitra started his journey in yoga at the age of 16. He was
        <br />chosen by his master Dr. Bharat Thakur from a meditation
        <br />works  hop and has worked with him closely for many years to
        <br />become one of the most senior teachers at Bharat Thakur Artistic 
        <br />Yoga. Combining his love of fitness, breathwork, functional
        <br />training, and his deep knowledge of the human anatomy and
        <br />yogic knowhow, he is committed to maximizing on the human
        <br />potential by strengthening and opening up the body so that the
        <br />mind naturally falls into a deep state of relaxation and
        <br />meditation. He has taught yoga to people from all walks of life
        <br />including athletes, celebrities and several top corporate<br />organizations</span> 
        <img src="tech.png" alt="tech" className='tech-pic'/>
        <span className='tech-name'>Ashrei Mitra</span>
        <span className='ashrei'>Ashrei Mitra</span>
        <span className='rahul'>Rahul</span>
        <span className='ashrei-second'>Ashrei Mitra</span>
        <span className='ashray'>Ashray</span>
        <span className='ashish'>Ashish</span>
        <span className='zora'>Zora</span>
        <HomeFooter/>
    </>
  )
}

export default Home