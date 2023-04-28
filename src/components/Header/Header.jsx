import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../assets/star-wars-logo.png";
import openingSound from "../../assets/opening-sound.mp3";
import { useStarshipsContext } from "../../contexts/StarshipsContext";
import styles from "./Header.module.scss";

export const Header = () => {
  const { search, setSearch, setPage } = useStarshipsContext();
  const [inputValue, setInputValue] = useState("");
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.addEventListener("loadeddata", () => {
      audioRef.current.play();
    });
  }, []);

  const handleChange = (event) => {
    setPage(1);
    setSearch(event.target.value);
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setPage(1);
    setSearch("");
    setInputValue("");
  };

  return (
    <header className={styles.base}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={starWarsLogo} alt="logo" width={200} />
          </Link>
        </div>
        <div className={styles.quotes}>
          <p>"May the Force be with you"</p>
        </div>
        <div className={styles.search}>
          <div>
            <input
              id="search"
              name="search"
              className={styles.input}
              type="text"
              placeholder=" "
              value={inputValue}
              onChange={handleChange}
            />
            <label htmlFor="email" className={styles.label}>
              Search starships...
            </label>
          </div>
          {!!search && (
            <button onClick={handleClick} className={styles.button}>
              X
            </button>
          )}
        </div>
      </div>
      <audio src={openingSound} ref={audioRef} />
    </header>
  );
};
