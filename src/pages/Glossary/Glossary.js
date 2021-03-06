import React, { Component }         from 'react';
import {Terms}                      from '../../terms';
import ReactGA from 'react-ga';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Card, CardContent, Drawer, List, ListItem, Typography, Container, Fab }   from '@material-ui/core';
import './_Glossary.scss'

class Glossary extends Component{ 
    constructor(props){
        super(props);
        this.state={
            isDrawerOpen: false,
        };
        

        this.closeDrawer = this.closeDrawer.bind(this)
        this.openDrawer = this.openDrawer.bind(this)

    }


    closeDrawer() {
        this.setState({
            isDrawerOpen: false
        })
        ReactGA.event({
            category: 'Glossary Drawer',
            action: `Closed Drawer`
          });
    };

    openDrawer() {
        this.setState({
            isDrawerOpen: true
        })
        ReactGA.event({
            category: 'Glossary Drawer',
            action: `Opened Drawer`
          });
    };


    render() {
        document.title='Loans By Tresa - Glossary'

        const { isDrawerOpen } = this.state

        const alphabet = []

        for (var i = 0; i < 26; i++) {

            const lowerCase = String.fromCharCode( 97 + i)
            const upperCase = String.fromCharCode(65 + i)

            alphabet.push(
                <ListItem button key={i} onClick={()=>{this.closeDrawer()}} >
                    <AnchorLink className='links' offset='200' href={'#'+lowerCase}>{ upperCase}</AnchorLink>
                </ListItem>
                )
          
          }
        
                let termCard = Terms.map((data, index) => {
                                                    return  <Card className='cardSpacing' key={index} id={data.id} ref={ data.id } >
                                                                <CardContent>

                                                                    <Typography variant="h5">
                                                                        {data.term}
                                                                    </Typography>

                                                                    <Typography className='description' variant="body1">
                                                                        {data.description}
                                                                    </Typography>

                                                                    <Typography className='nested' variant="body2">
                                                                        {data.nested}
                                                                    </Typography>

                                                                </CardContent>
                                                            </Card>
                                                        })

                const fabNav = <Fab className='azFab' onClick={this.openDrawer}>
                                    <Typography variant='h6'>
                                        A-Z
                                    </Typography>
                                </Fab>
                
                
                const alphaDrawer = <Drawer 
                                        anchor="right" 
                                        open={isDrawerOpen} 
                                        onClose={this.closeDrawer}
                                        
                                        >
                                            <List >
                                                {alphabet}
                                            </List>
                                    </Drawer>

        return(
            <Container className='containerMargin' maxWidth="md" >
                        <Typography variant="h2" className='pageTitle'>
                            Glossary
                        </Typography>
                    {termCard}
                    {fabNav}
                    {alphaDrawer}

            </Container>
        );
    }
}


export default Glossary