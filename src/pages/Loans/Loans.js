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
import { List, ListItem, ListItemText, Container } from '@material-ui/core';

class Loans extends Component{ 
    constructor(props){
        super(props);
        this.state={
            tab: 0
        };

        this.switchTab = this.switchTab.bind(this)
    }

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
                      onClick={() => {this.switchTab( index ) } }
                      className={(this.state.tab === index)? 'tab active' : 'tab'} 
                        >
                    <ListItemText primary ={tabNames}/>
            </ListItem>
        )
          
        //Format tabs
        const tabSetup = <List className='tabList'>
            {Tabs}
        </List>

            const tab7 = 'this is tabe two'
            const tab8 = 'this is tabe two'
            const tab9 = 'this is tabe two'
            const tab10 = 'this is tabe two'

const contentSetup =<div>
                                {this.state.tab === 0 && < TypesLoans /> }
                                {this.state.tab === 1 && < Bridge /> }
                                {this.state.tab === 2 && < Commercial /> }
                                {this.state.tab === 3 && < Construction />  }
                                {this.state.tab === 4 && < Conventional /> }
                                {this.state.tab === 5 && < FHA /> }
                                {this.state.tab === 6 && < Jumbo /> }
                                {this.state.tab === 7 && < Refinance /> }
                                {this.state.tab === 8 && < Reverse />}
                                {this.state.tab === 9 && < USDA />}
                                {this.state.tab === 10 && < VA /> }
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
            </Container>
        );
    }
}


export default Loans