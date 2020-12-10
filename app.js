//

//Return a String, reversed
// "hello" = "olleh"

function reverseString(str) {
  return str.split("").reverse("").join("");
  //or
  let revString = "";
  /*
  for (let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  */
  //The above "old-school" java style loop is outdated
  //+++++People want to see newer tech in your coe
  //+++++Think es6
  //+++++Plus, es6 stuff is fairly high level and therefore less chance of errors

  /* for of
  for (let char of str) {
    revString = char + revString;
  }
  
}
*/

  str.split("").forEach(function (char) {
    revString = char + revString;
  });

  return revString;
}
