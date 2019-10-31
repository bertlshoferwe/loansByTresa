import React, { Component }     from 'react';
import { withRouter } from "react-router";
import { AppBar, ButtonBase, Toolbar, Typography, Link } from '@material-ui/core';
import Logo from '../../images/Logo.png';
import './Header.scss'

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
            case '/Apply':
                this.setState({
                    pathname: this.props.location.pathname,
                    location: 'Apply'
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

        const rightButtons= (window.innerWidth < 600)?<div>
                                                        
                                                    </div> 
                                        :
                                           <div>
                                               <ButtonBase focusRipple
                                                    className='prequalButton'
                                                    onClick={ () => {this.pageNavigate( '/Apply')} }
                                                >
                                                    <Typography  variant="h5">
                                                        PreQualify Today
                                                    </Typography>
                                                </ButtonBase>
                                           </div>  

        const header = <div >
                            <AppBar className='appBar' position="fixed">
                            <Toolbar className='toolBar'> 
                                <Link href='javascript:void(0);'  onClick={() => {this.pageNavigate('/')} } >
                                    <img src={Logo} alt='logo' className='headerLogo' /> 
                                </Link>
                                {rightButtons}
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