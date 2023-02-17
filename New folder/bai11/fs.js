const fs = require('fs')


fs.readFile('./test.txt', function (err, data) {
    if (err) throw err;
    console.log('1',data.toString());
});

const data = fs.readFileSync('./test.txt',
            {encoding:'utf8'});
console.log('2',data);

// readFile bất đồng bộ, nên sẽ log ra dòng trên trước rồi mới log ra nội dung file
// thay readFile bằng readFileSync
