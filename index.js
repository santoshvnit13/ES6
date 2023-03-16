//promise
let p=new Promise((resolve,reject)=>{
    let a=1+2
    if (a==2){
        resolve("success")
    }
    else{
        reject("failed")
    }
})
p.then((message)=>{
    console.log("this is "+message)
})
.catch((message)=>{
    console.log("this is "+message)
})

//async, await 

let asynchronous=async()=>{
    let x= await fetch("https://jsonplaceholder.typicode.com/users")
    let data=await x.json()
    console.log(data)
}

asynchronous()

//try, catch


let asynchronous1=async()=>{
    try{
        let x= await fetch("https://jsonlaceholder.typicode.com/users")
    let data=await x.json()
    console.log(data)
    }

    catch(error){
        console.log(error)
    }
    
}
asynchronous1()


// string methods

 //trim()
 const greeting = "   Hello world!  "
console.log(greeting)
console.log(greeting.trim())

//slice()
const text = "The quick brown fox"
console.log(text.slice(0, 3))
console.log(text.slice(2, 3))

//toUpperCase()
const text1 = "The quick brown fox"
console.log(text1.toUpperCase())

//toLowerCase()
const text2 = "Learn JavaScript"
console.log(text2.toLowerCase())

//split()
const str = "He-is-a-good-boy"
const words = str.split("-")

console.log(words)

//replace()
const str2 = "Welcome to Hyderabad"
const words2 = str2.replace("Hyderabad", "Guntur")

console.log(words)

//includes()
const str3 = "Learn 4.0 Technologies"
const word = str3.includes("Tech")
const number = str3.includes("5.0")

console.log(word)
console.log(number)

//concat()
const str4 = "Hello"
const str5 = "World"
console.log(str4.concat(str5))
console.log(str5.concat(" Pavan", ". Have a nice day."))
// indexOf()
const str6 = "Building Global Startups"
console.log(str6.indexOf("Global"))
console.log(str6.indexOf("up"))

//startsWith()
const str7 = "World-class Products"
console.log(str7.startsWith("rld"))
console.log(str7.startsWith("World"))

//endsWith()
const str8 = "How are you?"
console.log(str8.endsWith("you?"))
console.log(str8.endsWith("re"))

//toString()
const number1 = 46
const newNumber = number1.toString()

console.log(newNumber)
console.log(typeof newNumber)

//substring()
const str9 = "I am learning JavaScript"
console.log(str9.substring(2, 9))
console.log(str9.substring(6))

//Length
const str10 = "Upgrade to CCBP Tech 4.0 Intensive"
console.log(str10.length)