const temp = require('shortid');// khai bao su dung thu vien shordid
// sự khác nhau giữa require và import
// require: những thư viện ở phía local
// import: những thư viện cần kéo về
// dùng chung k sao :))
// ES5 trở lên cho phép 'import', nên ko bắt buộc phải dùng 'require', dùng cả 2 đều được
// sau khi cài thư viện, nó lấy hết source code thư viện vào file node_modules
// => nếu push code lên github thì phải để ý ko nhanh đầy
//=> cách tránh: tạo 1 file '.gitignore' bên trong ghi "/node_modules"
// có nghĩa là tôi bỏ thư mục node_modules, ko cho lên trên git




console.log(temp.generate()); // auto tạo ra 1 short id ngẫu nhiên

///example
const products = [
    {id: temp.generate(), name: 'iphone'},
    {id: temp.generate(), name: 'samsung'},
]
console.log(products);


// vd sử dụng thư viện 'format-money-js'
const { FormatMoney } = require('format-money-js');

const fm = new FormatMoney({
  decimals: 2
});

console.log(fm.from(12345.67, { symbol: '$' })); // return string: $12,345.67
console.log(fm.un('€12,345;67')); // return number: 12345.67