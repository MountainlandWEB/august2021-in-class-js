describe('parseNumbers', () => {
  it('should return an empty array if nothing is passed in', () => {
    const result = parseNumbers();
    expect(typeof result).toBe('object');
    expect(result.length).toBeDefined();
    expect(result.length).toEqual(0);
  });
  it('should return an array of size one when one parsable string is passed in', () => {
    const result = parseNumbers('45');
    expect(result.length).toEqual(1);
  });
  it('should return an array of size 5 when 5 parsable strings are passed in', () => {
    const result = parseNumbers('45', '65', '4', '567', '0');
    expect(result.length).toEqual(5);
  });
  it('should return an array of size 0 when 5 non parsable strings are passed in', () => {
    const result = parseNumbers('a', 'b', 'c', 'd', 'e');
    expect(result.length).toEqual(0);
  });
  it('should return an array of size 3 when 3 parsable and 2 non parsable strings are passed in', () => {
    const result = parseNumbers('a', '3', '45', 'd', '9');
    expect(result.length).toEqual(3);
  });
  it('should return an array of numbers when parsable numbers are passed in', () => {
    const result = parseNumbers('4', '5');
    expect(typeof result[0]).toBe('number');
    expect(typeof result[1]).toBe('number');
  });
});
