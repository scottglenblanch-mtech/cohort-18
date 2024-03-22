/*
- In Vanilla JS, Use an example of the following Array functions
  - forEach
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  - map
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  - reduce
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

You can just create an array and use the console.
*/

// forEach example
arrayExample.forEach(o => {
    console.log(o)
})

// mapExample
console.log(
    arrayExample.map(item => {
        return {
            name: item.name,
            htmlCode: item.htmlCode[0],
            unicode: item.unicode[0]
        }
    })
)

// reduce
console.log(
    arrayExample.reduce((counterForEachWord, item) => {
        const wordsInName = item.name.split(' ');
        
        wordsInName.forEach(word => {
            const previousCount = counterForEachWord[word] || 0
            counterForEachWord[word] = previousCount + 1
        })

        return counterForEachWord;
    }, {})
)
