/**
 *
 * This function will take an array of objects and return a count of how many of the objects
 * have the 'isSelected' boolean property set to true
 *
 */

function countSelected(elements = []) {
  return elements ? elements.filter((element) => element.isSelected).length : 0;
}
