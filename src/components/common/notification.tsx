import styled from "styled-components";

const StyledNotification = styled.h3`
    padding-top: 60px;
    padding-bottom: 60px;
    text-align: center;
    font-size: 32px;
    color: tomato;
`

type Props = {
    children: string
}

export const Notification: React.FC<Props> = ({ children }) => {
    return (
        <StyledNotification>{ children }</StyledNotification>
    )
}