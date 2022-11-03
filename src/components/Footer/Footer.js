import React from 'react'
import "./Fstyle.css"

const Footer = () => {
  return (
    <>
        <div  className='Footer'>
           <span className='talk'>Let' talk</span>
           <span className='exmp'> someone@example.com</span>
           <span className='book-apn'>Book an appointment?</span>
           <span className='line'></span>
           <span className='exm-num'>+91- 385 526 5060</span>
           <span className='detl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae <br /> facilisis lorem. Integer non pharetra mauris, non tincidunt metus. Aenean <br /> in lectus diam... </span>
            <img src="messagelogo.png" alt="message" className='message-logo' />
            <img src="whatsapp.png" alt="whatsapp" className='whatsapp-logo' />
            <div className='child'> 
             <div className='box'>
                <span className='yoga'>© 2021 Copyright - Artistic yoga</span>
                    <span className='elip'></span>
                    <span className='policy'>Privacy policy</span>
                    <span className='elip2'></span>
                    <span className='terms'>Terms of use</span>
             </div>      
            </div>
        </div>
    </>
  )
}

export default Footer