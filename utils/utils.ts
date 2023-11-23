export const getPagesRange = (currentPage: number) => {
  if (!(currentPage % 10)) {
    return currentPage;
  } else {
    return Math.floor(currentPage / 10 + 1) * 10;
  }
};
