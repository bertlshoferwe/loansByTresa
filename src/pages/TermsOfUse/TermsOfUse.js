import React, { Component }     from 'react';
import { Container, Card, CardContent, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import './_TermsOfUse.scss'

class TermsOfUse extends Component{ 
    constructor(props){
        super(props);
        this.state={};
    }


    render() {

        let TermsOfUse = <div> 
                        <Typography variant="h2" className='pageTitle'>
                            Terms Of Use
                        </Typography>
                        <Card className='cardSpacing' >
                            <CardContent>

                                <List >

                                    <ListItem className='nested'>
                                        <ListItemText 
                                            secondary='Please carefully read this agreement (“Agreement”) before accessing or using this Internet Website (“Website”). When you access or use the Website, you are agreeing to be bounded by this Agreement, including the liability disclaimers contained below. If you do not agree to the terms contained herein, do not use this Website or download any information from it. Materials on this Website may be accessed, downloaded and printed only for personal and non-commercial use. By using this Website, you agree that you will not use any materials or information found on this Website for any purpose that is unlawful or prohibited by this Agreement, including, but not limited to, the use of this Website from locations outside of the United States of America or if you are under 18 years of age. Your permission to use the Website is automatically terminated if you violate any of the terms contained in this Agreement.
                                            ' />
                                    </ListItem>

                                </List>
                           
                            </CardContent>
                        </Card>
                        

                        <Card className='cardSpacing' >
                            <CardContent>

                                <Typography variant="h5">
                                COPYRIGHT AND TRADEMARK RIGHTS
                                </Typography>

                                <List >

                                    <ListItem className='nested'>
                                        <ListItemText 
                                            secondary='The contents of www.loansbytresa.com are owned and copyrighted by Tresa Bertlshofer | Altius Mortgage and are protected by the laws of the United States, its treaty countries, and other jurisdictions. All rights are reserved, and no reproduction, distribution, or transmission of the copyrighted materials at this Website is permitted without the written permission of Tresa Bertlshofer | Altius Mortgage. All trademarks, logos, and service marks are the property of Tresa Bertlshofer | Altius Mortgage.
                                            ' />
                                    </ListItem>

                                </List>
                           
                            </CardContent>
                        </Card>


                        <Card className='cardSpacing' >
                            <CardContent>

                                <Typography variant="h5">
                                CONSENT
                                </Typography>

                                <List >

                                    <ListItem className='nested'>
                                        <ListItemText 
                                            secondary='You hereby understand and agree that by using this Website, you automatically and without any further action have established a business relationship between you and Tresa Bertlshofer| Altius Mortgage. As a result, you agree to allow Tresa Bertlshofer| Altius Mortgage to contact you about its business via telephone, e-mail and /or standard mail using the contact information you have provided. You hereby consent to such contact even if your phone number is on any Do Not Call list.
                                            ' />
                                    </ListItem>

                                </List>
                           
                            </CardContent>
                        </Card>


                        <Card className='cardSpacing' >
                            <CardContent>

                                <Typography variant="h5">
                                LIABILITY DISCLAIMER
                                </Typography>

                                <List >

                                    <ListItem className='nested'>
                                        <ListItemText 
                                            secondary='Tresa Bertlshofer| Altius Mortgage STRIVES TO MAKE SURE THAT THE INFORMATION ON ITS WEBSITE IS ACCURATE, BUT INACCURACIES OR ERRORS CAN OCCUR. YOU USE THIS WEBSITE AT YOUR OWN RISK. Tresa Bertlshofer | Altius Mortgage RESERVES THE RIGHT TO CHANGE OR MODIFY THE CONTENT OF ITS WEBSITE AT ANY TIME WITH OR WITHOUT NOTICE. YOUR CONTINUED USE OF THE WEBSITE CONSTITUTES YOUR ACCEPTANCE OF SUCH MODIFIED TERMS. THIS WEBSITE AND ALL OF THE INFORMATION CONTAINED THEREIN ARE PROVIDED “AS IS.” Tresa Bertlshofer | Altius Mortgage DISCLAIMS ANY AND ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, AS TO ANYTHING WHATSOEVER RELATING TO THIS WEBSITE AND ANY INFORMATION PROVIDED HEREIN, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NONINFRINGEMENT. Tresa Bertlshofer | Altius Mortgage IS NOT LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES CAUSED BY THE USE OF THIS WEBSITE AND/OR THE CONTENT LOCATED THEREON, WHETHER RESULTING IN WHOLE OR IN PART, FROM BREACH OF CONTRACT, TORTIOUS CONDUCT, NEGLIGENCE, STRICT LIABILITY OR ANY OTHER CAUSE OF ACTION. BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, THE ABOVE EXCLUSION MAY NOT APPLY TO YOU.
                                            ' />
                                    </ListItem>

                                </List>
                           
                            </CardContent>
                        </Card>


                        <Card className='cardSpacing' >
                            <CardContent>

                                <Typography variant="h5">
                                INDEMNIFICATION/LEGAL RELIEF
                                </Typography>

                                <List >

                                    <ListItem className='nested'>
                                        <ListItemText 
                                            secondary='You agree to indemnify and hold Tresa Bertlshofer | Altius Mortgage harmless from and against any and all loss, cost, damage, or expense including, but not limited to, reasonable attorneys’ fees incurred by Tresa Bertlshofer | Altius Mortgage arising out of any action at law or other proceeding necessary to enforce any of the terms, covenants or conditions of the Agreement or due to your breach of this Agreement.' />
                                    </ListItem>

                                </List>
                           
                            </CardContent>
                        </Card>


                        <Card className='cardSpacing' >
                            <CardContent>

                                <Typography variant="h5">
                                GOVERNING LAW AND VENUE
                                </Typography>

                                <List >

                                    <ListItem className='nested'>
                                        <ListItemText 
                                            secondary='This Agreement shall be governed by the laws of the State of Utah. You hereby consent and voluntarily submit to personal jurisdiction in the State of Utah, in and by the courts of the State of Uath in Salt Lake County and the United States District Court for the District of Utah, in any action in which a claim is brought with respect to this Agreement, and you agree that it may be served with process in any such action by hand delivery, courier, overnight delivery service, or certified or registered mail, return receipt requested. You irrevocably and unconditionally waive and agree not to plead, to the fullest extent permitted by law, any objection that it may now or hereafter have to the laying of venue or the convenience of the forum for any action or claim with respect to this Agreement brought in the United States District Court for the State of Utah or the courts of Salt Lake County.
                                            ' />
                                    </ListItem>

                                </List>
                           
                            </CardContent>
                        </Card>


                        <Card className='cardSpacing' >
                            <CardContent>

                                <Typography variant="h5">
                                MISCELLANEOUS
                                </Typography>

                                <List >

                                    <ListItem className='nested'>
                                        <ListItemText 
                                            secondary='This Agreement embodies the entire agreement between the parties and may not be amended, modified, altered or changed in any respect whatsoever except by a writing duly executed by the parties hereto. This Agreement supersedes any and all prior and contemporaneous oral or written agreements or understandings between you and Tresa Bertlshofer | Altius Mortgage. No representation, promise, inducement or statement of intention has been made by you and Tresa Bertlshofer | Altius Mortgage that is not embodied in this Agreement. You and Tresa Bertlshofer | Altius Mortgage shall not be bound by, or liable for, any alleged representation, promise, inducement, or statement of intention not contained in this Agreement. A printed version of this Agreement shall be admissible in judicial or administrative proceedings based upon or relating to this Agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. You agree that each provision of this Agreement shall be construed independently of any other provision of this Agreement. The invalidity or unenforceability of any particular provision of this Agreement shall not affect the other provisions hereof. In the event any provision of this Agreement is deemed unenforceable, including, but not limited to, the liability disclaimers above, the unenforceable provision shall be replaced with an enforceable provision that most closely reflects the intent of the original provision.
                                            ' />
                                    </ListItem>

                                </List>
                           
                            </CardContent>
                        </Card>

        </div>
         

        return(
            <Container maxWidth="md" className='containerMargin'>
            
                    {TermsOfUse}

            </Container>
        );
    }
}


export default TermsOfUse