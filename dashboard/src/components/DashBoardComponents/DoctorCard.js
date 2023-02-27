import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
const DoctorCard = () => {
    return (
        <Cont>
            <Left>
                <ImageCont className='w-[60px] h-[60px] bg-red-600 rounded-full overflow-hidden'>
                    <img
                        src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        alt=''
                        className='w-full h-full object-cover'
                    />
                </ImageCont>
            </Left>
            <Center>
                <Name className='text-xl font-medium'>
                    Syed Salleh M.Shah
                </Name>
                <h1 className='text-xs w-max bg-[#038c73] rounded-xl text-white px-2 '>
                    Pharmacist
                </h1>
            </Center>
            <Right>
                <button className='text-white bg bg-[#038c73] py-1 px-3
                rounded
                '>msg!</button>
            </Right>
        </Cont>
    )
}
const Name = styled.h1`
@media only screen and (max-width: 470px) {
   ${tw`text-lg`}
}
`
const ImageCont = styled.div`
@media only screen and (max-width: 470px) {
   ${tw`h-[50px] w-[50px]`}
}
`
const Right = styled.div`
${tw`flex[0.2] flex items-center justify-center `}
button{
    @media only screen and (max-width: 470px) {
   ${tw`mr-1`}
}
}
`
const Center = styled.div`
${tw`flex[0.6] 
flex  flex-col justify-evenly
`
    }
@media only screen and (max-width: 470px) {
   ${tw`ml-1`}
}
`
const Left = styled.div`
${tw`flex[0.2]  flex items-center justify-center`}
`
const Cont = styled.div`
${tw`flex  height[70px] border-b-2 pb-1`}
`
export default DoctorCard
