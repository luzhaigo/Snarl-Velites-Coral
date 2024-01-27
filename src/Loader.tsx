import React, { useState, useEffect, useCallback } from "react";
import Applications from "./Applications";
import { Button } from "./ui/Button/Button";
import styles from "./Loader.module.css";
import * as API from "./api";

const LIMIT = 5;

const Loader = () => {
  const [apps, setApps] = useState([]);
  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState(null);

  useEffect(() => {
    API.getApps(page, LIMIT).then(({ data: apps, pageInfo }) => {
      setApps(prevApps => prevApps.concat(apps));
      setPageInfo(pageInfo);
    });
  }, [page]);

  const onloadMoreClick = useCallback(() => {
    setPage(p => p + 1);
  }, []);

  return (
    <>
      <Applications apps={apps} />
      {pageInfo?.last !== page && (
        <Button className={styles.loadmore} onClick={onloadMoreClick}>
          Load more
        </Button>
      )}
    </>
  );
};

export default Loader;
