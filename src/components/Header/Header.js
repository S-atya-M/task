import React, { useState } from 'react'
import './Style.css'

const Header = () => {
  
  const [isClick,SetIsClick]=useState(false);

  return (
    <>
    <div className='header'>
                <img src='header-logo.png' alt='header-logo' className='logo'></img>
                      <div className='about-us'>About Us</div>
                      <div className='our-programs'>Our Programs</div>
        <div className='login'>Login</div>
        <div>
          <img src="nav-logo.png" alt="nav-logo" className='nav-logo' onClick={(e) => SetIsClick(!isClick) }/>
          {isClick?
          <div className='nav-box'>
                              <div className='DashB'>Dashboard</div>
                              <div className='line14'></div>
                              <div className='BookM'>Bookmarks</div>
                              <div className='line15'></div>
                              <div className='My-A' >
                              My Account
                              </div>
                              <div className='line16'></div>
                              <div className='log-out'>Log Out</div>
                         </div>
            :''
        }
        </div>
        
    </div>
    </>
  )
}

export default Header