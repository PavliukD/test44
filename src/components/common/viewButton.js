import styled from 'styled-components'
import {  useDispatch, useSelector } from "react-redux/es/exports"
import { changeView } from '../../redux/operations/operations';
import {useState, useEffect} from "react"

const Button = styled.button`
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

export const ViewButton = ({ viewType, children }) => {
    const [active, setActive] = useState(false)

    

    const dispatch = useDispatch()
    const { view } = useSelector((state) =>  state.slice)

    // eslint-disable-next-line
    useEffect(() => {
        if (view === viewType) {
            setActive(true)
            return
        }
        setActive(false)
    })

    const onClickButton = () => {
        
        dispatch(changeView({
            view: viewType
        }))
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