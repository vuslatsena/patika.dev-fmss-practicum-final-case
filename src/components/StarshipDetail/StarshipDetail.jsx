import { starshipAssets } from "../../imageRoutes";
import styles from "./StarshipDetail.module.scss";
import { Link } from "react-router-dom";

export const StarshipDetail = ({ starship }) => {
  const { 
    name, 
    model, 
    cargo_capacity, 
    crew, 
    hyperdrive_rating, 
    passengers, 
    max_atmosphering_speed, 
    manufacturer,
  } = starship;

  const image = starshipAssets.find(assetObject => assetObject.name === name);

  return (
    <div>
      <div className={styles.detail}>
        <Link to="/" className={styles.button}>
          <span>back to other startships</span>
        </Link>
      </div>
      <div className={styles.detail}>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.subTitle}>
            <span className={styles.property}>Model: </span>
            {model}
          </p>
          <p className={styles.subTitle}>
            <span className={styles.property}>Cargo Capacity: </span>
            {cargo_capacity}
          </p>
          <p className={styles.subTitle}>
            <span className={styles.property}>Crew: </span>
            {crew}
          </p>
          <p className={styles.subTitle}>
            <span className={styles.property}>Hyperdrive Rating: </span>
            {hyperdrive_rating}
          </p>
          <p className={styles.subTitle}>
            <span className={styles.property}>Passengers: </span>
            {passengers}
          </p>
          <p className={styles.subTitle}>
            <span className={styles.property}>Max Atmosphere Speed: </span>
            {max_atmosphering_speed}
          </p>
          <p className={styles.subTitle}>
            <span className={styles.property}>Manufacturer: </span>
            {manufacturer}
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image?.path} alt={`${name} starship`} />
        </div>
      </div>
    </div>
  );
};
