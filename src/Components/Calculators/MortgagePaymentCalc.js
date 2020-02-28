import React, { Component } from 'react';
import { Card, CardHeader, Container, TextField, ButtonBase, Typography, Table, TableBody, TableCell, TableRow, Link } from '@material-ui/core';
import * as emailjs from 'emailjs-com'
import mortgageJs from 'mortgage-js';

    /////////////////////////////////
    // format number in t currency //
    ////////////////////////////////
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })

class MortgagePaymentCalc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Pay: {
                loanAmount: 0,
                principalAndInterest: 0,
                tax: 0,
                insurance: 0,
                total: 0,
                termMonths: 0,
                mortgageInsurance: 0,
            },
            Amount: formatter.format(''),
            Rate : '',
            Terms: '',
            DownP: '',
            FirstName: '',
            LastName: '',
            PhoneNumber: '',
            HomeValue: '',
            CreditScore: '',
            PurchaseType: '',
            LoanType: '',
            claculatorClicked: false,

            errors: {
                isAmountError:false,
                isRateError: false,
                isTermsError: false,
                isDownPError: false,
                isSubmitError: false,
            }, 
               
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleOptionalChange = this.handleOptionalChange.bind(this)
        this.calculate = this.calculate.bind(this) 
    }
    ///////////////////////////////////////////
    // Handeling the input change as well as //
    // validating each input                //
    //////////////////////////////////////////
    handleChange(e, name) {
        e.preventDefault();

        const Value = e.target.value
        const regex=/^\d+(\.\d{1,3})?$/;
        

        if ( Value.length <= 0 ) {
            
            switch( name ){
                case 'Amount':
                    this.setState({
                        [name]: '',
                        errors: {
                            ...this.state.errors,
                            ['is'+name+'Error']: true
                        }
                    })
                    break;
                    case 'DownP':
                    this.setState({
                        [name]: '',
                        errors:{
                            ...this.state.errors,
                            ['is'+name+'Error']: true
                        }
                    })
                    break;
                case 'Rate':
                    this.setState({
                        [name]: '',
                        errors:{
                            ...this.state.errors,
                            ['is'+name+'Error']: true 
                        }
                    })
                    break;
                case 'Terms':
                    this.setState({
                        [name]: '',
                        errors:{
                            ...this.state.errors,
                            ['is'+name+'Error']: true
                        }
                    })
                    break;
                default:
            }
               
           
        }else if( Value.match(regex) ) {
        
        switch( name ){
            case 'Amount':
                this.setState({
                    [name]: Value,
                    errors: {
                        ...this.state.errors,
                        isAmountError: false,
                        isSubmitError: false
                    }
                })
                break;
                case 'DownP':
                this.setState({
                    [name]: Value,
                    errors: {
                        ...this.state.errors,
                        isDownPError: false,
                        isSubmitError: false
                    }
                })
                break;
            case 'Rate':
                this.setState({
                    [name]: Value,
                    errors:{
                        ...this.state.errors,
                        isRateError: false,
                        isSubmitError: false
                    }
                })
                break;
            case 'Terms':
                this.setState({
                    [name]: Value,
                    errors:{
                        ...this.state.errors,
                        isTermsError: false,
                        isSubmitError: false
                    }
                })
            break;
            default:
        }

        };
    }

    handleOptionalChange( e, Name) {
        e.preventDefault();
        const Value = e.target.value
        switch(Name){
            case 'PurchaseType':
                if(Value === 'Refi')
                    this.setState({
                        DownP: '0',
                        PurchaseType: 'Refi',
                        errors: {
                            ...this.state.errors,
                            isDownPError: false
                        }
                })
                if(Value === 'New Purchase')
                    this.setState({
                        DownP: '',
                        PurchaseType: 'New Purchase',
                        HomeValue: '',
                        errors: {
                            ...this.state.errors,
                            isDownPError: false
                        }
                })
                if(Value === '')
                    this.setState({
                        DownP: '',
                        PurchaseType: '',
                        errors: {
                            ...this.state.errors,
                            isDownPError: false
                        }
                })
                if(Value === 'Usda')
                    this.setState({
                        DownP: '',
                        PurchaseType: 'Usda',
                        errors: {
                            ...this.state.errors,
                            isDownPError: false
                        }
                })

                break;
            default:
                this.setState({
                    [Name]: Value,
                    claculatorClicked: false,
                    })
        }
    }
    
    /////////////////////////////////////////////
    // using form data to complete calulation //
    ////////////////////////////////////////////

calculate() {

    let pay = mortgageJs.calculatePayment(
        this.state.Amount, //Home Value
        this.state.DownP, //Down Payment
        this.state.Rate/100, //Instrest Rate
        this.state.Terms*12, //Terms in Years
        0.012,
        0.0013,
        0.010,
        true,
        0.2,
        0);

        this.setState({
            Pay: pay,
            claculatorClicked: true,
        })

        let templateParams = {
            last_name: this.state.LastName,
            first_name: this.state.FirstName,
            telephone: this.state.PhoneNumber,
            credit_rating: this.state.CreditScore,
            purchase_type: this.state.PurchaseType,
            loan_type: this.state.LoanType,
            loan_amount: formatter.format(this.state.Amount),
            down_payment:formatter.format(this.state.DownP),
            property_value:formatter.format(this.state.HomeValue),
            intrest_rate: this.state.Rate,
            loan_length: this.state.Terms,
            total_loan: formatter.format(pay.loanAmount),
            principal: formatter.format(pay.principalAndInterest)
           }

           emailjs.send(
            'gmail',
            'calulator_results',
             templateParams,
            'user_ObgfjLsHhOXpXZz04g8wo'
           )

    };

    
  



render() {
    /////////////////////////
    // destructuring state //
    ////////////////////////
    const { Pay, claculatorClicked, Amount, Rate, Terms, DownP, PurchaseType, LoanType, FirstName, LastName, PhoneNumber, HomeValue, CreditScore } = this.state
    const { isAmountError, isRateError, isTermsError, isDownPError } = this.state.errors

    ///////////////////////////////////////////
    // checking if submit button is enabled //
    // by verifying required fields are     //
    // larger than 0                        //
    //////////////////////////////////////////
    const isEnabled = Amount.length > 0 && Rate.length > 0 && Terms.length > 0 && DownP.length > 0;
   
    /////////////////////////////////////
    // conditional to display         //
    // downpayment or property value //
    // text field                   //
    /////////////////////////////////
    
    const refiShow = (PurchaseType === 'Refi')? 
                                            <TextField
                                                type='number'
                                                id="homeValue"
                                                label="Property Value"
                                                className='inputs'
                                                margin="normal"
                                                variant='filled'
                                                value={HomeValue}
                                                onChange={(e) => {this.handleOptionalChange(e, 'HomeValue')} }
                                            /> 
                                        :
                                            <TextField
                                                required
                                                error = { isDownPError }
                                                type='number'
                                                id={"DownP"}
                                                label="Down Payment"
                                                className='inputs'
                                                margin="normal"
                                                variant="filled"
                                                value={DownP}
                                                onChange={ (e) => {this.handleChange(e, 'DownP')} }
                                            /> 
    
    ////////////////////////////////
    // displaying calculator form //
    ///////////////////////////////
    const MortgageCalculator =<div>
                            <Card>
                                <form  id='mortgageForm' onSubmit={() => { this.calculate() } } className='CalculatorInputLayout'>
                                    
                                    <div className='fullInputLayout' > 

                                        <TextField
                                            type='name'
                                            id="fn"
                                            label="First Name"
                                            className='fullInputs'
                                            margin="normal"
                                            variant='filled'
                                            value={FirstName}
                                            onChange={(e) => {this.handleOptionalChange(e, 'FirstName')} }
                                            />

                                        <TextField
                                            type='name'
                                            id="ln"
                                            label="Last Name"
                                            className='fullInputs'
                                            margin="normal"
                                            variant='filled'
                                            value={LastName}
                                            onChange={(e) => {this.handleOptionalChange(e, 'LastName')} }
                                            />

                                    </div>
                                    <div className='inputLayout' >
                                       
                                    <TextField
                                            type='tel'
                                            id="pn"
                                            label="Phone Number"
                                            className='inputs'
                                            margin="normal"
                                            variant='filled'
                                            value={PhoneNumber}
                                            onChange={(e) => {this.handleOptionalChange(e, 'PhoneNumber')} }
                                            />  


                                        <TextField
                                            id="CreditScore"
                                            select
                                            label="Credit Rating"
                                            className='inputs'
                                            value={CreditScore}
                                            onChange={ (e) => {this.handleOptionalChange(e, 'CreditScore')} }
                                            SelectProps={{
                                            native: true,
                                            }}
                                            margin="normal"
                                            variant="outlined"
                                        >
                                            <option value="" />
                                            <option value={'Excelent'}>Excelent (720 +)</option>
                                            <option value={'Good'}>Good (620-719)</option>
                                            <option value={'Fair'}>Fair (580-619)</option>
                                            <option value={'Poor'}>Poor (- 580)</option>
                                        </TextField>

                                    </div>
                                    <div className='inputLayout' >

                                        <TextField
                                            id="PurchaseType"
                                            select
                                            label="Purchase Type"
                                            className='inputs'
                                            value={PurchaseType}
                                            onChange={ (e) => {this.handleOptionalChange(e, 'PurchaseType')} }
                                            SelectProps={{
                                            native: true,
                                            }}
                                            margin="normal"
                                            variant="outlined"
                                        >
                                            <option value="" />
                                            <option value={'New Purchase'}>New Purchase</option>
                                            <option value={'Refi'}>Refinance</option>
                                            
                                        </TextField>

                                        <TextField
                                            id="LoanType"
                                            select
                                            label="Loan Type"
                                            className='inputs'
                                            value={LoanType}
                                            onChange={ (e) => {this.handleOptionalChange(e, 'LoanType')} }
                                            SelectProps={{
                                            native: true,
                                            }}
                                            margin="normal"
                                            variant="outlined"
                                        >
                                            <option value="" />
                                                    <option value={'Conventional'}>Conventional</option>
                                                    <option value={'Conventional ARM'}>Conventional ARM</option>
                                                    <option value={'FHA'}>FHA</option>
                                                    <option value={'FHA - Arm'}>FHA - ARM</option>
                                                    <option value={'USDA'}>USDA</option>
                                                    <option value={'VA'}>VA</option>
                                                    <option value={'VA - ARM'}>VA - ARM</option>
                                        </TextField>

                                    </div>
                                    <div className='inputLayout' >

                                        <TextField
                                            required
                                            error = { isAmountError }
                                            type='number'
                                            min=''
                                            id="TLA"
                                            label="Loan Amount"
                                            className='inputs'
                                            margin="normal"
                                            variant="filled"
                                            value={Amount}
                                            onChange={(e) => {this.handleChange(e, 'Amount')} }
                                            />
                                        
                                        {refiShow}

                                    </div>
                                    <div className='inputLayout' >
                                            <TextField
                                                required
                                                error = { isRateError } 
                                                type='number'
                                                id="Rate"
                                                label="Intrest Rate"
                                                className='inputs'
                                                margin="normal"
                                                variant="filled"
                                                value={Rate}
                                                onChange={ (e) => {this.handleChange(e, 'Rate')} }
                                            />

                                            <TextField
                                                required
                                                id="term"
                                                error = { isTermsError }
                                                select
                                                label="Loan Length"
                                                className='inputs'
                                                value={Terms}
                                                onChange={ (e) => {this.handleChange(e, 'Terms')} }
                                                SelectProps={{
                                                native: true,
                                                }}
                                                margin="normal"
                                                variant="outlined"
                                            >
                                                <option value="" />
                                                    <option value={30}>30 Years</option>
                                                    <option value={25}>25 Years</option>
                                                    <option value={20}>20 Years</option>
                                                    <option value={15}>15 Years</option>
                                                    <option value={10}>10 Years</option>
                                            </TextField> 
                                        </div>                               

                                </form>
    
                            <div className='calculateButtonwrapper'>
                                <ButtonBase 
                                    focusRipple
                                    disabled={!isEnabled}
                                    className='calculateButton'
                                    onClick={ () => {this.calculate()} }
                                >
                                    <Typography  variant='h6' >
                                    Calculate Payment
                                    </Typography>
                                </ButtonBase>
                            </div>
                           
                        </Card>
                        </div>

        const CalculatorAnswer = ( claculatorClicked)? 
                                <Card className='tableCard'>
                                    <CardHeader
                                        className='cardHeader'
                                        title="Results"
                                    />
                                    <Table className='table'>
                                        <TableBody className='tableBody'>
                                            <TableRow>
                                                <TableCell className='tableCell'>
                                                    <Typography varient='h4'>
                                                        Total Loan Amount:
                                                    </Typography>
                                                </TableCell>
                                                <TableCell className='tableCell'>
                                                    <Typography varient='body1'>
                                                        {formatter.format(Pay.loanAmount)}
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell className='tableCell'>
                                                    <Typography>
                                                        Principal & Interest:
                                                    </Typography>
                                                </TableCell>
                                                <TableCell className='tableCell'>
                                                    <Typography>
                                                        {formatter.format( Pay.principalAndInterest )}
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                            
                                        </TableBody>
                                        
                                    </Table>
                                        <div className='captionTextWrapper'>
                                            <div className='captionText'>
                                                <Typography variant='caption' >
                                                    If you would like more information call Tresa today
                                                </Typography>
                                                <Typography>
                                                    <Link href={'tel:8019233166' }>801 923 3166</Link>
                                                </Typography>
                                            </div>
                                        </div>
                                </Card>
                            :
                                <div/>

          
        
        const Display = <div className='pageWrapper'>
                            <div className='calculatorWrapper'>
                                { MortgageCalculator }
                                { CalculatorAnswer }
                            </div>
                            <Typography variant='caption' >
                                The above information may help you analyze your financial needs. It is based on information and assumptions provided by you regarding your goals, expectations and financial situation. The calculations do not infer that the company assumes any fiduciary duties. The calculations provided should not be construed as financial, legal or tax advice. In addition, such information should not be relied upon as the only source of information. This information is supplied from sources we believe to be reliable but we cannot guarantee its accuracy. Hypothetical illustrations may provide historical or current performance information. Past performance does not guarantee nor indicate future results.  The payment examples do not include mortgage insurance. The actual payment will be higher if mortgage insurance is required on your loan. The payment examples do not include amounts for taxes and insurance premiums. Your actual payment obligation will be greater considering taxes and insurance premiums.
                            </Typography>
                        </div>


    return ('',
        <Container  maxWidth="md" >
            
            { Display }

        </Container>
    );
}
}


export default MortgagePaymentCalc