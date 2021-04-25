import React, { useRef, useEffect } from 'react';
import { useLocation, Switch, Redirect, Route } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import TOS from './views/TOS';
import Login from './views/Login';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <Route path="/tos" component={TOS} />
          <Route path="/invite" component={() => {
            window.location.href = "https://discord.com/oauth2/authorize?client_id=665512711672823838&permissions=32829248&scope=bot";
            return null;
          }}/>
          <Route path="/login" component={Login} />
        </Switch>
      )} />
  );
}

export default App;