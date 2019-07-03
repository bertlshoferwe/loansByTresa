import React, { Component }     from 'react';
import { withRouter } from "react-router";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import '../../app.scss'
import Logo from '../../images/Logo.png';

class Header extends Component{ 
    constructor(props){
        super(props);
        this.state={
            pathname:'',
            location:'',
            Width:''
        };
        this.updateWindowDimensions=this.updateWindowDimensions.bind(this)
        this.pageTitle = this.pageTitle.bind(this)
        this.pageNavigate = this.pageNavigate.bind(this)
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    componentDidMount(){
        window.addEventListener('resize', this.updateWindowDimensions);
        this.pageTitle()
    }

    shouldComponentUpdate(nextProps) {
        return this.props.location.pathname !== this.state.pathname
        || window.innerWidth !== this.state.Width
    };

    componentDidUpdate() {
        this.pageTitle()
        this.updateWindowDimensions()
    };

    updateWindowDimensions() {
    this.setState({
        Width: window.innerWidth
    });
    }

    pageTitle() {
        switch(this.props.location.pathname){
            case '/':
                this.setState({
                    pathname: this.props.location.pathname,
                    location:'Loans By Tresa'
                })
            break;
            case '/About':
                this.setState({
                    pathname: this.props.location.pathname,
                    location: 'About'
                })
            break;
            case '/Loans':
                this.setState({
                    pathname: this.props.location.pathname,
                    location: 'Loans'
                })
            break;
            case '/Glossary':
                this.setState({
                    pathname: this.props.location.pathname,
                    location: 'Glossary'
                })
            break;
            case '/Privacy_Policy':
                this.setState({
                    pathname: this.props.location.pathname,
                    location: 'Privacy Policy'
                })
            break;
            case '/Terms_Of_Use':
                this.setState({
                    pathname: this.props.location.pathname,
                    location: 'Terms Of USe'
                })
            break;
            default:
        }
    }

    pageNavigate( pageRoute ){
        this.props.history.push({
            pathname: pageRoute,
        })}


    render() {

        const header= (this.state.Width < 600)?<div></div> 
                                        :
                                            <div >
                                                <AppBar className='appBar' position="fixed">
                                                <Toolbar>
                                                    <img src={Logo} alt='logo' className='headerLogo' />
                                                    <Typography variant="h6" >
                                                        {this.state.location}
                                                    </Typography>
                                                </Toolbar>
                                                </AppBar>
                                            </div>

        
                           
                             
         

        return(
            <div>
            
                    {header}

            </div>
        );
    }
}


export default withRouter(Header)