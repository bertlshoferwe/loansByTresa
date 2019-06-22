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

        };


    }


    render() {
        const cardSet1 = [
            {
                id: 1,
                title: 'Loans',
                icon: 'home'
            },
            {
                id: 2,
                title: 'Apply',
                icon: 'library_books'
            },
        ];

        const cardSet2 = [
            {
                id: 3,
                title: 'Loan Info',
                icon: 'info'
            },
            {
                id: 4,
                title: 'About Me',
                icon: 'account_box'
            },
        ];



        let display = <div>

            <div className='background' />

            <div className='homeWrapper' >

                <div className='logoWrapper' >
                    <img className='logo' src={Logo} alt='' />
                </div>

                <div className='optionsWrapper'>
                    <div className='cardWrapper'>
                        {cardSet1.map(card => (<div key={card.id} className='homePaper' >
                            <ButtonBase
                                focusRipple
                                className='homeButton'
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