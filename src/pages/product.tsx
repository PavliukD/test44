import styled from 'styled-components'
import { useAppSelector } from '../redux/hooks/hooks';
import { useParams } from 'react-router';

import { Container } from '../components/common/container';
import { Button } from '../components/common/Button';

const Wrap = styled.div`
    display: flex;
    padding: 20px;
`

const Image = styled.img`
    max-width: 45%;
    margin-right: 20px;
    border-radius: 10px;
`

const Meta = styled.div`
    padding-top: 20px
`
const ProductTitle = styled.h3`
    color: Grey;
    font-size: 32px;
    width: 80%;
    margin-bottom: 15px;
`

const Text = styled.p`
    color: Grey;
    font-weight: 500;
    width: 90%;
    font-size: 24px;
    margin-bottom: 30px;
`

const ProductPrice = styled.p`
    color: brown;
    font-size: 24px;
    font-weight: 900;
    margin-right: 40px;
`

const ControlWrap = styled.div`
    display: flex;
`

const Notification = styled.h3`
    padding-top: 60px;
    padding-bottom: 60px;
    text-align: center;
    font-size: 32px;
    color: tomato;
`


export const Product: React.FC = () => {
    const {id} = useParams()
    const { productsList } = useAppSelector((state) => state.slice)
    
    const product = productsList.find(el => el.id === Number(id))

    if (!product) {
        return (
            <Container>
                <Notification>{`Oops, product with id=${ id } not found`}</Notification>
            </Container>
        )
    }

    const {title, image, description, price} = product

    return (
        <Container>
            <Wrap>
                <Image src={image}></Image>
                <Meta>
                    <ProductTitle>{title}</ProductTitle>
                    <Text>{description}</Text>
                    <ControlWrap>
                        <ProductPrice>${price}</ProductPrice>
                        <Button func='add' title='Buy' data={product}></Button>
                    </ControlWrap>
                </Meta>
            </Wrap>
        </Container>
    )
}