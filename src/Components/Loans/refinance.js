import React, { Component } from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@material-ui/core';

class Refinance extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


   

render() {
        const pageSetup = <div className='tabContent' >
                            <Typography variant='h2' className='tabTitle'>
                                Refinance Loan
                            </Typography>
                            <Card className= 'cardSpacing'>
                                <CardContent>

                                    <List>

                                        <ListItem>
                                            <ListItemText secondary = 'Obtaining a new mortgage loan on a property already owned. Many state legislatures passed laws that require mortgage lenders to show that a refinance will provide a tangible net benefit to the borrower. A loan (debt) might be refinanced for various reasons:' />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText secondary = 'To take advantage of a better interest rate (a reduced monthly payment or a reduced term)' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'To consolidate other debt(s) into one loan (a potentially longer/shorter term contingent on interest rate differential and fees)' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'To reduce the monthly repayment amount (often for a longer term, contingent on interest rate differential and fees)' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'To reduce or alter risk (for example, switching from a variable-rate to a fixed-rate loan)' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'To free up cash (often for a longer term, contingent on interest rate differential and fees)' 
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


export default Refinance