import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Layout from "../components/Layout/Layout";
import ProductCardContainer from "./../components/ProductComponents/ProductCardContainer";
import MyTable from "../components/ProductComponents/MyTable";
const Products = () => {
  return (
    <Layout title='Products'>
      <ProductCardContainer />
      <MyTable />
    </Layout>
  );
};
const Cont = styled.div`
  ${tw``}
`;
export default Products;
