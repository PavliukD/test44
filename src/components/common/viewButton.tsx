import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { useState, useEffect } from "react";
import { changeView } from '../../redux/reducers/slice';

type ButtonProps = {
    active: boolean
}

const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: none;
    padding: 0;
    background-color: ${({active}) => (active ? "orange" : "grey")};

    :hover,
    :focus{
        background-color: orange;
    }

    :not(:first-child){
        margin-left: 5px;
    }
`

type Props = {
    viewType: "list" | "table",
    children: any
}

export const ViewButton: React.FC<Props> = ({ viewType, children }) => {
    const [active, setActive] = useState(false)

    const dispatch = useAppDispatch()
    const { view } = useAppSelector((state) =>  state.slice)

    // eslint-disable-next-line
    useEffect(() => {
        if (view === viewType) {
            setActive(true)
            return
        }
        setActive(false)
    })

    const onClickButton = () => {
        
        dispatch(changeView(viewType))
    }

    return (
        <Button
            type='button'
            onClick={onClickButton}
            active={active}> 
            {children}
        </Button>
    )
}