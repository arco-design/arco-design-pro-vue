export function addEventListen(
  target: EventTarget,
  event: string,
  fn: EventListenerOrEventListenerObject | null
) {
  if (
    target.addEventListener &&
    typeof target.addEventListener === 'function'
  ) {
    target.addEventListener(event, fn, false);
  } else if (target.attachEvent && typeof target.attachEvent === 'function') {
    target.attachEvent(`on${event}`, fn);
  }
}

export function removeEventListen(
  target: EventTarget,
  event: string,
  fn: EventListenerOrEventListenerObject | null
) {
  if (
    target.removeEventListener &&
    typeof target.removeEventListener === 'function'
  ) {
    target.removeEventListener(event, fn, false);
  } else if (target.detachEvent && typeof target.detachEvent === 'function') {
    target.detachEvent(`on${event}`, fn);
  }
}
