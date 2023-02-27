import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import DetailCards from "./DetailCards";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const CardDetailContainer = () => {
  const navigate = useNavigate();
  return (
    <Cont>
      <DetailCards
        currency={true}
        title={`Total Earning`}
        amount={30659}
        icon={<AiOutlineDollarCircle />}
      />
      <DetailCards title={`Visitors Today`} amount={40000} icon={<FiUsers />} />
      <DetailCards
        title={`Total User Registered`}
        amount={9000}
        icon={<AiOutlineUser />}
      />
      <DetailCards
        title={`Total Orders`}
        amount={21500}
        icon={<GiShoppingCart />}
      />
      <div
        className="h-[150px] w-full bg-[#038c73] rounded-xl
            flex flex-col space-y-3 items-center justify-center
            cursor-pointer
            "
        onClick={() => navigate("/add-product")}
      >
        <HealthAndSafetyIcon className="!text-white !text-5xl" />
        <h5 className="text-white ">Add new product</h5>
      </div>
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
