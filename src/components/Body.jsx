import React from 'react'
import styled from 'styled-components'
import { CalculatorBody, Button, Screen } from './CalculatorComponents'

const styles = {
    button: {
        marginLeft: '12px',
    },
    buttonHide: {
        display: 'none'
    },
    div: {
        width: '360px',
        margin: 'auto',
        marginBottom: '10px'
    },
    equals: {
        marginLeft: '12px',
        background: '#EB5757'
    }
}
class Body extends React.Component {
    render(){
        return(
            <CalculatorBody>
                <Screen/>
                <div style={{marginTop: '26px'}}>
                    <div style={styles.div}>
                        <Button>1</Button>
                        <Button style={styles.button}>2</Button>
                        <Button style={styles.button}>3</Button>
                        <Button notNumber style={styles.button}>+</Button>
                    </div>
                    <div style={styles.div}>
                        <Button>4</Button>
                        <Button style={styles.button}>5</Button>
                        <Button style={styles.button}>6</Button>
                        <Button notNumber style={styles.button}>-</Button>
                    </div>
                    <div style={styles.div}>
                        <Button>7</Button>
                        <Button style={styles.button}>8</Button>
                        <Button style={styles.button}>9</Button>
                        <Button notNumber style={styles.button}>*</Button>
                    </div>
                    <div style={styles.div}>
                        <Button style={{marginLeft:'93px'}}>0</Button>
                        <Button notNumber style={{marginLeft:'105px'}}>/</Button>
                    </div>
                    <div style={styles.div}>
                        <Button notNumber>7</Button>
                        <Button notNumber style={styles.button}>C</Button>
                        <Button notNumber style={styles.button}>{`<-`}</Button>
                        <Button style={styles.equals}>=</Button>
                    </div>
                </div>
            </CalculatorBody>
        )
    }
}

export default Body