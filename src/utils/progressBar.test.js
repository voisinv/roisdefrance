import * as progressBarUtils from './progressBar';

describe('ProgressBar utils', () => {
  it('should getWidth correctly', () => {
    const widthOf100 = progressBarUtils.getWidth(100, 5);
    expect(widthOf100({ yearsOfReign: 3 })).toEqual(60);
  });
  it('should getX correctly', () => {
    const xOf70 = progressBarUtils.getX(100, 5);
    expect(xOf70({ cumulatedYearsOfReign: 2 })).toEqual(40);
  });
});