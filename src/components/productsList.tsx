import styled from "styled-components";
import { useAppSelector } from "../redux/hooks/hooks";
import { Product } from "./utils/types";

import { ProductCardList } from "./common/productCardList";
import { ProductCardTable } from "./common/productCardTable";
import { Notification } from "./common/notification";

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`



type Props = {
    products: Product[]
}

export const ProductsList: React.FC<Props> = ({products}) => {

    const { view } = useAppSelector((state) => state.slice)
    

    return(
        !products ? <Notification>Oops, something went wrong</Notification> :
            <List>
            {products.map(product => {
                if (view === 'list') {
                    return (
                    <ProductCardList key={product.id} product={product}></ProductCardList>
                    )
                } 
                    return <ProductCardTable key={product.id} product={product}></ProductCardTable>
                
            })}
        </List>
    )
}