import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import EarningDetailCards from "./EarningCardDetails";
import {AiOutlineDollarCircle} from 'react-icons/ai'
const data = [
  {
    title: "Total Earnings",
    amount: 30659,
    icon:<AiOutlineDollarCircle/>
  },
  {
    title: "Disputed Earnings",
    amount: 65,
    disputed:true,
    icon:<AiOutlineDollarCircle/>
    
  },
  {
    title:"Earned this month",
    icon:<AiOutlineDollarCircle/>,
    amount:14639,
  },
  {
    title:'Pending Payment',
    icon:<AiOutlineDollarCircle/>,
    amount: 625,
  }
];
const CardDetailContainer = () => {
  return (
    <>
    <Cont>
      {data.map((val, index) => (
        <EarningDetailCards
          title={val.title}
          amount={val.amount}
          disputed={val.disputed ? true : false}
          icon={val.icon}
        />
      ))}
     
    </Cont>
    </>
  );
};
const Cont = styled.div`
  ${tw`grid grid-cols-2 w-full gap-2
xl:grid-cols-5 
md:grid-cols-2
lg:grid-cols-3

`}
`;
export default CardDetailContainer;
