import React, { ReactElement } from 'react';
import style from './Welcome.module.css';

export function Welcome(): ReactElement {
  return <Welcome className={style.Welcome}>Application Welcome</Welcome>;
}
