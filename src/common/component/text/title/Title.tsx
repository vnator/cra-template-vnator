import React from 'react';
import { Titles } from '../../../model/tags';
import style from './Title.module.css';

interface Props {
  variant: Titles;
}

export const Title: React.FC<Props> = ({ children, variant }) => {
  const mountProps = {
    className: `${style.Title} ${style[variant]}`,
    children,
  };

  switch (variant) {
    case 'h1':
      return <h1 {...mountProps} />;
      break;

    case 'h2':
      return <h2 {...mountProps} />;
      break;

    case 'h3':
      return <h3 {...mountProps} />;
      break;

    case 'h4':
      return <h4 {...mountProps} />;
      break;

    case 'h5':
      return <h5 {...mountProps} />;
      break;

    default:
      return <h6 {...mountProps} />;
      break;
  }
};
