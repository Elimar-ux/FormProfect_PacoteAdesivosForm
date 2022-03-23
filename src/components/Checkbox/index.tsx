import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  name: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({label, name, ...rest}) => (
  <div className="checkbox-container">
      <input id={name} type="checkbox" {...rest}/>
      <label htmlFor={name}>{label}</label>
  </div>
)