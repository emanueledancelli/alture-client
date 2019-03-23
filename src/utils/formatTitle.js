export const formatTitle = (title, symbol) => {
  if (symbol === "dash") {
    return title.replace(/[^A-Z0-9]+/gi, "-").toLowerCase();
  }
  if (symbol === "plus") {
    return title.replace(/[^A-Z0-9]+/gi, "+").toLowerCase();
  }
  return;
};
