import { useSelector } from "react-redux/es/exports"

import { Container } from '../components/common/container';
import { ProductsList } from '../components/productsList';
import { SectionHead } from '../components/sectionHead';

export const Shop = () => {

    const {productsList} = useSelector((state) => state.slice)

    return (
        <Container>
            <SectionHead title='Our products'/>
            <ProductsList products={productsList}></ProductsList>
        </Container>
    )
    
}