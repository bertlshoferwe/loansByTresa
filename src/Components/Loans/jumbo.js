import React, { Component } from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@material-ui/core';

class Jumbo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


   

render() {
        const pageSetup = <div className='tabContent' >
                            <Typography variant='h2' className='tabTitle'>
                                Jumbo Loans
                            </Typography>
                            <Card className= 'cardSpacing'>
                                <CardContent>
                                   
                                    <List>

                                        <ListItem>
                                            <ListItemText secondary = 'Any loan with a loan amount in excess of Freddie Mac or Fannie Mae loan limits is considered a "jumbo" loan.' />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText secondary = 'Rates on jumbo loans are typically higher than conforming loans. Jumbo Loans are typically used to buy more expensive homes and high-end custom construction homes. Typically Jumbo Loans require a higher down payment than traditional loans. If you are seeking to purchase a home that exceeds the conventional loan limit in your county, you will need a jumbo loan. In the past, these had very strict requirements, but Tresa Bertlshofer | Altius Mortgage can find a solution that works for you.' />
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


export default Jumbo