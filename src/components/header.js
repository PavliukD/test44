
import { NavLink } from "react-router-dom";
import styled from "styled-components"

const NavList = styled.div`
    display: flex;
    width: 1200px;
    margin: auto;
`

const StyledNavLink = styled(NavLink)`
font-size: 20px;
`

export const Header = () => {
    return(
        <NavList>
                <NavLink to='/'>Shop</NavLink>
                <NavLink to='/cart'>Cart</NavLink>
        </NavList>
    )
}