import React, { ButtonHTMLAttributes } from 'react'

import './styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: "button";
}

export const RoundedButton: React.FC<ButtonProps> = ({text, type, ...rest}) => <button className="button" type={type} {...rest}>{text}</button>