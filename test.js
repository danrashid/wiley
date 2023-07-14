export const expect = (el, html) => {
  const result = el.outerHTML === html;

  return result
    ? "passed"
    : `failed\nexpected: ${html}\ngot:      ${el.outerHTML}`;
};
