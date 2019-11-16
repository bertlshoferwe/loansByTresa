import React from 'react';
import { withRouter } from 'react-router';
import { Typography, Link } from '@material-ui/core';
import fairHouse from '../../images/fairHouse.png'
import altius from '../../images/altius.png'
import './Footer.scss'

const Footer = ({ history }) => {
    const _pageNavigate = pageRoute => () => history.push(pageRoute)

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
            'address2':' Draper, UT, 84020',
            'email': 'Loansbytresa@gmail.com'
        },
    }

    return (
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
                            Address:
                        </Typography>
                        <Typography variant="subtitle2" >
                            {Info.Contact.address} <br/>
                            {Info.Contact.address2}
                        </Typography>
                    </div>
                    <div className='Info'>
                        <h2 >
                            SITE_MAP
                        </h2>
                        <Link href="" onClick={_pageNavigate('/')} >
                            <Typography variant="subtitle1" >
                                Home
                            </Typography>
                        </Link>
                        <Link href="" onClick={_pageNavigate('/About')} >
                            <Typography variant="subtitle1" >
                            About
                            </Typography>
                        </Link>
                        <Link href="" onClick={_pageNavigate('/Loans')} >
                            <Typography variant="subtitle1" >
                            Loans
                            </Typography>
                        </Link>
                        <Link href="" onClick={_pageNavigate('/Apply')} >
                            <Typography variant="subtitle1" >
                            Pre-qualify
                            </Typography>
                        </Link>
                        <Link href="" onClick={_pageNavigate('Privacy_Policy')} >
                            <Typography variant="subtitle1" >
                            Privacy Policy
                            </Typography>
                        </Link>
                        <Link href="" onClick={_pageNavigate('Terms_Of_Use')} >
                            <Typography variant="subtitle1" >
                            Terms of Use
                            </Typography>
                        </Link>
                    </div>
                </div>
                <div className='topfooterinfo'>
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

                        <div className='licenseLogo' >
                            <img src={Info.Licensing.logo} alt=' '/>
                            <img src={Info.Licensing.equalHouse} className='equal' alt=' '/>
                        </div>
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
                    Copyright © 2019 Tresa Bertlshofer | Altius Mortgage
                </div>
                <div>
                    Designed by Weston Bertlshofer
                </div>
            </div>
        </div>
    );
}


export default withRouter(Footer)