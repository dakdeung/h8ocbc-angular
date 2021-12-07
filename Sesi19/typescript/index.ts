// var message: string = "Hello FSD OCBC"

// console.log(message)


// class students {
//     private id: number | undefined
//     public firstName: string = "Riyan";

// }

// let itemsTS: (string | number | boolean)[]
// itemsTS = ["aku", true, 15]

// // const anyMessage student[]: 
// //declare function

// function greetParticipant (name: string, age?: number){
//     console.log(`Hello ${name}! Your age is ${age}.`)
// }

// greetParticipant('Riyan')

// // Object
// interface Student{
//     name: string,
//     age? : number | string,
//     score: number
// }

// let studentObject: Student = {
//     name: "Riyan",
//     age: 21,
//     score: 90
// }

// // Object 2
// let object : {
//     name: string,
//     age?: number|string,
//     score: number
// } = {
//     name: "Riyan",
//     age: 21,
//     score: 90
// }

// class Students implements Student{
//     private id: number|undefined

//     public name: string = "Riyan";
//     public age: number = 0;
//     public score: number = 0;

//     constructor (id: number, name: string){
//         this.name = name
//         this.id = id
//     }

// }

// [let | const] [namaVariable]: [tipeData | tipeDataLain | ...] = [value]
const message: string = "Hello FSD OCBC 1"

let students: any[] = [
  [ 'Gusti', true, [ 'FSD', 'OCBC' ] ],
  [ 'Ricky', true ],
]

//#### Deklarasi Function


function greetParticipant (name: string, age?: number) {
  console.log(`Hello ${name}! Your age is ${age}.`)
}

greetParticipant('Ricky')


//#### Deklarasi Object

//##### cara 1: declare type langsung


let student: {
  name: string
  age: number | string
  score: number
  address?: string
} = {
  name: 'Budi',
  age: 71,
  score: 100,
  address: "Jl. Merdeka 1234",
}


//##### cara 2: declare type melalui Interface


// kita bisa define interface seperti ini...

interface StudentObject {
  name: string
  age: number | string
  score: number
  address?: string
}

// kemudian kita bisa declare seperti ini...

let anotherStudent: StudentObject = {
  name: "Rara",
  age: "infinite",
  score: 100,
}

// atau kita bisa declare sebagai array...


//#### Deklarasi Class

//ts
// Deklarasi class utama

class Person {
  // name: string;
  // private age: number;

  constructor (protected name: string, private age: number) {
    this.name = name
    this.age = age
  }

  get personAge(): number {
    return this.age
  }
}

// Deklarasi class turunan/anakan

class Student extends Person {
  score: number;
  mentors: string[] = [];

  constructor (name: string, age: number, score: number, firstMentor: string) {
    // pakai super()
    super(name, age)
    this.score = score
    this.mentors.push(firstMentor)
  }

  changeScore (newScore: number) {
    this.score = newScore
  }

  addMentor (mentorName: string) {
    this.mentors.push(mentorName)
  }

  get studentName () {
    return this.name
  }
}

const riyan = new Student('Riyan', 22, 100, 'Arif')

console.log(riyan)

riyan.changeScore(105)
riyan.addMentor('Eas')

console.log(riyan.studentName)