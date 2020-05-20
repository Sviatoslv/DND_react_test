import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";

import "./input.css";
import { add_item, add_list } from '../redux/actions';

export const Input = ({ id }) => {
  const [value, setValue] = React.useState("");
  const [isInputShown, setIsInputShown] = React.useState(false);
  const inputRef = React.useRef(null);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isInputShown) inputRef.current.focus();
  }, [isInputShown]);

  const handleShowInput = () => {
    setIsInputShown(!isInputShown);
  };

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleCancel = () => {
    setIsInputShown(false);
    setValue("");
  };

  const handleSaveNewItem = (event) => {
    event.preventDefault();

    if (!value) return;

    if (id) {
      dispatch(add_item(id, value));
    } else {
      dispatch(add_list(value));
    };

    setValue("");
  };

  return (
    <form onSubmit={handleSaveNewItem} className={id ? '' : 'add-list'}>
      {isInputShown && (
        <TextareaAutosize
          value={value}
          onChange={handleChange}
          className="text-input"
          placeholder="New item"
          inputRef={inputRef}
        />
      )}

      <div className='list__buttons-container'>
        <button
          onClick={handleShowInput}
          className="list__button"
          type="submit"
        >
          <AddIcon fontSize="small" />
          {`${isInputShown ? "Add" : "New"} ${id ? "Todo" : "List"}`}
        </button>

        {isInputShown && <button
          className="list__button list__button--cancel"
          type="button"
          onClick={handleCancel}
        >
          X
        </button>}
      </div>
    </form>
  );
};
