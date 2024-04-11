export const getRandomFestivals = (festivalsList) => {
  const randomFestivalsList = [];
  const maxIndex = festivalsList.length - 1;
  while (randomFestivalsList.length < 10) {
    const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
    if (!randomFestivalsList.includes(randomIndex)) {
      randomFestivalsList.push(randomIndex);
    }
  }
  return randomFestivalsList;
};
