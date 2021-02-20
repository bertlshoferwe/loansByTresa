import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router'
import ReactGA from 'react-ga';
import './_app.scss';
import Logo from '../../images/Logo.png';
import { Button, ButtonBase, Typography } from '@material-ui/core';

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
    })
    ReactGA.event({
        category: 'Navigate from home',
        action: `New Page is ${pageRoute}`
      });
}


    render() {
        document.title='Loans By Tresa - Home'

        const cardSet1 = [
            {
                id: 1,
                title: 'Loans',
                icon: 'home',
                route: () => {this.pageNavigate('/Loans')},
                link: 'javascript:void(0)',
                cardButtonClass: 'homeButton'
            },
            {
                id: 2,
                title: 'Apply',
                icon: 'library_books',
                route: '',
                // route: () => {this.pageNavigate('/Apply')},
                link: 'https://www.blink.mortgage/app/signup/p/altiusmortgagegroup/tresabertlshofer',
                cardButtonClass: 'homeButton'
            },
            {
                id: 3,
                title: 'Glossary',
                icon: 'help',
                route: () => {this.pageNavigate('/Glossary')},
                link: 'javascript:void(0)',
                cardButtonClass: 'homeButton'
            },
            {
                id: 4,
                title: 'About Me',
                icon: 'account_box',
                route: () => {this.pageNavigate('/About')},
                link: 'javascript:void(0)',
                cardButtonClass: 'homeButton'
            },
            {
                id: 5,
                title: 'Calculator',
                icon: 'dialpad',
                route: () => {this.pageNavigate('/Calculator')},
                link: 'javascript:void(0)',
                cardButtonClass: 'homeButton calculator'
            },
        ];


        const logoOrWords = (this.state.Width < 600)?
                <img className='logo' src={Logo} alt='' />
                :
                <div className='welcome'>
                    <Typography  variant='h1'> Welcome</Typography>
                    <Typography  variant='h4'> Looking For A Fast Loan</Typography>
                    <Button   className='applyButton'
                        // onClick={ () => {this.pageNavigate( '/Apply')} }
                        href="https://www.blink.mortgage/app/signup/p/altiusmortgagegroup/tresabertlshofer"
                    >
                        <Typography className='textColor' variant='h6' >
                            Get Pre-Qualified today
                        </Typography>
                    </Button>
                </div>;



        let display = <Fragment>

            <div className='background' />

            <div className='homeWrapper' >

                <div className='logoWrapper' >
                    {logoOrWords}
                </div>

                <div className='optionsWrapper'>
                        {cardSet1.map(card => (<div key={card.id} className='homePaper' >
                            <ButtonBase
                                focusRipple
                                className={card.cardButtonClass}
                                // eslint-disable-next-line
                                href={card.link}
                                onClick={ card.route }
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

        </Fragment>




        return (

            <Fragment>
                {display}
            </Fragment>
        );
    }
}

// connections to Redux
// const mapStateToProps = state => {


//     return {};
// }

// const mapDispatchToProps = (dispatch) => {
//     return {

//     };
// };


export default withRouter(Home)