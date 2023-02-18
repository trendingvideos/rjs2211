var readlineSync = require('readline-sync');
var fs = require('fs');

var arrStudent = [];
var showMenu = function () {
  arrStudent = JSON.parse(readstd());
  console.log('    Student Managerment  \n ================================');
  console.log('1.Show all students');
  console.log('2.Create student and return Menu');
  console.log('3.Delete student');
  console.log('4.Edit student');
  console.log('5.Find student by name');
  console.log('6.Sort student by name ascending');
  console.log('7.Sort student by age ascending');
  console.log('8.Exit');

}
// let studentFile = fs.readFileSync('./student.txt')
var readstd = function () {
  const data = fs.readFileSync('./student.txt', { encoding: 'utf8' });
  // console.log('show all student....\n', JSON.parse(data));
  return data;

}
var update = function () {
  fs.writeFileSync("./student.txt", JSON.stringify(arrStudent), (err) => {
    if (err)
      console.log(err);
    else {
      console.log("saved!\n");
    }
  });
}

function function1_showAll() {
  const data = readstd();
  console.log('show all student....\n', JSON.parse(data));
}
var function2_add = function () {
  let name1 = readlineSync.question('name?');
  if (findStudent(name1) < 0) {

    let age1 = readlineSync.question('age?');
    let sex1 = readlineSync.question('sex? [1] male [2] female ');
    let sex2 = '';

    if (sex1 == 1) {
      sex2 = 'male';

    } else if (sex1 == 2) {
      sex2 = 'female';
    } else sex2 = '';
    data = {
      name: name1,
      age: age1,
      sex: sex2,
    };
    arrStudent.push(data);
    if (update())
      console.log('added ')
  } else {
    console.log('ten hs bi trung lap ');
  }
}
var function3_delete = function () {
  let std = readlineSync.question('nhap ten sv muon delete? ');
  const arrDeleted = arrStudent.filter(function (item, index) {
    return item.name != std;
  });
  if (arrDeleted.length == arrStudent.length) {
    console.log('khong co hs muon xoa');
  }
  arrStudent = arrDeleted;

  update();

}
var function4_edit = function () {
  let std = readlineSync.question('nhap ten sv muon edit? ');
  index = findStudent(std);
  if (index >= 0) {
    age1 = readlineSync.question('age? ');
    sex1 = readlineSync.question('sex? [1] male [2] female? ');
    if (sex1 == 1) {
      sex2 = 'male';

    } else if (sex1 == 2) {
      sex2 = 'female';
    }

    arrStudent[index].age = age1;
    arrStudent[index].sex = sex2;

    update();

  } else {
    console.log('khong ton tai sv muon sua');
  }

  console.log('Edited ', arrStudent);
}
var findStudent = function (x) {
  for (let i = 0; i < arrStudent.length; i++) {
    if (arrStudent[i].name == x) {
      return i;
    }
  }
  return -1;
}

var function5_find = function () {
  let std = readlineSync.question('nhap ten sv muon tim? ');
  const index = findStudent(std);
  if (index >= 0) {
    console.log('thong tin hs: ', arrStudent[index]);
  } else {
    console.log('khong ton tai hs co ten: ', std);
  }

}
var function6_sortByName = function () {
  const newSortName = arrStudent.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  console.log(newSortName);
}
var function7_sortByAge = function () {
  const newSort = arrStudent.sort((a, b) => {
    return a.age - b.age;
  });
  console.log(newSort);
}
var function8_exit = function () {

}
/// main

while (true) {
  showMenu();
  const chose = readlineSync.question('your chose? ');
  switch (chose) {
    case "1":
      function1_showAll();
      break;
    case "2":
      function2_add();
      break;
    case "3":
      function3_delete();
      break;
    case "4":
      function4_edit();
      break;
    case "5":
      function5_find();
      break;
    case "6":
      function6_sortByName();
      break;
    case "7":
      function7_sortByAge();
      break;
    case "8":
      console.log('Exited!!!');
      return;
    default:
      return;
  }
}

