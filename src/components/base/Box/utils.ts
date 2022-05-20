import { CSSProperties } from 'react';

import { cssProperties } from './cssProperties';

type Props = CSSProperties & {
  [key: string]: any;
};

export const cleanUndefinedValue = (obj: Props) => {
  const newObj: Props = {};

  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined) {
      newObj[key] = obj[key];
    }
  });

  return newObj;
};

export const filterProps = (props: Props, keys: string[]) => {
  const filteredProps: Props = {};

  // use forEach, no for in
  keys.forEach((key) => {
    if (props[key] !== undefined) {
      filteredProps[key] = props[key];
    }
  });

  return filteredProps;
};

export const clearProps = (props: Props, keys: string[]) => {
  const filteredProps: Props = {};

  // use forEach, no for in
  Object.keys(props).forEach((key) => {
    if (!keys.includes(key)) {
      filteredProps[key] = props[key];
    }
  });

  return filteredProps;
};

export const filterStyleProps = (props: Props) =>
  cleanUndefinedValue(filterProps(props, cssProperties));

export const clearStyleProps = (props: Props) =>
  clearProps(props, [...cssProperties]);
