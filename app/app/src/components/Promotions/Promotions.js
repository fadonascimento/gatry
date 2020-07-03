import React from 'react';
import './Promotions.css';

import Promotion from './Promotion';

const Promotions = ({data}) => {
  return (
    <div className="promotions">
      {data.map((promotion, index) => <Promotion promotion={promotion} key={index} />)}
    </div>
  );
}

export default Promotions;