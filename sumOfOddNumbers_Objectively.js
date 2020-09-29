/*Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:
*/
rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
function rowSumOddNumbers(n) {
    const Row = {
        numbersInRow: [],
        sum: ([...args]) => { return [...args].reduce((first, second) => first + second) },
    };
    let nextNumber = 1;
    for (let i = 0; i <= n; i++) {

        Row.numbersInRow.splice(0);
        for (let j = 0; j < i; j++) {
            Row.numbersInRow.push(nextNumber);
            nextNumber += 2;
        }
    }
    let newRow = Object.create(Row);
    newRow.calculation = newRow.sum(newRow.numbersInRow);
    return newRow;
}