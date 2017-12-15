const progressBarWidth: number = 40;
const height = 75;

const getWidth = (width: number, totalYearsOfReign) => (o: any) => {
  return width * (o.yearsOfReign / totalYearsOfReign);
};

const getX = (width: number, totalYearsOfReign) => (o: any) => {
  return width * (o.cumulatedYearsOfReign / totalYearsOfReign);
};


export {
  getWidth,
  getX,
  progressBarWidth,
  height
}