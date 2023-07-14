export const el = (tag, elementOrAttributes, ...elements) => {
  const element = document.createElement(tag);

  if (
    elementOrAttributes instanceof Element ||
    typeof elementOrAttributes === "string"
  ) {
    element.append(elementOrAttributes, ...elements);
  } else if (elementOrAttributes instanceof Object) {
    Object.entries(elementOrAttributes).forEach(([key, value]) => {
      element.setAttribute(
        key,
        value instanceof Object
          ? Object.entries(value).reduce(
              (a, [key, value]) => `${key}:${value};` + a,
              ""
            )
          : value
      );
    });
    element.append(...elements);
  }

  return element;
};
