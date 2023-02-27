import React from 'react'
import CardDetailContainer from '../components/DashBoardComponents/CardDetailContainer'
import DoctorSection from '../components/DashBoardComponents/DoctorSection'
import Layout from '../components/Layout/Layout'
import Toolbar from '../components/DashBoardComponents/Toolbar'
const Dashboard = () => {
    return (
        <Layout title='Dashboard'>
            <Toolbar/>
            <CardDetailContainer />
            <DoctorSection />
        </Layout> 
    )
}

export default Dashboard
