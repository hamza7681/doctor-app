import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import DetailCards from "../DashBoardComponents/DetailCards";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { BiCategoryAlt } from "react-icons/bi";
import { BsCartCheck, BsCartX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "Total Products",
    amount: 60365,
    icon: <BiCategoryAlt />,
  },
  {
    title: "Products out of stock",
    amount: 9,
    disputed: true,
    icon: <BsCartX />,
  },
  {
    title: "Product about to Finish",
    amount: 20,
    icon: <BsCartCheck />,
  },
];
const CardDetailContainer = () => {
  const navigate = useNavigate();

  return (
    <>
      <Cont>
        {data.map((val, index) => (
          <DetailCards
            title={val.title}
            amount={val.amount}
            disputed={val.disputed ? true : false}
            icon={val.icon}
          />
        ))}
        <div
          className="h-[150px] w-full bg-[#038c73] rounded-xl
            flex flex-col space-y-3 items-center justify-center
            cursor-pointer
            " 
            onClick={()=>navigate('/add-product')}
        >
          <HealthAndSafetyIcon className="!text-white !text-5xl" />
          <h5 className="text-white ">Add new product</h5>
        </div>
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
