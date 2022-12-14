import styled from "styled-components";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { changeQuantity } from "../../redux/reducers/slice";
import { Cart } from "../utils/types";

import { Button } from "./Button";
import { Link } from "./link";
import { Input } from "./input";

const Card = styled.li`
    display: block;
    width: calc((100% - 30px)/2);
    margin-top 20px;
    box-shadow: 10px 10px 14px -5px rgba(0,0,0,0.84);
    padding: 10px 15px;

    :not(:nth-child(3n + 1)){
        margin-left: 10px;
        }

        :nth-child(3n + 1){
            margin-left: 10px;
        }
    }

    @media (min-width: 900px){
        width: calc((100% - 60px)/3);

        :not(:nth-child(3n + 1)){
        margin-left: 20px;
        }

        :nth-child(3n + 1){
            margin-left: 10px;
        }
    }

`

const ImageWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 240px;
`

const ProductImg = styled.img`
    display: block;
    max-height: 200px;
    max-width: 100%;
    object-fit: contain;
`
const ProductTitle = styled.h3`
    color: Grey;
    height: 75px;
    // display: block;
`

const Text = styled.p`
    color: Grey;
    font-weight: 500;
`

const Wrap = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`

const ProductPrice = styled.p`
    color: brown;
    font-size: 22px;
    font-weight: 900;
`

const ButtonsWrap = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
`

type Props = {
    product: Cart
}

export const CartCardTable: React.FC<Props> = ({ product }) => {
    
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
            <ProductTitle>{title}</ProductTitle>
            <Wrap>
                <Text>Product ID: {id}</Text>
                <Input
                    value={quantity}
                    setValue={setQuantity}
                ></Input>
                <ProductPrice>${price}</ProductPrice>
                
            </Wrap>
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
        </Card>
    )
}