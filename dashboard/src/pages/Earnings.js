import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Layout from "../components/Layout/Layout";
import EarningCardContainer from "./../components/EarningComponents/EarningCardContainer";
import MyTable from "../components/EarningComponents/MyTable";
import AreaChart from "../components/EarningComponents/AreaChart";

const Earnings = () => {
  return (
    <Layout title='Earnings'> 
      <EarningCardContainer />
      <AreaChart/>
      <MyTable />
    </Layout>
  );
};
const Cont = styled.div`
  ${tw``}
`;
export default Earnings;
