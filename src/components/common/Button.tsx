import styled from "styled-components";
import { addToCart, removeFromCart } from "../../redux/reducers/slice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { Product } from "../utils/types";



const StyledButton = styled.button`
    display: inline-block;
    text-align: center;
    background-color: #FF8C00;
    color: white;
    font-weight: 700;
    padding: 5px 20px;
    border-radius: 5px;
    min-width: 120px;
    height: 34px;
    border: none;
    font-size: 14px;
    line-height: 1.2;
    margin-left: 10px;
    text-transform: uppercase;

    :hover,
    :focus{
        box-shadow: 0px 0px 21px -1px #FF8C00;
    }
`

type Props = {
    func: "add" | "remove",
    title: string,
    data: Product
}

export const Button: React.FC<Props> = ({ func, title, data }) => {

    const { cart = [] } = useAppSelector((state) => state.slice)
    const dispatch = useAppDispatch()
 
    const {id} = data

    const add = () => {
        if (cart.find(item => item.id === id)) {
            alert('the item is already in the cart')
            return
        }
        dispatch(addToCart({
            ...data,
            quantity: 1
        }))
        alert('the product has been successfully added to the cart')
    } 
    
    const remove = () => {
        dispatch(removeFromCart(id))
    }

    const onClickButton = () => {
        if (func === 'add') {
            add()
            return
        } else if (func === 'remove') {
            remove()
        }
    }

    return (
        <StyledButton
            onClick={onClickButton}
        >{title}</StyledButton>
    )
}