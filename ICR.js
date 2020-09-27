/*In this kata, your task is to implement what I call Iterative Rotation Cipher (IRC). To complete the task, you will create an object with two methods, encode and decode. (For non-JavaScript versions, you only need to write the two functions without the enclosing dict)

Input
The encode method will receive two arguments — a positive integer n and a string value.

The decode method will receive one argument — a string value.

Output
Each method will return a string value.

How It Works
Encoding and decoding are done by performing a series of character and substring rotations on a string input.

Encoding: The number of rotations is determined by the value of n. The sequence of rotations is applied in the following order:
 Step 1: remove all spaces in the string (but remember their positions)
 Step 2: shift the order of characters in the new string to the right by n characters
 Step 3: put the spaces back in their original positions
 Step 4: shift the characters of each substring (separated by one or more consecutive spaces) to the right by n
Repeat this process until it has been completed n times in total.
The value n is then prepended to the resulting string with a space.

Decoding: Decoding simply reverses the encoding process.*/



let text = 'If you wish to make an apple pie from scratch, you must first invent the universe.';
const addIndex = function(arr, start, ...items) {
    arr.splice(start, 0, ...items);
    return arr;
}
const insertSpaces = (text, spaces) => {
    let myText = text.split(/\s/);
    myText = myText.join('');
    myText = myText.split('');
    for (let i = 0; i < spaces.length; i++) {
        addIndex(myText, spaces[i] - 1, ' ');
        console.log(spaces[i]);
    }

    return myText
};
const rotateToRight = (word, repeat) => {
    word = word.split('');
    for (let i = 0; i < repeat; i++) {
        word.unshift(word[word.length - 1]);
        word.pop();
    }

    return word.join('');
};

const encode = (n, someString) => {
        //Step 1 
        let splitedString = someString.split(''),
            nowhiteText = someString.split(/\s/).join(''),
            newWord = [],
            index = [],
            newString = [],
            counter = 0;
        
        for (iterate of splitedString) {
            counter++;
            if (iterate == ' ') {
                console.log(counter);
                index.push(counter)
            }
        };
        //Step 2 
        nowhiteText = nowhiteText.split('');
        for (let i = nowhiteText.length - 1; i >= nowhiteText.length - n; i--) {
            newWord.push(nowhiteText[i]);
        }

        newWord = newWord.reverse();
        splitedString.unshift(...newWord);
        //Step 3 
        splitedString = splitedString.join('').toString().split(/\s/).join('').toString();
        splitedString = insertSpaces(splitedString, index);
        for (let i = 0; i < n; i++) {
            splitedString.pop();
        }
        //Step 4
        splitedString = splitedString.join('').split(/\s/);
        for (value in splitedString) {
            newString.push(rotateToRight(splitedString[value], 10));
            newString.push(' ');
        }
        newString.pop();

        return newString.join('');
    }
    
