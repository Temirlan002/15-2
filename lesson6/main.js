//es5 and es6


// const a

// console.log(a)
let b;
// console.log(b)

// console.log(c)
var c;

//string expression - интерполяция строк

const first_name = "jack";
const last_name = "barbaro";

// console.log("Full Name:" + first_name + " " + last_name)

console.log(`Full Name:${first_name} ${last_name}`)

const getFullName  = (user) => {
    // return "First Name: " + user.first_name + "\n" + "Last Name: " + " " + user.last_name;
   return `First Name: ${user.first_name}\nLast Name: ${user.last_name}`
}

const user =  {
    first_name: 'Daler',
    last_name: 'Doflamingo top'
}

// console.log(getFullName(user))

//spread operator

const mass = [1,2,3,4,5]
const mass2 = [...mass]

// for(let i = 0; i < mass.length; i++){
//     mass2.push(mass[i])
// }

// console.log(mass2)
const obj = {
    username: "Do",
    age: 40,
    last_name: "Flamingo",
    full_name: 'Daler Mingo'
}

const obj2 = {...obj}
// console.log(obj2)

//деструктуризация

const props = {
    onSubmit: ()=> {
        console.log("Submit")
    },
    data: [
        {
            key: "value"
        },
        {
            key1: 'value1'
        },
        {
            key2: 'value2'
        }
    ]
}
// console.log(props.data[2].key2)

const {data, onSubmit} = props

// console.log(data)

// onSubmit()

console.log(4 ** (1/2));

console.log(8 ** (1/3));

// console.log(20 + 20 * 17 / (1/2));

console.log(40 + 40 * 18 / (1/3))

console.log(40 % 3)

