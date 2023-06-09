import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Cars.module.scss";
import { useActions } from "../../hooks/useActions";

export interface car {
  id: number;
  name: string;
  picture: string;
  price: number;
}

interface carItemProps {
  car: car;
}

export const CarItem: FC<carItemProps> = ({ car }) => {
  const {addItem} = useActions();

  return (
    <div className={styles.item}>
      <div className={styles.image__wrapper}>
        <img className={styles.image} src={car.picture} alt="img" />
      </div>
      <div className={styles.content__wrapper}>
        <h2 className={styles.content__title}>{car.name}</h2>
        <p className={styles.content__price}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            currencyDisplay: "symbol",
            minimumFractionDigits: 0,
          }).format(car.price)}
        </p>
        <Link
          style={{ color: "white", marginBottom: "20px" }}
          to={`/car/${car.id}`}
        >
          Read more
        </Link>
      </div>
    </div>
  );
};
