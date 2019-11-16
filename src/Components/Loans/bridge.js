import React, { Component } from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@material-ui/core';

class Bridge extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


   

render() {
        const pageSetup = <div className='tabContent' >
                            
                            <Typography variant='h2' className='tabTitle'>
                                Bridge Loans
                            </Typography>

                            <Card className= 'cardSpacing'>
                                <CardContent>

                                    <List>
                                        
                                        <ListItem>
                                            <ListItemText secondary = 'The term “bridge financing” applies to a range of short-term loans that are taken out by homeowners who are waiting for long-term financing. In addition to using a bridge loan while constructing a home, some borrowers need a bridge loan to help themselves through the transition from an existing home into a new home when the existing home has not yet sold. These borrowers can use a bridge loan to secure the funds needed for a down payment while waiting for their home to sell. The loan is secured by the existing home that the borrowers are trying to sell.' />
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


export default Bridge