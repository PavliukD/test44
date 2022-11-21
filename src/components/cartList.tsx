import styled from "styled-components";
import { useAppSelector } from "../redux/hooks/hooks";
import { Cart } from "./utils/types";

import { CartCardList } from "./common/cartCardsList";
import { CartCardTable } from "./common/cartCardsTable";


const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

type Props = {
    products: Cart[]
}

export const CartList: React.FC<Props> = ({ products =[] }) => {

    const { view } = useAppSelector((state) => state.slice)
    return(
        <List>
            {products.map(product => {
                if (view === 'list') {
                    return (
                    <CartCardList key={product.id} product={product}></CartCardList>
                    )
                } 
                    return <CartCardTable key={product.id} product={product}></CartCardTable>
                
            })}
        </List>
    )
}