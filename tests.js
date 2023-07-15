import { expect } from "./test.js";

export default {
  $: {
    "An unmatched selector": expect(true, true),
    "A selector with one match": expect(true, true),
    "A selector with many matches": expect(true, true),
    "An element": expect(true, true),
  },
  el: {
    "An element with a child element": expect(true, true),
    "An element with attributes": expect(true, true),
    "An element with attributes and a child element": expect(true, true),
    "An element with text": expect(true, true),
    "An element with attributes": expect(true, true),
    "An element with attributes and text": expect(true, true),
    "An element with children": expect(true, true),
    "An element with text and children": expect(true, true),
    "An element with attributes and children": expect(true, false),
    "An element with attributes, text, and children": expect(true, true),
  },
  req: {
    "A JSON response": expect(true, true),
    "A text response": expect(true, true),
    "A response": expect(true, true),
    "A request with custom headers": expect(true, true),
    "A request with a specific content type": expect(true, true),
    "An error from a bad response": expect(true, true),
    "An error from a bad request": expect(true, true),
    "An error from bad JSON": expect(true, true),
    "An error from bad text": expect(true, true),
  },
};
