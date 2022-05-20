export function px2vw(absoluteSize: number, breakpoint: number): number {
  return (absoluteSize / breakpoint) * 100;
}
