import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Results from './SearchResults';
import Details from './ProductDetail';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/items/search" component={Results} />
        <Route exact path="/items/1" component={Details} />
        <Route exact path="/7" component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
