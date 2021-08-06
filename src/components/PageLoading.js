import React from 'react';

import './styles/PageLoading.sass';
import Loader from './Loader';

function PageLoading() {
  return (
    <div className="PageLoading">
      <Loader />
    </div>
  );
}

export default PageLoading;
