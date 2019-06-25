import React, { Component } from 'react';
import { Dialog, AppBar, Toolbar, IconButton, Typography, } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import '../../app.scss'

class ApplyDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.handleClose = this.handleClose.bind(this)
        this.handleClickOpen=this.handleClickOpen.bind(this)
    }

handleClickOpen() {
    this.setState({
        isOpen: true
    })
    }

handleClose() {
    this.setState({
        isOpen: false
    })
}


render() {

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

            <iframe src='https://www.blink.mortgage/app/signup/p/altiusmortgagegroup/tresabertlshofer' className='iframe'/>

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