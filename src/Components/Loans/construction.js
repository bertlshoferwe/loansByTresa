import React, { Component } from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Link,  Typography } from '@material-ui/core';

class Construction extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


   

render() {
        const pageSetup = <div className='tabContent' >
                            <Typography variant='h2' className='tabTitle'>
                                Construction Loans
                            </Typography>
                            <Card className= 'cardSpacing'>
                                <CardContent>

                                    <List>

                                        <ListItem>
                                            <ListItemText secondary = 'Construction loans are temporary loans used to finance the construction of a dwelling. Construction loans are typically lines of credit from which funds are drawn as construction progresses and expenses are incurred. Interest is charged on the funds as they are withdrawn. Once the property is complete, a long-term, permanent loan is obtained to pay off the construction loan.' />
                                        </ListItem>
                                        
                                    </List>

                                </CardContent>
                            </Card>

                            <Card className= 'cardSpacing'>
                                <CardContent>

                                    <Typography variant='h5'>
                                        One-Time Close Construction-To-Permanent Loans
                                    </Typography>

                                    <List>
                                        <ListItem>
                                            <ListItemText secondary = 'Instead of the two phases typical of most construction mortgage programs where a first closing takes place at the start of building to finance the land and the build, followed by a second closing when the home is complete to put the permanent financing in place, there is just one closing with One-time Close. This one closing arranges financing for the construction, lot purchase (if applicable), and permanent loan, all wrapped up into one.' />
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


export default Construction