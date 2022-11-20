import { useAppSelector } from '../redux/hooks/hooks';

import { Container } from '../components/common/container';
import { ProductsList } from '../components/productsList';
import { SectionHead } from '../components/sectionHead';

export const Shop: React.FC = () => {

    const { productsList } = useAppSelector((state) =>  state.slice)
    
    return (
        <Container>
            <SectionHead title='Our products'/>
            <ProductsList products={productsList}></ProductsList>
        </Container>
    )
    
}