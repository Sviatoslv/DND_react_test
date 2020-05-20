import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./listItem.css";

export const ListItem = ({ title, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="list__item"
        >
          {title}
        </li>
      )}
    </Draggable>
  );
};
