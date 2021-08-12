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
        <Route path="/items/:id" component={Details} />
        <Route path="/items/search" component={Results} />
        <Route path="/7" component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
