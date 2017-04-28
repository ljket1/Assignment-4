var morseCodeTableArray = [{
  letter: 'a',
  code: ['1', '0', '0', '1']
}, {
  letter: 'b',
  code: ['0', '0', '1', '1']
}, {
  letter: 'c',
  code: ['0', '1', '0', '1']
}, {
  letter: 'd',
  code: ['1', '1', '1', '0']
}, {
  letter: 'e',
  code: ['1', '1', '1', '1']
}];

var generateTestData = function () {
  var data = [];
  for (var i = 0; i < 50000; i++) {
    var r = Math.floor(Math.random() * 16) + 1; // Generate an Integer between 1 and 16
    var n = r.toString(2); // Convert to 4 Bit Binary
    var s = "0000".substr(n.length) + n; // Convert to Padded Binary String
    data.push([s[0], s[1], s[2], s[3]]); // Push Array
  }
  return data;
};

var compareArray = function (arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
};

var myData = generateTestData();

for (var i = 0; i < myData.length; i++) {
  for (var j = 0; j < morseCodeTableArray.length; j++) {
    if (compareArray(myData[i], morseCodeTableArray[j].code)) {
      console.log(morseCodeTableArray[j].letter);
      break
    }
    console.log(null);
  }
}