import { cutItemFromList } from './cutItemFromList';
import { pasteItemToList } from './pasteItemToList';

export const changeItemPosition = (list, oldIndex, newIndex) => {
  const item = list[oldIndex];
  const newCleanList = cutItemFromList(list, oldIndex);
  const results = pasteItemToList(newCleanList, newIndex, item);

  return results;
};
