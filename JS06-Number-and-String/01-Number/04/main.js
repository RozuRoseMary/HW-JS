// - จงเขียนฟังก์ชันในการแปลงตัวเลข โดยให้ผลลัพธ์เป็นตัวเลขที่มีทศนิยม 2 ตำแหน่ง
// - หากตัวเลขที่ต้องการแปลงไม่มีจุดทศนิยมหรือมีทศนิยมไม่ถึง 2 ตำแหน่งให้เติมเลข 0 ต่อท้ายจนได้ทศนิยม 2 ตำแหน่ง
// - หากตัวเลขที่ต้องการแปลงมีจุดทศนิยมมากกว่า 2 ตำแหน่งให้ปัดตัวเลขตั้งแต่หลังจุดทศนิยมตำแหน่งที่ 2 ทิ้งให้หมด
// - เช่น แปลง 10 ต้องได้ 10.00, แปลง 5.1 ต้องได้ 5.10, แปลง 3.1289 ต้องได้ 3.12

// let number = (num) => console.log(num.toFixed(2));
let number = (num) => console.log(Math.floor(Math.ceil(num * 100)).toFixed(2));

number(10.0);
number(5.1);
number(5.1);
number(3.1289);
