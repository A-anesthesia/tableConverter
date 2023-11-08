// Код тут.
// ``javascript
let tableData = [
  ["firstName", "lastName", "city", "state"],
  ["Elisabeth", "Gardenar", "Toledo", "OH"],
  ["Jamaal", "Du", "Sylvania", "OH"],
  ["Kathlyn", "Lavoie", "Maumee", "OH"],
];

// convertTable(tableData)
// => [
//  { "firstName" : "Elisabeth", "lastName" : "Gardenar", "city" : "Toledo", "state" : "OH" },
//  { "firstName" : "Jamaal", "lastName" : "Du", "city" : "Sylvania", "state" : "OH" },
//  { "firstName" : "Kathlyn", "lastName" : "Lavoie", "city" : "Maumee", "state" : "OH" }
// ]
// ``

function convertTable(arg) {
  const header = arg.shift();
  const result = arg.map((item) =>
    header.reduce((acc, cur, i) => {
      acc[cur] = item[i];
      return acc;
    }, {})
  );
  return result;
}
console.log(convertTable(tableData));
