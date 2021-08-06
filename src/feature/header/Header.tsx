import React, { ReactElement } from 'react';
import style from './Header.module.css';

export function Header(): ReactElement {
  return <header className={style.Header}>Application Header</header>;
}
