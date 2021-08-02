import React from 'react';
import style from './DefaultBtn.module.css';

interface Props {
  onClick: VoidFunction;
}

export const DefaultBtn: React.FC<Props> = ({ onClick, children }) => (
  <button className={style.DefaultBtn} onClick={onClick}>
    {children}
  </button>
);
