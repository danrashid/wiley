export const expect = (el, html) =>
  el.outerHTML === html
    ? "passed"
    : `failed
expected: ${html}
got:      ${el.outerHTML}`;
