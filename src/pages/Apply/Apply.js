import React, { Component, Fragment } from 'react';
import { CircularProgress } from '@material-ui/core';
import './_Apply.scss'

class Apply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        this.hideSpinner = this.hideSpinner.bind(this)
    }


    pageNavigate( pageRoute ){
        this.props.history.push({
            pathname: pageRoute,
        })}

    hideSpinner() {
        this.setState({
          loading: false
        });
      }; 

render() {
    document.title='Loans By Tresa - Apply'

    const loadingView = (this.state.loading === true)? 
                                                <div className='loadingView'>
                                                    <CircularProgress size={80} className='loadingCircle' />
                                                </div>
                                            :
                                            null

    const dialog = <Fragment>
                            {loadingView}
                            <iframe onLoad={this.hideSpinner} src='https://www.blink.mortgage/app/signup/p/altiusmortgagegroup/tresabertlshofer' title='Apply For Loan' className={ (this.state.loading === true)? 'hide' : 'iframe'}/>

                    </Fragment>


    return (
        <Fragment>
            
            {dialog}

        </Fragment>
    );
}
}


export default Apply