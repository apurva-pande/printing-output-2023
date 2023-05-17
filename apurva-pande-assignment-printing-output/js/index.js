// Task 1

let a = 3;
let b = 5;
let c;

// alert( "description of alerted_value: " + alerted_value );

let output = `
let a = 3; \n
let b = 5; \n
let c;
----------

a + b = ${a+b}
a - b = ${a - b}
a * b = ${a * b}
a / b = ${a / b}
a % b = ${a % b}
a += b : ${a += b}
a -= b : ${a -= b}
a *= b : ${a *= b}
a /= b : ${a /= b}
a %= b : ${a %= b}
a == b : ${a == b}
a != b : ${a != b}
a > b : ${a > b}
a < b : ${a < b}
!a && !c : ${!a && !c}
!a || !c : ${!a || !c}
`;

alert (output);

/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/

// Task 2

// Declare the variable first_name and assign it with the value of your first name;

let first_name = "Apurva";
// Declare the variable last_name and assign it with the value of your last name;

let last_name = "Pande";
// Declare the variable email and assign it with the value of your email;

let email_id = "pand0085@algonquinlive.com";
// Declare the variable output;

let output2;

// Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";

output2 = `My name is ${first_name} ${last_name}. You can contact me at ${email_id}.`;
// Assign output with gotten expression;

// Alert output.

alert(output2);