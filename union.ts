// In some cases we don't know the actual datatype of a variable in that case unions are helpful for us. We use "|" this symbol for union.

var userCredential: string | number = 56789; // Now this variable is compatible to store the number as well as string
userCredential = "User Name"; // It won't give error in string.
// userCredential = true; // Now it is giving error that boolean is not allowed.

// Union in Array.

// There will be two cases:-

// Case 1: Don't know the datatype of values that will be stored in the array.
var ranking: number[] | string[] = [1, 2, 3, 4, 5, 6];
ranking = ["first", "second", "third"];

// Case 2: When we need to store the mix value in a single array.
var multiValue: (number| string)[] = ["Name",123456789]  // Now we will be able to store the values of both datatype i.e string and number.
