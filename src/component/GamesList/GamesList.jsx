import { GamesItems } from "../GamesItems/GamesItems";
import style from "./GamesList.module.css";

export const GamesList = ({ data }) => {
  return (
    <ul className={style.list}>
      {data.map((item) => {
        return (
        <GamesItems key={item.id} el={item}/>
        );
      })}
    </ul>
  );
};
