const readlineSync = require('readline-sync');
const temp = require('shortid');
const fs = require('fs');

let indexSex = ['male', 'female'];
const showMenu = () => {
    console.log('     Student Managerment ');
    console.log('===============================');
    console.log(' 1.Show all student');
    console.log(' 2.Create student and return Menu');
    console.log(' 3.Delete 1 student');
    console.log(' 4.Delete n student');
    console.log(' 5.Edit student');
    console.log(' 6.Find student by name');
    console.log(' 7.Find student thu khoa ');
    console.log(' 8.Find student bi diem kem ');
    console.log(' 9.Sort Student by name');
    console.log(' 10.Sort Student by diem trung binh tang dan');
    console.log(' 11.Sort Student by age asc');
    console.log(' 12.Exit');
};
showMenu();

let chose = readlineSync.question('Your chose ?');
let studenStr = '';
try {
    const dataStr = fs.readFileSync('./data.txt', 'utf8');
    var studentJSON = JSON.parse(dataStr);
} catch (err) {
    console.error(err);
}

const saveFile = () => {
    studenStr = JSON.stringify(studentJSON);
    fs.writeFileSync('./data.txt', studenStr, 'utf8');
};

const createStudent = () => {
    let name = readlineSync.question('name?');
    let age = readlineSync.question('age?');
    let sex = readlineSync.keyInSelect(indexSex, 'sex? [0: male, 1: female]');
    let diemIn = readlineSync.question('diem vao? ');
    let diemAv = readlineSync.question('diem trung binh? ');
    studentJSON.push({
        id: temp.generate(),
        name: name,
        age: age,
        sex: indexSex[sex],
        diemIn: diemIn,
        diemAv: diemAv,
    });
    saveFile();
};
const deleteStudentById = () => {
    const id = readlineSync.question('What id?');
    const filterWithoutId = studentJSON.filter((i) => i.id != id);
    studentJSON = filterWithoutId;
    saveFile();
};
const deleteNStudentById = () => {
    const ids = readlineSync.question('Please enter the ids separated by space ');
    // const arrIds = ids.trim();
    const arrIds = ids.split(' ');
    for (let n = 0; n < arrIds.length; n++) {
        const filterWithoutId = studentJSON.filter((i) => i.id == arrIds[n]);
        if (filterWithoutId.length == 0) {
            console.log("khong ton tai sinh vien voi id: ", arrIds[n]);
        } else {
            const filterWithoutId2 = studentJSON.filter((i) => i.id != arrIds[n]);
            studentJSON = filterWithoutId2;
            saveFile();
        }
        // const filterWithoutId = studentJSON.filter((i) => i.id != id);
    }
    // studentJSON = filterWithoutId;
    // saveFile();
};
const editStudentById = () => {
    const idEdit = readlineSync.question('What id do you want edit?');
    let indexId = studentJSON.findIndex((i) => i.id === idEdit);
    if (indexId >= 0) {
        const nameEdit = readlineSync.question('Name? ');
        const ageEdit = readlineSync.question('age? ');
        let sexEdit = readlineSync.keyInSelect(
            indexSex,
            'sex? [0: male, 1: female]',
        );
        const diemInEdit = readlineSync.question('diem vao truong? ');
        const diemAvEdit = readlineSync.question('diem trung binh? ');
        const newStudent = {
            id: idEdit,
            name: nameEdit,
            age: ageEdit,
            sex: indexSex[sexEdit],
            diemIn: diemInEdit,
            diemAv: diemAvEdit,
        };

        studentJSON.splice(indexId, 1, newStudent);
        saveFile();
    } else {
        console.log('Không tìm thấy Id');
    }
};
const findStudentByName = () => {
    const name = readlineSync.question('What name?');
    const filterName = studentJSON.filter((i) => i.name == name);
    console.log(filterName);
};

const findStudentTop = () => {
    const newSortDiem = studentJSON.sort((a, b) => {
        return a.diemIn - b.diemIn;
    });
    const arr = newSortDiem;
    console.log('thu khoa vao truong: ', arr[arr.length-1]);

};

const findStutdentBad = () => {
    const filterStudentBad = studentJSON.filter((i) => {
        return i.diemAv < 4});
    console.log(filterStudentBad);
};

const sortStudentByNameASC = () => {
    const newSortName = studentJSON.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    console.log(newSortName);
};
const sortStudentByAgeASC = () => {
    const newSortAge = studentJSON.sort((a, b) => {
        return a.age - b.age;
    });
    console.log(newSortAge);
};

while (true) {
    switch (parseInt(chose)) {
        case 0:
            showMenu();
            chose = readlineSync.question('Your chose ?');
            break;
        case 1:
            console.log(studentJSON);
            chose = 0;
            break;
        case 2:
            createStudent();
            chose = 0;
            break;
        case 3:
            deleteStudentById();
            chose = 0;
            break;
        case 4:
            deleteNStudentById();
            chose = 0;
            break;
        case 5:
            editStudentById();
            chose = 0;
            break;
        case 6:
            findStudentByName();
            chose = 0;
            break;
        case 7:
            findStudentTop();
            chose = 0;
            break;
        case 8:
            findStutdentBad();
            chose = 0;
            break;
        case 9:
            sortStudentByNameASC();
            
            chose = 0;
            break;
        case 10:
            sortStudentByDiemAv();
            
            chose = 0;
            break;
        case 11:
            sortStudentByAgeASC();
            
            chose = 0;
            break;
        case 12:
            const string = 'abc cde kkkk       '
            const stringconvert = string.trim();
            const splitString = stringconvert.split(' ');
            console.log(splitString);
            // process.exit();
        default:
            return;
    }
}
