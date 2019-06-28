import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { } from '../Actions';
import '../app.scss';
import Logo from '../images/Logo.png';
import { ButtonBase, Typography } from '@material-ui/core';
import ApplyDialog from './Common/ApplyDialog'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };

            this.toggleDialog = this.toggleDialog.bind(this)
            this.pageNavigate = this.pageNavigate.bind(this)
    }

toggleDialog(){
    this.setState({
        isOpen:!this.state.isOpen
    })
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
                handleClick: this.pageNavigate
            },
            {
                id: 2,
                title: 'Apply',
                icon: 'library_books',
                route: '',
                handleClick: this.toggleDialog
            },
        ];

        const cardSet2 = [
            {
                id: 3,
                title: 'Glossary',
                icon: 'help',
                route: '/Glossary',
                handleClick: this.pageNavigate
            },
            {
                id: 4,
                title: 'About Me',
                icon: 'account_box',
                route: '/About',
                handleClick: this.pageNavigate
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
                                href={card.route}
                                onClick={ () => {card.handleClick( card.route)} }
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
                                href={card.route}
                                onClick={ () => {card.handleClick( card.route)} }
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
                <ApplyDialog isOpen={this.state.isOpen} toggle={this.toggleDialog}/>
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