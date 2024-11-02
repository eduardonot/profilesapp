export const experienceTable = Array.from<number>({ length: 100 }).map(
  (_value, index: number, array) => {
    if (index === 0) array[index] = 0;
    else array[index] = array[index - 1] + 100 * index + index * 10;
    return array[index];
  }
);

export const calculateExperience = (
  gainExp: number,
  expMultiplier: number = 1
): number => {
  return Math.floor(gainExp * expMultiplier);
};
