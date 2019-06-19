import React, { Component } from './node_modules/react';
import { connect } from './node_modules/react-redux';
import { withRouter } from './node_modules/react-router'
import {  } from '../Actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

        
    }


    render() {
        

        return (
            
            <div >
                HELLO
            </div>
        );
    }
}

// connections to Redux
const mapStateToProps = state => {
    

    return {  };
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))