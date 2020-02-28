import React, { Component, Fragment }               from 'react';
import ScrollToTop from 'react-router-scroll-top'
import ReactDOM                           from 'react-dom';
import { Route, Switch }                  from 'react-router'
import { Router } from "react-router-dom";
import { createBrowserHistory }           from 'history'
import * as serviceWorker              from './serviceWorker';
import ReactGA from 'react-ga';
import './index.css';
import CookieBanner                     from './Components/CookieBanner/banner';
import Header                           from './Components/Header/Header';
import Footer                           from './Components/Footer/Footer';
import Home                               from './pages/Home/home';
import About                               from './pages/About/About';
import Loans                               from './pages/Loans/Loans';
import Apply                               from './pages/Apply/Apply';
import Glossary                              from './pages/Glossary/Glossary';
import PrivacyPolicy                               from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse                               from './pages/TermsOfUse/TermsOfUse';
import Calculator                               from './pages/Calculator/Calculator';

//initiate google analitics
ReactGA.initialize('UA-153404448-1');

const history = createBrowserHistory()

// add event listener to set page on page change
history.listen(location => {
	ReactGA.set({ page: location.pathname })
	ReactGA.pageview(location.pathname)
})

class App extends Component {
  state = {

};

componentDidMount() {
  //set initial page for google analitics 
  ReactGA.pageview(window.location.pathname)
}

  render(){

    

    return ( 
              <Router onUpdate={() => window.scrollTo(0, 0)}  history={history}>
                <ScrollToTop>
                  <Fragment>

                      <Header/>

                      
                          <Switch>
                              <Route exact path="/" component={Home} />
                              <Route path="/About" component={About} />
                              <Route path="/Loans" component={Loans} />
                              <Route path="/Apply" component={Apply} />
                              <Route path="/Glossary" component={Glossary} />
                              <Route path="/Privacy_Policy" component={PrivacyPolicy} />
                              <Route path="/Terms_Of_Use" component={TermsOfUse} />
                              <Route path="/Calculator" component={Calculator} />
                              {/* catch page for unmatched pages */}
                              <Route component={Home} />
                          </Switch>
                      
                     <Footer />
                   <CookieBanner/>
                      
                   </Fragment> 
                </ScrollToTop> 
              </Router>
    );
  }
} 
ReactDOM.render(<App/>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./index', () => {
    ReactDOM.render(<App/>, document.getElementById('root'));
  });
}

serviceWorker.unregister();