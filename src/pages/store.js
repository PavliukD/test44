import styled from 'styled-components'
import { useSelector } from "react-redux/es/exports"
import { useState, useEffect } from "react";

import { Container } from '../components/container';
import { ProductsList } from '../components/productsList';

const SectionHead = styled.div`
    display: flex;
    justify-content: space-between;
`
const Title = styled.h2`
`

const ButtonsWrap = styled.div`
`

const Button = styled.button`
`

export const Shop = () => {

    const {productsList} = useSelector((state) => state.slice)

    return (
        <Container>
            <SectionHead>
                <Title>Our products</Title>
                <ButtonsWrap>
                    <Button></Button>
                    <Button></Button>
                </ButtonsWrap>
            </SectionHead>
            <ProductsList products={productsList}></ProductsList>
        </Container>
    )
    
}