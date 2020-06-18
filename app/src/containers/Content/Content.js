import React from 'react';
import './Content.css';
import {Promotions} from './../../components/Promotions';

import promotions from './../../mock/promotions.json';

const Content = () => {
  return (
    <main className="container">
      <Promotions data={promotions} />
    </main>
  );
}

export default Content;