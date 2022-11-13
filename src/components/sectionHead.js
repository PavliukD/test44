import styled from 'styled-components'

import { ViewButton } from './common/viewButton'

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100% - 60px);
    border-bottom: 1px solid Silver;
    margin: auto;
    margin-bottom: 20px;
    padding-bottom: 5px;
    padding-top: 20px;
`
const Title = styled.h2`
    color: grey;
    font-weight: 600;
`

const ButtonsWrap = styled.div`
    display: flex;
`


export const SectionHead = ({ title }) => {


    return (
        <Wrap>
            <Title>{ title }</Title>
            <ButtonsWrap>
                <ViewButton viewType='list'></ViewButton>
                <ViewButton viewType='table'></ViewButton>
            </ButtonsWrap>
        </Wrap>
    )
}