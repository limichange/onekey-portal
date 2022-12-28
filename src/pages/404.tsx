import { FC, ReactNode, useEffect } from 'react';

import { navigate } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { isBrowser } from '../utils';

export interface Props {
  children?: ReactNode;
}

export const NotFound: FC<Props> = (props) => {
  const { children } = props;
  const { i18n } = useTranslation();
  const { language } = i18n;

  useEffect(() => {
    if (isBrowser()) {
      setTimeout(() => {
        navigate(language === 'en' ? `/not-found` : `/${language}/not-found`);
      }, 200);
    }
  }, [language]);

  return <div>{children}</div>;
};

export default NotFound;
