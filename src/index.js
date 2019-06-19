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
import Home                               from './Components/home';



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
              <ConnectedRouter onUpdate={() => window.scrollTo(0,0)} history={history}>
              
                  <div className='app-body'>

                      {/* <Header/> */}

                      <div className='app-content'>
                          <Switch>
                              <Route exact path="/" component={Home} />
                                
                                            
                          </Switch>
                      </div>
                      
                      {/* <Footer /> */}
                  </div>    

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