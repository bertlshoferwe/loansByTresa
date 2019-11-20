import React, { Component, Fragment }     from 'react';
import queryString from 'query-string';
import './_Loans.scss';
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
            tab: '',
            //url search to match to set tab
            type: [ 'typ', 'type', 'type o', 'type_of', 'type_of_l', 'type_of_lo', 'type_of_loa', 'type_of_loan', 'type o', 'type of', 'type of l', 'type of lo', 'type of loa', 'type of loan', ],
            bridge:[ 'br', 'bri', 'brid', 'bridg', 'bridge',],
            commercial:[ 'com', 'comm', 'comme', 'comme', 'commer', 'commerc','commerc', 'commerci', 'commercia', 'commercial', ],
            construction:[ 'cons', 'const', 'constr', 'constru', 'construc', 'construct', 'constructi', 'constructio', 'construction',],
            conventional:[ 'conv', 'conve', 'conven', 'convent', 'conventi', 'conventio', 'convention', 'conventiona', 'conventional', ],
            fha:[ 'fha', ],
            jumbo:[ 'jum', 'jumb', 'jumbo',],
            refinance:[ 'ref', 'refi', 'refin', 'refina', 'refinan', 'refinanc', 'refinance', ],
            reverse:[ 'rev', 'reve', 'rever', 'revers', 'reverse', 'reverse m', 'reverse mo', 'reverse mor', 'reverse mort', 'reverse mortg', 'reverse mortga', 'reverse mortgag', 'reverse mortgage', 'reverse mortgages', 'reverse_m', 'reverse_mo', 'reverse_mor', 'reverse_mort', 'reverse_mortg', 'reverse_mortga', 'reverse_mortgag', 'reverse_mortgage', 'reverse_mortgages'  ],
            usda:[ 'us', 'usd', 'usda', ],
            va:[ 'va', 'vet', ],
            isDrawerOpen: false,
            width: window.innerWidth,
        };

        this.switchTab = this.switchTab.bind(this)
        this.closeDrawer = this.closeDrawer.bind(this)
        this.openDrawer = this.openDrawer.bind(this)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
        this.setTabOnPageLoad = this.setTabOnPageLoad.bind(this)
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);

       this.setTabOnPageLoad()
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    setTabOnPageLoad() {
        const search = queryString.parse(this.props.location.search)
        const searchTab = search.tab

        // use this.state.match to see if search url query is true or false
        const type = this.state.type.includes(searchTab)
        const bridge = this.state.bridge.includes(searchTab)
        const commercial = this.state.commercial.includes(searchTab)
        const construction = this.state.construction.includes(searchTab)
        const conventional = this.state.conventional.includes(searchTab)
        const fha = this.state.fha.includes(searchTab)
        const jumbo = this.state.jumbo.includes(searchTab)
        const refinance = this.state.refinance.includes(searchTab)
        const reverse = this.state.reverse.includes(searchTab)
        const usda = this.state.usda.includes(searchTab)
        const va = this.state.va.includes(searchTab)

        //determin what tab should be shown
        if ( type === true) {
            this.setState({
                tab: 'types of loans'
            })
            this.props.history.push({
                pathname: `/Loans`,
                search: `tab=${'types_of_loans'}`,
            });
        }
        
        if ( bridge === true) {
            this.setState({
                tab: 'bridge'
            })
            this.props.history.push({
                pathname: `/Loans`,
                search: `tab=${'bridge'}`,
            });
        }
        
        if ( commercial === true) {
            this.setState({
                tab: 'commercial'
            })
            this.props.history.push({
                pathname: `/Loans`,
                search: `tab=${'commercial'}`,
            });
        }
        
        if ( construction === true) {
            this.setState({
                tab: 'construction'
            })
            this.props.history.push({
                pathname: `/Loans`,
                search: `tab=${'construction'}`,
            });
        }
        
        if ( conventional === true) {
            this.setState({
                tab: 'conventional'
            })
            this.props.history.push({
                pathname: `/Loans`,
                search: `tab=${'conventional'}`,
            });
        }
        
        if ( fha === true) {
            this.setState({
                tab: 'fha'
            })
            this.props.history.push({
                pathname: `/Loans`,
                search: `tab=${'fha'}`,
            });
        }
        
        if ( jumbo === true) {
            this.setState({
                tab: 'jumbo'
            })
            this.props.history.push({
                pathname: `/Loans`,
                search: `tab=${'jumbo'}`,
            });
        }
        
        if ( refinance === true) {
            this.setState({
                tab: 'refinance'
            })
            this.props.history.push({
                pathname: `/Loans`,
                search: `tab=${'refinance'}`,
            });
        }
        
        if ( reverse === true) {
            this.setState({
                tab: 'reverse mortgages'
            })
            this.props.history.push({
                pathname: `/Loans`,
                search: `tab=${'reverse_mortgages'}`,
            });
        }
        
        if ( usda === true) {
            this.setState({
                tab: 'usda'
            })
            this.props.history.push({
                pathname: `/Loans`,
                search: `tab=${'usda'}`,
            });
        }
        
        if ( va === true) {
            this.setState({
                tab: 'va'
            })
            this.props.history.push({
                pathname: `/Loans`,
                search: `tab=${'va'}`,
            });
        }

        if ( type === false && 
            bridge === false &&
            commercial === false &&
            construction === false &&
            conventional === false &&
            fha === false &&
            jumbo  === false &&
            refinance === false &&
            reverse === false &&
            usda === false &&
            va === false
            ){

            this.setState({
                tab: 'types of loans'
            })
            this.props.history.push({
                pathname: `/Loans`,
                search: `tab=${'types_of_loans'}`,
            });
        }

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

        //set param at state
        this.setState({
            tab: data.toLowerCase()
        })
        this.props.history.push({
            pathname: `/Loans`,
            search: `tab=${data.toLowerCase()}`,
        });

        //scroll window to top
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
                      onClick={() => {this.switchTab( tabNames ); this.closeDrawer() } }
                      className={( tab === tabNames.toLowerCase())? 'tab active' : 'tab' } 
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
const contentSetup =<div className='tabContent'>
                                { tab.includes('typ') && < TypesLoans /> }
                                { tab.includes('bri') && < Bridge /> }
                                { tab.includes('com') && < Commercial /> }
                                { tab.includes('cons') && < Construction />  }
                                { tab.includes('conv') && < Conventional /> }
                                { tab.includes('fha') && < FHA /> }
                                { tab.includes('jum') && < Jumbo /> }
                                { tab.includes('refi') && < Refinance /> }
                                { tab.includes('rev') && < Reverse />}
                                { tab.includes('us') && < USDA />}
                                { tab.includes('va') && < VA /> }
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