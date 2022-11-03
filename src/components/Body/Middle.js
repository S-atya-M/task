import React from 'react'
import "./MidStyle.css"

const Middle = () => {
  return (
    <>
      <div className='main'>
        <div className='parent'>
            <div className='my-ac'>
               MY <span className='account'>ACCOUNT</span>
            </div>
        </div>
            <img src="nav-logo.png" alt="mid-logo"  className='mid-logo'/>
            <img src="vector.png" alt="edit" className='edit'/>
            <div className='dot'></div>
        <div>
            <img src="Flower.png" alt="bgimg" className='bgimg' />
            <span className='name-tag'>Name</span>
            <span className='name'>Arjun G N</span>
            <span className='email-tag'>Email</span>  
            <span className='email'>arjun@gmail.com </span>
            <span className='phone'>Phone</span>
            <span className='phone-num'>9826369270 </span>
            <span className='password'>Password</span>
            <span className='sub'>Subscription Details </span>
            <span className='memb'>1 Year membership for 750 AED</span>
            <span className='strt'>Started on: 13-11-2020 <br /> Valid till: 13-11-2021</span>
            <span className='ref'>Referral Details</span>
            <span className='sub-his'>Subscription history</span>
            <span className='ref-detl'>Referral Details</span>
            <div className='ref-detl-show'>
             Share your referral code and earn cash credits for each friend that subscribes. (1
             <br /> Friend = 5 USD/16 DHRM). Also, your friend receives a 5 USD credit.
            </div>
            <span className='ref-code'>Referral Code: HSAGBWBDAV</span>
            <span className='ref-his'>Referral History</span>
            <span className='edit-name-btn'>Edit</span>
            <span className='edit-email-btn'>Edit</span>
            <span className='edit-num-btn'>Edit</span>
            <span className='pass-ch-btn'>Change password</span>
            <span className='plan-ch-btn'>Change plan</span>
            <span className='copy-btn'>Copy</span>
        </div>
       </div> 
    </>
  )
}

export default Middle