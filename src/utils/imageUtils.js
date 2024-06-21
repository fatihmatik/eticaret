import { imagesArr } from "./imagesArr";

// function to get random elements from the array
export function getRandomElements(array, numElements) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray.slice(0, numElements);
}
export const randomElements = getRandomElements(imagesArr, 3);

// filter the randomElements' elements from the imagesArr
export const remainingElements = imagesArr.filter(
  (element) => !randomElements.includes(element)
);
