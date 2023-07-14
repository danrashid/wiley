export const $ = (selectors) => {
  const elements = document.querySelectorAll(selectors);

  switch (elements.length) {
    case 0:
      return undefined;
    case 1:
      return elements[0];
    default:
      return elements;
  }
};

export const el = (tag, elementOrAttributes, ...elements) => {
  const element = document.createElement(tag);

  if (
    elementOrAttributes instanceof Element ||
    typeof elementOrAttributes === "string"
  ) {
    element.append(elementOrAttributes, ...elements);
  } else if (elementOrAttributes instanceof Object) {
    Object.entries(elementOrAttributes).forEach(([key, value]) => {
      if (value instanceof Function) {
        element[key] = (event) => value(event, element);
      } else if (value instanceof Object) {
        element.setAttribute(
          key,
          Object.entries(value).reduce(
            (a, [key, value]) => a + `${key}:${value};`,
            ""
          )
        );
      } else {
        element.setAttribute(key, value);
      }
    });
    element.append(...elements);
  }

  return element;
};

export const req = async (resource, options = {}) => {
  try {
    const response = await fetch(resource, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    switch (response.headers.get("Content-Type")) {
      case "application/json":
        return await response.json();
      case "text/plain":
        return await response.text();
      default:
        return response;
    }
  } catch (e) {
    console.error(e);
  }
};
