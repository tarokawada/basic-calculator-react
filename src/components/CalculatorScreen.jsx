import React from 'react'
import styled from 'styled-components'
import { Screen } from './CalculatorComponents'

const CalculatorScreen = props => {
    return(
        <Screen>
            <div style={{marginTop: '17px', fontSize: '18px', marginLeft: '14px', color: '#374910', display:'inline-block'}}>
                {props.equation}
            </div>
            <div style={{fontSize: '36px', marginTop: '-10px', marginLeft: '14px', color: '#374910'}}>
                {props.answer}
            </div>
        </Screen>
    )
}

const BlinkingType = styled.div`
    width: 10px;
    height: 10px;
    background: black;
`
export default CalculatorScreen