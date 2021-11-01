describe('selection sort', () => {
  it('should sort an array of 100 items', () => {
    let array = Array.from({ length: 100 }, () =>
      Math.floor(Math.random() * 100)
    );
    let sortedArray = [...array].sort((a, b) => a - b);
    console.log(array);
    console.log(sortedArray);
    let result = selectionSort(array);
    for (let i = 0; i < array.length; i++) {
      expect(result[i]).toEqual(sortedArray[i]);
    }
  });
});
