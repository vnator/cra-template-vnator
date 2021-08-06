import React from 'react';
import style from './IconBtn.module.css';

interface Props {
  onClick: VoidFunction;
}

export const IconBtn: React.FC<Props> = ({ onClick, children }) => (
  <button className={style.IconBtn} onClick={onClick}>
    {children}
  </button>
);
