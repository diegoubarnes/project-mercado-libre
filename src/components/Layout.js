import React from 'react';
import Home from '../pages/home';


function Layout(props) {
  return (
    <React.Fragment>
      <Home/>
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
