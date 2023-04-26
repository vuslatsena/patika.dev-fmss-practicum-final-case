import React from "react";
import { Card } from "../../components";
import { useStarshipsContext } from "../../contexts/StarshipsContext";
import styles from "./CardList.module.scss";

// The CardList component renders a list of Card components 
//based on the starships data from the StarshipsContext
export const CardList = () => {
  const { starships } = useStarshipsContext();

// Render the starships data as a list of Card components, if there is any data
  return (
    <div className={styles.container}>
      {starships?.map((starships, index) => {
        return <Card key={index} item={starships} />;
      })}
    </div>
  );
};
