var moreCodeTable = [{
  letter: 'a',
  code: '1001'
}, {
  letter: 'b',
  code: '0011'
}, {
  letter: 'c',
  code: '0101'
}, {
  letter: 'd',
  code: '1110'
}, {
  letter: 'e',
  code: '1111'
}];

var generateTestData = function () {
  var data = [];
  for (i = 0; i < 500000; i++) {
    var r = Math.floor(Math.random() * 16) + 1; // Generate an Integer between 1 and 16
    var n = r.toString(2); // Convert to 4 Bit Binary
    var s = "0000".substr(n.length) + n; // Convert to Padded Binary String
    data.push(s); // Push String
  }
  return data;
};

var myData = generateTestData();