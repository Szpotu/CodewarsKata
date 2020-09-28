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
const rotateToLeft = (word, repeat) => {
    word = word.split('');
    for (let i = 0; i < repeat; i++) {
        word.push(word[0]);
        word.shift();
    }
    return word.join('');
}


const encode = (n, someString) => {
    //Step 1 
    let splitedString = someString.split(''),
        nowhiteText = someString.split(/\s/).join(''),
        newWord = [],
        index = [],
        encodedString = [],
        counter = 0;

    for (iterate of splitedString) {
        counter++;
        if (iterate == ' ') {
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
    splitedString = splitedString.join('').split(/\s/).join('');
    splitedString = insertSpaces(splitedString, index);
    for (let i = 0; i < n; i++) {
        splitedString.pop();
    }
    //Step 4
    splitedString = splitedString.join('').split(/\s/);
    splitedString.unshift(`${n}`);
    for (value in splitedString) {
        encodedString.push(rotateToRight(splitedString[value], parseInt(n)));
        encodedString.push(' ');
    }
    encodedString.pop();


    return encodedString.join('');
};
const decode = (someString) => {

    let splitedToWords = someString.split(/\s/),
        rotatedString = [],
        spacePositions = [],
        n = parseInt(splitedToWords[0], 10),
        regexForN = new RegExp(n.toString()),
        word = '',
        counter = 0,
        decodedString = [],
        splitedString = someString.split(regexForN);
    splitedString.splice(0, 1);
    splitedString = splitedString.join('').split('');
    splitedString.splice(0, 1);
    console.log(splitedString);
    for (value in splitedString) {
        counter++;
        if (splitedString[value] == ' ') {

            spacePositions.push(counter);
        }
    }
    splitedString = splitedString.join('').split(/\s/);
    for (value in splitedString) {
        rotatedString.push(rotateToLeft(splitedString[value], n));
    }
    word = rotatedString.join('').slice(0, n);
    console.log(word);
    rotatedString.push(word);
    decodedString = rotatedString.join('').split('');
    decodedString.splice(0, n);
    decodedString = insertSpaces(decodedString.join(''), spacePositions);
    return decodedString.join('');
}
let test = encode(10, text);