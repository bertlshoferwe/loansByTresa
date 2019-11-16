import React, { Component } from 'react';
import { Container, Card, CardContent, Typography, List, ListItem, ListItemText, Link } from '@material-ui/core';
import './_PrivacyPolicy.scss'

class PrivacyPolicy extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        let Display = <div>
                        <Typography variant="h2" className='pageTitle'>
                            Privacy Policy
                        </Typography>

                        <Card className='cardSpacing' >
                            <CardContent>

                                <List >

                                    <ListItem className='nested'>
                                        <ListItemText 
                                            secondary='At Altius Mortgage, your trust and the security of your information is very important to us. This Privacy Policy explains what we do to protect and maintain your information and to let you know how you can limit the information that we share with others.
                                            "Site" refers to this Internet web site (http://www.loansbytresa.com) and its related services. "You" or "User" refers to a registered user of this Site. "Altius Mortgage" or "We" refers to Altius Mortgage
                                            ' />
                                    </ListItem>

                                </List>
                            
                            <List>
                                <ListItem >
                                    <ListItemText 
                                            primary="This Site contains links to other sites" />
                                </ListItem>
                                            
                                <ListItem className='nested'>
                                    <ListItemText 
                                        secondary="Altius Mortgage is not responsible for the privacy practices of the content of any other Web sites to which We link or to which We are linked. We encourage You to read the posted privacy statement whenever interacting with any web site." />
                                </ListItem>
                                        
                                <ListItem >
                                    <ListItemText 
                                        primary="The Work Space" />
                                </ListItem>
                                        
                                <ListItem className='nested'>
                                    <ListItemText
                                        secondary="This area of the Site is for the benefit of Users. The private and shared Work Space areas of the Site help to facilitate communication and the exchange and sharing of information. The information contained in private work spaces shared between Users and Altius Mortgage is not used for any purposes other than to facilitate communication and the exchange of information between the parties involved." />
                                </ListItem>

                            </List>
                            </CardContent>
                        </Card>




                    <Card className='cardSpacing'>
                        <CardContent>

                <Typography variant="h5">
                    Information We Gather
                            </Typography>

                    <List>
                            <ListItem >
                                <ListItemText
                                primary='We collect nonpublic personal information about You, including:'/>
                             </ListItem>
                            
                        <ListItem className='nested'>
                            <ListItemText 
                            secondary="Information We receive from you on applications, online registrations or other forms (such as your name, address, phone, fax, email address, street address, assets, income, debt and more)." />
                        </ListItem>

                        <ListItem className='nested'>
                            <ListItemText 
                            secondary="Information about your transactions with us, our affiliates or others (such as account balance, transaction history or information about our communications with you)." />
                        </ListItem>

                                <ListItem className='nested'>
                                    <ListItemText 
                                    secondary="Information about your creditworthiness, credit history and other facts about you that We obtain from consumer reporting agencies or from providers of marketing and demographic information." />
                                </ListItem>

                                <ListItem className='nested'>
                                    <ListItemText
                                    psecondary="nformation about your employment, employment history, your past real estate transactions, your property insurance coverage and more. " />
                                </ListItem>
                                <ListItem >
                                    <ListItemText
                                    secondary='We are required by law to verify the information that you provide to us but We greatly appreciate your honesty in accurately representing your financial information, history and ability to repay any current or future credit obligations.'/>
                                </ListItem>

                        <ListItem>
                            <ListItemText
                                primary='Automatically Gathered Information'/>
                        </ListItem>
                                <ListItem className='nested'>
                                    <ListItemText
                                        secondary='Altius Mortgage automatically collects your browser type and browser software version to tailor the presentation of the services to your platform and to maintain a record of your activity on the Site. Altius Mortgage may also use cookies to enable users to specify unique preferences and to track user trends and patterns. Users always have the option of disabling cookies via their browser preferences. If You disable cookies on your browser, please note that some parts of our Site may not function as effectively or may be considerably slower. As an automatic process, our web server software records a log file of IP addresses that access the Site. We also collect IP address information but do not ordinarily link IP addresses to Users Nonpublic personal information. However, We can and will use IP addresses to identify a User when We, in our sole discretion, determine that it is necessary to enforce compliance with our Terms and Conditions of Use or to protect our service, Site, customers or others.'/>
                                </ListItem>
                    </List>

            </CardContent>
        </Card>


        <Card className='cardSpacing'>
            <CardContent>

                <Typography variant="h5">
                     Information Use and Disclosure
                </Typography>

                    <List>

                    <ListItem>
                        <ListItemText
                            primary='Protecting the Confidentiality and Security of Your Information'/>
                    </ListItem>
                            <ListItem className='nested' >
                                <ListItemText
                                    secondary='Keeping financial information is one of our most important responsibilities. Only those persons who need access to your information to perform their job responsibilities are authorized to access your information. We take commercially reasonable precautions to protect your information and limit disclosure by maintaining physical, electronic and procedural safeguards.
                                    We share your information with others as required by law or as necessary to obtain credit approval for your loan.
                                    '/>
                            </ListItem>

                    <ListItem>
                        <ListItemText
                            primary='With Affiliates of Altius Mortgage
                            '/>
                    </ListItem>
                            <ListItem className='nested'>
                                <ListItemText
                                    secondary='We do not share your information with affiliates.
                                    '/>
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                    primary='With Third Party Service Providers, Joint Marketers and as Otherwise Permitted by Law
                                    '/>
                            </ListItem>
                            <ListItem className='nested'>
                                <ListItemText
                                    secondary='We may work with non-affiliated companies or organizations to provide services on our behalf in connection with obtaining approval for your loan or to provide you with opportunities to buy products or services offered by us or jointly with other financial institutions. As a result, we may disclose some of the information that we gather from you. For your protection, we require that these companies keep all personal information confidential.
                                    We also may disclose some or all of the information that we collect as permitted by law. For example, we may share personal information:
                                    '/>
                            </ListItem>
                            <ListItem className='nested'>
                                <ListItemText
                                    secondary='With regulatory authorities and law enforcement officials
                                    '/>
                            </ListItem>
                            <ListItem className='nested'>
                                <ListItemText
                                    secondary='To protect against fraud
                                    '/>
                            </ListItem>
                            <ListItem className='nested'>
                                <ListItemText
                                    secondary='To report activity to credit bureaus
                                    '/>
                            </ListItem>
                            <ListItem className='nested'>
                                <ListItemText
                                    secondary='To respond to a subpoena
                                    '/>
                            </ListItem>


                    <ListItem>
                        <ListItemText
                            primary='Opting Out
                            '/>
                    </ListItem>
                         <ListItem className='nested'>
                                <ListItemText
                                    secondary='You may opt out, that is, you may direct us not to share your information, by calling us at 801-923-3166.
                                    '/>
                            </ListItem>

                    <ListItem>
                        <ListItemText
                            primary='Registration Information
                            '/>
                    </ListItem>
                            <ListItem className='nested'>
                                <ListItemText
                                    secondary='We use nonpublic personal information for our own internal purposes including contacting You via email to inform You about updates to our services and providing You with other information that we deem necessary. We reserve the right to disclose your information as required by law. We do not rent or sell our Users nonpublic personal information to third parties.
                                    '/>
                            </ListItem>

                    <ListItem>
                        <ListItemText
                            primary='Advertising
                            '/>
                    </ListItem>
                            <ListItem className='nested'>
                                <Typography varient='body2' color='textSecondary'>
                                    At this time, we do not display banner advertising on our site, but we may send You email communications including information that we think may be of interest to You. You may opt out of receiving these promotional email communications at any time by
                                    <Link href="mailto:loansbytresa@gmail.com"> Contacting Us </Link>
                                </Typography>
                            </ListItem>


                    <ListItem>
                        <ListItemText
                            primary='Demographic Information, Surveys and Contests
                            '/>
                    </ListItem>
                            <ListItem className='nested'>
                                <ListItemText
                                    secondary='The demographic information that Altius Mortgage collects in the registration process and through online surveys may be used to help us improve our services to meet the needs and preferences of our Users. This may include targeting advertising to You about our services. Information we gather through a contest may also be disclosed to third parties as necessary for prize fulfillment and other aspects of any contest or similar offering.
                                    '/>
                            </ListItem>

                     <ListItem>
                        <ListItemText
                            primary='Comments Submitted by Users
                            '/>
                    </ListItem>
                            <ListItem className='nested'>
                                <ListItemText
                                    secondary='Altius Mortgage constantly seeks to improve the quality of the services We provide and the User experience on the Site. We value your input and encourage You to help us expand and make improvements to the Site by providing Us with any thoughts or comments You might have regarding our services or the operation of the Site. You can submit any comments by contacting us. If You provide this information, we will only use it to acknowledge or respond to your comments. In certain circumstances, we may ask for your permission to post your comments in marketing or promotional materials.
                                    '/>
                            </ListItem>

                    <ListItem>
                        <ListItemText
                            primary='Security
                            '/>
                    </ListItem>
                            <ListItem className='nested'>
                                <ListItemText
                                    secondary='We will use commercially reasonable methods to keep nonpublic personal information securely in our files and systems. Please note that with current technology, we cannot guarantee the security of your data as it travels over the Internet.
                                    '/>
                            </ListItem>

                    <ListItem>
                        <ListItemText
                            primary='How We Respond To Browser Do Not Track Requests
                            '/>
                    </ListItem>
                            <ListItem className='nested'>
                                <Typography varient='body2' color='textSecondary'>
                                    Altius Mortgage and other parties not affiliated with us may collect nonpublic personal information about your online activities over time and across different websites when you use our website or the services offered on our website. Industry standards regarding how to handle “Do Not Track” requests from web browsers are still evolving and there is currently no set of industry standards for handling such requests. As such we may not separately respond to or take any action with respect to a “do not track” configuration set in your internet browser. At this time, we do not have any protocol in place that allows you to opt-out of internet tracking. If you have any questions regarding our internet tracking methods please
                                    <Link href="mailto:loansbytresa@gmail.com"> Contacting Us </Link>
                                </Typography>
                            </ListItem>

                    <ListItem>
                        <ListItemText
                            primary='Correcting/Updating Your Information
                            '/>
                    </ListItem>
                            <ListItem className='nested'>
                                <Typography varient='body2' color='textSecondary'>
                                    To correct and/or update your information, please
                                    <Link href="mailto:loansbytresa@gmail.com"> Contacting Us </Link>
                                </Typography>
                            </ListItem>
                    </List>
            </CardContent>
        </Card>


        <Card className='cardSpacing'>
            <CardContent>

                <Typography variant="h4">
                     Contact Us
                </Typography>

                    <List>

                            <ListItem className='nested'>
                            <Typography varient='body2' color='textSecondary'>
                                    If You have any questions about this Privacy Agreement or the practices of this Site, you may
                                    <Link href="mailto:loansbytresa@gmail.com"> Contacting Us </Link>
                                </Typography>
                            </ListItem>

                            <ListItem >
                                <ListItemText
                                    primary='Altius Mortgage
                                    '/>
                            </ListItem>

                            <ListItem className='nested'>
                                <ListItemText
                                    primary='Customer Service
                                    '/>
                            </ListItem>
                            <ListItem className='nested'>
                                <Typography varient='body2' color='textSecondary'>
                                    11925 South 700 East <br/> Draper, Utah 84020 <br/>
                                    <Link href="tel:801-923-3166"> 801 923 3166 </Link>
                                </Typography>
                            </ListItem>



                    </List>
            </CardContent>
        </Card>

</div>

        return (
            <Container maxWidth="md" className='containerMargin' >

                {Display}

            </Container>
        );
    }
}


export default PrivacyPolicy