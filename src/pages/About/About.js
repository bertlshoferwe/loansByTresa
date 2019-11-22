import React, { Component }     from 'react';
import { Card, CardContent, Typography, Container }   from '@material-ui/core';
import './_About.scss'
import Logo from '../../images/Logo.png';
import Altius from '../../images/altius.png';
import Profile from '../../images/profile.jpg';

class About extends Component{ 
    constructor(props){
        super(props);
        this.state={};
    }


    render() {
        document.title='Loans By Tresa - About'
          
         

        return(
            <Container className='containerMargin' maxWidth="md" >
                    <Card className='cardSpacing' >
                        <CardContent>
                                <div className='aboutWrapper'>
                                    <div className='logosWrapper'>
                                        <img src={Logo} alt='logo' className='logo' />
                                        <hr className="vertical-line" />
                                        <img src={Altius} alt='altius' className='altiusLogo' />
                                    </div>

                                    <div className='aboutBody'>
                                        <img src={Profile} alt='Tresa' className='profileImg' />
                                        <div className='bodyTextWrapper'>
                                            <Typography variant="body2" className='bodyText' >
                                                Tresa recently retired from the Federal government where she was no stranger to details and
                                                problem solving. She has been married for 30+ years to her husband Mark who has served in the
                                                Navy.  She loves hanging out with her family and vacationing around the world.
                                            </Typography>
                                            <Typography variant="body2" className='bodyText'>
                                                Tresa is passionate about helping you make your dreams a reality.
                                            </Typography>
                                            <Typography variant="body2" className='bodyText'>
                                                Tresa is very excited to be a part of the Altius team one of Utah’s leading mortgage brokers.
                                                Altius Mortgage has access to many lenders, allowing you to get the most competitive rates and
                                                loan options.
                                            </Typography>
                                            <Typography variant="body2" className='bodyText'>
                                                No matter your needs, whether you are buying your dream home, a first time home buyer,
                                                refinancing a current home loan, building, consolidating your debt, or commercial purchase, she
                                                will provide you with phenomenal customer service and go above and beyond to get you your
                                                outcome.
                                            </Typography>
                                            <Typography variant="body2"className='bodyText'>
                                                Tresa has super flexible hours and is available nights and weekends
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                        </CardContent>
                    </Card>
            </Container>
        );
    }
}


export default About