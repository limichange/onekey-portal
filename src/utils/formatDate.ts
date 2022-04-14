import * as luxon from 'luxon';

import { getPageLanguage } from './getPageLanguage';

// format date
export const formatDate = (date = ''): string => {
  const dt = luxon.DateTime.fromISO(date);
  const isChinese = getPageLanguage() === 'zh';
  return dt.toFormat(isChinese ? 'yyyy年MM月dd日' : 'yyyy/MM/dd');
};
