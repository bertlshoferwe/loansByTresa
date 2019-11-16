import React, { Component } from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@material-ui/core';

class Reverse extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


   

render() {
        const pageSetup = <div className='tabContent' >
                            <Typography variant='h2' className='tabTitle'>
                                Reverse Mortgage
                            </Typography>
                            <Card className= 'cardSpacing'>
                                <CardContent>

                                    <List>

                                        <ListItem>
                                            <ListItemText secondary = 'Reverse mortgages are popular products for older homeowners who have equity in their homes and little or no income. They allow older homeowners to use equity in their homes to meet the expenses of living, or to pay for home improvements. Borrowers are not required to repay the loan as long as they continue to live in the home. The borrower may elect to take funds as:' />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText secondary = 'A lump sum payment, or' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'A monthly advance for a fixed period of time' 
                                            className='nested'
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText primary = 'The loan is due at the occurrence of one of the following events:' />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'The sale of the property' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'The death of the borrower' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'A permanent move from the property by the borrower' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'Failure on the part of the borrower to live in the property for 12 consecutive months without notice to the lender' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'A failure to comply with the terms of the loan (e.g., failure to pay property taxes or maintain hazard insurance)' 
                                            className='nested'
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText secondary = 'The most commonly-known reverse mortgage product is the home equity conversion mortgage (HECM) offered by the FHA.' 
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


export default Reverse