import React, { Component } from 'react';
import { Dialog, AppBar, Toolbar, IconButton, Typography, CircularProgress } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import '../../app.scss'

class ApplyDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        this.hideSpinner = this.hideSpinner.bind(this)
    }


    hideSpinner() {
        this.setState({
          loading: false
        });
      }; 

render() {

    const loadingView = (this.state.loading === true)? 
                                                <div className='loadingView'>
                                                    <CircularProgress size={80} />
                                                </div>
                                            :
                                            null

    const dialog = <div>
                        <Dialog fullScreen open={this.props.isOpen} onClose={this.handleClose} >
                            <AppBar className='DialogAppBar'>
                                <Toolbar>
                                    <IconButton edge="start" color="inherit" onClick={this.props.toggle} aria-label="Close">
                                        <CloseIcon />
                                    </IconButton>
                                    <Typography variant="h6" >
                                        Apply for a Loan
                            </Typography>
                                </Toolbar>
                            </AppBar>
                            {loadingView}
                            <iframe onLoad={this.hideSpinner} src='https://www.blink.mortgage/app/signup/p/altiusmortgagegroup/tresabertlshofer' title='Apply For Loan' className={ (this.state.loading === true)? 'hide' : 'iframe'}/>

                        </Dialog>
                    </div>


    return (
        <div>
            
            {dialog}

        </div>
    );
}
}


export default ApplyDialog