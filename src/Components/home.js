import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { } from '../Actions';
import styles from '../Style.module.css';
import Logo from '../images/Logo.png';
import {Card, CardActions, ButtonBase, Typography, makeStyles} from '@material-ui/core';

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

                            <div className={styles.background} />

                        <div className={styles.homeWrapper} >
                            
                            <div className={styles.logoWrapper} >
                                <img className={styles.logo} src={Logo} alt='' />
                            </div>

                            <div className={styles.optionsWrapper}>
                            <div className={styles.cardWrapper}>
                            {cardSet1.map(card =>  (<div key={card.id} className={styles.homePaper} >
                                                    <ButtonBase
                                                        focusRipple
                                                        className={styles.homeButton}
                                                    >
                                                    <span>
                                                        <i className={ `material-icons ${styles.optionsImage}` }> {card.icon} </i>
                                                    </span>
                                                        <Typography
                                                            variant="h5"
                                                            className={styles.optionsText}
                                                        >
                                                            {card.title}
                                                        </Typography>
                                                    </ButtonBase>
                                                </div>
                                                    ))}

                             </div>
                             <div className={styles.cardWrapper}>                       

                            {cardSet2.map(card =>  (<div key={card.id} className={styles.homePaper} >
                                                    <ButtonBase
                                                        focusRipple
                                                        className={styles.homeButton}
                                                    >
                                                    <span>
                                                        <i className={ `material-icons ${styles.optionsImage}` }> {card.icon} </i>
                                                    </span>
                                                        <Typography
                                                            variant="h5"
                                                            className={styles.optionsText}
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