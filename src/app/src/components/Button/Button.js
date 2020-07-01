import React from 'react';
import './Button.css';

const Button = ({isPrimary, disabled, children}) => {
  return (
    <button
      className={"button-cta" + (isPrimary ? " button-cta--primary" : "")}
      disabled={disabled}><span>{children}</span></button>
  );
}

export default Button;