import React from 'react';
import style from './Paragraph.module.css';

export const Paragraph: React.FC = ({ children }) => (
  <p className={style.Paragraph}>{children}</p>
);
