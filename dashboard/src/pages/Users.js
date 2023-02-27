import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Layout from "../components/Layout/Layout";
import UserCardContainer from "./../components/UsersComponents/UserCardContainer";
import MyTable from "../components/UsersComponents/MyTable";
const Users = () => {
  return (
    <Layout title='Customers'>
      <UserCardContainer />
      <MyTable />
    </Layout>
  );
};
const Cont = styled.div`
  ${tw``}
`;
export default Users;
