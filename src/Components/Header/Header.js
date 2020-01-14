import React, { Component }     from 'react';
import { withRouter } from "react-router";
import ReactGA from 'react-ga';
import { AppBar, ButtonBase, Toolbar, Typography, Link } from '@material-ui/core';
import Logo from '../../images/Logo.png';
import './_Header.scss'

class Header extends Component{ 
    constructor(props){
        super(props);
        this.state={
            pathname:'',
            location:'',
            Width:''
        };

        this.pageNavigate = this.pageNavigate.bind(this)
    } 
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    componentDidMount(){
        window.addEventListener('resize', this.updateWindowDimensions);
    }


    pageNavigate( pageRoute ){
        this.props.history.push({
            pathname: pageRoute,
        })
        ReactGA.event({
            category: 'Navigate from header',
            action: `New Page is ${pageRoute}`
          });
    }


    render() {
    const prequalFlag= (this.state.pathname === '/' || this.state.pathname === '/Apply' )?<div>
                                                        
                                                    </div> 
                                        :
                                           <div className='flag' >
                                               <ButtonBase focusRipple
                                                    className='prequalButton'
                                                    onClick={ () => {this.pageNavigate( '/Apply')} }
                                                >
                                                    <Typography  variant="subtitle2">
                                                        Pre-Qualify Today
                                                    </Typography>
                                                </ButtonBase>
                                           </div>  

        const header = <div >
                            <AppBar className='appBar' position="fixed">
                            <Toolbar className='toolBar'> 
                            {/* eslint-disable-next-line */}
                                <Link href='javascript:void(0);' className='headerLogoWrapper' onClick={() => {this.pageNavigate('/')} } >
                                    <img src={Logo} alt='logo' className='headerLogo' /> 
                                </Link>
                            </Toolbar>
                                {prequalFlag}
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