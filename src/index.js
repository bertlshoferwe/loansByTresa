import React                from 'react';
import ReactDOM             from 'react-dom';
import {Provider}           from 'react-redux';
import { Route, Switch }    from 'react-router'
import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import thunk                from 'redux-thunk';
import createRootReducer    from './Reducers';
import * as serviceWorker   from './serviceWorker';
import ScrollToTop          from './scrollToTop';
import Header               from './Components/Header/Header';
import Footer               from './Components/Footer/Footer';
import Home                 from './pages/Home/home';
import About                from './pages/About/About';
import Loans                from './pages/Loans/Loans';
import Apply                from './pages/Apply/Apply';
import Glossary             from './pages/Glossary/Glossary';
import PrivacyPolicy        from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse           from './pages/TermsOfUse/TermsOfUse';
import './index.css';

const history = createBrowserHistory()

const initialState = {};

const store = createStore(
    createRootReducer(history),
    initialState,
    compose(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        ),
    ),
)

const App = () => {
    const _scrollTo = () => window.scrollTo(0, 0)

    return (
        <Provider store={store}>
            <ConnectedRouter onUpdate={_scrollTo}  history={history} >
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
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./index', () => {
    ReactDOM.render(<App/>, document.getElementById('root'));
  });
}

serviceWorker.unregister();