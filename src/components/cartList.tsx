import styled from "styled-components";
import { useAppSelector } from "../redux/hooks/hooks";

import { CartCardList } from "./common/cartCardsList";
import { CartCardTable } from "./common/cartCardsTable";


const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
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
    products: Product[]
}

export const CartList: React.FC<Props> = ({ products }) => {

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