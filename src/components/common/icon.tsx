import styled from 'styled-components'

const Svg = styled.svg`
    fill: white;
    width: 25px;
    height: 25px;
`
type Props = {
    icon: string
}

export const Icon: React.FC<Props> = ({ icon }) => {
    return (
        <Svg>
            <use href={icon} ></use>
        </Svg>
    )
}