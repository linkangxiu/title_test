const fs = require("fs");
// fs.readFile("./01-promise.txt", (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })

//promise 形式
let p = new Promise((resolve, rejects) => {
    fs.readFile("./01-promise.txt", (err, data) => {
        if (err) rejects(err)//出错调用rejects
        resolve(data);//没错调用resolve
    })
})

// 调用.then方法
p.then(value => { 
    console.log(value.toString());
 }, reason => {
    console.log(reason.toString());
})