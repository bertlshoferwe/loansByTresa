import React, { Component } from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Link,  Typography } from '@material-ui/core';

class TypesLoans extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


   

render() {
        const pageSetup = <div className='tabContent' >
                            <Typography variant='h2' className='tabTitle'>
                                Types Of Loans
                            </Typography>
                            <Card className= 'cardSpacing'>
                                <CardContent>

                                    <Typography variant='h5'>
                                        Fixed-rate vs Adjustable-rate Mortgage Loans
                                    </Typography>

                                    <List>
                                        <ListItem>
                                            <ListItemText secondary = 'One of the first choices a homebuyer will need to make is whether you want a fixed-rate or an adjustable-rate mortgage loan. The bulk of loans will fit into one of these two categories, however, there is a third option that will allow you to “hybrid” the two.' />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText primary='Fixed-rate Mortgage:' />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary ='Unlike an adjustable-rate mortgage the interest rate is set at the time you take out the loan and will not change. Fixed-rate home loans can be 10 years, 15 years, 20 years or 30 years fixed. 30-year fixed is the most common because it allows your mortgage payment to be the lowest.' 
                                            className='nested' 
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText primary='Adjustable-rate mortgage, (ARM):' />
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant='body2' color='textSecondary' className='nested'>The interest rate of the mortgage adjusts periodically based on market conditions. For example, your payment will go up if rates go up and go down if rates go down.
                                                    {/* eslint-disable-next-line */}
                                                <Link href="javascript:void(0);" > More Information</Link></Typography>
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText primary='Hybrid ARM:' />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary ='Features an initial fixed interest rate for a certain amount of time and then becomes an adjustable-rate for the remainder of the term. Standard terms are 3, 5, 7, or 10 yrs. For example, a 3 / 1 ARM has a fixed rate for three years and then adjusts every year thereafter. Other popular hybrid ARMS include the 5 / 1 and the 7 / 1.' 
                                            className='nested' 
                                            />
                                        </ListItem>
                                        
                                    </List>

                                </CardContent>
                            </Card>

                            <Card className= 'cardSpacing'>
                                <CardContent>

                                    <Typography variant='h5'>
                                        Debt-to-Income Ratios
                                    </Typography>

                                    <List>
                                        <ListItem>
                                            <ListItemText secondary = 'The debt-to-income ratio (DTI) is used when underwriting a loan to determine if the borrower is able to afford the mortgage. Traditionally, the following two ratios are calculated.' />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText primary='Primary/front-end debt ratio:' />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary ='monthly housing expense (e.g., principal, interest, taxes, insurance, and mortgage insurance) divided by gross monthly income.' 
                                            className='nested' 
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText primary='Secondary/back-end debt ratio:' />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary ='all monthly debt obligations (e.g., housing expense and other monthly obligations) divided by the gross monthly income. Does not include utility payments (though utility payments are included when calculating ratios for a VA loan), car insurance payments, phone bills, cable TV bills, etc. Include anything showing on the credit report, as well as obligations such as alimony and child support.' 
                                            className='nested' 
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


export default TypesLoans