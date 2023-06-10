import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActionTypes } from "../store/todo/todoReducer";
import { postTodo } from "../store/todo/todoThunk";
import { styled } from "styled-components";

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  const { selectValue } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      title: inputValue,
      completed: false,
      edit: false,
    };

    dispatch(postTodo(data));

    setInputValue("");
  };

  const selectValueHandler = (e) => {
    dispatch({ type: todoActionTypes.SELECT_VALUE, payload: e.target.value });
  };

  return (
    <Container>
      <StyledForm onSubmit={submitHandler}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button disabled={!inputValue}>Add</button>
      </StyledForm>
      <select value={selectValue} onChange={selectValueHandler}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incompleted">InCompleted</option>
      </select>
    </Container>
  );
};

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 10px;
  :disabled {
    background-color: gray;
  }
  input {
    /* width: 190px; */
    padding: 3px;
  }
  button {
    width: 80px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 4px;
  }
`;

const Container = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
`;
