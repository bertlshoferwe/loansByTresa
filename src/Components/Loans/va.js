import React, { Component } from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Paper, TableHead, Table, TableBody, TableCell, TableRow,  Typography } from '@material-ui/core';

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
                                            <ListItemText secondary = 'VA loans require an upfront nonrefundable funding fee, which is similar to the FHA’s UFMIP. The funding fee is typically financed into the loan amount. Funding fees vary depending on whether the borrower is a first-time or repeat borrower' 
                                            />
                                        </ListItem>
                                        
                                        <ListItem>
                                            <ListItemText primary = 'Examples of funding fees below:' 
                                            />
                                        </ListItem>

                                        {/* insert table here */}
                                        <Paper className='tableWrapper' >
                                                <Table className='table' size='small'>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell><strong>Type of Loan</strong></TableCell>
                                                            <TableCell><strong>Down Payment</strong></TableCell>
                                                            <TableCell><strong>Percentage of First Time Use</strong></TableCell>
                                                            <TableCell><strong>Percentage for Subsequent Use</strong></TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        
                                                        <TableRow>
                                                            <TableCell><strong>Purchase and Construction Loans</strong> </TableCell>
                                                            <TableCell> 
                                                                <TableRow>
                                                                    <TableCell>None</TableCell>
                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell>5% but less than 10%</TableCell>                                                                        
                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell>10% or more</TableCell>
                                                                </TableRow>
                                                            </TableCell>
                                                            <TableCell>
                                                                <TableRow>
                                                                    <TableCell>2.30%</TableCell>
                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell>1.65%</TableCell>
                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell>1.40%</TableCell>
                                                                </TableRow>
                                                            </TableCell>
                                                            <TableCell>
                                                                <TableRow>
                                                                    <TableCell>3.60%</TableCell>
                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell>1.65%</TableCell>
                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell>1.40%</TableCell>
                                                                </TableRow>
                                                            </TableCell>
                                                        </TableRow>

                                                        <TableRow>
                                                            <TableCell><strong>Cash-Out Refinance Loans</strong></TableCell>
                                                            <TableCell>N/A</TableCell>
                                                            <TableCell>2.30%</TableCell>
                                                            <TableCell>3.60%</TableCell>
                                                        </TableRow>

                                                        <TableRow>
                                                            <TableCell><strong>IRRRL's</strong></TableCell>
                                                            <TableCell>N/A</TableCell>
                                                            <TableCell>0.50%</TableCell>
                                                            <TableCell>0.50%</TableCell>
                                                        </TableRow>

                                                        <TableRow>
                                                            <TableCell><strong>Loan Assumptions</strong></TableCell>
                                                            <TableCell>N/A</TableCell>
                                                            <TableCell>2.30%</TableCell>
                                                            <TableCell>3.60%</TableCell>
                                                        </TableRow>

                                                    </TableBody>
                                                </Table>
                                        </Paper>

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
                                            <ListItemText secondary = 'For Veterans who have previously used entitlement and such entitlement has not been restored, the VA will guarantee the lesser of 25% of the loan balance or 25% of the conforming loan limit ( Conformingloan limit for 2020, $1,500,000).' 
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