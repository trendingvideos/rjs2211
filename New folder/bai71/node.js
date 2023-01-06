console.log('hellooooo');
//cu phap function kieu moi
function run() {
    console.log("day la function kieu cu")
}
let a = 4;
let b = -2;
let c = -6;

let delta = b*b - 4*a*c;
console.log(delta);
if(delta < 0) {
    console.log('phuong trinh vo nghiem');
} else if (delta == 0) {
    let x = (-b)/(2*a)
    console.log('phuong trinh co nghiem kep la ' + x)
} else {
    let x1 = ((-b) + Math.sqrt(delta))/(2*a);
    let x2 = ((-b) - Math.sqrt(delta))/(2*a);
    console.log('phuong trinh co 2 nghiem la ' + x1 + ' va ' + x2);
}