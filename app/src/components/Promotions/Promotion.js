import React from 'react';
import {ButtonLink} from './../Button';

const Promotion = ({promotion}) => {
  const {link, title, image, price, commentPreview, storeName, date, user} = promotion;

  return (
    <div className="promotion">
      <div className="promotion__image">
        <a href={link} target="_blank" rel="noopener noreferrer"><img src={image} alt="{title}" /></a>
      </div>
      <div className="promotion__details">
        <div className="promotion__details_product">
          <span className="promotion_info promotion_info--store_name">{storeName}</span>
          <h2 className="promotion_info promotion_info--title"><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h2>
          <span className="promotion_info promotion_info--comment_preview">"{commentPreview}"</span>
          <div className="promotion-row-container">
            <span className="promotion_info promotion_info--price">{price}</span>
            <div className="button-container">
              <ButtonLink isPrimary={true} href={link}>Ver promoção</ButtonLink>
            </div>
          </div>
        </div>
        <div className="promotion__details_post">
          <span className="promotion__details_post_info promotion__details_post_info--date">{date}</span>
          <span className="promotion__details_post_info promotion__details_post_info--user">{user.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Promotion;