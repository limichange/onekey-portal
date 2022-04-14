export function isChinese(string = '') {
  const pattern = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;

  if (!pattern.exec(string)) {
    return false;
  }
  return true;
}
