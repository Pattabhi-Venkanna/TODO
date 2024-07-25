import { useContext } from "react";
import { Item } from "./Item";
import { TodoContext } from "../store/todoItems-store";

export const TodoItems = () => {
  const { todoItems } = useContext(TodoContext);
  return (
    <center>
      <div className="container ">
        {todoItems.map((item) => (
          <Item key={item.todoName} name={item.todoName} date={item.todoDate} />
        ))}
      </div>
    </center>
  );
};
