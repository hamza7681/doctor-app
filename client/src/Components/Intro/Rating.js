import React from 'react'
import {ImStarFull} from 'react-icons/im'
import {GiRoundStar} from 'react-icons/gi'
import './styles.css'

function Rating() {
    return (
        <div>
            <h3 ><span className='star'><ImStarFull/></span> <span className='rating_heading'> Trustpilot </span></h3>
            <span className='rating_para'>Excellent Based on 5341 reviews</span>
            <ul className='rating_list'>
                <li><GiRoundStar className='rate_icon'/></li>
                <li><GiRoundStar className='rate_icon'/></li>
                <li><GiRoundStar className='rate_icon'/></li>
                <li><GiRoundStar className='rate_icon'/></li>
                <li><GiRoundStar className='rate_icon'/></li>
            </ul>
        </div>
    )
}

export default Rating
