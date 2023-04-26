import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const StarshipsContext = createContext();

export const useStarshipsContext = () => useContext(StarshipsContext);

export const StarshipsProvider = (props) => {
  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const { data } = await axios.get("https://swapi.dev/api/starships", {
          params: { page, search },
        });

        setStarships((prevStarships) =>
          page === 1 ? data.results : [...prevStarships, ...data.results]
        );
        setCount(data.count);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStarships();
  }, [page, search]);

  return (
    <StarshipsContext.Provider
      value={{
        starships,
        setStarships,
        page,
        setPage,
        search,
        setSearch,
        count,
      }}
    >
      {props.children}
    </StarshipsContext.Provider>
  );
};
