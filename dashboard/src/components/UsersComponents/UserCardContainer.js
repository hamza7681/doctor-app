import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import DetailCards from "../DashBoardComponents/DetailCards";
import {FiUsers} from 'react-icons/fi'
import {AiOutlineUserAdd} from 'react-icons/ai'

const data = [
  {
    title: "Total Customers",
    amount: 3265,
    icon:<FiUsers/>
  },
  {
    title: "Subscribed Customers",
    amount: 165,
    icon:<AiOutlineUserAdd/>
  },
];
const CardDetailContainer = () => {
  return (
    <Cont>
      {data.map((val, index) => (
        <DetailCards
          title={val.title}
          amount={val.amount}
          disputed={val.disputed ? true : false}
          icon={val.icon}
        />
      ))}
    </Cont>
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
