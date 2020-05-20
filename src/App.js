import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

import { List } from "./components/List";
import { Input } from "./components/Input";
import { drage_item } from "./redux/actions";
import "./app.css";

function App() {
  const lists = useSelector((state) => state);
  const dispatch = useDispatch();

  const onDragEnd = ({ destination, draggableId, source }) => {
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
    };

    dispatch(drage_item(payload));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        {lists?.map((list) => (
          <List list={list} key={list.id} />
        ))}

        <Input />
      </div>
    </DragDropContext>
  );
}

export default App;
