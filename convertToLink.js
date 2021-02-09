//converts given string header to md link
const convertToLink = () => {
  let str = process.argv[2];
  let splitStr = str.split(' ');
  let joinStr = splitStr.join('-');

  return console.log(`- [${str}](#`.concat(joinStr).concat(')'));
};

convertToLink();
