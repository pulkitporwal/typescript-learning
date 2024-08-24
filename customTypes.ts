// Typescript provide us special keyword to define our custom types.

type UserInfo = {
    readonly __id : string; // if we using 'readonly' property then we can only assign the value one time. The updation can't be done in the variable.
    name: string;
    email: string;
    phoneNumber: number;
    age: number;
    isPaidUser: boolean ;
    creditCardDetails?: string
}

const pulkitporwal : UserInfo = {
    __id : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    name : "Pulkit Porwal",
    email : "pulkitporwal.brn@gmail.com",
    phoneNumber: 6375114009,
    age: 17,
    isPaidUser: false
}

console.log(pulkitporwal)


export {};
