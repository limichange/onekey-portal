export function oneLine(string: string) {
  return string
    .split(/\\n/)
    .map((line) => line.trim())
    .filter((line) => line)
    .join(' ');
}
