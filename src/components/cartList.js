import styled from "styled-components";
import { useSelector } from "react-redux";

import { CartCardList } from "./common/cartCardsList";
import { CartCardTable } from "./common/cartCardsTable";


const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export const CartList = ({ products }) => {

    const { view } = useSelector((state) =>  state.slice)
    return(
        <List>
            {products.map(product => {
                if (view === 'list') {
                    return (
                    <CartCardList key={product.id} product={product}></CartCardList>
                    )
                } else if (view === 'table') {
                    return <CartCardTable key={product.id} product={product}></CartCardTable>
                }
            })}
        </List>
    )
}