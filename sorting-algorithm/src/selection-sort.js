function selectionSort(array) {
  for (let index = 0; index < array.length; index++) {
    let minItem = array[index];
    let minItemIndex = index;
    for (
      let searchIndex = index + 1;
      searchIndex < array.length;
      searchIndex++
    ) {
      const item = array[searchIndex];
      if (item < minItem) {
        minItem = item;
        minItemIndex = searchIndex;
      }
    }
    const temp = array[index];
    array[index] = minItem;
    array[minItemIndex] = temp;
  }
  return array;
}
