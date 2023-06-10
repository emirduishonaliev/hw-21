import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import {
  putCompletedTodo,
  putDeleteTodo,
  putEditTodo,
} from "../store/todo/todoThunk";

export const TodoList = () => {
  const { items, selectValue } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('key', selectValue)
  },[selectValue])

  const completedHandler = (data) => {
    const result = {
      ...data,
      completed: !data.completed,
    };
    dispatch(putCompletedTodo(result));
  };

  const editHandler = (data, title) => {
    const result = {
      ...data,
      title: title,
    };
    dispatch(putEditTodo(result));
  };

  const deleteHandler = (id) => {
    dispatch(putDeleteTodo(id));
  };

  return (
    <div>
      {items?.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          completedHandler={completedHandler}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
};
