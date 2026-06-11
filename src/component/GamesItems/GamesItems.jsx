import style from "./GamesItems.module.css";
import clsx from "clsx";

export const GamesItems = ({ el }) => {
  return (
    <li
      className={clsx(style.item, el.isOnline ? style.itemOnline : style.itemOffline)}
      key={el.id}
    >
      <img
        className={style.images}
        src={el.images}
        alt="#"
      />
      <h3>{el.title}</h3>
      <p>{el.genre}</p>
      <p>{el.rating}</p>
      <p>{el.year}</p>
      <p>{el.developer}</p>
      <p className={el.isOnline ? style.online : style.offline}>
        {el.isOnline ? "online" : "offline"}
      </p>
      <p>{el.platform}</p>
      <p>
        start: {el.time.start} <br /> end: {el.time.end}
      </p>
    </li>
  );
};
