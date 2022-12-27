export function getPosition() {
  const radius = 100;
  const x = Math.random() * 2 * radius - radius;
  const ylim = Math.sqrt(radius * radius - x * x);
  const y = Math.random() * 2 * ylim - ylim;

  return y;
}
