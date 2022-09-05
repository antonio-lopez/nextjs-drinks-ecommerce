const TruncateString = (str, n) => {
  if (str.length <= n) {
    return str;
  }
  const subString = str.slice(0, n - 1); // the original check
  const truncate = subString.slice(0, subString.lastIndexOf(' ')); // slice incomplete word
  return `${truncate}...`;
};

export default TruncateString;
