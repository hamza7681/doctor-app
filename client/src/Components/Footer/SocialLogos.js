import React from 'react'
import paypal from '../../Assets/paypal.png'
import visa from '../../Assets/visa.png'
import master from '../../Assets/master.png'
import NHS from '../../Assets/NHS.png'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import './styles.css'

function SocialLogos() {
    return (
        <>
            <div>
               <div className='pay'>
               <h6 className='lists_heading pb-3'>Pay Securely with us</h6>
               <ul className='payment_list'>
                   <li><img className='pay_logo' src={paypal} alt='paypal'/></li>
                   <li><img className='pay_logo' src={visa} alt='visa'/></li>
                   <li><img className='pay_logo' src={master} alt='master'/></li>
               </ul>
               </div>
               <div className='approve mt-2'>
               <h6 className='lists_heading'>Approved by</h6>
               <img className='nhs_logo' src={NHS} alt='nhs' />
               </div>
               <div className='social_media mt-2'>
               <h6 className='lists_heading'>Follow us on</h6>
               <span className='social_logo'><FaFacebookSquare/></span>
               <span className='social_logo'><FaTwitterSquare/></span>
               </div>
            </div>
        </>
    )
}

export default SocialLogos
