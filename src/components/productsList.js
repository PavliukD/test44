import styled from "styled-components";
import { useSelector } from "react-redux";

import { ProductCardList } from "./common/productCardList";
import {ProductCardTable} from "./common/productCardTable";

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export const ProductsList = ({products}) => {

    const { view } = useSelector((state) =>  state.slice)
    return(
        <List>
            {products.map(product => {
                if (view === 'list') {
                    return (
                    <ProductCardList key={product.id} product={product}></ProductCardList>
                    )
                } else if (view === 'table') {
                    return <ProductCardTable key={product.id} product={product}></ProductCardTable>
                }
            })}
        </List>
    )
}