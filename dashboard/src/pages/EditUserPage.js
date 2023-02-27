import React from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import Layout from "../components/Layout/Layout";
import EditUser from '../components/UsersComponents/EditUser';

const EditUserPage = () => {
    return (
        <>
              <Layout title="Edit Users">
        <EditUser />
      </Layout>
        </>
    )
}
const Cont = styled.div`
  ${tw``}
`;
export default EditUserPage
