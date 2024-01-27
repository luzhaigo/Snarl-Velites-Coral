import { parsePageInfo } from "./utils";

export const getApps = async (page, limit) => {
  const res = await fetch(
    `http://localhost:3001/api/applications?_page=${page}&_limit=${limit}`
  );

  const pageInfo = parsePageInfo(res.headers.get("link"));

  const data = await res.json();

  return { data, pageInfo };
};
