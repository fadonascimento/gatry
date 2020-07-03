import React from 'react';
import './App.css';

import Header from './containers/Header/Header';
import Content from './containers/Content/Content';

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
    </div>
  );
}

export default App;
