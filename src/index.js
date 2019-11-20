import React, { Component, Fragment }               from 'react';
import ScrollToTop from 'react-router-scroll-top'
import ReactDOM                           from 'react-dom';
import { Route, Switch }                  from 'react-router'
import { Router } from "react-router-dom";
import { createBrowserHistory }           from 'history'
import * as serviceWorker              from './serviceWorker';
import ReactGA from 'react-ga';
import './index.css';
import Header                           from './Components/Header/Header';
import Footer                           from './Components/Footer/Footer';
import Home                               from './pages/Home/home';
import About                               from './pages/About/About';
import Loans                               from './pages/Loans/Loans';
import Apply                               from './pages/Apply/Apply';
import Glossary                              from './pages/Glossary/Glossary';
import PrivacyPolicy                               from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse                               from './pages/TermsOfUse/TermsOfUse';

ReactGA.initialize('UA-147535462-1', {
  debug: true,
  titleCase: false,
});
ReactGA.pageview(window.location.pathname + window.location.search);

const history = createBrowserHistory()

class App extends Component {
  state = {

};

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
                                            
                          </Switch>
                      
                     <Footer />
                      
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