export const expect = (el, html) => {
  const result = el.outerHTML === html;

  return result
    ? "passed"
    : `failed
expected: ${html}
got:      ${el.outerHTML}`;
};
