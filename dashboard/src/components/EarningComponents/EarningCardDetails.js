import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import CurrencyFormat from 'react-currency-format'
import CountUp from 'react-countup'
const EarningDetailCards = ({
    title,
    amount,
    currency,
    disputed,
    icon
}) => {
    return (
        <Cont className='group'>
             <CardIcon
        style={{
          color: "gray",
          fontSize: "28px",
          marginLeft: "auto",
          marginRight: "auto",
          
        }}
        className="icon_hover"
      >
        {icon}
      </CardIcon>
            <CardTitle>
                {/* <CurrencyFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} /> */}
                {title}
            </CardTitle>
            <CardData disputed={disputed}>
            <span className='mr-1'>£</span> 
                <CountUp
                    start={0}
                    end={Number(amount)}
                    separator=','
                    duration={2.5}
                    prefix={currency ? "$" : ''}

                />
                {/* <CurrencyFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={currency ? '$' : ''} /> */}
                {/* {amount} */}
            </CardData>
        </Cont>
    )
}
const CardData = styled.h1`
${tw`text-center text-4xl font-bold
 tracking-tight text-blue-900
 group-hover:text-white
 `}

 color: ${(props) => props.disputed ? 'red' : '#038c73'};
`
const CardTitle = styled.h1`
${tw`text-xl text-sm xl:text-lg   text-center
text-gray-500
group-hover:text-gray-300
`}
`

const CardIcon = styled.span`
  ${tw`

group-hover:bg-[#ffffff] rounded-full p-2
`}
`;


const Cont = styled.div`
${tw`height[150px] bg-blue-50 w-full
flex flex-col justify-evenly
rounded-2xl
hover:bg-[#038c73]
cursor-pointer
transition-all duration-300 ease-out
`}
`
export default EarningDetailCards
