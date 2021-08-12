import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Results from './SearchResults';
import Details from './ProductDetail';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import Welcome from './Welcome';
function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/items/:id" component={Details} />
        <Route exact path="/items/search" component={Results} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
