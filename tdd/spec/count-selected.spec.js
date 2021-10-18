/**
 * Array with zero elements
 * Array with one element
 * Array with all selected
 * Array with none selected
 */

describe('countSelected', () => {
  it('should return a zero when an array with zero elements is passed in', () => {
    const array = [];
    const result = countSelected(array);
    expect(result).toEqual(0);
  });
  it('should return 1 when an array with one element with the isSelected flag set to true is passed in', () => {
    const array = [
      {
        isSelected: true,
      },
    ];
    const result = countSelected(array);
    expect(result).toEqual(1);
  });
  it('should return 10 when an array with 10 elements all set to isSelected = true is passed in', () => {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push({
        isSelected: true,
      });
    }
    const result = countSelected(array);
    expect(result).toEqual(10);
  });
  it('should return 0 when an array with 10 elements all set to isSelected = false is passed in', () => {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push({
        isSelected: false,
      });
    }
    const result = countSelected(array);
    expect(result).toEqual(0);
  });
  it('should return 0 when an null parameter is passed in', () => {
    const result = countSelected(null);
    expect(result).toEqual(0);
  });
  it('should return 0 when an undefined parameter is passed in', () => {
    const result = countSelected();
    expect(result).toEqual(0);
  });
});
