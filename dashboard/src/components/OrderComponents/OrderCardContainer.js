import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import DetailCards from '../DashBoardComponents/DetailCards'
import { GiShoppingCart } from "react-icons/gi";
import {BsCartPlus,BsCartX} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const data = [
    {
        title: 'Total Orders',
        amount: 16509,
        icon:<GiShoppingCart/>
    },
    {
        title: 'Orders In Queue',
        amount: 165,
        icon:<BsCartPlus/>
    },
    {
        title: 'Orders Shipped',
        amount: 900,
        icon:<AiOutlineShoppingCart/>
    },
    {
        title: 'Disputed Orders',
        amount: 4,
        disputed: true,
        icon:<BsCartX/>
    },
]
const CardDetailContainer = () => {
    return (
        <Cont>
            {
                data.map((val, index) => (
                    <DetailCards title={val.title} icon={val.icon} amount={val.amount} disputed={val.disputed ? true : false} />
                ))
            }
        </Cont >
    )
}
const Cont = styled.div`
${tw`grid grid-cols-2 w-full gap-2
xl:grid-cols-5 
md:grid-cols-2
lg:grid-cols-3

`}
`
export default CardDetailContainer
