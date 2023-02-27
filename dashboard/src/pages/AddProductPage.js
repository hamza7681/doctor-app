import React from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import Layout from "../components/Layout/Layout";
import AddProducts from '../components/ProductComponents/AddProducts/AddProducts';

const AddProductPage = () => {
    return (
        <>
            <Layout title='Add Products'>
                <AddProducts/>
            </Layout>
        </>
    )
}
const Cont = styled.div`
  ${tw``}
`;
export default AddProductPage
