import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Layout from "../components/Layout/Layout";
import OrderCardContainer from "./../components/OrderComponents/OrderCardContainer";
import MyTable from "../components/OrderComponents/MyTable";
const Orders = () => {
  return (
    <Layout title='Orders'>
      <OrderCardContainer />
      <MyTable />
    </Layout>
  );
};
const Cont = styled.div`
  ${tw``}
`;
export default Orders;
