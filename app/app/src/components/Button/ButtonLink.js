import React from 'react';
import './Button.css';

const ButtonLink = ({href, isPrimary, children}) => {
  return (
    <a href={href}
      className={"button-cta" + (isPrimary ? " button-cta--primary" : "")}><span>{children}</span></a>
  );
}

export default ButtonLink;