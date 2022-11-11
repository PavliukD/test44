import styled from "styled-components";

import { ProductCard } from "./productCard";

const List = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;

`

export const ProductsList = ({products}) => {

    console.log(products[0])
    return(
        <List>
            {products.map(product => {
                return(
                    <ProductCard key={product.id} product={product}></ProductCard>
                )
            })}
        </List>
    )
}