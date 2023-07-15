export const expect = (a, b) => {
  const output = a instanceof Element ? a.outerHTML : a;

  return output === b
    ? `passed`
    : `failed
expected: ${b}
got:      ${output}`;
};
