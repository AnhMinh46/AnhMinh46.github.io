console.log("Xin chào");

// Khai báo biến

let number 
console.log(number);

number = 10
console.log(number);

// vừa khai báo biến vừa khởi tạo giá trị''
let email  = "anhminh04061999@gmail.com";

// Khai báo biện sử dụng const
const pi = 3.14;
console.log(pi);

// pi = 4;

// kiểm tra dữ liệu của 1 biến
console.log(typeof number)
console.log(typeof email);

let age;
console.log(typeof age);

age = 30;
console.log(typeof age);

age = "40";
console.log(typeof age);







// Chữ, số, _, $
// Ký tự đầu tiên không được là số, nên là Chữ
// Co phân biệt hoa, thường 
// Không trùng với từ khóa
// Nên viêt theo dạng:

// // Kiểu dữ liệu: - undefined
//                  - number
//                  - String  

// String
let strEmpty ="";

let firstName ="Nguyễn";
let lastName ="An";
let fullName = firstName + " " + lastName;
console.log(fullName);


let message = "\"Hà Nội\" hôm nay trời đẹp lắm"
console.log(message);


// Template string
// ``
// Cho phép chuyển biến, biểu thức, giá trị, ...

let message1 = `"Hà Nội" hôm nay trời đẹp lắm`
console.log(message1);

let year = 1990
let text = `Xin chào ${fullName}. Năm nay ${2021 - year} tuổi`
console.log(text);


// Number
let num1 = 10
let num2 = 3

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);
console.log(num1 ** 5);



// Math object
// Math.min, Math.max, Math.round(), floor(), cell(), random()
console.log(Math.PI)


// Kêt hợp string + number
console.log("Hello" + 1);
console.log("4" - 1); 
console.log("4" -"1");

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log(undefined + 1);

let a = 1
let b = 22
let name = `John`;

alert(`1 + 2 = ${1 + 2}`);





