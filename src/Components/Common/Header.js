import React, { Component }     from 'react';
import { withRouter } from "react-router";
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
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
    };

    componentDidUpdate() {
        this.pageTitle()
    };


    pageTitle() {
        switch(this.props.location.pathname){
            case '/':
                this.setState({
                    pathname: this.props.location.pathname,
                    location:null
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
                    location: 'Terms Of Use'
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

        const headerLogo= (window.innerWidth < 600)?<div>
                                                        
                                                    </div> 
                                        :
                                            <Link href='#'  onClick={() => {this.pageNavigate('/')} } >
                                                <img src={Logo} alt='logo' className='headerLogo' /> 
                                            </Link> 

        const header = <div >
                            <AppBar className='appBar' position="fixed">
                            <Toolbar>
                                {headerLogo}
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