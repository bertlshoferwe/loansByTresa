import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router'
import _ from 'lodash'
import './app.scss';
import Logo from '../../images/Logo.png';
import { ButtonBase, Typography } from '@material-ui/core';

const Home  = ({ history }) => {
    const [width, setWidth] = useState(window.innerWidth)

    const _pageNavigate = pageRoute => () => history.push(pageRoute)
    const _updateWindowDimensions = useCallback(() => {
        setWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', _updateWindowDimensions);

        return () => {
            window.removeEventListener('resize', _updateWindowDimensions);
        }
    }, [_updateWindowDimensions])

    const cardSet1 = [
        {
            id: 1,
            title: 'Loans',
            icon: 'home',
            route: '/Loans',
        },
        {
            id: 2,
            title: 'Pre-qualify',
            icon: 'library_books',
            route: '/Apply',
        },
    ];

    const cardSet2 = [
        {
            id: 3,
            title: 'Glossary',
            icon: 'help',
            route: '/Glossary',
        },
        {
            id: 4,
            title: 'About Me',
            icon: 'account_box',
            route: '/About',
        },
    ];

    return (
        <div>
            <div className='background' />
            <div className='homeWrapper' >
                <div className='logoWrapper' >
                    {width < 600 ? (
                        <img className='logo' src={Logo} alt='' />
                    ) : (
                        <div className='welcome'>
                            <Typography  variant='h1'> Welcome</Typography>
                            <Typography  variant='h4'> Looking For A Fast Loan</Typography>
                            <ButtonBase
                                focusRipple
                                className='applyButton'
                                onClick={_pageNavigate('/Apply')}
                            >
                                <Typography  variant="h5">
                                    Get PreQualified today
                                </Typography>
                            </ButtonBase>
                        </div>
                    )}
                </div>
                <div className='optionsWrapper'>
                    <div className='cardWrapper'>
                        {_.map(cardSet1, card => (
                            <div key={card.id} className='homePaper' >
                                <ButtonBase
                                    focusRipple
                                    className='homeButton'
                                    href=""
                                    onClick={_pageNavigate(card.route)}
                                >
                                    <span>
                                        <i className='material-icons optionsImage'> {card.icon} </i>
                                    </span>
                                    <Typography
                                        variant="h5"
                                        className='optionsText'
                                    >
                                        {card.title}
                                    </Typography>
                                </ButtonBase>
                            </div>
                        ))}
                    </div>
                    <div className='cardWrapper'>
                        {_.map(cardSet2, card => (
                            <div key={card.id} className='homePaper' >
                                <ButtonBase
                                    focusRipple
                                    className='homeButton'
                                    href=""
                                    onClick={_pageNavigate(card.route)}
                                >
                                    <span>
                                        <i className='material-icons optionsImage'> {card.icon} </i>
                                    </span>
                                    <Typography
                                        variant="h5"
                                        className='optionsText'
                                    >
                                        {card.title}
                                    </Typography>
                                </ButtonBase>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Home)