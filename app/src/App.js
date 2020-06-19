import React from 'react';
import './App.css';

import Header from './containers/Header/Header';
import Content from './containers/Content/Content';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
