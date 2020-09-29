/*Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:
*/
f
unction rowSumOddNumbers(n) {
    let numbersInRow = [],
        nextNumber = 1;
    const sum = ([...args]) => { return [...args].reduce((first, second) => first + second) };
    for (let i = 0; i <= n; i++) {
        numbersInRow.splice(0);
        for (let j = 0; j < i; j++) {
            numbersInRow.push(nextNumber);
            nextNumber += 2;
        }
    }
    return sum(numbersInRow);
}