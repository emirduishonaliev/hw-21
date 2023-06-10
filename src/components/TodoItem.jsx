import React, { useState } from "react";
import { styled } from "styled-components";

export const TodoItem = ({
  item,
  completedHandler,
  editHandler,
  deleteHandler,
}) => {
  const [editValue, setEditValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const editClickHandler = () => {
    setIsEdit(true);
  };

  const saveClickHandler = (event) => {
    event.preventDefault();
    editHandler(item, editValue);
    setIsEdit(false);
  };

  return (
    <div>
      {isEdit ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={saveClickHandler}>Save</button>
        </>
      ) : (
        <Li>
          <Title done={item.completed}>{item.title}</Title>

          <ButtonBlock>
            <button className="edit" onClick={editClickHandler}>
              Edit
            </button>
            <button
              className="completed"
              onClick={() => completedHandler(item)}
            >
              Completed
            </button>
            <button className="delete" onClick={() => deleteHandler(item.id)}>
              Delete
            </button>
          </ButtonBlock>
        </Li>
      )}
    </div>
  );
};

const Title = styled.p`
  text-decoration: ${(props) => (props.done ? "line-through" : "")};
  color: white;
  text-decoration-color: black;
  font-size: 17px;
`;

const Li = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
  padding: 10px 30px;
  width: 700px;
  margin-top: 13px;
  background-color: #94adc4;
`;

const ButtonBlock = styled.div`
  display: flex;
  gap: 10px;

  button {
    width: 100px;
    border: none;
    padding: 4px 0;
    border-radius: 4px;
  }
  .edit {
    background-color: blue;
    color: white;
  }
  .completed {
    background-color: green;
    color: white;
  }
  .delete {
    background-color: red;
    color: white;
  }
`;
