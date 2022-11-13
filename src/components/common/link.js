import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #383838;
    color: white;
    height: 34px;
    text-decoration: none;
    font-weight: 700;
    padding: 5px 20px;
    border-radius: 5px;
    min-width: 120px;
    width: fit-content;
    font-size: 14px;
    line-height: 1.2;
    text-transform: uppercase;

    :hover,
    :focus{
        box-shadow: 0px 0px 21px -1px #000000;
    }
`

export const Link = ({ link, title}) => {
    return (
        <StyledLink to={link}>{ title }</StyledLink>
    )
}