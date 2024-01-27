export const parsePageInfo = info => {
  const links = info?.split(",") || [];

  return links.reduce((acc, link) => {
    const page = link.match(/_page=(\d+)&/)?.[1];
    const rel = link.match(/rel=\"(\w+)\"/)?.[1];

    if (!page || !rel) return acc;

    return { ...acc, [rel]: parseInt(page) };
  }, {});
};
