import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { } from '../Actions';
import styles from '../Style.module.css';
import Logo from '../images/Logo.png'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };


    }


    render() {

        let display = <div>

                            <div className={styles.background} />

                        <div className={styles.homeWrapper} >
                            
                            <div className={styles.logoWrapper} >
                                <img className={styles.logo} src={Logo} alt='' />
                            </div>

                            <div className={styles.optionsWrapper}>
                                <div> Hello  </div>
                                <div> Hello  </div>
                                <div> Hello  </div>
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