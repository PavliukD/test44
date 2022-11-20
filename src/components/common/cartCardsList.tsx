import styled from "styled-components";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

import { Button } from "./Button";
import { Link } from "./link";
import { Input } from "./input";
import { changeQuantity } from "../../redux/reducers/slice";


const Card = styled.li`
    display: flex;
    width: 100%;
    height: 210px;
    padding: 10px 40px;
    :nth-child(2n+1){
        background-color: Silver;
    }
`

const ImageWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 100%;
`

const ProductImg = styled.img`
    display: block;
    height: 100%;
    max-width: 100%;
    object-fit: contain;
    // max-width: 180px;
    // height: auto;
`

const TextWrap = styled.div`
    max-width: 30%;
    margin-left: 20px
`

const ProductTitle = styled.h3`
    color: Grey;
`

const Text = styled.p`
    color: Grey;
    font-weight: 500;
`

const ProductPrice = styled.p`
    color: brown;
    font-size: 22px;
    font-weight: 900;
`

const Wrap = styled.div`
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const ButtonsWrap = styled.div`
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
`

type Product = {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    title: string,
    quantity: number
}

type Props = {
    product: Product
}

export const CartCardList: React.FC<Props> = ({ product }) => {
    
    const dispatch = useAppDispatch()
    const { image, price, title, id } = product

    const [quantity, setQuantity] = useState(product.quantity)
    const cart = useAppSelector(state => state.slice.cart)

    useEffect(() => {
        if (quantity < 1) {
            setQuantity(1)
        }
        let data = cart.map(item => {
            if (item.id !== id) {
                return item
            }
            return {
                ...item,
                quantity
            }
        })
        dispatch(changeQuantity(data))
        // eslint-disable-next-line
    }, [quantity])
    
    return(
        <Card>
            <ImageWrap>
                <ProductImg
                    src={image}
                />
            </ImageWrap>
            <TextWrap>
                <ProductTitle>{title}</ProductTitle>
                <Text>Product ID: {id}</Text>
                
            </TextWrap>
            <Wrap>
                <ProductPrice>${price}</ProductPrice>
                <ButtonsWrap>
                    <Link
                        link={`/product/${id}`}
                        title='More'
                    />
                    <Button
                        func='remove'
                        title="Remove"
                        data={product}
                    />
                </ButtonsWrap>
                <Input
                    value={quantity}
                    setValue={setQuantity}
                ></Input>
            </Wrap>
        </Card>
    )
}
