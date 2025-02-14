import { FC, useEffect } from 'react';

import { navigate, withPrefix } from 'gatsby';
import {
  LANGUAGE_KEY,
  PageContext,
} from 'gatsby-plugin-react-i18next/dist/types';
import Cookies from 'js-cookie';
import { Helmet } from 'react-helmet';

import { isBrowser } from './utils';

interface WrapPageProps {
  children: React.ReactNode;
  pageContext: PageContext;
  location: Location;
}

const removePathPrefix = (pathname: string, stripTrailingSlash: boolean) => {
  const pathPrefix = withPrefix('/');
  let result = pathname;

  if (pathname.startsWith(pathPrefix)) {
    result = pathname.replace(pathPrefix, '/');
  }

  if (stripTrailingSlash && result.endsWith('/')) {
    return result.slice(0, -1);
  }

  return result;
};

const WrapPage: FC<WrapPageProps> = (props) => {
  const { children, pageContext, location } = props;
  const { defaultLanguage, routed, language } = pageContext.i18n;

  useEffect(() => {
    if (isBrowser()) {
      const { search } = location;

      let detected =
        window.localStorage.getItem(LANGUAGE_KEY) || defaultLanguage;

      if (routed) {
        detected = language;
      }

      window.localStorage.setItem(LANGUAGE_KEY, detected);

      Cookies.set(LANGUAGE_KEY, detected);

      if (detected !== defaultLanguage && !routed) {
        const queryParams = search || '';
        const stripTrailingSlash = false;

        const newUrl = withPrefix(
          `/${detected}${removePathPrefix(
            location.pathname,
            stripTrailingSlash,
          )}${queryParams}${location.hash}`,
        );

        // no way
        setTimeout(() => {
          if (!window.keep) navigate(newUrl);
        }, 200);
      }
    }

    return () => {};
  }, [defaultLanguage, language, location, routed]);

  return (
    <div>
      <Helmet
        htmlAttributes={{ lang: pageContext.language }}
        titleTemplate="OneKey Wallet | %s"
        defaultTitle="OneKey Wallet | All-in-one crypto wallet trusted by millions."
      >
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YL0P6QCC0D"
        />
        <script async src="https://www.videoask.com/embed/embed.js" />
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YL0P6QCC0D');
          `}
        </script>
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=272de4d5-5db1-4d12-bcbd-ce739d36810e"
        />
      </Helmet>

      {children}
    </div>
  );
};

export default WrapPage;
