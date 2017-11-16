import React from 'react'
import math from 'mathjs'
import { CalculatorBody, Button } from './CalculatorComponents'
import CalculatorScreen from './CalculatorScreen'

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
    constructor(props) {
        super(props);
        this.state = {
            equation: '',
            answer: ''
        };
    }

    handleClick = (e) => {
        this.setState({ equation: this.state.equation + e })
        console.log(this.state.equation)
    }

    handleRemove = () => {
        this.setState({
            equation: '',
            answer: ''
        })
    }

    handleCalculate = () => {
        const answer = math.eval(this.state.equation)
        this.setState({
            answer: answer,
            equation: answer
        })
    }

    backSpace = () => {
        const equation = this.state.equation.slice(0, -1)
        this.setState({
            equation
        })
    }
    render(){
        return(
            <CalculatorBody>
                <CalculatorScreen equation={this.state.equation} answer={this.state.answer}/>
                <div style={{marginTop: '26px'}}>
                    <div style={styles.div}>
                        <Button onClick={() => {this.handleClick('1')}}>1</Button>
                        <Button style={styles.button} onClick={() => {this.handleClick('2')}}>2</Button>
                        <Button style={styles.button} onClick={() => {this.handleClick('3')}}>3</Button>
                        <Button notNumber style={styles.button} onClick={() => {this.handleClick('+')}}>+</Button>
                    </div>
                    <div style={styles.div}>
                        <Button onClick={() => {this.handleClick('4')}}>4</Button>
                        <Button style={styles.button} onClick={() => {this.handleClick('5')}}>5</Button>
                        <Button style={styles.button} onClick={() => {this.handleClick('6')}}>6</Button>
                        <Button notNumber style={styles.button} onClick={() => {this.handleClick('-')}}>-</Button>
                    </div>
                    <div style={styles.div}>
                        <Button onClick={() => {this.handleClick('7')}}>7</Button>
                        <Button style={styles.button} onClick={() => {this.handleClick('8')}}>8</Button>
                        <Button style={styles.button} onClick={() => {this.handleClick('9')}}>9</Button>
                        <Button notNumber style={styles.button} onClick={() => {this.handleClick('*')}}>*</Button>
                    </div>
                    <div style={styles.div}>
                        <Button style={{marginLeft:'93px'}} onClick={() => {this.handleClick('0')}}>0</Button>
                        <Button notNumber style={{marginLeft:'105px'}} onClick={() => {this.handleClick('/')}}>/</Button>
                    </div>
                    <div style={{width:'360px', margin: 'auto 0 0 99px'}}>
                        <Button notNumber style={styles.button} onClick={this.handleRemove}>C</Button>
                        <Button notNumber style={styles.button} onClick={this.backSpace}>{`<-`}</Button>
                        <Button style={styles.equals} onClick={this.handleCalculate}>=</Button>
                    </div>
                </div>
            </CalculatorBody>
        )
    }
}

export default Body