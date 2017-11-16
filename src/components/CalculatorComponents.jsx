import styled from 'styled-components'

export const CalculatorBody = styled.div`
    width: 400px;
    height: 475px;
    background: #6CC7CB;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
`

export const Button = styled.button`
    width: 81px;
    height: 56px;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 36px;
    font-family: 'Righteous';
    background: ${props => props.notNumber ? '#F2C94C' : '#CDEEF0'};
`

export const Screen = styled.div`
    width: 360px;
    height: 89px;
    background: #DFFF9D;
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: inset 0px 4px 2px rgba(0, 0, 0, 0.25), inset 0px -4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin: auto;
    margin-top: 20px;
    font-family: 'Righteous';
`
export default CalculatorBody