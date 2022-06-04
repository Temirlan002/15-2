const a = "a"; // string

let c = 32; // number

const bool = true;
const bool2 = false; // boolean

const obj = {
    key: "value",
    username: "aybek",
    data: {
        first_name: "jack",
        last_name: "Rus"
    }
} //object

// console.log(obj.data.last_name)

const arr = ["Aidana", true, false, 34]; //array
// console.log(arr[2], arr[0], arr[1], arr[3])

// const arr2 = [
//     {
//         key: 'value'
//     },
//     {
//         key: 'value2'
//     },
//     {
//         username: 'value3'
//     }
// ]
// console.log(arr2[2].username)

// const name = prompt("Как вас зовут?")
// console.log("hello " + name)

// const age = alert("вам еще нет 18!")

// const first_number = prompt("Первое число");
// const last_number = prompt("Второе число");

// if(first_number > last_number){
//     console.log("Первое больше")
// } else if(first_number < last_number){
//     console.log("Второе больше")
// } else {
//     console.log('они равны')
// }

// const age = prompt("Сколько вам лет?")
//
// if(age < 18){
//     console.log("Вам нельзя входить! ")
// } else if(age > 18) {
//     console.log("вам можно!")
// } else {
//     console.log("спорно")
// }

// console.log(30 * 40 - 203)
// console.log(-30 * 203)
// console.log(3**4)
// console.log(3 * 20 / 11)
// console.log(20 * 20 / 0 * 10 + 1 / 2)

let obj2 = {
    username: 'john',
    followers: [
        {
            username: 'jack'
        },
        {
            username: "Aybek",
            followers: [
                {
                    username: "jack"
                },
                {
                    username: "joe"
                },
                {
                    username: "john"
                }
            ]
        },
        {
            username: 'joe'
        }

    ]
}
// console.log(obj2.followers[2].username)

// const arr3 = [[[[[[[[[[[[[[[5]]]]]]]]]]]]]]]
// console.log(arr3[0])