// Callback practice
let my_Function = (number) => {
    return (number * number);
}

let Callback = (value) => {
    console.log(value);
}

// Invoking
Callback(my_Function(100));