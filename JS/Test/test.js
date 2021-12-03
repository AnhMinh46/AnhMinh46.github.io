// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.
// function max2Number(arr) {
//     let number = arr[0,1,2,3,4]
//     for(let i = 1; i < arr.length; i++) {
//         if(arr[i] > number) {
//             number = arr[i]
//         }
//     }
//     return number
// }
// console.log(max2Number([0,1,2,3,4]));


function max2Number(arr) {
    const data = [0,1,2,3,4];
    data.sort((a, b) => a - b); // sắp đến từ bé đến lớn
    let result = [...new Set(data)];
    // Set sẽ trả về object có unique value (tức sẽ loại bỏ các giá trị giống nhau)
    console.log(result[result.length - 2]); 
  };
  
//  Bài 3 Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó
  let myArray = ['3', '7', '9', '11']
  const getRandomElement = myArray[Math.floor(Math.random() * myArray.length)];
  console.log("random number", getRandomElement);




// Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó
function similarity(arr1, arr2) {
    let array = []
    for (const element of arr1){
        if(arr2.includes(element))
        array.push(element)
    }
    return array
}
console.log(similarity([1, 2, 3], [1, 3, 4]));



// Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
function getCountElement (arr) {
    return arr.reduce(function(a, b){
      a[b] = a[b] + 1 || 1
      return a;
    }, {});
  }
  console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));



