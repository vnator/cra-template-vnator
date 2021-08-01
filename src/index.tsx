import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { createIntl } from "react-intl";

import './index.css';
import App from './App';
import { store } from './config/store';
import reportWebVitals from './reportWebVitals';
import { applyIntlPolyfill, selectLocale } from './utils/helpers/selectLocale';
import { parseMessages } from './utils/helpers/parseMessage';
import { applicationMessages } from './config/messages';

const { lang } = selectLocale();

applyIntlPolyfill(lang)
  .catch(e => console.error(e));

  const intl = createIntl({
    locale: lang,
    messages: parseMessages(applicationMessages[lang]),
  });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
