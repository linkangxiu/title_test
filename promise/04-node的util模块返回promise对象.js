//引入util模块
let util = require("util");
let fs = require("fs");
let readFile = util.promisify(fs.readFile);

readFile("./01-promise.txt").then(v => {
    console.log(v.toString());
}, r => {
    console.log(r);
})