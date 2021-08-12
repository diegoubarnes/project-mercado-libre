import React from 'react';

import './styles/PageError.sass';

function PageError(props) {
  return <div className="PageError">{props.error.message}</div>;
}

export default PageError;
