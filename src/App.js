import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";

import { List } from "./components/List";
import { Input } from "./components/Input";
import { drage_item } from "./redux/actions";
import "./app.css";

function App() {
  const lists = useSelector((state) => state);
  const dispatch = useDispatch();

  const onDragEnd = ({ destination, draggableId, source, type }) => {
    if (!destination) {
      return;
    }

    const { droppableId: destinationId, index: newIndex } = destination;
    const { droppableId: sourceId, index: oldIndex } = source;

    const payload = {
      draggableId,
      destinationId,
      sourceId,
      newIndex,
      oldIndex,
      type,
    };

    dispatch(drage_item(payload));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="List_DnD" type="list" direction="horizontal">
        {(provided) => (
          <div
            className="app"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {lists?.map((list, index) => (
              <List list={list} key={list.id} index={index}/>
            ))}
            {provided.placeholder}

            <Input />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
