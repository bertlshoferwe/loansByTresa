import React, { Component } from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@material-ui/core';

class USDA extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


   

render() {
        const pageSetup = <div className='tabContent' >
                            <Typography variant='h2' className='tabTitle'>
                                USDA Loan
                            </Typography>
                            <Card className= 'cardSpacing'>
                                <CardContent>

                                    <List>

                                        <ListItem>
                                            <ListItemText secondary = 'A USDA Loan is a mortgage loan that is insured by the US Department of Agriculture. USDA Loans are intended to help families and individuals with low or very low incomes own homes. USDA Loans are only offered in rural and certain suburban areas, and often have 100% financing.' />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText primary = 'Some benfits of USDA Loans are:' />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'The sale of the property' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'Low Fix Rate Mortgage Options.' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = '100% Financing.' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = '100% refinance up to the value of your home.' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'The Government insures the loan; therefore, they are usually easier to get, as well as less risk to the lender.' 
                                            className='nested'
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText secondary = 'A USDA loan can be used for New Constructions, Existing Homes, Foreclosures or use to repair or add on to your home.' 
                                            className='nested'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'No Prepayment penalty.' 
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


export default USDA