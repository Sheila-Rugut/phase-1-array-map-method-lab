const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*const titleCased = () => {
  return tutorials.map((line)=>{
//Call the split() method to get an array containing the words
//lowercase the entire string to make sure that only the first letter of each word is uppercase.
    const array=line.toLowerCase().split(" ");
//Call the map() method to iterate over the array and capitalize the first character of each word.
    const capitalizedWords=array.map((token)=>token.charAt(0).toUpperCase() +token.slice(1));
   // Join the array of words into a string, using the join() method.
    const result=capitalizedWords.join(" ");
    return result;
  });
};*/
const titleCased = () => {
  return tutorials.map((array)=>{
    //Call the split() method to get an array containing the words
    const word=array.split(" ");
    //Call the map() method to iterate over the array and capitalize the first character of each word.
    const capitalizedWords=word.map((token)=>token.charAt(0).toUpperCase() +token.slice(1));
    // Join the array of words into a string, using the join() method.
    const response=capitalizedWords.join(" ");
    return response;
  });
};