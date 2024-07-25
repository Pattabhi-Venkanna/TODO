import { useContext } from "react";
import { TodoContext } from "../store/todoItems-store";

export const Item = ({ name, date }) => {
  const { DelItem } = useContext(TodoContext);
  return (
    <div className="row m-2">
      <div className="col-6">{name}</div>
      <div className="col-4">{date}</div>
      <div className="col-2">
        <button className="btn btn-danger" onClick={() => DelItem(name)}>
          DEL
        </button>
      </div>
    </div>
  );
};
