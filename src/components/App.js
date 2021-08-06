import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Layout from './Layout';
import Home from './../pages/home';
import Results from './SearchResults';
import Details from './ProductDetail';
// import NotFound from '../pages/NotFound';
function App() {
  return (
    <BrowserRouter>
    {/* <Layout> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items?search=1" component={Results} />
        <Route exact path="/items/1" component={Details} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    {/* </Layout> */}
  </BrowserRouter>
  );
}

export default App;
