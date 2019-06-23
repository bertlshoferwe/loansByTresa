import React, { Component }     from 'react';
import { Typography, Link } from '@material-ui/core';
import fairHouse from '../../images/fairHouse.png'
import altius from '../../images/altius.png'
import facebook from '../../images/facebook.png'
import insta from '../../images/insta.png'
import '../../app.scss'

class Footer extends Component{ 
    constructor(props){
        super(props);
        this.state={};
    }


    render() {

        const Info = {
            'Licensing':{
                'name': 'Tresa Bertlshofer',
                'nmls': '#1847320',
                'firm': 'Altius Mortgage',
                'nmlsr': '#192521',
                'logo': altius,
                'equalHouse':fairHouse
            },
            'Contact':{
                'number':'(801) 923 3166',
                'fax': '(801) 384 0779',
                'address': '11925 South 700 East',
                'address2':' Draper, UT, 84020'
            },
            'Connect':{
                'facebook':facebook,
                'instagram': insta,
            },
        }


        const footer = <div className='footer'>

                        <div className='topfooter'>
                            <div className='topfooterinfo'>
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
                                <a>
                                    <img src={Info.Licensing.logo} alt=' '/>
                                </a>
                                <img src={Info.Licensing.equalHouse} className='equal' alt=' '/>
                            </div>
                            <div>
                                <h2 >
                                    CONTACT 
                                </h2>
                                <Typography variant="subtitle1" >
                                    Direct Number:
                                </Typography>
                                <Typography variant="subtitle2" >
                                    {Info.Contact.number} 
                                </Typography>
                                <Typography variant="subtitle1" >
                                    Fax:
                                </Typography>
                                <Typography variant="subtitle2" >
                                    {Info.Contact.fax}
                                </Typography>
                                <Typography variant="subtitle1" >
                                    Address:
                                </Typography>
                                <Typography variant="subtitle2" >
                                    {Info.Contact.address} <br/>
                                    {Info.Contact.address2}
                                </Typography>
                            </div>
                            <div className='link'>
                                <h2 >
                                    LINKS 
                                </h2>
                                <Link variant="subtitle1" >
                                    Home
                                </Link>
                                <Link variant="subtitle1" >
                                    About
                                </Link>
                                <Link variant="subtitle1" >
                                    Apply 
                                </Link>
                                <Link variant="subtitle1" >
                                    Loans
                                </Link>
                                <Link variant="subtitle1" >
                                    Privacy Policy
                                </Link>
                                <Link variant="subtitle1" >
                                    Terms of Use
                                </Link>
                            </div>
                            <div>
                                <h2 >
                                    CONNECT
                                </h2>
                                <div className='connect' >
                                    <img src={Info.Connect.facebook} className='connectImg' alt=' '/>
                                    <img src={Info.Connect.instagram} className='connectImg' alt=' '/>
                                </div>
                            </div>
                            
                        </div>
                        <div className='bottomfooter'>
                            <div>
                                Copyright © 2019 Tresa Bertlshofer | Altius Mortgage
                            </div>
                            <div>
                               Designed by Weston Bertlshofer
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


export default Footer