//Bài 1. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần.
function saoChep10lan(string) {
    let totalstring = ''
    for (let i = 1; i <= 10; i++) {
    totalstring = totalstring + string 
}
    return totalstring
}
console.log(saoChep10lan('a'));



// Bài 2. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'
function saoChep(string) {
    let totalString = string
    for (let i = 1; i < 10; i++) {
    totalString = totalString + "-" + string 
}
    return totalString
} 
console.log(saoChep('a'));



// Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString('a', 5) => Kết quả trả về là 'a-a-a-a-a'
function saoChepNLan(string,n)  {
let totalstring = ''
    for (let i = 1; i <=n ; i++) {
    if (i === n) {
        totalstring = totalstring + string 
    break;
}
        totalstring = totalstring + string + "-" 
}
    return totalstring
} 
console.log(saoChepNLan('a', 6));


// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
let totalNumber = 0

for (let y = 1; y <= 100; y++) {
if (y % 5 == 0)
    totalNumber = totalNumber + y;
}
console.log(totalNumber);



// Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
// V= 4/3*pi*r^3
function theTich(r) {
    let V = 4/3 * Math.PI * r * r * r;
    return V
}
console.log(theTich(6));



// Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với
// tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
// Note : Kết quả xuôi và ngược là như nhau
// Ví dụ :
// sum(3,8) = 22
// sum(8,3) = 22

function tongSo(a,b) {
    let S = 0
    if (a < b) {
        S = (a + b) * (b - a + 1) / 2 - a - b;
    } 
    if (a > b){
        S = (a + b) * (a - b + 1) / 2 - a - b;
    }
    return S
}
console.log(tongSo(8, 3));




// Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function soNguyenTo(x) {
    if (x < 2) {
        return false;
    }
    for (let i = 2; i <= x / 2; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(soNguyenTo(2))
console.log(soNguyenTo(0))



// Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham
// số truyền vào.
function sum(y) {
    let sum = 0;
    for (let i = 0; i <= y; i++) {
        if (y >= 2) {
            sum += i;
        }
    }
    return sum;
}
console.log(sum(7))
console.log(sum(5))




// Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function uocSo(n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            sum += i
        }
    }
    return sum;
}
console.log(uocSo(10))


