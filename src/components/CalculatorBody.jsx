import React from 'react'
import styled from 'styled-components'

class CalculatorBody extends React.Component {
    render(){
        return(
            <CBody>
                <Button>0</Button>
            </CBody>
        )
    }
}

const CBody = styled.div`
    width: 450px;
    height: 600px;
    margin: auto;
    background: papayawhip;

`

const Button = styled.button`
border-radius: 3px;
padding: 0.25em 1em;
margin: 0 1em;
background: palevioletred;
color: white;
border: 2px solid palevioletred;
`

export default CalculatorBody