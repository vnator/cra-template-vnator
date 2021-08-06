import React, { ReactElement } from 'react';
import style from './Welcome.module.css';

export function div(): ReactElement {
  return <div className={style.Welcome}>Application Welcome</div>;
}
