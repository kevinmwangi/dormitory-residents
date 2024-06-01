import React from 'react';
import ResidentsList from './ResidentsList';
import Search from './Search';
import Error from './Error';

function Main() {
  return (
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search />
        <Error/>
        <ResidentsList/>
      </div>
  );
}

export default Main;