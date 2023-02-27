import React from 'react'
import './styles.css'

function Cards({logo, step,detail}) {
    return (
        <>
         <div className='col-md-4'>
            <div className='steps_cards text-center'>
            <span className='step_icon'>{logo}</span>
             <h5 className='steps_heading'>{step}</h5>
             <p className='steps_para'>{detail}</p>
            </div>
             </div>   
        </>
    )
}

export default Cards
