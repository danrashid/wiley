export const expect = (a, b) =>
  a === b
    ? "passed"
    : `failed
expected: ${b}
got:      ${a}`;
