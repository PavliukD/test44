import styled from "styled-components";

const Card = styled.li`
    display: block;
    width: 100%;
    height: 90px;

    :nth-child(2n+1){
        background-color: grey;
    }
`



export const ProductCard = ({product}) => {
    return(
        <Card>
            Card
        </Card>
    )
}

