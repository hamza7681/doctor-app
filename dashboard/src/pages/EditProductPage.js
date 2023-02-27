import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Layout from "../components/Layout/Layout";
import EditProduct from "../components/ProductComponents/EditProduct";

const EditProductPage = () => {
  return (
    <>
      <Layout title="Edit Products">
        <EditProduct />
      </Layout>
    </>
  );
};
const Cont = styled.div`
  ${tw``}
`;
export default EditProductPage;
