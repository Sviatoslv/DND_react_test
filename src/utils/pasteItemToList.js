export const pasteItemToList = (list, newIndex, item) => ([
  ...list.slice(0, newIndex),
  item,
  ...list.slice(newIndex + 1),
])
