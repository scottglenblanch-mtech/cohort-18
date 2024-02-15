function getPerson(name, movies) {

    return {
        name,
        movies
    }
    
}

function Person(name, movies) {
    this.name = name;
    this.movies = movies;
}

class Person1 {
    constructor(name, movies) {
        this.name = name;
        this.movies = movies;
    }
}

const person1 = getPerson('Scott1', ['movie1', 'movie2'])
const person2 = new Person('Scott2', ['movie3', 'movie4'])
const person3 = new Person1('Scott3', ['movie5', 'movie6'])


console.log(person1)
console.log(person2)
console.log(person3)