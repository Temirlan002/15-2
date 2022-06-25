// function sayHello() {
//     console.log("Hello")
// }
//
// sayHello();

// function getFullName(user, age) {
//     if(age < 18){
//         alert("Close")
//     }else{
//         alert(user.first_name + " " + user.last_name + " " + "Open")
//     }
// }
//
// const user = {
//     first_name: "John",
//     last_name: "Barbaro"
// }
//
// const age = prompt("Сколько вам лет?")
//
// getFullName(user, age)

// const anonym = function (users) {
//     console.log(user, users)
// }
//
// anonym()
//

// function numbers(number1, number2) {
//     if(number1 > number2){
//         console.log("Первое больше")
//     }else if(number2 > number1){
//         console.log("Второе  больше")
//     } else {
//         console.log("они равны")
//     }
// }
//
// const number = {
//     number1: prompt("Число?"),
//     number2: prompt("Число?")
// }
//
// numbers(number.number1, number.number2)


// function tr() {
//     let line = "*"
//     while(line.length < 7){
//         console.log(line)
//         line += "*"
//     }
// }
//
// tr()

const input = document.getElementById("input")
const button = document.getElementById("button")

button.onclick = function () {
    console.log(input.value)
}