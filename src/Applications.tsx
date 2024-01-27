import React from "react";
import SingleApplication from "./SingleApplication";
import styles from "./Applications.module.css";

const Applications = ({ apps }) => {
  return (
    <div className={styles.Applications}>
      {apps.map(app => (
        <SingleApplication key={app.id} application={app} />
      ))}
    </div>
  );
};

export default Applications;
