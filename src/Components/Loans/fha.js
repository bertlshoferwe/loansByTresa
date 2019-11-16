import React, { Component } from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@material-ui/core';

class FHA extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


   

render() {
        const pageSetup = <div className='tabContent' >
                            <Typography variant='h2' className='tabTitle'>
                                Federal Housing Administration (FHA) Loans
                            </Typography>
                            <Card className= 'cardSpacing'>
                                <CardContent>

                                    <Typography variant='h5'>
                                        Fixed-rate vs Adjustable-rate Mortgage Loans
                                    </Typography>

                                    <List>
                                        <ListItem>
                                            <ListItemText secondary = 'FHA loans are an attractive option, especially for first-time homeowners because it is insured by the Federal Housing Administration (FHA). Primarily, the federal government insures loans for FHA- approved lenders in order to reduce their risk of loss if a borrower defaults on their mortgage payments.Typically the borrower can be approved with 3.5% down vs 20% that is required on other loan programs. FHA Loans are a great option for first time home buyers, thanks to the flexible credit score requirements and down payments. The FHA helps protect lenders, making it easier for non-traditional borrowers to buy a home.' />
                                        </ListItem>

                                        <ListItem>
                                            <Typography variant='body2' color='textSecondary' >
                                                <strong>Federal Housing Administration (FHA)</strong> loans are loans made by approved lenders and insured by the federal government through the FHA. FHA loans are only offered for owner-occupied primary residences.
                                            </Typography>
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText primary ='For loans originated after June 3, 2013, the maximum time period required for payment of the annual MIP is as follows:' 
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant='body2' color='textSecondary' className='nested' >
                                                <strong>11 years</strong> for all loans, regardless of term, with an original principal loan balance that results in an LTV of less than or equal to 90% 
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant='body2' color='textSecondary' className='nested' >
                                                <strong>The term of the mortgage or 30 years, whichever is less, </strong> for all loans with an original principal loan balance that results in an LTV of more than 90%
                                            </Typography>
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText primary='Credit Score Requirements' />
                                        </ListItem>
                                        
                                        <ListItem>
                                            <ListItemText secondary ='In general, when applying for a mortgage loan:' 
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary ='Borrowers with a minimum score of 580 or above are eligible for maximum financing' 
                                            className='nested' 
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary ='Borrowers with a minimum score of 500 to 579 will be eligible for a loan with up to 90% LTV' 
                                            className='nested' 
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary ='Borrowers with a minimum score under 500 are not eligible for FHA financing' 
                                            className='nested' 
                                            />
                                        </ListItem>


                                        <ListItem>
                                            <ListItemText primary='Income Ratios' />
                                        </ListItem>
                                        
                                        <ListItem>
                                            <ListItemText secondary ='The income ratios used for FHA files that are manually underwritten are generally 31% (front-end)/43% (back-end). For qualification purposes, this means that the monthly payments on the loan (i.e., principal, interest, property taxes, and insurance) may not exceed 31% of the borrower’s gross monthly income, and total monthly debt may not exceed 43% of gross monthly income.' 
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary ='If an FHA borrower wishes to have their FHA file transferred while it is in process, they will need to request the transfer in writing and pay any fees due to the original lender' 
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary ='The FHA sets a maximum loan amount by county, called the base loan amount. The UFMIP can be financed in addition to the base loan amount. If a borrower qualifies, the maximum FHA loan available is a 96.5% LTV loan (i.e., a minimum 3.5% down payment is required for an FHA loan).' 
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary ='FHA 203k Loan - The FHA 203k is a renovation loan program that provides funds for both the purchase and renovation of a home. There are two types of an FHA 203k loan. The first is normal 203k, which is given for properties that need structural repairs such as a new roof or a room addition. The second is the streamlined203k, which is given for non-structural repairs such as painting and new appliances. The minimum Loan Amount is $5000.' 
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


export default FHA