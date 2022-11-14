import styled from "styled-components";

const StyledInput = styled.input`
    // margin-top: 10px;
    font-size: 18px;
    line-height: 1.2;
    width: 80px;
    border-radius: 5px;
    text-align: center
`

type Props = {
    value: number,
    setValue?: any;
}

export const Input: React.FC<Props> = ({ value, setValue }) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <StyledInput
            value={value}
            onChange={handleChange}
            type='number'
        ></StyledInput>
    )
}