import React, { ReactElement } from 'react';
import reactLogo from '../../images/react-logo.svg';
import style from './App.module.css';

export function App(): ReactElement {
  return (
    <div className={style.App}>
      <header className={style.AppHeader}>
        <img src={reactLogo} className={style.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={style.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
