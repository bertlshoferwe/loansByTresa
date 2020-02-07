import React, { Component, Fragment } from 'react';
import MortgagePaymentCalc from '../../Components/Calculators/MortgagePaymentCalc'
import { Typography } from '@material-ui/core';
import './_Calculator.scss'

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'mortgage'
        };
    }


    pageNavigate( pageRoute ){
        this.props.history.push({
            pathname: pageRoute,
        })}

render() {
    document.title='Loans By Tresa - Calculator'

    const { tab } = this.state;

    
                 const CalculatorView = <div>
                                            { tab === 'mortgage' && < MortgagePaymentCalc /> }
                                        </div>

                               
                          

   


    return (
        <Fragment>
            <Typography variant="h2" className='pageTitle'>
                Mortgage Calculator
            </Typography>
            { CalculatorView }

        </Fragment>
    );
}
}


export default Calculator