import React, { Component } from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@material-ui/core';

class Conventional extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


   

render() {
        const pageSetup = <div className='tabContent' >
                            <Typography variant='h2' className='tabTitle'>
                                Conventional Loans
                            </Typography>
                            <Card className= 'cardSpacing'>
                                <CardContent>
                                    
                                    <List>
                                        <ListItem>
                                            <ListItemText secondary = 'A conventional mortgage is a mortgage that is NOT insured or guaranteed by the Federal Housing Administration (FHA), the Department of Veterans Affairs (VA), or the Rural Housing Service (RHS) of the U.S. Department of Agriculture (USDA).' />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText secondary ='A conventional, or conforming, mortgage conforms to maximum loan amounts (loan limits), down payment requirements, borrower income requirements, debt-to-income ratios, and other underwriting guidelines established by Fannie Mae and Freddie Mac. It may have either a fixed or adjustable rate.' 
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText secondary ='Typically, conventional loans have better rates, terms and/or lower fees than other types of loans. However, conventional loans typically require a borrower to have good-to-excellent credit, reasonable amounts of monthly debt obligations, a down payment of 5-20% and reliable monthly income.' 
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText secondary ='While many think that a 20% down payment is required for all conventional loans, many lenders now offer low down payment options as low as 5%, for those that qualify.' 
                                            />
                                        </ListItem>
                                        
                                    </List>

                                </CardContent>
                            </Card>

                            <Card className= 'cardSpacing'>
                                <CardContent>

                                    <Typography variant='h5'>
                                        Down Payment of 3%
                                    </Typography>

                                    <List>
                                        <ListItem>
                                            <ListItemText secondary = 'In November 2014, Fannie Mae and Freddie Mac announced that they would purchase conventional loans made to a borrower who makes a down payment as low as 3%, if the loan meets the following requirements:' />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText secondary='The interest rate is fixed' 
                                            className= 'nested'
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText secondary ='The loan term does not exceed 30 years'
                                            className='nested' 
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText primary='The loan is made:' />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary ='To a first-time homebuyer' 
                                            className='nested' 
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary ='To finance the purchase of a principal residence' 
                                            className='nested' 
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText secondary ='These mortgages are known as 97% LTV loans.' 
                                            />
                                        </ListItem>
                                        
                                    </List>

                                </CardContent>
                            </Card>

                            <Card className= 'cardSpacing'>
                                <CardContent>

                                    <Typography variant='h5'>
                                    Private Mortgage Insurance (PMI)
                                    </Typography>

                                    <List>
                                        <ListItem>
                                            <ListItemText secondary = 'Conventional loans with a loan-to-value ratio over 80% require private mortgage insurance (PMI). PMI benefits borrowers by allowing them to purchase homes with less than 20% down and protects lenders from borrower default. In the event that a property is foreclosed or sold through short sale, the PMI may reimburse the lender for its losses up to a certain amount (12 U.S.C. §4901 et seq.).' />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText primary='According to the  Homeowner’s Protection Act (HPA) , a lender must cancel PMI:' 
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText secondary ='When a borrower pays the mortgage down to 78% of the original value, if current on payments and in good standing, or'
                                            className='nested' 
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText secondary ='When the mortgage loan reaches its midpoint (e.g., if a 30-year loan, after 180 payments)'
                                            className='nested' 
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText primary='A borrower may submit a written request for the cancellation of the PMI:' />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary ='When the borrower pays the loan amount down to 80% LTV, or' 
                                            className='nested' 
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary ='If the borrower has not made a payment that was more than 30 days late in the past year or 60 days late in the past two years' 
                                            className='nested' 
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText secondary ='Issues such as loan program, LTV ratio, and the borrower’s credit score affect mortgage insurance rates.' 
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText secondary ='To avoid mortgage insurance, a lender may offer programs that include a first mortgage at 80% combined with a second mortgage to provide the required 20% down payment. If the borrower is able to qualify for both loans (simultaneous loans) under the Ability to Repay Rule, mortgage insurance may be avoided.' 
                                            />
                                        </ListItem>
                                        
                                    </List>

                                </CardContent>
                            </Card>
                            
                        </div> 
    

    return (
        pageSetup
    );
}
}


export default Conventional