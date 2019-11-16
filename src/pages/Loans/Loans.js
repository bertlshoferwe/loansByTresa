import React, { Component, Fragment }     from 'react';
import './_Loans.scss'
import TypesLoans  from '../../Components/Loans/types';
import Bridge from '../../Components/Loans/bridge';
import Commercial from '../../Components/Loans/commercial';
import Construction from '../../Components/Loans/construction';
import Conventional from'../../Components/Loans/conventional';
import FHA from '../../Components/Loans/fha';
import Jumbo from '../../Components/Loans/jumbo';
import Refinance from '../../Components/Loans/refinance';
import Reverse from '../../Components/Loans/reverse';
import USDA from '../../Components/Loans/usda';
import VA from '../../Components/Loans/va';
import { List, ListItem, ListItemText, Container, Drawer, Fab } from '@material-ui/core';

class Loans extends Component{ 
    constructor(props){
        super(props);
        this.state={
            tab: 0,
            isDrawerOpen: false,
            width: window.innerWidth,
        };

        this.switchTab = this.switchTab.bind(this)
        this.closeDrawer = this.closeDrawer.bind(this)
        this.openDrawer = this.openDrawer.bind(this)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    // Update window dimensions
    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth
        });
        }

    closeDrawer() {
        this.setState({
            isDrawerOpen: false
        })
    };

    openDrawer() {
        this.setState({
            isDrawerOpen: true
        })
    };

    switchTab(data) {
        this.setState({
            tab: data
        })

        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    }

    render() {
       const { width, isDrawerOpen, tab} = this.state
        //Tab Names to loop through
        const tabNames =[
            'Types Of Loans',
            'Bridge',
            'Commercial',
            'Construction',
            'Conventional',
            'FHA',
            'Jumbo',
            'Refinance',
            'Reverse Mortgages',
            'USDA',
            'VA'
        ]
        //Map over tabNames
        const Tabs = tabNames.map( ( tabNames, index ) =>
            <ListItem key={index}
                      button
                      onClick={() => {this.switchTab( index ); this.closeDrawer() } }
                      className={( tab === index)? 'tab active' : 'tab' } 
                        >
                    <ListItemText primary ={tabNames}/>
            </ListItem>
        )
        //Format tabs
        const tabSetup =( width < 600 )?<Drawer 
                                                        anchor="right" 
                                                        open={ isDrawerOpen } 
                                                        onClose={this.closeDrawer}
                                                        
                                                        >
                                                            <List>
                                                                {Tabs}
                                                            </List>
                                                    </Drawer>
                                                    :
                                                    <div className='tabWrapper tabList'>
                                                        <List>
                                                            {Tabs}
                                                        </List>
                                                    </div>;

const fabOpen = ( width < 600)? <Fab className='azFab' onClick={this.openDrawer}>
                                                <i className="material-icons">
                                                    sort
                                                </i>
                                            </Fab>
                                            :
                                            <div />

const contentSetup =<div>
                                { tab === 0 && < TypesLoans /> }
                                { tab === 1 && < Bridge /> }
                                { tab === 2 && < Commercial /> }
                                { tab === 3 && < Construction />  }
                                { tab === 4 && < Conventional /> }
                                { tab === 5 && < FHA /> }
                                { tab === 6 && < Jumbo /> }
                                { tab === 7 && < Refinance /> }
                                { tab === 8 && < Reverse />}
                                { tab === 9 && < USDA />}
                                { tab === 10 && < VA /> }
                            </div>
                                    

        const pageSetup = <div className='pageDirection'>
            <Fragment>
                { tabSetup }
            </Fragment>
            <Fragment>
                { contentSetup }
            </Fragment>
        </div>

         
        return(
            <Container className='containerMargin' maxWidth="lg" >
                {pageSetup}
                {fabOpen}
            </Container>
        );
    }
}


export default Loans