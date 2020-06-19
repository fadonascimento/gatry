import React from 'react';
import {Button} from './../Button';

const Promotion = ({promotion}) => {
  // const {link, title, image, price, storeName, date, user} = promotion;
  const {title, image, price} = promotion;

  return (
    <div className="promotion">
      <div className="promotion__image">
        <img src={image} alt="" />
      </div>
      <div className="promotion__details">
        <h2 className="promotion_info promotion_info--title">{title}</h2>
        <span className="promotion_info promotion_info--price">{price}</span>
        <div className="button-container">
          <Button isPrimary={true}>Ver promoção</Button>
        </div>
      </div>
    </div>
  );
}

export default Promotion;