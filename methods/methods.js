// .length on a string will return the number of character that the string contains.
const str = "sometimes i want to be on my own"
console.log(str.length)

// The trim() function removes white space from the beginning and end of a string.
const stri = " hello, it's me  "
console.log (stri.trim())

// The includes() function determines if a substring is contained in a larger string and returns true or false.
const writer = 'Jordano Waters'
const searchName = 'Jordano'
const searchLastName = 'River'

console.log(writer.includes(searchName))
console.log (writer.includes(searchLastName))

// indexOf() was the primary way you would check if a substring existed in a string.
// The function returns the index of the substring within the string. If the substring is not contained in the original string, it will return -1.

const lyricist = 'Andres Garcia'
const searchingName = 'Andres'
const searchingLastName = 'Cortes'

console.log (lyricist.indexOf(searchingName))
console.log (lyricist.indexOf(searchLastName))

// The toUpperCase() function returns a string with all upper case letters.

const frase = "sometimes it's important to do everything slowly so that you can understand it better"

console.log(frase.toUpperCase())

// The toLowerCase() function returns a string with all lower case letters.

const bestWriter = 'BELL HOOKS'

console.log(bestWriter.toLowerCase())

// The replace() function is called on a string and will return a string with a pattern replaced by a replacement string.

const replace = 'Hello works! this is a test on how this works. and also a good practice'
const strpattern = 'works'
const regexpatern = /works/gi
const replacement = 'person growing'

console.log(replace.replace(strpattern, replacement))
console.log(replace.replace(regexpatern, replacement))

// The slice() method will extract a section of a string based on the index supplied and return it as a new string.

const str1 = 'User input: Hello there friends!'
console.log(str1.slice(12))

// The split() method takes a separator which you want to split apart the string on, and it returns an array of strings.

const str2 = 'I want a job ASAP that pays me enough to live the life I deserve.'
const words = str2.split('')
const wordCount = words.length

console.log(words)
console.log(wordCount)

// The repeat() function returns a string consisting of the elements of the object repeated the given number of times.

const str3 = 'hello mundo. '
console.log(str3.repeat(4))

// The match() method retrieves the matches when matching a string against a regular expression. 

let sentence = 'quiero trabajar y ganar plata por favor universo. que tengo que hacer a parte de aplicar a los trabajos. Por favor!'
let regex = /[A-Z]/g
let found = sentence.match(regex)

console.log(found)

// The charAt() function returns the string character at a given index.

let str4 = 'hello mundo, que tengo que hacer?'
console.log(str4.charAt(0))
console.log(str4.charAt(6))

// The charCodeAt() method returns the unicode of the character at a specified index in a string.

console.log(str4.charCodeAt(0))
console.log(str4.charCodeAt(5))
console.log(str4.charCodeAt(10))