function parseNumbers(...strings) {
  return strings
    .filter((string) => !isNaN(string))
    .map((string) => Number(string));
}
