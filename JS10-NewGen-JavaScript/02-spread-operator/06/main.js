// จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัวi

let cloneArray = (...arr) => {
  console.log([...arr]);
};
cloneArray(1);
cloneArray(1, 2, 3);
