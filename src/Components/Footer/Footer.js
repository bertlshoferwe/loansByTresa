import React, { Component }     from 'react';
import { withRouter } from "react-router";
import { Typography, Link } from '@material-ui/core';
import ReactGA from 'react-ga';
import fairHouse from '../../images/fairHouse.png'
import altius from '../../images/altius.png'
import './_Footer.scss'

class Footer extends Component{ 
    constructor(props){
        super(props);
        this.state={};
        
        this.pageNavigate = this.pageNavigate.bind(this)
    }

    pageNavigate( pageRoute ){
        this.props.history.push({
            pathname: pageRoute,
        })
        ReactGA.event({
            category: 'Navigate from footer',
            action: `New Page is ${pageRoute}`
          });
    }


    render() {

        const Info = {
            'Licensing':{
                'name': 'Tresa Bertlshofer',
                'nmls': '#1847320',
                'firm': 'Altius Mortgage',
                'nmlsr': '#192521',
                'logo': altius,
                'address': '11925 South 700 East',
                'address2':' Draper, UT, 84020',
                'equalHouse':fairHouse,
            },
            'Contact':{
                'number':'(801) 923 3166',
                'fax': '(801) 384 0779',
                'serving1': 'Box Elder County, Cache County,',
                'serving2': 'Weber County, Davis County,',
                'serving3': ' and all of Utah',
                'email': 'Loansbytresa@gmail.com'
            },
            
        }


        const footer = 
        <div className='footer'>

                        <div className='topfooter'>
                            <div className='topfooterinfo'>
                                <div className='Info'>
                                    <h2 >
                                        CONTACT 
                                    </h2>
                                    <Typography variant="subtitle1" >
                                        Direct Number:
                                    </Typography>
                                    <Link href={'tel:' + Info.Contact.number }>
                                        <Typography variant="subtitle2" >
                                        {Info.Contact.number} 
                                        </Typography>
                                    </Link>
                                    <Typography variant="subtitle1" >
                                        Email:
                                    </Typography>
                                    <Link href='mailto:loansbytresa@gmail.com' >
                                        <Typography variant="subtitle2" >
                                            LoansByTresa@gmail.com
                                        </Typography>
                                    </Link>
                                    <Typography variant="subtitle1" >
                                        Fax:
                                    </Typography>
                                    <Typography variant="subtitle2" >
                                        {Info.Contact.fax}
                                    </Typography>
                                    <Typography variant="subtitle1" >
                                        Serving Areas:
                                    </Typography>
                                    <Typography variant="subtitle2" >
                                        {Info.Contact.serving1}
                                    </Typography>
                                    <Typography variant="subtitle2" >
                                        {Info.Contact.serving2}
                                    </Typography>
                                    <Typography variant="subtitle2" >
                                        {Info.Contact.serving3}
                                    </Typography>
                                    
                                </div>

                                <div className='Info'>
                                <h2>
                                        LICENSING 
                                    </h2>
                                    <Typography variant="subtitle1" >
                                        {Info.Licensing.name} 
                                    </Typography>
                                    <Typography variant="subtitle2" >
                                        {Info.Licensing.nmls}
                                    </Typography>
                                    <Typography variant="subtitle1" >
                                        {Info.Licensing.firm}
                                    </Typography>
                                    <Typography variant="subtitle2" >
                                        {Info.Licensing.nmlsr} 
                                    </Typography>
                                    <Typography variant="subtitle1" >
                                        Address:
                                    </Typography>
                                    <Typography variant="subtitle2" >
                                        {Info.Licensing.address} <br/>
                                        {Info.Licensing.address2}
                                    </Typography>
                                    
                                    <div className='licenseLogo' >

                                        <img src={Info.Licensing.logo} alt=' '/>
                                        
                                        <img src={Info.Licensing.equalHouse} className='equal' alt=' '/>

                                    </div>
                                </div>
                                
                            </div>


                            <div className='topfooterinfo'>
                                <div className='Info'>
                                <h2 >
                                        SITE_MAP 
                                    </h2>
                                    {/* eslint-disable-next-line */}
                                    <Link href="javascript:void(0);" onClick={() => {this.pageNavigate('/')} } >
                                        <Typography variant="subtitle1" >
                                            Home
                                        </Typography>
                                    </Link>
                                    {/* eslint-disable-next-line */}
                                    <Link href="javascript:void(0);" onClick={() => {this.pageNavigate( '/About' )} } >
                                        <Typography variant="subtitle1" >
                                        About
                                        </Typography>
                                    </Link>
                                    {/* eslint-disable-next-line */}
                                    <Link href="javascript:void(0);" onClick={() => {this.pageNavigate('/Loans')} } >
                                        <Typography variant="subtitle1" >
                                        Loans
                                        </Typography>
                                    </Link>
                                     {/* eslint-disable-next-line */}
                                     <Link href="javascript:void(0);" onClick={() => {this.pageNavigate( '/Calculator' )} }>
                                        <Typography variant="subtitle1" >
                                        Calculator
                                        </Typography>
                                    </Link>
                                    {/* eslint-disable-next-line */}
                                    <Link href="javascript:void(0);" onClick={() => {this.pageNavigate( '/Apply' )} }>
                                        <Typography variant="subtitle1" >
                                        Pre-qualify
                                        </Typography>
                                    </Link>
                                    {/* eslint-disable-next-line */}
                                    <Link href="javascript:void(0);" onClick={() => {this.pageNavigate('Privacy_Policy')} } >
                                        <Typography variant="subtitle1" >
                                        Privacy Policy
                                        </Typography>
                                    </Link>
                                    {/* eslint-disable-next-line */}
                                    <Link href="javascript:void(0);" onClick={() => {this.pageNavigate('Terms_Of_Use')} } >
                                        <Typography variant="subtitle1" >
                                        Terms of Use
                                        </Typography>
                                    </Link>
                                    
                                </div>

                                <div className='Info'>
                                    <h2 >
                                        CONNECT
                                    </h2>
                                    <Link href='https://www.facebook.com/loansbytresa' >
                                        <Typography variant="subtitle1" >
                                            Facebook
                                        </Typography>
                                    </Link>
                                    <Link href='https://www.instagram.com/loansbytresa/' >
                                        <Typography variant="subtitle1" >
                                        Instagram
                                        </Typography>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                        <div className='bottomfooter'>
                            <div>
                                Copyright © 2020 Tresa Bertlshofer | Altius Mortgage
                            </div>
                            <div>
                               Created by Weston Bertlshofer
                            </div>
                        </div>          
                    </div>
;
         

        return(
            <div>
            
                    {footer}

            </div>
        );
    }
}


export default withRouter(Footer)