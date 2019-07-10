import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { } from '../Actions';
import '../app.scss';
import Logo from '../images/Logo.png';
import { ButtonBase, Typography } from '@material-ui/core';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Width: window.innerWidth
        };

            this.pageNavigate = this.pageNavigate.bind(this)
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
        Width: window.innerWidth
    });
    }


pageNavigate( pageRoute ){
    this.props.history.push({
        pathname: pageRoute,
    })}


    render() {
        const cardSet1 = [
            {
                id: 1,
                title: 'Loans',
                icon: 'home',
                route: '/Loans',
            },
            {
                id: 2,
                title: 'Apply',
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


        const logoOrWords = (this.state.Width < 600)?
                <img className='logo' src={Logo} alt='' />
                :
                <div className='welcome'>
                    <Typography  variant='h1'> Welcome</Typography>
                    <Typography  variant='h4'> Its easy to get started</Typography>
                    <ButtonBase focusRipple
                                className='applyButton'
                                onClick={ () => {this.pageNavigate( '/Apply')} }
                            >
                                <Typography  variant="h5">
                                    Click Here To Apply
                                </Typography>
                            </ButtonBase>
                </div>;



        let display = <div>

            <div className='background' />

            <div className='homeWrapper' >

                <div className='logoWrapper' >
                    {logoOrWords}
                </div>

                <div className='optionsWrapper'>
                    <div className='cardWrapper'>
                        {cardSet1.map(card => (<div key={card.id} className='homePaper' >
                            <ButtonBase
                                focusRipple
                                className='homeButton'
                                href='#'
                                onClick={ () => {this.pageNavigate(card.route)} }
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

                        {cardSet2.map(card => (<div key={card.id} className='homePaper' >
                            <ButtonBase
                                focusRipple
                                className='homeButton'
                                href='#'
                                onClick={ () => {this.pageNavigate(card.route)} }
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




        return (

            <div >
                {display}
            </div>
        );
    }
}

// connections to Redux
const mapStateToProps = state => {


    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))