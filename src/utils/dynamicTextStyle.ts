import { MediaBreakpointsKey, mediaBreakpoints } from '../theme';

import { px2vw } from './px2vw';

type Style = {
  fontWeight: number;
  fontSize: number;
  lineHeight: string;
};

export function dynamicTextStyle(
  style: Style,
  breakpointKey: MediaBreakpointsKey,
) {
  const { fontWeight, fontSize, lineHeight } = style;
  const breakpoint = mediaBreakpoints[breakpointKey];

  const newFontSize = px2vw(fontSize, breakpoint);

  // remove lineHeight unit
  const newLineHeight = px2vw(
    parseInt(lineHeight.replace(/[^0-9.]/g, '')),
    breakpoint,
  );

  return {
    fontWeight,
    fontSize: `${newFontSize}vw`,
    lineHeight: `${newLineHeight}vw`,
  };
}
