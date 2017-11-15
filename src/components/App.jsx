import React from 'react'
import styled from 'styled-components'
import Body from './Body'

class App extends React.Component {
    render(){
        return(
            <Wrapper>
                <Body />
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    width: 400px;
    margin: auto;
    margin-top: 100px;
`
export default App