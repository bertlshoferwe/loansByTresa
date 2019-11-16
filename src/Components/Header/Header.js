import React, { useState, useEffect, useCallback }   from 'react';
import { withRouter } from 'react-router';
import { AppBar, ButtonBase, Toolbar, Typography, Link } from '@material-ui/core';
import Logo from '../../images/Logo.png';
import './Header.scss'

const Header = ({ location, history }) => {
    const [pageTitle, setPageTitle] = useState('')
    const [width, setWidth] = useState(0)

    const _pageNavigate = pageRoute => () => history.push(pageRoute)
    const _updateWindowDimensions = useCallback(() => {
        setWidth(window.innerWidth)
    }, [])

    const _pageTitle = useCallback(() => {
        switch(location.pathname){
            case '/About':
                setPageTitle('About')
            break;
            case '/Loans':
                setPageTitle('Loans')
            break;
            case '/Apply':
                setPageTitle('Apply')
            break;
            case '/Glossary':
                setPageTitle('Glossary')
            break;
            case '/Privacy_Policy':
                setPageTitle('Privacy Policy')
            break;
            case '/Terms_Of_Use':
                setPageTitle('Terms Of Use')
            break;
            default:
                setPageTitle('')
        }
    }, [location])

    useEffect(() => {
        _pageTitle()
        window.addEventListener('resize', _updateWindowDimensions);

        return () => {
            window.removeEventListener('resize', _updateWindowDimensions);
        }
    }, [_updateWindowDimensions, _pageTitle])

    return (
        <AppBar className='appBar' position="fixed">
            <Toolbar className='toolBar'>
                <Link href="" onClick={_pageNavigate('/')} >
                    <img src={Logo} alt='logo' className='headerLogo' />
                </Link>
                {width > 600 && (
                    <ButtonBase focusRipple
                        className='prequalButton'
                        onClick={_pageNavigate( '/Apply')}
                    >
                        <Typography  variant="h5">
                            PreQualify Today
                        </Typography>
                    </ButtonBase>
                )}
            </Toolbar>
        </AppBar>
    );
}


export default withRouter(Header)