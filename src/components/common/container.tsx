import styled from "styled-components";

const ContainerWrap = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1200px;
    background-color: Gainsboro;
    border-radius: 10px;
    
`

type Props = {
    children: any
}

export const Container: React.FC<Props> = ({children}) => {
    return (
        <ContainerWrap>
            {children}
        </ContainerWrap>
    )
}