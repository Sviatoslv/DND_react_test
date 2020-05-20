import { ADD_ITEM, ADD_LIST, DRAG_ITEM } from "./actions";
import { changeItemPosition } from "../utils/changeItemPosition";

const initialState = [
  {
    id: 'list_1',
    name: "First",
    innerList: [
      { id: 1, title: "Text" },
      { id: 2, title: "Text Text" },
      { id: 3, title: "Text 3" },
    ],
  },
  {
    id: 'list_2',
    name: "Second",
    innerList: [
      { id: 11, title: "One" },
      { id: 22, title: "Two" },
    ],
  },
];

let listId = 10;

export const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case ADD_ITEM:
      const newItem = {
        id: Date.now(),
        title: action.value,
      };

      return state.map((list) =>
        list.id === action.id
          ? { ...list, innerList: [...list.innerList, newItem] }
          : list
      );

    case ADD_LIST:
      const newList = {
        id: `list_${listId}`,
        name: action.value,
        innerList: [],
      };

      listId++;

      return [...state, newList];

    case DRAG_ITEM:
      const {
        // draggableId,
        destinationId,
        sourceId,
        oldIndex,
        newIndex,
        type,
      } = action.payload;

      if (type === 'list') {
        const newState = [...state];
        const list = newState.splice(oldIndex, 1);
        newState.splice(newIndex, 0, ...list);

        return newState;
      }

      if (destinationId === sourceId) {
        return state.map((list) => {
          if (String(list.id) === sourceId) {
            return {
              ...list,
              innerList: changeItemPosition(list.innerList, oldIndex, newIndex),
            };
          }

          return list;
        });
      }

      const sourceList = state.find((list) => String(list.id) === sourceId);
      const item = sourceList.innerList.splice(oldIndex, 1)[0];
      console.log("ITEM: ---", item);

      const destinationList = state.find(
        (list) => String(list.id) === destinationId
      );
      destinationList.innerList.splice(newIndex, 0, item);

      return [...state];

    default:
      return state;
  }
};
