/**
 * 
 * @param path 
 */
function readFile(path) {
    return new Promise((resolve, rejectes) => {
        require("fs").readFile(path, (err, data) => {
            if (err) rejectes(err);
            resolve(data);
        })
    })
}

readFile("./01-promise.txt").then(value => { 
    console.log(value.toString());
}, reason => {
    console.log(reason);
})