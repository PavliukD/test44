import styled from "styled-components";

const StyledInput = styled.input`
    font-size: 18px;
    line-height: 1.2;
    width: 80px;
    border-radius: 5px;
    text-align: center
`

type Props = {
    value: number,
    setValue: (arg: number) => void;
}

export const Input: React.FC<Props> = ({ value, setValue }) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value))
    }

    return (
        <StyledInput
            value={value}
            onChange={handleChange}
            type='number'
        ></StyledInput>
    )
}