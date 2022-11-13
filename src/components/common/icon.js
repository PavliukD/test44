import styled from 'styled-components'

const Svg = styled.svg`
    fill: white;
    width: 25px;
    height: 25px;
`


export const Icon = ({ icon }) => {
    return (
        <Svg>
            <use href={icon} ></use>
        </Svg>
    )
}