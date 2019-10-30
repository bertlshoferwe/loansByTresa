import React, { Component }               from 'react';
import ReactDOM                           from 'react-dom';
import {Provider}                         from 'react-redux';
import { Route, Switch }                  from 'react-router'
import { ConnectedRouter }                from 'connected-react-router'
import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory }           from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk                                from 'redux-thunk';
import Reducers                           from './Reducers';
import * as serviceWorker              from './serviceWorker';
import './index.css';
import ScrollToTop                           from './scrollToTop';
import Header                           from './Components/Common/Header';
import Footer                           from './Components/Common/Footer';
import Home                               from './pages/home';
import About                               from './pages/About';
import Loans                               from './pages/Loans';
import Apply                               from './pages/Apply';
import Glossary                              from './pages/Glossary';
import PrivacyPolicy                               from './pages/PrivacyPolicy';
import TermsOfUse                               from './pages/TermsOfUse';



const history = createBrowserHistory()

const initialState = {};

const store = createStore(
  connectRouter(history)(Reducers),
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      ),
  ),
)

class App extends Component {
  state = {

};

  render(){
    
    return ( 
          <Provider store={store}>
              <ConnectedRouter  history={history}>
                <ScrollToTop>
                  <div className='app-body'>

                      <Header/>

                      <div className='app-content'>
                          <Switch>
                              <Route exact path="/" component={Home} />
                              <Route path="/About" component={About} />
                              <Route path="/Loans" component={Loans} />
                              <Route path="/Apply" component={Apply} />
                              <Route path="/Glossary" component={Glossary} />
                              <Route path="/Privacy_Policy" component={PrivacyPolicy} />
                              <Route path="/Terms_Of_Use" component={TermsOfUse} />
                                            
                          </Switch>
                      </div>
                      
                     <Footer />
                  </div>    
                </ScrollToTop>
              </ConnectedRouter>
          </Provider>
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