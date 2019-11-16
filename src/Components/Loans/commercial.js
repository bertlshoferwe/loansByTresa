import React, { Component } from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@material-ui/core';

class Commercial extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


   

render() {
        const pageSetup = <div className='tabContent' >
                            
                            <Typography variant='h2' className='tabTitle'>
                                Commercial Loans
                            </Typography>

                            <Card className= 'cardSpacing'>
                                <CardContent>

                                    <List>
                                        
                                        <ListItem>
                                            <ListItemText secondary = 'If you are looking to buy a property for a non-residential purpose, there are several commercial loan options available. Whether you’re looking for a residential investment property loan, financing for a multi-unit property, or to buy an office building, Tresa Bertlshofer | Altius Mortgage has the financing options you need.' />
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


export default Commercial