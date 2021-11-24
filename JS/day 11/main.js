// Switch case ví dụ
// let money = 30000

// switch(money) {
//     case 12000:
//     case 20000:
//     case 30000: {
//         console.log("Cafe sữa");
//         break;
//     }
//     case 10000: {
//         console.log("Cafe đá");
//         break;
//     }
//     case 8000: {
//         console.log("Sting dâu");
//         break;
//     }
//     case 2000: {
//         console.log("Trà đá");
//         break;
//     }
//     default: {
//         console.log("Không có đồ uống nào phù hợp");
//         break;
//     }   
// }




// // Bài tập 1:
// let day = 6

// switch(day) {
//     case 0: {
//         console.log("Hôm nay là chủ nhật");
//         break;
//     }
//     case 1: {
//         console.log("Hôm nay là thứ hai");
//         break;
//     }
//     case 2: {
//         console.log("Hôm nay là thứ ba");
//         break;
//     }
//     case 3: {
//         console.log("Hôm nay là thứ tư");
//         break;
//     }
//     case 4: {
//         console.log("Hôm nay là thứ năm");
//         break;
//     }
//     case 5: {
//         console.log("Hôm nay là thứ sáu");
//         break;
//     }
//     case 6: {
//         console.log("Hôm nay là thứ bảy");
//         break;
//     }
//     default: {
//         console.log("Không có ngày nào phù hợp");
//         break;
//     }
// }




// // Bài tập 2:
// let month = 6

// switch(month) {
//     case 1: 
//     case 2:
//     case 3: {
//         console.log("Mùa Xuân");
//         break;
//     }
//     case 4:
//     case 5:
//     case 6: {
//         console.log("Mùa Hạ");
//         break;
//     }
//     case 7:
//     case 8:
//     case 9: {
//         console.log("Mùa Thu");
//         break;
//     }
//     case 10:
//     case 11:
//     case 12: {
//     console.log("Mùa Đông");
//     break;
//     }
//     default: {
//         console.log("Không có mùa nào")
//     }
// }




// // Vòng lặp: sử dụng để thực thi một đoạn code lặp đi lặp lại một số lần nhất định
// - Một cố vòng lặp trong JS:
//     + For 
//     + While 
//     + Do/while 
//     + ForEach 

// for (let day = 1; day <= 30; day = day + 1) {
//     console.log(`Ngày ${day} thức dậy lúc 5:00`);
// }

// Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày vào các ngày lẻ

// for (let day = 1; day <= 30; day = day + 1) {
//     if (day % 2 == 1)
//     console.log(`Ngày ${day} thức dậy lúc 5:00`);
// }


// for (let day = 1; day <= 30; day = day + 2) {
//     console.log(`Ngày ${day} thức dậy lúc 5:00`);
// }

// Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày cách 7 ngày nghỉ 1 lần


// for (let day = 1; day <= 30; day = day + 1) {
//     if (day % 7 == 0) {
//     console.log("Nghỉ");
//     continue;
// }

// console.log(`Ngày ${day} thức dậy lúc 5:00`);
// }



// Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày Đến ngày 20 chán quá nên nghỉ

// for (let day = 1; day <= 30; day = day + 1) {
//     if (day == 20) {
//     console.log("Chán quá. Nghỉ thôi");
//     break;
// }
// console.log(`Ngày ${day} thức dậy lúc 5:00`);
// }








// Tiết kiệm tiền 

// Trước khi tiết kiệm thì số tiền trong ví = 0
// let totalMoney = 0

// Thực hiện tiết kiệm trong 10 ngày, mỗi ngày 100.000
// for (let day = 1; day <= 10; day++) {
//     totalMoney = totalMoney + 100000;
// }

// console.log(totalMoney); 


// Ví dụ 1
// Những ngày chẵn tiết kiệm 200.000, ngày lẻ 100.000
// for (let day = 1; day <= 10; day++) {
//     if (day % 2 == 0)
//     totalMoney = totalMoney + 200000;
//     if (day % 2 == 1)
//     totalMoney = totalMoney + 100000
// }

// console.log(totalMoney); 


// Ví dụ 2
// Tiết kiệm đến ngày số 8 thì hết tiền --> Dừng lại
// for (let day = 1; day <= 10; day++) {
    
//     totalMoney = totalMoney + 100000;
//     if (day == 8);
//     console.log("Dừng");
//     break;
// }
// console.log(totalMoney);





// Tính tổng các số lẻ từ 1 --> 100
// let totalNumber = 0

// for (let y = 1; y <= 100; y++) {
//  if (y % 2 == 1)
//     totalNumber = totalNumber + y;
// }
// console.log(totalNumber);


// Tính tổng các số chia hết cho 3 và 5 trong khoảng từ 0 ->100
// for (let y = 1; y <= 100; y++) {
//     if (y % 3 == 0)
//     if (y % 5 == 0)
//        totalNumber = totalNumber + y;
//    }
//    console.log(totalNumber);


// Chạy vòng lặp từ 0 -> 20
// - Nếu là số chẵn thì in ra : “0 là số chẵn”
// - Nếu là số lẻ thì in ra : “1 là số lẻ”

// for (let y = 0; y <= 20; y++) {
//     if (y % 2 == 0)
//         console.log("0 là số chẵn");
//     if (y % 2 == 1)
//         console.log("1 là số lẻ");
//     }










