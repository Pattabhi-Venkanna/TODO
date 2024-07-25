import { useContext, useRef } from "react";
import styles from "./AddInput.module.css";
import { TodoContext } from "../store/todoItems-store";

export const AddInput = () => {
  const { AddItem } = useContext(TodoContext);
  const nameElement = useRef();
  const dateElement = useRef();

  const handleAdd = () => {
    event.preventDefault();
    const name = nameElement.current.value;
    const date = dateElement.current.value;
    AddItem(name, date);
    nameElement.current.value = "";
    dateElement.current.value = "";
  };
  return (
    <form className="container " onSubmit={handleAdd}>
      <div className="row m-1">
        <div className="col-6">
          <input
            type="text"
            placeholder="enter your todo here"
            className={styles.input}
            ref={nameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" className={styles.input} ref={dateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-primary">ADD</button>
        </div>
      </div>
    </form>
  );
};
