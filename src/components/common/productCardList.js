import styled from "styled-components";

import { Button } from "./Button.tsx";
import { Link } from "./link";



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
`

export const ProductCardList = ({ product }) => {

    const { image, price, title, id } = product
    
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
                        link={`product/${id}`}
                        title='More'
                    />
                    <Button
                        func='add'
                        title="Add to cart"
                        data={product}
                    />
                </ButtonsWrap>
            </Wrap>
            
        </Card>
    )
}

