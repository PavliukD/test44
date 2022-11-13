import { useSelector } from "react-redux/es/exports"
import styled from "styled-components";

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

export const Cart = () => {

    const { cart = [] } = useSelector((state) => state.slice)

    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0)

    const clickButton = () => {
        alert('Вообще тут должна быть функция, которая в зависимости от ситуации либо выведет модалку с формой уточнения заказа, либо функция, которая сразу запрос на бэк отправит')
    }

    return (
        <Container>
            <SectionHead title='Order cart' />
            <CartList products={cart}></CartList>
            <Wrap>
                <Title>Total: {totalPrice.toFixed(2)}</Title>
                <Button onClick={ clickButton }>checkout</Button>
            </Wrap>
        </Container>
    )
    
}