export const el = (tag, attributesOrElement, ...elements) => {
  const element = document.createElement(tag);

  if (
    attributesOrElement instanceof Element ||
    typeof attributesOrElement === "string"
  ) {
    element.append(attributesOrElement);
  } else if (attributesOrElement instanceof Object) {
    Object.entries(attributesOrElement).forEach(([key, value]) => {
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
  }

  element.append(...elements);

  return element;
};
