import React from "react";
import { CardList, Button } from "../components";
import { useStarshipsContext } from "../contexts/StarshipsContext";

export const Home = () => {
  const { count, page, setPage, starships } = useStarshipsContext();

  const isLastPage = page >= count / 10;
  const isAllShown = starships.length === count;

  const handleLoadMore = () => {
    if (isLastPage) return;
    setPage((prev) => prev + 1);
  };

  return (
    <div className="container pb-50">
      <CardList />
      {!isAllShown && !isLastPage && count > 10 && (
        <Button onClick={handleLoadMore} disabled={isLastPage}>
          Load More
        </Button>
      )}
      {isAllShown && (
        <Button disabled style={{ cursor: "not-allowed" }}>
          All starships are shown
        </Button>
      )}
    </div>
  );
};
