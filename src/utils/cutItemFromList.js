export const cutItemFromList = (list, itemIndex) =>([
  ...list.slice(0, itemIndex),
  ...list.slice(itemIndex + 1),
]);
