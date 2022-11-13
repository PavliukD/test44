import styled from "styled-components";

const StyledInput = styled.input`
    // margin-top: 10px;
    font-size: 18px;
    line-height: 1.2;
    width: 80px;
    border-radius: 5px;
    text-align: center
`

export const Input = ({ value, setValue }) => {
    
    const handleChange = (e) => {
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