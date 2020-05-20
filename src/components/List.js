import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { ListItem } from "./ListItem";
import { Input } from "./Input";
import "./list.css";

export const List = ({ list }) => {
  const { innerList = [], name, id } = list;

  return (
    <div className="list">
      <h2 className="list__title">{name}</h2>

      <Droppable droppableId={String(list.id)}>
        {(provided) => (
          <ul
            className="list__list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {innerList.map((listItem, index) => (
              <ListItem
                title={listItem.title}
                index={index}
                id={listItem.id}
                key={listItem.id}
              />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      <Input id={id} />
    </div>
  );
};
