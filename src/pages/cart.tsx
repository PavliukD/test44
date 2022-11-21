import { useAppSelector, useAppDispatch } from "../redux/hooks/hooks";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { clearPage } from "../redux/reducers/slice";

import { Container } from '../components/common/container';
import { SectionHead } from '../components/sectionHead';
import { CartList } from "../components/cartList";

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100% - 60px);
    border-top: 1px solid Silver;
    margin: auto;
    margin-bottom: 20px;
    padding-bottom: 5px;
    padding-top: 20px;
`

const Title = styled.h2`
    color: grey;
`

const Button = styled.button`
    display: inline-block;
    text-align: center;
    background-color: #FF8C00;
    color: white;
    font-weight: 700;
    padding: 5px 20px;
    border-radius: 5px;
    min-width: 120px;
    height: 34px;
    border: none;
    font-size: 14px;
    line-height: 1.2;
    margin-left: 10px;
    text-transform: uppercase;

    :hover,
    :focus{
        box-shadow: 0px 0px 21px -1px #FF8C00;
`

const Notification = styled.h3`
    padding-top: 60px;
    padding-bottom: 60px;
    text-align: center;
    font-size: 32px;
    color: tomato;
`

export const Cart: React.FC = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const dispatch = useAppDispatch()

    const { cart } = useAppSelector((state) => state.slice)
    console.log(cart)

    useEffect(() => {
        if (!cart) {
            setTotalPrice(0)
            return
        }
        const total = cart.reduce((total, product) => total + product.price * product.quantity, 0)
        setTotalPrice(total)
    }, [cart])
    
    const clickButton = () => {
        alert('Вообще тут должна быть функция, которая в зависимости от ситуации либо выведет модалку с формой уточнения заказа, либо функция, которая сразу запрос на бэк отправит. A а пока я просто почищу state')
        dispatch(clearPage())
    }

    return (
        <Container>
            <SectionHead title='Order cart' />
            {cart ? <CartList products={cart}></CartList> : <Notification>Cart is empty</Notification>} 
            <Wrap>
                <Title>Total: {totalPrice.toFixed(2)}</Title>
                <Button onClick={ clickButton }>checkout</Button>
            </Wrap>
        </Container>
    )
    
}