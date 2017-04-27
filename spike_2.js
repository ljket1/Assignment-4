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
  for (i = 0; i < 500000; i++) {
    var r = Math.floor(Math.random() * 16) + 1; // Generate an Integer between 1 and 16
    var n = r.toString(2); // Convert to 4 Bit Binary
    var s = "0000".substr(n.length) + n; // Convert to Padded Binary String
    data.push([s[0], s[1], s[2], s[3]]); // Push Array
  }
  return data;
};

var myData = generateTestData();