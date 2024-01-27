import { parsePageInfo } from "./utils";

const linkValue = `<http://localhost:3001/api/applications?_page=1&_limit=5>; rel="first", 
<http://localhost:3001/api/applications?_page=1&_limit=5>; rel="prev", 
<http://localhost:3001/api/applications?_page=3&_limit=5>; rel="next", 
<http://localhost:3001/api/applications?_page=20&_limit=5>; rel="last"`;

test("could parse page info correctly", () => {
  const parsed = parsePageInfo(linkValue);

  expect(parsed).toHaveProperty("first", 1);
  expect(parsed).toHaveProperty("prev", 1);
  expect(parsed).toHaveProperty("next", 3);
  expect(parsed).toHaveProperty("last", 20);
});
