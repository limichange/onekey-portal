import { FC, createElement } from 'react';

import JsxParser from 'react-jsx-parser';

export interface DynamicContentProps {
  jsx: string;
  components: Record<string, FC<any>>;
}

export const DynamicContent: FC<DynamicContentProps> = (props) => {
  const { jsx = '', components = {} } = props;

  /* @ts-ignore */
  return createElement(JsxParser, {
    renderInWrapper: false,
    components,
    jsx,
  });
};
