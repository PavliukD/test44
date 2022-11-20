import styled from "styled-components";

import { Button } from "./Button";
import { Link } from "./link";

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

type Product = {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    title: string,
}

type Props = {
    product: Product
}

export const ProductCardTable: React.FC<Props> = ({ product }) => {
    
    const {image, price, title, id} = product
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
                <ProductPrice>${price}</ProductPrice>
            </Wrap>
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
        </Card>
    )
}