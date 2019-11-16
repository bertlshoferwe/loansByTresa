import React, { Component } from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Table, TableBody, TableCell, TableRow,  Typography } from '@material-ui/core';

class VA extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


   

render() {
        const pageSetup = <div className='tabContent' >
                            <Typography variant='h2' className='tabTitle'>
                                Department of Veteran Affairs (VA) Loans
                            </Typography>
                            <Card className= 'cardSpacing'>
                                <CardContent>

                                    <List>

                                        <ListItem>
                                            <ListItemText secondary = 'The U.S. Department of Veterans Affairs (the VA) does not make loans to veterans; it establishes eligibility requirements for VA loans and guarantees them. VA Loan is Designed to offer long-term financing to veterans. VA mortgage loans are issued by federally qualified lenders and are guaranteed by the U.S. Veterans Administration. The VA determines eligibility and issues a certificate to qualifying applicants to submit to their mortgage lender of choice. It is generally easier to qualify for a VA loan than conventional loans. VA loans are offered only to veterans, active duty military, military spouses, reservists, and some government employees, these mortgages are guaranteed by the VA, allowing borrowers to offer competitive rates, and flexible credit requirements.' />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText primary = 'Loans through the Department of Veteran Affairs (VA loans) are made by approved lenders and guaranteed (not insured) by the VA. Borrowers must be either current or former members of the military.' />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'VA loans require an upfront nonrefundable funding fee, which is similar to the FHA’s UFMIP. The funding fee is typically financed into the loan amount. Funding fees vary depending on whether the borrower:' 
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'Is a first-time or repeat borrower' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'Served in the military or in the Reserves or National Guard' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'Makes a down payment of at least 5% or makes no down payment' 
                                            className='nested'
                                            />
                                        </ListItem>


                                        <ListItem>
                                            <ListItemText primary = 'Examples of funding fees below:' 
                                            />
                                        </ListItem>

                                        {/* insert table here */}
                                        <div className='tableWrapper' >
                                            <Table className='table' >
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>Initial loan, Active duty</TableCell>
                                                        <TableCell>2.15%</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Initial loan, Reserve</TableCell>
                                                        <TableCell>2.4%</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Subsequen loan, Active and Reserve</TableCell>
                                                        <TableCell>3.3%</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Disabled</TableCell>
                                                        <TableCell>0.0%</TableCell>
                                                    </TableRow>

                                                </TableBody>
                                            </Table>
                                        </div>

                                        <ListItem>
                                            <ListItemText primary = 'The VA considers the following in determining eligibility for a VA loan:' 
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'The debt-to-income ratio (generally, 41% is the standard)' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'Residual income (i.e., a determination as to whether the borrower has sufficient income, after paying fixed debts, to cover daily living expenses as set forth in VA underwriting guidelines)' 
                                            className='nested'
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText primary = 'The maximum loan amount guaranteed by the VA is determined by:' 
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'Property location' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'The veteran’s entitlement, found on the Certificate of Eligibility' 
                                            className='nested'
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText secondary = 'The VA will guarantee the lesser of 25% of the loan balance or 25% of the conforming loan limit ( for 2019, $484,350 in most areas).' 
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant='body2' color='textSecondary'>
                                            VA appraisal reports are called <strong>Certificates of Reasonable Value (CRV).</strong> If a borrower wishes to purchase a property at a price higher than the value set forth in the CRV, he or she may do so by paying the difference in cash.
                                            </Typography>
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


export default VA